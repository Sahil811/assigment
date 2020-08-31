import React from "react";
import "./Header.css";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import CropFreeIcon from "@material-ui/icons/CropFree";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Header = () => {
  return (
    <header className="header">
      <div className="header__info">
        <div>
          <div>
            <CheckBoxOutlinedIcon />
          </div>
          <div>
            <ChatBubbleOutlineOutlinedIcon />
          </div>
          <div>
            <EmailOutlinedIcon />
          </div>
          <div>
            <CalendarTodayOutlinedIcon />
          </div>
          <div className="star">
            <StarBorderIcon />
          </div>
        </div>

        <div>
          <img
            className="logo"
            src={require("../../assest/image/logo.JPG")}
            alt="logo"
          ></img>
        </div>

        <div>
          <div className="languageContainer">
            <img
              className="language"
              src={require("../../assest/image/flag.png")}
              alt="language"
            ></img>
            <div>English</div>
          </div>

          <div>
            <CropFreeIcon />
          </div>

          <div>
            <SearchIcon />
          </div>

          <div>
            <NotificationsNoneIcon />
          </div>

          <div>
            <div>
              <div>John Doe</div>
              <div>Available</div>
            </div>

            <div>
              <AccountCircleIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
