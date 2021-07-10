import React from "react";
import "./MyTeamInfo.css";

const MyTeamInfo = ({ myTeamPlayers }) => {
	const totalBudget = myTeamPlayers.reduce(
		(total, player) => total + player.salary,
		0
	);
	const numberOfPlayer = myTeamPlayers.length;
	return (
		<ol className="list-group list-group-numbered">
			<li className="list-group-item d-flex justify-content-between align-items-start">
				<div className="ms-2 me-auto">
					<div className="font-weight-bold">Total Player</div>
				</div>
				<span
					className="badge bg-primary text-white rounded-pill p-2"
					style={{ fontSize: "1rem" }}
				>
					{numberOfPlayer}
				</span>
			</li>
			<li className="list-group-item d-flex justify-content-between align-items-start">
				<div className="ms-2 me-auto">
					<div className="font-weight-bold">Total Budget</div>
				</div>
				<span
					className="badge bg-primary text-white rounded-pill p-2"
					style={{ fontSize: "1rem" }}
				>
					{totalBudget}
				</span>
			</li>
		</ol>
	);
};

export default MyTeamInfo;
