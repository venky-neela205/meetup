import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
