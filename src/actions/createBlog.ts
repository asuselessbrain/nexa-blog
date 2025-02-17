"use server"

import { redirect } from "next/navigation";

export const createBlog = async (data: FormData) => {
  const blog = Object.fromEntries(data.entries());

  const res = await fetch('http://localhost:5000/blogs', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  })

  const blogInfo = await res.json();

  if(blogInfo){
    redirect(`/blogs/${blogInfo.id}`)
  }
  return blogInfo;
};
