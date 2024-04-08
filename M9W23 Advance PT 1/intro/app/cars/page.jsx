import React from "react";
import axios from 'axios'

const getData = async () => {
  const  { data } = await axios.get("https://dog.ceo/api/breeds/image/random")
  return data;
}

const Cars = async () => {
  const dogData = await getData();
  console.log(dogData);
  return (
    <div>
      <img src={dogData.message} width={500} />
    </div>
  )
};

export default Cars;


// Server - Back End
// Server can go out and get data from a database
// Server when we console.log() we see it at the terminal

/*
  app.get('/cars', (req, res) => {
    const dogImage = axios.get("Dog image")
    const templateVars = {dogImage}
    res.render('car', templateVars)
  })
*/


// Client - Front End