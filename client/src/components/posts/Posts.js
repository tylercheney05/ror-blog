import { Component } from 'react';
import axios from 'axios';
import Post from './Post';
class Posts extends Component {
  state = { posts: [] }
  componentDidMount() {
    const { blogId } = this.props
    axios.get(`/api/blogs/${blogId}/posts`)
      .then( res => {
        this.setState({ posts: res.data })
      })
      .catch( err => console.log(err))
  }
  addPost = (post) => {
    const { blogId } = this.props
    axios.post(`/api/blogs/${blogId}/posts`, { post })
      .then( res => {
        const { posts } = this.state 
        this.setState({ posts: [...posts, res.data ]})
      })
      .catch( err => console.log(err))
  }
  deletePost = (id) => {
    const { blogId } = this.props
    axios.delete(`/api/blogs/${blogId}/posts/${id}`)
      .then( res => {
        const { posts } = this.state 
        this.setState({ posts: posts.filter( p => p.id !== id )})
      })
      .catch( err => console.log(err))
  }
  render() {
    const { posts } = this.state
    return (
      <>
        { posts.map( p => 
          <Post key={p.id} {...p} deletePost={this.deletePost} />
        )}
      </>
    )
  }
}
export default Posts