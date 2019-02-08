'use strict';

module.exports.defineAuthChallenge = async (event, context, callback) => {
  if (!event.request.session || event.request.session.length === 0) {
    event.response.issueTokens = false;
    event.response.failAuthentication = false;
    event.response.challengeName = 'CUSTOM_CHALLENGE';
  } else if (event.request.session.length === 1 && event.request.session[0].challengeName === "CUSTOM_CHALLENGE" && event.request.session[0].challengeResult == true) {
    event.response.issueTokens = false;
    event.response.failAuthentication = false;
    event.response.challengeName = "CUSTOM_CHALLENGE";
    // Here is want I want but could not make work:
    // event.response.challengeName = "SMS_MFA";
  } else if (event.request.session.length === 2 && event.request.session[1].challengeName == 'CUSTOM_CHALLENGE' && event.request.session[1].challengeResult == true) {
  // } else if (event.request.session.length === 2 && event.request.session[1].challengeName == 'SMS_MFA' && event.request.session[1].challengeResult == true) {  
    event.response.issueTokens = true;
    event.response.failAuthentication = false;
  } else {
    event.response.issueTokens = false;
    event.response.failAuthentication = true;
  }

  callback(null, event);
};
