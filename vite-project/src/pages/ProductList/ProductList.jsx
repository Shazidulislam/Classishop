import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';

const ProductList = () => {
    return (
        <div className=''>

            <div className='flex gap-3'>
                {/* side bar */}
                <div className='sidebarwapper w-62 h-full   py-8'>
                    <Sidebar/>
                </div>
                {/* right side content */}
                <div>
                    <h1>Hello</h1>
                </div>
            </div>
        </div>
    );
};

export default ProductList;