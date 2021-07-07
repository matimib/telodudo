import RegisterPlayer from "./RegisterPlayer"
import Game from "./GameComponents/Game"
import Home from "./Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const ReactRouterSetup = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/myapp'>
          <RegisterPlayer />
        </Route>
        <Route path='/game/:table'>
          <Game />
        </Route>
      </Switch>
    </Router>
  )
}

export default ReactRouterSetup
