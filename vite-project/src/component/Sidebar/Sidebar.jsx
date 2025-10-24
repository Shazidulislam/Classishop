import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { IoIosArrowDown } from "react-icons/io";
import RangeSlider from "./MinimumDistanceSlider";
import { Rating } from "@mui/material";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sidebar">
      <div className="box">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="flex cursor-pointer justify-between pb-3 items-center"
        >
          <h1 className="text-xl font-[500] text-gray-700 ">
            Shope by Category
          </h1>
          <IoIosArrowDown
            className={` transition-transform duration-500 ${
              open ? "rotate-180" : ""
            }`}
            size={"22"}
          />
        </div>
        {/* shope by category */}

        <div className={`text-sm  max-h-52 overflow-y-auto custom-scroll `}>
          <FormGroup>
            <FormControlLabel
              className="text-gray-700 !text-sm"
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#9ca3af", // gray-600 for unchecked
                    "&.Mui-checked": {
                      color: "#ff5252", // red when checked
                    },
                  }}
                />
              }
              label="Fashion"
            />
            <FormControlLabel
              className="text-gray-700 !text-sm"
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#9ca3af", // gray-600 for unchecked
                    "&.Mui-checked": {
                      color: "#ff5252", // red when checked
                    },
                  }}
                />
              }
              label="Electronics"
            />
            <FormControlLabel
              className="text-gray-700 !text-sm"
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#9ca3af", // gray-600 for unchecked
                    "&.Mui-checked": {
                      color: "#ff5252", // red when checked
                    },
                  }}
                />
              }
              label="Footwear"
            />
            <FormControlLabel
              className="text-gray-700 !text-sm"
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#9ca3af", // gray-600 for unchecked
                    "&.Mui-checked": {
                      color: "#ff5252", // red when checked
                    },
                  }}
                />
              }
              label="Groceries"
            />
            <FormControlLabel
              className="text-gray-700 !text-sm"
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#9ca3af", // gray-600 for unchecked
                    "&.Mui-checked": {
                      color: "#ff5252", // red when checked
                    },
                  }}
                />
              }
              label="Beauty"
            />
            <FormControlLabel
              className="text-gray-700 !text-sm"
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#9ca3af", // gray-600 for unchecked
                    "&.Mui-checked": {
                      color: "#ff5252", // red when checked
                    },
                  }}
                />
              }
              label="Wellness"
            />
            <FormControlLabel
              className="text-gray-700 !text-sm"
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#9ca3af", // gray-600 for unchecked
                    "&.Mui-checked": {
                      color: "#ff5252", // red when checked
                    },
                  }}
                />
              }
              label="Bags"
            />
            <FormControlLabel
              className="text-gray-700 !text-sm"
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#9ca3af", // gray-600 for unchecked
                    "&.Mui-checked": {
                      color: "#ff5252", // red when checked
                    },
                  }}
                />
              }
              label="Jewellery"
            />
          </FormGroup>
        </div>

        {/* shope by category */}
        {/* filter by price */}
        <div
          className={`pt-4 transition-transform duration-500 ${
            open ? "-translate-y-52" : "translate-y-0"
          } bg-white min-h-52`}
        >
          <h1 className="text-xl font-[500] text-gray-700 mb-4">
            Filter By Price
          </h1>
          <div>
            <RangeSlider />
          </div>

          {/* filter by rating / star */}
          <div className="pt-6">
            <h1 className="text-xl font-[500] text-gray-700 mb-4">
              Filter By Rating
            </h1>
            <div className="flex flex-col  gap-2">
              {/* ratin-1 */}
              <div className="flex items-center gap-1">
                <Checkbox
                  size="small"
                  sx={{
                    color: "#9ca3af", // gray-600 for unchecked
                    "&.Mui-checked": {
                      color: "#ff5252", // red when checked
                    },
                  }}
                />
                <Rating
                  className=""
                  name="half-rating-read"
                  defaultValue={5}
                  precision={0.5}
                  readOnly
                />
              </div>
              {/* ratin-2 */}
              <div className="flex items-center gap-1">
                <Checkbox
                  size="small"
                  sx={{
                    color: "#9ca3af", // gray-600 for unchecked
                    "&.Mui-checked": {
                      color: "#ff5252", // red when checked
                    },
                  }}
                />
                <Rating
                  className=""
                  name="half-rating-read"
                  defaultValue={4}
                  precision={0.5}
                  readOnly
                />
              </div>
              {/* ratin-3 */}
              <div className="flex items-center gap-1">
                <Checkbox
                  size="small"
                  sx={{
                    color: "#9ca3af", // gray-600 for unchecked
                    "&.Mui-checked": {
                      color: "#ff5252", // red when checked
                    },
                  }}
                />
                <Rating
                  className=""
                  name="half-rating-read"
                  defaultValue={3}
                  precision={0.5}
                  readOnly
                />
              </div>
              {/* ratin-4 */}
              <div className="flex items-center gap-1">
                <Checkbox
                  size="small"
                  sx={{
                    color: "#9ca3af", // gray-600 for unchecked
                    "&.Mui-checked": {
                      color: "#ff5252", // red when checked
                    },
                  }}
                />
                <Rating
                  className=""
                  name="half-rating-read"
                  defaultValue={2}
                  precision={0.5}
                  readOnly
                />
              </div>
              {/* ratin-5 */}
              <div className="flex items-center gap-1">
                <Checkbox
                  size="small"
                  sx={{
                    color: "#9ca3af", // gray-600 for unchecked
                    "&.Mui-checked": {
                      color: "#ff5252", // red when checked
                    },
                  }}
                />
                <Rating
                  className=""
                  name="half-rating-read"
                  defaultValue={1}
                  precision={0.5}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>

        {/* filter by price */}
      </div>
    </div>
  );
};

export default Sidebar;
