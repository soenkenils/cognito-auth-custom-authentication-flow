# Custom Authentication Flow with AWS Cognito

Four lambda triggers are used ([link to AWS documentation](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html)):
0. Pre-Sign-Up: Auto-confirms users
1. Define Challenge
2. Create Challenge 
3. Verify Challenge

The triggers 1-3 define two custom challenges:
1. Send random String via E-Mail
2. Send 6-digit code via SMS
