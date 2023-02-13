"use client"
import Link from 'next/link';
import styles from './Notes.module.css';
import CreateNote from './CreateNote';
import axios from "axios"
import { useQuery } from 'react-query';
import { Post } from '@prisma/client';

const getPosts = async () => {
  const data = await axios.get("/api/posts/getPosts");
  return data.data
}
export default function NotesPage() {
  const { data, error, isLoading } = useQuery<Post[]>({
    queryFn: getPosts,
    queryKey: ["posts"],
  })
  if (error) return error
  if (isLoading) return "Loading....."

  return(
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {data?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>

      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, createdAt } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{createdAt}</p>
      </div>
    </Link>
  );
}
