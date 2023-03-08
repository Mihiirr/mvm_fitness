import React, { useState, useEffect } from "react";
import Header from "../Components/Header";

const Dashboard = () => {
    const [link, setLink] = useState("dashboard");
    return (
        <>
            <Header />
            <div className='dashboard'>

                {/* Sidebar */}
                <div className="sidebar_dashboard">
                    <h2 style={{ marginBottom: "30px" }}>Howdy, <span style={{ color: "#646464" }}> David</span></h2>
                    <button onClick={() => setLink("dashboard")} className={link === "dashboard" ? "sidebar_dashboard_links_active" : "sidebar_dashboard_links"}>
                        <p>My Dashboard</p>
                    </button>
                    <button onClick={() => setLink("favourite")} className={link === "favourite" ? "sidebar_dashboard_links_active" : "sidebar_dashboard_links"}>
                        <p>Favourites</p>
                    </button>

                </div>
                {/* Main Content */}
                {link === "dashboard" && (
                    <div className="mainContent_dashboard">
                        <h2 style={{ color: "#646464" }}>DASHBOARD</h2>
                        <div className="dashboard_details">
                            <p><strong>Email:</strong> David123@gmail.com</p>
                            <p><strong>Phone:</strong> 9057817889</p>
                        </div>
                    </div>
                )}
                {link === "favourite" && (
                    <div className="mainContent_dashboard">
                        <h2 style={{ color: "#646464" }}>FAVOURITE</h2>
                    </div>
                )}
            </div>
        </>
    );
};

export default Dashboard;
