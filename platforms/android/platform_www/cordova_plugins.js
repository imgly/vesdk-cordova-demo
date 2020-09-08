cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-videoeditorsdk.VESDK",
      "file": "plugins/cordova-plugin-videoeditorsdk/www/videoeditorsdk.js",
      "pluginId": "cordova-plugin-videoeditorsdk",
      "clobbers": [
        "VESDK"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-videoeditorsdk": "1.0.0"
  };
});