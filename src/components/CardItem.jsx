import React, {useState} from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import Heart from "react-animated-heart";

const CardItem = ({title, url, explanation, date}) => {
  
    const [isClick, setClick] = useState(false);
  return (
    <Card sx={{width: 400, margin: 2 }}>
      
      <CardMedia
        component="img"
        height="35%"
        image={url}
        alt={title}
      />
      <CardContent sx={{px:3, height:"55%"}}>
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{explanation}</p>
      </CardContent>
      <div style={{marginBottom:40}}>
      <Heart isClick={isClick}  onClick={() => setClick(!isClick)} />
      </div>
     

    </Card>
  );
}

export default CardItem;
