import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// const API_KEY  = "b7eb82e48e907c25cd1f68e45e6d5f1e";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api.themoviedb.org/3/',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2ViODJlNDhlOTA3YzI1Y2QxZjY4ZTQ1ZTZkNWYxZSIsInN1YiI6IjYzZmNiMjk3OTZlMzBiMDA4N2Y4Y2E2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TWb0nVGvmtWUeyVUtrkH_2cw8-TnwD-6hptVYTbEz0c'
    }
}),
  endpoints: builder => ({
    getPopularMovies: builder.query({
      query: () => ({
        url: `/movie/popular?language=en-US&page=1`,
        method: "GET",
      })
      
    }),
    getUpComingMovies: builder.query({
      query: () => ({
        url: `/movie/upcoming?language=en-US&page=1`,
        method: "GET",
      })
      
    }),
    getNowPlayingMovies: builder.query({
      query: () => ({
        url: `/movie/now_playing?language=en-US&page=2`,
        method: "GET",
      })
      
    }),
    getTopRatedMovies: builder.query({
      query: () => ({
        url: `/movie/top_rated?language=en-US&page=1`,
        method: "GET",
      })

    }),
    getMovieById: builder.query({
      query: (id) => ({
        url: `/movie/${id}?language=en-US`,
        method: "GET",
      })

    }),
    })
  })

// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// Export the auto-generated hook for the `getPosts` query endpoint
export const { 
  useGetPopularMoviesQuery,
  useGetUpComingMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetMovieByIdQuery,
 } = apiSlice

