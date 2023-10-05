import React from "react";
import data from "./data.json";
import CardComp from "./card";
import "./main.css"; // Import the CSS file
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Main() {
  let [items, setItems] = useState(data);

  function handleSubmit(event) {
    event.preventDefault();
    let searchValue = event.target.search.value;

    let filteredItems = data.filter(function (item) {
      return item.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    setItems(filteredItems);
  }

  return (
    <>
      {/* <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "30px",
        }}
        onSubmit={handleSubmit}
      >
        <input
          style={{
            padding: "0 20px",
            borderRadius: "20px",
            width: "50%",
            height: "40px",
            backgroundColor: "#afb0b3",
          }}
          type="text"
          name="search"
        />
        <button
          style={{
            padding: "0 20px",
            margin: "20px",
            borderRadius: "20px",
            width: "5%",
            height: "40px",
          }}
          type="submit"
        >
          Search
        </button>
      </form> */}

      <Form
        className="d-flex"
        onSubmit={handleSubmit}
        style={{
          margin: "2% 25%",
          width: "50%",
          height: "40px",
        }}
      >
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          name="search"
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>

      <div className="Holder">
        <div className="container">
          {items.map(function (Item, index) {
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
