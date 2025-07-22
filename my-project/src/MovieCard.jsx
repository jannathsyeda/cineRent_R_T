import React, { useState } from "react";
import { getUrl } from "./ImageUrl/ImageUrl";
import RatingStar from "./RatingStar";
import MovieDetailsModal from "./MovieDetailsModal";

export default function MovieCard({ item }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] =useState(null);

  function onHandleClose() {
    setShowModal(false);
    setSelectedMovie(false);
  }

  function handleSelectedMovie(item) {
     setShowModal(true);
    setSelectedMovie(item);
   
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={selectedMovie} onClose={onHandleClose} />
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
            >
              <img src="./assets/tag.svg" alt="" />
              <span>{item.price}</span>
            </button>
          </figcaption>
        </figure>
      </a>
    </>
  );
}
