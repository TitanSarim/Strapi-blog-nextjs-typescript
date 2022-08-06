import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/router';
import { ICategory } from '../types'

import {FiSearch} from 'react-icons/fi'

// ======================

interface IPropType{
    categories: ICategory[];
    handleOnSearch: (query: String) => void;
}

// main
const Tabs = ({categories, handleOnSearch}: IPropType) => {


    const router = useRouter();

    // for active link 

    const isActiveLink = (category: ICategory) => {
        return category.attributes.Slug === router.query.category
    }

    // for search box


  return (
    <div className='my-8 flex items-center justify-between border-b-2 border-gray-100'>
        <ul className='flex items-center'>


            <li className={'mr-6 pb-6 border-b-4  rounded-sm ' + 
                `${ 
                    router.pathname === '/' 
                            ? 'border-b-4 border-primary text-primary font-medium' 
                            : 'border-white text-gray-400 font-medium'
                }`
            }>

                <Link href='/'>
                    Recent
                </Link>

            </li>

            {categories.map((category) =>{
                return(
                    <li 
                        key={category.id}
                        className={'mr-6 pb-6 border-b-4 rounded-sm' + 
                        `${ 
                            isActiveLink(category)
                                    ? 'border-b-4 border-primary text-primary font-medium' 
                                    : 'border-white text-gray-400'
                        }`
                    
                }
                >
                        <Link href={`/category/${category.attributes.Slug}`}>
                        {category.attributes.Title}
                        </Link>
                    </li>
                )
            })}
        </ul>

        
        <div className='flex items-center'>
            
            <FiSearch size={23} className='text-primary'/>
            
            <input 
                onChange={(e) => handleOnSearch(e.target.value)}
                type="text" 
                placeholder='Search'
                className='outline-none px-2 py-1 ml-1'
            />

        </div>


    </div>
  )
}

export default Tabs