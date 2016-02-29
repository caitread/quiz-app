var position = 0, quiz, quizStatus, question, choices, chA, chB, chC, chD, correct=0;


var questions = [
		["Which building built in London in 1951, demonstrated great technical progress with the use of iron and glass?", "Eiffel Tower", "Crystal Palace", "Chrysler Building", "Madison Square Garden", "B"],
		["Who was the founder of the Bauhaus school in Germany?", "Le Corbusier", "Frank Lloyd Wright", "Meis van der Rohe","Walter Gropius", "D"],
		["Which influential book on modern architecture did Le Corbusier author", "Towards a new architecture", "Complexity and Contradiction in Architecture", "Steel and Stones", "The New Architecture and the Bauhaus", "A"],
		["Which of the following was an 'International Style' architect?", "Robert Venturi", "I.M. Pei", "Meis van der Rohe", "H.H. Richarson", "C"]
];

function _(x){
	return document.getElementById(x);
}
function renderQuestion (){
 quiz = _("quiz");
 if(position >= questions.length){
 	quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
 	_("quizStatus").innerHTML = "Quiz Completed";
 	position = 0;
 	correct = 0;
 	return false;
 }
 _("quizStatus").innerHTML = "Question " +(position+1) + "of " + questions.length;
question = questions [position] [0];
chA = questions [position] [1];
chB = questions [position] [2];
chC = questions [position] [3];
chD = questions [position] [4];
quiz.innerHTML = "<h3>" + question + "</h3>";
quiz.innerHTML += "<input type='radio' name='choices' value= 'A'> "+ chA +"<br>";
quiz.innerHTML += "<input type='radio' name='choices' value= 'B'> "+ chB +"<br>";
quiz.innerHTML += "<input type='radio' name='choices' value= 'C'> "+ chC +"<br>";
quiz.innerHTML += "<input type='radio' name='choices' value= 'D'> "+ chD +"<br><br>";
quiz.innerHTML += "<button onclick= 'checkAnswer()' > Submit Answer </button>";
}

function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if (choice == questions[position][5]){
		correct++;
	}
	position++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);