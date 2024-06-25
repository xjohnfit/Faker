import axios from "axios";
import React from 'react'
import { useState } from "react";

const getCountry = async () => {

  const [country, setCountry] = useState("Country will be populate here");

  const options = {
    method: 'GET',
    url: 'https://entreapi-faker.p.rapidapi.com/address/country',
    headers: {
      'x-rapidapi-key': '46e4600040msh2fc1496a0ac3011p147823jsn2ca935ec8b45',
      'x-rapidapi-host': 'entreapi-faker.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
    setCountry(response.data);
  } catch (error) {
    console.error(error);
  }
}

export { getCountry } 
