import React from "react";
import axios from "axios";

const getData= () =>{

axios.get("https://naver.com")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

const AxiosTest = () => {
    return 
        <div>
            
        </div>;
    
}

export default AxiosTest
