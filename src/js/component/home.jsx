import React from "react";
import SecondsCounter from "./secondscounter.jsx";
import Timer from "./countdown.jsx";


//create your first component
const Home = () => {
	return (
		<div className="App text-center">
			<h1 className="text-center">Counter</h1>
			< SecondsCounter />
			<div className="my-4"><h1>Countdown</h1>
			< Timer />
			</div>
		</div>
	);
};

export default Home;