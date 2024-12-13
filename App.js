// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import StreamList from "./components/StreamList";
// import CreateStream from "./components/CreateStream";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="ui container">
//         <Routes>
//           <Route path="/" element={<StreamList />} />
//           <Route path="/create" element={<CreateStream />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StreamList from "./components/StreamList";
import CreateStream from "./components/CreateStream";
import StreamEdit from "./components/StreamEdit";

const App = () => {
  return (
    <BrowserRouter>
      <div className="ui container">
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/create" element={<CreateStream />} />
          <Route path="/edit/:id" element={<StreamEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
