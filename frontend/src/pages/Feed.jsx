import React, { Component, useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

// Developer components

import Header from "./Header";

function Feed() {
	let {user, authToken} = useContext(AuthContext);

    const [avatar, setAvatar] = useState({});

    const history = useNavigate();

    const changeAvatar = (e) => {
        setAvatar({
            picturePreview : URL.createObjectURL(e.target.files[0]),
            pictureAsFile :  e.target.files[0],
        })
    }

    let upload_avatar = async (e) => {
        e.preventDefault()

        // console.log(avatar)

        const formData = new FormData();

        formData.append("file", avatar.pictureAsFile);
        formData.append("file_preview", avatar.picturePreview);

        console.log(formData.get('file'));

        let url = 'http://127.0.0.1:8000/api/upload_avatar/'

        axios.post(url, formData, {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization':'Bearer ' + String(authToken.access)
            }
        }).then(res => {
            console.log(res.data);
            history('/')
          })
          .catch(err => console.log(err))

    }

	return (
		<div>
			<h1>Hello {user.username}</h1>

            <p>You can create a profile! </p>

            <form onSubmit={upload_avatar} id="upload_image" method="post" encType="multipart/form-data">
                <label>Select image:</label>
                <input type="file" className="form-control" id="img" name="img" onChange={changeAvatar} accept="image/*"/>
                <input type="submit"/>
            </form>

		</div>
	);
}

export default Feed;