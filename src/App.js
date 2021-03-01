import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import appRoutes from './Routes/index';
function App() {
  return (
    <div>
      <Switch>
        {appRoutes.map((prop, key) => (
          <Route
            exact
            path={prop.path}
            component={prop.component}
            key={key}
          />
        ))}
      </Switch>
      <Route exact path="/" render={() => <Redirect to="/" />} />
    </div>

  );
}

export default App;
