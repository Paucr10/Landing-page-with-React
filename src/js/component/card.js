import React from "react";
import PropTypes from "prop-types";

// Aquí van las cards tomadas del bootstrap V4 con le excepción
// que posee prop en el campo src que permite desde el body cambiar los valores del src
// y así reutilizar el componente

export function Card(props) {
	return (
		<div className="container">
			<div className="card">
				<img
					className="card-img-top"
					src={props.image}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet consectetur adipiscing elit.
						Ipsa, ipsam, eligendi.
					</p>
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
}
