import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { getDoc, doc } from "firebase/firestore";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  const fetchMovie = async () => {
    try {
      const docRef = doc(db, "Movies", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setMovie(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting movie:", error);
    }
  }

  useEffect(() => {
    fetchMovie();
  }, [id]);

  return (
    <Container>
      {
        movie ? (
          <React.Fragment>
            <Background>
              <img src={movie.BackgroundImg} alt="background-img"></img>
            </Background>
            <ImgTitle>
              <img src={movie.TitleImg} alt="" />
            </ImgTitle>
            <Controls>
              <PlayButton>
                <img src="/images/play-icon-black.png" alt="play-icon" />
                <span>PLAY</span>
              </PlayButton>
              <TrailerButton>
                <img src="/images/play-icon-white.png" alt="play-icon" />
                <span>Trailer</span>
              </TrailerButton>
              <AddButton>
                <span>+</span>
              </AddButton>
              <GroupWatchButton>
                <img src="/images/group-icon.png" alt="group-icon" />
              </GroupWatchButton>
            </Controls>
            <Subtitle>
              {movie.Genres}
            </Subtitle>
            <Description>
              {movie.Description}
            </Description>
          </React.Fragment>
        ) : (
          <p>Loading movie...</p>
        )}
    </Container>
  );
}

export default Detail;

const Container = styled.section`
  /* min-height: calc(100vh - 70px); */
  /* min-height: calc(100vh - 110px); */
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  /* background-color: #fff; */
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.8;
  z-index: -1;

  img {
    margin-top: 70px;
    width: 100%;
    height: 100%;
    background-size: cover;
  }
`;

const ImgTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin: 40px 0;
  /* margin-top: 40px; */

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* background-color: red; */
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 240, 249);
  border: none;
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`;