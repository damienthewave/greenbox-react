import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import ShopPage from './pages/ShopPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/order" exact component={ShopPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
