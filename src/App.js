import React from "react";
import Header from "./Components/Header/Header";
import './App.css';
import Footer from "./Components/Footer/Footer";
import MainSection from "./Components/MainSection/MainSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
        <div>
            <Header/>
            <MainSection className='section'/>
            <Footer/>
        </div>
    );
}

export default App;
