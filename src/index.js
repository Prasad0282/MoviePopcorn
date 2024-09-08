import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating"; // Uncomment this import
import { useState } from "react";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Test /> Render the Test component */}
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// // import StarRating from "./StarRating";
// import { useState } from "react";
// // function Test() {
// //   const [movieRating, setMovieRating] = useState(0);
// //   return (
// //     <div>
// //       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
// //       <p>This movie was rated {movieRating} stars</p>
// //     </div>
// //   );
// // }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//     {/* <StarRating
//       maxRating={5}
//       messages={["terrible", "Bad", "Okay", "Good", "Amazing"]}
//     />
//     <StarRating color="red" className="test" defaultRating={3} /> */}
//     <Test />
//   </React.StrictMode>
// );
