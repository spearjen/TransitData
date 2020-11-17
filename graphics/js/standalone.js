!function() {
    var e = "green" === window.config.navTheme
      , t = document.querySelectorAll(".dvz-bgreen-badge");
    if (!window.isTerminal && e && !t.length) {
        var i = document.createElement("div");
        i.classList.add("dvz-bgreen-badge"),
        document.getElementById("bb-nav").appendChild(i)
    }
    var n = "citylab" === window.config.navTheme
      , o = document.querySelectorAll(".dvz-citylab-badge")
      , r = [{
        name: "Design",
        url: "https://www.bloomberg.com/citylab/design"
    }, {
        name: "Culture",
        url: "https://www.bloomberg.com/citylab/culture"
    }, {
        name: "Transportation",
        url: "https://www.bloomberg.com/citylab/transportation"
    }, {
        name: "Environment",
        url: "https://www.bloomberg.com/citylab/environment"
    }, {
        name: "Economy",
        url: "https://www.bloomberg.com/citylab/economy"
    }, {
        name: "Housing",
        url: "https://www.bloomberg.com/citylab/housing"
    }, {
        name: "Justice",
        url: "https://www.bloomberg.com/citylab/justice"
    }, {
        name: "Government",
        url: "https://www.bloomberg.com/citylab/government"
    }];
    if (!window.isTerminal && n && !o.length && !window.config.noSecondaryNav) {
        var s = document.createElement("div");
        s.classList.add("dvz-citylab-nav");
        var a = document.createElement("div");
        a.classList.add("dvz-citylab-badge");
        var l = document.createElement("div");
        l.classList.add("dvz-citylab-links"),
        r.forEach((function(e, t) {
            var i = e.name
              , n = e.url
              , o = document.createElement("a");
            o.classList.add("dvz-citylab-link"),
            o.href = n;
            var s = document.createElement("div");
            s.classList.add("dvz-citylab-link-label"),
            t == r.length - 1 ? s.classList.add("no-after") : (s.classList.add("after"),
            s.setAttribute("pillar", "")),
            s.innerText = i,
            o.appendChild(s),
            l.appendChild(o)
        }
        )),
        s.appendChild(a),
        s.appendChild(l),
        document.getElementById("bb-nav").appendChild(s)
    }
    var d = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function u(e, t, i) {
        return e(i = {
            path: t,
            exports: {},
            require: function(e, t) {
                return p(null == t && i.path)
            }
        }, i.exports),
        i.exports
    }
    function c(e) {
        return e && e.default || e
    }
    function p() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
    }
    var _ = function(e) {
        return e ? e.replace(/^http:\/\//, "//").replace(/^\/\//, "https://") : null
    }
      , h = u((function(e) {
        var t = e.exports = {
            DEFAULT_SRCSET_LIST: [[450, -1], [640, -1], [750, -1], [840, -1], [1242, -1]],
            getUrl: function(e, i, n, o) {
                return e ? (isNaN(n) && (n = t.DEFAULT_SRCSET_LIST[0][0]),
                i <= n && (n = -1),
                isNaN(o) && (o = -1),
                t.isGIF(e) && (n = o = -999),
                _(e).replace(/(\/)(-*\d+x-*\d+)(.\w+)$/, "$1" + n + "x" + o + "$3")) : null
            },
            getActualWidth: function(e, t) {
                return -1 === t || -999 === t || e < t ? e : t
            },
            getExtension: function(e) {
                return e ? e.split(".").pop() : null
            },
            isGIF: function(e) {
                return "gif" === t.getExtension(e)
            },
            makeSrcset: function(e, i, n) {
                if (!e)
                    return "";
                if (t.isGIF(e))
                    return "";
                n && 0 !== n.length || (n = t.DEFAULT_SRCSET_LIST);
                var o = [];
                return n.map((function(n) {
                    var r = n[0]
                      , s = n[1]
                      , a = t.getActualWidth(i, r);
                    return o[a] ? null : (o[a] = !0,
                    t.getUrl(e, i, r, s) + " " + a + "w")
                }
                )).filter(Boolean).join(", ")
            },
            makeSizes: function(e) {
                e && 0 !== e.length || (e = []);
                var t = {};
                return e.push("100vw"),
                e.map((function(e) {
                    return t[e] ? null : (t[e] = !0,
                    e)
                }
                )).filter(Boolean).join(", ")
            }
        }
    }
    ))
      , f = (h.DEFAULT_SRCSET_LIST,
    h.getUrl,
    h.getActualWidth,
    h.getExtension,
    h.isGIF,
    h.makeSrcset,
    h.makeSizes,
    function(e, t) {
        Object.keys(t).forEach((function(i) {
            e[i] = t[i]
        }
        ))
    }
    );
    function b(e, t) {
        this.__attachment = t || {},
        this.__id = e || null
    }
    b.prototype = {
        getId: function() {
            return this.__id
        },
        getUrl: function() {
            return this.__attachment.url ? _(this.__attachment.url) : null
        },
        getTitle: function() {
            return this.__attachment.title
        },
        getCaption: function() {
            return this.__attachment.caption
        },
        setCaption: function(e) {
            this.__attachment.caption = e
        },
        getCredit: function() {
            return this.__attachment.credit
        },
        setCredit: function(e) {
            this.__attachment.credit = e
        },
        hasCreditOrCaption: function() {
            return !(!this.__attachment.credit && !this.__attachment.caption)
        },
        isEmpty: function() {
            return !Object.keys(this.__attachment).length
        }
    };
    var m = b;
    function v() {
        m.apply(this, arguments)
    }
    v.prototype = Object.create(m.prototype),
    v.prototype.constructor = v,
    f(v.prototype, {
        getDescription: function() {
            return this.__attachment.description
        },
        getPublishedAt: function() {
            return this.__attachment.publishedAt
        },
        getMegaphoneId: function() {
            return this.__attachment.megaphoneId
        }
    }),
    v.Empty = function() {
        return new v
    }
    ;
    var g = v;
    function y(e, t, i) {
        this.__name = e,
        this.__attributes = t || {},
        this.__data = i || ""
    }
    y.prototype = {
        toHTML: function() {
            return this.__openTag() + this.__innerHTML() + this.__closeTag()
        },
        hasAttribute: function(e) {
            return this.__attributes.hasOwnProperty(e)
        },
        setAttribute: function(e, t) {
            this.__attributes[e] = t
        },
        __openTag: function() {
            var e = this.__attributes
              , t = Object.keys(e).reduce((function(t, i) {
                var n = e[i];
                return null == n ? t : t + " " + i + '="' + n + '"'
            }
            ), "");
            return "<" + this.__name + t + ">"
        },
        __innerHTML: function() {
            return this.__data
        },
        __closeTag: function() {
            return "</" + this.__name + ">"
        }
    };
    var w = y;
    function k(e, t) {
        w.call(this, e, t)
    }
    k.prototype = Object.create(w.prototype),
    f(k.prototype, {
        __innerHTML: function() {
            return ""
        },
        __closeTag: function() {
            return ""
        }
    });
    var x = k;
    function E(e, t) {
        this.__attributes = t || {},
        this.__imageAttachment = e,
        this.__srcset = {},
        this.__sizes = []
    }
    E.prototype.setSrc = function(e, t) {
        this.__attributes.src = this.__imageAttachment.getUrl(e, t)
    }
    ,
    E.prototype.hasSrc = function() {
        return !!this.__attributes.src
    }
    ,
    E.prototype.addSrcset = function(e, t) {
        this.__srcset[String(e)] = [e, t]
    }
    ,
    E.prototype.hasSrcset = function() {
        return !!Object.keys(this.__srcset).length
    }
    ,
    E.prototype.addSize = function(e, t) {
        var i = t ? "(" + t + ") " + e : e;
        this.__sizes.push(i)
    }
    ,
    E.prototype.hasSizes = function() {
        return Boolean(this.__sizes.length)
    }
    ,
    E.prototype.hasBaseUrl = function() {
        return Boolean(this.__imageAttachment.getBaseUrl())
    }
    ,
    E.prototype.isGIF = function() {
        return this.__imageAttachment.isGIF()
    }
    ,
    E.prototype.toHTML = function() {
        if (this.hasSrc()) {
            var e, t, i, n, o = new x("img",this.__attributes), r = this.__attributes.alt || this.__imageAttachment.getAlt();
            return o.setAttribute("alt", r),
            this.hasSrcset() && this.hasBaseUrl() && !this.isGIF() && o.setAttribute("srcset", (e = this.__srcset,
            t = this.__imageAttachment,
            i = Object.keys(e).sort((function(e, t) {
                return parseInt(e, 10) - parseInt(t, 10)
            }
            )).map((function(t) {
                return e[t]
            }
            )),
            h.makeSrcset(t.getBaseUrl(), t.getOriginalWidth(), i))),
            this.hasSizes() && o.setAttribute("sizes", (n = this.__sizes,
            h.makeSizes(n))),
            o.toHTML()
        }
    }
    ;
    var A = E;
    function S(e) {
        this.__imageAttachment = e,
        this.__crops = []
    }
    S.prototype.addCrop = function(e, t, i, n, o) {
        this.__crops.push({
            tag: e,
            src: this.__imageAttachment.getUrl(t, i),
            outerAttributes: n || {},
            innerAttributes: o || {}
        })
    }
    ,
    S.prototype.toHTML = function() {
        return this.__crops.reduce((function(e, t) {
            return e + function(e) {
                if (!e.src)
                    return "";
                var t = new w("div",function(e, t) {
                    return t.style = "background-image:url('" + e.src + "')",
                    t
                }(e, e.innerAttributes));
                return new w(e.tag,e.outerAttributes,t.toHTML()).toHTML()
            }(t)
        }
        ), "")
    }
    ;
    var j = S
      , T = /<[^>]*>/g;
    function z() {
        m.apply(this, arguments)
    }
    function I(e, t) {
        var i = "inner" === t ? "background-image__image" : "background-image__responsive-element";
        if (!e) {
            var n = {};
            return n.class = i,
            n
        }
        return e && !e.class && (e.class = i),
        e
    }
    function C(e, t, i) {
        var n = {}
          , o = "bg-crop bg-crop-" + t + "x" + i;
        return Object.keys(e).forEach((function(t) {
            n[t] = e[t]
        }
        )),
        n.class = e.class ? e.class + " " + o : o,
        n
    }
    z.prototype = Object.create(m.prototype),
    z.prototype.constructor = z,
    f(z.prototype, {
        getBaseUrl: function() {
            return this.__attachment.baseUrl
        },
        getOriginalWidth: function() {
            var e = this.__attachment.origWidth;
            return isNaN(e) ? 2211 : e
        },
        getDescription: function() {
            return this.__attachment.description
        },
        setDescription: function(e) {
            this.__attachment.description = e
        },
        setTitle: function(e) {
            this.__attachment.title = e
        },
        getAlt: function() {
            return this.__attachment.alt || (e = this.__attachment.caption) && "string" == typeof e && e.replace(T, "") || void 0;
            var e
        },
        setAlt: function(e) {
            this.__attachment.alt = e
        },
        getUrl: function(e, t) {
            return h.getUrl(this.getBaseUrl(), this.getOriginalWidth(), e, t)
        },
        getType: function() {
            return h.getExtension(this.getBaseUrl())
        },
        isGIF: function() {
            return h.isGIF(this.__attachment.baseUrl)
        },
        toHTML: function(e) {
            var t = e && e.attributes || {}
              , i = e && e.srcsetList || h.DEFAULT_SRCSET_LIST
              , n = e && e.defaultSize || []
              , o = e && e.sizes || []
              , r = new A(this,t);
            return t["data-attachment-key"] = this.getId(),
            r.setSrc(n[0], n[1]),
            r.addSrcset(this.getOriginalWidth(), -1),
            i.forEach((function(e) {
                r.addSrcset(e[0], e[1])
            }
            )),
            o.forEach((function(e) {
                r.addSize(e.imageWidth, "min-width: " + e.mediaQueryMinWidth + "px")
            }
            )),
            r.toHTML()
        },
        toBackgroundImage: function(e) {
            var t = new j(this)
              , i = e.tag || "div"
              , n = I(e.outerAttributes, "outer")
              , o = I(e.innerAttributes, "inner")
              , r = e.crops || [];
            if (this.isGIF()) {
                var s = C(n, -999, -999);
                return t.addCrop(i, -999, -999, s, o),
                t.toHTML()
            }
            return r.forEach((function(e) {
                var r = e[0]
                  , s = e[1]
                  , a = C(n, r, s);
                t.addCrop(i, r, s, a, o)
            }
            )),
            t.toHTML()
        },
        toJSON: function(e, t) {
            var i = this.getUrl(e, t);
            return i ? {
                url: i,
                alt: this.getAlt(),
                caption: this.getCaption(),
                credit: this.getCredit(),
                hasCaptionOrCredit: this.hasCreditOrCaption()
            } : null
        }
    }),
    z.Empty = function() {
        return new z
    }
    ;
    var L = z;
    function O() {
        m.apply(this, arguments)
    }
    function P(e, t) {
        var i = "000000000" + e;
        return i.substr(i.length - t)
    }
    O.prototype = Object.create(m.prototype),
    O.prototype.constructor = O,
    f(O.prototype, {
        isAutoplay: function() {
            return !!this.__attachment.autoplay
        },
        enableAutoplay: function() {
            this.__attachment.autoplay = !0
        },
        disableAutoplay: function() {
            this.__attachment.autoplay = !1
        },
        getBmmrId: function() {
            return this.__attachment.bmmrId
        },
        getDuration: function() {
            return this.__attachment.duration
        },
        getFormattedDuration: function() {
            var e = parseInt(this.getDuration());
            if (!e || 0 === e)
                return "";
            var t = Math.floor(e / 6e4);
            return t < 10 && (t = P(t, 2)),
            t + ":" + P(Math.floor(e % 6e4 / 1e3), 2)
        },
        setDuration: function(e) {
            this.__attachment.duration = e
        },
        getThumbnail: function() {
            var e = this.__attachment.thumbnail;
            return new L(null,e || {})
        },
        getThumbnailUrl: function(e, t) {
            return this.getThumbnail().getUrl(e, t)
        },
        getShortUrl: function() {
            return this.__attachment.shortUrl
        },
        getTranscript: function() {
            return this.__attachment.transcript
        }
    }),
    O.Empty = function() {
        return new O
    }
    ;
    var R = O
      , D = {
        IMAGE: "image",
        VIDEO: "video",
        AUDIO: "videoAudio"
    }
      , M = {
        videoAudio: "getAudioAttachment",
        video: "getVideoAttachment",
        image: "getImageAttachment"
    }
      , B = {
        number: !0,
        string: !0
    }
      , U = ["thumbnail", "social", "thumbnail social", "social thumbnail"]
      , q = {};
    function N() {
        return !0
    }
    function V(e) {
        return e
    }
    function F(e) {
        return e.type === D.AUDIO
    }
    function H(e) {
        return e.type === D.VIDEO
    }
    function G(e) {
        return e.type === D.IMAGE
    }
    function W(e) {
        var t = e.placement;
        if (!t || 0 === t.length || t.length > 2)
            return !0;
        var i = t.join(" ");
        return -1 === U.indexOf(i)
    }
    function J(e) {
        return !!B[typeof e]
    }
    function $(e) {
        return e.toString()
    }
    function Q(e) {
        return e.get("attachments") || {}
    }
    function X(e, t, i) {
        var n = Q(i);
        return n[e] ? n[e][t] : null
    }
    var Y = {
        core: h,
        HasAttachments: {
            hasAttachmentById: function(e) {
                if (!J(e))
                    return !1;
                var t = $(e);
                for (var i in D) {
                    if (X(D[i], t, this))
                        return !0
                }
                return !1
            },
            hasAttachmentByIdAndType: function(e, t) {
                return !(!J(e) || !t) && !!X(t, $(e), this)
            },
            getAudioAttachment: function(e) {
                if (!J(e))
                    return g.Empty();
                var t = $(e)
                  , i = X(D.AUDIO, t, this);
                return i ? new g(t,i) : g.Empty()
            },
            getImageAttachment: function(e) {
                if (!J(e))
                    return L.Empty();
                var t = $(e)
                  , i = X(D.IMAGE, t, this);
                return i ? new L(t,i) : L.Empty()
            },
            getVideoAttachment: function(e) {
                if (!J(e))
                    return R.Empty();
                var t = $(e)
                  , i = X(D.VIDEO, t, this);
                return i ? new R(t,i) : R.Empty()
            },
            selectAttachmentType: function(e, t) {
                return this[M[e] || "getImageAttachment"](t)
            },
            getAttachments: function(e, t) {
                var i = Q(this).all
                  , n = e || N
                  , o = t || q
                  , r = [];
                if (!i || !i.length)
                    return r;
                for (var s = 0, a = i.length; s < a; ++s) {
                    var l = i[s];
                    if (n(l)) {
                        var d = l.id
                          , u = l.type
                          , c = o[u] || V
                          , p = this.selectAttachmentType(u, d);
                        r.push(c(p))
                    }
                }
                return r
            },
            getAudioAttachments: function(e) {
                var t = {};
                return t[D.AUDIO] = e,
                this.getAttachments(F, t)
            },
            getImageAttachments: function(e) {
                var t = {};
                return t[D.IMAGE] = e,
                this.getAttachments(G, t)
            },
            getVideoAttachments: function(e) {
                var t = {};
                return t[D.VIDEO] = e,
                this.getAttachments(H, t)
            },
            getAttachmentsForSlideshow: function(e) {
                return this.getAttachments(W, e)
            }
        },
        AudioAttachment: g,
        ImageAttachment: L,
        VideoAttachment: R,
        HTMLImage: A,
        HTMLBackgroundImage: j
    }.core;
    function K(e) {
        return e.origWidth || 1200
    }
    function Z(e) {
        return e.origHeight || 675
    }
    var ee = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1
          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1
          , n = e.baseUrl
          , o = K(e);
        return Y.getUrl(n, o, t, i)
    }
      , te = ee
      , ie = function(e) {
        var t = e.baseUrl;
        return Y.isGIF(t)
    }
      , ne = ee
      , oe = function(e) {
        return K(e) / Z(e)
    };
    function re(e) {
        return Object.keys(e).map((function(t) {
            return "".concat(t, '="').concat(e[t], '"')
        }
        )).join(" ")
    }
    function se(e, t) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          , n = i.width
          , o = i.height
          , r = n > 0 && o > 0 ? o / n : 1 / oe(t);
        return "<style>#".concat(e, ":before{padding-top:").concat(100 * r, "%;}</style>")
    }
    var ae = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          , n = "bb-lazy-img-".concat(e.id)
          , o = 25
          , r = i.height > 0 ? Math.ceil(i.height / i.width * o) : -1
          , s = "";
        return t.class && (s = t.class,
        delete t.class),
        '\n        <div id="'.concat(n, '" class="bb-lazy-img ').concat(s, '" ').concat(re(t), ">\n            ").concat(se(n, e, i), '\n            <img class="bb-lazy-img__image"\n                 src="').concat(ne(e, o, r), '"\n                 alt="').concat(e.description, '"\n                 data-hi-res-src="').concat(ne(e, i.width, i.height), '">\n        </div>')
    }
      , le = ae;
    var de = function(e, t, i) {
        for (var n = 0, o = e.length; n < o; ++n)
            t.call(i, e[n], n)
    };
    function ue(e, t, i) {
        return e.replace(/(\/)(-*\d+x-*\d+)(.\w+)$/, "$1" + t + "x" + i + "$3")
    }
    function ce(e) {
        var t = "undefined" != typeof window && window.devicePixelRatio ? window.devicePixelRatio : 1
          , i = e.offsetWidth * t
          , n = e.offsetHeight * t
          , o = 10 * Math.ceil(i / 10) || -1;
        return {
            width: o,
            height: i && n ? Math.ceil(o / (i / n)) : -1
        }
    }
    var pe = function(e) {
        var t = ce(e)
          , i = e.dataset.hiResSrc;
        return i.match(/\.gif$/) || -1 === t.width ? i : ue(i, t.width, t.height)
    }
      , _e = new IntersectionObserver((function(e) {
        de(e, (function(e) {
            e.isIntersecting && e.target.dispatchEvent(new CustomEvent("intersect",{
                detail: {}
            }))
        }
        ))
    }
    ),{
        threshold: 0
    });
    function he(e) {
        if (!_e)
            return e.hasAttribute("data-hi-res-background-src") ? be(e) : fe(e);
        _e.observe(e),
        e.addEventListener("intersect", (function t() {
            _e.unobserve(e),
            e.removeEventListener("intersect", t),
            e.hasAttribute("data-hi-res-background-src") ? be(e) : fe(e)
        }
        ))
    }
    function fe(e) {
        var t = e.querySelector(".bb-lazy-img__image");
        if (t.dataset.hiResSrc) {
            var i = new Image
              , n = new Image;
            i.onload = function() {
                var i = pe(t);
                n.onload = function() {
                    t.src = i,
                    e.classList.add("bb-lazy-img--loaded"),
                    t.removeAttribute("data-hi-res-src")
                }
                ,
                n.src = i
            }
            ,
            i.src = t.src
        }
    }
    function be(e) {
        if (e.dataset.hiResBackgroundSrc) {
            var t = new Image;
            t.onload = function() {
                e.style.backgroundImage = "url('" + t.src + "')",
                e.classList.add("bb-lazy-img--loaded"),
                e.removeAttribute("data-hi-res-background-src")
            }
            ,
            t.src = e.dataset.hiResBackgroundSrc
        }
    }
    de(document.querySelectorAll(".bb-lazy-img"), he);
    var me = he
      , ve = window.config && window.config.org && "feature" === window.config.org ? "features" : "graphics"
      , ge = document.querySelectorAll(".dvz-recirculator");
    if (!window.isTerminal && ge.length > 0) {
        var ye = new XMLHttpRequest;
        ye.open("GET", "/api/topics/" + ve, !0),
        ye.onload = function() {
            if (ye.status >= 200 && ye.status < 400) {
                var e = JSON.parse(ye.responseText)
                  , t = window.location.pathname;
                !function(e) {
                    if (e.length < 4)
                        return;
                    !function(e) {
                        var t, i, n;
                        for (n = e.length; n; n -= 1)
                            t = Math.floor(Math.random() * n),
                            i = e[n - 1],
                            e[n - 1] = e[t],
                            e[t] = i
                    }(e);
                    var t = ge[0];
                    t.innerHTML = "",
                    e.slice(0, 8).forEach((function(e) {
                        var i = document.createElement("article");
                        i.classList.add("dvz-recirculator__story"),
                        i.dataset.id = e.id,
                        i.dataset.type = e.type;
                        var n = document.createElement("a");
                        n.classList.add("dvz-recirculator__link"),
                        n.setAttribute("href", e.url);
                        var o = document.createElement("div");
                        o.classList.add("dvz-recirculator__headline"),
                        o.innerHTML = e.headline;
                        var r = document.createElement("time");
                        r.setAttribute("datetime", e.publishedAt),
                        r.classList.add("dvz-recirculator__timestamp");
                        var s = new Date(e.publishedAt)
                          , a = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."][s.getMonth()] + " " + s.getDate() + ", " + s.getFullYear();
                        r.textContent = a;
                        var l = document.createElement("div");
                        l.classList.add("dvz-recirculator__image");
                        var d = document.createElement("div");
                        d.classList.add("dvz-recirculator__image-inner");
                        var u = "";
                        e.extraMedia.thumbnail && e.extraMedia.thumbnail.default ? (u = e.attachments.image[e.extraMedia.thumbnail.default.id]).id = e.extraMedia.thumbnail.default.id : e.extraMedia.lede && e.extraMedia.lede.default && "image" === e.extraMedia.lede.default.type && ((u = e.attachments[e.extraMedia.lede.default.type][e.extraMedia.lede.default.id]).id = e.extraMedia.lede.default.id);
                        var c = {
                            width: 500,
                            height: 375
                        }
                          , p = te(u, c.width, c.height);
                        ie(u) ? (d.classList.add("bb-lazy-img"),
                        d.classList.add("dvz-recirculator__image-bg"),
                        d.setAttribute("data-hi-res-background-src", p)) : d.innerHTML = le(u, {
                            class: "dvz-recirculator__image-img"
                        }, c),
                        l.classList.add(c.width + "x" + c.height),
                        l.appendChild(d),
                        n.appendChild(l),
                        n.appendChild(o),
                        n.appendChild(r),
                        i.appendChild(n),
                        t.appendChild(i)
                    }
                    )),
                    de(document.querySelectorAll(".bb-lazy-img"), me)
                }(e.items.filter((function(e) {
                    return e.extraMedia && (e.extraMedia.thumbnail && e.extraMedia.thumbnail.default || e.extraMedia.lede && e.extraMedia.lede.default) && t !== e.url.replace(/.*.com/, "")
                }
                )))
            } else
                console.log("We reached our target server, but it returned an error"),
                console.log(ye)
        }
        ,
        ye.onerror = function() {
            console.log("There was a connection error of some sort"),
            console.log(ye)
        }
        ,
        ye.send()
    }
    var we = encodeURIComponent(Ee(document.head.querySelector('meta[property="og:url"]')))
      , ke = Ee(document.head.querySelector('meta[property="og:title"]'))
      , xe = Ee(document.head.querySelector('meta[property="og:description"]') || document.head.querySelector('meta[name="description"]'));
    function Ee(e, t) {
        return e ? e.getAttribute("content") : t || ""
    }
    var Ae, Se, je, Te, ze = [{
        name: "facebook",
        text: "Share",
        aria: "Share this story on Facebook (opens in a new window)",
        href: "https://www.facebook.com/sharer/sharer.php?u=" + we,
        width: 600,
        height: 600
    }, {
        name: "twitter",
        text: "Tweet",
        aria: "Share this story on Twitter (opens in a new window)",
        href: (je = document.head.querySelector('meta[name="dvz:twitter"]') || document.head.querySelector('meta[name="twitter:title"]') || document.head.querySelector('meta[property="og:longTitle"]'),
        Te = document.head.querySelector('meta[name="twitter:site"]'),
        "https://twitter.com/intent/tweet?url=" + we + "&text=" + encodeURIComponent(Ee(je)) + "&via=" + Ee(Te, "bbgvisualdata").replace(/@/, "")),
        width: 626,
        height: 438
    }, {
        name: "linkedin",
        text: "Post",
        aria: "Share this story on LinkedIn (opens in a new window)",
        href: "https://www.linkedin.com/sharing/share-offsite/?url=" + we,
        width: 626,
        height: 438
    }, {
        name: "email",
        text: "Email",
        aria: "Share this story via email (opens native email client)",
        href: (Ae = encodeURIComponent("".concat(ke, " - Bloomberg")),
        Se = encodeURIComponent("".concat(ke, "\r\n\r\n").concat(xe, "\r\n\r\n").concat(we)),
        "mailto:?subject=".concat(Ae, "&body=").concat(Se))
    }], Ie = document.getElementsByClassName("dvz-recirculator")[0];
    if (!window.isTerminal) {
        if (Ie) {
            var Ce = document.createElement("div");
            Ce.classList.add("copy-width"),
            Ce.classList.add("dvz-social-media-buttons"),
            Ie.parentNode.insertBefore(Ce, Ie)
        }
        var Le, Oe = document.getElementsByClassName("dvz-social-media-buttons");
        de(Oe, (function(e) {
            Le = Le || function() {
                var e = document.createElement("div");
                e.classList.add("share-article-button");
                var t = document.createElement("div");
                return t.classList.add("share-article-button__label"),
                t.innerHTML = "Share this article",
                e.appendChild(t),
                ze.forEach((function(t) {
                    var i = document.createElement("div");
                    i.classList.add("share-article-button__option");
                    var n = document.createElement("a");
                    n.classList.add("share-article-button__link"),
                    n.classList.add("share-article-button__link-" + t.name),
                    n.setAttribute("aria-label", t.aria),
                    n.setAttribute("rel", "nofollow"),
                    n.href = t.href;
                    var o = document.createElement("div");
                    o.classList.add("share-article-button__icon"),
                    o.classList.add("share-article-button__icon-" + t.name);
                    var r = document.createElement("span");
                    r.innerHTML = t.text,
                    n.dataset.name = t.name,
                    n.dataset.width = t.width,
                    n.dataset.height = t.height,
                    n.appendChild(o),
                    n.appendChild(r),
                    i.appendChild(n),
                    e.appendChild(i)
                }
                )),
                e
            }(),
            e.innerHTML = "",
            e.appendChild(Le.cloneNode(!0)),
            e.addEventListener("click", (function(e) {
                var t = e.target.dataset
                  , i = t.name
                  , n = t.width
                  , o = t.height;
                i && (window.dataLayer.push({
                    event: "article_social_share",
                    eventCategory: "social",
                    eventAction: "share",
                    eventLabel: i
                }),
                "undefined" !== n && "undefined" !== o && (e.preventDefault(),
                function(e, t) {
                    var i = window.screen
                      , n = (i.height - t.height) / 2 - 50
                      , o = "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,left=" + (i.width - t.width) / 2 + ",top=" + n + ",width=" + t.width + ",height=" + t.height;
                    window.open(e, t.name, o)
                }(e.target.href, {
                    name: "social-button-" + i,
                    width: n,
                    height: o
                })))
            }
            ))
        }
        ))
    }
    function Pe(e) {
        var t = e.indexOf("?")
          , i = -1 === t || t === e.length - 1;
        this.__queryObject = i ? {} : function(e) {
            return e.trim().split("&").reduce((function(e, t) {
                var i = t.replace(/\+/g, " ").split("=")
                  , n = decodeURIComponent(i[0])
                  , o = void 0 !== i[1] ? decodeURIComponent(i[1]) : null;
                return e.hasOwnProperty(n) ? Array.isArray(e[n]) ? e[n].push(o) : e[n] = [e[n], o] : e[n] = o,
                e
            }
            ), {})
        }(e.substr(t + 1))
    }
    Pe.prototype.getValue = function(e) {
        return this.__queryObject[e]
    }
    ,
    Pe.prototype.hasKey = function(e) {
        return this.__queryObject.hasOwnProperty(e)
    }
    ;
    var Re = Pe;
    !function() {
        for (var e = 0, t = ["ms", "moz", "webkit", "o"], i = 0; i < t.length && !window.requestAnimationFrame; ++i)
            window.requestAnimationFrame = window[t[i] + "RequestAnimationFrame"],
            window.cancelAnimationFrame = window[t[i] + "CancelAnimationFrame"] || window[t[i] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
            var i = (new Date).getTime()
              , n = Math.max(0, 16 - (i - e))
              , o = window.setTimeout((function() {
                t(i + n)
            }
            ), n);
            return e = i + n,
            o
        }
        ),
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        }
        )
    }();
    var De = u((function(e, t) {
        /*!
     * @overview es6-promise - a tiny implementation of Promises/A+.
     * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
     * @license   Licensed under MIT license
     *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
     * @version   v4.2.8+1e68dce6
     */
        e.exports = function() {
            function e(e) {
                return "function" == typeof e
            }
            var t = Array.isArray ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
              , i = 0
              , n = void 0
              , o = void 0
              , r = function(e, t) {
                _[i] = e,
                _[i + 1] = t,
                2 === (i += 2) && (o ? o(h) : g())
            }
              , s = "undefined" != typeof window ? window : void 0
              , a = s || {}
              , l = a.MutationObserver || a.WebKitMutationObserver
              , u = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process)
              , c = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
            function p() {
                var e = setTimeout;
                return function() {
                    return e(h, 1)
                }
            }
            var _ = new Array(1e3);
            function h() {
                for (var e = 0; e < i; e += 2)
                    (0,
                    _[e])(_[e + 1]),
                    _[e] = void 0,
                    _[e + 1] = void 0;
                i = 0
            }
            var f, b, m, v, g = void 0;
            function y(e, t) {
                var i = this
                  , n = new this.constructor(x);
                void 0 === n[k] && O(n);
                var o = i._state;
                if (o) {
                    var s = arguments[o - 1];
                    r((function() {
                        return C(o, n, s, i._result)
                    }
                    ))
                } else
                    z(i, n, e, t);
                return n
            }
            function w(e) {
                if (e && "object" == typeof e && e.constructor === this)
                    return e;
                var t = new this(x);
                return A(t, e),
                t
            }
            u ? g = function() {
                return process.nextTick(h)
            }
            : l ? (b = 0,
            m = new l(h),
            v = document.createTextNode(""),
            m.observe(v, {
                characterData: !0
            }),
            g = function() {
                v.data = b = ++b % 2
            }
            ) : c ? ((f = new MessageChannel).port1.onmessage = h,
            g = function() {
                return f.port2.postMessage(0)
            }
            ) : g = void 0 === s ? function() {
                try {
                    var e = Function("return this")().require("vertx");
                    return void 0 !== (n = e.runOnLoop || e.runOnContext) ? function() {
                        n(h)
                    }
                    : p()
                } catch (e) {
                    return p()
                }
            }() : p();
            var k = Math.random().toString(36).substring(2);
            function x() {}
            function E(t, i, n) {
                i.constructor === t.constructor && n === y && i.constructor.resolve === w ? function(e, t) {
                    1 === t._state ? j(e, t._result) : 2 === t._state ? T(e, t._result) : z(t, void 0, (function(t) {
                        return A(e, t)
                    }
                    ), (function(t) {
                        return T(e, t)
                    }
                    ))
                }(t, i) : void 0 === n ? j(t, i) : e(n) ? function(e, t, i) {
                    r((function(e) {
                        var n = !1
                          , o = function(e, t, i, n) {
                            try {
                                e.call(t, i, n)
                            } catch (e) {
                                return e
                            }
                        }(i, t, (function(i) {
                            n || (n = !0,
                            t !== i ? A(e, i) : j(e, i))
                        }
                        ), (function(t) {
                            n || (n = !0,
                            T(e, t))
                        }
                        ), e._label);
                        !n && o && (n = !0,
                        T(e, o))
                    }
                    ), e)
                }(t, i, n) : j(t, i)
            }
            function A(e, t) {
                if (e === t)
                    T(e, new TypeError("You cannot resolve a promise with itself"));
                else if (o = typeof (n = t),
                null === n || "object" !== o && "function" !== o)
                    j(e, t);
                else {
                    var i = void 0;
                    try {
                        i = t.then
                    } catch (t) {
                        return void T(e, t)
                    }
                    E(e, t, i)
                }
                var n, o
            }
            function S(e) {
                e._onerror && e._onerror(e._result),
                I(e)
            }
            function j(e, t) {
                void 0 === e._state && (e._result = t,
                e._state = 1,
                0 !== e._subscribers.length && r(I, e))
            }
            function T(e, t) {
                void 0 === e._state && (e._state = 2,
                e._result = t,
                r(S, e))
            }
            function z(e, t, i, n) {
                var o = e._subscribers
                  , s = o.length;
                e._onerror = null,
                o[s] = t,
                o[s + 1] = i,
                o[s + 2] = n,
                0 === s && e._state && r(I, e)
            }
            function I(e) {
                var t = e._subscribers
                  , i = e._state;
                if (0 !== t.length) {
                    for (var n = void 0, o = void 0, r = e._result, s = 0; s < t.length; s += 3)
                        n = t[s],
                        o = t[s + i],
                        n ? C(i, n, o, r) : o(r);
                    e._subscribers.length = 0
                }
            }
            function C(t, i, n, o) {
                var r = e(n)
                  , s = void 0
                  , a = void 0
                  , l = !0;
                if (r) {
                    try {
                        s = n(o)
                    } catch (e) {
                        l = !1,
                        a = e
                    }
                    if (i === s)
                        return void T(i, new TypeError("A promises callback cannot return that same promise."))
                } else
                    s = o;
                void 0 !== i._state || (r && l ? A(i, s) : !1 === l ? T(i, a) : 1 === t ? j(i, s) : 2 === t && T(i, s))
            }
            var L = 0;
            function O(e) {
                e[k] = L++,
                e._state = void 0,
                e._result = void 0,
                e._subscribers = []
            }
            var P = function() {
                function e(e, i) {
                    this._instanceConstructor = e,
                    this.promise = new e(x),
                    this.promise[k] || O(this.promise),
                    t(i) ? (this.length = i.length,
                    this._remaining = i.length,
                    this._result = new Array(this.length),
                    0 === this.length ? j(this.promise, this._result) : (this.length = this.length || 0,
                    this._enumerate(i),
                    0 === this._remaining && j(this.promise, this._result))) : T(this.promise, new Error("Array Methods must be provided an Array"))
                }
                return e.prototype._enumerate = function(e) {
                    for (var t = 0; void 0 === this._state && t < e.length; t++)
                        this._eachEntry(e[t], t)
                }
                ,
                e.prototype._eachEntry = function(e, t) {
                    var i = this._instanceConstructor
                      , n = i.resolve;
                    if (n === w) {
                        var o = void 0
                          , r = void 0
                          , s = !1;
                        try {
                            o = e.then
                        } catch (e) {
                            s = !0,
                            r = e
                        }
                        if (o === y && void 0 !== e._state)
                            this._settledAt(e._state, t, e._result);
                        else if ("function" != typeof o)
                            this._remaining--,
                            this._result[t] = e;
                        else if (i === R) {
                            var a = new i(x);
                            s ? T(a, r) : E(a, e, o),
                            this._willSettleAt(a, t)
                        } else
                            this._willSettleAt(new i((function(t) {
                                return t(e)
                            }
                            )), t)
                    } else
                        this._willSettleAt(n(e), t)
                }
                ,
                e.prototype._settledAt = function(e, t, i) {
                    var n = this.promise;
                    void 0 === n._state && (this._remaining--,
                    2 === e ? T(n, i) : this._result[t] = i),
                    0 === this._remaining && j(n, this._result)
                }
                ,
                e.prototype._willSettleAt = function(e, t) {
                    var i = this;
                    z(e, void 0, (function(e) {
                        return i._settledAt(1, t, e)
                    }
                    ), (function(e) {
                        return i._settledAt(2, t, e)
                    }
                    ))
                }
                ,
                e
            }()
              , R = function() {
                function t(e) {
                    this[k] = L++,
                    this._result = this._state = void 0,
                    this._subscribers = [],
                    x !== e && ("function" != typeof e && function() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }(),
                    this instanceof t ? function(e, t) {
                        try {
                            t((function(t) {
                                A(e, t)
                            }
                            ), (function(t) {
                                T(e, t)
                            }
                            ))
                        } catch (t) {
                            T(e, t)
                        }
                    }(this, e) : function() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }())
                }
                return t.prototype.catch = function(e) {
                    return this.then(null, e)
                }
                ,
                t.prototype.finally = function(t) {
                    var i = this.constructor;
                    return e(t) ? this.then((function(e) {
                        return i.resolve(t()).then((function() {
                            return e
                        }
                        ))
                    }
                    ), (function(e) {
                        return i.resolve(t()).then((function() {
                            throw e
                        }
                        ))
                    }
                    )) : this.then(t, t)
                }
                ,
                t
            }();
            return R.prototype.then = y,
            R.all = function(e) {
                return new P(this,e).promise
            }
            ,
            R.race = function(e) {
                var i = this;
                return t(e) ? new i((function(t, n) {
                    for (var o = e.length, r = 0; r < o; r++)
                        i.resolve(e[r]).then(t, n)
                }
                )) : new i((function(e, t) {
                    return t(new TypeError("You must pass an array to race."))
                }
                ))
            }
            ,
            R.resolve = w,
            R.reject = function(e) {
                var t = new this(x);
                return T(t, e),
                t
            }
            ,
            R._setScheduler = function(e) {
                o = e
            }
            ,
            R._setAsap = function(e) {
                r = e
            }
            ,
            R._asap = r,
            R.polyfill = function() {
                var e = void 0;
                if (void 0 !== d)
                    e = d;
                else if ("undefined" != typeof self)
                    e = self;
                else
                    try {
                        e = Function("return this")()
                    } catch (e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                var t = e.Promise;
                if (t) {
                    var i = null;
                    try {
                        i = Object.prototype.toString.call(t.resolve())
                    } catch (e) {}
                    if ("[object Promise]" === i && !t.cast)
                        return
                }
                e.Promise = R
            }
            ,
            R.Promise = R,
            R
        }()
    }
    ))
      , Me = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    var Be = ["font-family:BWHaasHead-95Black,BWHaasHead,Helvetica Neue,Helvetica", "font-size:45px", "margin:0 auto", "text-align:center", "color:white", "background-color:#2800D7", "padding:15px 0"]
      , Ue = ["font-size:18px", "line-height:28px", "background-color:white", "color:black", "padding: 20px", "font-family:Tiempos,Helvetica Neue,Helvetica"]
      , qe = ["height:100%", "width:100%", "z-index:100", "color:white", "background:rgba(256,256,256,.8)", "position:fixed", "top:0", "left:0"]
      , Ne = ["min-width:300px", "border:2px solid #2800D7", "width:50%", "background-color:white", "color:black", "margin: 20vh auto"]
      , Ve = ["background-color:#D8D8D8", "color:#000000", "font-size:20px", "text-align:center", "font-weight:bold", "font-family:BWHaasHead-75Bold,BWHaasHead,Helvetica Neue,Helvetica", "margin:0 auto 20px", "padding:5px", "width:165px"]
      , Fe = ["margin-left:4px", "display:inline-block", "border:1px solid #000000", "border-radius:100%", "color:#000000", "background-color:#D8D8D8", "font-size:20px", "text-align:center", "line-height:20px", "width:26px", "padding:3px"]
      , He = ["width:1px !important", "height:1px !important", "position:absolute !important", "display:block", "top:-5000px", "left:-5000px;"]
      , Ge = ["pub_300x250", "pub_300x250m", "pub_728x90", "text-ad", "textAd", "text_ad", "text_ads", "text-ads", "text-ad-links"]
      , We = ["a-real-div-for-testing", "false-positive-test"]
      , Je = ["display: block", "position: absolute", "right: 200%", "height: 1%", "width: 1%"]
      , $e = ["font-size:14px", "line-height:18px", "background-color:white", "color:black", "padding: 20px", "font-family:Tiempos,Helvetica Neue,Helvetica"]
      , Qe = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return Me(e, null, [{
            key: "renderModal",
            value: function(e, t) {
                var i = document
                  , n = i.createElement("aside")
                  , o = i.createElement("div")
                  , r = i.createElement("h1")
                  , s = i.createTextNode("Bloomberg")
                  , a = i.createElement("div")
                  , l = i.createTextNode(e)
                  , d = i.createElement("div")
                  , u = i.createTextNode("Continue")
                  , c = i.createElement("div")
                  , p = i.createTextNode(t)
                  , _ = i.createElement("div");
                return n.setAttribute("id", "adBlockerContainer"),
                n.setAttribute("role", "dialog"),
                n.setAttribute("aria-describedby", "adBlockerMessage"),
                a.setAttribute("id", "adBlockerMessage"),
                a.setAttribute("tabindex", "0"),
                d.setAttribute("id", "adBlockerContinue"),
                d.setAttribute("tabindex", "0"),
                d.setAttribute("role", "button"),
                c.setAttribute("id", "adBlockerTimer"),
                _.setAttribute("id", "adBlockerFooter"),
                r.setAttribute("style", this.logoStyles()),
                a.setAttribute("style", this.messageDivStyles()),
                n.setAttribute("style", this.containerStyles()),
                o.setAttribute("style", this.elementStyles()),
                d.setAttribute("style", this.continueDisplayStyles()),
                c.setAttribute("style", this.timerStyles()),
                _.setAttribute("style", this.footerStyles()),
                r.appendChild(s),
                a.appendChild(l),
                d.appendChild(u),
                c.appendChild(p),
                d.appendChild(c),
                _.innerHTML = 'If you believe that you may have received\n    this message in error <a href="https://www.bloomberg.com/feedback" style="color: #2B00F7" id="adBlockerFooterLink">please let\n    us know</a>.',
                o.appendChild(r),
                o.appendChild(a),
                o.appendChild(d),
                o.appendChild(_),
                n.appendChild(o),
                n
            }
        }, {
            key: "getBlockerMessage",
            value: function() {
                return "We noticed that you're using an ad blocker,\n    which may adversely affect the performance and content on\n    Bloomberg.com. For the best experience, please\n    whitelist the site."
            }
        }, {
            key: "logoStyles",
            value: function() {
                return Be.join("; ")
            }
        }, {
            key: "messageDivStyles",
            value: function() {
                return Ue.join("; ")
            }
        }, {
            key: "containerStyles",
            value: function() {
                return qe.join("; ")
            }
        }, {
            key: "elementStyles",
            value: function() {
                return Ne.join("; ")
            }
        }, {
            key: "continueDisplayStyles",
            value: function() {
                return Ve.join("; ")
            }
        }, {
            key: "timerStyles",
            value: function() {
                return Fe.join("; ")
            }
        }, {
            key: "fakeAdStyles",
            value: function() {
                return He.join("; ")
            }
        }, {
            key: "fakeAdClasses",
            value: function() {
                return Ge.join(" ")
            }
        }, {
            key: "testDivStyles",
            value: function() {
                return Je.join("; ")
            }
        }, {
            key: "testDivClasses",
            value: function() {
                return We.join(" ")
            }
        }, {
            key: "footerStyles",
            value: function() {
                return $e.join("; ")
            }
        }]),
        e
    }()
      , Xe = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    /*! Environment.js */
    var Ye = /\.co\.jp$/i
      , Ke = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return Xe(e, null, [{
            key: "getDocument",
            value: function() {
                return "undefined" != typeof document ? document : null
            }
        }, {
            key: "getViewportDimensions",
            value: function() {
                var e = this.getWindow()
                  , t = this.getDocument();
                return e && t ? {
                    height: e.innerHeight || t.documentElement.clientHeight,
                    width: e.innerWidth || t.documentElement.clientWidth
                } : 0
            }
        }, {
            key: "getWindow",
            value: function() {
                return "undefined" != typeof window ? window : null
            }
        }, {
            key: "localStorageExists",
            value: function() {
                var e = this.getWindow();
                if (!e)
                    return !1;
                try {
                    return e.localStorage
                } catch (e) {
                    return !1
                }
            }
        }, {
            key: "sessionStorageExists",
            value: function() {
                var e = this.getWindow();
                if (!e)
                    return !1;
                try {
                    return e.sessionStorage
                } catch (e) {
                    return !1
                }
            }
        }, {
            key: "cookiesAreEnabled",
            value: function() {
                var e = this.getWindow();
                return !(!e || !e.navigator) && e.navigator.cookieEnabled
            }
        }, {
            key: "isCOJP",
            value: function() {
                var e = this.getWindow();
                return !!e && Ye.test(e.location.hostname)
            }
        }, {
            key: "isBrowser",
            value: function() {
                return Boolean(this.getWindow())
            }
        }, {
            key: "getHostUri",
            value: function() {
                var e = this.getWindow();
                return e ? encodeURIComponent(e.location.hostname) : ""
            }
        }, {
            key: "currentTime",
            value: function() {
                var e = this.getWindow();
                return e.performance && e.performance.now ? e.performance.now() : Date.now()
            }
        }, {
            key: "getElementStyleAttribute",
            value: function(e, t) {
                return this.getWindow().getComputedStyle(e).getPropertyValue(t)
            }
        }]),
        e
    }()
      , Ze = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    function et(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var tt, it = function() {
        function e() {
            et(this, e)
        }
        return Ze(e, [{
            key: "get",
            value: function() {
                return ""
            }
        }]),
        e
    }(), nt = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            et(this, e),
            this.__namespace = t
        }
        return Ze(e, [{
            key: "get",
            value: function(e) {
                return window.localStorage.getItem(this.__namespace + e) || ""
            }
        }, {
            key: "set",
            value: function(e, t) {
                window.localStorage.setItem(this.__namespace + e, t)
            }
        }, {
            key: "remove",
            value: function(e) {
                window.sessionStorage.removeItem(this.__namespace + e)
            }
        }]),
        e
    }(), ot = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            et(this, e),
            this.__namespace = t
        }
        return Ze(e, [{
            key: "get",
            value: function(e) {
                return window.sessionStorage.getItem(this.__namespace + e) || ""
            }
        }, {
            key: "set",
            value: function(e, t) {
                window.sessionStorage.setItem(this.__namespace + e, t)
            }
        }, {
            key: "remove",
            value: function(e) {
                window.sessionStorage.removeItem(this.__namespace + e)
            }
        }]),
        e
    }(), rt = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            et(this, e),
            this._duration = t
        }
        return Ze(e, [{
            key: "get",
            value: function(e) {
                var t = e + "=([^;]*)"
                  , i = Ke.getDocument()
                  , n = i ? i.cookie.match(t) : null;
                return n ? decodeURI(n[1]) : ""
            }
        }, {
            key: "set",
            value: function(e, t) {
                var i = Ke.getDocument()
                  , n = new Date;
                n.setTime(n.getTime() + 24 * this._duration * 60 * 60 * 1e3);
                var o = "expires=" + n.toUTCString();
                i.cookie = e + "=" + t + "; " + o
            }
        }, {
            key: "remove",
            value: function(e) {
                Ke.getDocument().cookie = e + "="
            }
        }]),
        e
    }(), st = {
        Storage: function() {
            function e() {
                et(this, e)
            }
            return Ze(e, null, [{
                key: "createLocalStorage",
                value: function(e) {
                    return Ke.isBrowser() ? Ke.localStorageExists() ? new nt(e) : Ke.cookiesAreEnabled() ? new rt : new it : new it
                }
            }, {
                key: "createSessionStorage",
                value: function(e) {
                    return Ke.isBrowser() ? Ke.sessionStorageExists() ? new ot(e) : Ke.cookiesAreEnabled() ? new rt : new it : new it
                }
            }, {
                key: "createCookieStorage",
                value: function(e) {
                    return Ke.isBrowser() && Ke.cookiesAreEnabled() ? new rt(e) : new it
                }
            }]),
            e
        }(),
        ServerStorage: it,
        BrowserLocalStorage: nt,
        BrowserSessionStorage: ot,
        BrowserCookieStorage: rt
    }, at = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    function lt(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i,
        e
    }
    /*! AdBlocker.js */
    var dt = st.Storage
      , ut = (lt(tt = {}, "bbAbMessageDuration", 5),
    lt(tt, "bbAbVisitMultiplier", 5),
    lt(tt, "bbAbMessage", Qe.getBlockerMessage()),
    tt)
      , ct = ["dataLayer", "dataLayerNV5B7R", "dataLayerPXX8JJ"];
    function pt() {
        var e = {
            local: dt.createLocalStorage(),
            session: dt.createSessionStorage(),
            cookie: dt.createCookieStorage(365)
        };
        if (ft(e)) {
            var t = e.session
              , i = e.local
              , n = e.cookie
              , o = ut;
            t && !t.AD_BLOCKER_NAME_KEY && n.remove("bbAbVisits"),
            Object.keys(o).forEach((function(e) {
                return i.remove(e)
            }
            )),
            t.set("bbAbIncremented", !0)
        }
    }
    function _t() {
        var e, t, i, n, o, r, s, a = {
            local: dt.createLocalStorage(),
            session: dt.createSessionStorage(),
            cookie: dt.createCookieStorage(365)
        };
        ft(a) && !bt(a) && (a.session.set("bbAdBlocker", !0),
        t = (e = a).session,
        i = e.local,
        n = ut,
        o = e.cookie,
        r = o.get("bbAbVisits"),
        s = r ? parseInt(r, 10) + 1 : 1,
        o.set("bbAbVisits", s, 365),
        Object.keys(n).forEach((function(e) {
            return i.set(e, n[e])
        }
        )),
        t.set("bbAbIncremented", !0),
        function(e) {
            var t = e.cookie.get("bbAbVisits")
              , i = function(e) {
                if (!ft(e))
                    return 5;
                return e.local.get("bbAbVisitMultiplier") || 5
            }(e)
              , n = "modal_displayed.visit_number_" + t;
            if (!function(e, t) {
                var i = parseInt(e, 10)
                  , n = parseInt(t, 10)
                  , o = "non_intrusive.visit_number_" + i;
                if ((i - 2) % n != 0)
                    return ht({
                        eventName: "ad_blocker",
                        category: "ad_blocker.modal",
                        action: "detected_true",
                        label: o
                    }),
                    !1;
                return !0
            }(t, i))
                return;
            ht({
                eventName: "ad_blocker",
                category: "ad_blocker.modal",
                action: "detected_true",
                label: n
            }),
            function(e) {
                var t = function(e) {
                    if (!ft(e))
                        return Qe.getBlockerMessage();
                    return e.session.get("bbAbMessage") || Qe.getBlockerMessage()
                }(e)
                  , i = function(e) {
                    if (!ft(e))
                        return 5;
                    return e.local.get("bbAbMessageDuration") || 5
                }(e)
                  , n = Ke.getDocument()
                  , o = Ke.getWindow();
                if (!(n && t && i))
                    return;
                var r = Qe.renderModal(t, i);
                n.body.appendChild(r),
                n.getElementById("adBlockerMessage").focus(),
                o.onLoad = function(e) {
                    var t = Ke.getDocument()
                      , i = e
                      , n = void 0
                      , o = t.getElementById("adBlockerContainer")
                      , r = t.getElementById("adBlockerContinue")
                      , s = t.getElementById("adBlockerTimer");
                    function a() {
                        o.setAttribute("style", "display:none"),
                        ht({
                            eventName: "ad_blocker",
                            category: "ad_blocker.modal",
                            action: "click",
                            label: "continue_button"
                        }),
                        r.removeEventListener("click", a),
                        r.removeEventListener("keydown", l),
                        r.removeEventListener("keydown", d)
                    }
                    function l(e) {
                        13 !== e.keyCode && 32 !== e.keyCode || a()
                    }
                    function d(e) {
                        13 !== e.keyCode && 32 !== e.keyCode || e.preventDefault()
                    }
                    n = setInterval((function() {
                        s.textContent = i,
                        --i < 0 && (clearInterval(n),
                        s.setAttribute("style", "display:none"),
                        r.style.color = "#2800D7",
                        r.style.cursor = "pointer",
                        r.addEventListener("click", a),
                        r.addEventListener("keydown", l))
                    }
                    ), 1e3),
                    r.addEventListener("keydown", d)
                }(i);
                var s = n.getElementById("adBlockerFooterLink");
                function a() {
                    ht({
                        eventName: "ad_blocker",
                        category: "ad_blocker.modal",
                        action: "click",
                        label: "false_positive_link"
                    }),
                    s.removeEventListener("click", a)
                }
                s.addEventListener("click", a)
            }(e)
        }(a))
    }
    function ht(e) {
        var t = e.eventName
          , i = e.category
          , n = e.action
          , o = e.label
          , r = e.testCategory
          , s = e.testAction
          , a = e.testLabel
          , l = Ke.getWindow();
        "ad_blocker" === t && (l.adBlockerObject = {
            category: i,
            action: n,
            label: o
        }),
        "test_abb" === t && (l.testAbbObject = {
            testCategory: r,
            testAction: s,
            testLabel: a
        }),
        function(e) {
            var t = Ke.getWindow();
            ct.forEach((function(i) {
                t[i] = t[i] || [],
                t[i].push({
                    event: e
                })
            }
            ))
        }(t)
    }
    function ft(e) {
        var t = e.local.get
          , i = e.session.get;
        return !("function" != typeof t || "function" != typeof i)
    }
    function bt(e) {
        return !!e.session.get("bbAbIncremented")
    }
    function mt(e) {
        return !!e.session.get("adBlockerTestHasRun")
    }
    var vt = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return at(e, null, [{
            key: "blockTheAdBlocker",
            value: function() {
                var e, t, i, n;
                Ke.getDocument().body && (e = Ke.getDocument(),
                (t = e.createElement("div")).setAttribute("class", Qe.fakeAdClasses()),
                t.setAttribute("style", Qe.fakeAdStyles()),
                e.body.appendChild(t),
                function() {
                    var e = Ke.getDocument()
                      , t = e.createElement("div");
                    t.setAttribute("class", Qe.testDivClasses()),
                    t.setAttribute("style", Qe.testDivStyles()),
                    e.body.appendChild(t)
                }(),
                i = Ke.getWindow(),
                n = {
                    local: dt.createLocalStorage(),
                    session: dt.createSessionStorage(),
                    cookie: dt.createCookieStorage(365)
                },
                void 0 !== i.getComputedStyle && setTimeout((function() {
                    var e = i.document.getElementsByClassName("a-real-div-for-testing")[0]
                      , t = i.getComputedStyle(e, null);
                    !t || "none" !== t.getPropertyValue("display") && "hidden" !== t.getPropertyValue("visibility") ? mt(n) || (ht({
                        eventName: "test_abb",
                        testCategory: "ad_blocker.test",
                        testAction: "test_passed",
                        testLabel: "2.5_seconds"
                    }),
                    n.session.set("adBlockerTestHasRun", !0)) : mt(n) || (ht({
                        eventName: "test_abb",
                        testCategory: "ad_blocker.test",
                        testAction: "test_failed",
                        testLabel: "2.5_seconds"
                    }),
                    n.session.set("adBlockerTestHasRun", !0))
                }
                ), 2500),
                function(e) {
                    var t = e.hasAdBlocker
                      , i = e.withoutAdBlocker
                      , n = Ke.getWindow()
                      , o = {
                        local: dt.createLocalStorage(),
                        session: dt.createSessionStorage(),
                        cookie: dt.createCookieStorage(365)
                    };
                    void 0 !== n.getComputedStyle && setTimeout((function() {
                        var e = n.document.getElementsByClassName("pub_300x250")[0]
                          , r = n.getComputedStyle(e, null);
                        !r || "none" !== r.getPropertyValue("display") && "hidden" !== r.getPropertyValue("visibility") ? (bt(o) || ht({
                            eventName: "ad_blocker",
                            category: "ad_blocker.modal",
                            action: "detected_false",
                            label: "no_modal_displayed"
                        }),
                        i()) : t()
                    }
                    ), 2500)
                }({
                    hasAdBlocker: _t,
                    withoutAdBlocker: pt
                }))
            }
        }]),
        e
    }();
    var gt = function(e) {
        if (!e)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), i = 1, n = arguments.length; i < n; i++) {
            var o = arguments[i];
            if (o)
                for (var r = Object.keys(o), s = 0, a = r.length; s < a; s++) {
                    var l = r[s];
                    t[l] = o[l]
                }
        }
        return t
    }
      , yt = Object.assign || gt
      , wt = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    /*! assign.js */
    var kt = {
        position: "absolute",
        padding: "4px",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        background: "rgba(0, 0, 0, 0.75)",
        border: "1px solid black",
        boxSizing: "border-box",
        color: "white",
        fontFamily: "sans-serif",
        fontSize: "13px",
        overflow: "scroll",
        textAlign: "left",
        webkitFontSmoothing: "subpixel-antialiased"
    }
      , xt = {
        height: "150px",
        "background-color": "red"
    }
      , Et = {
        height: "auto",
        "background-color": "transparent"
    }
      , At = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return wt(e, null, [{
            key: "overlay",
            value: function(e) {
                var t = e.content
                  , i = e.adElement
                  , n = e.empty
                  , o = Ke.getDocument().createElement("div")
                  , r = n ? xt : Et;
                o.setAttribute("class", "ad-overlay"),
                "static" === Ke.getElementStyleAttribute(i, "position") && (i.style.position = "relative"),
                o.innerHTML = t,
                i.appendChild(o),
                yt(o.style, kt),
                yt(i.style, r)
            }
        }, {
            key: "clearOverlays",
            value: function() {
                for (var e = Ke.getDocument().getElementsByClassName("ad-overlay"), t = e.length - 1; t >= 0; --t) {
                    var i = e.item(t);
                    i.parentNode.removeChild(i)
                }
            }
        }]),
        e
    }()
      , St = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    var jt = function(e) {
        return Math.floor(e) + "ms"
    }
      , Tt = "list-style-type: disc; padding-left: 20px; margin: 4px 0 0;";
    var zt = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return St(e, null, [{
            key: "show",
            value: function(t, i) {
                var n = i.getElement()
                  , o = !n;
                if (i.isDisplayable() && !o) {
                    var r = e.metrics(t, i)
                      , s = function(e) {
                        var t = e.getTargeting()
                          , i = Object.keys(t).reduce((function(e, i) {
                            return e + "<li>" + i + ": " + t[i] + "</li>"
                        }
                        ), "");
                        return '<ul style="' + Tt + '">' + i + "</ul>"
                    }(i)
                      , a = function(e) {
                        var t = e.getSlot();
                        if (!t)
                            return "";
                        var i = t.getTargetingKeys().reduce((function(e, i) {
                            return e + "<li>" + i + ": " + t.getTargeting(i) + "</li>"
                        }
                        ), "");
                        return i ? '<ul style="' + Tt + '">' + i + "</ul>" : ""
                    }(i)
                      , l = function(e) {
                        return e ? ["AdCode: " + e.adCode, "Empty?: " + e.empty, "Creative ID: " + e.creativeId, "Line Item ID: " + e.lineItemId, "Time To Request: " + jt(e.timeToRequest), "Time To Respond: " + jt(e.timeToRespond), "Time To Render: " + jt(e.timeToRender), "Sizes: [" + e.sizes + "]"].join("<br/>") : ["GPT render event not received for this ad.", "Either the request has not been sent out or", "the response has not yet been received."].join("<br/>")
                    }(r) + a + s;
                    At.overlay({
                        content: l,
                        adElement: n,
                        empty: !r || r.empty
                    })
                }
            }
        }, {
            key: "metrics",
            value: function(e, t) {
                var i = t.getSlotRenderedEvent();
                if (!i)
                    return null;
                var n = t.getRequestTime() - e
                  , o = t.getRenderTime() - e
                  , r = o - n;
                return {
                    adCode: t.getUnitName(),
                    sizes: t.getSizes(),
                    empty: i.isEmpty(),
                    creativeId: i.getCreativeId(),
                    lineItemId: i.getLineItemId(),
                    timeToRequest: n,
                    timeToRespond: r,
                    timeToRender: o
                }
            }
        }]),
        e
    }()
      , It = function(e) {
        for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
            i[n - 1] = arguments[n];
        return e.bind.apply(e, [this].concat(i))
    }
      , Ct = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    var Lt = "undefined" != typeof Promise ? Promise : De.Promise
      , Ot = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.__registeredAds = [],
            this.__startTime = Ke.currentTime(),
            this.__debugOnRenderMode = !1,
            this.__adMetrics = {};
            var t = Ke.getWindow();
            t && (t.__bloomberg__ = t.__bloomberg__ || {},
            t.__bloomberg__.adMetrics = this.__adMetrics)
        }
        return Ct(e, [{
            key: "push",
            value: function(e, t) {
                var i = this;
                this.__debugOnRenderMode && (e.onRender(It(zt.show, this.__startTime, e)),
                e.onEmpty(It(zt.show, this.__startTime, e))),
                this.__adMetrics[t] = new Lt((function(t) {
                    var n = function() {
                        return t(zt.metrics(i.__startTime, e))
                    };
                    e.onRender(n),
                    e.onEmpty(n)
                }
                )),
                this.__registeredAds.push(e)
            }
        }, {
            key: "showDebugInformation",
            value: function() {
                At.clearOverlays(),
                this.__registeredAds.forEach(It(zt.show, this.__startTime))
            }
        }, {
            key: "showDebugInformationOnRender",
            value: function() {
                this.__debugOnRenderMode = !0
            }
        }, {
            key: "destroy",
            value: function() {
                this.__registeredAds.length = 0
            }
        }]),
        e
    }()
      , Pt = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    var Rt = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this._parent = null,
            this._children = []
        }
        return Pt(e, [{
            key: "children",
            value: function() {
                return this._children
            }
        }, {
            key: "members",
            value: function() {
                return Array.prototype.concat(this._parent, this._children)
            }
        }, {
            key: "parent",
            value: function() {
                return this._parent
            }
        }, {
            key: "addParent",
            value: function(e) {
                this._parent = e,
                e.setCompanionGroup(this)
            }
        }, {
            key: "addChild",
            value: function(e) {
                this._children.lastIndexOf(e) < 0 && (this._children.push(e),
                e.setCompanionGroup(this))
            }
        }, {
            key: "clearChildren",
            value: function() {
                this._children = []
            }
        }, {
            key: "clearParent",
            value: function() {
                this._parent = null
            }
        }]),
        e
    }()
      , Dt = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    /*! CompanionGroupCoordinator.js */
    var Mt, Bt = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this._all = {}
        }
        return Dt(e, [{
            key: "findOrCreate",
            value: function(e) {
                var t = this._all[e];
                return t || (t = new Rt,
                this._all[e] = t),
                t
            }
        }, {
            key: "find",
            value: function(e) {
                return this._all[e]
            }
        }, {
            key: "clearAll",
            value: function() {
                this.clearAllChildren(),
                this.clearAllParents(),
                this._all = {}
            }
        }, {
            key: "clearAllChildren",
            value: function() {
                var e = this;
                Object.keys(this._all).forEach((function(t) {
                    e._all[t].clearChildren()
                }
                ))
            }
        }, {
            key: "clearAllParents",
            value: function() {
                var e = this;
                Object.keys(this._all).forEach((function(t) {
                    e._all[t].clearParent()
                }
                ))
            }
        }, {
            key: "destroy",
            value: function() {
                this.clearAll()
            }
        }]),
        e
    }(), Ut = u((function(e) {
        e.exports = function(e) {
            var t = {};
            function i(n) {
                if (t[n])
                    return t[n].exports;
                var o = t[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return e[n].call(o.exports, o, o.exports, i),
                o.l = !0,
                o.exports
            }
            return i.m = e,
            i.c = t,
            i.d = function(e, t, n) {
                i.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                })
            }
            ,
            i.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
            ,
            i.t = function(e, t) {
                if (1 & t && (e = i(e)),
                8 & t)
                    return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                var n = Object.create(null);
                if (i.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                    for (var o in e)
                        i.d(n, o, function(t) {
                            return e[t]
                        }
                        .bind(null, o));
                return n
            }
            ,
            i.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
                ;
                return i.d(t, "a", t),
                t
            }
            ,
            i.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            i.p = "",
            i(i.s = 0)
        }([function(e, t, i) {
            e.exports = i(1)
        }
        , function(e, t, i) {
            function n(e) {
                return Boolean(o(e))
            }
            function o(e) {
                var t = document.cookie.match("(^|;) ?".concat(e, "=([^;$]*)"));
                return t ? t[2] : ""
            }
            function r(e, t) {
                return -1 !== e.indexOf(t)
            }
            function s(e) {
                window.__tcfapi("removeEventListener", 2, (function(t) {
                    t || console.warn("[ms.consent] Failed to remove __tcfapi event listener", e)
                }
                ), e)
            }
            function a() {
                return r(o("bbgconsentstring"), "req1")
            }
            function l() {
                return r(o("bbgconsentstring"), "fun1")
            }
            function d() {
                return r(o("bbgconsentstring"), "pad1")
            }
            i.r(t);
            var u = a
              , c = l
              , p = d
              , _ = {
                inEU: "1---",
                ccpaOptedIn: "1YNY",
                ccpaOptedOut: "1YYY"
            };
            function h() {
                if (!n("notice_behavior"))
                    return {
                        req: !1,
                        fun: !1,
                        pad: !1,
                        usPrivacyString: _.inEU
                    };
                var e = o("cmapi_cookie_privacy");
                return function(e) {
                    return !r(e, "permit") && g()
                }(e) ? {
                    req: !1,
                    fun: !1,
                    pad: !1,
                    usPrivacyString: _.inEU
                } : v(e)
            }
            function f() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.timeout;
                return new Promise((function(e, i) {
                    if (t) {
                        var o = i.bind(null, "Timeout reached while waiting for consent info");
                        setTimeout(o, t)
                    }
                    if (n("notice_behavior"))
                        return b(e);
                    window.addEventListener("trustarc-loaded", (function() {
                        b(e)
                    }
                    ), {
                        once: !0
                    })
                }
                ))
            }
            function b(e) {
                if (!g() && !n("cmapi_cookie_privacy"))
                    return e({
                        req: !0,
                        fun: !0,
                        pad: !0,
                        usPrivacyString: _.ccpaOptedIn
                    });
                n("cmapi_cookie_privacy") ? e(v(o("cmapi_cookie_privacy"))) : e({
                    req: !1,
                    fun: !1,
                    pad: !1,
                    usPrivacyString: _.inEU
                })
            }
            function m() {
                return g() && !n("euconsent")
            }
            function v(e) {
                var t, i = !(r(t = e, "permit") && !r(t, "1")), n = !function(e) {
                    return r(e, "permit") && !r(e, "2")
                }(e), o = !function(e) {
                    return r(e, "permit") && !r(e, "3")
                }(e);
                return {
                    req: i,
                    fun: n,
                    pad: o,
                    usPrivacyString: function(e, t, i) {
                        return g() ? _.inEU : e && t && i ? _.ccpaOptedIn : _.ccpaOptedOut
                    }(i, n, o)
                }
            }
            function g() {
                if (!n("notice_behavior"))
                    return !0;
                var e = o("notice_behavior");
                return (r(e, "implied") || r(e, "expressed")) && r(e, "eu")
            }
            function y() {
                return "undefined" != typeof window && window.__bloomberg__ && window.__bloomberg__.cmp && window.__bloomberg__.cmp.enabled
            }
            function w(e, t) {
                return function() {
                    return y() ? t.apply(void 0, arguments) : e.apply(void 0, arguments)
                }
            }
            t.default = {
                waitForUserConsent: w((function() {
                    return console.log("[ms.consent] Called `waitForUserConsent` V1"),
                    new Promise((function(e) {
                        n("notice_behavior") && !m() ? e() : window.addEventListener("trustarc-loaded", (function t() {
                            window.removeEventListener("trustarc-loaded", t),
                            m() || e()
                        }
                        ))
                    }
                    ))
                }
                ), (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return console.log("[ms.consent] Called `waitForUserConsent` V2", e),
                    new Promise((function(t, i) {
                        if (!window.__tcfapi || !window.__uspapi)
                            return console.error("[ms.consent] Please make sure __tcfapi and __uspapi are setup"),
                            i(new Error("__tcfapi and __uspapi not loaded"));
                        var n = !1
                          , o = setTimeout((function() {
                            console.error("[ms.consent] Timeout in `waitForUserConsent` with options", e),
                            i(new Error("No response from __tcfapi event listener"))
                        }
                        ), e.inactiveTimeout || 1e4);
                        window.__tcfapi("addEventListener", 2, (function(e, r) {
                            if (!r)
                                return console.error("[ms.consent] Failed to `addEventListener` with __tcfapi"),
                                i(new Error("Unable to assign event listener"));
                            if (!n)
                                if (void 0 !== e.gdprApplies) {
                                    clearTimeout(o);
                                    var a = e.gdprApplies
                                      , l = e.eventStatus
                                      , d = e.listenerId;
                                    a ? "tcloaded" !== l && "useractioncomplete" !== l || (t({
                                        tcData: e
                                    }),
                                    s(d),
                                    n = !0) : (window.__uspapi("getUSPData", 1, (function(e, n) {
                                        if (!n)
                                            return console.error("[ms.consent] Failed to `getUSPData` with __uspapi"),
                                            i(new Error("Unable to get US privacy data from __uspapi"));
                                        t({
                                            uspData: e
                                        })
                                    }
                                    )),
                                    s(d),
                                    n = !0)
                                } else
                                    console.warn("[ms.consent] Received `gdprApplies` as undefined")
                        }
                        ))
                    }
                    ))
                }
                )),
                getConsentInfo: h,
                getConsentInfoAsync: f,
                iabConsentString: function() {
                    return o("euconsent")
                },
                iabConsentStringAsync: w((function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = e.timeout;
                    return new Promise((function(e, i) {
                        if (t) {
                            var r = i.bind(null, "Timeout reached while waiting for IAB Consent String");
                            setTimeout(r, t)
                        }
                        n("euconsent") && e(o("euconsent")),
                        window.addEventListener("trustarc-loaded", (function() {
                            window.__cmp("getConsentData", null, (function(t, i) {
                                i && e(t.consentData)
                            }
                            ))
                        }
                        ), {
                            once: !0
                        })
                    }
                    ))
                }
                ), (function() {
                    return window.__tcfapi ? new Promise((function(e, t) {
                        window.__tcfapi("getTCData", 2, (function(i, n) {
                            n ? e(i.tcString) : t(new Error("Failed to `getTCData` from __tcfapi"))
                        }
                        ))
                    }
                    )) : Promise.reject(new Error("Unable to find __tcfapi in global scope"))
                }
                )),
                gdprApplies: function() {
                    return g()
                },
                gdprAppliesAsync: w((function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = e.timeout;
                    return new Promise((function(e, i) {
                        if (t) {
                            var o = i.bind(null, "Timeout reached while waiting for GDPR status");
                            setTimeout(o, t)
                        }
                        if (n("notice_behavior"))
                            return e(g());
                        window.addEventListener("trustarc-loaded", (function() {
                            return e(g())
                        }
                        ), {
                            once: !0
                        })
                    }
                    ))
                }
                ), (function() {
                    return window.__tcfapi ? new Promise((function(e, t) {
                        window.__tcfapi("getTCData", 2, (function(i, n) {
                            n ? e(i.gdprApplies) : t(new Error("Failed to `getTCData` from __tcfapi"))
                        }
                        ))
                    }
                    )) : Promise.reject(new Error("Unable to find __tcfapi in global scope"))
                }
                )),
                gdprBannerIsOpen: m,
                reqAllowed: w((function() {
                    return h().req
                }
                ), u),
                reqAllowedAsync: w((function(e) {
                    return f(e).then((function(e) {
                        return e.req
                    }
                    ))
                }
                ), (function() {
                    return Promise.resolve(a())
                }
                )),
                funAllowed: w((function() {
                    return h().fun
                }
                ), c),
                funAllowedAsync: w((function(e) {
                    return f(e).then((function(e) {
                        return e.fun
                    }
                    ))
                }
                ), (function() {
                    return Promise.resolve(l())
                }
                )),
                padAllowed: w((function() {
                    return h().pad
                }
                ), p),
                padAllowedAsync: w((function(e) {
                    return f(e).then((function(e) {
                        return e.pad
                    }
                    ))
                }
                ), (function() {
                    return Promise.resolve(d())
                }
                )),
                getUSPrivacyString: function() {
                    return h().usPrivacyString
                },
                getUSPrivacyStringAsync: w((function(e) {
                    return f(e).then((function(e) {
                        return e.usPrivacyString
                    }
                    ))
                }
                ), (function() {
                    return window.__uspapi ? new Promise((function(e, t) {
                        window.__uspapi("getUSPData", 1, (function(i, n) {
                            n ? e(i.uspString) : t(new Error("Failed to `getUSPData` from __uspapi"))
                        }
                        ))
                    }
                    )) : Promise.reject(new Error("Unable to find __uspapi in global scope"))
                }
                )),
                US_PRIVACY_STRINGS: _,
                version: "5.1.0"
            }
        }
        ])
    }
    ));
    (Mt = Ut) && Mt.__esModule && Object.prototype.hasOwnProperty.call(Mt, "default") && Mt.default;
    for (var qt = Ut.default, Nt = {
        waitForUserConsent: qt.waitForUserConsent,
        isNewCMPEnabled: function() {
            return "undefined" != typeof window && window.__bloomberg__ && window.__bloomberg__.cmp && window.__bloomberg__.cmp.enabled
        },
        getIABConsent: function() {
            return this.isNewCMPEnabled() ? qt.iabConsentStringAsync() : Promise.resolve(qt.iabConsentString())
        },
        getGDPRApplies: function() {
            return this.isNewCMPEnabled() ? qt.gdprAppliesAsync() : Promise.resolve(qt.gdprApplies())
        },
        getUSPrivacyString: function() {
            return this.isNewCMPEnabled() ? qt.getUSPrivacyStringAsync() : Promise.resolve(qt.getUSPrivacyString())
        },
        getPADAllowed: function() {
            return this.isNewCMPEnabled() ? qt.padAllowedAsync() : Promise.resolve(qt.padAllowed())
        }
    }, Vt = u((function(e) {
        var t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (t) {
            var i = new Uint8Array(16);
            e.exports = function() {
                return t(i),
                i
            }
        } else {
            var n = new Array(16);
            e.exports = function() {
                for (var e, t = 0; t < 16; t++)
                    0 == (3 & t) && (e = 4294967296 * Math.random()),
                    n[t] = e >>> ((3 & t) << 3) & 255;
                return n
            }
        }
    }
    )), Ft = [], Ht = 0; Ht < 256; ++Ht)
        Ft[Ht] = (Ht + 256).toString(16).substr(1);
    var Gt = function(e, t) {
        var i = t || 0
          , n = Ft;
        return [n[e[i++]], n[e[i++]], n[e[i++]], n[e[i++]], "-", n[e[i++]], n[e[i++]], "-", n[e[i++]], n[e[i++]], "-", n[e[i++]], n[e[i++]], "-", n[e[i++]], n[e[i++]], n[e[i++]], n[e[i++]], n[e[i++]], n[e[i++]]].join("")
    };
    var Wt = function(e, t, i) {
        var n = t && i || 0;
        "string" == typeof e && (t = "binary" === e ? new Array(16) : null,
        e = null);
        var o = (e = e || {}).random || (e.rng || Vt)();
        if (o[6] = 15 & o[6] | 64,
        o[8] = 63 & o[8] | 128,
        t)
            for (var r = 0; r < 16; ++r)
                t[n + r] = o[r];
        return t || Gt(o)
    }
      , Jt = u((function(e, t) {
        e.exports = function() {
            function e(e, t) {
                var s = e[0]
                  , a = e[1]
                  , l = e[2]
                  , d = e[3];
                s = i(s, a, l, d, t[0], 7, -680876936),
                d = i(d, s, a, l, t[1], 12, -389564586),
                l = i(l, d, s, a, t[2], 17, 606105819),
                a = i(a, l, d, s, t[3], 22, -1044525330),
                s = i(s, a, l, d, t[4], 7, -176418897),
                d = i(d, s, a, l, t[5], 12, 1200080426),
                l = i(l, d, s, a, t[6], 17, -1473231341),
                a = i(a, l, d, s, t[7], 22, -45705983),
                s = i(s, a, l, d, t[8], 7, 1770035416),
                d = i(d, s, a, l, t[9], 12, -1958414417),
                l = i(l, d, s, a, t[10], 17, -42063),
                a = i(a, l, d, s, t[11], 22, -1990404162),
                s = i(s, a, l, d, t[12], 7, 1804603682),
                d = i(d, s, a, l, t[13], 12, -40341101),
                l = i(l, d, s, a, t[14], 17, -1502002290),
                s = n(s, a = i(a, l, d, s, t[15], 22, 1236535329), l, d, t[1], 5, -165796510),
                d = n(d, s, a, l, t[6], 9, -1069501632),
                l = n(l, d, s, a, t[11], 14, 643717713),
                a = n(a, l, d, s, t[0], 20, -373897302),
                s = n(s, a, l, d, t[5], 5, -701558691),
                d = n(d, s, a, l, t[10], 9, 38016083),
                l = n(l, d, s, a, t[15], 14, -660478335),
                a = n(a, l, d, s, t[4], 20, -405537848),
                s = n(s, a, l, d, t[9], 5, 568446438),
                d = n(d, s, a, l, t[14], 9, -1019803690),
                l = n(l, d, s, a, t[3], 14, -187363961),
                a = n(a, l, d, s, t[8], 20, 1163531501),
                s = n(s, a, l, d, t[13], 5, -1444681467),
                d = n(d, s, a, l, t[2], 9, -51403784),
                l = n(l, d, s, a, t[7], 14, 1735328473),
                s = o(s, a = n(a, l, d, s, t[12], 20, -1926607734), l, d, t[5], 4, -378558),
                d = o(d, s, a, l, t[8], 11, -2022574463),
                l = o(l, d, s, a, t[11], 16, 1839030562),
                a = o(a, l, d, s, t[14], 23, -35309556),
                s = o(s, a, l, d, t[1], 4, -1530992060),
                d = o(d, s, a, l, t[4], 11, 1272893353),
                l = o(l, d, s, a, t[7], 16, -155497632),
                a = o(a, l, d, s, t[10], 23, -1094730640),
                s = o(s, a, l, d, t[13], 4, 681279174),
                d = o(d, s, a, l, t[0], 11, -358537222),
                l = o(l, d, s, a, t[3], 16, -722521979),
                a = o(a, l, d, s, t[6], 23, 76029189),
                s = o(s, a, l, d, t[9], 4, -640364487),
                d = o(d, s, a, l, t[12], 11, -421815835),
                l = o(l, d, s, a, t[15], 16, 530742520),
                s = r(s, a = o(a, l, d, s, t[2], 23, -995338651), l, d, t[0], 6, -198630844),
                d = r(d, s, a, l, t[7], 10, 1126891415),
                l = r(l, d, s, a, t[14], 15, -1416354905),
                a = r(a, l, d, s, t[5], 21, -57434055),
                s = r(s, a, l, d, t[12], 6, 1700485571),
                d = r(d, s, a, l, t[3], 10, -1894986606),
                l = r(l, d, s, a, t[10], 15, -1051523),
                a = r(a, l, d, s, t[1], 21, -2054922799),
                s = r(s, a, l, d, t[8], 6, 1873313359),
                d = r(d, s, a, l, t[15], 10, -30611744),
                l = r(l, d, s, a, t[6], 15, -1560198380),
                a = r(a, l, d, s, t[13], 21, 1309151649),
                s = r(s, a, l, d, t[4], 6, -145523070),
                d = r(d, s, a, l, t[11], 10, -1120210379),
                l = r(l, d, s, a, t[2], 15, 718787259),
                a = r(a, l, d, s, t[9], 21, -343485551),
                e[0] = u(s, e[0]),
                e[1] = u(a, e[1]),
                e[2] = u(l, e[2]),
                e[3] = u(d, e[3])
            }
            function t(e, t, i, n, o, r) {
                return t = u(u(t, e), u(n, r)),
                u(t << o | t >>> 32 - o, i)
            }
            function i(e, i, n, o, r, s, a) {
                return t(i & n | ~i & o, e, i, r, s, a)
            }
            function n(e, i, n, o, r, s, a) {
                return t(i & o | n & ~o, e, i, r, s, a)
            }
            function o(e, i, n, o, r, s, a) {
                return t(i ^ n ^ o, e, i, r, s, a)
            }
            function r(e, i, n, o, r, s, a) {
                return t(n ^ (i | ~o), e, i, r, s, a)
            }
            function s(t) {
                txt = "";
                var i, n = t.length, o = [1732584193, -271733879, -1732584194, 271733878];
                for (i = 64; i <= t.length; i += 64)
                    e(o, a(t.substring(i - 64, i)));
                t = t.substring(i - 64);
                var r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (i = 0; i < t.length; i++)
                    r[i >> 2] |= t.charCodeAt(i) << (i % 4 << 3);
                if (r[i >> 2] |= 128 << (i % 4 << 3),
                i > 55)
                    for (e(o, r),
                    i = 0; 16 > i; i++)
                        r[i] = 0;
                return r[14] = 8 * n,
                e(o, r),
                o
            }
            function a(e) {
                var t, i = [];
                for (t = 0; 64 > t; t += 4)
                    i[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
                return i
            }
            function l(e) {
                for (var t = "", i = 0; 4 > i; i++)
                    t += c[e >> 8 * i + 4 & 15] + c[e >> 8 * i & 15];
                return t
            }
            function d(e) {
                return function(e) {
                    for (var t = 0; t < e.length; t++)
                        e[t] = l(e[t]);
                    return e.join("")
                }(s(e))
            }
            function u(e, t) {
                return e + t & 4294967295
            }
            function u(e, t) {
                var i = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i
            }
            var c = "0123456789abcdef".split("");
            return d("hello"),
            d
        }()
    }
    ))
      , $t = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    var Qt = function() {
        function e(t) {
            var i = t.id
              , n = t.adCode
              , o = t.requestTime
              , r = t.event
              , s = void 0 === r ? {} : r;
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var a = s.lineItemId
              , l = s.creativeId
              , d = s.isEmpty
              , u = s.size;
            this.__lineItemId = a,
            this.__creativeId = l,
            this.__isEmpty = d,
            this.__size = u,
            this.__adId = i,
            this.__adCode = n,
            this.__adRequestStartTime = o
        }
        return $t(e, [{
            key: "getAdId",
            value: function() {
                return this.__adId
            }
        }, {
            key: "getAdCode",
            value: function() {
                return this.__adCode
            }
        }, {
            key: "getLineItemId",
            value: function() {
                return this.__lineItemId
            }
        }, {
            key: "getCreativeId",
            value: function() {
                return this.__creativeId
            }
        }, {
            key: "isEmpty",
            value: function() {
                return this.__isEmpty
            }
        }, {
            key: "getSize",
            value: function() {
                return this.__size
            }
        }, {
            key: "getRequestTime",
            value: function() {
                return this.__adRequestStartTime
            }
        }]),
        e
    }()
      , Xt = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }()
      , Yt = function(e, t) {
        if (Array.isArray(e))
            return e;
        if (Symbol.iterator in Object(e))
            return function(e, t) {
                var i = []
                  , n = !0
                  , o = !1
                  , r = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value),
                    !t || i.length !== t); n = !0)
                        ;
                } catch (e) {
                    o = !0,
                    r = e
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o)
                            throw r
                    }
                }
                return i
            }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    };
    function Kt(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    /*! Ad.js */
    var Zt = function() {
        function e(t, i, n) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
              , r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            Kt(this, e),
            o.tickers && (o.tickers = JSON.stringify(o.tickers)),
            this.__unitName = i,
            this.__sizes = n,
            this.__targeting = o,
            this.__slot = null,
            this.__renderCallbacks = [],
            this.__emptyCallbacks = [],
            this.__viewportOffset = 0,
            this.__renderTime = null,
            this.__slotRenderedEvent = null,
            this.__isInterstitial = !1,
            this.__triggeredEventArgument = null,
            this.__isMobile = r,
            this.__contextifyCallbacks(),
            this.__setId(),
            this.__renderContainer(t),
            this.onRender(It(this.setClassName, "bb-ads__rendered")),
            this.onEmpty(It(this.setClassName, "bb-ads__empty"))
        }
        return Xt(e, [{
            key: "__contextifyCallbacks",
            value: function() {
                this.setClassName = this.setClassName.bind(this)
            }
        }, {
            key: "__setId",
            value: function() {
                var e = [this.__sizes, this.__targeting, this.__unitName];
                this.__id = Jt(JSON.stringify(e))
            }
        }, {
            key: "__renderContainer",
            value: function(e) {
                var t = Ke.getDocument();
                if (t) {
                    var i = t.getElementById(e);
                    if (i) {
                        i.setAttribute("tabindex", "-1"),
                        i.setAttribute("role", "presentation");
                        var n = t.createElement("div");
                        n.setAttribute("class", "bb-ads__ad"),
                        n.setAttribute("id", this.__id),
                        i.insertBefore(n, i.firstChild),
                        i = null,
                        n = null
                    } else
                        console.log("Failed to render: Ad container did not exist for id " + e)
                }
            }
        }, {
            key: "getDomId",
            value: function() {
                return this.__slot ? this.__slot.getSlotId().getDomId() : null
            }
        }, {
            key: "getId",
            value: function() {
                return this.__id
            }
        }, {
            key: "getSizes",
            value: function() {
                return this.__sizes
            }
        }, {
            key: "isDisplayable",
            value: function() {
                return !!this.__sizes.length
            }
        }, {
            key: "getSlot",
            value: function() {
                return this.__slot
            }
        }, {
            key: "getTargeting",
            value: function() {
                return yt({}, this.__targeting, {
                    pmid: this.getId()
                })
            }
        }, {
            key: "addTargeting",
            value: function(e) {
                yt(this.__targeting, e)
            }
        }, {
            key: "getElement",
            value: function() {
                return Ke.getDocument().getElementById(this.__id)
            }
        }, {
            key: "getElementTopPosition",
            value: function() {
                var e = Ke.getDocument()
                  , t = this.getElement();
                return e && t ? t.getBoundingClientRect().top + e.documentElement.scrollTop : 1 / 0
            }
        }, {
            key: "getIframe",
            value: function() {
                var e = this.getElement()
                  , t = e ? e.getElementsByTagName("iframe") : [];
                return Array.prototype.filter.call(t, (function(e) {
                    return !!e.offsetParent
                }
                ))[0] || null
            }
        }, {
            key: "getUnitName",
            value: function() {
                return this.__unitName
            }
        }, {
            key: "hasSlot",
            value: function() {
                return !!this.__slot
            }
        }, {
            key: "setHeight",
            value: function(e) {
                var t = this.getIframe();
                return t && (t.setAttribute("height", e),
                t = null),
                this
            }
        }, {
            key: "setDimensions",
            value: function(e, t) {
                var i = this.getIframe();
                return i && (i.setAttribute("width", e),
                i.setAttribute("height", t),
                i = null),
                this
            }
        }, {
            key: "setClassName",
            value: function(e) {
                var t = [e]
                  , i = this.getElement();
                if (i) {
                    var n = i.getAttribute("class");
                    t.push(n),
                    this.__sizes.some((function(e) {
                        return !!e[0] && e[0] === e[1]
                    }
                    )) && (t.push("bb-ads__no_size"),
                    this.__sizes.forEach((function(e) {
                        e[0] && e[0] === e[1] && t.push("bb-ads__size_" + e[0] + "x" + e[1])
                    }
                    ))),
                    i.setAttribute("class", t.join(" ")),
                    i = null
                }
                return this
            }
        }, {
            key: "setSlot",
            value: function(e) {
                return this.__slot = e,
                this
            }
        }, {
            key: "setViewportOffset",
            value: function(e) {
                return this.__viewportOffset = e,
                this
            }
        }, {
            key: "getViewportOffset",
            value: function() {
                return this.__viewportOffset
            }
        }, {
            key: "setRequestTime",
            value: function(e) {
                this.__requestTime = e
            }
        }, {
            key: "getRequestTime",
            value: function() {
                return this.__requestTime
            }
        }, {
            key: "getRenderTime",
            value: function() {
                return this.__renderTime
            }
        }, {
            key: "getSlotRenderedEvent",
            value: function() {
                return this.__slotRenderedEvent
            }
        }, {
            key: "onRender",
            value: function(e) {
                return this.__triggeredEventArgument ? (e(this.__triggeredEventArgument),
                this) : (this.__renderCallbacks.push(e),
                this)
            }
        }, {
            key: "onEmpty",
            value: function(e) {
                return this.__triggeredEventArgument ? (e(this.__triggeredEventArgument),
                this) : (this.__emptyCallbacks.push(e),
                this)
            }
        }, {
            key: "handleSlotRenderEvent",
            value: function(e) {
                var t, i, n, o, r = function(e) {
                    var t = e.isEmpty;
                    return t
                }(e) || (t = e.size,
                i = Yt(void 0 === t ? [] : t, 2),
                n = i[0],
                o = i[1],
                1 === n && 1 === o) ? this.__emptyCallbacks : this.__renderCallbacks;
                this.__renderTime = Ke.currentTime();
                var s = this.__slotRenderedEvent = new Qt({
                    id: this.getId(),
                    adCode: this.getUnitName(),
                    requestTime: this.getRequestTime(),
                    event: e
                });
                r.forEach((function(e) {
                    return e(s)
                }
                )),
                this.__triggeredEventArgument = s,
                this.__emptyCallbacks.length = 0,
                this.__renderCallbacks.length = 0
            }
        }, {
            key: "setInterstitialFlag",
            value: function(e) {
                return this.__isInterstitial = e,
                this
            }
        }, {
            key: "isInterstitial",
            value: function() {
                return this.__isInterstitial
            }
        }, {
            key: "setCompanionGroup",
            value: function(e) {
                this._companionGroup = e
            }
        }, {
            key: "companionGroup",
            value: function() {
                return this._companionGroup || null
            }
        }, {
            key: "isCompanionChild",
            value: function() {
                return this.companionGroup() && this.companionGroup().children().lastIndexOf(this) >= 0
            }
        }, {
            key: "isCompanionParent",
            value: function() {
                return this.companionGroup() && this.companionGroup().parent() === this
            }
        }, {
            key: "isMobile",
            value: function() {
                return this.__isMobile
            }
        }]),
        e
    }();
    var ei = {
        parse: /*! url.js */
        function(e) {
            var t = Ke.getWindow();
            if ("function" == typeof t.URL && t.URL.length > 0)
                return new t.URL(e);
            var i = Ke.getDocument().createElement("a");
            i.href = e;
            var n = i;
            i = null;
            var o = {
                protocol: n.protocol,
                hostname: n.hostname,
                port: n.port,
                pathname: n.pathname,
                search: n.search,
                hash: n.hash,
                host: n.host
            };
            return t.URL && t.URL.createObjectURL && (o.createObjectURL = t.URL.createObjectURL),
            t.URL && t.URL.revokeObjectURL && (o.revokeObjectURL = t.URL.revokeObjectURL),
            Object.freeze(o)
        }
    }
      , ti = Array.prototype.slice
      , ii = /^http(.*)$/
      , ni = "undefined" != typeof Promise ? Promise : De.Promise
      , oi = {
        _init: function() {
            var e;
            this.requestQueue = {},
            this.documentScripts = (e = Ke.getDocument(),
            ti.call(e.scripts).reduce((function(e, t) {
                return t.src && (ri(t.src)in e && console.warn("Duplicate script found: " + t.src),
                e[t.src] = !0),
                e
            }
            ), {})),
            this.delay = 0
        },
        _isLoaded: function(e) {
            var t = ri(e);
            return Boolean(this.documentScripts[t])
        },
        _isRequested: function(e) {
            var t = ri(e);
            return Boolean(this.requestQueue[t])
        },
        _isParentLoaded: function(e) {
            var t = Ke.getWindow()
              , i = t ? t.parent : null;
            return !(!t || !i) && (t.location !== i.location && i.document.querySelectorAll('script[src="' + e + '"]').length > 0)
        },
        timeout: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return e && "number" == typeof e && (this.delay = e),
            this
        },
        load: function(e, t) {
            this.documentScripts || this.requestQueue || this._init();
            var i = ri(e);
            if (this._isParentLoaded(e))
                return ni.resolve();
            if (this._isRequested(e))
                return this.requestQueue[i];
            if (this._isLoaded(e))
                return ni.resolve();
            var n = Ke.getDocument()
              , o = n.querySelector("body") || n.head;
            return this.requestQueue[i] = function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , n = arguments[3];
                i.src = e;
                var o = si(i)
                  , r = null;
                return new ni((function(i, s) {
                    n > 0 && (r = setTimeout((function() {
                        s(new Error("Script timed out")),
                        o.onreadystatechange = o.onload = o.onerror = null,
                        o = null
                    }
                    ), n)),
                    void 0 !== o.onreadystatechange ? o.onreadystatechange = function() {
                        "loaded" === this.readyState && (i(),
                        clearTimeout(r),
                        o.onreadystatechange = o = r = null)
                    }
                    : o.onload = o.onerror = function(n) {
                        "error" === n.type && (s(new Error("Script could not be loaded: " + e)),
                        t.removeChild(o)),
                        i(e),
                        clearTimeout(r),
                        o.onload = o.onerror = o = r = null
                    }
                    ,
                    t.appendChild(o)
                }
                ))
            }(e, o, t, this.delay).then((function() {
                oi.documentScripts[i] = !0,
                oi.requestQueue[i] = null
            }
            )),
            this.requestQueue[i]
        }
    };
    function ri(e) {
        ii.test(e) || (e = location.protocol + e);
        var t = ei.parse(e)
          , i = t.pathname.split("/").slice(-1)[0];
        return t.host + ":" + i
    }
    function si() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            async: !0
        }
          , t = Ke.getDocument()
          , i = t.createElement("script");
        return Object.keys(e).forEach((function(t) {
            return i.setAttribute(t, e[t])
        }
        )),
        i
    }
    var ai = oi
      , li = "undefined" != typeof Promise ? Promise : De.Promise
      , di = void 0
      , ui = {
        init: function() {
            (di = Ke.getWindow()).googletag = di.googletag || {},
            di.googletag.cmd = di.googletag.cmd || [],
            di.__iasPET = di.__iasPET || {},
            di.__iasPET.queue = di.__iasPET.queue || [],
            di.__iasPET.pubId = 926191
        },
        loadPET: function() {
            return ai.load("//cdn.adsafeprotected.com/iasPET.1.js", {
                async: !0
            })
        },
        makePETRequest: function(e, t) {
            var i = []
              , n = null;
            return di.googletag.cmd.push((function() {
                var t = e.getSizes().map(ui.__sizeTransformation);
                i.push({
                    adSlotId: e.getSlotElementId(),
                    size: t,
                    adUnitPath: e.getAdUnitPath()
                })
            }
            )),
            new li((function(e) {
                n = setTimeout(e, t),
                di.__iasPET.queue.push({
                    adSlots: i,
                    dataHandler: function(t) {
                        return function(e) {
                            clearTimeout(n),
                            di.__iasPET.setTargetingForGPT(),
                            e()
                        }(e)
                    }
                })
            }
            ))
        },
        __sizeTransformation: function(e) {
            return e.getWidth && e.getHeight ? [e.getWidth(), e.getHeight()] : [1, 1]
        }
    }
      , ci = ui
      , pi = "undefined" != typeof Promise ? Promise : De.Promise
      , _i = void 0
      , hi = {
        init: function() {
            _i = Ke.getWindow()
        },
        loadMoatYI: function() {
            return ai.load("https://z.moatads.com/bloombergprebidheader853620778109/moatheader.js", {
                async: !0
            })
        },
        moatYICallback: function(e, t) {
            return new pi((function(i) {
                setTimeout((function() {
                    hi.setMoatPrebidData(e),
                    i()
                }
                ), t)
            }
            ))
        },
        setMoatPrebidData: function(e) {
            _i.moatPrebidApi && _i.moatPrebidApi.setMoatTargetingForSlot(e)
        }
    }
      , fi = hi
      , bi = function(e, t) {
        if (Array.isArray(e))
            return e;
        if (Symbol.iterator in Object(e))
            return function(e, t) {
                var i = []
                  , n = !0
                  , o = !1
                  , r = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value),
                    !t || i.length !== t); n = !0)
                        ;
                } catch (e) {
                    o = !0,
                    r = e
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o)
                            throw r
                    }
                }
                return i
            }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
      , mi = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    /*! IASPublisherOptimization.js */
    /*! GPT.js */
    var vi = "undefined" != typeof Promise ? Promise : De.Promise
      , gi = "//securepubads.g.doubleclick.net/tag/js/gpt.js"
      , yi = {
        pubads: "pubads",
        companionAds: "companionAds"
    };
    function wi(e) {
        e.setTargeting("iid", Wt())
    }
    var ki = function() {
        function e(t, i, n) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.__cachedSlots = {},
            this.__networkCode = t,
            this.__headerBidding = i,
            this.__ix = n,
            this.__window = Ke.getWindow(),
            this.__renderedAds = {},
            this.services = yi,
            this.__window && (this.__window.googletag = this.__window.googletag || {},
            this.__window.googletag.cmd = this.__window.googletag.cmd || [],
            this.__googletag = this.__window.googletag),
            this.__contextifyCallbacks(),
            this.__listenToSlotRenderEvents(),
            this.__collapseEmptyDivs(),
            this.__loadGPT()
        }
        return mi(e, [{
            key: "__contextifyCallbacks",
            value: function() {
                this.__handleSlotRenderEvent = this.__handleSlotRenderEvent.bind(this)
            }
        }, {
            key: "__defineSlot",
            value: function(e) {
                var t = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                  , n = void 0;
                if (!(n = e.isInterstitial() ? this.__googletag.defineOutOfPageSlot(e.getUnitName(), e.getId()) : this.__googletag.defineSlot(e.getUnitName(), e.getSizes(), e.getId())))
                    return null;
                var o = e.getTargeting();
                return e.setSlot(n),
                Object.keys(o).forEach((function(e) {
                    return n.setTargeting(e, o[e])
                }
                )),
                wi(n),
                i.forEach((function(e) {
                    return n.addService(t.__googletag[e]())
                }
                )),
                this.__cachedSlots[e.getId()] = n,
                n
            }
        }, {
            key: "__display",
            value: function(e) {
                this.__googletag.display(e.getDomId())
            }
        }, {
            key: "__getRenderedAd",
            value: function(e) {
                return this.__renderedAds[e] || null
            }
        }, {
            key: "__handleSlotRenderEvent",
            value: function(e) {
                var t = this.__getRenderedAd(e.slot.getSlotId().getDomId());
                t && (t.handleSlotRenderEvent(e),
                this.__unstoreRenderedAd(t))
            }
        }, {
            key: "__listenToSlotRenderEvents",
            value: function() {
                var e = this;
                this.enqueue((function() {
                    Object.keys(yi).forEach((function(t) {
                        e.__googletag[t]().addEventListener("slotRenderEnded", e.__handleSlotRenderEvent)
                    }
                    ))
                }
                ))
            }
        }, {
            key: "__loadGPT",
            value: function() {
                return ai.load(gi)
            }
        }, {
            key: "__refreshSlots",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = t.changeCorrelator
                  , n = void 0 !== i && i;
                e.forEach(wi),
                this.__googletag.pubads().refresh(e, {
                    changeCorrelator: n
                })
            }
        }, {
            key: "__renderCachedSlot",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = this.__cachedSlots[e.getId()];
                return !!i && (e.setSlot(i),
                this.__storeRenderedAd(e),
                this.__refreshSlots([i], t),
                !0)
            }
        }, {
            key: "__storeRenderedAd",
            value: function(e) {
                this.__renderedAds[e.getDomId()] = e
            }
        }, {
            key: "__unstoreRenderedAd",
            value: function(e) {
                this.__renderedAds[e.getDomId()] = null
            }
        }, {
            key: "__collapseEmptyDivs",
            value: function() {
                var e = this;
                this.enqueue((function() {
                    return e.__googletag.pubads().collapseEmptyDivs()
                }
                ))
            }
        }, {
            key: "createAd",
            value: function(e, t, i, n, o) {
                return new Zt(e,"/" + this.__networkCode + "/" + t,i,n,o)
            }
        }, {
            key: "setPersonalization",
            value: function(e) {
                var t = this;
                return vi.all([Nt.getPADAllowed(), Nt.getGDPRApplies()]).then((function(i) {
                    var n = bi(i, 2)
                      , o = n[0]
                      , r = n[1];
                    if (o)
                        return e.getSessionId().then((function(e) {
                            return t.setTargeting("uid", e)
                        }
                        )).catch((function() {}
                        ));
                    r && t.enqueue((function() {
                        t.__googletag.pubads().setRequestNonPersonalizedAds(1)
                    }
                    ))
                }
                )).catch((function() {
                    t.enqueue((function() {
                        t.__googletag.pubads().setRequestNonPersonalizedAds(1)
                    }
                    ))
                }
                ))
            }
        }, {
            key: "render",
            value: function(e, t) {
                var i = this
                  , n = t.services
                  , o = void 0 === n ? [] : n
                  , r = t.display
                  , s = void 0 === r || r
                  , a = t.changeCorrelator
                  , l = void 0 !== a && a;
                return new vi((function(t) {
                    i.enqueue((function() {
                        if (e.setRequestTime(Ke.currentTime()),
                        i.__renderCachedSlot(e, {
                            changeCorrelator: l
                        }))
                            return t();
                        var n = i.__defineSlot(e, o);
                        if (!n)
                            return t();
                        var r = i.__ix.fetchBids(e)
                          , a = i.__headerBidding.fetchBids(e);
                        vi.all([r, a]).then((function(t) {
                            i.__googletag.enableServices(),
                            i.__headerBidding.targetBids([e.getId()]);
                            var o = (t[0] || {}).demand;
                            return i.__ix.setTargeting(e, o),
                            vi.all([ci.makePETRequest(n, 700), fi.moatYICallback(n, 700)])
                        }
                        )).then((function() {
                            s && (i.__storeRenderedAd(e),
                            i.__display(e))
                        }
                        )).catch((function(e) {
                            return console.warn(e)
                        }
                        )).finally(t)
                    }
                    ))
                }
                ))
            }
        }, {
            key: "renderInstant",
            value: function(e, t) {
                var i = this
                  , n = t.services
                  , o = void 0 === n ? [] : n;
                this.enqueue((function() {
                    (e.setRequestTime(Ke.currentTime()),
                    i.__renderCachedSlot(e)) || i.__defineSlot(e, o) && (i.__googletag.enableServices(),
                    i.__storeRenderedAd(e),
                    i.__display(e))
                }
                ))
            }
        }, {
            key: "enableSingleRequest",
            value: function() {
                var e = this;
                this.enqueue((function() {
                    return e.__googletag.pubads().enableSingleRequest()
                }
                ))
            }
        }, {
            key: "enableVideoAds",
            value: function() {
                var e = this;
                this.enqueue((function() {
                    return e.__googletag.pubads().enableVideoAds()
                }
                ))
            }
        }, {
            key: "enqueue",
            value: function(e) {
                this.__googletag.cmd.push(e)
            }
        }, {
            key: "refresh",
            value: function(e) {
                var t = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e.filter((function(e) {
                    return e.hasSlot()
                }
                )).forEach((function(e) {
                    t.__headerBidding.fetchBids(e).then((function() {
                        var n = e.getSlot();
                        t.enqueue((function() {
                            return t.__refreshSlots([n], i)
                        }
                        ))
                    }
                    ))
                }
                ))
            }
        }, {
            key: "setRefreshUnfilledSlots",
            value: function(e) {
                var t = this;
                this.enqueue((function() {
                    return t.__googletag.companionAds().setRefreshUnfilledSlots(e)
                }
                ))
            }
        }, {
            key: "setTargeting",
            value: function(e, t) {
                var i = this;
                this.enqueue((function() {
                    return i.__googletag.pubads().setTargeting(e, t)
                }
                ))
            }
        }, {
            key: "updateCorrelator",
            value: function() {
                var e = this;
                this.enqueue((function() {
                    return e.__googletag.pubads().updateCorrelator()
                }
                ))
            }
        }, {
            key: "destroy",
            value: function() {
                this.__googletag.destroySlots(this.__cachedSlots),
                this.__cachedSlots = {},
                this.__renderedAds = {},
                this.__googletag = {},
                this.__window = null
            }
        }], [{
            key: "html",
            value: function() {
                return '<script src="' + gi + '" async><\/script>'
            }
        }]),
        e
    }()
      , xi = "undefined" != typeof Promise ? Promise : De.Promise
      , Ei = function(e) {
        return new xi((function(t) {
            setTimeout(t, e)
        }
        ))
    }
      , Ai = ["1x7v", "300x250", "300x600", "320x50", "728x90", "970x250"]
      , Si = ["300x250", "300x600", "320x50", "728x90", "970x250"]
      , ji = function(e, t) {
        if (Array.isArray(e))
            return e;
        if (Symbol.iterator in Object(e))
            return function(e, t) {
                var i = []
                  , n = !0
                  , o = !1
                  , r = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value),
                    !t || i.length !== t); n = !0)
                        ;
                } catch (e) {
                    o = !0,
                    r = e
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o)
                            throw r
                    }
                }
                return i
            }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
      , Ti = {
        "300x250": "895615206b1f7c4107c26949a26ff556",
        "300x600": "752f60dde5bde8e32ef0d7e73fb70be1"
    }
      , zi = {
        COJP: {
            MOBILE: 16556408,
            DEFAULT: 16556398
        },
        COM: {
            MOBILE: 16556401,
            DEFAULT: 16556394
        }
    }
      , Ii = {
        COJP: {
            SITE_ID: 269408,
            ZONE_IDS: {
                MOBILE: 1337934,
                DEFAULT: 1337932
            }
        },
        COM: {
            SITE_ID: 269406,
            ZONE_IDS: {
                MOBILE: 1337930,
                DEFAULT: 1337928
            }
        }
    }
      , Ci = function(e, t) {
        if (Array.isArray(e))
            return e;
        if (Symbol.iterator in Object(e))
            return function(e, t) {
                var i = []
                  , n = !0
                  , o = !1
                  , r = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value),
                    !t || i.length !== t); n = !0)
                        ;
                } catch (e) {
                    o = !0,
                    r = e
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o)
                            throw r
                    }
                }
                return i
            }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
      , Li = {
        DEFAULT: {
            "300x250": "bloomberg_300x250_desktop_HDX_prebid",
            "300x600": "bloomberg_desktop_ROS_300x600_prebid",
            "728x90": "bloomberg_728x90_desktop_HDX_prebid",
            "970x250": "bloomberg_desktop_ROS_970x250_prebid"
        },
        MOBILE: {
            "300x250": "Bloomberg_mweb_inarticle_300x250_flex"
        }
    }
      , Oi = function(e, t) {
        if (Array.isArray(e))
            return e;
        if (Symbol.iterator in Object(e))
            return function(e, t) {
                var i = []
                  , n = !0
                  , o = !1
                  , r = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value),
                    !t || i.length !== t); n = !0)
                        ;
                } catch (e) {
                    o = !0,
                    r = e
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o)
                            throw r
                    }
                }
                return i
            }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
      , Pi = {
        "300x250": 8555,
        "300x600": 8556,
        "728x90": 8557,
        "970x250": 8558
    }
      , Ri = [{
        generateBid: function(e) {
            for (var t = 0; t < e.length; t++) {
                var i = ji(e[t], 2)
                  , n = i[0]
                  , o = i[1]
                  , r = Ti[n + "x" + o];
                if (r)
                    return {
                        bidder: "adyoulike",
                        params: {
                            placement: r
                        }
                    }
            }
            return null
        }
    }, {
        generateBid: function(e, t) {
            var i = Ke.getViewportDimensions();
            if (!i)
                return null;
            var n = i.height
              , o = i.width
              , r = t.getElementTopPosition()
              , s = Ke.isCOJP() ? zi.COJP : zi.COM
              , a = {
                placementId: o < 760 ? s.MOBILE : s.DEFAULT
            };
            return r < n && (a.position = "above"),
            {
                bidder: "appnexus",
                params: a
            }
        }
    }, {
        generateBid: function(e, t) {
            var i = Ke.getViewportDimensions();
            if (!i)
                return null;
            var n = i.height
              , o = i.width
              , r = t.getElementTopPosition()
              , s = Ke.isCOJP() ? Ii.COJP : Ii.COM
              , a = {
                accountId: 12728,
                siteId: s.SITE_ID,
                zoneId: o < 760 ? s.ZONE_IDS.MOBILE : s.ZONE_IDS.DEFAULT
            };
            return r < n && (a.position = "atf"),
            {
                bidder: "rubicon",
                params: a
            }
        }
    }, {
        generateBid: function(e) {
            var t = Ke.getViewportDimensions();
            if (!t)
                return null;
            for (var i = t.width < 760 ? Li.MOBILE : Li.DEFAULT, n = 0; n < e.length; n++) {
                var o = Ci(e[n], 2)
                  , r = i[o[0] + "x" + o[1]];
                if (r)
                    return {
                        bidder: "triplelift",
                        params: {
                            inventoryCode: r
                        }
                    }
            }
            return null
        }
    }, {
        generateBid: function(e) {
            if (Ke.isCOJP())
                return null;
            for (var t = 0; t < e.length; t++) {
                var i = Oi(e[t], 2)
                  , n = i[0]
                  , o = i[1]
                  , r = Pi[n + "x" + o];
                if (r)
                    return {
                        bidder: "trustx",
                        params: {
                            uid: r
                        }
                    }
            }
            return null
        }
    }]
      , Di = function(e, t) {
        return Ri.map((function(i) {
            return i.generateBid(e, t)
        }
        )).filter(Boolean)
    }
      , Mi = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    /*! timeouts.js */
    function Bi(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    /*! HeaderBidding.js */
    var Ui = "undefined" != typeof Promise ? Promise : De.Promise
      , qi = Ei
      , Ni = Di
      , Vi = {
        COJP: "https://www.bloomberg.co.jp/ads/scripts/prebid.js",
        COM: "https://www.bloomberg.com/ads/scripts/prebid.js"
    }
      , Fi = {
        consentManagement: {
            gdpr: {
                cmpApi: "iab",
                allowAuctionWithoutConsent: !1,
                defaultGdprScope: !1,
                timeout: 3e3
            }
        }
    }
      , Hi = {
        priceGranularity: {
            buckets: [{
                max: 8,
                increment: .01
            }, {
                max: 20,
                increment: .05
            }, {
                max: 50,
                increment: .5
            }, {
                max: 100,
                increment: 1
            }]
        },
        userSync: {
            filterSettings: {
                iframe: {
                    bidders: "*",
                    filter: "include"
                }
            }
        },
        consentManagement: {
            usp: {
                cmpApi: "iab"
            }
        }
    }
      , Gi = new Set(Si)
      , Wi = function() {
        function e() {
            var t = this
              , i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (Bi(this, e),
            this.__window = Ke.getWindow(),
            this.__enabled = !i,
            this.__scriptLoadedPromise = Ui.resolve(),
            this.__window && (this.__window.pbjs = this.__window.pbjs || {},
            this.__window.pbjs.que = this.__window.pbjs.que || [],
            this.__pbjs = this.__window.pbjs,
            qt.gdprAppliesAsync().then((function(e) {
                var i = e ? Object.assign({}, Hi, Fi) : Hi;
                t.prebidEnqueue((function() {
                    t.__pbjs.setConfig(i)
                }
                ))
            }
            ))),
            this.__enabled) {
                var n = Ke.isCOJP() ? Vi.COJP : Vi.COM;
                this.__scriptLoadedPromise = ai.timeout(1e3).load(n, {
                    async: !0
                })
            }
        }
        return Mi(e, [{
            key: "isReady",
            value: function() {
                return this.__scriptLoadedPromise
            }
        }, {
            key: "fetchBids",
            value: function(e) {
                if (!this.__enabled)
                    return Ui.resolve();
                var t = e.getSizes().filter((function(e) {
                    var t = Array.isArray(e) ? e[0] + "x" + e[1] : "" + e;
                    return Gi.has(t)
                }
                ));
                if (!t.length)
                    return Ui.resolve();
                var i = this.fetchPrebidBids(e, t);
                return Ui.race([i, qi(3e3)])
            }
        }, {
            key: "fetchPrebidBids",
            value: function(e, t) {
                var i = this;
                return new Ui((function(n) {
                    i.prebidEnqueue((function() {
                        var o = {
                            code: e.getId(),
                            mediaTypes: {
                                banner: {
                                    sizes: t
                                }
                            },
                            bids: Ni(t, e)
                        };
                        i.__pbjs.removeAdUnit(),
                        i.__pbjs.addAdUnits(o),
                        i.__pbjs.requestBids({
                            timeout: 3e3,
                            bidsBackHandler: n
                        })
                    }
                    ))
                }
                ))
            }
        }, {
            key: "targetBids",
            value: function(e) {
                var t = this;
                this.prebidEnqueue((function() {
                    t.__pbjs.setTargetingForGPTAsync(e)
                }
                ))
            }
        }, {
            key: "prebidEnqueue",
            value: function(e) {
                this.__pbjs.que.push(e)
            }
        }]),
        e
    }();
    Wi.SCRIPTS = Vi;
    var Ji = Wi
      , $i = [{
        display: "mobile",
        name: "bloomberg_display_mobileweb_box1_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box1_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box1_300x600",
        site: "bloomberg",
        size: ["300x600"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box1_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box1_320x50",
        site: "co.jp",
        size: ["320x50"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box1_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box1_300x600",
        site: "co.jp",
        size: ["300x600"]
    }]
      , Qi = [{
        display: "mobile",
        name: "bloomberg_display_mobileweb_box2_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box2_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box2_300x600",
        site: "bloomberg",
        size: ["300x600"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box2_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box2_320x50",
        site: "co.jp",
        size: ["320x50"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box2_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box2_300x600",
        site: "co.jp",
        size: ["300x600"]
    }]
      , Xi = [{
        display: "mobile",
        name: "bloomberg_display_mobileweb_box3_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box3_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box3_300x600",
        site: "bloomberg",
        size: ["300x600"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box3_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box3_320x50",
        site: "co.jp",
        size: ["320x50"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box3_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box3_300x600",
        site: "co.jp",
        size: ["300x600"]
    }]
      , Yi = [{
        display: "mobile",
        name: "bloomberg_display_mobileweb_box4_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box4_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box4_300x600",
        site: "bloomberg",
        size: ["300x600"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box4_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box4_320x50",
        site: "co.jp",
        size: ["320x50"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box4_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box4_300x600",
        site: "co.jp",
        size: ["300x600"]
    }]
      , Ki = [{
        display: "mobile",
        name: "bloomberg_display_mobileweb_box5_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box5_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box5_300x600",
        site: "bloomberg",
        size: ["300x600"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box5_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box5_320x50",
        site: "co.jp",
        size: ["320x50"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box5_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box5_300x600",
        site: "co.jp",
        size: ["300x600"]
    }]
      , Zi = [{
        display: "mobile",
        name: "bloomberg_display_mobileweb_box6_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box6_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box6_300x600",
        site: "bloomberg",
        size: ["300x600"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box6_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box6_320x50",
        site: "co.jp",
        size: ["320x50"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box6_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box6_300x600",
        site: "co.jp",
        size: ["300x600"]
    }]
      , en = [{
        display: "mobile",
        name: "bloomberg_display_mobileweb_box7_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box7_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box7_300x600",
        site: "bloomberg",
        size: ["300x600"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box7_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box7_320x50",
        site: "co.jp",
        size: ["320x50"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box7_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box7_300x600",
        site: "co.jp",
        size: ["300x600"]
    }]
      , tn = [{
        display: "mobile",
        name: "bloomberg_display_mobileweb_box8_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box8_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box8_300x600",
        site: "bloomberg",
        size: ["300x600"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box8_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box8_320x50",
        site: "co.jp",
        size: ["320x50"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box8_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box8_300x600",
        site: "co.jp",
        size: ["300x600"]
    }]
      , nn = [{
        display: "mobile",
        name: "bloomberg_display_mobileweb_box9_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box9_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box9_300x600",
        site: "bloomberg",
        size: ["300x600"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box9_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box9_320x50",
        site: "co.jp",
        size: ["320x50"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box9_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box9_300x600",
        site: "co.jp",
        size: ["300x600"]
    }]
      , on = [{
        display: "mobile",
        name: "bloomberg_display_mobileweb_box10_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box10_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box10_300x600",
        site: "bloomberg",
        size: ["300x600"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box10_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box10_320x50",
        site: "co.jp",
        size: ["320x50"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box10_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box10_300x600",
        site: "co.jp",
        size: ["300x600"]
    }]
      , rn = [{
        display: "mobile",
        name: "bloomberg_display_mobileweb_box11_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box11_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box11_300x600",
        site: "bloomberg",
        size: ["300x600"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box11_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box11_320x50",
        site: "co.jp",
        size: ["320x50"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box11_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box11_300x600",
        site: "co.jp",
        size: ["300x600"]
    }]
      , sn = [{
        display: "mobile",
        name: "bloomberg_display_mobileweb_box12_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box12_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box12_300x600",
        site: "bloomberg",
        size: ["300x600"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box12_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box12_320x50",
        site: "co.jp",
        size: ["320x50"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box12_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box12_300x600",
        site: "co.jp",
        size: ["300x600"]
    }]
      , an = [{
        display: "mobile",
        name: "bloomberg_display_mobileweb_box13_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box13_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box13_300x600",
        site: "bloomberg",
        size: ["300x600"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box13_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box13_320x50",
        site: "co.jp",
        size: ["320x50"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box13_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box13_300x600",
        site: "co.jp",
        size: ["300x600"]
    }]
      , ln = [{
        display: "mobile",
        name: "bloomberg_display_mobileweb_box14_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box14_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box14_300x600",
        site: "bloomberg",
        size: ["300x600"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box14_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box14_320x50",
        site: "co.jp",
        size: ["320x50"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box14_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box14_300x600",
        site: "co.jp",
        size: ["300x600"]
    }]
      , dn = [{
        display: "mobile",
        name: "bloomberg_display_mobileweb_box15_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box15_300x250",
        site: "bloomberg",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_box15_300x600",
        site: "bloomberg",
        size: ["300x600"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box15_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "mobile",
        name: "co.jp_display_mobileweb_box15_320x50",
        site: "co.jp",
        size: ["320x50"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box15_300x250",
        site: "co.jp",
        size: ["300x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_box15_300x600",
        site: "co.jp",
        size: ["300x600"]
    }]
      , un = [{
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard1_728x90",
        site: "bloomberg",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard1_970x250",
        site: "bloomberg",
        size: ["970x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard1_728x90",
        site: "co.jp",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard1_970x250",
        site: "co.jp",
        size: ["970x250"]
    }]
      , cn = [{
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard2_728x90",
        site: "bloomberg",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard2_970x250",
        site: "bloomberg",
        size: ["970x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard2_728x90",
        site: "co.jp",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard2_970x250",
        site: "co.jp",
        size: ["970x250"]
    }]
      , pn = [{
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard3_728x90",
        site: "bloomberg",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard3_970x250",
        site: "bloomberg",
        size: ["970x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard3_728x90",
        site: "co.jp",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard3_970x250",
        site: "co.jp",
        size: ["970x250"]
    }]
      , _n = [{
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard4_728x90",
        site: "bloomberg",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard4_970x250",
        site: "bloomberg",
        size: ["970x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard4_728x90",
        site: "co.jp",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard4_970x250",
        site: "co.jp",
        size: ["970x250"]
    }]
      , hn = [{
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard5_728x90",
        site: "bloomberg",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard5_970x250",
        site: "bloomberg",
        size: ["970x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard5_728x90",
        site: "co.jp",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard5_970x250",
        site: "co.jp",
        size: ["970x250"]
    }]
      , fn = [{
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard6_728x90",
        site: "bloomberg",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard6_970x250",
        site: "bloomberg",
        size: ["970x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard6_728x90",
        site: "co.jp",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard6_970x250",
        site: "co.jp",
        size: ["970x250"]
    }]
      , bn = [{
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard7_728x90",
        site: "bloomberg",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard7_970x250",
        site: "bloomberg",
        size: ["970x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard7_728x90",
        site: "co.jp",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard7_970x250",
        site: "co.jp",
        size: ["970x250"]
    }]
      , mn = [{
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard8_728x90",
        site: "bloomberg",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard8_970x250",
        site: "bloomberg",
        size: ["970x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard8_728x90",
        site: "co.jp",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard8_970x250",
        site: "co.jp",
        size: ["970x250"]
    }]
      , vn = [{
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard9_728x90",
        site: "bloomberg",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard9_970x250",
        site: "bloomberg",
        size: ["970x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard9_728x90",
        site: "co.jp",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard9_970x250",
        site: "co.jp",
        size: ["970x250"]
    }]
      , gn = [{
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard10_728x90",
        site: "bloomberg",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard10_970x250",
        site: "bloomberg",
        size: ["970x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard10_728x90",
        site: "co.jp",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard10_970x250",
        site: "co.jp",
        size: ["970x250"]
    }]
      , yn = [{
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard11_728x90",
        site: "bloomberg",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard11_970x250",
        site: "bloomberg",
        size: ["970x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard11_728x90",
        site: "co.jp",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard11_970x250",
        site: "co.jp",
        size: ["970x250"]
    }]
      , wn = [{
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard12_728x90",
        site: "bloomberg",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard12_970x250",
        site: "bloomberg",
        size: ["970x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard12_728x90",
        site: "co.jp",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard12_970x250",
        site: "co.jp",
        size: ["970x250"]
    }]
      , kn = [{
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard13_728x90",
        site: "bloomberg",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard13_970x250",
        site: "bloomberg",
        size: ["970x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard13_728x90",
        site: "co.jp",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard13_970x250",
        site: "co.jp",
        size: ["970x250"]
    }]
      , xn = [{
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard14_728x90",
        site: "bloomberg",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard14_970x250",
        site: "bloomberg",
        size: ["970x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard14_728x90",
        site: "co.jp",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard14_970x250",
        site: "co.jp",
        size: ["970x250"]
    }]
      , En = [{
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard15_728x90",
        site: "bloomberg",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "bloomberg_display_desktop_leaderboard15_970x250",
        site: "bloomberg",
        size: ["970x250"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard15_728x90",
        site: "co.jp",
        size: ["728x90"]
    }, {
        display: "desktop",
        name: "co.jp_display_desktop_leaderboard15_970x250",
        site: "co.jp",
        size: ["970x250"]
    }]
      , An = [{
        display: "video",
        name: "bloomberg_video_video_1x7v",
        site: "bloomberg",
        size: ["1x7v"]
    }, {
        display: "video",
        name: "co.jp_video_video_1x7v",
        site: "co.jp",
        size: ["1x7v"]
    }]
      , Sn = [{
        display: "video",
        name: "bloomberg_video_vid _1x7v",
        site: "bloomberg",
        size: ["1x7v"]
    }, {
        display: "video",
        name: "co.jp_video_vid _1x7v",
        site: "co.jp",
        size: ["1x7v"]
    }]
      , jn = [{
        display: "video",
        name: "bloomberg_video_live_1x7v",
        site: "bloomberg",
        size: ["1x7v"]
    }, {
        display: "video",
        name: "co.jp_video_live_1x7v",
        site: "co.jp",
        size: ["1x7v"]
    }]
      , Tn = [{
        display: "video",
        name: "bloomberg_video_livephoenix _1x7v",
        site: "bloomberg",
        size: ["1x7v"]
    }, {
        display: "video",
        name: "co.jp_video_livephoenix _1x7v",
        site: "co.jp",
        size: ["1x7v"]
    }]
      , zn = [{
        display: "video",
        name: "bloomberg_video_markets_1x7v",
        site: "bloomberg",
        size: ["1x7v"]
    }, {
        display: "video",
        name: "co.jp_video_markets_1x7v",
        site: "co.jp",
        size: ["1x7v"]
    }]
      , In = [{
        display: "video",
        name: "bloomberg_video_vodmidroll_1x7v",
        site: "bloomberg",
        size: ["1x7v"]
    }, {
        display: "video",
        name: "co.jp_video_vodmidroll_1x7v",
        site: "co.jp",
        size: ["1x7v"]
    }]
      , Cn = [{
        display: "video",
        name: "bloomberg_video_LiveTV_Preroll_1x7v",
        site: "bloomberg",
        size: ["1x7v"]
    }, {
        display: "video",
        name: "co.jp_video_LiveTV_Preroll_1x7v",
        site: "co.jp",
        size: ["1x7v"]
    }]
      , Ln = [{
        display: "video",
        name: "bloomberg_video_VOD_Preroll_1x7v",
        site: "bloomberg",
        size: ["1x7v"]
    }, {
        display: "video",
        name: "co.jp_video_VOD_Preroll_1x7v",
        site: "co.jp",
        size: ["1x7v"]
    }]
      , On = [{
        display: "video",
        name: "bloomberg_video_LiveTV_Midroll_1x7v",
        site: "bloomberg",
        size: ["1x7v"]
    }, {
        display: "video",
        name: "co.jp_video_LiveTV_Midroll_1x7v",
        site: "co.jp",
        size: ["1x7v"]
    }]
      , Pn = [{
        display: "video",
        name: "bloomberg_video_VOD_Midroll_1x7v",
        site: "bloomberg",
        size: ["1x7v"]
    }, {
        display: "video",
        name: "co.jp_video_VOD_Midroll_1x7v",
        site: "co.jp",
        size: ["1x7v"]
    }]
      , Rn = [{
        display: "video",
        name: "co.jp_video_lead_1x7v",
        site: "co.jp",
        size: ["1x7v"]
    }]
      , Dn = [{
        display: "video",
        name: "co.jp_video_home_1x7v",
        site: "co.jp",
        size: ["1x7v"]
    }]
      , Mn = {
        box1: $i,
        box2: Qi,
        box3: Xi,
        box4: Yi,
        box5: Ki,
        box6: Zi,
        box7: en,
        box8: tn,
        box9: nn,
        box10: on,
        box11: rn,
        box12: sn,
        box13: an,
        box14: ln,
        box15: dn,
        leaderboard1: un,
        leaderboard2: cn,
        leaderboard3: pn,
        leaderboard4: _n,
        leaderboard5: hn,
        leaderboard6: fn,
        leaderboard7: bn,
        leaderboard8: mn,
        leaderboard9: vn,
        leaderboard10: gn,
        leaderboard11: yn,
        leaderboard12: wn,
        leaderboard13: kn,
        leaderboard14: xn,
        leaderboard15: En,
        video: An,
        vid: Sn,
        live: jn,
        livephoenix: Tn,
        markets: zn,
        vodmidroll: In,
        LiveTV_Preroll: Cn,
        VOD_Preroll: Ln,
        LiveTV_Midroll: On,
        VOD_Midroll: Pn,
        lead: Rn,
        home: Dn
    }
      , Bn = c(Object.freeze({
        __proto__: null,
        box1: $i,
        box2: Qi,
        box3: Xi,
        box4: Yi,
        box5: Ki,
        box6: Zi,
        box7: en,
        box8: tn,
        box9: nn,
        box10: on,
        box11: rn,
        box12: sn,
        box13: an,
        box14: ln,
        box15: dn,
        leaderboard1: un,
        leaderboard2: cn,
        leaderboard3: pn,
        leaderboard4: _n,
        leaderboard5: hn,
        leaderboard6: fn,
        leaderboard7: bn,
        leaderboard8: mn,
        leaderboard9: vn,
        leaderboard10: gn,
        leaderboard11: yn,
        leaderboard12: wn,
        leaderboard13: kn,
        leaderboard14: xn,
        leaderboard15: En,
        video: An,
        vid: Sn,
        live: jn,
        livephoenix: Tn,
        markets: zn,
        vodmidroll: In,
        LiveTV_Preroll: Cn,
        VOD_Preroll: Ln,
        LiveTV_Midroll: On,
        VOD_Midroll: Pn,
        lead: Rn,
        home: Dn,
        default: Mn
    }))
      , Un = function(e, t) {
        if (Array.isArray(e))
            return e;
        if (Symbol.iterator in Object(e))
            return function(e, t) {
                var i = []
                  , n = !0
                  , o = !1
                  , r = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value),
                    !t || i.length !== t); n = !0)
                        ;
                } catch (e) {
                    o = !0,
                    r = e
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o)
                            throw r
                    }
                }
                return i
            }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
      , qn = /^(bloomberg|co\.jp)$/
      , Nn = /^(desktop|mobile|video)$/
      , Vn = {
        _filterByPosition: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments[1];
            return e[t]
        },
        _filterByDisplay: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , t = arguments[1];
            if (!Nn.test(t))
                throw new Error("IXMapper: Invalid display type specified");
            return e.filter((function(e) {
                return e.display === t
            }
            ))
        },
        _filterBySize: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , t = arguments[1];
            return e.filter((function(e) {
                return e.size.includes(t)
            }
            ))
        },
        _filterBySite: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , t = arguments[1];
            if (!qn.test(t))
                throw new Error("IXMapper: Invalid site value specified");
            return e.filter((function(e) {
                return e.site === t
            }
            ))
        },
        findMappingFor: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!e.position)
                throw new Error("IXMapper: Invalid ad position specified");
            return [["position", this._filterByPosition], ["display", this._filterByDisplay], ["size", this._filterBySize], ["site", this._filterBySite]].reduce((function(t, i) {
                var n = Un(i, 2)
                  , o = n[0]
                  , r = n[1]
                  , s = e[o];
                return s ? r(t, s) : t
            }
            ), Bn)
        }
    }
      , Fn = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    function Hn(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var Gn = "undefined" != typeof Promise ? Promise : De.Promise
      , Wn = Ei
      , Jn = "//js-sec.indexww.com/ht/p/184795-221475390811523.js"
      , $n = "//js-sec.indexww.com/ht/p/184795-45553530326378.js"
      , Qn = new Set(Ai)
      , Xn = function() {
        function e() {
            var t = this
              , i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (Hn(this, e),
            this.__window = Ke.getWindow(),
            this.__enabled = !i,
            this.__scriptLoadedPromise = Gn.resolve(),
            !this.__enabled)
                return this;
            this.__window.headertag = this.__window.headertag || {},
            this.__window.headertag.cmd = this.__window.headertag.cmd || [];
            var n = Ke.isCOJP() ? Jn : $n;
            this.__window.Spritz = this.__window.Spritz || {},
            this.__window.Spritz.cmd = this.__window.Spritz.cmd || [],
            this.__window.Spritz.cmd.push((function() {
                t.__scriptLoadedPromise = t.__window.Spritz.inject(n, {
                    timeout: 2e3
                })
            }
            ))
        }
        return Fn(e, [{
            key: "isReady",
            value: function() {
                return this.__scriptLoadedPromise
            }
        }, {
            key: "fetchBids",
            value: function(e) {
                if (!this.__enabled)
                    return Gn.resolve();
                var t = e.getSizes().map((function(e) {
                    return Array.isArray(e) ? e[0] + "x" + e[1] : "" + e
                }
                ))
                  , i = t.filter((function(e) {
                    return Qn.has(e)
                }
                ))
                  , n = Ke.isCOJP() ? "co.jp" : "bloomberg"
                  , o = e.isMobile() ? "mobile" : "desktop";
                if (!i.length)
                    return console.warn("IX: No valid sizes to bid on (position: " + e.getTargeting().position + ", sizes: " + t + ")"),
                    Gn.resolve();
                var r = this.fetchDemand(e, o, n, i);
                return Gn.race([r, Wn(5e3)])
            }
        }, {
            key: "fetchDemand",
            value: function(e, t, i, n) {
                var o = this
                  , r = {
                    position: e.getTargeting().position,
                    site: i,
                    display: t
                }
                  , s = n.reduce((function(e, t) {
                    var i = Vn.findMappingFor(Object.assign({}, r, {
                        size: t
                    }));
                    return i[0] && e.add(i[0]),
                    e
                }
                ), new Set)
                  , a = [];
                return s.forEach((function(e) {
                    a.push({
                        htSlotName: e.name
                    })
                }
                )),
                a.length ? new Gn((function(e) {
                    o.__window.headertag.cmd.push((function() {
                        o.__window.headertag.retrieveDemand(a, (function(t) {
                            e({
                                demand: t
                            })
                        }
                        ), {
                            timeout: 5e3
                        })
                    }
                    ))
                }
                )) : (console.warn("IX: No slots to retrieve (position: " + r.position + ", sizes: " + n + ")"),
                Gn.resolve())
            }
        }, {
            key: "setTargeting",
            value: function(e, t) {
                var i = e.getSlot()
                  , n = t && t.slot || {};
                if (n && i) {
                    var o = {};
                    Object.keys(n).forEach((function(e) {
                        var t = n[e] || [];
                        o = t.reduce((function(e, t) {
                            var i = t.targeting || {};
                            return Object.keys(i).forEach((function(t) {
                                e[t] = e[t] || [],
                                e[t] = e[t].concat(i[t])
                            }
                            )),
                            e
                        }
                        ), o)
                    }
                    )),
                    Object.keys(o).forEach((function(e) {
                        return i.setTargeting(e, o[e])
                    }
                    ))
                }
            }
        }]),
        e
    }()
      , Yn = function(e) {
        return e
    }
      , Kn = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }()
      , Zn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    function eo(e) {
        var t, i = "object" === (void 0 === (t = e.data) ? "undefined" : Zn(t)) ? e.data : function(e) {
            try {
                return JSON.parse(e)
            } catch (e) {
                return {}
            }
        }(e.data);
        return {
            data: i,
            id: i.id || i.windowId,
            method: i.method
        }
    }
    var to = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }/*! PostMessages.js */
            (this, e),
            this.__listeners = {},
            this.__window = Ke.getWindow(),
            this.__contextifyCallbacks(),
            this.__delegateEvents()
        }
        return Kn(e, [{
            key: "__contextifyCallbacks",
            value: function() {
                this.__dispatchEventListeners = this.__dispatchEventListeners.bind(this)
            }
        }, {
            key: "__delegateEvents",
            value: function() {
                this.__window && this.__window.addEventListener("message", this.__dispatchEventListeners)
            }
        }, {
            key: "__dispatchEventListeners",
            value: function(e) {
                var t = eo(e)
                  , i = t.data
                  , n = t.id
                  , o = t.method;
                ((this.__listeners[n] ? this.__listeners[n][o] : []) || []).forEach((function(e) {
                    return e(i)
                }
                ))
            }
        }, {
            key: "__undelegateEvents",
            value: function() {
                this.__window && this.__window.removeEventListener("message", this.__dispatchEventListeners)
            }
        }, {
            key: "destroy",
            value: function() {
                this.__undelegateEvents(),
                this.__listeners = {}
            }
        }, {
            key: "addEventListener",
            value: function(e, t, i) {
                var n = this.__listeners[e] = this.__listeners[e] || {};
                n[t] = n[t] || [],
                n[t].push(i)
            }
        }, {
            key: "removeEventListener",
            value: function(e, t, i) {
                var n = this.__listeners[e];
                n && n[t] && (n[t] = n[t].filter((function(e) {
                    return e !== i
                }
                )))
            }
        }]),
        e
    }()
      , io = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    /*! AlwaysRenderRenderingStrategy.js */
    var no = function() {
        function e(t) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.__gpt = t,
            this.__services = [t.services.pubads]
        }
        return io(e, [{
            key: "render",
            value: function(e) {
                e.isDisplayable() && this.__gpt.render(e, {
                    services: this.__services
                })
            }
        }, {
            key: "refresh",
            value: function(e) {
                this.__gpt.refresh(e)
            }
        }, {
            key: "wouldRefresh",
            value: function(e) {
                return e
            }
        }]),
        e
    }()
      , oo = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    /*! CompanionAdRenderingStrategy.js */
    var ro = function() {
        function e(t) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.__gpt = t,
            this.__services = [t.services.pubads, t.services.companionAds]
        }
        return oo(e, [{
            key: "render",
            value: function(e) {
                e.isDisplayable() && this.__gpt.render(e, {
                    display: !1,
                    services: this.__services
                })
            }
        }, {
            key: "refresh",
            value: function() {}
        }]),
        e
    }()
      , so = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    /*! InstantRenderRenderingStrategy.js */
    var ao = function() {
        function e(t) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.__gpt = t,
            this.__services = [t.services.pubads]
        }
        return so(e, [{
            key: "render",
            value: function(e) {
                this.__gpt.renderInstant(e, {
                    services: this.__services
                })
            }
        }, {
            key: "refresh",
            value: function(e) {
                this.__gpt.refresh(e)
            }
        }, {
            key: "wouldRefresh",
            value: function(e) {
                return e
            }
        }]),
        e
    }();
    !function() {
        if ("object" == typeof window)
            if ("IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype)
                "isIntersecting"in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                    get: function() {
                        return this.intersectionRatio > 0
                    }
                });
            else {
                var e = window.document;
                i.prototype.THROTTLE_TIMEOUT = 100,
                i.prototype.POLL_INTERVAL = null,
                i.prototype.USE_MUTATION_OBSERVER = !0,
                i.prototype.observe = function(e) {
                    if (!this._observationTargets.some((function(t) {
                        return t.element == e
                    }
                    ))) {
                        if (!e || 1 != e.nodeType)
                            throw new Error("target must be an Element");
                        this._registerInstance(),
                        this._observationTargets.push({
                            element: e,
                            entry: null
                        }),
                        this._monitorIntersections(),
                        this._checkForIntersections()
                    }
                }
                ,
                i.prototype.unobserve = function(e) {
                    this._observationTargets = this._observationTargets.filter((function(t) {
                        return t.element != e
                    }
                    )),
                    this._observationTargets.length || (this._unmonitorIntersections(),
                    this._unregisterInstance())
                }
                ,
                i.prototype.disconnect = function() {
                    this._observationTargets = [],
                    this._unmonitorIntersections(),
                    this._unregisterInstance()
                }
                ,
                i.prototype.takeRecords = function() {
                    var e = this._queuedEntries.slice();
                    return this._queuedEntries = [],
                    e
                }
                ,
                i.prototype._initThresholds = function(e) {
                    var t = e || [0];
                    return Array.isArray(t) || (t = [t]),
                    t.sort().filter((function(e, t, i) {
                        if ("number" != typeof e || isNaN(e) || e < 0 || e > 1)
                            throw new Error("threshold must be a number between 0 and 1 inclusively");
                        return e !== i[t - 1]
                    }
                    ))
                }
                ,
                i.prototype._parseRootMargin = function(e) {
                    var t = (e || "0px").split(/\s+/).map((function(e) {
                        var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                        if (!t)
                            throw new Error("rootMargin must be specified in pixels or percent");
                        return {
                            value: parseFloat(t[1]),
                            unit: t[2]
                        }
                    }
                    ));
                    return t[1] = t[1] || t[0],
                    t[2] = t[2] || t[0],
                    t[3] = t[3] || t[1],
                    t
                }
                ,
                i.prototype._monitorIntersections = function() {
                    this._monitoringIntersections || (this._monitoringIntersections = !0,
                    this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (n(window, "resize", this._checkForIntersections, !0),
                    n(e, "scroll", this._checkForIntersections, !0),
                    this.USE_MUTATION_OBSERVER && "MutationObserver"in window && (this._domObserver = new MutationObserver(this._checkForIntersections),
                    this._domObserver.observe(e, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }))))
                }
                ,
                i.prototype._unmonitorIntersections = function() {
                    this._monitoringIntersections && (this._monitoringIntersections = !1,
                    clearInterval(this._monitoringInterval),
                    this._monitoringInterval = null,
                    o(window, "resize", this._checkForIntersections, !0),
                    o(e, "scroll", this._checkForIntersections, !0),
                    this._domObserver && (this._domObserver.disconnect(),
                    this._domObserver = null))
                }
                ,
                i.prototype._checkForIntersections = function() {
                    var e = this._rootIsInDom()
                      , i = e ? this._getRootRect() : {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    };
                    this._observationTargets.forEach((function(n) {
                        var o = n.element
                          , s = r(o)
                          , a = this._rootContainsTarget(o)
                          , l = n.entry
                          , d = e && a && this._computeTargetAndRootIntersection(o, i)
                          , u = n.entry = new t({
                            time: window.performance && performance.now && performance.now(),
                            target: o,
                            boundingClientRect: s,
                            rootBounds: i,
                            intersectionRect: d
                        });
                        l ? e && a ? this._hasCrossedThreshold(l, u) && this._queuedEntries.push(u) : l && l.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
                    }
                    ), this),
                    this._queuedEntries.length && this._callback(this.takeRecords(), this)
                }
                ,
                i.prototype._computeTargetAndRootIntersection = function(t, i) {
                    if ("none" != window.getComputedStyle(t).display) {
                        for (var n, o, s, l, d, u, c, p, _ = r(t), h = a(t), f = !1; !f; ) {
                            var b = null
                              , m = 1 == h.nodeType ? window.getComputedStyle(h) : {};
                            if ("none" == m.display)
                                return;
                            if (h == this.root || h == e ? (f = !0,
                            b = i) : h != e.body && h != e.documentElement && "visible" != m.overflow && (b = r(h)),
                            b && (n = b,
                            o = _,
                            s = void 0,
                            l = void 0,
                            d = void 0,
                            u = void 0,
                            c = void 0,
                            p = void 0,
                            s = Math.max(n.top, o.top),
                            l = Math.min(n.bottom, o.bottom),
                            d = Math.max(n.left, o.left),
                            u = Math.min(n.right, o.right),
                            p = l - s,
                            !(_ = (c = u - d) >= 0 && p >= 0 && {
                                top: s,
                                bottom: l,
                                left: d,
                                right: u,
                                width: c,
                                height: p
                            })))
                                break;
                            h = a(h)
                        }
                        return _
                    }
                }
                ,
                i.prototype._getRootRect = function() {
                    var t;
                    if (this.root)
                        t = r(this.root);
                    else {
                        var i = e.documentElement
                          , n = e.body;
                        t = {
                            top: 0,
                            left: 0,
                            right: i.clientWidth || n.clientWidth,
                            width: i.clientWidth || n.clientWidth,
                            bottom: i.clientHeight || n.clientHeight,
                            height: i.clientHeight || n.clientHeight
                        }
                    }
                    return this._expandRectByRootMargin(t)
                }
                ,
                i.prototype._expandRectByRootMargin = function(e) {
                    var t = this._rootMarginValues.map((function(t, i) {
                        return "px" == t.unit ? t.value : t.value * (i % 2 ? e.width : e.height) / 100
                    }
                    ))
                      , i = {
                        top: e.top - t[0],
                        right: e.right + t[1],
                        bottom: e.bottom + t[2],
                        left: e.left - t[3]
                    };
                    return i.width = i.right - i.left,
                    i.height = i.bottom - i.top,
                    i
                }
                ,
                i.prototype._hasCrossedThreshold = function(e, t) {
                    var i = e && e.isIntersecting ? e.intersectionRatio || 0 : -1
                      , n = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                    if (i !== n)
                        for (var o = 0; o < this.thresholds.length; o++) {
                            var r = this.thresholds[o];
                            if (r == i || r == n || r < i != r < n)
                                return !0
                        }
                }
                ,
                i.prototype._rootIsInDom = function() {
                    return !this.root || s(e, this.root)
                }
                ,
                i.prototype._rootContainsTarget = function(t) {
                    return s(this.root || e, t)
                }
                ,
                i.prototype._registerInstance = function() {}
                ,
                i.prototype._unregisterInstance = function() {}
                ,
                window.IntersectionObserver = i,
                window.IntersectionObserverEntry = t
            }
        function t(e) {
            this.time = e.time,
            this.target = e.target,
            this.rootBounds = e.rootBounds,
            this.boundingClientRect = e.boundingClientRect,
            this.intersectionRect = e.intersectionRect || {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            },
            this.isIntersecting = !!e.intersectionRect;
            var t = this.boundingClientRect
              , i = t.width * t.height
              , n = this.intersectionRect
              , o = n.width * n.height;
            this.intersectionRatio = i ? Number((o / i).toFixed(4)) : this.isIntersecting ? 1 : 0
        }
        function i(e, t) {
            var i, n, o, r = t || {};
            if ("function" != typeof e)
                throw new Error("callback must be a function");
            if (r.root && 1 != r.root.nodeType)
                throw new Error("root must be an Element");
            this._checkForIntersections = (i = this._checkForIntersections.bind(this),
            n = this.THROTTLE_TIMEOUT,
            o = null,
            function() {
                o || (o = setTimeout((function() {
                    i(),
                    o = null
                }
                ), n))
            }
            ),
            this._callback = e,
            this._observationTargets = [],
            this._queuedEntries = [],
            this._rootMarginValues = this._parseRootMargin(r.rootMargin),
            this.thresholds = this._initThresholds(r.threshold),
            this.root = r.root || null,
            this.rootMargin = this._rootMarginValues.map((function(e) {
                return e.value + e.unit
            }
            )).join(" ")
        }
        function n(e, t, i, n) {
            "function" == typeof e.addEventListener ? e.addEventListener(t, i, n || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, i)
        }
        function o(e, t, i, n) {
            "function" == typeof e.removeEventListener ? e.removeEventListener(t, i, n || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, i)
        }
        function r(e) {
            var t;
            try {
                t = e.getBoundingClientRect()
            } catch (e) {}
            return t ? (t.width && t.height || (t = {
                top: t.top,
                right: t.right,
                bottom: t.bottom,
                left: t.left,
                width: t.right - t.left,
                height: t.bottom - t.top
            }),
            t) : {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }
        }
        function s(e, t) {
            for (var i = t; i; ) {
                if (i == e)
                    return !0;
                i = a(i)
            }
            return !1
        }
        function a(e) {
            var t = e.parentNode;
            return t && 11 == t.nodeType && t.host ? t.host : t && t.assignedSlot ? t.assignedSlot.parentNode : t
        }
    }(),
    c(Object.freeze({
        __proto__: null
    }));
    var lo = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    function uo(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var co = function() {
        function e(t) {
            var i = this
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
            uo(this, e),
            this.__isRunning = !1,
            this.__adsMap = new Map,
            this.__observer = new IntersectionObserver((function(e, n) {
                e.forEach((function(e) {
                    if (e.isIntersecting && i.__isRunning) {
                        var o = i.__adsMap.get(e.target.id);
                        o.hasSlot() ? t.refresh([o]) : t.render(o, {
                            services: [t.services.pubads]
                        }),
                        i.__adsMap.delete(e.target.id),
                        n.unobserve(e.target)
                    }
                }
                ))
            }
            ),{
                root: null,
                threshold: n
            })
        }
        return lo(e, [{
            key: "start",
            value: function() {
                this.__isRunning = !0
            }
        }, {
            key: "stop",
            value: function() {
                this.__isRunning = !1
            }
        }, {
            key: "destroy",
            value: function() {
                this.__adsMap.clear(),
                this.__observer.disconnect()
            }
        }, {
            key: "render",
            value: function(e) {
                e.isDisplayable() && !this.__adsMap.has(e.getId()) && (this.__adsMap.set(e.getId(), e),
                this.__observer.observe(e.getElement()))
            }
        }, {
            key: "refresh",
            value: function(e) {
                var t = this;
                e.forEach((function(e) {
                    e.isDisplayable() && !t.__adsMap.has(e.getId()) && (t.__adsMap.set(e.getId(), e),
                    t.__observer.observe(e.getElement()))
                }
                ))
            }
        }]),
        e
    }()
      , po = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    /*! AlwaysRefreshStrategy */
    var _o = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return po(e, [{
            key: "wouldRefresh",
            value: function() {
                return !0
            }
        }]),
        e
    }()
      , ho = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    /*! GroupInViewportRefreshStrategy */
    var fo = function() {
        function e(t) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.__viewability = t
        }
        return ho(e, [{
            key: "wouldRefresh",
            value: function(e) {
                var t = e.filter((function(e) {
                    return e.isDisplayable() && null === e.companionGroup()
                }
                ))
                  , i = e.filter((function(e) {
                    return e.isDisplayable() && null !== e.companionGroup() && !e.isCompanionChild()
                }
                ));
                return this.entirelyViewableGroups(i).concat(t)
            }
        }, {
            key: "entirelyViewableGroups",
            value: function(e) {
                var t = this;
                return e.reduce((function(e, i) {
                    var n = i.companionGroup().members();
                    return t.__viewability.everyViewable(n) ? e.concat(n) : e
                }
                ), [])
            }
        }]),
        e
    }()
      , bo = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    function mo(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    /*! Renderer.js */
    var vo = function() {
        function e(t, i, n) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            mo(this, e),
            this.__gpt = t,
            this.__viewability = i,
            this.__visibility = n,
            this.__strategies = o,
            this.__refreshStrategies = o,
            this.__contextifyCallbacks(),
            this.__initStrategies(),
            this.__delegateEvents(),
            this.__visibility.isVisible() && this.__start()
        }
        return bo(e, [{
            key: "__contextifyCallbacks",
            value: function() {
                this.__start = this.__start.bind(this),
                this.__stop = this.__stop.bind(this)
            }
        }, {
            key: "__delegateEvents",
            value: function() {
                this.__visibility.addDocumentVisibleEventListener(this.__start),
                this.__visibility.addDocumentInvisibleEventListener(this.__stop)
            }
        }, {
            key: "__initStrategies",
            value: function() {
                this.__strategies = this.__strategies || {
                    always: new no(this.__gpt),
                    companion: new ro(this.__gpt),
                    parameters: new ao(this.__gpt),
                    viewable: new co(this.__gpt)
                },
                this.__refreshStrategies = this.__refreshStrategies || {
                    always: new _o,
                    companion: new _o,
                    parameters: new _o,
                    viewable: new fo(this.__viewability)
                }
            }
        }, {
            key: "__start",
            value: function() {
                this.__strategies.viewable.start()
            }
        }, {
            key: "__stop",
            value: function() {
                this.__strategies.viewable.stop()
            }
        }, {
            key: "__undelegateEvents",
            value: function() {
                this.__visibility.removeDocumentVisibleEventListener(this.__start),
                this.__visibility.removeDocumentInvisibleEventListener(this.__stop)
            }
        }, {
            key: "destroy",
            value: function() {
                this.__undelegateEvents()
            }
        }, {
            key: "render",
            value: function(e, t) {
                var i = t.strategy
                  , n = void 0 === i ? "viewable" : i
                  , o = this.__strategies[n];
                if (!o)
                    throw new Error("bb.ads: Invalid rendering strategy, supports: ['always', 'companion', 'viewable']");
                o.render(e)
            }
        }, {
            key: "refresh",
            value: function(e, t) {
                var i = t.strategy
                  , n = void 0 === i ? "viewable" : i
                  , o = this.__strategies[n]
                  , r = this.__refreshStrategies[n];
                if (!o)
                    throw new Error("bb.ads: Invalid rendering strategy, supports: ['always', 'companion', 'viewable']");
                var s = r.wouldRefresh(e);
                s && o.refresh(s)
            }
        }]),
        e
    }()
      , go = "undefined" != typeof Promise ? Promise : De.Promise
      , yo = void 0
      , wo = "/trigrservice/targets"
      , ko = 100;
    function xo() {
        return yo || (Eo(),
        setInterval(Eo, 6e4),
        yo)
    }
    function Eo() {
        yo = new go((function(e) {
            var t = setTimeout(i, ko);
            function i() {
                e({
                    results: []
                }),
                clearTimeout(t)
            }
            var n = new XMLHttpRequest;
            n.addEventListener("load", (function() {
                var o;
                (o = n.status) >= 200 && o < 300 || 304 === o ? (e(JSON.parse(n.response)),
                clearTimeout(t)) : i()
            }
            )),
            n.addEventListener("error", i),
            n.addEventListener("abort", i),
            n.open("GET", wo),
            n.send()
        }
        ))
    }
    var Ao = {
        loadResults: xo,
        getResults: function() {
            return yo || xo()
        },
        setUrl: function(e) {
            (function(e) {
                return "string" == typeof e && e.length
            }
            )(e) && (wo = e)
        },
        setDeadline: function(e) {
            (function(e) {
                return "number" == typeof e && e > -1
            }
            )(e) && (ko = e)
        }
    }
      , So = u((function(e, t) {
        /*!
     * UAParser.js v0.7.21
     * Lightweight JavaScript-based User-Agent string parser
     * https://github.com/faisalman/ua-parser-js
     *
     * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
     * Licensed under MIT License
     */
        !function(i, n) {
            var o = "model"
              , r = "name"
              , s = "type"
              , a = "vendor"
              , l = "version"
              , d = "mobile"
              , u = "tablet"
              , c = "smarttv"
              , p = {
                extend: function(e, t) {
                    var i = {};
                    for (var n in e)
                        t[n] && t[n].length % 2 == 0 ? i[n] = t[n].concat(e[n]) : i[n] = e[n];
                    return i
                },
                has: function(e, t) {
                    return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                },
                lowerize: function(e) {
                    return e.toLowerCase()
                },
                major: function(e) {
                    return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0
                },
                trim: function(e) {
                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            }
              , _ = {
                rgx: function(e, t) {
                    for (var i, n, o, r, s, a, l = 0; l < t.length && !s; ) {
                        var d = t[l]
                          , u = t[l + 1];
                        for (i = n = 0; i < d.length && !s; )
                            if (s = d[i++].exec(e))
                                for (o = 0; o < u.length; o++)
                                    a = s[++n],
                                    "object" == typeof (r = u[o]) && r.length > 0 ? 2 == r.length ? "function" == typeof r[1] ? this[r[0]] = r[1].call(this, a) : this[r[0]] = r[1] : 3 == r.length ? "function" != typeof r[1] || r[1].exec && r[1].test ? this[r[0]] = a ? a.replace(r[1], r[2]) : void 0 : this[r[0]] = a ? r[1].call(this, a, r[2]) : void 0 : 4 == r.length && (this[r[0]] = a ? r[3].call(this, a.replace(r[1], r[2])) : void 0) : this[r] = a || void 0;
                        l += 2
                    }
                },
                str: function(e, t) {
                    for (var i in t)
                        if ("object" == typeof t[i] && t[i].length > 0) {
                            for (var n = 0; n < t[i].length; n++)
                                if (p.has(t[i][n], e))
                                    return "?" === i ? void 0 : i
                        } else if (p.has(t[i], e))
                            return "?" === i ? void 0 : i;
                    return e
                }
            }
              , h = {
                browser: {
                    oldsafari: {
                        version: {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {
                    amazon: {
                        model: {
                            "Fire Phone": ["SD", "KF"]
                        }
                    },
                    sprint: {
                        model: {
                            "Evo Shift 4G": "7373KT"
                        },
                        vendor: {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2e3: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        }
                    }
                }
            }
              , f = {
                browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [r, l], [/(opios)[\/\s]+([\w\.]+)/i], [[r, "Opera Mini"], l], [/\s(opr)\/([\w\.]+)/i], [[r, "Opera"], l], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i], [r, l], [/(konqueror)\/([\w\.]+)/i], [[r, "Konqueror"], l], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[r, "IE"], l], [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i], [[r, "Edge"], l], [/(yabrowser)\/([\w\.]+)/i], [[r, "Yandex"], l], [/(Avast)\/([\w\.]+)/i], [[r, "Avast Secure Browser"], l], [/(AVG)\/([\w\.]+)/i], [[r, "AVG Secure Browser"], l], [/(puffin)\/([\w\.]+)/i], [[r, "Puffin"], l], [/(focus)\/([\w\.]+)/i], [[r, "Firefox Focus"], l], [/(opt)\/([\w\.]+)/i], [[r, "Opera Touch"], l], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[r, "UCBrowser"], l], [/(comodo_dragon)\/([\w\.]+)/i], [[r, /_/g, " "], l], [/(windowswechat qbcore)\/([\w\.]+)/i], [[r, "WeChat(Win) Desktop"], l], [/(micromessenger)\/([\w\.]+)/i], [[r, "WeChat"], l], [/(brave)\/([\w\.]+)/i], [[r, "Brave"], l], [/(qqbrowserlite)\/([\w\.]+)/i], [r, l], [/(QQ)\/([\d\.]+)/i], [r, l], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [r, l], [/(baiduboxapp)[\/\s]?([\w\.]+)/i], [r, l], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [r, l], [/(MetaSr)[\/\s]?([\w\.]+)/i], [r], [/(LBBROWSER)/i], [r], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [l, [r, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [l, [r, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i], [r, l], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [l, [r, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[r, /(.+)/, "$1 WebView"], l], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[r, /(.+(?:g|us))(.+)/, "$1 $2"], l], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [l, [r, "Android Browser"]], [/(sailfishbrowser)\/([\w\.]+)/i], [[r, "Sailfish Browser"], l], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [r, l], [/(dolfin)\/([\w\.]+)/i], [[r, "Dolphin"], l], [/(qihu|qhbrowser|qihoobrowser|360browser)/i], [[r, "360 Browser"]], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[r, "Chrome"], l], [/(coast)\/([\w\.]+)/i], [[r, "Opera Coast"], l], [/fxios\/([\w\.-]+)/i], [l, [r, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [l, [r, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [l, r], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[r, "GSA"], l], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [r, [l, _.str, h.browser.oldsafari.version]], [/(webkit|khtml)\/([\w\.]+)/i], [r, l], [/(navigator|netscape)\/([\w\.-]+)/i], [[r, "Netscape"], l], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [r, l]],
                cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", p.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", p.lowerize]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [["architecture", p.lowerize]]],
                device: [[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i], [o, a, [s, u]], [/applecoremedia\/[\w\.]+ \((ipad)/], [o, [a, "Apple"], [s, u]], [/(apple\s{0,1}tv)/i], [[o, "Apple TV"], [a, "Apple"], [s, c]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [a, o, [s, u]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [o, [a, "Amazon"], [s, u]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[o, _.str, h.device.amazon.model], [a, "Amazon"], [s, d]], [/android.+aft([bms])\sbuild/i], [o, [a, "Amazon"], [s, c]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [o, a, [s, d]], [/\((ip[honed|\s\w*]+);/i], [o, [a, "Apple"], [s, d]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [a, o, [s, d]], [/\(bb10;\s(\w+)/i], [o, [a, "BlackBerry"], [s, d]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i], [o, [a, "Asus"], [s, u]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[a, "Sony"], [o, "Xperia Tablet"], [s, u]], [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [o, [a, "Sony"], [s, d]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [a, o, [s, "console"]], [/android.+;\s(shield)\sbuild/i], [o, [a, "Nvidia"], [s, "console"]], [/(playstation\s[34portablevi]+)/i], [o, [a, "Sony"], [s, "console"]], [/(sprint\s(\w+))/i], [[a, _.str, h.device.sprint.vendor], [o, _.str, h.device.sprint.model], [s, d]], [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [a, [o, /_/g, " "], [s, d]], [/(nexus\s9)/i], [o, [a, "HTC"], [s, u]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i], [o, [a, "Huawei"], [s, d]], [/android.+(bah2?-a?[lw]\d{2})/i], [o, [a, "Huawei"], [s, u]], [/(microsoft);\s(lumia[\s\w]+)/i], [a, o, [s, d]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [o, [a, "Microsoft"], [s, "console"]], [/(kin\.[onetw]{3})/i], [[o, /\./g, " "], [a, "Microsoft"], [s, d]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [o, [a, "Motorola"], [s, d]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [o, [a, "Motorola"], [s, u]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[a, p.trim], [o, p.trim], [s, c]], [/hbbtv.+maple;(\d+)/i], [[o, /^/, "SmartTV"], [a, "Samsung"], [s, c]], [/\(dtv[\);].+(aquos)/i], [o, [a, "Sharp"], [s, c]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[a, "Samsung"], o, [s, u]], [/smart-tv.+(samsung)/i], [a, [s, c], o], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[a, "Samsung"], o, [s, d]], [/sie-(\w*)/i], [o, [a, "Siemens"], [s, d]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[a, "Nokia"], o, [s, d]], [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], [o, [a, "Acer"], [s, u]], [/android.+([vl]k\-?\d{3})\s+build/i], [o, [a, "LG"], [s, u]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[a, "LG"], o, [s, u]], [/(lg) netcast\.tv/i], [a, o, [s, c]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [o, [a, "LG"], [s, d]], [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i], [a, o, [s, u]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [o, [a, "Lenovo"], [s, u]], [/(lenovo)[_\s-]?([\w-]+)/i], [a, o, [s, d]], [/linux;.+((jolla));/i], [a, o, [s, d]], [/((pebble))app\/[\d\.]+\s/i], [a, o, [s, "wearable"]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [a, o, [s, d]], [/crkey/i], [[o, "Chromecast"], [a, "Google"], [s, c]], [/android.+;\s(glass)\s\d/i], [o, [a, "Google"], [s, "wearable"]], [/android.+;\s(pixel c)[\s)]/i], [o, [a, "Google"], [s, u]], [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i], [o, [a, "Google"], [s, d]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[o, /_/g, " "], [a, "Xiaomi"], [s, d]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[o, /_/g, " "], [a, "Xiaomi"], [s, u]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [o, [a, "Meizu"], [s, d]], [/(mz)-([\w-]{2,})/i], [[a, "Meizu"], o, [s, d]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i], [o, [a, "OnePlus"], [s, d]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [o, [a, "RCA"], [s, u]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [o, [a, "Dell"], [s, u]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [o, [a, "Verizon"], [s, u]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[a, "Barnes & Noble"], o, [s, u]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [o, [a, "NuVision"], [s, u]], [/android.+;\s(k88)\sbuild/i], [o, [a, "ZTE"], [s, u]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [o, [a, "Swiss"], [s, d]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [o, [a, "Swiss"], [s, u]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [o, [a, "Zeki"], [s, u]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[a, "Dragon Touch"], o, [s, u]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [o, [a, "Insignia"], [s, u]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [o, [a, "NextBook"], [s, u]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[a, "Voice"], o, [s, d]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[a, "LvTel"], o, [s, d]], [/android.+;\s(PH-1)\s/i], [o, [a, "Essential"], [s, d]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [o, [a, "Envizen"], [s, u]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [a, o, [s, u]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [o, [a, "MachSpeed"], [s, u]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [a, o, [s, u]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [o, [a, "Rotor"], [s, u]], [/android.+(KS(.+))\s+build/i], [o, [a, "Amazon"], [s, u]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [a, o, [s, u]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[s, p.lowerize], a, o], [/[\s\/\(](smart-?tv)[;\)]/i], [[s, c]], [/(android[\w\.\s\-]{0,9});.+build/i], [o, [a, "Generic"]]],
                engine: [[/windows.+\sedge\/([\w\.]+)/i], [l, [r, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [l, [r, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [r, l], [/rv\:([\w\.]{1,9}).+(gecko)/i], [l, r]],
                os: [[/microsoft\s(windows)\s(vista|xp)/i], [r, l], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [r, [l, _.str, h.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[r, "Windows"], [l, _.str, h.os.windows.version]], [/\((bb)(10);/i], [[r, "BlackBerry"], l], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i], [r, l], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[r, "Symbian"], l], [/\((series40);/i], [r], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[r, "Firefox OS"], l], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [r, l], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[r, "Chromium OS"], l], [/(sunos)\s?([\w\.\d]*)/i], [[r, "Solaris"], l], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [r, l], [/(haiku)\s(\w+)/i], [r, l], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[l, /_/g, "."], [r, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[r, "Mac OS"], [l, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [r, l]]
            }
              , b = function(e, t) {
                if ("object" == typeof e && (t = e,
                e = void 0),
                !(this instanceof b))
                    return new b(e,t).getResult();
                var n = e || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : "")
                  , o = t ? p.extend(f, t) : f;
                return this.getBrowser = function() {
                    var e = {
                        name: void 0,
                        version: void 0
                    };
                    return _.rgx.call(e, n, o.browser),
                    e.major = p.major(e.version),
                    e
                }
                ,
                this.getCPU = function() {
                    var e = {
                        architecture: void 0
                    };
                    return _.rgx.call(e, n, o.cpu),
                    e
                }
                ,
                this.getDevice = function() {
                    var e = {
                        vendor: void 0,
                        model: void 0,
                        type: void 0
                    };
                    return _.rgx.call(e, n, o.device),
                    e
                }
                ,
                this.getEngine = function() {
                    var e = {
                        name: void 0,
                        version: void 0
                    };
                    return _.rgx.call(e, n, o.engine),
                    e
                }
                ,
                this.getOS = function() {
                    var e = {
                        name: void 0,
                        version: void 0
                    };
                    return _.rgx.call(e, n, o.os),
                    e
                }
                ,
                this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }
                ,
                this.getUA = function() {
                    return n
                }
                ,
                this.setUA = function(e) {
                    return n = e,
                    this
                }
                ,
                this
            };
            b.VERSION = "0.7.21",
            b.BROWSER = {
                NAME: r,
                MAJOR: "major",
                VERSION: l
            },
            b.CPU = {
                ARCHITECTURE: "architecture"
            },
            b.DEVICE = {
                MODEL: o,
                VENDOR: a,
                TYPE: s,
                CONSOLE: "console",
                MOBILE: d,
                SMARTTV: c,
                TABLET: u,
                WEARABLE: "wearable",
                EMBEDDED: "embedded"
            },
            b.ENGINE = {
                NAME: r,
                VERSION: l
            },
            b.OS = {
                NAME: r,
                VERSION: l
            },
            e.exports && (t = e.exports = b),
            t.UAParser = b;
            var m = i && (i.jQuery || i.Zepto);
            if (m && !m.ua) {
                var v = new b;
                m.ua = v.getResult(),
                m.ua.get = function() {
                    return v.getUA()
                }
                ,
                m.ua.set = function(e) {
                    v.setUA(e);
                    var t = v.getResult();
                    for (var i in t)
                        m.ua[i] = t[i]
                }
            }
        }("object" == typeof window ? window : d)
    }
    ))
      , jo = (So.UAParser,
    function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }());
    var To = "undefined" != typeof Promise ? Promise : De.Promise
      , zo = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this._window = Ke.getWindow(),
            this._document = Ke.getDocument(),
            this._userInfo = null
        }
        return jo(e, [{
            key: "getSessionId",
            value: function() {
                var e = this._userInfo && this._userInfo.sessionId || this._getCookieValue("session_id");
                return e ? To.resolve(e) : this.getUserInfo().then((function(e) {
                    return e.sessionId
                }
                ))
            }
        }, {
            key: "getUserInfo",
            value: function() {
                var e = this;
                return this._userInfo = this._window._regUserInfo,
                this._userInfo ? To.resolve(this._userInfo) : new To((function(t, i) {
                    e._setUserInfo = e._setUserInfo.bind(e, t),
                    e._window.addEventListener("reg-user-info-ready", e._setUserInfo),
                    setTimeout((function() {
                        i()
                    }
                    ), 500)
                }
                ))
            }
        }, {
            key: "_setUserInfo",
            value: function(e, t) {
                var i = t.detail;
                this._userInfo = i,
                e(this._userInfo)
            }
        }, {
            key: "_getCookieValue",
            value: function(e) {
                var t = this._document.cookie.match("(^|;) ?" + e + "=([^;$]*)");
                return t ? t[2] : null
            }
        }, {
            key: "destroy",
            value: function() {
                this._userInfo = null,
                this._window.removeEventListener("reg-user-info-ready", this._setUserInfo),
                this._setUserInfo = null,
                this._document = null,
                this._window = null
            }
        }]),
        e
    }()
      , Io = function(e) {
        return Object.keys(e).reduce((function(t, i) {
            return t[e[i]] = i,
            t
        }
        ), {})
    }
      , Co = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    function Lo(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    /*! Viewability.js */
    function Oo(e) {
        return e > 0 ? Math.floor(e) : Math.ceil(e)
    }
    var Po = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Lo(this, e),
            this.__invertedBreakpoints = Io(t)
        }
        return Co(e, [{
            key: "__currentBreakpoint",
            value: function() {
                var e = Ke.getWindow();
                if (!e)
                    return null;
                var t = e.innerWidth
                  , i = this.__invertedBreakpoints
                  , n = Object.keys(i).reduce((function(e, i) {
                    return t >= i ? i : e
                }
                ));
                return this.__invertedBreakpoints[n]
            }
        }, {
            key: "__isViewable",
            value: function(e, t) {
                var i = t.height
                  , n = t.width
                  , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                if (!e.offsetParent)
                    return !1;
                var r = e.getBoundingClientRect()
                  , s = r.top
                  , a = r.bottom
                  , l = r.left
                  , d = r.right
                  , u = 0 - o
                  , c = i + o;
                e = null;
                var p = Oo(s) >= u && Oo(a) <= c
                  , _ = Oo(l) >= 0 && Oo(d) <= n;
                return p && _
            }
        }, {
            key: "filter",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , i = Ke.getViewportDimensions();
                return t.filter((function(t) {
                    return e.isViewable(i, t)
                }
                ))
            }
        }, {
            key: "everyViewable",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , i = Ke.getViewportDimensions();
                return t.every((function(t) {
                    return e.isViewable(i, t)
                }
                ))
            }
        }, {
            key: "isViewable",
            value: function(e, t) {
                var i = t.getElement()
                  , n = !!i && this.__isViewable(i, e, t.getViewportOffset());
                return i = null,
                n
            }
        }, {
            key: "getSizes",
            value: function(e) {
                if (Array.isArray(e))
                    return e;
                var t = this.__currentBreakpoint()
                  , i = (e[t] || []).slice(0);
                return (e.all || []).forEach((function(e) {
                    return i.push(e)
                }
                )),
                i
            }
        }, {
            key: "isMobile",
            value: function(e) {
                return "mobile" === this.__currentBreakpoint() && "mobile"in e
            }
        }]),
        e
    }()
      , Ro = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    /*! Visibility.js */
    var Do = {
        hidden: "visibilitychange",
        webkitHidden: "webkitvisibilitychange",
        mozHidden: "mozvisibilitychange",
        msHidden: "msvisibilitychange"
    }
      , Mo = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.__document = Ke.getDocument(),
            this.__window = Ke.getWindow(),
            this.__hiddenAttribute = null,
            this.__visibleChangeEvent = null,
            this.__visibleListeners = [],
            this.__invisibleListeners = [],
            this.__useBrowserPrefixedAttributes(),
            this.__contextifyCallbacks(),
            this.__delegateEvents()
        }
        return Ro(e, [{
            key: "__contextifyCallbacks",
            value: function() {
                this.__dispatchEventListeners = this.__dispatchEventListeners.bind(this),
                this.__ie9VisibleEventListener = this.__ie9VisibleEventListener.bind(this),
                this.__ie9InvisibleEventListener = this.__ie9InvisibleEventListener.bind(this)
            }
        }, {
            key: "__delegateEvents",
            value: function() {
                this.__document && (this.__visibleChangeEvent ? this.__document.addEventListener(this.__visibleChangeEvent, this.__dispatchEventListeners) : this.__window && (this.__window.addEventListener("focus", this.__ie9VisibleEventListener),
                this.__window.addEventListener("blur", this.__ie9InvisibleEventListener)))
            }
        }, {
            key: "__dispatchEventListeners",
            value: function() {
                (this.isVisible() ? this.__visibleListeners : this.__invisibleListeners).forEach((function(e) {
                    return e()
                }
                ))
            }
        }, {
            key: "__ie9IsVisibilityChange",
            value: function(e) {
                return e.view === this.__window
            }
        }, {
            key: "__ie9VisibleEventListener",
            value: function(e) {
                this.__ie9IsVisibilityChange(e) && this.__visibleListeners.forEach((function(e) {
                    return e()
                }
                ))
            }
        }, {
            key: "__ie9InvisibleEventListener",
            value: function(e) {
                this.__ie9IsVisibilityChange(e) && this.__invisibleListeners.forEach((function(e) {
                    return e()
                }
                ))
            }
        }, {
            key: "__undelegateEvents",
            value: function() {
                this.__document && (this.__visibleChangeEvent ? this.__document.removeEventListener(this.__visibleChangeEvent, this.__dispatchEventListeners) : this.__window && (this.__window.removeEventListener("focus", this.__ie9VisibleEventListener),
                this.__window.removeEventListener("blur", this.__ie9InvisibleEventListener)))
            }
        }, {
            key: "__useBrowserPrefixedAttributes",
            value: function() {
                var e = this;
                Object.keys(Do).some((function(t) {
                    return void 0 !== e.__document[t] && (e.__hiddenAttribute = t,
                    e.__visibleChangeEvent = Do[t],
                    !0)
                }
                ))
            }
        }, {
            key: "destroy",
            value: function() {
                this.__undelegateEvents(),
                this.__visibleListeners.length = 0,
                this.__invisibleListeners.length = 0
            }
        }, {
            key: "isVisible",
            value: function() {
                return this.__document && !1 === this.__document[this.__hiddenAttribute]
            }
        }, {
            key: "addDocumentVisibleEventListener",
            value: function(e) {
                this.__visibleListeners.push(e)
            }
        }, {
            key: "removeDocumentVisibleEventListener",
            value: function(e) {
                this.__visibleListeners = this.__visibleListeners.filter((function(t) {
                    return t !== e
                }
                ))
            }
        }, {
            key: "addDocumentInvisibleEventListener",
            value: function(e) {
                this.__invisibleListeners.push(e)
            }
        }, {
            key: "removeDocumentInvisibleEventListener",
            value: function(e) {
                this.__invisibleListeners = this.__invisibleListeners.filter((function(t) {
                    return t !== e
                }
                ))
            }
        }]),
        e
    }()
      , Bo = function(e, t) {
        if (Array.isArray(e))
            return e;
        if (Symbol.iterator in Object(e))
            return function(e, t) {
                var i = []
                  , n = !0
                  , o = !1
                  , r = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value),
                    !t || i.length !== t); n = !0)
                        ;
                } catch (e) {
                    o = !0,
                    r = e
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o)
                            throw r
                    }
                }
                return i
            }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
      , Uo = "undefined" != typeof Promise ? Promise : De.Promise;
    var qo = {
        _initialized: !1,
        _initQueue: [],
        init: function(e) {
            var t = this
              , i = e.networkCode
              , n = e.breakpoints
              , o = e.adCodeDecorator
              , r = void 0 === o ? Yn : o
              , s = e.adBlockerShouldBeBlocked
              , a = void 0 === s || s
              , l = e.headerBiddingShouldBeDisabled
              , d = void 0 !== l && l
              , u = e.trigrUrl
              , c = e.trigrDeadline;
            this.adCodeDecoratorFunction = r,
            this.adDebugRegistry = new Ot,
            this.companionGroupCoordinator = new Bt,
            this.postMessages = new to,
            this.viewability = new Po(n),
            this.visibility = new Mo,
            this.userInfo = new zo,
            this.headerBidding = new Ji(d),
            this.ix = new Xn(d),
            this.gpt = new ki(i,this.headerBidding,this.ix),
            this.renderer = new vo(this.gpt,this.viewability,this.visibility),
            this._targets = [],
            this._window = Ke.getWindow(),
            Ao.setUrl(u),
            Ao.setDeadline(c),
            Ao.loadResults();
            var p = (new So).getBrowser()
              , _ = p.name
              , h = p.major;
            return this.gpt.setTargeting("browser", "" + _ + h),
            this.destroyables = [this.adDebugRegistry, this.companionGroupCoordinator, this.gpt, this.postMessages, this.renderer, this.userInfo, this.visibility],
            this._window.onbeforeunload = function() {
                t.destroy()
            }
            ,
            Nt.waitForUserConsent().then((function() {
                t._initialized = !0,
                ci.init(),
                fi.init(),
                a && vt.blockTheAdBlocker(),
                ci.loadPET(),
                fi.loadMoatYI(),
                t._initQueue.push = function(e) {
                    return e()
                }
                ,
                t._flushInitQueue()
            }
            )).catch((function(e) {
                console.error("BBAds: Failed to collect user consent", e)
            }
            ))
        },
        destroy: function() {
            (this.destroyables || []).forEach((function(e) {
                return e.destroy()
            }
            )),
            this.adCodeDecoratorFunction = null,
            this.adDebugRegistry = null,
            this.companionGroupCoordinator = null,
            this.gpt = null,
            this.postMessages = null,
            this.renderer = null,
            this.viewability = null,
            this.visibility = null,
            this._window.onbeforeunload = null,
            this._window = null,
            this._targets = null
        },
        createAd: function(e) {
            var t = this;
            if (!this._initialized)
                return this._enqueue((function() {
                    return t.createAd(e)
                }
                ));
            var i = e.containerId
              , n = e.adCode
              , o = e.dimensions
              , r = e.targeting
              , s = e.strategy
              , a = e.viewportOffset
              , l = void 0 === a ? 0 : a
              , d = e.targetingModifiers
              , u = void 0 === d ? [] : d
              , c = e.isInterstitial
              , p = void 0 !== c && c;
            if (!(i && n && o))
                throw new Error("bb.ads#createAd requires containerId, adCode and dimensions " + i + ", " + n + ", " + o);
            var _, h = (_ = r,
            u.reduce((function(e, t) {
                return t(e)
            }
            ), _)), f = this.gpt.createAd(i, this.adCodeDecoratorFunction(n), this.viewability.getSizes(o), h, this.viewability.isMobile(o)).setViewportOffset(l).setInterstitialFlag(p);
            return this.adDebugRegistry.push(f, i),
            this.postMessages.addEventListener(f.getId(), "setIframeHeight", function(e) {
                return function(t) {
                    var i = t.height;
                    return e.setHeight(i)
                }
            }(f)),
            this.postMessages.addEventListener(f.getId(), "setIframeDimensions", function(e) {
                return function(t) {
                    var i = t.width
                      , n = t.height;
                    return e.setDimensions(i, n)
                }
            }(f)),
            Uo.all([Ao.getResults(), Nt.getGDPRApplies(), Nt.getUSPrivacyString(), Nt.getIABConsent(), this.headerBidding.isReady().catch((function() {}
            )), this.ix.isReady().catch((function() {}
            )), this.gpt.setPersonalization(this.userInfo)]).then((function(e) {
                var i = Bo(e, 4)
                  , n = i[0]
                  , o = i[1]
                  , r = i[2]
                  , a = i[3]
                  , l = (n.results ? n.results : n.value.results) || [];
                return f.addTargeting({
                    gdpr: o ? "1" : "0"
                }),
                f.addTargeting({
                    us_privacy: r
                }),
                f.addTargeting({
                    gdpr_consent: a
                }),
                f.addTargeting({
                    tr: l.join(",")
                }),
                t.renderer.render(f, {
                    strategy: s
                }),
                f
            }
            ))
        },
        getCompanionGroup: function(e) {
            return this.companionGroupCoordinator.findOrCreate(e)
        },
        clearAllCompanionChildren: function() {
            this.companionGroupCoordinator.clearAllChildren()
        },
        createInterstitialAd: function(e) {
            return Object.defineProperty(e, "isInterstitial", {
                value: !0
            }),
            Object.defineProperty(e, "strategy", {
                value: "always"
            }),
            Object.defineProperty(e, "dimensions", {
                value: [0]
            }),
            this.createAd.call(this, e)
        },
        disableCompanionAdBackfilling: function() {
            var e = this;
            return this._initialized ? (this.gpt.setRefreshUnfilledSlots(!1),
            this) : (this._enqueue((function() {
                return e.gpt.setRefreshUnfilledSlots(!1)
            }
            )),
            this)
        },
        enableCompanionAdBackfilling: function() {
            var e = this;
            return this._initialized ? (this.gpt.setRefreshUnfilledSlots(!0),
            this) : (this._enqueue((function() {
                return e.gpt.setRefreshUnfilledSlots(!0)
            }
            )),
            this)
        },
        enableVideoAds: function() {
            var e = this;
            return this._initialized ? (this.gpt.enableVideoAds(),
            this) : (this._enqueue((function() {
                return e.gpt.enableVideoAds(!0)
            }
            )),
            this)
        },
        refresh: function(e) {
            var t = this
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!this._initialized)
                return this._enqueue((function() {
                    return t.renderer.refresh(e, i)
                }
                )),
                this;
            this.renderer.refresh(e, i)
        },
        updateCorrelator: function() {
            var e = this;
            return this._initialized ? (this.gpt.updateCorrelator(),
            this) : (this._enqueue((function() {
                return e.gpt.updateCorrelator()
            }
            )),
            this)
        },
        showDebugInformation: function() {
            return this.adDebugRegistry.showDebugInformation(),
            this
        },
        showDebugInformationOnRender: function() {
            return this.adDebugRegistry.showDebugInformationOnRender(),
            this
        },
        GPT: {
            html: ki.html
        },
        _enqueue: function(e) {
            var t = this;
            return new Uo((function(i) {
                t._initQueue.push((function() {
                    return i(e())
                }
                ))
            }
            ))
        },
        _flushInitQueue: function() {
            for (var e = void 0; e = this._initQueue.shift(); )
                "function" == typeof e && e()
        }
    }
      , No = 0
      , Vo = function() {
        var e = qo
          , t = new Re(window.location.search);
        e.init({
            networkCode: "5262",
            breakpoints: {
                mobile: 0,
                tablet: 760,
                small_desktop: 1020,
                large_desktop: 1280
            }
        }),
        e.__registry = {},
        e.disableCompanionAdBackfilling(),
        "true" === t.getValue("debugAds") && e.showDebugInformationOnRender();
        return {
            createAd: function(i, n, o) {
                e.createAd({
                    adCode: window.config.ad_code,
                    dimensions: n,
                    containerId: i,
                    viewportOffset: 0,
                    targeting: Object.assign({
                        suid: window.config.bb_groupId,
                        page: "interactive",
                        sites: window.config.bb_brand,
                        url: "/" + window.config.org + "/" + window.config.bb_slug,
                        position: o
                    }, t.__queryObject)
                }).then((function(t) {
                    t.onEmpty((function(e) {}
                    )),
                    t.onRender((function(e) {}
                    )),
                    function(t, i) {
                        e.__registry[t] || (e.__registry[t] = []),
                        e.__registry[t].push(i)
                    }(o, t)
                }
                )).catch((function(e) {
                    console.error("Could not instantiate ad:", i, "Error:", e)
                }
                ))
            },
            refresh: function(t) {
                e.__registry[t] && e.refresh(e.__registry[t])
            }
        }
    }()
      , Fo = {
        mobile: [[5, 16], [1, 1]],
        tablet: [[728, 90], [5, 16], [1, 1]],
        small_desktop: [[728, 90], [970, 250], [5, 16], [1, 1]],
        large_desktop: [[728, 90], [970, 250], [5, 16], [1, 1]]
    }
      , Ho = {
        mobile: [[300, 250]],
        tablet: [[728, 90]],
        small_desktop: [[728, 90]],
        large_desktop: [[728, 90]]
    };
    function Go(e) {
        if (e && e.match && e.match(/^(\d+x\d+)(,\s*\d+x\d+)*$/)) {
            for (var t, i = [], n = e.replace(/\s/g, "").split(","), o = 0; o < n.length; o++)
                t = n[o].split("x"),
                i.push([parseInt(t[0], 10), parseInt(t[1], 10)]);
            return i
        }
    }
    function Wo(e, t) {
        var i = function i() {
            e.getBoundingClientRect().top <= 0 && (t.classList.add("dvz-v0-ad-stuck"),
            setTimeout((function() {
                window.removeEventListener("scroll", i, !1),
                t.classList.add("dvz-v0-ad-hide"),
                setTimeout((function() {
                    t.classList.remove("dvz-v0-ad-stuck"),
                    t.classList.remove("dvz-v0-ad-hide")
                }
                ), 400)
            }
            ), 3e3))
        };
        window.addEventListener("scroll", i, !1),
        setTimeout((function() {
            window.removeEventListener("scroll", i, !1)
        }
        ), 3e3)
    }
    function Jo() {
        for (var e = document.querySelectorAll(".dvz-v0-ad:empty"), t = 0, i = e.length; t < i; t++) {
            var n = e[t]
              , o = n.dataset
              , r = document.createElement("div")
              , s = No++
              , a = "dvz-v0-ad-" + s;
            r.setAttribute("id", a),
            r.classList.add("dvz-v0-ad-div");
            var l = "true" === o.adSticky || n.classList.contains("dvz-v0-ad-top")
              , d = o.adPosition || (l ? "leaderboard" : "immersive") + (s + 1)
              , u = l ? Fo : Ho;
            if (!!(o.adSizesMobile || o.adSizesTablet || o.adSizesSmallDesktop || o.adSizesLargeDesktop || o.adSizesDesktop)) {
                var c = Go(o.adSizesDesktop);
                u = {
                    mobile: Go(o.adSizesMobile),
                    tablet: Go(o.adSizesTablet),
                    small_desktop: c || Go(o.adSizesSmallDesktop),
                    large_desktop: c || Go(o.adSizesLargeDesktop)
                }
            }
            n.textContent = "",
            n.appendChild(r),
            Vo.createAd(a, u, d),
            l && Wo(n, r)
        }
    }
    if (window.isTerminal)
        for (var $o = document.querySelectorAll(".dvz-v0-ad"), Qo = 0, Xo = $o.length; Qo < Xo; Qo++)
            $o[Qo].style.display = "none";
    else
        window._fence ? window._fence.ready((function() {
            window._fence.isBlockedPromise.then((function(e) {
                e.isBlocked && e.isUsingOverlay ? window._fence.addEventListener("onSubscribe", Jo) : Jo()
            }
            )).catch((function(e) {
                Jo()
            }
            ))
        }
        )) : Jo(),
        window.dvz_loadAds = Jo
}();
