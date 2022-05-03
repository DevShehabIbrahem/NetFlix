import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { BannerState } from "./Redux/Reducers/bannerShow";

import {
  Home,
  Movies,
  Tvshows,
  Navbar,
  Popular,
  Mylist,
  Footer,
} from "./components";
import GetStart from "./components/Getstart/GetStart";
import SignIn from "./components/Registration/SignIn";
import Banner from "./components/share/Banner";

function App() {
  const banner = useSelector(BannerState);

  return (
    <div className="App">
      {banner && (
        <>
          <Banner />
          <Navbar />
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getstart" element={<GetStart />} />
        <Route path="/signup" element={<GetStart />} />

        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/popular" element={<Popular />} />
        <Route path="/mylist" element={<Mylist />} />

        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
