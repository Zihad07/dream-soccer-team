import React from "react";
import "./Player.css";

const Player = (props) => {
	const { id, name, age, nationality, photo: image, salary } = props.player;
	return (
		<div className="card p-3">
			<div className="d-flex align-items-center">
				<div className="image">
					<img src={image} className="rounded-circle" width="100" />
				</div>
				<div className="ml-3 w-100">
					<h4 className="mb-0 mt-0">{name}</h4>{" "}
					<span>Country: {nationality}</span>
					<div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
						<div className="d-flex flex-column">
							{" "}
							<span className="rating">Age</span>{" "}
							<span className="number3">{age}</span>{" "}
						</div>
						<div className="d-flex flex-column">
							{" "}
							<small className="text-success font-weight-bold">
								Salary
							</small>{" "}
							<span className="font-weight-bold">${salary}</span>{" "}
						</div>
					</div>
					<div className="button mt-2 d-flex flex-row align-items-center">
						{" "}
						<button className="btn btn-sm btn-primary w-100 ml-2">
							Add To Your Team
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Player;
