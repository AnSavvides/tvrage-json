var util = require("util"),
    xml2js = require("xml2js"),
    request = require("request"),
    parser = new xml2js.Parser(),
    // All the URLs we will be making use of.
    baseUrl = "http://services.tvrage.com/feeds/",
    searchUrl = "search.php?",
    fullSearchUrl = "full_search.php?",
    showInfoUrl = "showinfo.php?",
    episodeListUrl = "episode_list.php?",
    episodeInfoUrl = "episodeinfo.php?",
    fullShowInfoUrl = "full_show_info.php?",
    fullShowListUrl = "show_list.php",
    fullScheduleUrl = "fullschedule.php?";

// Responsible for sending a request down to the url that has
// been passed as an argument.
_request = function(url, callback) {
    request({uri: url}, function(err, response, body) {
        if (!err && response.statusCode == 200) {
            parser.parseString(body, function(err, result) {
                callback(err, result);
            });
        } else {
            _httpError(response, callback);
        }
    });
};

// Responsible for raising an error with the appropriate
// status code.
_httpError = function(error, response, callback) {
    var status = (response && response.statusCode) ? (response.statusCode) : (error.code);
    callback(new Error(util.format("The TVRage API responded with status code %s", status)));
};

// Search for shows by name.
exports.search = function(name, callback) {
    var url = util.format("%s%sshow=%s", baseUrl, searchUrl, name);
    _request(url, callback);
};

// Full search for shows by name.
exports.fullSearch = function(name, callback) {
    var url = util.format("%s%sshow=%s", baseUrl, fullSearchUrl, name);
    _request(url, callback);
};

// Show info based on a show id that can be acquired via search
// or fullSearch.
exports.showInfo = function(showId, callback) {
    var url = util.format("%s%ssid=%s", baseUrl, showInfoUrl, showId);
    _request(url, callback);
};

// Full show info based on a show id that can be acquired via search
// or fullSearch.
exports.fullShowInfo = function(showId, callback) {
    var url = util.format("%s%ssid=%s", baseUrl, fullShowInfoUrl, showId);
    _request(url, callback);
};

// Episode list based on a show id that can be acquired via search
// or fullSearch.
exports.episodeList = function(showId, callback) {
    var url = util.format("%s%ssid=%s", baseUrl, episodeListUrl, showId);
    _request(url, callback);
};

// Episode info based on a show id (attainable via search or fullSearch)
// and an episode (attainable via  episodeList).
exports.episodeInfo = function(showId, episode, callback) {
    var url = util.format("%s%ssid=%s&ep=%s", baseUrl, episodeInfoUrl, showId, episode);
    _request(url, callback);
};

// Full TV show list.
exports.fullShowList = function(callback) {
    var url = util.format("%s%s", baseUrl, fullShowListUrl);
    _request(url, callback);
};

// Full TV show schedule based on the country (e.g. US or UK).
exports.fullSchedule = function(countryCode, callback) {
    var url = util.format("%s%scountry=%s", baseUrl, fullScheduleUrl, countryCode);
    _request(url, callback);
};