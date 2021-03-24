import { Component } from 'react';
import Posts from '../posts/Posts';
class Blog extends Component {
  render() {
    const { id, title, cat } = this.props.location.state
    return (
      <>
        <h1>{title}</h1>
        <p>Category: {cat}</p>
        <p>posts:</p>
        <Posts blogId={id} />
      </>
    )
  }
}
export default Blog;