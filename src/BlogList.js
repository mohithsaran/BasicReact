const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>
            <p>Written by {blog.author}</p>
          </p>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
