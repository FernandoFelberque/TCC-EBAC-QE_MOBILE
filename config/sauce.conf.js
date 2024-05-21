import { generalConf } from"./general.conf.js"

export let sauceConf = {

    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',

    capabilities: [

        {
            platformName: 'Android',
            'appium:app': 'storage:filename=ebacshop.aab',
            'appium:deviceName': 'Android GoogleAPI Emulator',
            'appium:platformVersion': '12.0',
            'appium:automationName': 'UiAutomator2',
            'appium:disableIdLocatorAutocompletion': true,
            'sauce:options': {
                build: 'appium-build-test-ebacshop-tcc',
                name: 'EBAC Shop Test',
                deviceOrientation: 'PORTRAIT',
                appiumVersion: "2.0.0"
            },
        }
    ],


    ...generalConf

}

