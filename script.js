function checkQuestion1() {
  let rightAnswer = document.getElementById("aphelios");
  if (rightAnswer.checked == true) {
    console.log("[question 1] correct.");
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
  console.log(`[question 2] ${rightAnswersCounter} correct.`);
  return rightAnswersCounter;
}

function checkQuestion3() {
  const rightAnswer = "1.16";
  let userAnswer = document.getElementById("q3").value;
  if (userAnswer == rightAnswer) {
    console.log("[question 3] correct.");
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
  if ((totalPoints == 1, 2)) {
    document.getElementById("display_message").innerHTML = "YOU SUCK!";
  }
  if ((totalPoints == 3, 4)) {
    document.getElementById("display_message").innerHTML = "EHHH";
  }
  if (totalPoints == 5) {
    document.getElementById("display_message").innerHTML =
      "ABOVE AVERAGE I GUESS";
  }
}

function displayAnswers() {}

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
