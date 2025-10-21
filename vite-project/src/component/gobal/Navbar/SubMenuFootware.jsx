import React from 'react';
import { Link } from 'react-router';

const SubMenuFootware = () => {
    return (
        <div>
            <ul className='absolute left-0 top-full w-40 bg-white rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible pt-2 mt-3 transition-all duration-300'> 
              <li>
                <Link className='block px-4 py-2 hover:bg-gray-100 hover:text-[#ff5252] text-sm' to={"/"}>Men Footware</Link>
              </li>
              <li>
                <Link className='block px-4 py-2 hover:bg-gray-100 hover:text-[#ff5252] text-sm'  to={"/"}>Women Footware</Link>
              </li>
            </ul>
        </div>
    );
};

export default SubMenuFootware;