'use strict';

module.exports.createAuthChallenge = async (event, context, callback) => {
  if (event.request.session.length === 0 && event.request.challengeName === 'CUSTOM_CHALLENGE') {
    console.log('Email Challenge');
    event.response.publicChallengeParameters = {};
    event.response.privateChallengeParameters = {};
    event.response.privateChallengeParameters.answer = "123456789abcdefg";
    event.response.challengeMetadata = 'EMAIL_CHALLENGE';

  } else if (event.request.session.length === 1 && event.request.challengeName === 'CUSTOM_CHALLENGE') {
    console.log('SMS Challenge');
    event.response.publicChallengeParameters = {};
    event.response.privateChallengeParameters = {};
    event.response.privateChallengeParameters.answer = '123456';
    event.response.challengeMetadata = 'SMS_CHALLENGE';
  }
  
  callback(null, event);
};
