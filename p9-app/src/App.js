import "./index.css";
import Navbar from "./components/Navbar.js";
import StatusBoxes from "./components/Status.js"

function App () {

  return (
    <div className="page">
    <Navbar/>
    <StatusBoxes/>
    </div>
  );
}

export default App;
