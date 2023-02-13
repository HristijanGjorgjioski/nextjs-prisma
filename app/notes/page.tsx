// import PocketBase from 'pocketbase';
import Link from 'next/link';
import styles from './Notes.module.css';
import CreateNote from './CreateNote';

async function getNotes() {
  // const posts = await fetch('http://localhost:3003/posts')
  // const data = await posts.json();
  // console.log(data, '<== POSTS')
  // return data;
}

export default async function NotesPage() {
  // const notes = await getNotes();
  return(
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {/* {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })} */}
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