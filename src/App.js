import ProductCatalogSectionComponent from "./pages/productCatalogSectionComponent";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductComponent from "./pages/productComponent";
import NavbarComponent from "./pages/navbarComponent";

function App() {
  return (
      <div>
          <NavbarComponent />
          <Router>
              <Routes>
                  <Route exact path="/" element={<ProductCatalogSectionComponent />} />
                  <Route exact path="/products/:id" element={<ProductComponent />} />
              </Routes>
          </Router>
      </div>


  );
}

export default App;
