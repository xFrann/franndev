import Home from "./containers/Home";
import Nav from "./containers/Nav";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Work from "./containers/Work";
function App() {
  return (
    <>

      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="work" element={<Work />} />
        </Routes>
        <LanguagePicker></LanguagePicker>
      </BrowserRouter>


    </>
    
  );
}


export default App;
