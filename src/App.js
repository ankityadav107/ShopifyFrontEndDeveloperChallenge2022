import React, { useEffect, useState } from "react";
import axios from "axios";
// import config from './config/config'
// import { Card, CardContent, CardMedia } from "@mui/material";
// import Heart from "react-animated-heart";
import Header from "./Components/Header";
import CardContainer from "./Components/CardContainer";


const url ="https://api.nasa.gov/planetary/apod?count=27&api_key=YWIg6fYaG8Xg6EjaBWAt6rOI2DGJxPdCnAaCBjfj";

  
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    }).then(()=>setLoading(false));
  }, []);

  // if (!data) return null;
  return (
    <>
    <Header />
    {loading ? 
        <h1 style={{textAlign: "center"}}>Loading...</h1>
      : (
        <>
          <CardContainer data={data} />

        </>
        )
      }
  </>
  );
}

export default App;
