import React, { Component, useContext, useEffect, useState } from "react";
import styles from '../styles/Homepage.module.css';
import { Link } from 'react-router-dom';

import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import GoogleIcon from '@mui/icons-material/Google';

import { ReactComponent as TwitterLogo } from'../images/Twitter-logo.svg';

// Developer components

// f7f7ff <img fill="white" style={{ height: '20em' }} src={TwitterLogo} alt="Twitter Logo" /> 

function Homepage() {
	return (
		<div className={styles.main}>

			<div className={styles.leftDiv}><TwitterLogo fill="#f7f7ff" style={{ height: '20em' }}/> </div>


			<div className={styles.rightDiv}>

				<div className={styles.smallLogoDiv}>
					<TwitterLogo fill="#2A4E78" style={{ height: '40px' }}/>
				</div>

				<h1 className={styles.title}>Acontecendo agora</h1>
				<h2 className={styles.subtitle}>Inscreva-se no Twibbers hoje mesmo.</h2>

				<div className={styles.links}>
					{/* <Link  style={{ width : '50%' }}to='/login'><button className={styles.button}>Login</button></Link> */}
					<Button className={styles.buttonLogin} style={{ margin : '5px 0px' ,color : '#F7F7FF', padding : '10px 40px', width : '50%', height : '30px'}} onClick={function(){}} variant="outlined" startIcon={<GoogleIcon/>}>Login with google</Button>
					<Button className={styles.buttonLogin} style={{ margin : '5px 0px' ,color : '#F7F7FF', padding : '10px 40px', width : '50%', height : '30px'}} onClick={function(){}} variant="outlined">Arleady have an account?</Button>
					<div className={styles.hrLookALiKE}></div>
					<Button className={styles.buttonLogin} style={{ margin : '5px 0px', padding : '10px 40px', width : '50%', height : '30px'}} onClick={function(){}} variant="outlined">Create Acoount</Button>
					
				</div>
			</div>
		</div>
	);
}

export default Homepage;