/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import { Box, Typography, styled } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useGetPopularMoviesQuery } from "../services/apiSlice";
import { DEFAULT_IMG_PATH, YELLOW } from "../costants/costants";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./spinner";



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max:500, min: 0 },
        items: 1,
    }
};

const StyledCarousel = styled(Carousel)`
    img {
        cursor: pointer;
    }
`

const StyledPoster = styled("img")({
    width: "100%",
})

const TitleMovies = styled(Typography)(({ theme }) => ({
    color: YELLOW,
    [theme.breakpoints.down('md')]: {
      fontSize: "2rem",
    },    
    [theme.breakpoints.down('sm')]: {
      fontSize: "1.5rem",
    },    
  }));

  const BoxSpinner = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Slide({requestMovie, movieGenre}) {
    const {data : {results : moviesList} = {}, isSuccess, error, isLoading} = requestMovie();
    const [id, setId] = useState("");
    return  <>
        <Box style={{width: "80%", marginInline: "auto", color: "#fff" }}>
            <TitleMovies variant="h3" sx={{mb: "1rem"}}>{movieGenre} Movies</TitleMovies>
            {isLoading ? <BoxSpinner><Spinner/></BoxSpinner> : 
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
         itemClass="carouselPaddingRight"
         style={{ overflow: 'visible'}}>
           {moviesList ? 
             moviesList.map(movie => {
               return <>
               <Link to={`movie/${movie.id}`} >
               <StyledPoster onClick={() => {
                    setId(movie.id)
                    console.log(id)
                 }} src={`${DEFAULT_IMG_PATH}${movie.backdrop_path}`} key={movie.id} />
               </Link>
                 <Typography key={movie.id}>{movie.title}</Typography>
               </>
             }) : []
           }
      </StyledCarousel>}
     </Box>
    </>
}

export default Slide
