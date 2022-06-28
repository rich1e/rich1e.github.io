# JavaScript Style Guide #

- [Google JavaScript Style Guide](http://google.github.io/styleguide/javascriptguide.xml)
- [Node.js Style Guide](https://github.com/felixge/node-style-guide)
- [jQuery](https://contribute.jquery.org/style-guide/js/)
- [GitHub](https://github.com/styleguide/javascript)

### JSHint, a JavaScript Code Quality Tool ###

	npm install jshint -g

[http://jshint.com/](http://jshint.com/)

### JSCS - JavaScript Code Style. ###

	npm install jscs -g

[http://jscs.info/](http://jscs.info/)

[https://github.com/jscs-dev/node-jscs](https://github.com/jscs-dev/node-jscs)

### Tools ###

[EditorConfig](https://github.com/sindresorhus/editorconfig-sublime)

[SublimeLinter](https://github.com/Kronuz/SublimeLinter)

[SublimeLinter-jshint](https://github.com/uipoet/sublime-jshint)

[SublimeLinter-jscs](https://github.com/SublimeLinter/SublimeLinter-jscs/)

[JSFormat](https://github.com/jdc0589/JsFormat)

### Sublime Text 3 ###

	Preferences->Setting-User，增加下面两个配置：	
	{
	    "translate_tabs_to_spaces": true,
	    "word_wrap": true
	}

	点击右下角的Spaces->Convert Indentation to Spaces可以将文件中的所有tab转换成空格

	JSFormat	
	Preferences->Package Settings->JSFormat->Setting-User，下载配置文件覆盖
	
	配置好后格式化的默认快捷键是 ctrl+alt+f

	SublimeLinter
	
	右键->SublimeLinter->Lint Mode，有4种检查模式，建议选择 Load/save
	
	右键->SublimeLinter->Mark Style，建议选择 Outline
	
	右键->SublimeLinter->Choose Gutter Theme，建议选择 Blueberry-round
	
	右键->SublimeLinter->Open User Settings，将linter里面jscs的args改成 ["--verbose"]，
	当光标处于有错误的代码行时，详细的错误信息会显示在下面的状态栏中.

	右键->SublimeLinter可以看到所有的快捷键，其中 ctrl+k, a 可以列出所有错误 

### Example ###

- [http://code.ctripcorp.com/#/c/209178/1/webresource/views/orders/allorders.js](http://code.ctripcorp.com/#/c/209178/1/webresource/views/orders/allorders.js)
- [http://code.ctripcorp.com/#/c/208011/](http://code.ctripcorp.com/#/c/208011/)

### Reference ###

- [The Essentials of Writing High Quality JavaScript](http://code.tutsplus.com/tutorials/the-essentials-of-writing-high-quality-javascript--net-15145)
- [Code Conventions for the JavaScript Programming Language](http://javascript.crockford.com/code.html)
- [Semicolons in JavaScript are optional](http://mislav.uniqpath.com/2010/05/semicolons/)
- [Analyze Github commits to know which convention is popular.](http://sideeffect.kr/popularconvention#javascript)
- [Understanding JavaScript Closures](https://javascriptweblog.wordpress.com/2010/10/25/understanding-javascript-closures/)
- [Javascript 编程风格](http://www.ruanyifeng.com/blog/2012/04/javascript_programming_style.html)
- [12种不宜使用的 Javascript 语法](http://www.ruanyifeng.com/blog/2010/01/12_javascript_syntax_structures_you_should_not_use.html)