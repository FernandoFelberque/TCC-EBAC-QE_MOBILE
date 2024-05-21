export let hooksConf = {
    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        
        await driver.takeScreenshot();
     
    }
}
