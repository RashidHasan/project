import React from "react";
import data from "./data.json";
import CardComp from "./card";
import "./main.css"; // Import the CSS file

function Main() {
  return (
    <>
      <div className="Holder">
        <div className="container">
          {data.map(function (Item, index) {
            // Add an index parameter to map function
            return (
              <div className="card" key={index}>
                <CardComp
                  image_url={Item.image_url}
                  title={Item.title}
                  description={Item.description}
                  category={Item.category}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
