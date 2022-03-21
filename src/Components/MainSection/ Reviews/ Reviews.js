import React, {Component, useRef, useState} from "react";
import './Reviews.css';
import Slider from "react-slick";
import left from './left.svg';
import right from './right.svg';
import plus from './plus.svg';
import Modal from "../../Modal/Modal";

const Reviews = () => {
    let slider = React.createRef();
    const [modalActive, setModalActive] = useState(true);
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };
    return (
        <div className='reviewBlock'>
            <div className='reviews'>
                <div className='reviewsHeader'>
                    <p className='name'>Отзывы</p>
                    <button className="button" onClick={() => {
                        setModalActive(true)
                    }}>Добавить отзыв
                    </button>
                    <button className="button2" onClick={() => {
                        setModalActive(true)
                    }}>
                        <img src={plus} width={14} hidden={14}/>
                    </button>
                </div>
                <div className='reviewConteiner'>
                    <Slider {...settings} ref={slider}>
                        <div>
                            <div className='reviwContainer'>
                                <div className='containerHeader'>
                                    <div className="x">
                                        <div className='userPhoto'/>
                                        <p className='userName'>Иван</p>
                                    </div>
                                    <p className='postAdded'>15.03.2022</p>
                                </div>
                                <div className="comment">
                                    <p>Отличный коллектив, руководители понимают сам процесс работы каждого
                                        сотрудника и
                                        помогают всем без исключения. Система KPI позволяет реально хорошо
                                        зарабатывать
                                        по
                                        простому принципу - чем больше и лучше ты работаешь, тем больше денег
                                        получаешь.
                                        Соцпакет - отличная страховка ДМС, организовали курсы английского языка
                                        бесплатно,
                                        оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='reviwContainer'>
                                <div className='containerHeader'>
                                    <div className="x">
                                        <div className='userPhoto'/>
                                        <p className='userName'>Александр</p>
                                    </div>
                                    <p className='postAdded'>15.03.2022</p>
                                </div>
                                <div className="comment">
                                    <p>Хорошая работа, Константин!</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='reviwContainer'>
                                <div className='containerHeader'>
                                    <div className="x">
                                        <div className='userPhoto'/>
                                        <p className='userName'>Михаил</p>
                                    </div>
                                    <p className='postAdded'>20.03.2022</p>
                                </div>
                                <div className="comment">
                                    <p>Отличный сайт!</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <button className="leftButton">
                <img src={left} onClick={() => {
                    slider.current.slickPrev();
                }}/>
            </button>
            <button className="rightButton">
                <img src={right}  onClick={() => {
                    slider.current.slickNext();
                }}/>
            </button>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default Reviews;
