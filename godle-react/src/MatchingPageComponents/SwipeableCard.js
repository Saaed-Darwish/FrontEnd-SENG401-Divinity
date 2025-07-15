
const getWidth = () => {
  const width = window.innerWidth;
  if (width <= 700) return "100%"; // mobile
  if (width <= 900) return "80%"; // tablet
  return "700px"; // desktop
};

const getWidthImage = () => {

}

const cardStyles = {
  borderRadius: 15,
  background: "black",
  width: getWidth(),
  height: "500px",
  cursor: "pointer",
  userSelect: "none",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  color: "white",
  padding: "20px",
  // border: "2px solid white", 
  marginTop: "30px",
  maxWidth: "100vw"
};

const leftColumnStyles = {
  borderRadius: 15,
  width: "40%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // Center horizontally
  textAlign: "center", // Center text
  paddingBottom: "10px", // Add some padding to separate the line from content
  boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.5)", // Box shadow for glowing effect
  background: "white",
  color: "black"
};

const imageStyles = {
  maxWidth: "238px",
  width: "98%",
  height: "400px",
  objectFit: "cover",
  border: "2px solid black"
};

const rightColumnStyles = {
  width: "60%",
  marginLeft: "25px",
  paddingRight: "5px",
  textAlign: "center",
  height: "425px",
  overflowY: "auto",
  scrollbarWidth: "thin",
  scrollbarColor: "black white",
};

// ...

const SwipeableCard = ({ zIndex = 0, name, image, aboutMe }) => (
  <div className="SwipeableCard" style={{ ...cardStyles, zIndex }}>
    <div style={leftColumnStyles}>
      <h2>{name}</h2>
      <img src={image} alt={`${name}'s Photo`} style={imageStyles} />
    </div>
    <div style={rightColumnStyles}>
      <h2>Biography</h2>
      <p>{aboutMe}</p>
    </div>
  </div>
);

export default SwipeableCard;
