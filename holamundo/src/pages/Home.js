import React from 'react';
import List from "../components/List.js";
import {itemsNav} from "../service/Api";

const Home = () => {
	return (
		<>
			<header> Mi primera pagina con React</header>
			<nav>
				<List />
			</nav>
			<main>
				<h1>Lo bonito de React</h1>
				<h2>Lo bonito de React</h2>
				<article>
					<h3>Post</h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
				</article>
			</main>
			<footer>
				<span>Copyright 1999-2022 by Sofi</span>
			</footer>
		</>
	);
};

export default Home;