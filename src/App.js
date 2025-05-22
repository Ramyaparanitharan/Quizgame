import { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const cards = Array.from({ length: 9 }, (_, i) => i + 1);
  const [selectedCard, setSelectedCard] = useState(null);
  const [disabledCards, setDisabledCards] = useState([]);
  const [timeLeft, setTimeLeft] = useState(null);

  const questions = [
    { no: 1, ques: "Which is the most downloaded app as of 2024?" },
    { no: 2, ques: "Which company collaborated with OpenAI for ChatGPT in their cars?" },
    { no: 3, ques: "What is Android 16 called?" },
    { no: 4, ques: "Which of the following is a common file system used by Windows NTFS / EXT4 / FAT32 / HFS" },
    { no: 5, ques: "The Indian to beat the computers in Mathematical Wizardry?" },
    { no: 6, ques: "Which city in India is known as the “Athens of South India”?" },
    { no: 7, ques: "Which is the first animated cartoon?" },
    { no: 8, ques: "Which of the following is a NoSQL database MySQL / PostgreSQL / MongoDB / Oracle" },
    { no: 9, ques: "International Court of Justice located?" },
  ];

  const handleCardClick = (number) => {
    if (disabledCards.includes(number)) return;
    setSelectedCard(number);
    setDisabledCards([...disabledCards, number]);
    setTimeLeft(20); 
  };

  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 2000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const selectedQuestion = questions.find(q => q.no === selectedCard);

  return (
    <div className="App block">
      <div className="sudoku-grid">
        {cards.map((num) => (
          <Card
            key={num}
            number={num}
            disabled={disabledCards.includes(num)}
            onClick={() => handleCardClick(num)}
          />
        ))}
      </div>
      <div>
        {selectedQuestion && (
          <div className="questionBox">
            <h3>Question Number {selectedQuestion.no}</h3>
            <p>{selectedQuestion.ques}</p>
            <p><strong>Time Left:</strong> {timeLeft} seconds</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
