import React ,{useState} from "react";
import { getAllMovies } from "./Data/MovieData";
import { getUrl } from "./ImageUrl/ImageUrl";
import RatingStar from "./RatingStar";


export default function MovieList() {
const [data , setData]=useState(getAllMovies())

  return (
    <div class="content">
      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">

        { data && data.length > 0 ? ( data.map(item=>(
                        <figure id={item.id} class="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">

          <img class="w-full object-cover" src={getUrl(item.cover)} alt="" />
          <figcaption class="pt-4">
            <h3 class="text-xl mb-1">{item.title}</h3>
            <p class="text-[#575A6E] text-sm mb-2">{item.description}</p>
            <div class="flex items-center space-x-1 mb-5">
             <RatingStar value={item.rating}/>
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>{item.price}</span>
            </a>
          </figcaption>
      </figure>

        ))
            
       ):(null)}
      </div>
    </div>
  );
}
