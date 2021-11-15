import { Route, Switch } from "react-router-dom";
import Characters from "./pages/Characters";
import Home from "./pages/Home";
import ViewCharacter from "./pages/ViewCharacter";
import Weapons from "./pages/Weapons";
import ViewWeapon from './pages/ViewWeapon'
import Artiacts from "./pages/Artiacts";
import ViewArtiact from "./pages/ViewArtiact";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/characters" component={Characters} exact />
        <Route path="/character/:name" component={ViewCharacter} exact />
        <Route path="/weapons" component={Weapons} exact />
        <Route path="/weapon/:name" component={ViewWeapon} exact />
        <Route path="/artifacts" component={Artiacts} exact />
        <Route path="/artifact/:name" component={ViewArtiact} exact />
        <Route path="/about" component={About} exact />
      </Switch>
    </div>
  );
}

export default App;
