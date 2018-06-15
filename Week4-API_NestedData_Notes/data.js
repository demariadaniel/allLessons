const data = {
	numOfResults: 5,
	query: 'metamorphosis',
	results: 
		[
			{
				original_title: 'metamorphosis',
				director: 'franz kafka',
				plot: 'A true account of Jess Wyatts miraculous transformation',
				actors: [
					{name: 'brad pitt'}, 
					{name: 'angelina jolie'}, 
					{name: 'samuel l. jackson'}, 
					{name: 'morgan freeman'}
				]
			},
			{b},			
			{c},			
			{d},			
			{e},			
		]						
  }
  
  // data																---> complete API response
  // data.results												---> array of movies within the response
  // data.results[0]  									---> first movie object in that array
  // data.results[0].original_title			---> title of that movie
  // data.results[0].actors[0].name			---> name of the first actor in the movie

  
	// The server would send it to the front end like this:
  // server:   	{ movie: data.results[0] }
  			
	// ... and the front end would access the movie data like this:
	// frontend: 	movie.original_title