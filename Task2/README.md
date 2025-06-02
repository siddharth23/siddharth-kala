# Monefy Mobile App Tests

Automated monefy app tests for Android using WebdriverIO (WDIO) and Appium.

---

## Table of Contents

- [Prerequisites](#Prerequisites)
- [Setup and Running Tests](#setup-and-running-tests)
- [Why This Setup?](#why-this-setup)

---

## Prerequisites

Before running tests, ensure you have:

- **Node.js** (v14+) and **npm** installed

- **git** installed
- **Android SDK Platform Tools** installed, with `adb` in your system PATH
- A connected **Android device** with USB debugging enabled, or a running **Android emulator**
- **Appium server** installed globally (`npm install -g appium`)
- Verify device connection with:

  ```bash
  adb devices
  ```

## Setup and Running Tests

Follow these steps to install the app, start services, and run your tests:

1. **Clone the repo**
   ```git clone https://github.com/siddharth23/siddharth-kala.git```
2. **Change directory**
   ```cd Task2 #if not already```
3. **Install the app APKs**
   App uses multiple APK files (base + split APKs). Install them on the device or emulator with:
   ```adb install-multiple ./assets/base.apk ./assets/split_config.*.apk```
4. **Verify your device or emulator is ready**
   Below command should return at least one device:
   ```adb devices```
5. **Install project dependencies**
   Install required npm packages:
   ```npm install```
6. **Run the WDIO tests**
   Execute the test suite with:
   ```npm run test:report```
7. **View Report**
   HTML report can be found at:
   ```./reports/html/cucumber_report.html```

## Why This Stack?

- **WebdriverIO:** Chosen for its flexibility, strong TypeScript support, smooth Appium integration and smooth setup.
- **Appium:** Industry standard for mobile app automation across Android and iOS also support webview.Smoother support for saucelab and browserstack.
- **Cucumber:** For BDD style test writing.
- Typesecript: Faster test executiona and wdio supports this.
