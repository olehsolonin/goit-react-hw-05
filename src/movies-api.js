import axios from 'axios';

// https://api.themoviedb.org/3/trending/movie/{time_window}

const myApiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTY0OGJlMmQ2NzBkODYyY2UyZDQyNzMxYzBhY2ViMCIsIm5iZiI6MTcyMTM5OTQwNC43OTgxNzgsInN1YiI6IjY2OWE3NjU0Y2YwNGQ4Nzg3Y2E4MGUzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ym5Bym8K5Xc7BnKQb1way_Y0o11bGl_0bi6_SXPBcj0';

axios.defaults.headers.common['Authorization'] = `Bearer ${myApiKey}`;

// axios.defaults.baseURL = 'https://api.unsplash.com/search';

// export const fetchImages = async (searchReq, page) => {
// 	// const response = await axios.get(`/photos?page=1&query=${searchReq}`);
// 	const response = await axios.get(`/photos`,
// 		{
// 			params: {
// 				query: searchReq,
// 				page: page,
// 				per_page: 5

// 			}
// 		});
// 	return response.data.results;

// };

export const getMovies = async () => {
	const response = await axios.get("https://api.themoviedb.org/3/search/movie?query=Batman");

	return response.data.results;
};

getMovies()
	.then(response => console.log(response))
	.catch(error => console.log(error));
