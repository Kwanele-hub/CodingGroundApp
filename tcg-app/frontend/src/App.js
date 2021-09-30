import './App.css';
import Nav from './components/Nav';
import UpdateForm from './components/UpdateForm'
import Form from './components/Form'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from './components/Home';






function App() {
  
     
  
  return (
    <Router >
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Form} />
      <Route path="/update" component={UpdateForm} />
      
      </Switch>
    </div>
    </Router>
  );
}


  
  


  




export default App;