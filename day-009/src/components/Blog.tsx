function Blog() {
  return (
    <div className="">
      <div className="flex justify-center items-center p-4 bg-orange-200 text-neutral-800 max-w-6xl w-full mx-auto border border-t-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto w-full">
          {["Blog Post 1", "Blog Post 2", "Blog Post 3"].map((post) => (
            <div className="bg-neutral-200 text-neutral-800 p-4 rounded-md w-full">
              {post}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
