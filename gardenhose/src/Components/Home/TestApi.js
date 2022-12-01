import React from "react";
import axios from "axios";


function TestApi() {

  
  const options = {
    method: 'GET',
    url: 'https://shazam-core.p.rapidapi.com/v1/search/multi',
    params: {query: 'John Williams', search_type: 'SONGS'},
    headers: {
      'X-RapidAPI-Key': 'ddebcb2ceamsh1919faa5a84d055p10d063jsneee465e9522e',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });



  return (

    <div>

    </div>
  )
}

export default TestApi;