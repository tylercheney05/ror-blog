import { Component } from 'react';
import axios from 'axios';
import BlogList from './BlogList';
class Blogs extends Component {
  state = { blogs: [] }
  componentDidMount() {
    // grab the blogs from db 
    axios.get('/api/blogs')
      .then( res => {
        // set them to state
        this.setState({ blogs: res.data })
      })
      .catch( err => console.log(err))
  }
  addBlog = (blog) => {
    // add in back end 
    axios.post('/api/blogs', { blog })
      .then( res => {
        // add in the state
        const { blogs } = this.state 
        this.setState({ blogs: [ ...blogs, res.data ]})
      })
      .catch( err => console.log(err))
  }
  updateBlog = (id, blog) => {
    // update in back end
    axios.put(`/api/blogs/${id}`, { blog })
      .then( res => {
        // update in state 
        const blogs = this.state.blogs.map( b => {
          if (b.id === id) {
            return res.data
          }
          return b
        })
        this.setState({ blogs })
      })
      .catch( err => console.log(err))
  }
  deleteBlog = (id) => {
    // delete in back end
    axios.delete(`/api/blogs/${id}`)
      .then( res => {
        // delete in the state
        const { blogs } = this.state 
        this.setState({ blogs: blogs.filter( b => b.id !== id )})
      })
      .catch( err => console.log(err))
  }
  render() {
    const { blogs } = this.state
    return (
      <>
        <h1>Blogs</h1>
        <BlogList blogs={blogs} />
      </>
    )
  }
}
export default Blogs;