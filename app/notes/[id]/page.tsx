"use client"

import { Post } from '@/app/types/Posts';
import axios from 'axios';
import { useQuery } from 'react-query';
import styles from '../Notes.module.css';

type URL = {
    params: {
      id: string
    }
    searchParams?: string
}

async function getPostById(id: string) {
    const data = await axios.get(`/api/posts/${id}`)
    return data.data;
}

export default function NotePage(url: URL) {
    const { data, isLoading, error } = useQuery<Post>({
        queryKey: ["getPostById"],
        queryFn: () => getPostById(url.params.id),
    })
    if (error) return error
    if (isLoading) return "Loading....."

    return (
        <div>
            <h1>notes/{data?.id}</h1>
            <div className={styles.note}>
                <h3>{data?.title}</h3>
                <h5>{data?.content}</h5>
                <p>{data?.createdAt}</p>
            </div>
        </div>
    )
}