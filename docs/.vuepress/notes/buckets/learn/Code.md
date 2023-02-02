# Code


    var timer = function(options, callback) {
        if (!options) return;

        var key, isError;

        for (var key in options) {
            if (typeof options[key] !== 'number') {
                isError = true;
                break;
            }
        }

        if (isError) return;

        var
            defaults = {
                time: undefined,
                speed: undefined,
                count: undefined,
                gap: undefined
            },

            settings = Object.assign(defaults, options),

            time = settings.time,
            speed = settings.speed || 1000,
            count = settings.count >= 0 ? settings.count : Math.floor(time * 1000 / speed),
            gap = settings.gap || 1;

        var
            clock,
            _this = this;

        _this.data = settings;
        _this.clear = function() {
            clearTimeout(clock);
        }

        if (count === 0) {
            _this.clear();
        } else {
            settings.count = count -= gap;

            clock = setTimeout(function() {
                timer(settings, callback);
            }, speed);

            if (callback && typeof callback === 'function') {
                callback(_this);
            }
        }
    }



    {
        "status": "100",
        "warningMessage": [{
            "code": "403",
            "message": "你没有权限访问此API..."
        }]
    }

    {
        "errorMessage": null,
        "result": "SUCCESS",
        "status": "100",
        "warningMessage": null
