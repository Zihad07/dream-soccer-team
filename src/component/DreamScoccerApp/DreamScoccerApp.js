import React, { useEffect, useState } from "react";
import "./style.css";
import playersData from "../../PlayersData/playersJsonData.js";
import Player from "../Player/Player";
import MyTeamInfo from "../MyTeamInfo/MyTeamInfo";
import PlayerList from "../PlayerList/PlayerList";

const DreamScoccerApp = () => {
	const [players, setPlayers] = useState([]);
	const [myTeamPlayers, setMyTeamPLayers] = useState([]);
	useEffect(() => {
		setPlayers(playersData);
	}, []);

	// console.log(players);

	// Action Method
	const handleAddPlayerToTeam = (player) => {
		if (myTeamPlayers.indexOf(player) === -1) {
			setMyTeamPLayers([...myTeamPlayers, player]);
			return;
		}
		alert(`${player.name} is already in your team.`);
	};
	// console.log(myTeamPlayers);
	// End Action Method

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-8 border-right border-info">
					<div className="card-columns">
						{players.map((pl) => (
							<Player
								player={pl}
								addPlayer={handleAddPlayerToTeam}
								key={pl.id}
							></Player>
						))}
					</div>
				</div>
				<div className="col-md-4">
					<div className="card card-body text-center my-2">
						<h2>My Dream Team</h2>
						<MyTeamInfo myTeamPlayers={myTeamPlayers}></MyTeamInfo>
					</div>
					<div className="card card-body text-center my-2">
						<h2>Seleted Player List</h2>
						<PlayerList players={myTeamPlayers}></PlayerList>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DreamScoccerApp;
