# Papy quotes API

## TL;TR

This API is a list of submersive quotes from Papy.

## Preambule

You need to install npm before

## Server start

```
npm install
npm start
```

## API description

* Quote list :

```
open http://localhost:8085/quotes
```

* random quote :

```
open http://localhost:8085/quote
```

## Deploy on Heroku

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


## Chek deployed app

* open https://git.heroku.com/infinite-brushlands-35208.git