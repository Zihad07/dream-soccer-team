import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

import DreamScoccerApp from "./component/DreamScoccerApp/DreamScoccerApp";

function App() {
	return (
		<div>
			<h2 className="text-center my-4">Dream Soccer Team</h2>
			<DreamScoccerApp></DreamScoccerApp>
		</div>
	);
}

export default App;
