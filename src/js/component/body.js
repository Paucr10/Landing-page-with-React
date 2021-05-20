import React from "react";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";

export function Body() {
	return (
		<div className="container">
			<Jumbotron />
			<div className="d-flex flex-row">
				{}
				<Card image="https://www.barcelo.com/pinandtravel/wp-content/uploads/2017/06/costa-rica-Volc%C3%A1n-Arenal.jpg" />
				<Card image="https://images.squarespace-cdn.com/content/v1/589cdf7937c5811653d0f6c3/1495729806801-8LEAN0CEULNT383R05A9/ke17ZwdGBToddI8pDm48kC7RnaBXPct2mD0_xXaknGQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc8ZOu05fEtN74_xTkhzNbpfdz1yhDBE23zLkVptSmthXhWv8fNPs0AdNIJ4I6McYQ/1647891-377221-155-5-1399-900-1400-900-rc.jpg?format=1500w" />
				<Card image="https://images01.inmotico.com/125/590/1255900000RC/7b40536d83b42608c9d4eb854e57c088.jpg" />
				<Card image="https://cdn.getyourguide.com/img/tour/5848823aac1ee.jpeg/146.jpg" />
			</div>
		</div>
	);
}
