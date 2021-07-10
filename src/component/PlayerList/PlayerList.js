import React from "react";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";
import "./PlayerList.css";

const PlayerList = ({ players }) => {
	let firstListOfHeading = "";
	if (players.length > 0) {
		firstListOfHeading = (
			<li className="list-group-item d-flex justify-content-between align-items-center">
				<span className="badge bg-dark text-white">Image</span>
				<span className="badge bg-dark text-white">Name</span>
				<span className="badge bg-info">Salary</span>
			</li>
		);
	}
	return (
		<React.Fragment>
			<ul className="list-group">
				{firstListOfHeading}
				{players.map((player) => (
					<SelectedPlayer player={player} key={player.id}></SelectedPlayer>
				))}
			</ul>
		</React.Fragment>
	);
};

export default PlayerList;
