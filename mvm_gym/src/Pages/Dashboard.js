import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkUser = () => {
            if (!localStorage.getItem("auth-token")) {
                navigate("/");
            }
        };
        checkUser();
    }, [navigate]);

    const handleSignOut = () => {
        localStorage.removeItem("auth-token");
        navigate("/");
    };

    return (
        <div className='dashboard'>
            <Header />
            <h2 style={{ marginBottom: "30px" }}>Howdy, David</h2>
            <button className='signOutBtn' onClick={handleSignOut}>
                SIGN OUT
            </button>
        </div>
    );
};

export default Dashboard;
