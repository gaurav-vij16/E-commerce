import { useDispatch, useSelector } from "react-redux";
import {add , remove} from '../redux/slices/Cartslice';
import { toast } from "react-hot-toast";

function ProductCard({post }){

    const {Cart} = useSelector((state) => state);

    const dispatch = useDispatch();

    const removeFromcart = (() => {
        dispatch(remove(post.id));
        toast.error("remove from Cart")

    })

    const addTOCart = () => {
        dispatch(add(post));
        toast.success("Item added to cart successfully!");
    };
    

   
    return(
        <div className="flex flex-col justify-between items-center  hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5
         border rounded-xl 
          hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
            <div>
                <p>{post.title}</p>
            </div>

            <div className="w-40 text-gray-400 font-normal text-[10px] text-left">
                <p>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
            </div>
            <div className="h-[180px]">
                <img src={post.image} className="h-full w-full"/>
            </div>


            <div className="flex items-center justify-around gap-12  w-full mt-5">

                <div>
                    <p className="text-green-600 font-semibold ">${post.price}</p>
                </div>

                <div>
                    {Cart.some((p) => p.id == post.id) ? (
                        <button className="border-2 border-gray-700 text-gray-700 p-1 px-3 uppercase rounded-full text-xs font-semibold
                        text-[12px] hover:bg-gray-700 hover:text-white"
                         onClick={removeFromcart}>Remove </button>
                    ) : (
                        <button className="border-2 border-gray-700 text-gray-700 p-1 px-3 uppercase rounded-full text-xs font-semibold
                        text-[12px] hover:bg-gray-700 hover:text-white" onClick={addTOCart}>Add to Cart</button>
                    )}
                </div>
            </div>


        </div>

    );
}

export default ProductCard