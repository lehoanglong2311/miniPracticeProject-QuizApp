import React from 'react';
import './EndGame.scss'
import { Routes, Route, useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import Review from '../InGame/Review';

const EndGame = (props) => {
    const { correctAnswerCount, showReview, setShowReview, data,questionList } = props
    const navigate = useNavigate()
    // const location = useLocation();
    //console.log("location", location);
    const handleTryAgain = () => {
        navigate('/')

    }
    console.log("data", data);
    const handleReview = () => {
        console.log("review");
        console.log("showReview", showReview);
        setShowReview(!showReview);

        //  navigate('/ingame')
    }

    return (
        <>
            {showReview ? (
                <Review questionList={questionList} />
            ) :
                (
                    <div>
                        <div className="Text-Score mt-5 mb-3"> Your score is : {correctAnswerCount} </div>


                        <div className="btn-End">
                            <button className="btn btn-success px-4 btn2 text-white "
                                style={{ border: 'none', color: 'black', fontSize: '20px' }}
                                onClick={() => { handleTryAgain() }}>Try Again</button>
                            <button className="btn btn-light  px-5 btn6  mx-2"
                                style={{ border: 'none', fontSize: '20px' }}
                                onClick={() => { handleReview() }}
                            >Review </button>
                        </div>


                    </div>
                )
            }
        </>


    );
};

export default EndGame;