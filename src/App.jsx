import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Component } from "react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import TvShows1 from "./components/TvShows";
import GoditiFilm1 from "./components/AreaPopCorn";
import GoditiFilm2 from "./components/AreaPopCorn2";
import GoditiFilm3 from "./components/AreaPopCorn3";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        {/* <header className="App-header">
          <SimpleSlider />
        </header>  */}
        <div className="container-fluid px-4">
          <Container>
            <TvShows1 />
          </Container>
          <Container>
            <h4>The Walking Dead</h4>
            <GoditiFilm1 />
          </Container>
          <Container>
            <h4>Yellowstone</h4>
            <GoditiFilm2 />
          </Container>
          <Container>
            <h4>Stranger Things</h4>
            <GoditiFilm3 />
          </Container>
          <Container>
            <Footer />
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
