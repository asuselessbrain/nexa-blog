import BlogDetailsCard from "@/components/ui/BlogDetailsCard";

const page = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const { blogId } = await params;

  const data = await fetch(`http://localhost:5000/blogs/${blogId}`, {
    cache: "no-store",
  });

  const blog = await data.json();

  //   console.log(blog);

  return (
    <div>
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default page;
