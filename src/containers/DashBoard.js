import React from "react";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Features from "../components/Features/Features";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function DashBoard(props) {
  let redirect = null;
  if (!props.authenticate) {
    redirect = <Redirect to="/" />;
  }

  let dashboard = "";
  if (!props.loading && !!props.authenticate) {
    dashboard = (
      <React.Fragment>
        <Header />
        <main>
          <Menu />
          <Features />
        </main>
      </React.Fragment>
    );
  } else {
    dashboard = "Loading...";
  }
  return (
    <div className="dashboard">
      {redirect}
      {dashboard}
    </div>
  );
}

const mapStateToProps = (state) => ({
  authenticate: state.user.token,
  loading: state.user.loading,
});

export default connect(mapStateToProps, null)(DashBoard);
