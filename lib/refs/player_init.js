jwplayer.defaults = (typeof jwplayer.defaults == "object") ? jwplayer.defaults : {};
jwplayer.defaults.stretching = "uniform";
jwplayer.defaults.primary = "html5";
//jwplayer.defaults.aspectratio ="16:9";
jwplayer.defaults.controls = true;
jwplayer.defaults.autostart = true;
jwplayer.defaults.width = "100%";
jwplayer.defaults.height = "100%";
jwplayer.defaults.playbackRateControls = true;
jwplayer.defaults.playbackRates = [0.5, 0.75, 1, 1.25, 1.5, 2];
jwplayer.defaults.preload = "auto";
jwplayer.defaults.repeat = false;
jwplayer.defaults.stagevideo = false;
jwplayer.defaults.mute = false;
jwplayer.defaults.volume = 100;
jwplayer.defaults.key = "Vào PhimMoi.Net đi, vô đây kiếm em làm chi zạ?";
try {
    window.localStorage.removeItem("jwplayer.qualityLabel");
    window.localStorage.removeItem("jwplayer.volume")
} catch (err) {};
try {
    window.localStorage.__defineSetter__("jwplayer.qualityLabel", function (_0x9ed0x1) {});
    window.localStorage.__defineSetter__("jwplayer.volume", function (_0x9ed0x1) {});
    window.localStorage.__defineSetter__("jwplayer.mute", function (_0x9ed0x1) {});
    window.localStorage.__defineGetter__("jwplayer.qualityLabel", function () {
        return null
    });
    window.localStorage.__defineGetter__("jwplayer.volume", function () {
        return null
    });
    window.localStorage.__defineGetter__("jwplayer.mute", function () {
        return "false"
    })
} catch (err) {};
var FxPlayer = function (_0x9ed0x3) {
    try {
        if (window.location.href.indexOf("phimmoi.net") == -1 && window.location.href.indexOf("sinhvienit.net") == -1 && window.location.href.indexOf("movietop1.com") == -1 && window.location.href.indexOf("file://") == -1 && window.location.href.indexOf(".fbsbx.com/") == -1) {
            return false
        }
    } catch (err) {};
    if (typeof _0x9ed0x3 == "string") {
        this._containerId = _0x9ed0x3
    } else {
        this._containerId = ""
    };
    this._jwPlayer = null;
    this._html5VideoObj = null;
    this._startPosition = 0;
    this._playlist = [];
    this._image = "";
    this._primary = "html5";
    this._vastList = [];
    this._setSkipOffset = -1;
    this._gaSetting = {
        "idstring": "title",
        "label": "mediaid"
    };
    this._isMobile = false;
    this._errVideo = "/error-video.mp4";
    this._retryCount = 0;
    var _0x9ed0x4 = function () {
        var _0x9ed0x5 = false;
        (function (_0x9ed0x6) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x9ed0x6) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x9ed0x6.substr(0, 4))) {
                _0x9ed0x5 = true
            }
        })(navigator.userAgent || navigator.vendor || window.opera);
        return _0x9ed0x5
    };
    try {
        if (_0x9ed0x4()) {
            this._isMobile = true
        }
    } catch (err) {
        console.error("FxPlayer: Mobile device detect error => " + err.message)
    };
    this._orderSources = function (playlist) {
        try {
            if (typeof playlist != "object" || typeof playlist.length != "number" || playlist.length <= 0) {
                return false
            };
            var _0x9ed0x8 = (playlist.length > 2);
            var _0x9ed0x9 = 360;
            var _0x9ed0xa = /player\.quality\s*\=\s*([0-9]+)[^0-9]/i;
            var _0x9ed0xb = _0x9ed0xa.exec(document.cookie);
            if (typeof _0x9ed0xb == "object" && _0x9ed0xb != null && typeof _0x9ed0xb.length == "number" && _0x9ed0xb.length == 2) {
                var _0x9ed0xc = parseInt(_0x9ed0xb[1]);
                if (typeof _0x9ed0xc == "number" && _0x9ed0xc >= 360) {
                    _0x9ed0x9 = _0x9ed0xc
                }
            };
            for (var _0x9ed0xd = 0; _0x9ed0xd < playlist.length - 1; _0x9ed0xd++) {
                for (var _0x9ed0xe = _0x9ed0xd + 1; _0x9ed0xe < playlist.length; _0x9ed0xe++) {
                    var _0x9ed0xf = parseInt(playlist[_0x9ed0xd].label);
                    var _0x9ed0x10 = parseInt(playlist[_0x9ed0xe].label);
                    if ((_0x9ed0x8 && _0x9ed0xf < _0x9ed0x10) || (!_0x9ed0x8 && _0x9ed0xf > _0x9ed0x10)) {
                        var _0x9ed0x11 = playlist[_0x9ed0xd];
                        playlist[_0x9ed0xd] = playlist[_0x9ed0xe];
                        playlist[_0x9ed0xe] = _0x9ed0x11
                    }
                }
            };
            var _0x9ed0x12 = false;
            for (var _0x9ed0xd = 0; _0x9ed0xd < playlist.length; _0x9ed0xd++) {
                _0x9ed0xf = parseInt(playlist[_0x9ed0xd].label);
                if (!_0x9ed0x12 && _0x9ed0xf == _0x9ed0x9) {
                    _0x9ed0x12 = true;
                    playlist[_0x9ed0xd].default = true
                } else {
                    playlist[_0x9ed0xd].default = false
                }
            };
            if (!_0x9ed0x12) {
                if (_0x9ed0x8) {
                    playlist[playlist.length - 1].default = true
                } else {
                    playlist[0].default = true
                }
            };
            return playlist
        } catch (err) {
            console.log("Error on Order");
            return playlist
        }
    };
    this._orderSourcesOnPlaylist = function (_0x9ed0x13) {
        for (var _0x9ed0xd = 0; _0x9ed0xd < _0x9ed0x13.length; _0x9ed0xd++) {
            _0x9ed0x13[_0x9ed0xd].sources = this._orderSources(_0x9ed0x13[_0x9ed0xd].sources)
        };
        return _0x9ed0x13
    };
    this._getErrorPlaylist = function () {
        console.warn("FxPlayer: ErrorPlaylist được sử dụng");
        return [{
            "sources": [{
                "file": this._errVideo,
                "type": "mp4"
            }]
        }]
    };
    this._validPlaylist = function (_0x9ed0x13) {
        if (typeof _0x9ed0x13 != "object" || !_0x9ed0x13 || typeof _0x9ed0x13.length != "number" || _0x9ed0x13.length <= 0) {
            return false
        };
        for (var _0x9ed0xd = 0; _0x9ed0xd < _0x9ed0x13.length; _0x9ed0xd++) {
            var _0x9ed0x14 = _0x9ed0x13[_0x9ed0xd];
            if (typeof _0x9ed0x14.sources != "object" || !_0x9ed0x14.sources || typeof _0x9ed0x14.sources.length != "number" || _0x9ed0x14.sources.length <= 0) {
                return false
            };
            var _0x9ed0x16 = 0;
            for (var _0x9ed0xe = 0; _0x9ed0xe < _0x9ed0x14.sources.length; _0x9ed0xe++) {
                var _0x9ed0x17 = _0x9ed0x14.sources[_0x9ed0xe];
                if (typeof _0x9ed0x17 != "object" || !_0x9ed0x17 || typeof _0x9ed0x17.file != "string" || _0x9ed0x17.file == "") {
                    continue
                };
                _0x9ed0x15[_0x9ed0x16++] = _0x9ed0x17
            };
            if (_0x9ed0x15.length <= 0) {
                return false
            };
            _0x9ed0x13[_0x9ed0xd].sources = _0x9ed0x15;
            if (this.isIOSDevice() && typeof _0x9ed0x13[_0x9ed0xd].tracks == "object" && typeof _0x9ed0x13[_0x9ed0xd].tracks.length == "number") {
                var _0x9ed0x18 = _0x9ed0x13[_0x9ed0xd].tracks;
                _0x9ed0x13[_0x9ed0xd].tracks = [];
                _0x9ed0x13[_0x9ed0xd].iOSTracks = [];
                for (var _0x9ed0x19 = 0; _0x9ed0x19 < _0x9ed0x18.length; _0x9ed0x19++) {
                    var _0x9ed0x1a = _0x9ed0x18[_0x9ed0x19];
                    if (typeof _0x9ed0x1a.kind == "string" && (_0x9ed0x1a.kind == "subtitles" || _0x9ed0x1a.kind == "captions" || _0x9ed0x1a.kind == "subtitle" || _0x9ed0x1a.kind == "caption")) {
                        _0x9ed0x13[_0x9ed0xd].iOSTracks.push(_0x9ed0x1a)
                    } else {
                        _0x9ed0x13[_0x9ed0xd].tracks.push(_0x9ed0x1a)
                    }
                }
            }
        };
        return _0x9ed0x13
    };
    this._setVideoPoster = function (_0x9ed0x1b) {
        try {
            return false;
            if (typeof _0x9ed0x1b != "string" || !_0x9ed0x1b) {
                var _0x9ed0x1b = ""
            };
            if (window.navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
                return false
            } else {
                this._html5VideoObj.poster = _0x9ed0x1b
            }
        } catch (err) {
            console.error("Lỗi set video poster: " + err.message)
        }
    };
    this.setImage = function (_0x9ed0x1b) {
        if (typeof _0x9ed0x1b == "string" && _0x9ed0x1b != "") {
            this._image = _0x9ed0x1b
        }
    };
    this.setErrorVideo = function (_0x9ed0x1b) {
        if (typeof _0x9ed0x1b == "string" && _0x9ed0x1b != "") {
            this._errVideo = _0x9ed0x1b
        }
    };
    var _0x9ed0x1c = {};
    this.addAdBreak = function (_0x9ed0x1d, _0x9ed0x1e, _0x9ed0x1f) {
        if (typeof _0x9ed0x1d == "string" && (typeof _0x9ed0x1e == "string" || typeof _0x9ed0x1e == "number") && (typeof _0x9ed0x1f == "string" || (typeof _0x9ed0x1f == "object" && typeof _0x9ed0x1f.length == "number" && _0x9ed0x1f.length > 0))) {
            _0x9ed0x1c[_0x9ed0x1d] = {
                "offset": _0x9ed0x1e,
                "tag": _0x9ed0x1f
            };
            return true
        };
        console.error("FxPlayer: Quảng cáo cần add không hợp lệ.");
        return false
    };
    this.removeAdBreak = function (_0x9ed0x1d) {
        if (typeof _0x9ed0x1d == "string") {
            delete _0x9ed0x1c[_0x9ed0x1d];
            return true
        };
        return false
    };
    this.clearAdBreak = function () {
        _0x9ed0x1c = {}
    };
    this.getAllAdBreak = function () {
        return _0x9ed0x1c
    };
    this.getAdBreakCount = function () {
        try {
            if (!Object.keys) {
                Object.keys = (function () {
                    "use strict";
                    var _0x9ed0x20 = Object.prototype.hasOwnProperty,
                        _0x9ed0x21 = !({
                            toString: null
                        }).propertyIsEnumerable("toString"),
                        _0x9ed0x22 = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        _0x9ed0x23 = _0x9ed0x22.length;
                    return function (_0x9ed0x24) {
                        if (typeof _0x9ed0x24 !== "object" && (typeof _0x9ed0x24 !== "function" || _0x9ed0x24 === null)) {
                            throw new TypeError("Object.keys called on non-object")
                        };
                        var _0x9ed0x25 = [],
                            _0x9ed0x26, _0x9ed0xd;
                        for (_0x9ed0x26 in _0x9ed0x24) {
                            if (_0x9ed0x20.call(_0x9ed0x24, _0x9ed0x26)) {
                                _0x9ed0x25.push(_0x9ed0x26)
                            }
                        };
                        if (_0x9ed0x21) {
                            for (_0x9ed0xd = 0; _0x9ed0xd < _0x9ed0x23; _0x9ed0xd++) {
                                if (_0x9ed0x20.call(_0x9ed0x24, _0x9ed0x22[_0x9ed0xd])) {
                                    _0x9ed0x25.push(_0x9ed0x22[_0x9ed0xd])
                                }
                            }
                        };
                        return _0x9ed0x25
                    }
                }())
            };
            return Object.keys(_0x9ed0x1c).length
        } catch (err) {
            return 0
        }
    };
    this.setVastList = function (_0x9ed0x27) {
        this.addAdBreak("prerollAds", "pre", _0x9ed0x27);
        console.warn("Phương thức setVastList không còn được khuyến nghị, nên dùng addAdBreak\(id,offset,tag\)")
    };
    this.getVastList = function () {
        var _0x9ed0x28 = [];
        for (var _0x9ed0xd in _0x9ed0x1c) {
            if (_0x9ed0x1c[_0x9ed0xd].offset == "pre") {
                if (typeof _0x9ed0x1c[_0x9ed0xd].tag == "string") {
                    _0x9ed0x28.push(_0x9ed0x1c[_0x9ed0xd].tag)
                } else {
                    _0x9ed0x28 = _0x9ed0x28.concat(_0x9ed0x1c[_0x9ed0xd].tag)
                }
            }
        };
        console.warn("Phương thức setVastList/getVastList không còn được khuyến nghị, nên dùng getAllAdBreak\(\)");
        return _0x9ed0x28
    };
    this._aspectRatio = "16:9";
    this.setAspectRatio = function (_0x9ed0x29) {
        if (typeof _0x9ed0x29 == "string" && _0x9ed0x29 != "") {
            var _0x9ed0x2a = /^[0-9]+\:[0-9]+$/;
            if (_0x9ed0x2a.test(_0x9ed0x29)) {
                this._aspectRatio = _0x9ed0x29
            } else {
                this._aspectRatio = ""
            }
        } else {
            this._aspectRatio = ""
        }
    };
    this.setSkipOffset = function (_0x9ed0x2b) {
        if (typeof _0x9ed0x2b == "number" && _0x9ed0x2b >= 0) {
            this._setSkipOffset = _0x9ed0x2b
        }
    };
    this.setGAOptions = function (_0x9ed0x2c) {
        if (typeof _0x9ed0x2c == "object" && _0x9ed0x2c != null && typeof _0x9ed0x2c.idstring == "string" && _0x9ed0x2c.idstring != "") {
            this._gaSetting = _0x9ed0x2c;
            return true
        } else {
            this._gaSetting = null
        };
        return false
    };
    this.setPrimary = function (_0x9ed0x2d) {
        if (typeof _0x9ed0x2d == "string") {
            _0x9ed0x2d = _0x9ed0x2d.toLowerCase();
            if (_0x9ed0x2d == "flash" || _0x9ed0x2d == "html5") {
                this._primary = _0x9ed0x2d
            } else {
                console.error("FxPlayer: Primary không hợp lệ => " + _0x9ed0x2d)
            }
        }
    };
    var _0x9ed0x2e = false;
    var _0x9ed0x2f = "small";
    var _0x9ed0x30 = null;
    this._initExpandFunction = function () {
        if (_0x9ed0x2e) {
            return false
        };
        var _0x9ed0x31 = '<style id="vtlai-expand-player-css" type="text/css" rel="stylesheet">		<!--		.jw-flag-fullscreen .vtlai-icon-expand		\{			display: none !important;		\}		.vtlai-icon-expand		\{			display: inline-block;		\}		.vtlai-icon-expand.size-small:before		\{			background-image: url\(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAYAAABU1PscAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89\+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh\+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf\+bTAICd\+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP\+5c\+rcEAAAOF0ftH\+LC\+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw\+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s\+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s\+wM\+3zUAsGo\+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/\+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8\+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8\+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR\+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI\+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG\+Qh8lsKnWJAcaT4U\+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr\+h0uhHdlR5Ol9BX0svpR\+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK\+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI\+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx\+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up\+6Ynr5egJ5Mb6feeb3n\+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm\+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw\+6TvZN9un2N/T0HDYfZDqsdWh1\+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc\+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ\+BR5dE/C5\+VMGvfrH5PQ0\+BZ7XnIy9jL5FXrdewt6V3qvdh7xc\+9j5yn\+M\+4zw33jLeWV/MN8C3yLfLT8Nvnl\+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7\+Hp8Ib\+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo\+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC\+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z\+pn5mZ2y6xlhbL\+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1\+1dT1gvWd\+1YfqGnRs\+FYmKrhTbF5cVf9go3HjlG4dvyr\+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql\+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU\+lQ27tLdtWHX\+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ\+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx\+\+/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w\+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb\+\+6EHTh0kX/i\+c7vDvOXPK4dPKy2\+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1\+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v\+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY\+Zj8uGDYbrnjg\+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6\+yXgzMV70VvvtwXfcdx3vo98PT\+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAADrcaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu\+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI\+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI\+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTUtMTEtMTJUMDI6MDU6MzcrMDc6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE1LTExLTEyVDAyOjA1OjM3KzA3OjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU\+MjAxNS0xMS0xMlQwMjowNTozNyswNzowMDwveG1wOk1vZGlmeURhdGU\+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6YmVjZDBmMjktYmIxOC0wZTRiLWIzOTktYTVjZjlhMTFhZjQzPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjU4MWNiZDU3LTMwNWQtMmM0MS04ODhmLWJiZjIwNTg5M2ZhNjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjU4MWNiZDU3LTMwNWQtMmM0MS04ODhmLWJiZjIwNTg5M2ZhNjwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE\+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ\+eG1wLmlpZDo1ODFjYmQ1Ny0zMDVkLTJjNDEtODg4Zi1iYmYyMDU4OTNmYTY8L3N0RXZ0Omluc3RhbmNlSUQ\+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTUtMTEtMTJUMDI6MDU6MzcrMDc6MDA8L3N0RXZ0OndoZW4\+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ\+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmJlY2QwZjI5LWJiMTgtMGU0Yi1iMzk5LWE1Y2Y5YTExYWY0Mzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4\+MjAxNS0xMS0xMlQwMjowNTozNyswNzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ\+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ\+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk\+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICAgICA8cmRmOkJhZz4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjZhZDBhOGMwLTk4ZTItNGM0ZC04YzQwLTJkMWU1NDE2ZThiMTwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpCYWc\+CiAgICAgICAgIDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8cGhvdG9zaG9wOklDQ1Byb2ZpbGU\+c1JHQiBJRUM2MTk2Ni0yLjE8L3Bob3Rvc2hvcDpJQ0NQcm9maWxlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj45NjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24\+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjk2MDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ\+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U\+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj40ODwvZXhpZjpQaXhlbFhEaW1lbnNpb24\+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4zMjwvZXhpZjpQaXhlbFlEaW1lbnNpb24\+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY\+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8\+/9OztAAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2\+SX8VGAAABLklEQVR42uzYv0oDQRAG8F/CWaTQQrGxs7EUe1/BRh/DP6XPIQiCoukknZ1gqVba2WohNjY2CloICp7NBs6QaEyMuQ37wcHswnL7zcx\+M7uVPM9zw0Wln8VVkSMRGDayv87JLpCnCCQCicBoE5jGNlZ6VaEyOHURS5jDHp5iisAzxjCLTdSxHOYGHoFV1PAaxp3sItZaxuOYCvZk2Pw8FtDAzZei1aaZ66eQvRU89d7B7hUfOMEhTvEQG4FiitXDdx8jgSausBV7HahmEW76BQfNFIqJwL8c4m5kdKdlzXobGd3ATGHuNkhoA9eDlNFe7gOt/6vhMmj/I86D14\+DSJS\+lZgIqnWHfex\+10pkJc31C5zh6McnjRKmULoPJAKJwC\+QdXHIUgQSgVEm8DkAeAFY1P/9fP0AAAAASUVORK5CYII=\'\);		\}		.vtlai-icon-expand.size-small:hover:before		\{			background-image: url\(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAYAAABU1PscAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89\+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh\+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf\+bTAICd\+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP\+5c\+rcEAAAOF0ftH\+LC\+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw\+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s\+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s\+wM\+3zUAsGo\+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/\+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8\+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8\+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR\+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI\+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG\+Qh8lsKnWJAcaT4U\+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr\+h0uhHdlR5Ol9BX0svpR\+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK\+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI\+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx\+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up\+6Ynr5egJ5Mb6feeb3n\+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm\+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw\+6TvZN9un2N/T0HDYfZDqsdWh1\+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc\+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ\+BR5dE/C5\+VMGvfrH5PQ0\+BZ7XnIy9jL5FXrdewt6V3qvdh7xc\+9j5yn\+M\+4zw33jLeWV/MN8C3yLfLT8Nvnl\+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7\+Hp8Ib\+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo\+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC\+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z\+pn5mZ2y6xlhbL\+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1\+1dT1gvWd\+1YfqGnRs\+FYmKrhTbF5cVf9go3HjlG4dvyr\+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql\+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU\+lQ27tLdtWHX\+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ\+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx\+\+/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w\+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb\+\+6EHTh0kX/i\+c7vDvOXPK4dPKy2\+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1\+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v\+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY\+Zj8uGDYbrnjg\+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6\+yXgzMV70VvvtwXfcdx3vo98PT\+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAADrcaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu\+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI\+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI\+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTUtMTEtMTJUMDI6Mjc6NTcrMDc6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE1LTExLTEyVDAyOjI3OjU3KzA3OjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU\+MjAxNS0xMS0xMlQwMjoyNzo1NyswNzowMDwveG1wOk1vZGlmeURhdGU\+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6ZGNmMTRhNTgtY2Y3My1lZTQ0LWE1MmQtMTRlZjY0MTEwZTRmPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjkwMzI1NTcyLWMxMmUtNWE0NC1hNTU2LWM0YWJjNjY3MGFmNzwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjkwMzI1NTcyLWMxMmUtNWE0NC1hNTU2LWM0YWJjNjY3MGFmNzwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE\+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ\+eG1wLmlpZDo5MDMyNTU3Mi1jMTJlLTVhNDQtYTU1Ni1jNGFiYzY2NzBhZjc8L3N0RXZ0Omluc3RhbmNlSUQ\+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTUtMTEtMTJUMDI6Mjc6NTcrMDc6MDA8L3N0RXZ0OndoZW4\+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ\+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmRjZjE0YTU4LWNmNzMtZWU0NC1hNTJkLTE0ZWY2NDExMGU0Zjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4\+MjAxNS0xMS0xMlQwMjoyNzo1NyswNzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ\+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ\+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk\+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICAgICA8cmRmOkJhZz4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjZhZDBhOGMwLTk4ZTItNGM0ZC04YzQwLTJkMWU1NDE2ZThiMTwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpCYWc\+CiAgICAgICAgIDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8cGhvdG9zaG9wOklDQ1Byb2ZpbGU\+c1JHQiBJRUM2MTk2Ni0yLjE8L3Bob3Rvc2hvcDpJQ0NQcm9maWxlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj45NjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24\+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjk2MDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ\+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U\+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj40ODwvZXhpZjpQaXhlbFhEaW1lbnNpb24\+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4zMjwvZXhpZjpQaXhlbFlEaW1lbnNpb24\+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY\+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8\+XoRaGAAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2\+SX8VGAAABmUlEQVR42mL8z\+D2n2Egwf\+djJRoZ2IY4mDUAwMNWLCIMdI61Y/GwKgHRj1A20xMX8DojsqvjNBguHx/BYO0yC6GmVvLhl4MMDKyMNx7rsqw7VQhQ6TjDoaaKMWh5QFW5mcMf/4xMTx\+zcKw47Qbw8FLRxjSvTsY6mO4sPoXS1uI/HogzmUFw5\+/XAwszN8YGBgYsLIX7QlH07MKhf/7Lz/DvgsuDC/fM8PF5MV\+M5hpHGdQEG9n6F69g3YeYGX5z/D7D4zNgJVNdnHDyMBgofmKQVt\+JYOowCyGtuVXhpYHYICX8z\+Do8F5BjXpJgZ21nNDzwMwoCn3ncFKa9FQrweYWYack3k4/zM4IZLQ0PEAjkxMXQ9EOqykWTFqqn6CQVGig6F79TbaFaPk9QdQ7auPEWJYceApw80nHAyCPP8ZdBSeM2jJL2WQEGxiaFzyZfC1hdDB779SDCzM/xhkRf8wWGvvY1CRymBoWXZ/8DbmMOLn/x8GRYk70MZcKcGm04AnodFhlVEPjHqA6l3K/6MxMOqBEeQBwACjG6H\+wwmr9wAAAABJRU5ErkJggg==\'\);		\}		.vtlai-icon-expand.size-large:before		\{			background-image: url\(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAYAAABU1PscAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89\+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh\+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf\+bTAICd\+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP\+5c\+rcEAAAOF0ftH\+LC\+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw\+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s\+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s\+wM\+3zUAsGo\+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/\+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8\+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8\+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR\+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI\+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG\+Qh8lsKnWJAcaT4U\+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr\+h0uhHdlR5Ol9BX0svpR\+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK\+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI\+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx\+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up\+6Ynr5egJ5Mb6feeb3n\+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm\+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw\+6TvZN9un2N/T0HDYfZDqsdWh1\+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc\+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ\+BR5dE/C5\+VMGvfrH5PQ0\+BZ7XnIy9jL5FXrdewt6V3qvdh7xc\+9j5yn\+M\+4zw33jLeWV/MN8C3yLfLT8Nvnl\+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7\+Hp8Ib\+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo\+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC\+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z\+pn5mZ2y6xlhbL\+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1\+1dT1gvWd\+1YfqGnRs\+FYmKrhTbF5cVf9go3HjlG4dvyr\+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql\+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU\+lQ27tLdtWHX\+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ\+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx\+\+/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w\+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb\+\+6EHTh0kX/i\+c7vDvOXPK4dPKy2\+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1\+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v\+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY\+Zj8uGDYbrnjg\+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6\+yXgzMV70VvvtwXfcdx3vo98PT\+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAADrcaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu\+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI\+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI\+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTUtMTEtMTJUMDI6MjM6MjUrMDc6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE1LTExLTEyVDAyOjIzOjI1KzA3OjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU\+MjAxNS0xMS0xMlQwMjoyMzoyNSswNzowMDwveG1wOk1vZGlmeURhdGU\+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MzlkOGE0MTUtNjg1MS1iNDQ3LWJhY2EtZGY5MTQ3YzAyY2UxPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjBlOTI4ZjdiLTZhZjQtNTU0Ni1iODM4LWU0MGY3ZmM3ZWNhZTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjBlOTI4ZjdiLTZhZjQtNTU0Ni1iODM4LWU0MGY3ZmM3ZWNhZTwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE\+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ\+eG1wLmlpZDowZTkyOGY3Yi02YWY0LTU1NDYtYjgzOC1lNDBmN2ZjN2VjYWU8L3N0RXZ0Omluc3RhbmNlSUQ\+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTUtMTEtMTJUMDI6MjM6MjUrMDc6MDA8L3N0RXZ0OndoZW4\+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ\+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjM5ZDhhNDE1LTY4NTEtYjQ0Ny1iYWNhLWRmOTE0N2MwMmNlMTwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4\+MjAxNS0xMS0xMlQwMjoyMzoyNSswNzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ\+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ\+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk\+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICAgICA8cmRmOkJhZz4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjZhZDBhOGMwLTk4ZTItNGM0ZC04YzQwLTJkMWU1NDE2ZThiMTwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpCYWc\+CiAgICAgICAgIDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8cGhvdG9zaG9wOklDQ1Byb2ZpbGU\+c1JHQiBJRUM2MTk2Ni0yLjE8L3Bob3Rvc2hvcDpJQ0NQcm9maWxlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj45NjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24\+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjk2MDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ\+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U\+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj40ODwvZXhpZjpQaXhlbFhEaW1lbnNpb24\+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4zMjwvZXhpZjpQaXhlbFlEaW1lbnNpb24\+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY\+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8\+jEo2TQAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2\+SX8VGAAABKklEQVR42uzYvUoDQRSG4WfFCBYqimJjZ6GtlaVaKhaCncYq/qGFt2Gvd2bnBQg2BrSwEFybEZaQEEMmkyzOB8vO7jbzzpzznTNblGVZmnwVvT5MqbkywLg1PUi8JVSZQygDZIDJBTjGA1ZG5UKj0iKucYG3WIuXAmAGh2hiB0v4wHsdADZxEq71yvtl3AWQv\+gm3GfxWR0XXZq5GIVsFXth1fcjhMsXGt3GsXdgAWto4Rxz42glhtFRCI2tutrod/KDQuQcqIZQC/OR5tkzB2qfxKMC\+NVGsNDTDht9CdW4l40\+djzfprbRqhqhkJ1VCtkTtiuT6XceKFLlQL9W4gqXaOMAr8MCpOyF2rjHM3ZjOVbKHRjmSJl/q2SADDCAC5V5BzLAPwL4GQCZS06Q/iD2WQAAAABJRU5ErkJggg==\'\);		\}		.vtlai-icon-expand.size-large:hover:before		\{			background-image: url\(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAYAAABU1PscAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89\+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh\+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf\+bTAICd\+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP\+5c\+rcEAAAOF0ftH\+LC\+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw\+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s\+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s\+wM\+3zUAsGo\+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/\+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8\+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8\+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR\+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI\+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG\+Qh8lsKnWJAcaT4U\+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr\+h0uhHdlR5Ol9BX0svpR\+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK\+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI\+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx\+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up\+6Ynr5egJ5Mb6feeb3n\+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm\+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw\+6TvZN9un2N/T0HDYfZDqsdWh1\+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc\+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ\+BR5dE/C5\+VMGvfrH5PQ0\+BZ7XnIy9jL5FXrdewt6V3qvdh7xc\+9j5yn\+M\+4zw33jLeWV/MN8C3yLfLT8Nvnl\+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7\+Hp8Ib\+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo\+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC\+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z\+pn5mZ2y6xlhbL\+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1\+1dT1gvWd\+1YfqGnRs\+FYmKrhTbF5cVf9go3HjlG4dvyr\+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql\+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU\+lQ27tLdtWHX\+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ\+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx\+\+/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w\+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb\+\+6EHTh0kX/i\+c7vDvOXPK4dPKy2\+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1\+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v\+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY\+Zj8uGDYbrnjg\+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6\+yXgzMV70VvvtwXfcdx3vo98PT\+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAADrcaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu\+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI\+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI\+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTUtMTEtMTJUMDI6MzI6MTgrMDc6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE1LTExLTEyVDAyOjMyOjE4KzA3OjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU\+MjAxNS0xMS0xMlQwMjozMjoxOCswNzowMDwveG1wOk1vZGlmeURhdGU\+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6ZTcxOTBiYWQtMmM3OS1mZTRhLTgzZDUtNTM3YTA0MmU3ODYwPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjBmYzM2MjBmLWE3OTctYzU0OC04YzI4LWI2MGExYzMwMzk0NjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjBmYzM2MjBmLWE3OTctYzU0OC04YzI4LWI2MGExYzMwMzk0NjwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE\+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ\+eG1wLmlpZDowZmMzNjIwZi1hNzk3LWM1NDgtOGMyOC1iNjBhMWMzMDM5NDY8L3N0RXZ0Omluc3RhbmNlSUQ\+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTUtMTEtMTJUMDI6MzI6MTgrMDc6MDA8L3N0RXZ0OndoZW4\+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ\+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmU3MTkwYmFkLTJjNzktZmU0YS04M2Q1LTUzN2EwNDJlNzg2MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4\+MjAxNS0xMS0xMlQwMjozMjoxOCswNzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ\+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ\+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk\+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICAgICA8cmRmOkJhZz4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjZhZDBhOGMwLTk4ZTItNGM0ZC04YzQwLTJkMWU1NDE2ZThiMTwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpCYWc\+CiAgICAgICAgIDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8cGhvdG9zaG9wOklDQ1Byb2ZpbGU\+c1JHQiBJRUM2MTk2Ni0yLjE8L3Bob3Rvc2hvcDpJQ0NQcm9maWxlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj45NjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24\+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjk2MDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ\+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U\+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj40ODwvZXhpZjpQaXhlbFhEaW1lbnNpb24\+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4zMjwvZXhpZjpQaXhlbFlEaW1lbnNpb24\+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY\+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8\+5IJ\+VgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2\+SX8VGAAABV0lEQVR42uyYMUsDQRCFv5GLYKESEdLYWWhrZalpXAQLIZ2aSgXRIv/BSrCw0P8hpNvfYWdjZyMomCJFIGuzkDPZ6Kl76y3swHF7d9wxb\+\+9N7Mrhh1D1cNomfZohsgjAfjvyBz3JDC/HRkokyiUACQAvxexX0FOCrQFbAOXGP2CqCLvBALwdRJ14Aw4BV59/f0sQOKzwB5wBGwBS0APeK8\+AFHrwIE9VnNPloEOonoFv3Ruz3NAPz8WRzMnf9aAqAbQtLO\+64EuA6DmGmeeZ3wRWAGOgRNgPi4Xgn2gA2zEWgeGsReyLtAGbny5zLesjV3E5QAYiXrNWujhmI0\+A7e2Hrjibuz6IqyNfgZRs4WsnStkD8AmRventAmFcyq/mTN6gNH31lqvgSdLg4U4WokRkDfgClGPtpkbVk/EZS0p07ZKApAA/MiFwu6VFllSJgolAOXFxwCIcFk9aF1S3gAAAABJRU5ErkJggg==\'\);		\}		.vtlai-icon-expand:before		\{			/\*border-left: 1px solid #666;\*/			padding: 0 .8em;			display: inline-block;			content: "\\00a0";			width: 16px;			max-height: 16px;			height: 16px;			line-height: 16px;			margin-top: 14px;			margin-left: 4px;			background-repeat: no-repeat;			background-position: center center;			overflow: hidden;			box-sizing: content-box;			-webkit-box-sizing: content-box;			-moz-box-sizing: content-box;			background-size: 24px 16px;		\}		-->		</style>';
        try {
            jQuery("head").append(_0x9ed0x31);
            var _0x9ed0x32 = this.getJwPlayer().getContainer();
            var _0x9ed0x33 = jQuery(_0x9ed0x32).find(".jw-icon-fullscreen")[0];
            jQuery(_0x9ed0x33).before('<div class="jw-icon jw-icon-inline jw-button-color jw-reset vtlai-icon-expand size-small" role="button" tabindex="0" aria-label="Phóng to" title="Bấm vào đây để phóng to Player"></div>');
            _0x9ed0x30 = jQuery(_0x9ed0x32).find(".vtlai-icon-expand")[0];
            _0x9ed0x30.player = this;
            jQuery(_0x9ed0x30).click(function () {
                try {
                    var _0x9ed0x34 = this.player.getPlayerSize();
                    if (_0x9ed0x34 == "small") {
                        this.player.expandPlayer()
                    } else {
                        this.player.collapsePlayer()
                    }
                } catch (err) {
                    console.error("FxPlayer: expand/collapse Function Error -> " + err.message);
                    return false
                }
            })
        } catch (err) {
            console.error("FxPlayer: init Expand Function Error -> " + err.message);
            return false
        }
    };
    this.getExpandButton = function () {
        return _0x9ed0x30
    };
    this.getPlayerSize = function () {
        return _0x9ed0x2f
    };
    this.setPlayerSize = function (_0x9ed0x35) {
        if (_0x9ed0x35 != "small" && _0x9ed0x35 != "large") {
            return false
        };
        _0x9ed0x2f = _0x9ed0x35;
        return _0x9ed0x35
    };
    this._expandPlayer = function () {
        if (!_0x9ed0x2e) {
            console.error("FxPlayer: setExpandFunction chưa được gọi để thiết lập.!");
            return false
        }
    };
    this.expandPlayer = function () {
        try {
            if (this.getPlayerSize() == "large") {
                return false
            };
            this._expandPlayer();
            this.setPlayerSize("large");
            var _0x9ed0x36 = this.getExpandButton();
            jQuery(_0x9ed0x36).addClass("size-large");
            jQuery(_0x9ed0x36).removeClass("size-small");
            jQuery(_0x9ed0x36).attr("title", "Bấm vào đây để thu nhỏ Player")
        } catch (err) {
            console.error("FxPlayer: Lỗi bung player -> " + err.message)
        }
    };
    this._collapsePlayer = function () {
        if (!_0x9ed0x2e) {
            console.error("FxPlayer: setExpandFunction chưa được gọi để thiết lập.!");
            return false
        }
    };
    this.collapsePlayer = function () {
        try {
            if (this.getPlayerSize() == "small") {
                return false
            };
            this._collapsePlayer();
            this.setPlayerSize("small");
            var _0x9ed0x36 = this.getExpandButton();
            jQuery(_0x9ed0x36).addClass("size-small");
            jQuery(_0x9ed0x36).removeClass("size-large");
            jQuery(_0x9ed0x36).attr("title", "Bấm vào đây để phóng to Player")
        } catch (err) {
            console.error("FxPlayer: Lỗi thu nhỏ player -> " + err.message)
        }
    };
    this.setExpandFunction = function (_0x9ed0x37, _0x9ed0x38) {
        if (typeof _0x9ed0x37 != "function" || typeof _0x9ed0x38 != "function") {
            console.error("FxPlayer: Cả expandFunc và collapseFunc phải là Function!");
            return false
        };
        this._initExpandFunction();
        this._expandPlayer = _0x9ed0x37;
        this._collapsePlayer = _0x9ed0x38;
        _0x9ed0x2e = true
    };
    var _0x9ed0x39 = null;
    var _0x9ed0x3a = null;
    var _0x9ed0x3b = null;
    this._initPauseAdCssHtml = function () {
        if (_0x9ed0x39 != null) {
            return _0x9ed0x39
        };
        var _0x9ed0x3c = '<style id="vtlai-pausead-css" type="text/css" rel="stylesheet">		<!--		.jw-state-paused .vtlai-pause-ad.closed		\{			display: none !important;		\}		.jw-state-paused .vtlai-pause-ad		\{			display: block !important;		\}		.vtlai-pause-ad		\{			position: absolute;			bottom: 50px;			width: 600px;			height: 100px;			margin-left: -300px;			left: 50%;			display: none;		\}		.vtlai-pause-ad .pause-ad-wrapper		\{			margin: 0;			border: none;		\}		.vtlai-pause-ad .pause-ad-close		\{			position: absolute;			top: 0;			right: 0;			font-size: 11px;			padding: 3px 8px;			margin: 0;			cursor: pointer;			color: #FFF;			background-color: rgba\(0,0,0,0.7\);		\}		.vtlai-pause-ad .pause-ad-close:hover		\{			background-color: rgba\(0,0,0,0.9\);		\}		.vtlai-fix-controlbar:not\(.jw-flag-fullscreen\) .vtlai-pause-ad		\{			bottom: 10px !important;		\}		-->		</style>';
        jQuery("head").append(_0x9ed0x3c);
        var _0x9ed0x32 = this.getJwPlayer().getContainer();
        jQuery(_0x9ed0x32).append('<div class="vtlai-pause-ad" style=""><div class="pause-ad-wrapper"></div><div class="pause-ad-close">Đóng</div></div>');
        _0x9ed0x39 = jQuery(_0x9ed0x32).find(".vtlai-pause-ad")[0];
        _0x9ed0x3a = jQuery(_0x9ed0x32).find(".vtlai-pause-ad .pause-ad-wrapper")[0];
        _0x9ed0x3b = jQuery(_0x9ed0x32).find(".vtlai-pause-ad .pause-ad-close")[0];
        return _0x9ed0x39
    };
    this._initPauseAd = function (_0x9ed0x3d, _0x9ed0x3e, _0x9ed0x3f) {
        if (typeof _0x9ed0x3d != "number" || _0x9ed0x3d <= 0) {
            var _0x9ed0x3d = 600
        };
        if (typeof _0x9ed0x3e != "number" || _0x9ed0x3e <= 0) {
            var _0x9ed0x3e = 100
        };
        if (typeof _0x9ed0x3f != "string" || _0x9ed0x3f == "") {
            console.error("FxPlayer: Mã PauseAd HTML không được trống");
            return false
        };
        try {
            this._initPauseAdCssHtml();
            var _0x9ed0x40 = -Math.floor(_0x9ed0x3d / 2);
            jQuery(_0x9ed0x39).css("width", _0x9ed0x3d + "px");
            jQuery(_0x9ed0x39).css("height", _0x9ed0x3e + "px");
            jQuery(_0x9ed0x39).css("margin-left", _0x9ed0x40 + "px");
            jQuery(_0x9ed0x3a).html(_0x9ed0x3f);
            if (jQuery(_0x9ed0x3b).attr("data-set") != "1") {
                jQuery(_0x9ed0x3b).click(function () {
                    jQuery(_0x9ed0x39).addClass("closed")
                });
                try {
                    var _0x9ed0x41 = this.getJwPlayer();
                    _0x9ed0x41.on("play", function () {
                        jQuery(_0x9ed0x39).removeClass("closed")
                    })
                } catch (err) {}
            };
            console.log("FxPlayer: init pauseAd complete!");
            return _0x9ed0x39
        } catch (err) {
            console.error("FxPlayer: Lỗi khởi tạo PauseAd => " + err.message);
            return false
        }
    };
    this.setPauseAd = function (_0x9ed0x3d, _0x9ed0x3e, _0x9ed0x3f) {
        return this._initPauseAd(_0x9ed0x3d, _0x9ed0x3e, _0x9ed0x3f)
    };
    this._gaCategory = "HTML5";
    if (this._isMobile) {
        this._gaCategory = "Mobile"
    } else {
        this._gaCategory = "PC"
    };
    this.setAdTrackingCategory = function (_0x9ed0x42) {
        if (typeof _0x9ed0x42 == "string" && _0x9ed0x42 != "") {
            this._gaCategory = _0x9ed0x42
        }
    };
    this.setPlaylist = function (_0x9ed0x13) {
        var _0x9ed0x43 = this._validPlaylist(_0x9ed0x13);
        if (_0x9ed0x43) {
            this._playlist = this._orderSourcesOnPlaylist(_0x9ed0x43)
        } else {
            this._playlist = this._getErrorPlaylist()
        }
    };
    this.getPlaylist = function () {
        return this._playlist
    };
    this.isIOSDevice = function () {
        var _0x9ed0x44 = /(iPhone|iPad|iPod)/i;
        return _0x9ed0x44.test(window.navigator.userAgent)
    };
    var _0x9ed0x45 = false;
    this.fixIOSCaptions = function () {
        return false;
        try {
            if (_0x9ed0x45) {
                return false
            };
            if (this.isIOSDevice()) {
                var _0x9ed0x46 = this.getVideoObj();
                if (jQuery(_0x9ed0x46).length == 0) {
                    console.warn("FxPlayer: Chưa tìm thấy videoObj nên chưa fix lỗi Captions IOS");
                    return false
                };
                var _0x9ed0x3f = "";
                var _0x9ed0x47 = this.getJwPlayer().getPlaylistIndex();
                var _0x9ed0x48 = this.getJwPlayer().getPlaylistItem(_0x9ed0x47);
                jQuery(_0x9ed0x46).find("track").remove();
                if (typeof _0x9ed0x48.iOSTracks != "undefined" && _0x9ed0x48.iOSTracks.length > 0) {
                    var _0x9ed0x49 = _0x9ed0x48.iOSTracks;
                    for (var _0x9ed0xd = 0; _0x9ed0xd < _0x9ed0x49.length; _0x9ed0xd++) {
                        var _0x9ed0x1a = _0x9ed0x49[_0x9ed0xd];
                        console.log("track:");
                        console.log(_0x9ed0x1a);
                        if (typeof _0x9ed0x1a.file != "string" || _0x9ed0x1a.file == "") {
                            continue
                        };
                        if (typeof _0x9ed0x1a.label != "string") {
                            _0x9ed0x1a.label = "Phụ đề"
                        };
                        if (typeof _0x9ed0x1a.kind != "string") {
                            _0x9ed0x1a.kind = "subtitles"
                        };
                        if (typeof _0x9ed0x1a.default == "undefined") {
                            _0x9ed0x1a.default = false
                        };
                        _0x9ed0x3f += '<track label="' + _0x9ed0x1a.label + '" kind="' + _0x9ed0x1a.kind + '" src="' + _0x9ed0x1a.file + '" ' + ((_0x9ed0x1a.default) ? "default" : "") + ">"
                    };
                    if (_0x9ed0x3f != "") {
                        jQuery(_0x9ed0x46).append(_0x9ed0x3f);
                        jQuery(_0x9ed0x46).css({
                            "top": 0,
                            "left": 0,
                            "bottom": 0,
                            "right": 0
                        })
                    };
                    console.warn("FxPlayer: Đã fix lỗi Captions IOS")
                }
            };
            _0x9ed0x45 = true;
            return _0x9ed0x3f
        } catch (err) {
            console.error("FxPlayer: Lỗi khi sửa captions trên iOS => " + err.message);
            return false
        }
    };
    this.load = function (_0x9ed0x13, _0x9ed0x4a) {
        if (this._jwPlayer === null) {
            console.error("FxPlayer: Chưa gọi phương thức setup để khởi tạo player");
            return false
        };
        try {
            if (typeof _0x9ed0x4a == "undefined" || !_0x9ed0x4a) {
                this._retryCount = 0
            };
            var _0x9ed0x43 = this._validPlaylist(_0x9ed0x13);
            if (_0x9ed0x43) {
                _0x9ed0x13 = this._orderSourcesOnPlaylist(_0x9ed0x43)
            } else {
                _0x9ed0x13 = this._getErrorPlaylist()
            };
            try {
                this._jwPlayer.hideLoading()
            } catch (err) {};
            this._playlist = _0x9ed0x13;
            this._jwPlayer.load(_0x9ed0x13);
            var _0x9ed0x4b = "";
            if (typeof _0x9ed0x13.image == "string" && _0x9ed0x13.image != "") {
                _0x9ed0x4b = _0x9ed0x13.image
            } else {
                var _0x9ed0x4c = this._jwPlayer.getConfig();
                if (typeof _0x9ed0x4c.image == "string" && _0x9ed0x4c.image != "") {
                    _0x9ed0x4b = _0x9ed0x4c.image
                }
            };
            if (_0x9ed0x4b != "") {
                this._setVideoPoster(_0x9ed0x4b)
            };
            if (typeof _0x9ed0x45 != "undefined") {
                _0x9ed0x45 = false
            };
            this.fixIOSCaptions();
            this._jwPlayer.lastAutoQualityLabel = ""
        } catch (err) {
            console.error("FxPlayer: Lỗi load playlist => " + err.message);
            console.error(+err.stack)
        }
    };
    this.retry = function () {
        if (this._retryCount) {
            return false
        };
        var _0x9ed0x4d = this.getPosition();
        this.setStartPosition(_0x9ed0x4d);
        var _0x9ed0x4e = this._html5VideoObj.currentSrc;
        if (_0x9ed0x4e.indexOf("\?") != -1) {
            _0x9ed0x4e += "&_retry=1"
        } else {
            _0x9ed0x4e += "\?_retry=1"
        };
        this._html5VideoObj.src = _0x9ed0x4e;
        this._retryCount = 1;
        jQuery(this._jwPlayer.getContainer()).removeClass("jw-state-error").addClass("jw-state-playing");
        console.warn("FxPlayer: Đã thử lại sau lỗi tại " + _0x9ed0x4d);
        return true
    };
    this.getJwPlayer = function () {
        return this._jwPlayer
    };
    this.getVideoObj = function () {
        return this._html5VideoObj
    };
    var _0x9ed0x4f = function () {
        if (jQuery("#jwplayer-customcss").length > 0) {
            return false
        };
        jQuery("head").append('<style type="text/css" id="jwplayer-customcss">		.jwplayer.jw-state-paused .vtlai-screen-button-play\{display:block !important;\}/Fix cho hls\*/		.jwplayer.vtlai-loading .jw-display-icon-rewind .jw-svg-icon-rewind,.jwplayer:not\(.jw-flag-touch\):not\(.jw-flag-small-player\) .jw-display-icon-rewind .jw-svg-icon-rewind\{display:none\}/\*Đang loading thì ko hiện tua 10s trước\*/		.jwplayer:not\(.jw-flag-touch\):not\(.jw-flag-small-player\) .jw-display-icon-container.jw-display-icon-rewind\{visibility: hidden;\} /\*PC thì ko hiện nút tua 10s trc giữa màn hình\*/		.jwplayer:not\(.jw-flag-touch\):not\(.jw-flag-small-player\) .jw-display-icon-display .jw-svg-icon-pause,.jw-display-icon-display .jw-svg-icon-play\{visibility: hidden !important;\}/\*Ko dùng nút có sẵn\*/		.jwplayer.vtlai-loading .jw-display-icon-display .jw-svg-icon-play\{display: none !important;\}/\*Ko dùng nút có sẵn\*/		.jw-settings-content-item:not\(.jw-settings-item-active\):hover\{background-color: rgba\(0,0,0,0.2\);\}		.jw-settings-content-item.jw-settings-item-active\{background-color: rgba\(0,0,0,0.8\);\}/\*Màu nên cho chọn chất lượng và tốc độ phát\*/		/\*.jw-slider-time .jw-buffer\{background-color: rgba\(0,0,0,0.1\) !important;\}\*/		.jw-slider-time .jw-progress\{background-color: #ff0046 !important;\}		:not\(.jw-flag-touch\) .jw-button-color:not\(.jw-logo-button\):focus, :not\(.jw-flag-touch\) .jw-button-color:not\(.jw-logo-button\):hover\{color: #ff0046 !important;\}		.jw-controlbar .jw-icon.jw-button-color:hover\{color: #ff0046 !important;\}		.jw-controls-backdrop\{background:none !important;\}		</style>');
        return true
    };
    this.setup = function () {
        _0x9ed0x4f();
        _0x9ed0x45 = false;
        jwplayer.key = "dWwDdbLI0ul1clbtlw\+4/UHPxlYmLoE9Ii9QEw==";
        if (typeof jwplayer._hold == "undefined") {
            jwplayer._hold = 0
        };
        jwplayer._hold++;
        this._retryCount = 0;
        this._jwPlayer = jwplayer(this._containerId);
        this._jwPlayer._fxPlayer = this;
        var _0x9ed0x4c = {
            "autostart": true,
            "playlist": this._playlist,
            "primary": "html5",
            "startparam": "begin",
            "stagevideo": false,
            "stretching": "uniform",
            "visualplaylist": true,
            "controls": true,
            "displaydescription": true,
            "displaytitle": true,
            "androidhls": true,
            "cast": {},
            "width": "100%",
            "height": "100%"
        };
        if (this._isMobile) {};
        if (this._aspectRatio) {
            _0x9ed0x4c.aspectratio = this._aspectRatio
        };
        if (this._gaSetting) {
            _0x9ed0x4c.ga = this._gaSetting
        };
        if (this._image != "") {
            _0x9ed0x4c.image = this._image
        };
        if (this._primary != "html5") {
            _0x9ed0x4c.primary = this._primary
        };
        var _0x9ed0x50 = /(MIDP.+UCBrowser)/i;
        if (!_0x9ed0x50.test(window.navigator.userAgent)) {
            if (this.getAdBreakCount()) {
                _0x9ed0x4c.advertising = {
                    "client": "vast",
                    "admessage": "Quảng cáo sẽ tự đóng sau xx giây nữa.",
                    "skiptext": "Bỏ qua quảng cáo",
                    "skipmessage": "Bỏ qua sau xxs",
                    "schedule": this.getAllAdBreak()
                };
                if (this._setSkipOffset >= 0) {
                    _0x9ed0x4c.advertising.skipoffset = this._setSkipOffset
                }
            }
        };
        this._jwPlayer._isMobile = this._isMobile;
        this._jwPlayer._fxPlayer = this;
        this._jwPlayer.setup(_0x9ed0x4c);
        this._jwPlayer.on("ready", function (_0x9ed0x51) {
            try {
                if (typeof jwplayer._hold != "undefined") {
                    jwplayer._hold--;
                    if (jwplayer._hold <= 0) {
                        jwplayer.key = "foHsjhsUGHSJHwdiHD\+4/JHGYdowUGWHDSjdwU=="
                    }
                };
                var _0x9ed0x52 = this.getProvider();
                if (typeof _0x9ed0x52 == "object" && _0x9ed0x52.name == "youtube") {
                    return
                };
                var _0x9ed0x32 = this.getContainer();
                var _0x9ed0x53 = jQuery(_0x9ed0x32).find("video")[0];
                if (typeof _0x9ed0x53 == "undefined" || _0x9ed0x53 == null) {
                    return
                };
                _0x9ed0x53._player = this;
                _0x9ed0x53._isMobile = this._isMobile;
                _0x9ed0x53.__seekToOnReady = 0;
                this._vidObj = _0x9ed0x53;
                this._fxPlayer._html5VideoObj = _0x9ed0x53;
                try {
                    jQuery(_0x9ed0x53).attr("playsinline", "true");
                    jQuery(_0x9ed0x53).attr("preload", "auto");
                    jQuery(_0x9ed0x53).attr("autoplay", "true");
                    jQuery(_0x9ed0x53)[0].muted = false
                } catch (err) {};
                if (typeof _0x9ed0x4c.image == "string" && _0x9ed0x4c.image != "") {
                    this._fxPlayer._setVideoPoster(_0x9ed0x4c.image)
                };
                if (this._fxPlayer._startPosition > 0) {
                    _0x9ed0x53.__seekToOnReady = this._fxPlayer._startPosition;
                    this._fxPlayer._startPosition = 0
                };
                this.isOnAds = function () {
                    return jQuery(this.getContainer()).hasClass("jw-flag-ads")
                };
                var _0x9ed0x54 = this;
                jQuery(_0x9ed0x32).append('<div class="vtlai-screen-button-play" style="display: block;"></div>');
                var _0x9ed0x55 = jQuery(_0x9ed0x32).find(".vtlai-screen-button-play")[0];
                jQuery(_0x9ed0x55).click(function () {
                    try {
                        _0x9ed0x54.play(true);
                        if (_0x9ed0x54.getJwPlayer().getProvider() != "html5") {
                            return true
                        };
                        if (_0x9ed0x53.paused) {
                            _0x9ed0x53.play()
                        }
                    } catch (err) {}
                });
                try {
                    var _0x9ed0x56 = this.getQualityLevels();
                    if (_0x9ed0x56.length > 2) {
                        var _0x9ed0x57 = parseInt(_0x9ed0x56[this.getCurrentQuality()].label);
                        if (_0x9ed0x57 > 480) {
                            var _0x9ed0x32 = this.getContainer();
                            var _0x9ed0x58 = jQuery(_0x9ed0x32).find(".jw-icon-hd")[0];
                            jQuery(_0x9ed0x58).addClass("vtlai-hd-on")
                        }
                    }
                } catch (err) {};
                _0x9ed0x53.addEventListener("pause", function () {
                    try {
                        if (!this.ended) {
                            jQuery(_0x9ed0x55).css("display", "block")
                        };
                        this.hideLoading()
                    } catch (err) {
                        console.error("Error on pause player/Big btn: " + err.message)
                    };
                    try {
                        if (this.syncAudioEnable) {
                            this.syncAudio.pause();
                            this.syncAudio.currentTime = this.currentTime
                        }
                    } catch (err) {
                        console.error("Error on sync A/V: " + err.message)
                    }
                });
                _0x9ed0x53.addEventListener("play", function () {
                    try {
                        jQuery(_0x9ed0x55).css("display", "none")
                    } catch (err) {
                        console.error("Error on play player/Big btn: " + err.message)
                    }
                });
                _0x9ed0x54._container = _0x9ed0x54.getContainer();
                jQuery(_0x9ed0x54._container).find(".jw-controls").append('				<!-- div class="jw-display-icon-container jw-background-color jw-reset vtlai-loading-icon">					<div class="jw-icon jw-icon-display jw-button-color jw-reset"></div>				</div -->				');
                _0x9ed0x54.isLoading = function () {
                    return jQuery(this._container).hasClass("vtlai-loading")
                };
                _0x9ed0x54.displayLoading = function () {
                    if (!jQuery(this._container).hasClass("vtlai-loading") && !jQuery(this._container).hasClass("jw-flag-ads")) {
                        jQuery(this._container).addClass("vtlai-loading")
                    }
                };
                _0x9ed0x54.hideLoading = function () {
                    if (jQuery(this._container).hasClass("vtlai-loading")) {
                        jQuery(this._container).removeClass("vtlai-loading")
                    }
                };
                _0x9ed0x53.displayLoading = function () {
                    this._player.displayLoading()
                };
                _0x9ed0x53.hideLoading = function () {
                    this._player.hideLoading()
                };
                _0x9ed0x53.__isSeeking = 0;
                _0x9ed0x53.__seekTime = 0;
                _0x9ed0x53.syncAudioEnable = false;
                _0x9ed0x53.setupSyncAudio = function () {
                    try {
                        var _0x9ed0x59 = this._player.getPlaylistItem();
                        if (!this._player.isOnAds() && typeof _0x9ed0x59.audioUrl == "string" && _0x9ed0x59.audioUrl != "") {
                            if (typeof this.syncAudio == "undefined") {
                                this.syncAudio = new Audio();
                                this.syncAudio.preload = "auto";
                                this.syncAudio.autoplay = false;
                                this.syncAudio.syncVideo = this;
                                this.syncAudio.addEventListener("error", function () {
                                    this.syncVideo.syncAudioEnable = false
                                })
                            };
                            if (this.syncAudio.src != _0x9ed0x59.audioUrl) {
                                this.syncAudio.src = _0x9ed0x59.audioUrl
                            };
                            if (this.paused) {
                                this.syncAudio.pause()
                            } else {
                                this.syncAudio.play()
                            };
                            if (jQuery(this).find("audio").length < 1) {
                                jQuery(this.syncAudio).addClass("hidden")
                            };
                            this.syncAudio.volume = this.volume;
                            this.syncAudio.muted = this.muted;
                            this.syncAudio.playbackRate = this.playbackRate;
                            this.syncAudioEnable = true
                        } else {
                            this.syncAudioEnable = false;
                            if (typeof this.syncAudio == "object" && !this.syncAudio.paused) {
                                this.syncAudio.pause()
                            }
                        }
                    } catch (err) {
                        console.error("FxPlayer Error on setup sync audio: " + err.message);
                        if (typeof this.syncAudio == "object") {
                            this.syncAudio.pause()
                        }
                    }
                };
                _0x9ed0x53.addEventListener("loadstart", function (_0x9ed0x51) {
                    if (this.preload != "none" || this.autoplay) {
                        this.displayLoading()
                    };
                    this.setupSyncAudio()
                });
                _0x9ed0x53.addEventListener("loadedmetadata", function (_0x9ed0x51) {
                    this.hideLoading()
                });
                _0x9ed0x53.addEventListener("play", function (_0x9ed0x51) {
                    this.displayLoading();
                    try {
                        this.setupSyncAudio();
                        if (this.syncAudioEnable) {
                            this.syncAudio.volume = this.volume;
                            this.syncAudio.muted = this.muted;
                            this.syncAudio.play();
                            this.syncAudio.currentTime = this.currentTime;
                            console.log("onPlay")
                        }
                    } catch (err) {
                        console.error("Error on sync A/V: " + err.message)
                    }
                });
                _0x9ed0x53.addEventListener("playing", function () {
                    if (this.currentTime > 0 || this.duration > 0) {
                        this.hideLoading()
                    };
                    this._player._retryCount = 0
                });
                _0x9ed0x53.addEventListener("waiting", function (_0x9ed0x51) {
                    this.displayLoading()
                });
                _0x9ed0x53.addEventListener("seeking", function () {
                    this.displayLoading();
                    this.__isSeeking = 1;
                    this.__seekTime = this.currentTime;
                    try {
                        if (this.syncAudioEnable) {
                            this.syncAudio.pause();
                            this.syncAudio.currentTime = this.currentTime
                        }
                    } catch (err) {
                        console.error("Error on sync A/V: " + err.message)
                    }
                });
                _0x9ed0x53.addEventListener("seeked", function () {
                    if (this.ended || this.paused) {
                        this.hideLoading()
                    };
                    if (this.__isSeeking && Math.abs(this.currentTime - this.__seekTime) > 0.1) {
                        this.__isSeeking = 0;
                        if (this.duration > 0) {
                            this.hideLoading()
                        }
                    };
                    try {
                        if (this.syncAudioEnable) {
                            this.syncAudio.currentTime = this.currentTime;
                            if (this.paused && !this.syncAudio.paused) {
                                this.syncAudio.pause()
                            };
                            if (!this.paused && this.syncAudio.paused) {
                                this.syncAudio.play()
                            }
                        }
                    } catch (err) {
                        console.error("Error on sync A/V: " + err.message)
                    }
                });
                _0x9ed0x53.addEventListener("timeupdate", function (_0x9ed0x51) {
                    if (this.__isSeeking && Math.abs(this.currentTime - this.__seekTime) > 0.1) {
                        this.__isSeeking = 0;
                        if (this.duration > 0) {
                            this.hideLoading();
                            if (this._isMobile) {
                                jQuery(this._player._container).find(".jw-tooltip-time.jw-open").removeClass("jw-open")
                            }
                        }
                    };
                    try {
                        if (this.syncAudioEnable) {
                            var _0x9ed0x5a = this.currentTime;
                            var _0x9ed0x5b = this.syncAudio.currentTime;
                            if (this.paused && !this.syncAudio.paused) {
                                this.syncAudio.pause()
                            };
                            if (!this.paused && this.syncAudio.paused) {
                                this.syncAudio.play()
                            };
                            if (Math.abs(_0x9ed0x5a - _0x9ed0x5b) > 0.1) {
                                this.syncAudio.currentTime = this.currentTime;
                                console.log("Sync A/V Info: Lệch tiếng")
                            }
                        }
                    } catch (err) {
                        console.error("Error on sync A/V: " + err.message)
                    }
                });
                _0x9ed0x53.addEventListener("error", function (_0x9ed0x51) {
                    this.hideLoading();
                    try {
                        if (this.syncAudioEnable) {
                            this.syncAudioEnable = false;
                            this.syncAudio.pause()
                        }
                    } catch (err) {
                        console.error("Error on sync A/V: " + err.message)
                    }
                });
                _0x9ed0x53.addEventListener("volumechange", function () {
                    try {
                        if (this.syncAudioEnable) {
                            this.syncAudio.volume = this.volume;
                            this.syncAudio.muted = this.muted
                        }
                    } catch (err) {
                        console.error("Error on sync A/V: " + err.message)
                    }
                });
                _0x9ed0x53.addEventListener("ratechange", function (_0x9ed0x51) {
                    try {
                        if (this.syncAudioEnable) {
                            this.syncAudio.playbackRate = this.playbackRate
                        }
                    } catch (err) {
                        console.error("Error on sync A/V: " + err.message)
                    }
                });
                _0x9ed0x53.addEventListener("canplay", function (_0x9ed0x51) {
                    if (this.__seekToOnReady > 0 && !this._player.isOnAds()) {
                        try {
                            if (Math.abs(this.currentTime - this.__seekToOnReady) > 10) {
                                this.currentTime = this.__seekToOnReady;
                                if (this.currentTime == this.__seekToOnReady) {
                                    this.__seekToOnReady = 0
                                }
                            } else {
                                this.__seekToOnReady = 0
                            }
                        } catch (err) {}
                    }
                });
                _0x9ed0x53.addEventListener("canplaythrough", function (_0x9ed0x51) {
                    if (this.__seekToOnReady > 0 && !this._player.isOnAds()) {
                        try {
                            if (Math.abs(this.currentTime - this.__seekToOnReady) > 10) {
                                this.currentTime = this.__seekToOnReady;
                                if (this.currentTime == this.__seekToOnReady) {
                                    this.__seekToOnReady = 0
                                }
                            } else {
                                this.__seekToOnReady = 0
                            }
                        } catch (err) {}
                    }
                });
                _0x9ed0x53.addEventListener("playing", function () {
                    if (this.__seekToOnReady > 0 && !this._player.isOnAds()) {
                        try {
                            if (Math.abs(this.currentTime - this.__seekToOnReady) > 10) {
                                this.currentTime = this.__seekToOnReady;
                                if (this.currentTime == this.__seekToOnReady) {
                                    this.__seekToOnReady = 0
                                }
                            } else {
                                this.__seekToOnReady = 0
                            }
                        } catch (err) {}
                    }
                });
                _0x9ed0x53.addEventListener("loadedmetadata", function (_0x9ed0x51) {
                    if (this.__seekToOnReady > 0 && !this._player.isOnAds()) {
                        try {
                            if (Math.abs(this.currentTime - this.__seekToOnReady) > 10) {
                                this.currentTime = this.__seekToOnReady;
                                if (this.currentTime == this.__seekToOnReady) {
                                    this.__seekToOnReady = 0
                                }
                            } else {
                                this.__seekToOnReady = 0
                            }
                        } catch (err) {}
                    };
                    this.setupSyncAudio()
                });
                _0x9ed0x53.addEventListener("durationchange", function (_0x9ed0x51) {
                    if (this.__seekToOnReady > 0 && !this._player.isOnAds()) {
                        try {
                            if (this.duration > 0 && Math.abs(this.currentTime - this.__seekToOnReady) > 10) {
                                if (this.__seekToOnReady > this.duration) {
                                    this.__seekToOnReady = 0
                                } else {
                                    this.currentTime = this.__seekToOnReady;
                                    if (this.currentTime == this.__seekToOnReady) {
                                        this.__seekToOnReady = 0
                                    }
                                }
                            } else {
                                if (this.duration > 0) {
                                    this.__seekToOnReady = 0
                                }
                            }
                        } catch (err) {}
                    };
                    this.setupSyncAudio()
                });
                var _0x9ed0x5c = /(Chrome|Mac OS.+Safari|iPhone|iPad|iPod|Firefox|Opera|IEMobile|MSIE 9|MSIE 10|MSIE 11|Windows NT.+rv\:11|Windows.+Edge|Windows Phone)/i;
                if (_0x9ed0x5c.test(window.navigator.userAgent)) {
                    jQuery(_0x9ed0x54._container).addClass("vtlai-fix-controlbar")
                };
                this._fxPlayer.fixIOSCaptions();
                this.on("seek", function (_0x9ed0x51) {
                    try {
                        if (this.getProvider().name == "hlsjs") {
                            this.displayLoading()
                        }
                    } catch (err) {}
                });
                this.on("seeked", function (_0x9ed0x51) {
                    try {
                        if (this.getProvider().name == "hlsjs") {
                            this.hideLoading()
                        }
                    } catch (err) {}
                });
                this.on("play", function (_0x9ed0x51) {
                    try {
                        if (this.getProvider().name == "hlsjs") {
                            this.hideLoading()
                        };
                        var _0x9ed0x32 = this.getContainer();
                        jQuery(_0x9ed0x32).find(".vtlai-screen-button-play").css("display", "none")
                    } catch (err) {}
                });
                this.on("pause", function (_0x9ed0x51) {
                    try {
                        if (this.getProvider().name == "hlsjs") {
                            var _0x9ed0x32 = this.getContainer();
                            jQuery(_0x9ed0x32).find(".vtlai-screen-button-play").css("display", "block")
                        }
                    } catch (err) {}
                });
                this.on("play", function (_0x9ed0x51) {
                    try {
                        var _0x9ed0x5d = this.getContainer();
                        if (!jQuery(_0x9ed0x5d).hasClass("jw-flag-ads")) {
                            jQuery(_0x9ed0x5d).find(".vtlai-btn-skip-vpaid-js").remove()
                        }
                    } catch (err) {}
                });
                this.lastAutoQualityLabel = "";
                this.alertCurrentHlsQuality = function () {
                    try {
                        if (typeof this.lastAutoQualityLabel != "string" || _0x9ed0x51.position == 0) {
                            this.lastAutoQualityLabel = ""
                        };
                        if (this.getProvider().name == "hlsjs" && jQuery(this.getContainer()).find(".jw-auto-label").length > 0 && jQuery(this.getContainer()).find(".jw-auto-label").text().trim() != "" && this.lastAutoQualityLabel != jQuery(this.getContainer()).find(".jw-auto-label").text().trim()) {
                            if (typeof this.autoQualityLabelAlertTimmer != "undefined" && this.autoQualityLabelAlertTimmer) {
                                clearTimeout(this.autoQualityLabelAlertTimmer);
                                this.autoQualityLabelAlertTimmer = false
                            };
                            var _0x9ed0x32 = this.getContainer();
                            if (jQuery(_0x9ed0x32).find(".jw-controls-message").length == 0) {
                                jQuery('<div class="jw-controls-message" style="display: none; border-radius: 3px;background-color: rgba\(0, 0, 0, 0.3\);display: block;top: 5%;left: 20%;right: 20%;bottom: auto;position: absolute;padding: 5px 10px;color: rgba\(255,255,255,0.8\);text-align: center;text-shadow: 1px;"></div>').insertAfter(jQuery(_0x9ed0x32).find(".jw-controls-backdrop"))
                            };
                            jQuery(_0x9ed0x32).find(".jw-controls-message").text("Đã tự động chuyển sang chất lượng " + jQuery(this.getContainer()).find(".jw-auto-label").text());
                            this.autoQualityLabelAlertTimmer = setTimeout(function () {
                                jQuery(_0x9ed0x32).find(".jw-controls-message").fadeOut("fast", function () {
                                    jQuery(this).remove()
                                })
                            }, 5000);
                            jQuery(_0x9ed0x32).find(".jw-controls-message").fadeIn("fast");
                            this.lastAutoQualityLabel = jQuery(this.getContainer()).find(".jw-auto-label").text().trim()
                        }
                    } catch (err) {}
                };
                this.on("time", function (_0x9ed0x51) {
                    try {
                        this.alertCurrentHlsQuality()
                    } catch (err) {}
                })
            } catch (err) {
                console.error("Error on Fix play/loading status: " + err.message)
            }
        });
        this._jwPlayer.on("playlist", function (_0x9ed0x51) {
            try {
                var _0x9ed0x56 = this.getQualityLevels();
                if (_0x9ed0x56.length > 2) {
                    var _0x9ed0x57 = parseInt(_0x9ed0x56[this.getCurrentQuality()].label);
                    if (_0x9ed0x57 > 480) {
                        var _0x9ed0x32 = this.getContainer();
                        var _0x9ed0x58 = jQuery(_0x9ed0x32).find(".jw-icon-hd")[0];
                        jQuery(_0x9ed0x58).addClass("vtlai-hd-on")
                    } else {
                        jQuery(_0x9ed0x58).removeClass("vtlai-hd-on")
                    }
                }
            } catch (err) {}
        });
        this._jwPlayer.on("levelsChanged", function (_0x9ed0x51) {
            try {
                var _0x9ed0x5e = _0x9ed0x51.currentQuality;
                var _0x9ed0x5f = _0x9ed0x51.levels[_0x9ed0x5e].label;
                var _0x9ed0x57 = parseInt(_0x9ed0x5f);
                var _0x9ed0x60 = window.location.pathname.replace(/\/[^\/]*$/gi, "");
                document.cookie = "player.quality=" + _0x9ed0x57 + "; path=" + _0x9ed0x60;
                try {
                    var _0x9ed0x61 = _0x9ed0x51.levels.length;
                    if (_0x9ed0x61 > 2) {
                        var _0x9ed0x32 = this.getContainer();
                        var _0x9ed0x58 = jQuery(_0x9ed0x32).find(".jw-icon-hd")[0];
                        if (_0x9ed0x61 > 2 && _0x9ed0x57 > 480) {
                            jQuery(_0x9ed0x58).addClass("vtlai-hd-on")
                        } else {
                            jQuery(_0x9ed0x58).removeClass("vtlai-hd-on")
                        }
                    }
                } catch (err) {};
                var _0x9ed0x62 = this.getPosition();
                if (typeof _0x9ed0x62 == "number" && _0x9ed0x62 > 2 && this._isMobile) {
                    this._vidObj.__seekToOnReady = Math.floor(_0x9ed0x62) - 1
                }
            } catch (err) {};
            try {
                this.lastAutoQualityLabel = ""
            } catch (err) {}
        });
        this._jwPlayer.checkVpaidVideoStatus = function () {};
        this._jwPlayer.on("adPlay", function (_0x9ed0x51) {
            try {
                this.setVolume(35);
                var _0x9ed0x32 = this.getContainer();
                jQuery(_0x9ed0x32).removeClass("vtlai-loading");
                jQuery(_0x9ed0x32).find(".vtlai-screen-button-play").css("display", "none")
            } catch (err) {}
        });
        this._jwPlayer.on("adStarted", function (_0x9ed0x51) {
            try {
                this.setVolume(35);
                var _0x9ed0x32 = this.getContainer();
                jQuery(_0x9ed0x32).removeClass("vtlai-loading");
                jQuery(_0x9ed0x32).find(".vtlai-screen-button-play").css("display", "none")
            } catch (err) {}
        });
        this._jwPlayer.on("adPause", function (_0x9ed0x51) {
            try {
                var _0x9ed0x32 = this.getContainer();
                jQuery(_0x9ed0x32).find(".vtlai-screen-button-play").css("display", "block")
            } catch (err) {}
        });
        this._jwPlayer.on("adImpression", function (_0x9ed0x51) {
            try {
                var _0x9ed0x63 = "";
                switch (_0x9ed0x51.adposition) {
                case "pre":
                    _0x9ed0x63 = "Preroll";
                    break;
                case "mid":
                    _0x9ed0x63 = "Midroll";
                    break;
                case "post":
                    _0x9ed0x63 = "Postroll";
                    break
                };
                if ((typeof _gaq == "object" && typeof _gaq.push == "function") || typeof ga == "function") {
                    var _0x9ed0x64 = /\/\/([^\/]+)\//i;
                    var _0x9ed0xb = _0x9ed0x64.exec(_0x9ed0x51.tag);
                    if (typeof _0x9ed0xb == "object" && _0x9ed0xb != null && _0x9ed0xb.length == 2) {
                        var _0x9ed0x65 = _0x9ed0xb[1];
                        var _0x9ed0x66 = _0x9ed0x63 + " Ad Impression";
                        var _0x9ed0x67 = _0x9ed0x51.client + " " + this._fxPlayer._gaCategory;
                        if (typeof ga == "function") {
                            ga("send", "event", _0x9ed0x67, _0x9ed0x66, _0x9ed0x65);
                            ga("send", "event", _0x9ed0x67, "Ad Impression", _0x9ed0x65);
                            console.log("FxPlayer: " + _0x9ed0x67 + " " + _0x9ed0x66 + " Tracking => " + _0x9ed0x65)
                        } else {
                            _gaq.push(function () {
                                var _0x9ed0x68 = _gat._getTrackers();
                                if (_0x9ed0x68.length > 0) {
                                    for (var _0x9ed0xd in _0x9ed0x68) {
                                        var _0x9ed0x69 = _0x9ed0x68[_0x9ed0xd];
                                        _0x9ed0x69._trackEvent(_0x9ed0x67, _0x9ed0x66, _0x9ed0x65);
                                        _0x9ed0x69._trackEvent(_0x9ed0x67, "Ad Impression", _0x9ed0x65)
                                    }
                                };
                                console.log("FxPlayer: " + _0x9ed0x67 + " " + _0x9ed0x66 + " Tracking => " + _0x9ed0x65)
                            })
                        }
                    }
                };
                console.log("FxPlayer " + _0x9ed0x63 + " " + _0x9ed0x51.client + " Ad is using => " + _0x9ed0x51.tag);
                if (typeof _0x9ed0x51.creativetype != "undefined") {
                    console.log("FxPlayer: Ad creativeType=" + _0x9ed0x51.creativetype)
                };
                if (typeof window.customVpaidSkipAd == "function") {
                    var _0x9ed0x6a = window.customVpaidSkipAd(_0x9ed0x51)
                } else {
                    var _0x9ed0x6a = 1
                };
                if (_0x9ed0x51.creativetype == "vpaid-js" && _0x9ed0x6a) {
                    try {
                        var _0x9ed0x5d = this.getContainer();
                        var _0x9ed0x6b = this;
                        setTimeout(function () {}, 500);
                        setTimeout(function () {
                            if (jQuery(_0x9ed0x5d).find(".jw-media iframe").length > 0) {
                                jQuery(_0x9ed0x5d).append('<div class="vtlai-btn-skip-vpaid-js jw-skip jw-background-color jw-reset">									<span class="jw-text jw-skiptext jw-reset">Bỏ qua quảng cáo</span>									<span class="jw-icon-inline jw-skip-icon jw-reset"></span>								</div>');
                                jQuery(_0x9ed0x5d).find(".vtlai-btn-skip-vpaid-js").click(function () {
                                    _0x9ed0x6b.skipAd();
                                    jQuery(_0x9ed0x5d).find(".jw-media iframe").remove();
                                    this.remove()
                                })
                            } else {}
                        }, 5000)
                    } catch (err) {
                        console.warn("FxPlayer: Error on config vpaid-js skipAd => " + err.message)
                    }
                };
                if (typeof window.AdImpressionCallBack == "function") {
                    window.AdImpressionCallBack(_0x9ed0x51)
                } else {
                    console.log("FxPlayer: AdImpressionCallBack is undefined")
                }
            } catch (err) {}
        });
        this._jwPlayer.on("adRequest", function (_0x9ed0x51) {
            try {
                this._adPlayTracked = 0;
                var _0x9ed0x63 = "";
                switch (_0x9ed0x51.adposition) {
                case "pre":
                    _0x9ed0x63 = "Preroll";
                    break;
                case "mid":
                    _0x9ed0x63 = "Midroll";
                    break;
                case "post":
                    _0x9ed0x63 = "Postroll";
                    break
                };
                if ((typeof _gaq == "object" && typeof _gaq.push == "function") || typeof ga == "function") {
                    var _0x9ed0x64 = /\/\/([^\/]+)\//i;
                    var _0x9ed0xb = _0x9ed0x64.exec(_0x9ed0x51.tag);
                    if (typeof _0x9ed0xb == "object" && _0x9ed0xb != null && _0x9ed0xb.length == 2) {
                        var _0x9ed0x65 = _0x9ed0xb[1];
                        var _0x9ed0x66 = _0x9ed0x63 + " Request Ad";
                        var _0x9ed0x67 = _0x9ed0x51.client + " " + this._fxPlayer._gaCategory;
                        if (typeof ga == "function") {
                            ga("send", "event", _0x9ed0x67, _0x9ed0x66, _0x9ed0x65);
                            ga("send", "event", _0x9ed0x67, "Ad Request", _0x9ed0x65);
                            console.log("FxPlayer: " + _0x9ed0x67 + " " + _0x9ed0x66 + " Tracking => " + _0x9ed0x65)
                        } else {
                            _gaq.push(function () {
                                var _0x9ed0x68 = _gat._getTrackers();
                                if (_0x9ed0x68.length > 0) {
                                    for (var _0x9ed0xd in _0x9ed0x68) {
                                        var _0x9ed0x69 = _0x9ed0x68[_0x9ed0xd];
                                        _0x9ed0x69._trackEvent(_0x9ed0x67, _0x9ed0x66, _0x9ed0x65);
                                        _0x9ed0x69._trackEvent(_0x9ed0x67, "Ad Request", _0x9ed0x65)
                                    }
                                };
                                console.log("FxPlayer: " + _0x9ed0x67 + " " + _0x9ed0x66 + " Tracking => " + _0x9ed0x65)
                            })
                        }
                    }
                };
                if (typeof AdRequestCallBack == "function") {
                    AdRequestCallBack(_0x9ed0x51)
                } else {
                    console.log("FxPlayer: AdRequestCallBack is undefined")
                }
            } catch (err) {}
        });
        this._jwPlayer.on("adSkipped", function (_0x9ed0x51) {
            try {
                this.setVolume(100);
                var _0x9ed0x5d = this.getContainer();
                jQuery(_0x9ed0x5d).find(".vtlai-btn-skip-vpaid-js").remove();
                this.displayLoading();
                if (typeof AdSkippedCallBack == "function") {
                    AdSkippedCallBack(_0x9ed0x51)
                } else {
                    console.log("FxPlayer: AdSkippedCallBack is undefined")
                }
            } catch (err) {}
        });
        this._jwPlayer.on("adComplete", function (_0x9ed0x51) {
            try {
                this.setVolume(100);
                var _0x9ed0x5d = this.getContainer();
                jQuery(_0x9ed0x5d).find(".vtlai-btn-skip-vpaid-js").remove();
                if (typeof window.AdCompleteCallBack == "function") {
                    window.AdCompleteCallBack(_0x9ed0x51)
                } else {
                    console.log("FxPlayer: AdCompleteCallBack is undefined")
                }
            } catch (err) {}
        });
        this._jwPlayer.on("adError", function (_0x9ed0x51) {
            try {
                if (typeof window.AdErrorCallBack == "function") {
                    window.AdErrorCallBack(_0x9ed0x51)
                } else {
                    console.log("FxPlayer: AdErrorCallBack is undefined")
                }
            } catch (err) {}
        });
        this._jwPlayer.on("complete", function (_0x9ed0x51) {
            try {
                if (typeof window.VideoCompleteCallBack == "function") {
                    window.VideoCompleteCallBack(_0x9ed0x51)
                } else {
                    console.log("FxPlayer: VideoCompleteCallBack is undefined")
                }
            } catch (err) {}
        });
        this._jwPlayer.on("firstFrame", function (_0x9ed0x51) {
            try {
                if (this._vidObj.poster) {
                    this._vidObj.poster = ""
                }
            } catch (err) {};
            try {
                this._fxPlayer.fixIOSCaptions()
            } catch (err) {}
        });
        this._jwPlayer.on("error", function (_0x9ed0x51) {
            try {
                if (_0x9ed0x51.message == "Error loading media: File could not be played") {
                    var _0x9ed0x6c = jQuery(this.getContainer()).find(".jw-title-primary");
                    var _0x9ed0x6d = jQuery(this.getContainer()).find(".jw-title-secondary");
                    if (this.getDuration() > 0) {
                        var _0x9ed0x6e = "";
                        if (this._vidObj.error) {
                            _0x9ed0x6e = " #" + this._vidObj.error.code
                        };
                        setTimeout(function () {
                            jQuery(_0x9ed0x6c).text("Lỗi video khi đang xem" + _0x9ed0x6e);
                            jQuery(_0x9ed0x6d).text("Bạn thử kiểm tra lại kết nối Internet và refresh lại trang.")
                        }, 100)
                    } else {
                        setTimeout(function () {
                            jQuery(_0x9ed0x6c).text("Lỗi không thể play video");
                            jQuery(_0x9ed0x6d).text("Bạn thử kiểm tra lại kết nối Internet và refresh lại trang.")
                        }, 100)
                    }
                };
                window._callStack = (new Error()).stack
            } catch (err) {};
            try {
                if (typeof window.VideoErrorCallBack == "function") {
                    window.VideoErrorCallBack(_0x9ed0x51)
                } else {
                    console.log("FxPlayer: VideoErrorCallBack is undefined")
                }
            } catch (err) {}
        });
        this._jwPlayer.on("setupError", function (_0x9ed0x51) {
            try {
                if (!_playerSetup.useJwf) {
                    var _0x9ed0x6f = "";
                    if (typeof _0x9ed0x51 == "string") {
                        _0x9ed0x6f = _0x9ed0x51
                    } else {
                        _0x9ed0x6f = _0x9ed0x51.message
                    };
                    if (_0x9ed0x6f.toLowerCase().indexOf("invalid license key") != -1) {
                        document.cookie = "player.usejwf=1;path=/;";
                        window.location.reload()
                    }
                }
            } catch (err) {}
        });
        try {
            var _0x9ed0x70;
            for (_0x9ed0x70 in this._callbacks) {
                for (var _0x9ed0xd = 0; _0x9ed0xd < this._callbacks[_0x9ed0x70].length; _0x9ed0xd++) {
                    this._jwPlayer.on(_0x9ed0x70, this._callbacks[_0x9ed0x70][_0x9ed0xd])
                }
            }
        } catch (err) {}
    };
    this.play = function () {
        try {
            this._jwPlayer.play(true)
        } catch (err) {}
    };
    this.pause = function () {
        try {
            this._jwPlayer.pause(true)
        } catch (err) {}
    };
    this.seek = function (_0x9ed0x2b) {
        try {
            this._jwPlayer.seek(_0x9ed0x2b)
        } catch (err) {}
    };
    this.getDuration = function () {
        try {
            return this._jwPlayer.getDuration()
        } catch (err) {
            return 0
        }
    };
    this.getPosition = function () {
        try {
            return this._jwPlayer.getPosition()
        } catch (err) {
            return 0
        }
    };
    this.getState = function () {
        try {
            return this._jwPlayer.getState()
        } catch (err) {
            return false
        }
    };
    this.getVolume = function () {
        try {
            return this._jwPlayer.getVolume()
        } catch (err) {
            return 0
        }
    };
    this.setVolume = function (_0x9ed0x71) {
        try {
            this._jwPlayer.setVolume(_0x9ed0x71)
        } catch (err) {}
    };
    this.getFullscreen = function () {
        try {
            return this._jwPlayer.getFullscreen()
        } catch (err) {
            return false
        }
    };
    this.getResolution = function () {
        try {
            if (typeof this._html5VideoObj != null) {
                return {
                    "width": this._html5VideoObj.videoWidth,
                    "height": this._html5VideoObj.videoHeight
                }
            };
            return false
        } catch (err) {
            return false
        }
    };
    this.getDimensions = function () {
        return this.getResolution()
    };
    this.resize = function (_0x9ed0x72, _0x9ed0x73) {
        try {
            this._jwPlayer.resize(_0x9ed0x72, _0x9ed0x73)
        } catch (err) {}
    };
    this.setStartPosition = function (_0x9ed0x2b) {
        try {
            if (typeof _0x9ed0x2b == "number" && _0x9ed0x2b > 10) {
                if (this._html5VideoObj == null) {
                    this._startPosition = Math.floor(_0x9ed0x2b)
                } else {
                    this._html5VideoObj.__seekToOnReady = Math.floor(_0x9ed0x2b)
                }
            };
            return true
        } catch (err) {
            return false
        }
    };
    this.on = function (_0x9ed0x74, _0x9ed0x75) {
        if (typeof _0x9ed0x74 != "string" || typeof _0x9ed0x75 != "function") {
            return false
        };
        if (this._jwPlayer != null) {
            this._jwPlayer.on(_0x9ed0x74, _0x9ed0x75)
        } else {
            if (typeof this._callbacks[_0x9ed0x74] == "undefined") {
                this._callbacks[_0x9ed0x74] = []
            };
            var _0x9ed0x76 = this._callbacks[_0x9ed0x74].length;
            this._callbacks[_0x9ed0x74][_0x9ed0x76] = _0x9ed0x75
        }
    }
}
