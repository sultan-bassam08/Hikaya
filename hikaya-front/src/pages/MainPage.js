import React from "react";
import Sidebar from "../components/MainPage/Sidebar";
import Main from "../components/MainPage/MainContent";
import RightSidebar from "../components/MainPage/RightSidebar";
import D3 from "../components/landing_page/hikaya3d";
import "../components/MainPage/MainPage.css";

function MainPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-6">
          <Main
            title="Welcome to Hikaya"
            desc="Every story has a voice. Let Hikaya bring yours to life."
            content={<D3 />}
          ></Main>
        </div>
        <div className="col-md-3">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
