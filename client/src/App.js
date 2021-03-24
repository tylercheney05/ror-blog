import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Blogs from './components/blogs/Blogs';
import Blog from './components/blogs/Blog';
// in charge of nav routes 
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/blogs/:id" component={Blog} />
        <Route component={NoMatch} />
      </Switch>
    </>
  )
}
export default App;