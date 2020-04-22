// describe('Protractor Element Demo',function() {
//
//         // var obj = require("./03_Framework.js");
//     it('Open website ', function () {
//             console.log("hello");
//
// //         obj.getURL();
// //         // browser.get('https://juliemr.github.io/protractor-demo/');
// //         obj.firstinput.sendKeys("3");
// //         obj.secondinput.sendKeys("5");
// //
// //         obj.goButton.click();
// // //
// // // // jasmine takes care of resolving promises
// //     expect(element(by.css("h2[class ='ng-binding']")).getText()).toBe('8');
// //         element(by.css("h2[class ='ng-binding']")).getText().then(function (text) {
// //             browser.sleep(5000);
// //             console.log(text);
// //         });
//     })
// })
// ==========================
// Jasmine- setup and tear down
//beforeeach and after each is particular for the test cases
// describe('Protractor Element Demo',function() {
//
//     var obj = require("./03_Framework.js");
// beforeEach(function () {
//     obj.getURL();
//
// })
//     it('Open website ', function () {
//
//         obj.getURL();
//         browser.get('https://juliemr.github.io/protractor-demo/');
//         obj.firstinput.sendKeys("3");
//         obj.secondinput.sendKeys("5");
//
//         obj.goButton.click();
// //
// // // jasmine takes care of resolving promises
//         expect(element(by.css("h2[class ='ng-binding']")).getText()).toBe('8');
//         element(by.css("h2[class ='ng-binding']")).getText().then(function (text) {
//             browser.sleep(5000);
//             console.log(text);
//         });
//     })
//     afterEach(function() {
// console.log("test completed")   });
// })
// =============================
//   In specs   onPrepare:function(){
// // Reporting can be initialized here
//         browser.driver.manage().window().maximize();
//     },
// above function will be executed before each of test suite

// describe('Protractor Element Demo',function() {
//
//     var obj = require("./03_Framework.js");
//     beforeEach(function () {
//         obj.getURL();
//
//     })
//     it('Open website ', function () {
//
//         obj.getURL();
//         browser.get('https://juliemr.github.io/protractor-demo/');
//         obj.firstinput.sendKeys("3");
//         obj.secondinput.sendKeys("5");
//
//         obj.goButton.click();
// //
// // // jasmine takes care of resolving promises
//         expect(element(by.css("h2[class ='ng-binding']")).getText()).toBe('8');
//         element(by.css("h2[class ='ng-binding']")).getText().then(function (text) {
//             browser.sleep(5000);
//             console.log(text);
//         });
//     })
//     afterEach(function() {
//         console.log("test completed")   });
// })
// ======================

