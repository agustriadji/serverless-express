<!--
title: 'AWS Serverless + lambda + api gateway + prisma'
description: 'This template demonstrates how to deploy a NodeJS function running on AWS Lambda using the traditional Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://gitlab.com/magictree/serevrless-lambda-apigateway'
authorName: 'agustriadji'
-->

# AWS Serverless Express Prisma

## APIDOC

please refer to our [documentation](https://documenter.getpostman.com/view/559121/2s9YCBvAVG) with Postman.

## Endpoint functions

```
endpoints:
   |   GET    | http://localhost:3000/Movies/{moviesId}                                 │
   │   GET    | http://localhost:3000/Movies                                            │
   │   POST   | http://localhost:3000/Movies                                            │
   │   PUT    | http://localhost:3000/Movies/{moviesId}                                 │
   │   DELETE | http://localhost:3000/Movies/{moviesId}                                 │
   │   PUT    | http://localhost:3000/chart-activate/{moviesId}                         │
```

## Usage

run serverless-offline, host default http://localhost:3000, EX: http://localhost:3000/movie-get

```bash
$ npm i
$ npx prisma migrate dev --name create-movies
$ sls offline start
```
