import React from "react";
import "./SelectedPlayer.css";

const SelectedPlayer = ({ player }) => {
	const { name, photo, salary } = player;
	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			<img src={photo} alt="" className="rounded-circle w-25 border-light" />
			<span className="font-weight-bold">{name}</span>
			<span className="font-weight-bold">${salary}</span>
		</li>
	);
};

export default SelectedPlayer;
