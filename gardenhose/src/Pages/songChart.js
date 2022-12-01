// import React from "react";
import Axios from "axios";

// import {useState} from "React";


const Songs = {
  method: 'GET',
  url:'https://shazam-core.p.rapidapi.com/v1/charts/world',
  headers: {
    'X-RapidAPI-Key': 'f847861424msh32d91202402815ep197872jsncbf5be9beb68',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

Axios.request(Songs).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);

    return (
        <div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg" src={Songs.images} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{Songs.title}</h5>
      <p class="text-gray-700 text-base mb-4">
        {Songs.subtitle}
      </p>
    </div>
  </div>
</div>

)
});

export default Songs
