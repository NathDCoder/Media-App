export const Searching = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f847861424msh32d91202402815ep197872jsncbf5be9beb68',
		'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
	}
};

fetch('https://shazam-core.p.rapidapi.com/v1/search/multi?query={}3E&search_type=SONGS_ARTISTS')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  


    
  