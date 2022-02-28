# Webpack Express With Sass Example App

The goal of this repo is be an example of a basic but functional app built on Express and Webpack.

If you want to follow along, start from branch 0-initial-setup. Each branch in this project is a step along the path to creating a fully functional webpack setup. In each branch, there will be a documentation file that lists out the steps taken in that branch (each step is also roughly a git commit if you look at the history) which you can use as a checklist when setting up your own projects. 

## What we will cover

We will cover:

- Transpiling Sass to CSS using Webpack
- Fixing Javascript event errors
- Building a better production config for Webpack
- Adding Service Workers to our app using Webpack

## Get Up and Running

Fork this repo, then clone the branch of your choice from your forked repo down to your computer:

```
git clone https://github.com/<Github_Username>/fend-webpack-sass.git
```

`cd` into your new folder and run:
- ```npm install```
- ```npm run build-dev``` to start the webpack dev server
- ```npm run build-prod``` to generate a dist folder for prod
- ```npm start``` to run the Express server on port 8081
