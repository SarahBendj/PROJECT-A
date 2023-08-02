//== Import
import { Route, Routes } from "react-router-dom";
// == Import local
import Header from "../Header";
import DocCards from "../DocCards";
import Doclist from "../DocCards/Doclist";
import Docprofile from "../DocCards/Docprofile";
//*static part 
import  Testemonials from "../Testemonials"
import "./style.scss";

// == Composant
function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <DocCards />
              < Testemonials />
            </>
          }
        ></Route>
        <Route path="/doctors-list" element={<Doclist />}></Route>

        <Route path="/profile" element={<Docprofile />}></Route>
      </Routes>
    </div>
  );
}

// == Export
export default App;
