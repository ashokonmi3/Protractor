function  car()
{
    this.firstinput=element(by.model("first"));
    this.secondinput=element(by.model("second"));
    this.goButton=element(by.id("gobutton"));
    this.result=element(by.css("h2[class='ng-binding']"));
    this.search="by.css('input')";
    this.getURL=function()
    {
        browser.get('http://juliemr.github.io/protractor-demo/');
    };
}

module.exports= new car();
/* a.getModel();
 console.log(a.engine);*/





//JsobjectDemo2.js
//JsobjectDemo2.js



// var obj=  require("./Jsobjectdemo.js");

// obj.getModel();
// console.log(obj.search);






