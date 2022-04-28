import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";

import {
  Home,
  Movies,
  Tvshows,
  Navbar,
  Popular,
  Mylist,
  Footer,
  Details,
} from "./components";
import Banner from "./components/share/Banner";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      {location.pathname !== "/detalis" && (
        <>
          <Banner />
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/popular" element={<Popular />} />

        <Route path="/mylist" element={<Mylist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
