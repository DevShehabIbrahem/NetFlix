import Row from "./share/Row";
import Requests from "../Api/reguests";

const Home = () => {
  return (
    <>
      <Row
        className="h-[250px]"
        title="OrignialNetflix"
        fetchUrl={Requests.fetchNetflixOriginals}
        islarge
      />
      <Row title="Trainding Now" fetchUrl={Requests.fetchTrending} />
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
      <Row title="Romance" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title="Comedies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="TopRated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action" fetchUrl={Requests.fetchActionMovies} />
    </>
  );
};

export default Home;
