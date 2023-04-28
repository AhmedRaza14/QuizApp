const quizData = [
    {
        question: "Choose the correct HTML element for the largest heading?",
        a: "<h1>",
        b: "<heading>",
        c: "<h6>",
        d: "<head>",
        correct: "a",
    },
        {
          question: "Which HTML element defines the title of a document?",
          a: "<head>",
          b: "<meta>",
          c: "<title>",
          d: '<body>',
          correct: "c",
        },{
        question: "What is the correct HTML element for playing video files?",
        a: "<movie>",
        b: "<video>",
        c: "<media>",
        d: "None of them",
        correct: "b",
        
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },{
      question : "What is the correct HTML element for inserting a line break?",
      a: '<break>',
      b: '<hr>',
      c: '<lb>',
      d: '<br>',
correct: 'd',
  },{
      question : "Which character is used to indicate an end tag?",
      a: '*',
      b: '<',
      c: '^',
      d: "/",
correct: 'd',
      },{
        question : 'How can you make a numbered list?',
        a: '<list>',
        b: '<ol>',
        c: '<ul>',
        d: '<dl>',
        correct : 'b'
      },{
        question : 'What is the right way to comment the text in HTML?',
        a: '//',
        b: '/*  */',
        c: '<!-- -->',
        d: 'None of them',
        correct : 'c'
      },{
        question: 'What is the correct HTML for making a text area?',
        a: '<input type="textbox">',
        b: '<input type="textarea">',
        c: '<textarea>',
        d: '<textbox>',
        correct: 'c'
      },{
        question: 'How can you make a bulleted list?',
        a: '<list>',
        b: '<ol>',
        c: '<ul>',
        d: '<dl>',
        correct: 'c'
      }];
      const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
//const e_text = document.getElementById('e_text')
//const f_text = document.getElementById('f_text')
//const g_text = document.getElementById('g_text')
//const h_text = document.getElementById('h_text')
//const i_text = document.getElementById('i_text')
//const j_text = document.getElementById('j_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
// e_text.innerText = currentQuizData.e
// f_text.innerText = currentQuizData.f
// g_text.innerText = currentQuizData.g
// h_text.innerText = currentQuizData.h
// i_text.innerText = currentQuizData.i
// j_text.innerText = currentQuizData.j 
   

   
   
    
}
function foo() {
  if (score >= 9) {
    result.innerText = "Excellent";
  } else if (score >= 8) {
    result.innerText = "Very Good";
  } else if (score >= 7) {
    result.innerText = "Good";
  } else if (score >= 6) {
    result.innerText = "Keep it up";
  } else {
    alert = "Fail";
  }
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
function logout(){
  localStorage.clear()
  alert('Logout Successfully')
  location.href='./quiz.html'
}
function reload(){
  location.href='./quiz4.html'
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
  if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       
        
       
       
       
       
       
     currentQuiz++
      if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2> ${score}/${quizData.length} questions correctly</h2>
           
        <button onclick="location.reload()">Start Again</button>
        <button onclick="logout()">Logout</button>
        <button onclick='foo()'>Grade</button>`
     
           
      
       }
    }
})





