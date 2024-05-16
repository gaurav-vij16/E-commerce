import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Cartitem from './Cartitem'; // Assuming CartItem is the correct component to import
import { useEffect, useState } from 'react';

function Cart() {
    const [TotalAmount, setTotalAmount] = useState(0);
    const { Cart } = useSelector((state) => state);

    useEffect(() => {
        if (Cart) {
            setTotalAmount(Cart.reduce((acc, curr) => acc + curr.price, 0));
        }
    }, [Cart]);

    if (!Cart) {
        return <div>Loading...</div>; 
    }

    return (
        <div className='flex gap-x-[500px] bg-gradient-to-r from-slate-300 to-slate-500  h-full min-h-[100vh]  '>

        <div  >
            {Cart.length === 0 ? (
                <div className='h-full w-full flex justify-center  items-center ml-[500px] flex-col' >
                    <h1 className='font-extrabold  text-5xl  text-gray-900'>Cart is empty</h1>
                    <NavLink to={'/'}>
                        <button className=' border-2 bg-green-500 p-6 rounded-full w-[250px] mb-14 mt-10 uppercase mx-auto
                     font-bold text-2xl'>Shop now</button>
                    </NavLink>
                </div>
            ) : (
                <div >
                    {Cart.map((item) => (
                        <Cartitem  key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>

        {Cart.length > 0 && 

            

            <div className='flex flex-col border-4 max-h-[1000px]  w-[600px] mt-8 items-center justify-between '>
                <p className=' font-extrabold text-6xl uppercase mt-16 mb-10 text-green-900'>your cart</p>
                <div>

                <p className=' font-extrabold text-4xl uppercase mt-16 mb-10 text-green-900'>Summary</p>
                <div className=" h-1 w-300 bg-black mt-9"></div>
                <p className='text-black font-bold text-3xl uppercase  p-4  '>total items : <span>{Cart.length}</span></p>

                <div>
                     <p className=' text-black font-bold text-3xl uppercase  p-4' >Total Amount : ${TotalAmount.toFixed(2).toLocaleString()}</p>
                     <button className='border-2 bg-green-500 p-6 rounded-full w-[450px] mb-14 mt-10 uppercase mx-auto
                     font-bold text-2xl '>checkout</button>
                </div>
                </div>


            </div>

        }

        </div>
    );
}

export default Cart;
