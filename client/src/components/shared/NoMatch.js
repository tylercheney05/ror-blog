import { Link } from 'react-router-dom';
const NoMatch = () => {
  return (
    <>
      <h2>404 page not found</h2>
      <Link to="/">
        Return Home
      </Link>
    </>
  )
}
export default NoMatch;