import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function ScrollableTabsButtonVisible() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex justify-between items-center">
      {/* left side */}
      <div>
        <h2 className="text-2xl font-medium text-gray-800">Popular Products</h2>
        <p className="text-gray-600">
          Do not miss the current offers until the end of March.
        </p>
      </div>

      {/* right side */}
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: { xs: 320, sm: 780 },
          bgcolor: "background.paper",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#ff5252",
              height: "2px",
            },
          }}
        >
          <Tab
            label="Fashion"
            sx={{
              fontWeight: 600,
              color: value === 0 ? "#ff5252" : "#374151", // gray-700
              textTransform: "none",
              "&.Mui-selected": {
                color: "#ff5252",
              },
            }}
          />
          <Tab
            label="Electronics"
            sx={{
              fontWeight: 600,
              color: value === 1 ? "#ff5252" : "#374151",
              textTransform: "none",
              "&.Mui-selected": {
                color: "#ff5252",
              },
            }}
          />
          <Tab
            label="Bags"
            sx={{
              fontWeight: 600,
              color: value === 2 ? "#ff5252" : "#374151",
              textTransform: "none",
              "&.Mui-selected": {
                color: "#ff5252",
              },
            }}
          />
          <Tab
            label="Footwear"
            sx={{
              fontWeight: 600,
              color: value === 3 ? "#ff5252" : "#374151",
              textTransform: "none",
              "&.Mui-selected": {
                color: "#ff5252",
              },
            }}
          />
          <Tab
            label="Groceries"
            sx={{
              fontWeight: 600,
              color: value === 4 ? "#ff5252" : "#374151",
              textTransform: "none",
              "&.Mui-selected": {
                color: "#ff5252",
              },
            }}
          />
          <Tab
            label="Beauty"
            sx={{
              fontWeight: 600,
              color: value === 5 ? "#ff5252" : "#374151",
              textTransform: "none",
              "&.Mui-selected": {
                color: "#ff5252",
              },
            }}
          />
          <Tab
            label="Wellness"
            sx={{
              fontWeight: 600,
              color: value === 6 ? "#ff5252" : "#374151",
              textTransform: "none",
              "&.Mui-selected": {
                color: "#ff5252",
              },
            }}
          />
          <Tab
            label="Jewellery"
            sx={{
              fontWeight: 600,
              color: value === 7 ? "#ff5252" : "#374151",
              textTransform: "none",
              "&.Mui-selected": {
                color: "#ff5252",
              },
            }}
          />
        </Tabs>
      </Box>
    </div>
  );
}
