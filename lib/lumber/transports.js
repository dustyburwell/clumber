// Generated by CoffeeScript 1.3.3

/*
@license
transports.js: Include for core transports

(c) 2012 Panther Development
MIT LICENSE
*/


(function() {
  var common, fs, path, transports;

  transports = exports;

  fs = require("fs");

  path = require("path");

  common = require("./common");

  fs.readdirSync(path.join(__dirname, "transports")).forEach(function(file) {
    var name, t;
    if (file === "transports.coffee") {
      return;
    }
    t = file.replace(/.(js|coffee)/, "");
    name = common.titleCase(t);
    return transports[name] = require("./transports/" + t)[name];
  });

}).call(this);