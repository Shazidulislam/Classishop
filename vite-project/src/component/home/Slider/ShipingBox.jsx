import React from 'react';
import { LiaShippingFastSolid } from "react-icons/lia";

const ShipingBox = () => {
    return (
        <div className='flex justify-between items-center px-8 py-6 rounded-md border-2 border-[#ff5252]'>
            <div className='flex items-center gap-3'>
                <LiaShippingFastSolid size={42}/>
               <h2 className='text-2xl font-medium uppercase'>Free Shipping</h2>
            </div>
            {/* text */}
            <p className='text-gray-600'>Free Delivery Now On Your First Order and over $200</p>
            <p className='text-2xl font-bold justify-end'>- Only $200*</p>
        </div>
    );
};

export default ShipingBox;