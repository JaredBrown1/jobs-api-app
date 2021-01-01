import React from "react";
import Title from "./components/title-component/title-component";
import SearchFilter from "./components/search-filter-component/search-filter-component";
import SearchResults from "./components/search-results-component/search-results-component";

import { Container } from "./App-styles";

function App() {
	return (
		<Container className="App">
			<Title />
			<SearchFilter />
			<SearchResults />
		</Container>
	);
}

export default App;
