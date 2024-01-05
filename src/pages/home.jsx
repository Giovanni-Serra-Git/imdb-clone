/* eslint-disable no-unused-vars */

import * as React from 'react';
import Header from '../components/header';
import { Box, styled } from '@mui/material';
import Banner from '../components/banner';
import Slide from '../components/slide';
import { useGetNowPlayingMoviesQuery, useGetPopularMoviesQuery, useGetTopRatedMoviesQuery } from '../services/apiSlice';




const Wrapper = styled(Box)`
    display: flex;
    padding: 20px 0;
    width: 100%;
    margin-block: 80px;
`;

const Container = styled(Box)`
    padding: 0 115px !important;
    padding: 20px;
`;

export default function MenuAppBar() {
 return (
     <>
      <Header />
      <Wrapper>
          <Banner />
      </Wrapper>
      <Wrapper style={{display: "flex", flexDirection: "column", gap: "40px"}}>
        <Slide requestMovie={useGetPopularMoviesQuery} movieGenre={"Popular"} />
        <Slide requestMovie={useGetNowPlayingMoviesQuery} movieGenre={"Now Playing"} />
        <Slide requestMovie={useGetTopRatedMoviesQuery} movieGenre={"Top Rated"} />
      </Wrapper>
     </>

 )
}