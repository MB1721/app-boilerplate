# Developer Guide

These are in-depth developer guidelines for using this project. Note that some CLI commands may require `sudo` prepended to them to work. 
This guide presents general knowledge in a way that is as beginner-friendly as possible.

## Tech Stack 

React, Bootstrap, Express.js, MySQL

I am using Node.js v20.12.0 and npm v10.5.0.

## What to Know

Developers are encouraged to learn the following languages, libraries, and frameworks to contribute to the project.

### Front-End

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML): Markup for defining webpage structure and elements. This is what the user sees.

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): Styling for positioning elements and adding aesthetics to the webpage.
  * [Sass](https://sass-lang.com): CSS library which adds dynamic styling and flexibility to standard CSS.
  * [Bootstrap](https://getbootstrap.com): CSS framework. Learning Sass before exploring this framework is recommended, as it is used a lot in the background. 

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (JS): Has several uses, but is primarily used to add interactability and dynamism to the front end.
  * [TypeScript](https://www.typescriptlang.org): A [strongly typed](https://medium.com/@fedor.selenskiy/static-dynamic-vs-strong-weak-typing-a-common-misconception-d050f24b7db9) variant of JS.
  * [React](https://react.dev): Javascript library used for creating components (reusable pieces of JSX).

### Back-End

- [Node.js](https://nodejs.org/en): Server-side JavaScript; Used to process and serve files, make server requests, and connect to the website database.  
  * [Express.js](https://expressjs.com): An framework for Node.js.

- [SQL](https://www.w3schools.com/sql/): Query language for working with database management systems (DBMS). Each "flavor" of SQL has its unique syntax, 
  but learning one of any of the following will put you in good standing to understand our database.
  * [MySQL](https://dev.mysql.com/doc/refman/8.0/en/what-is-mysql.html): Most popular open-source DBMS. Distributed by Oracle
  
### Other

- [Git CLI](https://git-scm.com) & [GitHub](https://github.com): Version control system (VCS) for making changes to the repository.

## Setting Up A Dev Environment

After creating your cloned repo, run the following commands:

```bash
npm run build
npm run compile dev
npm run dev
```

`npm run build` will remove all app dependencies and reinstall them in your development space. After all dependencies have been reinstalled, `npm run compile dev` will compile the app with webpack, and `npm run dev` will start the app on the configured [URL](http://localhost:5670). 

Navigate to the url. Open the browser console to view further developer instructions. You are now ready to start development.

## Setting Up A Production Environment

These steps are important when you want to replicate the finished application on your local machine. Run the following commands:

```bash
npm run build
npm run compile prod
npm start
```

`npm run compile prod` will instruct the [server.js](./server.js) file to use a `.env` file for server config.
