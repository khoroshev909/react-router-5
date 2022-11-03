import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard'
import Login from './components/Login';
import Posts from './components/Posts';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Navbar />
        <Switch>
          <Route path="/posts/:postId?" component={Posts} />
          <Route 
            path="/dashboard"
            render={(props) => <Dashboard isAdmin={false} 
            {...props} />} />
          <Route path="/login" component={Login} />
          <Route path="/404" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect from="/admin" to="/dashboard" />
          <Redirect to="/404" />
        </Switch>
    </>
  );
}

export default App;
