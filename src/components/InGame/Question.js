import './Question.scss'
const Question = (props) => {
    const { data, index, selectedAnswer, setSelectedAnswer,questionList, handleAnswer } = props;
    // console.log("questionList.length",questionList.length);
    console.log("dataProps", data);
    const handleAnswerClick = (answer, qid) => {
        handleAnswer(answer, qid);
        

    }

    return (
        <div className="question-container">
            <div className="question-content my-5">
            <span >Question {data.id}/{questionList.length}</span>

                <div className="question">
                    {data.question_content}
                </div>
            </div>
            <div className="answer-content">    
                <div className="answer">
                    {data && data.answers.map((answer, index) => {
                        let isSelected = answer.isSelected
                        return (<>
                            <div key={`answer ${index}`}
                                className={`answerDiv card p-3 px-5 mb-3 ${isSelected ? 'active' : ''}`}
                                onClick={() => handleAnswerClick(answer, data.id)}
                            > {index + 1})  {answer.answer_content}  </div>

                        </>)

                    })}
                </div>
            </div>
        </div>
    );
};

export default Question;