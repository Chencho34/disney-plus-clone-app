import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../firebase";
import { onSnapshot, query, collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    onSnapshot(query(collection(db, "Movies")), (querySnapshot) => {
      const tempMovies = querySnapshot.docs.map((doc) => {
        // console.log(doc.data());
        // console.log({id: doc.id, ...doc.data()})
        return { id: doc.id, ...doc.data() }
      })
      // console.log(tempMovies)
      dispatch(setMovies(tempMovies));
    })
  }, []);



  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  /* background-color: blue; */
  position: relative;
  overflow-x: hidden; //! Corrige scrool X - Y
  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
