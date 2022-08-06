import { serialize } from "next-mdx-remote/serialize";
import { IPost } from "../types";


export const formatDate = (dateString: string): String => {

    const date = new Date(dateString).toLocaleDateString('en-US',{
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',

    });

    return date;

}

// for slug
export const makeCategory = (slug: string): string => {

    if(typeof slug === 'string'){
        return slug.split('-').join(' ');
    }

    return '';
}

export const capitalizaFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// debounce function for search box
export const debounce = (fn:(query: string) => void, timeout = 300) =>{

    let timer: NodeJS.Timeout;
    
    const debounced = (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, timeout);
    };

    return debounced
}

export const serializeMarkDown = async (item: IPost) => {
    const body = await serialize(item.attributes.body as string);

    return {
        ...item,
        attributes:{
            ...item.attributes,
            body,
        }
    }
}