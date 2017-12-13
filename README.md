# Microblog - Formation Angular 2+

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

Installation from scratch:  
1. installation **nodejs** (npm included) `https://nodejs.org/en/` 
2. installation **git bash** `https://git-for-windows.github.io/`
3. installation vs code (extensions AngularFiles,Angular Language Service,Angular v5 snippets)
4. npm install -g @angular/cli (utilisation command line)
5. ng new newproject --routing=true --prefix=mypfx --inline-style=true (pour utiliser son propre css)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Git

Run `git status` to see Git repo status  
Run `git log --oneline` to see commits log  
git stash  
git pull  
git checkout 572f336  
git checkout -b ng5-microblog-2  

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.  
`ng g c message-list/message-item`  
`ng g s shared/message-store`  
`ng g i shared/message`  

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.   
Exemples:   
ng serve -> build pour dev avec un vendor.bundle.js de 10 Mo  
deploiement avec firebase ? (dans les devDependencies)   
ng build -> vendor.bundle de 3.5 Mo  
ng build --prod -> presque moins d'1 Mo pour la totalité des fichiers, dont un (main) de 650Ko  

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).  
Run `ng t -sm=false --browsers=ChromeHeadless` to execute unit tests without sourcemap on Chrome Headless 

## Observable

`http://reactivex.io/rxjs/`  
`http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html` 


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

npm -v 5.5.1
node -v 8.9.3
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
