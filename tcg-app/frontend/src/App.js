import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Nav from './components/Nav';
import Form from './components/Form';
import Home from './components/Home';
import UpdateForm from './components/UpdateForm';

function App() {
  return (
    <Router >
    <div className="App">
      <Nav/>
      hello
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={Form} />
      <Route path="/main" component={UpdateForm} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
