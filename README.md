# Custom Authentication Flow with AWS Cognito

Four lambda triggers are used ([link to AWS documentation](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html)):

1. Pre-Sign-Up
2. Define Challenge
3. Create Challenge
4. Verify Challenge

The first trigger auto-confirms users pre-sign-up. 

The triggers 2-4 define two custom challenges:

1. Send random String via E-Mail
2. Send 6-digit code via SMS
