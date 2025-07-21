import trending from './assets/icons/trending.svg'
import newRelease from './assets/icons/newRelease.svg'
import commingSoon from './assets/icons/commingSoon.svg'
import favourite from './assets/icons/favourite.svg'
import watchLater from './assets/icons/watchLater.svg'

export default function SideBar() {
  return (
    <aside>
				<ul class="space-y-2">
					<li>
						<a class="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
							<img src={trending} width="24" height="24" alt="" />
							<span>Trending</span>
						</a>
					</li>
					<li>
						<a class="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={newRelease} width="24" height="24" alt="" />
							<span>New Releases</span>
						</a>
					</li>
					<li>
						<a class="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={commingSoon} width="24" height="24" alt="" />
							<span>Coming Soon</span>
						</a>
					</li>
					<li>
						<a class="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={favourite} width="24" height="24" alt="" />
							<span>Favourites</span>
						</a>
					</li>
					<li>
						<a class="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={watchLater} width="24" height="24" alt="" />
							<span>Watch Later</span>
						</a>
					</li>
				</ul>
			</aside>
  )
}
