import Link from 'next/link';
import React from 'react'
import {IPost} from '../types';
import {formatDate} from '../utils'

import Image from 'next/image'

interface IPropType{
    post: IPost;
}

const blogCard = ({post}: IPropType) => {
  return (
    <div>
        <Link href={`/post/${post.attributes.Slug}`}>
            <h1 className='text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary'>
                {post.attributes.Title}
            </h1>
        </Link>

        <div className='flex items-center my-4'>

            <div className='rounded-lg overflow-hidden flex items-center justify-center mr-2'>
                <Image 
                    src={`http://localhost:1337${post.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
                    height={40}
                    width={40}
                />
            </div>
            

            <span className='text-sm font-bold text-gray-600'>
                {post.attributes.author.data.attributes.firstname}{' '}
                {post.attributes.author.data.attributes.lastname} on &nbsp;

                <span className='text-gray-400 '>
                    {formatDate(post.attributes.createdAt)}
                </span>

            </span>


        </div>

        {/* <div>
        <img
              className='w-full my-12 mb-6 '
               src={`http://localhost:1337${post.attributes.Image.data.attributes.url}`}
                alt={post.attributes.Title}  
                />
        </div> */}

        

        <div className='text-gray-500'>
            {post.attributes.shortDescription.slice(0, 150)} {post.attributes.shortDescription.length > 150 ? ' . . . ' : ' '}
        </div>

    </div>
  )
}

export default blogCard