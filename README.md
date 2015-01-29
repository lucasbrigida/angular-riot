#riot.js module for angularjs
![riotjs](https://muut.com/riotjs/logo/riot240x.png)    ![angular](https://angularjs.org/img/AngularJS-large.png)

Angular-riotjs is a module for expose riot.js.
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



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/lucasbrigida/angular-riot/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

