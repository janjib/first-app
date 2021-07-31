import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Homepage from './components/Homepage';
import Secondpage from './components/Secondpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
           <Route path='/first-app' exact component={Homepage} />
           <Route path='/first-app/secondpage' exact component={Secondpage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
