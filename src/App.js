// import { React, useState } from "react";
// import TextField from "@mui/material/TextField";
// import List from "./components/list";
// import "./style.css";

// function App() {
//   const [inputText, setInputText] = useState("");
//   let inputHandler = (e) => {
//     var lowerCase = e.target.value.toLowerCase();
//     setInputText(lowerCase);
//   };

//   return (
//     <div className="main">
//       <h1>React Search</h1>
//       <div className="search">
//         <TextField
//           id="outlined-basic"
//           onChange={inputHandler}
//           variant="outlined"
//           fullWidth
//           label="Search"
//         />
//       </div>
//       <List input={inputText} />
//     </div>
//   );
// }

// export default App;


// import  Slider from './components/slider';
import React from 'react';
// import Translator from './components/translate';
// import Home from './components/home/home'
import Users from './components/users';
// import Posts from './components/Posts';

function App() {
  return (
    <>
    {/* <Home/> */}
    <Users/>
    {/* <Posts/> */}
      {/* <Slider/> */}

      {/* <Translator/> */}
    </>
  );
}

export default App;



