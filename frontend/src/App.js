import "./App.css";
import { AllRoutes } from "./components/AllRoutes";
import Footer from "./pages/Footer";
import { Navbar } from "./pages/Navbar";


function App() {
  return (
    <>
     
      <Navbar />
      
     
      <AllRoutes />
      <Footer/>
    </>
  );
}

export default App;
