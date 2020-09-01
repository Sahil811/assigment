import React from "react";
import "./Features.css";
import LineChart1 from "./subComponents/LineChart1";
import LineChart2 from "./subComponents/LineChart2";
import BarChart from "./subComponents/BarChart";
import PieChart from "./subComponents/PieChart";
import LoyaltyOutlinedIcon from "@material-ui/icons/LoyaltyOutlined";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from "@material-ui/core";

class Features extends React.Component {
  render() {
    let feature = (
      <React.Fragment>
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
              <div>
                <div>Goal $100000</div>
                <div className="base purple">
                  <div></div>
                </div>
              </div>

              <div>
                <div>Users 100K</div>
                <div className="base orange">
                  <div></div>
                </div>
              </div>

              <div>
                <div>Retention: 90%</div>
                <div className="base red">
                  <div></div>
                </div>
              </div>

              <div>
                <div>Duration: 1yr</div>
                <div className="base green">
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="sub__feature margin">
            <div className="sub__feature-info">
              <div className="view-details">
                <div className="trackers">
                  <h4>Support Tracker</h4>
                  <h1>163</h1>
                  <p>Tickets</p>
                </div>
              </div>

              <div className="view-details-2">
                <div className="week__info">
                  Last 7 Days
                  <ExpandMoreIcon />
                </div>
                <PieChart />
              </div>
            </div>

            <div className="view-details-4">
              <div>
                <p>New Tickets</p>
                <h3>29</h3>
              </div>
              <div>
                <p>Open Tickets</p>
                <h3>63</h3>
              </div>
              <div>
                <p>Response Time</p>
                <h3>1d</h3>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );

    return <div className="feature">{feature}</div>;
  }
}

export default Features;
