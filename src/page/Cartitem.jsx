import { useDispatch } from "react-redux";
import Cart from "./Cart"
import { RiDeleteBin3Line } from "react-icons/ri";
import toast from "react-hot-toast";
import { remove } from "../redux/slices/Cartslice";

function Cartitem({item , index}){

    const dispatch = useDispatch();

    function removeFromCart(){
        dispatch(remove(item.id))
        toast.error("removed from cart");
    }

    return (
       <div className="flex flex-col p-4 max-w-[450px]  gap-x-48 ml-48">
            <div className="h-[250px] mb-7">
                <img src={item.image} className="h-full w-3/4 mt-4"/>
            </div>
            <div>
                <h1 className="font-bold text-black italic">{item.title}</h1>
            </div>

            <div
            ><h1>{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
            </div>

            <div className="flex justify-between items-centr mt-6">
                    <p className="text-green-600 font-semibold ">${item.price}</p>

            <div className=" bg-red-300 rounded-sm p-1" onClick={removeFromCart}>
                <RiDeleteBin3Line className="h-6 w-5" />
            </div>
            </div>

            <div className=" h-1 w-300 bg-black mt-9"></div>

       </div>
    )
}

export default Cartitem;