(function() {
// this will be replace with the contents (if bundled)
FuseBox.module("default", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){
// require("./bar.js")
// var foo = require("fuse-box-testcase3/dist/foo")
// require("fuse-box-testcase3");

// var CodeMirror = require('codemirror')
// var cheerio = require('cheerio');
// var babel = require('babel-standalone');
// var coreJS = require('core-js');
// var path = require("path")
// var buffer = require("buffer")
// var acorn = require('acorn')
// var tern = require('tern')

// var babylon = require('babylon')

// require("babel-types")
// console.log(require('core-js'));

// require("core-js")
// require("acorn/dist/walk")
// let loose = require("acorn/dist/acorn_loose")
// console.log(require("acorn"));
// console.log(require("acorn"));



//require("~/sub/hello.js");


// var dynamicPath = "./custom/foo.js";

// console.log(require(dynamicPath));



// var f3 = require("fuse-box-testcase1");
// console.log(f3.getBar());
//require("fuse-box-testcase3/dist/bar")
//var bar = require("fuse-box-testcase3")
//require("./bar");
//console.log("hello", bar);

// var cheerio = require("cheerio");
// let $ = cheerio.load('<h2 class="title">Hello world</h2>')
// $('h2.title').text('Hello there!')
// $('h2').addClass('welcome')
// console.log($.html());


// var tern = require('tern')

// var generator = require('babel-generator')
// console.log(generator);
// require("htmlparser2")
// let hello = require("hello");
// console.log(hello);
//require("./foo");
require("~/sub/hello.js");
console.log(1);

// var asyncWatch = require("async-watch")
// var reactive = require("wires-reactive")
// let html = require("./my.html")
// console.log(html);

// var some = require("fuse-box-test-using-old-version");
// var newFancy = require("fuse-box-test-rogue-files");
// var stuff = require("fuse-box-test-rogue-files/dist/some");
// //var reactive = require("wires-reactive");
// var asyncWatch = require("async-watch")

//require("fuse-box-testcase1")
//console.log(coreJS);
//var chars = new RegExp(`ªµºÀ-ÖØ-öø`);
// var input = 'const getMessage = () => "Hello World";';
// var output = (0, _babelStandalone.transform)(input, { presets: ['es2015'] }).code;
require("./test.css");


// var generator = require('babel-generator')
// console.log(generator);
// var babylon = require('babylon')
// const code = 'class Example {}';
// const ast = babylon.parse(code);

// const output = generator.default(ast, {}, code);
// console.log(output);
});
___scope___.file("sub/hello.js", function(exports, require, module, __filename, __dirname){
console.log(require("~/bar.js"));
});
___scope___.file("bar.js", function(exports, require, module, __filename, __dirname){
module.exports = {bar : 1}
});
___scope___.file("test.css", function(exports, require, module, __filename, __dirname){

if (typeof window !== 'undefined') {
var styleId = encodeURIComponent(__filename);
var exists = document.getElementById(styleId);
if (!exists) {
    var s = document.createElement("style");
    s.id = styleId;
    s.innerHTML ="body {\r\n    background: red;\r\n}";
    document.getElementsByTagName("head")[0].appendChild(s);
}}
});

});
// entry comes here
FuseBox.import("index.js");
})();