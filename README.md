By Jeremiah Freeman

## Description
 - This is a website where users may enter a medical issue (ie: “back pain”) into a form, submit it, and receive a list of doctors they may seek out to help with their medical issue.


## Planning
  1. Configuration/dependencies:
    - Node first to setup package.json.
    - Bower second to setup bower.json.
    - Install and/or initialize Gulp - Concat - Browserify - Source - Uglify - Utilities - BuildProduction - Del - JSHint - Lib - BrowserSync - Sass - SourceMaps.
        - These dependencies will be located inside 'gulpfile.js' along with all build 'tasks'.
    - --- ADD 'node_modules/' and .DS_Store TO .gitignore NOW before COMMITING! ---
    - Create project folder and initial files.
      - js/sass folders
        - README.md - index.html - .gitignore - gulpfile.js (top of project)


  Specs:
    1. user inters medical issue into input form | "tooth ache" | list of doctors appears


  Integration:
    - Build out HTML page with simple form for collecting user input.
    - Build out js page with doc ready to allow for collecting the value of user input.
    -- get that working --
    - Get API key call working ( test on PostMan to check if key is functioning and retrieving data correctly )
    - After API key works with js and HTML, separate js page in to front and back logic (two pages).
    - Connect all pages with exports / modules ( make it function ).
    - Hide API key in .env file in top of directory / store in variable.
    - Make API call again to confirm its functioning.


  UX/UI:
    - Add custom styling / form placement.
    - Bootstrap or jQuery UI( try jQuery UI to improve understanding ).
    - Add image to README.md(icon size)


  FreshenUp:
    - Clean up unneeded code or old code.
    - Fix indentation.
    - Make it tidy.


  Last Call:
    - Pass through objectives one last time.
    - Push one last time.
    - Submit to Epicodus.


## Setup / Installation Requirements
  - Clone repository " https://github.com/jaythinkshappiness/node-doctor-lookup-api " to your desktop from the Terminal.
  - From the command line run ' npm install '.
  - Then run the command ' bower install '.
  - Make sure your API key is functional and replace "apiKey" on line 7 of 'doctor-search.js'
  - Run gulp build in Terminal
  - Run gulp serve in Terminal
  - Now enter in a medical symptom in to input box and hit enter.

## Known Bugs

There are no known bugs.

## Support and contact details

If you notice bugs or would like to contribute in any way please contact me at jaythinkshappiness@gmail.com

## Technologies Used

HTML
Javascript
jQuery
Node
Gulp
Bower
Browserify
JShint





### License
GNU GENERAL PUBLIC LICENSE Version 3
Copyright (c) 2017 Epidocus, Jeremiah Freeman
