const quizData = [
    {
      question: `1. What will be the output of the following code? 
  console.log(typeof null)`,
      a: "null",
      b: "object",
      c: "undefined",
      d: "number",
      correct: "b",
    },
    {
      question: "2. How do you declare a constant variable in JavaScript?",
      a: "var x = 10",
      b: "let x = 10;",
      c: "const x = 10;",
      d: "constant x = 10;",
      correct: "c",
    },
    {
      question: `3. What is the result of 0 == "0" in JavaScript?`,
      a: "true",
      b: "TypeError",
      c: "NaN",
      d: "false",
      correct: "a",
    },
    {
      question: "4. Which of the following is NOT a JavaScript data type?",
      a: "Number",
      b: "String",
      c: "Character ",
      d: "Boolean",
      correct: "c",
    },
    {
      question: `5. What will console.log(2 + "2") output?`,
      a: "4",
      b: "22 ",
      c: "NaN",
      d: "TypeError",
      correct: "b",
    },
    {
      question:
        "6. Which method is used to remove the last element from an array?",
      a: "shift()",
      b: "pop()",
      c: "splice()",
      d: "slice()",
      correct: "b",
    },
  
    {
      question: `7. What will console.log(!!"false"); print?`,
      a: "false",
      b: "true",
      c: "undefined",
      d: "TypeError ",
      correct: "b",
    },
  ];
  
  const $quiz = $("#quiz");
  const $answerEls = $(".answer");
  const $questionEl = $("#question");
  const $a_text = $("#a_text");
  const $b_text = $("#b_text");
  const $c_text = $("#c_text");
  const $d_text = $("#d_text");
  const $submitBtn = $("#submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    deselectAnswers();
  
    const currentQuizData = quizData[currentQuiz];
  
    $questionEl.text(currentQuizData.question);
    $a_text.text(currentQuizData.a);
    $b_text.text(currentQuizData.b);
    $c_text.text(currentQuizData.c);
    $d_text.text(currentQuizData.d);
  }
  
  function deselectAnswers() {
    $answerEls.prop("checked", false);
  }
  
  function getSelected() {
    let answer;
  
    $answerEls.each(function () {
      if ($(this).prop("checked")) {
        answer = $(this).attr("id");
      }
    });
  
    return answer;
  }
  
  $submitBtn.on("click", () => {
    const answer = getSelected();
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
  
      currentQuiz++;
  
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        $quiz.html(`
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
  
          <button onclick="location.reload()">Reload</button>
        `);
      }
    }
  });
  