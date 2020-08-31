import React from "react";
import "./Features.css";
import LineChart1 from "./subComponents/LineChart1";
import LineChart2 from "./subComponents/LineChart2";
import BarChart from "./subComponents/BarChart";
import LoyaltyOutlinedIcon from "@material-ui/icons/LoyaltyOutlined";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from "@material-ui/core";

const Features = () => {
  return (
    <div className="feature">
      <div className="feature__info">
        <div className="badge">
          <div>
            <div className="symbol">
              <LoyaltyOutlinedIcon className="metaBadge" />
            </div>
            <h2>Congratulation John,</h2>
            <p>
              You have done 57.6% more sales today. Check your name badge in
              your Profile
            </p>
          </div>
        </div>

        <div className="graph">
          <div>
            <LineChart1 />
          </div>
          <div>
            <LineChart2 />
          </div>
        </div>
      </div>

      <div className="feature__info">
        <div className="sub__feature">
          <div className="sub__feature-info">
            <div className="view-details">
              <h2>2.7K</h2>
              <p>Avg Sessions</p>
              <h3>
                <span>+5.2%</span>vs 7 Days
              </h3>
              <Button>
                View Details &nbsp;
                <ChevronRightIcon />
                <ChevronRightIcon className="right-arrow" />
              </Button>
            </div>

            <div className="view-details-2">
              <div className="week__info">
                Last 7 Days
                <ExpandMoreIcon />
              </div>
              <BarChart />
            </div>
          </div>

          <div className="view-details-3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>

        <div>3</div>
      </div>
    </div>
  );
};

export default Features;
