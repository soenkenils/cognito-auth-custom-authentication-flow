'use strict';

module.exports.preSignUp = async (event, context, callback) => {
    event.response.autoConfirmUser = true;
    event.response.autoVerifyEmail = true;
    event.response.autoVerifyPhone = true;
    
    callback(null, event);
};
