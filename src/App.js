import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Secrets from './components/Secrets';

function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state)

  function toggleAuthCallBack() {
    dispatch({ type: "TOGGLE" })
  }
  return (
    <div className="App">
      <NavLink to="/" exact>Home</NavLink>
      { auth ? <NavLink to="/secret" exact>Secret</NavLink> : null }
      <button onClick={toggleAuthCallBack}>{ auth ? "Logout" : "Login" }</button>
      <hr />
      <Route path="/" component={Home} exact />
      { auth ? <Route path="/secret" component={Secrets} /> : null }
    </div>
  );
}

export default App;
