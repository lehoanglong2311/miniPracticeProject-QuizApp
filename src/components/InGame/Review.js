// import './Review.scss';
import React, { useEffect, useState, } from 'react';
import Timer from './Timer';
import Question from './Question';
import { Navigate, useNavigate } from 'react-router-dom';
import './Review.scss'

const Review = ({ questionList }) => {

  console.log("questionListRV", questionList);
  const [index, setIndex] = useState(0);
  const Navigate = useNavigate()
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
  return (
    <div className="Review-container">

      <div className='button-action flex justify-center items-center mt-5'>
        <button className="btn btn-secondary px-4  text-white "
          style={{ border: 'none', color: 'black', fontSize: '20px' }}

          onClick={() => { handlePrevious() }}>previous</button>
        <button className="btn btn-success  px-5 btn2  mx-2"
          style={{ border: 'none', fontSize: '20px' }}
          onClick={() => { handleNext() }}
        >Next </button>
        
        <button className="btn btn-warning  px-5 btn3  "
          style={{ border: 'none', fontSize: '20px' }}
          onClick={() => { Navigate('/') }}> restart</button>


      </div>

      

      <div className='question-containerReview'>

        <div className="question-contentRV my-5">
          <span >Question {questionList[index].id}/{questionList.length}</span>

          <div className="question">
            {questionList[index].question_content}
          </div>


        </div>
        <div className="answer-contentReview">
          <div className="answerReview">
            {questionList[index] && questionList[index].answers.map((answer, index) => {
              //let isSelected = answer.isSelected
              return (<>
                <div key={`answer ${index}`}
                  className={`answerDivReview card p-3 px-5 mb-3
                  ${answer.correct ? 'Correct-answer' : ''}
                  
                  ${answer.isSelected ? (answer.correct ? 'Correct-answer' : 'Wrong-answer') : ""}
                  `
                  }
                >

                  {index + 1})  {answer.answer_content}  </div>

              </>)

            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;