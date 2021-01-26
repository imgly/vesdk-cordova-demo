<p align="center">
  <a href="https://www.photoeditorsdk.com/?utm_campaign=Projects&utm_source=Github&utm_medium=VESDK&utm_content=Cordova-Demo">
    <img src="https://static.photoeditorsdk.com/vesdk/vesdk-logo-s.svg" alt="VideoEditor SDK Logo"/>
  </a>
</p>
<p align="center">
  <a href="https://npmjs.org/package/cordova-plugin-videoeditorsdk">
    <img src="https://img.shields.io/npm/v/cordova-plugin-videoeditorsdk.svg" alt="NPM version">
  </a>
  <img src="https://img.shields.io/badge/platforms-android%20|%20ios-lightgrey.svg" alt="Platform support">
  <a href="http://twitter.com/VideoEditorSDK">
    <img src="https://img.shields.io/badge/twitter-@VideoEditorSDK-blue.svg?style=flat" alt="Twitter">
  </a>
</p>

# VideoEditor SDK Cordova Example App

This project shows how to integrate [VideoEditor SDK](https://www.videoeditorsdk.com/?utm_campaign=Projects&utm_source=Github&utm_medium=VESDK&utm_content=Cordova-Demo) into a Cordova application with the [Cordova plugin for VideoEditor SDK](https://github.com/imgly/vesdk-cordova) which is available via NPM as [`cordova-plugin-videoeditorsdk`](https://www.npmjs.com/package/cordova-plugin-videoeditorsdk).

## Getting started

After cloning this repository, perform the following steps to run the example application:

```sh
# add plugin and install the dependencies
cordova plugin add cordova-plugin-videoeditorsdk
# run
cordova run ios
# or
cordova run android
```

## Unlock the SDK

VideoEditor SDK is a product of img.ly GmbH. Without unlocking, the SDK is fully functional but a watermark is added on top of the video preview and any exported videos.
In order to remove the watermark and to use VideoEditor SDK within your app **you'll need to [request a license](https://account.photoeditorsdk.com/pricing?product=vesdk&?utm_campaign=Projects&utm_source=Github&utm_medium=VESDK&utm_content=Cordova-Demo) for each platform and load the license file(s)** in your app with the following single line of code that automatically resolves multiple license files via platform-specific file extensions.

Rename your license files:
- Android license: `ANY_NAME.android`
- iOS license: `ANY_NAME.ios`

Pass the file path without the extension to the `unlockWithLicense` function to unlock both iOS and Android:
```js
VESDK.unlockWithLicense('www/assets/ANY_NAME');
```

## VideoEditor SDK for iOS & Android

The Cordova plugin for VideoEditor SDK includes a rich set of most commonly used [configuration and customization options](https://github.com/imgly/vesdk-cordova/blob/master/types/configuration.ts) of VideoEditor SDK for iOS and Android. The native frameworks provide **fully customizable** video editors. Please refer to [our documentation](https://docs.videoeditorsdk.com/?utm_campaign=Projects&utm_source=Github&utm_medium=VESDK&utm_content=Cordova-Demo) for more details.

## License Terms

Make sure you have a [commercial license](https://account.photoeditorsdk.com/pricing?product=vesdk&?utm_campaign=Projects&utm_source=Github&utm_medium=VESDK&utm_content=Cordova-Demo) for VideoEditor SDK before releasing your app.
A commercial license is required for any app or service that has any form of monetization: This includes free apps with in-app purchases or ad supported applications. Please contact us if you want to purchase the commercial license.

## Support and License

Use our [service desk](http://support.videoeditorsdk.com) for bug reports or support requests. To request a commercial license, please use the [license request form](https://account.photoeditorsdk.com/pricing?product=vesdk&?utm_campaign=Projects&utm_source=Github&utm_medium=VESDK&utm_content=Cordova-Demo) on our website.
