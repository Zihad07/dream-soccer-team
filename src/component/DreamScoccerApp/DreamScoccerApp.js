import React from "react";
import "./style.css";
import Player from "../Player/Player";

const DreamScoccerApp = () => {
	return (
		<div className="container">
			<div className="col-md-8">
				<Player></Player>
			</div>
			<div className="col-md-4"></div>
		</div>
	);
};

export default DreamScoccerApp;
