import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Quiz from './components/game/Quiz'

function App() {
  return (
    <Router>
      <Route path={'/'} exact component={Home}></Route>
      <Route path={'/quiz'} component={Quiz}></Route>
    </Router>
  );
}

export default App;