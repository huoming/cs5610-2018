/*
* #build
$ ng build --environment=production
#shorthand
$ ng b -prod

#serve
$ ng serve --environment=production
#shorthand
$ ng s -prod
* */


export const environment = {
  production: true,
  baseUrl: "http://your-heroku-url"
};
