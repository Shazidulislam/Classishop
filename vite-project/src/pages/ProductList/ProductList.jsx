import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import ProductBox from "../../component/gobal/ProductBox/ProductBox";

const ProductList = () => {
  return (
    <div className="">
      <div className="flex gap-3">
        {/* side bar */}
        <div className="sidebarwapper w-62 h-full   py-8">
          <Sidebar />
        </div>
        {/* right side content */}
        <div className="grid grid-cols-5 pl-2 my-10">
          <div className="h-96">
            <ProductBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
