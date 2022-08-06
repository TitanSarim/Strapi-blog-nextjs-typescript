import React from 'react'
import { IPost } from '../types';

import Blogcard from './Blogcard';

interface IPropType{
    posts: IPost[];
}

const PostList = ({posts}: IPropType) => {
  return (

    <div className='grid lg:grid-cols-2 grid-gap gap-16 mt-16'>

        {
            posts.map((post) =>{
                return(
                    <Blogcard post={post} key={post.id}/>
                )
            })
        }

    </div>
  )
}

export default PostList