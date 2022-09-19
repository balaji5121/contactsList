import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Contacts from "./contacts";
export default function App() {
  const list = useSelector((state) => state.contactsList);
  console.log(list);
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Contacts} />
      </Switch>
    </BrowserRouter>
  );
}
