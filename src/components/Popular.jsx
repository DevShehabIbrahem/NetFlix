import Row from "./share/Row";
import Requests from "../Api/reguests";

const Popular = () => {
  return (
    <>
      <Row title="Romance" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title="TopRated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
    </>
  );
};

export default Popular;
