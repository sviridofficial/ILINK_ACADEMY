import React, {useEffect} from "react";
import Header from "./Components/Header/Header";
import './App.css';
import Footer from "./Components/Footer/Footer";
import MainSection from "./Components/MainSection/MainSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/reducers/appReducer";
import Spinner from "./Components/Spinner";
import FlashMessage from "./Components/FlashMessage/FlashMessage";
import {setFlashMessageEnd, setFlashMessageSuccessSend} from "./Redux/reducers/commentReducer";

function App(props) {
    useEffect(() => {
        props.initializeApp();
    }, []);

    if (props.initialized.initialized) {
        return (
            <div>

                <Header/>
                <MainSection className='section'/>
                <Footer/>
                <FlashMessage successSended={props.isSuccessSend} endFlashMessage={props.setFlashMessageEnd}/>
            </div>
        );
    } else {
        return (<Spinner/>)
    }
}

const mapStateToProps = (state) => ({
    initialized: state.appReducer,
    isSuccessSend: state.commentReducer.isSuccessSend
})
const AppContainer = connect(mapStateToProps, {initializeApp, setFlashMessageSuccessSend, setFlashMessageEnd})(App);
export default AppContainer;
