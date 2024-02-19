// The provided course information.
  
  // function getLearnerData(course, ag, submissions) {
    const results = [];
  
    const example_result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0, // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833, // late: (140 - 15) / 150
      },
    ];
  
    // Parse submission data.
    // console.log(`Submission Data:`, submissions );
    // Check to see if the submission was late; if so, deduct 10% of the maximum possible points.
    // Find existing data for this learner, if any.
    // If the learner already has data, add the new score to the existing data.
    // Calculate the average score for each learner and remove the extra data.
  
    //==== PUT CODE HERE =====//
  
    function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
      for( const learnerID in LearnerSubmissions){
        console.log(LearnerSubmissions.learner_id)
      }


    }







    return results;
  
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);

getLearnerData()