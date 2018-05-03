(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{61:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"draw-sprites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#draw-sprites","aria-hidden":"true"}},[t._v("#")]),t._v(" Draw Sprites")]),n("iframe",{staticStyle:{width:"100%","max-height":"600px"},attrs:{src:"/builds/drawsprites/index.html",width:"800",height:"600",frameBorder:"0"}}),n("pre",{pre:!0,attrs:{class:"language-haxe"}},[n("code",[t._v("package"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gecko"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Gecko"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gecko"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Float32"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gecko"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("components"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("draw"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SpriteComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gecko"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("systems"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("draw"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DrawSystem"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Game "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _spritesToLoad"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Array"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"kenney/elephant.png"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"kenney/hippo.png"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"kenney/monkey.png"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"kenney/giraffe.png"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"kenney/panda.png"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"kenney/parrot.png"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"kenney/snake.png"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"kenney/penguin.png"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"kenney/pig.png"')]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//add draw system")]),t._v("\n        Gecko"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentScene"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addSystem")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DrawSystem"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("create")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//load the sprites")]),t._v("\n        gecko"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Assets"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("load")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_spritesToLoad"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _onLoadAssets"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("start")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("//Create an add the sprite")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("_createSprite")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("spriteName"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Float32"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Float32"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//create an entity in the current scene")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" entity "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Gecko"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentScene"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createEntity")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//add a spriteComponent using the sprite name")]),t._v("\n        entity"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addComponent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SpriteComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("create")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("spriteName"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//set the position and the scale")]),t._v("\n        entity"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("set")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        entity"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scale"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("set")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("0.4")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0.4")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("_onLoadAssets")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//Draw 9 sprites in a grid")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" minX "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("155")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" minY "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("110")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" gapX "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("250")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" gapY "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("180")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),n("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0.")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token number"}},[t._v(".3")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y "),n("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0.")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token number"}},[t._v(".3")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{attrs:{class:"token function"}},[t._v("_createSprite")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_spritesToLoad"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" minX "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" gapX"),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("x"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" minY "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" gapY"),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("y"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                i"),n("span",{attrs:{class:"token operator"}},[t._v("++")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[n("a",{attrs:{href:"https://github.com/Nazariglez/Gecko2D/tree/master/examples/drawsprites",target:"_blank",rel:"noopener noreferrer"}},[t._v("Source Code")])])])}],!1,null,null,null);s.default=o.exports}}]);