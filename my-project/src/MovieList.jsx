import React ,{useState} from "react";
import { getAllMovies } from "./Data/MovieData";
import { getUrl } from "./ImageUrl/ImageUrl";
import RatingStar from "./RatingStar";
import MovieCard from "./MovieCard";


export default function MovieList() {
const [data , setData]=useState(getAllMovies())

  return (
    <div class="content">
      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">

        { data && data.length > 0 ? ( data.map(item=>(
          <MovieCard  item={item} />

        ))
            
       ):(null)}
      </div>
    </div>
  );
}
