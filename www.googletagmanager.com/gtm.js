// Copyright 2012 Google Inc. All rights reserved.

(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }],
            "tags": [],
            "predicates": [],
            "rules": []
        },
        "runtime": []









    };


    var ca, da = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        fa = function(a) {
            return a.raw = a
        },
        ha = function(a, b) {
            a.raw = b;
            return a
        },
        ia = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: da(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ja = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        ka = function(a) {
            return a instanceof Array ? a :
                ja(ia(a))
        },
        la = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ma;
    if ("function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                na = pa.a;
                break a
            } catch (a) {}
            na = !1
        }
        ma = na ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ra = ma,
        sa = function(a, b) {
            a.prototype = la(b.prototype);
            a.prototype.constructor = a;
            if (ra) ra(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.In = b.prototype
        };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ta = this || self,
        va = function(a) {
            return a
        };
    var wa = function() {},
        xa = function(a) {
            return "function" === typeof a
        },
        g = function(a) {
            return "string" === typeof a
        },
        ya = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        za = Array.isArray,
        Aa = function(a, b) {
            if (a && za(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Ba = function(a, b) {
            if (!ya(a) || !ya(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Ea = function(a, b) {
            for (var c = new Da, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        k = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Fa = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Ga = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ha = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Ia = function(a) {
            var b = [];
            if (za(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ja = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ka = function() {
            return new Date(Date.now())
        },
        La = function() {
            return Ka().getTime()
        },
        Da = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Da.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Da.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ma = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Na = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Oa = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Pa = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Qa = function(a, b) {
            return a.substring(0, b.length) === b
        },
        Ra = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Sa = /^\w{1,9}$/,
        Ta = function(a,
            b) {
            a = a || {};
            b = b || ",";
            var c = [];
            k(a, function(d, e) {
                Sa.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        Ua = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Va = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Wa = function(a) {
            if (null == a) return String(a);
            var b = Va.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Xa = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Ya = function(a) {
            if (!a || "object" != Wa(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Xa(a, "constructor") && !Xa(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Xa(a, b)
        },
        A = function(a, b) {
            var c = b || ("array" == Wa(a) ? [] : {}),
                d;
            for (d in a)
                if (Xa(a, d)) {
                    var e = a[d];
                    "array" == Wa(e) ? ("array" != Wa(c[d]) && (c[d] = []), c[d] = A(e, c[d])) : Ya(e) ? (Ya(c[d]) || (c[d] = {}), c[d] = A(e, c[d])) : c[d] = e
                }
            return c
        };

    function Za() {
        for (var a = $a, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function bb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var $a, cb;

    function db(a) {
        $a = $a || bb();
        cb = cb || Za();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                h = d ? a.charCodeAt(c + 1) : 0,
                l = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | h >> 4,
                p = (h & 15) << 2 | l >> 6,
                q = l & 63;
            e || (q = 64, d || (p = 64));
            b.push($a[m], $a[n], $a[p], $a[q])
        }
        return b.join("")
    }

    function eb(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = cb[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        $a = $a || bb();
        cb = cb || Za();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                h = b(64),
                l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != l && (c += String.fromCharCode(h << 6 & 192 | l)))
        }
    };
    var fb = {},
        gb = function(a, b) {
            fb[a] = fb[a] || [];
            fb[a][b] = !0
        },
        hb = function(a) {
            var b = fb[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return db(c.join("")).replace(/\.+$/, "")
        },
        ib = function() {
            for (var a = [], b = fb.fdr || [], c = 0; c < b.length; c++) b[c] && a.push(c);
            return 0 < a.length ? a : void 0
        };
    var jb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var kb, lb = function() {
        if (void 0 === kb) {
            var a = null,
                b = ta.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: va,
                        createScript: va,
                        createScriptURL: va
                    })
                } catch (c) {
                    ta.console && ta.console.error(c.message)
                }
                kb = a
            } else kb = a
        }
        return kb
    };
    var mb = function(a) {
        this.h = a
    };
    mb.prototype.toString = function() {
        return this.h + ""
    };
    var nb = {};
    var ob, pb;
    a: {
        for (var qb = ["CLOSURE_FLAGS"], rb = ta, sb = 0; sb < qb.length; sb++)
            if (rb = rb[qb[sb]], null == rb) {
                pb = null;
                break a
            }
        pb = rb
    }
    var tb = pb && pb[610401301];
    ob = null != tb ? tb : !1;

    function ub() {
        var a = ta.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var vb, wb = ta.navigator;
    vb = wb ? wb.userAgentData || null : null;

    function xb(a) {
        return ob ? vb ? vb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }

    function yb(a) {
        return -1 != ub().indexOf(a)
    };

    function zb() {
        return ob ? !!vb && 0 < vb.brands.length : !1
    }

    function Ab() {
        return zb() ? !1 : yb("Opera")
    }

    function Bb() {
        return yb("Firefox") || yb("FxiOS")
    }

    function Cb() {
        return zb() ? xb("Chromium") : (yb("Chrome") || yb("CriOS")) && !(zb() ? 0 : yb("Edge")) || yb("Silk")
    };
    var Db = {},
        Eb = function(a) {
            this.h = a
        };
    Eb.prototype.toString = function() {
        return this.h.toString()
    };
    var Fb = function(a) {
        return a instanceof Eb && a.constructor === Eb ? a.h : "type_error:SafeHtml"
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Gb = fa([""]),
        Hb = ha(["\x00"], ["\\0"]),
        Ib = ha(["\n"], ["\\n"]),
        Jb = ha(["\x00"], ["\\u0000"]);

    function Kb(a) {
        return -1 === a.toString().indexOf("`")
    }
    Kb(function(a) {
        return a(Gb)
    }) || Kb(function(a) {
        return a(Hb)
    }) || Kb(function(a) {
        return a(Ib)
    }) || Kb(function(a) {
        return a(Jb)
    });
    var Lb = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;

    function Mb(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b) throw Error("");
    };
    "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON"]);

    function Nb(a) {
        var b = a = Ob(a),
            c = lb(),
            d = c ? c.createHTML(b) : b;
        return new Eb(d, Db)
    }

    function Ob(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var E = window,
        G = document,
        Pb = navigator,
        Qb = G.currentScript && G.currentScript.src,
        Rb = function(a, b) {
            var c = E[a];
            E[a] = void 0 === c ? b : c;
            return E[a]
        },
        Sb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Tb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Ub = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Vb(a, b, c) {
        b && k(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Xb = function(a, b, c, d, e) {
            var f = G.createElement("script");
            Vb(f, d, Tb);
            f.type = "text/javascript";
            f.async = d && !1 === d.async ? !1 : !0;
            var h, l = Ob(a),
                m = lb(),
                n = m ? m.createScriptURL(l) : l;
            h = new mb(n, nb);
            f.src = h instanceof mb && h.constructor === mb ? h.h : "type_error:TrustedResourceUrl";
            var p, q, t, r = null == (t = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : t.call(q, "script[nonce]");
            (p = r ? r.nonce || r.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
            Sb(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var u = G.getElementsByTagName("script")[0] || G.body || G.head;
                u.parentNode.insertBefore(f, u)
            }
            return f
        },
        Yb = function() {
            if (Qb) {
                var a = Qb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Zb = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var h = e,
                l = !1;
            h || (h = G.createElement("iframe"), l = !0);
            Vb(h, c, Ub);
            d && k(d, function(n, p) {
                h.dataset[n] = p
            });
            f && (h.height = "0", h.width = "0", h.style.display = "none", h.style.visibility = "hidden");
            if (l) {
                var m = G.body &&
                    G.body.lastChild || G.body || G.head;
                m.parentNode.insertBefore(h, m)
            }
            Sb(h, b);
            void 0 !== a && (h.src = a);
            return h
        },
        $b = function(a, b, c, d) {
            var e = new Image(1, 1);
            Vb(e, d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a
        },
        ac = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        bc = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        I = function(a) {
            E.setTimeout(a, 0)
        },
        cc = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        dc = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        ec = function(a) {
            var b = G.createElement("div"),
                c = b,
                d = Nb("A<div>" + a + "</div>");
            1 === c.nodeType && Mb(c);
            c.innerHTML = Fb(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        fc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, h = 0; f && h <= c; h++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        gc = function(a) {
            var b;
            try {
                b = Pb.sendBeacon && Pb.sendBeacon(a)
            } catch (c) {
                gb("TAGGING", 15)
            }
            b || $b(a)
        },
        hc = function(a, b) {
            try {
                if (Pb.sendBeacon) return Pb.sendBeacon(a, b)
            } catch (c) {
                gb("TAGGING", 15)
            }
            return !1
        },
        ic = {
            cache: "no-store",
            credentials: "include",
            keepalive: !0,
            method: "POST",
            mode: "no-cors",
            redirect: "follow"
        },
        jc = function(a, b) {
            var c = {
                Ul: !0
            };
            if ("fetch" in E) {
                var d = Object.assign({}, ic);
                b && (d.body = b);
                c && (c.attributionReporting &&
                    (d.attributionReporting = c.attributionReporting), c.Ik && (d.browsingTopics = c.Ik));
                try {
                    return E.fetch(a, d), !0
                } catch (e) {}
            }
            if (c && c.Ul) return !1;
            if (b) return hc(a, b);
            gc(a);
            return !0
        },
        kc = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        lc = function() {
            var a = E.performance;
            if (a && xa(a.now)) return a.now()
        },
        mc = function() {
            return E.performance || void 0
        };
    var nc = function(a) {
        this.message = a
    };

    function oc(a) {
        var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a];
        return void 0 === b ? new nc("Value " + a + " can not be encoded in web-safe base64 dictionary.") : b
    };

    function pc(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    };
    var qc = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            ij: a("consent"),
            Rg: a("convert_case_to"),
            Sg: a("convert_false_to"),
            Tg: a("convert_null_to"),
            Ug: a("convert_true_to"),
            Vg: a("convert_undefined_to"),
            Pm: a("debug_mode_metadata"),
            ma: a("function"),
            Pf: a("instance_name"),
            mk: a("live_only"),
            nk: a("malware_disabled"),
            pk: a("metadata"),
            sk: a("original_activity_id"),
            jn: a("original_vendor_template_id"),
            hn: a("once_on_load"),
            rk: a("once_per_event"),
            bi: a("once_per_load"),
            nn: a("priority_override"),
            on: a("respected_consent_types"),
            hi: a("setup_tags"),
            xd: a("tag_id"),
            mi: a("teardown_tags")
        }
    }();
    var Mc;
    var Nc = [],
        Oc = [],
        Pc = [],
        Qc = [],
        Rc = [],
        Sc = {},
        Tc, Uc, Wc = function(a) {
            Uc = Uc || a
        },
        Xc = function(a) {},
        Yc, Zc = [],
        $c = [],
        ad = function(a, b) {
            var c = a[qc.ma],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Sc[c],
                f = b && 2 === b.type && d.reportMacroDiscrepancy && e && -1 !== Zc.indexOf(c),
                h = {},
                l = {},
                m;
            for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && (h[m] = a[m]), !e || f) && (l[m.substr(4)] = a[m]);
            e && d && d.cachedModelValues && (h.vtp_gtmCachedValues = d.cachedModelValues);
            if (b) {
                if (null == b.name) {
                    var n;
                    a: {
                        var p = b.type,
                            q = b.index;
                        if (null == q) n = "";
                        else {
                            var t;
                            switch (p) {
                                case 2:
                                    t = Nc[q];
                                    break;
                                case 1:
                                    t = Qc[q];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var r = t && t[qc.Pf];
                            n = r ? String(r) : ""
                        }
                    }
                    b.name = n
                }
                e && (h.vtp_gtmEntityIndex = b.index, h.vtp_gtmEntityName =
                    b.name)
            }
            var u, v, w;
            if (f && -1 === $c.indexOf(c)) {
                $c.push(c);
                var x = La();
                u = e(h);
                var y = La() - x,
                    B = La();
                v = Mc(c, l, b);
                w = y - (La() - B)
            } else if (e && (u = e(h)), !e || f) v = Mc(c, l, b);
            if (f && d) {
                d.reportMacroDiscrepancy(d.id, c, void 0, !0);
                var z;
                a: {
                    var C = u;
                    if (void 0 == C || za(C) || Ya(C)) z = !0;
                    else {
                        switch (typeof C) {
                            case "boolean":
                            case "number":
                            case "string":
                            case "function":
                                z = !0;
                                break a
                        }
                        z = !1
                    }
                }
                z ? (za(u) ? za(v) : Ya(u) ? Ya(v) : u === v) || d.reportMacroDiscrepancy(d.id, c) : u !== v && d.reportMacroDiscrepancy(d.id, c);
                void 0 != w && d.reportMacroDiscrepancy(d.id,
                    c, w)
            }
            return e ? u : v
        },
        cd = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = bd(a[e], b, c));
            return d
        },
        bd = function(a, b, c) {
            if (za(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(bd(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var h = Nc[f];
                        if (!h || b.isBlocked(h)) return;
                        c[f] = !0;
                        var l = String(h[qc.Pf]);
                        try {
                            var m = cd(h, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = ad(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: l
                            });
                            Yc && (d = Yc.Nk(d, m))
                        } catch (y) {
                            b.logMacroError && b.logMacroError(y, Number(f), l), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[bd(a[n], b, c)] = bd(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var t = bd(a[q], b, c);
                            Uc && (p = p || Uc.Gl(t));
                            d.push(t)
                        }
                        return Uc && p ? Uc.Pk(d) : d.join("");
                    case "escape":
                        d = bd(a[1], b, c);
                        if (Uc && za(a[1]) && "macro" === a[1][0] && Uc.Hl(a)) return Uc.hm(d);
                        d = String(d);
                        for (var r = 2; r < a.length; r++) rc[a[r]] && (d = rc[a[r]](d));
                        return d;
                    case "tag":
                        var u =
                            a[1];
                        if (!Qc[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            yi: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v[qc.ma] = a[1];
                        var w = dd(v, b, c),
                            x = !!a[4];
                        return x || 2 !== w ? x !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        dd = function(a, b, c) {
            try {
                return Tc(cd(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        },
        ed = function(a) {
            var b = a[qc.ma];
            if (!b) throw Error("Error: No function name given for function call.");
            return !!Sc[b]
        };
    var hd = function(a) {
            function b(t) {
                for (var r = 0; r < t.length; r++) d[t[r]] = !0
            }
            for (var c = [], d = [], e = fd(a), f = 0; f < Oc.length; f++) {
                var h = Oc[f],
                    l = gd(h, e);
                if (l) {
                    for (var m = h.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(h.block || [])
                } else null === l && b(h.block || []);
            }
            for (var p = [], q = 0; q < Qc.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        gd = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f = a.unless || [], h = 0; h < f.length; h++) {
                var l = b(f[h]);
                if (2 === l) return null;
                if (1 === l) return !1
            }
            return !0
        },
        fd = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = dd(Pc[c], a));
                return b[c]
            }
        };
    var id = {
        Nk: function(a, b) {
            b[qc.Rg] && "string" === typeof a && (a = 1 == b[qc.Rg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(qc.Tg) && null === a && (a = b[qc.Tg]);
            b.hasOwnProperty(qc.Vg) && void 0 === a && (a = b[qc.Vg]);
            b.hasOwnProperty(qc.Ug) && !0 === a && (a = b[qc.Ug]);
            b.hasOwnProperty(qc.Sg) && !1 === a && (a = b[qc.Sg]);
            return a
        }
    };
    var jd = [],
        kd = {},
        ld = function(a) {
            return void 0 == jd[a] ? !1 : jd[a]
        };
    var zd = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"],
        Ad = new Da;
    var Hd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function Id(a, b) {
        for (var c = "", d = !0; 7 < a;) {
            var e = a & 31;
            a >>= 5;
            d ? d = !1 : e |= 32;
            c = oc(e) + c
        }
        a <<= 2;
        d || (a |= 32);
        return c = oc(a | b) + c
    };
    var Kd = function(a) {
            return Jd ? G.querySelectorAll(a) : null
        },
        Ld = function(a, b) {
            if (!Jd) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!G.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Md = !1;
    if (G.querySelectorAll) try {
        var Nd = G.querySelectorAll(":root");
        Nd && 1 == Nd.length && Nd[0] == G.documentElement && (Md = !0)
    } catch (a) {}
    var Jd = Md;
    var K = function(a) {
        gb("GTM", a)
    };
    var L = {
            g: {
                Ca: "ad_personalization",
                F: "ad_storage",
                K: "ad_user_data",
                O: "analytics_storage",
                ae: "region",
                hc: "consent_updated",
                Mg: "wait_for_update",
                Wg: "ads",
                Om: "all",
                lj: "maps",
                mj: "playstore",
                nj: "search",
                oj: "shopping",
                pj: "youtube",
                rj: "app_remove",
                sj: "app_store_refund",
                tj: "app_store_subscription_cancel",
                uj: "app_store_subscription_convert",
                vj: "app_store_subscription_renew",
                Xg: "add_payment_info",
                Yg: "add_shipping_info",
                ic: "add_to_cart",
                jc: "remove_from_cart",
                Zg: "view_cart",
                Hb: "begin_checkout",
                kc: "select_item",
                ab: "view_item_list",
                ub: "select_promotion",
                cb: "view_promotion",
                ra: "purchase",
                mc: "refund",
                Ha: "view_item",
                ah: "add_to_wishlist",
                wj: "exception",
                xj: "first_open",
                yj: "first_visit",
                aa: "gtag.config",
                Oa: "gtag.get",
                zj: "in_app_purchase",
                nc: "page_view",
                Aj: "screen_view",
                Bj: "session_start",
                Cj: "timing_complete",
                Dj: "track_social",
                be: "user_engagement",
                eb: "gclgb",
                Pa: "gclid",
                W: "ads_data_redaction",
                bh: "gad_source",
                Lc: "gclid_url",
                eh: "gclsrc",
                ce: "wbraid",
                fa: "allow_ad_personalization_signals",
                uf: "allow_custom_scripts",
                vf: "allow_display_features",
                de: "allow_enhanced_conversions",
                fb: "allow_google_signals",
                Da: "allow_interest_groups",
                Ej: "app_id",
                Fj: "app_installer_id",
                Gj: "app_name",
                Hj: "app_version",
                vb: "auid",
                Ij: "auto_detection_enabled",
                Ib: "aw_remarketing",
                wf: "aw_remarketing_only",
                ee: "discount",
                fe: "aw_feed_country",
                he: "aw_feed_language",
                U: "items",
                ie: "aw_merchant_id",
                fh: "aw_basket_type",
                Mc: "campaign_content",
                Nc: "campaign_id",
                Oc: "campaign_medium",
                Pc: "campaign_name",
                Qc: "campaign",
                Rc: "campaign_source",
                Sc: "campaign_term",
                hb: "client_id",
                gh: "rnd",
                Jj: "content_group",
                Kj: "content_type",
                Ua: "conversion_cookie_prefix",
                Tc: "conversion_id",
                sa: "conversion_linker",
                Lj: "conversion_linker_disabled",
                Jb: "conversion_api",
                je: "cookie_deprecation",
                Qa: "cookie_domain",
                Ra: "cookie_expires",
                Va: "cookie_flags",
                oc: "cookie_name",
                Kb: "cookie_path",
                Ja: "cookie_prefix",
                qc: "cookie_update",
                sc: "country",
                wa: "currency",
                ke: "customer_lifetime_value",
                Uc: "custom_map",
                xf: "gcldc",
                Vc: "dclid",
                Mj: "debug_mode",
                ba: "developer_id",
                Nj: "disable_merchant_reported_purchases",
                Wc: "dc_custom_params",
                Oj: "dc_natural_search",
                hh: "dynamic_event_settings",
                ih: "affiliation",
                me: "checkout_option",
                yf: "checkout_step",
                jh: "coupon",
                Xc: "item_list_name",
                zf: "list_name",
                Pj: "promotions",
                Yc: "shipping",
                Af: "tax",
                ne: "engagement_time_msec",
                oe: "enhanced_client_id",
                pe: "enhanced_conversions",
                kh: "enhanced_conversions_automatic_settings",
                qe: "estimated_delivery_date",
                Bf: "euid_logged_in_state",
                Zc: "event_callback",
                Qj: "event_category",
                jb: "event_developer_id_string",
                Rj: "event_label",
                se: "event",
                te: "event_settings",
                ue: "event_timeout",
                Sj: "description",
                Tj: "fatal",
                Uj: "experiments",
                Cf: "firebase_id",
                uc: "first_party_collection",
                ve: "_x_20",
                kb: "_x_19",
                lh: "fledge_drop_reason",
                mh: "fledge",
                nh: "flight_error_code",
                oh: "flight_error_message",
                ph: "fl_activity_category",
                qh: "fl_activity_group",
                Df: "fl_advertiser_id",
                rh: "fl_ar_dedupe",
                Ef: "match_id",
                sh: "fl_random_number",
                th: "tran",
                uh: "u",
                we: "gac_gclid",
                vc: "gac_wbraid",
                vh: "gac_wbraid_multiple_conversions",
                wh: "ga_restrict_domain",
                xh: "ga_temp_client_id",
                wc: "gdpr_applies",
                yh: "geo_granularity",
                wb: "value_callback",
                lb: "value_key",
                Sm: "google_ono",
                Lb: "google_signals",
                zh: "google_tld",
                xe: "groups",
                Ah: "gsa_experiment_id",
                ye: "iframe_state",
                ad: "ignore_referrer",
                Ff: "internal_traffic_results",
                xb: "is_legacy_converted",
                yb: "is_legacy_loaded",
                ze: "is_passthrough",
                xc: "_lps",
                Ka: "language",
                Ae: "legacy_developer_id_string",
                xa: "linker",
                yc: "accept_incoming",
                zb: "decorate_forms",
                R: "domains",
                Mb: "url_position",
                Bh: "method",
                Vj: "name",
                bd: "new_customer",
                Ch: "non_interaction",
                Wj: "optimize_id",
                Xj: "page_hostname",
                dd: "page_path",
                Ea: "page_referrer",
                Ab: "page_title",
                Dh: "passengers",
                Eh: "phone_conversion_callback",
                Yj: "phone_conversion_country_code",
                Fh: "phone_conversion_css_class",
                Zj: "phone_conversion_ids",
                Gh: "phone_conversion_number",
                Hh: "phone_conversion_options",
                Gf: "_protected_audience_enabled",
                ed: "quantity",
                Be: "redact_device_info",
                Hf: "referral_exclusion_definition",
                Nb: "restricted_data_processing",
                bk: "retoken",
                dk: "sample_rate",
                If: "screen_name",
                Bb: "screen_resolution",
                ek: "search_term",
                La: "send_page_view",
                Ob: "send_to",
                zc: "server_container_url",
                fd: "session_duration",
                Ce: "session_engaged",
                Jf: "session_engaged_time",
                ob: "session_id",
                De: "session_number",
                gd: "delivery_postal_code",
                Tm: "temporary_client_id",
                Kf: "topmost_url",
                fk: "tracking_id",
                Lf: "traffic_type",
                ya: "transaction_id",
                Cb: "transport_url",
                Ih: "trip_type",
                Pb: "update",
                Wa: "url_passthrough",
                hd: "_user_agent_architecture",
                jd: "_user_agent_bitness",
                kd: "_user_agent_full_version_list",
                ld: "_user_agent_mobile",
                md: "_user_agent_model",
                nd: "_user_agent_platform",
                od: "_user_agent_platform_version",
                pd: "_user_agent_wow64",
                Fa: "user_data",
                Jh: "user_data_auto_latency",
                Kh: "user_data_auto_meta",
                Lh: "user_data_auto_multi",
                Mh: "user_data_auto_selectors",
                Nh: "user_data_auto_status",
                Ee: "user_data_mode",
                Fe: "user_data_settings",
                Ma: "user_id",
                Xa: "user_properties",
                Oh: "_user_region",
                Ge: "us_privacy_string",
                ia: "value",
                Ph: "wbraid_multiple_conversions",
                Vh: "_host_name",
                Wh: "_in_page_command",
                Xh: "_is_passthrough_cid",
                pb: "non_personalized_ads",
                wd: "_sst_parameters",
                ib: "conversion_label",
                oa: "page_location",
                nb: "global_developer_id_string",
                Ac: "tc_privacy_string"
            }
        },
        me = {},
        ne = Object.freeze((me[L.g.fa] = 1, me[L.g.vf] = 1, me[L.g.de] = 1, me[L.g.fb] = 1, me[L.g.U] = 1, me[L.g.Qa] = 1, me[L.g.Ra] = 1, me[L.g.Va] = 1, me[L.g.oc] = 1, me[L.g.Kb] = 1, me[L.g.Ja] = 1, me[L.g.qc] = 1, me[L.g.Uc] = 1, me[L.g.ba] = 1, me[L.g.hh] = 1, me[L.g.Zc] = 1, me[L.g.te] = 1, me[L.g.ue] = 1, me[L.g.uc] = 1, me[L.g.wh] = 1, me[L.g.Lb] = 1, me[L.g.zh] = 1, me[L.g.xe] = 1, me[L.g.Ff] = 1, me[L.g.xb] = 1, me[L.g.yb] = 1, me[L.g.xa] = 1, me[L.g.Hf] = 1, me[L.g.Nb] = 1, me[L.g.La] = 1, me[L.g.Ob] = 1, me[L.g.zc] = 1, me[L.g.fd] = 1, me[L.g.Jf] = 1, me[L.g.gd] = 1, me[L.g.Cb] = 1, me[L.g.Pb] =
            1, me[L.g.Fe] = 1, me[L.g.Xa] = 1, me[L.g.wd] = 1, me));
    Object.freeze([L.g.oa, L.g.Ea, L.g.Ab, L.g.Ka, L.g.If, L.g.Ma, L.g.Cf, L.g.Jj]);
    var oe = {},
        pe = Object.freeze((oe[L.g.rj] = 1, oe[L.g.sj] = 1, oe[L.g.tj] = 1, oe[L.g.uj] = 1, oe[L.g.vj] = 1, oe[L.g.xj] = 1, oe[L.g.yj] = 1, oe[L.g.zj] = 1, oe[L.g.Bj] = 1, oe[L.g.be] = 1, oe)),
        qe = {},
        re = Object.freeze((qe[L.g.Xg] = 1, qe[L.g.Yg] = 1, qe[L.g.ic] = 1, qe[L.g.jc] = 1, qe[L.g.Zg] = 1, qe[L.g.Hb] = 1, qe[L.g.kc] = 1, qe[L.g.ab] = 1, qe[L.g.ub] = 1, qe[L.g.cb] = 1, qe[L.g.ra] = 1, qe[L.g.mc] = 1, qe[L.g.Ha] = 1, qe[L.g.ah] = 1, qe)),
        se = Object.freeze([L.g.fa, L.g.fb, L.g.qc, L.g.uc, L.g.ad, L.g.La, L.g.Pb]),
        te = Object.freeze([].concat(se)),
        ue = Object.freeze([L.g.Ra, L.g.ue,
            L.g.fd, L.g.Jf, L.g.ne
        ]),
        ve = Object.freeze([].concat(ue)),
        we = {},
        xe = (we[L.g.F] = "1", we[L.g.O] = "2", we[L.g.K] = "3", we[L.g.Ca] = "4", we),
        ye = {},
        ze = Object.freeze((ye[L.g.fa] = 1, ye[L.g.de] = 1, ye[L.g.Da] = 1, ye[L.g.Ib] = 1, ye[L.g.wf] = 1, ye[L.g.ee] = 1, ye[L.g.fe] = 1, ye[L.g.he] = 1, ye[L.g.U] = 1, ye[L.g.ie] = 1, ye[L.g.Ua] = 1, ye[L.g.sa] = 1, ye[L.g.Qa] = 1, ye[L.g.Ra] = 1, ye[L.g.Va] = 1, ye[L.g.Ja] = 1, ye[L.g.wa] = 1, ye[L.g.ke] = 1, ye[L.g.ba] = 1, ye[L.g.Nj] = 1, ye[L.g.pe] = 1, ye[L.g.qe] = 1, ye[L.g.Cf] = 1, ye[L.g.uc] = 1, ye[L.g.xb] = 1, ye[L.g.yb] = 1, ye[L.g.Ka] = 1, ye[L.g.bd] =
            1, ye[L.g.oa] = 1, ye[L.g.Ea] = 1, ye[L.g.Eh] = 1, ye[L.g.Fh] = 1, ye[L.g.Gh] = 1, ye[L.g.Hh] = 1, ye[L.g.Nb] = 1, ye[L.g.La] = 1, ye[L.g.Ob] = 1, ye[L.g.zc] = 1, ye[L.g.gd] = 1, ye[L.g.ya] = 1, ye[L.g.Cb] = 1, ye[L.g.Pb] = 1, ye[L.g.Wa] = 1, ye[L.g.Fa] = 1, ye[L.g.Ma] = 1, ye[L.g.ia] = 1, ye)),
        Ae = {},
        Be = Object.freeze((Ae[L.g.nj] = "s", Ae[L.g.pj] = "y", Ae[L.g.mj] = "p", Ae[L.g.oj] = "h", Ae[L.g.Wg] = "a", Ae[L.g.lj] = "m", Ae));
    Object.freeze(L.g);
    var Ce = {},
        De = E.google_tag_manager = E.google_tag_manager || {},
        Ee = Math.random();
    Ce.Qf = "4340";
    Ce.vd = Number("0") || 0;
    Ce.da = "dataLayer";
    Ce.Mm = "ChEIgMWgrwYQ0P6+mqD34OGUARIkALF3RlliPYb2J6TfqP3ecPdVjP0GREQPTelY9wMdQrlmnkCrGgLxHQ\x3d\x3d";
    var Fe = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        Ge = {
            __paused: 1,
            __tg: 1
        },
        He;
    for (He in Fe) Fe.hasOwnProperty(He) && (Ge[He] = 1);
    var Ie = Ha(""),
        Je, Ke = !1;
    Je = Ke;
    var Le, Me = !1;
    Le = Me;
    var Ne, Oe = !1;
    Ne = Oe;
    Ce.Kc = "www.googletagmanager.com";
    var Pe = "" + Ce.Kc + (Je ? "/gtag/js" : "/gtm.js"),
        Qe = null,
        Re = null,
        Se = {},
        Te = {},
        Ue = function() {
            var a = De.sequence || 1;
            De.sequence = a + 1;
            return a
        };
    Ce.jj = "true";
    var Ve = "";
    Ce.Ne = Ve;
    var We = new function() {
            this.h = "";
            this.s = !1;
            this.M = this.J = this.T = this.C = ""
        },
        Xe = function() {
            var a = We.C.length;
            return "/" === We.C[a - 1] ? We.C.substring(0, a - 1) : We.C
        };

    function Ye(a) {
        for (var b = {}, c = ia(a.split("|")), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return b
    }
    var Ze = new Da,
        $e = {},
        af = {},
        df = {
            name: Ce.da,
            set: function(a, b) {
                A(Ra(a, b), $e);
                bf()
            },
            get: function(a) {
                return cf(a, 2)
            },
            reset: function() {
                Ze = new Da;
                $e = {};
                bf()
            }
        },
        cf = function(a, b) {
            return 2 != b ? Ze.get(a) : ef(a)
        },
        ef = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = $e, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        ff = function(a, b) {
            af.hasOwnProperty(a) || (Ze.set(a, b), A(Ra(a, b), $e), bf())
        },
        bf = function(a) {
            k(af, function(b, c) {
                Ze.set(b, c);
                A(Ra(b), $e);
                A(Ra(b,
                    c), $e);
                a && delete af[b]
            })
        },
        gf = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? ef(a) : Ze.get(a);
            "array" === Wa(d) || "object" === Wa(d) ? c = A(d) : c = d;
            return c
        };
    var lf = [];

    function mf(a) {
        switch (a) {
            case 0:
                return 0;
            case 89:
                return 19;
            case 44:
                return 14;
            case 54:
                return 11;
            case 55:
                return 12;
            case 58:
                return 13;
            case 68:
                return 15;
            case 79:
                return 16;
            case 83:
                return 20;
            case 88:
                return 18;
            case 42:
                return 21;
            case 43:
                return 22
        }
    }

    function P(a) {
        lf[a] = !0;
        var b = mf(a);
        void 0 !== b && (jd[b] = !0)
    }
    P(5);
    P(6);
    P(7);
    P(8);
    P(9);
    P(11);
    P(12);
    P(15);
    P(13);
    P(16);
    P(19);
    P(20);
    P(22);
    P(23);
    P(44);
    P(26);
    P(27);
    P(28);
    P(29);
    P(30);
    P(31);
    P(35);
    P(37);
    P(39);
    P(40);
    P(41);
    P(45);
    P(46);
    P(47);
    P(49);
    P(50);
    P(51);
    P(56);
    P(59);
    P(64);
    P(73);
    P(75);
    P(76);
    P(77);
    P(78);
    P(79);
    P(86);
    nf(29, 87);
    P(90);
    P(91);
    kd[1] = Number('5000') || 6E4;
    kd[2] = Number('') || 50;
    P(95);
    P(99);

    function nf(a, b) {
        for (var c = void 0, d = void 0, e = 0; c === d;)
            if (c = Math.floor(2 * Math.random()), d = Math.floor(2 * Math.random()), e++, 20 < e) return;
        c ? P(a) : P(b)
    }

    function R(a) {
        return !!lf[a]
    }
    var of = function(a) {
        gb("HEALTH", a)
    };
    var pf;
    try {
        pf = JSON.parse(eb("eyIwIjoiSU4iLCIxIjoiSU4tVE4iLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"))
    } catch (a) {
        K(123), of (2), pf = {}
    }
    var qf = function() {
            return pf["0"] || ""
        },
        rf = function() {
            var a = !1;
            return a
        },
        sf = function() {
            var a = "";
            return a
        },
        tf = function() {
            var a = !1;
            return a
        },
        uf = function() {
            var a = "";
            return a
        };
    var vf = /:[0-9]+$/,
        wf = /^\d+\.fls\.doubleclick\.net$/,
        xf = function(a, b, c) {
            for (var d = ia(a.split("&")), e = d.next(); !e.done; e = d.next()) {
                var f = ia(e.value.split("=")),
                    h = f.next().value,
                    l = ja(f);
                if (decodeURIComponent(h.replace(/\+/g, " ")) === b) {
                    var m = l.join("=");
                    return c ? m : decodeURIComponent(m.replace(/\+/g, " "))
                }
            }
        },
        Af = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = yf(a.protocol) || yf(E.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : E.location.port) ||
                ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || E.location.hostname).replace(vf, "").toLowerCase());
            return zf(a, b, c, d, e)
        },
        zf = function(a, b, c, d, e) {
            var f, h = yf(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = Bf(a);
                    break;
                case "protocol":
                    f = h;
                    break;
                case "host":
                    f = a.hostname.replace(vf, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(f);
                        l && l[0] && (f = f.substr(l[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" === h ? 80 : "https" ===
                        h ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || gb("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = xf(f, e));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        yf = function(a) {
            return a ? a.replace(":", "").toLowerCase() :
                ""
        },
        Bf = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        Cf = {},
        Df = 0,
        Ef = function(a) {
            var b = Cf[a];
            if (!b) {
                var c = G.createElement("a");
                a && (c.href = a);
                var d = c.pathname;
                "/" !== d[0] && (a || gb("TAGGING", 1), d = "/" + d);
                var e = c.hostname.replace(vf, "");
                b = {
                    href: c.href,
                    protocol: c.protocol,
                    host: c.host,
                    hostname: e,
                    pathname: d,
                    search: c.search,
                    hash: c.hash,
                    port: c.port
                };
                5 > Df && (Cf[a] = b, Df++)
            }
            return b
        },
        Ff = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n :
                    p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = Ef(a),
                f = a.split(/[?#]/)[0],
                h = e.search,
                l = e.hash;
            "?" === h[0] && (h = h.substring(1));
            "#" === l[0] && (l = l.substring(1));
            h = c(h);
            l = c(l);
            "" !== h && (h = "?" + h);
            "" !== l && (l = "#" + l);
            var m = "" + f + h + l;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        },
        Gf = function(a) {
            var b = Ef(E.location.href),
                c = Af(b, "host", !1);
            if (c && c.match(wf)) {
                var d = Af(b,
                    "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };
    var Hf = {
        "https://www.google.com": "/g",
        "https://www.googlesyndication.com": "/gs",
        "https://www.googleadservices.com": "/as",
        "https://pagead2.googlesyndication.com": "/gs"
    };

    function If(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Ef("" + c + b).href
        }
    }

    function Jf() {
        return We.s || Le
    }

    function Kf() {
        return !!Ce.Ne && "SGTM_TOKEN" !== Ce.Ne.split("@@").join("")
    }

    function Lf(a) {
        for (var b = ia([L.g.zc, L.g.Cb]), c = b.next(); !c.done; c = b.next()) {
            var d = S(a, c.value);
            if (d) return d
        }
    }

    function Mf(a, b) {
        return We.s ? "" + Xe() + (b ? Hf[a] || "" : "") : a
    };
    var Nf = function(a) {
            var b = String(a[qc.ma] || "").replace(/_/g, "");
            0 === b.indexOf("cvt") && (b = "cvt");
            return b
        },
        Of = 0 <= E.location.search.indexOf("?gtm_latency=") || 0 <= E.location.search.indexOf("&gtm_latency=");
    var Qf = function(a) {
            var b = Pf();
            b.pending || (b.pending = []);
            Aa(b.pending, function(c) {
                return c.target.ctid === a.ctid && c.target.isDestination === a.isDestination
            }) || b.pending.push({
                target: a,
                onLoad: void 0
            })
        },
        Rf = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {};
            this.pending = [];
            this.siloed = []
        },
        Pf = function() {
            var a = Rb("google_tag_data", {}),
                b = a.tidr;
            b || (b = new Rf, a.tidr = b);
            return b
        };
    var Sf = {},
        Xf = !1,
        Yf = {
            ctid: "GTM-MF8V29D",
            canonicalContainerId: "",
            Hi: "GTM-MF8V29D",
            Ii: "GTM-MF8V29D"
        };
    Sf.rd = Ha("");
    var ag = function() {
            var a = Zf();
            return Xf ? a.map($f) : a
        },
        cg = function() {
            var a = bg();
            return Xf ? a.map($f) : a
        },
        eg = function() {
            return dg(Yf.ctid)
        },
        fg = function() {
            return dg(Yf.canonicalContainerId || "_" + Yf.ctid)
        },
        Zf = function() {
            return Yf.Hi ? Yf.Hi.split("|") : [Yf.ctid]
        },
        bg = function() {
            return Yf.Ii ? Yf.Ii.split("|") : []
        },
        ig = function() {
            var a = gg(hg());
            if (a) {
                for (; a.parent;) {
                    var b = gg(a.parent);
                    if (!b) break;
                    a = b
                }
                return a
            }
        },
        gg = function(a) {
            var b = Pf();
            return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
        },
        dg = function(a) {
            return Xf ?
                $f(a) : a
        },
        $f = function(a) {
            return "siloed_" + a
        },
        kg = function(a) {
            return Xf ? jg(a) : a
        };

    function jg(a) {
        a = String(a);
        return 0 === a.indexOf("siloed_") ? a.substring(7) : a
    }
    var lg = function() {
        var a = !1;
        if (a) {
            var b = Pf();
            if (b.siloed) {
                for (var c = [], d = Zf().map($f), e = bg().map($f), f = {}, h = 0; h < b.siloed.length; f = {
                        Re: void 0
                    }, h++) f.Re = b.siloed[h], !Xf && Aa(f.Re.isDestination ? e : d, function(l) {
                    return function(m) {
                        return m === l.Re.ctid
                    }
                }(f)) ? Xf = !0 : c.push(f.Re);
                b.siloed = c
            }
        }
    };

    function mg() {
        var a = Pf();
        if (a.pending) {
            for (var b, c = [], d = !1, e = ag(), f = cg(), h = {}, l = 0; l < a.pending.length; h = {
                    Ud: void 0
                }, l++) h.Ud = a.pending[l], Aa(h.Ud.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.Ud.target.ctid
                }
            }(h)) ? d || (b = h.Ud.onLoad, d = !0) : c.push(h.Ud);
            a.pending = c;
            if (b) try {
                b(fg())
            } catch (m) {}
        }
    }
    var ng = function() {
            for (var a = Yf.ctid, b = ag(), c = cg(), d = function(n, p) {
                    var q = {
                        canonicalContainerId: Yf.canonicalContainerId,
                        scriptContainerId: a,
                        state: 2,
                        containers: b.slice(),
                        destinations: c.slice()
                    };
                    Qb && (q.scriptSource = Qb);
                    var t = p ? e.destination : e.container,
                        r = t[n];
                    r ? (p && 0 === r.state && K(93), Object.assign(r, q)) : t[n] = q
                }, e = Pf(), f = ia(b), h = f.next(); !h.done; h = f.next()) d(h.value, !1);
            for (var l = ia(c), m = l.next(); !m.done; m = l.next()) d(m.value, !0);
            e.canonical[fg()] = {};
            mg()
        },
        hg = function() {
            return {
                ctid: eg(),
                isDestination: Sf.rd
            }
        };

    function og(a) {
        var b = Pf();
        (b.siloed = b.siloed || []).push(a)
    }
    var pg = function() {
            var a = Pf().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
            return !1
        },
        qg = function() {
            var a = {};
            k(Pf().destination, function(b, c) {
                0 === c.state && (a[jg(b)] = c)
            });
            return a
        },
        rg = function(a) {
            return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"))
        };
    var sg = {
            sampleRate: "0.005000",
            ej: "",
            dj: Number("5"),
            Jn: Number("")
        },
        tg = [];

    function ug(a) {
        tg.push(a)
    }
    var vg = !1,
        wg;
    if (!(wg = Of)) {
        var xg = Math.random(),
            yg = sg.sampleRate;
        wg = xg < Number(yg)
    }
    var zg = wg,
        Ag = "/a?id=" + Yf.ctid,
        Bg = "https://www.googletagmanager.com" + Ag,
        Cg = void 0,
        Dg = {},
        Eg = void 0,
        Fg = new function() {
            var a = 5;
            0 < sg.dj && (a = sg.dj);
            this.h = 0;
            this.C = [];
            this.s = a
        },
        Gg = 1E3;

    function Hg(a, b) {
        var c = Cg;
        if (void 0 === c)
            if (b) c = Ue();
            else return "";
        for (var d = [Mf("https://www.googletagmanager.com"), Ag], e = ia(tg), f = e.next(); !f.done; f = e.next())
            for (var h = f.value, l = h({
                    eventId: c,
                    Za: !!a,
                    ef: function() {
                        vg = !0
                    }
                }), m = ia(l), n = m.next(); !n.done; n = m.next()) {
                var p = ia(n.value),
                    q = p.next().value,
                    t = p.next().value;
                d.push("&" + q + "=" + t)
            }
        d.push("&z=0");
        return d.join("")
    }

    function Ig() {
        Eg && (E.clearTimeout(Eg), Eg = void 0);
        if (void 0 !== Cg && Jg) {
            var a;
            (a = Dg[Cg]) || (a = Fg.h < Fg.s ? !1 : 1E3 > La() - Fg.C[Fg.h % Fg.s]);
            if (a || 0 >= Gg--) K(1), Dg[Cg] = !0;
            else {
                var b = Fg.h++ % Fg.s;
                Fg.C[b] = La();
                var c = Hg(!0);
                $b(c);
                if (vg) {
                    var d = c.replace("/a?", "/td?");
                    $b(d)
                }
                Jg = vg = !1
            }
        }
    }
    var Jg = !1;

    function Kg(a) {
        Dg[a] || (a !== Cg && (Ig(), Cg = a), Jg = !0, Eg || (Eg = E.setTimeout(Ig, 500)), 2022 <= Hg().length && Ig())
    }
    var Lg = Ba();

    function Mg() {
        Lg = Ba()
    }

    function Ng() {
        return [
            ["v", "3"],
            ["t", "t"],
            ["pid", Lg]
        ]
    };
    var Og = [],
        Pg = [];

    function Qg(a) {
        R(95) && -1 === Pg.indexOf(a) && (Og.push(a), Pg.push(a))
    }

    function Rg(a) {
        var b = [];
        if (!Og.length) return b;
        for (var c = ia(Og), d = c.next(); !d.done; d = c.next()) b.push([d.value, "1"]);
        a.Za && (a.ef(), Og.length = 0);
        return b
    };
    var Sg = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var Tg = function(a) {
        Tg[" "](a);
        return a
    };
    Tg[" "] = function() {};
    var Vg = function() {
        var a = Ug,
            b = "kg";
        if (a.kg && a.hasOwnProperty(b)) return a.kg;
        var c = new a;
        return a.kg = c
    };
    var Ug = function() {
        var a = {};
        this.h = function() {
            var b = Sg.h,
                c = Sg.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.s = function() {
            a[Sg.h] = !0
        }
    };
    var Wg = !1,
        Xg = !1,
        Yg = {},
        Zg = {},
        $g = {
            ad_storage: !1,
            ad_user_data: !1,
            ad_personalization: !1
        };

    function ah() {
        var a = Rb("google_tag_data", {});
        return a.ics = a.ics || new bh
    }
    var bh = function() {
        this.entries = {};
        this.cps = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.h = []
    };
    bh.prototype.default = function(a, b, c, d, e, f) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        gb("TAGGING", 19);
        void 0 == b ? gb("TAGGING", 18) : ch(this, a, "granted" === b, c, d, e, f)
    };
    bh.prototype.waitForUpdate = function(a, b) {
        for (var c = 0; c < a.length; c++) ch(this, a[c], void 0, void 0, "", "", b)
    };
    var ch = function(a, b, c, d, e, f, h) {
        var l = a.entries,
            m = l[b] || {},
            n = m.region,
            p = d && g(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if ("" === e || p === f || (p === e ? n !== f : !p && !n)) {
            var q = !!(h && 0 < h && void 0 === m.update),
                t = {
                    region: p,
                    declare_region: m.declare_region,
                    implicit: m.implicit,
                    default: void 0 !== c ? c : m.default,
                    declare: m.declare,
                    update: m.update,
                    quiet: q
                };
            if ("" !== e || !1 !== m.default) l[b] = t;
            q && E.setTimeout(function() {
                    l[b] === t && t.quiet && (gb("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0), a.notifyListeners())
                },
                h)
        }
    };
    ca = bh.prototype;
    ca.clearTimeout = function(a, b) {
        var c = [a],
            d;
        for (d in Yg) Yg.hasOwnProperty(d) && Yg[d] === a && c.push(d);
        var e = this.entries[a] || {},
            f = this.getConsentState(a);
        if (e.quiet) {
            e.quiet = !1;
            for (var h = ia(c), l = h.next(); !l.done; l = h.next()) dh(this, l.value)
        } else if (void 0 !== b && f !== b)
            for (var m = ia(c), n = m.next(); !n.done; n = m.next()) dh(this, n.value)
    };
    ca.update = function(a, b) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (void 0 != b) {
            var c = this.getConsentState(a),
                d = this.entries;
            (d[a] = d[a] || {}).update = "granted" === b;
            this.clearTimeout(a, c)
        }
    };
    ca.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries,
            h = f[a] || {},
            l = h.declare_region,
            m = c && g(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if ("" === d || m === e || (m === d ? l !== e : !m && !l)) {
            var n = {
                region: h.region,
                declare_region: m,
                declare: "granted" === b,
                implicit: h.implicit,
                default: h.default,
                update: h.update,
                quiet: h.quiet
            };
            if ("" !== d || !1 !== h.declare) f[a] = n
        }
    };
    ca.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries,
            d = c[a] = c[a] || {};
        !1 !== d.implicit && (d.implicit = "granted" === b)
    };
    ca.getConsentState = function(a) {
        var b = this.entries,
            c = b[a] || {},
            d = c.update;
        if (void 0 !== d) return d ? 1 : 2;
        d = c.default;
        if (void 0 !== d) return d ? 1 : 2;
        if (Yg.hasOwnProperty(a)) {
            var e = b[Yg[a]] || {};
            d = e.update;
            if (void 0 !== d) return d ? 1 : 2;
            d = e.default;
            if (void 0 !== d) return d ? 1 : 2
        }
        d = c.declare;
        if (void 0 !== d) return d ? 1 : 2;
        d = c.implicit;
        return void 0 !== d ? d ? 3 : 4 : ld(19) && $g.hasOwnProperty(a) ? (gb("TAGGING", 22), $g[a] ? 3 : 4) : 0
    };
    ca.setCps = function() {};
    ca.addListener = function(a, b) {
        this.h.push({
            consentTypes: a,
            Wk: b
        })
    };
    var dh = function(a, b) {
        for (var c = 0; c < a.h.length; ++c) {
            var d = a.h[c];
            za(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.Ji = !0)
        }
    };
    bh.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.h.length; ++c) {
            var d = this.h[c];
            if (d.Ji) {
                d.Ji = !1;
                try {
                    d.Wk({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    };

    function eh(a) {
        var b = ah();
        if ("ad_user_data" === a)
            if (ld(22)) {
                var c = b.getConsentState("ad_storage");
                if (2 !== c && 4 !== c) return c
            } else ld(21) && (a = "ad_storage");
        return b.getConsentState(a)
    }
    var fh = function(a) {
            ah().accessedAny = !0;
            return (g(a) ? [a] : a).every(function(b) {
                switch (eh(b)) {
                    case 1:
                    case 3:
                        return !0;
                    case 2:
                    case 4:
                        return !1;
                    default:
                        return !0
                }
            })
        },
        gh = function(a) {
            ah().accessedAny = !0;
            return eh(a)
        },
        hh = function() {
            var a = {},
                b;
            for (b in Zg) Zg.hasOwnProperty(b) && (a[b] = {
                enabled: Zg[b].enabled,
                region: Zg[b].region
            });
            for (var c = {}, d = ia(Object.keys(a)), e = d.next(); !e.done; e = d.next()) {
                var f = e.value;
                c[f] = a[f].enabled
            }
            return c
        },
        ih = function(a) {
            var b = ah();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        jh =
        function() {
            if (!Vg().h()) return !1;
            var a = ah();
            a.accessedAny = !0;
            return a.active
        },
        kh = function(a, b) {
            if (ld(21)) {
                for (var c = [], d = a.find(function(l) {
                        return "ad_storage" === l
                    }), e = ia(a), f = e.next(); !f.done; f = e.next()) {
                    var h = f.value;
                    if ("ad_user_data" === h) {
                        if (d) continue;
                        c.push("ad_storage")
                    }
                    c.push(h)
                }
                ah().addListener(c, b)
            } else ah().addListener(a, b)
        },
        lh = function(a, b) {
            ah().notifyListeners(a, b)
        },
        mh = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!ih(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                kh(b, function(e) {
                    d ||
                        c() || (d = !0, a(e))
                })
            } else a({})
        },
        nh = function(a, b) {
            function c() {
                for (var l = [], m = 0; m < e.length; m++) {
                    var n = e[m];
                    fh(n) && !f[n] && l.push(n)
                }
                return l
            }

            function d(l) {
                for (var m = 0; m < l.length; m++) f[l[m]] = !0
            }
            var e = g(b) ? [b] : b,
                f = {},
                h = c();
            h.length !== e.length && (d(h), kh(e, function(l) {
                function m(q) {
                    0 !== q.length && (d(q), l.consentTypes = q, a(l))
                }
                var n = c();
                if (0 !== n.length) {
                    var p = Object.keys(f).length;
                    n.length + p >= e.length ? m(n) : E.setTimeout(function() {
                        m(c())
                    }, 500)
                }
            }))
        };

    function oh() {}

    function ph() {};
    var qh = [L.g.F, L.g.O, L.g.K, L.g.Ca],
        rh, sh, th = function(a) {
            for (var b = a[L.g.ae], c = Array.isArray(b) ? b : [b], d = {
                    Hd: 0
                }; d.Hd < c.length; d = {
                    Hd: d.Hd
                }, ++d.Hd) k(a, function(e) {
                return function(f, h) {
                    if (f !== L.g.ae) {
                        var l = c[e.Hd],
                            m = qf(),
                            n = pf["1"] || "";
                        Xg = !0;
                        Wg && gb("TAGGING", 20);
                        ah().declare(f, h, l, m, n)
                    }
                }
            }(d))
        },
        uh = function(a) {
            R(100) && (!sh && rh && Qg("crc"), sh = !0);
            var b = a[L.g.ae];
            b && K(40);
            var c = a[L.g.Mg];
            c && K(41);
            for (var d = za(b) ? b : [b], e = {
                    Id: 0
                }; e.Id < d.length; e = {
                    Id: e.Id
                }, ++e.Id) k(a, function(f) {
                return function(h, l) {
                    if (h !== L.g.ae &&
                        h !== L.g.Mg) {
                        var m = d[f.Id],
                            n = Number(c),
                            p = qf(),
                            q = pf["1"] || "";
                        Wg = !0;
                        Xg && gb("TAGGING", 20);
                        ah().default(h, l, m, p, q, n)
                    }
                }
            }(e))
        },
        vh = function(a, b) {
            rh = !0;
            k(a, function(c, d) {
                Wg = !0;
                Xg && gb("TAGGING", 20);
                ah().update(c, d)
            });
            lh(b.eventId, b.priorityId)
        },
        U = function(a) {
            Array.isArray(a) || (a = [a]);
            return a.every(function(b) {
                return fh(b)
            })
        },
        wh = function(a, b) {
            nh(a, b)
        },
        xh = function(a, b) {
            mh(a, b)
        },
        yh = function() {
            var a = [L.g.F, L.g.Ca, L.g.K];
            ah().waitForUpdate(a, 500)
        },
        zh = function(a) {
            for (var b = ia(a), c = b.next(); !c.done; c = b.next()) {
                var d =
                    c.value;
                ah().clearTimeout(d, void 0)
            }
            lh()
        };
    var Ah = function() {
        function a(b) {
            De.pscdl = b
        }
        if (void 0 === De.pscdl) try {
            "cookieDeprecationLabel" in Pb ? (a("pending"), Pb.cookieDeprecationLabel.getValue().then(a)) : a("noapi")
        } catch (b) {
            a("error")
        }
    };
    var Bh = /[A-Z]+/,
        Ch = /\s/,
        Dh = function(a, b) {
            if (g(a)) {
                a = Ja(a);
                var c = a.indexOf("-");
                if (!(0 > c)) {
                    var d = a.substring(0, c);
                    if (Bh.test(d)) {
                        var e = a.substring(c + 1),
                            f;
                        if (b) {
                            var h = function(n) {
                                var p = n.indexOf("/");
                                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
                            };
                            f = h(e);
                            if ("DC" === d && 2 === f.length) {
                                var l = h(f[1]);
                                2 === l.length && (f[1] = l[0], f.push(l[1]))
                            }
                        } else {
                            f = e.split("/");
                            for (var m = 0; m < f.length; m++)
                                if (!f[m] || Ch.test(f[m]) && ("AW" !== d || 1 !== m)) return
                        }
                        return {
                            id: a,
                            prefix: d,
                            X: d + "-" + f[0],
                            N: f
                        }
                    }
                }
            }
        },
        Fh = function(a, b) {
            for (var c = {}, d = 0; d < a.length; ++d) {
                var e = Dh(a[d], b);
                e && (c[e.id] = e)
            }
            Eh(c);
            var f = [];
            k(c, function(h, l) {
                f.push(l)
            });
            return f
        };

    function Eh(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.N[1] && b.push(d.X)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Gh = "",
        Hh = [];

    function Ih(a) {
        var b = [];
        Gh && b.push(["dl", encodeURIComponent(Gh)]);
        0 < Hh.length && b.push(["tdp", Hh.join(".")]);
        a.Za && (Gh = "", Hh.length = 0, b.length && a.ef());
        return b
    };
    var Oh = [];

    function Ph(a) {
        if (!Oh.length) return [];
        var b = [
            ["tdc", Oh.join("!")]
        ];
        a.Za && (a.ef(), Oh.length = 0);
        return b
    };
    var Qh = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        Rh = {},
        Sh = Object.freeze((Rh[L.g.La] = !0, Rh)),
        Th = 0 <= G.location.search.indexOf("?gtm_diagnostics=") || 0 <= G.location.search.indexOf("&gtm_diagnostics="),
        Vh = function(a, b, c) {
            if (zg && "config" === a && !(1 < Dh(b).N.length)) {
                var d, e = Rb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = A(c.J);
                A(c.h, f);
                var h = [],
                    l;
                for (l in d) {
                    var m = Uh(d[l], f);
                    m.length && (Th && console.log(m), h.push(l))
                }
                h.length && (h.length && zg && Oh.push(b + "*" + h.join(".")), gb("TAGGING", Qh[G.readyState] ||
                    14));
                d[b] = f
            }
        };

    function Wh(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function Uh(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, t) {
                var r = t[q];
                return void 0 === r ? Sh[q] : r
            },
            f;
        for (f in Wh(a, b)) {
            var h = (d ? d + "." : "") + f,
                l = e(f, a),
                m = e(f, b),
                n = "object" === Wa(l) || "array" === Wa(l),
                p = "object" === Wa(m) || "array" === Wa(m);
            if (n && p) Uh(l, m, c, h);
            else if (n || p || l !== m) c[h] = !0
        }
        return Object.keys(c)
    };
    var Xh = function(a, b, c, d, e, f, h, l, m, n, p) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.M = d;
            this.C = e;
            this.J = f;
            this.s = h;
            this.eventMetadata = l;
            this.onSuccess = m;
            this.onFailure = n;
            this.isGtmEvent = p
        },
        Yh = function(a, b) {
            var c = [];
            switch (b) {
                case 3:
                    c.push(a.h);
                    c.push(a.M);
                    c.push(a.C);
                    c.push(a.J);
                    c.push(a.s);
                    break;
                case 2:
                    c.push(a.h);
                    break;
                case 1:
                    c.push(a.M);
                    c.push(a.C);
                    c.push(a.J);
                    c.push(a.s);
                    break;
                case 4:
                    c.push(a.h), c.push(a.M), c.push(a.C), c.push(a.J)
            }
            return c
        },
        S = function(a, b, c, d) {
            for (var e = ia(Yh(a, void 0 === d ? 3 :
                    d)), f = e.next(); !f.done; f = e.next()) {
                var h = f.value;
                if (void 0 !== h[b]) return h[b]
            }
            return c
        },
        Zh = function(a) {
            for (var b = {}, c = Yh(a, 4), d = ia(c), e = d.next(); !e.done; e = d.next())
                for (var f = Object.keys(e.value), h = ia(f), l = h.next(); !l.done; l = h.next()) b[l.value] = 1;
            return Object.keys(b)
        },
        $h = function(a, b, c) {
            function d(n) {
                Ya(n) && k(n, function(p, q) {
                    f = !0;
                    e[p] = q
                })
            }
            var e = {},
                f = !1,
                h = Yh(a, void 0 === c ? 3 : c);
            h.reverse();
            for (var l = ia(h), m = l.next(); !m.done; m = l.next()) d(m.value[b]);
            return f ? e : void 0
        },
        ai = function(a) {
            for (var b = [L.g.Qc,
                    L.g.Mc, L.g.Nc, L.g.Oc, L.g.Pc, L.g.Rc, L.g.Sc
                ], c = Yh(a, 3), d = ia(c), e = d.next(); !e.done; e = d.next()) {
                for (var f = e.value, h = {}, l = !1, m = ia(b), n = m.next(); !n.done; n = m.next()) {
                    var p = n.value;
                    void 0 !== f[p] && (h[p] = f[p], l = !0)
                }
                var q = l ? h : void 0;
                if (q) return q
            }
            return {}
        },
        bi = function(a, b) {
            this.Ie = a;
            this.Je = b;
            this.C = {};
            this.Eb = {};
            this.h = {};
            this.J = {};
            this.Cc = {};
            this.Db = {};
            this.s = {};
            this.Ia = function() {};
            this.T = function() {};
            this.M = !1
        },
        ci = function(a, b) {
            a.C = b;
            return a
        },
        di = function(a, b) {
            a.Eb = b;
            return a
        },
        ei = function(a, b) {
            a.h = b;
            return a
        },
        fi = function(a, b) {
            a.J = b;
            return a
        },
        gi = function(a, b) {
            a.Cc = b;
            return a
        },
        hi = function(a, b) {
            a.Db = b;
            return a
        },
        ii = function(a, b) {
            a.s = b || {};
            return a
        },
        ji = function(a, b) {
            a.Ia = b;
            return a
        },
        ki = function(a, b) {
            a.T = b;
            return a
        },
        li = function(a, b) {
            a.M = b;
            return a
        },
        mi = function(a) {
            return new Xh(a.Ie, a.Je, a.C, a.Eb, a.h, a.J, a.Db, a.s, a.Ia, a.T, a.M)
        };
    var ni = {};

    function oi(a, b, c) {
        zg && void 0 !== a && (ni[a] = ni[a] || [], ni[a].push(c + b), Kg(a))
    }

    function pi(a) {
        var b = a.eventId,
            c = a.Za,
            d = [],
            e = ni[b] || [];
        e.length && d.push(["epr", e.join(".")]);
        c && delete ni[b];
        return d
    };
    var ri = function(a, b, c, d) {
            var e = Dh(c, d.isGtmEvent);
            e && qi.push("event", [b, a], e, d)
        },
        si = function(a, b, c, d) {
            var e = Dh(c, d.isGtmEvent);
            e && qi.push("get", [a, b], e, d)
        },
        ti = function() {
            this.status = 1;
            this.J = {};
            this.h = {};
            this.M = {};
            this.T = null;
            this.C = {};
            this.s = !1
        },
        ui = function(a, b, c, d) {
            var e = La();
            this.type = a;
            this.C = e;
            this.h = b;
            this.s = c;
            this.messageContext = d
        },
        vi = function() {
            this.s = {};
            this.C = {};
            this.h = []
        },
        wi = function(a, b) {
            var c = b.X;
            return a.s[c] = a.s[c] || new ti
        },
        xi = function(a, b, c, d) {
            if (d.h) {
                var e = wi(a, d.h),
                    f = e.T;
                if (f) {
                    var h =
                        A(c),
                        l = A(e.J[d.h.id]),
                        m = A(e.C),
                        n = A(e.h),
                        p = A(a.C),
                        q = {};
                    if (zg) try {
                        q = A($e)
                    } catch (v) {
                        K(72)
                    }
                    var t = d.h.prefix,
                        r = function(v) {
                            oi(d.messageContext.eventId, t, v)
                        },
                        u = mi(li(ki(ji(ii(gi(fi(hi(ei(di(ci(new bi(d.messageContext.eventId, d.messageContext.priorityId), h), l), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (r) {
                                var v = r;
                                r = void 0;
                                v("2");
                                if (d.messageContext.onSuccess) d.messageContext.onSuccess()
                            }
                        }), function() {
                            if (r) {
                                var v = r;
                                r = void 0;
                                v("3");
                                if (d.messageContext.onFailure) d.messageContext.onFailure()
                            }
                        }), !!d.messageContext.isGtmEvent));
                    try {
                        oi(d.messageContext.eventId, t, "1"), Vh(d.type, d.h.id, u), f(d.h.id, b, d.C, u)
                    } catch (v) {
                        oi(d.messageContext.eventId, t, "4")
                    }
                }
            }
        };
    vi.prototype.register = function(a, b, c) {
        var d = wi(this, a);
        3 !== d.status && (d.T = b, d.status = 3, c && (A(d.h, c), d.h = c), this.flush())
    };
    vi.prototype.push = function(a, b, c, d) {
        void 0 !== c && (1 === wi(this, c).status && (wi(this, c).status = 2, this.push("require", [{}], c, {})), wi(this, c).s && (d.deferrable = !1));
        this.h.push(new ui(a, c, b, d));
        d.deferrable || this.flush()
    };
    vi.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length; e = {
                Rb: void 0,
                cg: void 0
            }) {
            var f = this.h[0],
                h = f.h;
            if (f.messageContext.deferrable) !h || wi(this, h).s ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== wi(this, h).status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        k(f.s[0], function(t, r) {
                            A(Ra(t, r), b.C)
                        });
                        break;
                    case "config":
                        var l = wi(this, h);
                        e.Rb = {};
                        k(f.s[0], function(t) {
                            return function(r, u) {
                                A(Ra(r, u), t.Rb)
                            }
                        }(e));
                        var m = !!e.Rb[L.g.Pb];
                        delete e.Rb[L.g.Pb];
                        var n = h.X === h.id;
                        m || (n ? l.C = {} : l.J[h.id] = {});
                        l.s && m || xi(this, L.g.aa, e.Rb, f);
                        l.s = !0;
                        n ? A(e.Rb, l.C) : (A(e.Rb, l.J[h.id]), K(70));
                        d = !0;
                        break;
                    case "event":
                        e.cg = {};
                        k(f.s[0], function(t) {
                            return function(r, u) {
                                A(Ra(r, u), t.cg)
                            }
                        }(e));
                        xi(this, f.s[1], e.cg, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[L.g.lb] = f.s[0], p[L.g.wb] = f.s[1], p);
                        xi(this, L.g.Oa, q, f)
                }
                this.h.shift();
                yi(this, f)
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var yi = function(a, b) {
            if ("require" !== b.type)
                if (b.h)
                    for (var c = wi(a, b.h).M[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.s)
                        if (a.s.hasOwnProperty(e)) {
                            var f = a.s[e];
                            if (f && f.M)
                                for (var h = f.M[b.type] || [], l = 0; l < h.length; l++) h[l]()
                        }
        },
        zi = function(a, b) {
            var c = qi,
                d = A(b);
            A(wi(c, a).h, d);
            wi(c, a).h = d
        },
        qi = new vi;

    function Ai(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var Bi = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Ci = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var Di = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function Ei() {
        return ob ? !!vb && !!vb.platform : !1
    }

    function Fi() {
        return yb("iPhone") && !yb("iPod") && !yb("iPad")
    }

    function Gi() {
        Fi() || yb("iPad") || yb("iPod")
    };
    Ab();
    zb() || yb("Trident") || yb("MSIE");
    yb("Edge");
    !yb("Gecko") || -1 != ub().toLowerCase().indexOf("webkit") && !yb("Edge") || yb("Trident") || yb("MSIE") || yb("Edge"); - 1 != ub().toLowerCase().indexOf("webkit") && !yb("Edge") && yb("Mobile");
    Ei() || yb("Macintosh");
    Ei() || yb("Windows");
    (Ei() ? "Linux" === vb.platform : yb("Linux")) || Ei() || yb("CrOS");
    Ei() || yb("Android");
    Fi();
    yb("iPad");
    yb("iPod");
    Gi();
    ub().toLowerCase().indexOf("kaios");
    var Hi = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var h = a.charCodeAt(e - 1);
                if (38 == h || 63 == h) {
                    var l = a.charCodeAt(e + f);
                    if (!l || 61 == l || 38 == l || 35 == l) return e
                }
                e += f + 1
            }
            return -1
        },
        Ii = /#|$/,
        Ji = function(a, b) {
            var c = a.search(Ii),
                d = Hi(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        Ki = /[?&]($|#)/,
        Li = function(a, b, c) {
            for (var d, e = a.search(Ii), f = 0, h, l = []; 0 <= (h = Hi(a, f, b, e));) l.push(a.substring(f,
                h)), f = Math.min(a.indexOf("&", h) + 1 || e, e);
            l.push(a.slice(f));
            d = l.join("").replace(Ki, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, t = d.indexOf("#");
                0 > t && (t = d.length);
                var r = d.indexOf("?"),
                    u;
                0 > r || r > t ? (r = t, u = "") : u = d.substring(r + 1, t);
                q = [d.slice(0, r), u, d.slice(t)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var Mi = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        Tg(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        Ni = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function Oi(a) {
        if (!a || !G.head) return null;
        var b = Pi("META");
        G.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var Qi = function(a) {
            if (E.top == E) return 0;
            if (void 0 === a ? 0 : a) {
                var b = E.location.ancestorOrigins;
                if (b) return b[b.length - 1] == E.location.origin ? 1 : 2
            }
            return Mi(E.top) ? 1 : 2
        },
        Pi = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function Ri(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = Pi("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var h = a.google_image_requests,
                        l = jb(h, e);
                    0 <= l && Array.prototype.splice.call(h, l, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            Di(e, "load", f);
            Di(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Ti = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            Ni(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            Si(c, b)
        },
        Si = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else Ri(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Ui = function() {};
    var Vi = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Wi = function(a, b) {
            b = void 0 === b ? {} : b;
            this.s = a;
            this.h = null;
            this.M = {};
            this.Ia = 0;
            var c;
            this.T = null != (c = b.Zi) ? c : 500;
            var d;
            this.J = null != (d = b.xn) ? d : !1;
            this.C = null
        };
    sa(Wi, Ui);
    var Yi = function(a) {
        return "function" === typeof a.s.__tcfapi || null != Xi(a)
    };
    Wi.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.J
            },
            d = Ci(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.T && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.T));
        var f = function(h, l) {
            clearTimeout(e);
            h ? (c = h, c.internalErrorState = Vi(c), c.internalBlockOnErrors = b.J, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Zi(this, "addEventListener", f)
        } catch (h) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Wi.prototype.removeEventListener = function(a) {
        a && a.listenerId && Zi(this, "removeEventListener", null, a.listenerId)
    };
    var aj = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var h = e;
            if (0 === h) return !1;
            var l = c;
            2 === c ? (l = 0, 2 === h && (l = 1)) : 3 === c && (l = 1, 1 === h && (l = 0));
            var m;
            if (0 === l)
                if (a.purpose && a.vendor) {
                    var n = $i(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && $i(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === l ? a.purpose && a.vendor ? $i(a.purpose.legitimateInterests,
                b) && $i(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        $i = function(a, b) {
            return !(!a || !a[b])
        },
        Zi = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.s.__tcfapi) {
                var e = a.s.__tcfapi;
                e(b, 2, c, d)
            } else if (Xi(a)) {
                bj(a);
                var f = ++a.Ia;
                a.M[f] = c;
                if (a.h) {
                    var h = {};
                    a.h.postMessage((h.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, h), "*")
                }
            } else c({}, !1)
        },
        Xi = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.s, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (l) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var h = c.parent;
                            if (h && h != c) {
                                f = h;
                                break b
                            }
                        } catch (l) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        bj = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.M[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Di(a.s, "message", a.C))
        },
        cj = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Vi(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (Ti({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var dj = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };

    function ej() {
        var a = De.tcf || {};
        return De.tcf = a
    }
    var kj = function() {
        var a = ej(),
            b = new Wi(E, {
                Zi: -1
            });
        Yi(b) && !fj() && !gj() && K(124);
        if (!a.active && Yi(b)) {
            fj() && (a.active = !0, a.Gb = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, ah().active = !0, a.tcString = "tcunavailable");
            yh();
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState) hj(a), zh([L.g.F, L.g.Ca, L.g.K]), ah().active = !0;
                    else if (a.gdprApplies = c.gdprApplies, a.cmpId = c.cmpId, a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode, gj() && (a.active = !0), !ij(c) || fj() || gj()) {
                        a.tcfPolicyVersion = c.tcfPolicyVersion;
                        var d;
                        if (!1 === c.gdprApplies) {
                            var e = {},
                                f;
                            for (f in dj) dj.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if (ij(c)) {
                            var h = {},
                                l;
                            for (l in dj)
                                if (dj.hasOwnProperty(l))
                                    if ("1" === l) {
                                        var m, n = c,
                                            p = {
                                                bl: !0
                                            };
                                        p = void 0 === p ? {} : p;
                                        m = cj(n) ? !1 === n.gdprApplies ? !0 : "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p.bl || "string" !== typeof n.tcString || !n.tcString.length ? !p.Cn : aj(n, "1", 0) : !1;
                                        h["1"] = m
                                    } else h[l] = aj(c, l, dj[l]);
                            d = h
                        }
                        if (d) {
                            a.tcString = c.tcString || "tcempty";
                            a.Gb = d;
                            var q = {},
                                t = (q[L.g.F] = a.Gb["1"] ? "granted" :
                                    "denied", q);
                            !0 !== a.gdprApplies ? (zh([L.g.F, L.g.Ca, L.g.K]), ah().active = !0) : (t[L.g.Ca] = a.Gb["3"] && a.Gb["4"] ? "granted" : "denied", "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion ? t[L.g.K] = a.Gb["1"] && a.Gb["7"] ? "granted" : "denied" : zh([L.g.K]), vh(t, {
                                eventId: 0
                            }, {
                                gdprApplies: a ? a.gdprApplies : void 0,
                                tcString: jj() || ""
                            }))
                        }
                    } else zh([L.g.F, L.g.Ca, L.g.K])
                })
            } catch (c) {
                hj(a), zh([L.g.F, L.g.Ca, L.g.K]), ah().active = !0
            }
        }
    };

    function hj(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function ij(a) {
        return "tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus || "cmpuishown" === a.eventStatus
    }
    var fj = function() {
        return !0 === E.gtag_enable_tcf_support
    };

    function gj() {
        return !0 === ej().enableAdvertiserConsentMode
    }
    var jj = function() {
            var a = ej();
            if (a.active) return a.tcString
        },
        lj = function() {
            var a = ej();
            if (a.active && void 0 !== a.gdprApplies) return a.gdprApplies ? "1" : "0"
        },
        mj = function(a) {
            if (!dj.hasOwnProperty(String(a))) return !0;
            var b = ej();
            return b.active && b.Gb ? !!b.Gb[String(a)] : !0
        },
        nj = function() {
            return Yi(new Wi(E, {
                Zi: -1
            }))
        };
    var oj = [L.g.F, L.g.O, L.g.K, L.g.Ca],
        pj = {},
        qj = (pj[L.g.F] = 1, pj[L.g.O] = 2, pj);

    function rj(a) {
        if (void 0 === a) return 0;
        switch (S(a, L.g.fa)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2
        }
    }
    var sj = function(a) {
            var b = rj(a);
            if (3 === b) return !1;
            switch (gh(L.g.Ca)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                    return !1;
                case 4:
                    return 2 === b;
                case 0:
                    return !0;
                default:
                    return !1
            }
        },
        tj = function() {
            return jh() || !fh(L.g.F) || !fh(L.g.O)
        },
        uj = function() {
            var a = {},
                b;
            for (b in qj) qj.hasOwnProperty(b) && (a[qj[b]] = gh(b));
            return "G1" + pc(a[1] || 0) + pc(a[2] || 0)
        },
        vj = {},
        wj = (vj[L.g.F] = 0, vj[L.g.O] = 1, vj[L.g.K] = 2, vj[L.g.Ca] = 3, vj);

    function xj(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }
    var yj = function(a) {
            for (var b = "1", c = 0; c < oj.length; c++) {
                var d = b,
                    e, f = oj[c],
                    h = Yg[f];
                e = void 0 === h ? 0 : wj.hasOwnProperty(h) ? 12 | wj[h] : 8;
                var l = ah();
                l.accessedAny = !0;
                var m = l.entries[f] || {};
                e = e << 2 | xj(m.implicit);
                b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [xj(m.declare) << 4 | xj(m.default) << 2 | xj(m.update)])
            }
            var n = b,
                p;
            p = "" + (jh() << 2 | rj(a));
            return n + p
        },
        zj = function() {
            var a;
            a = void 0 === a ? {} : a;
            if (!fh(L.g.K)) return "-";
            for (var b =
                    hh(), c = "", d = ia(Object.keys(Be)), e = d.next(); !e.done; e = d.next()) {
                var f = e.value;
                !1 !== b[f] && !1 !== a[f] && (c += Be[f])
            }
            return "" === c ? "-" : c
        },
        Aj = function() {
            return !1 !== pf["6"] || (fj() || gj()) && "1" === lj() ? "1" : "0"
        },
        Bj = function() {
            return (!1 !== pf["6"] ? !0 : !(!fj() && !gj()) && "1" === lj()) || !fh(L.g.K)
        },
        Cj = function() {
            var a = "0",
                b = "0",
                c;
            var d = ej();
            c = d.active ? d.cmpId : void 0;
            "number" === typeof c && 0 <= c && 4095 >= c && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c &
                63
            ]);
            var e = "0",
                f;
            var h = ej();
            f = h.active ? h.tcfPolicyVersion : void 0;
            "number" === typeof f && 0 <= f && 63 >= f && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f]);
            var l = 0;
            !1 !== pf["6"] && (l |= 1);
            "1" === lj() && (l |= 2);
            fj() && (l |= 4);
            var m;
            var n = ej();
            m = void 0 !== n.enableAdvertiserConsentMode ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
            "1" === m && (l |= 8);
            ah().waitPeriodTimedOut && (l |= 16);
            return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [l]
        };
    var Dj = function() {
        var a = !1;
        return a
    };
    var Ej = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        Fj = function(a, b) {
            var c = Yf.ctid.split("-")[0].toUpperCase(),
                d = {};
            d.ctid = Yf.ctid;
            d.sm = Ce.vd;
            d.ym = Ce.Qf;
            d.Ql = Sf.rd ? 2 : 1;
            d.si = Yf.canonicalContainerId;
            d.si !== a && (d.hf = a);
            R(65) ? d.Vi = 2 : R(66) && (d.Vi = 1);
            Je ? (d.df = Ej[c], d.df || (d.df = 0)) : d.df = Ne ? 13 : 10;
            Le ? d.ug = 1 : Dj() ? d.ug = 2 : d.ug = 3;
            var e = {};
            e[6] = Xf;
            R(87) && !Xf && (e[1] = !0);
            d.Mk = e;
            var f;
            var h = d.df,
                l = d.ug;
            void 0 === h ? f = "" : (l || (l = 0), f = "" + Id(1, 1) + oc(h << 2 | l));
            var m = d.wn,
                n = 4 + f + (m ? "" + Id(2, 1) + oc(m) : ""),
                p, q = d.ym;
            p = q && Hd.test(q) ?
                "" + Id(3, 2) + q : "";
            var t, r = d.sm;
            t = r ? "" + Id(4, 1) + oc(r) : "";
            var u;
            var v = d.ctid;
            if (v && b) {
                var w = v.split("-"),
                    x = w[0].toUpperCase();
                if ("GTM" !== x && "OPT" !== x) u = "";
                else {
                    var y = w[1];
                    u = "" + Id(5, 3) + oc(1 + y.length) + (d.Ql || 0) + y
                }
            } else u = "";
            var B = d.Vi,
                z = d.si,
                C = d.hf,
                H = d.Hn,
                F = n + p + t + u + (B ? "" + Id(6, 1) + oc(B) : "") + (z ? "" + Id(7, 3) + oc(z.length) + z : "") + (C ? "" + Id(8, 3) + oc(C.length) + C : "") + (H ? "" + Id(9, 3) + oc(H.length) + H : ""),
                D;
            var J = d.Mk;
            J = void 0 === J ? {} : J;
            for (var M = [], O = ia(Object.keys(J)), T = O.next(); !T.done; T = O.next()) {
                var N = T.value;
                M[Number(N)] =
                    J[N]
            }
            if (M.length) {
                var Q = Id(10, 3),
                    ba;
                if (0 === M.length) ba = oc(0);
                else {
                    for (var aa = [], V = 0, ua = !1, ea = 0; ea < M.length; ea++) {
                        ua = !0;
                        var qa = ea % 6;
                        M[ea] && (V |= 1 << qa);
                        5 === qa && (aa.push(oc(V)), V = 0, ua = !1)
                    }
                    ua && aa.push(oc(V));
                    ba = aa.join("")
                }
                var Ca = ba;
                D = "" + Q + oc(Ca.length) + Ca
            } else D = "";
            return F + D
        };
    var Gj = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var h = e[f].split("="),
                l = h[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var m = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var Jj = function(a, b, c, d) {
            return Hj(d) ? Gj(a, String(b || Ij()), c) : []
        },
        Mj = function(a, b, c, d, e) {
            if (Hj(e)) {
                var f = Kj(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Lj(f, function(h) {
                        return h.Se
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Lj(f, function(h) {
                        return h.Td
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Nj(a, b, c, d) {
        var e = Ij(),
            f = window;
        "null" !== f.origin && (f.document.cookie = a);
        var h = Ij();
        return e != h || void 0 != c && 0 <= Jj(b, h, !1, d).indexOf(c)
    }
    var Rj = function(a, b, c) {
            function d(r, u, v) {
                if (null == v) return delete h[u], r;
                h[u] = v;
                return r + "; " + u + "=" + v
            }

            function e(r, u) {
                if (null == u) return delete h[u], r;
                h[u] = !0;
                return r + "; " + u
            }
            if (!Hj(c.tb)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Oj(b), f = a + "=" + b);
            var h = {};
            f = d(f, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            f = d(f, "expires", l);
            f = d(f, "max-age", c.Dn);
            f = d(f, "samesite",
                c.Fn);
            c.Gn && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = Pj(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        t = d(f, "domain", q);
                    t = e(t, c.flags);
                    if (!Qj(q, c.path) && Nj(t, a, b, c.tb)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return Qj(m, c.path) ? 1 : Nj(f, a, b, c.tb) ? 0 : 1
        },
        Sj = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Rj(a, b, c)
        };

    function Lj(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var l = a[h],
                m = b(l);
            m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }

    function Kj(a, b, c) {
        for (var d = [], e = Jj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var h = e[f].split("."),
                l = h.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var m = h.shift();
                m && (m = m.split("-"), d.push({
                    id: h.join("."),
                    Se: 1 * m[0] || 1,
                    Td: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var Oj = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Tj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Uj = /(^|\.)doubleclick\.net$/i,
        Qj = function(a, b) {
            return Uj.test(window.document.location.hostname) || "/" === b && Tj.test(a)
        },
        Ij = function() {
            return "null" !== window.origin ? window.document.cookie : ""
        },
        Pj = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Uj.test(e) || Tj.test(e) || a.push("none");
            return a
        },
        Hj = function(a) {
            return a && Vg().h() ? (g(a) ? [a] : a).every(function(b) {
                return ih(b) && fh(b)
            }) : !0
        },
        Vj = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Wj = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        },
        Xj = function(a, b) {
            var c = "" + Vj(a),
                d = Wj(b);
            1 < d && (c += "-" + d);
            return c
        };
    var Yj = function(a) {
            var b = Math.round(2147483647 * Math.random()),
                c;
            if (a) {
                var d = 1,
                    e, f, h;
                if (a)
                    for (d = 0, f = a.length - 1; 0 <= f; f--) h = a.charCodeAt(f), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 !== e ? d ^ e >> 21 : d;
                c = String(b ^ d & 2147483647)
            } else c = String(b);
            return c
        },
        Zj = function(a) {
            return [Yj(a), Math.round(La() / 1E3)].join(".")
        },
        ak = function(a, b, c, d, e) {
            var f = Vj(b);
            return Mj(a, f, Wj(c), d, e)
        },
        bk = function(a, b, c, d) {
            return [b, Xj(c, d), a].join(".")
        };

    function ck(a, b, c, d) {
        var e, f = Number(null != a.Vb ? a.Vb : void 0);
        0 !== f && (e = new Date((b || La()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            tb: d
        }
    };
    var dk;
    var hk = function() {
            var a = ek,
                b = fk,
                c = gk(),
                d = function(h) {
                    a(h.target || h.srcElement || {})
                },
                e = function(h) {
                    b(h.target || h.srcElement || {})
                };
            if (!c.init) {
                ac(G, "mousedown", d);
                ac(G, "keyup", d);
                ac(G, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        ik = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            gk().decorators.push(f)
        },
        jk = function(a, b, c) {
            for (var d = gk().decorators, e = {}, f = 0; f < d.length; ++f) {
                var h =
                    d[f],
                    l;
                if (l = !c || h.forms) a: {
                    var m = h.domains,
                        n = a,
                        p = !!h.sameHost;
                    if (m && (p || n !== G.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                if (l) {
                    var t = h.placement;
                    void 0 == t && (t = h.fragment ? 2 : 1);
                    t === b && Oa(e, h.callback())
                }
            }
            return e
        };

    function gk() {
        var a = Rb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var kk = /(.*?)\*(.*?)\*(.*)/,
        lk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        mk = /^(?:www\.|m\.|amp\.)+/,
        nk = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function ok(a) {
        var b = nk.exec(a);
        if (b) return {
            Ag: b[1],
            query: b[2],
            fragment: b[3]
        }
    }

    function pk(a, b) {
        var c = [Pb.userAgent, (new Date).getTimezoneOffset(), Pb.userLanguage || Pb.language, Math.floor(La() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = dk)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var h = f, l = 0; 8 > l; l++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                e[f] = h
            }
            d = e
        }
        dk = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ dk[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function qk() {
        return function(a) {
            var b = Ef(E.location.href),
                c = b.search.replace("?", ""),
                d = xf(c, "_gl", !0) || "";
            a.query = rk(d) || {};
            var e = Af(b, "fragment"),
                f;
            var h = -1;
            if (Qa(e, "_gl=")) h = 4;
            else {
                var l = e.indexOf("&_gl=");
                0 < l && (h = l + 3 + 2)
            }
            if (0 > h) f = void 0;
            else {
                var m = e.indexOf("&", h);
                f = 0 > m ? e.substring(h) : e.substring(h, m)
            }
            a.fragment = rk(f || "") || {}
        }
    }
    var sk = function(a) {
            var b = qk(),
                c = gk();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Oa(d, e.query), a && Oa(d, e.fragment));
            return d
        },
        rk = function(a) {
            try {
                var b = tk(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            h = eb(d[e + 1]);
                        c[f] = h
                    }
                    gb("TAGGING", 6);
                    return c
                }
            } catch (l) {
                gb("TAGGING", 8)
            }
        };

    function tk(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = kk.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var h = c;
            if (h && "1" === h[1]) {
                var l = h[3],
                    m;
                a: {
                    for (var n = h[2], p = 0; p < b; ++p)
                        if (n === pk(l, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return l;
                gb("TAGGING", 7)
            }
        }
    }

    function uk(a, b, c, d, e) {
        function f(p) {
            var q = p,
                t = (new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")).exec(q),
                r = q;
            if (t) {
                var u = t[2],
                    v = t[4];
                r = t[1];
                v && (r = r + u + v)
            }
            p = r;
            var w = p.charAt(p.length - 1);
            p && "&" !== w && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var h = ok(c);
        if (!h) return "";
        var l = h.query || "",
            m = h.fragment || "",
            n = a + "=" + b;
        d ? 0 !== m.substring(1).length && e || (m = "#" + f(m.substring(1))) : l = "?" + f(l.substring(1));
        return "" + h.Ag + l + m
    }

    function vk(a, b) {
        function c(n, p, q) {
            var t;
            a: {
                for (var r in n)
                    if (n.hasOwnProperty(r)) {
                        t = !0;
                        break a
                    }
                t = !1
            }
            if (t) {
                var u, v = [],
                    w;
                for (w in n)
                    if (n.hasOwnProperty(w)) {
                        var x = n[w];
                        void 0 !== x && x === x && null !== x && "[object Object]" !== x.toString() && (v.push(w), v.push(db(String(x))))
                    }
                var y = v.join("*");
                u = ["1", pk(y), y].join("*");
                d ? (ld(13) || ld(11) || !p) && wk("_gl", u, a, p, q) : xk("_gl", u, a, p, q)
            }
        }
        var d = "FORM" === (a.tagName || "").toUpperCase(),
            e = jk(b, 1, d),
            f = jk(b, 2, d),
            h = jk(b, 4, d),
            l = jk(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        ld(11) && c(h, !0, !0);
        for (var m in l) l.hasOwnProperty(m) && yk(m, l[m], a)
    }

    function yk(a, b, c) {
        "a" === c.tagName.toLowerCase() ? xk(a, b, c) : "form" === c.tagName.toLowerCase() && wk(a, b, c)
    }

    function xk(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var f;
        if (f = c.href) {
            var h;
            if (!(h = !ld(16) || d)) {
                var l = E.location.href,
                    m = ok(c.href),
                    n = ok(l);
                h = !(m && n && m.Ag === n.Ag && m.query === n.query && m.fragment)
            }
            f = h
        }
        if (f) {
            var p = uk(a, b, c.href, d, e);
            Lb.test(p) && (c.href = p)
        }
    }

    function wk(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        if (c && c.action) {
            var f = (c.method || "").toLowerCase();
            if ("get" !== f || d) {
                if ("get" === f || "post" === f) {
                    var h = uk(a, b, c.action, d, e);
                    Lb.test(h) && (c.action = h)
                }
            } else {
                for (var l = c.childNodes || [], m = !1, n = 0; n < l.length; n++) {
                    var p = l[n];
                    if (p.name === a) {
                        p.setAttribute("value", b);
                        m = !0;
                        break
                    }
                }
                if (!m) {
                    var q = G.createElement("input");
                    q.setAttribute("type", "hidden");
                    q.setAttribute("name", a);
                    q.setAttribute("value", b);
                    c.appendChild(q)
                }
            }
        }
    }

    function ek(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || vk(e, e.hostname)
            }
        } catch (h) {}
    }

    function fk(a) {
        try {
            if (a.action) {
                var b = Af(Ef(a.action), "host");
                vk(a, b)
            }
        } catch (c) {}
    }
    var zk = function(a, b, c, d) {
            hk();
            ik(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        Ak = function(a, b) {
            hk();
            ik(a, [zf(E.location, "host", !0)], b, !0, !0)
        },
        Bk = function() {
            var a = G.location.hostname,
                b = lk.exec(G.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    h = f[1];
                e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var l = a.replace(mk, ""),
                m = e.replace(mk, ""),
                n;
            if (!(n = l === m)) {
                var p = "." + m;
                n = l.substring(l.length - p.length,
                    l.length) === p
            }
            return n
        },
        Ck = function(a, b) {
            return !1 === a ? !1 : a || b || Bk()
        };
    var Dk = ["1"],
        Ek = {},
        Fk = {},
        Kk = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = Gk(a.prefix);
            if (!Ek[c])
                if (Hk(c, a.path, a.domain)) {
                    var d = Fk[Gk(a.prefix)];
                    Ik(a, d ? d.id : void 0, d ? d.rg : void 0)
                } else {
                    var e = Gf("auiddc");
                    if (e) gb("TAGGING", 17), Ek[c] = e;
                    else if (b) {
                        var f = Gk(a.prefix),
                            h = Zj();
                        if (0 === Jk(f, h, a)) {
                            var l = Rb("google_tag_data", {});
                            l._gcl_au || (l._gcl_au = h)
                        }
                        Hk(c, a.path, a.domain)
                    }
                }
        };

    function Ik(a, b, c) {
        var d = Gk(a.prefix),
            e = Ek[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var h = Number(f[1]) || 0;
                if (h) {
                    var l = e;
                    b && (l = e + "." + b + "." + (c ? c : Math.floor(La() / 1E3)));
                    Jk(d, l, a, 1E3 * h)
                }
            }
        }
    }

    function Jk(a, b, c, d) {
        var e = bk(b, "1", c.domain, c.path),
            f = ck(c, d);
        f.tb = Lk();
        return Sj(a, e, f)
    }

    function Hk(a, b, c) {
        var d = ak(a, b, c, Dk, Lk());
        if (!d) return !1;
        Mk(a, d);
        return !0
    }

    function Mk(a, b) {
        var c = b.split(".");
        5 === c.length ? (Ek[a] = c.slice(0, 2).join("."), Fk[a] = {
            id: c.slice(2, 4).join("."),
            rg: Number(c[4]) || 0
        }) : 3 === c.length ? Fk[a] = {
            id: c.slice(0, 2).join("."),
            rg: Number(c[2]) || 0
        } : Ek[a] = b
    }

    function Gk(a) {
        return (a || "_gcl") + "_au"
    }

    function Nk(a) {
        function b() {
            fh(c) && a()
        }
        var c = Lk();
        mh(function() {
            b();
            fh(c) || nh(b, c)
        }, c)
    }

    function Ok(a) {
        var b = sk(!0),
            c = Gk(a.prefix);
        Nk(function() {
            var d = b[c];
            if (d) {
                Mk(c, d);
                var e = 1E3 * Number(Ek[c].split(".")[1]);
                if (e) {
                    gb("TAGGING", 16);
                    var f = ck(a, e);
                    f.tb = Lk();
                    var h = bk(d, "1", a.domain, a.path);
                    Sj(c, h, f)
                }
            }
        })
    }

    function Pk(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var h = {},
                l = ak(a, e.path, e.domain, Dk, Lk());
            l && (h[a] = l);
            return h
        };
        Nk(function() {
            zk(f, b, c, d)
        })
    }

    function Lk() {
        return ld(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"]
    };
    var Qk = function(a) {
        for (var b = [], c = G.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Jg: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(h, l) {
            return l.timestamp - h.timestamp
        });
        return b
    };

    function Rk(a, b) {
        var c = Qk(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Jg] || (d[c[e].Jg] = []);
                var h = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    Z: f[2]
                };
                b && 3 < f.length && (h.labels = f.slice(3));
                d[c[e].Jg].push(h)
            }
        }
        return d
    };
    var Sk = {},
        Tk = (Sk.k = {
            Ga: /^[\w-]+$/
        }, Sk.b = {
            Ga: /^[\w-]+$/,
            Fg: !0
        }, Sk.i = {
            Ga: /^[1-9]\d*$/
        }, Sk),
        Uk = {},
        Vk = (Uk[5] = {
            version: "2",
            Km: ["2"],
            Pi: "ad_storage",
            ui: ["k", "i", "b"]
        }, Uk);

    function Wk(a, b) {
        var c = b.Ga;
        return "function" === typeof c ? c(a) : c.test(a)
    }

    function Xk(a) {
        for (var b = ia(Object.keys(a)), c = b.next(), d = {}; !c.done; d = {
                Ad: void 0
            }, c = b.next()) {
            var e = c.value,
                f = a[e];
            d.Ad = Tk[e];
            d.Ad ? d.Ad.Fg ? a[e] = Array.isArray(f) ? f.filter(function(h) {
                return function(l) {
                    return Wk(l, h.Ad)
                }
            }(d)) : void 0 : "string" === typeof f && Wk(f, d.Ad) || (a[e] = void 0) : a[e] = void 0
        }
        return a
    }

    function Yk(a) {
        var b = Vk[5];
        if (b) {
            for (var c = [], d = Jj(a, void 0, void 0, b.Pi), e = ia(d), f = e.next(); !f.done; f = e.next()) {
                var h = f.value.split("."),
                    l = h.shift();
                if (-1 !== b.Km.indexOf(l)) {
                    h.shift();
                    var m = h.join("."),
                        n = c,
                        p = n.push,
                        q;
                    var t = {},
                        r = Vk[5];
                    if (r) {
                        for (var u = r.ui, v = ia(m.split("$")), w = v.next(); !w.done; w = v.next()) {
                            var x = w.value,
                                y = x[0];
                            if (-1 !== u.indexOf(y)) try {
                                var B = decodeURIComponent(x.substring(1)),
                                    z = Tk[y];
                                z && (z.Fg ? (t[y] = t[y] || [], t[y].push(B)) : t[y] = B)
                            } catch (C) {}
                        }
                        q = Xk(t)
                    } else q = void 0;
                    p.call(n, q)
                }
            }
            return c
        }
    }

    function Zk(a, b, c, d) {
        c = c || {};
        var e;
        var f = Vk[5];
        if (f) {
            for (var h = [], l = ia(f.ui), m = l.next(); !m.done; m = l.next()) {
                var n = m.value,
                    p = Tk[n];
                if (p) {
                    var q = b[n];
                    if (void 0 !== q)
                        if (p.Fg && Array.isArray(q))
                            for (var t = ia(q), r = t.next(); !r.done; r = t.next()) h.push(encodeURIComponent("" + n + r.value));
                        else h.push(encodeURIComponent("" + n + q))
                }
            }
            e = h.join("$")
        } else e = void 0;
        var u = e;
        if (u) {
            var v = Vk[5],
                w = [v.version, Xj(c.domain, c.path), u].join(".");
            Sj(a, w, ck(c, d, void 0, v.Pi))
        }
    };
    var $k = /^\w+$/,
        al = /^[\w-]+$/,
        bl = {
            ag: "_ag",
            aw: "_aw",
            dc: "_dc",
            gb: "_gb",
            gf: "_gf",
            gp: "_gp",
            ha: "_ha"
        };

    function cl() {
        return ld(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"]
    }
    var nl = function(a) {
            return !Vg().h() || fh(a)
        },
        ol = function(a) {
            function b() {
                var d = nl(c);
                d && a();
                return d
            }
            var c = cl();
            mh(function() {
                b() || nh(b, c)
            }, c)
        },
        ql = function(a) {
            return pl(a).map(function(b) {
                return b.Z
            })
        };

    function rl(a, b, c, d, e) {
        var f = Aa(a, function(h) {
            return h.Z === c
        });
        f ? (f.timestamp = Math.max(f.timestamp, d), f.labels = sl(f.labels || [], e || [])) : a.push({
            version: b,
            Z: c,
            timestamp: d,
            labels: e
        })
    }
    var pl = function(a) {
            for (var b = [], c = Jj(a, G.cookie, void 0, cl()), d = ia(c), e = d.next(); !e.done; e = d.next()) {
                var f = tl(e.value);
                if (null != f) {
                    var h = f;
                    rl(b, h.version, h.Z, h.timestamp, h.labels)
                }
            }
            b.sort(function(l, m) {
                return m.timestamp - l.timestamp
            });
            return ul(b)
        },
        vl = function(a) {
            if (!ld(20)) return [];
            for (var b = Yk(a) || [], c = [], d = ia(b), e = d.next(); !e.done; e = d.next()) {
                var f = e.value,
                    h = f,
                    l = f ? 1E3 * (Number(f.i) || 0) : 0;
                l && rl(c, "2", h.k, l, h.b || [])
            }
            return c.sort(function(m, n) {
                return n.timestamp - m.timestamp
            })
        };

    function sl(a, b) {
        if (!a.length) return b;
        if (!b.length) return a;
        var c = {};
        return a.concat(b).filter(function(d) {
            return c.hasOwnProperty(d) ? !1 : c[d] = !0
        })
    }

    function wl(a) {
        return a && "string" == typeof a && a.match($k) ? a : "_gcl"
    }

    function xl(a, b) {
        var c = ld(20),
            d = Ef(a),
            e = Af(d, "query", !1, void 0, "gclid"),
            f = Af(d, "query", !1, void 0, "gclsrc"),
            h = Af(d, "query", !1, void 0, "wbraid"),
            l;
        c && (l = Af(d, "query", !1, void 0, "gbraid"));
        var m = Af(d, "query", !1, void 0, "dclid");
        if (b && (!e || !f || !h || c && !l)) {
            var n = d.hash.replace("#", "");
            e = e || xf(n, "gclid");
            f = f || xf(n, "gclsrc");
            h = h || xf(n, "wbraid");
            c && (l = l || xf(n, "gbraid"))
        }
        return yl(e, f, m, h, l)
    }
    var zl = function() {
            return xl(E.location.href, !0)
        },
        yl = function(a, b, c, d, e) {
            var f = {},
                h = function(l, m) {
                    f[m] || (f[m] = []);
                    f[m].push(l)
                };
            f.gclid = a;
            f.gclsrc = b;
            f.dclid = c;
            if (void 0 !== a && a.match(al)) switch (b) {
                case void 0:
                    h(a, "aw");
                    break;
                case "aw.ds":
                    h(a, "aw");
                    h(a, "dc");
                    break;
                case "ds":
                    h(a, "dc");
                    break;
                case "3p.ds":
                    h(a, "dc");
                    break;
                case "gf":
                    h(a, "gf");
                    break;
                case "ha":
                    h(a, "ha")
            }
            c && h(c, "dc");
            void 0 !== d && al.test(d) && (f.wbraid = d, h(d, "gb"));
            ld(20) && void 0 !== e && al.test(e) && (f.gbraid = e, h(e, "ag"));
            return f
        },
        Bl = function(a) {
            var b =
                zl();
            if (ld(18)) {
                for (var c = !0, d = ia(Object.keys(b)), e = d.next(); !e.done; e = d.next())
                    if (void 0 !== b[e.value]) {
                        c = !1;
                        break
                    }
                c && (b = xl(E.document.referrer, !1))
            }
            Al(b, !1, a)
        };

    function Al(a, b, c, d, e) {
        c = c || {};
        e = e || [];
        var f = wl(c.prefix);
        d = d || La();
        var h = Math.round(d / 1E3),
            l = cl(),
            m = !1,
            n = !1,
            p = function() {
                if (nl(l)) {
                    var q = ck(c, d, !0);
                    q.tb = l;
                    for (var t = function(F, D) {
                            var J = Cl(F, f);
                            J && (Sj(J, D, q), "gb" !== F && (m = !0))
                        }, r = function(F) {
                            var D = ["GCL", h, F];
                            0 < e.length && D.push(e.join("."));
                            return D.join(".")
                        }, u = ia(["aw", "dc", "gf", "ha", "gp"]), v = u.next(); !v.done; v = u.next()) {
                        var w = v.value;
                        a[w] && t(w, r(a[w][0]))
                    }
                    if (!m && a.gb) {
                        var x = a.gb[0],
                            y = Cl("gb", f);
                        !b && pl(y).some(function(F) {
                            return F.Z === x && F.labels &&
                                0 < F.labels.length
                        }) || t("gb", r(x))
                    }
                }
                if (!n && ld(20) && a.gbraid && nl("ad_storage") && (n = !0, !m)) {
                    var B = a.gbraid,
                        z = Cl("ag", f);
                    if (b || !vl(z).some(function(F) {
                            return F.Z === B && F.labels && 0 < F.labels.length
                        })) {
                        var C = {},
                            H = (C.k = B, C.i = h, C.b = e, C);
                        Zk(z, H, c, d)
                    }
                }
            };
        mh(function() {
            p();
            nl(l) || nh(p, l)
        }, l)
    }
    var El = function(a, b) {
            var c = sk(!0);
            ol(function() {
                for (var d = wl(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== bl[f]) {
                        var h = Cl(f, d),
                            l = c[h];
                        if (l) {
                            var m = Math.min(Dl(l), La()),
                                n;
                            b: {
                                for (var p = m, q = Jj(h, G.cookie, void 0, cl()), t = 0; t < q.length; ++t)
                                    if (Dl(q[t]) > p) {
                                        n = !0;
                                        break b
                                    }
                                n = !1
                            }
                            if (!n) {
                                var r = ck(b, m, !0);
                                r.tb = cl();
                                Sj(h, l, r)
                            }
                        }
                    }
                }
                Al(yl(c.gclid, c.gclsrc), !1, b)
            })
        },
        Cl = function(a, b) {
            var c = bl[a];
            if (void 0 !== c) return b + c
        },
        Dl = function(a) {
            return 0 !== Fl(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
        };

    function tl(a) {
        var b = Fl(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            Z: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function Fl(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !al.test(a[2]) ? [] : a
    }
    var Gl = function(a, b, c, d, e) {
            if (za(b) && "null" !== E.origin) {
                var f = wl(e),
                    h = function() {
                        for (var l = {}, m = 0; m < a.length; ++m) {
                            var n = Cl(a[m], f);
                            if (n) {
                                var p = Jj(n, G.cookie, void 0, cl());
                                p.length && (l[n] = p.sort()[p.length - 1])
                            }
                        }
                        return l
                    };
                ol(function() {
                    zk(h, b, c, d)
                })
            }
        },
        ul = function(a) {
            return a.filter(function(b) {
                return al.test(b.Z)
            })
        },
        Hl = function(a, b) {
            if ("null" !== E.origin) {
                for (var c = wl(b.prefix), d = {}, e = 0; e < a.length; e++) bl[a[e]] && (d[a[e]] = bl[a[e]]);
                ol(function() {
                    k(d, function(f, h) {
                        var l = Jj(c + h, G.cookie, void 0, cl());
                        l.sort(function(r,
                            u) {
                            return Dl(u) - Dl(r)
                        });
                        if (l.length) {
                            var m = l[0],
                                n = Dl(m),
                                p = 0 !== Fl(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                t;
                            t = 0 !== Fl(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [t];
                            Al(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function Il(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var Jl = function(a) {
            function b(e, f, h) {
                h && (e[f] = h)
            }
            if (jh()) {
                var c = zl();
                if (Il(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.wbraid);
                    ld(20) && b(d, "gbraid", c.gbraid);
                    Ak(function() {
                        return d
                    }, 3);
                    Ak(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        Kl = function(a) {
            if (!ld(11)) return null;
            var b = sk(!0).gad_source;
            if (null != b) return E.location.hash = "", b;
            if (ld(12)) {
                var c = Ef(E.location.href);
                b = Af(c, "query", !1, void 0, "gad_source");
                if (null != b) return b;
                var d = zl();
                if (Il(d,
                        a)) return "0"
            }
            return null
        },
        Ll = function(a) {
            var b = Kl(a);
            null != b && Ak(function() {
                var c = {};
                return c.gad_source = b, c
            }, 4)
        },
        Ml = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!nl(cl())) return e;
            var f = pl(a),
                h;
            a: {
                if (f.length) {
                    for (var l = 0; l < f.length; l++) - 1 === (f[l].labels || []).indexOf(b) ? e.push(0) : e.push(1);
                    if (1 !== e[0]) {
                        h = f[0];
                        break a
                    }
                }
                h = void 0
            }
            var m = h;
            if (m && !d) {
                var n = m.timestamp,
                    p = [m.version, Math.round(n / 1E3), m.Z].concat(m.labels || [], [b]).join("."),
                    q = ck(c, n, !0);
                q.tb = cl();
                Sj(a, p, q)
            }
            return e
        };

    function Nl(a, b) {
        var c = wl(b),
            d = Cl(a, c);
        if (!d) return 0;
        var e;
        e = "ag" === a ? vl(d) : pl(d);
        for (var f = 0, h = 0; h < e.length; h++) f = Math.max(f, e[h].timestamp);
        return f
    }

    function Ol(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var Pl = function(a) {
        var b = Math.max(Nl("aw", a), Ol(nl(cl()) ? Rk() : {})),
            c = Math.max(Nl("gb", a), Ol(nl(cl()) ? Rk("_gac_gb", !0) : {}));
        ld(20) && (c = Math.max(c, Nl("ag", a)));
        return c > b
    };
    var fm, gm = !1,
        hm = function(a) {
            if (!gm) {
                gm = !0;
                fm = fm || {}
            }
            return fm[a]
        };
    var im = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.o = c;
        this.h = {};
        this.metadata = A(c.eventMetadata || {});
        this.isAborted = !1
    };
    im.prototype.copyToHitData = function(a, b, c) {
        var d = S(this.o, a);
        void 0 === d && (d = b);
        if (void 0 !== d && void 0 !== c && g(d) && R(49)) try {
            d = c(d)
        } catch (e) {}
        void 0 !== d && (this.h[a] = d)
    };
    var jm = function(a) {
            return a.metadata.source_canonical_id
        },
        km = function(a, b, c) {
            var d = hm(a.target.X);
            return d && d.hasOwnProperty(b) ? d[b] : c
        };
    var lm = function() {
        De.dedupe_gclid || (De.dedupe_gclid = "" + Zj());
        return De.dedupe_gclid
    };
    var mm = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        nm = /^www.googleadservices.com$/,
        pm = function(a) {
            a || (a = om());
            return a.Jm ? !1 : a.wl || a.xl || a.yl || a.ig || a.Ve || a.al || a.ml ? !0 : !1
        },
        om = function() {
            var a = {},
                b = sk(!0);
            a.Jm = !!b._up;
            var c = zl();
            a.wl = void 0 !== c.aw;
            a.xl = void 0 !== c.dc;
            a.yl = void 0 !== c.wbraid;
            var d = Ef(E.location.href),
                e = Af(d, "query", !1, void 0, "gad");
            a.ig = void 0 !== e;
            if (!a.ig) {
                var f = d.hash.replace("#", ""),
                    h = xf(f, "gad");
                a.ig = void 0 !== h
            }
            a.Ve = void 0;
            if (R(56)) {
                var l = Af(d, "query", !1, void 0, "gad_source");
                a.Ve =
                    l;
                if (void 0 === a.Ve) {
                    var m = d.hash.replace("#", ""),
                        n = xf(m, "gad_source");
                    a.Ve = n
                }
            }
            var p = G.referrer ? Af(Ef(G.referrer), "host") : "";
            a.ml = mm.test(p);
            a.al = nm.test(p);
            return a
        };
    var qm = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        rm = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        sm = /^\d+\.fls\.doubleclick\.net$/,
        tm = /;gac=([^;?]+)/,
        um = /;gacgb=([^;?]+)/,
        vm = /;gclaw=([^;?]+)/,
        wm = /;gclgb=([^;?]+)/;

    function xm(a, b) {
        if (sm.test(G.location.host)) {
            var c = G.location.href.match(b);
            return c && 2 == c.length && c[1].match(qm) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], h = a[e], l = 0; l < h.length; l++) f.push(h[l].Z);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var ym = function(a, b, c) {
        var d = nl(cl()) ? Rk("_gac_gb", !0) : {},
            e = [],
            f = !1,
            h;
        for (h in d) {
            var l = Ml("_gac_gb_" + h, a, b, c);
            f = f || 0 !== l.length && l.some(function(m) {
                return 1 === m
            });
            e.push(h + ":" + l.join(","))
        }
        return {
            Zk: f ? e.join(";") : "",
            Yk: xm(d, um)
        }
    };

    function zm(a, b, c) {
        if (sm.test(G.location.host)) {
            var d = G.location.href.match(c);
            if (d && 2 == d.length && d[1].match(rm)) return [{
                Z: d[1]
            }]
        } else return pl((a || "_gcl") + b);
        return []
    }
    var Am = function(a) {
            return zm(a, "_aw", vm).map(function(b) {
                return b.Z
            }).join(".")
        },
        Bm = function(a) {
            return zm(a, "_gb", wm).map(function(b) {
                return b.Z
            }).join(".")
        },
        Cm = function(a) {
            return sm.test(G.location.host) ? !(vm.test(G.location.href) || tm.test(G.location.href)) : Pl(a)
        },
        Dm = function(a, b) {
            var c = Ml((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var Em = function() {
        if (xa(E.__uspapi)) {
            var a = "";
            try {
                E.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };

    function Mm(a) {
        var b = S(a.o, L.g.yb),
            c = S(a.o, L.g.xb);
        b && !c ? (a.eventName !== L.g.aa && a.eventName !== L.g.be && K(131), a.isAborted = !0) : !b && c && (K(132), a.isAborted = !0)
    }

    function Nm(a) {
        var b = U(L.g.F) ? De.pscdl : "denied";
        a.h[L.g.je] = b
    };
    var Vm = function(a, b, c, d) {
        var e = Yb(),
            f;
        if (1 === e) a: {
            var h = Pe;h = h.toLowerCase();
            for (var l = "https://" + h, m = "http://" + h, n = 1, p = G.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var t = p[q].src;
                if (t) {
                    t = t.toLowerCase();
                    if (0 === t.indexOf(m)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === t.indexOf(l) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != E.location.protocol ? a : b) + c
    };

    function hn(a) {
        return {
            getDestinationId: function() {
                return a.target.X
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.h[b]
            },
            setHitData: function(b, c) {
                a.h[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.h[b] && (a.h[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return S(a.o, b)
            },
            Bn: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.h)
            }
        }
    };
    var pn = function() {
            var a = E.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        qn = function(a) {
            if (G.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !E.getComputedStyle) return !0;
            var c = E.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    h = e.filter;
                if (h) {
                    var l = h.indexOf("opacity(");
                    0 <= l && (h = h.substring(l + 8, h.indexOf(")", l)), "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)), f = Math.min(h,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = E.getComputedStyle(d, null))
            }
            return !1
        };
    var qo = {
        zk: Number('') || 500,
        ik: Number('') || 5E3,
        Yh: Number('20') || 10,
        qj: Number('') || 5E3
    };

    function ro(a) {
        return a.performance && a.performance.now() || Date.now()
    }
    var so = function(a, b) {
        var c;
        return c
    };
    var to = "https://" + Ce.Kc,
        uo = to + "/gtm/static/",
        vo = Number('') || 5,
        wo = Number('') || 50,
        xo = to,
        yo = uo,
        zo = !1,
        Ao = 0,
        Bo = Ba();

    function Mo() {
        var a = !1;
        return a
    }

    function No(a) {
        var b = Math.round(La());
    }

    function Oo(a, b, c) {}

    function Jo(a, b, c, d) {}

    function Do(a, b, c, d, e) {}

    function Po(a, b, c, d) {}

    function Qo(a, b, c, d) {}

    function Ro(a) {
        var b = {},
            c = ["tv.1"],
            d = 0;
        var u = c.join("~");
        return {
            P: b,
            af: u
        }
    }
    var So = void 0;

    function To(a) {
        var b = [];
        return b
    };
    Bb();
    Fi() || yb("iPod");
    yb("iPad");
    !yb("Android") || Cb() || Bb() || Ab() || yb("Silk");
    Cb();
    !yb("Safari") || Cb() || (zb() ? 0 : yb("Coast")) || Ab() || (zb() ? 0 : yb("Edge")) || (zb() ? xb("Microsoft Edge") : yb("Edg/")) || (zb() ? xb("Opera") : yb("OPR")) || Bb() || yb("Silk") || yb("Android") || Gi();
    var Uo = {},
        Vo = null,
        Wo = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!Vo) {
                Vo = {};
                for (var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = h.concat(l[m].split(""));
                    Uo[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === Vo[q] && (Vo[q] = p)
                    }
                }
            }
            for (var t = Uo[f], r = Array(Math.floor(b.length / 3)), u = t[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var x = b[v],
                    y = b[v + 1],
                    B = b[v + 2],
                    z = t[x >> 2],
                    C = t[(x & 3) << 4 | y >> 4],
                    H = t[(y & 15) << 2 | B >> 6],
                    F = t[B & 63];
                r[w++] = "" + z + C + H + F
            }
            var D = 0,
                J = u;
            switch (b.length - v) {
                case 2:
                    D = b[v + 1], J = t[(D & 15) << 2] || u;
                case 1:
                    var M = b[v];
                    r[w] = "" + t[M >> 2] + t[(M & 3) << 4 | D >> 4] + J + u
            }
            return r.join("")
        };
    Object.freeze(new function() {});
    Object.freeze(new function() {});
    var Xo = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Yo() {
        var a;
        return null != (a = E.google_tag_data) ? a : E.google_tag_data = {}
    }

    function Zo() {
        var a = E.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function $o() {
        var a, b;
        return null != (b = null == (a = E.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function ap() {
        var a, b;
        return "function" === typeof(null == (a = E.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function bp() {
        if (!ap()) return null;
        var a = Yo();
        if (a.uach_promise) return a.uach_promise;
        var b = E.navigator.userAgentData.getHighEntropyValues(Xo).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    };

    function hp() {
        return "attribution-reporting"
    }

    function ip(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var jp = !1;

    function kp() {
        if (ip("join-ad-interest-group") && xa(Pb.joinAdInterestGroup)) return !0;
        jp || (Oi('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), jp = !0);
        return ip("join-ad-interest-group") && xa(Pb.joinAdInterestGroup)
    }

    function lp(a, b) {
        var c = void 0;
        try {
            c = G.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && La() - d < (void 0 == kd[1] ? 6E4 : kd[1])) {
                gb("TAGGING", 9);
                return
            }
            try {
                c.parentNode.removeChild(c)
            } catch (e) {}
            c = void 0
        } else try {
            if (G.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length >= (void 0 == kd[2] ? 50 : kd[2])) {
                gb("TAGGING", 10);
                return
            }
        } catch (e) {}
        Zb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: La()
        }, c)
    }

    function mp() {
        return "https://td.doubleclick.net"
    };
    var fq = {
        D: {
            Lg: "ads_conversion_hit",
            Jc: "container_execute_start",
            Pg: "container_setup_end",
            qf: "container_setup_start",
            Ng: "container_blocking_end",
            Og: "container_execute_end",
            Qg: "container_yield_end",
            rf: "container_yield_start",
            Rh: "event_execute_end",
            Qh: "event_evaluation_end",
            Mf: "event_evaluation_start",
            Sh: "event_setup_end",
            qd: "event_setup_start",
            Th: "ga4_conversion_hit",
            sd: "page_load",
            kn: "pageview",
            Fb: "snippet_load",
            ii: "tag_callback_error",
            ji: "tag_callback_failure",
            ki: "tag_callback_success",
            li: "tag_execute_end",
            Dc: "tag_execute_start"
        }
    };

    function gq() {
        function a(c, d) {
            var e = hb(d);
            e && b.push([c, e])
        }
        var b = [];
        a("u", "GTM");
        a("ut", "TAGGING");
        a("h", "HEALTH");
        return b
    };
    var hq = !1;
    var Pq = function(a, b) {},
        Qq = function(a, b) {},
        Rq = function(a, b) {},
        Sq = function(a, b) {},
        Tq = function() {
            var a = {};
            return a
        },
        Hq = function(a) {
            a = void 0 === a ? !0 : a;
            var b = {};
            return b
        },
        Uq = function() {},
        Vq = function(a, b) {},
        Wq = function(a, b, c) {};
    var Xq = function(a, b) {
        var c, d = E.GooglebQhCsO;
        d || (d = {}, E.GooglebQhCsO = d);
        c = d;
        if (c[a]) return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var Yq = function(a, b, c) {
        var d = Ji(a, "fmt");
        if (b) {
            var e = Ji(a, "random"),
                f = Ji(a, "label") || "";
            if (!e) return !1;
            var h = Wo(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!Xq(h, b)) return !1
        }
        d && 4 != d && (a = Li(a, "rfmt", d));
        var l = Li(a, "fmt", 4);
        Xb(l, function() {
            E.google_noFurtherRedirects && b && b.call && (E.google_noFurtherRedirects = null, b())
        }, void 0, c, G.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var or = function() {
            this.h = {}
        },
        pr = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        qr = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        sr = function(a, b, c, d) {};

    function ur(a, b) {
        if (data.entities && data.entities[a]) return data.entities[a][b]
    };
    var wr = function(a) {
            var b = fg(),
                c;
            c = void 0 === c ? !1 : c;
            vr().addRestriction(0, b, a, c)
        },
        xr = function(a) {
            var b = fg(),
                c;
            c = void 0 === c ? !1 : c;
            vr().addRestriction(1, b, a, c)
        },
        yr = function() {
            var a = fg();
            return vr().getRestrictions(1, a)
        },
        zr = function() {
            this.h = {};
            this.s = {}
        },
        Ar = function(a, b) {
            var c = a.h[b];
            c || (c = {
                _entity: {
                    internal: [],
                    external: []
                },
                _event: {
                    internal: [],
                    external: []
                }
            }, a.h[b] = c);
            return c
        };
    zr.prototype.addRestriction = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        if (!d || !this.s[b]) {
            var e = Ar(this, b);
            0 === a ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : 1 === a && (d ? e._event.external.push(c) : e._event.internal.push(c))
        }
    };
    zr.prototype.getRestrictions = function(a, b) {
        var c = Ar(this, b);
        if (0 === a) {
            var d, e;
            return [].concat(ka((null == c ? void 0 : null == (d = c._entity) ? void 0 : d.internal) || []), ka((null == c ? void 0 : null == (e = c._entity) ? void 0 : e.external) || []))
        }
        if (1 === a) {
            var f, h;
            return [].concat(ka((null == c ? void 0 : null == (f = c._event) ? void 0 : f.internal) || []), ka((null == c ? void 0 : null == (h = c._event) ? void 0 : h.external) || []))
        }
        return []
    };
    zr.prototype.getExternalRestrictions = function(a, b) {
        var c = Ar(this, b),
            d, e;
        return 0 === a ? (null == c ? void 0 : null == (d = c._entity) ? void 0 : d.external) || [] : (null == c ? void 0 : null == (e = c._event) ? void 0 : e.external) || []
    };
    zr.prototype.removeExternalRestrictions = function(a) {
        var b = Ar(this, a);
        b._event && (b._event.external = []);
        b._entity && (b._entity.external = []);
        this.s[a] = !0
    };

    function vr() {
        var a = De.r;
        a || (a = new zr, De.r = a);
        return a
    };
    var Br = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Cr = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Dr = {
            cl: ["ecl"],
            customPixels: ["customScripts",
                "html"
            ],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Er = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        Hr = function(a) {
            var b = cf("gtm.allowlist") || cf("gtm.whitelist");
            b && K(9);
            Je && (b = ["google", "gtagfl",
                "lcl", "zone"
            ]);
            Fr() && (Je ? K(116) : (K(117), Gr && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
            var c = b && Pa(Ia(b), Cr),
                d = cf("gtm.blocklist") || cf("gtm.blacklist");
            d || (d = cf("tagTypeBlacklist")) && K(3);
            d ? K(8) : d = [];
            Fr() && (d = Ia(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ia(d).indexOf("google") && K(2);
            var e = d && Pa(Ia(d), Dr),
                f = {};
            return function(h) {
                var l = h && h[qc.ma];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/, "");
                if (void 0 !== f[l]) return f[l];
                var m = Te[l] || [],
                    n = a(l, m);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(l))
                            if (m && 0 < m.length)
                                for (var q = 0; q < m.length; q++) {
                                    if (0 > c.indexOf(m[q])) {
                                        K(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var t = !1;
                if (d) {
                    var r = 0 <= e.indexOf(l);
                    if (r) t = r;
                    else {
                        var u = Ea(e, m || []);
                        u && K(10);
                        t = u
                    }
                }
                var v = !n || t;
                v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Ea(e, Er));
                return f[l] = v
            }
        },
        Gr = !1;
    Gr = !0;
    var Fr = function() {
            return Br.test(E.location && E.location.hostname)
        },
        Ir = function() {
            Xf && wr(function(a) {
                var b = {};
                b[qc.ma] = "__" + a.entityId;
                for (var c in void 0)(void 0).hasOwnProperty(c) && (b["vtp_" + c] = (void 0)[c]);
                var d;
                if (ed(b)) {
                    var e = b[qc.ma];
                    if (!e) throw "Error: No function name given for function call.";
                    var f = Sc[e];
                    d = !!f && !!f.runInSiloedMode
                } else d = !!ur(b[qc.ma], 4);
                return d
            })
        };
    var ls = function(a, b, c, d) {
            if (!es()) {
                var e = d.siloed ? $f(a) : a;
                if (!Pf().container[e]) {
                    var f = "?id=" + encodeURIComponent(a) + "&l=" + Ce.da,
                        h = 0 === a.indexOf("GTM-");
                    h || (f += "&cx=c");
                    R(36) && (f += "&gtm=" + Fj());
                    var l = Kf();
                    l && (f += "&sign=" + Ce.Ne);
                    var m = c ? "/gtag/js" : "/gtm.js",
                        n = Jf() ? If(b, m + f) : void 0;
                    if (!n) {
                        var p = Ce.Kc + m;
                        l && Qb && h ? (p = Qb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0], n = Vm("https://", "http://", p + f)) : n = We.s ? Xe() + m + f : Vm("https://", "http://", p + f)
                    }
                    d.siloed && og({
                        ctid: e,
                        isDestination: !1
                    });
                    var q = hg();
                    Pf().container[e] = {
                        state: 1,
                        context: d,
                        parent: q
                    };
                    Qf({
                        ctid: e,
                        isDestination: !1
                    });
                    Xb(n)
                }
            }
        },
        ms = function(a, b, c) {
            if (!es()) {
                var d = c.siloed ? $f(a) : a,
                    e = Pf().destination[d];
                if (!e || !e.state)
                    if (!c.siloed && pg()) Pf().destination[d] = {
                        state: 0,
                        transportUrl: b,
                        context: c,
                        parent: hg()
                    }, Qf({
                        ctid: d,
                        isDestination: !0
                    }), K(91);
                    else {
                        var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Ce.da + "&cx=c";
                        R(36) && (f += "&gtm=" + Fj());
                        Kf() && (f += "&sign=" + Ce.Ne);
                        var h = Jf() ? If(b, f) : void 0;
                        h || (h = We.s ? Xe() + f : Vm("https://", "http://", Ce.Kc + f));
                        c.siloed && og({
                            ctid: d,
                            isDestination: !0
                        });
                        Pf().destination[d] = {
                            state: 1,
                            context: c,
                            parent: hg()
                        };
                        Qf({
                            ctid: d,
                            isDestination: !0
                        });
                        Xb(h)
                    }
            }
        };

    function es() {
        if (Dj()) {
            return !0
        }
        return !1
    };
    var ns = !1,
        os = 0,
        ps = [];

    function qs(a) {
        if (!ns) {
            var b = G.createEventObject,
                c = "complete" == G.readyState,
                d = "interactive" == G.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                ns = !0;
                for (var e = 0; e < ps.length; e++) I(ps[e])
            }
            ps.push = function() {
                for (var f = 0; f < arguments.length; f++) I(arguments[f]);
                return 0
            }
        }
    }

    function rs() {
        if (!ns && 140 > os) {
            os++;
            try {
                G.documentElement.doScroll("left"), qs()
            } catch (a) {
                E.setTimeout(rs, 50)
            }
        }
    }
    var ss = function(a) {
        ns ? a() : ps.push(a)
    };
    var ts = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: eg()
        }
    };
    var vs = function(a, b) {
            this.h = !1;
            this.J = [];
            this.M = {
                tags: []
            };
            this.T = !1;
            this.s = this.C = 0;
            us(this, a, b)
        },
        ws = function(a, b, c, d) {
            if (Ge.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Ya(d) && (e = A(d, e));
            e.id = c;
            e.status = "timeout";
            return a.M.tags.push(e) - 1
        },
        xs = function(a, b, c, d) {
            var e = a.M.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        ys = function(a) {
            if (!a.h) {
                for (var b = a.J, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.J.length = 0
            }
        },
        us = function(a, b, c) {
            void 0 !== b && zs(a, b);
            c && E.setTimeout(function() {
                return ys(a)
            }, Number(c))
        },
        zs =
        function(a, b) {
            var c = Na(function() {
                return I(function() {
                    b(eg(), a.M)
                })
            });
            a.h ? c() : a.J.push(c)
        },
        As = function(a) {
            a.C++;
            return Na(function() {
                a.s++;
                a.T && a.s >= a.C && ys(a)
            })
        },
        Bs = function(a) {
            a.T = !0;
            a.s >= a.C && ys(a)
        };
    var Cs = {},
        Es = function() {
            return E[Ds()]
        },
        Fs = !1;

    function Ds() {
        return E.GoogleAnalyticsObject || "ga"
    }
    var Is = function(a) {},
        Js = function(a, b) {
            return function() {
                var c = Es(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var h = f.get("hitPayload"),
                            l = f.get("hitCallback"),
                            m = 0 > h.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            h, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var Os = ["es", "1"],
        Ps = {},
        Qs = {};

    function Rs(a, b) {
        if (zg) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            Ps[a] = [
                ["e", c],
                ["eid", a]
            ];
            Kg(a)
        }
    }

    function Ss(a) {
        var b = a.eventId,
            c = a.Za;
        if (!Ps[b]) return [];
        var d = [];
        Qs[b] || d.push(Os);
        d.push.apply(d, ka(Ps[b]));
        c && (Qs[b] = !0);
        return d
    };
    var Ts = {},
        Us = {},
        Vs = {};

    function Ws(a, b, c, d) {
        zg && R(27) && ((void 0 === d ? 0 : d) ? (Vs[b] = Vs[b] || 0, ++Vs[b]) : void 0 !== c ? (Us[a] = Us[a] || {}, Us[a][b] = Math.round(c)) : (Ts[a] = Ts[a] || {}, Ts[a][b] = (Ts[a][b] || 0) + 1))
    }

    function Xs(a) {
        var b = a.eventId,
            c = a.Za,
            d = Ts[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete Ts[b];
        return e.length ? [
            ["md", e.join(".")]
        ] : []
    }

    function Ys(a) {
        var b = a.eventId,
            c = a.Za,
            d = Us[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete Us[b];
        return e.length ? [
            ["mtd", e.join(".")]
        ] : []
    }

    function Zs() {
        for (var a = [], b = ia(Object.keys(Vs)), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            a.push("" + d + Vs[d])
        }
        return a.length ? [
            ["mec", a.join(".")]
        ] : []
    };
    var $s = {},
        at = {};

    function bt(a, b, c) {
        if (zg && b) {
            var d = Nf(b);
            $s[a] = $s[a] || [];
            $s[a].push(c + d);
            var e = (ed(b) ? "1" : "2") + d;
            at[a] = at[a] || [];
            at[a].push(e);
            Kg(a)
        }
    }

    function ct(a) {
        var b = a.eventId,
            c = a.Za,
            d = [],
            e = $s[b] || [];
        e.length && d.push(["tr", e.join(".")]);
        var f = at[b] || [];
        f.length && d.push(["ti", f.join(".")]);
        c && (delete $s[b], delete at[b]);
        return d
    };

    function dt(a, b, c, d) {
        var e = Qc[a],
            f = et(a, b, c, d);
        if (!f) return null;
        var h = bd(e[qc.hi], c, []);
        if (h && h.length) {
            var l = h[0];
            f = dt(l.index, {
                onSuccess: f,
                onFailure: 1 === l.yi ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function et(a, b, c, d) {
        function e() {
            if (f[qc.nk]) l();
            else {
                var w = cd(f, c, []),
                    x = w[qc.ij];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!U(x[y])) {
                            l();
                            return
                        }
                var B = ws(c.Qb, String(f[qc.ma]), Number(f[qc.xd]), w[qc.pk]),
                    z = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!z) {
                        z = !0;
                        var F = La() - H;
                        bt(c.id, Qc[a], "5");
                        xs(c.Qb, B, "success", F);
                        R(17) && Wq(c, f, fq.D.ki);
                        h()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!z) {
                        z = !0;
                        var F = La() - H;
                        bt(c.id, Qc[a], "6");
                        xs(c.Qb, B, "failure", F);
                        R(17) && Wq(c, f, fq.D.ji);
                        l()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                bt(c.id, f, "1");
                var C = function() { of (3);
                    var F = La() - H;
                    bt(c.id, f, "7");
                    xs(c.Qb, B, "exception", F);
                    R(17) && Wq(c, f, fq.D.ii);
                    z || (z = !0, l())
                };
                R(17) && Vq(c, f);
                var H = La();
                try {
                    ad(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (F) {
                    C(F)
                }
                R(17) && Wq(c, f, fq.D.li)
            }
        }
        var f = Qc[a],
            h = b.onSuccess,
            l = b.onFailure,
            m = b.terminate;
        if (c.isBlocked(f)) return null;
        var n = bd(f[qc.mi], c, []);
        if (n && n.length) {
            var p = n[0],
                q = dt(p.index, {
                    onSuccess: h,
                    onFailure: l,
                    terminate: m
                }, c, d);
            if (!q) return null;
            h = q;
            l = 2 ===
                p.yi ? m : q
        }
        if (f[qc.bi] || f[qc.rk]) {
            var t = f[qc.bi] ? Rc : c.Dm,
                r = h,
                u = l;
            if (!t[a]) {
                e = Na(e);
                var v = ft(a, t, e);
                h = v.onSuccess;
                l = v.onFailure
            }
            return function() {
                t[a](r, u)
            }
        }
        return e
    }

    function ft(a, b, c) {
        var d = [],
            e = [];
        b[a] = gt(d, e, c);
        return {
            onSuccess: function() {
                b[a] = ht;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = it;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function gt(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function ht(a) {
        a()
    }

    function it(a, b) {
        b()
    };
    var kt = function(a, b) {
            return 1 === arguments.length ? jt("config", a) : jt("config", a, b)
        },
        lt = function(a, b, c) {
            c = c || {};
            c[L.g.Ob] = a;
            return jt("event", b, c)
        };

    function jt(a) {
        return arguments
    }
    var mt = function() {
        this.h = [];
        this.s = []
    };
    mt.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.s.length; f++) try {
            this.s[f](e)
        } catch (h) {}
    };
    mt.prototype.listen = function(a) {
        this.s.push(a)
    };
    mt.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    mt.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var ot = function(a, b, c) {
            c.eventMetadata = c.eventMetadata || {};
            c.eventMetadata.source_canonical_id = Yf.canonicalContainerId;
            nt().enqueue(a, b, c)
        },
        qt = function() {
            var a = pt;
            nt().listen(a)
        };

    function nt() {
        var a = De.mb;
        a || (a = new mt, De.mb = a);
        return a
    }
    var zt = function(a) {
            var b = De.zones;
            return b ? b.getIsAllowedFn(ag(), a) : function() {
                return !0
            }
        },
        At = function() {
            xr(function(a) {
                var b = a.originalEventData["gtm.uniqueEventId"],
                    c = De.zones;
                return c ? c.isActive(ag(), b) : !0
            });
            R(75) && wr(function(a) {
                var b = a.entityId,
                    c = a.securityGroups;
                return zt(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c)
            })
        };
    var Dt = function(a, b) {
        for (var c = [], d = 0; d < Qc.length; d++)
            if (a[d]) {
                var e = Qc[d];
                var f = As(b.Qb);
                try {
                    var h = dt(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (h) {
                        var l = e[qc.ma];
                        if (!l) throw "Error: No function name given for function call.";
                        var m = Sc[l];
                        c.push({
                            Xi: d,
                            Ki: (m ? m.priorityOverride || 0 : 0) || ur(e[qc.ma], 1) || 0,
                            execute: h
                        })
                    } else Bt(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(Ct);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return 0 < c.length
    };

    function Ct(a, b) {
        var c, d = b.Ki,
            e = a.Ki;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var h = a.Xi,
                l = b.Xi;
            f = h > l ? 1 : h < l ? -1 : 0
        }
        return f
    }

    function Bt(a, b) {
        if (zg) {
            var c = function(d) {
                var e = b.isBlocked(Qc[d]) ? "3" : "4",
                    f = bd(Qc[d][qc.hi], b, []);
                f && f.length && c(f[0].index);
                bt(b.id, Qc[d], e);
                var h = bd(Qc[d][qc.mi], b, []);
                h && h.length && c(h[0].index)
            };
            c(a)
        }
    }
    var Gt = !1,
        Et;
    var Lt = function(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        if (R(17)) {}
        if ("gtm.js" === d) {
            if (Gt) return !1;
            Gt = !0
        }
        var e, f = !1,
            h = yr(),
            l = A(a);
        if (h.every(function(u) {
                return u({
                    originalEventData: l
                })
            })) e = zt(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
            f = !0;
            e = zt(Number.MAX_SAFE_INTEGER)
        }
        Rs(b, d);
        var m =
            a.eventCallback,
            n = a.eventTimeout,
            p = {
                id: b,
                priorityId: c,
                name: d,
                isBlocked: Ht(e, l, f),
                Dm: [],
                logMacroError: function() {
                    K(6); of (0)
                },
                cachedModelValues: It(),
                Qb: new vs(function() {
                    if (R(17)) {}
                    m &&
                        m.apply(m, [].slice.call(arguments, 0))
                }, n),
                originalEventData: l
            };
        R(27) && zg && (p.reportMacroDiscrepancy = Ws);
        R(17) && Rq(p.id, p.name);
        var q = hd(p);
        R(17) && Sq(p.id, p.name);
        f && (q = Jt(q));
        if (R(17)) {}
        var t = Dt(q, p),
            r = !1;
        Bs(p.Qb);
        "gtm.js" !== d && "gtm.sync" !== d || Is(eg());
        return Kt(q, t) || r
    };

    function It() {
        var a = {};
        a.event = gf("event", 1);
        a.ecommerce = gf("ecommerce", 1);
        a.gtm = gf("gtm");
        a.eventModel = gf("eventModel");
        return a
    }

    function Ht(a, b, c) {
        var d = Hr(a);
        return function(e) {
            if (d(e)) return !0;
            var f = e && e[qc.ma];
            if (!f || "string" != typeof f) return !0;
            f = f.replace(/^_*/, "");
            var h, l = fg();
            h = vr().getRestrictions(0, l);
            var m = b;
            c && (m = A(b), m["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER);
            for (var n = Te[f] || [], p = ia(h), q = p.next(); !q.done; q = p.next()) {
                var t = q.value;
                try {
                    if (!t({
                            entityId: f,
                            securityGroups: n,
                            originalEventData: m
                        })) return !0
                } catch (r) {
                    return !0
                }
            }
            return !1
        }
    }

    function Jt(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(Qc[c][qc.ma]);
                if (Fe[d] || void 0 !== Qc[c][qc.sk] || ur(d, 2)) b[c] = !0
            }
        return b
    }

    function Kt(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Qc[c] && !Ge[String(Qc[c][qc.ma])]) return !0;
        return !1
    }
    var Mt = {},
        Nt = {},
        Ot = function(a, b) {
            for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                    Cg: void 0,
                    hg: void 0
                }, f++) {
                var h = a[f];
                if (0 <= h.indexOf("-")) {
                    if (e.Cg = Dh(h, b), e.Cg) {
                        var l = cg();
                        Aa(l, function(t) {
                            return function(r) {
                                return t.Cg.X === r
                            }
                        }(e)) ? c.push(h) : d.push(h)
                    }
                } else {
                    var m = Mt[h] || [];
                    e.hg = {};
                    m.forEach(function(t) {
                        return function(r) {
                            return t.hg[r] = !0
                        }
                    }(e));
                    for (var n = ag(), p = 0; p < n.length; p++)
                        if (e.hg[n[p]]) {
                            c = c.concat(cg());
                            break
                        }
                    var q = Nt[h] || [];
                    q.length && (c = c.concat(q))
                }
            }
            return {
                Sl: c,
                Vl: d
            }
        },
        Pt = function(a) {
            k(Mt, function(b,
                c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        Qt = function(a) {
            k(Nt, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var Rt = "HA GF G UA AW DC MC".split(" "),
        St = !1,
        Tt = !1,
        Ut = !1,
        Vt = !1;

    function Wt(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Ue()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Xt = void 0,
        Yt = void 0;

    function Zt(a, b, c) {
        var d = A(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return void 0 !== b[f]
        }) && K(136);
        var e = A(b);
        A(c, e);
        ot(kt(ag()[0], e), a.eventId, d)
    }

    function $t(a) {
        for (var b = ia([L.g.zc, L.g.Cb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value,
                e = a && a[d] || qi.C[d];
            if (e) return e
        }
    }
    var au = [L.g.zc, L.g.Cb, L.g.uc, L.g.hb, L.g.ob, L.g.Ma, L.g.xa, L.g.Ja, L.g.Qa, L.g.Kb],
        bu = {
            config: function(a, b) {
                var c = R(28),
                    d = Wt(a, b);
                if (!(2 > a.length) && g(a[1])) {
                    var e = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !Ya(a[2]) || 3 < a.length) return;
                        e = a[2]
                    }
                    var f = Dh(a[1], b.isGtmEvent);
                    if (f) {
                        var h, l, m;
                        a: {
                            if (!Sf.rd) {
                                var n = gg(hg());
                                if (rg(n)) {
                                    var p = n.parent,
                                        q = p.isDestination;
                                    m = {
                                        am: gg(p),
                                        Rl: q
                                    };
                                    break a
                                }
                            }
                            m = void 0
                        }
                        var t = m;
                        t && (h = t.am, l = t.Rl);
                        Rs(d.eventId, "gtag.config");
                        var r = f.X,
                            u = f.id !== r;
                        if (u ? -1 === cg().indexOf(r) : -1 === ag().indexOf(r)) {
                            if (!(c &&
                                    b.inheritParentConfig || e[L.g.yb])) {
                                var v = $t(e);
                                if (u) ms(r, v, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                else if (c && void 0 !== h && -1 !== h.containers.indexOf(r)) {
                                    var w = e;
                                    Xt ? Zt(b, w, Xt) : Yt || (Yt = A(w))
                                } else ls(r, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (h && (K(128), l && K(130), c && b.inheritParentConfig)) {
                                var x;
                                var y = e;
                                Yt ? (Zt(b, Yt, y), x = !1) : (!y[L.g.Pb] && Ie && Xt || (Xt = A(y)), x = !0);
                                x && h.containers && h.containers.join(",");
                                return
                            }
                            var B = e;
                            if (R(99) && !Ut && (Ut = !0, Tt))
                                for (var z =
                                        ia(au), C = z.next(); !C.done; C = z.next())
                                    if (B.hasOwnProperty(C.value)) {
                                        Qg("erc");
                                        break
                                    }
                            if (Ie && !u && !e[L.g.Pb]) {
                                var H = Vt;
                                Vt = !0;
                                if (H) return
                            }
                            St || K(43);
                            if (!b.noTargetGroup)
                                if (u) {
                                    Qt(f.id);
                                    var F = f.id,
                                        D = e[L.g.xe] || "default";
                                    D = String(D).split(",");
                                    for (var J = 0; J < D.length; J++) {
                                        var M = Nt[D[J]] || [];
                                        Nt[D[J]] = M;
                                        0 > M.indexOf(F) && M.push(F)
                                    }
                                } else {
                                    Pt(f.id);
                                    var O = f.id,
                                        T = e[L.g.xe] || "default";
                                    T = T.toString().split(",");
                                    for (var N = 0; N < T.length; N++) {
                                        var Q = Mt[T[N]] || [];
                                        Mt[T[N]] = Q;
                                        0 > Q.indexOf(O) && Q.push(O)
                                    }
                                }
                            delete e[L.g.xe];
                            var ba =
                                b.eventMetadata || {};
                            ba.hasOwnProperty("is_external_event") || (ba.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = ba;
                            delete e[L.g.Zc];
                            for (var aa = u ? [f.id] : cg(), V = 0; V < aa.length; V++) {
                                var ua = e,
                                    ea = aa[V],
                                    qa = A(b),
                                    Ca = Dh(ea, qa.isGtmEvent);
                                Ca && qi.push("config", [ua], Ca, qa)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    K(39);
                    var c = Wt(a, b),
                        d = a[1],
                        e = a[2];
                    b.fromContainerExecution || (e[L.g.K] && K(139), e[L.g.Ca] && K(140));
                    "default" === d ? uh(e) : "update" === d ? vh(e, c) : "declare" === d && b.fromContainerExecution && th(e)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && g(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!Ya(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        h = (f.event = c, f);
                    e && (h.eventModel = A(e), e[L.g.Zc] && (h.eventCallback = e[L.g.Zc]), e[L.g.ue] && (h.eventTimeout = e[L.g.ue]));
                    var l = Wt(a, b),
                        m = l.eventId,
                        n = l.priorityId;
                    h["gtm.uniqueEventId"] = m;
                    n && (h["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return h.eventModel = h.eventModel || {}, h;
                    var p;
                    var q = d,
                        t = q && q[L.g.Ob];
                    void 0 === t && (t = cf(L.g.Ob, 2), void 0 === t && (t = "default"));
                    if (g(t) || za(t)) {
                        var r;
                        b.isGtmEvent ? r = g(t) ? [t] : t : r = t.toString().replace(/\s+/g, "").split(",");
                        var u = Ot(r, b.isGtmEvent),
                            v = u.Sl,
                            w = u.Vl;
                        if (w.length)
                            for (var x = $t(q), y = 0; y < w.length; y++) {
                                var B = Dh(w[y], b.isGtmEvent);
                                B && ms(B.X, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = Fh(v, b.isGtmEvent)
                    } else p = void 0;
                    var z = p;
                    if (z) {
                        z.length && (Tt = !0);
                        Rs(m, c);
                        for (var C = [], H = 0; H < z.length; H++) {
                            var F = z[H],
                                D = A(b);
                            if (-1 !== Rt.indexOf(kg(F.prefix))) {
                                var J = A(d),
                                    M = D.eventMetadata || {};
                                M.hasOwnProperty("is_external_event") ||
                                    (M.is_external_event = !D.fromContainerExecution);
                                D.eventMetadata = M;
                                delete J[L.g.Zc];
                                ri(c, J, F.id, D)
                            }
                            C.push(F.id)
                        }
                        h.eventModel = h.eventModel || {};
                        0 < z.length ? h.eventModel[L.g.Ob] = C.join() : delete h.eventModel[L.g.Ob];
                        St || K(43);
                        void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        h.eventModel[L.g.xb] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : h
                    }
                }
            },
            get: function(a, b) {
                K(53);
                if (4 === a.length && g(a[1]) && g(a[2]) && xa(a[3])) {
                    var c = Dh(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        St ||
                            K(43);
                        var f = $t();
                        if (!Aa(cg(), function(l) {
                                return c.X === l
                            })) ms(c.X, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== Rt.indexOf(kg(c.prefix))) {
                            Wt(a, b);
                            var h = {};
                            oh(A((h[L.g.lb] = d, h[L.g.wb] = e, h)));
                            si(d, function(l) {
                                I(function() {
                                    return e(l)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    St = !0;
                    var c = Wt(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function() {},
            set: function(a,
                b) {
                var c;
                2 == a.length && Ya(a[1]) ? c = A(a[1]) : 3 == a.length && g(a[1]) && (c = {}, Ya(a[2]) || za(a[2]) ? c[a[1]] = A(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = Wt(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    A(c);
                    var h = A(c);
                    qi.push("set", [h], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    R(11) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        cu = {
            policy: !0
        };
    var du = function(a) {
            var b = E[Ce.da].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        eu = function(a) {
            var b = E[Ce.da],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var fu = !1,
        gu = [];

    function hu() {
        if (!fu) {
            fu = !0;
            for (var a = 0; a < gu.length; a++) I(gu[a])
        }
    }
    var iu = function(a) {
        fu ? I(a) : gu.push(a)
    };
    var zu = function(a) {
        if (yu(a)) return a;
        this.h = a
    };
    zu.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var yu = function(a) {
        return !a || "object" !== Wa(a) || Ya(a) ? !1 : "getUntrustedMessageValue" in a
    };
    zu.prototype.getUntrustedMessageValue = zu.prototype.getUntrustedMessageValue;
    var Au = 0,
        Bu = {},
        Cu = [],
        Du = [],
        Eu = !1,
        Fu = !1;

    function Gu(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Hu = function(a) {
            return E[Ce.da].push(a)
        },
        Iu = function(a, b) {
            if (!ya(b) || 0 > b) b = 0;
            var c = De[Ce.da],
                d = 0,
                e = !1,
                f = void 0;
            f = E.setTimeout(function() {
                e || (e = !0, a());
                f = void 0
            }, b);
            return function() {
                var h = c ? c.subscribers : 1;
                ++d === h && (f && (E.clearTimeout(f), f = void 0), e || (a(), e = !0))
            }
        };

    function Ju(a, b) {
        var c = a._clear || b.overwriteModelFields;
        k(a, function(e, f) {
            "_clear" !== e && (c && ff(e), ff(e, f))
        });
        Qe || (Qe = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = Ue(), a["gtm.uniqueEventId"] = d, ff("gtm.uniqueEventId", d));
        return Lt(a)
    }

    function Ku(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Fa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function Lu() {
        var a;
        if (Du.length) a = Du.shift();
        else if (Cu.length) a = Cu.shift();
        else return;
        var b;
        var c = a;
        if (Eu || !Ku(c.message)) b = c;
        else {
            Eu = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ue());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                h = {},
                l = {
                    message: (h.event = "gtm.init", h["gtm.uniqueEventId"] = d - 1, h),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            Cu.unshift(l, c);
            if (zg) {
                var m = Yf.ctid;
                if (m) {
                    var n, p = gg(hg());
                    n = p && p.context;
                    var q, t = Ef(E.location.href);
                    q = t.hostname + t.pathname;
                    var r = n && n.fromContainerExecution,
                        u = n && n.source,
                        v = Yf.canonicalContainerId,
                        w = Sf.rd;
                    zg && (Gh || (Gh = q), Hh.push(m + ";" + v + ";" + (r ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)))
                }
            }
            b = f
        }
        return b
    }

    function Mu() {
        for (var a = !1, b; !Fu && (b = Lu());) {
            Fu = !0;
            delete $e.eventModel;
            bf();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) Fu = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], h = 0; h < f.length; h++) {
                        var l = f[h],
                            m = cf(l, 1);
                        if (za(m) || Ya(m)) m = A(m);
                        af[l] = m
                    }
                try {
                    if (xa(d)) try {
                        d.call(df)
                    } catch (C) {} else if (za(d)) {
                        var n = d;
                        if (g(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                t = n.slice(1),
                                r = cf(p.join("."), 2);
                            if (null != r) try {
                                r[q].apply(r, t)
                            } catch (C) {}
                        }
                    } else {
                        var u =
                            void 0,
                            v = !1;
                        if (Fa(d)) {
                            a: {
                                if (d.length && g(d[0])) {
                                    var w = bu[d[0]];
                                    if (w && (!e.fromContainerExecution || !cu[d[0]])) {
                                        u = w(d, e);
                                        break a
                                    }
                                }
                                u = void 0
                            }(v = u && "set" === d[0] && !!u.event) && K(101)
                        }
                        else u = d;
                        if (u) {
                            var x = Ju(u, e);
                            a = x || a;
                            v && x && K(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && bf(!0);
                    var y = d["gtm.uniqueEventId"];
                    if ("number" === typeof y) {
                        for (var B = Bu[String(y)] || [], z = 0; z < B.length; z++) Du.push(Nu(B[z]));
                        B.length && Du.sort(Gu);
                        delete Bu[String(y)];
                        y > Au && (Au = y)
                    }
                    Fu = !1
                }
            }
        }
        return !a
    }

    function Ou() {
        if (R(17)) {
            var a = Pu();
        }
        var b = Mu();
        if (R(17)) {}
        try {
            du(eg())
        } catch (c) {}
        return b
    }

    function pt(a) {
        if (Au < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Bu[b] = Bu[b] || [];
            Bu[b].push(a)
        } else Du.push(Nu(a)), Du.sort(Gu), I(function() {
            Fu || Mu()
        })
    }

    function Nu(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var Qu = function() {
            function a(f) {
                var h = {};
                if (yu(f)) {
                    var l = f;
                    f = yu(l) ? l.getUntrustedMessageValue() : void 0;
                    h.fromContainerExecution = !0
                }
                return {
                    message: f,
                    messageContext: h
                }
            }
            var b = Rb(Ce.da, []),
                c = De[Ce.da] = De[Ce.da] || {};
            !0 === c.pruned && K(83);
            Bu = nt().get();
            qt();
            ss(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var f = {};
                    b.push((f.event = "gtm.dom", f))
                }
            });
            iu(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var f = {};
                    b.push((f.event = "gtm.load", f))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (0 < De.SANDBOXED_JS_SEMAPHORE) {
                    f = [];
                    for (var h = 0; h < arguments.length; h++) f[h] = new zu(arguments[h])
                } else f = [].slice.call(arguments, 0);
                var l = f.map(function(q) {
                    return a(q)
                });
                Cu.push.apply(Cu, l);
                var m = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (K(4), c.pruned = !0; this.length > n;) this.shift();
                var p = "boolean" !== typeof m || m;
                return Mu() && p
            };
            var e = b.slice(0).map(function(f) {
                return a(f)
            });
            Cu.push.apply(Cu, e);
            if (Pu()) {
                if (R(17)) {}
                I(Ou)
            }
        },
        Pu = function() {
            var a = !0;
            return a
        };

    function Ru(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = La();
        return b < c + 3E5 && b > c - 9E5
    }

    function Su(a) {
        return a && 0 === a.indexOf("pending:") ? Ru(a.substr(8)) : !1
    };
    var mv = function() {};
    var nv = function() {};
    nv.prototype.toString = function() {
        return "undefined"
    };
    var ov = new nv;
    var Tv = E.clearTimeout,
        Uv = E.setTimeout,
        W = function(a, b, c, d) {
            if (Dj()) {
                b && I(b)
            } else return Xb(a, b, c, d)
        },
        Vv = function() {
            return new Date
        },
        Wv = function() {
            return E.location.href
        },
        Xv = function(a) {
            return Af(Ef(a), "fragment")
        },
        Yv = function(a) {
            return Bf(Ef(a))
        },
        Zv = function(a, b) {
            return cf(a, b || 2)
        },
        $v = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Hu(a)) : d = Hu(a);
            return d
        },
        aw = function(a, b) {
            E[a] = b
        },
        X = function(a, b, c) {
            b &&
                (void 0 === E[a] || c && !E[a]) && (E[a] = b);
            return E[a]
        },
        bw = function(a, b, c) {
            return Jj(a, b, void 0 === c ? !0 : !!c)
        },
        cw = function(a, b, c) {
            return 0 === Sj(a, b, c)
        },
        dw = function(a, b) {
            if (Dj()) {
                b && I(b)
            } else Zb(a, b)
        },
        ew = function(a) {
            return !!zv(a, "init", !1)
        },
        fw = function(a) {
            xv(a, "init", !0)
        };

    function Cw(a, b) {
        function c(h) {
            var l = Ef(h),
                m = Af(l, "protocol"),
                n = Af(l, "host", !0),
                p = Af(l, "port"),
                q = Af(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Dw(a) {
        return Ew(a) ? 1 : 0
    }

    function Ew(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = A(a, {});
                A({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Dw(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var h = 0; h < zd.length; h++) {
                            var l = zd[h];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (v) {}
                    f = !1
                }
                return f;
            case "_ew":
                var m, n;
                m = String(b);
                n = String(c);
                var p = m.length - n.length;
                return 0 <= p && m.indexOf(n, p) === p;
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var q;
                var t = a.ignore_case ? "i" : void 0;
                try {
                    var r = String(c) + t,
                        u = Ad.get(r);
                    u || (u = new RegExp(c, t), Ad.set(r, u));
                    q = u.test(b)
                } catch (v) {
                    q = !1
                }
                return q;
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return Cw(b, c)
        }
        return !1
    };

    function Fw() {
        var a = [
            ["cv", "1"],
            ["rv", Ce.Qf],
            ["tc", Qc.filter(function(b) {
                return b
            }).length]
        ];
        Ce.vd && a.push(["x", Ce.vd]);
        We.h && a.push(["tag_exp", We.h]);
        return a
    };

    function Gw() {
        var a = qf();
        return a.length ? [
            ["exp_geo", a]
        ] : []
    }
    var Hw;

    function Iw() {
        try {
            null != Hw || (Hw = (new Intl.DateTimeFormat).resolvedOptions().timeZone)
        } catch (b) {}
        var a;
        return (null == (a = Hw) ? 0 : a.length) ? [
            ["exp_tz", Hw]
        ] : []
    };

    function Jw(a) {
        if (a.scriptSource) {
            var b;
            try {
                b = mc().getEntriesByType("resource")
            } catch (h) {}
            if (b) {
                for (var c = {}, d = 0; d < b.length; ++d) {
                    var e = b[d],
                        f = e.initiatorType;
                    if ("script" === f && e.name === a.scriptSource) return {
                        wm: d,
                        xm: c
                    };
                    c[f] = 1 + (c[f] || 0)
                }
                K(146)
            } else K(145)
        }
    }

    function Kw() {
        if (zg && R(91)) {
            var a = ig();
            if (!a) K(144);
            else if (a.canonicalContainerId) {
                var b = Jw(a);
                if (b) {
                    var c = !1;
                    ug(function(d) {
                        if (c) return [];
                        d.Za && (c = !0);
                        d.ef();
                        return [
                            ["rtg", a.canonicalContainerId],
                            ["rlo", b.wm],
                            ["slo", b.xm.script || 0]
                        ]
                    })
                }
            }
        }
    };
    var qx = function() {
        var a = !0;
        mj(7) && mj(9) && mj(10) || (a = !1);
        return a
    };
    tf();

    function ry() {
        return E.gaGlobal = E.gaGlobal || {}
    }
    var sy = function() {
            var a = ry();
            a.hid = a.hid || Ba();
            return a.hid
        },
        ty = function(a, b) {
            var c = ry();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var az = function(a) {
            this.s = a;
            this.C = "";
            this.h = this.s
        },
        bz = function(a, b) {
            a.h = b;
            return a
        },
        cz = function(a, b) {
            a.J = b;
            return a
        };

    function dz(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    }

    function ez(a, b, c) {
        if (a) {
            var d = a || [];
            if (Array.isArray(d))
                for (var e = Ya(b) ? b : {}, f = ia(d), h = f.next(); !h.done; h = f.next()) c(h.value, e)
        }
    };
    var uz = window,
        vz = document,
        wz = function(a) {
            var b = uz._gaUserPrefs;
            if (b && b.ioo && b.ioo() || vz.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === uz["ga-disable-" + a]) return !0;
            try {
                var c = uz.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Gj("AMP_TOKEN", String(vz.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return vz.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function Fz(a) {
        k(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[L.g.Xa] || {};
        k(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var Nz = function(a, b) {};

    function Mz(a, b) {
        var c = function() {};
        return c
    }

    function Oz(a, b, c) {};
    var Pz = Mz;
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    var Rz = encodeURI,
        Y = encodeURIComponent,
        Sz = function(a, b, c) {
            $b(a, b, c)
        },
        Tz = function(a, b) {
            if (!a) return !1;
            var c = Af(Ef(a),
                "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        Uz = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Z = {
        securityGroups: {}
    };
    Z.securityGroups.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.m = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
                Z.__e.isInfrastructure = !0;
                Z.__e.runInSiloedMode = !0
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Z.securityGroups.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.m = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0;
                Z.__f.isInfrastructure = !0;
                Z.__f.runInSiloedMode = !1
            })(function(a) {
                var b = Zv("gtm.referrer", 1) || G.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? Af(Ef(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Yv(String(b)) : String(b)
            })
        }();
    Z.securityGroups.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.m = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0;
                Z.__u.isInfrastructure = !0;
                Z.__u.runInSiloedMode = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Zv("gtm.url", 1)) || Wv();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return Yv(String(c));
                var e = Ef(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var h = b[a("vtp_multiQueryKeys").toString()],
                        l = b[a("vtp_queryKey").toString()] ||
                        "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;h ? za(l) ? n = l : n = String(l).replace(/\s+/g, "").split(",") : n = [String(l)];
                    for (var p = 0; p < n.length; p++) {
                        var q = Af(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!m || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = Af(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();




















    var pB = {};
    pB.dataLayer = df;
    pB.callback = function(a) {
        Se.hasOwnProperty(a) && xa(Se[a]) && Se[a]();
        delete Se[a]
    };
    pB.bootstrap = 0;
    pB._spx = !1;

    function qB() {
        De[eg()] = De[eg()] || pB;
        ng();
        pg() || k(qg(), function(d, e) {
            ms(d, e.transportUrl, e.context);
            K(92)
        });
        Oa(Te, Z.securityGroups);
        var a = gg(hg()),
            b, c = null == a ? void 0 : null == (b = a.context) ? void 0 : b.source;
        2 !== c && 4 !== c && 3 !== c || K(142);
        Yc = id
    }
    (function(a) {
        function b() {
            m = G.documentElement.getAttribute("data-tag-assistant-present");
            Ru(m) && (l = h.gk)
        }
        if (!E["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (G.referrer) {
                var d = Ef(G.referrer);
                c = "cct.google" === zf(d, "host")
            }
            if (!c) {
                var e = Jj("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (E["__TAGGY_INSTALLED"] = !0, Xb("https://cct.google/taggy/agent.js"))
        }
        if (Ne) a();
        else {
            var f = function(u) {
                    var v = "GTM",
                        w = "GTM";
                    Je ? (v = "OGT", w = "GTAG") : Ne && (w = v = "OPT");
                    var x = E["google.tagmanager.debugui2.queue"];
                    x || (x = [],
                        E["google.tagmanager.debugui2.queue"] = x, Xb("https://" + Ce.Kc + "/debug/bootstrap?id=" + Yf.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + Fj()));
                    var y = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: Qb,
                            containerProduct: v,
                            debug: !1,
                            id: Yf.ctid,
                            targetRef: {
                                ctid: Yf.ctid,
                                isDestination: Sf.rd
                            },
                            aliases: Zf(),
                            destinations: bg()
                        }
                    };
                    y.data.resume = function() {
                        a()
                    };
                    Ce.jj && (y.data.initialPublish = !0);
                    x.push(y)
                },
                h = {
                    Ym: 1,
                    hk: 2,
                    uk: 3,
                    kj: 4,
                    gk: 5
                },
                l = void 0,
                m = void 0,
                n = Af(E.location, "query", !1, void 0, "gtm_debug");
            Ru(n) && (l = h.hk);
            if (!l && G.referrer) {
                var p = Ef(G.referrer);
                "tagassistant.google.com" === zf(p, "host") && (l = h.uk)
            }
            if (!l) {
                var q = Jj("__TAG_ASSISTANT");
                q.length && q[0].length && (l = h.kj)
            }
            l || b();
            if (!l && Su(m)) {
                var t = function() {
                        if (r) return !0;
                        r = !0;
                        b();
                        l && Qb ? f(l) : a()
                    },
                    r = !1;
                ac(G, "TADebugSignal", function() {
                    t()
                }, !1);
                E.setTimeout(function() {
                    t()
                }, 200)
            } else l && Qb ? f(l) : a()
        }
    })(function() {
        try {
            lg();
            if (R(17)) {}
            Vg().s();
            kj();
            (R(76) || R(77) || R(78)) &&
            Ah();
            var a = fg();
            if (Pf().canonical[a]) {
                var b = De.zones;
                b && b.unregisterChild(ag());
                vr().removeExternalRestrictions(fg());
            } else {
                We.h = "";
                We.C = "";
                We.T = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                We.J = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                We.M = "ad_storage|analytics_storage|ad_user_data";
                Ir();
                for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) Nc.push(d[e]);
                for (var f = c.tags || [], h = 0; h < f.length; h++) Qc.push(f[h]);
                for (var l = c.predicates || [], m = 0; m < l.length; m++) Pc.push(l[m]);
                for (var n = c.rules || [], p = 0; p < n.length; p++) {
                    for (var q = n[p], t = {}, r = 0; r <
                        q.length; r++) {
                        var u = q[r][0];
                        t[u] = Array.prototype.slice.call(q[r], 1);
                        "if" !== u && "unless" !== u || Xc(t[u])
                    }
                    Oc.push(t)
                }
                Sc = Z;
                Tc = Dw;
                qB();
                if (!Ne)
                    for (var v = !1 !== pf["6"] ? R(90) ? Ye(We.M) : Ye(We.J) : Ye(We.T), w = 0; w < qh.length; w++) {
                        var x = qh[w],
                            y = x,
                            B = v[x] ? "granted" : "denied";
                        ah().implicit(y, B)
                    }
                Qu();
                ns = !1;
                os = 0;
                if ("interactive" == G.readyState && !G.createEventObject || "complete" == G.readyState) qs();
                else {
                    ac(G, "DOMContentLoaded", qs);
                    ac(G, "readystatechange", qs);
                    if (G.createEventObject && G.documentElement.doScroll) {
                        var z = !0;
                        try {
                            z = !E.frameElement
                        } catch (J) {}
                        z && rs()
                    }
                    ac(E, "load", qs)
                }
                fu = !1;
                "complete" === G.readyState ? hu() : ac(E, "load", hu);
                zg && (ug(Ng), E.setInterval(Mg, 864E5));
                ug(Fw);
                ug(Ss);
                ug(gq);
                ug(pi);
                ug(ct);
                ug(Ph);
                ug(To);
                ug(Ih);
                R(27) && (ug(Xs), ug(Ys), ug(Zs));
                zg && R(84) && (ug(Gw), ug(Iw));
                Kw();
                R(95) && ug(Rg);
                mv(); of (1);
                At();
                Re = La();
                pB.bootstrap = Re;
                if (R(17)) {}
            }
        } catch (J) {
            if ( of (4),
                zg) {
                var D = Hg(!0, !0);
                $b(D)
            }
        }
    });

})()