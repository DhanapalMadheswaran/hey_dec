import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import BreakfastPremiumMenus from "../menuModals/breakfastPremiumMenus";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
};
function BreakFastModal({ handleSubmit }) {
  const [input, setInput] = useState({});
  const buttonClick = (e) => {
    setInput({
      value: e,
    });
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="form-group " style={{ border: "1px solid #fff" }}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Platinum" />
            <Tab label="Gold" />
            <Tab label="Silver" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <BreakfastPremiumMenus handleSubmit={handleSubmit} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item 3
        </TabPanel>
      </div>
    </>
  );
}

export default BreakFastModal;
