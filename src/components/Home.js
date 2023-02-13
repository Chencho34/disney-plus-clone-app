import React, { cloneElement, useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../firebase";
import { doc, onSnapshot, query, where, collection, QuerySnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

function Home() {

  const dispatch = useDispatch();

  //! NO FUNCIONA
  // useEffect(() => {
  //   db.collection("Movies").onSnapshot((snapshot) => {
  //     let tempMovies = snapshot.docs.map((doc) => {
  //       // console.log(doc.data());
  //       return { id: doc.id, ...doc.data() }
  //     })
  //   })
  // }, [])
  //! NO FUNCIONA
  // useEffect(() => {
  //   const q = query(collection(db, "Movies"))
  //   const unsub = onSnapshot(q, (querySnapshot) => {
  //     console.log("Data", querySnapshot.docs.map(d => doc.data()));
  //   });
  //   console.log(q);
  // }, []);
  //! NO FUNCIONA
  // useEffect(() => {
  //   db.collection("Movies").onSnapshot((snapshot) => {
  //     console.log(snapshot)
  //   })
  // }, [])

//TODO Si funciona
// useEffect(() => {
  //   const q = query(collection(db, "Movies"))
  //   const tempMovies = onSnapshot(q, (querySnapshot) => {
    //     const movies = querySnapshot.docs.map((doc) => {
      //       // console.log(doc.data())
      //       // console.log({id: doc.id, ...doc.data()})
      //       return {id: doc.id, ...doc.data()}
      //     })
      //     console.table(movies)
      //   })
      // }, [])

//TODO Si funciona
useEffect(() => {
  onSnapshot(query(collection(db, "Movies")), (querySnapshot) => {
    const tempMovies = querySnapshot.docs.map((doc) => {
      // console.log(doc.data());
      // console.log({id: doc.id, ...doc.data()})
      return {id: doc.id, ...doc.data()}
    })
    console.log(tempMovies)
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
