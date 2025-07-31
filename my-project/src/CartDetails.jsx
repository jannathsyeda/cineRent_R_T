import React from "react";
import { MovieContext, ThemeContext } from "./Context";
import { useContext } from "react";
import { getUrl } from "./ImageUrl/ImageUrl";
import del from "./assets/delete.svg"

export default function CartDetails({onClose}) {

  const {cartData, setCardData} = useContext(MovieContext)
  const {darkMode}=useContext(ThemeContext)

  function handleDeleteCart(event, cartItem){

    event.preventDefault();
    const deleteData=cartData.filter(item=>{ 
      
      return item.id ==! cartItem.id}
       
    )
    setCardData([...deleteData])

  }

  return (
    <div class="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
        <div class={` bg-white shadow-md    rounded-2xl overflow-hidden p-5 md:p-9 ${darkMode ? "dark" : ""}`}>
          <h2 class="text-2xl lg:text-[30px] mb-10 font-bold">Your Carts</h2>
          <div class="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
           {
            cartData.length === 0 ?
                        (
                            <p className="text-3xl">The Cart is Empty!!!</p>
                         ) :(<>
                         
                           {cartData.map((item) => (
                                <div
                                    key={item.id}
                                    className="grid grid-cols-[1fr_auto] gap-4">
                                    <div className="flex items-center gap-4">
                                        <img
                                            className="rounded overflow-hidden"
                                            src={getUrl(
                                                `${item.cover}`
                                            )}
                                            alt={item.title}
                                            width={"50px"}
                                            height={"50px"}
                                        />
                                        <div>
                                            <h3 className="text-base md:text-xl font-bold">
                                                {item.title}
                                            </h3>
                                            <p className="max-md:text-xs text-[#575A6E]">
                                                {item.genre}
                                            </p>
                                            <span className="max-md:text-xs">
                                                ${item.price}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between gap-4 items-center">
                                        <button
                                        onClick={(event)=>handleDeleteCart(event,item.id)}
                                            className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                                          >
                                            <img
                                                className="w-5 h-5"
                                                src={del}
                                                alt="delete"
                                            />
                                            <span className="max-md:hidden">
                                                Remove
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                         
                         </>)
           }
          
          </div>
          <div class="flex items-center justify-end gap-2">
            <a
              class="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
              href="#"
            >
              <img
                src="./assets/icons/checkout.svg"
                width="24"
                height="24"
                alt=""
              />
              <span>Checkout</span>
            </a>
            <a
            
                            onClick={onClose}

              class="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
              href="#"
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
