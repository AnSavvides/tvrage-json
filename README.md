[![Build Status](https://travis-ci.org/AnSavvides/tvrage-json.png)](https://travis-ci.org/AnSavvides/tvrage-json)
[![Stories in Ready](https://badge.waffle.io/AnSavvides/tvrage-json.png)](http://waffle.io/AnSavvides/tvrage-json)
[![Dependency Status](https://david-dm.org/AnSavvides/tvrage-json.png)](https://david-dm.org/AnSavvides/tvrage-json)

# TV Rage JSON

A node.js API for the [TVRage web services](http://services.tvrage.com/info.php?page=main); as per the name, all responses are JSON.

# Installation

`npm install tvragejson`

# Usage

```js
var TVRage = require('tvragejson');

// Search for a show by name, returning the first match.
TVRage.search("The Big Bang Theory", function(response) {
    console.log(response['Results']['show'][0]);
});

// Get information for a particular show - in this case we
// are using the show ID for "The Big Bang Theory".
TVRage.search("8511", function(response) {
    console.log(response);
});

```

# Supported methods
* `search` - Search shows by name
* `fullSearch` - Full search for shows by name
* `showInfo` - Show info based on a show id that can be acquired via `search` or `fullSearch`
* `fullShowInfo` - Full show info based on a show id that can be acquired via `search` or `fullSearch`
* `episodeList` - Episode list based on a show id that can be acquired via the `search` or `fullSearch`
* `episode_info` - Episode info based on a show id (attainable via `search` or `fullSearch`) and an episode (attainable via `episodeList`)
* `fullShowList` - Full TV show list
* `fullSchedule` - Full TV schedule based on a two letter country representation as defined by [ISO 3166](http://www.iso.org/iso/country_codes)

# What's next?
* Add some tests
* Return XML as served from TVRage without converting to JSON

# Contributing
All contributions are welcome, feel free to fork `master`, make your changes and open a pull request.

[Grunt](http://gruntjs.com/) is used with the [JSHint](https://github.com/gruntjs/grunt-contrib-jshint) and [Watch](https://github.com/gruntjs/grunt-contrib-watch) plugins.
To get up and running with grunt you need to do the following:

* Install the [Grunt Command Line Interface tools](https://github.com/gruntjs/grunt-cli):
`npm install -g grunt-cli`
* Install the current Grunt version local to this project (so ensure you make this within the project's directory):
`npm install grunt --save-dev`

Upon making any code changes, make sure you run `grunt test` from within the project's directory to verify that there are no errors (this is done using the JSHint plugin mentioned above) - if there are any errors, make all necessary changes before opening a pull request.

# License
Licensed under the [MIT License](http://opensource.org/licenses/MIT)