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
import Appointment from "./container/Make-an-Appointment/Appointment";
import Login from "./container/Login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Department" exact>
          <Department />
        </Route>
        <Route path="/Doctors" exact>
          <Doctors />
        </Route>
        <Route path="/About" exact>
          <About />
        </Route>
        <Route path="/Contact" exact>
          <Contact />
        </Route>
        <Route path="/Appointment" exact>
          <Appointment />
        </Route>
        <Route path="/Login" exact>
          <Login />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;


{/* <div>
             <Form className='login-form'>
                <h1>
                    <span className='font-weight-bold'>Login Page</span>
                </h1>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type='email' placeholder='Email'></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type='password' placeholder='password'></Input>
                </FormGroup>
                <Button className='btn-lg btn-dark btn-block'>
                    Log in
                </Button>
                <div className='text-center'>
                    <Link>Sign up</Link>
                    <span className='p-2'>|</span>
                    <Link >Forgot password</Link>
                </div>
             </Form>
        </div> */}