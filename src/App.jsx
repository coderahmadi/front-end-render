
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UplComponent from "./components/UplComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {


  return (
    <>
      <div></div>
      <h1>Upload Image Here..!</h1>
      <div className="card">
        <UplComponent />
        <p></p>
      </div>
      <p className="read-the-docs"></p>
    </>
  );
}

export default App;
