import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const Navbar = ()  => {

    const context = useContext(ShoppingCartContext)

    const activeStyle = 'underline underline-offset-4'

    return(
        
        <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light">
            {/* Side left */}
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>Shopi</NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    onClick={() => context.setSearchByCategory()}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/jewelery'
                    onClick={() => context.setSearchByCategory('jewelery')}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    onClick={() => context.setSearchByCategory('electronics')}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/men_clothing'
                    onClick={() => context.setSearchByCategory("men's clothing")}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>Men clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/women_clothing'
                    onClick={() => context.setSearchByCategory("women's clothing")}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>Women clothing
                    </NavLink>
                </li>
            </ul>
            {/* Side right */}
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    shopi@platzi.com
                </li>
                <li>
                    <NavLink to='/my-orders'>My Orders</NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'>My Account</NavLink>
                </li>
                <li>
                    <NavLink to='/Sign-in'>Sign In</NavLink>
                </li>
                <li>
                    <div className="flex justify-between items-center">
                        <ShoppingBagIcon className="h-6 w-6 text-black/60" />
                        <div>{context.cartProducts.length}</div>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar