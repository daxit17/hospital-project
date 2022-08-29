import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./container/Home";
import Footer from "./component/Footer/Footer";
import { Route, Router, Switch } from "react-router-dom";
import Department from "./container/Department/Department";
import Doctors from "./container/Doctors/Doctors";
import About from "./container/About/About";
import Contact from "./container/Contact/Contact";
import Login from "./container/Login/Login";
import Medicine from "./container/Medicine/Medicine";
import UseRef from "./container/UseRef/UseRef";
import BookAppointment from "./container/Make-an-Appointment/BookAppointment";
import ListAppointment from "./container/Make-an-Appointment/ListAppointment";
import PublicRouting from "./container/Routing/PublicRouting/PublicRouting";
import PrivateRouting from "./container/Routing/PrivateRouting/PrivateRouting";
import ThemeProvider from "./context/Theme_context";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <ThemeProvider>
            <Header />
            <Switch>
              <PublicRouting path="/" exact component={Home} />
              <PublicRouting path="/Department" exact component={Department} />
              <PublicRouting path="/Doctors" exact component={Doctors} />
              <PublicRouting path="/About" exact component={About} />
              <PublicRouting path="/Medicine" exact component={Medicine} />
              <PublicRouting path="/Contact" exact component={Contact} />
              <PublicRouting path="/UseRef" exact component={UseRef} />
              <PublicRouting path="/Login" exact restricted={true} component={Login} />
              <PrivateRouting path="/BookAppointment" exact component={BookAppointment} />
              <PrivateRouting path="/ListAppointment" exact component={ListAppointment} />
            </Switch>
            <Footer />
          </ThemeProvider>
        </Provider>
      </SnackbarProvider>
    </div>
  );
}

export default App;