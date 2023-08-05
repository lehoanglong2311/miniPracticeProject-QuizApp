import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import './Ingame.scss'
import Question from './Question';
import questions from '../../questions.json';
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';
import EndGame from "../EndGame/EndGame";
import Review from "./Review";



const InGame = (props) => {
    const [questionList, setQuestionList] = useState(questions)
    console.log("questionList", questionList);
    // console.log("redrender");
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [index, setIndex] = useState(0);
    const [showReview, setShowReview] = useState(false);
    const [isFinished, setIsFinished] = useState(false)
    //const Navigate = useNavigate()



    const handlePrevious = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    }
    const handleNext = () => {
        if (index < questionList.length - 1) {
            setIndex(index + 1);
        }

    }

    useEffect(() => {
        const updatedQuestionList = questionList.map((question) => {
            const updatedAnswers = question.answers.map((answer) => {
                return {
                    ...answer,
                    isSelected: false
                };
            });
            return {
                ...question,
                answers: updatedAnswers
            };
        });

        setQuestionList(updatedQuestionList);
    }, []);

   
    const handleAnswerClick = (answer, qid) => {
        const cloneQuestionList = questionList.map((question, index) => {
            // tạo clone ,map list 5 , so sánh L5 qid với qid data props 
            if (question.id === qid) {
                // trùng id map tiếp answer
                const answerUpdate = question.answers.map((a, index) => {

                    if (a.answer_content === answer.answer_content) {
                        return {
                            ...a,
                            isSelected: !a.isSelected
                        }

                    }
                    else {
                        return {
                            ...a,
                            isSelected: false
                        }
                    }
                })
                return { ...question, answers: answerUpdate }

            }
            // không trùng id thì trả về L4 thằng còn lại sau mỗi lần map ko trùng qid
            else {
                return question;
            }
        })
        setQuestionList(cloneQuestionList)

    };
    const calculateResult = () => {

        let correctAnswerCount = 0
        questionList.forEach((question, i) => {
            question.answers.forEach((answer) => {
                if (answer.correct && answer.isSelected) {
                    correctAnswerCount++
                }
            })
        })
        return correctAnswerCount
    };
    const handleFinish = () => {
        if (window.confirm("Do you want to submit answer ?")) {
            setIsFinished(true)

        }
    }
    const handleOutTime = () => {
        setIsFinished(true)
        
    }
    return (
        <>
            {
                isFinished ? (
                    <EndGame
                    questionList = { questionList}
                    data={questionList[index]}
                        correctAnswerCount={calculateResult()}
                        showReview={showReview}
                        setShowReview={setShowReview}
                    />
                )
                    :
                    (
                        <div className='Ingame-container'>
                            <div className='button-action flex justify-center items-center'>
                                <button className="btn btn-secondary px-4  text-white "
                                    style={{ border: 'none', color: 'black', fontSize: '20px' }}

                                    onClick={() => { handlePrevious() }}>previous</button>
                                <button className="btn btn-success  px-5 btn2  mx-2"
                                    style={{ border: 'none', fontSize: '20px' }}
                                    onClick={() => { handleNext() }}
                                >Next </button>

                                {questionList[index].id == questionList.length &&
                                    <button className="btn btn-warning  px-5 btn3  "
                                        style={{ border: 'none', fontSize: '20px' }}
                                        onClick={() => { handleFinish() }}> Submit</button>
                                }


                            </div>
                            <div className='Question-answer-content'>
                                <Timer
                                handleOutTime ={handleOutTime}
                                />
                                {/* <span >Question {questionList[index].id}/{questionList.length}</span> */}

                                <Question
                                    data={questionList[index]}
                                    index={index}
                                    selectedAnswer={selectedAnswer}
                                    setSelectedAnswer={setSelectedAnswer}
                                    handleAnswer={handleAnswerClick}
                                    questionList={questionList}
                                />
                            </div>

                        </div >


                    )

            }
        </>

    );
};

export default InGame;