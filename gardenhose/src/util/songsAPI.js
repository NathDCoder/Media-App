const Searching = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f847861424msh32d91202402815ep197872jsncbf5be9beb68',
		'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
	}
};
//TO DO: open query for user search (name and track id)
fetch('https://shazam-core.p.rapidapi.com/v1/tracks/youtube-video?name=${}3E&track_id=null', Searching)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  


    
  