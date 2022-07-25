import Home from "./containers/Home";
import Nav from "./containers/Nav";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Work from "./containers/Work";
import Projects from "./containers/Projects";
import Contact from "./containers/Contact";
function App() {
  return (
    <>

      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="work" element={<Work/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>


    </>
    
  );
}


export default App;
