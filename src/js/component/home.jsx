import React from "react";

import { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [entrada, setEntrada] = useState([]);
	const [datos, setDatos] = useState(" ");

	useEffect(() => {
		console.log(entrada);
	}, [entrada]);

	return (
		<div className="text-center bg-white container my-3 mt-5">
			<h1>to-do List</h1>
			<div>
				<input
					type="text"
					placeholder="Add to-do list"
					onChange={e => {
						setDatos(e.target.value);
					}}
					onKeyDown={e => {
						//console.log(typeof e.key);
						if (e.key === "Enter" && datos != " ") {
							setEntrada([...entrada, datos]);
							setDatos(" ");
						}
					}}
					value={datos}
				/>

				<div>
					{entrada.map((index, key) => {
						return (
							<>
								<ul className="list-group">
									<li className="list-group-item" key={key}>
										{index}
										<a
											onClick={() => {
												entrada.splice(key, 1);
												setEntrada([...entrada]);
												console.log(entrada);
											}}>
											<i className=" far fa-times-circle mb-3"></i>
										</a>
									</li>
								</ul>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;
