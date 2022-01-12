import React from 'react';
import CardItem from './CardItem';

const CardContainer = ({data}) => {
  return (
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {data.map((data, index) => (
          <CardItem key={index} title={data.title} url={data.url} explanation={data.explanation} date={data.date} />
        ))}
    </div>
  );
}
export default CardContainer;