import React from "react";
import Login from "./pages/Login";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import ScrollToTop from "./components/ScrollToTop";
import Home from './pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="/add-todo" element={<AddTodo />} />
            <Route path="/view-todo" element={<Todos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
