import { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const cards = Array.from({ length: 9 }, (_, i) => i + 1);
  const [selectedcard, setSelectedCard] = useState(null)
  const questions = 
    [{no : 1, ques : "Which is the most downloaded app as of 2024?" },
    {no : 2, ques : "Which company colloborated with openAI for chatgpt in their cars?" },
    {no : 3, ques : "What is Android 16 called?" },
    {no : 4, ques : "Which of the following is a common file system used by Windows NTFS / EXT4 / FAT32 / HFS"},
    {no : 5, ques : "The Indian to beat the computers in Mathematical Wizardry?"},
    {no : 6, ques : "Which city in India is known as the “Athens of South India”?"},
    {no : 7, ques : "Which is the first animated cartoon?"},
    {no : 8, ques : "Which of the following is a NoSQL database MySQL / PostgreSQL / MongoDB / Oracle"},
    {no : 9, ques : "International court of Justice located?"},
    ]
  const handleCardClick = (number) =>{
    console.log("handle" , number)
    setSelectedCard(number);
  }
  const selectedQuestion = questions.find(q=>q.no === selectedcard)
  return (
    <div className="App block">
      <div className=''>
        <div className="sudoku-grid">
        {cards.map((num) => (
          <Card key={num} number={num} onClick = {()=>handleCardClick(num)}/>
        ))}
      </div>
      </div>
      <div>
      {
        selectedQuestion &&
        <div className='questionBox'>
          <h3>Question Number {selectedQuestion.no}</h3>
          <p>{selectedQuestion.ques}</p>
        </div>
      }
      </div>
    
    </div>
  );
}

export default App;
