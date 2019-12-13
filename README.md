# AWS Serverless Skeleton

## Based on Serverless Framework

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
[![Build Status](https://api.travis-ci.com/Cloud-Labs-Org/AWS-Serverless-Skeleton.svg?branch=master)](https://api.travis-ci.com/Cloud-Labs-Org/AWS-Serverless-Skeleton)
[![npm version](https://badge.fury.io/js/serverless.svg)](https://badge.fury.io/js/serverless)
[![codecov](https://codecov.io/gh/serverless/serverless/branch/master/graph/badge.svg)](https://codecov.io/gh/serverless/serverless)
[![gitter](https://img.shields.io/gitter/room/serverless/serverless.svg)](https://gitter.im/serverless/serverless)
[![Known Vulnerabilities](https://snyk.io/test/github/serverless/serverless/badge.svg)](https://snyk.io/test/github/serverless/serverless)
[![license](https://img.shields.io/npm/l/serverless.svg)](https://www.npmjs.com/package/serverless)

> Here is a list of libraries, tools, extensions, etc. that need to be installed to run the project.

* Serverless Framework: 1.47.0 | It is not included in the project. You have to install it globally with: `(sudo) npm i -g serverless@1.47.0`


## Resources Architecture

* **resources (Main directory)** Here should be all of the application resources in subdirectories
* **- APIGateway:** APIGateway directory: `Authorizers`, `REST APIGateway` and `Websockets APIGateway`, 
* **- Cognito:** Cognito directory has `user_pool.yml` where are all Cognito resources
* **- DynamoDB Tables:** DynamoDB directory with files for each table
* **- S3 Buckets:** S3Buckets directory with files for each bucket


## Functions(Lambdas) Architecture

* **Functions:** `functions` directory has subdirectories for RestAPI and WebSocketsAPI
* **Functions(code):** `src` directory has subdirectories for RestAPI and WebSocketsAPI


## How to deploy

*  Create proper user with access to all needed resources and get the two keys
*  Configure Serverless Framework: `serverless config credentials --provider aws --key {PUBLIC_KEY} --secret {SECRET_KEY}`
*  Execute: `serverless deploy` optional: `--region eu-central-1 --stage dev --aws-profile default`
