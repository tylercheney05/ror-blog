const Post = ({ title, body, author, id, deletePost }) => {
  return (
    <>
      <h1>{title}</h1>
      <h3>By: { author }</h3>
      <p>{body}</p>
      <button onClick={() => deletePost(id)}>
        Delete
      </button>
    </>
  )
}
export default Post;