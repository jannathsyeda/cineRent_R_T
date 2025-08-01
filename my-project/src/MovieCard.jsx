import React, { useState, useContext } from "react";
import { getUrl } from "./ImageUrl/ImageUrl";
import RatingStar from "./RatingStar";
import MovieDetailsModal from "./MovieDetailsModal";
import {MovieContext} from './Context/index'
import { toast } from "react-toastify";

export default function MovieCard({ item }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] =useState(null);
 
  const {cartData,setCardData}=useContext(MovieContext)

  function onHandleClose() {
    setShowModal(false);
    setSelectedMovie(false);
  }

  function handleSelectedMovie(item) {
     setShowModal(true);
    setSelectedMovie(item);
   
  }
  function HandleAddToCart(event, movieItem){
   event.stopPropagation()

    const found = cartData.find((movie)=>{
      return movie.id === movieItem.id
  })

    if(!found){
      setCardData([...cartData,movieItem]) 
    }else{
      toast(`the ${movieItem.title} is already added to the cart.`,{
        position: "bottom-right",
      })
    }
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={selectedMovie} onClose={onHandleClose} addToCart={HandleAddToCart} />
      )}
      <a href="#" onClick={() => handleSelectedMovie(item)}>
        <figure
          id={item.id}
          class="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
        >
          <img
            className="w-full object-cover"
            src={getUrl(item.cover)}
            alt=""
          />
          <figcaption class="pt-4">
            <h3 class="text-xl mb-1">{item.title}</h3>
            <p class="text-[#575A6E] text-sm mb-2">{item.description}</p>
            <div class="flex items-center space-x-1 mb-5">
              <RatingStar value={item.rating} />
            </div>
           <button
                            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                            href="#"
                            onClick={(e) => HandleAddToCart(e, item)}
                        >
                            <img src="./assets/tag.svg" alt="" />
                            <span>${item.price} | Add to Cart</span>
                        </button>
          </figcaption>
        </figure>
      </a>
    </>
  );
}
