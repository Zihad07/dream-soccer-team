import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SelectedPlayer.css";

const SelectedPlayer = ({ player, transferPlayer }) => {
	const { name, photo, salary } = player;
	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			<img src={photo} alt="" className="rounded-circle w-25 border-light" />
			<span className="font-weight-bold">{name}</span>
			<span className="font-weight-bold">${salary}</span>
			<span className="font-weight-bold text-danger">
				{"  "}
				<FontAwesomeIcon
					icon={faTimesCircle}
					size="lg"
					onClick={() => transferPlayer(player)}
				></FontAwesomeIcon>
			</span>
		</li>
	);
};

export default SelectedPlayer;
