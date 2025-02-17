import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";

const HomePage = async() => {
  const data = await fetch('http://localhost:5000/blogs')
  const blogs = await data.json()
  // console.log(blogs);
  return (
    <div className="my-10">
      <LatestBlogs blogs = {blogs} />
    </div>
  );
};

export default HomePage;
