import React, { useEffect, useState } from "react";
import "./style.css";
import playersData from "../../PlayersData/playersJsonData.js";
import Player from "../Player/Player";
import MyTeamInfo from "../MyTeamInfo/MyTeamInfo";

const DreamScoccerApp = () => {
	const [players, setPlayers] = useState([]);
	useEffect(() => {
		setPlayers(playersData);
	}, []);
	console.log(players);
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-8 border-right border-info">
					<div className="card-columns">
						{players.map((pl) => (
							<Player player={pl} key={pl.id}></Player>
						))}
					</div>
				</div>
				<div className="col-md-4">
					<div className="card card-body text-center my-2">
						<h2>My Dream Team</h2>
						<MyTeamInfo></MyTeamInfo>
					</div>
					<div className="card card-body text-center my-2">
						<h2>Seleted Player List</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DreamScoccerApp;
