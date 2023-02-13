'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from 'react-query';
import toast from "react-hot-toast"
import axios, { AxiosError } from "axios"

export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isDisabled, setIsDisabled] = useState(false)
  const body = { title, content }
  const router = useRouter();
  const queryClient = useQueryClient()
  let toastPostID: string;

  const { mutate } = useMutation(
    async (title: string) =>
      await axios.post("/api/posts/addPost", {
        title,
        content
      }),
    {
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data.message, { id: toastPostID })
        }
        setIsDisabled(false)
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries(["posts"])
        toast.success("Post has been made 🔥", { id: toastPostID })
        setContent('');
        setTitle("");
        setIsDisabled(false)
      },
    }
  )

  const create = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsDisabled(true)
    toastPostID = toast.loading("Creating your post", { id: toastPostID })
    mutate(title)
    setContent('');
    setTitle('');
    router.refresh();
  }

  return (
    <form onSubmit={e => create(e)}>
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" disabled={isDisabled}>
        Create note
      </button>
    </form>
  );
}