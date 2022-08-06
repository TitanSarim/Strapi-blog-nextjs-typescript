import { AxiosResponse } from 'axios';
import type { GetServerSideProps, NextPage } from 'next'
import Head  from 'next/head'
import { useRouter } from 'next/router';
import qs from 'qs';
import React from 'react'
import { Pagination, PostList, Tabs } from '../../components';
import { fetchCategories, fetchPosts } from '../../http';
import { ICategory, ICollectionResponse, IPagination, IPost, IQueryOptions } from '../../types';
import { makeCategory, capitalizaFirstLetter, debounce } from '../../utils';

interface IPropType{
  categories:{
    items: ICategory[],
    pagination: IPagination,
  },

  posts:{
    items: IPost[],
    pagination: IPagination,
  }

  slug: string;
}

// ======================================================================
// ====================================================================== 

const category = ({categories, posts, slug}: IPropType) => {

  const {page, pageCount} = posts.pagination;

  const router = useRouter();
  const {category: categorySlug} = router.query;

  const formatedCategory = () => {
    return capitalizaFirstLetter(makeCategory(slug));
  }

  const handleSearch = (query: string) => {
    router.push(`/category/${categorySlug}/?search=${query}`);
  }


  return (
    <div>

      <Head>
        <title>Strapi Blog {formatedCategory()}</title>
      </Head>

      <div>
        <Tabs categories={categories.items} handleOnSearch={debounce(handleSearch, 500)}/>

      </div>

      <PostList posts={posts.items} />
      <Pagination page={page} pageCount={pageCount} redirectUrl={`/category/${categorySlug}`}/>

    </div>
  )
}

// ====================================================================================

export const getServerSideProps: GetServerSideProps = async ({query}) => {



  const options: IQueryOptions = {
    populate: ['author.avatar'],
    sort: ['id:desc'],
    filters:{
      category:{
        slug: query.category,
      },
    },
    pagination: {
      page: query.page ? +query.page : 1,
      pageSize: 12,
    },
  };

  if(query.search){
    options.filters = {
      Title:{
        $containsi: query.search,
      }
    }
  }

  const queryString = qs.stringify(options);

  const {data: posts}: AxiosResponse<ICollectionResponse<IPost[]>> = await fetchPosts(queryString);

  // rename data as categories
  const {data: categories,}: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories();


  return {
    props:{
      categories:{
        items: categories.data,
        pagination: categories.meta.pagination
      },
      posts:{
        items: posts.data,
        pagination: posts.meta.pagination,
      },
      slug: query.category,
    }
  }

}
// ====================================================================================

export default category
