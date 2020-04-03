# ECMAScript is not just for the web

Javascript originated in 1995 for the popular NetScape browser. NetScape partnered with Sun to prevent Microsoft from monopolizing the browser market with its Interenet Explorer. It became an ECMA (European Computer Manufacturers Association) standard in 1997 and has evolved from the early ECMAScript 1 to  ECMScript 2015 or ES6 or Typescript.

The original intent of Javascript was as a scripting language for use in browsers, which were applications that provided the front end GUI on any platform. This inherent feature of ECMAScript made it an ideal candidate for creating platform agnostic applications on and off the web.

So, besides the web, ECMAScript family of languages can be used to create:
- mobile applications
- desktop applications
- and even command line applications

## 1. Mobile applications
There are a number of hybrid mobile application frameworks available on the market which leverage the Webview in a mobile device, that works with HTML5, CSS and Javascript. Developers write to one single code base and the apps would look and work the same way on both Android and iOS devices. One easy to learn codebase, that works on the 2 most popular mobile platforms! While they may not be as performant as a native application, the reduced lead time to enter the market, is the most attractive part of the hybrid mobile frameworks. The most widely used are Ionic, Flutter and React Native.

### 1.1 Ionic
[Ionic](https://ionicframework.com/docs/) is an open source framework that leverages the power of Angular, React and Vue(in the near future).
The apps can accesses the device's native capabilities via many community or paid(premium) plugins.

For example, there are plugins that can use the devices camera or screen orientation or cause the device to vibrate. Typically, the code accesses these features via the Application Programming Interface(API) of the plugin device.
Plugins are installed via [Cordova](https://cordova.apache.org/) or [Capacitor](https://capacitor.ionicframework.com/).

Ionic has many built in UI components that help quickly construct an UI for the app and the interactions can be customized using the APIs for the components. Scaffolding and starting an app is easily done via a Command Line Interface(CLI).


### 1.2 Flutter
(TBD - need to research Google Flutter)


## 2.0 Desktop applications

Like cross platform mobile applications, desktop applications that can be rapidly deployed on any platform is a game changer for many companies.

The most popular among them is [Electron](https://www.electronjs.org/) which is open source and backed by GitHub. Electron has been used to create many popular desktop tools like Slack, Atom, WhatsApp to name a few. Here's a link to an exhaustive list of apps that have been developed - https://www.electronjs.org/apps. The ElectronJS project has a very active and vibrant community that has popularized this framework.

ElectronJS uses [Chromium](https://www.chromium.org/) which is the open source browser project used to build Google Chrome.

Architecture - ElectronJS App has a single Main Process that executes the Javascript that can create and run multiple Renderer Processes which are akin to multiple web pages running in its own process.  Communication between the Main and Renderer process is through an ipcMain module and ipcRenderer module.


## links
https://www.w3schools.com/js/js_versions.asp

https://medium.com/@benastontweet/lesson-1a-the-history-of-javascript-8c1ce3bffb17

https://captechconsulting.com/blogs/mobile-app-architecture-native-hybrid-and-common-misconceptions

https://ionicframework.com/docs/
