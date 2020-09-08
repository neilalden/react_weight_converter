import React, { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [grams, setG] = useState(count);
	const [kilograms, setKg] = useState(count);
	const [ounces, setOz] = useState(count);
	const update = (newValue) => {
		// update current value
		setCount(newValue);

		// formula for each convertion
		const g = newValue / 0.0022046;
		const kg = newValue / 2.2046;
		const oz = newValue * 16;

		// update converted values
		setG(g.toFixed(2));
		setKg(kg.toFixed(2));
		setOz(oz.toFixed(2));
	};
	return (
		<div className="App">
			<div className="col-md-6 center-block">
				<h1 className="display-4 text-center">weight converter</h1>
				<form>
					<div className="form-group">
						<input
							type="number"
							className="form-control form-control-lg"
							placeholder="Enter Pounds..."
							onChange={(event) => {
								update(Number(event.target.value));
							}}
						/>
					</div>
				</form>
				<div id="output">
					<div className="card bg-primary mb-2">
						<div className="card-body">
							<h4>Grams: </h4>
							<div id="gramsOutput">{grams}</div>
						</div>
					</div>

					<div className="card bg-success mb-2">
						<div className="card-body">
							<h4>Kilograms: </h4>
							<div id="kgOutput">{kilograms}</div>
						</div>
					</div>

					<div className="card bg-warning mb-2">
						<div className="card-body ">
							<h4>Ounces: </h4>
							<div id="ozOutput">{ounces}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
