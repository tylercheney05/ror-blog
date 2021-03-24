import { Link } from 'react-router-dom';
const BlogList = ({ blogs }) => {
  return (
    <>
      {
        blogs.map( b => 
          <>
            <Link
              to={{
                pathname: `/blogs/${b.id}`,
                state: { ...b }
              }}>
              {b.title}
            </Link>
            <br />
          </>
        )
      }
    </>
  )
}
export default BlogList;