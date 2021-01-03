import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchResults = () => {
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8010/proxy")
			.then((response) => {
				setJobs(response.data);
				console.log("Returned data", response.data);
			})
			.catch((error) => {
				console.log("The data was not returned", error);
			});
	}, []);

	return <h1>Search-results component</h1>;
};

export default SearchResults;
