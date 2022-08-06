// it the type of response that we got

import { MDXRemoteSerializeResult } from "next-mdx-remote";


export interface ICollectionResponse<T> {
    data: T;
    meta: IResourceMeta;
}

// =================================================================//
// ================ query to get data for categories ==============//

export interface ICategory{
    id: number;
    attributes: ICategoryAttribute;
}

export interface ICategoryAttribute{
    Title: string;
    Slug: string;
}

export interface IResourceMeta{
    pagination: IPagination;
}

export interface IPagination{
    page: number;
    pafeSize: number;
    pageCount: number;
    total: number;
}

// ====================================================================//
// ===================== query to get data for Posts =================//


export interface IPost {
    id: number;
    attributes: IPostsAttribute;
}

export interface IImageData{
    data: {
        attributes:{
            url: string;
            formats:{
                small:{
                    url: string;
                }
            }
        }
    }
}

export interface IAuthor{
    data: {
        attributes:{
            firstname: string;
            lastname: string;
            
            avatar:{
                data: {
                    attributes: {
                        formats:{
                            thumbnail: {
                                url: string;
                            }
                        }
                    }
                }
            }
        }
    }
}

export interface IPostsAttribute{
    Title: string;
    body: string | MDXRemoteSerializeResult;
    Slug: string;
    Image: IImageData;
    createdAt: string;
    author: IAuthor;
    shortDescription: string;
}   


// pagination types
export type TDirection = 1 | -1;

// search interface
export interface IQueryOptions{
    filters: any;
    sort: any;
    populate: any;
    pagination:{
        page: number;
        pageSize: number;
    }
}