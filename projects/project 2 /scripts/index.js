'use strict'

const questions = [
    {
      question: "In which year did the War of Independence take place?",
      options: ["1945", "1948", "1956", "1967"],
      answer: "1948",
      isBadOptions:[false,false,false,false],
    },
    {
      question: "What is the name of the conflict that took place in 1973 involving Israel and its neighbors?",
      options: ["Six-Day War", "Yom Kippur War", "Gulf War", "Lebanese Civil War"],
      answer: "Yom Kippur War",
      isBadOptions:[false,false,false,false],

    },
    {
      question: "Which Israeli military operation took place in 2008-2009 in the Gaza Strip?",
      options: ["Operation Pillar of Defense", "Operation Cast Lead", "Operation Protective Edge", "Operation Grapes of Wrath"],
      answer: "Operation Cast Lead",
      isBadOptions:[false,false,false,false]

    },
    {
      question: "What was the outcome of the Six-Day War in 1967?",
      options: ["Status quo maintained", "Israel lost territory", "Israel gained territory", "Ceasefire agreement"],
      answer: "Israel gained territory",
      isBadOptions:[false,false,false,false]

    },
    {
      question: "In which year did the Oslo Accords, a peace agreement between Israel and Palestine, take place?",
      options: ["1993", "1987", "2000", "1995"],
      answer: "1993",
      isBadOptions:[false,false,false,false]

    }
   
  ];

  const totalQuestions = questions.length;
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("nextButton");
  const scoreElement = document.getElementById("scoreValue");
  const currentQuestionNumberElement = document.getElementById("currentQuestionNumber");
  const totalQuestionsElement = document.getElementById("totalQuestions");

  let currentQuestionIndex = 0;
  let score = 0;

  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion?.question;

    optionsElement.innerHTML = "";

    //אם אין אתה השדה הזה או שהערך שלו לא קיים אל תכנס וככה אני מונע שגיאות בקוד
   
    currentQuestion?.options?.forEach((option,index) => {

        //כאן אתה יוצר את התגית שמכילה את התשובה
      const optionButton = document.createElement("button");
      //לעשות תנאי שאם ה
      console.log(currentQuestion.answer);
    
       //כאן מכניסים את הטקסט לתוך התגית
       //ככה אני מוסיף תעודת זהות לתגית 

      optionButton.id= index
      optionButton.textContent = option;
      const isBadAnswer = questions[currentQuestionIndex].isBadOptions[index]
      if (isBadAnswer) {
          optionButton.style.background="red"
      }

      //ככה אני עושה אירוע שכשאני אלחץ על התגית יהיה בדיקה של התשובה
      optionButton.addEventListener("click", () => checkAnswer(option,index));

      optionsElement.appendChild(optionButton);
    });

    nextButton.disabled = true;
    currentQuestionNumberElement.textContent = currentQuestionIndex + 1;
    totalQuestionsElement.textContent = totalQuestions;
  }

  function checkAnswer(selectedOption,index) {

//




    let isCorrectAnswer =false;

    const currentQuestion = questions[currentQuestionIndex];
   
    if (selectedOption === currentQuestion.answer) {
        isCorrectAnswer =true;
        Swal.fire({
            title: "Good job!",
            text: "Correct answer!",
            icon: "success"
          });
    
      score += 10;
      scoreElement.textContent = score;
    } else {

        questions[currentQuestionIndex].isBadOptions[index]= true;
         console.log(questions[currentQuestionIndex].isBadOptions);
        isCorrectAnswer=false;
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: " Wrong Answer!",
            
          });
     
    }
    displayQuestion()
    if(isCorrectAnswer){

        currentQuestionIndex++;
        if (currentQuestionIndex < totalQuestions) {
          displayQuestion();
        } else {
          alert("Israeli history trivia game finished!\nYour score: " + score);
          nextButton.disabled = true;
        }

    }
 
  }

  optionsElement.addEventListener("click", () => {
    nextButton.disabled = false;
  });

  nextButton.addEventListener("click", () => {
    displayQuestion();
  });

  displayQuestion();


  