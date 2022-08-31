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

import Feed from "./Feed";
import Login from "./Login";
import Signup from "./Signup";
import Homepage from "./Homepage";

import Header from "./Header";

function App() {
  return (
	<Router>
		<AuthProvider>
		<Header></Header>
			<Routes>
				{/* Private Routes */}
				<Route exact path='/' element={<InternalRoute/>}>
					<Route exact path='/' element={<Feed/>}/>
				</Route>

				{/* Only for logged off users */}

				<Route exact path='/' element={<ExternalRoute/>}>
					<Route exact path="/login" element={<Login/>}></Route>
					<Route exact path="/signup" element={<Signup/>}></Route>
				</Route>

				{/* Public routes */}

				<Route exact path="/home" element={<Homepage/>}></Route>
			</Routes>
		</AuthProvider>
	</Router>
  );
}

export default App;