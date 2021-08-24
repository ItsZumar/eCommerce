import "./App.css";
// import Navbar from "./components/Header/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutCZ from "./Pages/AboutCZ";
import CardDetails from "./Pages/CardDetails";
import CardData from "./components/DummyData/DummyData";
import ContactUs from "./Pages/ContactUs";
import FAQs from "./Pages/FAQs";
import Policies from "./Pages/Policies";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/aboutCZ">
            <AboutCZ />
          </Route>
          <Route path="/cardDetails/:id">
            <CardDetails CardData={CardData} />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path="/FAQs">
            <FAQs />
          </Route>
          <Route path="/policy">
            <Policies />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
