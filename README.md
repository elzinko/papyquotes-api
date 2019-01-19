# Papy quotes API

## TL;TR

This API is a list of submersive quotes from Papy.

https://papyquotes-api.herokuapp.com/quotes

## What you need

You need to install npm before

## How to start server

```
npm install
npm start
```

## What does contain this f***** API

* Quote list :

```
open http://localhost:8085/quotes
```

* random quote :

```
open http://localhost:8085/quote
```

## I want my own Heroku

But wait! WTF is Heroku ?! Check https://www.heroku.com/home

* create an account

At first, you need to create a free Heroku account

* install heroku client

```
npm install -g heroku
```

For more help : https://devcenter.heroku.com/articles/heroku-cli#npm

* log into account
  
```
heroku login
```

* initialize project
  
```
heroku create --remote papyquotes-api
```

* push code to heroku

```
git push heroku master
```

* check the logs

```
heroku logs --tail
```
