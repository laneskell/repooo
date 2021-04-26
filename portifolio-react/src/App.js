import "./App.css";
import React, { Component } from "react";
import Typical from "react-typical";
import Carousel from "react-elastic-carousel";
import Particles from "react-particles-js";
import styled from "styled-components";

function App() {
  const state = {
    items: [
      { id: 1, title: "item #1" },
      { id: 2, title: "item #2" },
      { id: 3, title: "item #3" },
      { id: 4, title: "item #4" },
      { id: 5, title: "item #5" },
    ],
  };

  return (
    <CointainerApp>
      <Particles />
      <CointainerRelative>
        <CointainerTypical>
        <Typical
            steps={[
              "Eu sou Kell Lanes",
              1000,
              "Eu sou Desenvolvedora Web",
              1000,
              "I am Kell Lanes",
              500,
              "I am a Web Developer",
              500,
            ]}
            loop={Infinity}
            wrapper='h1'
          />
        </CointainerTypical>
        {/* <CointainerCarousel>
          <Carousel>
            {state.items.map((item) => (
              <div key={item.id}>{item.title}</div>
            ))}
          </Carousel>
        </CointainerCarousel> */}
      </CointainerRelative>
    </CointainerApp>
  );
}

export default App;

const CointainerApp = styled.div`
  background-color: black;
  color: white;
  width:100vw;
  height:100vh;
`;
const CointainerRelative = styled.div`
  position: relative;
  top: -50vh;
  width:100vw;
  height:50vh;
  display: flex;
  justify-content: center;
`;
const CointainerTypical = styled.div`
  display: flex;
  justify-content: center;
  width:100vw;
  height:50vh;
`;

// const CointainerCarousel = styled.div`
//   position: relative;
//   top: -25vh;
//   display: flex;
//   justify-content: center;
// `;
