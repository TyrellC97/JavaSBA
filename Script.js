// const CourseInfo = {
//     id: ,
//     name:
//   };

const AssignmentGroup = {
  id: 50129,
  name: "java",
  course_id: 501,
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

const LearnerSubmissions = [
  {
    learner_id: 501,
    assignment_id: 25,
    submission: {
      submitted_at: 912,
      score: 25,
    },
  },
];

const grade = LearnerSubmissions[0].submission.score;
const points = AssignmentGroup.assignments[0].points_possible;

const finalScore = grade / points;

// function getLearnerData()
console.log("Student Number: " + LearnerSubmissions[0].learner_id);
console.log("Assignment Score: " + finalScore);
