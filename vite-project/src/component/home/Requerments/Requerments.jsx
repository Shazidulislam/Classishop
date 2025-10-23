import React from "react";
import Container from "../../gobal/Container/Container";
import Title from "../../gobal/Title/Title";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnBold } from "react-icons/pi";
import { IoAlbumsOutline } from "react-icons/io5";
import { LiaGiftSolid } from "react-icons/lia";
import { MdOutlineHeadsetMic } from "react-icons/md";

const Requerments = () => {
  return (
    <Container maxWidth={false}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-2 w-[80%] pb-10 mx-auto">
        {/* item-1 */}
        <div className="flex flex-col justify-center items-center gap-3 group">
          <LiaShippingFastSolid
            size={36}
            className="  transition duration-300 transform group-hover:-translate-y-2 group-hover:text-[#ff5252]"
          />
          <div>
            <Title title={"Free Shipping"} />
            <p className="text-sm pt-3 text-gray-500">
              For all Orders Over $100
            </p>
          </div>
        </div>
        {/* item-2 */}
        <div className="flex flex-col justify-center items-center gap-3 group">
          <PiKeyReturnBold
            size={36}
            className="  transition duration-300 transform group-hover:-translate-y-2 group-hover:text-[#ff5252]"
          />
          <div>
            <Title title={"30 Days Returns"} />
            <p className="text-sm pt-3 text-gray-500">
              For an Exchange Product
            </p>
          </div>
        </div>
        {/* item-3 */}
        <div className="flex flex-col justify-center items-center gap-3 group">
          <IoAlbumsOutline
            size={36}
            className="  transition duration-300 transform group-hover:-translate-y-2 group-hover:text-[#ff5252]"
          />
          <div>
            <Title title={"Secured Payment"} />
            <p className="text-sm pt-3 text-gray-500">
              Payment Cards Accepted
            </p>
          </div>
        </div>
        {/* item-4 */}
        <div className="flex flex-col justify-center items-center gap-3 group">
          <MdOutlineHeadsetMic
            size={36}
            className="  transition duration-300 transform group-hover:-translate-y-2 group-hover:text-[#ff5252]"
          />
          <div>
            <Title title={"Support 24/7"} />
            <p className="text-sm pt-3 text-gray-500">
             Contact us Anytime
            </p>
          </div>
        </div>
        {/* item-4 */}
        <div className="flex flex-col justify-center items-center gap-3 group">
          <LiaGiftSolid
            size={36}
            className="  transition duration-300 transform group-hover:-translate-y-2 group-hover:text-[#ff5252]"
          />
          <div>
            <Title title={"Special Gifts"} />
            <p className="text-sm pt-3 text-gray-500">
            Our First Product Order
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Requerments;
