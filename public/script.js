// Api for movies[Not working]

// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDM2NTQxYTE5M2FiYTdhMzEyMzEyN2U0YmUyNjhmNiIsInN1YiI6IjY0N2YzY2U0MGZiMzk4MDBjMTI5YzMxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pYG5wJ5Yph8CByPKGWTTIkPPBoMLYxHXKNA5vrfj5-I'
//     }
//   };

//   fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));



// Api for anime[Done]

// const url = 'https://animes5.p.rapidapi.com/';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ea2740d60bmshdcb4413cfaae6d7p1eb327jsn8651aec1c95e',
// 		'X-RapidAPI-Host': 'animes5.p.rapidapi.com'
// 	}
// };

//   fetch(url, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));




// OTT details[Done]

// const url = 'https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'a5b1544b89msh9c68e6ab4fadb9dp1eae0ajsn5eb3eed16905',
// 		'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
// 	}
// };

//   fetch(url, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));



// Netflix Value Error

// const url = 'https://netflix-original-series-top-100-ranked.p.rapidapi.com/uMEJkR/series';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Key': 'ea2740d60bmshdcb4413cfaae6d7p1eb327jsn8651aec1c95e',
// 		'X-RapidAPI-Host': 'netflix-original-series-top-100-ranked.p.rapidapi.com'
// 	},
// 	body: {
// 		key1: 'value',
// 		key2: 'value'
// 	}
// };
//   fetch(url,options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

// try

// const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'a5b1544b89msh9c68e6ab4fadb9dp1eae0ajsn5eb3eed16905',
// 		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
// 	}
// };


//   fetch(url,options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));




// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDM2NTQxYTE5M2FiYTdhMzEyMzEyN2U0YmUyNjhmNiIsInN1YiI6IjY0N2YzY2U0MGZiMzk4MDBjMTI5YzMxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pYG5wJ5Yph8CByPKGWTTIkPPBoMLYxHXKNA5vrfj5-I'
//     }
//   };
  
//   fetch(" https://www.episodate.com/api/most-popular?page=1")
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));



// Anime
var anime = document.getElementById("anime")
fetch("data.json")
    .then(response => response.json())
    .then(response => {
        for (let index = 0; index < response.animes.length; index++) {
            // console.log("Name :- ",response.animes[index].title)
            anime.innerHTML += `
            <a href="${response.animes[index].id}" >
            <img src="${response.animes[index].main_picture.large}" alt="">
            </a>
`



        }
    })


    .catch(err => console.error(err));

// Movie

    var movie=document.getElementById("movie")
fetch("data.json")
    .then(response => response.json())
    .then(response => {
        for (let index = 0; index < response.movies.length; index++) {
            // console.log("Name :- ",response.movies[index].title)
            movie.innerHTML += `
           
        <img src="${response.movies[index].imageurl}" alt="">
        

`
        }
    })
    var movie2=document.getElementById("movie2")
fetch("data.json")
    .then(response => response.json())
    .then(response => {
        for (let index = 0; index < response.movies2.length; index++) {
            // console.log("Name :- ",response.movies[index].title)
            movie2.innerHTML += `
           
        <img src="${response.movies2[index].image}" alt="">
        

`
        }
    })


// series

var series=document.getElementById("series")
fetch("data.json")
    .then(response => response.json())
    .then(response => {
        for (let index = 0; index < response.series.length; index++) {
            // console.log("Name :- ",response.series[index].name)
            series.innerHTML += `
            <a href="${response.series[index].original_language}" >
        <img src="${response.series[index].poster_path}" alt="">
        </a>

`
        }
    })
var series2=document.getElementById("series2")
fetch("data.json")
    .then(response => response.json())
    .then(response => {
        for (let index = 0; index < response.series2.length; index++) {
            // console.log("Name :- ",response.series2[index].name)
            series2.innerHTML += `
            <a href="${response.series2[index].country}" > 
        <img src="${response.series2[index].image_thumbnail_path}" alt="">
        </a>

`
        }
    })
    
    // cartoon
    
    
    var cartoon=document.getElementById("cartoon")
    fetch("data.json")
        .then(response => response.json())
        .then(response => {
            for (let index = 0; index < response.cartoon.length; index++) {
                // console.log("Name :- ",response.series2[index].name)
                cartoon.innerHTML += `
             <a href="${response.cartoon[index].link}" > 
            <img src="${response.cartoon[index].img}" alt="">
            </a>  
            
    
    `
            }
        })