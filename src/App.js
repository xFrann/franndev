import Home from "./containers/Home";
import Nav from "./containers/Nav";
import Footer from "./containers/Footer";
import HomeSorin from "./containers/HomeSorin";
import Work from "./containers/Work";
import Projects from "./containers/Projects";
function App() {
  return (
    <>
      <Nav/>
      <HomeSorin/>
     
      <Footer/>
    </>
    
  );
}
//restu is aici + position ul de la footer trebuie schimbat pe relative daca bagi si celelalte componente pe aceasi pagina
//daca nu tine l cum e acum
//<Work/>
//<Projects/>


export default App;
