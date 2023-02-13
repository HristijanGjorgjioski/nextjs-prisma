import styles from '../Notes.module.css';

async function getNote(id: string) {
    // const res = await fetch(
    //     `http://localhost:3003/posts/${id}`,
    //     {
    //         next: { revalidate: 3 }
    //     }
    // )
    // const data = await res.json();
    // console.log(data, 'data')
    // return data[0];
}

export default async function NotePage({ params }: any) {
    // const note = await getNote(params.id);
    // console.log(note, '<== NOTE')

    return (
        <div>
            {/* <h1>notes/{note.id}</h1>
            <div className={styles.note}>
                <h3>{note.title}</h3>
                <h5>{note.content}</h5>
                <p>{note.created}</p>
            </div> */}
        </div>
    )
}