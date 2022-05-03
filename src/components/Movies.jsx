import Requests from "../Api/reguests";
import Row from "./share/Row";

const Movies = () => {
  return (
    <>
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
      <Row title="Romance" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title="Comedies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
    </>
  );
};

export default Movies;
