/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function (a, b, c) {
        function d(c) {
            var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
        }

        function e(b, c, e, f) {
            if (Object.defineProperty) try {
                return void Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return d(f), e
                    },
                    set: function (a) {
                        d(f), e = a
                    }
                })
            } catch (g) {}
            a._definePropertyBroken = !0, b[c] = e
        }
        a.migrateVersion = "1.4.1";
        var f = {};
        a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function () {
            f = {}, a.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
        var g = a("<input/>", {
                size: 1
            }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function () {
                return null
            },
            j = a.attrHooks.value && a.attrHooks.value.set || function () {
                return c
            },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function (b, e, f, i) {
            var j = e.toLowerCase(),
                o = b && b.nodeType;
            return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                get: function (b, d) {
                    var e, f = a.prop(b, d);
                    return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                },
                set: function (b, c, d) {
                    var e;
                    return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                }
            }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
        }, a.attrHooks.value = {
            get: function (a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
            },
            set: function (a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
            }
        };
        var o, p, q = a.fn.init,
            r = a.find,
            s = a.parseJSON,
            t = /^\s*</,
            u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function (b, e, f) {
            var g, h;
            return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
        }, a.fn.init.prototype = a.fn, a.find = function (a) {
            var b = Array.prototype.slice.call(arguments);
            if ("string" == typeof a && u.test(a)) try {
                document.querySelector(a)
            } catch (c) {
                a = a.replace(v, function (a, b, c, d) {
                    return "[" + b + c + '"' + d + '"]'
                });
                try {
                    document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
                } catch (e) {
                    d("Attribute selector with '#' was not fixed: " + b[0])
                }
            }
            return r.apply(this, b)
        };
        var x;
        for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
        a.parseJSON = function (a) {
            return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
        }, a.uaMatch = function (a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function () {
            function b(a, c) {
                return new b.fn.init(a, c)
            }
            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function (d, e) {
                var f = a.fn.init.call(this, d, e, c);
                return f instanceof b ? f : b(f)
            }, b.fn.init.prototype = b.fn;
            var c = b(document);
            return d("jQuery.sub() is deprecated"), b
        }, a.fn.size = function () {
            return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
        };
        var y = !1;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function (b, c) {
            var d = a.cssHooks[c] && a.cssHooks[c].get;
            d && (a.cssHooks[c].get = function () {
                var a;
                return y = !0, a = d.apply(this, arguments), y = !1, a
            })
        }), a.swap = function (a, b, c, e) {
            var f, g, h = {};
            y || d("jQuery.swap() is undocumented and deprecated");
            for (g in b) h[g] = a.style[g], a.style[g] = b[g];
            f = c.apply(a, e || []);
            for (g in b) a.style[g] = h[g];
            return f
        }, a.ajaxSetup({
            converters: {
                "text json": a.parseJSON
            }
        });
        var z = a.fn.data;
        a.fn.data = function (b) {
            var e, f, g = this[0];
            return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
        };
        var A = /\/(java|ecma)script/i;
        a.clean || (a.clean = function (b, c, e, f) {
            c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
            var g, h, i, j, k = [];
            if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                for (i = function (a) {
                        return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
                    }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
            return k
        });
        var B = a.event.add,
            C = a.event.remove,
            D = a.event.trigger,
            E = a.fn.toggle,
            F = a.fn.live,
            G = a.fn.die,
            H = a.fn.load,
            I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            J = new RegExp("\\b(?:" + I + ")\\b"),
            K = /(?:^|\s)hover(\.\S+|)\b/,
            L = function (b) {
                return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
            };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function (a, b, c, e, f) {
            a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
        }, a.event.remove = function (a, b, c, d, e) {
            C.call(this, a, L(b) || "", c, d, e)
        }, a.each(["load", "unload", "error"], function (b, c) {
            a.fn[c] = function () {
                var a = Array.prototype.slice.call(arguments, 0);
                return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
            }
        }), a.fn.toggle = function (b, c) {
            if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated");
            var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function (c) {
                    var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                    return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                };
            for (h.guid = f; g < e.length;) e[g++].guid = f;
            return this.click(h)
        }, a.fn.live = function (b, c, e) {
            return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
        }, a.fn.die = function (b, c) {
            return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
        }, a.event.trigger = function (a, b, c, e) {
            return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
        }, a.each(I.split("|"), function (b, c) {
            a.event.special[c] = {
                setup: function () {
                    var b = this;
                    return b !== document && (a.event.add(document, c + "." + a.guid, function () {
                        a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                    }), a._data(this, c, a.guid++)), !1
                },
                teardown: function () {
                    return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                }
            }
        }), a.event.special.ready = {
            setup: function () {
                this === document && d("'ready' event is deprecated")
            }
        };
        var M = a.fn.andSelf || a.fn.addBack,
            N = a.fn.find;
        if (a.fn.andSelf = function () {
                return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
            }, a.fn.find = function (a) {
                var b = N.apply(this, arguments);
                return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
            }, a.Callbacks) {
            var O = a.Deferred,
                P = [
                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                ];
            a.Deferred = function (b) {
                var c = O(),
                    e = c.promise();
                return c.pipe = e.pipe = function () {
                    var b = arguments;
                    return d("deferred.pipe() is deprecated"), a.Deferred(function (d) {
                        a.each(P, function (f, g) {
                            var h = a.isFunction(b[f]) && b[f];
                            c[g[1]](function () {
                                var b = h && h.apply(this, arguments);
                                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                            })
                        }), b = null
                    }).promise()
                }, c.isResolved = function () {
                    return d("deferred.isResolved is deprecated"), "resolved" === c.state()
                }, c.isRejected = function () {
                    return d("deferred.isRejected is deprecated"), "rejected" === c.state()
                }, b && b.call(c, c), c
            }
        }
    }(jQuery, window);
(function () {
    function t() {
        var t, e;
        return (e = document.createElement("script")).src = _zxcvbnSettings.src, e.type = "text/javascript", e.async = !0, (t = document.getElementsByTagName("script")[0]).parentNode.insertBefore(e, t)
    }
    null != window.attachEvent ? window.attachEvent("onload", t) : window.addEventListener("load", t, !1)
}).call(this);
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
! function () {
    "use strict";

    function e(e) {
        function t(t, n) {
            var s, h, k = t == window,
                y = n && n.message !== undefined ? n.message : undefined;
            if (!(n = e.extend({}, e.blockUI.defaults, n || {})).ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
                if (n.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, n.overlayCSS || {}), s = e.extend({}, e.blockUI.defaults.css, n.css || {}), n.onOverlayClick && (n.overlayCSS.cursor = "pointer"), h = e.extend({}, e.blockUI.defaults.themedCSS, n.themedCSS || {}), y = y === undefined ? n.message : y, k && p && o(window, {
                        fadeOut: 0
                    }), y && "string" != typeof y && (y.parentNode || y.jquery)) {
                    var m = y.jquery ? y[0] : y,
                        g = {};
                    e(t).data("blockUI.history", g), g.el = m, g.parent = m.parentNode, g.display = m.style.display, g.position = m.style.position, g.parent && g.parent.removeChild(m)
                }
                e(t).data("blockUI.onUnblock", n.onUnblock);
                var v, I, w, U, x = n.baseZ;
                v = e(r || n.forceIframe ? '<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + n.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), I = e(n.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), n.theme && k ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : n.theme ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : U = k ? '<div class="blockUI ' + n.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + n.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', w = e(U), y && (n.theme ? (w.css(h), w.addClass("ui-widget-content")) : w.css(s)), n.theme || I.css(n.overlayCSS), I.css("position", k ? "fixed" : "absolute"), (r || n.forceIframe) && v.css("opacity", 0);
                var C = [v, I, w],
                    S = e(k ? "body" : t);
                e.each(C, function () {
                    this.appendTo(S)
                }), n.theme && n.draggable && e.fn.draggable && w.draggable({
                    handle: ".ui-dialog-titlebar",
                    cancel: "li"
                });
                var O = f && (!e.support.boxModel || e("object,embed", k ? null : t).length > 0);
                if (u || O) {
                    if (k && n.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !k) var E = a(t, "borderTopWidth"),
                        T = a(t, "borderLeftWidth"),
                        M = E ? "(0 - " + E + ")" : 0,
                        B = T ? "(0 - " + T + ")" : 0;
                    e.each(C, function (e, t) {
                        var o = t[0].style;
                        if (o.position = "absolute", e < 2) k ? o.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + n.quirksmodeOffsetHack + ') + "px"') : o.setExpression("height", 'this.parentNode.offsetHeight + "px"'), k ? o.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : o.setExpression("width", 'this.parentNode.offsetWidth + "px"'), B && o.setExpression("left", B), M && o.setExpression("top", M);
                        else if (n.centerY) k && o.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), o.marginTop = 0;
                        else if (!n.centerY && k) {
                            var i = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + (n.css && n.css.top ? parseInt(n.css.top, 10) : 0) + ') + "px"';
                            o.setExpression("top", i)
                        }
                    })
                }
                if (y && (n.theme ? w.find(".ui-widget-content").append(y) : w.append(y), (y.jquery || y.nodeType) && e(y).show()), (r || n.forceIframe) && n.showOverlay && v.show(), n.fadeIn) {
                    var j = n.onBlock ? n.onBlock : c,
                        H = n.showOverlay && !y ? j : c,
                        z = y ? j : c;
                    n.showOverlay && I._fadeIn(n.fadeIn, H), y && w._fadeIn(n.fadeIn, z)
                } else n.showOverlay && I.show(), y && w.show(), n.onBlock && n.onBlock.bind(w)();
                if (i(1, t, n), k ? (p = w[0], b = e(n.focusableElements, p), n.focusInput && setTimeout(l, 20)) : d(w[0], n.centerX, n.centerY), n.timeout) {
                    var W = setTimeout(function () {
                        k ? e.unblockUI(n) : e(t).unblock(n)
                    }, n.timeout);
                    e(t).data("blockUI.timeout", W)
                }
            }
        }

        function o(t, o) {
            var s, l = t == window,
                d = e(t),
                a = d.data("blockUI.history"),
                c = d.data("blockUI.timeout");
            c && (clearTimeout(c), d.removeData("blockUI.timeout")), o = e.extend({}, e.blockUI.defaults, o || {}), i(0, t, o), null === o.onUnblock && (o.onUnblock = d.data("blockUI.onUnblock"), d.removeData("blockUI.onUnblock"));
            var r;
            r = l ? e(document.body).children().filter(".blockUI").add("body > .blockUI") : d.find(">.blockUI"), o.cursorReset && (r.length > 1 && (r[1].style.cursor = o.cursorReset), r.length > 2 && (r[2].style.cursor = o.cursorReset)), l && (p = b = null), o.fadeOut ? (s = r.length, r.stop().fadeOut(o.fadeOut, function () {
                0 == --s && n(r, a, o, t)
            })) : n(r, a, o, t)
        }

        function n(t, o, n, i) {
            var s = e(i);
            if (!s.data("blockUI.isBlocked")) {
                t.each(function (e, t) {
                    this.parentNode && this.parentNode.removeChild(this)
                }), o && o.el && (o.el.style.display = o.display, o.el.style.position = o.position, o.el.style.cursor = "default", o.parent && o.parent.appendChild(o.el), s.removeData("blockUI.history")), s.data("blockUI.static") && s.css("position", "static"), "function" == typeof n.onUnblock && n.onUnblock(i, n);
                var l = e(document.body),
                    d = l.width(),
                    a = l[0].style.width;
                l.width(d - 1).width(d), l[0].style.width = a
            }
        }

        function i(t, o, n) {
            var i = o == window,
                l = e(o);
            if ((t || (!i || p) && (i || l.data("blockUI.isBlocked"))) && (l.data("blockUI.isBlocked", t), i && n.bindEvents && (!t || n.showOverlay))) {
                var d = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                t ? e(document).bind(d, n, s) : e(document).unbind(d, s)
            }
        }

        function s(t) {
            if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && p && t.data.constrainTabKey) {
                var o = b,
                    n = !t.shiftKey && t.target === o[o.length - 1],
                    i = t.shiftKey && t.target === o[0];
                if (n || i) return setTimeout(function () {
                    l(i)
                }, 10), !1
            }
            var s = t.data,
                d = e(t.target);
            return d.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t), d.parents("div." + s.blockMsgClass).length > 0 || 0 === d.parents().children().filter("div.blockUI").length
        }

        function l(e) {
            if (b) {
                var t = b[!0 === e ? b.length - 1 : 0];
                t && t.focus()
            }
        }

        function d(e, t, o) {
            var n = e.parentNode,
                i = e.style,
                s = (n.offsetWidth - e.offsetWidth) / 2 - a(n, "borderLeftWidth"),
                l = (n.offsetHeight - e.offsetHeight) / 2 - a(n, "borderTopWidth");
            t && (i.left = s > 0 ? s + "px" : "0"), o && (i.top = l > 0 ? l + "px" : "0")
        }

        function a(t, o) {
            return parseInt(e.css(t, o), 10) || 0
        }
        e.fn._fadeIn = e.fn.fadeIn;
        var c = e.noop || function () {},
            r = /MSIE/.test(navigator.userAgent),
            u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            f = (document.documentMode, e.isFunction(document.createElement("div").style.setExpression));
        e.blockUI = function (e) {
            t(window, e)
        }, e.unblockUI = function (e) {
            o(window, e)
        }, e.growlUI = function (t, o, n, i) {
            var s = e('<div class="growlUI"></div>');
            t && s.append("<h1>" + t + "</h1>"), o && s.append("<h2>" + o + "</h2>"), n === undefined && (n = 3e3);
            var l = function (t) {
                t = t || {}, e.blockUI({
                    message: s,
                    fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700,
                    fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3,
                    timeout: "undefined" != typeof t.timeout ? t.timeout : n,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: i,
                    css: e.blockUI.defaults.growlCSS
                })
            };
            l();
            s.css("opacity");
            s.mouseover(function () {
                l({
                    fadeIn: 0,
                    timeout: 3e4
                });
                var t = e(".blockMsg");
                t.stop(), t.fadeTo(300, 1)
            }).mouseout(function () {
                e(".blockMsg").fadeOut(1e3)
            })
        }, e.fn.block = function (o) {
            if (this[0] === window) return e.blockUI(o), this;
            var n = e.extend({}, e.blockUI.defaults, o || {});
            return this.each(function () {
                var t = e(this);
                n.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
                    fadeOut: 0
                })
            }), this.each(function () {
                "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, o)
            })
        }, e.fn.unblock = function (t) {
            return this[0] === window ? (e.unblockUI(t), this) : this.each(function () {
                o(this, t)
            })
        }, e.blockUI.version = 2.7, e.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                width: "30%",
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {
                width: "30%",
                top: "40%",
                left: "35%"
            },
            overlayCSS: {
                backgroundColor: "#000",
                opacity: .6,
                cursor: "wait"
            },
            cursorReset: "default",
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: .6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px"
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1
        };
        var p = null,
            b = []
    }
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
}();
jQuery(function (o) {
    if ("undefined" == typeof wc_add_to_cart_params) return !1;

    function t() {
        this.requests = [], this.addRequest = this.addRequest.bind(this), this.run = this.run.bind(this), o(document.body).on("click", ".add_to_cart_button", {
            addToCartHandler: this
        }, this.onAddToCart).on("click", ".remove_from_cart_button", {
            addToCartHandler: this
        }, this.onRemoveFromCart).on("added_to_cart", this.updateButton).on("added_to_cart removed_from_cart", {
            addToCartHandler: this
        }, this.updateFragments)
    }
    t.prototype.addRequest = function (t) {
        this.requests.push(t), 1 === this.requests.length && this.run()
    }, t.prototype.run = function () {
        var t = this,
            a = t.requests[0].complete;
        t.requests[0].complete = function () {
            "function" == typeof a && a(), t.requests.shift(), 0 < t.requests.length && t.run()
        }, o.ajax(this.requests[0])
    }, t.prototype.onAddToCart = function (t) {
        var a = o(this);
        if (a.is(".ajax_add_to_cart")) {
            if (!a.attr("data-product_id")) return !0;
            t.preventDefault(), a.removeClass("added"), a.addClass("loading");
            var r = {};
            o.each(a.data(), function (t, a) {
                r[t] = a
            }), o(document.body).trigger("adding_to_cart", [a, r]), t.data.addToCartHandler.addRequest({
                type: "POST",
                url: wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "add_to_cart"),
                data: r,
                success: function (t) {
                    t && (t.error && t.product_url ? window.location = t.product_url : "yes" !== wc_add_to_cart_params.cart_redirect_after_add ? o(document.body).trigger("added_to_cart", [t.fragments, t.cart_hash, a]) : window.location = wc_add_to_cart_params.cart_url)
                },
                dataType: "json"
            })
        }
    }, t.prototype.onRemoveFromCart = function (t) {
        var a = o(this),
            r = a.closest(".woocommerce-mini-cart-item");
        t.preventDefault(), r.block({
            message: null,
            overlayCSS: {
                opacity: .6
            }
        }), t.data.addToCartHandler.addRequest({
            type: "POST",
            url: wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "remove_from_cart"),
            data: {
                cart_item_key: a.data("cart_item_key")
            },
            success: function (t) {
                t && t.fragments ? o(document.body).trigger("removed_from_cart", [t.fragments, t.cart_hash, a]) : window.location = a.attr("href")
            },
            error: function () {
                window.location = a.attr("href")
            },
            dataType: "json"
        })
    }, t.prototype.updateButton = function (t, a, r, e) {
        (e = void 0 !== e && e) && (e.removeClass("loading"), e.addClass("added"), wc_add_to_cart_params.is_cart || 0 !== e.parent().find(".added_to_cart").length || e.after(' <a href="' + wc_add_to_cart_params.cart_url + '" class="added_to_cart wc-forward" title="' + wc_add_to_cart_params.i18n_view_cart + '">' + wc_add_to_cart_params.i18n_view_cart + "</a>"), o(document.body).trigger("wc_cart_button_updated", [e]))
    }, t.prototype.updateFragments = function (t, a) {
        a && (o.each(a, function (t) {
            o(t).addClass("updating").fadeTo("400", "0.6").block({
                message: null,
                overlayCSS: {
                    opacity: .6
                }
            })
        }), o.each(a, function (t, a) {
            o(t).replaceWith(a), o(t).stop(!0).css("opacity", "1").unblock()
        }), o(document.body).trigger("wc_fragments_loaded"))
    }, new t
});
/*!
 * SelectWoo 1.0.6
 * https://github.com/woocommerce/selectWoo
 *
 * Released under the MIT license
 * https://github.com/woocommerce/selectWoo/blob/master/LICENSE.md
 */
! function (n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && module.exports ? module.exports = function (e, t) {
        return t === undefined && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), n(t), t
    } : n(jQuery)
}(function (i) {
    var e = function () {
            if (i && i.fn && i.fn.select2 && i.fn.select2.amd) var e = i.fn.select2.amd;
            var t, o, c, n;
            return e && e.requirejs || (e ? o = e : e = {}, function (h) {
                    var s, r, f, g, m = {},
                        v = {},
                        y = {},
                        w = {},
                        n = Object.prototype.hasOwnProperty,
                        i = [].slice,
                        _ = /\.js$/;

                    function $(e, t) {
                        return n.call(e, t)
                    }

                    function a(e, t) {
                        var n, i, o, s, r, a, l, c, u, d, p, h = t && t.split("/"),
                            f = y.map,
                            g = f && f["*"] || {};
                        if (e) {
                            for (r = (e = e.split("/")).length - 1, y.nodeIdCompat && _.test(e[r]) && (e[r] = e[r].replace(_, "")), "." === e[0].charAt(0) && h && (e = h.slice(0, h.length - 1).concat(e)), u = 0; u < e.length; u++)
                                if ("." === (p = e[u])) e.splice(u, 1), u -= 1;
                                else if (".." === p) {
                                if (0 === u || 1 === u && ".." === e[2] || ".." === e[u - 1]) continue;
                                0 < u && (e.splice(u - 1, 2), u -= 2)
                            }
                            e = e.join("/")
                        }
                        if ((h || g) && f) {
                            for (u = (n = e.split("/")).length; 0 < u; u -= 1) {
                                if (i = n.slice(0, u).join("/"), h)
                                    for (d = h.length; 0 < d; d -= 1)
                                        if ((o = f[h.slice(0, d).join("/")]) && (o = o[i])) {
                                            s = o, a = u;
                                            break
                                        } if (s) break;
                                !l && g && g[i] && (l = g[i], c = u)
                            }!s && l && (s = l, a = c), s && (n.splice(0, a, s), e = n.join("/"))
                        }
                        return e
                    }

                    function b(t, n) {
                        return function () {
                            var e = i.call(arguments, 0);
                            return "string" != typeof e[0] && 1 === e.length && e.push(null), r.apply(h, e.concat([t, n]))
                        }
                    }

                    function x(t) {
                        return function (e) {
                            m[t] = e
                        }
                    }

                    function A(e) {
                        if ($(v, e)) {
                            var t = v[e];
                            delete v[e], w[e] = !0, s.apply(h, t)
                        }
                        if (!$(m, e) && !$(w, e)) throw new Error("No " + e);
                        return m[e]
                    }

                    function l(e) {
                        var t, n = e ? e.indexOf("!") : -1;
                        return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                    }

                    function C(e) {
                        return e ? l(e) : []
                    }
                    f = function (e, t) {
                        var n, i = l(e),
                            o = i[0],
                            s = t[1];
                        return e = i[1], o && (n = A(o = a(o, s))), o ? e = n && n.normalize ? n.normalize(e, function r(t) {
                            return function (e) {
                                return a(e, t)
                            }
                        }(s)) : a(e, s) : (o = (i = l(e = a(e, s)))[0], e = i[1], o && (n = A(o))), {
                            f: o ? o + "!" + e : e,
                            n: e,
                            pr: o,
                            p: n
                        }
                    }, g = {
                        require: function (e) {
                            return b(e)
                        },
                        exports: function (e) {
                            var t = m[e];
                            return void 0 !== t ? t : m[e] = {}
                        },
                        module: function (e) {
                            return {
                                id: e,
                                uri: "",
                                exports: m[e],
                                config: function t(e) {
                                    return function () {
                                        return y && y.config && y.config[e] || {}
                                    }
                                }(e)
                            }
                        }
                    }, s = function (e, t, n, i) {
                        var o, s, r, a, l, c, u, d = [],
                            p = typeof n;
                        if (c = C(i = i || e), "undefined" == p || "function" == p) {
                            for (t = !t.length && n.length ? ["require", "exports", "module"] : t, l = 0; l < t.length; l += 1)
                                if ("require" === (s = (a = f(t[l], c)).f)) d[l] = g.require(e);
                                else if ("exports" === s) d[l] = g.exports(e), u = !0;
                            else if ("module" === s) o = d[l] = g.module(e);
                            else if ($(m, s) || $(v, s) || $(w, s)) d[l] = A(s);
                            else {
                                if (!a.p) throw new Error(e + " missing " + s);
                                a.p.load(a.n, b(i, !0), x(s), {}), d[l] = m[s]
                            }
                            r = n ? n.apply(m[e], d) : undefined, e && (o && o.exports !== h && o.exports !== m[e] ? m[e] = o.exports : r === h && u || (m[e] = r))
                        } else e && (m[e] = n)
                    }, t = o = r = function (e, t, n, i, o) {
                        if ("string" == typeof e) return g[e] ? g[e](t) : A(f(e, C(t)).f);
                        if (!e.splice) {
                            if ((y = e).deps && r(y.deps, y.callback), !t) return;
                            t.splice ? (e = t, t = n, n = null) : e = h
                        }
                        return t = t || function () {}, "function" == typeof n && (n = i, i = o), i ? s(h, e, t, n) : setTimeout(function () {
                            s(h, e, t, n)
                        }, 4), r
                    }, r.config = function (e) {
                        return r(e)
                    }, t._defined = m, (c = function (e, t, n) {
                        if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                        t.splice || (n = t, t = []), $(m, e) || $(v, e) || (v[e] = [e, t, n])
                    }).amd = {
                        jQuery: !0
                    }
                }(), e.requirejs = t, e.require = o, e.define = c), e.define("almond", function () {}), e.define("jquery", [], function () {
                    var e = i || $;
                    return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e
                }), e.define("select2/utils", ["jquery"], function (s) {
                    var e = {};

                    function d(e) {
                        var t = e.prototype,
                            n = [];
                        for (var i in t) {
                            "function" == typeof t[i] && ("constructor" !== i && n.push(i))
                        }
                        return n
                    }
                    e.Extend = function (e, t) {
                        var n = {}.hasOwnProperty;

                        function i() {
                            this.constructor = e
                        }
                        for (var o in t) n.call(t, o) && (e[o] = t[o]);
                        return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
                    }, e.Decorate = function (i, o) {
                        var e = d(o),
                            t = d(i);

                        function s() {
                            var e = Array.prototype.unshift,
                                t = o.prototype.constructor.length,
                                n = i.prototype.constructor;
                            0 < t && (e.call(arguments, i.prototype.constructor), n = o.prototype.constructor), n.apply(this, arguments)
                        }
                        o.displayName = i.displayName, s.prototype = new function u() {
                            this.constructor = s
                        };
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            s.prototype[r] = i.prototype[r]
                        }
                        for (var a = function (e) {
                                var t = function () {};
                                e in s.prototype && (t = s.prototype[e]);
                                var n = o.prototype[e];
                                return function () {
                                    return Array.prototype.unshift.call(arguments, t), n.apply(this, arguments)
                                }
                            }, l = 0; l < e.length; l++) {
                            var c = e[l];
                            s.prototype[c] = a(c)
                        }
                        return s
                    };
                    var t = function () {
                        this.listeners = {}
                    };
                    return t.prototype.on = function (e, t) {
                        this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                    }, t.prototype.trigger = function (e) {
                        var t = Array.prototype.slice,
                            n = t.call(arguments, 1);
                        this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                    }, t.prototype.invoke = function (e, t) {
                        for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t)
                    }, e.Observable = t, e.generateChars = function (e) {
                        for (var t = "", n = 0; n < e; n++) {
                            t += Math.floor(36 * Math.random()).toString(36)
                        }
                        return t
                    }, e.bind = function (e, t) {
                        return function () {
                            e.apply(t, arguments)
                        }
                    }, e._convertData = function (e) {
                        for (var t in e) {
                            var n = t.split("-"),
                                i = e;
                            if (1 !== n.length) {
                                for (var o = 0; o < n.length; o++) {
                                    var s = n[o];
                                    (s = s.substring(0, 1).toLowerCase() + s.substring(1)) in i || (i[s] = {}), o == n.length - 1 && (i[s] = e[t]), i = i[s]
                                }
                                delete e[t]
                            }
                        }
                        return e
                    }, e.hasScroll = function (e, t) {
                        var n = s(t),
                            i = t.style.overflowX,
                            o = t.style.overflowY;
                        return (i !== o || "hidden" !== o && "visible" !== o) && ("scroll" === i || "scroll" === o || (n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth))
                    }, e.escapeMarkup = function (e) {
                        var t = {
                            "\\": "&#92;",
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#47;"
                        };
                        return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                            return t[e]
                        })
                    }, e.appendMany = function (e, t) {
                        if ("1.7" === s.fn.jquery.substr(0, 3)) {
                            var n = s();
                            s.map(t, function (e) {
                                n = n.add(e)
                            }), t = n
                        }
                        e.append(t)
                    }, e.isTouchscreen = function () {
                        return "undefined" == typeof e._isTouchscreenCache && (e._isTouchscreenCache = "ontouchstart" in document.documentElement), e._isTouchscreenCache
                    }, e
                }), e.define("select2/results", ["jquery", "./utils"], function (h, e) {
                    function i(e, t, n) {
                        this.$element = e, this.data = n, this.options = t, i.__super__.constructor.call(this)
                    }
                    return e.Extend(i, e.Observable), i.prototype.render = function () {
                        var e = h('<ul class="select2-results__options" role="listbox" tabindex="-1"></ul>');
                        return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e
                    }, i.prototype.clear = function () {
                        this.$results.empty()
                    }, i.prototype.displayMessage = function (e) {
                        var t = this.options.get("escapeMarkup");
                        this.clear(), this.hideLoading();
                        var n = h('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
                            i = this.options.get("translations").get(e.message);
                        n.append(t(i(e.args))), n[0].className += " select2-results__message", this.$results.append(n)
                    }, i.prototype.hideMessages = function () {
                        this.$results.find(".select2-results__message").remove()
                    }, i.prototype.append = function (e) {
                        this.hideLoading();
                        var t = [];
                        if (null != e.results && 0 !== e.results.length) {
                            e.results = this.sort(e.results);
                            for (var n = 0; n < e.results.length; n++) {
                                var i = e.results[n],
                                    o = this.option(i);
                                t.push(o)
                            }
                            this.$results.append(t)
                        } else 0 === this.$results.children().length && this.trigger("results:message", {
                            message: "noResults"
                        })
                    }, i.prototype.position = function (e, t) {
                        t.find(".select2-results").append(e)
                    }, i.prototype.sort = function (e) {
                        return this.options.get("sorter")(e)
                    }, i.prototype.highlightFirstItem = function () {
                        var e = this.$results.find(".select2-results__option[data-selected]"),
                            t = e.filter("[data-selected=true]");
                        0 < t.length ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
                    }, i.prototype.setClasses = function () {
                        var t = this;
                        this.data.current(function (e) {
                            var i = h.map(e, function (e) {
                                return e.id.toString()
                            });
                            t.$results.find(".select2-results__option[data-selected]").each(function () {
                                var e = h(this),
                                    t = h.data(this, "data"),
                                    n = "" + t.id;
                                null != t.element && t.element.selected || null == t.element && -1 < h.inArray(n, i) ? e.attr("data-selected", "true") : e.attr("data-selected", "false")
                            })
                        })
                    }, i.prototype.showLoading = function (e) {
                        this.hideLoading();
                        var t = {
                                disabled: !0,
                                loading: !0,
                                text: this.options.get("translations").get("searching")(e)
                            },
                            n = this.option(t);
                        n.className += " loading-results", this.$results.prepend(n)
                    }, i.prototype.hideLoading = function () {
                        this.$results.find(".loading-results").remove()
                    }, i.prototype.option = function (e) {
                        var t = document.createElement("li");
                        t.className = "select2-results__option";
                        var n = {
                            role: "option",
                            "data-selected": "false",
                            tabindex: -1
                        };
                        for (var i in e.disabled && (delete n["data-selected"], n["aria-disabled"] = "true"), null == e.id && delete n["data-selected"], null != e._resultId && (t.id = e._resultId), e.title && (t.title = e.title), e.children && (n["aria-label"] = e.text, delete n["data-selected"]), n) {
                            var o = n[i];
                            t.setAttribute(i, o)
                        }
                        if (e.children) {
                            var s = h(t),
                                r = document.createElement("strong");
                            r.className = "select2-results__group";
                            var a = h(r);
                            this.template(e, r), a.attr("role", "presentation");
                            for (var l = [], c = 0; c < e.children.length; c++) {
                                var u = e.children[c],
                                    d = this.option(u);
                                l.push(d)
                            }
                            var p = h("<ul></ul>", {
                                "class": "select2-results__options select2-results__options--nested",
                                role: "listbox"
                            });
                            p.append(l), s.attr("role", "list"), s.append(r), s.append(p)
                        } else this.template(e, t);
                        return h.data(t, "data", e), t
                    }, i.prototype.bind = function (t, e) {
                        var l = this,
                            n = t.id + "-results";
                        this.$results.attr("id", n), t.on("results:all", function (e) {
                            l.clear(), l.append(e.data), t.isOpen() && (l.setClasses(), l.highlightFirstItem())
                        }), t.on("results:append", function (e) {
                            l.append(e.data), t.isOpen() && l.setClasses()
                        }), t.on("query", function (e) {
                            l.hideMessages(), l.showLoading(e)
                        }), t.on("select", function () {
                            t.isOpen() && (l.setClasses(), l.highlightFirstItem())
                        }), t.on("unselect", function () {
                            t.isOpen() && (l.setClasses(), l.highlightFirstItem())
                        }), t.on("open", function () {
                            l.$results.attr("aria-expanded", "true"), l.$results.attr("aria-hidden", "false"), l.setClasses(), l.ensureHighlightVisible()
                        }), t.on("close", function () {
                            l.$results.attr("aria-expanded", "false"), l.$results.attr("aria-hidden", "true"), l.$results.removeAttr("aria-activedescendant")
                        }), t.on("results:toggle", function () {
                            var e = l.getHighlightedResults();
                            0 !== e.length && e.trigger("mouseup")
                        }), t.on("results:select", function () {
                            var e = l.getHighlightedResults();
                            if (0 !== e.length) {
                                var t = e.data("data");
                                "true" == e.attr("data-selected") ? l.trigger("close", {}) : l.trigger("select", {
                                    data: t
                                })
                            }
                        }), t.on("results:previous", function () {
                            var e = l.getHighlightedResults(),
                                t = l.$results.find("[data-selected]"),
                                n = t.index(e);
                            if (0 !== n) {
                                var i = n - 1;
                                0 === e.length && (i = 0);
                                var o = t.eq(i);
                                o.trigger("mouseenter");
                                var s = l.$results.offset().top,
                                    r = o.offset().top,
                                    a = l.$results.scrollTop() + (r - s);
                                0 === i ? l.$results.scrollTop(0) : r - s < 0 && l.$results.scrollTop(a)
                            }
                        }), t.on("results:next", function () {
                            var e = l.getHighlightedResults(),
                                t = l.$results.find("[data-selected]"),
                                n = t.index(e) + 1;
                            if (!(n >= t.length)) {
                                var i = t.eq(n);
                                i.trigger("mouseenter");
                                var o = l.$results.offset().top + l.$results.outerHeight(!1),
                                    s = i.offset().top + i.outerHeight(!1),
                                    r = l.$results.scrollTop() + s - o;
                                0 === n ? l.$results.scrollTop(0) : o < s && l.$results.scrollTop(r)
                            }
                        }), t.on("results:focus", function (e) {
                            e.element.addClass("select2-results__option--highlighted").attr("aria-selected", "true"), l.$results.attr("aria-activedescendant", e.element.attr("id"))
                        }), t.on("results:message", function (e) {
                            l.displayMessage(e)
                        }), h.fn.mousewheel && this.$results.on("mousewheel", function (e) {
                            var t = l.$results.scrollTop(),
                                n = l.$results.get(0).scrollHeight - t + e.deltaY,
                                i = 0 < e.deltaY && t - e.deltaY <= 0,
                                o = e.deltaY < 0 && n <= l.$results.height();
                            i ? (l.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : o && (l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height()), e.preventDefault(), e.stopPropagation())
                        }), this.$results.on("mouseup", ".select2-results__option[data-selected]", function (e) {
                            var t = h(this),
                                n = t.data("data");
                            "true" !== t.attr("data-selected") ? l.trigger("select", {
                                originalEvent: e,
                                data: n
                            }) : l.options.get("multiple") ? l.trigger("unselect", {
                                originalEvent: e,
                                data: n
                            }) : l.trigger("close", {})
                        }), this.$results.on("mouseenter", ".select2-results__option[data-selected]", function (e) {
                            var t = h(this).data("data");
                            l.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected", "false"), l.trigger("results:focus", {
                                data: t,
                                element: h(this)
                            })
                        })
                    }, i.prototype.getHighlightedResults = function () {
                        return this.$results.find(".select2-results__option--highlighted")
                    }, i.prototype.destroy = function () {
                        this.$results.remove()
                    }, i.prototype.ensureHighlightVisible = function () {
                        var e = this.getHighlightedResults();
                        if (0 !== e.length) {
                            var t = this.$results.find("[data-selected]").index(e),
                                n = this.$results.offset().top,
                                i = e.offset().top,
                                o = this.$results.scrollTop() + (i - n),
                                s = i - n;
                            o -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || s < 0) && this.$results.scrollTop(o)
                        }
                    }, i.prototype.template = function (e, t) {
                        var n = this.options.get("templateResult"),
                            i = this.options.get("escapeMarkup"),
                            o = n(e, t);
                        null == o ? t.style.display = "none" : "string" == typeof o ? t.innerHTML = i(o) : h(t).append(o)
                    }, i
                }), e.define("select2/keys", [], function () {
                    return {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        SHIFT: 16,
                        CTRL: 17,
                        ALT: 18,
                        ESC: 27,
                        SPACE: 32,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        END: 35,
                        HOME: 36,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        DELETE: 46
                    }
                }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (i, e, o) {
                    function n(e, t) {
                        this.$element = e, this.options = t, n.__super__.constructor.call(this)
                    }
                    return e.Extend(n, e.Observable), n.prototype.render = function () {
                        var e = i('<span class="select2-selection"  aria-haspopup="true" aria-expanded="false"></span>');
                        return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), this.$selection = e
                    }, n.prototype.bind = function (e, t) {
                        var n = this,
                            i = (e.id, e.id + "-results");
                        this.options.get("minimumResultsForSearch"), Infinity;
                        this.container = e, this.$selection.on("focus", function (e) {
                            n.trigger("focus", e)
                        }), this.$selection.on("blur", function (e) {
                            n._handleBlur(e)
                        }), this.$selection.on("keydown", function (e) {
                            n.trigger("keypress", e), e.which === o.SPACE && e.preventDefault()
                        }), e.on("results:focus", function (e) {
                            n.$selection.attr("aria-activedescendant", e.data._resultId)
                        }), e.on("selection:update", function (e) {
                            n.update(e.data)
                        }), e.on("open", function () {
                            n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", i), n._attachCloseHandler(e)
                        }), e.on("close", function () {
                            n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), window.setTimeout(function () {
                                n.$selection.focus()
                            }, 1), n._detachCloseHandler(e)
                        }), e.on("enable", function () {
                            n.$selection.attr("tabindex", n._tabindex)
                        }), e.on("disable", function () {
                            n.$selection.attr("tabindex", "-1")
                        })
                    }, n.prototype._handleBlur = function (e) {
                        var t = this;
                        window.setTimeout(function () {
                            document.activeElement == t.$selection[0] || i.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e)
                        }, 1)
                    }, n.prototype._attachCloseHandler = function (e) {
                        i(document.body).on("mousedown.select2." + e.id, function (e) {
                            var t = i(e.target),
                                n = t.closest(".select2");
                            i(".select2.select2-container--open").each(function () {
                                var e = i(this);
                                this != n[0] && (e.data("element").select2("close"), setTimeout(function () {
                                    e.find("*:focus").blur(), t.focus()
                                }, 1))
                            })
                        })
                    }, n.prototype._detachCloseHandler = function (e) {
                        i(document.body).off("mousedown.select2." + e.id)
                    }, n.prototype.position = function (e, t) {
                        t.find(".selection").append(e)
                    }, n.prototype.destroy = function () {
                        this._detachCloseHandler(this.container)
                    }, n.prototype.update = function (e) {
                        throw new Error("The `update` method must be defined in child classes.")
                    }, n
                }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, i) {
                    function o() {
                        o.__super__.constructor.apply(this, arguments)
                    }
                    return n.Extend(o, t), o.prototype.render = function () {
                        var e = o.__super__.render.call(this);
                        return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
                    }, o.prototype.bind = function (t, e) {
                        var n = this;
                        o.__super__.bind.apply(this, arguments);
                        var i = t.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i), this.$selection.attr("role", "combobox"), this.$selection.on("mousedown", function (e) {
                            1 === e.which && n.trigger("toggle", {
                                originalEvent: e
                            })
                        }), this.$selection.on("focus", function (e) {}), this.$selection.on("keydown", function (e) {
                            !t.isOpen() && 48 <= e.which && e.which <= 90 && t.open()
                        }), this.$selection.on("blur", function (e) {}), t.on("focus", function (e) {
                            t.isOpen() || n.$selection.focus()
                        }), t.on("selection:update", function (e) {
                            n.update(e.data)
                        })
                    }, o.prototype.clear = function () {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, o.prototype.display = function (e, t) {
                        var n = this.options.get("templateSelection");
                        return this.options.get("escapeMarkup")(n(e, t))
                    }, o.prototype.selectionContainer = function () {
                        return e("<span></span>")
                    }, o.prototype.update = function (e) {
                        if (0 !== e.length) {
                            var t = e[0],
                                n = this.$selection.find(".select2-selection__rendered"),
                                i = this.display(t, n);
                            n.empty().append(i), n.prop("title", t.title || t.text)
                        } else this.clear()
                    }, o
                }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (i, e, a) {
                    function o(e, t) {
                        o.__super__.constructor.apply(this, arguments)
                    }
                    return a.Extend(o, e), o.prototype.render = function () {
                        var e = o.__super__.render.call(this);
                        return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered" aria-live="polite" aria-relevant="additions removals" aria-atomic="true"></ul>'), e
                    }, o.prototype.bind = function (t, e) {
                        var n = this;
                        o.__super__.bind.apply(this, arguments), this.$selection.on("click", function (e) {
                            n.trigger("toggle", {
                                originalEvent: e
                            })
                        }), this.$selection.on("click", ".select2-selection__choice__remove", function (e) {
                            if (!n.options.get("disabled")) {
                                var t = i(this).parent().data("data");
                                n.trigger("unselect", {
                                    originalEvent: e,
                                    data: t
                                })
                            }
                        }), this.$selection.on("keydown", function (e) {
                            !t.isOpen() && 48 <= e.which && e.which <= 90 && t.open()
                        }), t.on("focus", function () {
                            n.focusOnSearch()
                        })
                    }, o.prototype.clear = function () {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, o.prototype.display = function (e, t) {
                        var n = this.options.get("templateSelection");
                        return this.options.get("escapeMarkup")(n(e, t))
                    }, o.prototype.selectionContainer = function () {
                        return i('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation" aria-hidden="true">&times;</span></li>')
                    }, o.prototype.focusOnSearch = function () {
                        var e = this;
                        "undefined" != typeof e.$search && setTimeout(function () {
                            e._keyUpPrevented = !0, e.$search.focus()
                        }, 1)
                    }, o.prototype.update = function (e) {
                        if (this.clear(), 0 !== e.length) {
                            for (var t = [], n = 0; n < e.length; n++) {
                                var i = e[n],
                                    o = this.selectionContainer(),
                                    s = this.display(i, o);
                                "string" == typeof s && (s = s.trim()), o.append(s), o.prop("title", i.title || i.text), o.data("data", i), t.push(o)
                            }
                            var r = this.$selection.find(".select2-selection__rendered");
                            a.appendMany(r, t)
                        }
                    }, o
                }), e.define("select2/selection/placeholder", ["../utils"], function (e) {
                    function t(e, t, n) {
                        this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
                    }
                    return t.prototype.normalizePlaceholder = function (e, t) {
                        return "string" == typeof t && (t = {
                            id: "",
                            text: t
                        }), t
                    }, t.prototype.createPlaceholder = function (e, t) {
                        var n = this.selectionContainer();
                        return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                    }, t.prototype.update = function (e, t) {
                        var n = 1 == t.length && t[0].id != this.placeholder.id;
                        if (1 < t.length || n) return e.call(this, t);
                        this.clear();
                        var i = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(i)
                    }, t
                }), e.define("select2/selection/allowClear", ["jquery", "../keys"], function (i, o) {
                    function e() {}
                    return e.prototype.bind = function (e, t, n) {
                        var i = this;
                        e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
                            i._handleClear(e)
                        }), t.on("keypress", function (e) {
                            i._handleKeyboardClear(e, t)
                        })
                    }, e.prototype._handleClear = function (e, t) {
                        if (!this.options.get("disabled")) {
                            var n = this.$selection.find(".select2-selection__clear");
                            if (0 !== n.length) {
                                t.stopPropagation();
                                for (var i = n.data("data"), o = 0; o < i.length; o++) {
                                    var s = {
                                        data: i[o]
                                    };
                                    if (this.trigger("unselect", s), s.prevented) return
                                }
                                this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                            }
                        }
                    }, e.prototype._handleKeyboardClear = function (e, t, n) {
                        n.isOpen() || t.which != o.DELETE && t.which != o.BACKSPACE || this._handleClear(t)
                    }, e.prototype.update = function (e, t) {
                        if (e.call(this, t), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === t.length)) {
                            var n = i('<span class="select2-selection__clear">&times;</span>');
                            n.data("data", t), this.$selection.find(".select2-selection__rendered").prepend(n)
                        }
                    }, e
                }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (i, e, a) {
                    function t(e, t, n) {
                        e.call(this, t, n)
                    }
                    return t.prototype.render = function (e) {
                        var t = i('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="text" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                        this.$searchContainer = t, this.$search = t.find("input");
                        var n = e.call(this);
                        return this._transferTabIndex(), n
                    }, t.prototype.bind = function (e, i, t) {
                        var o = this,
                            n = i.id + "-results";
                        e.call(this, i, t), i.on("open", function () {
                            o.$search.attr("aria-owns", n), o.$search.trigger("focus")
                        }), i.on("close", function () {
                            o.$search.val(""), o.$search.removeAttr("aria-activedescendant"), o.$search.removeAttr("aria-owns"), o.$search.trigger("focus")
                        }), i.on("enable", function () {
                            o.$search.prop("disabled", !1), o._transferTabIndex()
                        }), i.on("disable", function () {
                            o.$search.prop("disabled", !0)
                        }), i.on("focus", function (e) {
                            o.$search.trigger("focus")
                        }), i.on("results:focus", function (e) {
                            o.$search.attr("aria-activedescendant", e.data._resultId)
                        }), this.$selection.on("focusin", ".select2-search--inline", function (e) {
                            o.trigger("focus", e)
                        }), this.$selection.on("focusout", ".select2-search--inline", function (e) {
                            o._handleBlur(e)
                        }), this.$selection.on("keydown", ".select2-search--inline", function (e) {
                            if (e.stopPropagation(), o.trigger("keypress", e), o._keyUpPrevented = e.isDefaultPrevented(), e.which === a.BACKSPACE && "" === o.$search.val()) {
                                var t = o.$searchContainer.prev(".select2-selection__choice");
                                if (0 < t.length) {
                                    var n = t.data("data");
                                    o.searchRemoveChoice(n), e.preventDefault()
                                }
                            } else e.which === a.ENTER && (i.open(), e.preventDefault())
                        });
                        var s = document.documentMode,
                            r = s && s <= 11;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {
                            r ? o.$selection.off("input.search input.searchcheck") : o.$selection.off("keyup.search")
                        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
                            if (r && "input" === e.type) o.$selection.off("input.search input.searchcheck");
                            else {
                                var t = e.which;
                                t != a.SHIFT && t != a.CTRL && t != a.ALT && t != a.TAB && o.handleSearch(e)
                            }
                        })
                    }, t.prototype._transferTabIndex = function (e) {
                        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                    }, t.prototype.createPlaceholder = function (e, t) {
                        this.$search.attr("placeholder", t.text)
                    }, t.prototype.update = function (e, t) {
                        var n = this.$search[0] == document.activeElement;
                        this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.focus()
                    }, t.prototype.handleSearch = function () {
                        if (this.resizeSearch(), !this._keyUpPrevented) {
                            var e = this.$search.val();
                            this.trigger("query", {
                                term: e
                            })
                        }
                        this._keyUpPrevented = !1
                    }, t.prototype.searchRemoveChoice = function (e, t) {
                        this.trigger("unselect", {
                            data: t
                        }), this.$search.val(t.text), this.handleSearch()
                    }, t.prototype.resizeSearch = function () {
                        this.$search.css("width", "25px");
                        var e = "";
                        "" !== this.$search.attr("placeholder") ? e = this.$selection.find(".select2-selection__rendered").innerWidth() : e = .75 * (this.$search.val().length + 1) + "em";
                        this.$search.css("width", e)
                    }, t
                }), e.define("select2/selection/eventRelay", ["jquery"], function (r) {
                    function e() {}
                    return e.prototype.bind = function (e, t, n) {
                        var i = this,
                            o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                            s = ["opening", "closing", "selecting", "unselecting"];
                        e.call(this, t, n), t.on("*", function (e, t) {
                            if (-1 !== r.inArray(e, o)) {
                                t = t || {};
                                var n = r.Event("select2:" + e, {
                                    params: t
                                });
                                i.$element.trigger(n), -1 !== r.inArray(e, s) && (t.prevented = n.isDefaultPrevented())
                            }
                        })
                    }, e
                }), e.define("select2/translation", ["jquery", "require"], function (t, n) {
                    function i(e) {
                        this.dict = e || {}
                    }
                    return i.prototype.all = function () {
                        return this.dict
                    }, i.prototype.get = function (e) {
                        return this.dict[e]
                    }, i.prototype.extend = function (e) {
                        this.dict = t.extend({}, e.all(), this.dict)
                    }, i._cache = {}, i.loadPath = function (e) {
                        if (!(e in i._cache)) {
                            var t = n(e);
                            i._cache[e] = t
                        }
                        return new i(i._cache[e])
                    }, i
                }), e.define("select2/diacritics", [], function () {
                    return {
                        "Ⓐ": "A",
                        "Ａ": "A",
                        "À": "A",
                        "Á": "A",
                        "Â": "A",
                        "Ầ": "A",
                        "Ấ": "A",
                        "Ẫ": "A",
                        "Ẩ": "A",
                        "Ã": "A",
                        "Ā": "A",
                        "Ă": "A",
                        "Ằ": "A",
                        "Ắ": "A",
                        "Ẵ": "A",
                        "Ẳ": "A",
                        "Ȧ": "A",
                        "Ǡ": "A",
                        "Ä": "A",
                        "Ǟ": "A",
                        "Ả": "A",
                        "Å": "A",
                        "Ǻ": "A",
                        "Ǎ": "A",
                        "Ȁ": "A",
                        "Ȃ": "A",
                        "Ạ": "A",
                        "Ậ": "A",
                        "Ặ": "A",
                        "Ḁ": "A",
                        "Ą": "A",
                        "Ⱥ": "A",
                        "Ɐ": "A",
                        "Ꜳ": "AA",
                        "Æ": "AE",
                        "Ǽ": "AE",
                        "Ǣ": "AE",
                        "Ꜵ": "AO",
                        "Ꜷ": "AU",
                        "Ꜹ": "AV",
                        "Ꜻ": "AV",
                        "Ꜽ": "AY",
                        "Ⓑ": "B",
                        "Ｂ": "B",
                        "Ḃ": "B",
                        "Ḅ": "B",
                        "Ḇ": "B",
                        "Ƀ": "B",
                        "Ƃ": "B",
                        "Ɓ": "B",
                        "Ⓒ": "C",
                        "Ｃ": "C",
                        "Ć": "C",
                        "Ĉ": "C",
                        "Ċ": "C",
                        "Č": "C",
                        "Ç": "C",
                        "Ḉ": "C",
                        "Ƈ": "C",
                        "Ȼ": "C",
                        "Ꜿ": "C",
                        "Ⓓ": "D",
                        "Ｄ": "D",
                        "Ḋ": "D",
                        "Ď": "D",
                        "Ḍ": "D",
                        "Ḑ": "D",
                        "Ḓ": "D",
                        "Ḏ": "D",
                        "Đ": "D",
                        "Ƌ": "D",
                        "Ɗ": "D",
                        "Ɖ": "D",
                        "Ꝺ": "D",
                        "Ǳ": "DZ",
                        "Ǆ": "DZ",
                        "ǲ": "Dz",
                        "ǅ": "Dz",
                        "Ⓔ": "E",
                        "Ｅ": "E",
                        "È": "E",
                        "É": "E",
                        "Ê": "E",
                        "Ề": "E",
                        "Ế": "E",
                        "Ễ": "E",
                        "Ể": "E",
                        "Ẽ": "E",
                        "Ē": "E",
                        "Ḕ": "E",
                        "Ḗ": "E",
                        "Ĕ": "E",
                        "Ė": "E",
                        "Ë": "E",
                        "Ẻ": "E",
                        "Ě": "E",
                        "Ȅ": "E",
                        "Ȇ": "E",
                        "Ẹ": "E",
                        "Ệ": "E",
                        "Ȩ": "E",
                        "Ḝ": "E",
                        "Ę": "E",
                        "Ḙ": "E",
                        "Ḛ": "E",
                        "Ɛ": "E",
                        "Ǝ": "E",
                        "Ⓕ": "F",
                        "Ｆ": "F",
                        "Ḟ": "F",
                        "Ƒ": "F",
                        "Ꝼ": "F",
                        "Ⓖ": "G",
                        "Ｇ": "G",
                        "Ǵ": "G",
                        "Ĝ": "G",
                        "Ḡ": "G",
                        "Ğ": "G",
                        "Ġ": "G",
                        "Ǧ": "G",
                        "Ģ": "G",
                        "Ǥ": "G",
                        "Ɠ": "G",
                        "Ꞡ": "G",
                        "Ᵹ": "G",
                        "Ꝿ": "G",
                        "Ⓗ": "H",
                        "Ｈ": "H",
                        "Ĥ": "H",
                        "Ḣ": "H",
                        "Ḧ": "H",
                        "Ȟ": "H",
                        "Ḥ": "H",
                        "Ḩ": "H",
                        "Ḫ": "H",
                        "Ħ": "H",
                        "Ⱨ": "H",
                        "Ⱶ": "H",
                        "Ɥ": "H",
                        "Ⓘ": "I",
                        "Ｉ": "I",
                        "Ì": "I",
                        "Í": "I",
                        "Î": "I",
                        "Ĩ": "I",
                        "Ī": "I",
                        "Ĭ": "I",
                        "İ": "I",
                        "Ï": "I",
                        "Ḯ": "I",
                        "Ỉ": "I",
                        "Ǐ": "I",
                        "Ȉ": "I",
                        "Ȋ": "I",
                        "Ị": "I",
                        "Į": "I",
                        "Ḭ": "I",
                        "Ɨ": "I",
                        "Ⓙ": "J",
                        "Ｊ": "J",
                        "Ĵ": "J",
                        "Ɉ": "J",
                        "Ⓚ": "K",
                        "Ｋ": "K",
                        "Ḱ": "K",
                        "Ǩ": "K",
                        "Ḳ": "K",
                        "Ķ": "K",
                        "Ḵ": "K",
                        "Ƙ": "K",
                        "Ⱪ": "K",
                        "Ꝁ": "K",
                        "Ꝃ": "K",
                        "Ꝅ": "K",
                        "Ꞣ": "K",
                        "Ⓛ": "L",
                        "Ｌ": "L",
                        "Ŀ": "L",
                        "Ĺ": "L",
                        "Ľ": "L",
                        "Ḷ": "L",
                        "Ḹ": "L",
                        "Ļ": "L",
                        "Ḽ": "L",
                        "Ḻ": "L",
                        "Ł": "L",
                        "Ƚ": "L",
                        "Ɫ": "L",
                        "Ⱡ": "L",
                        "Ꝉ": "L",
                        "Ꝇ": "L",
                        "Ꞁ": "L",
                        "Ǉ": "LJ",
                        "ǈ": "Lj",
                        "Ⓜ": "M",
                        "Ｍ": "M",
                        "Ḿ": "M",
                        "Ṁ": "M",
                        "Ṃ": "M",
                        "Ɱ": "M",
                        "Ɯ": "M",
                        "Ⓝ": "N",
                        "Ｎ": "N",
                        "Ǹ": "N",
                        "Ń": "N",
                        "Ñ": "N",
                        "Ṅ": "N",
                        "Ň": "N",
                        "Ṇ": "N",
                        "Ņ": "N",
                        "Ṋ": "N",
                        "Ṉ": "N",
                        "Ƞ": "N",
                        "Ɲ": "N",
                        "Ꞑ": "N",
                        "Ꞥ": "N",
                        "Ǌ": "NJ",
                        "ǋ": "Nj",
                        "Ⓞ": "O",
                        "Ｏ": "O",
                        "Ò": "O",
                        "Ó": "O",
                        "Ô": "O",
                        "Ồ": "O",
                        "Ố": "O",
                        "Ỗ": "O",
                        "Ổ": "O",
                        "Õ": "O",
                        "Ṍ": "O",
                        "Ȭ": "O",
                        "Ṏ": "O",
                        "Ō": "O",
                        "Ṑ": "O",
                        "Ṓ": "O",
                        "Ŏ": "O",
                        "Ȯ": "O",
                        "Ȱ": "O",
                        "Ö": "O",
                        "Ȫ": "O",
                        "Ỏ": "O",
                        "Ő": "O",
                        "Ǒ": "O",
                        "Ȍ": "O",
                        "Ȏ": "O",
                        "Ơ": "O",
                        "Ờ": "O",
                        "Ớ": "O",
                        "Ỡ": "O",
                        "Ở": "O",
                        "Ợ": "O",
                        "Ọ": "O",
                        "Ộ": "O",
                        "Ǫ": "O",
                        "Ǭ": "O",
                        "Ø": "O",
                        "Ǿ": "O",
                        "Ɔ": "O",
                        "Ɵ": "O",
                        "Ꝋ": "O",
                        "Ꝍ": "O",
                        "Ƣ": "OI",
                        "Ꝏ": "OO",
                        "Ȣ": "OU",
                        "Ⓟ": "P",
                        "Ｐ": "P",
                        "Ṕ": "P",
                        "Ṗ": "P",
                        "Ƥ": "P",
                        "Ᵽ": "P",
                        "Ꝑ": "P",
                        "Ꝓ": "P",
                        "Ꝕ": "P",
                        "Ⓠ": "Q",
                        "Ｑ": "Q",
                        "Ꝗ": "Q",
                        "Ꝙ": "Q",
                        "Ɋ": "Q",
                        "Ⓡ": "R",
                        "Ｒ": "R",
                        "Ŕ": "R",
                        "Ṙ": "R",
                        "Ř": "R",
                        "Ȑ": "R",
                        "Ȓ": "R",
                        "Ṛ": "R",
                        "Ṝ": "R",
                        "Ŗ": "R",
                        "Ṟ": "R",
                        "Ɍ": "R",
                        "Ɽ": "R",
                        "Ꝛ": "R",
                        "Ꞧ": "R",
                        "Ꞃ": "R",
                        "Ⓢ": "S",
                        "Ｓ": "S",
                        "ẞ": "S",
                        "Ś": "S",
                        "Ṥ": "S",
                        "Ŝ": "S",
                        "Ṡ": "S",
                        "Š": "S",
                        "Ṧ": "S",
                        "Ṣ": "S",
                        "Ṩ": "S",
                        "Ș": "S",
                        "Ş": "S",
                        "Ȿ": "S",
                        "Ꞩ": "S",
                        "Ꞅ": "S",
                        "Ⓣ": "T",
                        "Ｔ": "T",
                        "Ṫ": "T",
                        "Ť": "T",
                        "Ṭ": "T",
                        "Ț": "T",
                        "Ţ": "T",
                        "Ṱ": "T",
                        "Ṯ": "T",
                        "Ŧ": "T",
                        "Ƭ": "T",
                        "Ʈ": "T",
                        "Ⱦ": "T",
                        "Ꞇ": "T",
                        "Ꜩ": "TZ",
                        "Ⓤ": "U",
                        "Ｕ": "U",
                        "Ù": "U",
                        "Ú": "U",
                        "Û": "U",
                        "Ũ": "U",
                        "Ṹ": "U",
                        "Ū": "U",
                        "Ṻ": "U",
                        "Ŭ": "U",
                        "Ü": "U",
                        "Ǜ": "U",
                        "Ǘ": "U",
                        "Ǖ": "U",
                        "Ǚ": "U",
                        "Ủ": "U",
                        "Ů": "U",
                        "Ű": "U",
                        "Ǔ": "U",
                        "Ȕ": "U",
                        "Ȗ": "U",
                        "Ư": "U",
                        "Ừ": "U",
                        "Ứ": "U",
                        "Ữ": "U",
                        "Ử": "U",
                        "Ự": "U",
                        "Ụ": "U",
                        "Ṳ": "U",
                        "Ų": "U",
                        "Ṷ": "U",
                        "Ṵ": "U",
                        "Ʉ": "U",
                        "Ⓥ": "V",
                        "Ｖ": "V",
                        "Ṽ": "V",
                        "Ṿ": "V",
                        "Ʋ": "V",
                        "Ꝟ": "V",
                        "Ʌ": "V",
                        "Ꝡ": "VY",
                        "Ⓦ": "W",
                        "Ｗ": "W",
                        "Ẁ": "W",
                        "Ẃ": "W",
                        "Ŵ": "W",
                        "Ẇ": "W",
                        "Ẅ": "W",
                        "Ẉ": "W",
                        "Ⱳ": "W",
                        "Ⓧ": "X",
                        "Ｘ": "X",
                        "Ẋ": "X",
                        "Ẍ": "X",
                        "Ⓨ": "Y",
                        "Ｙ": "Y",
                        "Ỳ": "Y",
                        "Ý": "Y",
                        "Ŷ": "Y",
                        "Ỹ": "Y",
                        "Ȳ": "Y",
                        "Ẏ": "Y",
                        "Ÿ": "Y",
                        "Ỷ": "Y",
                        "Ỵ": "Y",
                        "Ƴ": "Y",
                        "Ɏ": "Y",
                        "Ỿ": "Y",
                        "Ⓩ": "Z",
                        "Ｚ": "Z",
                        "Ź": "Z",
                        "Ẑ": "Z",
                        "Ż": "Z",
                        "Ž": "Z",
                        "Ẓ": "Z",
                        "Ẕ": "Z",
                        "Ƶ": "Z",
                        "Ȥ": "Z",
                        "Ɀ": "Z",
                        "Ⱬ": "Z",
                        "Ꝣ": "Z",
                        "ⓐ": "a",
                        "ａ": "a",
                        "ẚ": "a",
                        "à": "a",
                        "á": "a",
                        "â": "a",
                        "ầ": "a",
                        "ấ": "a",
                        "ẫ": "a",
                        "ẩ": "a",
                        "ã": "a",
                        "ā": "a",
                        "ă": "a",
                        "ằ": "a",
                        "ắ": "a",
                        "ẵ": "a",
                        "ẳ": "a",
                        "ȧ": "a",
                        "ǡ": "a",
                        "ä": "a",
                        "ǟ": "a",
                        "ả": "a",
                        "å": "a",
                        "ǻ": "a",
                        "ǎ": "a",
                        "ȁ": "a",
                        "ȃ": "a",
                        "ạ": "a",
                        "ậ": "a",
                        "ặ": "a",
                        "ḁ": "a",
                        "ą": "a",
                        "ⱥ": "a",
                        "ɐ": "a",
                        "ꜳ": "aa",
                        "æ": "ae",
                        "ǽ": "ae",
                        "ǣ": "ae",
                        "ꜵ": "ao",
                        "ꜷ": "au",
                        "ꜹ": "av",
                        "ꜻ": "av",
                        "ꜽ": "ay",
                        "ⓑ": "b",
                        "ｂ": "b",
                        "ḃ": "b",
                        "ḅ": "b",
                        "ḇ": "b",
                        "ƀ": "b",
                        "ƃ": "b",
                        "ɓ": "b",
                        "ⓒ": "c",
                        "ｃ": "c",
                        "ć": "c",
                        "ĉ": "c",
                        "ċ": "c",
                        "č": "c",
                        "ç": "c",
                        "ḉ": "c",
                        "ƈ": "c",
                        "ȼ": "c",
                        "ꜿ": "c",
                        "ↄ": "c",
                        "ⓓ": "d",
                        "ｄ": "d",
                        "ḋ": "d",
                        "ď": "d",
                        "ḍ": "d",
                        "ḑ": "d",
                        "ḓ": "d",
                        "ḏ": "d",
                        "đ": "d",
                        "ƌ": "d",
                        "ɖ": "d",
                        "ɗ": "d",
                        "ꝺ": "d",
                        "ǳ": "dz",
                        "ǆ": "dz",
                        "ⓔ": "e",
                        "ｅ": "e",
                        "è": "e",
                        "é": "e",
                        "ê": "e",
                        "ề": "e",
                        "ế": "e",
                        "ễ": "e",
                        "ể": "e",
                        "ẽ": "e",
                        "ē": "e",
                        "ḕ": "e",
                        "ḗ": "e",
                        "ĕ": "e",
                        "ė": "e",
                        "ë": "e",
                        "ẻ": "e",
                        "ě": "e",
                        "ȅ": "e",
                        "ȇ": "e",
                        "ẹ": "e",
                        "ệ": "e",
                        "ȩ": "e",
                        "ḝ": "e",
                        "ę": "e",
                        "ḙ": "e",
                        "ḛ": "e",
                        "ɇ": "e",
                        "ɛ": "e",
                        "ǝ": "e",
                        "ⓕ": "f",
                        "ｆ": "f",
                        "ḟ": "f",
                        "ƒ": "f",
                        "ꝼ": "f",
                        "ⓖ": "g",
                        "ｇ": "g",
                        "ǵ": "g",
                        "ĝ": "g",
                        "ḡ": "g",
                        "ğ": "g",
                        "ġ": "g",
                        "ǧ": "g",
                        "ģ": "g",
                        "ǥ": "g",
                        "ɠ": "g",
                        "ꞡ": "g",
                        "ᵹ": "g",
                        "ꝿ": "g",
                        "ⓗ": "h",
                        "ｈ": "h",
                        "ĥ": "h",
                        "ḣ": "h",
                        "ḧ": "h",
                        "ȟ": "h",
                        "ḥ": "h",
                        "ḩ": "h",
                        "ḫ": "h",
                        "ẖ": "h",
                        "ħ": "h",
                        "ⱨ": "h",
                        "ⱶ": "h",
                        "ɥ": "h",
                        "ƕ": "hv",
                        "ⓘ": "i",
                        "ｉ": "i",
                        "ì": "i",
                        "í": "i",
                        "î": "i",
                        "ĩ": "i",
                        "ī": "i",
                        "ĭ": "i",
                        "ï": "i",
                        "ḯ": "i",
                        "ỉ": "i",
                        "ǐ": "i",
                        "ȉ": "i",
                        "ȋ": "i",
                        "ị": "i",
                        "į": "i",
                        "ḭ": "i",
                        "ɨ": "i",
                        "ı": "i",
                        "ⓙ": "j",
                        "ｊ": "j",
                        "ĵ": "j",
                        "ǰ": "j",
                        "ɉ": "j",
                        "ⓚ": "k",
                        "ｋ": "k",
                        "ḱ": "k",
                        "ǩ": "k",
                        "ḳ": "k",
                        "ķ": "k",
                        "ḵ": "k",
                        "ƙ": "k",
                        "ⱪ": "k",
                        "ꝁ": "k",
                        "ꝃ": "k",
                        "ꝅ": "k",
                        "ꞣ": "k",
                        "ⓛ": "l",
                        "ｌ": "l",
                        "ŀ": "l",
                        "ĺ": "l",
                        "ľ": "l",
                        "ḷ": "l",
                        "ḹ": "l",
                        "ļ": "l",
                        "ḽ": "l",
                        "ḻ": "l",
                        "ſ": "l",
                        "ł": "l",
                        "ƚ": "l",
                        "ɫ": "l",
                        "ⱡ": "l",
                        "ꝉ": "l",
                        "ꞁ": "l",
                        "ꝇ": "l",
                        "ǉ": "lj",
                        "ⓜ": "m",
                        "ｍ": "m",
                        "ḿ": "m",
                        "ṁ": "m",
                        "ṃ": "m",
                        "ɱ": "m",
                        "ɯ": "m",
                        "ⓝ": "n",
                        "ｎ": "n",
                        "ǹ": "n",
                        "ń": "n",
                        "ñ": "n",
                        "ṅ": "n",
                        "ň": "n",
                        "ṇ": "n",
                        "ņ": "n",
                        "ṋ": "n",
                        "ṉ": "n",
                        "ƞ": "n",
                        "ɲ": "n",
                        "ŉ": "n",
                        "ꞑ": "n",
                        "ꞥ": "n",
                        "ǌ": "nj",
                        "ⓞ": "o",
                        "ｏ": "o",
                        "ò": "o",
                        "ó": "o",
                        "ô": "o",
                        "ồ": "o",
                        "ố": "o",
                        "ỗ": "o",
                        "ổ": "o",
                        "õ": "o",
                        "ṍ": "o",
                        "ȭ": "o",
                        "ṏ": "o",
                        "ō": "o",
                        "ṑ": "o",
                        "ṓ": "o",
                        "ŏ": "o",
                        "ȯ": "o",
                        "ȱ": "o",
                        "ö": "o",
                        "ȫ": "o",
                        "ỏ": "o",
                        "ő": "o",
                        "ǒ": "o",
                        "ȍ": "o",
                        "ȏ": "o",
                        "ơ": "o",
                        "ờ": "o",
                        "ớ": "o",
                        "ỡ": "o",
                        "ở": "o",
                        "ợ": "o",
                        "ọ": "o",
                        "ộ": "o",
                        "ǫ": "o",
                        "ǭ": "o",
                        "ø": "o",
                        "ǿ": "o",
                        "ɔ": "o",
                        "ꝋ": "o",
                        "ꝍ": "o",
                        "ɵ": "o",
                        "ƣ": "oi",
                        "ȣ": "ou",
                        "ꝏ": "oo",
                        "ⓟ": "p",
                        "ｐ": "p",
                        "ṕ": "p",
                        "ṗ": "p",
                        "ƥ": "p",
                        "ᵽ": "p",
                        "ꝑ": "p",
                        "ꝓ": "p",
                        "ꝕ": "p",
                        "ⓠ": "q",
                        "ｑ": "q",
                        "ɋ": "q",
                        "ꝗ": "q",
                        "ꝙ": "q",
                        "ⓡ": "r",
                        "ｒ": "r",
                        "ŕ": "r",
                        "ṙ": "r",
                        "ř": "r",
                        "ȑ": "r",
                        "ȓ": "r",
                        "ṛ": "r",
                        "ṝ": "r",
                        "ŗ": "r",
                        "ṟ": "r",
                        "ɍ": "r",
                        "ɽ": "r",
                        "ꝛ": "r",
                        "ꞧ": "r",
                        "ꞃ": "r",
                        "ⓢ": "s",
                        "ｓ": "s",
                        "ß": "s",
                        "ś": "s",
                        "ṥ": "s",
                        "ŝ": "s",
                        "ṡ": "s",
                        "š": "s",
                        "ṧ": "s",
                        "ṣ": "s",
                        "ṩ": "s",
                        "ș": "s",
                        "ş": "s",
                        "ȿ": "s",
                        "ꞩ": "s",
                        "ꞅ": "s",
                        "ẛ": "s",
                        "ⓣ": "t",
                        "ｔ": "t",
                        "ṫ": "t",
                        "ẗ": "t",
                        "ť": "t",
                        "ṭ": "t",
                        "ț": "t",
                        "ţ": "t",
                        "ṱ": "t",
                        "ṯ": "t",
                        "ŧ": "t",
                        "ƭ": "t",
                        "ʈ": "t",
                        "ⱦ": "t",
                        "ꞇ": "t",
                        "ꜩ": "tz",
                        "ⓤ": "u",
                        "ｕ": "u",
                        "ù": "u",
                        "ú": "u",
                        "û": "u",
                        "ũ": "u",
                        "ṹ": "u",
                        "ū": "u",
                        "ṻ": "u",
                        "ŭ": "u",
                        "ü": "u",
                        "ǜ": "u",
                        "ǘ": "u",
                        "ǖ": "u",
                        "ǚ": "u",
                        "ủ": "u",
                        "ů": "u",
                        "ű": "u",
                        "ǔ": "u",
                        "ȕ": "u",
                        "ȗ": "u",
                        "ư": "u",
                        "ừ": "u",
                        "ứ": "u",
                        "ữ": "u",
                        "ử": "u",
                        "ự": "u",
                        "ụ": "u",
                        "ṳ": "u",
                        "ų": "u",
                        "ṷ": "u",
                        "ṵ": "u",
                        "ʉ": "u",
                        "ⓥ": "v",
                        "ｖ": "v",
                        "ṽ": "v",
                        "ṿ": "v",
                        "ʋ": "v",
                        "ꝟ": "v",
                        "ʌ": "v",
                        "ꝡ": "vy",
                        "ⓦ": "w",
                        "ｗ": "w",
                        "ẁ": "w",
                        "ẃ": "w",
                        "ŵ": "w",
                        "ẇ": "w",
                        "ẅ": "w",
                        "ẘ": "w",
                        "ẉ": "w",
                        "ⱳ": "w",
                        "ⓧ": "x",
                        "ｘ": "x",
                        "ẋ": "x",
                        "ẍ": "x",
                        "ⓨ": "y",
                        "ｙ": "y",
                        "ỳ": "y",
                        "ý": "y",
                        "ŷ": "y",
                        "ỹ": "y",
                        "ȳ": "y",
                        "ẏ": "y",
                        "ÿ": "y",
                        "ỷ": "y",
                        "ẙ": "y",
                        "ỵ": "y",
                        "ƴ": "y",
                        "ɏ": "y",
                        "ỿ": "y",
                        "ⓩ": "z",
                        "ｚ": "z",
                        "ź": "z",
                        "ẑ": "z",
                        "ż": "z",
                        "ž": "z",
                        "ẓ": "z",
                        "ẕ": "z",
                        "ƶ": "z",
                        "ȥ": "z",
                        "ɀ": "z",
                        "ⱬ": "z",
                        "ꝣ": "z",
                        "Ά": "Α",
                        "Έ": "Ε",
                        "Ή": "Η",
                        "Ί": "Ι",
                        "Ϊ": "Ι",
                        "Ό": "Ο",
                        "Ύ": "Υ",
                        "Ϋ": "Υ",
                        "Ώ": "Ω",
                        "ά": "α",
                        "έ": "ε",
                        "ή": "η",
                        "ί": "ι",
                        "ϊ": "ι",
                        "ΐ": "ι",
                        "ό": "ο",
                        "ύ": "υ",
                        "ϋ": "υ",
                        "ΰ": "υ",
                        "ω": "ω",
                        "ς": "σ"
                    }
                }), e.define("select2/data/base", ["../utils"], function (i) {
                    function n(e, t) {
                        n.__super__.constructor.call(this)
                    }
                    return i.Extend(n, i.Observable), n.prototype.current = function (e) {
                        throw new Error("The `current` method must be defined in child classes.")
                    }, n.prototype.query = function (e, t) {
                        throw new Error("The `query` method must be defined in child classes.")
                    }, n.prototype.bind = function (e, t) {}, n.prototype.destroy = function () {}, n.prototype.generateResultId = function (e, t) {
                        var n = "";
                        return n += null != e ? e.id : i.generateChars(4), n += "-result-", n += i.generateChars(4), null != t.id ? n += "-" + t.id.toString() : n += "-" + i.generateChars(4), n
                    }, n
                }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, t, a) {
                    function n(e, t) {
                        this.$element = e, this.options = t, n.__super__.constructor.call(this)
                    }
                    return t.Extend(n, e), n.prototype.current = function (e) {
                        var n = [],
                            i = this;
                        this.$element.find(":selected").each(function () {
                            var e = a(this),
                                t = i.item(e);
                            n.push(t)
                        }), e(n)
                    }, n.prototype.select = function (o) {
                        var s = this;
                        if (o.selected = !0, a(o.element).is("option")) return o.element.selected = !0, void this.$element.trigger("change");
                        if (this.$element.prop("multiple")) this.current(function (e) {
                            var t = [];
                            (o = [o]).push.apply(o, e);
                            for (var n = 0; n < o.length; n++) {
                                var i = o[n].id; - 1 === a.inArray(i, t) && t.push(i)
                            }
                            s.$element.val(t), s.$element.trigger("change")
                        });
                        else {
                            var e = o.id;
                            this.$element.val(e), this.$element.trigger("change")
                        }
                    }, n.prototype.unselect = function (o) {
                        var s = this;
                        if (this.$element.prop("multiple")) {
                            if (o.selected = !1, a(o.element).is("option")) return o.element.selected = !1, void this.$element.trigger("change");
                            this.current(function (e) {
                                for (var t = [], n = 0; n < e.length; n++) {
                                    var i = e[n].id;
                                    i !== o.id && -1 === a.inArray(i, t) && t.push(i)
                                }
                                s.$element.val(t), s.$element.trigger("change")
                            })
                        }
                    }, n.prototype.bind = function (e, t) {
                        var n = this;
                        (this.container = e).on("select", function (e) {
                            n.select(e.data)
                        }), e.on("unselect", function (e) {
                            n.unselect(e.data)
                        })
                    }, n.prototype.destroy = function () {
                        this.$element.find("*").each(function () {
                            a.removeData(this, "data")
                        })
                    }, n.prototype.query = function (i, e) {
                        var o = [],
                            s = this;
                        this.$element.children().each(function () {
                            var e = a(this);
                            if (e.is("option") || e.is("optgroup")) {
                                var t = s.item(e),
                                    n = s.matches(i, t);
                                null !== n && o.push(n)
                            }
                        }), e({
                            results: o
                        })
                    }, n.prototype.addOptions = function (e) {
                        t.appendMany(this.$element, e)
                    }, n.prototype.option = function (e) {
                        var t;
                        e.children ? (t = document.createElement("optgroup")).label = e.text : (t = document.createElement("option")).textContent !== undefined ? t.textContent = e.text : t.innerText = e.text, e.id !== undefined && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
                        var n = a(t),
                            i = this._normalizeItem(e);
                        return i.element = t, a.data(t, "data", i), n
                    }, n.prototype.item = function (e) {
                        var t = {};
                        if (null != (t = a.data(e[0], "data"))) return t;
                        if (e.is("option")) t = {
                            id: e.val(),
                            text: e.text(),
                            disabled: e.prop("disabled"),
                            selected: e.prop("selected"),
                            title: e.prop("title")
                        };
                        else if (e.is("optgroup")) {
                            t = {
                                text: e.prop("label"),
                                children: [],
                                title: e.prop("title")
                            };
                            for (var n = e.children("option"), i = [], o = 0; o < n.length; o++) {
                                var s = a(n[o]),
                                    r = this.item(s);
                                i.push(r)
                            }
                            t.children = i
                        }
                        return (t = this._normalizeItem(t)).element = e[0], a.data(e[0], "data", t), t
                    }, n.prototype._normalizeItem = function (e) {
                        a.isPlainObject(e) || (e = {
                            id: e,
                            text: e
                        });
                        return null != (e = a.extend({}, {
                            text: ""
                        }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && (e._resultId = this.generateResultId(this.container, e)), a.extend({}, {
                            selected: !1,
                            disabled: !1
                        }, e)
                    }, n.prototype.matches = function (e, t) {
                        return this.options.get("matcher")(e, t)
                    }, n
                }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, f, g) {
                    function i(e, t) {
                        var n = t.get("data") || [];
                        i.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n))
                    }
                    return f.Extend(i, e), i.prototype.select = function (n) {
                        var e = this.$element.find("option").filter(function (e, t) {
                            return t.value == n.id.toString()
                        });
                        0 === e.length && (e = this.option(n), this.addOptions(e)), i.__super__.select.call(this, n)
                    }, i.prototype.convertToOptions = function (e) {
                        var t = this,
                            n = this.$element.find("option"),
                            i = n.map(function () {
                                return t.item(g(this)).id
                            }).get(),
                            o = [];

                        function s(e) {
                            return function () {
                                return g(this).val() == e.id
                            }
                        }
                        for (var r = 0; r < e.length; r++) {
                            var a = this._normalizeItem(e[r]);
                            if (0 <= g.inArray(a.id, i)) {
                                var l = n.filter(s(a)),
                                    c = this.item(l),
                                    u = g.extend(!0, {}, a, c),
                                    d = this.option(u);
                                l.replaceWith(d)
                            } else {
                                var p = this.option(a);
                                if (a.children) {
                                    var h = this.convertToOptions(a.children);
                                    f.appendMany(p, h)
                                }
                                o.push(p)
                            }
                        }
                        return o
                    }, i
                }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, s) {
                    function n(e, t) {
                        this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, e, t)
                    }
                    return t.Extend(n, e), n.prototype._applyDefaults = function (e) {
                        var t = {
                            data: function (e) {
                                return s.extend({}, e, {
                                    q: e.term
                                })
                            },
                            transport: function (e, t, n) {
                                var i = s.ajax(e);
                                return i.then(t), i.fail(n), i
                            }
                        };
                        return s.extend({}, t, e, !0)
                    }, n.prototype.processResults = function (e) {
                        return e
                    }, n.prototype.query = function (n, i) {
                        var o = this;
                        null != this._request && (s.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                        var t = s.extend({
                            type: "GET"
                        }, this.ajaxOptions);

                        function e() {
                            var e = t.transport(t, function (e) {
                                var t = o.processResults(e, n);
                                o.options.get("debug") && window.console && console.error && (t && t.results && s.isArray(t.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), i(t), o.container.focusOnActiveElement()
                            }, function () {
                                e.status && "0" === e.status || o.trigger("results:message", {
                                    message: "errorLoading"
                                })
                            });
                            o._request = e
                        }
                        "function" == typeof t.url && (t.url = t.url.call(this.$element, n)), "function" == typeof t.data && (t.data = t.data.call(this.$element, n)), this.ajaxOptions.delay && null != n.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e()
                    }, n
                }), e.define("select2/data/tags", ["jquery"], function (u) {
                    function e(e, t, n) {
                        var i = n.get("tags"),
                            o = n.get("createTag");
                        o !== undefined && (this.createTag = o);
                        var s = n.get("insertTag");
                        if (s !== undefined && (this.insertTag = s), e.call(this, t, n), u.isArray(i))
                            for (var r = 0; r < i.length; r++) {
                                var a = i[r],
                                    l = this._normalizeItem(a),
                                    c = this.option(l);
                                this.$element.append(c)
                            }
                    }
                    return e.prototype.query = function (e, l, c) {
                        var u = this;
                        this._removeOldTags(), null != l.term && null == l.page ? e.call(this, l, function d(e, t) {
                            for (var n = e.results, i = 0; i < n.length; i++) {
                                var o = n[i],
                                    s = null != o.children && !d({
                                        results: o.children
                                    }, !0);
                                if ((o.text || "").toUpperCase() === (l.term || "").toUpperCase() || s) return !t && (e.data = n, void c(e))
                            }
                            if (t) return !0;
                            var r = u.createTag(l);
                            if (null != r) {
                                var a = u.option(r);
                                a.attr("data-select2-tag", !0), u.addOptions([a]), u.insertTag(n, r)
                            }
                            e.results = n, c(e)
                        }) : e.call(this, l, c)
                    }, e.prototype.createTag = function (e, t) {
                        var n = u.trim(t.term);
                        return "" === n ? null : {
                            id: n,
                            text: n
                        }
                    }, e.prototype.insertTag = function (e, t, n) {
                        t.unshift(n)
                    }, e.prototype._removeOldTags = function (e) {
                        this._lastTag;
                        this.$element.find("option[data-select2-tag]").each(function () {
                            this.selected || u(this).remove()
                        })
                    }, e
                }), e.define("select2/data/tokenizer", ["jquery"], function (d) {
                    function e(e, t, n) {
                        var i = n.get("tokenizer");
                        i !== undefined && (this.tokenizer = i), e.call(this, t, n)
                    }
                    return e.prototype.bind = function (e, t, n) {
                        e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
                    }, e.prototype.query = function (e, t, n) {
                        var o = this;
                        t.term = t.term || "";
                        var i = this.tokenizer(t, this.options, function s(e) {
                            var t = o._normalizeItem(e);
                            if (!o.$element.find("option").filter(function () {
                                    return d(this).val() === t.id
                                }).length) {
                                var n = o.option(t);
                                n.attr("data-select2-tag", !0), o._removeOldTags(), o.addOptions([n])
                            }! function i(e) {
                                o.trigger("select", {
                                    data: e
                                })
                            }(t)
                        });
                        i.term !== t.term && (this.$search.length && (this.$search.val(i.term), this.$search.focus()), t.term = i.term), e.call(this, t, n)
                    }, e.prototype.tokenizer = function (e, t, n, i) {
                        for (var o = n.get("tokenSeparators") || [], s = t.term, r = 0, a = this.createTag || function (e) {
                                return {
                                    id: e.term,
                                    text: e.term
                                }
                            }; r < s.length;) {
                            var l = s[r];
                            if (-1 !== d.inArray(l, o)) {
                                var c = s.substr(0, r),
                                    u = a(d.extend({}, t, {
                                        term: c
                                    }));
                                null != u ? (i(u), s = s.substr(r + 1) || "", r = 0) : r++
                            } else r++
                        }
                        return {
                            term: s
                        }
                    }, e
                }), e.define("select2/data/minimumInputLength", [], function () {
                    function e(e, t, n) {
                        this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
                    }
                    return e.prototype.query = function (e, t, n) {
                        t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
                            message: "inputTooShort",
                            args: {
                                minimum: this.minimumInputLength,
                                input: t.term,
                                params: t
                            }
                        }) : e.call(this, t, n)
                    }, e
                }), e.define("select2/data/maximumInputLength", [], function () {
                    function e(e, t, n) {
                        this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
                    }
                    return e.prototype.query = function (e, t, n) {
                        t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
                            message: "inputTooLong",
                            args: {
                                maximum: this.maximumInputLength,
                                input: t.term,
                                params: t
                            }
                        }) : e.call(this, t, n)
                    }, e
                }), e.define("select2/data/maximumSelectionLength", [], function () {
                    function e(e, t, n) {
                        this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
                    }
                    return e.prototype.query = function (n, i, o) {
                        var s = this;
                        this.current(function (e) {
                            var t = null != e ? e.length : 0;
                            0 < s.maximumSelectionLength && t >= s.maximumSelectionLength ? s.trigger("results:message", {
                                message: "maximumSelected",
                                args: {
                                    maximum: s.maximumSelectionLength
                                }
                            }) : n.call(s, i, o)
                        })
                    }, e
                }), e.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
                    function n(e, t) {
                        this.$element = e, this.options = t, n.__super__.constructor.call(this)
                    }
                    return e.Extend(n, e.Observable), n.prototype.render = function () {
                        var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                        return e.attr("dir", this.options.get("dir")), this.$dropdown = e
                    }, n.prototype.bind = function () {}, n.prototype.position = function (e, t) {}, n.prototype.destroy = function () {
                        this.$dropdown.remove()
                    }, n
                }), e.define("select2/dropdown/search", ["jquery", "../utils"], function (s, e) {
                    function t() {}
                    return t.prototype.render = function (e) {
                        var t = e.call(this),
                            n = s('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="text" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="true" /></span>');
                        return this.$searchContainer = n, this.$search = n.find("input"), t.prepend(n), t
                    }, t.prototype.bind = function (e, t, n) {
                        var i = this,
                            o = t.id + "-results";
                        e.call(this, t, n), this.$search.on("keydown", function (e) {
                            i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented()
                        }), this.$search.on("input", function (e) {
                            s(this).off("keyup")
                        }), this.$search.on("keyup input", function (e) {
                            i.handleSearch(e)
                        }), t.on("open", function () {
                            i.$search.attr("tabindex", 0), i.$search.attr("aria-owns", o), i.$search.focus(), window.setTimeout(function () {
                                i.$search.focus()
                            }, 0)
                        }), t.on("close", function () {
                            i.$search.attr("tabindex", -1), i.$search.removeAttr("aria-activedescendant"), i.$search.removeAttr("aria-owns"), i.$search.val("")
                        }), t.on("focus", function () {
                            t.isOpen() || i.$search.focus()
                        }), t.on("results:all", function (e) {
                            null != e.query.term && "" !== e.query.term || (i.showSearch(e) ? i.$searchContainer.removeClass("select2-search--hide") : i.$searchContainer.addClass("select2-search--hide"))
                        }), t.on("results:focus", function (e) {
                            i.$search.attr("aria-activedescendant", e.data._resultId)
                        })
                    }, t.prototype.handleSearch = function (e) {
                        if (!this._keyUpPrevented) {
                            var t = this.$search.val();
                            this.trigger("query", {
                                term: t
                            })
                        }
                        this._keyUpPrevented = !1
                    }, t.prototype.showSearch = function (e, t) {
                        return !0
                    }, t
                }), e.define("select2/dropdown/hidePlaceholder", [], function () {
                    function e(e, t, n, i) {
                        this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i)
                    }
                    return e.prototype.append = function (e, t) {
                        t.results = this.removePlaceholder(t.results), e.call(this, t)
                    }, e.prototype.normalizePlaceholder = function (e, t) {
                        return "string" == typeof t && (t = {
                            id: "",
                            text: t
                        }), t
                    }, e.prototype.removePlaceholder = function (e, t) {
                        for (var n = t.slice(0), i = t.length - 1; 0 <= i; i--) {
                            var o = t[i];
                            this.placeholder.id === o.id && n.splice(i, 1)
                        }
                        return n
                    }, e
                }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function (o) {
                    function e(e, t, n, i) {
                        this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                    }
                    return e.prototype.append = function (e, t) {
                        this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
                    }, e.prototype.bind = function (e, t, n) {
                        var i = this;
                        e.call(this, t, n), t.on("query", function (e) {
                            i.lastParams = e, i.loading = !0
                        }), t.on("query:append", function (e) {
                            i.lastParams = e, i.loading = !0
                        }), this.$results.on("scroll", function () {
                            var e = o.contains(document.documentElement, i.$loadingMore[0]);
                            if (!i.loading && e) {
                                var t = i.$results.offset().top + i.$results.outerHeight(!1);
                                i.$loadingMore.offset().top + i.$loadingMore.outerHeight(!1) <= t + 50 && i.loadMore()
                            }
                        })
                    }, e.prototype.loadMore = function () {
                        this.loading = !0;
                        var e = o.extend({}, {
                            page: 1
                        }, this.lastParams);
                        e.page++, this.trigger("query:append", e)
                    }, e.prototype.showLoadingMore = function (e, t) {
                        return t.pagination && t.pagination.more
                    }, e.prototype.createLoadingMore = function () {
                        var e = o('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
                            t = this.options.get("translations").get("loadingMore");
                        return e.html(t(this.lastParams)), e
                    }, e
                }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (f, a) {
                    function e(e, t, n) {
                        this.$dropdownParent = n.get("dropdownParent") || f(document.body), e.call(this, t, n)
                    }
                    return e.prototype.bind = function (e, t, n) {
                        var i = this,
                            o = !1;
                        e.call(this, t, n), t.on("open", function () {
                            i._showDropdown(), i._attachPositioningHandler(t), o || (o = !0, t.on("results:all", function () {
                                i._positionDropdown(), i._resizeDropdown()
                            }), t.on("results:append", function () {
                                i._positionDropdown(), i._resizeDropdown()
                            }))
                        }), t.on("close", function () {
                            i._hideDropdown(), i._detachPositioningHandler(t)
                        }), this.$dropdownContainer.on("mousedown", function (e) {
                            e.stopPropagation()
                        })
                    }, e.prototype.destroy = function (e) {
                        e.call(this), this.$dropdownContainer.remove()
                    }, e.prototype.position = function (e, t, n) {
                        t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                            position: "absolute",
                            top: -999999
                        }), this.$container = n
                    }, e.prototype.render = function (e) {
                        var t = f("<span></span>"),
                            n = e.call(this);
                        return t.append(n), this.$dropdownContainer = t
                    }, e.prototype._hideDropdown = function (e) {
                        this.$dropdownContainer.detach()
                    }, e.prototype._attachPositioningHandler = function (e, t) {
                        var n = this,
                            i = "scroll.select2." + t.id,
                            o = "resize.select2." + t.id,
                            s = "orientationchange.select2." + t.id,
                            r = this.$container.parents().filter(a.hasScroll);
                        r.each(function () {
                            f(this).data("select2-scroll-position", {
                                x: f(this).scrollLeft(),
                                y: f(this).scrollTop()
                            })
                        }), r.on(i, function (e) {
                            var t = f(this).data("select2-scroll-position");
                            f(this).scrollTop(t.y)
                        }), f(window).on(i + " " + o + " " + s, function (e) {
                            n._positionDropdown(), n._resizeDropdown()
                        })
                    }, e.prototype._detachPositioningHandler = function (e, t) {
                        var n = "scroll.select2." + t.id,
                            i = "resize.select2." + t.id,
                            o = "orientationchange.select2." + t.id;
                        this.$container.parents().filter(a.hasScroll).off(n), f(window).off(n + " " + i + " " + o)
                    }, e.prototype._positionDropdown = function () {
                        var e = f(window),
                            t = this.$dropdown.hasClass("select2-dropdown--above"),
                            n = this.$dropdown.hasClass("select2-dropdown--below"),
                            i = null,
                            o = this.$container.offset();
                        o.bottom = o.top + this.$container.outerHeight(!1);
                        var s = {
                            height: this.$container.outerHeight(!1)
                        };
                        s.top = o.top, s.bottom = o.top + s.height;
                        var r = this.$dropdown.outerHeight(!1),
                            a = e.scrollTop(),
                            l = e.scrollTop() + e.height(),
                            c = a < o.top - r,
                            u = l > o.bottom + r,
                            d = {
                                left: o.left,
                                top: s.bottom
                            },
                            p = this.$dropdownParent;
                        "static" === p.css("position") && (p = p.offsetParent());
                        var h = p.offset();
                        d.top -= h.top, d.left -= h.left, t || n || (i = "below"), u || !c || t ? !c && u && t && (i = "below") : i = "above", ("above" == i || t && "below" !== i) && (d.top = s.top - h.top - r), null != i && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + i), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + i)), this.$dropdownContainer.css(d)
                    }, e.prototype._resizeDropdown = function () {
                        var e = {
                            width: this.$container.outerWidth(!1) + "px"
                        };
                        this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
                    }, e.prototype._showDropdown = function (e) {
                        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                    }, e
                }), e.define("select2/dropdown/minimumResultsForSearch", [], function () {
                    function e(e, t, n, i) {
                        this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = Infinity), e.call(this, t, n, i)
                    }
                    return e.prototype.showSearch = function (e, t) {
                        return !(function o(e) {
                            for (var t = 0, n = 0; n < e.length; n++) {
                                var i = e[n];
                                i.children ? t += o(i.children) : t++
                            }
                            return t
                        }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
                    }, e
                }), e.define("select2/dropdown/selectOnClose", [], function () {
                    function e() {}
                    return e.prototype.bind = function (e, t, n) {
                        var i = this;
                        e.call(this, t, n), t.on("close", function (e) {
                            i._handleSelectOnClose(e)
                        })
                    }, e.prototype._handleSelectOnClose = function (e, t) {
                        if (t && null != t.originalSelect2Event) {
                            var n = t.originalSelect2Event;
                            if ("select" === n._type || "unselect" === n._type) return
                        }
                        var i = this.getHighlightedResults();
                        if (!(i.length < 1)) {
                            var o = i.data("data");
                            null != o.element && o.element.selected || null == o.element && o.selected || this.trigger("select", {
                                data: o
                            })
                        }
                    }, e
                }), e.define("select2/dropdown/closeOnSelect", [], function () {
                    function e() {}
                    return e.prototype.bind = function (e, t, n) {
                        var i = this;
                        e.call(this, t, n), t.on("select", function (e) {
                            i._selectTriggered(e)
                        }), t.on("unselect", function (e) {
                            i._selectTriggered(e)
                        })
                    }, e.prototype._selectTriggered = function (e, t) {
                        var n = t.originalEvent;
                        n && n.ctrlKey || this.trigger("close", {
                            originalEvent: n,
                            originalSelect2Event: t
                        })
                    }, e
                }), e.define("select2/i18n/en", [], function () {
                    return {
                        errorLoading: function () {
                            return "The results could not be loaded."
                        },
                        inputTooLong: function (e) {
                            var t = e.input.length - e.maximum,
                                n = "Please delete " + t + " character";
                            return 1 != t && (n += "s"), n
                        },
                        inputTooShort: function (e) {
                            return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                        },
                        loadingMore: function () {
                            return "Loading more results…"
                        },
                        maximumSelected: function (e) {
                            var t = "You can only select " + e.maximum + " item";
                            return 1 != e.maximum && (t += "s"), t
                        },
                        noResults: function () {
                            return "No results found"
                        },
                        searching: function () {
                            return "Searching…"
                        }
                    }
                }), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (m, v, y, w, _, $, b, x, A, C, S, n, O, E, D, T, q, j, L, k, P, I, M, R, z, H, U, N, e) {
                    function t() {
                        this.reset()
                    }
                    return t.prototype.apply = function (e) {
                        if (null == (e = m.extend(!0, {}, this.defaults, e)).dataAdapter) {
                            if (null != e.ajax ? e.dataAdapter = D : null != e.data ? e.dataAdapter = E : e.dataAdapter = O, 0 < e.minimumInputLength && (e.dataAdapter = C.Decorate(e.dataAdapter, j)), 0 < e.maximumInputLength && (e.dataAdapter = C.Decorate(e.dataAdapter, L)), 0 < e.maximumSelectionLength && (e.dataAdapter = C.Decorate(e.dataAdapter, k)), e.tags && (e.dataAdapter = C.Decorate(e.dataAdapter, T)), null == e.tokenSeparators && null == e.tokenizer || (e.dataAdapter = C.Decorate(e.dataAdapter, q)), null != e.query) {
                                var t = v(e.amdBase + "compat/query");
                                e.dataAdapter = C.Decorate(e.dataAdapter, t)
                            }
                            if (null != e.initSelection) {
                                var n = v(e.amdBase + "compat/initSelection");
                                e.dataAdapter = C.Decorate(e.dataAdapter, n)
                            }
                        }
                        if (null == e.resultsAdapter && (e.resultsAdapter = y, null != e.ajax && (e.resultsAdapter = C.Decorate(e.resultsAdapter, R)), null != e.placeholder && (e.resultsAdapter = C.Decorate(e.resultsAdapter, M)), e.selectOnClose && (e.resultsAdapter = C.Decorate(e.resultsAdapter, U))), null == e.dropdownAdapter) {
                            if (e.multiple) e.dropdownAdapter = P;
                            else {
                                var i = C.Decorate(P, I);
                                e.dropdownAdapter = i
                            }
                            if (0 !== e.minimumResultsForSearch && (e.dropdownAdapter = C.Decorate(e.dropdownAdapter, H)), e.closeOnSelect && (e.dropdownAdapter = C.Decorate(e.dropdownAdapter, N)), null != e.dropdownCssClass || null != e.dropdownCss || null != e.adaptDropdownCssClass) {
                                var o = v(e.amdBase + "compat/dropdownCss");
                                e.dropdownAdapter = C.Decorate(e.dropdownAdapter, o)
                            }
                            e.dropdownAdapter = C.Decorate(e.dropdownAdapter, z)
                        }
                        if (null == e.selectionAdapter) {
                            if (e.multiple ? e.selectionAdapter = _ : e.selectionAdapter = w, null != e.placeholder && (e.selectionAdapter = C.Decorate(e.selectionAdapter, $)), e.allowClear && (e.selectionAdapter = C.Decorate(e.selectionAdapter, b)), e.multiple && (e.selectionAdapter = C.Decorate(e.selectionAdapter, x)), null != e.containerCssClass || null != e.containerCss || null != e.adaptContainerCssClass) {
                                var s = v(e.amdBase + "compat/containerCss");
                                e.selectionAdapter = C.Decorate(e.selectionAdapter, s)
                            }
                            e.selectionAdapter = C.Decorate(e.selectionAdapter, A)
                        }
                        if ("string" == typeof e.language)
                            if (0 < e.language.indexOf("-")) {
                                var r = e.language.split("-")[0];
                                e.language = [e.language, r]
                            } else e.language = [e.language];
                        if (m.isArray(e.language)) {
                            var a = new S;
                            e.language.push("en");
                            for (var l = e.language, c = 0; c < l.length; c++) {
                                var u = l[c],
                                    d = {};
                                try {
                                    d = S.loadPath(u)
                                } catch (f) {
                                    try {
                                        u = this.defaults.amdLanguageBase + u, d = S.loadPath(u)
                                    } catch (g) {
                                        e.debug && window.console && console.warn && console.warn('Select2: The language file for "' + u + '" could not be automatically loaded. A fallback will be used instead.');
                                        continue
                                    }
                                }
                                a.extend(d)
                            }
                            e.translations = a
                        } else {
                            var p = S.loadPath(this.defaults.amdLanguageBase + "en"),
                                h = new S(e.language);
                            h.extend(p), e.translations = h
                        }
                        return e
                    }, t.prototype.reset = function () {
                        function r(e) {
                            return e.replace(/[^\u0000-\u007E]/g, function t(e) {
                                return n[e] || e
                            })
                        }
                        this.defaults = {
                            amdBase: "./",
                            amdLanguageBase: "./i18n/",
                            closeOnSelect: !0,
                            debug: !1,
                            dropdownAutoWidth: !1,
                            escapeMarkup: C.escapeMarkup,
                            language: e,
                            matcher: function a(e, t) {
                                if ("" === m.trim(e.term)) return t;
                                if (t.children && 0 < t.children.length) {
                                    for (var n = m.extend(!0, {}, t), i = t.children.length - 1; 0 <= i; i--) null == a(e, t.children[i]) && n.children.splice(i, 1);
                                    return 0 < n.children.length ? n : a(e, n)
                                }
                                var o = r(t.text).toUpperCase(),
                                    s = r(e.term).toUpperCase();
                                return -1 < o.indexOf(s) ? t : null
                            },
                            minimumInputLength: 0,
                            maximumInputLength: 0,
                            maximumSelectionLength: 0,
                            minimumResultsForSearch: 0,
                            selectOnClose: !1,
                            sorter: function (e) {
                                return e
                            },
                            templateResult: function (e) {
                                return e.text
                            },
                            templateSelection: function (e) {
                                return e.text
                            },
                            theme: "default",
                            width: "resolve"
                        }
                    }, t.prototype.set = function (e, t) {
                        var n = {};
                        n[m.camelCase(e)] = t;
                        var i = C._convertData(n);
                        m.extend(this.defaults, i)
                    }, new t
                }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (i, s, o, r) {
                    function e(e, t) {
                        if (this.options = e, null != t && this.fromElement(t), this.options = o.apply(this.options), t && t.is("input")) {
                            var n = i(this.get("amdBase") + "compat/inputData");
                            this.options.dataAdapter = r.Decorate(this.options.dataAdapter, n)
                        }
                    }
                    return e.prototype.fromElement = function (e) {
                        var t = ["select2"];
                        null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
                        var n = {};
                        n = s.fn.jquery && "1." == s.fn.jquery.substr(0, 2) && e[0].dataset ? s.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                        var i = s.extend(!0, {}, n);
                        for (var o in i = r._convertData(i)) - 1 < s.inArray(o, t) || (s.isPlainObject(this.options[o]) ? s.extend(this.options[o], i[o]) : this.options[o] = i[o]);
                        return this
                    }, e.prototype.get = function (e) {
                        return this.options[e]
                    }, e.prototype.set = function (e, t) {
                        this.options[e] = t
                    }, e
                }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (o, c, n, s) {
                    var u = function (e, t) {
                        null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), t = t || {}, this.options = new c(t, e), u.__super__.constructor.call(this);
                        var n = e.attr("tabindex") || 0;
                        e.data("old-tabindex", n), e.attr("tabindex", "-1");
                        var i = this.options.get("dataAdapter");
                        this.dataAdapter = new i(e, this.options);
                        var o = this.render();
                        this._placeContainer(o);
                        var s = this.options.get("selectionAdapter");
                        this.selection = new s(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, o);
                        var r = this.options.get("dropdownAdapter");
                        this.dropdown = new r(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, o);
                        var a = this.options.get("resultsAdapter");
                        this.results = new a(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                        var l = this;
                        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) {
                            l.trigger("selection:update", {
                                data: e
                            })
                        }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2", this)
                    };
                    return n.Extend(u, n.Observable), u.prototype._generateId = function (e) {
                        return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
                    }, u.prototype._placeContainer = function (e) {
                        e.insertAfter(this.$element);
                        var t = this._resolveWidth(this.$element, this.options.get("width"));
                        null != t && e.css("width", t)
                    }, u.prototype._resolveWidth = function (e, t) {
                        var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                        if ("resolve" == t) {
                            var i = this._resolveWidth(e, "style");
                            return null != i ? i : this._resolveWidth(e, "element")
                        }
                        if ("element" == t) {
                            var o = e.outerWidth(!1);
                            return o <= 0 ? "auto" : o + "px"
                        }
                        if ("style" != t) return t;
                        var s = e.attr("style");
                        if ("string" != typeof s) return null;
                        for (var r = s.split(";"), a = 0, l = r.length; a < l; a += 1) {
                            var c = r[a].replace(/\s/g, "").match(n);
                            if (null !== c && 1 <= c.length) return c[1]
                        }
                        return null
                    }, u.prototype._bindAdapters = function () {
                        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                    }, u.prototype._registerDomEvents = function () {
                        var t = this;
                        this.$element.on("change.select2", function () {
                            t.dataAdapter.current(function (e) {
                                t.trigger("selection:update", {
                                    data: e
                                })
                            })
                        }), this.$element.on("focus.select2", function (e) {
                            t.trigger("focus", e)
                        }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                        var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        null != e ? (this._observer = new e(function (e) {
                            o.each(e, t._syncA), o.each(e, t._syncS)
                        }), this._observer.observe(this.$element[0], {
                            attributes: !0,
                            childList: !0,
                            subtree: !1
                        })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
                    }, u.prototype._registerDataEvents = function () {
                        var n = this;
                        this.dataAdapter.on("*", function (e, t) {
                            n.trigger(e, t)
                        })
                    }, u.prototype._registerSelectionEvents = function () {
                        var n = this,
                            i = ["toggle", "focus"];
                        this.selection.on("toggle", function () {
                            n.toggleDropdown()
                        }), this.selection.on("focus", function (e) {
                            n.focus(e)
                        }), this.selection.on("*", function (e, t) {
                            -1 === o.inArray(e, i) && n.trigger(e, t)
                        })
                    }, u.prototype._registerDropdownEvents = function () {
                        var n = this;
                        this.dropdown.on("*", function (e, t) {
                            n.trigger(e, t)
                        })
                    }, u.prototype._registerResultsEvents = function () {
                        var n = this;
                        this.results.on("*", function (e, t) {
                            n.trigger(e, t)
                        })
                    }, u.prototype._registerEvents = function () {
                        var i = this;
                        this.on("open", function () {
                            i.$container.addClass("select2-container--open")
                        }), this.on("close", function () {
                            i.$container.removeClass("select2-container--open")
                        }), this.on("enable", function () {
                            i.$container.removeClass("select2-container--disabled")
                        }), this.on("disable", function () {
                            i.$container.addClass("select2-container--disabled")
                        }), this.on("blur", function () {
                            i.$container.removeClass("select2-container--focus")
                        }), this.on("query", function (t) {
                            i.isOpen() || i.trigger("open", {}), this.dataAdapter.query(t, function (e) {
                                i.trigger("results:all", {
                                    data: e,
                                    query: t
                                })
                            })
                        }), this.on("query:append", function (t) {
                            this.dataAdapter.query(t, function (e) {
                                i.trigger("results:append", {
                                    data: e,
                                    query: t
                                })
                            })
                        }), this.on("open", function () {
                            setTimeout(function () {
                                i.focusOnActiveElement()
                            }, 1)
                        }), o(document).on("keydown", function (e) {
                            var t = e.which;
                            if (i.isOpen()) {
                                t === s.ESC || t === s.UP && e.altKey ? (i.close(), e.preventDefault()) : t === s.ENTER || t === s.TAB ? (i.trigger("results:select", {}), e.preventDefault()) : t === s.SPACE && e.ctrlKey ? (i.trigger("results:toggle", {}), e.preventDefault()) : t === s.UP ? (i.trigger("results:previous", {}), e.preventDefault()) : t === s.DOWN && (i.trigger("results:next", {}), e.preventDefault());
                                var n = i.$dropdown.find(".select2-search__field");
                                n.length || (n = i.$container.find(".select2-search__field")), t === s.DOWN || t === s.UP ? i.focusOnActiveElement() : (n.focus(), setTimeout(function () {
                                    i.focusOnActiveElement()
                                }, 1e3))
                            } else i.hasFocus() && (t !== s.ENTER && t !== s.SPACE && t !== s.DOWN || (i.open(), e.preventDefault()))
                        })
                    }, u.prototype.focusOnActiveElement = function () {
                        this.isOpen() && !n.isTouchscreen() && this.$results.find("li.select2-results__option--highlighted").focus()
                    }, u.prototype._syncAttributes = function () {
                        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                    }, u.prototype._syncSubtree = function (e, t) {
                        var n = !1,
                            i = this;
                        if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                            if (t)
                                if (t.addedNodes && 0 < t.addedNodes.length)
                                    for (var o = 0; o < t.addedNodes.length; o++) {
                                        t.addedNodes[o].selected && (n = !0)
                                    } else t.removedNodes && 0 < t.removedNodes.length && (n = !0);
                                else n = !0;
                            n && this.dataAdapter.current(function (e) {
                                i.trigger("selection:update", {
                                    data: e
                                })
                            })
                        }
                    }, u.prototype.trigger = function (e, t) {
                        var n = u.__super__.trigger,
                            i = {
                                open: "opening",
                                close: "closing",
                                select: "selecting",
                                unselect: "unselecting"
                            };
                        if (t === undefined && (t = {}), e in i) {
                            var o = i[e],
                                s = {
                                    prevented: !1,
                                    name: e,
                                    args: t
                                };
                            if (n.call(this, o, s), s.prevented) return void(t.prevented = !0)
                        }
                        n.call(this, e, t)
                    }, u.prototype.toggleDropdown = function () {
                        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                    }, u.prototype.open = function () {
                        this.isOpen() || this.trigger("query", {})
                    }, u.prototype.close = function () {
                        this.isOpen() && this.trigger("close", {})
                    }, u.prototype.isOpen = function () {
                        return this.$container.hasClass("select2-container--open")
                    }, u.prototype.hasFocus = function () {
                        return this.$container.hasClass("select2-container--focus")
                    }, u.prototype.focus = function (e) {
                        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                    }, u.prototype.enable = function (e) {
                        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
                        var t = !e[0];
                        this.$element.prop("disabled", t)
                    }, u.prototype.data = function () {
                        this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                        var t = [];
                        return this.dataAdapter.current(function (e) {
                            t = e
                        }), t
                    }, u.prototype.val = function (e) {
                        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
                        var t = e[0];
                        o.isArray(t) && (t = o.map(t, function (e) {
                            return e.toString()
                        })), this.$element.val(t).trigger("change")
                    }, u.prototype.destroy = function () {
                        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                    }, u.prototype.render = function () {
                        var e = o('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                        return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), e.data("element", this.$element), e
                    }, u
                }), e.define("select2/compat/utils", ["jquery"], function (r) {
                    return {
                        syncCssClasses: function a(e, t, n) {
                            var i, o, s = [];
                            (i = r.trim(e.attr("class"))) && r((i = "" + i).split(/\s+/)).each(function () {
                                0 === this.indexOf("select2-") && s.push(this)
                            }), (i = r.trim(t.attr("class"))) && r((i = "" + i).split(/\s+/)).each(function () {
                                0 !== this.indexOf("select2-") && null != (o = n(this)) && s.push(o)
                            }), e.attr("class", s.join(" "))
                        }
                    }
                }), e.define("select2/compat/containerCss", ["jquery", "./utils"], function (r, a) {
                    function l(e) {
                        return null
                    }

                    function e() {}
                    return e.prototype.render = function (e) {
                        var t = e.call(this),
                            n = this.options.get("containerCssClass") || "";
                        r.isFunction(n) && (n = n(this.$element));
                        var i = this.options.get("adaptContainerCssClass");
                        if (i = i || l, -1 !== n.indexOf(":all:")) {
                            n = n.replace(":all:", "");
                            var o = i;
                            i = function (e) {
                                var t = o(e);
                                return null != t ? t + " " + e : e
                            }
                        }
                        var s = this.options.get("containerCss") || {};
                        return r.isFunction(s) && (s = s(this.$element)), a.syncCssClasses(t, this.$element, i), t.css(s), t.addClass(n), t
                    }, e
                }), e.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (r, a) {
                    function l(e) {
                        return null
                    }

                    function e() {}
                    return e.prototype.render = function (e) {
                        var t = e.call(this),
                            n = this.options.get("dropdownCssClass") || "";
                        r.isFunction(n) && (n = n(this.$element));
                        var i = this.options.get("adaptDropdownCssClass");
                        if (i = i || l, -1 !== n.indexOf(":all:")) {
                            n = n.replace(":all:", "");
                            var o = i;
                            i = function (e) {
                                var t = o(e);
                                return null != t ? t + " " + e : e
                            }
                        }
                        var s = this.options.get("dropdownCss") || {};
                        return r.isFunction(s) && (s = s(this.$element)), a.syncCssClasses(t, this.$element, i), t.css(s), t.addClass(n), t
                    }, e
                }), e.define("select2/compat/initSelection", ["jquery"], function (i) {
                    function e(e, t, n) {
                        n.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = n.get("initSelection"), this._isInitialized = !1, e.call(this, t, n)
                    }
                    return e.prototype.current = function (e, t) {
                        var n = this;
                        this._isInitialized ? e.call(this, t) : this.initSelection.call(null, this.$element, function (e) {
                            n._isInitialized = !0, i.isArray(e) || (e = [e]), t(e)
                        })
                    }, e
                }), e.define("select2/compat/inputData", ["jquery"], function (r) {
                    function e(e, t, n) {
                        this._currentData = [], this._valueSeparator = n.get("valueSeparator") || ",", "hidden" === t.prop("type") && n.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), e.call(this, t, n)
                    }
                    return e.prototype.current = function (e, t) {
                        function i(e, t) {
                            var n = [];
                            return e.selected || -1 !== r.inArray(e.id, t) ? (e.selected = !0, n.push(e)) : e.selected = !1, e.children && n.push.apply(n, i(e.children, t)), n
                        }
                        for (var n = [], o = 0; o < this._currentData.length; o++) {
                            var s = this._currentData[o];
                            n.push.apply(n, i(s, this.$element.val().split(this._valueSeparator)))
                        }
                        t(n)
                    }, e.prototype.select = function (e, t) {
                        if (this.options.get("multiple")) {
                            var n = this.$element.val();
                            n += this._valueSeparator + t.id, this.$element.val(n), this.$element.trigger("change")
                        } else this.current(function (e) {
                            r.map(e, function (e) {
                                e.selected = !1
                            })
                        }), this.$element.val(t.id), this.$element.trigger("change")
                    }, e.prototype.unselect = function (e, o) {
                        var s = this;
                        o.selected = !1, this.current(function (e) {
                            for (var t = [], n = 0; n < e.length; n++) {
                                var i = e[n];
                                o.id != i.id && t.push(i.id)
                            }
                            s.$element.val(t.join(s._valueSeparator)), s.$element.trigger("change")
                        })
                    }, e.prototype.query = function (e, t, n) {
                        for (var i = [], o = 0; o < this._currentData.length; o++) {
                            var s = this._currentData[o],
                                r = this.matches(t, s);
                            null !== r && i.push(r)
                        }
                        n({
                            results: i
                        })
                    }, e.prototype.addOptions = function (e, t) {
                        var n = r.map(t, function (e) {
                            return r.data(e[0], "data")
                        });
                        this._currentData.push.apply(this._currentData, n)
                    }, e
                }), e.define("select2/compat/matcher", ["jquery"], function (a) {
                    return function e(s) {
                        return function r(e, t) {
                            var n = a.extend(!0, {}, t);
                            if (null == e.term || "" === a.trim(e.term)) return n;
                            if (t.children) {
                                for (var i = t.children.length - 1; 0 <= i; i--) {
                                    var o = t.children[i];
                                    s(e.term, o.text, o) || n.children.splice(i, 1)
                                }
                                if (0 < n.children.length) return n
                            }
                            return s(e.term, t.text, t) ? n : null
                        }
                    }
                }), e.define("select2/compat/query", [], function () {
                    function e(e, t, n) {
                        n.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), e.call(this, t, n)
                    }
                    return e.prototype.query = function (e, t, n) {
                        t.callback = n, this.options.get("query").call(null, t)
                    }, e
                }), e.define("select2/dropdown/attachContainer", [], function () {
                    function e(e, t, n) {
                        e.call(this, t, n)
                    }
                    return e.prototype.position = function (e, t, n) {
                        n.find(".dropdown-wrapper").append(t), t.addClass("select2-dropdown--below"), n.addClass("select2-container--below")
                    }, e
                }), e.define("select2/dropdown/stopPropagation", [], function () {
                    function e() {}
                    return e.prototype.bind = function (e, t, n) {
                        e.call(this, t, n);
                        this.$dropdown.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), function (e) {
                            e.stopPropagation()
                        })
                    }, e
                }), e.define("select2/selection/stopPropagation", [], function () {
                    function e() {}
                    return e.prototype.bind = function (e, t, n) {
                        e.call(this, t, n);
                        this.$selection.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), function (e) {
                            e.stopPropagation()
                        })
                    }, e
                }),
                /*!
                 * jQuery Mousewheel 3.1.13
                 *
                 * Copyright jQuery Foundation and other contributors
                 * Released under the MIT license
                 * http://jquery.org/license
                 */
                n = function (p) {
                    var h, f, e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                        t = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                        g = Array.prototype.slice;
                    if (p.event.fixHooks)
                        for (var n = e.length; n;) p.event.fixHooks[e[--n]] = p.event.mouseHooks;
                    var m = p.event.special.mousewheel = {
                        version: "3.1.12",
                        setup: function () {
                            if (this.addEventListener)
                                for (var e = t.length; e;) this.addEventListener(t[--e], i, !1);
                            else this.onmousewheel = i;
                            p.data(this, "mousewheel-line-height", m.getLineHeight(this)), p.data(this, "mousewheel-page-height", m.getPageHeight(this))
                        },
                        teardown: function () {
                            if (this.removeEventListener)
                                for (var e = t.length; e;) this.removeEventListener(t[--e], i, !1);
                            else this.onmousewheel = null;
                            p.removeData(this, "mousewheel-line-height"), p.removeData(this, "mousewheel-page-height")
                        },
                        getLineHeight: function (e) {
                            var t = p(e),
                                n = t["offsetParent" in p.fn ? "offsetParent" : "parent"]();
                            return n.length || (n = p("body")), parseInt(n.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16
                        },
                        getPageHeight: function (e) {
                            return p(e).height()
                        },
                        settings: {
                            adjustOldDeltas: !0,
                            normalizeOffset: !0
                        }
                    };

                    function i(e) {
                        var t, n = e || window.event,
                            i = g.call(arguments, 1),
                            o = 0,
                            s = 0,
                            r = 0,
                            a = 0,
                            l = 0;
                        if ((e = p.event.fix(n)).type = "mousewheel", "detail" in n && (r = -1 * n.detail), "wheelDelta" in n && (r = n.wheelDelta), "wheelDeltaY" in n && (r = n.wheelDeltaY), "wheelDeltaX" in n && (s = -1 * n.wheelDeltaX), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (s = -1 * r, r = 0), o = 0 === r ? s : r, "deltaY" in n && (o = r = -1 * n.deltaY), "deltaX" in n && (s = n.deltaX, 0 === r && (o = -1 * s)), 0 !== r || 0 !== s) {
                            if (1 === n.deltaMode) {
                                var c = p.data(this, "mousewheel-line-height");
                                o *= c, r *= c, s *= c
                            } else if (2 === n.deltaMode) {
                                var u = p.data(this, "mousewheel-page-height");
                                o *= u, r *= u, s *= u
                            }
                            if (t = Math.max(Math.abs(r), Math.abs(s)), (!f || t < f) && y(n, f = t) && (f /= 40), y(n, t) && (o /= 40, s /= 40, r /= 40), o = Math[1 <= o ? "floor" : "ceil"](o / f), s = Math[1 <= s ? "floor" : "ceil"](s / f), r = Math[1 <= r ? "floor" : "ceil"](r / f), m.settings.normalizeOffset && this.getBoundingClientRect) {
                                var d = this.getBoundingClientRect();
                                a = e.clientX - d.left, l = e.clientY - d.top
                            }
                            return e.deltaX = s, e.deltaY = r, e.deltaFactor = f, e.offsetX = a, e.offsetY = l, e.deltaMode = 0, i.unshift(e, o, s, r), h && clearTimeout(h), h = setTimeout(v, 200), (p.event.dispatch || p.event.handle).apply(this, i)
                        }
                    }

                    function v() {
                        f = null
                    }

                    function y(e, t) {
                        return m.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
                    }
                    p.fn.extend({
                        mousewheel: function (e) {
                            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
                        },
                        unmousewheel: function (e) {
                            return this.unbind("mousewheel", e)
                        }
                    })
                }, "function" == typeof e.define && e.define.amd ? e.define("jquery-mousewheel", ["jquery"], n) : "object" == typeof exports ? module.exports = n : n(i), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (o, e, s, t) {
                    if (null == o.fn.selectWoo) {
                        var r = ["open", "close", "destroy"];
                        o.fn.selectWoo = function (t) {
                            if ("object" == typeof (t = t || {})) return this.each(function () {
                                var e = o.extend(!0, {}, t);
                                new s(o(this), e)
                            }), this;
                            if ("string" != typeof t) throw new Error("Invalid arguments for Select2: " + t);
                            var n, i = Array.prototype.slice.call(arguments, 1);
                            return this.each(function () {
                                var e = o(this).data("select2");
                                null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), n = e[t].apply(e, i)
                            }), -1 < o.inArray(t, r) ? this : n
                        }
                    }
                    return null != o.fn.select2 && null != o.fn.select2.defaults && (o.fn.selectWoo.defaults = o.fn.select2.defaults), null == o.fn.selectWoo.defaults && (o.fn.selectWoo.defaults = t), o.fn.select2 = o.fn.select2 || o.fn.selectWoo, s
                }), {
                    define: e.define,
                    require: e.require
                }
        }(),
        t = e.require("jquery.select2");
    return i.fn.select2.amd = e, i.fn.selectWoo.amd = e, t
});
window.wp = window.wp || {},
    function (l) {
        wp.passwordStrength = {
            meter: function (n, e, t) {
                return l.isArray(e) || (e = [e.toString()]), n != t && t && 0 < t.length ? 5 : void 0 === window.zxcvbn ? -1 : zxcvbn(n, e).score
            },
            userInputBlacklist: function () {
                var n, e, t, r, i = [],
                    o = [],
                    a = ["user_login", "first_name", "last_name", "nickname", "display_name", "email", "url", "description", "weblog_title", "admin_email"];
                for (i.push(document.title), i.push(document.URL), e = a.length, n = 0; n < e; n++) 0 !== (r = l("#" + a[n])).length && (i.push(r[0].defaultValue), i.push(r.val()));
                for (t = i.length, n = 0; n < t; n++) i[n] && (o = o.concat(i[n].replace(/\W/g, " ").split(" ")));
                return o = l.grep(o, function (n, e) {
                    return !("" === n || n.length < 4) && l.inArray(n, o) === e
                })
            }
        }, window.passwordStrength = wp.passwordStrength.meter
    }(jQuery);
! function (d) {
    "use strict";
    var n = {
        init: function () {
            d(document.body).on("keyup change", "form.register #reg_password, form.checkout #account_password, form.edit-account #password_1, form.lost_reset_password #password_1", this.strengthMeter), d("form.checkout #createaccount").change()
        },
        strengthMeter: function () {
            var s, r = d("form.register, form.checkout, form.edit-account, form.lost_reset_password"),
                e = d('button[type="submit"]', r),
                t = d("#reg_password, #account_password, #password_1", r),
                o = t.val(),
                a = !r.is("form.checkout");
            n.includeMeter(r, t), s = n.checkPasswordStrength(r, t), wc_password_strength_meter_params.stop_checkout && (a = !0), 0 < o.length && s < wc_password_strength_meter_params.min_password_strength && -1 !== s && a ? e.attr("disabled", "disabled").addClass("disabled") : e.removeAttr("disabled", "disabled").removeClass("disabled")
        },
        includeMeter: function (s, r) {
            var e = s.find(".woocommerce-password-strength");
            "" === r.val() ? (e.hide(), d(document.body).trigger("wc-password-strength-hide")) : 0 === e.length ? (r.after('<div class="woocommerce-password-strength" aria-live="polite"></div>'), d(document.body).trigger("wc-password-strength-added")) : (e.show(), d(document.body).trigger("wc-password-strength-show"))
        },
        checkPasswordStrength: function (s, r) {
            var e = s.find(".woocommerce-password-strength"),
                t = s.find(".woocommerce-password-hint"),
                o = '<small class="woocommerce-password-hint">' + wc_password_strength_meter_params.i18n_password_hint + "</small>",
                a = wp.passwordStrength.meter(r.val(), wp.passwordStrength.userInputBlacklist()),
                d = "";
            if (e.removeClass("short bad good strong"), t.remove(), e.is(":hidden")) return a;
            switch (a < wc_password_strength_meter_params.min_password_strength && (d = " - " + wc_password_strength_meter_params.i18n_password_error), a) {
                case 0:
                    e.addClass("short").html(pwsL10n["short"] + d), e.after(o);
                    break;
                case 1:
                case 2:
                    e.addClass("bad").html(pwsL10n.bad + d), e.after(o);
                    break;
                case 3:
                    e.addClass("good").html(pwsL10n.good + d);
                    break;
                case 4:
                    e.addClass("strong").html(pwsL10n.strong + d);
                    break;
                case 5:
                    e.addClass("short").html(pwsL10n.mismatch)
            }
            return a
        }
    };
    n.init()
}(jQuery);
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
! function (e) {
    var n = !1;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var o = window.Cookies,
            t = window.Cookies = e();
        t.noConflict = function () {
            return window.Cookies = o, t
        }
    }
}(function () {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o = arguments[e];
            for (var t in o) n[t] = o[t]
        }
        return n
    }

    function n(o) {
        function t(n, r, i) {
            var c;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof (i = e({
                            path: "/"
                        }, t.defaults, i)).expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                    }
                    i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                        c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
                    } catch (m) {}
                    r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var f = "";
                    for (var s in i) i[s] && (f += "; " + s, !0 !== i[s] && (f += "=" + i[s]));
                    return document.cookie = n + "=" + r + f
                }
                n || (c = {});
                for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
                    var l = p[u].split("="),
                        C = l.slice(1).join("=");
                    '"' === C.charAt(0) && (C = C.slice(1, -1));
                    try {
                        var g = l[0].replace(d, decodeURIComponent);
                        if (C = o.read ? o.read(C, g) : o(C, g) || C.replace(d, decodeURIComponent), this.json) try {
                            C = JSON.parse(C)
                        } catch (m) {}
                        if (n === g) {
                            c = C;
                            break
                        }
                        n || (c[g] = C)
                    } catch (m) {}
                }
                return c
            }
        }
        return t.set = t, t.get = function (e) {
            return t.call(t, e)
        }, t.getJSON = function () {
            return t.apply({
                json: !0
            }, [].slice.call(arguments))
        }, t.defaults = {}, t.remove = function (n, o) {
            t(n, "", e(o, {
                expires: -1
            }))
        }, t.withConverter = n, t
    }
    return n(function () {})
});
jQuery(function (i) {
    i(".woocommerce-ordering").on("change", "select.orderby", function () {
        i(this).closest("form").submit()
    }), i("input.qty:not(.product-quantity input.qty)").each(function () {
        var e = parseFloat(i(this).attr("min"));
        0 <= e && parseFloat(i(this).val()) < e && i(this).val(e)
    });
    var o = "store_notice" + (i(".woocommerce-store-notice").data("notice-id") || "");
    "hidden" === Cookies.get(o) ? i(".woocommerce-store-notice").hide() : i(".woocommerce-store-notice").show(), i(".woocommerce-store-notice__dismiss-link").click(function (e) {
        Cookies.set(o, "hidden", {
            path: "/"
        }), i(".woocommerce-store-notice").hide(), e.preventDefault()
    }), i(document.body).on("click", function () {
        i(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden", !0).slideUp(250)
    }), i(".woocommerce-input-wrapper").on("click", function (e) {
        e.stopPropagation()
    }), i(".woocommerce-input-wrapper :input").on("keydown", function (e) {
        var o = i(this).parent().find("span.description");
        if (27 === e.which && o.length && o.is(":visible")) return o.prop("aria-hidden", !0).slideUp(250), e.preventDefault(), !1
    }).on("click focus", function () {
        var e = i(this).parent(),
            o = e.find("span.description");
        e.addClass("currentTarget"), i(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden", !0).slideUp(250), o.length && o.is(":hidden") && o.prop("aria-hidden", !1).slideDown(250), e.removeClass("currentTarget")
    }), i.scroll_to_notices = function (e) {
        e.length && i("html, body").animate({
            scrollTop: e.offset().top - 100
        }, 1e3)
    }
});
jQuery(function (u) {
    if ("undefined" == typeof wc_country_select_params) return !1;
    if (u().selectWoo) {
        function t() {
            u("select.country_select:visible, select.state_select:visible").each(function () {
                var t = u.extend({
                    placeholder: u(this).attr("data-placeholder") || u(this).attr("placeholder") || "",
                    width: "100%"
                }, {
                    language: {
                        errorLoading: function () {
                            return wc_country_select_params.i18n_searching
                        },
                        inputTooLong: function (t) {
                            var e = t.input.length - t.maximum;
                            return 1 == e ? wc_country_select_params.i18n_input_too_long_1 : wc_country_select_params.i18n_input_too_long_n.replace("%qty%", e)
                        },
                        inputTooShort: function (t) {
                            var e = t.minimum - t.input.length;
                            return 1 == e ? wc_country_select_params.i18n_input_too_short_1 : wc_country_select_params.i18n_input_too_short_n.replace("%qty%", e)
                        },
                        loadingMore: function () {
                            return wc_country_select_params.i18n_load_more
                        },
                        maximumSelected: function (t) {
                            return 1 === t.maximum ? wc_country_select_params.i18n_selection_too_long_1 : wc_country_select_params.i18n_selection_too_long_n.replace("%qty%", t.maximum)
                        },
                        noResults: function () {
                            return wc_country_select_params.i18n_no_matches
                        },
                        searching: function () {
                            return wc_country_select_params.i18n_searching
                        }
                    }
                });
                u(this).on("select2:select", function () {
                    u(this).focus()
                }).selectWoo(t)
            })
        }
        t(), u(document.body).bind("country_to_state_changed", function () {
            t()
        })
    }
    var e = wc_country_select_params.countries.replace(/&quot;/g, '"'),
        d = u.parseJSON(e),
        h = ".woocommerce-billing-fields,.woocommerce-shipping-fields,.woocommerce-address-fields,.woocommerce-shipping-calculator";
    u(document.body).on("change refresh", "select.country_to_state, input.country_to_state", function () {
        var t = u(this).closest(h);
        t.length || (t = u(this).closest(".form-row").parent());
        var e, n = u(this).val(),
            o = t.find("#billing_state, #shipping_state, #calc_shipping_state"),
            c = o.closest("p.form-row"),
            a = o.attr("name"),
            r = o.attr("id"),
            i = o.attr("data-input-classes"),
            s = o.val(),
            _ = o.attr("placeholder") || o.attr("data-placeholder") || "";
        if (d[n])
            if (u.isEmptyObject(d[n])) e = u('<input type="hidden" />').prop("id", r).prop("name", a).prop("placeholder", _).attr("data-input-classes", i).addClass("hidden " + i), c.hide().find(".select2-container").remove(), o.replaceWith(e), u(document.body).trigger("country_to_state_changed", [n, t]);
            else {
                var l = d[n],
                    p = u('<option value=""></option>').text(wc_country_select_params.i18n_select_state_text);
                _ || (_ = wc_country_select_params.i18n_select_state_text), c.show(), o.is("input") && (e = u("<select></select>").prop("id", r).prop("name", a).data("placeholder", _).attr("data-input-classes", i).addClass("state_select " + i), o.replaceWith(e), o = t.find("#billing_state, #shipping_state, #calc_shipping_state")), o.empty().append(p), u.each(l, function (t) {
                    var e = u("<option></option>").prop("value", t).text(l[t]);
                    o.append(e)
                }), o.val(s).change(), u(document.body).trigger("country_to_state_changed", [n, t])
            }
        else o.is('select, input[type="hidden"]') && (e = u('<input type="text" />').prop("id", r).prop("name", a).prop("placeholder", _).attr("data-input-classes", i).addClass("input-text  " + i), c.show().find(".select2-container").remove(), o.replaceWith(e), u(document.body).trigger("country_to_state_changed", [n, t]));
        u(document.body).trigger("country_to_state_changing", [n, t])
    }), u(document.body).on("wc_address_i18n_ready", function () {
        u(h).each(function () {
            var t = u(this).find("#billing_country, #shipping_country, #calc_shipping_country");
            0 !== t.length && 0 !== t.val().length && t.trigger("refresh")
        })
    })
});
jQuery(function (p) {
    if ("undefined" == typeof wc_address_i18n_params) return !1;
    var e = wc_address_i18n_params.locale.replace(/&quot;/g, '"'),
        s = p.parseJSON(e);

    function c(e, a) {
        a ? (e.find("label .optional").remove(), e.addClass("validate-required"), 0 === e.find("label .required").length && e.find("label").append('&nbsp;<abbr class="required" title="' + wc_address_i18n_params.i18n_required_text + '">*</abbr>')) : (e.find("label .required").remove(), e.removeClass("validate-required woocommerce-invalid woocommerce-invalid-required-field"), 0 === e.find("label .optional").length && e.find("label").append('&nbsp;<span class="optional">(' + wc_address_i18n_params.i18n_optional_text + ")</span>"))
    }
    p(document.body).bind("country_to_state_changing", function (e, a, i) {
        var t, r = i;
        t = "undefined" != typeof s[a] ? s[a] : s["default"];
        var d = r.find("#billing_postcode_field, #shipping_postcode_field"),
            l = r.find("#billing_city_field, #shipping_city_field"),
            n = r.find("#billing_state_field, #shipping_state_field");
        d.attr("data-o_class") || (d.attr("data-o_class", d.attr("class")), l.attr("data-o_class", l.attr("class")), n.attr("data-o_class", n.attr("class")));
        var o = p.parseJSON(wc_address_i18n_params.locale_fields);
        p.each(o, function (e, a) {
            var i = r.find(a),
                d = p.extend(!0, {}, s["default"][e], t[e]);
            "undefined" != typeof d.label && i.find("label").html(d.label), "undefined" != typeof d.placeholder && (i.find(":input").attr("placeholder", d.placeholder), i.find(":input").attr("data-placeholder", d.placeholder), i.find(".select2-selection__placeholder").text(d.placeholder)), "undefined" != typeof d.placeholder || "undefined" == typeof d.label || i.find("label").length || (i.find(":input").attr("placeholder", d.label), i.find(":input").attr("data-placeholder", d.label), i.find(".select2-selection__placeholder").text(d.label)), "undefined" != typeof d.required ? c(i, d.required) : c(i, !1), "undefined" != typeof d.priority && i.data("priority", d.priority), "state" !== e && ("undefined" != typeof d.hidden && !0 === d.hidden ? i.hide().find(":input").val("") : i.show())
        }), p(".woocommerce-billing-fields__field-wrapper,.woocommerce-shipping-fields__field-wrapper,.woocommerce-address-fields__field-wrapper,.woocommerce-additional-fields__field-wrapper .woocommerce-account-fields").each(function (e, a) {
            var i = p(a).find(".form-row"),
                d = i.first().parent(),
                t = 0;
            i.each(function () {
                p(this).data("priority") || p(this).data("priority", t + 1), t = p(this).data("priority")
            }), i.sort(function (e, a) {
                var i = parseInt(p(e).data("priority"), 10),
                    d = parseInt(p(a).data("priority"), 10);
                return d < i ? 1 : i < d ? -1 : 0
            }), i.detach().appendTo(d)
        })
    }).trigger("wc_address_i18n_ready")
});
jQuery(function (g) {
    if ("undefined" == typeof wc_checkout_params) return !1;
    var v = {
            updateTimer: !(g.blockUI.defaults.overlayCSS.cursor = "default"),
            dirtyInput: !1,
            selectedPaymentMethod: !1,
            xhr: !1,
            $order_review: g("#order_review"),
            $checkout_form: g("form.checkout"),
            init: function () {
                g(document.body).bind("update_checkout", this.update_checkout), g(document.body).bind("init_checkout", this.init_checkout), this.$checkout_form.on("click", 'input[name="payment_method"]', this.payment_method_selected), g(document.body).hasClass("woocommerce-order-pay") && (this.$order_review.on("click", 'input[name="payment_method"]', this.payment_method_selected), this.$order_review.on("submit", this.submitOrder), this.$order_review.attr("novalidate", "novalidate")), this.$checkout_form.attr("novalidate", "novalidate"), this.$checkout_form.on("submit", this.submit), this.$checkout_form.on("input validate change", ".input-text, select, input:checkbox", this.validate_field), this.$checkout_form.on("update", this.trigger_update_checkout), this.$checkout_form.on("change", 'select.shipping_method, input[name^="shipping_method"], #ship-to-different-address input, .update_totals_on_change select, .update_totals_on_change input[type="radio"], .update_totals_on_change input[type="checkbox"]', this.trigger_update_checkout), this.$checkout_form.on("change", ".address-field select", this.input_changed), this.$checkout_form.on("change", ".address-field input.input-text, .update_totals_on_change input.input-text", this.maybe_input_changed), this.$checkout_form.on("keydown", ".address-field input.input-text, .update_totals_on_change input.input-text", this.queue_update_checkout), this.$checkout_form.on("change", "#ship-to-different-address input", this.ship_to_different_address), this.$checkout_form.find("#ship-to-different-address input").change(), this.init_payment_methods(), "1" === wc_checkout_params.is_checkout && g(document.body).trigger("init_checkout"), "yes" === wc_checkout_params.option_guest_checkout && g("input#createaccount").change(this.toggle_create_account).change()
            },
            init_payment_methods: function () {
                var e = g(".woocommerce-checkout").find('input[name="payment_method"]');
                1 === e.length && e.eq(0).hide(), v.selectedPaymentMethod && g("#" + v.selectedPaymentMethod).prop("checked", !0), 0 === e.filter(":checked").length && e.eq(0).prop("checked", !0);
                var t = e.filter(":checked").eq(0).prop("id");
                1 < e.length && g('div.payment_box:not(".' + t + '")').filter(":visible").slideUp(0), e.filter(":checked").eq(0).trigger("click")
            },
            get_payment_method: function () {
                return v.$checkout_form.find('input[name="payment_method"]:checked').val()
            },
            payment_method_selected: function (e) {
                if (e.stopPropagation(), 1 < g(".payment_methods input.input-radio").length) {
                    var t = g("div.payment_box." + g(this).attr("ID")),
                        o = g(this).is(":checked");
                    o && !t.is(":visible") && (g("div.payment_box").filter(":visible").slideUp(230), o && t.slideDown(230))
                } else g("div.payment_box").show();
                g(this).data("order_button_text") ? g("#place_order").text(g(this).data("order_button_text")) : g("#place_order").text(g("#place_order").data("value"));
                var c = g('.woocommerce-checkout input[name="payment_method"]:checked').attr("id");
                c !== v.selectedPaymentMethod && g(document.body).trigger("payment_method_selected"), v.selectedPaymentMethod = c
            },
            toggle_create_account: function () {
                g("div.create-account").hide(), g(this).is(":checked") && (g("#account_password").val("").change(), g("div.create-account").slideDown())
            },
            init_checkout: function () {
                g(document.body).trigger("update_checkout")
            },
            maybe_input_changed: function (e) {
                v.dirtyInput && v.input_changed(e)
            },
            input_changed: function (e) {
                v.dirtyInput = e.target, v.maybe_update_checkout()
            },
            queue_update_checkout: function (e) {
                if (9 === (e.keyCode || e.which || 0)) return !0;
                v.dirtyInput = this, v.reset_update_checkout_timer(), v.updateTimer = setTimeout(v.maybe_update_checkout, "1000")
            },
            trigger_update_checkout: function () {
                v.reset_update_checkout_timer(), v.dirtyInput = !1, g(document.body).trigger("update_checkout")
            },
            maybe_update_checkout: function () {
                var e = !0;
                if (g(v.dirtyInput).length) {
                    var t = g(v.dirtyInput).closest("div").find(".address-field.validate-required");
                    t.length && t.each(function () {
                        "" === g(this).find("input.input-text").val() && (e = !1)
                    })
                }
                e && v.trigger_update_checkout()
            },
            ship_to_different_address: function () {
                g("div.shipping_address").hide(), g(this).is(":checked") && g("div.shipping_address").slideDown()
            },
            reset_update_checkout_timer: function () {
                clearTimeout(v.updateTimer)
            },
            is_valid_json: function (e) {
                try {
                    var t = g.parseJSON(e);
                    return t && "object" == typeof t
                } catch (o) {
                    return !1
                }
            },
            validate_field: function (e) {
                var t = g(this),
                    o = t.closest(".form-row"),
                    c = !0,
                    i = o.is(".validate-required"),
                    r = o.is(".validate-email"),
                    n = e.type;
                if ("input" === n && o.removeClass("woocommerce-invalid woocommerce-invalid-required-field woocommerce-invalid-email woocommerce-validated"), "validate" === n || "change" === n) {
                    if (i && ("checkbox" !== t.attr("type") || t.is(":checked") ? "" === t.val() && (o.removeClass("woocommerce-validated").addClass("woocommerce-invalid woocommerce-invalid-required-field"), c = !1) : (o.removeClass("woocommerce-validated").addClass("woocommerce-invalid woocommerce-invalid-required-field"), c = !1)), r)
                        if (t.val()) new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i).test(t.val()) || (o.removeClass("woocommerce-validated").addClass("woocommerce-invalid woocommerce-invalid-email"), c = !1);
                    c && o.removeClass("woocommerce-invalid woocommerce-invalid-required-field woocommerce-invalid-email").addClass("woocommerce-validated")
                }
            },
            update_checkout: function (e, t) {
                v.reset_update_checkout_timer(), v.updateTimer = setTimeout(v.update_checkout_action, "5", t)
            },
            update_checkout_action: function (e) {
                if (v.xhr && v.xhr.abort(), 0 !== g("form.checkout").length) {
                    e = void 0 !== e ? e : {
                        update_shipping_method: !0
                    };
                    var t = g("#billing_country").val(),
                        o = g("#billing_state").val(),
                        c = g(":input#billing_postcode").val(),
                        i = g("#billing_city").val(),
                        r = g(":input#billing_address_1").val(),
                        n = g(":input#billing_address_2").val(),
                        a = t,
                        u = o,
                        d = c,
                        s = i,
                        m = r,
                        l = n,
                        p = g(v.$checkout_form).find(".address-field.validate-required:visible"),
                        h = !0;
                    p.length && p.each(function () {
                        "" === g(this).find(":input").val() && (h = !1)
                    }), g("#ship-to-different-address").find("input").is(":checked") && (a = g("#shipping_country").val(), u = g("#shipping_state").val(), d = g(":input#shipping_postcode").val(), s = g("#shipping_city").val(), m = g(":input#shipping_address_1").val(), l = g(":input#shipping_address_2").val());
                    var _ = {
                        security: wc_checkout_params.update_order_review_nonce,
                        payment_method: v.get_payment_method(),
                        country: t,
                        state: o,
                        postcode: c,
                        city: i,
                        address: r,
                        address_2: n,
                        s_country: a,
                        s_state: u,
                        s_postcode: d,
                        s_city: s,
                        s_address: m,
                        s_address_2: l,
                        has_full_address: h,
                        post_data: g("form.checkout").serialize()
                    };
                    if (!1 !== e.update_shipping_method) {
                        var f = {};
                        g('select.shipping_method, input[name^="shipping_method"][type="radio"]:checked, input[name^="shipping_method"][type="hidden"]').each(function () {
                            f[g(this).data("index")] = g(this).val()
                        }), _.shipping_method = f
                    }
                    g(".woocommerce-checkout-payment, .woocommerce-checkout-review-order-table").block({
                        message: null,
                        overlayCSS: {
                            background: "#fff",
                            opacity: .6
                        }
                    }), v.xhr = g.ajax({
                        type: "POST",
                        url: wc_checkout_params.wc_ajax_url.toString().replace("%%endpoint%%", "update_order_review"),
                        data: _,
                        success: function (e) {
                            if (e && !0 === e.reload) window.location.reload();
                            else {
                                g(".woocommerce-NoticeGroup-updateOrderReview").remove();
                                var t = g("#terms").prop("checked"),
                                    o = {};
                                if (g(".payment_box :input").each(function () {
                                        var e = g(this).attr("id");
                                        e && (-1 !== g.inArray(g(this).attr("type"), ["checkbox", "radio"]) ? o[e] = g(this).prop("checked") : o[e] = g(this).val())
                                    }), e && e.fragments && g.each(e.fragments, function (e, t) {
                                        g(e).replaceWith(t), g(e).unblock()
                                    }), t && g("#terms").prop("checked", !0), g.isEmptyObject(o) || g(".payment_box :input").each(function () {
                                        var e = g(this).attr("id");
                                        e && (-1 !== g.inArray(g(this).attr("type"), ["checkbox", "radio"]) ? g(this).prop("checked", o[e]).change() : -1 !== g.inArray(g(this).attr("type"), ["select"]) ? g(this).val(o[e]).change() : null !== g(this).val() && 0 === g(this).val().length && g(this).val(o[e]).change())
                                    }), e && "failure" === e.result) {
                                    var c = g("form.checkout");
                                    g(".woocommerce-error, .woocommerce-message").remove(), e.messages ? c.prepend('<div class="woocommerce-NoticeGroup woocommerce-NoticeGroup-updateOrderReview">' + e.messages + "</div>") : c.prepend(e), c.find(".input-text, select, input:checkbox").trigger("validate").blur(), v.scroll_to_notices()
                                }
                                v.init_payment_methods(), g(document.body).trigger("updated_checkout", [e])
                            }
                        }
                    })
                }
            },
            blockOnSubmit: function (e) {
                1 !== e.data()["blockUI.isBlocked"] && e.block({
                    message: null,
                    overlayCSS: {
                        background: "#fff",
                        opacity: .6
                    }
                })
            },
            submitOrder: function () {
                v.blockOnSubmit(g(this))
            },
            submit: function () {
                v.reset_update_checkout_timer();
                var e = g(this);
                return e.is(".processing") || !1 !== e.triggerHandler("checkout_place_order") && !1 !== e.triggerHandler("checkout_place_order_" + v.get_payment_method()) && (e.addClass("processing"), v.blockOnSubmit(e), g.ajaxSetup({
                    dataFilter: function (e, t) {
                        if ("json" !== t) return e;
                        if (v.is_valid_json(e)) return e;
                        var o = e.match(/{"result.*}/);
                        return null === o ? console.log("Unable to fix malformed JSON") : v.is_valid_json(o[0]) ? (console.log("Fixed malformed JSON. Original:"), console.log(e), e = o[0]) : console.log("Unable to fix malformed JSON"), e
                    }
                }), g.ajax({
                    type: "POST",
                    url: wc_checkout_params.checkout_url,
                    data: e.serialize(),
                    dataType: "json",
                    success: function (e) {
                        try {
                            if ("success" !== e.result) throw "failure" === e.result ? "Result failure" : "Invalid response"; - 1 === e.redirect.indexOf("https://") || -1 === e.redirect.indexOf("http://") ? window.location = e.redirect : window.location = decodeURI(e.redirect)
                        } catch (t) {
                            if (!0 === e.reload) return void window.location.reload();
                            !0 === e.refresh && g(document.body).trigger("update_checkout"), e.messages ? v.submit_error(e.messages) : v.submit_error('<div class="woocommerce-error">' + wc_checkout_params.i18n_checkout_error + "</div>")
                        }
                    },
                    error: function (e, t, o) {
                        v.submit_error('<div class="woocommerce-error">' + o + "</div>")
                    }
                })), !1
            },
            submit_error: function (e) {
                g(".woocommerce-NoticeGroup-checkout, .woocommerce-error, .woocommerce-message").remove(), v.$checkout_form.prepend('<div class="woocommerce-NoticeGroup woocommerce-NoticeGroup-checkout">' + e + "</div>"), v.$checkout_form.removeClass("processing").unblock(), v.$checkout_form.find(".input-text, select, input:checkbox").trigger("validate").blur(), v.scroll_to_notices(), g(document.body).trigger("checkout_error")
            },
            scroll_to_notices: function () {
                var e = g(".woocommerce-NoticeGroup-updateOrderReview, .woocommerce-NoticeGroup-checkout");
                e.length || (e = g(".form.checkout")), g.scroll_to_notices(e)
            }
        },
        e = {
            init: function () {
                g(document.body).on("click", "a.showcoupon", this.show_coupon_form), g(document.body).on("click", ".woocommerce-remove-coupon", this.remove_coupon), g("form.checkout_coupon").hide().submit(this.submit)
            },
            show_coupon_form: function () {
                return g(".checkout_coupon").slideToggle(400, function () {
                    g(".checkout_coupon").find(":input:eq(0)").focus()
                }), !1
            },
            submit: function () {
                var t = g(this);
                if (t.is(".processing")) return !1;
                t.addClass("processing").block({
                    message: null,
                    overlayCSS: {
                        background: "#fff",
                        opacity: .6
                    }
                });
                var o = {
                    security: wc_checkout_params.apply_coupon_nonce,
                    coupon_code: t.find('input[name="coupon_code"]').val()
                };
                return g.ajax({
                    type: "POST",
                    url: wc_checkout_params.wc_ajax_url.toString().replace("%%endpoint%%", "apply_coupon"),
                    data: o,
                    success: function (e) {
                        g(".woocommerce-error, .woocommerce-message").remove(), t.removeClass("processing").unblock(), e && (t.before(e), t.slideUp(), g(document.body).trigger("applied_coupon_in_checkout", [o.coupon_code]), g(document.body).trigger("update_checkout", {
                            update_shipping_method: !1
                        }))
                    },
                    dataType: "html"
                }), !1
            },
            remove_coupon: function (e) {
                e.preventDefault();
                var t = g(this).parents(".woocommerce-checkout-review-order"),
                    o = g(this).data("coupon");
                t.addClass("processing").block({
                    message: null,
                    overlayCSS: {
                        background: "#fff",
                        opacity: .6
                    }
                });
                var c = {
                    security: wc_checkout_params.remove_coupon_nonce,
                    coupon: o
                };
                g.ajax({
                    type: "POST",
                    url: wc_checkout_params.wc_ajax_url.toString().replace("%%endpoint%%", "remove_coupon"),
                    data: c,
                    success: function (e) {
                        g(".woocommerce-error, .woocommerce-message").remove(), t.removeClass("processing").unblock(), e && (g("form.woocommerce-checkout").before(e), g(document.body).trigger("update_checkout", {
                            update_shipping_method: !1
                        }), g("form.checkout_coupon").find('input[name="coupon_code"]').val(""))
                    },
                    error: function (e) {
                        wc_checkout_params.debug_mode && console.log(e.responseText)
                    },
                    dataType: "html"
                })
            }
        },
        t = {
            init: function () {
                g(document.body).on("click", "a.showlogin", this.show_login_form)
            },
            show_login_form: function () {
                return g("form.login, form.woocommerce-form--login").slideToggle(), !1
            }
        },
        o = {
            init: function () {
                g(document.body).on("click", "a.woocommerce-terms-and-conditions-link", this.toggle_terms)
            },
            toggle_terms: function () {
                if (g(".woocommerce-terms-and-conditions").length) return g(".woocommerce-terms-and-conditions").slideToggle(function () {
                    var e = g(".woocommerce-terms-and-conditions-link");
                    g(".woocommerce-terms-and-conditions").is(":visible") ? (e.addClass("woocommerce-terms-and-conditions-link--open"), e.removeClass("woocommerce-terms-and-conditions-link--closed")) : (e.removeClass("woocommerce-terms-and-conditions-link--open"), e.addClass("woocommerce-terms-and-conditions-link--closed"))
                }), !1
            }
        };
    v.init(), e.init(), t.init(), o.init()
});
jQuery(function (r) {
    if ("undefined" == typeof wc_cart_fragments_params) return !1;
    var t = !0,
        o = wc_cart_fragments_params.cart_hash_key;
    try {
        t = "sessionStorage" in window && null !== window.sessionStorage, window.sessionStorage.setItem("wc", "test"), window.sessionStorage.removeItem("wc"), window.localStorage.setItem("wc", "test"), window.localStorage.removeItem("wc")
    } catch (f) {
        t = !1
    }

    function a() {
        t && sessionStorage.setItem("wc_cart_created", (new Date).getTime())
    }

    function s(e) {
        t && (localStorage.setItem(o, e), sessionStorage.setItem(o, e))
    }
    var e = {
        url: wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%", "get_refreshed_fragments"),
        type: "POST",
        data: {
            time: (new Date).getTime()
        },
        timeout: wc_cart_fragments_params.request_timeout,
        success: function (e) {
            e && e.fragments && (r.each(e.fragments, function (e, t) {
                r(e).replaceWith(t)
            }), t && (sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(e.fragments)), s(e.cart_hash), e.cart_hash && a()), r(document.body).trigger("wc_fragments_refreshed"))
        },
        error: function () {
            r(document.body).trigger("wc_fragments_ajax_error")
        }
    };

    function n() {
        r.ajax(e)
    }
    if (t) {
        var i = null;
        r(document.body).on("wc_fragment_refresh updated_wc_div", function () {
            n()
        }), r(document.body).on("added_to_cart removed_from_cart", function (e, t, r) {
            var n = sessionStorage.getItem(o);
            null !== n && n !== undefined && "" !== n || a(), sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(t)), s(r)
        }), r(document.body).on("wc_fragments_refreshed", function () {
            clearTimeout(i), i = setTimeout(n, 864e5)
        }), r(window).on("storage onstorage", function (e) {
            o === e.originalEvent.key && localStorage.getItem(o) !== sessionStorage.getItem(o) && n()
        }), r(window).on("pageshow", function (e) {
            e.originalEvent.persisted && (r(".widget_shopping_cart_content").empty(), r(document.body).trigger("wc_fragment_refresh"))
        });
        try {
            var c = r.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),
                _ = sessionStorage.getItem(o),
                g = Cookies.get("woocommerce_cart_hash"),
                m = sessionStorage.getItem("wc_cart_created");
            if (null !== _ && _ !== undefined && "" !== _ || (_ = ""), null !== g && g !== undefined && "" !== g || (g = ""), _ && (null === m || m === undefined || "" === m)) throw "No cart_created";
            if (m) {
                var d = 1 * m + 864e5,
                    w = (new Date).getTime();
                if (d < w) throw "Fragment expired";
                i = setTimeout(n, d - w)
            }
            if (!c || !c["div.widget_shopping_cart_content"] || _ !== g) throw "No fragment";
            r.each(c, function (e, t) {
                r(e).replaceWith(t)
            }), r(document.body).trigger("wc_fragments_loaded")
        } catch (f) {
            n()
        }
    } else n();
    0 < Cookies.get("woocommerce_items_in_cart") ? r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show() : r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(), r(document.body).on("adding_to_cart", function () {
        r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()
    }), "undefined" != typeof wp && wp.customize && wp.customize.selectiveRefresh && wp.customize.widgetsPreview && wp.customize.widgetsPreview.WidgetPartial && wp.customize.selectiveRefresh.bind("partial-content-rendered", function () {
        n()
    })
});
(function () {
    var container, button, menu, links, subMenus, i, len;
    container = document.getElementById('site-navigation');
    if (!container) {
        return;
    }
    button = container.getElementsByTagName('button')[0];
    if ('undefined' === typeof button) {
        return;
    }
    menu = container.getElementsByTagName('ul')[0];
    if ('undefined' === typeof menu) {
        button.style.display = 'none';
        return;
    }
    menu.setAttribute('aria-expanded', 'false');
    if (-1 === menu.className.indexOf('nav-menu')) {
        menu.className += ' nav-menu';
    }
    button.onclick = function () {
        if (-1 !== container.className.indexOf('toggled')) {
            container.className = container.className.replace(' toggled', '');
            button.setAttribute('aria-expanded', 'false');
            menu.setAttribute('aria-expanded', 'false');
        } else {
            container.className += ' toggled';
            button.setAttribute('aria-expanded', 'true');
            menu.setAttribute('aria-expanded', 'true');
        }
    };
    links = menu.getElementsByTagName('a');
    subMenus = menu.getElementsByTagName('ul');
    for (i = 0, len = subMenus.length; i < len; i++) {
        subMenus[i].parentNode.setAttribute('aria-haspopup', 'true');
    }
    for (i = 0, len = links.length; i < len; i++) {
        links[i].addEventListener('focus', toggleFocus, true);
        links[i].addEventListener('blur', toggleFocus, true);
    }

    function toggleFocus() {
        var self = this;
        while (-1 === self.className.indexOf('nav-menu')) {
            if ('li' === self.tagName.toLowerCase()) {
                if (-1 !== self.className.indexOf('focus')) {
                    self.className = self.className.replace(' focus', '');
                } else {
                    self.className += ' focus';
                }
            }
            self = self.parentElement;
        }
    }
    (function (container) {
        var touchStartFn, i, parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');
        if ('ontouchstart' in window) {
            touchStartFn = function (e) {
                var menuItem = this.parentNode,
                    i;
                if (!menuItem.classList.contains('focus')) {
                    e.preventDefault();
                    for (i = 0; i < menuItem.parentNode.children.length; ++i) {
                        if (menuItem === menuItem.parentNode.children[i]) {
                            continue;
                        }
                        menuItem.parentNode.children[i].classList.remove('focus');
                    }
                    menuItem.classList.add('focus');
                } else {
                    menuItem.classList.remove('focus');
                }
            };
            for (i = 0; i < parentLink.length; ++i) {
                parentLink[i].addEventListener('touchstart', touchStartFn, false);
            }
        }
    }(container));
})();
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=771a3f4a371165558f06)
 * Config saved to config.json and https://gist.github.com/771a3f4a371165558f06
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                n = i.data("bs.alert");
            n || i.data("bs.alert", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        o = function (e) {
            t(e).on("click", i, this.close)
        };
    o.VERSION = "3.3.6", o.TRANSITION_DURATION = 150, o.prototype.close = function (e) {
        function i() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var n = t(this),
            s = n.attr("data-target");
        s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t(s);
        e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
    };
    var n = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function () {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.button"),
                s = "object" == typeof e && e;
            n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e)
        })
    }
    var i = function (e, o) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
    };
    i.VERSION = "3.3.6", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function (e) {
        var i = "disabled",
            o = this.$element,
            n = o.is("input") ? "val" : "html",
            s = o.data();
        e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function () {
            o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function () {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var o = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
        return t.fn.button = o, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
        var o = t(i.target);
        o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
                a = "string" == typeof e ? e : s.slide;
            n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle()
        })
    }
    var i = function (e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e),
            o = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (o && !this.options.wrap) return e;
        var n = "prev" == t ? -1 : 1,
            s = (i + n) % this.$items.length;
        return this.$items.eq(s)
    }, i.prototype.to = function (t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function (e, o) {
        var n = this.$element.find(".item.active"),
            s = o || this.getItemForDirection(e, n),
            a = this.interval,
            r = "next" == e ? "left" : "right",
            l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var h = s[0],
            d = t.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(s)]);
                p && p.addClass("active")
            }
            var c = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function () {
                s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this
        }
    };
    var o = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = o, this
    };
    var n = function (i) {
        var o, n = t(this),
            s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var a = t.extend({}, s.data(), n.data()),
                r = n.attr("data-slide-to");
            r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(n).remove(), t(s).each(function () {
            var o = t(this),
                n = e(o),
                s = {
                    relatedTarget: this
                };
            n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
        }))
    }

    function o(e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i)
        })
    }
    var n = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        a = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.3.6", a.prototype.toggle = function (o) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var s = e(n),
                a = s.hasClass("open");
            if (i(), !a) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var r = {
                    relatedTarget: this
                };
                if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented()) return;
                n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
            }
            return !1
        }
    }, a.prototype.keydown = function (i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var o = t(this);
            if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
                var n = e(o),
                    a = n.hasClass("open");
                if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && n.find(s).trigger("focus"), o.trigger("click");
                var r = " li:not(.disabled):visible a",
                    l = n.find(".dropdown-menu" + r);
                if (l.length) {
                    var h = l.index(i.target);
                    38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, a.prototype.toggle).on("keydown.bs.dropdown.data-api", s, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery), + function (t) {
    "use strict";

    function e(e, o) {
        return this.each(function () {
            var n = t(this),
                s = n.data("bs.modal"),
                a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o)
        })
    }
    var i = function (e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function (e) {
        var o = this,
            n = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            o.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var n = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            n ? o.$dialog.one("bsTransitionEnd", function () {
                o.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function (e) {
        var o = this,
            n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && n;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function () {
                o.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, i.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var o = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
        return t.fn.modal = o, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
        var o = t(this),
            n = o.attr("href"),
            s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            a = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(n) && n
            }, s.data(), o.data());
        o.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
                o.is(":visible") && o.trigger("focus")
            })
        }), e.call(s, a, this)
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.tooltip"),
                s = "object" == typeof e && e;
            (n || !/destroy|hide/.test(e)) && (n || o.data("bs.tooltip", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }
    var i = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, i.prototype.init = function (e, i, o) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var a = n[s];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function () {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function (t, o) {
            i[t] != o && (e[t] = o)
        }), e
    }, i.prototype.enter = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function () {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, i.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !o) return;
            var n = this,
                s = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                h = l.test(r);
            h && (r = r.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(),
                p = s[0].offsetWidth,
                c = s[0].offsetHeight;
            if (h) {
                var f = r,
                    u = this.getPosition(this.$viewport);
                r = "bottom" == r && d.bottom + c > u.bottom ? "top" : "top" == r && d.top - c < u.top ? "bottom" : "right" == r && d.right + p > u.width ? "left" : "left" == r && d.left - p < u.left ? "right" : r, s.removeClass(f).addClass(r)
            }
            var g = this.getCalculatedOffset(r, d, p, c);
            this.applyPlacement(g, r);
            var v = function () {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v()
        }
    }, i.prototype.applyPlacement = function (e, i) {
        var o = this.tip(),
            n = o[0].offsetWidth,
            s = o[0].offsetHeight,
            a = parseInt(o.css("margin-top"), 10),
            r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(o[0], t.extend({
            using: function (t) {
                o.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth,
            h = o[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var p = /top|bottom/.test(i),
            c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
            f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][f], p)
    }, i.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function (e) {
        function o() {
            "in" != n.hoverState && s.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
        }
        var n = this,
            s = t(this.$tip),
            a = t.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function () {
        return this.getTitle()
    }, i.prototype.getPosition = function (e) {
        e = e || this.$element;
        var i = e[0],
            o = "BODY" == i.tagName,
            n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        var s = o ? {
                top: 0,
                left: 0
            } : e.offset(),
            a = {
                scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            r = o ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, n, a, r, s)
    }, i.prototype.getCalculatedOffset = function (t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - s - a.scroll,
                l = e.top + s - a.scroll + o;
            r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
        } else {
            var h = e.left - s,
                d = e.left + s + i;
            h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d)
        }
        return n
    }, i.prototype.getTitle = function () {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function () {
        this.enabled = !0
    }, i.prototype.disable = function () {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function (e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var o = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = o, this
    }
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.popover"),
                s = "object" == typeof e && e;
            (n || !/destroy|hide/.test(e)) && (n || o.data("bs.popover", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }
    var i = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.6", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var o = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
        return t.fn.popover = o, this
    }
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.tab");
            n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
        })
    }
    var i = function (e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            o = e.data("target");
        if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a"),
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                a = t.Event("show.bs.tab", {
                    relatedTarget: n[0]
                });
            if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var r = t(o);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function () {
                    n.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function (e, o, n) {
        function s() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }
        var a = o.find("> .active"),
            r = n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in")
    };
    var o = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
        return t.fn.tab = o, this
    };
    var n = function (i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.affix"),
                s = "object" == typeof e && e;
            n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]()
        })
    }
    var i = function (e, o) {
        this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.6", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function (t, e, i, o) {
        var n = this.$target.scrollTop(),
            s = this.$element.offset(),
            a = this.$target.height();
        if (null != i && "top" == this.affixed) return i > n ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? n + this.unpin <= s.top ? !1 : "bottom" : t - o >= n + a ? !1 : "bottom";
        var r = null == this.affixed,
            l = r ? n : s.top,
            h = r ? a : e;
        return null != i && i >= n ? "top" : null != o && l + h >= t - o ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                o = this.options.offset,
                n = o.top,
                s = o.bottom,
                a = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
            var r = this.getState(a, e, n, s);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : ""),
                    h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: a - e - s
            })
        }
    };
    var o = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
        return t.fn.affix = o, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var i = t(this),
                o = i.data();
            o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(o)
    }

    function i(e) {
        return this.each(function () {
            var i = t(this),
                n = i.data("bs.collapse"),
                s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
            !n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]()
        })
    }
    var o = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    o.VERSION = "3.3.6", o.TRANSITION_DURATION = 350, o.DEFAULTS = {
        toggle: !0
    }, o.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, o.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return r.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l]);
                }
            }
        }
    }, o.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this)
            }
        }
    }, o.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, o.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, o) {
            var n = t(o);
            this.addAriaAndCollapsedClass(e(n), n)
        }, this)).end()
    }, o.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var n = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (o) {
        var n = t(this);
        n.attr("data-target") || o.preventDefault();
        var s = e(n),
            a = s.data("bs.collapse"),
            r = a ? "toggle" : n.data();
        i.call(s, r)
    })
}(jQuery), + function (t) {
    "use strict";

    function e(i, o) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function () {
            var o = t(this),
                n = o.data("bs.scrollspy"),
                s = "object" == typeof i && i;
            n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]()
        })
    }
    e.VERSION = "3.3.6", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this,
            i = "offset",
            o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this),
                n = e.data("target") || e.attr("href"),
                s = /^#./.test(n) && t(n);
            return s && s.length && s.is(":visible") && [
                [s[i]().top + o, n]
            ] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(),
            n = this.offsets,
            s = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= o) return a != (t = s[s.length - 1]) && this.activate(t);
        if (a && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = o, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function (e) {
        var i = !1,
            o = this;
        t(this).one("bsTransitionEnd", function () {
            i = !0
        });
        var n = function () {
            i || t(o).trigger(t.support.transition.end)
        };
        return setTimeout(n, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery);
/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */
! function (a) {
    function b() {}

    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function (b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }

        function e(b, c) {
            a.fn[b] = function (e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h],
                            k = a.data(j, b);
                        if (k)
                            if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l) return l
                            } else f("no such method '" + e + "' for " + b + " instance");
                        else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }
        if (a) {
            var f = "undefined" == typeof console ? b : function (a) {
                console.error(a)
            };
            return a.bridget = function (a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }
    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window),
function (a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }
    var c = document.documentElement,
        d = function () {};
    c.addEventListener ? d = function (a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function (a, c, d) {
        a[c + d] = d.handleEvent ? function () {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function () {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function () {};
    c.removeEventListener ? e = function (a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function (a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window),
function () {
    "use strict";

    function a() {}

    function b(a, b) {
        for (var c = a.length; c--;)
            if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function () {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype,
        e = this,
        f = e.EventEmitter;
    d.getListeners = function (a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function (a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function (a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function (a, c) {
        var d, e = this.getListenersAsObject(a),
            f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
            listener: c,
            once: !1
        });
        return this
    }, d.on = c("addListener"), d.addOnceListener = function (a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }, d.once = c("addOnceListener"), d.defineEvent = function (a) {
        return this.getListeners(a), this
    }, d.defineEvents = function (a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function (a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function (a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function (a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function (a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener,
            g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--;) f.call(this, b, c[d]);
        else
            for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function (a) {
        var b, c = typeof a,
            d = this._getEvents();
        if ("string" === c) delete d[a];
        else if (a instanceof RegExp)
            for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function (a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function (a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function () {
        return this._events || (this._events = {})
    }, a.noConflict = function () {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this),
    function (a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b
            }
        }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
            return b
        }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
    }(window),
    function (a, b) {
        function c(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b
        }

        function d() {}

        function e() {
            for (var a = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, b = 0, c = h.length; c > b; b++) {
                var d = h[b];
                a[d] = 0
            }
            return a
        }

        function f(b) {
            function d() {
                if (!m) {
                    m = !0;
                    var d = a.getComputedStyle;
                    if (j = function () {
                            var a = d ? function (a) {
                                return d(a, null)
                            } : function (a) {
                                return a.currentStyle
                            };
                            return function (b) {
                                var c = a(b);
                                return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
                            }
                        }(), k = b("boxSizing")) {
                        var e = document.createElement("div");
                        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
                        var f = document.body || document.documentElement;
                        f.appendChild(e);
                        var h = j(e);
                        l = 200 === c(h.width), f.removeChild(e)
                    }
                }
            }

            function f(a) {
                if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var b = j(a);
                    if ("none" === b.display) return e();
                    var f = {};
                    f.width = a.offsetWidth, f.height = a.offsetHeight;
                    for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
                        var o = h[m],
                            p = b[o];
                        p = i(a, p);
                        var q = parseFloat(p);
                        f[o] = isNaN(q) ? 0 : q
                    }
                    var r = f.paddingLeft + f.paddingRight,
                        s = f.paddingTop + f.paddingBottom,
                        t = f.marginLeft + f.marginRight,
                        u = f.marginTop + f.marginBottom,
                        v = f.borderLeftWidth + f.borderRightWidth,
                        w = f.borderTopWidth + f.borderBottomWidth,
                        x = g && l,
                        y = c(b.width);
                    y !== !1 && (f.width = y + (x ? 0 : r + v));
                    var z = c(b.height);
                    return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
                }
            }

            function i(b, c) {
                if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
                var d = b.style,
                    e = d.left,
                    f = b.runtimeStyle,
                    g = f && f.left;
                return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
            }
            var j, k, l, m = !1;
            return f
        }
        var g = "undefined" == typeof console ? d : function (a) {
                console.error(a)
            },
            h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty)
    }(window),
    function (a) {
        function b(a) {
            "function" == typeof a && (b.isReady ? a() : g.push(a))
        }

        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== f.readyState;
            b.isReady || c || d()
        }

        function d() {
            b.isReady = !0;
            for (var a = 0, c = g.length; c > a; a++) {
                var d = g[a];
                d()
            }
        }

        function e(e) {
            return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
        }
        var f = a.document,
            g = [];
        b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
    }(window),
    function (a) {
        "use strict";

        function b(a, b) {
            return a[g](b)
        }

        function c(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a)
            }
        }

        function d(a, b) {
            c(a);
            for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
                if (d[e] === a) return !0;
            return !1
        }

        function e(a, d) {
            return c(a), b(a, d)
        }
        var f, g = function () {
            if (a.matches) return "matches";
            if (a.matchesSelector) return "matchesSelector";
            for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
                var e = b[c],
                    f = e + "MatchesSelector";
                if (a[f]) return f
            }
        }();
        if (g) {
            var h = document.createElement("div"),
                i = b(h, "div");
            f = i ? b : e
        } else f = d;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
            return f
        }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
    }(Element.prototype),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
    }(window, function (a, b, c) {
        var d = {};
        d.extend = function (a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }, d.modulo = function (a, b) {
            return (a % b + b) % b
        };
        var e = Object.prototype.toString;
        d.isArray = function (a) {
            return "[object Array]" == e.call(a)
        }, d.makeArray = function (a) {
            var b = [];
            if (d.isArray(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
            else b.push(a);
            return b
        }, d.indexOf = Array.prototype.indexOf ? function (a, b) {
            return a.indexOf(b)
        } : function (a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b) return c;
            return -1
        }, d.removeFrom = function (a, b) {
            var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1)
        }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (a) {
            return a instanceof HTMLElement
        } : function (a) {
            return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
        }, d.setText = function () {
            function a(a, c) {
                b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
            }
            var b;
            return a
        }(), d.getParent = function (a, b) {
            for (; a != document.body;)
                if (a = a.parentNode, c(a, b)) return a
        }, d.getQueryElement = function (a) {
            return "string" == typeof a ? document.querySelector(a) : a
        }, d.handleEvent = function (a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, d.filterFindElements = function (a, b) {
            a = d.makeArray(a);
            for (var e = [], f = 0, g = a.length; g > f; f++) {
                var h = a[f];
                if (d.isElement(h))
                    if (b) {
                        c(h, b) && e.push(h);
                        for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
                    } else e.push(h)
            }
            return e
        }, d.debounceMethod = function (a, b, c) {
            var d = a.prototype[b],
                e = b + "Timeout";
            a.prototype[b] = function () {
                var a = this[e];
                a && clearTimeout(a);
                var b = arguments,
                    f = this;
                this[e] = setTimeout(function () {
                    d.apply(f, b), delete f[e]
                }, c || 100)
            }
        }, d.toDashed = function (a) {
            return a.replace(/(.)([A-Z])/g, function (a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        };
        var f = a.console;
        return d.htmlInit = function (c, e) {
            b(function () {
                for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                    var k, l = g[i],
                        m = l.getAttribute(h);
                    try {
                        k = m && JSON.parse(m)
                    } catch (n) {
                        f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                        continue
                    }
                    var o = new c(l, k),
                        p = a.jQuery;
                    p && p.data(l, e, o)
                }
            })
        }, d
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (c, d, e, f) {
            return b(a, c, d, e, f)
        }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
    }(window, function (a, b, c, d, e) {
        "use strict";

        function f(a) {
            for (var b in a) return !1;
            return b = null, !0
        }

        function g(a, b) {
            a && (this.element = a, this.layout = b, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function h(a) {
            return a.replace(/([A-Z])/g, function (a) {
                return "-" + a.toLowerCase()
            })
        }
        var i = a.getComputedStyle,
            j = i ? function (a) {
                return i(a, null)
            } : function (a) {
                return a.currentStyle
            },
            k = d("transition"),
            l = d("transform"),
            m = k && l,
            n = !!d("perspective"),
            o = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            } [k],
            p = ["transform", "transition", "transitionDuration", "transitionProperty"],
            q = function () {
                for (var a = {}, b = 0, c = p.length; c > b; b++) {
                    var e = p[b],
                        f = d(e);
                    f && f !== e && (a[e] = f)
                }
                return a
            }();
        e.extend(g.prototype, b.prototype), g.prototype._create = function () {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, g.prototype.handleEvent = function (a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.getSize = function () {
            this.size = c(this.element)
        }, g.prototype.css = function (a) {
            var b = this.element.style;
            for (var c in a) {
                var d = q[c] || c;
                b[d] = a[c]
            }
        }, g.prototype.getPosition = function () {
            var a = j(this.element),
                b = this.layout.options,
                c = b.isOriginLeft,
                d = b.isOriginTop,
                e = a[c ? "left" : "right"],
                f = a[d ? "top" : "bottom"],
                g = this.layout.size,
                h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
                i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
            h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
        }, g.prototype.layoutPosition = function () {
            var a = this.layout.size,
                b = this.layout.options,
                c = {},
                d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
                e = b.isOriginLeft ? "left" : "right",
                f = b.isOriginLeft ? "right" : "left",
                g = this.position.x + a[d];
            c[e] = this.getXValue(g), c[f] = "";
            var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
                i = b.isOriginTop ? "top" : "bottom",
                j = b.isOriginTop ? "bottom" : "top",
                k = this.position.y + a[h];
            c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
        }, g.prototype.getXValue = function (a) {
            var b = this.layout.options;
            return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
        }, g.prototype.getYValue = function (a) {
            var b = this.layout.options;
            return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
        }, g.prototype._transitionTo = function (a, b) {
            this.getPosition();
            var c = this.position.x,
                d = this.position.y,
                e = parseInt(a, 10),
                f = parseInt(b, 10),
                g = e === this.position.x && f === this.position.y;
            if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
            var h = a - c,
                i = b - d,
                j = {};
            j.transform = this.getTranslate(h, i), this.transition({
                to: j,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, g.prototype.getTranslate = function (a, b) {
            var c = this.layout.options;
            return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
        }, g.prototype.goTo = function (a, b) {
            this.setPosition(a, b), this.layoutPosition()
        }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function (a, b) {
            this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
        }, g.prototype._nonTransition = function (a) {
            this.css(a.to), a.isCleaning && this._removeStyles(a.to);
            for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
        }, g.prototype._transition = function (a) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
            var b = this._transn;
            for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
            for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
            if (a.from) {
                this.css(a.from);
                var d = this.element.offsetHeight;
                d = null
            }
            this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
        };
        var r = "opacity," + h(q.transform || "transform");
        g.prototype.enableTransition = function () {
            this.isTransitioning || (this.css({
                transitionProperty: r,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(o, this, !1))
        }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function (a) {
            this.ontransitionend(a)
        }, g.prototype.onotransitionend = function (a) {
            this.ontransitionend(a)
        };
        var s = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        g.prototype.ontransitionend = function (a) {
            if (a.target === this.element) {
                var b = this._transn,
                    c = s[a.propertyName] || a.propertyName;
                if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
                    var d = b.onEnd[c];
                    d.call(this), delete b.onEnd[c]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, g.prototype.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
        }, g.prototype._removeStyles = function (a) {
            var b = {};
            for (var c in a) b[c] = "";
            this.css(b)
        };
        var t = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return g.prototype.removeTransitionStyles = function () {
            this.css(t)
        }, g.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, g.prototype.remove = function () {
            if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var a = this;
            this.once("transitionEnd", function () {
                a.removeElem()
            }), this.hide()
        }, g.prototype.reveal = function () {
            delete this.isHidden, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("visibleStyle");
            b[c] = this.onRevealTransitionEnd, this.transition({
                from: a.hiddenStyle,
                to: a.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onRevealTransitionEnd = function () {
            this.isHidden || this.emitEvent("reveal")
        }, g.prototype.getHideRevealTransitionEndProperty = function (a) {
            var b = this.layout.options[a];
            if (b.opacity) return "opacity";
            for (var c in b) return c
        }, g.prototype.hide = function () {
            this.isHidden = !0, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("hiddenStyle");
            b[c] = this.onHideTransitionEnd, this.transition({
                from: a.visibleStyle,
                to: a.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onHideTransitionEnd = function () {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, g.prototype.destroy = function () {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, g
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (c, d, e, f, g) {
            return b(a, c, d, e, f, g)
        }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
    }(window, function (a, b, c, d, e, f) {
        "use strict";

        function g(a, b) {
            var c = e.getQueryElement(a);
            if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
            this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
            var d = ++k;
            this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var h = a.console,
            i = a.jQuery,
            j = function () {},
            k = 0,
            l = {};
        return g.namespace = "outlayer", g.Item = f, g.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, e.extend(g.prototype, c.prototype), g.prototype.option = function (a) {
            e.extend(this.options, a)
        }, g.prototype._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, g.prototype.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, g.prototype._itemize = function (a) {
            for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                var g = b[e],
                    h = new c(g, this);
                d.push(h)
            }
            return d
        }, g.prototype._filterFindItemElements = function (a) {
            return e.filterFindElements(a, this.options.itemSelector)
        }, g.prototype.getItemElements = function () {
            for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
            return a
        }, g.prototype.layout = function () {
            this._resetLayout(), this._manageStamps();
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, a), this._isLayoutInited = !0
        }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function () {
            this.getSize()
        }, g.prototype.getSize = function () {
            this.size = d(this.element)
        }, g.prototype._getMeasurement = function (a, b) {
            var c, f = this.options[a];
            f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
        }, g.prototype.layoutItems = function (a, b) {
            a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
        }, g.prototype._getItemsForLayout = function (a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.isIgnored || b.push(e)
            }
            return b
        }, g.prototype._layoutItems = function (a, b) {
            if (this._emitCompleteOnItems("layout", a), a && a.length) {
                for (var c = [], d = 0, e = a.length; e > d; d++) {
                    var f = a[d],
                        g = this._getItemLayoutPosition(f);
                    g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
                }
                this._processLayoutQueue(c)
            }
        }, g.prototype._getItemLayoutPosition = function () {
            return {
                x: 0,
                y: 0
            }
        }, g.prototype._processLayoutQueue = function (a) {
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this._positionItem(d.item, d.x, d.y, d.isInstant)
            }
        }, g.prototype._positionItem = function (a, b, c, d) {
            d ? a.goTo(b, c) : a.moveTo(b, c)
        }, g.prototype._postLayout = function () {
            this.resizeContainer()
        }, g.prototype.resizeContainer = function () {
            if (this.options.isResizingContainer) {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }
        }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function (a, b) {
            if (void 0 !== a) {
                var c = this.size;
                c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
            }
        }, g.prototype._emitCompleteOnItems = function (a, b) {
            function c() {
                e.dispatchEvent(a + "Complete", null, [b])
            }

            function d() {
                g++, g === f && c()
            }
            var e = this,
                f = b.length;
            if (!b || !f) return void c();
            for (var g = 0, h = 0, i = b.length; i > h; h++) {
                var j = b[h];
                j.once(a, d)
            }
        }, g.prototype.dispatchEvent = function (a, b, c) {
            var d = b ? [b].concat(c) : c;
            if (this.emitEvent(a, d), i)
                if (this.$element = this.$element || i(this.element), b) {
                    var e = i.Event(b);
                    e.type = a, this.$element.trigger(e, c)
                } else this.$element.trigger(a, c)
        }, g.prototype.ignore = function (a) {
            var b = this.getItem(a);
            b && (b.isIgnored = !0)
        }, g.prototype.unignore = function (a) {
            var b = this.getItem(a);
            b && delete b.isIgnored
        }, g.prototype.stamp = function (a) {
            if (a = this._find(a)) {
                this.stamps = this.stamps.concat(a);
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this.ignore(d)
                }
            }
        }, g.prototype.unstamp = function (a) {
            if (a = this._find(a))
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    e.removeFrom(this.stamps, d), this.unignore(d)
                }
        }, g.prototype._find = function (a) {
            return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
        }, g.prototype._manageStamps = function () {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var a = 0, b = this.stamps.length; b > a; a++) {
                    var c = this.stamps[a];
                    this._manageStamp(c)
                }
            }
        }, g.prototype._getBoundingRect = function () {
            var a = this.element.getBoundingClientRect(),
                b = this.size;
            this._boundingRect = {
                left: a.left + b.paddingLeft + b.borderLeftWidth,
                top: a.top + b.paddingTop + b.borderTopWidth,
                right: a.right - (b.paddingRight + b.borderRightWidth),
                bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
            }
        }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function (a) {
            var b = a.getBoundingClientRect(),
                c = this._boundingRect,
                e = d(a),
                f = {
                    left: b.left - c.left - e.marginLeft,
                    top: b.top - c.top - e.marginTop,
                    right: c.right - b.right - e.marginRight,
                    bottom: c.bottom - b.bottom - e.marginBottom
                };
            return f
        }, g.prototype.handleEvent = function (a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.bindResize = function () {
            this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
        }, g.prototype.unbindResize = function () {
            this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
        }, g.prototype.onresize = function () {
            function a() {
                b.resize(), delete b.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var b = this;
            this.resizeTimeout = setTimeout(a, 100)
        }, g.prototype.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, g.prototype.needsResizeLayout = function () {
            var a = d(this.element),
                b = this.size && a;
            return b && a.innerWidth !== this.size.innerWidth
        }, g.prototype.addItems = function (a) {
            var b = this._itemize(a);
            return b.length && (this.items = this.items.concat(b)), b
        }, g.prototype.appended = function (a) {
            var b = this.addItems(a);
            b.length && (this.layoutItems(b, !0), this.reveal(b))
        }, g.prototype.prepended = function (a) {
            var b = this._itemize(a);
            if (b.length) {
                var c = this.items.slice(0);
                this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
            }
        }, g.prototype.reveal = function (a) {
            this._emitCompleteOnItems("reveal", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.reveal()
            }
        }, g.prototype.hide = function (a) {
            this._emitCompleteOnItems("hide", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.hide()
            }
        }, g.prototype.revealItemElements = function (a) {
            var b = this.getItems(a);
            this.reveal(b)
        }, g.prototype.hideItemElements = function (a) {
            var b = this.getItems(a);
            this.hide(b)
        }, g.prototype.getItem = function (a) {
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                if (d.element === a) return d
            }
        }, g.prototype.getItems = function (a) {
            a = e.makeArray(a);
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var f = a[c],
                    g = this.getItem(f);
                g && b.push(g)
            }
            return b
        }, g.prototype.remove = function (a) {
            var b = this.getItems(a);
            if (this._emitCompleteOnItems("remove", b), b && b.length)
                for (var c = 0, d = b.length; d > c; c++) {
                    var f = b[c];
                    f.remove(), e.removeFrom(this.items, f)
                }
        }, g.prototype.destroy = function () {
            var a = this.element.style;
            a.height = "", a.position = "", a.width = "";
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                d.destroy()
            }
            this.unbindResize();
            var e = this.element.outlayerGUID;
            delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
        }, g.data = function (a) {
            a = e.getQueryElement(a);
            var b = a && a.outlayerGUID;
            return b && l[b]
        }, g.create = function (a, b) {
            function c() {
                g.apply(this, arguments)
            }
            return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function () {
                f.apply(this, arguments)
            }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
        }, g.Item = f, g
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
    }(window, function (a) {
        "use strict";

        function b() {
            a.Item.apply(this, arguments)
        }
        b.prototype = new a.Item, b.prototype._create = function () {
            this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
        }, b.prototype.updateSortData = function () {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var a = this.layout.options.getSortData,
                    b = this.layout._sorters;
                for (var c in a) {
                    var d = b[c];
                    this.sortData[c] = d(this.element, this)
                }
            }
        };
        var c = b.prototype.destroy;
        return b.prototype.destroy = function () {
            c.apply(this, arguments), this.css({
                display: ""
            })
        }, b
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
    }(window, function (a, b) {
        "use strict";

        function c(a) {
            this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
        }
        return function () {
            function a(a) {
                return function () {
                    return b.prototype[a].apply(this.isotope, arguments)
                }
            }
            for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
                var g = d[e];
                c.prototype[g] = a(g)
            }
        }(), c.prototype.needsVerticalResizeLayout = function () {
            var b = a(this.isotope.element),
                c = this.isotope.size && b;
            return c && b.innerHeight != this.isotope.size.innerHeight
        }, c.prototype._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments)
        }, c.prototype.getColumnWidth = function () {
            this.getSegmentSize("column", "Width")
        }, c.prototype.getRowHeight = function () {
            this.getSegmentSize("row", "Height")
        }, c.prototype.getSegmentSize = function (a, b) {
            var c = a + b,
                d = "outer" + b;
            if (this._getMeasurement(c, d), !this[c]) {
                var e = this.getFirstItemSize();
                this[c] = e && e[d] || this.isotope.size["inner" + b]
            }
        }, c.prototype.getFirstItemSize = function () {
            var b = this.isotope.filteredItems[0];
            return b && b.element && a(b.element)
        }, c.prototype.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments)
        }, c.prototype.getSize = function () {
            this.isotope.getSize(), this.size = this.isotope.size
        }, c.modes = {}, c.create = function (a, b) {
            function d() {
                c.apply(this, arguments)
            }
            return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
        }, c
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
    }(window, function (a, b, c) {
        var d = a.create("masonry");
        return d.prototype._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var a = this.cols;
            for (this.colYs = []; a--;) this.colYs.push(0);
            this.maxY = 0
        }, d.prototype.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var a = this.items[0],
                    c = a && a.element;
                this.columnWidth = c && b(c).outerWidth || this.containerWidth
            }
            var d = this.columnWidth += this.gutter,
                e = this.containerWidth + this.gutter,
                f = e / d,
                g = d - e % d,
                h = g && 1 > g ? "round" : "floor";
            f = Math[h](f), this.cols = Math.max(f, 1)
        }, d.prototype.getContainerWidth = function () {
            var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                c = b(a);
            this.containerWidth = c && c.innerWidth
        }, d.prototype._getItemLayoutPosition = function (a) {
            a.getSize();
            var b = a.size.outerWidth % this.columnWidth,
                d = b && 1 > b ? "round" : "ceil",
                e = Math[d](a.size.outerWidth / this.columnWidth);
            e = Math.min(e, this.cols);
            for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
                    x: this.columnWidth * h,
                    y: g
                }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
            return i
        }, d.prototype._getColGroup = function (a) {
            if (2 > a) return this.colYs;
            for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                var e = this.colYs.slice(d, d + a);
                b[d] = Math.max.apply(Math, e)
            }
            return b
        }, d.prototype._manageStamp = function (a) {
            var c = b(a),
                d = this._getElementOffset(a),
                e = this.options.isOriginLeft ? d.left : d.right,
                f = e + c.outerWidth,
                g = Math.floor(e / this.columnWidth);
            g = Math.max(0, g);
            var h = Math.floor(f / this.columnWidth);
            h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
            for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
        }, d.prototype._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var a = {
                height: this.maxY
            };
            return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
        }, d.prototype._getContainerFitWidth = function () {
            for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
            return (this.cols - a) * this.columnWidth - this.gutter
        }, d.prototype.needsResizeLayout = function () {
            var a = this.containerWidth;
            return this.getContainerWidth(), a !== this.containerWidth
        }, d
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
    }(window, function (a, b) {
        "use strict";

        function c(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }
        var d = a.create("masonry"),
            e = d.prototype._getElementOffset,
            f = d.prototype.layout,
            g = d.prototype._getMeasurement;
        c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
        var h = d.prototype.measureColumns;
        d.prototype.measureColumns = function () {
            this.items = this.isotope.filteredItems, h.call(this)
        };
        var i = d.prototype._manageStamp;
        return d.prototype._manageStamp = function () {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
        }, d
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
    }(window, function (a) {
        "use strict";
        var b = a.create("fitRows");
        return b.prototype._resetLayout = function () {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, b.prototype._getItemLayoutPosition = function (a) {
            a.getSize();
            var b = a.size.outerWidth + this.gutter,
                c = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
            var d = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
        }, b.prototype._getContainerSize = function () {
            return {
                height: this.maxY
            }
        }, b
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
    }(window, function (a) {
        "use strict";
        var b = a.create("vertical", {
            horizontalAlignment: 0
        });
        return b.prototype._resetLayout = function () {
            this.y = 0
        }, b.prototype._getItemLayoutPosition = function (a) {
            a.getSize();
            var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
                c = this.y;
            return this.y += a.size.outerHeight, {
                x: b,
                y: c
            }
        }, b.prototype._getContainerSize = function () {
            return {
                height: this.y
            }
        }, b
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (c, d, e, f, g, h) {
            return b(a, c, d, e, f, g, h)
        }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
    }(window, function (a, b, c, d, e, f, g) {
        function h(a, b) {
            return function (c, d) {
                for (var e = 0, f = a.length; f > e; e++) {
                    var g = a[e],
                        h = c.sortData[g],
                        i = d.sortData[g];
                    if (h > i || i > h) {
                        var j = void 0 !== b[g] ? b[g] : b,
                            k = j ? 1 : -1;
                        return (h > i ? 1 : -1) * k
                    }
                }
                return 0
            }
        }
        var i = a.jQuery,
            j = String.prototype.trim ? function (a) {
                return a.trim()
            } : function (a) {
                return a.replace(/^\s+|\s+$/g, "")
            },
            k = document.documentElement,
            l = k.textContent ? function (a) {
                return a.textContent
            } : function (a) {
                return a.innerText
            },
            m = b.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        m.Item = f, m.LayoutMode = g, m.prototype._create = function () {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var a in g.modes) this._initLayoutMode(a)
        }, m.prototype.reloadItems = function () {
            this.itemGUID = 0, b.prototype.reloadItems.call(this)
        }, m.prototype._itemize = function () {
            for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.id = this.itemGUID++
            }
            return this._updateItemsSortData(a), a
        }, m.prototype._initLayoutMode = function (a) {
            var b = g.modes[a],
                c = this.options[a] || {};
            this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
        }, m.prototype.layout = function () {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, m.prototype._layout = function () {
            var a = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
        }, m.prototype.arrange = function (a) {
            function b() {
                d.reveal(c.needReveal), d.hide(c.needHide)
            }
            this.option(a), this._getIsInstant();
            var c = this._filter(this.items);
            this.filteredItems = c.matches;
            var d = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout()
        }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function () {
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = a, a
        }, m.prototype._bindArrangeComplete = function () {
            function a() {
                b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
            }
            var b, c, d, e = this;
            this.once("layoutComplete", function () {
                b = !0, a()
            }), this.once("hideComplete", function () {
                c = !0, a()
            }), this.once("revealComplete", function () {
                d = !0, a()
            })
        }, m.prototype._filter = function (a) {
            var b = this.options.filter;
            b = b || "*";
            for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
                var i = a[g];
                if (!i.isIgnored) {
                    var j = f(i);
                    j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
                }
            }
            return {
                matches: c,
                needReveal: d,
                needHide: e
            }
        }, m.prototype._getFilterTest = function (a) {
            return i && this.options.isJQueryFiltering ? function (b) {
                return i(b.element).is(a)
            } : "function" == typeof a ? function (b) {
                return a(b.element)
            } : function (b) {
                return d(b.element, a)
            }
        }, m.prototype.updateSortData = function (a) {
            var b;
            a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
        }, m.prototype._getSorters = function () {
            var a = this.options.getSortData;
            for (var b in a) {
                var c = a[b];
                this._sorters[b] = n(c)
            }
        }, m.prototype._updateItemsSortData = function (a) {
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.updateSortData()
            }
        };
        var n = function () {
            function a(a) {
                if ("string" != typeof a) return a;
                var c = j(a).split(" "),
                    d = c[0],
                    e = d.match(/^\[(.+)\]$/),
                    f = e && e[1],
                    g = b(f, d),
                    h = m.sortDataParsers[c[1]];
                return a = h ? function (a) {
                    return a && h(g(a))
                } : function (a) {
                    return a && g(a)
                }
            }

            function b(a, b) {
                var c;
                return c = a ? function (b) {
                    return b.getAttribute(a)
                } : function (a) {
                    var c = a.querySelector(b);
                    return c && l(c)
                }
            }
            return a
        }();
        m.sortDataParsers = {
            parseInt: function (a) {
                return parseInt(a, 10)
            },
            parseFloat: function (a) {
                return parseFloat(a)
            }
        }, m.prototype._sort = function () {
            var a = this.options.sortBy;
            if (a) {
                var b = [].concat.apply(a, this.sortHistory),
                    c = h(b, this.options.sortAscending);
                this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
            }
        }, m.prototype._mode = function () {
            var a = this.options.layoutMode,
                b = this.modes[a];
            if (!b) throw new Error("No layout mode: " + a);
            return b.options = this.options[a], b
        }, m.prototype._resetLayout = function () {
            b.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, m.prototype._getItemLayoutPosition = function (a) {
            return this._mode()._getItemLayoutPosition(a)
        }, m.prototype._manageStamp = function (a) {
            this._mode()._manageStamp(a)
        }, m.prototype._getContainerSize = function () {
            return this._mode()._getContainerSize()
        }, m.prototype.needsResizeLayout = function () {
            return this._mode().needsResizeLayout()
        }, m.prototype.appended = function (a) {
            var b = this.addItems(a);
            if (b.length) {
                var c = this._filterRevealAdded(b);
                this.filteredItems = this.filteredItems.concat(c)
            }
        }, m.prototype.prepended = function (a) {
            var b = this._itemize(a);
            if (b.length) {
                this._resetLayout(), this._manageStamps();
                var c = this._filterRevealAdded(b);
                this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
            }
        }, m.prototype._filterRevealAdded = function (a) {
            var b = this._filter(a);
            return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
        }, m.prototype.insert = function (a) {
            var b = this.addItems(a);
            if (b.length) {
                var c, d, e = b.length;
                for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
                var f = this._filter(b).matches;
                for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
                for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
                this.reveal(f)
            }
        };
        var o = m.prototype.remove;
        return m.prototype.remove = function (a) {
            a = e.makeArray(a);
            var b = this.getItems(a);
            o.call(this, a);
            var c = b && b.length;
            if (c)
                for (var d = 0; c > d; d++) {
                    var f = b[d];
                    e.removeFrom(this.filteredItems, f)
                }
        }, m.prototype.shuffle = function () {
            for (var a = 0, b = this.items.length; b > a; a++) {
                var c = this.items[a];
                c.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, m.prototype._noTransition = function (a) {
            var b = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var c = a.call(this);
            return this.options.transitionDuration = b, c
        }, m.prototype.getFilteredItemElements = function () {
            for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
            return a
        }, m
    });
/*!
 * imagesLoaded PACKAGED v3.2.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function () {
    "use strict";

    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function () {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        r = this,
        s = r.EventEmitter;
    i.getListeners = function (e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function (e) {
        var t, n = [];
        for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function (e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function (e, n) {
        var i, r = this.getListenersAsObject(e),
            s = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(s ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function (e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function (e) {
        return this.getListeners(e), this
    }, i.defineEvents = function (e) {
        for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function (e, n) {
        var i, r, s = this.getListenersAsObject(e);
        for (r in s) s.hasOwnProperty(r) && (i = t(s[r], n), -1 !== i && s[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function (e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function (e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function (e, t, n) {
        var i, r, s = e ? this.removeListener : this.addListener,
            o = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) s.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? s.call(this, i, r) : o.call(this, i, r));
        return this
    }, i.removeEvent = function (e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) {
        var n, i, r, s, o = this.getListenersAsObject(e);
        for (r in o)
            if (o.hasOwnProperty(r))
                for (i = o[r].length; i--;) n = o[r][i], n.once === !0 && this.removeListener(e, n.listener), s = n.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function (e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function () {
        return this._events || (this._events = {})
    }, e.noConflict = function () {
        return r.EventEmitter = s, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function (e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function () {};
        n.addEventListener ? i = function (e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function (e, n, i) {
            e[n + i] = i.handleEvent ? function () {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function () {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function () {};
        n.removeEventListener ? r = function (e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function (e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var s = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", s) : e.eventie = s
    }(this),
    function (e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
            return t(e, n, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(window, function (e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            return "[object Array]" == f.call(e)
        }

        function s(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0; n < e.length; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function o(e, t, n) {
            if (!(this instanceof o)) return new o(e, t, n);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = s(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), u && (this.jqDeferred = new u.Deferred);
            var r = this;
            setTimeout(function () {
                r.check()
            })
        }

        function h(e) {
            this.img = e
        }

        function a(e, t) {
            this.url = e, this.element = t, this.img = new Image
        }
        var u = e.jQuery,
            c = e.console,
            f = Object.prototype.toString;
        o.prototype = new t, o.prototype.options = {}, o.prototype.getImages = function () {
            this.images = [];
            for (var e = 0; e < this.elements.length; e++) {
                var t = this.elements[e];
                this.addElementImages(t)
            }
        }, o.prototype.addElementImages = function (e) {
            "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
            var t = e.nodeType;
            if (t && d[t]) {
                for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
                    var r = n[i];
                    this.addImage(r)
                }
                if ("string" == typeof this.options.background) {
                    var s = e.querySelectorAll(this.options.background);
                    for (i = 0; i < s.length; i++) {
                        var o = s[i];
                        this.addElementBackgroundImages(o)
                    }
                }
            }
        };
        var d = {
            1: !0,
            9: !0,
            11: !0
        };
        o.prototype.addElementBackgroundImages = function (e) {
            for (var t = m(e), n = /url\(['"]*([^'"\)]+)['"]*\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
                var r = i && i[1];
                r && this.addBackground(r, e), i = n.exec(t.backgroundImage)
            }
        };
        var m = e.getComputedStyle || function (e) {
            return e.currentStyle
        };
        return o.prototype.addImage = function (e) {
            var t = new h(e);
            this.images.push(t)
        }, o.prototype.addBackground = function (e, t) {
            var n = new a(e, t);
            this.images.push(n)
        }, o.prototype.check = function () {
            function e(e, n, i) {
                setTimeout(function () {
                    t.progress(e, n, i)
                })
            }
            var t = this;
            if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
            for (var n = 0; n < this.images.length; n++) {
                var i = this.images[n];
                i.once("progress", e), i.check()
            }
        }, o.prototype.progress = function (e, t, n) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emit("progress", this, e, t), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && c && c.log("progress: " + n, e, t)
        }, o.prototype.complete = function () {
            var e = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emit(e, this), this.emit("always", this), this.jqDeferred) {
                var t = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[t](this)
            }
        }, h.prototype = new t, h.prototype.check = function () {
            var e = this.getIsImageComplete();
            return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, n.bind(this.proxyImage, "load", this), n.bind(this.proxyImage, "error", this), n.bind(this.img, "load", this), n.bind(this.img, "error", this), void(this.proxyImage.src = this.img.src))
        }, h.prototype.getIsImageComplete = function () {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, h.prototype.confirm = function (e, t) {
            this.isLoaded = e, this.emit("progress", this, this.img, t)
        }, h.prototype.handleEvent = function (e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, h.prototype.onload = function () {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, h.prototype.onerror = function () {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, h.prototype.unbindEvents = function () {
            n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this), n.unbind(this.img, "load", this), n.unbind(this.img, "error", this)
        }, a.prototype = new h, a.prototype.check = function () {
            n.bind(this.img, "load", this), n.bind(this.img, "error", this), this.img.src = this.url;
            var e = this.getIsImageComplete();
            e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, a.prototype.unbindEvents = function () {
            n.unbind(this.img, "load", this), n.unbind(this.img, "error", this)
        }, a.prototype.confirm = function (e, t) {
            this.isLoaded = e, this.emit("progress", this, this.element, t)
        }, o.makeJQueryPlugin = function (t) {
            t = t || e.jQuery, t && (u = t, u.fn.imagesLoaded = function (e, t) {
                var n = new o(this, e, t);
                return n.jqDeferred.promise(u(this))
            })
        }, o.makeJQueryPlugin(), o
    });

! function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
    "use strict";
    var b = window.Slick || {};
    b = function () {
        function c(c, d) {
            var f, e = this;
            e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (a, b) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !1,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, e.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.hidden = "hidden", e.paused = !1, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, f, d), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.Hidden ? (e.hidden = "Hidden", e.visibilityChange = "visibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0), e.checkResponsive(!0)
        }
        var b = 0;
        return c
    }(), b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null;
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function () {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }, b.prototype.animateSlide = function (b, c) {
        var d = {},
            e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function (a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function () {
                c && c.call()
            }
        })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.asNavFor = function (b) {
        var c = this,
            d = c.options.asNavFor;
        d && null !== d && (d = a(d).not(c.$slider)), null !== d && "object" == typeof d && d.each(function () {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }, b.prototype.applyTransition = function (a) {
        var b = this,
            c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function () {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function () {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function () {
        var a = this;
        a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (a.currentSlide - 1 === 0 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
    }, b.prototype.buildArrows = function () {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, b.prototype.buildDots = function () {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount(); c += 1) d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
            d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function () {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function () {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.html(e), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, b.prototype.checkResponsive = function (b, c) {
        var e, f, g, d = this,
            h = !1,
            i = d.$slider.width(),
            j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }, b.prototype.changeSlide = function (b, c) {
        var f, g, h, d = this,
            e = a(b.target);
        switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
            case "previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                break;
            case "next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                break;
            case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
                d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
                break;
            default:
                return
        }
    }, b.prototype.checkNavigable = function (a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
        else
            for (var e in c) {
                if (a < c[e]) {
                    a = d;
                    break
                }
                d = c[e]
            }
        return a
    }, b.prototype.cleanUpEvents = function () {
        var b = this;
        b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide), b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpRows = function () {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.html(b))
    }, b.prototype.clickHandler = function (a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function (b) {
        var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            a(this).attr("style", a(this).data("originalStyling"))
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
    }, b.prototype.disableTransition = function (a) {
        var b = this,
            c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function (a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }), c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }), b && setTimeout(function () {
            c.disableTransition(a), b.call()
        }, c.options.speed))
    }, b.prototype.fadeSlideOut = function (a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function () {
        var a = this,
            b = 0,
            c = 0,
            d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0) d = a.slideCount;
        else
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d - 1
    }, b.prototype.getLeft = function (a) {
        var c, d, f, b = this,
            e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
    }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
        var b = this;
        return b.options[a]
    }, b.prototype.getNavigableIndexes = function () {
        var e, a = this,
            b = 0,
            c = 0,
            d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }, b.prototype.getSlick = function () {
        return this
    }, b.prototype.getSlideCount = function () {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }, b.prototype.init = function (b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA()
    }, b.prototype.initArrowEvents = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
            message: "previous"
        }, a.changeSlide), a.$nextArrow.on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }, b.prototype.initDotEvents = function () {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1))
    }, b.prototype.initializeEvents = function () {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
    }, b.prototype.keyHandler = function (a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: "next"
            }
        }))
    }, b.prototype.lazyLoad = function () {
        function g(b) {
            a("img[data-lazy]", b).each(function () {
                var b = a(this),
                    c = a(this).attr("data-lazy"),
                    d = document.createElement("img");
                d.onload = function () {
                    b.animate({
                        opacity: 0
                    }, 100, function () {
                        b.attr("src", c).animate({
                            opacity: 1
                        }, 200, function () {
                            b.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                }, d.src = c
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
    }, b.prototype.loadSlider = function () {
        var a = this;
        a.setPosition(), a.$slideTrack.css({
            opacity: 1
        }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function () {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }, b.prototype.orientationChange = function () {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function () {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function () {
        var a = this;
        a.paused = !1, a.autoPlay()
    }, b.prototype.postSlide = function (a) {
        var b = this;
        b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(), b.options.accessibility === !0 && b.initADA()
    }, b.prototype.prev = b.prototype.slickPrev = function () {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, b.prototype.preventDefault = function (a) {
        a.preventDefault()
    }, b.prototype.progressiveLazyLoad = function () {
        var c, d, b = this;
        c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", null), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function () {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad(), b.options.adaptiveHeight === !0 && b.setPosition()
        }).error(function () {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad()
        }))
    }, b.prototype.refresh = function (b) {
        var d, e, c = this;
        e = c.slideCount - c.options.slidesToShow, c.options.infinite || (c.slideCount <= c.options.slidesToShow ? c.currentSlide = 0 : c.currentSlide > e && (c.currentSlide = e)), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
            currentSlide: d
        }), c.init(), b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }, b.prototype.registerBreakpoints = function () {
        var c, d, e, b = this,
            f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f)
                if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                    for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                    b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
                } b.breakpoints.sort(function (a, c) {
                return b.options.mobileFirst ? a - c : c - a
            })
        }
    }, b.prototype.reinit = function () {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b]), b.options.autoplay === !0 && b.focusHandler()
    }, b.prototype.resize = function () {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
        }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
    }, b.prototype.setCSS = function (a) {
        var d, e, b = this,
            c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function () {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function () {
        var c, b = this;
        b.$slides.each(function (d, e) {
            c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            })
        }), b.$slides.eq(b.currentSlide).css({
            zIndex: b.options.zIndex - 1,
            opacity: 1
        })
    }, b.prototype.setHeight = function () {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function (b, c, d) {
        var f, g, e = this;
        if ("responsive" === b && "array" === a.type(c))
            for (g in c)
                if ("array" !== a.type(e.options.responsive)) e.options.responsive = [c[g]];
                else {
                    for (f = e.options.responsive.length - 1; f >= 0;) e.options.responsive[f].breakpoint === c[g].breakpoint && e.options.responsive.splice(f, 1), f--;
                    e.options.responsive.push(c[g])
                }
        else e.options[b] = c;
        d === !0 && (e.unload(), e.reinit())
    }, b.prototype.setPosition = function () {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function () {
        var a = this,
            b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function (a) {
        var c, d, e, f, b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function () {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.setPaused = function (a) {
        var b = this;
        b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, a ? b.autoPlayClear() : b.autoPlay())
    }, b.prototype.selectHandler = function (b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
    }, b.prototype.slideHandler = function (a, b, c) {
        var d, e, f, g, h = null,
            i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
            i.postSlide(d);
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
            i.postSlide(e)
        })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function () {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }, b.prototype.startLoad = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function () {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical"
    }, b.prototype.swipeEnd = function (a) {
        var c, b = this;
        if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) switch (b.swipeDirection()) {
            case "left":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(c), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]);
                break;
            case "right":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(c), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"])
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function (a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function (a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
    }, b.prototype.swipeStart = function (a) {
        var c, b = this;
        return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function () {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function (a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy()
    }, b.prototype.updateArrows = function () {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, b.prototype.updateDots = function () {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function () {
        var a = this;
        document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : a.options.autoplay === !0 && (a.paused = !1, a.autoPlay())
    }, b.prototype.initADA = function () {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
    }, b.prototype.activateADA = function () {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, b.prototype.focusHandler = function () {
        var b = this;
        b.$slider.on("focus.slick blur.slick", "*", function (c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function () {
                b.isPlay && (d.is(":focus") ? (b.autoPlayClear(), b.paused = !0) : (b.paused = !1, b.autoPlay()))
            }, 0)
        })
    }, a.fn.slick = function () {
        var f, g, a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length;
        for (f = 0; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        return a
    }
});
jQuery(document).ready(function () {
    'use strict';
    jQuery('#slider-fullwidth').carousel('cycle');
    jQuery('[data-toggle="tooltip"]').tooltip();
    jQuery('#gallery-slider').slick({
        arrows: true,
        useTransform: true,
        cssEase: 'cubic-bezier(0.250, 0.250, 0.515, 0.975)',
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        swipeToSlide: true,
        responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 490,
            settings: {
                slidesToShow: 1,
            }
        }]
    });
    jQuery("#clients-carousel").slick({
        arrows: false,
        useTransform: true,
        cssEase: 'cubic-bezier(0.250, 0.250, 0.515, 0.975)',
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplaySpeed: 500,
        autoplay: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
            }
        }]
    });
    jQuery("#news-carousel").slick({
        useTransform: true,
        cssEase: 'cubic-bezier(0.250, 0.250, 0.515, 0.975)',
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    jQuery("#testimonial-carousel").slick({
        useTransform: true,
        cssEase: 'cubic-bezier(0.250, 0.250, 0.515, 0.975)',
        slidesToShow: 2,
        speed: 300,
        swipeToSlide: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    jQuery('#menu-btn').on("click", function () {
        if (jQuery(this).hasClass('toggled')) {
            jQuery(this).removeClass('toggled');
            if (jQuery(this).attr("aria-expanded", "false")) {
                jQuery('#nav-secondary-mobile').css("display", "none");
            }
        } else {
            jQuery(this).addClass('toggled');
            if (jQuery(this).attr("aria-expanded", "true")) {
                jQuery('#nav-secondary-mobile').css("display", "block");
                jQuery('#nav-secondary-mobile').addClass("fadeIn");
            }
        }
    })
    jQuery('#menu-btn').on("tap", function () {
        if (jQuery(this).hasClass('toggled')) {
            jQuery(this).removeClass('toggled');
        } else {
            jQuery(this).addClass('toggled');
        }
    })
    jQuery('#mainmenu li.menu-item-has-children').each(function () {
        jQuery(this).append('<div class="nav-toggle-mobile-submenu"><i class="fa fa-angle-down"></i></div>');
    })
    jQuery('.disabled a').each(function () {
        jQuery(this).attr("href", "#");
    })
    jQuery('.nav-toggle-mobile-submenu').on("click", function () {
        if (jQuery(this).hasClass('opened')) {
            jQuery(this).removeClass('opened');
            jQuery(this).parent('li').children('.sub-menu').css("display", "none");
        } else {
            jQuery(this).addClass('opened');
            jQuery(this).parent('li').children('.sub-menu').css("display", "block");
        }
    })
    jQuery(window).on('resize', function () {
        var headerHeight = jQuery('#header').css("height");
        jQuery('.header-wrapper').css("min-height", headerHeight);
    }).resize();
    jQuery('#filters a').on('click', function () {
        var $this = jQuery(this);
        if ($this.hasClass('selected')) {
            return false;
        }
        jQuery(this).parent().parent().find('.selected').removeClass('selected');
        $this.addClass('selected');
    });
    var $container = jQuery('#gallery');
    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.item',
            filter: '*'
        });
    });
    jQuery('#filters a').on("click", function () {
        var selector = jQuery(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });
        return false;
    });
    jQuery(window).on('resize', function () {
        $container.isotope('layout');
        $container.isotope('layout');
    });
    jQuery(window).on('load', function () {
        $container.isotope('layout');
    })
    jQuery(document).on("scroll", function () {
        var pageTop = jQuery(document).scrollTop()
        var pageBottom = pageTop + jQuery(window).height()
        var tags = jQuery(".animate")
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i]
            if (jQuery(tag).position().top < pageBottom) {
                jQuery(tag).addClass("visible")
            } else {
                jQuery(tag).removeClass("visible")
            }
        }
    })
    jQuery(window).on('load', function () {
        if (jQuery('.panel-collapse').hasClass('in')) {
            jQuery(this).parent().parent().attr("aria-expanded", "true");
        }
    });
    jQuery(window).on('load', function () {
        jQuery('.accordion-toggle.in').attr("aria-expanded", "true");
    });
    var $subtitleParent = jQuery('.content .subtitle').parent().addClass('no-mrg');
    jQuery('.content .panel-group').parent().addClass('no-mrg');
    jQuery('.section-gallery').parent().parent().css('padding-top', '0');
    jQuery('.shadow-box').closest('.vc_column-inner').css('z-index', '2');
    jQuery('.shadow-box').parents('.vc_row').css('overflow', 'visible');
    jQuery('.feature-box').closest('.vc_row').css('overflow', 'visible');
    var pageBody = jQuery('body');
    pageBody.imagesLoaded(function () {
        jQuery('.preloader-wrapper').addClass('animated fadeOut');
        jQuery('body').removeClass('preloader-site');
        jQuery('.content').addClass('animated fadeIn');
        pageBody.addClass('preloader-hide');
        jQuery('.preloader-wrapper').fadeOut();
    });
    (function () {
        var isWebkit = navigator.userAgent.toLowerCase().indexOf('webkit') > -1,
            isOpera = navigator.userAgent.toLowerCase().indexOf('opera') > -1,
            isIe = navigator.userAgent.toLowerCase().indexOf('msie') > -1;
        if ((isWebkit || isOpera || isIe) && document.getElementById && window.addEventListener) {
            window.addEventListener('hashchange', function () {
                var id = location.hash.substring(1),
                    element;
                if (!(/^[A-z0-9_-]+$/.test(id))) {
                    return;
                }
                element = document.getElementById(id);
                if (element) {
                    if (!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))) {
                        element.tabIndex = -1;
                    }
                    element.focus();
                }
            }, false);
        }
    })();
});
(function ($) {
    'use strict';
    if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
        return;
    }
    wpcf7 = $.extend({
        cached: 0,
        inputs: []
    }, wpcf7);
    $(function () {
        wpcf7.supportHtml5 = (function () {
            var features = {};
            var input = document.createElement('input');
            features.placeholder = 'placeholder' in input;
            var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
            $.each(inputTypes, function (index, value) {
                input.setAttribute('type', value);
                features[value] = input.type !== 'text';
            });
            return features;
        })();
        $('div.wpcf7 > form').each(function () {
            var $form = $(this);
            wpcf7.initForm($form);
            if (wpcf7.cached) {
                wpcf7.refill($form);
            }
        });
    });
    wpcf7.getId = function (form) {
        return parseInt($('input[name="_wpcf7"]', form).val(), 10);
    };
    wpcf7.initForm = function (form) {
        var $form = $(form);
        $form.submit(function (event) {
            if (!wpcf7.supportHtml5.placeholder) {
                $('[placeholder].placeheld', $form).each(function (i, n) {
                    $(n).val('').removeClass('placeheld');
                });
            }
            if (typeof window.FormData === 'function') {
                wpcf7.submit($form);
                event.preventDefault();
            }
        });
        $('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');
        wpcf7.toggleSubmit($form);
        $form.on('click', '.wpcf7-acceptance', function () {
            wpcf7.toggleSubmit($form);
        });
        $('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function () {
            var name = $(this).attr('name');
            $form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
        });
        $('.wpcf7-list-item.has-free-text', $form).each(function () {
            var $freetext = $(':input.wpcf7-free-text', this);
            var $wrap = $(this).closest('.wpcf7-form-control');
            if ($(':checkbox, :radio', this).is(':checked')) {
                $freetext.prop('disabled', false);
            } else {
                $freetext.prop('disabled', true);
            }
            $wrap.on('change', ':checkbox, :radio', function () {
                var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                if ($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                } else {
                    $freetext.prop('disabled', true);
                }
            });
        });
        if (!wpcf7.supportHtml5.placeholder) {
            $('[placeholder]', $form).each(function () {
                $(this).val($(this).attr('placeholder'));
                $(this).addClass('placeheld');
                $(this).focus(function () {
                    if ($(this).hasClass('placeheld')) {
                        $(this).val('').removeClass('placeheld');
                    }
                });
                $(this).blur(function () {
                    if ('' === $(this).val()) {
                        $(this).val($(this).attr('placeholder'));
                        $(this).addClass('placeheld');
                    }
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
            $form.find('input.wpcf7-date[type="date"]').each(function () {
                $(this).datepicker({
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date($(this).attr('min')),
                    maxDate: new Date($(this).attr('max'))
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
            $form.find('input.wpcf7-number[type="number"]').each(function () {
                $(this).spinner({
                    min: $(this).attr('min'),
                    max: $(this).attr('max'),
                    step: $(this).attr('step')
                });
            });
        }
        $('.wpcf7-character-count', $form).each(function () {
            var $count = $(this);
            var name = $count.attr('data-target-name');
            var down = $count.hasClass('down');
            var starting = parseInt($count.attr('data-starting-value'), 10);
            var maximum = parseInt($count.attr('data-maximum-value'), 10);
            var minimum = parseInt($count.attr('data-minimum-value'), 10);
            var updateCount = function (target) {
                var $target = $(target);
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr('data-current-value', count);
                $count.text(count);
                if (maximum && maximum < length) {
                    $count.addClass('too-long');
                } else {
                    $count.removeClass('too-long');
                }
                if (minimum && length < minimum) {
                    $count.addClass('too-short');
                } else {
                    $count.removeClass('too-short');
                }
            };
            $(':input[name="' + name + '"]', $form).each(function () {
                updateCount(this);
                $(this).keyup(function () {
                    updateCount(this);
                });
            });
        });
        $form.on('change', '.wpcf7-validates-as-url', function () {
            var val = $.trim($(this).val());
            if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== val.indexOf('.')) {
                val = val.replace(/^\/+/, '');
                val = 'http://' + val;
            }
            $(this).val(val);
        });
    };
    wpcf7.submit = function (form) {
        if (typeof window.FormData !== 'function') {
            return;
        }
        var $form = $(form);
        $('.ajax-loader', $form).addClass('is-active');
        wpcf7.clearResponse($form);
        var formData = new FormData($form.get(0));
        var detail = {
            id: $form.closest('div.wpcf7').attr('id'),
            status: 'init',
            inputs: [],
            formData: formData
        };
        $.each($form.serializeArray(), function (i, field) {
            if ('_wpcf7' == field.name) {
                detail.contactFormId = field.value;
            } else if ('_wpcf7_version' == field.name) {
                detail.pluginVersion = field.value;
            } else if ('_wpcf7_locale' == field.name) {
                detail.contactFormLocale = field.value;
            } else if ('_wpcf7_unit_tag' == field.name) {
                detail.unitTag = field.value;
            } else if ('_wpcf7_container_post' == field.name) {
                detail.containerPostId = field.value;
            } else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
                var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, '');
                detail.inputs.push({
                    name: owner + '-free-text',
                    value: field.value
                });
            } else if (field.name.match(/^_/)) {} else {
                detail.inputs.push(field);
            }
        });
        wpcf7.triggerEvent($form.closest('div.wpcf7'), 'beforesubmit', detail);
        var ajaxSuccess = function (data, status, xhr, $form) {
            detail.id = $(data.into).attr('id');
            detail.status = data.status;
            detail.apiResponse = data;
            var $message = $('.wpcf7-response-output', $form);
            switch (data.status) {
                case 'validation_failed':
                    $.each(data.invalidFields, function (i, n) {
                        $(n.into, $form).each(function () {
                            wpcf7.notValidTip(this, n.message);
                            $('.wpcf7-form-control', this).addClass('wpcf7-not-valid');
                            $('[aria-invalid]', this).attr('aria-invalid', 'true');
                        });
                    });
                    $message.addClass('wpcf7-validation-errors');
                    $form.addClass('invalid');
                    wpcf7.triggerEvent(data.into, 'invalid', detail);
                    break;
                case 'acceptance_missing':
                    $message.addClass('wpcf7-acceptance-missing');
                    $form.addClass('unaccepted');
                    wpcf7.triggerEvent(data.into, 'unaccepted', detail);
                    break;
                case 'spam':
                    $message.addClass('wpcf7-spam-blocked');
                    $form.addClass('spam');
                    wpcf7.triggerEvent(data.into, 'spam', detail);
                    break;
                case 'aborted':
                    $message.addClass('wpcf7-aborted');
                    $form.addClass('aborted');
                    wpcf7.triggerEvent(data.into, 'aborted', detail);
                    break;
                case 'mail_sent':
                    $message.addClass('wpcf7-mail-sent-ok');
                    $form.addClass('sent');
                    wpcf7.triggerEvent(data.into, 'mailsent', detail);
                    break;
                case 'mail_failed':
                    $message.addClass('wpcf7-mail-sent-ng');
                    $form.addClass('failed');
                    wpcf7.triggerEvent(data.into, 'mailfailed', detail);
                    break;
                default:
                    var customStatusClass = 'custom-' +
                        data.status.replace(/[^0-9a-z]+/i, '-');
                    $message.addClass('wpcf7-' + customStatusClass);
                    $form.addClass(customStatusClass);
            }
            wpcf7.refill($form, data);
            wpcf7.triggerEvent(data.into, 'submit', detail);
            if ('mail_sent' == data.status) {
                $form.each(function () {
                    this.reset();
                });
                wpcf7.toggleSubmit($form);
            }
            if (!wpcf7.supportHtml5.placeholder) {
                $form.find('[placeholder].placeheld').each(function (i, n) {
                    $(n).val($(n).attr('placeholder'));
                });
            }
            $message.html('').append(data.message).slideDown('fast');
            $message.attr('role', 'alert');
            $('.screen-reader-response', $form.closest('.wpcf7')).each(function () {
                var $response = $(this);
                $response.html('').attr('role', '').append(data.message);
                if (data.invalidFields) {
                    var $invalids = $('<ul></ul>');
                    $.each(data.invalidFields, function (i, n) {
                        if (n.idref) {
                            var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                        } else {
                            var $li = $('<li></li>').append(n.message);
                        }
                        $invalids.append($li);
                    });
                    $response.append($invalids);
                }
                $response.attr('role', 'alert').focus();
            });
        };
        $.ajax({
            type: 'POST',
            url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/feedback'),
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false
        }).done(function (data, status, xhr) {
            ajaxSuccess(data, status, xhr, $form);
            $('.ajax-loader', $form).removeClass('is-active');
        }).fail(function (xhr, status, error) {
            var $e = $('<div class="ajax-error"></div>').text(error.message);
            $form.after($e);
        });
    };
    wpcf7.triggerEvent = function (target, name, detail) {
        var $target = $(target);
        var event = new CustomEvent('wpcf7' + name, {
            bubbles: true,
            detail: detail
        });
        $target.get(0).dispatchEvent(event);
        $target.trigger('wpcf7:' + name, detail);
        $target.trigger(name + '.wpcf7', detail);
    };
    wpcf7.toggleSubmit = function (form, state) {
        var $form = $(form);
        var $submit = $('input:submit', $form);
        if (typeof state !== 'undefined') {
            $submit.prop('disabled', !state);
            return;
        }
        if ($form.hasClass('wpcf7-acceptance-as-validation')) {
            return;
        }
        $submit.prop('disabled', false);
        $('.wpcf7-acceptance', $form).each(function () {
            var $span = $(this);
            var $input = $('input:checkbox', $span);
            if (!$span.hasClass('optional')) {
                if ($span.hasClass('invert') && $input.is(':checked') || !$span.hasClass('invert') && !$input.is(':checked')) {
                    $submit.prop('disabled', true);
                    return false;
                }
            }
        });
    };
    wpcf7.notValidTip = function (target, message) {
        var $target = $(target);
        $('.wpcf7-not-valid-tip', $target).remove();
        $('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);
        if ($target.is('.use-floating-validation-tip *')) {
            var fadeOut = function (target) {
                $(target).not(':hidden').animate({
                    opacity: 0
                }, 'fast', function () {
                    $(this).css({
                        'z-index': -100
                    });
                });
            };
            $target.on('mouseover', '.wpcf7-not-valid-tip', function () {
                fadeOut(this);
            });
            $target.on('focus', ':input', function () {
                fadeOut($('.wpcf7-not-valid-tip', $target));
            });
        }
    };
    wpcf7.refill = function (form, data) {
        var $form = $(form);
        var refillCaptcha = function ($form, items) {
            $.each(items, function (i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find('img.wpcf7-captcha-' + i).attr('src', n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                $form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
            });
        };
        var refillQuiz = function ($form, items) {
            $.each(items, function (i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                $form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
            });
        };
        if (typeof data === 'undefined') {
            $.ajax({
                type: 'GET',
                url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/refill'),
                beforeSend: function (xhr) {
                    var nonce = $form.find(':input[name="_wpnonce"]').val();
                    if (nonce) {
                        xhr.setRequestHeader('X-WP-Nonce', nonce);
                    }
                },
                dataType: 'json'
            }).done(function (data, status, xhr) {
                if (data.captcha) {
                    refillCaptcha($form, data.captcha);
                }
                if (data.quiz) {
                    refillQuiz($form, data.quiz);
                }
            });
        } else {
            if (data.captcha) {
                refillCaptcha($form, data.captcha);
            }
            if (data.quiz) {
                refillQuiz($form, data.quiz);
            }
        }
    };
    wpcf7.clearResponse = function (form) {
        var $form = $(form);
        $form.removeClass('invalid spam sent failed');
        $form.siblings('.screen-reader-response').html('').attr('role', '');
        $('.wpcf7-not-valid-tip', $form).remove();
        $('[aria-invalid]', $form).attr('aria-invalid', 'false');
        $('.wpcf7-form-control', $form).removeClass('wpcf7-not-valid');
        $('.wpcf7-response-output', $form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');
    };
    wpcf7.apiSettings.getRoute = function (path) {
        var url = wpcf7.apiSettings.root;
        url = url.replace(wpcf7.apiSettings.namespace, wpcf7.apiSettings.namespace + path);
        return url;
    };
})(jQuery);
(function () {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();
! function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (s) {
    var c, l, u = !(s.detectSwipe = {
        version: "2.1.2",
        enabled: "ontouchstart" in document.documentElement,
        preventDefault: !0,
        threshold: 20
    });

    function f() {
        this.removeEventListener("touchmove", t), this.removeEventListener("touchend", f), u = !1
    }

    function t(e) {
        if (s.detectSwipe.preventDefault && e.preventDefault(), u) {
            var t, n = e.touches[0].pageX,
                i = e.touches[0].pageY,
                r = c - n,
                a = l - i,
                o = window.devicePixelRatio || 1;
            Math.abs(r) * o >= s.detectSwipe.threshold ? t = 0 < r ? "left" : "right" : Math.abs(a) * o >= s.detectSwipe.threshold && (t = 0 < a ? "up" : "down"), t && (f.call(this), s(this).trigger("swipe", t).trigger("swipe" + t))
        }
    }

    function e(e) {
        1 == e.touches.length && (c = e.touches[0].pageX, l = e.touches[0].pageY, u = !0, this.addEventListener("touchmove", t, !1), this.addEventListener("touchend", f, !1))
    }
    s.event.special.swipe = {
        setup: function () {
            this.addEventListener && this.addEventListener("touchstart", e, !1)
        }
    }, s.each(["left", "up", "down", "right"], function () {
        s.event.special["swipe" + this] = {
            setup: function () {
                s(this).on("swipe", s.noop)
            }
        }
    })
}),
function (u) {
    "use strict";
    if (void 0 !== u)
        if (u.fn.jquery.match(/-ajax/)) "console" in window && window.console.info("Featherlight needs regular jQuery, not the slim version.");
        else {
            var i = [],
                r = function (t) {
                    return i = u.grep(i, function (e) {
                        return e !== t && 0 < e.$instance.closest("body").length
                    })
                },
                a = {
                    allow: 1,
                    allowfullscreen: 1,
                    frameborder: 1,
                    height: 1,
                    longdesc: 1,
                    marginheight: 1,
                    marginwidth: 1,
                    mozallowfullscreen: 1,
                    name: 1,
                    referrerpolicy: 1,
                    sandbox: 1,
                    scrolling: 1,
                    src: 1,
                    srcdoc: 1,
                    style: 1,
                    webkitallowfullscreen: 1,
                    width: 1
                },
                n = {
                    keyup: "onKeyUp",
                    resize: "onResize"
                },
                o = function (e) {
                    u.each(c.opened().reverse(), function () {
                        if (!e.isDefaultPrevented() && !1 === this[n[e.type]](e)) return e.preventDefault(), e.stopPropagation(), !1
                    })
                },
                s = function (e) {
                    if (e !== c._globalHandlerInstalled) {
                        c._globalHandlerInstalled = e;
                        var t = u.map(n, function (e, t) {
                            return t + "." + c.prototype.namespace
                        }).join(" ");
                        u(window)[e ? "on" : "off"](t, o)
                    }
                };
            c.prototype = {
                constructor: c,
                namespace: "featherlight",
                targetAttr: "data-featherlight",
                variant: null,
                resetCss: !1,
                background: null,
                openTrigger: "click",
                closeTrigger: "click",
                filter: null,
                root: "body",
                openSpeed: 250,
                closeSpeed: 250,
                closeOnClick: "background",
                closeOnEsc: !0,
                closeIcon: "&#10005;",
                loading: "",
                persist: !1,
                otherClose: null,
                beforeOpen: u.noop,
                beforeContent: u.noop,
                beforeClose: u.noop,
                afterOpen: u.noop,
                afterContent: u.noop,
                afterClose: u.noop,
                onKeyUp: u.noop,
                onResize: u.noop,
                type: null,
                contentFilters: ["jquery", "image", "html", "ajax", "iframe", "text"],
                setup: function (e, t) {
                    "object" != typeof e || e instanceof u != !1 || t || (t = e, e = void 0);
                    var n = u.extend(this, t, {
                            target: e
                        }),
                        i = n.resetCss ? n.namespace + "-reset" : n.namespace,
                        r = u(n.background || ['<div class="' + i + "-loading " + i + '">', '<div class="' + i + '-content">', '<button class="' + i + "-close-icon " + n.namespace + '-close" aria-label="Close">', n.closeIcon, "</button>", '<div class="' + n.namespace + '-inner">' + n.loading + "</div>", "</div>", "</div>"].join("")),
                        a = "." + n.namespace + "-close" + (n.otherClose ? "," + n.otherClose : "");
                    return n.$instance = r.clone().addClass(n.variant), n.$instance.on(n.closeTrigger + "." + n.namespace, function (e) {
                        if (!e.isDefaultPrevented()) {
                            var t = u(e.target);
                            ("background" === n.closeOnClick && t.is("." + n.namespace) || "anywhere" === n.closeOnClick || t.closest(a).length) && (n.close(e), e.preventDefault())
                        }
                    }), this
                },
                getContent: function () {
                    if (!1 !== this.persist && this.$content) return this.$content;
                    var t = this,
                        e = this.constructor.contentFilters,
                        n = function (e) {
                            return t.$currentTarget && t.$currentTarget.attr(e)
                        },
                        i = n(t.targetAttr),
                        r = t.target || i || "",
                        a = e[t.type];
                    if (!a && r in e && (a = e[r], r = t.target && i), r = r || n("href") || "", !a)
                        for (var o in e) t[o] && (a = e[o], r = t[o]);
                    if (!a) {
                        var s = r;
                        if (r = null, u.each(t.contentFilters, function () {
                                return (a = e[this]).test && (r = a.test(s)), !r && a.regex && s.match && s.match(a.regex) && (r = s), !r
                            }), !r) return "console" in window && window.console.error("Featherlight: no content filter found " + (s ? ' for "' + s + '"' : " (no target specified)")), !1
                    }
                    return a.process.call(t, r)
                },
                setContent: function (e) {
                    return this.$instance.removeClass(this.namespace + "-loading"), this.$instance.toggleClass(this.namespace + "-iframe", e.is("iframe")), this.$instance.find("." + this.namespace + "-inner").not(e).slice(1).remove().end().replaceWith(u.contains(this.$instance[0], e[0]) ? "" : e), this.$content = e.addClass(this.namespace + "-inner"), this
                },
                open: function (t) {
                    var n = this;
                    if (n.$instance.hide().appendTo(n.root), !(t && t.isDefaultPrevented() || !1 === n.beforeOpen(t))) {
                        t && t.preventDefault();
                        var e = n.getContent();
                        if (e) return i.push(n), s(!0), n.$instance.fadeIn(n.openSpeed), n.beforeContent(t), u.when(e).always(function (e) {
                            n.setContent(e), n.afterContent(t)
                        }).then(n.$instance.promise()).done(function () {
                            n.afterOpen(t)
                        })
                    }
                    return n.$instance.detach(), u.Deferred().reject().promise()
                },
                close: function (e) {
                    var t = this,
                        n = u.Deferred();
                    return !1 === t.beforeClose(e) ? n.reject() : (0 === r(t).length && s(!1), t.$instance.fadeOut(t.closeSpeed, function () {
                        t.$instance.detach(), t.afterClose(e), n.resolve()
                    })), n.promise()
                },
                resize: function (e, t) {
                    if (e && t) {
                        this.$content.css("width", "").css("height", "");
                        var n = Math.max(e / (this.$content.parent().width() - 1), t / (this.$content.parent().height() - 1));
                        1 < n && (n = t / Math.floor(t / n), this.$content.css("width", e / n + "px").css("height", t / n + "px"))
                    }
                },
                chainCallbacks: function (e) {
                    for (var t in e) this[t] = u.proxy(e[t], this, u.proxy(this[t], this))
                }
            }, u.extend(c, {
                id: 0,
                autoBind: "[data-featherlight]",
                defaults: c.prototype,
                contentFilters: {
                    jquery: {
                        regex: /^[#.]\w/,
                        test: function (e) {
                            return e instanceof u && e
                        },
                        process: function (e) {
                            return !1 !== this.persist ? u(e) : u(e).clone(!0)
                        }
                    },
                    image: {
                        regex: /\.(png|jpg|jpeg|gif|tiff?|bmp|svg)(\?\S*)?$/i,
                        process: function (e) {
                            var t = u.Deferred(),
                                n = new Image,
                                i = u('<img src="' + e + '" alt="" class="' + this.namespace + '-image" />');
                            return n.onload = function () {
                                i.naturalWidth = n.width, i.naturalHeight = n.height, t.resolve(i)
                            }, n.onerror = function () {
                                t.reject(i)
                            }, n.src = e, t.promise()
                        }
                    },
                    html: {
                        regex: /^\s*<[\w!][^<]*>/,
                        process: function (e) {
                            return u(e)
                        }
                    },
                    ajax: {
                        regex: /./,
                        process: function (e) {
                            var n = u.Deferred(),
                                i = u("<div></div>").load(e, function (e, t) {
                                    "error" !== t && n.resolve(i.contents()), n.fail()
                                });
                            return n.promise()
                        }
                    },
                    iframe: {
                        process: function (e) {
                            var t = new u.Deferred,
                                n = u("<iframe/>"),
                                i = function (e, t) {
                                    var n = {},
                                        i = new RegExp("^" + t + "([A-Z])(.*)");
                                    for (var r in e) {
                                        var a = r.match(i);
                                        a && (n[(a[1] + a[2].replace(/([A-Z])/g, "-$1")).toLowerCase()] = e[r])
                                    }
                                    return n
                                }(this, "iframe"),
                                r = function (e, t) {
                                    var n = {};
                                    for (var i in e) i in t && (n[i] = e[i], delete e[i]);
                                    return n
                                }(i, a);
                            return n.hide().attr("src", e).attr(r).css(i).on("load", function () {
                                t.resolve(n.show())
                            }).appendTo(this.$instance.find("." + this.namespace + "-content")), t.promise()
                        }
                    },
                    text: {
                        process: function (e) {
                            return u("<div>", {
                                text: e
                            })
                        }
                    }
                },
                functionAttributes: ["beforeOpen", "afterOpen", "beforeContent", "afterContent", "beforeClose", "afterClose"],
                readElementConfig: function (e, t) {
                    var i = this,
                        r = new RegExp("^data-" + t + "-(.*)"),
                        a = {};
                    return e && e.attributes && u.each(e.attributes, function () {
                        var e = this.name.match(r);
                        if (e) {
                            var t = this.value,
                                n = u.camelCase(e[1]);
                            if (0 <= u.inArray(n, i.functionAttributes)) t = new Function(t);
                            else try {
                                t = JSON.parse(t)
                            } catch (e) {}
                            a[n] = t
                        }
                    }), a
                },
                extend: function (e, t) {
                    var n = function () {
                        this.constructor = e
                    };
                    return n.prototype = this.prototype, e.prototype = new n, e.__super__ = this.prototype, u.extend(e, this, t), e.defaults = e.prototype, e
                },
                attach: function (r, a, o) {
                    var s = this;
                    "object" != typeof a || a instanceof u != !1 || o || (o = a, a = void 0);
                    var c, e = (o = u.extend({}, o)).namespace || s.defaults.namespace,
                        l = u.extend({}, s.defaults, s.readElementConfig(r[0], e), o),
                        t = function (e) {
                            var t = u(e.currentTarget),
                                n = u.extend({
                                    $source: r,
                                    $currentTarget: t
                                }, s.readElementConfig(r[0], l.namespace), s.readElementConfig(e.currentTarget, l.namespace), o),
                                i = c || t.data("featherlight-persisted") || new s(a, n);
                            "shared" === i.persist ? c = i : !1 !== i.persist && t.data("featherlight-persisted", i), n.$currentTarget.blur && n.$currentTarget.blur(), i.open(e)
                        };
                    return r.on(l.openTrigger + "." + l.namespace, l.filter, t), {
                        filter: l.filter,
                        handler: t
                    }
                },
                current: function () {
                    var e = this.opened();
                    return e[e.length - 1] || null
                },
                opened: function () {
                    var t = this;
                    return r(), u.grep(i, function (e) {
                        return e instanceof t
                    })
                },
                close: function (e) {
                    var t = this.current();
                    if (t) return t.close(e)
                },
                _onReady: function () {
                    var i = this;
                    if (i.autoBind) {
                        var r = u(i.autoBind);
                        r.each(function () {
                            i.attach(u(this))
                        }), u(document).on("click", i.autoBind, function (e) {
                            if (!e.isDefaultPrevented()) {
                                var t = u(e.currentTarget);
                                if (r.length !== (r = r.add(t)).length) {
                                    var n = i.attach(t);
                                    (!n.filter || 0 < u(e.target).parentsUntil(t, n.filter).length) && n.handler(e)
                                }
                            }
                        })
                    }
                },
                _callbackChain: {
                    onKeyUp: function (e, t) {
                        return 27 === t.keyCode ? (this.closeOnEsc && u.featherlight.close(t), !1) : e(t)
                    },
                    beforeOpen: function (e, t) {
                        return u(document.documentElement).addClass("with-featherlight"), this._previouslyActive = document.activeElement, this._$previouslyTabbable = u("a, input, select, textarea, iframe, button, iframe, [contentEditable=true]").not("[tabindex]").not(this.$instance.find("button")), this._$previouslyWithTabIndex = u("[tabindex]").not('[tabindex="-1"]'), this._previousWithTabIndices = this._$previouslyWithTabIndex.map(function (e, t) {
                            return u(t).attr("tabindex")
                        }), this._$previouslyWithTabIndex.add(this._$previouslyTabbable).attr("tabindex", -1), document.activeElement.blur && document.activeElement.blur(), e(t)
                    },
                    afterClose: function (e, t) {
                        var n = e(t),
                            i = this;
                        return this._$previouslyTabbable.removeAttr("tabindex"), this._$previouslyWithTabIndex.each(function (e, t) {
                            u(t).attr("tabindex", i._previousWithTabIndices[e])
                        }), this._previouslyActive.focus(), 0 === c.opened().length && u(document.documentElement).removeClass("with-featherlight"), n
                    },
                    onResize: function (e, t) {
                        return this.resize(this.$content.naturalWidth, this.$content.naturalHeight), e(t)
                    },
                    afterContent: function (e, t) {
                        var n = e(t);
                        return this.$instance.find("[autofocus]:not([disabled])").focus(), this.onResize(t), n
                    }
                }
            }), u.featherlight = c, u.fn.featherlight = function (e, t) {
                return c.attach(this, e, t), this
            }, u(document).ready(function () {
                c._onReady()
            })
        }
    else "console" in window && window.console.info("Too much lightness, Featherlight needs jQuery.");

    function c(e, t) {
        if (!(this instanceof c)) {
            var n = new c(e, t);
            return n.open(), n
        }
        this.id = c.id++, this.setup(e, t), this.chainCallbacks(c._callbackChain)
    }
}(jQuery),
function (a) {
    "use strict";
    var e = function (e) {
        window.console && window.console.warn && window.console.warn("FeatherlightGallery: " + e)
    };
    if (void 0 === a) return e("Too much lightness, Featherlight needs jQuery.");
    if (!a.featherlight) return e("Load the featherlight plugin before the gallery plugin");
    var t = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
        n = a.event && a.event.special.swipeleft && a,
        i = window.Hammer && function (e) {
            var t = new window.Hammer.Manager(e[0]);
            return t.add(new window.Hammer.Swipe), t
        },
        r = t && (n || i);
    t && !r && e("No compatible swipe library detected; one must be included before featherlightGallery for swipe motions to navigate the galleries.");
    var o = {
        afterClose: function (e, t) {
            var n = this;
            return n.$instance.off("next." + n.namespace + " previous." + n.namespace), n._swiper && (n._swiper.off("swipeleft", n._swipeleft).off("swiperight", n._swiperight), n._swiper = null), e(t)
        },
        beforeOpen: function (e, t) {
            var n = this;
            return n.$instance.on("next." + n.namespace + " previous." + n.namespace, function (e) {
                var t = "next" === e.type ? 1 : -1;
                n.navigateTo(n.currentNavigation() + t)
            }), r && (n._swiper = r(n.$instance).on("swipeleft", n._swipeleft = function () {
                n.$instance.trigger("next")
            }).on("swiperight", n._swiperight = function () {
                n.$instance.trigger("previous")
            }), n.$instance.addClass(this.namespace + "-swipe-aware", r)), n.$instance.find("." + n.namespace + "-content").append(n.createNavigation("previous")).append(n.createNavigation("next")), e(t)
        },
        beforeContent: function (e, t) {
            var n = this.currentNavigation(),
                i = this.slides().length;
            return this.$instance.toggleClass(this.namespace + "-first-slide", 0 === n).toggleClass(this.namespace + "-last-slide", n === i - 1), e(t)
        },
        onKeyUp: function (e, t) {
            var n = {
                37: "previous",
                39: "next"
            } [t.keyCode];
            return n ? (this.$instance.trigger(n), !1) : e(t)
        }
    };

    function s(e, t) {
        if (!(this instanceof s)) {
            var n = new s(a.extend({
                $source: e,
                $currentTarget: e.first()
            }, t));
            return n.open(), n
        }
        a.featherlight.apply(this, arguments), this.chainCallbacks(o)
    }
    a.featherlight.extend(s, {
        autoBind: "[data-featherlight-gallery]"
    }), a.extend(s.prototype, {
        previousIcon: "&#9664;",
        nextIcon: "&#9654;",
        galleryFadeIn: 100,
        galleryFadeOut: 300,
        slides: function () {
            return this.filter ? this.$source.find(this.filter) : this.$source
        },
        images: function () {
            return e("images is deprecated, please use slides instead"), this.slides()
        },
        currentNavigation: function () {
            return this.slides().index(this.$currentTarget)
        },
        navigateTo: function (e) {
            var t = this,
                n = t.slides(),
                i = n.length,
                r = t.$instance.find("." + t.namespace + "-inner");
            return e = (e % i + i) % i, t.$currentTarget = n.eq(e), t.beforeContent(), a.when(t.getContent(), r.fadeTo(t.galleryFadeOut, .2)).always(function (e) {
                t.setContent(e), t.afterContent(), e.fadeTo(t.galleryFadeIn, 1)
            })
        },
        createNavigation: function (t) {
            var n = this;
            return a('<span title="' + t + '" class="' + this.namespace + "-" + t + '"><span>' + this[t + "Icon"] + "</span></span>").click(function (e) {
                a(this).trigger(t + "." + n.namespace), e.preventDefault()
            })
        }
    }), a.featherlightGallery = s, a.fn.featherlightGallery = function (e) {
        return s.attach(this, e), this
    }, a(document).ready(function () {
        s._onReady()
    })
}(jQuery),
function (e, i, t) {
    "use strict";
    var n = i(document.body);

    function r(e, t) {
        return /(.png|.jpg|.jpeg|.gif|.tiff|.bmp)$/.test(i(t).attr("href").toLowerCase().split("?")[0].split("#")[0])
    }

    function a(e, t) {
        var n = i(t).find("a[data-featherlight]");
        n.attr("data-featherlight") && n.featherlightGallery({
            previousIcon: "",
            nextIcon: ""
        })
    }

    function o() {
        var e;
        i.featherlight.defaults.closeIcon = "", n.find("a[href]").filter(r).attr("data-featherlight", "image"), 0 !== (e = n.find('[class*="gallery"]')).length && i.each(e, a), n.hasClass("wp-featherlight-captions") && (i.featherlight.prototype.afterContent = function () {
            var e = this.$instance,
                t = function (e) {
                    var t = e.parent().find(".wp-caption-text");
                    if (0 !== t.length) return t;
                    var n = e.parent().find("figcaption");
                    if (0 !== n.length) return n;
                    var i = e.parents(".gallery-item");
                    if (0 !== i.length) return i.find(".wp-caption-text");
                    var r = e.parents(".blocks-gallery-item");
                    if (0 !== r.length) return r.find("figcaption");
                    var a = e.parents(".tiled-gallery-item");
                    return 0 !== a.length ? a.find(".tiled-gallery-caption") : ""
                }(this.$currentTarget);
            e.find(".caption").remove(), 0 !== t.length && (i('<div class="caption">').appendTo(e.find(".featherlight-content"))[0].innerHTML = t.html())
        })
    }
    i(document).ready(function () {
        o()
    })
}(0, jQuery);
! function (d, l) {
    "use strict";
    var e = !1,
        o = !1;
    if (l.querySelector)
        if (d.addEventListener) e = !0;
    if (d.wp = d.wp || {}, !d.wp.receiveEmbedMessage)
        if (d.wp.receiveEmbedMessage = function (e) {
                var t = e.data;
                if (t)
                    if (t.secret || t.message || t.value)
                        if (!/[^a-zA-Z0-9]/.test(t.secret)) {
                            var r, a, i, s, n, o = l.querySelectorAll('iframe[data-secret="' + t.secret + '"]'),
                                c = l.querySelectorAll('blockquote[data-secret="' + t.secret + '"]');
                            for (r = 0; r < c.length; r++) c[r].style.display = "none";
                            for (r = 0; r < o.length; r++)
                                if (a = o[r], e.source === a.contentWindow) {
                                    if (a.removeAttribute("style"), "height" === t.message) {
                                        if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
                                        else if (~~i < 200) i = 200;
                                        a.height = i
                                    }
                                    if ("link" === t.message)
                                        if (s = l.createElement("a"), n = l.createElement("a"), s.href = a.getAttribute("src"), n.href = t.value, n.host === s.host)
                                            if (l.activeElement === a) d.top.location.href = t.value
                                }
                        }
            }, e) d.addEventListener("message", d.wp.receiveEmbedMessage, !1), l.addEventListener("DOMContentLoaded", t, !1), d.addEventListener("load", t, !1);

    function t() {
        if (!o) {
            o = !0;
            var e, t, r, a, i = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                s = !!navigator.userAgent.match(/Trident.*rv:11\./),
                n = l.querySelectorAll("iframe.wp-embedded-content");
            for (t = 0; t < n.length; t++) {
                if (!(r = n[t]).getAttribute("data-secret")) a = Math.random().toString(36).substr(2, 10), r.src += "#?secret=" + a, r.setAttribute("data-secret", a);
                if (i || s)(e = r.cloneNode(!0)).removeAttribute("security"), r.parentNode.replaceChild(e, r)
            }
        }
    }
}(window, document);