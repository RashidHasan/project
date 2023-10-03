import data from "./data.json";
import CardComp from "./card"; // Make sure to use PascalCase for component names

function Main() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          margin: "2%",
          gap: "10px",
        }}
      >
        {data.map(function (Item, index) {
          // Add an index parameter to map function
          return (
            <CardComp
              key={index} // Add a unique "key" prop
              image_url={Item.image_url}
              title={Item.title}
              description={Item.description}
            />
          );
        })}
      </div>
    </>
  );
}

export default Main;
