// default chrome browser
// ############# Jasmine
exports.config = {
    framework: 'jasmine',
    // seleniumAddress: 'http://localhost:12345/wd/hub',
    specs: ['01_Jasmine_framework.js']
    // specs: ['02_Practice.js']
    // specs: ['04_Framework.js']

}

// ################################
// exports.config = {
//     framework: 'jasmine',
//     seleniumAddress: 'http://localhost:12345/wd/hub',
//     // specs: ['01_Jasmine_framework.js']
//     // specs: ['02_Practice.js']
//     specs: ['04_Framework.js']
//
// }
// ==============

// exports.config = {
//     framework: 'jasmine',
//     seleniumAddress: 'http://localhost:12345/wd/hub',
//     specs: ['01_Jasmine_framework.js'],
//     // capabilities: {
//     //     'browserName': 'firefox' // update and restart the server
//     // }
// }
// =================
// exports.config = {
//     framework: 'jasmine',
//     seleniumAddress: 'http://localhost:12345/wd/hub',
//     specs: ['01_Jasmine_framework.js'],
//     capabilities: {
//         'browserName': 'internet explorer' // update and restart the server
//     }
// }
// ========================
// exports.config = {
//     framework: 'jasmine',
//     seleniumAddress: 'http://localhost:12345/wd/hub',
//     specs: ['04_Framework.js'],
//     onPrepare:function(){
// // Reporting can be initialized here
//         browser.driver.manage().window().maximize();
//     },
//
// }