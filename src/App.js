import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./Header/Header";
import Login from "./Login-Form/Login";
import Signin from "./Login-Form/Signin";
import ForgotPassword from "./Login-Form/ForgotPassword";
import AddNewCustomer from "./Customers/AddNewCustomer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/login/add" element={<AddNewCustomer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
