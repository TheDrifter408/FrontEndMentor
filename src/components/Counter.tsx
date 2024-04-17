import { useState } from 'react';
import Cart from '/icon-cart.svg';
import Plus from '/icon-plus.svg';
import Minus from '/icon-minus.svg';

export default function Counter() {
    
    const [count,setCount] = useState(0);
    
    function Increment(){
        setCount((prev) => prev + 1);
    }
    
    function Decrement() {
        if(count === 0){
            setCount(0);
        }
        setCount((prev) => prev - 1);
    }

    return(
        <div className="buy-ctn">
            <div className="counter-ctn">
                <div className="btn-ctn">
                    <button onClick={Decrement}>
                        <img src={Minus} />
                    </button>
                    <button>{count}</button>
                    <button onClick={Increment}>
                        <img src={Plus} />
                    </button>
                </div>
            </div>
            <button className="buy-cart"><img src={Cart} />Add to cart</button>
        </div>
        
    )
}