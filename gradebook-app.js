function getAverage(scores) {
    const sumScore = 0;
    for (let index = 0; index < scores.length; index++) {
        sumScore += scores[index];
    }
    let average = sumScore / scores.length
    return average
  }

  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

// ---------------------------------------------------------------------

function getGrade(score) {
    if (score == 100) {
        return "A++";
    } else if (score < 100 && score >= 90) {
        return "A";
    } else if (score < 90 && score >= 80) {
        return "B"
    } else if (score < 80 && score >= 70) {
        return "C"
    } else if (score < 70 && score >= 60) {
        return "D"
    } else if (score < 60 && score >= 0){
        return "F"
    }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

// ---------------------------------------------------------------------


function hasPassingGrade(score) {
    let note = getGrade(score)
    if (note == "F") {
        return false
    } else {
        return true
    }
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

// ---------------------------------------------------------------------

function studentMsg(totalScores, studentScore) {
    let average = getAverage(totalScores)
    let grade = getGrade(studentScore)
    let message = "Class average: " + average + ". " + "Your grade:" + grade + "."
    if (grade == "F") {
        return message + "You failed the course."
    } else {
        return message + "You passed the course."
    }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));