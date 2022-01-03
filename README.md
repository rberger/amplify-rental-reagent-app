# Amplify Rental Reagent App

**NOTE: This had been superceded by https://github.com/rberger/amplifystudio-cljs-tutorial**

_NOTE: \_THIS IS STILL UNDERCONSTRUCTION AND THESE INSTRUCTIONS ARE NOT UP TO DATE_ 12/23/2021\_

Implements the AWS Tutorial [Build a Vacation Rental Site with Amplify Studio](https://welearncode.com/studio-vacation-site/) but instead of being Javascript based, uses Clojurescript for the project implementation. It does incorporate the Javascript output of Amplify Studio but all code to use it is in Clojurescript.

## Tooling Used:

- [Create Reagent App](https://github.com/AutoScreencast/create-reagent-app) to create the project scaffold
- [Shadow-CLJS](http://shadow-cljs.org/) as the build tool / compiler
- [Reagent](https://github.com/reagent-project/reagent) (CLJS wrapper around [React](https://reactjs.org/)) for building your user interface
- [Amplify Studio](https://aws.amazon.com/amplify/studio/) and all the related [AWS Amplify tooling](https://aws.amazon.com/amplify/)

Follow the instructions from the original article up thru to `Pull to Studio`

## Clojurescript Version

### Create a git repo with shadow-cljs / reagent scaffolding

We’re going to use [create-reagent-app - npm](https://www.npmjs.com/package/create-reagent-app) to create the scaffolding of a shadow-cljs / reagent / react app repo

```
npx create-reagent-app  amplify-rental-reagent-app
cd amplify-rental-reagent-app
npm-install
```

### Add webpack and releated dependencies

```bash
npm i -D @babel/cli @babel/core @babel/preset-react @babel/preset-env babel-loader css-loader style-loader sass-loader html-webpack-plugin html-beautifier-webpack-plugin process webpack webpack-cli
```

### ~~Add babel for converting JSX to JS~~

_NOTE: THIS IS NOT BEING USED NOW. REPLACED BY THE WEBPACK STUFF_

Shadow-cljs can not directly consume JSX files and the Amplify UI components from the Figma plugin are delivered as JSX files.
This is based on info from [Shadow CLJS User’s Guide - JavaScript Dialects](https://shadow-cljs.github.io/docs/UsersGuide.html#_javascript_dialects)

So we need to install the appropriate babel tool

```bash
npm i @babel/core @babel/plugin-transform-react-jsx @babel/preset-env @babel/cli --save-dev
```

Create the `.babelrc` file in `src/amplify/.babelrc` (You will have to create the js directory)

```json
{
  "plugins": ["@babel/transform-react-jsx"]
}
```

Then update any dependencies to the latest versions
If you don’t already have it, install [npm-check-updates - npm](https://www.npmjs.com/package/npm-check-updates)

```
npm install -g npm-check-updates
```

And then run it to update any dependencies to the latest versions ignoring specified versions in the package.json.

I like to start projects with the latest versions of everything. But you could just make sure `shadow-cljs` is the latest version, best to stay latest with that.

If you run it without the `-u` it will just show you what it would update and you could manually update the ones you care about.

```
ncu -u
npm install
```

### Make it into a git repo

```
git init
git add -A
git commit -m "Initial commit from scaffholding"
```

If you want, you could push it to your own remote Github or other repository

### Add AWS Dependencies

- AWS Account
  - If you don’t already have an AWS account, you’ll need to create one in order to follow the steps outlined in this tutorial. [Create an AWS Account](https://portal.aws.amazon.com/billing/signup?redirect_url=https%3A%2F%2Faws.amazon.com%2Fregistration-confirmation#/start)
- Amplify CLI
  If you don’t already have the Amplify CLI installed you can install it with

```
npm install -g @aws-amplify/cli
```

- Configure Account / IAM / CLI to work with Amplify
  If you already have an AWS account you want to use and you have things setup in your workstation / Terminal to use AWS CLI via profiles in ~/.aws/credentials, you can just set your profile in your terminal for the profile to use

```
export AWS_PROFILE=<your profile>
```

and you don’t need to do `amplify configure` .

If you haven’t set such at think up, follow the instructions at [Configure the Amplify CLI](https://docs.amplify.aws/cli/start/install/#configure-the-amplify-cli)

### Install the was-amplify libraries in your project

Still at the top of the `amplify-rental-reagent-app` repo, install the libraries

```
npm i aws-amplify @aws-amplify/ui-react
```

You might want to commit the changes to git just as a snapshot in case the next step messes anything up.

```
git commit -a -m "After adding amplify deps"
```

### Sync repo with Amplify project

Using the amplify CLI, pull the project info and ui-components into your repo.

You’ll get the command to do this from your Amplify Apps page that was created earlier.
![](images/AWS_Amplify_Console%202.png)

If you are using an AWS account via IAM, you should log in to your AWS Console on your default browser. The following command is going to open up your default browser to authenticate to AWS.

If you are not using AWS IAM for auth, but are using the Amplify Console that has its own username/password style login, you don’t need to do anything in advance.

**DON’T TYPE THIS EXACT LINE**
Use the line from your environment as it has the appID for your application
The following line is just an example

```bash
amplify pull --appId dgt42342sdv765la --envName staging
```

This will eventually open a browser page to authenticate the process. As mentioned earlier, if you are using IAM for access, its easiest if you logged into the AWS Console with your browser first. If you forget to do this, you can still login now, and copy and past the link shown in the output of the CLI command and it will retry authenticating.

If you are using the Amplify Studio username/password, you will get that dialog on the browser and you can fill it in and click Yes

![](images/Amplify_Studio%205.png)

It will then prompt you for a bunch of things to set up your amplify project in this repo

```
Opening link: https://us-west-2.admin.amplifyapp.com/admin/dgt42342sdv765la/staging/verify/
✔ Successfully received Amplify Studio tokens.
Amplify AppID found: dgtkqevv765la. Amplify App name is: rental-cljs
Backend environment staging found in Amplify Console app: rental-cljs
? Choose your default editor:
  Android Studio
  Xcode (Mac OS only)
  Atom Editor
  Sublime Text
  IntelliJ IDEA
  Vim (via Terminal, Mac OS only)
❯ Emacs (via Terminal, Mac OS only)
(Move up and down to reveal more choices)
```

Of course the only choice that makes sense is Emacs 🤓
(Note even though it says via terminal, it works fine with GUI Emacs)

```
? Choose the type of app that you're building (Use arrow keys)
  android
  flutter
  ios
❯ javascript
```

Keep javascript

```
? What javascript framework are you using (Use arrow keys)
  angular
  ember
  ionic
❯ react
  react-native
  vue
  none
```

Keep react

```
? Source Directory Path:  src/amplify
? Distribution Directory Path: public
? Build Command:  npm run-script build
? Start Command: npm run-script start
```

Enter `src/amplify`for `Source Directory Path`
Enter `public` for `Distribution Directory Path`
This build puts everything in `public` but other scaffolding or cljs projects may use some other path. It should be the same as the directory above `js` in the `output-dir` parameter in `shadow-cljs.edn`

The rest of the config inputs and outputs:

```
✔ Synced UI components.
GraphQL schema compiled successfully.

Edit your schema at /Users/rberger/work/aws/amplify-rental-reagent-app/amplify/backend/api/rentalcljs/schema.graphql or place .graphql files in a directory at /Users/rberger/work/aws/amplify-rental-reagent-app/amplify/backend/api/rentalcljs/schema
Successfully generated models. Generated models can be found in /Users/rberger/work/aws/amplify-rental-reagent-app/src/main
? Do you plan on modifying this backend? (Y/n) Y
```

Say `Y` for `Do you plan on modifying this backend? `

### Move the `ui-components` jsx files out of `src/js`

_NOTE: THIS NEEDS TO BE CHANGED TO USE WEBPACK_

Shadow-cljs can’t directly consume JSX files, so we need to use babel to convert them to JS files. To do this we have to take the JSX files out of the CLJS :source-path

```bash
mkdir src/jsx
mv src/js/ui-components src/jsx/
```

You will need to generate the js files with babel. You’ll need to do this every time the `ui-components` are updated via an `amplify pull`

```
px babel src/jsx --out-dir src/js
```

You might want to checkpoint your git repo again after this.

You can make sure the basic reagent setup is still working by doing:

```bash
npm start
```

And see that the app is running at `http://localhost:3000`
You will just see `Create Reagent App` on the page as a header.

## Update to support mixing webpack with shadow-cljs

Based on David Vujic’s work [Agile & Coding: Hey Webpack, Hey ClojureScript](https://davidvujic.blogspot.com/2021/08/hey-webpack-hey-clojurescript.html) we’re going to add mechanisms to build the javascript code using webpack and the clojurescript code with shadow-cljs. This is necessary when using more recent versions of the AWS Amplify libraries.

Add the following lines to shadow-cljs.edn between the `:asset-path` and `:modules` stanzas in the `:app` section

```clojure
   :js-options {:js-provider    :external
                :external-index "target/index.js"}
```

### Update `index.html` to load the libs from both shadow and webpack

Edit `public/index.html` to change the line

```html
<script src="/js/main.js"></script>
```

To

```html
<script defer src="/js/libs/bundle.js"></script>
<script defer src="/js/main.js"></script>
```

## Update the scaffold code to support Amplify

### Add the dependencies

Edit `src/main/amplify_rental_reagent_app/app/core.cljs`
Add the aws imports to the require

```clojure
(ns amplify-rental-reagent-app.app.core
  (:require [reagent.dom :as rdom]
            ["/aws-exports" :default ^js aws-exports]
            ["aws-amplify" :default Amplify]))
```

Create a file `webpack.config.js` with the content

```javascript
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./target/index.js",
  output: {
    path: path.resolve(__dirname, "public/js/libs"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        // docs: https://webpack.js.org/configuration/module/#resolvefullyspecified
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
};
```

Add the following line to the `”scripts”` section of `package.json`

```json
    "pack": "webpack --watch"
```

And the following to the `:devDependencies section (Use the latest versions available)

```json
    "webpack": "5.65.0",
    "webpack-cli": "^4.9.1"
```

Then do

```bash
npm start
```

And in another terminal window, also at the top of the repo run:

```
npm run pack
```

---

## General instructions from Scaffolding

### 1. Install Dependencies

Note: This step creates a `node_modules` folder with all the dependencies in your project folder. You can use either `yarn` or `npm` as your package manager.

```
npm install
```

Note: Creates a `package-lock.json` file in your project folder.

### 2. Start the App

- First start the shadow-cljs processes to run the main clojurescript

```
npm start
```

- Then start the webpack watcher to update the javascript libraries

```bash
npm run pack
```

### 3. Open Your Browser

Then open http://localhost:3000/ in your browser to see your app.

---

## Available Scripts

### Start App

This will compile the app in development mode, and watch for any changes in your code.
Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

```
npm start
```

This operation creates a `.shadow-cljs` folder in your project folder.

### Build Release Version of App

This compiles the app in production mode, using `:advanced` compilation settings. The finished build (under `public/js`) will be in the `public` folder, which can be deployed.

```
npm run build
```

This operation creates a `.shadow-cljs` folder in your project folder.

### Debug Release Version of App

Sometimes you may run into some release issues due to `:advanced` compilation. The following command may help you track down the causes:

```
npm run debug-build
```

### Show Detailed Build Report of Release Version of App

A detailed build report will be shown in your CLI, and a `report.html` file will be created in your project folder.

```
npm run report
```

### Serve Your App Build Locally

This will serve your finished build (from doing a production build via `yarn build` or `npm run build`, or from doing a development build via `yarn devbuild` or `npm run devbuild`) on [http://localhost:5000](http://localhost:5000) in your browser.

```
npm run serve
```

### Build Development Version of App

This compiles the app in developent mode once and then exits. The finished build will be in the `public` folder. This command does _not_ watch your code for changes (use `yarn start` or `npm start` to build the app in development mode _and_ watch for changes).

```
npm run dev-build
```

This operation creates a `.shadow-cljs` folder in your project folder.

### Connect to a Build-specific Browser REPL

From a different Terminal, connect to a browser REPL for your specific build (only available while `yarn start` or `npm start` is running, that is, Shadow-CLJS is “watching” your code for changes). Note also that your build must be running in the browser (`localhost:3000`).

See [this section](https://shadow-cljs.github.io/docs/UsersGuide.html#build-repl) of the Shadow-CLJS documentation for more details.

```
npm run repl
```

### Connect to a Blank Browser REPL

This starts a blank CLJS REPL and will open an associated browser window where the code will execute. It is not connected to any specific build target. Since it is not connected to any build it does not do any automatic rebuilding of code when your files change and does not provide hot-reload. If you close the browser window the REPL will stop working.

See [this section](https://shadow-cljs.github.io/docs/UsersGuide.html#browser-repl) of the Shadow-CLJS documentation for more details.

```
npm run browser-repl
```

### Connect to a Clojure REPL

A Clojure REPL is also provided in addition to the provided ClojureScript REPLs. This is can be used to control the shadow-cljs process and run all other build commands through it. You can start with a Clojure REPL and then upgrade it to a CLJS REPL at any point (and switch back).

See [this section](https://shadow-cljs.github.io/docs/UsersGuide.html#_clojure_repl) of the Shadow-CLJS documentation for more details.

```
npm run clojure-repl
```

### Compile tests and watch for changes

(Run in a separate Terminal.) This runs the tests and watches them for changes, re-running when a change is detected.

```
npm test
```

Note: Creates an `out` folder in your project folder, containing a `node-tests.js` file.

### Compile tests and run them once

(Run in a separate Terminal.) This runs the tests once and then exits. This command does _not_ watch your tests for changes (use `npm test` to run tests _and_ watch for changes).

```
npm run test-once
```

Note: Creates an `out` folder in your project folder.

### Remove Generated JS Code (“Clean”)

Remove (“clean”) the `public/js` folder and contents generated during compilation.

```
npm run clean
```

### Remove All Generated Code and Dependencies (“Nuke”)

Remove all (“nuke”) of the following:

- `public/js` folder and contents
- `.shadow-cljs` folder and contents
- `node_modules` folder and contents
- `package-lock.json` file (or `yarn.lock` file, if you specified the `yarn` option for your package manager)
- `out` folder and contents (containing tests)
- `report.html` file showing release build details

```
npm run nuke
```

Note that after this operation you will need to run `npm install` again before starting the app, to re-install the dependencies.

### Run a Shadow-CLJS Server

Shadow-CLJS can be fairly slow to start. To improve this Shadow-CLJS can run in “server mode” which means that a dedicated process is started which all other commands can use to execute a lot faster since they won’t have to start a new JVM/Clojure instance.

You can run the process in the foreground in a dedicated Terminal. Use CTRL+C to terminate the server.

```
npm run shadow-cljs-server
```
