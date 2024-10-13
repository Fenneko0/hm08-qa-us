# Project 8: Task - Test Automation

## The project's goal

This project's aim is to teach how to write automation tests using webdriver Selenium/WebdriverIO. The tasks of this project is to write several tests to check the functionality of Urban Routes site, a web mapping platform made by Tripleten - online coding boot camp.

## Prerequisites

Node.js (version >= v21.02.0)
NPM (version >= 10.2.3)

Install Node.js and NPM from the [official website](https://nodejs.org/en).

## Instalation and Usage

1. Clone the repository to your local machine:
   **git clone git@github.com:yourUsername/hm08-qa-us.git**
2. Navigate to the project directory:
   **cd hm08-qa-us**
3. Install the required dependencies:
   **npm install**
   _webdrivers_
   npm install chromedriver@latest --save-dev // for Chrome
   npm install geckodriver wdio-geckodriver-service --save-dev // for Firefox
   *The WebdriverIO's service called **intercept***
   npm install wdio-intercept-service -D

## Running the tests

In order to run these test, one must start the Tripleten's Urban Routes server, copy the link of the started server into "baseUrl" within wdio.conf.js, which is located in hm08-qa-us folder.
Once it's done use 'npm run wdio' command

## Technologies Used

- Node.js: Backend runtime environment.
- WebdriverIO: End-to-end testing framework.
- Mocha: Testing framework.
