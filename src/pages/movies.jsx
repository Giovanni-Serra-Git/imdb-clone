/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"
import { useGetMovieByIdQuery } from "../services/apiSlice"
import { Box, Typography, styled } from '@mui/material';
import Header from "../components/header";
import { DEFAULT_IMG_PATH, YELLOW } from "../costants/costants";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import Spinner from "../components/spinner"

const WrapperMovieDetails = styled(Box)(({ theme }) => ({
    color: "#fff",
    display: "flex",
    width: "100%",
    height: "calc(100vh - 64px)",
    alignItems: "center",
    marginBlockStart: "80px",
    justifyContent: "center", 
    [theme.breakpoints.down("1000")]: {
        flexDirection: "column",
        marginBlock: "none",
        border: "1px solid black",
    } 
  }));

// const PosterImageWrapper = styled(Box)`
//     width: 60%;
//     height: calc(100vh - 64px);
//     display: flex;
//     align-items: center;
//     padding: 0 1em;
// `

const PosterImageWrapper = styled(Box)(({ theme }) => ({
    width: "60%",
    height: "calc(100vh - 64px)",
    display: "flex",
    alignItems: "center",
    padding: "0 1em",
    color: "YELLOW",
    [theme.breakpoints.down('1000')]: {
      width: "100%",
      height: "100%",
      marginBlock: "3rem",
    }   
  }));

  const StyledPoster = styled("img")(({theme}) => ({
    width: "100%",
    height: "100%",
  }))

  const Title =  styled(Typography)(({theme}) => ({
    fontSize: "3rem",
    [theme.breakpoints.down('1000')]: {
        fontSize: "2.5rem",
    },
    [theme.breakpoints.down('720')]: {
        fontSize: "2rem",
    },
  }))



const MovieDetails = styled(Box)(({theme}) => ({
    width: "40%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    [theme.breakpoints.down('1000')]: {
      width: "100%",
    }
}))
     






function Movie() {
    let { id } = useParams()
    const {data : {
        // id : movieId,
        backdrop_path,
        original_title : title,
        vote_average: vote,
        genres,
        overview,
        release_date: date,
        tagline: quote,
        production_companies: companies,
        production_countries: countries,

    } = {}, isLoading} = useGetMovieByIdQuery(id);
    let x = useGetMovieByIdQuery(id);
    console.log(x.data)
    

    return (
        <>
            <Header />
             <WrapperMovieDetails>
                {isLoading ? <Spinner /> : <>
                 <PosterImageWrapper>
                 <Box>
                    <StyledPoster src={`${DEFAULT_IMG_PATH}${backdrop_path}`} alt={`Movie Image :  ${title}`} />
                 </Box>
                </PosterImageWrapper>
                    <MovieDetails>
                        <Box sx={{ 
                            display: "flex",
                            flexDirection: "column",
                            padding: "2em 1em",
                            gap: "0.5rem"
                            }}>
                            <Title variant="h3" sx={{textAlign: "center", color: YELLOW}}>{title}</Title>
                            <Typography variant="h5" sx={{fontFamily: "Roboto"}}>
                                {quote ? ( 
                                <>
                                <FormatQuoteIcon />
                                    {quote}
                                <FormatQuoteIcon />
                                </>) : ""}
                            </Typography>
                            <Box sx={{display: "flex", gap: "10px", justifyContent: "center", marginBlock: "1rem", flexWrap: "wrap"}}>
                            {genres ? genres.map(genre => {
                                return <Typography 
                                    variant="h5"
                                    sx={{ 
                                        color: YELLOW,
                                        fontFamily: "Roboto",
                                        fontSize: {
                                            lg: "2.2rem",
                                            md: "2rem",
                                            sm: "1.5rem",
                                            xs: "1.4rem",
                                        }
                                    }}>{genre.name}</Typography>
                            }) : ""}
                            </Box>
                             <Typography sx={{ 
                                textTransform: "none",
                                fontSize: {
                                    sm: "1.1rem",
                                    xs: "0.9rem"
                                }
                                }}>{overview}</Typography>
                             <Box sx={{display: "flex", alignItems: "center", gap: "10px"}}>
                                 <StarIcon sx={{
                                    color: YELLOW,
                                    fontSize: {
                                        lg: "1.8rem",
                                        md: "1.5rem",
                                        sm: "1.2rem",
                                        xs: "1rem",
                                    } }} />
                                <Typography sx={{
                                    fontSize: {
                                        lg: "2rem",
                                        md: "1.5rem",
                                        sm: "1.3rem",
                                        xs: "1.2rem",
                                    }
                                }}>{vote ? vote.toFixed(1) : ""}</Typography>
                                         </Box>
                                    <Box sx={{display: "flex"}}>
                                         <Box  sx={{width: "50%"}}>
                                             <Typography sx={{
                                                color: YELLOW,
                                                fontSize: {
                                                    lg: "1.25rem",
                                                    md: "1.1rem",
                                                    sm: "1rem",
                                                    xs: "1rem",
                                                }
                                                }}>Production Companies: </Typography>
                                             {companies ? companies.map(company => {
                                             return <Typography sx={{ 
                                                fontFamily: "Roboto",
                                                textTransform: "uppercase",
                                                fontSize: {
                                                    lg: "0.85rem",
                                                    md: "0.8rem",
                                                    sm: "0.8rem",
                                                    xs: "0.8rem",
                                                }
                                            }} key={company.name}>{company.name}</Typography>
                                                 }) : ""}
                                            </Box>
                                            <Box  sx={{width: "50%"}}>
                                                <Typography sx={{ 
                                                    color: YELLOW,
                                                    fontSize: {
                                                        lg: "1.25rem",
                                                        md: "1.1rem",
                                                        sm: "1rem",
                                                        xs: "1rem",
                                                    }
                                                    }}>Production Countries: </Typography>
                                                {countries ? countries.map(country => {
                                                return <Typography sx={{ 
                                                    fontFamily: "Roboto",
                                                    textTransform: "uppercase",
                                                    fontSize: {
                                                        lg: "0.85rem",
                                                        md: "0.8rem",
                                                        sm: "0.8rem",
                                                        xs: "0.8rem",
                                                    }
                                                }} key={country.name}>{country.name}</Typography>
                                                }) : ""}
                                            </Box>
                                        </Box>    
                        </Box>
                    </MovieDetails>
                </>
                              }
            </WrapperMovieDetails>
        </>

    )
}

export default Movie
