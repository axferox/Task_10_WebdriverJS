# About:
This is my pet project of selfsufficient web testing framework baseon on Selenium Webdriver 4, Selenium Grid 4 with using the Page Object model and Page Factory

# Requirements:
+ Node version 8 or above
+ Bash shell
+ Java

# Installation:
1. First you'll need to install the npm 

2. Update your chrome and gecko drivers for Selenium Grid according to your operating system in this folder: 'test/grid'. 
By default it's used the web drivers for launch on a MacOS

3. Launch the Grid Hub 
```
npm run selenium hub
```
4. Then you'll need to launch the Firefox agent node or Chrome node and specify one of the proposed OS's, amount of nodes in unlimited so node selects the free random port from the range
```
npm run node with chrome 99 windows sequental
```
OR
```
npm run node with firefox 95 mac parallel

```
# Launch
To launch the test run you'll need to define the test type smoke/sanity/regression, target browser, it's version, target platform and environment like here:
```
npm start test smoke chrome 99 windows localhost 
```

Project is still under construction and will be maintained as long as it's posssible