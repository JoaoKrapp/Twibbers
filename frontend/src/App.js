import React, { Component } from "react";
import { render } from "react-dom";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Redirect,
  } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

// Import components

import InternalRoute from "./utils/InternalRoute";
import ExternalRoute from "./utils/ExternalRoute";

import Header from "./pages/Header";
import Content from "./pages/Content";
import Feed from "./pages/Feed";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from './pages/Signup';



function App() {
  return (
    <Router>
      <AuthProvider>
		<Header></Header>
        <Routes>

			{/* Only for logged users */}

			<Route exact path='/' element={<InternalRoute/>}>
				<Route exact path='/' element={<Feed/>}/>
			</Route>

			{/* Only for logged off users */}

			<Route exact path='/' element={<ExternalRoute/>}>
				<Route exact path="/login" element={<Login/>}></Route>
				<Route exact path="/signup" element={<Signup/>}></Route>
			</Route>

			{/* Public for everybody */}

			<Route exact path="/home" element={<Homepage/>}></Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;