import React, { Component, useContext, useEffect, useState } from "react";

import axios from 'axios';



function Content(props) {
	return (
		<div>
			{props.children}
		</div>
	);
}

export default Content;