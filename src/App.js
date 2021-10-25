import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import "./style/Sass/App.scss";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signUp" component={SignUp} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
