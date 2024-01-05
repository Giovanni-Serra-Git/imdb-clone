/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Box, styled } from '@mui/material';
import { useGetNowPlayingMoviesQuery, useGetPopularMoviesQuery, useGetUpComingMoviesQuery } from "../services/apiSlice"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from 'react';
import { DEFAULT_IMG_PATH } from '../costants/costants';

// import { useEffect } from "react"
// import { API_KEY } from "../services/apiSlice";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

 const StyledPoster = styled("img")({
    width: "100%",
})

const StyledCarousel = styled(Carousel)`
  ul {
    height: 500px;
    align-items: flex-end
  }

      & > img {
        object-fit: cover;
      }    

      @media (max-width: 768px) {
        ul {
          height: auto
        }
      }
`




function Banner() {

  const {data : {results : moviesList} = {}, isSuccess, error} = useGetNowPlayingMoviesQuery();
    return (
      <Box style={{width: "80%", marginInline: "auto"}}>
         <StyledCarousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          showDots={false}
          slidesToSlide={1}
          containerClass="react-multi-carousel-list"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          style={{ overflow: 'visible' }}>
            {moviesList ? 
              moviesList.map(movie => {
                // return <Box key={movie.id}>{movie.id}</Box>
                return <StyledPoster src={`${DEFAULT_IMG_PATH}${movie.backdrop_path}`} key={movie.id} />
              }) : []
            }
       </StyledCarousel>
      </Box>
    )
}

export default Banner
