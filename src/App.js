import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar/index";
import { Footer } from "./components/Footer/index";
import Copyright from "./components/Copyright/Copyright";

import NavbarItemsRouters from "./data/navbar-items";

function App() {
  return (
    <div className="defi-app" style={{ position: "relative" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {
            NavbarItemsRouters.map(({ id, pathLinkRoute, routeComponent }) => (
              <Route path={pathLinkRoute} element={routeComponent} key={id} />
            ))
          }
        </Routes>
        <Footer />
        <Copyright />
      </BrowserRouter>
    </div>
  );
}

export default App;