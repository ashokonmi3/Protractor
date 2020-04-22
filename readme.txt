Protractor

Webdriver+ Angular = Protractor
-- Nodejs program built upon the webdriverJS

Installation:
-------------
1) Download and install node.js
https://nodejs.org/en/download/

2) Set the environment path for nodejs
C:\Program Files\nodejs add this path in environment variable

3) give "node -v" command in the command prompt it will print the node version
   v10.16.3

4) Node package management(npm)
will install all dependencies from repositary ( like maven) it comes with node itself
npm -v
( if ths does not give version set the npm also in the system path
C:\Program Files\nodejs\node_modules\npm\bin)

5) install protractor
npm install -g protractor

6) The installation location is below one.
C:\Users\<username>\AppData\Roaming\npm

7) webdriver manager is a tool, all dependency it will get
The webdriver-manager is a helper tool to easily get an instance of
 a Selenium Server running. Use it to download the necessary binaries with:

webdriver-manager update

8) Now start up a server with:(it connects protractor commands to browser)
his will start up a Selenium Server and will output a bunch of info logs.
Your Protractor test will send requests to this server to control a local browser.
You can see information about the status of the server
at http://localhost:4444/wd/hub.
command is

webdriver manager start

If to start on any other port use below command
webdriver-manager start --seleniumPort 12345

describe test suite
it test case
spec - class/ test file

Configuration file(TestNG xml file)

Visualstudio settings:
----------------------
Create a new folder and import that newfolder(like project)
protractor conf.js

