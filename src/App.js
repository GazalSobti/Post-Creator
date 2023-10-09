import Navbar from "./Components/navbar";
import Create from "./Components/create";
import Read from "./Components/read";
import Update from "./Components/update";
import { BrowserRouter,Route,Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
