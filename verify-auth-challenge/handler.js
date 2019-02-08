'use strict';

module.exports.verifyAuthChallenge = async (event, context, callback) => {
  const sentSecret = event.request.privateChallengeParameters.answer;
  const receivedSecret = event.request.challengeAnswer;
  
  event.response.answerCorrect = (sentSecret === receivedSecret);

  callback(null, event);
};
