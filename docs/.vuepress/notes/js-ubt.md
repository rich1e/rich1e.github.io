# UBT #


### 默认加载 ###

使用 `lizard 2.0+` 的框架，就无需做其他事情，`lizard 2.0` 框架默认会加载采集脚本，**H5 和 Hybrid 下都一样。**

### H5 ###

页面加载时，引入 `_mubt.min.js`：

	;(function(){if(!window.$_bf||!window.$_bf.loaded){var a=new Date,b="?v="+a.getFullYear()+a.getMonth()+"_"+a.getDate(),a=document.createElement("script");a.type="text/javascript";a.charset="utf-8";a.async=!0;a.src="//webresource.c-ctrip.com/code/ubt/_mubt.min.js"+b;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}})();

### Hybrid ###

`Hybrid` 下如果没有使用 `lizard`，可以引用 `webapp/ubt/_mubt.min.js`（APP 5.10之后的版本），此目录下的 `UBT` 脚本会通过增量更新。

也可以将UBT采集脚本放到自己的目录下（不建议）

### UBT Demo （H5 单页，无 lizard） ###

实际使用 UBT 统计和埋点时，我们需要封装一个专有的 **UBT** 方法（**方便管理和维护**）。

方法一：

    var sendUbt = function(ubtKey, oParams) {

        var value = "";
        for (var key in oParams) {
            if (oParams.hasOwnProperty(key)) {
                value += key + '=' + oParams[key] + '&';
            }
        }

        value = value ? value.substring(0, value.length - 1) : value;

        if(window['$_bf'] && window['$_bf'].loaded === true) {
            window.$_bf.tracklog(ubtKey, value);
        } else {
            setTimeout(function () {
                window.$_bf.tracklog(ubtKey, value);
            }, 500);
        }

    };

方法二：

	var methods = {
        // 功能描述：UBT埋点
        sendUbt: function (ubtKey, data) {
            var key = ubtKey || "";
            var val = data ? encodeURIComponent(JSON.stringify(data)) : "";
            console.log(JSON.stringify({ ubtKey: ubtKey, data: data }));
            //CtripBusiness.app_send_ubt_trace(key, { pageId: '600002224', hpageId: '600002224', val: value });
            var data = {
                ac: "tl",
                pi: "600002224",
                key: key,
                val: val,
                pv: "1438063874521.4cw5s4.50.450",
                v: "6",
                rd: new Date().getTime(),
                jv: "1.5.1"
            }
            var params = [];
            for (var key in data) {
                params.push("&" + key + "=" + (typeof key == "string" ? data[key] : JSON.stringify(data[key])));
            }
            this.trace(params.join(""));
        },

        // 功能描述：发送ubt
        trace: function (params) {
            var src = "http://s.c-ctrip.com/bf.gif?", img = new Image;
            img.onload = function () {
                img = img.onload = img.onerror = null;
            }
            img.onerror = function () {
                img = img.onload = img.onerror = null;
            }
            img.src = src + params;
        }
    }

方法三：

    var sendUbt = function(ubtKey, oParams, callback) {
        var value = '';
        for (var key in oParams) {
            if (oParams.hasOwnProperty(key)) {
                value += key + '=' + oParams[key] + '&';
            }
        }

        value = value ? value.substring(0, value.length - 1) : value;

        if (typeof window['__bfi'] === 'undefined') {
            window['__bfi'] = [];
        }

        if (typeof callback === 'undefined') {
            callback = function() {
                console.log('UBT Sent successfully!');
            }
        }

        window['__bfi'].push(['_tracklog', ubtKey, value, callback]);
    };

### 参考： ###

[UBT Docs](http://cdataportal.sh.ctripcorp.com/ubt/)

[UBT采集脚本文档](http://cdataportal.sh.ctripcorp.com/fx/ubtcheck/doc_api.html)

[UBT使用手册](http://conf.ctripcorp.com/pages/viewpage.action?pageId=39944322)

[Fiddler UBT 数据测试](http://conf.ctripcorp.com/pages/viewpage.action?pageId=55384000)

[UBT-traceLog key 分配](http://conf.ctripcorp.com/pages/viewpage.action?pageId=10423238)

[接口：自定义数据回传](http://conf.ctripcorp.com/pages/viewpage.action?pageId=16588701)
