# AWS Serverless Skeleton

## Based on Serverless Framework

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
[![Build Status](https://travis-ci.com/Cloud-Labs-Org/AWS-Serverless-Skeleton.svg?branch=master)](https://travis-ci.com/Cloud-Labs-Org/AWS-Serverless-Skeleton/builds)
[![codecov](https://codecov.io/gh/Cloud-Labs-Org/AWS-Serverless-Skeleton/branch/master/graph/badge.svg)](https://codecov.io/gh/Cloud-Labs-Org/AWS-Serverless-Skeleton)
[![issues](https://img.shields.io/github/issues/Cloud-Labs-Org/AWS-Serverless-Skeleton)](https://img.shields.io/github/issues/Cloud-Labs-Org/AWS-Serverless-Skeleton/issues)
[![license](https://img.shields.io/github/license/Cloud-Labs-Org/AWS-Serverless-Skeleton)](https://img.shields.io/github/issues/Cloud-Labs-Org/AWS-Serverless-Skeleton/blob/master/LICENSE)


## What to expect

> The easiest way to start with serverless. Everithing is ready and if you want something just uncomment the code about that.
> There are a lot of predefined resources which are specific for a serverless applications.
> **Serverless has never been so easy!**


> Here is a list of libraries, tools, extensions, etc. that need to be installed to run the project.

* Serverless Framework: 1.47.0 | It is not included in the project. You have to install it globally with: `(sudo) npm i -g serverless@1.47.0`


## Resources Architecture

* **resources (Main directory)** Here should be all of the application resources in subdirectories
* **- APIGateway:** APIGateway directory: `Authorizers`, `REST APIGateway` and `Websockets APIGateway`, 
* **- Cognito:** Cognito directory has `user_pool.yml` where are all Cognito resources
* **- DynamoDB Tables:** DynamoDB directory with files for each table
* **- S3 Buckets:** S3Buckets directory with files for each bucket


## Functions(Lambdas) Architecture

* **Functions:** `functions` directory
* **Functions(code):** `src` directory has subdirectory: **handlers** for all of the handlers


## Tests Architecture

* There is a directory for all of the tests: **spec** - There you can see the same structure as in **src** but with test files.


## Already created helpers

* There is a **helpers** directory in **src** where you can find the helpers:
    - **config.ts**: Config class for all of the Lambda global environments.
    - **http-request-error.ts**: Custom Error class which is used for custom error handling. Throw this class when you want to throw an error and show the message as a response to the users
    - **response.ts**: It has a few parameters and a global error handling
       - First(**callback: Function**): The Amazon's callback from the hambda handler.
       - Second(**payload: Function**): Function which will be called in a try-catch block. It could be a promise.
       - Third(**errorResponseObject: {}**): key-value pairs if the response is error.
       - Fourth(**headers: {}**): Additional response headers.
       - Fifth(**statusCode: number**): Response status code.
       - Sixth(**isBase64Encoded: boolean**): If you need base64 encoding.


## Commands

* **npm run format:check:** Check you files for any errors and type mismatches.
* **npm run quality:check:** Do **format:check** and try to solve any problems by itself.
* **npm run test:** Start all of the tests in te project.
* **npm run coverage:** Start **npm run test:** and create **coverage** directory with exported code coverage.


## How to deploy

*  Create proper user with access to all needed resources and get the two keys
*  Configure Serverless Framework: `serverless config credentials --provider aws --key {PUBLIC_KEY} --secret {SECRET_KEY}`
*  Execute: `serverless deploy` optional: `--region us-east-1 --stage dev --aws-profile default`
