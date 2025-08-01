import logo from "./assets/logo.svg";
import ring from "./assets/ring.svg";
import moon from "./assets/icons/moon.svg";
import sun from "./assets/icons/sun.svg"
import cart from "./assets/shopping-cart.svg";
import { MovieContext,ThemeContext } from "./Context/index";
import { useContext, useState } from "react";
import CartDetails from "./CartDetails";


export default function Header() {
  const { cartData } = useContext(MovieContext);
  const [showCart , setShowCart]= useState(false)
  const {darkMode, setDarkMode}=useContext(ThemeContext);
  
  function handleCartShow() {
	console.log("8")
    if (cartData.length > 0) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  }

  return (
    <header>
		   {
                showCart &&
                    <CartDetails
                        onClose={() => setShowCart(false)} />}
      <nav class="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul class="flex items-center space-x-5">
          <li>
            <a
              class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
			  onClick={()=>setDarkMode(darkMode => !darkMode)}
            >
              <img src={darkMode ? sun : moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              onClick={handleCartShow}
              class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={cart} width="24" height="24" alt="" />
              {cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
