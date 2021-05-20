import React from "react";

//create your first component
export function Jumbotron() {
	return (
		<div>
			<div className="jumbotron">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet consectetur adipiscing elit.
					Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt
					odit vero aliquid similique quaerat nam nobis illo
					aspernatur vitae fugiat numquam repellat.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Call to action!
					</a>
				</p>
			</div>
		</div>
	);
}
