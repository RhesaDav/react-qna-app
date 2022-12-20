import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import { httpService } from "../services/HttpService";

export default function Question() {
  let navigate = useNavigate();
  const [user, setUser] = useState({});
  const [question, setQuestion] = useState({});
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [isCorrect, setisCorrect] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      navigate("/");
    } else {
        fetchData()
    }
  }, []);

  const fetchData = () => {
    const parse = JSON.parse(localStorage.getItem("userData"));
    setUser(parse);
    httpService.getQuestion(parse.difficult).then((res) => {
      res.data[0].incorrectAnswers.push(res.data[0].correctAnswer);
      console.log(res.data[0]);
      setQuestion(res.data[0]);
      setLoading(false);
    });
  };

  const handleChange = (item) => {
    console.log(question);
    if (item === question.correctAnswer) {
      setShowAlert(true);
      setisCorrect(true);
      setScore(score + 10);
      fetchData();
    } else {
      setShowAlert(true);
      setisCorrect(false);
      setScore(score - 10);
      fetchData()
    }
  };

  return (
    <div>
      <Alert
        isCorrect={isCorrect}
        showAlert={showAlert}
        closeAlert={() => setShowAlert(false)}
      />
      <div>
        <div className="flex bg-gray-400 rounded-lg">
          <div className="w-1/3 text-center py-2 font-bold">Name</div>
          <div className="w-1/3 text-center py-2 font-bold">Score</div>
          <div className="w-1/3 text-center py-2 font-bold">Difficulty</div>
        </div>
        <div className="flex bg-white rounded-lg">
          <div className="w-1/3 py-2 text-center">{user.name}</div>
          <div className="w-1/3 py-2 text-center">{score}</div>
          <div className="w-1/3 py-2 text-center capitalize">{user.difficult}</div>
        </div>
      </div>
      {loading === false ? (
        <div className="my-10 ">
          <h2 className="text-2xl text-center font-semibold">
            {question.question}
          </h2>
          <div className="mt-4 px-72 gap-10 grid grid-cols-2">
            {question.incorrectAnswers?.map((item, index) => (
              <div
                key={index}
                className="w-full text-gray-700 text-sm font-bold mb-2"
              >
                {/* <input
                  onChange={handleChange}
                  type="radio"
                  className="mr-2 leading-tight"
                  name="q1"
                  value={item}
                />
                {item} */}
                <div className="flex justify-center">
                  <button
                    onClick={() => handleChange(item)}
                    className="bg-blue-500 w-56 h-24 disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {item}
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-center items-center my-5"></div>
          </div>
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
}
