(function (h, g, c, j, d, l, k) {/*! Jssor */
    new (function () {
    });
    var e = {
        vd: function (a) {
            return -c.cos(a * c.PI) / 2 + .5
        },
        ud: function (a) {
            return a
        },
        me: function (a) {
            return -a * (a - 2)
        },
        ne: function (a) {
            return a * a * a
        }
    }, f = {
        yd: e.ud,
        od: e.ne
    };
    var b = new function () {
        var f = this, Ab = /\S+/g, F = 1, yb = 2, fb = 3, eb = 4, jb = 5, G, r = 0, i = 0, s = 0, X = 0, z = 0, I = navigator, ob = I.appName, o = I.userAgent, p = parseFloat;
        function Ib() {
            if (!G) {
                G = {
                    qf: "ontouchstart" in h || "createTouch" in g
                };
                var a;
                if (I.pointerEnabled || (a = I.msPointerEnabled))
                    G.zd = a ? "msTouchAction" : "touchAction"
            }
            return G
        }
        function v(j) {
            if (!r) {
                r = -1;
                if (ob == "Microsoft Internet Explorer"
                        && !!h.attachEvent && !!h.ActiveXObject) {
                    var e = o.indexOf("MSIE");
                    r = F;
                    s = p(o.substring(e + 5, o.indexOf(";", e)));/*@cc_on X=@_jscript_version@*/
                    ;
                    i = g.documentMode || s
                } else if (ob == "Netscape" && !!h.addEventListener) {
                    var d = o.indexOf("Firefox"), b = o
                            .indexOf("Safari"), f = o.indexOf("Chrome"), c = o
                            .indexOf("AppleWebKit");
                    if (d >= 0) {
                        r = yb;
                        i = p(o.substring(d + 8))
                    } else if (b >= 0) {
                        var k = o.substring(0, b).lastIndexOf("/");
                        r = f >= 0 ? eb : fb;
                        i = p(o.substring(k + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i
                                .exec(o);
                        if (a) {
                            r = F;
                            i = s = p(a[1])
                        }
                    }
                    if (c >= 0)
                        z = p(o.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i
                            .exec(o);
                    if (a) {
                        r = jb;
                        i = p(a[2])
                    }
                }
            }
            return j == r
        }
        function q() {
            return v(F)
        }
        function Q() {
            return q() && (i < 6 || g.compatMode == "BackCompat")
        }
        function db() {
            return v(fb)
        }
        function ib() {
            return v(jb)
        }
        function vb() {
            return db() && z > 534 && z < 535
        }
        function J() {
            v();
            return z > 537 || i > 42 || r == F && i >= 11
        }
        function O() {
            return q() && i < 9
        }
        function wb(a) {
            var b, c;
            return function (f) {
                if (!b) {
                    b = d;
                    var e = a.substr(0, 1).toUpperCase() + a.substr(1);
                    n([a].concat(["WebKit", "ms", "Moz", "O",
                            "webkit"]), function (g, d) {
                                var b = a;
                                if (d)
                                    b = g + e;
                                if (f.style[b] != k)
                                    return c = b
                            })
                }
                return c
            }
        }
        function ub(b) {
            var a;
            return function (c) {
                a = a || wb(b)(c) || b;
                return a
            }
        }
        var K = ub("transform");
        function nb(a) {
            return {}.toString.call(a)
        }
        var kb = {};
        n(["Boolean", "Number", "String", "Function", "Array", "Date",
                "RegExp", "Object"], function (a) {
                    kb["[object " + a + "]"] = a.toLowerCase()
                });
        function n(b, d) {
            var a, c;
            if (nb(b) == "[object Array]") {
                for (a = 0; a < b.length; a++)
                    if (c = d(b[a], a, b))
                        return c
            } else
                for (a in b)
                    if (c = d(b[a], a, b))
                        return c
        }
        function C(a) {
            return a == j ? String(a) : kb[nb(a)] || "object"
        }
        function lb(a) {
            for (var b in a)
                return d
        }
        function A(a) {
            try {
                return C(a) == "object"
                        && !a.nodeType
                        && a != a.window
                        && (!a.constructor || {}.hasOwnProperty.call(
                                a.constructor.prototype,
                                "isPrototypeOf"))
            } catch (b) {
            }
        }
        function u(a, b) {
            return {
                x: a,
                y: b
            }
        }
        function rb(b, a) {
            setTimeout(b, a || 0)
        }
        function H(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            n(d, function (c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index), e = a.substr(b.index
                            + b[0].length + 1, a.length - 1);
                    a = d + e
                }
            });
            a = c + (!a.indexOf(" ") ? "" : " ") + a;
            return a
        }
        function tb(b, a) {
            if (i < 9)
                b.style.filter = a
        }
        f.Od = Ib;
        f.Ed = q;
        f.nf = db;
        f.Hd = ib;
        f.ze = J;
        f.ib = O;
        wb("transform");
        f.Cd = function () {
            return i
        };
        f.we = function () {
            v();
            return z
        };
        f.Vb = rb;
        function Y(a) {
            a.constructor === Y.caller && a.Bd
                    && a.Bd.apply(a, Y.caller.arguments)
        }
        f.Bd = Y;
        f.kb = function (a) {
            if (f.ke(a))
                a = g.getElementById(a);
            return a
        };
        function t(a) {
            return a || h.event
        }
        f.Dd = t;
        f.cc = function (b) {
            b = t(b);
            var a = b.target || b.srcElement || g;
            if (a.nodeType == 3)
                a = f.Id(a);
            return a
        };
        f.cd = function (a) {
            a = t(a);
            return {
                x: a.pageX || a.clientX || 0,
                y: a.pageY || a.clientY || 0
            }
        };
        function D(c, d, a) {
            if (a !== k)
                c.style[d] = a == k ? "" : a;
            else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && h.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c,
                            j);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }
        function ab(b, c, a, d) {
            if (a !== k) {
                if (a == j)
                    a = "";
                else
                    d && (a += "px");
                D(b, c, a)
            } else
                return p(D(b, c))
        }
        function m(c, a) {
            var d = a ? ab : D, b;
            if (a & 4)
                b = ub(c);
            return function (e, f) {
                return d(e, b ? b(e) : c, f, a & 2)
            }
        }
        function Db(b) {
            if (q() && s < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? p(a[1]) / 100 : 1
            } else
                return p(b.style.opacity || "1")
        }
        function Fb(b, a, f) {
            if (q() && s < 9) {
                var h = b.style.filter || "", i = new RegExp(
                        /[\s]*alpha\([^\)]*\)/g), e = c.round(100 * a), d = "";
                if (e < 100 || f)
                    d = "alpha(opacity=" + e + ") ";
                var g = H(h, [i], d);
                tb(b, g)
            } else
                b.style.opacity = a == 1 ? "" : c.round(a * 100) / 100
        }
        var L = {
            O: ["rotate"],
            Q: ["rotateX"],
            R: ["rotateY"],
            Yb: ["skewX"],
            ac: ["skewY"]
        };
        if (!J())
            L = B(L, {
                o: ["scaleX", 2],
                q: ["scaleY", 2],
                W: ["translateZ", 1]
            });
        function M(d, a) {
            var c = "";
            if (a) {
                if (q() && i && i < 10) {
                    delete a.Q;
                    delete a.R;
                    delete a.W
                }
                b.e(a, function (d, b) {
                    var a = L[b];
                    if (a) {
                        var e = a[1] || 0;
                        if (N[b] != d)
                            c += " " + a[0] + "(" + d
                                    + (["deg", "px", ""])[e] + ")"
                    }
                });
                if (J()) {
                    if (a.jb || a.hb || a.W)
                        c += " translate3d(" + (a.jb || 0) + "px,"
                                + (a.hb || 0) + "px," + (a.W || 0)
                                + "px)";
                    if (a.o == k)
                        a.o = 1;
                    if (a.q == k)
                        a.q = 1;
                    if (a.o != 1 || a.q != 1)
                        c += " scale3d(" + a.o + ", " + a.q + ", 1)"
                }
            }
            d.style[K(d)] = c
        }
        f.Pc = m("transformOrigin", 4);
        f.se = m("backfaceVisibility", 4);
        f.Qd = m("transformStyle", 4);
        f.Rd = m("perspective", 6);
        f.Ge = m("perspectiveOrigin", 4);
        f.be = function (a, b) {
            if (q() && s < 9 || s < 10 && Q())
                a.style.zoom = b == 1 ? "" : b;
            else {
                var c = K(a), f = "scale(" + b + ")", e = a.style[c], g = new RegExp(
                        /[\s]*scale\(.*?\)/g), d = H(e, [g], f);
                a.style[c] = d
            }
        };
        f.Xb = function (b, a) {
            return function (c) {
                c = t(c);
                var e = c.type, d = c.relatedTarget
                        || (e == "mouseout" ? c.toElement
                                : c.fromElement);
                (!d || d !== a && !f.kf(a, d)) && b(c)
            }
        };
        f.a = function (a, d, b, c) {
            a = f.kb(a);
            if (a.addEventListener) {
                d == "mousewheel"
                        && a.addEventListener("DOMMouseScroll", b, c);
                a.addEventListener(d, b, c)
            } else if (a.attachEvent) {
                a.attachEvent("on" + d, b);
                c && a.setCapture && a.setCapture()
            }
        };
        f.N = function (a, c, d, b) {
            a = f.kb(a);
            if (a.removeEventListener) {
                c == "mousewheel"
                        && a
                                .removeEventListener("DOMMouseScroll",
                                        d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        f.Kb = function (a) {
            a = t(a);
            a.preventDefault && a.preventDefault();
            a.cancel = d;
            a.returnValue = l
        };
        f.vf = function (a) {
            a = t(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = d
        };
        f.G = function (d, c) {
            var a = [].slice.call(arguments, 2), b = function () {
                var b = a.concat([].slice.call(arguments, 0));
                return c.apply(d, b)
            };
            return b
        };
        f.Sd = function (a, b) {
            if (b == k)
                return a.textContent || a.innerText;
            var c = g.createTextNode(b);
            f.ec(a);
            a.appendChild(c)
        };
        f.Gb = function (d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)
                (c || a.nodeType == 1) && b.push(a);
            return b
        };
        function mb(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (U(a, b) == c)
                        return a;
                    if (!e) {
                        var d = mb(a, c, e, b);
                        if (d)
                            return d
                    }
                }
        }
        f.A = mb;
        function S(a, d, f, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    U(a, b) == d && c.push(a);
                    if (!f) {
                        var e = S(a, d, f, b);
                        if (e.length)
                            c = c.concat(e)
                    }
                }
            return c
        }
        function gb(a, c, d) {
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (a.tagName == c)
                        return a;
                    if (!d) {
                        var b = gb(a, c, d);
                        if (b)
                            return b
                    }
                }
        }
        f.Pe = gb;
        function xb(a, c, e) {
            var b = [];
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    (!c || a.tagName == c) && b.push(a);
                    if (!e) {
                        var d = xb(a, c, e);
                        if (d.length)
                            b = b.concat(d)
                    }
                }
            return b
        }
        f.Re = xb;
        f.Ve = function (b, a) {
            return b.getElementsByTagName(a)
        };
        function B() {
            var e = arguments, d, c, b, a, g = 1 & e[0], f = 1 + g;
            d = e[f - 1] || {};
            for (; f < e.length; f++)
                if (c = e[f])
                    for (b in c) {
                        a = c[b];
                        if (a !== k) {
                            a = c[b];
                            var h = d[b];
                            d[b] = g && (A(h) || A(a)) ? B(g, {}, h, a)
                                    : a
                        }
                    }
            return d
        }
        f.r = B;
        function Z(f, g) {
            var d = {}, c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (A(a) && A(b)) {
                        a = Z(a, b);
                        e = !lb(a)
                    }
                    !e && (d[c] = a)
                }
            }
            return d
        }
        f.Jc = function (a) {
            return C(a) == "function"
        };
        f.ke = function (a) {
            return C(a) == "string"
        };
        f.Gc = function (a) {
            return !isNaN(p(a)) && isFinite(a)
        };
        f.e = n;
        f.bf = A;
        function R(a) {
            return g.createElement(a)
        }
        f.gb = function () {
            return R("DIV")
        };
        f.Ye = function () {
            return R("SPAN")
        };
        f.Sc = function () {
        };
        function V(b, c, a) {
            if (a == k)
                return b.getAttribute(c);
            b.setAttribute(c, a)
        }
        function U(a, b) {
            return V(a, b) || V(a, "data-" + b)
        }
        f.s = V;
        f.k = U;
        function x(b, a) {
            if (a == k)
                return b.className;
            b.className = a
        }
        f.Fc = x;
        function qb(b) {
            var a = {};
            n(b, function (b) {
                a[b] = b
            });
            return a
        }
        function sb(b, a) {
            return b.match(a || Ab)
        }
        function P(b, a) {
            return qb(sb(b || "", a))
        }
        f.Oe = sb;
        function bb(b, c) {
            var a = "";
            n(c, function (c) {
                a && (a += b);
                a += c
            });
            return a
        }
        function E(a, c, b) {
            x(a, bb(" ", B(Z(P(x(a)), P(c)), P(b))))
        }
        f.Id = function (a) {
            return a.parentNode
        };
        f.M = function (a) {
            f.db(a, "none")
        };
        f.v = function (a, b) {
            f.db(a, b ? "none" : "")
        };
        f.of = function (b, a) {
            b.removeAttribute(a)
        };
        f.hf = function () {
            return q() && i < 10
        };
        f.lf = function (d, a) {
            if (a)
                d.style.clip = "rect(" + c.round(a.g || a.F || 0)
                        + "px " + c.round(a.m) + "px " + c.round(a.n)
                        + "px " + c.round(a.f || a.B || 0) + "px)";
            else if (a !== k) {
                var g = d.style.cssText, f = [
                        new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),
                        new RegExp(/[\s]*cliptop: .*?[;]?/i),
                        new RegExp(/[\s]*clipright: .*?[;]?/i),
                        new RegExp(/[\s]*clipbottom: .*?[;]?/i),
                        new RegExp(/[\s]*clipleft: .*?[;]?/i)], e = H(
                        g, f, "");
                b.Mb(d, e)
            }
        };
        f.X = function () {
            return +new Date
        };
        f.E = function (b, a) {
            b.appendChild(a)
        };
        f.Rb = function (b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        f.xb = function (b, a) {
            a = a || b.parentNode;
            a && a.removeChild(b)
        };
        f.de = function (a, b) {
            n(a, function (a) {
                f.xb(a, b)
            })
        };
        f.ec = function (a) {
            f.de(f.Gb(a, d), a)
        };
        f.ce = function (a, b) {
            var c = f.Id(a);
            b & 1 && f.C(a, (f.j(c) - f.j(a)) / 2);
            b & 2 && f.D(a, (f.l(c) - f.l(a)) / 2)
        };
        f.Xd = function (b, a) {
            return parseInt(b, a || 10)
        };
        f.Wd = p;
        f.kf = function (b, a) {
            var c = g.body;
            while (a && b !== a && c !== a)
                try {
                    a = a.parentNode
                } catch (d) {
                    return l
                }
            return b === a
        };
        function W(d, c, b) {
            var a = d.cloneNode(!c);
            !b && f.of(a, "id");
            return a
        }
        f.T = W;
        f.ub = function (e, g) {
            var a = new Image;
            function b(e, d) {
                f.N(a, "load", b);
                f.N(a, "abort", c);
                f.N(a, "error", c);
                g && g(a, d)
            }
            function c(a) {
                b(a, d)
            }
            if (ib() && i < 11.6 || !e)
                b(!e);
            else {
                f.a(a, "load", b);
                f.a(a, "abort", c);
                f.a(a, "error", c);
                a.src = e
            }
        };
        f.ee = function (d, a, e) {
            var c = d.length + 1;
            function b(b) {
                c--;
                if (a && b && b.src == a.src)
                    a = b;
                !c && e && e(a)
            }
            n(d, function (a) {
                f.ub(a.src, b)
            });
            b()
        };
        f.Mc = function (a, g, i, h) {
            if (h)
                a = W(a);
            var c = S(a, g);
            if (!c.length)
                c = b.Ve(a, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f], e = W(i);
                x(e, x(d));
                b.Mb(e, d.style.cssText);
                b.Rb(e, d);
                b.xb(d)
            }
            return a
        };
        function Gb(a) {
            var l = this, p = "", r = ["av", "pv", "ds", "dn"], e = [], q, j = 0, h = 0, d = 0;
            function i() {
                E(a, q, e[d || j || h & 2 || h]);
                b.S(a, "pointer-events", d ? "none" : "")
            }
            function c() {
                j = 0;
                i();
                f.N(g, "mouseup", c);
                f.N(g, "touchend", c);
                f.N(g, "touchcancel", c)
            }
            function o(a) {
                if (d)
                    f.Kb(a);
                else {
                    j = 4;
                    i();
                    f.a(g, "mouseup", c);
                    f.a(g, "touchend", c);
                    f.a(g, "touchcancel", c)
                }
            }
            l.Ic = function (a) {
                if (a === k)
                    return h;
                h = a & 2 || a & 1;
                i()
            };
            l.Hc = function (a) {
                if (a === k)
                    return !d;
                d = a ? 0 : 3;
                i()
            };
            l.lb = a = f.kb(a);
            var m = b.Oe(x(a));
            if (m)
                p = m.shift();
            n(r, function (a) {
                e.push(p + a)
            });
            q = bb(" ", e);
            e.unshift("");
            f.a(a, "mousedown", o);
            f.a(a, "touchstart", o)
        }
        f.Zb = function (a) {
            return new Gb(a)
        };
        f.S = D;
        f.eb = m("overflow");
        f.D = m("top", 2);
        f.C = m("left", 2);
        f.j = m("width", 2);
        f.l = m("height", 2);
        f.Nd = m("marginLeft", 2);
        f.Ld = m("marginTop", 2);
        f.z = m("position");
        f.db = m("display");
        f.I = m("zIndex", 1);
        f.Ab = function (b, a, c) {
            if (a != k)
                Fb(b, a, c);
            else
                return Db(b)
        };
        f.Mb = function (a, b) {
            if (b != k)
                a.style.cssText = b;
            else
                return a.style.cssText
        };
        var T = {
            u: f.Ab,
            g: f.D,
            f: f.C,
            Y: f.j,
            V: f.l,
            Db: f.z,
            Jf: f.db,
            P: f.I
        };
        function w(g, l) {
            var e = O(), b = J(), d = vb(), h = K(g);
            function i(b, d, a) {
                var e = b.fb(u(-d / 2, -a / 2)), f = b.fb(u(d / 2,
                        -a / 2)), g = b.fb(u(d / 2, a / 2)), h = b
                        .fb(u(-d / 2, a / 2));
                b.fb(u(300, 300));
                return u(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y,
                        f.y, g.y, h.y)
                        + a / 2)
            }
            function a(d, a) {
                a = a || {};
                var g = a.W || 0, l = (a.Q || 0) % 360, m = (a.R || 0) % 360, o = (a.O || 0) % 360, p = a.If;
                if (e) {
                    g = 0;
                    l = 0;
                    m = 0;
                    p = 0
                }
                var c = new Cb(a.jb, a.hb, g);
                c.Q(l);
                c.R(m);
                c.Jd(o);
                c.Vd(a.Yb, a.ac);
                c.Qb(a.o, a.q, p);
                if (b) {
                    c.mb(a.B, a.F);
                    d.style[h] = c.fe()
                } else if (!X || X < 9) {
                    var j = "";
                    if (o || a.o != k && a.o != 1 || a.q != k
                            && a.q != 1) {
                        var n = i(c, a.qb, a.pb);
                        f.Ld(d, n.y);
                        f.Nd(d, n.x);
                        j = c.he()
                    }
                    var r = d.style.filter, s = new RegExp(
                            /[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g), q = H(
                            r, [s], j);
                    tb(d, q)
                }
            }
            w = function (e, c) {
                c = c || {};
                var h = c.B, i = c.F, g;
                n(T, function (a, b) {
                    g = c[b];
                    g !== k && a(e, g)
                });
                f.lf(e, c.c);
                if (!b) {
                    h != k && f.C(e, (c.Ac || 0) + h);
                    i != k && f.D(e, (c.Bc || 0) + i)
                }
                if (c.ge)
                    if (d)
                        rb(f.G(j, M, e, c));
                    else
                        a(e, c)
            };
            f.Bb = M;
            if (d)
                f.Bb = w;
            if (e)
                f.Bb = a;
            else if (!b)
                a = M;
            f.K = w;
            w(g, l)
        }
        f.Bb = w;
        f.K = w;
        function Cb(i, l, p) {
            var d = this, b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,
                    i || 0, l || 0, p || 0, 1], h = c.sin, g = c.cos, m = c.tan;
            function f(a) {
                return a * c.PI / 180
            }
            function o(a, b) {
                return {
                    x: a,
                    y: b
                }
            }
            function n(c, e, l, m, o, r, t, u, w, z, A, C, E, b, f, k,
                    a, g, i, n, p, q, s, v, x, y, B, D, F, d, h, j) {
                return [c * a + e * p + l * x + m * F,
                        c * g + e * q + l * y + m * d,
                        c * i + e * s + l * B + m * h,
                        c * n + e * v + l * D + m * j,
                        o * a + r * p + t * x + u * F,
                        o * g + r * q + t * y + u * d,
                        o * i + r * s + t * B + u * h,
                        o * n + r * v + t * D + u * j,
                        w * a + z * p + A * x + C * F,
                        w * g + z * q + A * y + C * d,
                        w * i + z * s + A * B + C * h,
                        w * n + z * v + A * D + C * j,
                        E * a + b * p + f * x + k * F,
                        E * g + b * q + f * y + k * d,
                        E * i + b * s + f * B + k * h,
                        E * n + b * v + f * D + k * j]
            }
            function e(c, a) {
                return n.apply(j, (a || b).concat(c))
            }
            d.Qb = function (a, c, d) {
                if (a == k)
                    a = 1;
                if (c == k)
                    c = 1;
                if (d == k)
                    d = 1;
                if (a != 1 || c != 1 || d != 1)
                    b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0,
                            0, 1])
            };
            d.mb = function (a, c, d) {
                b[12] += a || 0;
                b[13] += c || 0;
                b[14] += d || 0
            };
            d.Q = function (c) {
                if (c) {
                    a = f(c);
                    var d = g(a), i = h(a);
                    b = e([1, 0, 0, 0, 0, d, i, 0, 0, -i, d, 0, 0, 0,
                            0, 1])
                }
            };
            d.R = function (c) {
                if (c) {
                    a = f(c);
                    var d = g(a), i = h(a);
                    b = e([d, 0, -i, 0, 0, 1, 0, 0, i, 0, d, 0, 0, 0,
                            0, 1])
                }
            };
            d.Jd = function (c) {
                if (c) {
                    a = f(c);
                    var d = g(a), i = h(a);
                    b = e([d, i, 0, 0, -i, d, 0, 0, 0, 0, 1, 0, 0, 0,
                            0, 1])
                }
            };
            d.Vd = function (a, c) {
                if (a || c) {
                    i = f(a);
                    l = f(c);
                    b = e([1, m(l), 0, 0, m(i), 1, 0, 0, 0, 0, 1, 0,
                            0, 0, 0, 1])
                }
            };
            d.fb = function (c) {
                var a = e(b, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x,
                        c.y, 0, 1]);
                return o(a[12], a[13])
            };
            d.fe = function () {
                return "matrix3d(" + b.join(",") + ")"
            };
            d.he = function () {
                return "progid:DXImageTransform.Microsoft.Matrix(M11="
                        + b[0] + ", M12=" + b[4] + ", M21=" + b[1]
                        + ", M22=" + b[5]
                        + ", SizingMethod='auto expand')"
            }
        }
        new function () {
            var a = this;
            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
                    for (var k = f[c] = [], b = 0; b < h; b++) {
                        for (var e = 0, a = 0; a < j; a++)
                            e += d[c][a] * g[a][b];
                        k[b] = e
                    }
                return f
            }
            a.o = function (b, c) {
                return a.Dc(b, c, 0)
            };
            a.q = function (b, c) {
                return a.Dc(b, 0, c)
            };
            a.Dc = function (a, c, d) {
                return b(a, [[c, 0], [0, d]])
            };
            a.fb = function (d, c) {
                var a = b(d, [[c.x], [c.y]]);
                return u(a[0][0], a[1][0])
            }
        };
        var N = {
            Ac: 0,
            Bc: 0,
            B: 0,
            F: 0,
            H: 1,
            o: 1,
            q: 1,
            O: 0,
            Q: 0,
            R: 0,
            jb: 0,
            hb: 0,
            W: 0,
            Yb: 0,
            ac: 0
        };
        f.Ec = function (a) {
            var c = a || {};
            if (a)
                if (b.Jc(a))
                    c = {
                        qc: c
                    };
                else if (b.Jc(a.c))
                    c.c = {
                        qc: a.c
                    };
            return c
        };
        f.Oc = function (l, m, x, q, z, A, n) {
            var a = m;
            if (l) {
                a = {};
                for (var g in m) {
                    var B = A[g] || 1, w = z[g] || [0, 1], f = (x - w[0])
                            / w[1];
                    f = c.min(c.max(f, 0), 1);
                    f = f * B;
                    var u = c.floor(f);
                    if (f != u)
                        f -= u;
                    var h = q.qc || e.vd, i, C = l[g], o = m[g];
                    if (b.Gc(o)) {
                        h = q[g] || h;
                        var y = h(f);
                        i = C + o * y
                    } else {
                        i = b.r({
                            Sb: {}
                        }, l[g]);
                        var v = q[g] || {};
                        b.e(o.Sb || o, function (d, a) {
                            h = v[a] || v.qc || h;
                            var c = h(f), b = d * c;
                            i.Sb[a] = b;
                            i[a] += b
                        })
                    }
                    a[g] = i
                }
                var t = b.e(m, function (b, a) {
                    return N[a] != k
                });
                t && b.e(N, function (c, b) {
                    if (a[b] == k && l[b] !== k)
                        a[b] = l[b]
                });
                if (t) {
                    if (a.H)
                        a.o = a.q = a.H;
                    a.qb = n.qb;
                    a.pb = n.pb;
                    a.ge = d
                }
            }
            if (m.c && n.mb) {
                var p = a.c.Sb, s = (p.g || 0) + (p.n || 0), r = (p.f || 0)
                        + (p.m || 0);
                a.f = (a.f || 0) + r;
                a.g = (a.g || 0) + s;
                a.c.f -= r;
                a.c.m -= r;
                a.c.g -= s;
                a.c.n -= s
            }
            if (a.c && b.hf() && !a.c.g && !a.c.f && !a.c.F && !a.c.B
                    && a.c.m == n.qb && a.c.n == n.pb)
                a.c = j;
            return a
        }
    };
    function n() {
        var a = this, d = [];
        function i(a, b) {
            d.push({
                sc: a,
                uc: b
            })
        }
        function g(a, c) {
            b.e(d, function (b, e) {
                b.sc == a && b.uc === c && d.splice(e, 1)
            })
        }
        a.vb = a.addEventListener = i;
        a.removeEventListener = g;
        a.i = function (a) {
            var c = [].slice.call(arguments, 1);
            b.e(d, function (b) {
                b.sc == a && b.uc.apply(h, c)
            })
        }
    }
    var m = function (z, C, i, J, M, L) {
        z = z || 0;
        var a = this, q, n, o, u, A = 0, G, H, F, B, y = 0, g = 0, m = 0, D, k, f, e, p, w = [], x;
        function O(a) {
            f += a;
            e += a;
            k += a;
            g += a;
            m += a;
            y += a
        }
        function t(o) {
            var h = o;
            if (p && (h >= e || h <= f))
                h = ((h - f) % p + p) % p + f;
            if (!D || u || g != h) {
                var j = c.min(h, e);
                j = c.max(j, f);
                if (!D || u || j != m) {
                    if (L) {
                        var l = (j - k) / (C || 1);
                        if (i.Wc)
                            l = 1 - l;
                        var n = b.Oc(M, L, l, G, F, H, i);
                        if (x)
                            b.e(n, function (b, a) {
                                x[a] && x[a](J, b)
                            });
                        else
                            b.K(J, n)
                    }
                    a.xc(m - k, j - k);
                    m = j;
                    b.e(w, function (b, c) {
                        var a = o < g ? w[w.length - c - 1] : b;
                        a.bb(m - y)
                    });
                    var r = g, q = m;
                    g = h;
                    D = d;
                    a.Ob(r, q)
                }
            }
        }
        function E(a, b, d) {
            b && a.Eb(e);
            if (!d) {
                f = c.min(f, a.Zc() + y);
                e = c.max(e, a.jc() + y)
            }
            w.push(a)
        }
        var r = h.requestAnimationFrame
                || h.webkitRequestAnimationFrame
                || h.mozRequestAnimationFrame
                || h.msRequestAnimationFrame;
        if (b.nf() && b.Cd() < 7)
            r = j;
        r = r || function (a) {
            b.Vb(a, i.Z)
        };
        function I() {
            if (q) {
                var d = b.X(), e = c.min(d - A, i.Qc), a = g + e * o;
                A = d;
                if (a * o >= n * o)
                    a = n;
                t(a);
                if (!u && a * o >= n * o)
                    K(B);
                else
                    r(I)
            }
        }
        function s(h, i, j) {
            if (!q) {
                q = d;
                u = j;
                B = i;
                h = c.max(h, f);
                h = c.min(h, e);
                n = h;
                o = n < g ? -1 : 1;
                a.Uc();
                A = b.X();
                r(I)
            }
        }
        function K(b) {
            if (q) {
                u = q = B = l;
                a.Yc();
                b && b()
            }
        }
        a.Vc = function (a, b, c) {
            s(a ? g + a : e, b, c)
        };
        a.Tc = s;
        a.ob = K;
        a.je = function (a) {
            s(a)
        };
        a.cb = function () {
            return g
        };
        a.Kc = function () {
            return n
        };
        a.yb = function () {
            return m
        };
        a.bb = t;
        a.mb = function (a) {
            t(g + a)
        };
        a.Cc = function () {
            return q
        };
        a.ae = function (a) {
            p = a
        };
        a.Eb = O;
        a.bd = function (a, b) {
            E(a, 0, b)
        };
        a.bc = function (a) {
            E(a, 1)
        };
        a.Zc = function () {
            return f
        };
        a.jc = function () {
            return e
        };
        a.Ob = a.Uc = a.Yc = a.xc = b.Sc;
        a.hc = b.X();
        i = b.r({
            Z: 16,
            Qc: 50
        }, i);
        p = i.ad;
        x = i.le;
        f = k = z;
        e = z + C;
        H = i.Nc || {};
        F = i.vc || {};
        G = b.Ec(i.L)
    };
    var p = new function () {
        var h = this;
        function g(b, a, c) {
            c.push(a);
            b[a] = b[a] || [];
            b[a].push(c)
        }
        h.Fe = function (d) {
            for (var e = [], a, b = 0; b < d.ab; b++)
                for (a = 0; a < d.p; a++)
                    g(e, c.ceil(1e5 * c.random()) % 13, [b, a]);
            return e
        }
    }, t = function (k, s, q, u, z) {
        var f = this, v, g, a, y = 0, x = u.sf, r, h = 8;
        function t(a) {
            if (a.g)
                a.F = a.g;
            if (a.f)
                a.B = a.f;
            b.e(a, function (a) {
                b.bf(a) && t(a)
            })
        }
        function i(g, f) {
            var a = {
                Z: f,
                Ib: 1,
                Vb: 0,
                p: 1,
                ab: 1,
                u: 0,
                H: 0,
                c: 0,
                mb: l,
                Lb: l,
                Wc: l,
                Je: p.Fe,
                Lc: {
                    Se: 0,
                    Ze: 0
                },
                L: e.vd,
                Nc: {},
                Nb: [],
                vc: {}
            };
            b.r(a, g);
            t(a);
            a.L = b.Ec(a.L);
            a.df = c.ceil(a.Ib / a.Z);
            a.gf = function (c, b) {
                c /= a.p;
                b /= a.ab;
                var f = c + "x" + b;
                if (!a.Nb[f]) {
                    a.Nb[f] = {
                        Y: c,
                        V: b
                    };
                    for (var d = 0; d < a.p; d++)
                        for (var e = 0; e < a.ab; e++)
                            a.Nb[f][e + "," + d] = {
                                g: e * b,
                                m: d * c + c,
                                n: e * b + b,
                                f: d * c
                            }
                }
                return a.Nb[f]
            };
            if (a.dc) {
                a.dc = i(a.dc, f);
                a.Lb = d
            }
            return a
        }
        function o(B, h, a, w, o, m) {
            var z = this, u, v = {}, i = {}, n = [], f, e, s, q = a.Lc.Se || 0, r = a.Lc.Ze || 0, g = a
                    .gf(o, m), p = C(a), D = p.length - 1, t = a.Ib
                    + a.Vb * D, x = w + t, k = a.Lb, y;
            x += 50;
            function C(a) {
                var b = a.Je(a);
                return a.Wc ? b.reverse() : b
            }
            z.Rc = x;
            z.Jb = function (d) {
                d -= w;
                var e = d < t;
                if (e || y) {
                    y = e;
                    if (!k)
                        d = t - d;
                    var f = c.ceil(d / a.Z);
                    b.e(i, function (a, e) {
                        var d = c.max(f, a.Ie);
                        d = c.min(d, a.length - 1);
                        if (a.zc != d) {
                            if (!a.zc && !k)
                                b.v(n[e]);
                            else
                                d == a.mf && k && b.M(n[e]);
                            a.zc = d;
                            b.K(n[e], a[d])
                        }
                    })
                }
            };
            h = b.T(h);
            b.Bb(h, j);
            if (b.ib()) {
                var E = !h["no-image"], A = b.Re(h);
                b.e(A, function (a) {
                    (E || a["jssor-slider"]) && b.Ab(a, b.Ab(a), d)
                })
            }
            b
                    .e(
                            p,
                            function (h, j) {
                                b
                                        .e(
                                                h,
                                                function (G) {
                                                    var K = G[0], J = G[1], t = K
                                                            + "," + J, n = l, p = l, x = l;
                                                    if (q && J % 2) {
                                                        if (q & 3)
                                                            n = !n;
                                                        if (q & 12)
                                                            p = !p;
                                                        if (q & 16)
                                                            x = !x
                                                    }
                                                    if (r && K % 2) {
                                                        if (r & 3)
                                                            n = !n;
                                                        if (r & 12)
                                                            p = !p;
                                                        if (r & 16)
                                                            x = !x
                                                    }
                                                    a.g = a.g || a.c
                                                            & 4;
                                                    a.n = a.n || a.c
                                                            & 8;
                                                    a.f = a.f || a.c
                                                            & 1;
                                                    a.m = a.m || a.c
                                                            & 2;
                                                    var E = p ? a.n
                                                            : a.g, B = p ? a.g
                                                            : a.n, D = n ? a.m
                                                            : a.f, C = n ? a.f
                                                            : a.m;
                                                    a.c = E || B || D
                                                            || C;
                                                    s = {};
                                                    e = {
                                                        F: 0,
                                                        B: 0,
                                                        u: 1,
                                                        Y: o,
                                                        V: m
                                                    };
                                                    f = b.r({}, e);
                                                    u = b.r({}, g[t]);
                                                    if (a.u)
                                                        e.u = 2 - a.u;
                                                    if (a.P) {
                                                        e.P = a.P;
                                                        f.P = 0
                                                    }
                                                    var I = a.p * a.ab > 1
                                                            || a.c;
                                                    if (a.H || a.O) {
                                                        var H = d;
                                                        if (b.ib())
                                                            if (a.p
                                                                    * a.ab > 1)
                                                                H = l;
                                                            else
                                                                I = l;
                                                        if (H) {
                                                            e.H = a.H ? a.H - 1
                                                                    : 1;
                                                            f.H = 1;
                                                            if (b.ib()
                                                                    || b
                                                                            .Hd())
                                                                e.H = c
                                                                        .min(
                                                                                e.H,
                                                                                2);
                                                            var N = a.O || 0;
                                                            e.O = N
                                                                    * 360
                                                                    * (x ? -1
                                                                            : 1);
                                                            f.O = 0
                                                        }
                                                    }
                                                    if (I) {
                                                        var h = u.Sb = {};
                                                        if (a.c) {
                                                            var w = a.Cf || 1;
                                                            if (E && B) {
                                                                h.g = g.V
                                                                        / 2
                                                                        * w;
                                                                h.n = -h.g
                                                            } else if (E)
                                                                h.n = -g.V
                                                                        * w;
                                                            else if (B)
                                                                h.g = g.V
                                                                        * w;
                                                            if (D && C) {
                                                                h.f = g.Y
                                                                        / 2
                                                                        * w;
                                                                h.m = -h.f
                                                            } else if (D)
                                                                h.m = -g.Y
                                                                        * w;
                                                            else if (C)
                                                                h.f = g.Y
                                                                        * w
                                                        }
                                                        s.c = u;
                                                        f.c = g[t]
                                                    }
                                                    var L = n ? 1 : -1, M = p ? 1
                                                            : -1;
                                                    if (a.x)
                                                        e.B += o * a.x
                                                                * L;
                                                    if (a.y)
                                                        e.F += m * a.y
                                                                * M;
                                                    b
                                                            .e(
                                                                    e,
                                                                    function (
                                                                            a,
                                                                            c) {
                                                                        if (b
                                                                                .Gc(a))
                                                                            if (a != f[c])
                                                                                s[c] = a
                                                                                        - f[c]
                                                                    });
                                                    v[t] = k ? f : e;
                                                    var F = a.df, A = c
                                                            .round(j
                                                                    * a.Vb
                                                                    / a.Z);
                                                    i[t] = new Array(A);
                                                    i[t].Ie = A;
                                                    i[t].mf = A + F - 1;
                                                    for (var z = 0; z <= F; z++) {
                                                        var y = b
                                                                .Oc(
                                                                        f,
                                                                        s,
                                                                        z
                                                                                / F,
                                                                        a.L,
                                                                        a.vc,
                                                                        a.Nc,
                                                                        {
                                                                            mb: a.mb,
                                                                            qb: o,
                                                                            pb: m
                                                                        });
                                                        y.P = y.P || 1;
                                                        i[t].push(y)
                                                    }
                                                })
                            });
            p.reverse();
            b.e(p, function (a) {
                b.e(a, function (c) {
                    var f = c[0], e = c[1], d = f + "," + e, a = h;
                    if (e || f)
                        a = b.T(h);
                    b.K(a, v[d]);
                    b.eb(a, "hidden");
                    b.z(a, "absolute");
                    B.xf(a);
                    n[d] = a;
                    b.v(a, !k)
                })
            })
        }
        function w() {
            var b = this, c = 0;
            m.call(b, 0, v);
            b.Ob = function (d, b) {
                if (b - c > h) {
                    c = b;
                    a && a.Jb(b);
                    g && g.Jb(b)
                }
            };
            b.Xc = r
        }
        f.cf = function () {
            var a = 0, b = u.rb, d = b.length;
            if (x)
                a = y++ % d;
            else
                a = c.floor(c.random() * d);
            b[a] && (b[a].nb = a);
            return b[a]
        };
        f.Yd = function (w, x, l, m, b) {
            r = b;
            b = i(b, h);
            var j = m.Fd, e = l.Fd;
            j["no-image"] = !m.Tb;
            e["no-image"] = !l.Tb;
            var n = j, p = e, u = b, d = b.dc || i({}, h);
            if (!b.Lb) {
                n = e;
                p = j
            }
            var t = d.Eb || 0;
            g = new o(k, p, d, c.max(t - d.Z, 0), s, q);
            a = new o(k, n, u, c.max(d.Z - t, 0), s, q);
            g.Jb(0);
            a.Jb(0);
            v = c.max(g.Rc, a.Rc);
            f.nb = w
        };
        f.zb = function () {
            k.zb();
            g = j;
            a = j
        };
        f.ye = function () {
            var b = j;
            if (a)
                b = new w;
            return b
        };
        if (b.ib() || b.Hd() || z && b.we() < 537)
            h = 16;
        n.call(f);
        m.call(f, -1e7, 1e7)
    }, i = function (p, fc) {
        var f = this;
        function Bc() {
            var a = this;
            m.call(a, -1e8, 2e8);
            a.Be = function () {
                var b = a.yb(), d = c.floor(b), f = t(d), e = b
                        - c.floor(b);
                return {
                    nb: f,
                    tf: d,
                    Db: e
                }
            };
            a.Ob = function (b, a) {
                var e = c.floor(a);
                if (e != a && a > b)
                    e++;
                Ub(e, d);
                f.i(i.zf, t(a), t(b), a, b)
            }
        }
        function Ac() {
            var a = this;
            m.call(a, 0, 0, {
                ad: q
            });
            b.e(C, function (b) {
                D & 1 && b.ae(q);
                a.bc(b);
                b.Eb(ib / bc)
            })
        }
        function zc() {
            var a = this, b = Tb.lb;
            m.call(a, -1, 2, {
                L: e.ud,
                le: {
                    Db: Zb
                },
                ad: q
            }, b, {
                Db: 1
            }, {
                Db: -2
            });
            a.Pb = b
        }
        function nc(o, n) {
            var b = this, e, g, h, k, c;
            m.call(b, -1e8, 2e8, {
                Qc: 100
            });
            b.Uc = function () {
                M = d;
                R = j;
                f.i(i.ff, t(w.cb()), w.cb())
            };
            b.Yc = function () {
                M = l;
                k = l;
                var a = w.Be();
                f.i(i.ef, t(w.cb()), w.cb());
                !a.Db && Dc(a.tf, s)
            };
            b.Ob = function (i, f) {
                var b;
                if (k)
                    b = c;
                else {
                    b = g;
                    if (h) {
                        var d = f / h;
                        b = a.Le(d) * (g - e) + e
                    }
                }
                w.bb(b)
            };
            b.Hb = function (a, d, c, f) {
                e = a;
                g = d;
                h = c;
                w.bb(a);
                b.bb(0);
                b.Tc(c, f)
            };
            b.Me = function (a) {
                k = d;
                c = a;
                b.Vc(a, j, d)
            };
            b.Ne = function (a) {
                c = a
            };
            w = new Bc;
            w.bd(o);
            w.bd(n)
        }
        function pc() {
            var c = this, a = Xb();
            b.I(a, 0);
            b.S(a, "pointerEvents", "none");
            c.lb = a;
            c.xf = function (c) {
                b.E(a, c);
                b.v(a)
            };
            c.zb = function () {
                b.M(a);
                b.ec(a)
            }
        }
        function xc(o, g) {
            var e = this, r, L, v, k, y = [], x, B, W, G, Q, F, h, w, p;
            m.call(e, -u, u + 1, {});
            function E(a) {
                r && r.nd();
                T(o, a, 0);
                F = d;
                r = new I.J(o, I, b.Wd(b.k(o, "idle")) || lc);
                r.bb(0)
            }
            function Z() {
                r.hc < I.hc && E()
            }
            function M(p, r, o) {
                if (!G) {
                    G = d;
                    if (k && o) {
                        var h = o.width, c = o.height, n = h, m = c;
                        if (h && c && a.Cb) {
                            if (a.Cb & 3
                                    && (!(a.Cb & 4) || h > K || c > J)) {
                                var j = l, q = K / J * c / h;
                                if (a.Cb & 1)
                                    j = q > 1;
                                else if (a.Cb & 2)
                                    j = q < 1;
                                n = j ? h * J / c : K;
                                m = j ? J : c * K / h
                            }
                            b.j(k, n);
                            b.l(k, m);
                            b.D(k, (J - m) / 2);
                            b.C(k, (K - n) / 2)
                        }
                        b.z(k, "absolute");
                        f.i(i.af, g)
                    }
                }
                b.M(r);
                p && p(e)
            }
            function Y(b, c, d, f) {
                if (f == R && s == g && N)
                    if (!Cc) {
                        var a = t(b);
                        A.Yd(a, g, c, e, d);
                        c.Ke();
                        U.Eb(a - U.Zc() - 1);
                        U.bb(a);
                        z.Hb(b, b, 0)
                    }
            }
            function cb(b) {
                if (b == R && s == g) {
                    if (!h) {
                        var a = j;
                        if (A)
                            if (A.nb == g)
                                a = A.ye();
                            else
                                A.zb();
                        Z();
                        h = new vc(o, g, a, r);
                        h.dd(p)
                    }
                    !h.Cc() && h.ic()
                }
            }
            function S(d, f, l) {
                if (d == g) {
                    if (d != f)
                        C[f] && C[f].Xe();
                    else
                        !l && h && h.He();
                    p && p.Hc();
                    var m = R = b.X();
                    e.ub(b.G(j, cb, m))
                } else {
                    var k = c.min(g, d), i = c.max(g, d), o = c.min(i
                            - k, k + q - i), n = u + a.Ue - 1;
                    (!Q || o <= n) && e.ub()
                }
            }
            function db() {
                if (s == g && h) {
                    h.ob();
                    p && p.Te();
                    p && p.Qe();
                    h.ed()
                }
            }
            function eb() {
                s == g && h && h.ob()
            }
            function ab(a) {
                !P && f.i(i.yf, g, a)
            }
            function O() {
                p = w.pInstance;
                h && h.dd(p)
            }
            e.ub = function (c, a) {
                a = a || v;
                if (y.length && !G) {
                    b.v(a);
                    if (!W) {
                        W = d;
                        f.i(i.wf, g);
                        b.e(y, function (a) {
                            if (!b.s(a, "src")) {
                                a.src = b.k(a, "src2");
                                b.db(a, a["display-origin"])
                            }
                        })
                    }
                    b.ee(y, k, b.G(j, M, c, a))
                } else
                    M(c, a)
            };
            e.Af = function () {
                var h = g;
                if (a.fd < 0)
                    h -= q;
                var d = h + a.fd * tc;
                if (D & 2)
                    d = t(d);
                if (!(D & 1))
                    d = c.max(0, c.min(d, q - u));
                if (d != g) {
                    if (A) {
                        var e = A.cf(q);
                        if (e) {
                            var i = R = b.X(), f = C[t(d)];
                            return f.ub(b.G(j, Y, d, f, e, i), v)
                        }
                    }
                    bb(d)
                }
            };
            e.yc = function () {
                S(g, g, d)
            };
            e.Xe = function () {
                p && p.Te();
                p && p.Qe();
                e.gd();
                h && h.rf();
                h = j;
                E()
            };
            e.Ke = function () {
                b.M(o)
            };
            e.gd = function () {
                b.v(o)
            };
            e.jf = function () {
                p && p.Hc()
            };
            function T(a, c, e) {
                if (b.s(a, "jssor-slider"))
                    return;
                if (!F) {
                    if (a.tagName == "IMG") {
                        y.push(a);
                        if (!b.s(a, "src")) {
                            Q = d;
                            a["display-origin"] = b.db(a);
                            b.M(a)
                        }
                    }
                    b.ib() && b.I(a, (b.I(a) || 0) + 1)
                }
                var f = b.Gb(a);
                b.e(f,
                        function (f) {
                            var h = f.tagName, i = b.k(f, "u");
                            if (i == "player" && !w) {
                                w = f;
                                if (w.pInstance)
                                    O();
                                else
                                    b.a(w, "dataavailable", O)
                            }
                            if (i == "caption") {
                                if (c) {
                                    b.Pc(f, b.k(f, "to"));
                                    b.se(f, b.k(f, "bf"));
                                    b.k(f, "3d")
                                            && b.Qd(f, "preserve-3d")
                                } else if (!b.Ed()) {
                                    var g = b.T(f, l, d);
                                    b.Rb(g, f, a);
                                    b.xb(f, a);
                                    f = g;
                                    c = d
                                }
                            } else if (!F && !e && !k) {
                                if (h == "A") {
                                    if (b.k(f, "u") == "image")
                                        k = b.Pe(f, "IMG");
                                    else
                                        k = b.A(f, "image", d);
                                    if (k) {
                                        x = f;
                                        b.db(x, "block");
                                        b.K(x, V);
                                        B = b.T(x, d);
                                        b.z(x, "relative");
                                        b.Ab(B, 0);
                                        b.S(B, "backgroundColor",
                                                "#000")
                                    }
                                } else if (h == "IMG"
                                        && b.k(f, "u") == "image")
                                    k = f;
                                if (k) {
                                    k.border = 0;
                                    b.K(k, V)
                                }
                            }
                            T(f, c, e + 1)
                        })
            }
            e.xc = function (c, b) {
                var a = u - b;
                Zb(L, a)
            };
            e.nb = g;
            n.call(e);
            b.Rd(o, b.k(o, "p"));
            b.Ge(o, b.k(o, "po"));
            var H = b.A(o, "thumb", d);
            if (H) {
                e.pf = b.T(H);
                b.M(H)
            }
            b.v(o);
            v = b.T(fb);
            b.I(v, 1e3);
            b.a(o, "click", ab);
            E(d);
            e.Tb = k;
            e.hd = B;
            e.Fd = o;
            e.Pb = L = o;
            b.E(L, v);
            f.vb(203, S);
            f.vb(28, eb);
            f.vb(24, db)
        }
        function vc(y, g, p, q) {
            var a = this, n = 0, u = 0, h, j, e, c, k, t, r, o = C[g];
            m.call(a, 0, 0);
            function v() {
                b.ec(L);
                cc && k && o.hd && b.E(L, o.hd);
                b.v(L, !k && o.Tb)
            }
            function w() {
                a.ic()
            }
            function x(b) {
                r = b;
                a.ob();
                a.ic()
            }
            a.ic = function () {
                var b = a.yb();
                if (!B && !M && !r && s == g) {
                    if (!b) {
                        if (h && !k) {
                            k = d;
                            a.ed(d);
                            f.i(i.uf, g, n, u, h, c)
                        }
                        v()
                    }
                    var l, p = i.id;
                    if (b != c)
                        if (b == e)
                            l = c;
                        else if (b == j)
                            l = e;
                        else if (!b)
                            l = j;
                        else
                            l = a.Kc();
                    f.i(p, g, b, n, j, e, c);
                    var m = N && (!E || F);
                    if (b == c)
                        (e != c && !(E & 12) || m) && o.Af();
                    else 
								(m || b != e) && a.Tc(l, w)
                }
            };
            a.He = function () {
                e == c && e == a.yb() && a.bb(j)
            };
            a.rf = function () {
                A && A.nb == g && A.zb();
                var b = a.yb();
                b < c && f.i(i.id, g, -b - 1, n, j, e, c)
            };
            a.ed = function (a) {
                p && b.eb(jb, a && p.Xc.Hf ? "" : "hidden")
            };
            a.xc = function (b, a) {
                if (k && a >= h) {
                    k = l;
                    v();
                    o.gd();
                    A.zb();
                    f.i(i.We, g, n, u, h, c)
                }
                f.i(i.Ce, g, a, n, j, e, c)
            };
            a.dd = function (a) {
                if (a && !t) {
                    t = a;
                    a.vb($JssorPlayer$.ve, x)
                }
            };
            p && a.bc(p);
            h = a.jc();
            a.bc(q);
            j = h + q.jd;
            e = h + q.kd;
            c = a.jc()
        }
        function Kb(a, c, d) {
            b.C(a, c);
            b.D(a, d)
        }
        function Zb(c, b) {
            var a = x > 0 ? x : eb, d = zb * b * (a & 1), e = Ab * b
                    * (a >> 1 & 1);
            Kb(c, d, e)
        }
        function Pb() {
            pb = M;
            Ib = z.Kc();
            G = w.cb()
        }
        function gc() {
            Pb();
            if (B || !F && E & 12) {
                z.ob();
                f.i(i.Zd)
            }
        }
        function ec(f) {
            if (!B && (F || !(E & 12)) && !z.Cc()) {
                var d = w.cb(), b = c.ceil(G);
                if (f && c.abs(H) >= a.Ad) {
                    b = c.ceil(d);
                    b += hb
                }
                if (!(D & 1))
                    b = c.min(q - u, c.max(b, 0));
                var e = c.abs(b - d);
                e = 1 - c.pow(1 - e, 5);
                if (!P && pb)
                    z.je(Ib);
                else if (d == b) {
                    sb.jf();
                    sb.yc()
                } else
                    z.Hb(d, b, e * Vb)
            }
        }
        function Hb(a) {
            !b.k(b.cc(a), "nodrag") && b.Kb(a)
        }
        function rc(a) {
            Yb(a, 1)
        }
        function Yb(a, c) {
            a = b.Dd(a);
            var k = b.cc(a);
            if (!O && !b.k(k, "nodrag") && sc()
                    && (!c || a.touches.length == 1)) {
                B = d;
                yb = l;
                R = j;
                b.a(g, c ? "touchmove" : "mousemove", Bb);
                b.X();
                P = 0;
                gc();
                if (!pb)
                    x = 0;
                if (c) {
                    var h = a.touches[0];
                    ub = h.clientX;
                    vb = h.clientY
                } else {
                    var e = b.cd(a);
                    ub = e.x;
                    vb = e.y
                }
                H = 0;
                gb = 0;
                hb = 0;
                f.i(i.Td, t(G), G, a)
            }
        }
        function Bb(e) {
            if (B) {
                e = b.Dd(e);
                var f;
                if (e.type != "mousemove") {
                    var l = e.touches[0];
                    f = {
                        x: l.clientX,
                        y: l.clientY
                    }
                } else
                    f = b.cd(e);
                if (f) {
                    var j = f.x - ub, k = f.y - vb;
                    if (c.floor(G) != G)
                        x = x || eb & O;
                    if ((j || k) && !x) {
                        if (O == 3)
                            if (c.abs(k) > c.abs(j))
                                x = 2;
                            else
                                x = 1;
                        else
                            x = O;
                        if (mb && x == 1 && c.abs(k) - c.abs(j) > 3)
                            yb = d
                    }
                    if (x) {
                        var a = k, i = Ab;
                        if (x == 1) {
                            a = j;
                            i = zb
                        }
                        if (!(D & 1)) {
                            if (a > 0) {
                                var g = i * s, h = a - g;
                                if (h > 0)
                                    a = g + c.sqrt(h) * 5
                            }
                            if (a < 0) {
                                var g = i * (q - u - s), h = -a - g;
                                if (h > 0)
                                    a = -g - c.sqrt(h) * 5
                            }
                        }
                        if (H - gb < -2)
                            hb = 0;
                        else if (H - gb > 2)
                            hb = -1;
                        gb = H;
                        H = a;
                        rb = G - H / i / (Y || 1);
                        if (H && x && !yb) {
                            b.Kb(e);
                            if (!M)
                                z.Me(rb);
                            else
                                z.Ne(rb)
                        }
                    }
                }
            }
        }
        function ab() {
            qc();
            if (B) {
                B = l;
                b.X();
                b.N(g, "mousemove", Bb);
                b.N(g, "touchmove", Bb);
                P = H;
                z.ob();
                var a = w.cb();
                f.i(i.Ud, t(a), a, t(G), G);
                E & 12 && Pb();
                ec(d)
            }
        }
        function jc(c) {
            if (P) {
                b.vf(c);
                var a = b.cc(c);
                while (a && v !== a) {
                    a.tagName == "A" && b.Kb(c);
                    try {
                        a = a.parentNode
                    } catch (d) {
                        break
                    }
                }
            }
        }
        function Jb(a) {
            C[s];
            s = t(a);
            sb = C[s];
            Ub(a);
            return s
        }
        function Dc(a, b) {
            x = 0;
            Jb(a);
            f.i(i.Md, t(a), b)
        }
        function Ub(a, c) {
            wb = a;
            b.e(S, function (b) {
                b.pc(t(a), a, c)
            })
        }
        function sc() {
            var b = i.ld || 0, a = X;
            if (mb)
                a & 1 && (a &= 1);
            i.ld |= a;
            return O = a & ~b
        }
        function qc() {
            if (O) {
                i.ld &= ~X;
                O = 0
            }
        }
        function Xb() {
            var a = b.gb();
            b.K(a, V);
            b.z(a, "absolute");
            return a
        }
        function t(a) {
            return (a % q + q) % q
        }
        function kc(b, d) {
            if (d)
                if (!D) {
                    b = c.min(c.max(b + wb, 0), q - u);
                    d = l
                } else if (D & 2) {
                    b = t(b + wb);
                    d = l
                }
            bb(b, a.oc, d)
        }
        function xb() {
            b.e(S, function (a) {
                a.wc(a.Wb.Gf <= F)
            })
        }
        function hc() {
            if (!F) {
                F = 1;
                xb();
                if (!B) {
                    E & 12 && ec();
                    E & 3 && C[s].yc()
                }
            }
        }
        function Ec() {
            if (F) {
                F = 0;
                xb();
                B || !(E & 12) || gc()
            }
        }
        function ic() {
            V = {
                Y: K,
                V: J,
                g: 0,
                f: 0
            };
            b.e(T, function (a) {
                b.K(a, V);
                b.z(a, "absolute");
                b.eb(a, "hidden");
                b.M(a)
            });
            b.K(fb, V)
        }
        function ob(b, a) {
            bb(b, a, d)
        }
        function bb(g, f, j) {
            if (Rb && (!B && (F || !(E & 12)) || a.md)) {
                M = d;
                B = l;
                z.ob();
                if (f == k)
                    f = Vb;
                var e = Cb.yb(), b = g;
                if (j) {
                    b = e + g;
                    if (g > 0)
                        b = c.ceil(b);
                    else
                        b = c.floor(b)
                }
                if (D & 2)
                    b = t(b);
                if (!(D & 1))
                    b = c.max(0, c.min(b, q - u));
                var i = (b - e) % q;
                b = e + i;
                var h = e == b ? 0 : f * c.abs(i);
                h = c.min(h, f * u * 1.5);
                z.Hb(e, b, h || 1)
            }
        }
        f.Pd = bb;
        f.Vc = function () {
            if (!N) {
                N = d;
                C[s] && C[s].yc()
            }
        };
        f.De = function () {
            return P
        };
        function W() {
            return b.j(y || p)
        }
        function lb() {
            return b.l(y || p)
        }
        f.qb = W;
        f.pb = lb;
        function Eb(c, d) {
            if (c == k)
                return b.j(p);
            if (!y) {
                var a = b.gb(g);
                b.Fc(a, b.Fc(p));
                b.Mb(a, b.Mb(p));
                b.db(a, "block");
                b.z(a, "relative");
                b.D(a, 0);
                b.C(a, 0);
                b.eb(a, "visible");
                y = b.gb(g);
                b.z(y, "absolute");
                b.D(y, 0);
                b.C(y, 0);
                b.j(y, b.j(p));
                b.l(y, b.l(p));
                b.Pc(y, "0 0");
                b.E(y, a);
                var h = b.Gb(p);
                b.E(p, y);
                b.S(p, "backgroundImage", "");
                b.e(h, function (c) {
                    b.E(b.k(c, "noscale") ? p : a, c);
                    b.k(c, "autocenter") && Mb.push(c)
                })
            }
            Y = c / (d ? b.l : b.j)(y);
            b.be(y, Y);
            var f = d ? Y * W() : c, e = d ? c : Y * lb();
            b.j(p, f);
            b.l(p, e);
            b.e(Mb, function (a) {
                var c = b.Xd(b.k(a, "autocenter"));
                b.ce(a, c)
            })
        }
        f.Ae = Eb;
        f.pd = function (a) {
            var d = c.ceil(t(ib / bc)), b = t(a - s + d);
            if (b > u) {
                if (a - s > q / 2)
                    a -= q;
                else if (a - s <= -q / 2)
                    a += q
            } else
                a = s + b - d;
            return a
        };
        n.call(f);
        f.lb = p = b.kb(p);
        var a = b.r({
            Cb: 0,
            Ue: 1,
            lc: 1,
            mc: 0,
            nc: l,
            Ub: 1,
            tb: d,
            md: d,
            fd: 1,
            qd: 3e3,
            rd: 1,
            oc: 500,
            Le: e.me,
            Ad: 20,
            sd: 0,
            p: 1,
            rc: 0,
            xe: 1,
            tc: 1,
            td: 1
        }, fc);
        a.tb = a.tb && b.ze();
        if (a.ue != k)
            a.qd = a.ue;
        if (a.Ee != k)
            a.rc = a.Ee;
        var eb = a.tc & 3, tc = (a.tc & 4) / -4 || 1, kb = a.Kd, I = b
                .r({
                    J: r,
                    tb: a.tb
                }, a.Ff);
        I.rb = I.rb || I.Df;
        var Fb = a.te, Z = a.re, db = a.qe, Q = !a.xe, y, v = b.A(p,
                "slides", Q), fb = b.A(p, "loading", Q) || b.gb(g), Nb = b
                .A(p, "navigator", Q), dc = b.A(p, "arrowleft", Q), ac = b
                .A(p, "arrowright", Q), Lb = b
                .A(p, "thumbnavigator", Q), oc = b.j(v), mc = b.l(v), V, T = [], uc = b
                .Gb(v);
        b.e(uc, function (a) {
            if (a.tagName == "DIV" && !b.k(a, "u"))
                T.push(a);
            else
                b.ib() && b.I(a, (b.I(a) || 0) + 1)
        });
        var s = -1, wb, sb, q = T.length, K = a.pe || oc, J = a.oe
                || mc, Wb = a.sd, zb = K + Wb, Ab = J + Wb, bc = eb & 1 ? zb
                : Ab, u = c.min(a.p, q), jb, x, O, yb, S = [], Qb, Sb, Ob, cc, Cc, N, E = a.rd, lc = a.qd, Vb = a.oc, qb, tb, ib, Rb = u < q, D = Rb ? a.Ub
                : 0, X, P, F = 1, M, B, R, ub = 0, vb = 0, H, gb, hb, Cb, w, U, z, Tb = new pc, Y, Mb = [];
        if (q) {
            if (a.tb)
                Kb = function (a, c, d) {
                    b.Bb(a, {
                        jb: c,
                        hb: d
                    })
                };
            N = a.nc;
            f.Wb = fc;
            ic();
            b.s(p, "jssor-slider", d);
            b.I(v, b.I(v) || 0);
            b.z(v, "absolute");
            jb = b.T(v, d);
            b.Rb(jb, v);
            if (kb) {
                cc = kb.Ef;
                qb = kb.J;
                tb = u == 1 && q > 1 && qb && (!b.Ed() || b.Cd() >= 8)
            }
            ib = tb || u >= q || !(D & 1) ? 0 : a.rc;
            X = (u > 1 || ib ? eb : -1) & a.td;
            var Gb = v, C = [], A, L, Db = b.Od(), mb = Db.qf, G, pb, Ib, rb;
            Db.zd
                    && b.S(Gb, Db.zd,
                            ([j, "pan-y", "pan-x", "none"])[X] || "");
            U = new zc;
            if (tb)
                A = new qb(Tb, K, J, kb, mb);
            b.E(jb, U.Pb);
            b.eb(v, "hidden");
            L = Xb();
            b.S(L, "backgroundColor", "#000");
            b.Ab(L, 0);
            b.Rb(L, Gb.firstChild, Gb);
            for (var cb = 0; cb < T.length; cb++) {
                var wc = T[cb], yc = new xc(wc, cb);
                C.push(yc)
            }
            b.M(fb);
            Cb = new Ac;
            z = new nc(Cb, U);
            if (X) {
                b.a(v, "mousedown", Yb);
                b.a(v, "touchstart", rc);
                b.a(v, "dragstart", Hb);
                b.a(v, "selectstart", Hb);
                b.a(g, "mouseup", ab);
                b.a(g, "touchend", ab);
                b.a(g, "touchcancel", ab);
                b.a(h, "blur", ab)
            }
            E &= mb ? 10 : 5;
            if (Nb && Fb) {
                Qb = new Fb.J(Nb, Fb, W(), lb());
                S.push(Qb)
            }
            if (Z && dc && ac) {
                Z.Ub = D;
                Z.p = u;
                Sb = new Z.J(dc, ac, Z, W(), lb());
                S.push(Sb)
            }
            if (Lb && db) {
                db.mc = a.mc;
                Ob = new db.J(Lb, db);
                S.push(Ob)
            }
            b.e(S, function (a) {
                a.kc(q, C, fb);
                a.vb(o.Fb, kc)
            });
            b.S(p, "visibility", "visible");
            Eb(W());
            b.a(v, "click", jc, d);
            b.a(p, "mouseout", b.Xb(hc, p));
            b.a(p, "mouseover", b.Xb(Ec, p));
            xb();
            a.lc && b.a(g, "keydown", function (b) {
                if (b.keyCode == 37)
                    ob(-a.lc);
                else
                    b.keyCode == 39 && ob(a.lc)
            });
            var nb = a.mc;
            if (!(D & 1))
                nb = c.max(0, c.min(nb, q - u));
            z.Hb(nb, nb, 0)
        }
    };
    i.yf = 21;
    i.Td = 22;
    i.Ud = 23;
    i.ff = 24;
    i.ef = 25;
    i.wf = 26;
    i.af = 27;
    i.Zd = 28;
    i.zf = 202;
    i.Md = 203;
    i.uf = 206;
    i.We = 207;
    i.Ce = 208;
    i.id = 209;
    var o = {
        Fb: 1
    }, s = function (e, C) {
        var f = this;
        n.call(f);
        e = b.kb(e);
        var s, A, z, r, k = 0, a, m, i, w, x, h, g, q, p, B = [], y = [];
        function v(a) {
            a != -1 && y[a].Ic(a == k)
        }
        function t(a) {
            f.i(o.Fb, a * m)
        }
        f.lb = e;
        f.pc = function (a) {
            if (a != r) {
                var d = k, b = c.floor(a / m);
                k = b;
                r = a;
                v(d);
                v(b)
            }
        };
        f.wc = function (a) {
            b.v(e, a)
        };
        var u;
        f.kc = function (D) {
            if (!u) {
                s = c.ceil(D / m);
                k = 0;
                var o = q + w, r = p + x, n = c.ceil(s / i) - 1;
                A = q + o * (!h ? n : i - 1);
                z = p + r * (h ? n : i - 1);
                b.j(e, A);
                b.l(e, z);
                for (var f = 0; f < s; f++) {
                    var C = b.Ye();
                    b.Sd(C, f + 1);
                    var l = b.Mc(g, "numbertemplate", C, d);
                    b.z(l, "absolute");
                    var v = f % (n + 1);
                    b.C(l, !h ? o * v : f % i * o);
                    b.D(l, h ? r * v : c.floor(f / (n + 1)) * r);
                    b.E(e, l);
                    B[f] = l;
                    a.sb & 1 && b.a(l, "click", b.G(j, t, f));
                    a.sb
                            & 2
                            && b.a(l, "mouseover", b
                                    .Xb(b.G(j, t, f), l));
                    y[f] = b.Zb(l)
                }
                u = d
            }
        };
        f.Wb = a = b.r({
            gc: 10,
            fc: 10,
            wb: 1,
            sb: 1
        }, C);
        g = b.A(e, "prototype");
        q = b.j(g);
        p = b.l(g);
        b.xb(g, e);
        m = a.wd || 1;
        i = a.ab || 1;
        w = a.gc;
        x = a.fc;
        h = a.wb - 1;
        a.Qb == l && b.s(e, "noscale", d);
        a.U && b.s(e, "autocenter", a.U)
    }, u = function (a, g, h) {
        var c = this;
        n.call(c);
        var r, q, e, f, i;
        b.j(a);
        b.l(a);
        function k(a) {
            c.i(o.Fb, a, d)
        }
        function p(c) {
            b.v(a, c || !h.Ub && e == 0);
            b.v(g, c || !h.Ub && e >= q - h.p);
            r = c
        }
        c.pc = function (b, a, c) {
            if (c)
                e = a;
            else {
                e = b;
                p(r)
            }
        };
        c.wc = p;
        var m;
        c.kc = function (c) {
            q = c;
            e = 0;
            if (!m) {
                b.a(a, "click", b.G(j, k, -i));
                b.a(g, "click", b.G(j, k, i));
                b.Zb(a);
                b.Zb(g);
                m = d
            }
        };
        c.Wb = f = b.r({
            wd: 1
        }, h);
        i = f.wd;
        if (f.Qb == l) {
            b.s(a, "noscale", d);
            b.s(g, "noscale", d)
        }
        if (f.U) {
            b.s(a, "autocenter", f.U);
            b.s(g, "autocenter", f.U)
        }
    }, q = function (g, B) {
        var h = this, z, p, a, v = [], x, w, e, q, r, u, t, m, s, f, k;
        n.call(h);
        g = b.kb(g);
        function A(n, f) {
            var g = this, c, m, l;
            function q() {
                m.Ic(p == f)
            }
            function i(d) {
                if (d || !s.De()) {
                    var a = e - f % e, b = s.pd((f + a) / e - 1), c = b
                            * e + e - a;
                    h.i(o.Fb, c)
                }
            }
            g.nb = f;
            g.xd = q;
            l = n.pf || n.Tb || b.gb();
            g.Pb = c = b.Mc(k, "thumbnailtemplate", l, d);
            m = b.Zb(c);
            a.sb & 1 && b.a(c, "click", b.G(j, i, 0));
            a.sb & 2 && b.a(c, "mouseover", b.Xb(b.G(j, i, 1), c))
        }
        h.pc = function (b, d, f) {
            var a = p;
            p = b;
            a != -1 && v[a].xd();
            v[b].xd();
            !f && s.Pd(s.pd(c.floor(d / e)))
        };
        h.wc = function (a) {
            b.v(g, a)
        };
        var y;
        h.kc = function (D, C) {
            if (!y) {
                z = D;
                c.ceil(z / e);
                p = -1;
                m = c.min(m, C.length);
                var h = a.wb & 1, n = u + (u + q) * (e - 1) * (1 - h), k = t
                        + (t + r) * (e - 1) * h, B = n + (n + q)
                        * (m - 1) * h, o = k + (k + r) * (m - 1)
                        * (1 - h);
                b.z(f, "absolute");
                b.eb(f, "hidden");
                a.U & 1 && b.C(f, (x - B) / 2);
                a.U & 2 && b.D(f, (w - o) / 2);
                b.j(f, B);
                b.l(f, o);
                var j = [];
                b.e(C,
                        function (l, g) {
                            var i = new A(l, g), d = i.Pb, a = c
                                    .floor(g / e), k = g % e;
                            b.C(d, (u + q) * k * (1 - h));
                            b.D(d, (t + r) * k * h);
                            if (!j[a]) {
                                j[a] = b.gb();
                                b.E(f, j[a])
                            }
                            b.E(j[a], d);
                            v.push(i)
                        });
                var E = b.r({
                    nc: l,
                    md: l,
                    pe: n,
                    oe: k,
                    sd: q * h + r * (1 - h),
                    Ad: 12,
                    oc: 200,
                    rd: 1,
                    tc: a.wb,
                    td: a.ie || a.Bf ? 0 : a.wb
                }, a);
                s = new i(g, E);
                y = d
            }
        };
        h.Wb = a = b.r({
            gc: 0,
            fc: 0,
            p: 1,
            wb: 1,
            U: 3,
            sb: 1
        }, B);
        x = b.j(g);
        w = b.l(g);
        f = b.A(g, "slides", d);
        k = b.A(f, "prototype");
        u = b.j(k);
        t = b.l(k);
        b.xb(k, f);
        e = a.ab || 1;
        q = a.gc;
        r = a.fc;
        m = a.p;
        a.Qb == l && b.s(g, "noscale", d)
    };
    function r(e, d, c) {
        var a = this;
        m.call(a, 0, c);
        a.nd = b.Sc;
        a.jd = 0;
        a.kd = c
    }
    jssor_1_slider_init = function () {
        var g = [{
            Ib: 1200,
            x: -.3,
            vc: {
                f: [.3, .7]
            },
            L: {
                f: f.od,
                u: f.yd
            },
            u: 2
        }, {
            Ib: 1200,
            x: .3,
            Lb: d,
            L: {
                f: f.od,
                u: f.yd
            },
            u: 2
        }], j = {
            nc: d,
            Kd: {
                J: t,
                rb: g,
                sf: 1
            },
            re: {
                J: u
            },
            te: {
                J: s
            },
            qe: {
                J: q,
                p: 1,
                rc: 0,
                ie: d
            }
        }, e = new i("jssor_1", j);
        function a() {
            var b = e.lb.parentNode.clientWidth;
            if (b) {
                b = c.min(b, 600);
                e.Ae(b)
            } else
                h.setTimeout(a, 30)
        }
        a();
        b.a(h, "load", a);
        b.a(h, "resize", a);
        b.a(h, "orientationchange", a)
    }
})(window, document, Math, null, true, false)