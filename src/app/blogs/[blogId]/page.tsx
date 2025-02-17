import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
import { Blog } from "@/types";

export const generateStaticParams = async () => {
  const data = await fetch(`http://localhost:5000/blogs`);
  const blogs = await data.json();

  return blogs.slice(0, 3).map((blog: Blog) => ({ blogId: blog.id }));
};

const ViewDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const data = await fetch(`http://localhost:5000/blogs/${blogId}`);

  const blog = await data.json();

  //   console.log(blog);

  return (
    <div>
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default ViewDetailsPage;
