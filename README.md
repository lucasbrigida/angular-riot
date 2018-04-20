## riot.js module for angularjs - DEPRECATED

![riotjs](https://muut.com/riotjs/logo/riot240x.png)    ![angular](https://angularjs.org/img/AngularJS-large.png)

![bower](https://img.shields.io/bower/v/angular-riot.svg)   [![Gitter chat](https://badges.gitter.im/lucasbrigida/angular-riot.png)](https://gitter.im/lucasbrigida/angular-riot) [![Hit Counter](http://hits.dwyl.io/lucasbrigida/angular-riot.svg)](http://hits.dwyl.io/lucasbrigida/angular-riot.svg)

Description
=========
Today, you can use Angular + React with **[ng-react](https://github.com/davidchang/ngReact)** but I think isn't friendly enough.

Angular-Riot is a module for expose riot under angular, because:
- Can use only riot for rendering.
- Get more performance in your app.
- Eliminate warnings if you using jshint.
- Create reactive views without pain.

Benefits
=======
Reduce the number of $$watchers inside Angular to improve the $digest cycle’s performance, beyond get all the benefits of using [riot](https://muut.com/riotjs).

> I'm using in a old project and decreased the time rendering in seconds to mileseconds.


### Prerequisites
You need the **riot** installed, if you not have in your project, run command below:
``` sh
$ bower install riot --save
```
### Install
``` sh
$ bower install angular-riot --save
```
Don't know **RIOT** [learn more](https://muut.com/riotjs/).

### Uninstall
``` bash
$ bower uninstall angular-riot --save
```
### How use
Foolow [these instructions](https://muut.com/riotjs/guide/) and create similar code, 
``` javascript
angular.module('moduleName', ['angular-riot'])
  .controller('ctrlName', ['$scope', $document, 'riot', function ($scope, $document, riot) {
      $document.ready(function () { 
        riot.mount('todo', {
          title: 'I want to behave!',
          items: [
            { title: 'Avoid excessive coffeine', done: true },
            { title: 'Hidden item', hidden: true },
            { title: 'Be less provocative' },
            { title: 'Be nice to people' }
          ]
        });
      });
}]);
```
### Version
0.0.1

### Todo's

 - Coming soon

License
----

MIT


**Free Software, Hell Yeah!**
