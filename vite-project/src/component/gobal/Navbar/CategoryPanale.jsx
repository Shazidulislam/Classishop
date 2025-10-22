import { Link } from "react-router";
import logo from "../../../assets/images/logo/logo.jpg";
import { IoCloseSharp } from "react-icons/io5";
import Button from "@mui/material/Button";
import { FaRegPlusSquare } from "react-icons/fa";


const CategoryPanale = ({setOpen}) => {
   
  return (
    <div className=" z-50">
      <div className="py-3 px-3">
        <Link to={"/"} className="w-[25%] cursor-pointer ">
          <img className="w-40 " src={logo} alt="logo-img" />
        </Link>
      </div>
      <p onClick={()=>setOpen(false)} className="py-4 cursor-pointer px-3 bg-black text-white font-bold flex justify-between items-center"> <span>Close</span> <IoCloseSharp size={24} /></p>
      <div>
        <h1 className="px-3 py-3  font-medium   transition">Shop By Categories </h1>
         <Button className="!text-black w-full !flex !justify-between !font-medium !text-sm !py-3 !px-3 !cursor-pointer !items-center">
            <Link className="self-start" to={"/"}>Home</Link>
                <FaRegPlusSquare size={18}/>
         </Button>
         <Button  className="!text-black w-full !flex !font-medium !text-sm !py-3 !justify-between !px-3 !cursor-pointer !items-center">
            <Link className="self-start" to={"/"}>Elictronics</Link>
            <FaRegPlusSquare size={18}/>
         </Button>
         <Button  className="!text-black w-full !flex !font-medium !text-sm !py-3 !justify-between !px-3 !cursor-pointer !items-center">
            <Link className="self-start" to={"/"}>Bags</Link>
            <FaRegPlusSquare size={18}/>
         </Button>
         <Button  className="!text-black w-full !flex !font-medium !text-sm !py-3 !justify-between !px-3 !cursor-pointer !items-center">
            <Link className="self-start" to={"/"}>Footware</Link>
            <FaRegPlusSquare size={18}/>
         </Button>
         <Button  className="!text-black w-full !flex !font-medium !text-sm !py-3 !justify-between !px-3 !cursor-pointer !items-center">
            <Link className="self-start" to={"/"}>Groceries</Link>
            <FaRegPlusSquare size={18}/>
         </Button>
         <Button  className="!text-black w-full !flex !font-medium !text-sm !py-3 !justify-between !px-3 !cursor-pointer !items-center">
            <Link className="self-start" to={"/"}>Beauty</Link>
            <FaRegPlusSquare size={18}/>
         </Button>
         <Button  className="!text-black w-full !flex !font-medium !text-sm !py-3 !justify-between !px-3 !cursor-pointer !items-center">
            <Link className="self-start" to={"/"}>Wellness</Link>
            <FaRegPlusSquare size={18}/>
         </Button>
         <Button  className="!text-black w-full !flex !font-medium !text-sm !py-3 !justify-between !px-3 !cursor-pointer !items-center">
            <Link className="self-start" to={"/"}>Jewellery</Link>
            <FaRegPlusSquare size={18}/>
         </Button>
      </div>
    </div>
  );
};

export default CategoryPanale;
