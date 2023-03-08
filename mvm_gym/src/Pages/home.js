import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBanner2 from '../assets/images/gym_11.jpg';
import SearchExercises from '../Components/SeachExercises';
import Exercises from '../Components/Exercises';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [bodyPart, setBodyPart] = useState("all");
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const checkUser = () => {
            if (!localStorage.getItem("auth-token")) {
                navigate("/");
            }
        };
        checkUser();
    }, [navigate]);
    return (
        <Box>
            <Header />
            {/* Hero Banner */}
            <Box sx={{
                mt: { lg: '212px', xs: '70px' },
                ml: { sm: '50px' }
            }} position="relative" p="20px">
                <Typography fontWeight={700}
                    sx={{
                        fontSize: { lg: '44px', xs: '40px' }
                    }}
                    mb="23px" mt="20px"
                >
                    Reach your Limits <br /> and get to the next level
                </Typography>
                <Typography fontSize="22px" lineHeight="35px" mb={4}>
                    check out the most effective exercises
                </Typography>
                <Button variant="contained" href="#exercises" color="error"
                    sx={{ backgroundColor: '#1E5128', padding: '10px' }}
                >Explore Exercises
                </Button>
                <Typography fontWeight={600}
                    color="#425F57"
                    sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }}
                    fontSize="200px" ml="-20px"
                >
                    Exercise
                </Typography>
                <img src={HeroBanner2} height="800px" alt="banner"
                    className="hero-banner-img"
                />
            </Box>
            <SearchExercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart} />


            <Exercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                exercises={exercises} />

            <Footer />
        </Box>
    )
}

export default Home;