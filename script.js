let debounce = false;

function checkQuestion1() {
  let rightAnswer = document.getElementById("aphelios");
  if (rightAnswer.checked == true) {
    console.log("[question 1] correct.");
    document.getElementById("q1_mark").innerHTML =
      "Which of these champions cost 6300 BE? (1/1)";
    return 1;
  } else {
    console.log("[question 1] wrong.");
    return 0;
  }
}

function checkQuestion2() {
  let rightAnswersCounter = 0;
  let rightAnswers = document.getElementsByClassName("q2_right_answers");
  let wrongAnswers = document.getElementsByClassName("q2_wrong_answers");
  for (let i = 0; i < rightAnswers.length; i++) {
    if (rightAnswers[i].checked == true) {
      rightAnswersCounter++;
    }
  }
  for (let i = 0; i < wrongAnswers.length; i++) {
    if (wrongAnswers[i].checked == true) {
      rightAnswersCounter--;
    }
  }
  document.getElementById(
    "q2_mark"
  ).innerHTML = `Which of these <i>DO NOT</i> give hp? (${rightAnswersCounter}/2)`;
  console.log(`[question 2] ${rightAnswersCounter} correct.`);
  return rightAnswersCounter;
}

function checkQuestion3() {
  const rightAnswer = "1.16";
  let userAnswer = document.getElementById("q3").value;
  if (userAnswer == rightAnswer) {
    console.log("[question 3] correct.");
    document.getElementById("q3_mark").innerHTML =
      "What version of minecraft was the nether update added? (1/1)";
    return 1;
  } else {
    console.log("[question 3] wrong.");
    return 0;
  }
}

function checkQuestion4() {
  const rightAnswer = "coalossal";
  let userAnswer = document.getElementById("q4").value;
  if (userAnswer == rightAnswer) {
    document.getElementById("q4_mark").innerHTML = "Whos that pokemon? (1/1)";
    console.log("[question 4] correct.");

    return 1;
  } else {
    console.log("[question 4] wrong.");
    return 0;
  }
}

function displayPoints() {
  let totalPoints = submit();
  document.getElementById("total_marks").innerHTML = `${totalPoints}/5 MARKS`;
}

function displayMessage() {
  let totalPoints = submit();
  if (totalPoints == 0 || totalPoints == 1) {
    document.getElementById("display_message").innerHTML = "YOU SUCK!";
  }
  if (totalPoints == 2 || totalPoints == 3) {
    document.getElementById("display_message").innerHTML = "EHHH";
  }
  if (totalPoints == 4 || totalPoints == 5) {
    document.getElementById("display_message").innerHTML =
      "ABOVE AVERAGE I GUESS";
  }
}

function displayAnswers() {
  if (debounce == false) {
    document.getElementById("q1_answer").innerText = "Correct Answer: Aphelios";
    document.getElementById("q2_answer").innerText =
      "Correct Answer: Death Dance and Essence Reaver";
    document.getElementById("q3_answer").innerText = "Correct Answer: 1.16";
    document.getElementById("q4_answer").innerText =
      "Correct Answer: coalossal";
  }
  debounce = true;
}
function bob() {}

function submit() {
  let pointsArray = [
    checkQuestion1(),
    checkQuestion2(),
    checkQuestion3(),
    checkQuestion4(),
  ];
  let totalPoints = 0;
  for (let i = 0; i < pointsArray.length; i++) {
    totalPoints += pointsArray[i];
  }
  console.log(`You got a total of ${totalPoints} points`);
  return totalPoints;
}

function main() {
  submit();
  displayPoints();
  displayMessage();
  displayAnswers();
}
