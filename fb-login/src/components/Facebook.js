import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import PropTypes from "prop-types";

function Facebook(props) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userID, setUserID] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [picture, setPicture] = useState("");

	const componentClicked = () => {
		console.log("clicked");
	};

	const responseFacebook = res => {
		console.log(res);
		setIsLoggedIn(true);
		setUserID(res.id);
		setName(res.name);
		setEmail(res.email);
		setPicture(res.picture.data.url);
	};

	const fbContent = isLoggedIn ? (
		<div
			style={{
				width: "400px",
				margin: "auto",
				background: "#f4f4f4",
				padding: "20px"
			}}
		>
			<img src={picture} alt={name} />
            <h2>Welcome {name}</h2>
            Email: {email}
		</div>
	) : (
		<FacebookLogin
			appId="582136658933552"
			fields="name,email,picture"
			onClick={componentClicked}
			callback={responseFacebook}
		/>
	);

	return <div>{fbContent}</div>;
}

Facebook.propTypes = {};

export default Facebook;
