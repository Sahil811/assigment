import React from "react";
import "./Menu.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import LayersOutlinedIcon from "@material-ui/icons/LayersOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import RadioButtonUncheckedOutlinedIcon from "@material-ui/icons/RadioButtonUncheckedOutlined";
import AppsIcon from "@material-ui/icons/Apps";
import { Button } from "@material-ui/core";

const Menu = () => {
  return (
    <menu className="menu">
      <div className="menu__info">
        <Button className="dashboard">
          <HomeOutlinedIcon />
          <div>Dashboard</div>
          <ExpandMoreOutlinedIcon />
        </Button>
        <div>
          <AppsIcon />
          <div>Apps</div>
          <ExpandMoreOutlinedIcon />
        </div>
        <div>
          <LayersOutlinedIcon />
          <div>UI Elements</div>
          <ExpandMoreOutlinedIcon />
        </div>
        <div>
          <CreateOutlinedIcon />
          <div>Form & Tables</div>
          <ExpandMoreOutlinedIcon />
        </div>
        <div>
          <FileCopyOutlinedIcon />
          <div>Pages</div>
          <ExpandMoreOutlinedIcon />
        </div>
        <div>
          <EqualizerOutlinedIcon />
          <div>Charts & Maps</div>
          <ExpandMoreOutlinedIcon />
        </div>
        <div>
          <RadioButtonUncheckedOutlinedIcon />
          <div>Others</div>
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </menu>
  );
};

export default Menu;
