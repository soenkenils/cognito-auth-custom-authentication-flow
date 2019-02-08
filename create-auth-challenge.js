'use strict';

module.exports.createAuthChallenge = async (event, context, callback) => {
  if (event.request.session.length === 0 && event.request.challengeName === 'CUSTOM_CHALLENGE') {
    console.log('E-Mail Challenge');

    const secret = '123456789abcdefg';

    // send E-Mail

    event.response.publicChallengeParameters = {};
    event.response.privateChallengeParameters = {};
    event.response.privateChallengeParameters.answer = secret;
    event.response.challengeMetadata = 'EMAIL_CHALLENGE';
  } else if (event.request.session.length === 1 && event.request.challengeName === 'CUSTOM_CHALLENGE') {
    console.log('SMS Challenge');

    const code = '123456';

    // send SMS

    event.response.publicChallengeParameters = {};
    event.response.privateChallengeParameters = {};
    event.response.privateChallengeParameters.answer = code;
    event.response.challengeMetadata = 'SMS_CHALLENGE';
  }

  callback(null, event);
};
