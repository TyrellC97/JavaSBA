// const CourseInfo = {
//     id: 1,
//     name: "javascript"
//   };

const AssignmentGroup = {
  id: 50129,
  name: "java",
  course_id: "101-b",
  group_weight: 100,
  assignments: [
    {
      id: 125,
      name: "lab",
      due_at: 913,
      points_possible: 50,
    },
  ],
};

const learnerSubmissions = [
  {
    learnerId: 501,
    assignment_id: 25,
    submission: {
      submitted_at: 912,
      score: 25,
    },
  },
  {
    learnerId: 501,
    assignment_id: 24,
    submission: {
      submitted_at: 913,
      score: 45,
    },
  },
];

//================= First attempt

// const grade = learnerSubmissions[0].submission.score;
// const points = AssignmentGroup.assignments[0].points_possible;

// const finalScore = grade / points;

// // function getLearnerData() {
// //   console.log("Student Number: " + LearnerSubmissions[0].learner_id);
// //   console.log("Assignment Score: " + finalScore);

// // }


// ========================second attempt

// function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions){

let students = {
  student: 0,
  grades: " ",
  average: 0
};

// Student Num
for (i = 0; i < learnerSubmissions.length; i++)
  if (learnerSubmissions[i].learnerId < 510) {
    students["student"] = learnerSubmissions[i].learnerId;
  }

let grades;
// student grades
for (i = 0; i < learnerSubmissions.length; i++)
  if (learnerSubmissions[i].submission.score >= 0) {



    
    students["grades"] =
      "Assign #" +
      learnerSubmissions[i].assignment_id +
      " - " +
      learnerSubmissions[i].submission.score +
      "/" +
      AssignmentGroup.assignments[0].points_possible;


// calculate average

      const allGrades = []
  for(i = 0; i < learnerSubmissions.length; i++)
    if ( learnerSubmissions[i].submission.score >= 0)
    allGrades.push(learnerSubmissions[i].submission.score / AssignmentGroup.assignments[0].points_possible)

    

    let sum = 0;
    for (let i = 0; i < allGrades.length; i++) {
     sum += allGrades[i];
}
    const avg = sum / allGrades.length

    students['average'] = avg
  



    console.log(students);
    // // console.log(allGrades);
  }




// }


  


// ============== third attempt
