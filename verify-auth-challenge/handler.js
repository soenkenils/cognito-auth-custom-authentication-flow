'use strict';

module.exports.verifyAuthChallenge = async (event, context, callback) => {
  if (event.request.privateChallengeParameters.answer.length > 6) {
    const plaintextKey = event.request.challengeAnswer;
    const encryptedKey = event.request.privateChallengeParameters.answer;
    event.response.answerCorrect = await bcrypt.compare(plaintextKey, encryptedKey);
  } else {
    const sentPIN = event.request.privateChallengeParameters.answer;
    const receivedPIN = event.request.challengeAnswer
    event.response.answerCorrect = (sentPIN === receivedPIN);
  }

  callback(null, event);
};
