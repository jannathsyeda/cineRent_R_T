import logo from './assets/logo.svg'
import ring from "./assets/ring.svg"
import moon from "./assets/icons/moon.svg"
import cart from "./assets/shopping-cart.svg"
import {MovieContext} from "./Context/index"
import { useContext } from 'react'

export default function Header() {

	const {cartData}=useContext(MovieContext)

  return (
<header>
		<nav class="container flex items-center justify-between space-x-10 py-6">
			<a href="index.html">
				<img src={logo} width="139" height="26" alt="" />
			</a>

			<ul class="flex items-center space-x-5">
				<li>
					<a class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={ring} width="24" height="24" alt="" />
					</a>
				</li>
				<li>
					<a class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={moon} width="24" height="24" alt="" />
					</a>
				</li>
				<li>
					<a class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={cart} width="24" height="24" alt="" />
					</a>{
cartData && cartData.length>0 ?
(cartData.length):null
					}
				</li>
			</ul>
		</nav>
	</header>  )
}
