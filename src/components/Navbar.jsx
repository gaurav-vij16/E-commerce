import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {

    const {Cart} = useSelector((state)=>state);

    return (
        <div>
            <div className="flex justify-between max-w-6xl mx-auto h-20">
                <NavLink to="/">
                    <img src="../download.png" height={84} width={80} className="mt-1"/>
                </NavLink>

                <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
                        <NavLink to="/cart">
                            <p>Cart</p>
                        </NavLink>

                        <div className="relative">

                        <NavLink to="/cart">

                            <FaCartShopping className="h-12 w-6"  />
                            {
                                Cart.length > 0 && 
                                <span className="absolute -top-1 -right-2  rounded-full text-white h-6 w-6 text-xs
                                animate-bounce flex justify-center items-center bg-green-600">{Cart.length}</span>
                            }
                        </NavLink>
                        </div>

                </div>
            </div>
        </div>
    );
}

export default Navbar;
