! function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.math = t() : e.math = t()
}(this, function() {
	return function(e) {
		function t(n) {
			if (r[n]) return r[n].exports;
			var i = r[n] = {
				exports: {},
				id: n,
				loaded: !1
			};
			return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
		}
		var r = {};
		return t.m = e, t.c = r, t.p = "", t(0)
	}([function(e, t, r) {
		function n(e) {
			var t = i.create(e);
			return t.create = n, t["import"](r(13)), t
		}
		var i = r(1);
		e.exports = n()
	}, function(e, t, r) {
		e.exports = r(2)
	}, function(e, t, r) {
		var n = r(3).isFactory,
			i = r(3).deepExtend,
			a = r(4),
			o = r(8),
			s = r(10),
			u = r(12);
		t.create = function(e) {
			function t(e) {
				if (!n(e)) throw new Error("Factory object with properties `type`, `name`, and `factory` expected");
				var i, a = r.indexOf(e);
				return -1 === a ? (i = e.math === !0 ? e.factory(f.type, l, t, f.typed, f) : e.factory(f.type, l, t, f.typed), r.push(e), c.push(i)) : i = c[a], i
			}
			if ("function" != typeof Object.create) throw new Error("ES5 not supported by this JavaScript engine. Please load the es5-shim and es5-sham library for compatibility.");
			var r = [],
				c = [],
				f = o.mixin({});
			f.type = {}, f.expression = {
				transform: Object.create(f)
			}, f.typed = a.create(f.type);
			var l = {
				epsilon: 1e-14,
				matrix: "matrix",
				number: "number",
				precision: 64,
				predictable: !1
			};
			return e && i(l, e), f["import"] = t(s), f.config = t(u), f
		}
	}, function(e, t) {
		"use strict";
		t.clone = function r(e) {
			var t = typeof e;
			if ("number" === t || "string" === t || "boolean" === t || null === e || void 0 === e) return e;
			if ("function" == typeof e.clone) return e.clone();
			if (Array.isArray(e)) return e.map(function(e) {
				return r(e)
			});
			if (e instanceof Number) return new Number(e.valueOf());
			if (e instanceof String) return new String(e.valueOf());
			if (e instanceof Boolean) return new Boolean(e.valueOf());
			if (e instanceof Date) return new Date(e.valueOf());
			if (e && e.isBigNumber === !0) return e;
			if (e instanceof RegExp) throw new TypeError("Cannot clone " + e);
			var n = {};
			for (var i in e) e.hasOwnProperty(i) && (n[i] = r(e[i]));
			return n
		}, t.extend = function(e, t) {
			for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
			return e
		}, t.deepExtend = function n(e, t) {
			if (Array.isArray(t)) throw new TypeError("Arrays are not supported by deepExtend");
			for (var r in t)
				if (t.hasOwnProperty(r))
					if (t[r] && t[r].constructor === Object) void 0 === e[r] && (e[r] = {}), e[r].constructor === Object ? n(e[r], t[r]) : e[r] = t[r];
					else {
						if (Array.isArray(t[r])) throw new TypeError("Arrays are not supported by deepExtend");
						e[r] = t[r]
					}
			return e
		}, t.deepEqual = function(e, r) {
			var n, i, a;
			if (Array.isArray(e)) {
				if (!Array.isArray(r)) return !1;
				if (e.length != r.length) return !1;
				for (i = 0, a = e.length; a > i; i++)
					if (!t.deepEqual(e[i], r[i])) return !1;
				return !0
			}
			if (e instanceof Object) {
				if (Array.isArray(r) || !(r instanceof Object)) return !1;
				for (n in e)
					if (!t.deepEqual(e[n], r[n])) return !1;
				for (n in r)
					if (!t.deepEqual(e[n], r[n])) return !1;
				return !0
			}
			return typeof e == typeof r && e == r
		}, t.canDefineProperty = function() {
			try {
				if (Object.defineProperty) return Object.defineProperty({}, "x", {
					get: function() {}
				}), !0
			} catch (e) {}
			return !1
		}, t.lazy = function(e, r, n) {
			if (t.canDefineProperty()) {
				var i, a = !0;
				Object.defineProperty(e, r, {
					get: function() {
						return a && (i = n(), a = !1), i
					},
					set: function(e) {
						i = e, a = !1
					},
					configurable: !0,
					enumerable: !0
				})
			} else e[r] = n()
		}, t.traverse = function(e, t) {
			var r = e;
			if (t)
				for (var n = t.split("."), i = 0; i < n.length; i++) {
					var a = n[i];
					a in r || (r[a] = {}), r = r[a]
				}
			return r
		}, t.isFactory = function(e) {
			return e && "function" == typeof e.factory
		}
	}, function(e, t, r) {
		var n = r(5),
			i = r(6).digits,
			a = function() {
				return a = n.create, n
			};
		t.create = function(e) {
			var t = a();
			return t.types = [{
				name: "number",
				test: function(e) {
					return "number" == typeof e
				}
			}, {
				name: "Complex",
				test: function(e) {
					return e && e.isComplex
				}
			}, {
				name: "BigNumber",
				test: function(e) {
					return e && e.isBigNumber
				}
			}, {
				name: "Fraction",
				test: function(e) {
					return e && e.isFraction
				}
			}, {
				name: "Unit",
				test: function(e) {
					return e && e.isUnit
				}
			}, {
				name: "string",
				test: function(e) {
					return "string" == typeof e
				}
			}, {
				name: "Array",
				test: Array.isArray
			}, {
				name: "Matrix",
				test: function(e) {
					return e && e.isMatrix
				}
			}, {
				name: "DenseMatrix",
				test: function(e) {
					return e && e.isDenseMatrix
				}
			}, {
				name: "SparseMatrix",
				test: function(e) {
					return e && e.isSparseMatrix
				}
			}, {
				name: "ImmutableDenseMatrix",
				test: function(e) {
					return e && e.isImmutableDenseMatrix
				}
			}, {
				name: "Range",
				test: function(e) {
					return e && e.isRange
				}
			}, {
				name: "Index",
				test: function(e) {
					return e && e.isIndex
				}
			}, {
				name: "boolean",
				test: function(e) {
					return "boolean" == typeof e
				}
			}, {
				name: "ResultSet",
				test: function(e) {
					return e && e.isResultSet
				}
			}, {
				name: "Help",
				test: function(e) {
					return e && e.isHelp
				}
			}, {
				name: "function",
				test: function(e) {
					return "function" == typeof e
				}
			}, {
				name: "Date",
				test: function(e) {
					return e instanceof Date
				}
			}, {
				name: "RegExp",
				test: function(e) {
					return e instanceof RegExp
				}
			}, {
				name: "Object",
				test: function(e) {
					return "object" == typeof e
				}
			}, {
				name: "null",
				test: function(e) {
					return null === e
				}
			}, {
				name: "undefined",
				test: function(e) {
					return void 0 === e
				}
			}], t.conversions = [{
				from: "number",
				to: "BigNumber",
				convert: function(t) {
					if (i(t) > 15) throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + t + "). Use function bignumber(x) to convert to BigNumber.");
					return new e.BigNumber(t)
				}
			}, {
				from: "number",
				to: "Complex",
				convert: function(t) {
					return new e.Complex(t, 0)
				}
			}, {
				from: "number",
				to: "string",
				convert: function(e) {
					return e + ""
				}
			}, {
				from: "BigNumber",
				to: "Complex",
				convert: function(t) {
					return new e.Complex(t.toNumber(), 0)
				}
			}, {
				from: "number",
				to: "Fraction",
				convert: function(t) {
					if (i(t) > 15) throw new TypeError("Cannot implicitly convert a number with >15 significant digits to Fraction (value: " + t + "). Use function fraction(x) to convert to Fraction.");
					return new e.Fraction(t)
				}
			}, {
				from: "string",
				to: "number",
				convert: function(e) {
					var t = Number(e);
					if (isNaN(t)) throw new Error('Cannot convert "' + e + '" to a number');
					return t
				}
			}, {
				from: "boolean",
				to: "number",
				convert: function(e) {
					return +e
				}
			}, {
				from: "boolean",
				to: "BigNumber",
				convert: function(t) {
					return new e.BigNumber(+t)
				}
			}, {
				from: "boolean",
				to: "string",
				convert: function(e) {
					return +e
				}
			}, {
				from: "null",
				to: "number",
				convert: function() {
					return 0
				}
			}, {
				from: "null",
				to: "string",
				convert: function() {
					return "null"
				}
			}, {
				from: "null",
				to: "BigNumber",
				convert: function() {
					return new e.BigNumber(0)
				}
			}, {
				from: "Array",
				to: "Matrix",
				convert: function(t) {
					return new e.DenseMatrix(t)
				}
			}, {
				from: "Matrix",
				to: "Array",
				convert: function(e) {
					return e.valueOf()
				}
			}], t
		}
	}, function(e, t, r) {
		var n, i, a;
		! function(r) {
			i = [], n = r, a = "function" == typeof n ? n.apply(t, i) : n, !(void 0 !== a && (e.exports = a))
		}(function() {
			function e() {
				function t(e) {
					for (var t, r = 0; r < N.types.length; r++) {
						var n = N.types[r];
						if (n.name === e) {
							t = n.test;
							break
						}
					}
					if (!t) {
						var i;
						for (r = 0; r < N.types.length; r++)
							if (n = N.types[r], n.name.toLowerCase() == e.toLowerCase()) {
								i = n.name;
								break
							}
						throw new Error('Unknown type "' + e + '"' + (i ? '. Did you mean "' + i + '"?' : ""))
					}
					return t
				}

				function r(e) {
					for (var t = "", r = 0; r < e.length; r++) {
						var n = e[r];
						if ("" != n.name)
							if ("" == t) t = n.name;
							else if (t != n.name) {
							var i = new Error("Function names do not match (expected: " + t + ", actual: " + n.name + ")");
							throw i.data = {
								actual: n.name,
								expected: t
							}, i
						}
					}
					return t
				}

				function n(e, t, r, n, i) {
					var a, o = h(n),
						s = i ? i.split(",") : null,
						u = e || "unnamed",
						c = s && g(s, "any"),
						f = {
							fn: e,
							index: r,
							actual: n,
							expected: s
						};
					a = s ? t > r && !c ? "Unexpected type of argument in function " + u + " (expected: " + s.join(" or ") + ", actual: " + o + ", index: " + r + ")" : "Too few arguments in function " + u + " (expected: " + s.join(" or ") + ", index: " + r + ")" : "Too many arguments in function " + u + " (expected: " + r + ", actual: " + t + ")";
					var l = new TypeError(a);
					return l.data = f, l
				}

				function i(e) {
					this.name = e || "refs", this.categories = {}
				}

				function a(e, t) {
					if ("string" == typeof e) {
						var r = e.trim(),
							n = "..." === r.substr(0, 3);
						if (n && (r = r.substr(3)), "" === r) this.types = ["any"];
						else {
							this.types = r.split("|");
							for (var i = 0; i < this.types.length; i++) this.types[i] = this.types[i].trim()
						}
					} else {
						if (!Array.isArray(e)) {
							if (e instanceof a) return e.clone();
							throw new Error("String or Array expected")
						}
						this.types = e
					}
					this.conversions = [], this.varArgs = n || t || !1, this.anyType = -1 !== this.types.indexOf("any")
				}

				function o(e, t) {
					var r;
					if ("string" == typeof e) r = "" !== e ? e.split(",") : [];
					else {
						if (!Array.isArray(e)) throw new Error("string or Array expected");
						r = e
					}
					this.params = new Array(r.length);
					for (var n = 0; n < r.length; n++) {
						var i = new a(r[n]);
						if (this.params[n] = i, n === r.length - 1) this.varArgs = i.varArgs;
						else if (i.varArgs) throw new SyntaxError('Unexpected variable arguments operator "..."')
					}
					this.fn = t
				}

				function s(e, t, r) {
					this.path = e || [], this.param = e[e.length - 1] || null, this.signature = t || null, this.childs = r || []
				}

				function u(e) {
					var t, r, n = {},
						i = [];
					for (var a in e)
						if (e.hasOwnProperty(a)) {
							var s = e[a];
							if (t = new o(a, s), t.ignore()) continue;
							var u = t.expand();
							for (r = 0; r < u.length; r++) {
								var c = u[r],
									f = c.toString(),
									l = n[f];
								if (l) {
									var p = o.compare(c, l);
									if (0 > p) n[f] = c;
									else if (0 === p) throw new Error('Signature "' + f + '" is defined twice')
								} else n[f] = c
							}
						}
					for (f in n) n.hasOwnProperty(f) && i.push(n[f]);
					for (i.sort(function(e, t) {
							return o.compare(e, t)
						}), r = 0; r < i.length; r++)
						if (t = i[r], t.varArgs)
							for (var m = t.params.length - 1, h = t.params[m], v = 0; v < h.types.length;) {
								if (h.conversions[v])
									for (var d = h.types[v], y = 0; y < i.length; y++) {
										var x = i[y],
											b = x.params[m];
										if (x !== t && b && g(b.types, d) && !b.conversions[m]) {
											h.types.splice(v, 1), h.conversions.splice(v, 1), v--;
											break
										}
									}
								v++
							}
					return i
				}

				function c(e) {
					for (var t = {}, r = 0; r < e.length; r++) {
						var n = e[r];
						if (n.fn && !n.hasConversions()) {
							var i = n.params.join(",");
							t[i] = n.fn
						}
					}
					return t
				}

				function f(e, t) {
					var r, n, i, o = t.length,
						u = [];
					for (r = 0; r < e.length; r++) n = e[r], n.params.length !== o || i || (i = n), void 0 != n.params[o] && u.push(n);
					u.sort(function(e, t) {
						return a.compare(e.params[o], t.params[o])
					});
					var c = [];
					for (r = 0; r < u.length; r++) {
						n = u[r];
						var l = n.params[o],
							p = c.filter(function(e) {
								return e.param.overlapping(l)
							})[0];
						if (p) {
							if (p.param.varArgs) throw new Error('Conflicting types "' + p.param + '" and "' + l + '"');
							p.signatures.push(n)
						} else c.push({
							param: l,
							signatures: [n]
						})
					}
					var m = new Array(c.length);
					for (r = 0; r < c.length; r++) {
						var h = c[r];
						m[r] = f(h.signatures, t.concat(h.param))
					}
					return new s(t, i, m)
				}

				function l(e) {
					for (var t = [], r = 0; e > r; r++) t[r] = "arg" + r;
					return t
				}

				function p(e, t) {
					var r = new i,
						a = u(t);
					if (0 == a.length) throw new Error("No signatures provided");
					var o = f(a, []),
						s = [],
						p = e || "",
						h = l(m(a));
					s.push("function " + p + "(" + h.join(", ") + ") {"), s.push('  "use strict";'), s.push("  var name = '" + p + "';"), s.push(o.toCode(r, "  ")), s.push("}");
					var g = [r.toCode(), "return " + s.join("\n")].join("\n"),
						v = new Function(r.name, "createError", g),
						d = v(r, n);
					return d.signatures = c(a), d
				}

				function m(e) {
					for (var t = 0, r = 0; r < e.length; r++) {
						var n = e[r].params.length;
						n > t && (t = n)
					}
					return t
				}

				function h(e) {
					for (var t, r = 0; r < N.types.length; r++) {
						var n = N.types[r];
						if ("Object" === n.name) t = n;
						else if (n.test(e)) return n.name
					}
					return t && t.test(e) ? t.name : "unknown"
				}

				function g(e, t) {
					return -1 !== e.indexOf(t)
				}

				function v(e, t) {
					if (!e.signatures) throw new TypeError("Function is no typed-function");
					var r;
					if ("string" == typeof t) {
						r = t.split(",");
						for (var n = 0; n < r.length; n++) r[n] = r[n].trim()
					} else {
						if (!Array.isArray(t)) throw new TypeError("String array or a comma separated string expected");
						r = t
					}
					var i = r.join(","),
						a = e.signatures[i];
					if (a) return a;
					throw new TypeError("Signature not found (signature: " + (e.name || "unnamed") + "(" + r.join(", ") + "))")
				}

				function d(e, t) {
					var r = h(e);
					if (t === r) return e;
					for (var n = 0; n < N.conversions.length; n++) {
						var i = N.conversions[n];
						if (i.from === r && i.to === t) return i.convert(e)
					}
					throw new Error("Cannot convert from " + r + " to " + t)
				}
				i.prototype.add = function(e, t) {
					var r = t || "fn";
					this.categories[r] || (this.categories[r] = []);
					var n = this.categories[r].indexOf(e);
					return -1 == n && (n = this.categories[r].length, this.categories[r].push(e)), r + n
				}, i.prototype.toCode = function() {
					var e = [],
						t = this.name + ".categories",
						r = this.categories;
					for (var n in r)
						if (r.hasOwnProperty(n))
							for (var i = r[n], a = 0; a < i.length; a++) e.push("var " + n + a + " = " + t + "['" + n + "'][" + a + "];");
					return e.join("\n")
				}, a.compare = function(e, t) {
					if (e.anyType) return 1;
					if (t.anyType) return -1;
					if (g(e.types, "Object")) return 1;
					if (g(t.types, "Object")) return -1;
					if (e.hasConversions()) {
						if (t.hasConversions()) {
							var r, n, i;
							for (r = 0; r < e.conversions.length; r++)
								if (void 0 !== e.conversions[r]) {
									n = e.conversions[r];
									break
								}
							for (r = 0; r < t.conversions.length; r++)
								if (void 0 !== t.conversions[r]) {
									i = t.conversions[r];
									break
								}
							return N.conversions.indexOf(n) - N.conversions.indexOf(i)
						}
						return 1
					}
					if (t.hasConversions()) return -1;
					var a, o;
					for (r = 0; r < N.types.length; r++)
						if (N.types[r].name === e.types[0]) {
							a = r;
							break
						}
					for (r = 0; r < N.types.length; r++)
						if (N.types[r].name === t.types[0]) {
							o = r;
							break
						}
					return a - o
				}, a.prototype.overlapping = function(e) {
					for (var t = 0; t < this.types.length; t++)
						if (g(e.types, this.types[t])) return !0;
					return !1
				}, a.prototype.clone = function() {
					var e = new a(this.types.slice(), this.varArgs);
					return e.conversions = this.conversions.slice(), e
				}, a.prototype.hasConversions = function() {
					return this.conversions.length > 0
				}, a.prototype.contains = function(e) {
					for (var t = 0; t < this.types.length; t++)
						if (e[this.types[t]]) return !0;
					return !1
				}, a.prototype.toString = function(e) {
					for (var t = [], r = {}, n = 0; n < this.types.length; n++) {
						var i = this.conversions[n],
							a = e && i ? i.to : this.types[n];
						a in r || (r[a] = !0, t.push(a))
					}
					return (this.varArgs ? "..." : "") + t.join("|")
				}, o.prototype.clone = function() {
					return new o(this.params.slice(), this.fn)
				}, o.prototype.expand = function() {
					function e(r, n) {
						if (n.length < r.params.length) {
							var i, s, u, c = r.params[n.length];
							if (c.varArgs) {
								for (s = c.clone(), i = 0; i < N.conversions.length; i++)
									if (u = N.conversions[i], !g(c.types, u.from) && g(c.types, u.to)) {
										var f = s.types.length;
										s.types[f] = u.from, s.conversions[f] = u
									}
								e(r, n.concat(s))
							} else {
								for (i = 0; i < c.types.length; i++) e(r, n.concat(new a(c.types[i])));
								for (i = 0; i < N.conversions.length; i++) u = N.conversions[i], !g(c.types, u.from) && g(c.types, u.to) && (s = new a(u.from), s.conversions[0] = u, e(r, n.concat(s)))
							}
						} else t.push(new o(n, r.fn))
					}
					var t = [];
					return e(this, []), t
				}, o.compare = function(e, t) {
					if (e.params.length > t.params.length) return 1;
					if (e.params.length < t.params.length) return -1;
					var r, n = e.params.length,
						i = 0,
						o = 0;
					for (r = 0; n > r; r++) e.params[r].hasConversions() && i++, t.params[r].hasConversions() && o++;
					if (i > o) return 1;
					if (o > i) return -1;
					for (r = 0; r < e.params.length; r++) {
						var s = a.compare(e.params[r], t.params[r]);
						if (0 !== s) return s
					}
					return 0
				}, o.prototype.hasConversions = function() {
					for (var e = 0; e < this.params.length; e++)
						if (this.params[e].hasConversions()) return !0;
					return !1
				}, o.prototype.ignore = function() {
					for (var e = {}, t = 0; t < N.ignore.length; t++) e[N.ignore[t]] = !0;
					for (t = 0; t < this.params.length; t++)
						if (this.params[t].contains(e)) return !0;
					return !1
				}, o.prototype.toCode = function(e, t) {
					for (var r = [], n = new Array(this.params.length), i = 0; i < this.params.length; i++) {
						var a = this.params[i],
							o = a.conversions[0];
						a.varArgs ? n[i] = "varArgs" : o ? n[i] = e.add(o.convert, "convert") + "(arg" + i + ")" : n[i] = "arg" + i
					}
					var s = this.fn ? e.add(this.fn, "signature") : void 0;
					return s ? t + "return " + s + "(" + n.join(", ") + "); // signature: " + this.params.join(", ") : r.join("\n")
				}, o.prototype.toString = function() {
					return this.params.join(", ")
				}, s.prototype.toCode = function(e, r, n) {
					var i = [];
					if (this.param) {
						var a = this.path.length - 1,
							o = this.param.conversions[0],
							s = "// type: " + (o ? o.from + " (convert to " + o.to + ")" : this.param);
						if (this.param.varArgs)
							if (this.param.anyType) i.push(r + "if (arguments.length > " + a + ") {"), i.push(r + "  var varArgs = [];"), i.push(r + "  for (var i = " + a + "; i < arguments.length; i++) {"), i.push(r + "    varArgs.push(arguments[i]);"), i.push(r + "  }"), i.push(this.signature.toCode(e, r + "  ")), i.push(r + "}");
							else {
								for (var u = function(r, n) {
										for (var i = [], a = 0; a < r.length; a++) i[a] = e.add(t(r[a]), "test") + "(" + n + ")";
										return i.join(" || ")
									}.bind(this), c = this.param.types, f = [], l = 0; l < c.length; l++) void 0 === this.param.conversions[l] && f.push(c[l]);
								i.push(r + "if (" + u(c, "arg" + a) + ") { " + s), i.push(r + "  var varArgs = [arg" + a + "];"), i.push(r + "  for (var i = " + (a + 1) + "; i < arguments.length; i++) {"), i.push(r + "    if (" + u(f, "arguments[i]") + ") {"), i.push(r + "      varArgs.push(arguments[i]);");
								for (var l = 0; l < c.length; l++) {
									var p = this.param.conversions[l];
									if (p) {
										var m = e.add(t(c[l]), "test"),
											h = e.add(p.convert, "convert");
										i.push(r + "    }"), i.push(r + "    else if (" + m + "(arguments[i])) {"), i.push(r + "      varArgs.push(" + h + "(arguments[i]));")
									}
								}
								i.push(r + "    } else {"), i.push(r + "      throw createError(name, arguments.length, i, arguments[i], '" + f.join(",") + "');"), i.push(r + "    }"), i.push(r + "  }"), i.push(this.signature.toCode(e, r + "  ")), i.push(r + "}")
							}
						else if (this.param.anyType) i.push(r + "// type: any"), i.push(this._innerCode(e, r, n));
						else {
							var g = this.param.types[0],
								m = "any" !== g ? e.add(t(g), "test") : null;
							i.push(r + "if (" + m + "(arg" + a + ")) { " + s), i.push(this._innerCode(e, r + "  ", n)), i.push(r + "}")
						}
					} else i.push(this._innerCode(e, r, n));
					return i.join("\n")
				}, s.prototype._innerCode = function(e, t, r) {
					var n, i = [];
					this.signature && (i.push(t + "if (arguments.length === " + this.path.length + ") {"), i.push(this.signature.toCode(e, t + "  ")), i.push(t + "}"));
					var a;
					for (n = 0; n < this.childs.length; n++)
						if (this.childs[n].param.anyType) {
							a = this.childs[n];
							break
						}
					for (n = 0; n < this.childs.length; n++) i.push(this.childs[n].toCode(e, t, a));
					r && !this.param.anyType && i.push(r.toCode(e, t, a));
					var o = this._exceptions(e, t);
					return o && i.push(o), i.join("\n")
				}, s.prototype._exceptions = function(e, t) {
					var r = this.path.length;
					if (0 === this.childs.length) return [t + "if (arguments.length > " + r + ") {", t + "  throw createError(name, arguments.length, " + r + ", arguments[" + r + "]);", t + "}"].join("\n");
					for (var n = {}, i = [], a = 0; a < this.childs.length; a++) {
						var o = this.childs[a];
						if (o.param)
							for (var s = 0; s < o.param.types.length; s++) {
								var u = o.param.types[s];
								u in n || o.param.conversions[s] || (n[u] = !0, i.push(u))
							}
					}
					return t + "throw createError(name, arguments.length, " + r + ", arguments[" + r + "], '" + i.join(",") + "');"
				};
				var y = [{
						name: "number",
						test: function(e) {
							return "number" == typeof e
						}
					}, {
						name: "string",
						test: function(e) {
							return "string" == typeof e
						}
					}, {
						name: "boolean",
						test: function(e) {
							return "boolean" == typeof e
						}
					}, {
						name: "Function",
						test: function(e) {
							return "function" == typeof e
						}
					}, {
						name: "Array",
						test: Array.isArray
					}, {
						name: "Date",
						test: function(e) {
							return e instanceof Date
						}
					}, {
						name: "RegExp",
						test: function(e) {
							return e instanceof RegExp
						}
					}, {
						name: "Object",
						test: function(e) {
							return "object" == typeof e
						}
					}, {
						name: "null",
						test: function(e) {
							return null === e
						}
					}, {
						name: "undefined",
						test: function(e) {
							return void 0 === e
						}
					}],
					x = {},
					b = [],
					w = [],
					N = {
						config: x,
						types: y,
						conversions: b,
						ignore: w
					};
				return N = p("typed", {
					Object: function(e) {
						var t = [];
						for (var n in e) e.hasOwnProperty(n) && t.push(e[n]);
						var i = r(t);
						return p(i, e)
					},
					"string, Object": p,
					"...Function": function(e) {
						for (var t, n = r(e), i = {}, a = 0; a < e.length; a++) {
							var o = e[a];
							if ("object" != typeof o.signatures) throw t = new TypeError("Function is no typed-function (index: " + a + ")"), t.data = {
								index: a
							}, t;
							for (var s in o.signatures)
								if (o.signatures.hasOwnProperty(s))
									if (i.hasOwnProperty(s)) {
										if (o.signatures[s] !== i[s]) throw t = new Error('Signature "' + s + '" is defined twice'), t.data = {
											signature: s
										}, t
									} else i[s] = o.signatures[s]
						}
						return p(n, i)
					}
				}), N.config = x, N.types = y, N.conversions = b, N.ignore = w, N.create = e, N.find = v, N.convert = d, N.addType = function(e) {
					if (!e || "string" != typeof e.name || "function" != typeof e.test) throw new TypeError("Object with properties {name: string, test: function} expected");
					N.types.push(e)
				}, N.addConversion = function(e) {
					if (!e || "string" != typeof e.from || "string" != typeof e.to || "function" != typeof e.convert) throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");
					N.conversions.push(e)
				}, N
			}
			return e()
		})
	}, function(e, t, r) {
		"use strict";
		var n = r(7);
		t.isNumber = function(e) {
			return "number" == typeof e
		}, t.isInteger = function(e) {
			return isFinite(e) ? e == Math.round(e) : !1
		}, t.sign = function(e) {
			return e > 0 ? 1 : 0 > e ? -1 : 0
		}, t.format = function(e, r) {
			if ("function" == typeof r) return r(e);
			if (e === 1 / 0) return "Infinity";
			if (e === -(1 / 0)) return "-Infinity";
			if (isNaN(e)) return "NaN";
			var n = "auto",
				i = void 0;
			switch (r && (r.notation && (n = r.notation), t.isNumber(r) ? i = r : r.precision && (i = r.precision)), n) {
				case "fixed":
					return t.toFixed(e, i);
				case "exponential":
					return t.toExponential(e, i);
				case "engineering":
					return t.toEngineering(e, i);
				case "auto":
					return t.toPrecision(e, i, r && r.exponential).replace(/((\.\d*?)(0+))($|e)/, function() {
						var e = arguments[2],
							t = arguments[4];
						return "." !== e ? e + t : t
					});
				default:
					throw new Error('Unknown notation "' + n + '". Choose "auto", "exponential", or "fixed".')
			}
		}, t.toExponential = function(e, t) {
			return new n(e).toExponential(t)
		}, t.toEngineering = function(e, t) {
			return new n(e).toEngineering(t)
		}, t.toFixed = function(e, t) {
			return new n(e).toFixed(t)
		}, t.toPrecision = function(e, t, r) {
			return new n(e).toPrecision(t, r)
		}, t.digits = function(e) {
			return e.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length
		}, t.DBL_EPSILON = Number.EPSILON || 2.220446049250313e-16, t.nearlyEqual = function(e, r, n) {
			if (null == n) return e == r;
			if (e == r) return !0;
			if (isNaN(e) || isNaN(r)) return !1;
			if (isFinite(e) && isFinite(r)) {
				var i = Math.abs(e - r);
				return i < t.DBL_EPSILON ? !0 : i <= Math.max(Math.abs(e), Math.abs(r)) * n
			}
			return !1
		}
	}, function(e, t) {
		"use strict";

		function r(e) {
			var t = String(e).toLowerCase().match(/^0*?(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
			if (!t) throw new SyntaxError("Invalid number");
			var r = t[1],
				n = t[2],
				i = parseFloat(t[4] || "0"),
				a = n.indexOf(".");
			i += -1 !== a ? a - 1 : n.length - 1, this.sign = r, this.coefficients = n.replace(".", "").replace(/^0*/, function(e) {
				return i -= e.length, ""
			}).replace(/0*$/, "").split("").map(function(e) {
				return parseInt(e)
			}), 0 === this.coefficients.length && (this.coefficients.push(0), i++), this.exponent = i
		}

		function n(e) {
			for (var t = [], r = 0; e > r; r++) t.push(0);
			return t
		}
		r.prototype.toEngineering = function(e) {
			var t = this.roundDigits(e),
				r = t.exponent,
				i = t.coefficients,
				a = r % 3 === 0 ? r : 0 > r ? r - 3 - r % 3 : r - r % 3,
				o = r >= 0 ? r : Math.abs(a);
			i.length - 1 < o && (i = i.concat(n(o - (i.length - 1))));
			for (var s = Math.abs(r - a), u = 1, c = ""; --s >= 0;) u++;
			var f = i.slice(u).join(""),
				l = f.match(/[1-9]/) ? "." + f : "";
			return c = i.slice(0, u).join("") + l, c += "e" + (r >= 0 ? "+" : "") + a.toString(), t.sign + c
		}, r.prototype.toFixed = function(e) {
			var t = this.roundDigits(this.exponent + 1 + (e || 0)),
				r = t.coefficients,
				i = t.exponent + 1,
				a = i + (e || 0);
			return r.length < a && (r = r.concat(n(a - r.length))), 0 > i && (r = n(-i + 1).concat(r), i = 1), e && r.splice(i, 0, 0 === i ? "0." : "."), this.sign + r.join("")
		}, r.prototype.toExponential = function(e) {
			var t = e ? this.roundDigits(e) : this.clone(),
				r = t.coefficients,
				i = t.exponent;
			r.length < e && (r = r.concat(n(e - r.length)));
			var a = r.shift();
			return this.sign + a + (r.length > 0 ? "." + r.join("") : "") + "e" + (i >= 0 ? "+" : "") + i
		}, r.prototype.toPrecision = function(e, t) {
			var r = t && void 0 !== t.lower ? t.lower : .001,
				i = t && void 0 !== t.upper ? t.upper : 1e5,
				a = Math.abs(Math.pow(10, this.exponent));
			if (r > a || a >= i) return this.toExponential(e);
			var o = e ? this.roundDigits(e) : this.clone(),
				s = o.coefficients,
				u = o.exponent;
			s.length < e && (s = s.concat(n(e - s.length))), s = s.concat(n(u - s.length + 1 + (s.length < e ? e - s.length : 0))), s = n(-u).concat(s);
			var c = u > 0 ? u : 0;
			return c < s.length - 1 && s.splice(c + 1, 0, "."), this.sign + s.join("")
		}, r.prototype.clone = function() {
			var e = new r("0");
			return e.sign = this.sign, e.coefficients = this.coefficients.slice(0), e.exponent = this.exponent, e
		}, r.prototype.roundDigits = function(e) {
			for (var t = this.clone(), r = t.coefficients; 0 >= e;) r.unshift(0), t.exponent++, e++;
			if (r.length > e) {
				var n = r.splice(e, r.length - e);
				if (n[0] >= 5) {
					var i = e - 1;
					for (r[i]++; 10 === r[i];) r.pop(), 0 === i && (r.unshift(0), t.exponent++, i++), i--, r[i]++
				}
			}
			return t
		}, e.exports = r
	}, function(e, t, r) {
		var n = r(9);
		t.mixin = function(e) {
			var t = new n;
			return e.on = t.on.bind(t), e.off = t.off.bind(t), e.once = t.once.bind(t), e.emit = t.emit.bind(t), e
		}
	}, function(e, t) {
		function r() {}
		r.prototype = {
			on: function(e, t, r) {
				var n = this.e || (this.e = {});
				return (n[e] || (n[e] = [])).push({
					fn: t,
					ctx: r
				}), this
			},
			once: function(e, t, r) {
				function n() {
					i.off(e, n), t.apply(r, arguments)
				}
				var i = this;
				return n._ = t, this.on(e, n, r)
			},
			emit: function(e) {
				var t = [].slice.call(arguments, 1),
					r = ((this.e || (this.e = {}))[e] || []).slice(),
					n = 0,
					i = r.length;
				for (n; i > n; n++) r[n].fn.apply(r[n].ctx, t);
				return this
			},
			off: function(e, t) {
				var r = this.e || (this.e = {}),
					n = r[e],
					i = [];
				if (n && t)
					for (var a = 0, o = n.length; o > a; a++) n[a].fn !== t && n[a].fn._ !== t && i.push(n[a]);
				return i.length ? r[e] = i : delete r[e], this
			}
		}, e.exports = r
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n, u) {
			function c(e, t) {
				var r = arguments.length;
				if (1 != r && 2 != r) throw new s("import", r, 1, 2);
				if (t || (t = {}), a(e)) m(e, t);
				else if (Array.isArray(e)) e.forEach(function(e) {
					c(e, t)
				});
				else if ("object" == typeof e) {
					for (var n in e)
						if (e.hasOwnProperty(n)) {
							var i = e[n];
							h(i) ? f(n, i, t) : a(e) ? m(e, t) : c(i, t)
						}
				} else if (!t.silent) throw new TypeError("Factory, Object, or Array expected")
			}

			function f(e, t, r) {
				if (r.wrap && "function" == typeof t && (t = p(t)), g(u[e]) && g(t)) return t = r.override ? n(e, t.signatures) : n(u[e], t), u[e] = t, l(e, t), void u.emit("import", e, function() {
					return t
				});
				if (void 0 === u[e] || r.override) return u[e] = t, l(e, t), void u.emit("import", e, function() {
					return t
				});
				if (!r.silent) throw new Error('Cannot import "' + e + '": already exists')
			}

			function l(e, t) {
				t && "function" == typeof t.transform && (u.expression.transform[e] = t.transform)
			}

			function p(e) {
				var t = function() {
					for (var t = [], r = 0, n = arguments.length; n > r; r++) {
						var i = arguments[r];
						t[r] = i && i.valueOf()
					}
					return e.apply(u, t)
				};
				return e.transform && (t.transform = e.transform), t
			}

			function m(e, t) {
				if ("string" == typeof e.name) {
					var a = e.name,
						s = e.path ? o(u, e.path) : u,
						c = s.hasOwnProperty(a) ? s[a] : void 0,
						f = function() {
							var i = r(e);
							if (g(c) && g(i)) return t.override || (i = n(c, i)), i;
							if (void 0 === c || t.override) return i;
							if (!t.silent) throw new Error('Cannot import "' + a + '": already exists')
						};
					e.lazy !== !1 ? i(s, a, f) : s[a] = f(), u.emit("import", a, f, e.path)
				} else r(e)
			}

			function h(e) {
				return "function" == typeof e || "number" == typeof e || "string" == typeof e || "boolean" == typeof e || null === e || e && e.isUnit === !0 || e && e.isComplex === !0
			}

			function g(e) {
				return "function" == typeof e && "object" == typeof e.signatures
			}
			return c
		}
		var i = r(3).lazy,
			a = r(3).isFactory,
			o = r(3).traverse,
			s = (r(3).extend, r(11));
		t.math = !0, t.name = "import", t.factory = n, t.lazy = !0
	}, function(e, t) {
		"use strict";

		function r(e, t, n, i) {
			if (!(this instanceof r)) throw new SyntaxError("Constructor must be called with the new operator");
			this.fn = e, this.count = t, this.min = n, this.max = i, this.message = "Wrong number of arguments in function " + e + " (" + t + " provided, " + n + (void 0 != i ? "-" + i : "") + " expected)", this.stack = (new Error).stack
		}
		r.prototype = new Error, r.prototype.constructor = Error, r.prototype.name = "ArgumentsError", r.prototype.isArgumentsError = !0, e.exports = r
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n, a) {
			return function(e) {
				if (e) {
					var r = i.clone(t);
					i.deepExtend(t, e);
					var n = i.clone(t);
					return a.emit("config", n, r), n
				}
				return i.clone(t)
			}
		}
		var i = r(3);
		t.name = "config", t.math = !0, t.factory = n
	}, function(e, t, r) {
		e.exports = [r(14), r(92), r(96), r(320), r(495), r(497)]
	}, function(e, t, r) {
		e.exports = [r(15), r(20), r(21), r(26), r(30), r(36), r(68), r(69), r(71), r(72)]
	}, function(e, t, r) {
		e.exports = [r(16), r(18)]
	}, function(e, t, r) {
		function n(e, t, r, n, a) {
			var o = i.constructor(t);
			return o.prototype.type = "BigNumber", o.prototype.isBigNumber = !0, o.prototype.toJSON = function() {
				return {
					mathjs: "BigNumber",
					value: this.toString()
				}
			}, o.fromJSON = function(e) {
				return new o(e.value)
			}, a.on("config", function(e, t) {
				e.precision !== t.precision && o.config({
					precision: e.precision
				})
			}), o
		}
		var i = r(17);
		r(6).digits;
		t.name = "BigNumber", t.path = "type", t.factory = n, t.math = !0
	}, function(e, t, r) {
		var n;
		! function(i) {
			"use strict";

			function a(e) {
				for (var t, r, n = 1, i = e.length, a = e[0] + ""; i > n; n++) {
					for (t = e[n] + "", r = _ - t.length; r--;) t = "0" + t;
					a += t
				}
				for (i = a.length; 48 === a.charCodeAt(--i););
				return a.slice(0, i + 1 || 1)
			}

			function o(e, t, r, n) {
				var i, a, o, s, u;
				for (a = 1, o = e[0]; o >= 10; o /= 10, a++);
				return o = t - a, 0 > o ? (o += _, i = 0) : (i = Math.ceil((o + 1) / _), o %= _), a = E(10, _ - o), u = e[i] % a | 0, null == n ? 3 > o ? (0 == o ? u = u / 100 | 0 : 1 == o && (u = u / 10 | 0), s = 4 > r && 99999 == u || r > 3 && 49999 == u || 5e4 == u || 0 == u) : s = (4 > r && u + 1 == a || r > 3 && u + 1 == a / 2) && (e[i + 1] / a / 100 | 0) == E(10, o - 2) - 1 || (u == a / 2 || 0 == u) && 0 == (e[i + 1] / a / 100 | 0) : 4 > o ? (0 == o ? u = u / 1e3 | 0 : 1 == o ? u = u / 100 | 0 : 2 == o && (u = u / 10 | 0), s = (n || 4 > r) && 9999 == u || !n && r > 3 && 4999 == u) : s = ((n || 4 > r) && u + 1 == a || !n && r > 3 && u + 1 == a / 2) && (e[i + 1] / a / 1e3 | 0) == E(10, o - 3) - 1, s
			}

			function s(e, t, r) {
				var n = e.constructor;
				return null == t || ((y = 0 > t || t > 8) || 0 !== t && (n.errors ? parseInt : parseFloat)(t) != t) && !p(n, "rounding mode", t, r, 0) ? n.rounding : 0 | t
			}

			function u(e, t, r, n) {
				var i = e.constructor;
				return !(y = (n || 0) > t || t >= S + 1) && (0 === t || (i.errors ? parseInt : parseFloat)(t) == t) || p(i, "argument", t, r, 0)
			}

			function c(e, t) {
				var r, n, i, s, u, c, f, l = 0,
					p = 0,
					m = 0,
					h = e.constructor,
					v = h.ONE,
					d = h.rounding,
					y = h.precision;
				if (!e.c || !e.c[0] || e.e > 17) return new h(e.c ? e.c[0] ? e.s < 0 ? 0 : 1 / 0 : v : e.s ? e.s < 0 ? 0 : e : NaN);
				for (null == t ? (b = !1, u = y) : u = t, f = new h(.03125); e.e > -2;) e = e.times(f), m += 5;
				for (n = Math.log(E(2, m)) / Math.LN10 * 2 + 5 | 0, u += n, r = s = c = new h(v), h.precision = u;;) {
					if (s = g(s.times(e), u, 1), r = r.times(++p), f = c.plus(k(s, r, u, 1)), a(f.c).slice(0, u) === a(c.c).slice(0, u)) {
						for (i = m; i--;) c = g(c.times(c), u, 1);
						if (null != t) return h.precision = y, c;
						if (!(3 > l && o(c.c, u - n, d, l))) return g(c, h.precision = y, d, b = !0);
						h.precision = u += 10, r = s = f = new h(v), p = 0, l++
					}
					c = f
				}
			}

			function f(e, t, r, n) {
				var i, o, s = e.constructor,
					u = (e = new s(e)).e;
				if (null == t ? r = 0 : (g(e, ++t, r), r = n ? t : t + e.e - u), u = e.e, i = a(e.c), 1 == n || 2 == n && (u >= t || u <= s.toExpNeg)) {
					for (; i.length < r; i += "0");
					i.length > 1 && (i = i.charAt(0) + "." + i.slice(1)), i += (0 > u ? "e" : "e+") + u
				} else {
					if (n = i.length, 0 > u) {
						for (o = r - n; ++u; i = "0" + i);
						i = "0." + i
					} else if (++u > n) {
						for (o = r - u, u -= n; u--; i += "0");
						o > 0 && (i += ".")
					} else o = r - n, n > u ? i = i.slice(0, u) + "." + i.slice(u) : o > 0 && (i += ".");
					if (o > 0)
						for (; o--; i += "0");
				}
				return e.s < 0 && e.c[0] ? "-" + i : i
			}

			function l(e) {
				var t = e.length - 1,
					r = t * _ + 1;
				if (t = e[t]) {
					for (; t % 10 == 0; t /= 10, r--);
					for (t = e[0]; t >= 10; t /= 10, r++);
				}
				return r
			}

			function p(e, t, r, n, i) {
				if (e.errors) {
					var a = new Error((n || ["new Decimal", "cmp", "div", "eq", "gt", "gte", "lt", "lte", "minus", "mod", "plus", "times", "toFraction", "pow", "random", "log", "sqrt", "toNearest", "divToInt"][w ? 0 > w ? -w : w : 0 > 1 / w ? 1 : 0]) + "() " + (["number type has more than 15 significant digits", "LN10 out of digits"][t] || t + ([y ? " out of range" : " not an integer", " not a boolean or binary digit"][i] || "")) + ": " + r);
					throw a.name = "Decimal Error", y = w = 0, a
				}
			}

			function m(e, t, r) {
				var n = new e(e.ONE);
				for (b = !1; 1 & r && (n = n.times(t)), r >>= 1, r;) t = t.times(t);
				return b = !0, n
			}

			function h(e, t) {
				var r, n, i, s, u, c, f, l, m, v, d, y = 1,
					x = 10,
					w = e,
					N = w.c,
					E = w.constructor,
					M = E.ONE,
					A = E.rounding,
					_ = E.precision;
				if (w.s < 0 || !N || !N[0] || !w.e && 1 == N[0] && 1 == N.length) return new E(N && !N[0] ? -1 / 0 : 1 != w.s ? NaN : N ? 0 : w);
				if (null == t ? (b = !1, f = _) : f = t, E.precision = f += x, r = a(N), n = r.charAt(0), !(Math.abs(s = w.e) < 15e14)) return w = new E(n + "." + r.slice(1)), f + 2 > B.length && p(E, 1, f + 2, "ln"), w = h(w, f - x).plus(new E(B.slice(0, f + 2)).times(s + "")), E.precision = _, null == t ? g(w, _, A, b = !0) : w;
				for (; 7 > n && 1 != n || 1 == n && r.charAt(1) > 3;) w = w.times(e), r = a(w.c), n = r.charAt(0), y++;
				for (s = w.e, n > 1 ? (w = new E("0." + r), s++) : w = new E(n + "." + r.slice(1)), v = w, l = u = w = k(w.minus(M), w.plus(M), f, 1), d = g(w.times(w), f, 1), i = 3;;) {
					if (u = g(u.times(d), f, 1), m = l.plus(k(u, new E(i), f, 1)), a(m.c).slice(0, f) === a(l.c).slice(0, f)) {
						if (l = l.times(2), 0 !== s && (f + 2 > B.length && p(E, 1, f + 2, "ln"), l = l.plus(new E(B.slice(0, f + 2)).times(s + ""))), l = k(l, new E(y), f, 1), null != t) return E.precision = _, l;
						if (!o(l.c, f - x, A, c)) return g(l, E.precision = _, A, b = !0);
						E.precision = f += x, m = u = w = k(v.minus(M), v.plus(M), f, 1), d = g(w.times(w), f, 1), i = c = 1
					}
					l = m, i += 2
				}
			}

			function g(e, t, r, n) {
				var i, a, o, s, u, c, f, l, p = e.constructor;
				e: if (null != t) {
					if (!(f = e.c)) return e;
					for (i = 1, s = f[0]; s >= 10; s /= 10, i++);
					if (a = t - i, 0 > a) a += _, o = t, u = f[l = 0], c = u / E(10, i - o - 1) % 10 | 0;
					else if (l = Math.ceil((a + 1) / _), l >= f.length) {
						if (!n) break e;
						for (; f.length <= l; f.push(0));
						u = c = 0, i = 1, a %= _, o = a - _ + 1
					} else {
						for (u = s = f[l], i = 1; s >= 10; s /= 10, i++);
						a %= _, o = a - _ + i, c = 0 > o ? 0 : N(u / E(10, i - o - 1) % 10)
					}
					if (n = n || 0 > t || null != f[l + 1] || (0 > o ? u : u % E(10, i - o - 1)), n = 4 > r ? (c || n) && (0 == r || r == (e.s < 0 ? 3 : 2)) : c > 5 || 5 == c && (4 == r || n || 6 == r && (a > 0 ? o > 0 ? u / E(10, i - o) : 0 : f[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), 1 > t || !f[0]) return f.length = 0, n ? (t -= e.e + 1, f[0] = E(10, (_ - t % _) % _), e.e = -t || 0) : f[0] = e.e = 0, e;
					if (0 == a ? (f.length = l, s = 1, l--) : (f.length = l + 1, s = E(10, _ - a), f[l] = o > 0 ? (u / E(10, i - o) % E(10, o) | 0) * s : 0), n)
						for (;;) {
							if (0 == l) {
								for (a = 1, o = f[0]; o >= 10; o /= 10, a++);
								for (o = f[0] += s, s = 1; o >= 10; o /= 10, s++);
								a != s && (e.e++, f[0] == A && (f[0] = 1));
								break
							}
							if (f[l] += s, f[l] != A) break;
							f[l--] = 0, s = 1
						}
					for (a = f.length; 0 === f[--a]; f.pop());
				}
				return b && (e.e > p.maxE ? e.c = e.e = null : e.e < p.minE && (e.c = [e.e = 0])), e
			}
			var v, d, y, x = i.crypto,
				b = !0,
				w = 0,
				N = Math.floor,
				E = Math.pow,
				M = Object.prototype.toString,
				A = 1e7,
				_ = 7,
				O = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_",
				T = {},
				C = 9e15,
				S = 1e9,
				z = 3e3,
				B = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
			T.absoluteValue = T.abs = function() {
				var e = new this.constructor(this);
				return e.s < 0 && (e.s = 1), g(e)
			}, T.ceil = function() {
				return g(new this.constructor(this), this.e + 1, 2)
			}, T.comparedTo = T.cmp = function(e, t) {
				var r, n = this,
					i = n.c,
					a = (w = -w, e = new n.constructor(e, t), e.c),
					o = n.s,
					s = e.s,
					u = n.e,
					c = e.e;
				if (!o || !s) return null;
				if (r = i && !i[0], t = a && !a[0], r || t) return r ? t ? 0 : -s : o;
				if (o != s) return o;
				if (r = 0 > o, !i || !a) return u == c ? 0 : !i ^ r ? 1 : -1;
				if (u != c) return u > c ^ r ? 1 : -1;
				for (o = -1, s = (u = i.length) < (c = a.length) ? u : c; ++o < s;)
					if (i[o] != a[o]) return i[o] > a[o] ^ r ? 1 : -1;
				return u == c ? 0 : u > c ^ r ? 1 : -1
			}, T.decimalPlaces = T.dp = function() {
				var e, t, r = null;
				if (e = this.c) {
					if (r = ((t = e.length - 1) - N(this.e / _)) * _, t = e[t])
						for (; t % 10 == 0; t /= 10, r--);
					0 > r && (r = 0)
				}
				return r
			}, T.dividedBy = T.div = function(e, t) {
				return w = 2, k(this, new this.constructor(e, t))
			}, T.dividedToIntegerBy = T.divToInt = function(e, t) {
				var r = this,
					n = r.constructor;
				return w = 18, g(k(r, new n(e, t), 0, 1, 1), n.precision, n.rounding)
			}, T.equals = T.eq = function(e, t) {
				return w = 3, 0 === this.cmp(e, t)
			}, T.exponential = T.exp = function() {
				return c(this)
			}, T.floor = function() {
				return g(new this.constructor(this), this.e + 1, 3)
			}, T.greaterThan = T.gt = function(e, t) {
				return w = 4, this.cmp(e, t) > 0
			}, T.greaterThanOrEqualTo = T.gte = function(e, t) {
				return w = 5, t = this.cmp(e, t), 1 == t || 0 === t
			}, T.isFinite = function() {
				return !!this.c
			}, T.isInteger = T.isInt = function() {
				return !!this.c && N(this.e / _) > this.c.length - 2
			}, T.isNaN = function() {
				return !this.s
			}, T.isNegative = T.isNeg = function() {
				return this.s < 0
			}, T.isZero = function() {
				return !!this.c && 0 == this.c[0]
			}, T.lessThan = T.lt = function(e, t) {
				return w = 6, this.cmp(e, t) < 0
			}, T.lessThanOrEqualTo = T.lte = function(e, t) {
				return w = 7, t = this.cmp(e, t), -1 == t || 0 === t
			}, T.logarithm = T.log = function(e, t) {
				var r, n, i, s, u, c, f, l, m, v = this,
					d = v.constructor,
					y = d.precision,
					x = d.rounding,
					N = 5;
				if (null == e) e = new d(10), r = !0;
				else {
					if (w = 15, e = new d(e, t), n = e.c, e.s < 0 || !n || !n[0] || !e.e && 1 == n[0] && 1 == n.length) return new d(NaN);
					r = e.eq(10)
				}
				if (n = v.c, v.s < 0 || !n || !n[0] || !v.e && 1 == n[0] && 1 == n.length) return new d(n && !n[0] ? -1 / 0 : 1 != v.s ? NaN : n ? 0 : 1 / 0);
				if (u = r && (s = n[0], n.length > 1 || 1 != s && 10 != s && 100 != s && 1e3 != s && 1e4 != s && 1e5 != s && 1e6 != s), b = !1, f = y + N, l = f + 10, c = h(v, f), r ? (l > B.length && p(d, 1, l, "log"), i = new d(B.slice(0, l))) : i = h(e, f), m = k(c, i, f, 1), o(m.c, s = y, x))
					do
						if (f += 10, c = h(v, f), r ? (l = f + 10, l > B.length && p(d, 1, l, "log"), i = new d(B.slice(0, l))) : i = h(e, f), m = k(c, i, f, 1), !u) {
							+a(m.c).slice(s + 1, s + 15) + 1 == 1e14 && (m = g(m, y + 1, 0));
							break
						}
				while (o(m.c, s += 10, x));
				return b = !0, g(m, y, x)
			}, T.minus = function(e, t) {
				var r, n, i, a, o = this,
					s = o.constructor,
					u = o.s;
				if (w = 8, e = new s(e, t), t = e.s, !u || !t) return new s(NaN);
				if (u != t) return e.s = -t, o.plus(e);
				var c = o.c,
					f = e.c,
					l = N(e.e / _),
					p = N(o.e / _),
					m = s.precision,
					h = s.rounding;
				if (!p || !l) {
					if (!c || !f) return c ? (e.s = -t, e) : new s(f ? o : NaN);
					if (!c[0] || !f[0]) return o = f[0] ? (e.s = -t, e) : new s(c[0] ? o : 3 == h ? -0 : 0), b ? g(o, m, h) : o
				}
				if (c = c.slice(), n = c.length, u = p - l) {
					for ((a = 0 > u) ? (u = -u, r = c, n = f.length) : (l = p, r = f), (p = Math.ceil(m / _)) > n && (n = p), u > (n += 2) && (u = n, r.length = 1), r.reverse(), t = u; t--; r.push(0));
					r.reverse()
				} else
					for ((a = n < (i = f.length)) && (i = n), u = t = 0; i > t; t++)
						if (c[t] != f[t]) {
							a = c[t] < f[t];
							break
						} if (a && (r = c, c = f, f = r, e.s = -e.s), (t = -((i = c.length) - f.length)) > 0)
					for (; t--; c[i++] = 0);
				for (p = A - 1, t = f.length; t > u;) {
					if (c[--t] < f[t]) {
						for (n = t; n && !c[--n]; c[n] = p);
						--c[n], c[t] += A
					}
					c[t] -= f[t]
				}
				for (; 0 == c[--i]; c.pop());
				for (; 0 == c[0]; c.shift(), --l);
				for (c[0] || (c = [l = 0], e.s = 3 == h ? -1 : 1), e.c = c, u = 1, t = c[0]; t >= 10; t /= 10, u++);
				return e.e = u + l * _ - 1, b ? g(e, m, h) : e
			}, T.modulo = T.mod = function(e, t) {
				var r, n, i = this,
					a = i.constructor,
					o = a.modulo;
				return w = 9, e = new a(e, t), t = e.s, r = !i.c || !t || e.c && !e.c[0], r || !e.c || i.c && !i.c[0] ? r ? new a(NaN) : g(new a(i), a.precision, a.rounding) : (b = !1, 9 == o ? (e.s = 1, n = k(i, e, 0, 3, 1), e.s = t, n.s *= t) : n = k(i, e, 0, o, 1), n = n.times(e), b = !0, i.minus(n))
			}, T.naturalLogarithm = T.ln = function() {
				return h(this)
			}, T.negated = T.neg = function() {
				var e = new this.constructor(this);
				return e.s = -e.s || null, g(e)
			}, T.plus = function(e, t) {
				var r, n = this,
					i = n.constructor,
					a = n.s;
				if (w = 10, e = new i(e, t), t = e.s, !a || !t) return new i(NaN);
				if (a != t) return e.s = -t, n.minus(e);
				var o = n.c,
					s = e.c,
					u = N(e.e / _),
					c = N(n.e / _),
					f = i.precision,
					l = i.rounding;
				if (!c || !u) {
					if (!o || !s) return new i(a / 0);
					if (!o[0] || !s[0]) return n = s[0] ? e : new i(o[0] ? n : 0 * a), b ? g(n, f, l) : n
				}
				if (o = o.slice(), a = c - u) {
					for (0 > a ? (a = -a, r = o, t = s.length) : (u = c, r = s, t = o.length), (c = Math.ceil(f / _)) > t && (t = c), a > ++t && (a = t, r.length = 1), r.reverse(); a--; r.push(0));
					r.reverse()
				}
				for (o.length - s.length < 0 && (r = s, s = o, o = r), a = s.length, t = 0, c = A; a; o[a] %= c) t = (o[--a] = o[a] + s[a] + t) / c | 0;
				for (t && (o.unshift(t), ++u), a = o.length; 0 == o[--a]; o.pop());
				for (e.c = o, a = 1, t = o[0]; t >= 10; t /= 10, a++);
				return e.e = a + u * _ - 1, b ? g(e, f, l) : e
			}, T.precision = T.sd = function(e) {
				var t = null,
					r = this;
				return e != t && e !== !!e && 1 !== e && 0 !== e && p(r.constructor, "argument", e, "precision", 1), r.c && (t = l(r.c), e && r.e + 1 > t && (t = r.e + 1)), t
			}, T.round = function() {
				var e = this,
					t = e.constructor;
				return g(new t(e), e.e + 1, t.rounding)
			}, T.squareRoot = T.sqrt = function() {
				var e, t, r, n, i, o, s = this,
					u = s.c,
					c = s.s,
					f = s.e,
					l = s.constructor,
					p = new l(.5);
				if (1 !== c || !u || !u[0]) return new l(!c || 0 > c && (!u || u[0]) ? NaN : u ? s : 1 / 0);
				for (b = !1, c = Math.sqrt(+s), 0 == c || c == 1 / 0 ? (t = a(u), (t.length + f) % 2 == 0 && (t += "0"), c = Math.sqrt(t), f = N((f + 1) / 2) - (0 > f || f % 2), c == 1 / 0 ? t = "1e" + f : (t = c.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + f), n = new l(t)) : n = new l(c.toString()), r = (f = l.precision) + 3;;)
					if (o = n, n = p.times(o.plus(k(s, o, r + 2, 1))), a(o.c).slice(0, r) === (t = a(n.c)).slice(0, r)) {
						if (t = t.slice(r - 3, r + 1), "9999" != t && (i || "4999" != t)) {
							(!+t || !+t.slice(1) && "5" == t.charAt(0)) && (g(n, f + 1, 1), e = !n.times(n).eq(s));
							break
						}
						if (!i && (g(o, f + 1, 0), o.times(o).eq(s))) {
							n = o;
							break
						}
						r += 4, i = 1
					}
				return b = !0, g(n, f, l.rounding, e)
			}, T.times = function(e, t) {
				var r, n, i = this,
					a = i.constructor,
					o = i.c,
					s = (w = 11, e = new a(e, t), e.c),
					u = N(i.e / _),
					c = N(e.e / _),
					f = i.s;
				if (t = e.s, e.s = f == t ? 1 : -1, !((u || o && o[0]) && (c || s && s[0]))) return new a(!f || !t || o && !o[0] && !s || s && !s[0] && !o ? NaN : o && s ? 0 * e.s : e.s / 0);
				for (n = u + c, f = o.length, t = s.length, t > f && (r = o, o = s, s = r, c = f, f = t, t = c), c = f + t, r = []; c--; r.push(0));
				for (u = t - 1; u > -1; u--) {
					for (t = 0, c = f + u; c > u;) t = r[c] + s[u] * o[c - u - 1] + t, r[c--] = t % A | 0, t = t / A | 0;
					r[c] = (r[c] + t) % A | 0
				}
				for (t ? ++n : r[0] || r.shift(), c = r.length; !r[--c]; r.pop());
				for (e.c = r, f = 1, t = r[0]; t >= 10; t /= 10, f++);
				return e.e = f + n * _ - 1, b ? g(e, a.precision, a.rounding) : e
			}, T.toDecimalPlaces = T.toDP = function(e, t) {
				var r = this;
				return r = new r.constructor(r), null != e && u(r, e, "toDP") ? g(r, (0 | e) + r.e + 1, s(r, t, "toDP")) : r
			}, T.toExponential = function(e, t) {
				var r = this;
				return r.c ? f(r, null != e && u(r, e, "toExponential") ? 0 | e : null, null != e && s(r, t, "toExponential"), 1) : r.toString()
			}, T.toFixed = function(e, t) {
				var r, n = this,
					i = n.constructor,
					a = i.toExpNeg,
					o = i.toExpPos;
				return null != e && (e = u(n, e, r = "toFixed") ? n.e + (0 | e) : null, t = s(n, t, r)), i.toExpNeg = -(i.toExpPos = 1 / 0), null != e && n.c ? (r = f(n, e, t), n.s < 0 && n.c && (n.c[0] ? r.indexOf("-") < 0 && (r = "-" + r) : r = r.replace("-", ""))) : r = n.toString(), i.toExpNeg = a, i.toExpPos = o, r
			}, T.toFormat = function(e, t) {
				var r = this;
				if (!r.c) return r.toString();
				var n, i = r.s < 0,
					a = r.constructor.format,
					o = a.groupSeparator,
					s = +a.groupSize,
					u = +a.secondaryGroupSize,
					c = r.toFixed(e, t).split("."),
					f = c[0],
					l = c[1],
					p = i ? f.slice(1) : f,
					m = p.length;
				if (u && (n = s, s = u, m -= u = n), s > 0 && m > 0) {
					for (n = m % s || s, f = p.substr(0, n); m > n; n += s) f += o + p.substr(n, s);
					u > 0 && (f += o + p.slice(n)), i && (f = "-" + f)
				}
				return l ? f + a.decimalSeparator + ((u = +a.fractionGroupSize) ? l.replace(new RegExp("\\d{" + u + "}\\B", "g"), "$&" + a.fractionGroupSeparator) : l) : f
			}, T.toFraction = function(e) {
				var t, r, n, i, o, s, u, c, f = this,
					m = f.constructor,
					h = t = new m(m.ONE),
					g = s = new m(0),
					v = f.c,
					d = new m(g);
				if (!v) return f.toString();
				for (n = d.e = l(v) - f.e - 1, d.c[0] = E(10, (u = n % _) < 0 ? _ + u : u), (null == e || (!(w = 12, o = new m(e)).s || (y = o.cmp(h) < 0 || !o.c) || m.errors && N(o.e / _) < o.c.length - 1) && !p(m, "max denominator", e, "toFraction", 0) || (e = o).cmp(d) > 0) && (e = n > 0 ? d : h), b = !1, o = new m(a(v)), u = m.precision, m.precision = n = v.length * _ * 2; c = k(o, d, 0, 1, 1), r = t.plus(c.times(g)), 1 != r.cmp(e);) t = g, g = r, h = s.plus(c.times(r = h)), s = r, d = o.minus(c.times(r = d)), o = r;
				return r = k(e.minus(t), g, 0, 1, 1), s = s.plus(r.times(h)), t = t.plus(r.times(g)), s.s = h.s = f.s, i = k(h, g, n, 1).minus(f).abs().cmp(k(s, t, n, 1).minus(f).abs()) < 1 ? [h + "", g + ""] : [s + "", t + ""], b = !0, m.precision = u, i
			}, T.toNearest = function(e, t) {
				var r = this,
					n = r.constructor;
				return r = new n(r), null == e ? (e = new n(n.ONE), t = n.rounding) : (w = 17, e = new n(e), t = s(r, t, "toNearest")), e.c ? r.c && (e.c[0] ? (b = !1, r = k(r, e, 0, 4 > t ? [4, 5, 7, 8][t] : t, 1).times(e), b = !0, g(r)) : r.c = [r.e = 0]) : r.s && (e.s && (e.s = r.s), r = e), r
			}, T.toNumber = function() {
				var e = this;
				return +e || (e.s ? 0 * e.s : NaN)
			}, T.toPower = T.pow = function(e, t) {
				var r, n, i, s, u = this,
					f = u.constructor,
					l = u.s,
					p = (w = 13, +(e = new f(e, t))),
					v = 0 > p ? -p : p,
					d = f.precision,
					y = f.rounding;
				if (!u.c || !e.c || (i = !u.c[0]) || !e.c[0]) return new f(E(i ? 0 * l : +u, p));
				if (u = new f(u), r = u.c.length, !u.e && u.c[0] == u.s && 1 == r) return u;
				if (t = e.c.length - 1, e.e || e.c[0] != e.s || t)
					if (n = N(e.e / _), i = n >= t, !i && 0 > l) s = new f(NaN);
					else {
						if (i && z > r * _ * v) {
							if (s = m(f, u, v), e.s < 0) return f.ONE.div(s)
						} else {
							if (l = 0 > l && 1 & e.c[Math.max(n, t)] ? -1 : 1, t = E(+u, p), n = 0 != t && isFinite(t) ? new f(t + "").e : N(p * (Math.log("0." + a(u.c)) / Math.LN10 + u.e + 1)), n > f.maxE + 1 || n < f.minE - 1) return new f(n > 0 ? l / 0 : 0);
							b = !1, f.rounding = u.s = 1, v = Math.min(12, (n + "").length), s = c(e.times(h(u, d + v)), d), s = g(s, d + 5, 1), o(s.c, d, y) && (n = d + 10, s = g(c(e.times(h(u, n + v)), n), n + 5, 1), +a(s.c).slice(d + 1, d + 15) + 1 == 1e14 && (s = g(s, d + 1, 0))), s.s = l, b = !0, f.rounding = y
						}
						s = g(s, d, y)
					}
				else s = g(u, d, y);
				return s
			}, T.toPrecision = function(e, t) {
				var r = this;
				return null != e && u(r, e, "toPrecision", 1) && r.c ? f(r, 0 | --e, s(r, t, "toPrecision"), 2) : r.toString()
			}, T.toSignificantDigits = T.toSD = function(e, t) {
				var r = this,
					n = r.constructor;
				return r = new n(r), null != e && u(r, e, "toSD", 1) ? g(r, 0 | e, s(r, t, "toSD")) : g(r, n.precision, n.rounding)
			}, T.toString = function(e) {
				var t, r, n, i = this,
					o = i.constructor,
					s = i.e;
				if (null === s) r = i.s ? "Infinity" : "NaN";
				else {
					if (e === t && (s <= o.toExpNeg || s >= o.toExpPos)) return f(i, null, o.rounding, 1);
					if (r = a(i.c), 0 > s) {
						for (; ++s; r = "0" + r);
						r = "0." + r
					} else if (n = r.length, s > 0)
						if (++s > n)
							for (s -= n; s--; r += "0");
						else n > s && (r = r.slice(0, s) + "." + r.slice(s));
					else if (t = r.charAt(0), n > 1) r = t + "." + r.slice(1);
					else if ("0" == t) return t;
					if (null != e)
						if ((y = !(e >= 2 && 65 > e)) || e != (0 | e) && o.errors) p(o, "base", e, "toString", 0);
						else if (r = v(o, r, 0 | e, 10, i.s), "0" == r) return r
				}
				return i.s < 0 ? "-" + r : r
			}, T.truncated = T.trunc = function() {
				return g(new this.constructor(this), this.e + 1, 1)
			}, T.valueOf = T.toJSON = function() {
				return this.toString()
			}, v = function() {
				function e(e, t, r) {
					for (var n, i, a = [0], o = 0, s = e.length; s > o;) {
						for (i = a.length; i--; a[i] *= t);
						for (a[n = 0] += O.indexOf(e.charAt(o++)); n < a.length; n++) a[n] > r - 1 && (null == a[n + 1] && (a[n + 1] = 0), a[n + 1] += a[n] / r | 0, a[n] %= r)
					}
					return a.reverse()
				}
				return function(t, r, n, i, a) {
					var o, s, u, c, f, l, p = r.indexOf("."),
						h = t.precision,
						g = t.rounding;
					for (37 > i && (r = r.toLowerCase()), p >= 0 && (r = r.replace(".", ""), l = new t(i), c = m(t, l, r.length - p), l.c = e(c.toFixed(), 10, n), l.e = l.c.length), f = e(r, i, n), o = s = f.length; 0 == f[--s]; f.pop());
					if (!f[0]) return "0";
					if (0 > p ? o-- : (c.c = f, c.e = o, c.s = a, c = k(c, l, h, g, 0, n), f = c.c, u = c.r, o = c.e), p = f[h], s = n / 2, u = u || null != f[h + 1], 4 > g ? (null != p || u) && (0 == g || g == (0 > a ? 3 : 2)) : p > s || p == s && (4 == g || u || 6 == g && 1 & f[h - 1] || g == (0 > a ? 8 : 7)))
						for (f.length = h, --n; ++f[--h] > n;) f[h] = 0, h || (++o, f.unshift(1));
					else f.length = h;
					for (s = f.length; !f[--s];);
					for (p = 0, r = ""; s >= p; r += O.charAt(f[p++]));
					if (0 > o) {
						for (; ++o; r = "0" + r);
						r = "0." + r
					} else if (p = r.length, ++o > p)
						for (o -= p; o--; r += "0");
					else p > o && (r = r.slice(0, o) + "." + r.slice(o));
					return r
				}
			}();
			var k = function() {
				function e(e, t, r) {
					var n, i = 0,
						a = e.length;
					for (e = e.slice(); a--;) n = e[a] * t + i, e[a] = n % r | 0, i = n / r | 0;
					return i && e.unshift(i), e
				}

				function t(e, t, r, n) {
					var i, a;
					if (r != n) a = r > n ? 1 : -1;
					else
						for (i = a = 0; r > i; i++)
							if (e[i] != t[i]) {
								a = e[i] > t[i] ? 1 : -1;
								break
							} return a
				}

				function r(e, t, r, n) {
					for (var i = 0; r--;) e[r] -= i, i = e[r] < t[r] ? 1 : 0, e[r] = i * n + e[r] - t[r];
					for (; !e[0] && e.length > 1; e.shift());
				}
				return function(n, i, a, o, s, u) {
					var c, f, l, p, m, h, v, d, y, x, b, w, E, M, O, T, C, S, z, B = n.constructor,
						k = n.s == i.s ? 1 : -1,
						I = n.c,
						R = i.c;
					if (!(I && I[0] && R && R[0])) return new B(n.s && i.s && (I ? !R || I[0] != R[0] : R) ? I && 0 == I[0] || !R ? 0 * k : k / 0 : NaN);
					for (u ? (p = 1, f = n.e - i.e) : (u = A, p = _, f = N(n.e / p) - N(i.e / p)), S = R.length, T = I.length, y = new B(k), x = y.c = [], l = 0; R[l] == (I[l] || 0); l++);
					if (R[l] > (I[l] || 0) && f--, null == a ? (k = a = B.precision, o = B.rounding) : k = s ? a + (n.e - i.e) + 1 : a, 0 > k) x.push(1), m = !0;
					else {
						if (k = k / p + 2 | 0, l = 0, 1 == S) {
							for (h = 0, R = R[0], k++;
								(T > l || h) && k--; l++) M = h * u + (I[l] || 0), x[l] = M / R | 0, h = M % R | 0;
							m = h || T > l
						} else {
							for (h = u / (R[0] + 1) | 0, h > 1 && (R = e(R, h, u), I = e(I, h, u), S = R.length, T = I.length), O = S, b = I.slice(0, S), w = b.length; S > w; b[w++] = 0);
							z = R.slice(), z.unshift(0), C = R[0], R[1] >= u / 2 && C++;
							do h = 0, c = t(R, b, S, w), 0 > c ? (E = b[0], S != w && (E = E * u + (b[1] || 0)), h = E / C | 0, h > 1 ? (h >= u && (h = u - 1), v = e(R, h, u), d = v.length, w = b.length, c = t(v, b, d, w), 1 == c && (h--, r(v, d > S ? z : R, d, u))) : (0 == h && (c = h = 1), v = R.slice()), d = v.length, w > d && v.unshift(0), r(b, v, w, u), -1 == c && (w = b.length, c = t(R, b, S, w), 1 > c && (h++, r(b, w > S ? z : R, w, u))), w = b.length) : 0 === c && (h++, b = [0]), x[l++] = h, c && b[0] ? b[w++] = I[O] || 0 : (b = [I[O]], w = 1); while ((O++ < T || null != b[0]) && k--);
							m = null != b[0]
						}
						x[0] || x.shift()
					}
					if (1 == p) y.e = f, y.r = +m;
					else {
						for (l = 1, k = x[0]; k >= 10; k /= 10, l++);
						y.e = l + f * p - 1, g(y, s ? a + y.e + 1 : a, o, m)
					}
					return y
				}
			}();
			d = function() {
				function e(e) {
					var t, r, n, i = this,
						a = "config",
						o = i.errors ? parseInt : parseFloat;
					return e == r || "object" != typeof e && !p(i, "object expected", e, a) ? i : ((n = e[t = "precision"]) != r && ((y = 1 > n || n > S) || o(n) != n ? p(i, t, n, a, 0) : i[t] = 0 | n), (n = e[t = "rounding"]) != r && ((y = 0 > n || n > 8) || o(n) != n ? p(i, t, n, a, 0) : i[t] = 0 | n), (n = e[t = "toExpNeg"]) != r && ((y = -C > n || n > 0) || o(n) != n ? p(i, t, n, a, 0) : i[t] = N(n)), (n = e[t = "toExpPos"]) != r && ((y = 0 > n || n > C) || o(n) != n ? p(i, t, n, a, 0) : i[t] = N(n)), (n = e[t = "minE"]) != r && ((y = -C > n || n > 0) || o(n) != n ? p(i, t, n, a, 0) : i[t] = N(n)), (n = e[t = "maxE"]) != r && ((y = 0 > n || n > C) || o(n) != n ? p(i, t, n, a, 0) : i[t] = N(n)), (n = e[t = "errors"]) != r && (n === !!n || 1 === n || 0 === n ? (y = w = 0, i[t] = !!n) : p(i, t, n, a, 1)), (n = e[t = "crypto"]) != r && (n === !!n || 1 === n || 0 === n ? i[t] = !(!n || !x || "object" != typeof x) : p(i, t, n, a, 1)), (n = e[t = "modulo"]) != r && ((y = 0 > n || n > 9) || o(n) != n ? p(i, t, n, a, 0) : i[t] = 0 | n), (e = e[t = "format"]) != r && ("object" == typeof e ? i[t] = e : p(i, "format object expected", e, a)), i)
				}

				function t(e) {
					return new this(e).exp()
				}

				function r(e) {
					return new this(e).ln()
				}

				function n(e, t) {
					return new this(e).log(t)
				}

				function i(e, t, r) {
					var n, i, a = 0;
					for ("[object Array]" == M.call(t[0]) && (t = t[0]), n = new e(t[0]); ++a < t.length;) {
						if (i = new e(t[a]), !i.s) {
							n = i;
							break
						}
						n[r](i) && (n = i)
					}
					return n
				}

				function a() {
					return i(this, arguments, "lt")
				}

				function o() {
					return i(this, arguments, "gt")
				}

				function s(e, t) {
					return new this(e).pow(t)
				}

				function c(e) {
					var t, r, n, i = 0,
						a = [],
						o = this,
						s = new o(o.ONE);
					if (null != e && u(s, e, "random") ? e |= 0 : e = o.precision, r = Math.ceil(e / _), o.crypto)
						if (x && x.getRandomValues)
							for (t = x.getRandomValues(new Uint32Array(r)); r > i;) n = t[i], n >= 429e7 ? t[i] = x.getRandomValues(new Uint32Array(1))[0] : a[i++] = n % 1e7;
						else if (x && x.randomBytes) {
						for (t = x.randomBytes(r *= 4); r > i;) n = t[i] + (t[i + 1] << 8) + (t[i + 2] << 16) + ((127 & t[i + 3]) << 24), n >= 214e7 ? x.randomBytes(4).copy(t, i) : (a.push(n % 1e7), i += 4);
						i = r / 4
					} else p(o, "crypto unavailable", x, "random");
					if (!i)
						for (; r > i;) a[i++] = 1e7 * Math.random() | 0;
					for (r = a[--i], e %= _, r && e && (n = E(10, _ - e), a[i] = (r / n | 0) * n); 0 === a[i]; i--) a.pop();
					if (0 > i) a = [r = 0];
					else {
						for (r = -1; 0 === a[0];) a.shift(), r -= _;
						for (i = 1, n = a[0]; n >= 10;) n /= 10, i++;
						_ > i && (r -= _ - i)
					}
					return s.e = r, s.c = a, s
				}

				function f(e) {
					return new this(e).sqrt()
				}

				function l(i) {
					function u(e, t) {
						var r = this;
						if (!(r instanceof u)) return p(u, "Decimal called without new", e), new u(e, t);
						if (r.constructor = u, e instanceof u) {
							if (null == t) return w = 0, r.s = e.s, r.e = e.e, r.c = (e = e.c) ? e.slice() : e, r;
							if (10 == t) return g(new u(e), u.precision, u.rounding);
							e += ""
						}
						return m(u, r, e, t)
					}
					return u.precision = 20, u.rounding = 4, u.modulo = 1, u.toExpNeg = -7, u.toExpPos = 21, u.minE = -C, u.maxE = C, u.errors = !0, u.crypto = !1, u.format = {
						decimalSeparator: ".",
						groupSeparator: ",",
						groupSize: 3,
						secondaryGroupSize: 0,
						fractionGroupSeparator: " ",
						fractionGroupSize: 0
					}, u.prototype = T, u.ONE = new u(1), u.ROUND_UP = 0, u.ROUND_DOWN = 1, u.ROUND_CEIL = 2, u.ROUND_FLOOR = 3, u.ROUND_HALF_UP = 4, u.ROUND_HALF_DOWN = 5, u.ROUND_HALF_EVEN = 6, u.ROUND_HALF_CEIL = 7, u.ROUND_HALF_FLOOR = 8, u.EUCLID = 9, u.config = e, u.constructor = l, u.exp = t, u.ln = r, u.log = n, u.max = a, u.min = o, u.pow = s, u.sqrt = f, u.random = c, null != i && u.config(i), u
				}
				var m = function() {
					var e = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
						t = String.prototype.trim || function() {
							return this.replace(/^\s+|\s+$/g, "")
						};
					return function(r, n, i, a) {
						var o, s, u, c, f, l;
						if ("string" != typeof i && (i = (c = "number" == typeof i || "[object Number]" == M.call(i)) && 0 === i && 0 > 1 / i ? "-0" : i + ""), f = i, null == a && e.test(i)) n.s = 45 === i.charCodeAt(0) ? (i = i.slice(1), -1) : 1;
						else {
							if (10 == a) return g(new r(i), r.precision, r.rounding);
							if (i = t.call(i).replace(/^\+(?!-)/, ""), n.s = 45 === i.charCodeAt(0) ? (i = i.replace(/^-(?!-)/, ""), -1) : 1, null != a ? a != (0 | a) && r.errors || (y = !(a >= 2 && 65 > a)) ? (p(r, "base", a, 0, 0), l = e.test(i)) : (o = "[" + O.slice(0, a = 0 | a) + "]+", i = i.replace(/\.$/, "").replace(/^\./, "0."), (l = new RegExp("^" + o + "(?:\\." + o + ")?$", 37 > a ? "i" : "").test(i)) ? (c && (i.replace(/^0\.0*|\./, "").length > 15 && p(r, 0, f), c = !c), i = v(r, i, 10, a, n.s)) : "Infinity" != i && "NaN" != i && (p(r, "not a base " + a + " number", f), i = "NaN")) : l = e.test(i), !l) return n.c = n.e = null, "Infinity" != i && ("NaN" != i && p(r, "not a number", f), n.s = null), w = 0, n
						}
						for ((s = i.indexOf(".")) > -1 && (i = i.replace(".", "")), (u = i.search(/e/i)) > 0 ? (0 > s && (s = u), s += +i.slice(u + 1), i = i.substring(0, u)) : 0 > s && (s = i.length), u = 0; 48 === i.charCodeAt(u); u++);
						for (a = i.length; 48 === i.charCodeAt(--a););
						if (i = i.slice(u, a + 1)) {
							if (a = i.length, c && a > 15 && p(r, 0, f), n.e = s = s - u - 1, n.c = [], u = (s + 1) % _, 0 > s && (u += _), a > u) {
								for (u && n.c.push(+i.slice(0, u)), a -= _; a > u;) n.c.push(+i.slice(u, u += _));
								i = i.slice(u), u = _ - i.length
							} else u -= a;
							for (; u--; i += "0");
							n.c.push(+i), b && (n.e > r.maxE ? n.c = n.e = null : n.e < r.minE && (n.c = [n.e = 0]))
						} else n.c = [n.e = 0];
						return w = 0, n
					}
				}();
				return l()
			}(), n = function() {
				return d
			}.call(t, r, t, e), !(void 0 !== n && (e.exports = n))
		}(this)
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("bignumber", {
				"": function() {
					return new e.BigNumber(0)
				},
				number: function(t) {
					return new e.BigNumber(t + "")
				},
				string: function(t) {
					return new e.BigNumber(t)
				},
				BigNumber: function(e) {
					return e
				},
				"Array | Matrix": function(e) {
					return i(e, a)
				}
			});
			return a.toTex = {
				0: "0",
				1: "\\left(${args[0]}\\right)"
			}, a
		}
		var i = r(19);
		t.name = "bignumber", t.factory = n
	}, function(e, t) {
		"use strict";
		e.exports = function r(e, t, n) {
			return e && "function" == typeof e.map ? e.map(function(e) {
				return r(e, t, n)
			}) : t(e)
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("bool", {
				"": function() {
					return !1
				},
				"boolean": function(e) {
					return e
				},
				number: function(e) {
					return !!e
				},
				BigNumber: function(e) {
					return !e.isZero()
				},
				string: function(e) {
					var t = e.toLowerCase();
					if ("true" === t) return !0;
					if ("false" === t) return !1;
					var r = Number(e);
					if ("" != e && !isNaN(r)) return !!r;
					throw new Error('Cannot convert "' + e + '" to a boolean')
				},
				"Array | Matrix": function(e) {
					return i(e, a)
				}
			});
			return a
		}
		var i = r(19);
		t.name = "boolean", t.factory = n
	}, function(e, t, r) {
		e.exports = [r(22), r(25)]
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n, o) {
			function s(e) {
				if (!(this instanceof s)) throw new SyntaxError("Constructor must be called with the new operator");
				e && e.isChain ? this.value = e.value : this.value = e
			}

			function u(e, t) {
				"function" == typeof t && (s.prototype[e] = f(t))
			}

			function c(e, t) {
				a(s.prototype, e, function() {
					var e = t();
					return "function" == typeof e ? f(e) : void 0
				})
			}

			function f(e) {
				return function() {
					for (var t = [this.value], r = 0; r < arguments.length; r++) t[r + 1] = arguments[r];
					return new s(e.apply(e, t))
				}
			}
			return s.prototype.type = "Chain", s.prototype.isChain = !0, s.prototype.done = function() {
				return this.value
			}, s.prototype.valueOf = function() {
				return this.value
			}, s.prototype.toString = function() {
				return i(this.value)
			}, s.createProxy = function(e, t) {
				if ("string" == typeof e) u(e, t);
				else
					for (var r in e) e.hasOwnProperty(r) && u(r, e[r])
			}, s.createProxy(o), o.on("import", function(e, t, r) {
				void 0 === r && c(e, t)
			}), s
		}
		var i = r(23).format,
			a = r(3).lazy;
		t.name = "Chain", t.path = "type", t.factory = n, t.math = !0, t.lazy = !1
	}, function(e, t, r) {
		"use strict";

		function n(e, r) {
			if (Array.isArray(e)) {
				for (var i = "[", a = e.length, o = 0; a > o; o++) 0 != o && (i += ", "), i += n(e[o], r);
				return i += "]"
			}
			return t.format(e, r)
		}
		var i = r(6).format,
			a = r(24).format;
		t.isString = function(e) {
			return "string" == typeof e
		}, t.endsWith = function(e, t) {
			var r = e.length - t.length,
				n = e.length;
			return e.substring(r, n) === t
		}, t.format = function(e, r) {
			return "number" == typeof e ? i(e, r) : e && e.isBigNumber === !0 ? a(e, r) : e && e.isFraction === !0 ? r && "decimal" === r.fraction ? e.toString() : e.s * e.n + "/" + e.d : Array.isArray(e) ? n(e, r) : t.isString(e) ? '"' + e + '"' : "function" == typeof e ? e.syntax ? e.syntax + "" : "function" : "object" == typeof e ? "function" == typeof e.format ? e.format(r) : e.toString() : String(e)
		}
	}, function(e, t) {
		t.format = function(e, r) {
			if ("function" == typeof r) return r(e);
			if (!e.isFinite()) return e.isNaN() ? "NaN" : e.gt(0) ? "Infinity" : "-Infinity";
			var n = "auto",
				i = void 0;
			switch (void 0 !== r && (r.notation && (n = r.notation), "number" == typeof r ? i = r : r.precision && (i = r.precision)), n) {
				case "fixed":
					return t.toFixed(e, i);
				case "exponential":
					return t.toExponential(e, i);
				case "auto":
					var a = .001,
						o = 1e5;
					r && r.exponential && (void 0 !== r.exponential.lower && (a = r.exponential.lower), void 0 !== r.exponential.upper && (o = r.exponential.upper));
					({
						toExpNeg: e.constructor.toExpNeg,
						toExpPos: e.constructor.toExpPos
					});
					if (e.constructor.config({
							toExpNeg: Math.round(Math.log(a) / Math.LN10),
							toExpPos: Math.round(Math.log(o) / Math.LN10)
						}), e.isZero()) return "0";
					var s, u = e.abs();
					return s = u.gte(a) && u.lt(o) ? e.toSignificantDigits(i).toFixed() : t.toExponential(e, i), s.replace(/((\.\d*?)(0+))($|e)/, function() {
						var e = arguments[2],
							t = arguments[4];
						return "." !== e ? e + t : t
					});
				default:
					throw new Error('Unknown notation "' + n + '". Choose "auto", "exponential", or "fixed".')
			}
		}, t.toExponential = function(e, t) {
			return void 0 !== t ? e.toExponential(t - 1) : e.toExponential()
		}, t.toFixed = function(e, t) {
			return e.toFixed(t || 0)
		}
	}, function(e, t) {
		"use strict";

		function r(e, t, r, n) {
			return n("chain", {
				"": function() {
					return new e.Chain
				},
				any: function(t) {
					return new e.Chain(t)
				}
			})
		}
		t.name = "chain", t.factory = r
	}, function(e, t, r) {
		e.exports = [r(27), r(28)]
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			function o(e, t) {
				if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator");
				switch (arguments.length) {
					case 0:
						this.re = 0, this.im = 0;
						break;
					case 1:
						var r = arguments[0];
						if ("object" == typeof r) {
							if ("re" in r && "im" in r) {
								var n = new o(r.re, r.im);
								this.re = n.re, this.im = n.im;
								break
							}
							if ("r" in r && "phi" in r) {
								var n = o.fromPolar(r.r, r.phi);
								this.re = n.re, this.im = n.im;
								break
							}
						}
						throw new SyntaxError("Object with the re and im or r and phi properties expected.");
					case 2:
						if (!i(e) || !i(t)) throw new TypeError("Two numbers expected in Complex constructor");
						this.re = e, this.im = t;
						break;
					default:
						throw new SyntaxError("One, two or three arguments expected in Complex constructor")
				}
			}

			function s() {
				for (;
					" " == d || "	" == d;) f()
			}

			function u(e) {
				return e >= "0" && "9" >= e || "." == e
			}

			function c(e) {
				return e >= "0" && "9" >= e
			}

			function f() {
				v++, d = g.charAt(v)
			}

			function l(e) {
				v = e, d = g.charAt(v)
			}

			function p() {
				var e, t = "";
				if (e = v, "+" == d ? f() : "-" == d && (t += d, f()), !u(d)) return l(e), null;
				if ("." == d) {
					if (t += d, f(), !c(d)) return l(e), null
				} else {
					for (; c(d);) t += d, f();
					"." == d && (t += d, f())
				}
				for (; c(d);) t += d, f();
				if ("E" == d || "e" == d) {
					if (t += d, f(), ("+" == d || "-" == d) && (t += d, f()), !c(d)) return l(e), null;
					for (; c(d);) t += d, f()
				}
				return t
			}

			function m() {
				var e = g.charAt(v + 1);
				if ("I" == d || "i" == d) return f(), "1";
				if (!("+" != d && "-" != d || "I" != e && "i" != e)) {
					var t = "+" == d ? "1" : "-1";
					return f(), f(), t
				}
				return null
			}

			function h() {
				return new SyntaxError('End of string expected, got "' + g.substr(v) + '"')
			}
			o.prototype.isComplex = !0, o.prototype.type = "Complex";
			var g, v, d;
			return o.parse = function(e) {
				if (g = e, v = -1, d = "", "string" != typeof g) throw new TypeError("Invalid argument in Complex.parse, string expected");
				f(), s();
				var t = p();
				if (t) {
					if ("I" == d || "i" == d) {
						if (f(), s(), d) throw h();
						return new o(0, Number(t))
					}
					s();
					var r = d;
					if ("+" != r && "-" != r) {
						if (s(), d) throw h();
						return new o(Number(t), 0)
					}
					f(), s();
					var n = p();
					if (n) {
						if ("I" != d && "i" != d) throw new SyntaxError('Character "i" expected, got "' + d + '"');
						f()
					} else if (n = m(), !n) throw new SyntaxError("Imaginary part expected");
					if ("-" == r && (n = "-" == n[0] ? "+" + n.substring(1) : "-" + n), f(), s(), d) throw h();
					return new o(Number(t), Number(n))
				}
				if (t = m()) {
					if (s(), d) throw h();
					return new o(0, Number(t))
				}
				throw new SyntaxError('Could not parse: "' + e + '" as complex number')
			}, o.fromPolar = function(e) {
				switch (arguments.length) {
					case 1:
						var t = arguments[0];
						if ("object" == typeof t) return o.fromPolar(t.r, t.phi);
						throw new TypeError("Input has to be an object with r and phi keys.");
					case 2:
						var r = arguments[0],
							n = arguments[1];
						if (i(r)) {
							if (n && n.isUnit && n.hasBase("ANGLE") && (n = n.toNumber("rad")), i(n)) return new o(r * Math.cos(n), r * Math.sin(n));
							throw new TypeError("Phi is not a number nor an angle unit.")
						}
						throw new TypeError("Radius r is not a number.");
					default:
						throw new SyntaxError("Wrong number of arguments in function fromPolar")
				}
			}, o.prototype.toPolar = function() {
				return {
					r: Math.sqrt(this.re * this.re + this.im * this.im),
					phi: Math.atan2(this.im, this.re)
				}
			}, o.prototype.clone = function() {
				return new o(this.re, this.im)
			}, o.prototype.equals = function(e) {
				return this.re === e.re && this.im === e.im
			}, o.prototype.format = function(e) {
				var t = "",
					r = this.im,
					n = this.re,
					o = a(this.re, e),
					s = a(this.im, e),
					u = i(e) ? e : e ? e.precision : null;
				if (null !== u) {
					var c = Math.pow(10, -u);
					Math.abs(n / r) < c && (n = 0), Math.abs(r / n) < c && (r = 0)
				}
				return t = 0 == r ? o : 0 == n ? 1 == r ? "i" : -1 == r ? "-i" : s + "i" : r > 0 ? 1 == r ? o + " + i" : o + " + " + s + "i" : -1 == r ? o + " - i" : o + " - " + s.substring(1) + "i"
			}, o.prototype.toString = function() {
				return this.format()
			}, o.prototype.toJSON = function() {
				return {
					mathjs: "Complex",
					re: this.re,
					im: this.im
				}
			}, o.fromJSON = function(e) {
				return new o(e)
			}, o.prototype.valueOf = o.prototype.toString, o
		}
		var i = r(6).isNumber,
			a = r(6).format;
		t.name = "Complex", t.path = "type", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = r(29),
				s = a("complex", {
					"": function() {
						return new e.Complex(0, 0)
					},
					number: function(t) {
						return new e.Complex(t, 0)
					},
					"number, number": function(t, r) {
						return new e.Complex(t, r)
					},
					"BigNumber, BigNumber": function(t, r) {
						return new e.Complex(t.toNumber(), r.toNumber())
					},
					Complex: function(e) {
						return e.clone()
					},
					string: function(t) {
						return e.Complex.parse(t)
					},
					Object: function(t) {
						if ("re" in t && "im" in t) return new e.Complex(t.re, t.im);
						if ("r" in t && "phi" in t) return e.Complex.fromPolar(t.r, t.phi);
						throw new Error("Expected object with either properties re and im, or properties r and phi.")
					},
					"Array | Matrix": function(e) {
						return i(e, s)
					}
				});
			return s.toTex = {
				0: "0",
				1: "\\left(${args[0]}\\right)",
				2: "\\left(\\left(${args[0]}\\right)+" + o.symbols.i + "\\cdot\\left(${args[1]}\\right)\\right)"
			}, s
		}
		var i = r(19);
		t.name = "complex", t.factory = n
	}, function(e, t) {
		"use strict";
		t.symbols = {
			Alpha: "A",
			alpha: "\\alpha",
			Beta: "B",
			beta: "\\beta",
			Gamma: "\\Gamma",
			gamma: "\\gamma",
			Delta: "\\Delta",
			delta: "\\delta",
			Epsilon: "E",
			epsilon: "\\epsilon",
			varepsilon: "\\varepsilon",
			Zeta: "Z",
			zeta: "\\zeta",
			Eta: "H",
			eta: "\\eta",
			Theta: "\\Theta",
			theta: "\\theta",
			vartheta: "\\vartheta",
			Iota: "I",
			iota: "\\iota",
			Kappa: "K",
			kappa: "\\kappa",
			varkappa: "\\varkappa",
			Lambda: "\\Lambda",
			lambda: "\\lambda",
			Mu: "M",
			mu: "\\mu",
			Nu: "N",
			nu: "\\nu",
			Xi: "\\Xi",
			xi: "\\xi",
			Omicron: "O",
			omicron: "o",
			Pi: "\\Pi",
			pi: "\\pi",
			varpi: "\\varpi",
			Rho: "P",
			rho: "\\rho",
			varrho: "\\varrho",
			Sigma: "\\Sigma",
			sigma: "\\sigma",
			varsigma: "\\varsigma",
			Tau: "T",
			tau: "\\tau",
			Upsilon: "\\Upsilon",
			upsilon: "\\upsilon",
			Phi: "\\Phi",
			phi: "\\phi",
			varphi: "\\varphi",
			Chi: "X",
			chi: "\\chi",
			Psi: "\\Psi",
			psi: "\\psi",
			Omega: "\\Omega",
			omega: "\\omega",
			"true": "\\mathrm{True}",
			"false": "\\mathrm{False}",
			i: "i",
			inf: "\\infty",
			Inf: "\\infty",
			infinity: "\\infty",
			Infinity: "\\infty",
			oo: "\\infty",
			lim: "\\lim",
			undefined: "\\mathbf{?}"
		}, t.operators = {
			transpose: "^\\top",
			factorial: "!",
			pow: "^",
			dotPow: ".^\\wedge",
			unaryPlus: "+",
			unaryMinus: "-",
			bitNot: "~",
			not: "\\neg",
			multiply: "\\cdot",
			divide: "\\frac",
			dotMultiply: ".\\cdot",
			dotDivide: ".:",
			mod: "\\mod",
			add: "+",
			subtract: "-",
			to: "\\rightarrow",
			leftShift: "<<",
			rightArithShift: ">>",
			rightLogShift: ">>>",
			equal: "=",
			unequal: "\\neq",
			smaller: "<",
			larger: ">",
			smallerEq: "\\leq",
			largerEq: "\\geq",
			bitAnd: "\\&",
			bitXor: "\\underline{|}",
			bitOr: "|",
			and: "\\wedge",
			xor: "\\veebar",
			or: "\\vee"
		}, t.defaultTemplate = "\\mathrm{${name}}\\left(${args}\\right)";
		var r = {
			deg: "^\\circ"
		};
		t.toSymbol = function(e, n) {
			if (n = "undefined" == typeof n ? !1 : n) return r.hasOwnProperty(e) ? r[e] : "\\mathrm{" + e + "}";
			if (t.symbols.hasOwnProperty(e)) return t.symbols[e];
			if (-1 !== e.indexOf("_")) {
				var i = e.indexOf("_");
				return t.toSymbol(e.substring(0, i)) + "_{" + t.toSymbol(e.substring(i + 1)) + "}"
			}
			return e
		}
	}, function(e, t, r) {
		e.exports = [r(31), r(35)]
	}, function(e, t, r) {
		function n(e, t, r, n) {
			return i
		}
		var i = r(32);
		i.prototype.type = "Fraction", i.prototype.isFraction = !0, i.prototype.toJSON = function() {
			return {
				mathjs: "Fraction",
				n: this.s * this.n,
				d: this.d
			}
		}, i.fromJSON = function(e) {
			return new i(e)
		}, t.name = "Fraction", t.path = "type", t.factory = n
	}, function(e, t, r) {
		var n, i;
		(function(e) {
			! function(a) {
				"use strict";

				function o(e, t) {
					return isNaN(e = parseInt(e, 10)) && s(), e * t
				}

				function s() {
					throw "Invalid Param"
				}

				function u(e, t) {
					return this instanceof u ? (l(e, t), e = u.REDUCE ? g(f.d, f.n) : 1, this.s = f.s, this.n = f.n / e, void(this.d = f.d / e)) : new u(e, t)
				}
				var c = 2e3,
					f = {
						s: 1,
						n: 0,
						d: 1
					},
					l = function(e, t) {
						var r, n = 0,
							i = 1,
							a = 1,
							u = 0,
							c = 0,
							l = 0,
							p = 1,
							m = 1,
							h = 0,
							g = 1,
							v = 1,
							d = 1,
							y = 1e7;
						if (void 0 === e || null === e);
						else if (void 0 !== t) n = e, i = t, a = n * i;
						else switch (typeof e) {
							case "object":
								"d" in e && "n" in e ? (n = e.n, i = e.d, "s" in e && (n *= e.s)) : 0 in e ? (n = e[0], 1 in e && (i = e[1])) : s(), a = n * i;
								break;
							case "number":
								if (0 > e && (a = e, e = -e), e % 1 === 0) n = e;
								else if (e > 0) {
									for (e >= 1 && (m = Math.pow(10, Math.floor(1 + Math.log(e) / Math.LN10)), e /= m); y >= g && y >= d;) {
										if (r = (h + v) / (g + d), e === r) {
											y >= g + d ? (n = h + v, i = g + d) : d > g ? (n = v, i = d) : (n = h, i = g);
											break
										}
										e > r ? (h += v, g += d) : (v += h, d += g), g > y ? (n = v, i = d) : (n = h, i = g)
									}
									n *= m
								}
								break;
							case "string":
								if (g = e.match(/\d+|./g), "-" === g[h] ? (a = -1, h++) : "+" === g[h] && h++, g.length === h + 1 ? c = o(g[h++], a) : "." === g[h + 1] || "." === g[h] ? ("." !== g[h] && (u = o(g[h++], a)), h++, (h + 1 === g.length || "(" === g[h + 1] && ")" === g[h + 3] || "'" === g[h + 1] && "'" === g[h + 3]) && (c = o(g[h], a), p = Math.pow(10, g[h].length), h++), ("(" === g[h] && ")" === g[h + 2] || "'" === g[h] && "'" === g[h + 2]) && (l = o(g[h + 1], a), m = Math.pow(10, g[h + 1].length) - 1, h += 3)) : "/" === g[h + 1] || ":" === g[h + 1] ? (c = o(g[h], a), p = o(g[h + 2], 1), h += 3) : "/" === g[h + 3] && " " === g[h + 1] && (u = o(g[h], a), c = o(g[h + 2], a), p = o(g[h + 4], 1), h += 5), g.length <= h) {
									a = n = l + m * (u * p + c), i = p * m;
									break
								}
							default:
								s()
						}
						if (!i) throw "DIV/0";
						f.s = 0 > a ? -1 : 1, f.n = Math.abs(n), f.d = Math.abs(i)
					},
					p = function(e, t, r) {
						for (var n = 1; t > 0; e = e * e % r, t >>= 1) 1 & t && (n = n * e % r);
						return n
					},
					m = function(e, t) {
						for (; t % 2 === 0; t /= 2);
						for (; t % 5 === 0; t /= 5);
						if (1 === t) return 0;
						for (var r = 10 % t, n = 1; 1 !== r; n++)
							if (r = 10 * r % t, n > c) return 0;
						return n
					},
					h = function(e, t, r) {
						for (var n = 1, i = p(10, r, t), a = 0; 300 > a; a++) {
							if (n === i) return a;
							n = 10 * n % t, i = 10 * i % t
						}
						return 0
					},
					g = function(e, t) {
						if (!e) return t;
						if (!t) return e;
						for (;;) {
							if (e %= t, !e) return t;
							if (t %= e, !t) return e
						}
					};
				u.REDUCE = 1, u.prototype = {
					s: 1,
					n: 0,
					d: 1,
					abs: function() {
						return new u(this.n, this.d)
					},
					neg: function() {
						return new u(-this.s * this.n, this.d)
					},
					add: function(e, t) {
						return l(e, t), new u(this.s * this.n * f.d + f.s * this.d * f.n, this.d * f.d)
					},
					sub: function(e, t) {
						return l(e, t), new u(this.s * this.n * f.d - f.s * this.d * f.n, this.d * f.d)
					},
					mul: function(e, t) {
						return l(e, t), new u(this.s * f.s * this.n * f.n, this.d * f.d)
					},
					div: function(e, t) {
						return l(e, t), new u(this.s * f.s * this.n * f.d, this.d * f.n)
					},
					clone: function() {
						return new u(this)
					},
					mod: function(e, t) {
						return void 0 === e ? new u(this.s * this.n % this.d, 1) : (l(e, t), 0 === f.n * this.d && u(0, 0), new u(this.s * f.d * this.n % (f.n * this.d), f.d * this.d))
					},
					gcd: function(e, t) {
						return l(e, t), new u(g(f.n, this.n), f.d * this.d / g(f.d, this.d))
					},
					lcm: function(e, t) {
						return l(e, t), new u(f.n * this.n / g(f.n, this.n), g(f.d, this.d))
					},
					ceil: function() {
						return new u(Math.ceil(this.s * this.n / this.d), 1)
					},
					floor: function() {
						return new u(Math.floor(this.s * this.n / this.d), 1)
					},
					round: function() {
						return new u(Math.round(this.s * this.n / this.d), 1)
					},
					inverse: function() {
						return new u(this.s * this.d, this.n)
					},
					pow: function(e) {
						var t = this.d,
							r = this.n;
						return 0 > e ? (this.d = Math.pow(r, -e), this.n = Math.pow(t, -e)) : (this.d = Math.pow(t, e), this.n = Math.pow(r, e)), 0 === e % 2 && (this.s = 1), this
					},
					equals: function(e, t) {
						return l(e, t), this.s * this.n * f.d === f.s * f.n * this.d
					},
					compare: function(e, t) {
						l(e, t);
						var r = this.s * this.n * f.d - f.s * f.n * this.d;
						return (r > 0) - (0 > r)
					},
					divisible: function(e, t) {
						return l(e, t), !(!(f.n * this.d) || this.n * f.d % (f.n * this.d))
					},
					valueOf: function() {
						return this.s * this.n / this.d
					},
					toFraction: function(e) {
						var t, r = "",
							n = this.n,
							i = this.d;
						return this.s < 0 && (r += "-"), 1 === i ? r += n : (e && (t = Math.floor(n / i)) > 0 && (r += t, r += " ", n %= i), r += n, r += "/", r += i), r
					},
					toLatex: function(e) {
						var t, r = "",
							n = this.n,
							i = this.d;
						return this.s < 0 && (r += "-"), 1 === i ? r += n : (e && (t = Math.floor(n / i)) > 0 && (r += t, n %= i), r += "\\frac{", r += n, r += "}{", r += i, r += "}"), r
					},
					toString: function() {
						var e, t = this.n,
							r = this.d;
						u.REDUCE || (e = g(t, r), t /= e, r /= e);
						for (var n = String(t).split(""), i = 0, a = [~this.s ? "" : "-", "", ""], o = "", s = m(t, r), c = h(t, r, s), f = -1, l = 1, p = 10 + s + c + n.length, v = 0; p > v; v++, i *= 10) {
							if (v < n.length ? i += Number(n[v]) : (l = 2, f++), s > 0)
								if (f === c) a[l] += o + "(", o = "";
								else if (f === s + c) {
								a[l] += o + ")";
								break
							}
							i >= r ? (a[l] += o + (i / r | 0), o = "", i %= r) : l > 1 ? o += "0" : a[l] && (a[l] += "0")
						}
						return a[0] += a[1] || "0", a[2] ? a[0] + "." + a[2] : a[0]
					}
				}, r(34).amd ? (n = [], i = function() {
					return u
				}.apply(t, n), !(void 0 !== i && (e.exports = i))) : e.exports = u
			}(this)
		}).call(t, r(33)(e))
	}, function(e, t) {
		e.exports = function(e) {
			return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
		}
	}, function(e, t) {
		e.exports = function() {
			throw new Error("define cannot be used indirect")
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("fraction", {
				number: function(t) {
					if (!isFinite(t) || isNaN(t)) throw new Error(t + " cannot be represented as a fraction");
					return new e.Fraction(t)
				},
				string: function(t) {
					return new e.Fraction(t)
				},
				"number, number": function(t, r) {
					return new e.Fraction(t, r)
				},
				Fraction: function(e) {
					return e
				},
				Object: function(t) {
					return new e.Fraction(t)
				},
				"Array | Matrix": function(e) {
					return i(e, a)
				}
			});
			return a
		}
		var i = r(19);
		t.name = "fraction", t.factory = n
	}, function(e, t, r) {
		e.exports = [r(37), r(45), r(46), r(48), r(57), r(63), r(64), r(65), r(66), r(50), r(67)]
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			function i() {
				if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator")
			}
			return i.prototype.type = "Matrix", i.prototype.isMatrix = !0, i.storage = function(e) {
				if (!o(e)) throw new TypeError("format must be a string value");
				var t = i._storage[e];
				if (!t) throw new SyntaxError("Unsupported matrix storage format: " + e);
				return t
			}, i._storage = {}, i.prototype.storage = function() {
				throw new Error("Cannot invoke storage on a Matrix interface")
			}, i.prototype.datatype = function() {
				throw new Error("Cannot invoke datatype on a Matrix interface")
			}, i.prototype.create = function(e, t) {
				throw new Error("Cannot invoke create on a Matrix interface")
			}, i.prototype.subset = function(e, t, r) {
				throw new Error("Cannot invoke subset on a Matrix interface")
			}, i.prototype.get = function(e) {
				throw new Error("Cannot invoke get on a Matrix interface")
			}, i.prototype.set = function(e, t, r) {
				throw new Error("Cannot invoke set on a Matrix interface")
			}, i.prototype.resize = function(e, t) {
				throw new Error("Cannot invoke resize on a Matrix interface")
			}, i.prototype.clone = function() {
				throw new Error("Cannot invoke clone on a Matrix interface")
			}, i.prototype.size = function() {
				throw new Error("Cannot invoke size on a Matrix interface")
			}, i.prototype.map = function(e, t) {
				throw new Error("Cannot invoke map on a Matrix interface")
			}, i.prototype.forEach = function(e) {
				throw new Error("Cannot invoke forEach on a Matrix interface")
			}, i.prototype.toArray = function() {
				throw new Error("Cannot invoke toArray on a Matrix interface")
			}, i.prototype.valueOf = function() {
				throw new Error("Cannot invoke valueOf on a Matrix interface")
			}, i.prototype.format = function(e) {
				throw new Error("Cannot invoke format on a Matrix interface")
			}, i.prototype.toString = function() {
				throw new Error("Cannot invoke toString on a Matrix interface")
			}, i
		}
		var i = r(38),
			a = i.string,
			o = a.isString;
		t.name = "Matrix", t.path = "type", t.factory = n
	}, function(e, t, r) {
		"use strict";
		t.array = r(39), t["boolean"] = r(43), t["function"] = r(44), t.number = r(6), t.object = r(3), t.string = r(23), t.types = r(40), t.emitter = r(8)
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r) {
			var i, a = e.length;
			if (a != t[r]) throw new f(a, t[r]);
			if (r < t.length - 1) {
				var o = r + 1;
				for (i = 0; a > i; i++) {
					var s = e[i];
					if (!Array.isArray(s)) throw new f(t.length - 1, t.length, "<");
					n(e[i], t, o)
				}
			} else
				for (i = 0; a > i; i++)
					if (Array.isArray(e[i])) throw new f(t.length + 1, t.length, ">")
		}

		function i(e, r, n, a) {
			var o, s, u = e.length,
				f = r[n],
				l = Math.min(u, f);
			if (e.length = f, n < r.length - 1) {
				var p = n + 1;
				for (o = 0; l > o; o++) s = e[o], Array.isArray(s) || (s = [s], e[o] = s), i(s, r, p, a);
				for (o = l; f > o; o++) s = [], e[o] = s, i(s, r, p, a)
			} else {
				for (o = 0; l > o; o++)
					for (; Array.isArray(e[o]);) e[o] = e[o][0];
				if (a !== t.UNINITIALIZED)
					for (o = l; f > o; o++) e[o] = c.clone(a)
			}
		}

		function a(e, t, r) {
			var n, i;
			if (t > r) {
				var o = r + 1;
				for (n = 0, i = e.length; i > n; n++) e[n] = a(e[n], t, o)
			} else
				for (; Array.isArray(e);) e = e[0];
			return e
		}

		function o(e, t, r) {
			var n, i;
			if (Array.isArray(e)) {
				var a = r + 1;
				for (n = 0, i = e.length; i > n; n++) e[n] = o(e[n], t, a)
			} else
				for (var s = r; t > s; s++) e = [e];
			return e
		}
		var s = r(6),
			u = r(23),
			c = r(3),
			f = (r(40), r(41)),
			l = r(42);
		t.size = function(e) {
			for (var t = []; Array.isArray(e);) t.push(e.length), e = e[0];
			return t
		}, t.validate = function(e, t) {
			var r = 0 == t.length;
			if (r) {
				if (Array.isArray(e)) throw new f(e.length, 0)
			} else n(e, t, 0)
		}, t.validateIndex = function(e, t) {
			if (!s.isNumber(e) || !s.isInteger(e)) throw new TypeError("Index must be an integer (value: " + e + ")");
			if (0 > e) throw new l(e);
			if (void 0 !== t && e >= t) throw new l(e, t)
		}, t.UNINITIALIZED = {}, t.resize = function(e, t, r) {
			if (!Array.isArray(e) || !Array.isArray(t)) throw new TypeError("Array expected");
			if (0 === t.length) throw new Error("Resizing to scalar is not supported");
			t.forEach(function(e) {
				if (!s.isNumber(e) || !s.isInteger(e) || 0 > e) throw new TypeError("Invalid size, must contain positive integers (size: " + u.format(t) + ")")
			});
			var n = void 0 !== r ? r : 0;
			return i(e, t, 0, n), e
		}, t.squeeze = function(e, r) {
			for (var n = r || t.size(e); Array.isArray(e) && 1 === e.length;) e = e[0], n.shift();
			for (var i = n.length; 1 === n[i - 1];) i--;
			return i < n.length && (e = a(e, i, 0), n.length = i), e
		}, t.unsqueeze = function(e, r, n, i) {
			var a = i || t.size(e);
			if (n)
				for (var s = 0; n > s; s++) e = [e], a.unshift(1);
			for (e = o(e, r, 0); a.length < r;) a.push(1);
			return e
		}, t.flatten = function(e) {
			if (!Array.isArray(e)) return e;
			var t = [];
			return e.forEach(function r(e) {
				Array.isArray(e) ? e.forEach(r) : t.push(e)
			}), t
		}, t.isArray = Array.isArray
	}, function(e, t) {
		"use strict";
		t.type = function(e) {
			var t = typeof e;
			return "object" === t ? null === e ? "null" : e instanceof Boolean ? "boolean" : e instanceof Number ? "number" : e instanceof String ? "string" : Array.isArray(e) ? "Array" : e instanceof Date ? "Date" : e instanceof RegExp ? "RegExp" : "Object" : "function" === t ? "Function" : t
		}
	}, function(e, t) {
		"use strict";

		function r(e, t, n) {
			if (!(this instanceof r)) throw new SyntaxError("Constructor must be called with the new operator");
			this.actual = e, this.expected = t, this.relation = n, this.message = "Dimension mismatch (" + (Array.isArray(e) ? "[" + e.join(", ") + "]" : e) + " " + (this.relation || "!=") + " " + (Array.isArray(t) ? "[" + t.join(", ") + "]" : t) + ")", this.stack = (new Error).stack
		}
		r.prototype = new RangeError, r.prototype.constructor = RangeError, r.prototype.name = "DimensionError", r.prototype.isDimensionError = !0, e.exports = r
	}, function(e, t) {
		"use strict";

		function r(e, t, n) {
			if (!(this instanceof r)) throw new SyntaxError("Constructor must be called with the new operator");
			this.index = e, arguments.length < 3 ? (this.min = 0, this.max = t) : (this.min = t, this.max = n), void 0 !== this.min && this.index < this.min ? this.message = "Index out of range (" + this.index + " < " + this.min + ")" : void 0 !== this.max && this.index >= this.max ? this.message = "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : this.message = "Index out of range (" + this.index + ")", this.stack = (new Error).stack
		}
		r.prototype = new RangeError, r.prototype.constructor = RangeError, r.prototype.name = "IndexError", r.prototype.isIndexError = !0, e.exports = r
	}, function(e, t) {
		"use strict";
		t.isBoolean = function(e) {
			return "boolean" == typeof e
		}
	}, function(e, t) {
		t.memoize = function(e, t) {
			return function r() {
				"object" != typeof r.cache && (r.cache = {});
				for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
				var a = t ? t(n) : JSON.stringify(n);
				return a in r.cache ? r.cache[a] : r.cache[a] = e.apply(e, n)
			}
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, c) {
			function g(e, t) {
				if (!(this instanceof g)) throw new SyntaxError("Constructor must be called with the new operator");
				if (t && !m(t)) throw new Error("Invalid datatype: " + t);
				if (e && e.isMatrix === !0) "DenseMatrix" === e.type ? (this._data = u.clone(e._data), this._size = u.clone(e._size), this._datatype = t || e._datatype) : (this._data = e.toArray(), this._size = e.size(), this._datatype = t || e._datatype);
				else if (e && f(e.data) && f(e.size)) this._data = e.data, this._size = e.size, this._datatype = t || e.datatype;
				else if (f(e)) this._data = w(e), this._size = s.size(this._data), s.validate(this._data, this._size), this._datatype = t;
				else {
					if (e) throw new TypeError("Unsupported type of data (" + i.types.type(e) + ")");
					this._data = [], this._size = [0], this._datatype = t
				}
			}

			function v(e, t) {
				if (!t || t.isIndex !== !0) throw new TypeError("Invalid index");
				var r = t.isScalar();
				if (r) return e.get(t.min());
				var n = t.size();
				if (n.length != e._size.length) throw new a(n.length, e._size.length);
				for (var i = t.min(), o = t.max(), s = 0, u = e._size.length; u > s; s++) h(i[s], e._size[s]), h(o[s], e._size[s]);
				return new g(d(e._data, t, n.length, 0), e._datatype)
			}

			function d(e, t, r, n) {
				var i = n == r - 1,
					a = t.dimension(n);
				return i ? a.map(function(t) {
					return e[t]
				}).valueOf() : a.map(function(i) {
					var a = e[i];
					return d(a, t, r, n + 1)
				}).valueOf()
			}

			function y(e, t, r, n) {
				if (!t || t.isIndex !== !0) throw new TypeError("Invalid index");
				var i, o = t.size(),
					c = t.isScalar();
				if (r && r.isMatrix === !0 ? (i = r.size(), r = r.valueOf()) : i = s.size(r), c) {
					if (0 !== i.length) throw new TypeError("Scalar expected");
					e.set(t.min(), r, n)
				} else {
					if (o.length < e._size.length) throw new a(o.length, e._size.length, "<");
					if (i.length < o.length) {
						for (var f = 0, l = 0; 1 === o[f] && 1 === i[f];) f++;
						for (; 1 === o[f];) l++, f++;
						r = s.unsqueeze(r, o.length, l, i)
					}
					if (!u.deepEqual(o, i)) throw new a(o, i, ">");
					var p = t.max().map(function(e) {
						return e + 1
					});
					b(e, p, n);
					var m = o.length,
						h = 0;
					x(e._data, t, r, m, h)
				}
				return e
			}

			function x(e, t, r, n, i) {
				var a = i == n - 1,
					o = t.dimension(i);
				a ? o.forEach(function(t, n) {
					h(t), e[t] = r[n[0]]
				}) : o.forEach(function(a, o) {
					h(a), x(e[a], t, r[o[0]], n, i + 1)
				})
			}

			function b(e, t, r) {
				for (var n = u.clone(e._size), i = !1; n.length < t.length;) n.push(0), i = !0;
				for (var a = 0, o = t.length; o > a; a++) t[a] > n[a] && (n[a] = t[a], i = !0);
				i && E(e, n, r)
			}

			function w(e) {
				for (var t = 0, r = e.length; r > t; t++) {
					var n = e[t];
					f(n) ? e[t] = w(n) : n && n.isMatrix === !0 && (e[t] = w(n.valueOf()))
				}
				return e
			}
			var N = n(r(37));
			g.prototype = new N, g.prototype.type = "DenseMatrix", g.prototype.isDenseMatrix = !0, g.prototype.storage = function() {
				return "dense"
			}, g.prototype.datatype = function() {
				return this._datatype
			}, g.prototype.create = function(e, t) {
				return new g(e, t)
			}, g.prototype.subset = function(e, t, r) {
				switch (arguments.length) {
					case 1:
						return v(this, e);
					case 2:
					case 3:
						return y(this, e, t, r);
					default:
						throw new SyntaxError("Wrong number of arguments")
				}
			}, g.prototype.get = function(e) {
				if (!f(e)) throw new TypeError("Array expected");
				if (e.length != this._size.length) throw new a(e.length, this._size.length);
				for (var t = 0; t < e.length; t++) h(e[t], this._size[t]);
				for (var r = this._data, n = 0, i = e.length; i > n; n++) {
					var o = e[n];
					h(o, r.length), r = r[o]
				}
				return u.clone(r)
			}, g.prototype.set = function(e, t, r) {
				if (!f(e)) throw new TypeError("Array expected");
				if (e.length < this._size.length) throw new a(e.length, this._size.length, "<");
				var n, i, o, s = e.map(function(e) {
					return e + 1
				});
				b(this, s, r);
				var u = this._data;
				for (n = 0, i = e.length - 1; i > n; n++) o = e[n], h(o, u.length), u = u[o];
				return o = e[e.length - 1], h(o, u.length), u[o] = t, this
			}, g.prototype.resize = function(e, t, r) {
				if (!f(e)) throw new TypeError("Array expected");
				var n = r ? this.clone() : this;
				return E(n, e, t)
			};
			var E = function(e, t, r) {
				if (0 === t.length) {
					for (var n = e._data; f(n);) n = n[0];
					return u.clone(n)
				}
				return e._size = u.clone(t), e._data = s.resize(e._data, e._size, r), e
			};
			return g.prototype.clone = function() {
				var e = new g({
					data: u.clone(this._data),
					size: u.clone(this._size),
					datatype: this._datatype
				});
				return e
			}, g.prototype.size = function() {
				return this._size
			}, g.prototype.map = function(e) {
				var t = this,
					r = function(n, i) {
						return f(n) ? n.map(function(e, t) {
							return r(e, i.concat(t))
						}) : e(n, i, t)
					};
				return new g({
					data: r(this._data, []),
					size: u.clone(this._size),
					datatype: this._datatype
				})
			}, g.prototype.forEach = function(e) {
				var t = this,
					r = function(n, i) {
						f(n) ? n.forEach(function(e, t) {
							r(e, i.concat(t))
						}) : e(n, i, t)
					};
				r(this._data, [])
			}, g.prototype.toArray = function() {
				return u.clone(this._data)
			}, g.prototype.valueOf = function() {
				return this._data
			}, g.prototype.format = function(e) {
				return o.format(this._data, e)
			}, g.prototype.toString = function() {
				return o.format(this._data)
			}, g.prototype.toJSON = function() {
				return {
					mathjs: "DenseMatrix",
					data: this._data,
					size: this._size,
					datatype: this._datatype
				}
			}, g.prototype.diagonal = function(e) {
				if (e) {
					if (e.isBigNumber === !0 && (e = e.toNumber()), !l(e) || !p(e)) throw new TypeError("The parameter k must be an integer number")
				} else e = 0;
				for (var t = e > 0 ? e : 0, r = 0 > e ? -e : 0, n = this._size[0], i = this._size[1], a = Math.min(n - r, i - t), o = [], s = 0; a > s; s++) o[s] = u.clone(this._data[s + r][s + t]);
				return new g({
					data: o,
					size: [a],
					datatype: this._datatype
				})
			}, g.diagonal = function(t, r, n, i, a) {
				if (!f(t)) throw new TypeError("Array expected, size parameter");
				if (2 !== t.length) throw new Error("Only two dimensions matrix are supported");
				if (t = t.map(function(e) {
						if (e && e.isBigNumber === !0 && (e = e.toNumber()), !l(e) || !p(e) || 1 > e) throw new Error("Size values must be positive integers");
						return e
					}), n) {
					if (n && n.isBigNumber === !0 && (n = n.toNumber()), !l(n) || !p(n)) throw new TypeError("The parameter k must be an integer number")
				} else n = 0;
				i && m(a) && (i = c.convert(i, a));
				var o, u = n > 0 ? n : 0,
					h = 0 > n ? -n : 0,
					v = t[0],
					d = t[1],
					y = Math.min(v - h, d - u);
				if (f(r)) {
					if (r.length !== y) throw new Error("Invalid value array length");
					o = function(e) {
						return r[e]
					}
				} else if (r && r.isMatrix === !0) {
					var x = r.size();
					if (1 !== x.length || x[0] !== y) throw new Error("Invalid matrix length");
					o = function(e) {
						return r.get([e])
					}
				} else o = function() {
					return r
				};
				i || (i = o(0) && o(0).isBigNumber === !0 ? new e.BigNumber(0) : 0);
				var b = [];
				if (t.length > 0) {
					b = s.resize(b, t, i);
					for (var w = 0; y > w; w++) b[w + h][w + u] = o(w)
				}
				return new g({
					data: b,
					size: [v, d]
				})
			}, g.fromJSON = function(e) {
				return new g(e)
			}, g.prototype.swapRows = function(e, t) {
				if (!(l(e) && p(e) && l(t) && p(t))) throw new Error("Row index must be positive integers");
				if (2 !== this._size.length) throw new Error("Only two dimensional matrix is supported");
				return h(e, this._size[0]), h(t, this._size[0]), g._swapRows(e, t, this._data), this
			}, g._swapRows = function(e, t, r) {
				var n = r[e];
				r[e] = r[t], r[t] = n
			}, e.Matrix._storage.dense = g, e.Matrix._storage["default"] = g, g
		}
		var i = r(38),
			a = r(41),
			o = i.string,
			s = i.array,
			u = i.object,
			c = i.number,
			f = Array.isArray,
			l = c.isNumber,
			p = c.isInteger,
			m = o.isString,
			h = s.validateIndex;
		t.name = "DenseMatrix", t.path = "type", t.factory = n, t.lazy = !1
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, g) {
			function v(e, t) {
				if (!(this instanceof v)) throw new SyntaxError("Constructor must be called with the new operator");
				if (t && !m(t)) throw new Error("Invalid datatype: " + t);
				if (e && e.isMatrix === !0) x(this, e, t);
				else if (e && f(e.index) && f(e.ptr) && f(e.size)) this._values = e.values, this._index = e.index, this._ptr = e.ptr, this._size = e.size, this._datatype = t || e.datatype;
				else if (f(e)) b(this, e, t);
				else {
					if (e) throw new TypeError("Unsupported type of data (" + i.types.type(e) + ")");
					this._values = [], this._index = [], this._ptr = [0], this._size = [0, 0], this._datatype = t
				}
			}
			var d = n(r(37)),
				y = n(r(47)),
				x = function(e, t, r) {
					"SparseMatrix" === t.type ? (e._values = t._values ? s.clone(t._values) : void 0, e._index = s.clone(t._index), e._ptr = s.clone(t._ptr), e._size = s.clone(t._size), e._datatype = r || t._datatype) : b(e, t.valueOf(), r || t._datatype)
				},
				b = function(e, t, r) {
					e._values = [], e._index = [], e._ptr = [], e._datatype = r;
					var n = t.length,
						i = 0,
						a = y,
						o = 0;
					if (m(r) && (a = g.find(y, [r, r]) || y, o = g.convert(0, r)), n > 0) {
						var s = 0;
						do {
							e._ptr.push(e._index.length);
							for (var u = 0; n > u; u++) {
								var c = t[u];
								if (f(c)) {
									if (0 === s && i < c.length && (i = c.length), s < c.length) {
										var l = c[s];
										a(l, o) || (e._values.push(l), e._index.push(u))
									}
								} else 0 === s && 1 > i && (i = 1), a(c, o) || (e._values.push(c), e._index.push(u))
							}
							s++
						} while (i > s)
					}
					e._ptr.push(e._index.length), e._size = [n, i]
				};
			v.prototype = new d, v.prototype.type = "SparseMatrix", v.prototype.isSparseMatrix = !0, v.prototype.storage = function() {
				return "sparse"
			}, v.prototype.datatype = function() {
				return this._datatype
			}, v.prototype.create = function(e, t) {
				return new v(e, t)
			}, v.prototype.density = function() {
				var e = this._size[0],
					t = this._size[1];
				return 0 !== e && 0 !== t ? this._index.length / (e * t) : 0
			}, v.prototype.subset = function(e, t, r) {
				if (!this._values) throw new Error("Cannot invoke subset on a Pattern only matrix");
				switch (arguments.length) {
					case 1:
						return w(this, e);
					case 2:
					case 3:
						return N(this, e, t, r);
					default:
						throw new SyntaxError("Wrong number of arguments")
				}
			};
			var w = function(e, t) {
					if (!t || t.isIndex !== !0) throw new TypeError("Invalid index");
					var r = t.isScalar();
					if (r) return e.get(t.min());
					var n = t.size();
					if (n.length != e._size.length) throw new a(n.length, e._size.length);
					var i, o, s, u, c = t.min(),
						f = t.max();
					for (i = 0, o = e._size.length; o > i; i++) h(c[i], e._size[i]), h(f[i], e._size[i]);
					var l = e._values,
						p = e._index,
						m = e._ptr,
						g = t.dimension(0),
						d = t.dimension(1),
						y = [],
						x = [];
					g.forEach(function(e, t) {
						x[e] = t[0], y[e] = !0
					});
					var b = l ? [] : void 0,
						w = [],
						N = [];
					return d.forEach(function(e) {
						for (N.push(w.length), s = m[e], u = m[e + 1]; u > s; s++) i = p[s], y[i] === !0 && (w.push(x[i]), b && b.push(l[s]))
					}), N.push(w.length), new v({
						values: b,
						index: w,
						ptr: N,
						size: n,
						datatype: e._datatype
					})
				},
				N = function(e, t, r, n) {
					if (!t || t.isIndex !== !0) throw new TypeError("Invalid index");
					var i, u = t.size(),
						c = t.isScalar();
					if (r && r.isMatrix === !0 ? (i = r.size(), r = r.toArray()) : i = o.size(r), c) {
						if (0 !== i.length) throw new TypeError("Scalar expected");
						e.set(t.min(), r, n)
					} else {
						if (1 !== u.length && 2 !== u.length) throw new a(u.length, e._size.length, "<");
						if (i.length < u.length) {
							for (var f = 0, l = 0; 1 === u[f] && 1 === i[f];) f++;
							for (; 1 === u[f];) l++, f++;
							r = o.unsqueeze(r, u.length, l, i)
						}
						if (!s.deepEqual(u, i)) throw new a(u, i, ">");
						for (var p = t.min()[0], m = t.min()[1], h = i[0], g = i[1], v = 0; h > v; v++)
							for (var d = 0; g > d; d++) {
								var y = r[v][d];
								e.set([v + p, d + m], y, n)
							}
					}
					return e
				};
			v.prototype.get = function(e) {
				if (!f(e)) throw new TypeError("Array expected");
				if (e.length != this._size.length) throw new a(e.length, this._size.length);
				if (!this._values) throw new Error("Cannot invoke get on a Pattern only matrix");
				var t = e[0],
					r = e[1];
				h(t, this._size[0]), h(r, this._size[1]);
				var n = E(t, this._ptr[r], this._ptr[r + 1], this._index);
				return n < this._ptr[r + 1] && this._index[n] === t ? s.clone(this._values[n]) : 0
			}, v.prototype.set = function(e, t, r) {
				if (!f(e)) throw new TypeError("Array expected");
				if (e.length != this._size.length) throw new a(e.length, this._size.length);
				if (!this._values) throw new Error("Cannot invoke set on a Pattern only matrix");
				var n = e[0],
					i = e[1],
					o = this._size[0],
					s = this._size[1],
					u = y,
					c = 0;
				m(this._datatype) && (u = g.find(y, [this._datatype, this._datatype]) || y, c = g.convert(0, this._datatype)), (n > o - 1 || i > s - 1) && (_(this, Math.max(n + 1, o), Math.max(i + 1, s), r), o = this._size[0], s = this._size[1]), h(n, o), h(i, s);
				var l = E(n, this._ptr[i], this._ptr[i + 1], this._index);
				return l < this._ptr[i + 1] && this._index[l] === n ? u(t, c) ? M(l, i, this._values, this._index, this._ptr) : this._values[l] = t : A(l, n, i, t, this._values, this._index, this._ptr), this
			};
			var E = function(e, t, r, n) {
					if (r - t === 0) return r;
					for (var i = t; r > i; i++)
						if (n[i] === e) return i;
					return t
				},
				M = function(e, t, r, n, i) {
					r.splice(e, 1), n.splice(e, 1);
					for (var a = t + 1; a < i.length; a++) i[a]--
				},
				A = function(e, t, r, n, i, a, o) {
					i.splice(e, 0, n), a.splice(e, 0, t);
					for (var s = r + 1; s < o.length; s++) o[s]++
				};
			v.prototype.resize = function(e, t, r) {
				if (!f(e)) throw new TypeError("Array expected");
				if (2 !== e.length) throw new Error("Only two dimensions matrix are supported");
				e.forEach(function(t) {
					if (!c.isNumber(t) || !c.isInteger(t) || 0 > t) throw new TypeError("Invalid size, must contain positive integers (size: " + u.format(e) + ")")
				});
				var n = r ? this.clone() : this;
				return _(n, e[0], e[1], t)
			};
			var _ = function(e, t, r, n) {
				var i = n || 0,
					a = y,
					o = 0;
				m(e._datatype) && (a = g.find(y, [e._datatype, e._datatype]) || y, o = g.convert(0, e._datatype), i = g.convert(i, e._datatype));
				var s, u, c, f = !a(i, o),
					l = e._size[0],
					p = e._size[1];
				if (r > p) {
					for (u = p; r > u; u++)
						if (e._ptr[u] = e._values.length, f)
							for (s = 0; l > s; s++) e._values.push(i), e._index.push(s);
					e._ptr[r] = e._values.length
				} else p > r && (e._ptr.splice(r + 1, p - r), e._values.splice(e._ptr[r], e._values.length), e._index.splice(e._ptr[r], e._index.length));
				if (p = r, t > l) {
					if (f) {
						var h = 0;
						for (u = 0; p > u; u++) {
							e._ptr[u] = e._ptr[u] + h, c = e._ptr[u + 1] + h;
							var v = 0;
							for (s = l; t > s; s++, v++) e._values.splice(c + v, 0, i), e._index.splice(c + v, 0, s), h++
						}
						e._ptr[p] = e._values.length
					}
				} else if (l > t) {
					var d = 0;
					for (u = 0; p > u; u++) {
						e._ptr[u] = e._ptr[u] - d;
						var x = e._ptr[u],
							b = e._ptr[u + 1] - d;
						for (c = x; b > c; c++) s = e._index[c], s > t - 1 && (e._values.splice(c, 1), e._index.splice(c, 1), d++)
					}
					e._ptr[u] = e._values.length
				}
				return e._size[0] = t, e._size[1] = r, e
			};
			v.prototype.clone = function() {
				var e = new v({
					values: this._values ? s.clone(this._values) : void 0,
					index: s.clone(this._index),
					ptr: s.clone(this._ptr),
					size: s.clone(this._size),
					datatype: this._datatype
				});
				return e
			}, v.prototype.size = function() {
				return s.clone(this._size)
			}, v.prototype.map = function(e, t) {
				if (!this._values) throw new Error("Cannot invoke map on a Pattern only matrix");
				var r = this,
					n = this._size[0],
					i = this._size[1],
					a = function(t, n, i) {
						return e(t, [n, i], r)
					};
				return O(this, 0, n - 1, 0, i - 1, a, t)
			};
			var O = function(e, t, r, n, i, a, o) {
				var s = [],
					u = [],
					c = [],
					f = y,
					l = 0;
				m(e._datatype) && (f = g.find(y, [e._datatype, e._datatype]) || y, l = g.convert(0, e._datatype));
				for (var p = function(e, t, r) {
						e = a(e, t, r), f(e, l) || (s.push(e), u.push(t))
					}, h = n; i >= h; h++) {
					c.push(s.length);
					for (var d = e._ptr[h], x = e._ptr[h + 1], b = t, w = d; x > w; w++) {
						var N = e._index[w];
						if (N >= t && r >= N) {
							if (!o)
								for (var E = b; N > E; E++) p(0, E - t, h - n);
							p(e._values[w], N - t, h - n)
						}
						b = N + 1
					}
					if (!o)
						for (var M = b; r >= M; M++) p(0, M - t, h - n)
				}
				return c.push(s.length), new v({
					values: s,
					index: u,
					ptr: c,
					size: [r - t + 1, i - n + 1]
				})
			};
			v.prototype.forEach = function(e, t) {
				if (!this._values) throw new Error("Cannot invoke forEach on a Pattern only matrix");
				for (var r = this, n = this._size[0], i = this._size[1], a = 0; i > a; a++) {
					for (var o = this._ptr[a], s = this._ptr[a + 1], u = 0, c = o; s > c; c++) {
						var f = this._index[c];
						if (!t)
							for (var l = u; f > l; l++) e(0, [l, a], r);
						e(this._values[c], [f, a], r), u = f + 1
					}
					if (!t)
						for (var p = u; n > p; p++) e(0, [p, a], r)
				}
			}, v.prototype.toArray = function() {
				return T(this._values, this._index, this._ptr, this._size, !0)
			}, v.prototype.valueOf = function() {
				return T(this._values, this._index, this._ptr, this._size, !1)
			};
			var T = function(e, t, r, n, i) {
				var a, o, u = n[0],
					c = n[1],
					f = [];
				for (a = 0; u > a; a++)
					for (f[a] = [], o = 0; c > o; o++) f[a][o] = 0;
				for (o = 0; c > o; o++)
					for (var l = r[o], p = r[o + 1], m = l; p > m; m++) a = t[m], f[a][o] = e ? i ? s.clone(e[m]) : e[m] : 1;
				return f
			};
			return v.prototype.format = function(e) {
				for (var t = this._size[0], r = this._size[1], n = this.density(), i = "Sparse Matrix [" + u.format(t, e) + " x " + u.format(r, e) + "] density: " + u.format(n, e) + "\n", a = 0; r > a; a++)
					for (var o = this._ptr[a], s = this._ptr[a + 1], c = o; s > c; c++) {
						var f = this._index[c];
						i += "\n    (" + u.format(f, e) + ", " + u.format(a, e) + ") ==> " + (this._values ? u.format(this._values[c], e) : "X")
					}
				return i
			}, v.prototype.toString = function() {
				return u.format(this.toArray())
			}, v.prototype.toJSON = function() {
				return {
					mathjs: "SparseMatrix",
					values: this._values,
					index: this._index,
					ptr: this._ptr,
					size: this._size,
					datatype: this._datatype
				}
			}, v.prototype.diagonal = function(e) {
				if (e) {
					if (e.isBigNumber === !0 && (e = e.toNumber()), !l(e) || !p(e)) throw new TypeError("The parameter k must be an integer number")
				} else e = 0;
				var t = e > 0 ? e : 0,
					r = 0 > e ? -e : 0,
					n = this._size[0],
					i = this._size[1],
					a = Math.min(n - r, i - t),
					o = [],
					u = [],
					c = [];
				c[0] = 0;
				for (var f = t; i > f && o.length < a; f++)
					for (var m = this._ptr[f], h = this._ptr[f + 1], g = m; h > g; g++) {
						var d = this._index[g];
						if (d === f - t + r) {
							o.push(s.clone(this._values[g])), u[o.length - 1] = d - r;
							break
						}
					}
				return c.push(o.length), new v({
					values: o,
					index: u,
					ptr: c,
					size: [a, 1]
				})
			}, v.fromJSON = function(e) {
				return new v(e)
			}, v.diagonal = function(e, t, r, n, i) {
				if (!f(e)) throw new TypeError("Array expected, size parameter");
				if (2 !== e.length) throw new Error("Only two dimensions matrix are supported");
				if (e = e.map(function(e) {
						if (e && e.isBigNumber === !0 && (e = e.toNumber()), !l(e) || !p(e) || 1 > e) throw new Error("Size values must be positive integers");
						return e
					}), r) {
					if (r.isBigNumber === !0 && (r = r.toNumber()), !l(r) || !p(r)) throw new TypeError("The parameter k must be an integer number")
				} else r = 0;
				var a = y,
					o = 0;
				m(i) && (a = g.find(y, [i, i]) || y, o = g.convert(0, i));
				var s, u = r > 0 ? r : 0,
					c = 0 > r ? -r : 0,
					h = e[0],
					d = e[1],
					x = Math.min(h - c, d - u);
				if (f(t)) {
					if (t.length !== x) throw new Error("Invalid value array length");
					s = function(e) {
						return t[e]
					}
				} else if (t && t.isMatrix === !0) {
					var b = t.size();
					if (1 !== b.length || b[0] !== x) throw new Error("Invalid matrix length");
					s = function(e) {
						return t.get([e])
					}
				} else s = function() {
					return t
				};
				for (var w = [], N = [], E = [], M = 0; d > M; M++) {
					E.push(w.length);
					var A = M - u;
					if (A >= 0 && x > A) {
						var _ = s(A);
						a(_, o) || (N.push(A + c), w.push(_))
					}
				}
				return E.push(w.length), new v({
					values: w,
					index: N,
					ptr: E,
					size: [h, d]
				})
			}, v.prototype.swapRows = function(e, t) {
				if (!(l(e) && p(e) && l(t) && p(t))) throw new Error("Row index must be positive integers");
				if (2 !== this._size.length) throw new Error("Only two dimensional matrix is supported");
				return h(e, this._size[0]), h(t, this._size[0]), v._swapRows(e, t, this._size[1], this._values, this._index, this._ptr), this
			}, v._forEachRow = function(e, t, r, n, i) {
				for (var a = n[e], o = n[e + 1], s = a; o > s; s++) i(r[s], t[s])
			}, v._swapRows = function(e, t, r, n, i, a) {
				for (var o = 0; r > o; o++) {
					var s = a[o],
						u = a[o + 1],
						c = E(e, s, u, i),
						f = E(t, s, u, i);
					if (u > c && u > f && i[c] === e && i[f] === t) {
						if (n) {
							var l = n[c];
							n[c] = n[f], n[f] = l
						}
					} else if (u > c && i[c] === e && (f >= u || i[f] !== t)) {
						var p = n ? n[c] : void 0;
						i.splice(f, 0, t), n && n.splice(f, 0, p), i.splice(c >= f ? c + 1 : c, 1), n && n.splice(c >= f ? c + 1 : c, 1)
					} else if (u > f && i[f] === t && (c >= u || i[c] !== e)) {
						var m = n ? n[f] : void 0;
						i.splice(c, 0, e), n && n.splice(c, 0, m), i.splice(f >= c ? f + 1 : f, 1), n && n.splice(f >= c ? f + 1 : f, 1)
					}
				}
			}, e.Matrix._storage.sparse = v, v
		}
		var i = r(38),
			a = r(41),
			o = i.array,
			s = i.object,
			u = i.string,
			c = i.number,
			f = Array.isArray,
			l = c.isNumber,
			p = c.isInteger,
			m = u.isString,
			h = o.validateIndex;
		t.name = "SparseMatrix", t.path = "type", t.factory = n, t.lazy = !1
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("equalScalar", {
				"boolean, boolean": function(e, t) {
					return e === t
				},
				"number, number": function(e, r) {
					return e === r || i(e, r, t.epsilon)
				},
				"BigNumber, BigNumber": function(e, t) {
					return e.eq(t)
				},
				"Fraction, Fraction": function(e, t) {
					return e.equals(t)
				},
				"Complex, Complex": function(e, r) {
					return (e.re === r.re || i(e.re, r.re, t.epsilon)) && (e.im === r.im || i(e.im, r.im, t.epsilon))
				},
				"Unit, Unit": function(e, t) {
					if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
					return a(e.value, t.value)
				},
				"string, string": function(e, t) {
					return e === t
				}
			});
			return a
		}
		var i = r(6).nearlyEqual;
		t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n) {
			function i() {
				if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator");
				this._values = [], this._heap = new e.FibonacciHeap
			}
			var a = n(r(49)),
				o = n(r(47));
			return i.prototype.type = "Spa", i.prototype.isSpa = !0, i.prototype.set = function(e, t) {
				if (this._values[e]) this._values[e].value = t;
				else {
					var r = this._heap.insert(e, t);
					this._values[e] = r
				}
			}, i.prototype.get = function(e) {
				var t = this._values[e];
				return t ? t.value : 0
			}, i.prototype.accumulate = function(e, t) {
				var r = this._values[e];
				r ? r.value = a(r.value, t) : (r = this._heap.insert(e, t), this._values[e] = r)
			}, i.prototype.forEach = function(e, t, r) {
				var n = this._heap,
					i = this._values,
					a = [],
					s = n.extractMinimum();
				for (s && a.push(s); s && s.key <= t;) s.key >= e && (o(s.value, 0) || r(s.key, s.value, this)), s = n.extractMinimum(), s && a.push(s);
				for (var u = 0; u < a.length; u++) {
					var c = a[u];
					s = n.insert(c.key, c.value), i[s.key] = s
				}
			}, i.prototype.swap = function(e, t) {
				var r = this._values[e],
					n = this._values[t];
				if (!r && n) r = this._heap.insert(e, n.value), this._heap.remove(n), this._values[e] = r, this._values[t] = void 0;
				else if (r && !n) n = this._heap.insert(t, r.value), this._heap.remove(r), this._values[t] = n, this._values[e] = void 0;
				else if (r && n) {
					var i = r.value;
					r.value = n.value, n.value = i
				}
			}, i
		}
		t.name = "Spa", t.path = "type", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(50)),
				s = n(r(51)),
				u = r(29),
				c = n(r(52)),
				f = n(r(53)),
				l = n(r(54)),
				p = n(r(55)),
				m = n(r(56)),
				h = a("add", i({
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = f(e, t, s);
										break;
									default:
										r = c(t, e, s, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = c(e, t, s, !1);
										break;
									default:
										r = p(e, t, s)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return h(o(e), o(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return h(o(e), t)
					},
					"Matrix, Array": function(e, t) {
						return h(e, o(t))
					},
					"Matrix, any": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = l(e, t, s, !1);
								break;
							default:
								r = m(e, t, s, !1)
						}
						return r
					},
					"any, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = l(t, e, s, !0);
								break;
							default:
								r = m(t, e, s, !0)
						}
						return r
					},
					"Array, any": function(e, t) {
						return m(o(e), t, s, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return m(o(t), e, s, !0).valueOf()
					}
				}, s.signatures));
			return h.toTex = "\\left(${args[0]}" + u.operators.add + "${args[1]}\\right)", h
		}
		var i = r(3).extend;
		t.name = "add", t.factory = n
	}, function(e, t) {
		"use strict";

		function r(e, t, r, n) {
			function i(t, r, n) {
				var i = e.Matrix.storage(r || "default");
				return new i(t, n)
			}
			var a = n("matrix", {
				"": function() {
					return i([])
				},
				string: function(e) {
					return i([], e)
				},
				"string, string": function(e, t) {
					return i([], e, t)
				},
				Array: function(e) {
					return i(e)
				},
				Matrix: function(e) {
					return i(e, e.storage())
				},
				"Array | Matrix, string": i,
				"Array | Matrix, string, string": i
			});
			return a.toTex = {
				0: "\\begin{bmatrix}\\end{bmatrix}",
				1: "\\left(${args[0]}\\right)",
				2: "\\left(${args[0]}\\right)"
			}, a
		}
		t.name = "matrix", t.factory = r
	}, function(e, t) {
		"use strict";

		function r(e, t, r, n) {
			var i = n("add", {
				"number, number": function(e, t) {
					return e + t
				},
				"Complex, Complex": function(t, r) {
					return new e.Complex(t.re + r.re, t.im + r.im)
				},
				"BigNumber, BigNumber": function(e, t) {
					return e.plus(t)
				},
				"Fraction, Fraction": function(e, t) {
					return e.add(t)
				},
				"Unit, Unit": function(e, t) {
					if (null == e.value) throw new Error("Parameter x contains a unit with undefined value");
					if (null == t.value) throw new Error("Parameter y contains a unit with undefined value");
					if (!e.equalBase(t)) throw new Error("Units do not match");
					var r = e.clone();
					return r.value = i(r.value, t.value), r.fixPrefix = !1, r
				}
			});
			return i
		}
		t.factory = r
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = e.DenseMatrix,
				o = function(e, t, r, o) {
					var s = e._data,
						u = e._size,
						c = e._datatype,
						f = t._values,
						l = t._index,
						p = t._ptr,
						m = t._size,
						h = t._datatype;
					if (u.length !== m.length) throw new i(u.length, m.length);
					if (u[0] !== m[0] || u[1] !== m[1]) throw new RangeError("Dimension mismatch. Matrix A (" + u + ") must match Matrix B (" + m + ")");
					if (!f) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
					var g, v, d = u[0],
						y = u[1],
						x = "string" == typeof c && c === h ? c : void 0,
						b = x ? n.find(r, [x, x]) : r,
						w = [];
					for (g = 0; d > g; g++) w[g] = [];
					var N = [],
						E = [];
					for (v = 0; y > v; v++) {
						for (var M = v + 1, A = p[v], _ = p[v + 1], O = A; _ > O; O++) g = l[O], N[g] = o ? b(f[O], s[g][v]) : b(s[g][v], f[O]), E[g] = M;
						for (g = 0; d > g; g++) E[g] === M ? w[g][v] = N[g] : w[g][v] = s[g][v]
					}
					return new a({
						data: w,
						size: [d, y],
						datatype: x
					})
				};
			return o
		}
		var i = r(41);
		t.name = "algorithm01", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(47)),
				s = e.SparseMatrix,
				u = function(e, t, r) {
					var n = e._values,
						u = e._index,
						c = e._ptr,
						f = e._size,
						l = e._datatype,
						p = t._values,
						m = t._index,
						h = t._ptr,
						g = t._size,
						v = t._datatype;
					if (f.length !== g.length) throw new i(f.length, g.length);
					if (f[0] !== g[0] || f[1] !== g[1]) throw new RangeError("Dimension mismatch. Matrix A (" + f + ") must match Matrix B (" + g + ")");
					var d, y = f[0],
						x = f[1],
						b = o,
						w = 0,
						N = r;
					"string" == typeof l && l === v && (d = l, b = a.find(o, [d, d]), w = a.convert(0, d), N = a.find(r, [d, d]));
					var E, M, A, _, O, T = n && p ? [] : void 0,
						C = [],
						S = [],
						z = new s({
							values: T,
							index: C,
							ptr: S,
							size: [y, x],
							datatype: d
						}),
						B = n && p ? [] : void 0,
						k = n && p ? [] : void 0,
						I = [],
						R = [];
					for (M = 0; x > M; M++) {
						S[M] = C.length;
						var P = M + 1;
						for (_ = c[M], O = c[M + 1], A = _; O > A; A++) E = u[A], C.push(E), I[E] = P, B && (B[E] = n[A]);
						for (_ = h[M], O = h[M + 1], A = _; O > A; A++)
							if (E = m[A], I[E] === P) {
								if (B) {
									var U = N(B[E], p[A]);
									b(U, w) ? I[E] = null : B[E] = U
								}
							} else C.push(E), R[E] = P, k && (k[E] = p[A]);
						if (B && k)
							for (A = S[M]; A < C.length;) E = C[A], I[E] === P ? (T[A] = B[E], A++) : R[E] === P ? (T[A] = k[E], A++) : C.splice(A, 1)
					}
					return S[x] = C.length, z
				};
			return u
		}
		var i = r(41);
		t.name = "algorithm04", t.factory = n
	}, function(e, t) {
		"use strict";

		function r(e, t, r, n) {
			var i = e.DenseMatrix,
				a = function(e, t, r, a) {
					var o = e._values,
						s = e._index,
						u = e._ptr,
						c = e._size,
						f = e._datatype;
					if (!o) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
					var l, p = c[0],
						m = c[1],
						h = r;
					"string" == typeof f && (l = f, t = n.convert(t, l), h = n.find(r, [l, l]));
					for (var g = [], v = new i({
							data: g,
							size: [p, m],
							datatype: l
						}), d = [], y = [], x = 0; m > x; x++) {
						for (var b = x + 1, w = u[x], N = u[x + 1], E = w; N > E; E++) {
							var M = s[E];
							d[M] = o[E], y[M] = b
						}
						for (var A = 0; p > A; A++) 0 === x && (g[A] = []), y[A] === b ? g[A][x] = a ? h(t, d[A]) : h(d[A], t) : g[A][x] = t
					}
					return v
				};
			return a
		}
		t.name = "algorithm10", t.factory = r
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var i = e.DenseMatrix,
				o = function(e, t, r) {
					var o = e._data,
						u = e._size,
						c = e._datatype,
						f = t._data,
						l = t._size,
						p = t._datatype,
						m = [];
					if (u.length !== l.length) throw new a(u.length, l.length);
					for (var h = 0; h < u.length; h++) {
						if (u[h] !== l[h]) throw new RangeError("Dimension mismatch. Matrix A (" + u + ") must match Matrix B (" + l + ")");
						m[h] = u[h]
					}
					var g, v = r;
					"string" == typeof c && c === p && (g = c, t = n.convert(t, g), v = n.find(r, [g, g]));
					var d = m.length > 0 ? s(v, 0, m, m[0], o, f) : [];
					return new i({
						data: d,
						size: m,
						datatype: g
					})
				},
				s = function(e, t, r, n, i, a) {
					var o = [];
					if (t === r.length - 1)
						for (var u = 0; n > u; u++) o[u] = e(i[u], a[u]);
					else
						for (var c = 0; n > c; c++) o[c] = s(e, t + 1, r, r[t + 1], i[c], a[c]);
					return o
				};
			return o
		}
		var i = r(38),
			a = r(41),
			o = i.string;
		o.isString;
		t.name = "algorithm13", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = e.DenseMatrix,
				o = function(e, t, r, o) {
					var u, c = e._data,
						f = e._size,
						l = e._datatype,
						p = r;
					"string" == typeof l && (u = l, t = n.convert(t, u), p = n.find(r, [u, u]));
					var m = f.length > 0 ? s(p, 0, f, f[0], c, t, o) : [];
					return new a({
						data: m,
						size: i(f),
						datatype: u
					})
				},
				s = function(e, t, r, n, i, a, o) {
					var u = [];
					if (t === r.length - 1)
						for (var c = 0; n > c; c++) u[c] = o ? e(a, i[c]) : e(i[c], a);
					else
						for (var f = 0; n > f; f++) u[f] = s(e, t + 1, r, r[t + 1], i[f], a, o);
					return u
				};
			return o
		}
		var i = r(3).clone;
		t.name = "algorithm14", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			function a() {
				if (!(this instanceof a)) throw new SyntaxError("Constructor must be called with the new operator");
				this._minimum = null, this._size = 0
			}
			var o = n(r(58)),
				s = n(r(62)),
				u = 1 / Math.log((1 + Math.sqrt(5)) / 2);
			a.prototype.type = "FibonacciHeap", a.prototype.isFibonacciHeap = !0, a.prototype.insert = function(e, t) {
				var r = {
					key: e,
					value: t,
					degree: 0
				};
				if (this._minimum) {
					var n = this._minimum;
					r.left = n, r.right = n.right, n.right = r, r.right.left = r, o(e, n.key) && (this._minimum = r)
				} else r.left = r, r.right = r, this._minimum = r;
				return this._size++, r
			}, a.prototype.size = function() {
				return this._size
			}, a.prototype.clear = function() {
				this._minimum = null, this._size = 0
			}, a.prototype.isEmpty = function() {
				return !!this._minimum
			}, a.prototype.extractMinimum = function() {
				var e = this._minimum;
				if (null === e) return e;
				for (var t = this._minimum, r = e.degree, n = e.child; r > 0;) {
					var i = n.right;
					n.left.right = n.right, n.right.left = n.left, n.left = t, n.right = t.right, t.right = n, n.right.left = n, n.parent = null, n = i, r--
				}
				return e.left.right = e.right, e.right.left = e.left, e == e.right ? t = null : (t = e.right, t = m(t, this._size)), this._size--, this._minimum = t, e
			}, a.prototype.remove = function(e) {
				this._minimum = c(this._minimum, e, -1), this.extractMinimum()
			};
			var c = function(e, t, r) {
					t.key = r;
					var n = t.parent;
					return n && o(t.key, n.key) && (f(e, t, n), l(e, n)), o(t.key, e.key) && (e = t), e
				},
				f = function(e, t, r) {
					t.left.right = t.right, t.right.left = t.left, r.degree--, r.child == t && (r.child = t.right), 0 === r.degree && (r.child = null), t.left = e, t.right = e.right, e.right = t, t.right.left = t, t.parent = null, t.mark = !1
				},
				l = function(e, t) {
					var r = t.parent;
					r && (t.mark ? (f(e, t, r), l(r)) : t.mark = !0)
				},
				p = function(e, t) {
					e.left.right = e.right, e.right.left = e.left, e.parent = t, t.child ? (e.left = t.child, e.right = t.child.right, t.child.right = e, e.right.left = e) : (t.child = e, e.right = e, e.left = e), t.degree++, e.mark = !1
				},
				m = function(e, t) {
					var r = Math.floor(Math.log(t) * u) + 1,
						n = new Array(r),
						i = 0,
						a = e;
					if (a)
						for (i++, a = a.right; a !== e;) i++, a = a.right;
					for (var c; i > 0;) {
						for (var f = a.degree, l = a.right;;) {
							if (c = n[f], !c) break;
							if (s(a.key, c.key)) {
								var m = c;
								c = a, a = m
							}
							p(c, a), n[f] = null, f++
						}
						n[f] = a, a = l, i--
					}
					e = null;
					for (var h = 0; r > h; h++) c = n[h], c && (e ? (c.left.right = c.right, c.right.left = c.left, c.left = e, c.right = e.right, e.right = c, c.right.left = c, o(c.key, e.key) && (e = c)) : e = c);
					return e
				};
			return a
		}
		t.name = "FibonacciHeap", t.path = "type", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(50)),
				s = n(r(59)),
				u = n(r(60)),
				c = n(r(61)),
				f = n(r(55)),
				l = n(r(56)),
				p = r(29),
				m = a("smaller", {
					"boolean, boolean": function(e, t) {
						return t > e
					},
					"number, number": function(e, r) {
						return r > e && !i(e, r, t.epsilon)
					},
					"BigNumber, BigNumber": function(e, t) {
						return e.lt(t)
					},
					"Fraction, Fraction": function(e, t) {
						return -1 === e.compare(t)
					},
					"Complex, Complex": function(e, t) {
						throw new TypeError("No ordering relation is defined for complex numbers")
					},
					"Unit, Unit": function(e, t) {
						if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
						return m(e.value, t.value)
					},
					"string, string": function(e, t) {
						return t > e
					},
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = u(e, t, m);
										break;
									default:
										r = s(t, e, m, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = s(e, t, m, !1);
										break;
									default:
										r = f(e, t, m)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return m(o(e), o(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return m(o(e), t)
					},
					"Matrix, Array": function(e, t) {
						return m(e, o(t))
					},
					"Matrix, any": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = c(e, t, m, !1);
								break;
							default:
								r = l(e, t, m, !1)
						}
						return r
					},
					"any, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = c(t, e, m, !0);
								break;
							default:
								r = l(t, e, m, !0)
						}
						return r
					},
					"Array, any": function(e, t) {
						return l(o(e), t, m, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return l(o(t), e, m, !0).valueOf()
					}
				});
			return m.toTex = "\\left(${args[0]}" + p.operators.smaller + "${args[1]}\\right)", m
		}
		var i = r(6).nearlyEqual;
		t.name = "smaller", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = e.DenseMatrix,
				o = function(e, t, r, o) {
					var s = e._data,
						u = e._size,
						c = e._datatype,
						f = t._values,
						l = t._index,
						p = t._ptr,
						m = t._size,
						h = t._datatype;
					if (u.length !== m.length) throw new i(u.length, m.length);
					if (u[0] !== m[0] || u[1] !== m[1]) throw new RangeError("Dimension mismatch. Matrix A (" + u + ") must match Matrix B (" + m + ")");
					if (!f) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
					var g, v = u[0],
						d = u[1],
						y = 0,
						x = r;
					"string" == typeof c && c === h && (g = c, y = n.convert(0, g), x = n.find(r, [g, g]));
					for (var b = [], w = 0; v > w; w++) b[w] = [];
					for (var N = [], E = [], M = 0; d > M; M++) {
						for (var A = M + 1, _ = p[M], O = p[M + 1], T = _; O > T; T++) {
							var C = l[T];
							N[C] = o ? x(f[T], s[C][M]) : x(s[C][M], f[T]), E[C] = A
						}
						for (var S = 0; v > S; S++) E[S] === A ? b[S][M] = N[S] : b[S][M] = o ? x(y, s[S][M]) : x(s[S][M], y)
					}
					return new a({
						data: b,
						size: [v, d],
						datatype: g
					})
				};
			return o
		}
		var i = r(41);
		t.name = "algorithm03", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = e.DenseMatrix,
				o = function(e, t, r) {
					var o = e._size,
						u = e._datatype,
						c = t._size,
						f = t._datatype;
					if (o.length !== c.length) throw new i(o.length, c.length);
					if (o[0] !== c[0] || o[1] !== c[1]) throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + c + ")");
					var l, p = o[0],
						m = o[1],
						h = 0,
						g = r;
					"string" == typeof u && u === f && (l = u, h = n.convert(0, l), g = n.find(r, [l, l]));
					var v, d, y = [];
					for (v = 0; p > v; v++) y[v] = [];
					var x = new a({
							data: y,
							size: [p, m],
							datatype: l
						}),
						b = [],
						w = [],
						N = [],
						E = [];
					for (d = 0; m > d; d++) {
						var M = d + 1;
						for (s(e, d, N, b, M), s(t, d, E, w, M), v = 0; p > v; v++) {
							var A = N[v] === M ? b[v] : h,
								_ = E[v] === M ? w[v] : h;
							y[v][d] = g(A, _)
						}
					}
					return x
				},
				s = function(e, t, r, n, i) {
					for (var a = e._values, o = e._index, s = e._ptr, u = s[t], c = s[t + 1]; c > u; u++) {
						var f = o[u];
						r[f] = i, n[f] = a[u]
					}
				};
			return o
		}
		var i = r(41);
		t.name = "algorithm07", t.factory = n
	}, function(e, t) {
		"use strict";

		function r(e, t, r, n) {
			var i = e.DenseMatrix,
				a = function(e, t, r, a) {
					var o = e._values,
						s = e._index,
						u = e._ptr,
						c = e._size,
						f = e._datatype;
					if (!o) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
					var l, p = c[0],
						m = c[1],
						h = r;
					"string" == typeof f && (l = f, t = n.convert(t, l), h = n.find(r, [l, l]));
					for (var g = [], v = new i({
							data: g,
							size: [p, m],
							datatype: l
						}), d = [], y = [], x = 0; m > x; x++) {
						for (var b = x + 1, w = u[x], N = u[x + 1], E = w; N > E; E++) {
							var M = s[E];
							d[M] = o[E], y[M] = b
						}
						for (var A = 0; p > A; A++) 0 === x && (g[A] = []), y[A] === b ? g[A][x] = a ? h(t, d[A]) : h(d[A], t) : g[A][x] = a ? h(t, 0) : h(0, t)
					}
					return v
				};
			return a
		}
		t.name = "algorithm12", t.factory = r
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(50)),
				s = n(r(59)),
				u = n(r(60)),
				c = n(r(61)),
				f = n(r(55)),
				l = n(r(56)),
				p = r(29),
				m = a("larger", {
					"boolean, boolean": function(e, t) {
						return e > t
					},
					"number, number": function(e, r) {
						return e > r && !i(e, r, t.epsilon)
					},
					"BigNumber, BigNumber": function(e, t) {
						return e.gt(t)
					},
					"Fraction, Fraction": function(e, t) {
						return 1 === e.compare(t)
					},
					"Complex, Complex": function() {
						throw new TypeError("No ordering relation is defined for complex numbers")
					},
					"Unit, Unit": function(e, t) {
						if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
						return m(e.value, t.value)
					},
					"string, string": function(e, t) {
						return e > t
					},
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = u(e, t, m);
										break;
									default:
										r = s(t, e, m, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = s(e, t, m, !1);
										break;
									default:
										r = f(e, t, m)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return m(o(e), o(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return m(o(e), t)
					},
					"Matrix, Array": function(e, t) {
						return m(e, o(t))
					},
					"Matrix, any": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = c(e, t, m, !1);
								break;
							default:
								r = l(e, t, m, !1)
						}
						return r
					},
					"any, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = c(t, e, m, !0);
								break;
							default:
								r = l(t, e, m, !0)
						}
						return r
					},
					"Array, any": function(e, t) {
						return l(o(e), t, m, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return l(o(t), e, m, !0).valueOf()
					}
				});
			return m.toTex = "\\left(${args[0]}" + p.operators.larger + "${args[1]}\\right)", m
		}
		var i = r(6).nearlyEqual;
		t.name = "larger", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n) {
			function a(e, t) {
				if (!(this instanceof a)) throw new SyntaxError("Constructor must be called with the new operator");
				if (t && !u(t)) throw new Error("Invalid datatype: " + t);
				if (e && e.isMatrix === !0 || s(e)) {
					var r = new c(e, t);
					this._data = r._data, this._size = r._size, this._datatype = r._datatype, this._min = null, this._max = null
				} else if (e && s(e.data) && s(e.size)) this._data = e.data, this._size = e.size, this._datatype = e.datatype, this._min = "undefined" != typeof e.min ? e.min : null, this._max = "undefined" != typeof e.max ? e.max : null;
				else {
					if (e) throw new TypeError("Unsupported type of data (" + i.types.type(e) + ")");
					this._data = [], this._size = [0], this._datatype = t, this._min = null, this._max = null
				}
			}
			var c = n(r(45)),
				f = n(r(58));
			return a.prototype = new c, a.prototype.type = "ImmutableDenseMatrix", a.prototype.isImmutableDenseMatrix = !0, a.prototype.subset = function(e) {
				switch (arguments.length) {
					case 1:
						var t = c.prototype.subset.call(this, e);
						return t.isMatrix ? new a({
							data: t._data,
							size: t._size,
							datatype: t._datatype
						}) : t;
					case 2:
					case 3:
						throw new Error("Cannot invoke set subset on an Immutable Matrix instance");
					default:
						throw new SyntaxError("Wrong number of arguments")
				}
			}, a.prototype.set = function() {
				throw new Error("Cannot invoke set on an Immutable Matrix instance")
			}, a.prototype.resize = function() {
				throw new Error("Cannot invoke resize on an Immutable Matrix instance")
			}, a.prototype.clone = function() {
				var e = new a({
					data: o.clone(this._data),
					size: o.clone(this._size),
					datatype: this._datatype
				});
				return e
			}, a.prototype.toJSON = function() {
				return {
					mathjs: "ImmutableDenseMatrix",
					data: this._data,
					size: this._size,
					datatype: this._datatype
				}
			}, a.fromJSON = function(e) {
				return new a(e)
			}, a.prototype.swapRows = function() {
				throw new Error("Cannot invoke swapRows on an Immutable Matrix instance")
			}, a.prototype.min = function() {
				if (null === this._min) {
					var e = null;
					this.forEach(function(t) {
						(null === e || f(t, e)) && (e = t)
					}), this._min = null !== e ? e : void 0
				}
				return this._min
			}, a.prototype.max = function() {
				if (null === this._max) {
					var e = null;
					this.forEach(function(t) {
						(null === e || f(e, t)) && (e = t)
					}), this._max = null !== e ? e : void 0
				}
				return this._max
			}, a
		}
		var i = r(38),
			a = i.string,
			o = i.object,
			s = Array.isArray,
			u = a.isString;
		t.name = "ImmutableDenseMatrix", t.path = "type", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e) {
			function t(e) {
				if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
				this._dimensions = [], this._isScalar = !0;
				for (var n = 0, i = arguments.length; i > n; n++) {
					var a = arguments[n];
					if (a && a.isRange === !0) this._dimensions.push(a), this._isScalar = !1;
					else if (a && (Array.isArray(a) || a.isMatrix === !0)) {
						var o = r(a.valueOf());
						this._dimensions.push(o);
						var s = o.size();
						(1 !== s.length || 1 !== s[0]) && (this._isScalar = !1)
					} else {
						if ("number" != typeof a) throw new TypeError("Dimension must be an Array, Matrix, Number or Range");
						this._dimensions.push(r([a]))
					}
				}
			}

			function r(t) {
				for (var r = 0, n = t.length; n > r; r++)
					if ("number" != typeof t[r] || !a(t[r])) throw new TypeError("Index parameters must be positive integer numbers");
				return new e.ImmutableDenseMatrix(t)
			}
			return t.prototype.type = "Index", t.prototype.isIndex = !0, t.prototype.clone = function() {
				var e = new t;
				return e._dimensions = i(this._dimensions), e._isScalar = this._isScalar, e
			}, t.create = function(e) {
				var r = new t;
				return t.apply(r, e), r
			}, t.prototype.size = function() {
				for (var e = [], t = 0, r = this._dimensions.length; r > t; t++) {
					var n = this._dimensions[t];
					e[t] = n.size()[0]
				}
				return e
			}, t.prototype.max = function() {
				for (var e = [], t = 0, r = this._dimensions.length; r > t; t++) {
					var n = this._dimensions[t];
					e[t] = n.max()
				}
				return e
			}, t.prototype.min = function() {
				for (var e = [], t = 0, r = this._dimensions.length; r > t; t++) {
					var n = this._dimensions[t];
					e[t] = n.min()
				}
				return e
			}, t.prototype.forEach = function(e) {
				for (var t = 0, r = this._dimensions.length; r > t; t++) e(this._dimensions[t], t, this)
			}, t.prototype.dimension = function(e) {
				return this._dimensions[e] || null
			}, t.prototype.isScalar = function() {
				return this._isScalar
			}, t.prototype.toArray = function() {
				for (var e = [], t = 0, r = this._dimensions.length; r > t; t++) e.push(this._dimensions[t].toArray());
				return e
			}, t.prototype.valueOf = t.prototype.toArray, t.prototype.toString = function() {
				for (var e = [], t = 0, r = this._dimensions.length; r > t; t++) e.push(this._dimensions[t].toString());
				return "[" + e.join(", ") + "]"
			}, t.prototype.toJSON = function() {
				return {
					mathjs: "Index",
					dimensions: this._dimensions
				}
			}, t.fromJSON = function(e) {
				return t.create(e.dimensions)
			}, t
		}
		var i = r(3).clone,
			a = r(6).isInteger;
		t.name = "Index", t.path = "type", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			function a(e, t, r) {
				if (!(this instanceof a)) throw new SyntaxError("Constructor must be called with the new operator");
				if (null != e)
					if (e.isBigNumber === !0) e = e.toNumber();
					else if ("number" != typeof e) throw new TypeError("Parameter start must be a number");
				if (null != t)
					if (t.isBigNumber === !0) t = t.toNumber();
					else if ("number" != typeof t) throw new TypeError("Parameter end must be a number");
				if (null != r)
					if (r.isBigNumber === !0) r = r.toNumber();
					else if ("number" != typeof r) throw new TypeError("Parameter step must be a number");
				this.start = null != e ? parseFloat(e) : 0, this.end = null != t ? parseFloat(t) : 0, this.step = null != r ? parseFloat(r) : 1
			}
			return a.prototype.type = "Range", a.prototype.isRange = !0, a.parse = function(e) {
				if ("string" != typeof e) return null;
				var t = e.split(":"),
					r = t.map(function(e) {
						return parseFloat(e)
					}),
					n = r.some(function(e) {
						return isNaN(e)
					});
				if (n) return null;
				switch (r.length) {
					case 2:
						return new a(r[0], r[1]);
					case 3:
						return new a(r[0], r[2], r[1]);
					default:
						return null
				}
			}, a.prototype.clone = function() {
				return new a(this.start, this.end, this.step)
			}, a.prototype.size = function() {
				var e = 0,
					t = this.start,
					r = this.step,
					n = this.end,
					a = n - t;
				return i.sign(r) == i.sign(a) ? e = Math.ceil(a / r) : 0 == a && (e = 0), isNaN(e) && (e = 0), [e]
			}, a.prototype.min = function() {
				var e = this.size()[0];
				return e > 0 ? this.step > 0 ? this.start : this.start + (e - 1) * this.step : void 0
			}, a.prototype.max = function() {
				var e = this.size()[0];
				return e > 0 ? this.step > 0 ? this.start + (e - 1) * this.step : this.start : void 0
			}, a.prototype.forEach = function(e) {
				var t = this.start,
					r = this.step,
					n = this.end,
					i = 0;
				if (r > 0)
					for (; n > t;) e(t, [i], this), t += r, i++;
				else if (0 > r)
					for (; t > n;) e(t, [i], this), t += r, i++
			}, a.prototype.map = function(e) {
				var t = [];
				return this.forEach(function(r, n, i) {
					t[n[0]] = e(r, n, i)
				}), t
			}, a.prototype.toArray = function() {
				var e = [];
				return this.forEach(function(t, r) {
					e[r[0]] = t
				}), e
			}, a.prototype.valueOf = function() {
				return this.toArray()
			}, a.prototype.format = function(e) {
				var t = i.format(this.start, e);
				return 1 != this.step && (t += ":" + i.format(this.step, e)), t += ":" + i.format(this.end, e)
			}, a.prototype.toString = function() {
				return this.format()
			}, a.prototype.toJSON = function() {
				return {
					mathjs: "Range",
					start: this.start,
					end: this.end,
					step: this.step
				}
			}, a.fromJSON = function(e) {
				return new a(e.start, e.end, e.step)
			}, a
		}
		var i = r(6);
		t.name = "Range", t.path = "type", t.factory = n
	}, function(e, t) {
		"use strict";

		function r(e, t, r, n) {
			return n("index", {
				"...number | BigNumber | Range | Array | Matrix": function(t) {
					var r = t.map(function(e) {
							return e && e.isBigNumber === !0 ? e.toNumber() : e && (Array.isArray(e) || e.isMatrix === !0) ? e.map(function(e) {
								return e && e.isBigNumber === !0 ? e.toNumber() : e
							}) : e
						}),
						n = new e.Index;
					return e.Index.apply(n, r), n
				}
			})
		}
		t.name = "index", t.factory = r
	}, function(e, t) {
		"use strict";

		function r(e, t, r, n) {
			var i = e.SparseMatrix,
				a = n("sparse", {
					"": function() {
						return new i([])
					},
					string: function(e) {
						return new i([], e)
					},
					"Array | Matrix": function(e) {
						return new i(e)
					},
					"Array | Matrix, string": function(e, t) {
						return new i(e, t)
					}
				});
			return a.toTex = {
				0: "\\begin{bsparse}\\end{bsparse}",
				1: "\\left(${args[0]}\\right)"
			}, a
		}
		t.name = "sparse", t.factory = r
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("number", {
				"": function() {
					return 0
				},
				number: function(e) {
					return e
				},
				string: function(e) {
					var t = Number(e);
					if (isNaN(t)) throw new SyntaxError('String "' + e + '" is no valid number');
					return t
				},
				BigNumber: function(e) {
					return e.toNumber()
				},
				Fraction: function(e) {
					return e.valueOf()
				},
				Unit: function(e) {
					throw new Error("Second argument with valueless unit expected")
				},
				"Unit, string | Unit": function(e, t) {
					return e.toNumber(t)
				},
				"Array | Matrix": function(e) {
					return i(e, a)
				}
			});
			return a.toTex = {
				0: "0",
				1: "\\left(${args[0]}\\right)",
				2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)"
			}, a
		}
		var i = r(19);
		t.name = "number", t.factory = n
	}, function(e, t, r) {
		e.exports = [r(70)]
	}, function(e, t) {
		"use strict";

		function r(e, t, r, n) {
			function i(e) {
				if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator");
				this.entries = e || []
			}
			return i.prototype.type = "ResultSet", i.prototype.isResultSet = !0, i.prototype.valueOf = function() {
				return this.entries
			}, i.prototype.toString = function() {
				return "[" + this.entries.join(", ") + "]"
			}, i.prototype.toJSON = function() {
				return {
					mathjs: "ResultSet",
					entries: this.entries
				}
			}, i.fromJSON = function(e) {
				return new i(e.entries)
			}, i
		}
		t.name = "ResultSet", t.path = "type", t.factory = r
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var o = n("string", {
				"": function() {
					return ""
				},
				number: a.format,
				"null": function(e) {
					return "null"
				},
				"boolean": function(e) {
					return e + ""
				},
				string: function(e) {
					return e
				},
				"Array | Matrix": function(e) {
					return i(e, o)
				},
				any: function(e) {
					return String(e)
				}
			});
			return o.toTex = {
				0: '\\mathtt{""}',
				1: "\\mathrm{string}\\left(${args[0]}\\right)"
			}, o
		}
		var i = r(19),
			a = r(6);
		t.name = "string", t.factory = n
	}, function(e, t, r) {
		e.exports = [r(73), r(90), r(91)]
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			function s(e, t) {
				if (!(this instanceof s)) throw new Error("Constructor must be called with the new operator");
				if (void 0 !== e && !M(e) && !e.isComplex) throw new TypeError("First parameter in Unit constructor must be number, BigNumber, Fraction, Complex, or undefined");
				if (void 0 != t && ("string" != typeof t || "" == t)) throw new TypeError("Second parameter in Unit constructor must be a string");
				if (void 0 != t) {
					var r = s.parse(t);
					this.units = r.units, this.dimensions = r.dimensions
				} else this.units = [{
					unit: q,
					prefix: I,
					power: 0
				}], this.dimensions = [0, 0, 0, 0, 0, 0, 0, 0, 0];
				this.value = void 0 != e ? this._normalize(e) : null, this.fixPrefix = !1, this.isUnitListSimplified = !0
			}

			function u() {
				for (;
					" " == z || "	" == z;) l()
			}

			function c(e) {
				return e >= "0" && "9" >= e || "." == e
			}

			function f(e) {
				return e >= "0" && "9" >= e
			}

			function l() {
				S++, z = C.charAt(S)
			}

			function p(e) {
				S = e, z = C.charAt(S)
			}

			function m() {
				var e, t = "";
				if (e = S, "+" == z ? l() : "-" == z && (t += z, l()), !c(z)) return p(e), null;
				if ("." == z) {
					if (t += z, l(), !f(z)) return p(e), null
				} else {
					for (; f(z);) t += z, l();
					"." == z && (t += z, l())
				}
				for (; f(z);) t += z, l();
				if ("E" == z || "e" == z) {
					var r = "",
						n = S;
					if (r += z, l(), ("+" == z || "-" == z) && (r += z, l()), !f(z)) return p(n), t;
					for (t += r; f(z);) t += z, l()
				}
				return t
			}

			function h() {
				for (var e = "", t = C.charCodeAt(S); t >= 48 && 57 >= t || t >= 65 && 90 >= t || t >= 97 && 122 >= t;) e += z, l(), t = C.charCodeAt(S);
				return t = e.charCodeAt(0), t >= 65 && 90 >= t || t >= 97 && 122 >= t ? e || null : null
			}

			function g(e) {
				return z === e ? (l(), e) : null
			}

			function v(e) {
				for (var t in L)
					if (L.hasOwnProperty(t) && i(e, t)) {
						var r = L[t],
							n = e.length - t.length,
							a = e.substring(0, n),
							o = r.prefixes[a];
						if (void 0 !== o) return {
							unit: r,
							prefix: o
						}
					}
				return null
			}
			var d = n(r(51)),
				y = n(r(74)),
				x = n(r(77)),
				b = n(r(78)),
				w = n(r(79)),
				N = n(r(85)),
				E = n(r(86)),
				M = n(r(87)),
				A = n(r(88)),
				_ = n(r(89)),
				O = n(r(68)),
				T = n(r(27));
			s.prototype.type = "Unit", s.prototype.isUnit = !0;
			var C, S, z;
			s.parse = function(r) {
				if (C = r, S = -1, z = "", "string" != typeof C) throw new TypeError("Invalid argument in Unit.parse, string expected");
				var n = new s;
				n.units = [], l(), u();
				var i = m(),
					a = null;
				i && (a = "bignumber" === t.number ? new e.BigNumber(i) : "fraction" === t.number ? new e.Fraction(i) : parseFloat(i)), u();
				for (var o = 1, c = !1, f = [], p = 1;;) {
					for (u();
						"(" === z;) f.push(o), p *= o, o = 1, l(), u();
					if (!z) break;
					var d = z,
						y = h();
					if (null == y) throw new SyntaxError('Unexpected "' + d + '" in "' + C + '" at index ' + S.toString());
					var x = v(y);
					if (null == x) throw new SyntaxError('Unit "' + y + '" not found.');
					var b = o * p;
					if (u(), g("^")) {
						u();
						var w = m();
						if (null == w) throw new SyntaxError('In "' + r + '", "^" must be followed by a floating-point number');
						b *= w
					}
					n.units.push({
						unit: x.unit,
						prefix: x.prefix,
						power: b
					});
					for (var N = 0; N < R.length; N++) n.dimensions[N] += x.unit.dimensions[N] * b;
					for (u();
						")" === z;) {
						if (0 === f.length) throw new SyntaxError('Unmatched ")" in "' + C + '" at index ' + S.toString());
						p /= f.pop(), l(), u()
					}
					c = !1, g("*") ? (o = 1, c = !0) : g("/") ? (o = -1, c = !0) : o = 1;
					var E = x.unit.base.key;
					D.auto[E] = {
						unit: x.unit,
						prefix: x.prefix
					}
				}
				if (u(), z) throw new SyntaxError('Could not parse: "' + r + '"');
				if (c) throw new SyntaxError('Trailing characters: "' + r + '"');
				if (0 !== f.length) throw new SyntaxError('Unmatched "(" in "' + C + '"');
				if (0 == n.units.length) throw new SyntaxError('"' + r + '" contains no units');
				return n.value = void 0 != a ? n._normalize(a) : null, n
			}, s.prototype.clone = function() {
				var e = new s;
				e.fixPrefix = this.fixPrefix, e.isUnitListSimplified = this.isUnitListSimplified, e.value = a(this.value), e.dimensions = this.dimensions.slice(0), e.units = [];
				for (var t = 0; t < this.units.length; t++) {
					e.units[t] = {};
					for (var r in this.units[t]) this.units[t].hasOwnProperty(r) && (e.units[t][r] = this.units[t][r])
				}
				return e
			}, s.prototype._isDerived = function() {
				return 0 === this.units.length ? !1 : this.units.length > 1 || Math.abs(this.units[0].power - 1) > 1e-15
			}, s.prototype._normalize = function(e) {
				var t, r, n, i, a;
				if (null == e || 0 === this.units.length) return e;
				if (this._isDerived()) {
					var o = e;
					a = s._getNumberConverter(_(e));
					for (var u = 0; u < this.units.length; u++) t = a(this.units[u].unit.value), i = a(this.units[u].prefix.value), n = a(this.units[u].power), o = x(o, w(x(t, i), n));
					return o
				}
				return a = s._getNumberConverter(_(e)), t = a(this.units[0].unit.value), r = a(this.units[0].unit.offset), i = a(this.units[0].prefix.value), x(d(e, r), x(t, i))
			}, s.prototype._denormalize = function(e, t) {
				var r, n, i, a, o;
				if (null == e || 0 === this.units.length) return e;
				if (this._isDerived()) {
					var u = e;
					o = s._getNumberConverter(_(e));
					for (var c = 0; c < this.units.length; c++) r = o(this.units[c].unit.value), a = o(this.units[c].prefix.value), i = o(this.units[c].power), u = b(u, w(x(r, a), i));
					return u
				}
				return o = s._getNumberConverter(_(e)), r = o(this.units[0].unit.value), a = o(this.units[0].prefix.value), n = o(this.units[0].unit.offset), void 0 == t ? y(b(b(e, r), a), n) : y(b(b(e, r), t), n)
			}, s.isValuelessUnit = function(e) {
				return null != v(e)
			}, s.prototype.hasBase = function(e) {
				if ("string" == typeof e && (e = P[e]), !e) return !1;
				for (var t = 0; t < R.length; t++)
					if (Math.abs(this.dimensions[t] - e.dimensions[t]) > 1e-12) return !1;
				return !0
			}, s.prototype.equalBase = function(e) {
				for (var t = 0; t < R.length; t++)
					if (Math.abs(this.dimensions[t] - e.dimensions[t]) > 1e-12) return !1;
				return !0
			}, s.prototype.equals = function(e) {
				return this.equalBase(e) && E(this.value, e.value)
			}, s.prototype.multiply = function(e) {
				for (var t = this.clone(), r = 0; r < R.length; r++) t.dimensions[r] = this.dimensions[r] + e.dimensions[r];
				for (var r = 0; r < e.units.length; r++) {
					var n = JSON.parse(JSON.stringify(e.units[r]));
					t.units.push(n)
				}
				if (null != this.value || null != e.value) {
					var i = null == this.value ? this._normalize(1) : this.value,
						a = null == e.value ? e._normalize(1) : e.value;
					t.value = x(i, a)
				} else t.value = null;
				return t.isUnitListSimplified = !1, t
			}, s.prototype.divide = function(e) {
				for (var t = this.clone(), r = 0; r < R.length; r++) t.dimensions[r] = this.dimensions[r] - e.dimensions[r];
				for (var r = 0; r < e.units.length; r++) {
					var n = JSON.parse(JSON.stringify(e.units[r]));
					n.power = -n.power, t.units.push(n)
				}
				if (null != this.value || null != e.value) {
					var i = null == this.value ? this._normalize(1) : this.value,
						a = null == e.value ? e._normalize(1) : e.value;
					t.value = b(i, a)
				} else t.value = null;
				return t.isUnitListSimplified = !1, t
			}, s.prototype.pow = function(e) {
				for (var t = this.clone(), r = 0; r < R.length; r++) t.dimensions[r] = this.dimensions[r] * e;
				for (var r = 0; r < t.units.length; r++) t.units[r].power *= e;
				return null != t.value ? t.value = w(t.value, e) : t.value = null, t.isUnitListSimplified = !1, t
			}, s.prototype.abs = function() {
				var e = this.clone();
				e.value = N(e.value);
				for (var t in e.units)("VA" === e.units[t].unit.name || "VAR" === e.units[t].unit.name) && (e.units[t].unit = L.W);
				return e
			}, s.prototype.to = function(e) {
				var t, r = null == this.value ? this._normalize(1) : this.value;
				if ("string" == typeof e) {
					if (t = s.parse(e), !this.equalBase(t)) throw new Error("Units do not match");
					if (null !== t.value) throw new Error("Cannot convert to a unit with a value");
					return t.value = a(r), t.fixPrefix = !0, t.isUnitListSimplified = !0, t
				}
				if (e && e.isUnit) {
					if (!this.equalBase(e)) throw new Error("Units do not match");
					if (null !== e.value) throw new Error("Cannot convert to a unit with a value");
					return t = e.clone(), t.value = a(r), t.fixPrefix = !0, t.isUnitListSimplified = !0, t
				}
				throw new Error("String or Unit expected as parameter")
			}, s.prototype.toNumber = function(e) {
				return O(this.toNumeric(e))
			}, s.prototype.toNumeric = function(e) {
				var t = this.to(e);
				return t._isDerived() ? t._denormalize(t.value) : t._denormalize(t.value, t.units[0].prefix.value)
			}, s.prototype.toString = function() {
				return this.format()
			}, s.prototype.toJSON = function() {
				return {
					mathjs: "Unit",
					value: this._denormalize(this.value),
					unit: this.formatUnits(),
					fixPrefix: this.fixPrefix
				}
			}, s.fromJSON = function(e) {
				var t = new s(e.value, e.unit);
				return t.fixPrefix = e.fixPrefix || !1, t
			}, s.prototype.valueOf = s.prototype.toString, s.prototype.simplifyUnitListLazy = function() {
				if (!this.isUnitListSimplified && null != this.value) {
					var e, t = [];
					for (var r in $)
						if (this.hasBase(P[r])) {
							e = r;
							break
						}
					if ("NONE" === e) this.units = [];
					else {
						var n;
						e && $.hasOwnProperty(e) && (n = $[e]);
						if (n) this.units = [{
							unit: n.unit,
							prefix: n.prefix,
							power: 1
						}];
						else {
							for (var i = 0; i < R.length; i++) {
								var a = R[i];
								Math.abs(this.dimensions[i]) > 1e-12 && t.push({
									unit: $[a].unit,
									prefix: $[a].prefix,
									power: this.dimensions[i]
								})
							}
							t.length < this.units.length && (this.units = t)
						}
					}
					this.isUnitListSimplified = !0
				}
			}, s.prototype.formatUnits = function() {
				this.simplifyUnitListLazy();
				for (var e = "", t = "", r = 0, n = 0, i = 0; i < this.units.length; i++) this.units[i].power > 0 ? (r++, e += " " + this.units[i].prefix.name + this.units[i].unit.name, Math.abs(this.units[i].power - 1) > 1e-15 && (e += "^" + this.units[i].power)) : this.units[i].power < 0 && n++;
				if (n > 0)
					for (var i = 0; i < this.units.length; i++) this.units[i].power < 0 && (r > 0 ? (t += " " + this.units[i].prefix.name + this.units[i].unit.name, Math.abs(this.units[i].power + 1) > 1e-15 && (t += "^" + -this.units[i].power)) : (t += " " + this.units[i].prefix.name + this.units[i].unit.name, t += "^" + this.units[i].power));
				e = e.substr(1), t = t.substr(1), r > 1 && n > 0 && (e = "(" + e + ")"), n > 1 && r > 0 && (t = "(" + t + ")");
				var a = e;
				return r > 0 && n > 0 && (a += " / "), a += t
			}, s.prototype.format = function(e) {
				this.simplifyUnitListLazy();
				var t = !1,
					r = !0;
				"undefined" != typeof this.value && null !== this.value && this.value.isComplex && (t = Math.abs(this.value.re) < 1e-14, r = Math.abs(this.value.im) < 1e-14);
				for (var n in this.units) this.units[n].unit && ("VA" === this.units[n].unit.name && t ? this.units[n].unit = L.VAR : "VAR" !== this.units[n].unit.name || t || (this.units[n].unit = L.VA));
				1 !== this.units.length || this.fixPrefix || Math.abs(this.units[0].power - Math.round(this.units[0].power)) < 1e-14 && (this.units[0].prefix = this._bestPrefix());
				var i = this._denormalize(this.value),
					a = null !== this.value ? A(i, e || {}) : "",
					o = this.formatUnits();
				return this.value && this.value.isComplex && (a = "(" + a + ")"), o.length > 0 && a.length > 0 && (a += " "), a += o
			}, s.prototype._bestPrefix = function() {
				if (1 !== this.units.length) throw new Error("Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!");
				if (Math.abs(this.units[0].power - Math.round(this.units[0].power)) >= 1e-14) throw new Error("Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!");
				var e = N(this.value),
					t = N(this.units[0].unit.value),
					r = this.units[0].prefix;
				if (0 === e) return r;
				var n = this.units[0].power,
					i = Math.abs(Math.log(e / Math.pow(r.value * t, n)) / Math.LN10 - 1.2),
					a = this.units[0].unit.prefixes;
				for (var o in a)
					if (a.hasOwnProperty(o)) {
						var s = a[o];
						if (s.scientific) {
							var u = Math.abs(Math.log(e / Math.pow(s.value * t, n)) / Math.LN10 - 1.2);
							(i > u || u === i && s.name.length < r.name.length) && (r = s, i = u)
						}
					}
				return r
			};
			var B = {
				NONE: {
					"": {
						name: "",
						value: 1,
						scientific: !0
					}
				},
				SHORT: {
					"": {
						name: "",
						value: 1,
						scientific: !0
					},
					da: {
						name: "da",
						value: 10,
						scientific: !1
					},
					h: {
						name: "h",
						value: 100,
						scientific: !1
					},
					k: {
						name: "k",
						value: 1e3,
						scientific: !0
					},
					M: {
						name: "M",
						value: 1e6,
						scientific: !0
					},
					G: {
						name: "G",
						value: 1e9,
						scientific: !0
					},
					T: {
						name: "T",
						value: 1e12,
						scientific: !0
					},
					P: {
						name: "P",
						value: 1e15,
						scientific: !0
					},
					E: {
						name: "E",
						value: 1e18,
						scientific: !0
					},
					Z: {
						name: "Z",
						value: 1e21,
						scientific: !0
					},
					Y: {
						name: "Y",
						value: 1e24,
						scientific: !0
					},
					d: {
						name: "d",
						value: .1,
						scientific: !1
					},
					c: {
						name: "c",
						value: .01,
						scientific: !1
					},
					m: {
						name: "m",
						value: .001,
						scientific: !0
					},
					u: {
						name: "u",
						value: 1e-6,
						scientific: !0
					},
					n: {
						name: "n",
						value: 1e-9,
						scientific: !0
					},
					p: {
						name: "p",
						value: 1e-12,
						scientific: !0
					},
					f: {
						name: "f",
						value: 1e-15,
						scientific: !0
					},
					a: {
						name: "a",
						value: 1e-18,
						scientific: !0
					},
					z: {
						name: "z",
						value: 1e-21,
						scientific: !0
					},
					y: {
						name: "y",
						value: 1e-24,
						scientific: !0
					}
				},
				LONG: {
					"": {
						name: "",
						value: 1,
						scientific: !0
					},
					deca: {
						name: "deca",
						value: 10,
						scientific: !1
					},
					hecto: {
						name: "hecto",
						value: 100,
						scientific: !1
					},
					kilo: {
						name: "kilo",
						value: 1e3,
						scientific: !0
					},
					mega: {
						name: "mega",
						value: 1e6,
						scientific: !0
					},
					giga: {
						name: "giga",
						value: 1e9,
						scientific: !0
					},
					tera: {
						name: "tera",
						value: 1e12,
						scientific: !0
					},
					peta: {
						name: "peta",
						value: 1e15,
						scientific: !0
					},
					exa: {
						name: "exa",
						value: 1e18,
						scientific: !0
					},
					zetta: {
						name: "zetta",
						value: 1e21,
						scientific: !0
					},
					yotta: {
						name: "yotta",
						value: 1e24,
						scientific: !0
					},
					deci: {
						name: "deci",
						value: .1,
						scientific: !1
					},
					centi: {
						name: "centi",
						value: .01,
						scientific: !1
					},
					milli: {
						name: "milli",
						value: .001,
						scientific: !0
					},
					micro: {
						name: "micro",
						value: 1e-6,
						scientific: !0
					},
					nano: {
						name: "nano",
						value: 1e-9,
						scientific: !0
					},
					pico: {
						name: "pico",
						value: 1e-12,
						scientific: !0
					},
					femto: {
						name: "femto",
						value: 1e-15,
						scientific: !0
					},
					atto: {
						name: "atto",
						value: 1e-18,
						scientific: !0
					},
					zepto: {
						name: "zepto",
						value: 1e-21,
						scientific: !0
					},
					yocto: {
						name: "yocto",
						value: 1e-24,
						scientific: !0
					}
				},
				SQUARED: {
					"": {
						name: "",
						value: 1,
						scientific: !0
					},
					da: {
						name: "da",
						value: 100,
						scientific: !1
					},
					h: {
						name: "h",
						value: 1e4,
						scientific: !1
					},
					k: {
						name: "k",
						value: 1e6,
						scientific: !0
					},
					M: {
						name: "M",
						value: 1e12,
						scientific: !0
					},
					G: {
						name: "G",
						value: 1e18,
						scientific: !0
					},
					T: {
						name: "T",
						value: 1e24,
						scientific: !0
					},
					P: {
						name: "P",
						value: 1e30,
						scientific: !0
					},
					E: {
						name: "E",
						value: 1e36,
						scientific: !0
					},
					Z: {
						name: "Z",
						value: 1e42,
						scientific: !0
					},
					Y: {
						name: "Y",
						value: 1e48,
						scientific: !0
					},
					d: {
						name: "d",
						value: .01,
						scientific: !1
					},
					c: {
						name: "c",
						value: 1e-4,
						scientific: !1
					},
					m: {
						name: "m",
						value: 1e-6,
						scientific: !0
					},
					u: {
						name: "u",
						value: 1e-12,
						scientific: !0
					},
					n: {
						name: "n",
						value: 1e-18,
						scientific: !0
					},
					p: {
						name: "p",
						value: 1e-24,
						scientific: !0
					},
					f: {
						name: "f",
						value: 1e-30,
						scientific: !0
					},
					a: {
						name: "a",
						value: 1e-36,
						scientific: !0
					},
					z: {
						name: "z",
						value: 1e-42,
						scientific: !0
					},
					y: {
						name: "y",
						value: 1e-48,
						scientific: !0
					}
				},
				CUBIC: {
					"": {
						name: "",
						value: 1,
						scientific: !0
					},
					da: {
						name: "da",
						value: 1e3,
						scientific: !1
					},
					h: {
						name: "h",
						value: 1e6,
						scientific: !1
					},
					k: {
						name: "k",
						value: 1e9,
						scientific: !0
					},
					M: {
						name: "M",
						value: 1e18,
						scientific: !0
					},
					G: {
						name: "G",
						value: 1e27,
						scientific: !0
					},
					T: {
						name: "T",
						value: 1e36,
						scientific: !0
					},
					P: {
						name: "P",
						value: 1e45,
						scientific: !0
					},
					E: {
						name: "E",
						value: 1e54,
						scientific: !0
					},
					Z: {
						name: "Z",
						value: 1e63,
						scientific: !0
					},
					Y: {
						name: "Y",
						value: 1e72,
						scientific: !0
					},
					d: {
						name: "d",
						value: .001,
						scientific: !1
					},
					c: {
						name: "c",
						value: 1e-6,
						scientific: !1
					},
					m: {
						name: "m",
						value: 1e-9,
						scientific: !0
					},
					u: {
						name: "u",
						value: 1e-18,
						scientific: !0
					},
					n: {
						name: "n",
						value: 1e-27,
						scientific: !0
					},
					p: {
						name: "p",
						value: 1e-36,
						scientific: !0
					},
					f: {
						name: "f",
						value: 1e-45,
						scientific: !0
					},
					a: {
						name: "a",
						value: 1e-54,
						scientific: !0
					},
					z: {
						name: "z",
						value: 1e-63,
						scientific: !0
					},
					y: {
						name: "y",
						value: 1e-72,
						scientific: !0
					}
				},
				BINARY_SHORT: {
					"": {
						name: "",
						value: 1,
						scientific: !0
					},
					k: {
						name: "k",
						value: 1e3,
						scientific: !0
					},
					M: {
						name: "M",
						value: 1e6,
						scientific: !0
					},
					G: {
						name: "G",
						value: 1e9,
						scientific: !0
					},
					T: {
						name: "T",
						value: 1e12,
						scientific: !0
					},
					P: {
						name: "P",
						value: 1e15,
						scientific: !0
					},
					E: {
						name: "E",
						value: 1e18,
						scientific: !0
					},
					Z: {
						name: "Z",
						value: 1e21,
						scientific: !0
					},
					Y: {
						name: "Y",
						value: 1e24,
						scientific: !0
					},
					Ki: {
						name: "Ki",
						value: 1024,
						scientific: !0
					},
					Mi: {
						name: "Mi",
						value: Math.pow(1024, 2),
						scientific: !0
					},
					Gi: {
						name: "Gi",
						value: Math.pow(1024, 3),
						scientific: !0
					},
					Ti: {
						name: "Ti",
						value: Math.pow(1024, 4),
						scientific: !0
					},
					Pi: {
						name: "Pi",
						value: Math.pow(1024, 5),
						scientific: !0
					},
					Ei: {
						name: "Ei",
						value: Math.pow(1024, 6),
						scientific: !0
					},
					Zi: {
						name: "Zi",
						value: Math.pow(1024, 7),
						scientific: !0
					},
					Yi: {
						name: "Yi",
						value: Math.pow(1024, 8),
						scientific: !0
					}
				},
				BINARY_LONG: {
					"": {
						name: "",
						value: 1,
						scientific: !0
					},
					kilo: {
						name: "kilo",
						value: 1e3,
						scientific: !0
					},
					mega: {
						name: "mega",
						value: 1e6,
						scientific: !0
					},
					giga: {
						name: "giga",
						value: 1e9,
						scientific: !0
					},
					tera: {
						name: "tera",
						value: 1e12,
						scientific: !0
					},
					peta: {
						name: "peta",
						value: 1e15,
						scientific: !0
					},
					exa: {
						name: "exa",
						value: 1e18,
						scientific: !0
					},
					zetta: {
						name: "zetta",
						value: 1e21,
						scientific: !0
					},
					yotta: {
						name: "yotta",
						value: 1e24,
						scientific: !0
					},
					kibi: {
						name: "kibi",
						value: 1024,
						scientific: !0
					},
					mebi: {
						name: "mebi",
						value: Math.pow(1024, 2),
						scientific: !0
					},
					gibi: {
						name: "gibi",
						value: Math.pow(1024, 3),
						scientific: !0
					},
					tebi: {
						name: "tebi",
						value: Math.pow(1024, 4),
						scientific: !0
					},
					pebi: {
						name: "pebi",
						value: Math.pow(1024, 5),
						scientific: !0
					},
					exi: {
						name: "exi",
						value: Math.pow(1024, 6),
						scientific: !0
					},
					zebi: {
						name: "zebi",
						value: Math.pow(1024, 7),
						scientific: !0
					},
					yobi: {
						name: "yobi",
						value: Math.pow(1024, 8),
						scientific: !0
					}
				},
				BTU: {
					"": {
						name: "",
						value: 1,
						scientific: !0
					},
					MM: {
						name: "MM",
						value: 1e6,
						scientific: !0
					}
				}
			};
			B.SHORTLONG = {};
			for (var k in B.SHORT) B.SHORT.hasOwnProperty(k) && (B.SHORTLONG[k] = B.SHORT[k]);
			for (var k in B.LONG) B.LONG.hasOwnProperty(k) && (B.SHORTLONG[k] = B.LONG[k]);
			var I = {
					name: "",
					value: 1,
					scientific: !0
				},
				R = ["MASS", "LENGTH", "TIME", "CURRENT", "TEMPERATURE", "LUMINOUS_INTENSITY", "AMOUNT_OF_SUBSTANCE", "ANGLE", "BIT"],
				P = {
					NONE: {
						dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 0]
					},
					MASS: {
						dimensions: [1, 0, 0, 0, 0, 0, 0, 0, 0]
					},
					LENGTH: {
						dimensions: [0, 1, 0, 0, 0, 0, 0, 0, 0]
					},
					TIME: {
						dimensions: [0, 0, 1, 0, 0, 0, 0, 0, 0]
					},
					CURRENT: {
						dimensions: [0, 0, 0, 1, 0, 0, 0, 0, 0]
					},
					TEMPERATURE: {
						dimensions: [0, 0, 0, 0, 1, 0, 0, 0, 0]
					},
					LUMINOUS_INTENSITY: {
						dimensions: [0, 0, 0, 0, 0, 1, 0, 0, 0]
					},
					AMOUNT_OF_SUBSTANCE: {
						dimensions: [0, 0, 0, 0, 0, 0, 1, 0, 0]
					},
					FORCE: {
						dimensions: [1, 1, -2, 0, 0, 0, 0, 0, 0]
					},
					SURFACE: {
						dimensions: [0, 2, 0, 0, 0, 0, 0, 0, 0]
					},
					VOLUME: {
						dimensions: [0, 3, 0, 0, 0, 0, 0, 0, 0]
					},
					ENERGY: {
						dimensions: [1, 2, -2, 0, 0, 0, 0, 0, 0]
					},
					POWER: {
						dimensions: [1, 2, -3, 0, 0, 0, 0, 0, 0]
					},
					PRESSURE: {
						dimensions: [1, -1, -2, 0, 0, 0, 0, 0, 0]
					},
					ELECTRIC_CHARGE: {
						dimensions: [0, 0, 1, 1, 0, 0, 0, 0, 0]
					},
					ELECTRIC_CAPACITANCE: {
						dimensions: [-1, -2, 4, 2, 0, 0, 0, 0, 0]
					},
					ELECTRIC_POTENTIAL: {
						dimensions: [1, 2, -3, -1, 0, 0, 0, 0, 0]
					},
					ELECTRIC_RESISTANCE: {
						dimensions: [1, 2, -3, -2, 0, 0, 0, 0, 0]
					},
					ELECTRIC_INDUCTANCE: {
						dimensions: [1, 2, -2, -2, 0, 0, 0, 0, 0]
					},
					ELECTRIC_CONDUCTANCE: {
						dimensions: [-1, -2, 3, 2, 0, 0, 0, 0, 0]
					},
					MAGNETIC_FLUX: {
						dimensions: [1, 2, -2, -1, 0, 0, 0, 0, 0]
					},
					MAGNETIC_FLUX_DENSITY: {
						dimensions: [1, 0, -2, -1, 0, 0, 0, 0, 0]
					},
					FREQUENCY: {
						dimensions: [0, 0, -1, 0, 0, 0, 0, 0, 0]
					},
					ANGLE: {
						dimensions: [0, 0, 0, 0, 0, 0, 0, 1, 0]
					},
					BIT: {
						dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 1]
					}
				};
			for (var k in P) P[k].key = k;
			var U = {},
				q = {
					name: "",
					base: U,
					value: 1,
					offset: 0,
					dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 0]
				},
				L = {
					meter: {
						name: "meter",
						base: P.LENGTH,
						prefixes: B.LONG,
						value: 1,
						offset: 0
					},
					inch: {
						name: "inch",
						base: P.LENGTH,
						prefixes: B.NONE,
						value: .0254,
						offset: 0
					},
					foot: {
						name: "foot",
						base: P.LENGTH,
						prefixes: B.NONE,
						value: .3048,
						offset: 0
					},
					yard: {
						name: "yard",
						base: P.LENGTH,
						prefixes: B.NONE,
						value: .9144,
						offset: 0
					},
					mile: {
						name: "mile",
						base: P.LENGTH,
						prefixes: B.NONE,
						value: 1609.344,
						offset: 0
					},
					link: {
						name: "link",
						base: P.LENGTH,
						prefixes: B.NONE,
						value: .201168,
						offset: 0
					},
					rod: {
						name: "rod",
						base: P.LENGTH,
						prefixes: B.NONE,
						value: 5.02921,
						offset: 0
					},
					chain: {
						name: "chain",
						base: P.LENGTH,
						prefixes: B.NONE,
						value: 20.1168,
						offset: 0
					},
					angstrom: {
						name: "angstrom",
						base: P.LENGTH,
						prefixes: B.NONE,
						value: 1e-10,
						offset: 0
					},
					m: {
						name: "m",
						base: P.LENGTH,
						prefixes: B.SHORT,
						value: 1,
						offset: 0
					},
					"in": {
						name: "in",
						base: P.LENGTH,
						prefixes: B.NONE,
						value: .0254,
						offset: 0
					},
					ft: {
						name: "ft",
						base: P.LENGTH,
						prefixes: B.NONE,
						value: .3048,
						offset: 0
					},
					yd: {
						name: "yd",
						base: P.LENGTH,
						prefixes: B.NONE,
						value: .9144,
						offset: 0
					},
					mi: {
						name: "mi",
						base: P.LENGTH,
						prefixes: B.NONE,
						value: 1609.344,
						offset: 0
					},
					li: {
						name: "li",
						base: P.LENGTH,
						prefixes: B.NONE,
						value: .201168,
						offset: 0
					},
					rd: {
						name: "rd",
						base: P.LENGTH,
						prefixes: B.NONE,
						value: 5.02921,
						offset: 0
					},
					ch: {
						name: "ch",
						base: P.LENGTH,
						prefixes: B.NONE,
						value: 20.1168,
						offset: 0
					},
					mil: {
						name: "mil",
						base: P.LENGTH,
						prefixes: B.NONE,
						value: 254e-7,
						offset: 0
					},
					m2: {
						name: "m2",
						base: P.SURFACE,
						prefixes: B.SQUARED,
						value: 1,
						offset: 0
					},
					sqin: {
						name: "sqin",
						base: P.SURFACE,
						prefixes: B.NONE,
						value: 64516e-8,
						offset: 0
					},
					sqft: {
						name: "sqft",
						base: P.SURFACE,
						prefixes: B.NONE,
						value: .09290304,
						offset: 0
					},
					sqyd: {
						name: "sqyd",
						base: P.SURFACE,
						prefixes: B.NONE,
						value: .83612736,
						offset: 0
					},
					sqmi: {
						name: "sqmi",
						base: P.SURFACE,
						prefixes: B.NONE,
						value: 2589988.110336,
						offset: 0
					},
					sqrd: {
						name: "sqrd",
						base: P.SURFACE,
						prefixes: B.NONE,
						value: 25.29295,
						offset: 0
					},
					sqch: {
						name: "sqch",
						base: P.SURFACE,
						prefixes: B.NONE,
						value: 404.6873,
						offset: 0
					},
					sqmil: {
						name: "sqmil",
						base: P.SURFACE,
						prefixes: B.NONE,
						value: 6.4516e-10,
						offset: 0
					},
					m3: {
						name: "m3",
						base: P.VOLUME,
						prefixes: B.CUBIC,
						value: 1,
						offset: 0
					},
					L: {
						name: "L",
						base: P.VOLUME,
						prefixes: B.SHORT,
						value: .001,
						offset: 0
					},
					l: {
						name: "l",
						base: P.VOLUME,
						prefixes: B.SHORT,
						value: .001,
						offset: 0
					},
					litre: {
						name: "litre",
						base: P.VOLUME,
						prefixes: B.LONG,
						value: .001,
						offset: 0
					},
					cuin: {
						name: "cuin",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: 16387064e-12,
						offset: 0
					},
					cuft: {
						name: "cuft",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: .028316846592,
						offset: 0
					},
					cuyd: {
						name: "cuyd",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: .764554857984,
						offset: 0
					},
					teaspoon: {
						name: "teaspoon",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: 5e-6,
						offset: 0
					},
					tablespoon: {
						name: "tablespoon",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: 15e-6,
						offset: 0
					},
					drop: {
						name: "drop",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: 5e-8,
						offset: 0
					},
					gtt: {
						name: "gtt",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: 5e-8,
						offset: 0
					},
					minim: {
						name: "minim",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: 6.161152e-8,
						offset: 0
					},
					fluiddram: {
						name: "fluiddram",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: 36966911e-13,
						offset: 0
					},
					fluidounce: {
						name: "fluidounce",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: 2957353e-11,
						offset: 0
					},
					gill: {
						name: "gill",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: .0001182941,
						offset: 0
					},
					cc: {
						name: "cc",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: 1e-6,
						offset: 0
					},
					cup: {
						name: "cup",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: .0002365882,
						offset: 0
					},
					pint: {
						name: "pint",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: .0004731765,
						offset: 0
					},
					quart: {
						name: "quart",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: .0009463529,
						offset: 0
					},
					gallon: {
						name: "gallon",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: .003785412,
						offset: 0
					},
					beerbarrel: {
						name: "beerbarrel",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: .1173478,
						offset: 0
					},
					oilbarrel: {
						name: "oilbarrel",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: .1589873,
						offset: 0
					},
					hogshead: {
						name: "hogshead",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: .238481,
						offset: 0
					},
					fldr: {
						name: "fldr",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: 36966911e-13,
						offset: 0
					},
					floz: {
						name: "floz",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: 2957353e-11,
						offset: 0
					},
					gi: {
						name: "gi",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: .0001182941,
						offset: 0
					},
					cp: {
						name: "cp",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: .0002365882,
						offset: 0
					},
					pt: {
						name: "pt",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: .0004731765,
						offset: 0
					},
					qt: {
						name: "qt",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: .0009463529,
						offset: 0
					},
					gal: {
						name: "gal",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: .003785412,
						offset: 0
					},
					bbl: {
						name: "bbl",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: .1173478,
						offset: 0
					},
					obl: {
						name: "obl",
						base: P.VOLUME,
						prefixes: B.NONE,
						value: .1589873,
						offset: 0
					},
					g: {
						name: "g",
						base: P.MASS,
						prefixes: B.SHORT,
						value: .001,
						offset: 0
					},
					gram: {
						name: "gram",
						base: P.MASS,
						prefixes: B.LONG,
						value: .001,
						offset: 0
					},
					ton: {
						name: "ton",
						base: P.MASS,
						prefixes: B.SHORT,
						value: 907.18474,
						offset: 0
					},
					tonne: {
						name: "tonne",
						base: P.MASS,
						prefixes: B.SHORT,
						value: 1e3,
						offset: 0
					},
					grain: {
						name: "grain",
						base: P.MASS,
						prefixes: B.NONE,
						value: 6479891e-11,
						offset: 0
					},
					dram: {
						name: "dram",
						base: P.MASS,
						prefixes: B.NONE,
						value: .0017718451953125,
						offset: 0
					},
					ounce: {
						name: "ounce",
						base: P.MASS,
						prefixes: B.NONE,
						value: .028349523125,
						offset: 0
					},
					poundmass: {
						name: "poundmass",
						base: P.MASS,
						prefixes: B.NONE,
						value: .45359237,
						offset: 0
					},
					hundredweight: {
						name: "hundredweight",
						base: P.MASS,
						prefixes: B.NONE,
						value: 45.359237,
						offset: 0
					},
					stick: {
						name: "stick",
						base: P.MASS,
						prefixes: B.NONE,
						value: .115,
						offset: 0
					},
					stone: {
						name: "stone",
						base: P.MASS,
						prefixes: B.NONE,
						value: 6.35029318,
						offset: 0
					},
					gr: {
						name: "gr",
						base: P.MASS,
						prefixes: B.NONE,
						value: 6479891e-11,
						offset: 0
					},
					dr: {
						name: "dr",
						base: P.MASS,
						prefixes: B.NONE,
						value: .0017718451953125,
						offset: 0
					},
					oz: {
						name: "oz",
						base: P.MASS,
						prefixes: B.NONE,
						value: .028349523125,
						offset: 0
					},
					lbm: {
						name: "lbm",
						base: P.MASS,
						prefixes: B.NONE,
						value: .45359237,
						offset: 0
					},
					cwt: {
						name: "cwt",
						base: P.MASS,
						prefixes: B.NONE,
						value: 45.359237,
						offset: 0
					},
					s: {
						name: "s",
						base: P.TIME,
						prefixes: B.SHORT,
						value: 1,
						offset: 0
					},
					min: {
						name: "min",
						base: P.TIME,
						prefixes: B.NONE,
						value: 60,
						offset: 0
					},
					h: {
						name: "h",
						base: P.TIME,
						prefixes: B.NONE,
						value: 3600,
						offset: 0
					},
					second: {
						name: "second",
						base: P.TIME,
						prefixes: B.LONG,
						value: 1,
						offset: 0
					},
					sec: {
						name: "sec",
						base: P.TIME,
						prefixes: B.LONG,
						value: 1,
						offset: 0
					},
					minute: {
						name: "minute",
						base: P.TIME,
						prefixes: B.NONE,
						value: 60,
						offset: 0
					},
					hour: {
						name: "hour",
						base: P.TIME,
						prefixes: B.NONE,
						value: 3600,
						offset: 0
					},
					day: {
						name: "day",
						base: P.TIME,
						prefixes: B.NONE,
						value: 86400,
						offset: 0
					},
					week: {
						name: "week",
						base: P.TIME,
						prefixes: B.NONE,
						value: 604800,
						offset: 0
					},
					month: {
						name: "month",
						base: P.TIME,
						prefixes: B.NONE,
						value: 2629800,
						offset: 0
					},
					year: {
						name: "year",
						base: P.TIME,
						prefixes: B.NONE,
						value: 31557600,
						offset: 0
					},
					decade: {
						name: "year",
						base: P.TIME,
						prefixes: B.NONE,
						value: 315576e3,
						offset: 0
					},
					century: {
						name: "century",
						base: P.TIME,
						prefixes: B.NONE,
						value: 315576e4,
						offset: 0
					},
					millennium: {
						name: "millennium",
						base: P.TIME,
						prefixes: B.NONE,
						value: 315576e5,
						offset: 0
					},
					hertz: {
						name: "Hertz",
						base: P.FREQUENCY,
						prefixes: B.LONG,
						value: 1,
						offset: 0,
						reciprocal: !0
					},
					Hz: {
						name: "Hz",
						base: P.FREQUENCY,
						prefixes: B.SHORT,
						value: 1,
						offset: 0,
						reciprocal: !0
					},
					rad: {
						name: "rad",
						base: P.ANGLE,
						prefixes: B.NONE,
						value: 1,
						offset: 0
					},
					deg: {
						name: "deg",
						base: P.ANGLE,
						prefixes: B.NONE,
						value: .017453292519943295,
						offset: 0
					},
					grad: {
						name: "grad",
						base: P.ANGLE,
						prefixes: B.NONE,
						value: .015707963267948967,
						offset: 0
					},
					cycle: {
						name: "cycle",
						base: P.ANGLE,
						prefixes: B.NONE,
						value: 6.283185307179586,
						offset: 0
					},
					arcsec: {
						name: "arcsec",
						base: P.ANGLE,
						prefixes: B.NONE,
						value: 484813681109536e-20,
						offset: 0
					},
					arcmin: {
						name: "arcmin",
						base: P.ANGLE,
						prefixes: B.NONE,
						value: .0002908882086657216,
						offset: 0
					},
					A: {
						name: "A",
						base: P.CURRENT,
						prefixes: B.SHORT,
						value: 1,
						offset: 0
					},
					ampere: {
						name: "ampere",
						base: P.CURRENT,
						prefixes: B.LONG,
						value: 1,
						offset: 0
					},
					K: {
						name: "K",
						base: P.TEMPERATURE,
						prefixes: B.NONE,
						value: 1,
						offset: 0
					},
					degC: {
						name: "degC",
						base: P.TEMPERATURE,
						prefixes: B.NONE,
						value: 1,
						offset: 273.15
					},
					degF: {
						name: "degF",
						base: P.TEMPERATURE,
						prefixes: B.NONE,
						value: 1 / 1.8,
						offset: 459.67
					},
					degR: {
						name: "degR",
						base: P.TEMPERATURE,
						prefixes: B.NONE,
						value: 1 / 1.8,
						offset: 0
					},
					kelvin: {
						name: "kelvin",
						base: P.TEMPERATURE,
						prefixes: B.NONE,
						value: 1,
						offset: 0
					},
					celsius: {
						name: "celsius",
						base: P.TEMPERATURE,
						prefixes: B.NONE,
						value: 1,
						offset: 273.15
					},
					fahrenheit: {
						name: "fahrenheit",
						base: P.TEMPERATURE,
						prefixes: B.NONE,
						value: 1 / 1.8,
						offset: 459.67
					},
					rankine: {
						name: "rankine",
						base: P.TEMPERATURE,
						prefixes: B.NONE,
						value: 1 / 1.8,
						offset: 0
					},
					mol: {
						name: "mol",
						base: P.AMOUNT_OF_SUBSTANCE,
						prefixes: B.NONE,
						value: 1,
						offset: 0
					},
					mole: {
						name: "mole",
						base: P.AMOUNT_OF_SUBSTANCE,
						prefixes: B.NONE,
						value: 1,
						offset: 0
					},
					cd: {
						name: "cd",
						base: P.LUMINOUS_INTENSITY,
						prefixes: B.NONE,
						value: 1,
						offset: 0
					},
					candela: {
						name: "candela",
						base: P.LUMINOUS_INTENSITY,
						prefixes: B.NONE,
						value: 1,
						offset: 0
					},
					N: {
						name: "N",
						base: P.FORCE,
						prefixes: B.SHORT,
						value: 1,
						offset: 0
					},
					newton: {
						name: "newton",
						base: P.FORCE,
						prefixes: B.LONG,
						value: 1,
						offset: 0
					},
					dyn: {
						name: "dyn",
						base: P.FORCE,
						prefixes: B.SHORT,
						value: 1e-5,
						offset: 0
					},
					dyne: {
						name: "dyne",
						base: P.FORCE,
						prefixes: B.LONG,
						value: 1e-5,
						offset: 0
					},
					lbf: {
						name: "lbf",
						base: P.FORCE,
						prefixes: B.NONE,
						value: 4.4482216152605,
						offset: 0
					},
					poundforce: {
						name: "poundforce",
						base: P.FORCE,
						prefixes: B.NONE,
						value: 4.4482216152605,
						offset: 0
					},
					J: {
						name: "J",
						base: P.ENERGY,
						prefixes: B.SHORT,
						value: 1,
						offset: 0
					},
					joule: {
						name: "joule",
						base: P.ENERGY,
						prefixes: B.SHORT,
						value: 1,
						offset: 0
					},
					erg: {
						name: "erg",
						base: P.ENERGY,
						prefixes: B.NONE,
						value: 1e-5,
						offset: 0
					},
					Wh: {
						name: "Wh",
						base: P.ENERGY,
						prefixes: B.SHORT,
						value: 3600,
						offset: 0
					},
					BTU: {
						name: "BTU",
						base: P.ENERGY,
						prefixes: B.BTU,
						value: 1055.05585262,
						offset: 0
					},
					eV: {
						name: "eV",
						base: P.ENERGY,
						prefixes: B.SHORT,
						value: 1.602176565e-19,
						offset: 0
					},
					electronvolt: {
						name: "electronvolt",
						base: P.ENERGY,
						prefixes: B.LONG,
						value: 1.602176565e-19,
						offset: 0
					},
					W: {
						name: "W",
						base: P.POWER,
						prefixes: B.SHORT,
						value: 1,
						offset: 0
					},
					watt: {
						name: "W",
						base: P.POWER,
						prefixes: B.LONG,
						value: 1,
						offset: 0
					},
					hp: {
						name: "hp",
						base: P.POWER,
						prefixes: B.NONE,
						value: 745.6998715386,
						offset: 0
					},
					VAR: {
						name: "VAR",
						base: P.POWER,
						prefixes: B.SHORT,
						value: new T(0, 1),
						offset: 0
					},
					VA: {
						name: "VA",
						base: P.POWER,
						prefixes: B.SHORT,
						value: 1,
						offset: 0
					},
					Pa: {
						name: "Pa",
						base: P.PRESSURE,
						prefixes: B.SHORT,
						value: 1,
						offset: 0
					},
					psi: {
						name: "psi",
						base: P.PRESSURE,
						prefixes: B.NONE,
						value: 6894.75729276459,
						offset: 0
					},
					atm: {
						name: "atm",
						base: P.PRESSURE,
						prefixes: B.NONE,
						value: 101325,
						offset: 0
					},
					coulomb: {
						name: "coulomb",
						base: P.ELECTRIC_CHARGE,
						prefixes: B.LONG,
						value: 1,
						offset: 0
					},
					C: {
						name: "C",
						base: P.ELECTRIC_CHARGE,
						prefixes: B.SHORT,
						value: 1,
						offset: 0
					},
					farad: {
						name: "farad",
						base: P.ELECTRIC_CAPACITANCE,
						prefixes: B.LONG,
						value: 1,
						offset: 0
					},
					F: {
						name: "F",
						base: P.ELECTRIC_CAPACITANCE,
						prefixes: B.SHORT,
						value: 1,
						offset: 0
					},
					volt: {
						name: "volt",
						base: P.ELECTRIC_POTENTIAL,
						prefixes: B.LONG,
						value: 1,
						offset: 0
					},
					V: {
						name: "V",
						base: P.ELECTRIC_POTENTIAL,
						prefixes: B.SHORT,
						value: 1,
						offset: 0
					},
					ohm: {
						name: "ohm",
						base: P.ELECTRIC_RESISTANCE,
						prefixes: B.SHORTLONG,
						value: 1,
						offset: 0
					},
					henry: {
						name: "henry",
						base: P.ELECTRIC_INDUCTANCE,
						prefixes: B.LONG,
						value: 1,
						offset: 0
					},
					H: {
						name: "H",
						base: P.ELECTRIC_INDUCTANCE,
						prefixes: B.SHORT,
						value: 1,
						offset: 0
					},
					siemens: {
						name: "siemens",
						base: P.ELECTRIC_CONDUCTANCE,
						prefixes: B.LONG,
						value: 1,
						offset: 0
					},
					S: {
						name: "S",
						base: P.ELECTRIC_CONDUCTANCE,
						prefixes: B.SHORT,
						value: 1,
						offset: 0
					},
					weber: {
						name: "weber",
						base: P.MAGNETIC_FLUX,
						prefixes: B.LONG,
						value: 1,
						offset: 0
					},
					Wb: {
						name: "Wb",
						base: P.MAGNETIC_FLUX,
						prefixes: B.SHORT,
						value: 1,
						offset: 0
					},
					tesla: {
						name: "tesla",
						base: P.MAGNETIC_FLUX_DENSITY,
						prefixes: B.LONG,
						value: 1,
						offset: 0
					},
					T: {
						name: "T",
						base: P.MAGNETIC_FLUX_DENSITY,
						prefixes: B.SHORT,
						value: 1,
						offset: 0
					},
					b: {
						name: "b",
						base: P.BIT,
						prefixes: B.BINARY_SHORT,
						value: 1,
						offset: 0
					},
					bits: {
						name: "bits",
						base: P.BIT,
						prefixes: B.BINARY_LONG,
						value: 1,
						offset: 0
					},
					B: {
						name: "B",
						base: P.BIT,
						prefixes: B.BINARY_SHORT,
						value: 8,
						offset: 0
					},
					bytes: {
						name: "bytes",
						base: P.BIT,
						prefixes: B.BINARY_LONG,
						value: 8,
						offset: 0
					}
				},
				F = {
					meters: "meter",
					inches: "inch",
					feet: "foot",
					yards: "yard",
					miles: "mile",
					links: "link",
					rods: "rod",
					chains: "chain",
					angstroms: "angstrom",
					lt: "l",
					litres: "litre",
					liter: "litre",
					liters: "litre",
					teaspoons: "teaspoon",
					tablespoons: "tablespoon",
					minims: "minim",
					fluiddrams: "fluiddram",
					fluidounces: "fluidounce",
					gills: "gill",
					cups: "cup",
					pints: "pint",
					quarts: "quart",
					gallons: "gallon",
					beerbarrels: "beerbarrel",
					oilbarrels: "oilbarrel",
					hogsheads: "hogshead",
					gtts: "gtt",
					grams: "gram",
					tons: "ton",
					tonnes: "tonne",
					grains: "grain",
					drams: "dram",
					ounces: "ounce",
					poundmasses: "poundmass",
					hundredweights: "hundredweight",
					sticks: "stick",
					lb: "lbm",
					lbs: "lbm",
					seconds: "second",
					minutes: "minute",
					hours: "hour",
					days: "day",
					hertz: "hertz",
					radians: "rad",
					degree: "deg",
					degrees: "deg",
					gradian: "grad",
					gradians: "grad",
					cycles: "cycle",
					arcsecond: "arcsec",
					arcseconds: "arcsec",
					arcminute: "arcmin",
					arcminutes: "arcmin",
					BTUs: "BTU",
					watts: "watt",
					joules: "joule",
					amperes: "ampere",
					coulombs: "coulomb",
					volts: "volt",
					ohms: "ohm",
					farads: "farad",
					webers: "weber",
					teslas: "tesla",
					electronvolts: "electronvolt",
					moles: "mole"
				},
				D = {
					si: {
						NONE: {
							unit: q,
							prefix: B.NONE[""]
						},
						LENGTH: {
							unit: L.m,
							prefix: B.SHORT[""]
						},
						MASS: {
							unit: L.g,
							prefix: B.SHORT.k
						},
						TIME: {
							unit: L.s,
							prefix: B.SHORT[""]
						},
						CURRENT: {
							unit: L.A,
							prefix: B.SHORT[""]
						},
						TEMPERATURE: {
							unit: L.K,
							prefix: B.SHORT[""]
						},
						LUMINOUS_INTENSITY: {
							unit: L.cd,
							prefix: B.SHORT[""]
						},
						AMOUNT_OF_SUBSTANCE: {
							unit: L.mol,
							prefix: B.SHORT[""]
						},
						ANGLE: {
							unit: L.rad,
							prefix: B.SHORT[""]
						},
						BIT: {
							unit: L.bit,
							prefix: B.SHORT[""]
						},
						FORCE: {
							unit: L.N,
							prefix: B.SHORT[""]
						},
						ENERGY: {
							unit: L.J,
							prefix: B.SHORT[""]
						},
						POWER: {
							unit: L.W,
							prefix: B.SHORT[""]
						},
						PRESSURE: {
							unit: L.Pa,
							prefix: B.SHORT[""]
						},
						ELECTRIC_CHARGE: {
							unit: L.C,
							prefix: B.SHORT[""]
						},
						ELECTRIC_CAPACITANCE: {
							unit: L.F,
							prefix: B.SHORT[""]
						},
						ELECTRIC_POTENTIAL: {
							unit: L.V,
							prefix: B.SHORT[""]
						},
						ELECTRIC_RESISTANCE: {
							unit: L.ohm,
							prefix: B.SHORT[""]
						},
						ELECTRIC_INDUCTANCE: {
							unit: L.H,
							prefix: B.SHORT[""]
						},
						ELECTRIC_CONDUCTANCE: {
							unit: L.S,
							prefix: B.SHORT[""]
						},
						MAGNETIC_FLUX: {
							unit: L.Wb,
							prefix: B.SHORT[""]
						},
						MAGNETIC_FLUX_DENSITY: {
							unit: L.T,
							prefix: B.SHORT[""]
						},
						FREQUENCY: {
							unit: L.Hz,
							prefix: B.SHORT[""]
						}
					}
				};
			D.cgs = JSON.parse(JSON.stringify(D.si)), D.cgs.LENGTH = {
				unit: L.m,
				prefix: B.SHORT.c
			}, D.cgs.MASS = {
				unit: L.g,
				prefix: B.SHORT[""]
			}, D.cgs.FORCE = {
				unit: L.dyn,
				prefix: B.SHORT[""]
			}, D.cgs.ENERGY = {
				unit: L.erg,
				prefix: B.NONE[""]
			}, D.us = JSON.parse(JSON.stringify(D.si)), D.us.LENGTH = {
				unit: L.ft,
				prefix: B.NONE[""]
			}, D.us.MASS = {
				unit: L.lbm,
				prefix: B.NONE[""]
			}, D.us.TEMPERATURE = {
				unit: L.degF,
				prefix: B.NONE[""]
			}, D.us.FORCE = {
				unit: L.lbf,
				prefix: B.NONE[""]
			}, D.us.ENERGY = {
				unit: L.BTU,
				prefix: B.BTU[""]
			}, D.us.POWER = {
				unit: L.hp,
				prefix: B.NONE[""]
			}, D.us.PRESSURE = {
				unit: L.psi,
				prefix: B.NONE[""]
			}, D.auto = JSON.parse(JSON.stringify(D.si));
			var $ = D.auto;
			s.setUnitSystem = function(e) {
				if (!D.hasOwnProperty(e)) throw new Error("Unit system " + e + " does not exist. Choices are: " + Object.keys(D).join(", "));
				$ = D[e]
			}, s.getUnitSystem = function() {
				for (var e in D)
					if (D[e] === $) return e
			}, s.typeConverters = {
				BigNumber: function(t) {
					return new e.BigNumber(t + "")
				},
				Fraction: function(t) {
					return new e.Fraction(t)
				},
				Complex: function(e) {
					return e
				},
				number: function(e) {
					return e
				}
			}, s._getNumberConverter = function(e) {
				if (!s.typeConverters[e]) throw new TypeError('Unsupported type "' + e + '"');
				return s.typeConverters[e]
			};
			for (var k in L) {
				var j = L[k];
				j.dimensions = j.base.dimensions
			}
			for (var G in F)
				if (F.hasOwnProperty(G)) {
					var j = L[F[G]],
						H = Object.create(j);
					H.name = G, L[G] = H
				}
			return s.PREFIXES = B, s.BASE_UNITS = P, s.UNITS = L, s.UNIT_SYSTEMS = D, s
		}
		var i = r(23).endsWith,
			a = r(3).clone;
		t.name = "Unit", t.path = "type", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = r(29),
				s = n(r(50)),
				u = n(r(51)),
				c = n(r(75)),
				f = n(r(52)),
				l = n(r(59)),
				p = n(r(76)),
				m = n(r(54)),
				h = n(r(55)),
				g = n(r(56)),
				v = a("subtract", {
					"number, number": function(e, t) {
						return e - t
					},
					"Complex, Complex": function(t, r) {
						return new e.Complex(t.re - r.re, t.im - r.im)
					},
					"BigNumber, BigNumber": function(e, t) {
						return e.minus(t)
					},
					"Fraction, Fraction": function(e, t) {
						return e.sub(t)
					},
					"Unit, Unit": function(e, t) {
						if (null == e.value) throw new Error("Parameter x contains a unit with undefined value");
						if (null == t.value) throw new Error("Parameter y contains a unit with undefined value");
						if (!e.equalBase(t)) throw new Error("Units do not match");
						var r = e.clone();
						return r.value = v(r.value, t.value), r.fixPrefix = !1, r
					},
					"Matrix, Matrix": function(e, t) {
						var r = e.size(),
							n = t.size();
						if (r.length !== n.length) throw new i(r.length, n.length);
						var a;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										a = p(e, t, v);
										break;
									default:
										a = l(t, e, v, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										a = f(e, t, v, !1);
										break;
									default:
										a = h(e, t, v)
								}
						}
						return a
					},
					"Array, Array": function(e, t) {
						return v(s(e), s(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return v(s(e), t)
					},
					"Matrix, Array": function(e, t) {
						return v(e, s(t))
					},
					"Matrix, any": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = m(e, c(t), u);
								break;
							default:
								r = g(e, t, v)
						}
						return r
					},
					"any, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = m(t, e, v, !0);
								break;
							default:
								r = g(t, e, v, !0)
						}
						return r
					},
					"Array, any": function(e, t) {
						return g(s(e), t, v, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return g(s(t), e, v, !0).valueOf()
					}
				});
			return v.toTex = "\\left(${args[0]}" + o.operators.subtract + "${args[1]}\\right)", v
		}
		var i = r(41);
		t.name = "subtract", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = r(29),
				s = a("unaryMinus", {
					number: function(e) {
						return -e
					},
					Complex: function(t) {
						return new e.Complex(-t.re, -t.im)
					},
					BigNumber: function(e) {
						return e.neg()
					},
					Fraction: function(e) {
						return e.neg()
					},
					Unit: function(e) {
						var t = e.clone();
						return t.value = s(e.value), t
					},
					"Array | Matrix": function(e) {
						return i(e, s, !0)
					}
				});
			return s.toTex = o.operators.unaryMinus + "\\left(${args[0]}\\right)", s
		}
		var i = r(19);
		t.name = "unaryMinus", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(47)),
				s = e.SparseMatrix,
				u = function(e, t, r) {
					var n = e._values,
						u = e._index,
						c = e._ptr,
						f = e._size,
						l = e._datatype,
						p = t._values,
						m = t._index,
						h = t._ptr,
						g = t._size,
						v = t._datatype;
					if (f.length !== g.length) throw new i(f.length, g.length);
					if (f[0] !== g[0] || f[1] !== g[1]) throw new RangeError("Dimension mismatch. Matrix A (" + f + ") must match Matrix B (" + g + ")");
					var d, y = f[0],
						x = f[1],
						b = o,
						w = 0,
						N = r;
					"string" == typeof l && l === v && (d = l, b = a.find(o, [d, d]), w = a.convert(0, d), N = a.find(r, [d, d]));
					var E, M, A, _, O = n && p ? [] : void 0,
						T = [],
						C = [],
						S = new s({
							values: O,
							index: T,
							ptr: C,
							size: [y, x],
							datatype: d
						}),
						z = O ? [] : void 0,
						B = O ? [] : void 0,
						k = [],
						I = [];
					for (M = 0; x > M; M++) {
						C[M] = T.length;
						var R = M + 1;
						for (A = c[M], _ = c[M + 1]; _ > A; A++) E = u[A], T.push(E), k[E] = R, z && (z[E] = n[A]);
						for (A = h[M], _ = h[M + 1]; _ > A; A++) E = m[A], k[E] !== R && T.push(E), I[E] = R, B && (B[E] = p[A]);
						if (O)
							for (A = C[M]; A < T.length;) {
								E = T[A];
								var P = k[E],
									U = I[E];
								if (P === R || U === R) {
									var q = P === R ? z[E] : w,
										L = U === R ? B[E] : w,
										F = N(q, L);
									b(F, w) ? T.splice(A, 1) : (O.push(F), A++)
								}
							}
					}
					return C[x] = T.length, S
				};
			return u
		}
		var i = r(41);
		t.name = "algorithm05", t.factory = n
	}, function(e, t) {
		"use strict";

		function r(e, t, r, n) {
			var i = n("multiplyScalar", {
				"number, number": function(e, t) {
					return e * t
				},
				"Complex, Complex": function(t, r) {
					return new e.Complex(t.re * r.re - t.im * r.im, t.re * r.im + t.im * r.re)
				},
				"BigNumber, BigNumber": function(e, t) {
					return e.times(t)
				},
				"Fraction, Fraction": function(e, t) {
					return e.mul(t)
				},
				"number | Fraction | BigNumber | Complex, Unit": function(e, t) {
					var r = t.clone();
					return r.value = null === r.value ? r._normalize(e) : i(r.value, e), r
				},
				"Unit, number | Fraction | BigNumber | Complex": function(e, t) {
					var r = e.clone();
					return r.value = null === r.value ? r._normalize(t) : i(r.value, t), r
				},
				"Unit, Unit": function(e, t) {
					return e.multiply(t)
				}
			});
			return i
		}
		t.factory = r
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			function a(t, r) {
				var n = r.re * r.re + r.im * r.im;
				return 0 != n ? new e.Complex((t.re * r.re + t.im * r.im) / n, (t.im * r.re - t.re * r.im) / n) : new e.Complex(0 != t.re ? t.re / 0 : 0, 0 != t.im ? t.im / 0 : 0)
			}
			var o = n(r(77)),
				s = i("divide", {
					"number, number": function(e, t) {
						return e / t
					},
					"Complex, Complex": a,
					"BigNumber, BigNumber": function(e, t) {
						return e.div(t)
					},
					"Fraction, Fraction": function(e, t) {
						return e.div(t)
					},
					"Unit, number | Fraction | BigNumber": function(e, t) {
						var r = e.clone();
						return r.value = s(null === r.value ? r._normalize(1) : r.value, t), r
					},
					"number | Fraction | BigNumber, Unit": function(e, t) {
						var r = t.pow(-1);
						return r.value = o(null === r.value ? r._normalize(1) : r.value, e), r
					},
					"Unit, Unit": function(e, t) {
						return e.divide(t)
					}
				});
			return s
		}
		t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			function s(r, n) {
				return i(n) || r >= 0 || t.predictable ? Math.pow(r, n) : u(new e.Complex(r, 0), new e.Complex(n, 0))
			}

			function u(e, t) {
				return p(g(h(e), t))
			}

			function c(e, t) {
				if (!i(t) || 0 > t) throw new TypeError("For A^b, b must be a positive integer (value is " + t + ")");
				var r = a(e);
				if (2 != r.length) throw new Error("For A^b, A must be 2 dimensional (A has " + r.length + " dimensions)");
				if (r[0] != r[1]) throw new Error("For A^b, A must be square (size is " + r[0] + "x" + r[1] + ")");
				for (var n = m(r[0]).valueOf(), o = e; t >= 1;) 1 == (1 & t) && (n = g(o, n)), t >>= 1, o = g(o, o);
				return n
			}

			function f(e, t) {
				return v(c(e.valueOf(), t))
			}
			var l = r(29),
				p = n(r(80)),
				m = n(r(81)),
				h = n(r(82)),
				g = n(r(83)),
				v = n(r(50)),
				d = o("pow", {
					"number, number": s,
					"Complex, Complex": u,
					"BigNumber, BigNumber": function(r, n) {
						return n.isInteger() || r >= 0 || t.predictable ? r.pow(n) : u(new e.Complex(r.toNumber(), 0), new e.Complex(n.toNumber(), 0))
					},
					"Fraction, Fraction": function(e, r) {
						if (1 !== r.d) {
							if (t.predictable) throw new Error("Function pow does not support non-integer exponents for fractions.");
							return s(e.valueOf(), r.valueOf())
						}
						return e.pow(r)
					},
					"Array, number": c,
					"Array, BigNumber": function(e, t) {
						return c(e, t.toNumber())
					},
					"Matrix, number": f,
					"Matrix, BigNumber": function(e, t) {
						return f(e, t.toNumber())
					},
					"Unit, number": function(e, t) {
						return e.pow(t)
					}
				});
			return d.toTex = "\\left(${args[0]}\\right)" + l.operators.pow + "{${args[1]}}", d
		}
		var i = r(6).isInteger,
			a = r(39).size;
		t.name = "pow", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("exp", {
				number: Math.exp,
				Complex: function(t) {
					var r = Math.exp(t.re);
					return new e.Complex(r * Math.cos(t.im), r * Math.sin(t.im))
				},
				BigNumber: function(e) {
					return e.exp()
				},
				"Array | Matrix": function(e) {
					return i(e, a)
				}
			});
			return a.toTex = "\\exp\\left(${args[0]}\\right)", a
		}
		var i = r(19);
		t.name = "exp", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			function s(e, t) {
				switch (e.length) {
					case 0:
						return t ? c(t) : [];
					case 1:
						return u(e[0], e[0], t);
					case 2:
						return u(e[0], e[1], t);
					default:
						throw new Error("Vector containing two values expected")
				}
			}

			function u(t, r, n) {
				var o = t && t.isBigNumber === !0 ? e.BigNumber : r && r.isBigNumber === !0 ? e.BigNumber : null;
				if (t && t.isBigNumber === !0 && (t = t.toNumber()), r && r.isBigNumber === !0 && (r = r.toNumber()), !a(t) || 1 > t) throw new Error("Parameters in function eye must be positive integers");
				if (!a(r) || 1 > r) throw new Error("Parameters in function eye must be positive integers");
				var s = o ? new e.BigNumber(1) : 1,
					u = o ? new o(0) : 0,
					c = [t, r];
				if (n) {
					var f = e.Matrix.storage(n);
					return f.diagonal(c, s, 0, u)
				}
				for (var l = i.resize([], c, u), p = r > t ? t : r, m = 0; p > m; m++) l[m][m] = s;
				return l
			}
			var c = n(r(50)),
				f = o("eye", {
					"": function() {
						return "matrix" === t.matrix ? c([]) : []
					},
					string: function(e) {
						return c(e)
					},
					"number | BigNumber": function(e) {
						return u(e, e, "matrix" === t.matrix ? "default" : void 0)
					},
					"number | BigNumber, string": function(e, t) {
						return u(e, e, t)
					},
					"number | BigNumber, number | BigNumber": function(e, r) {
						return u(e, r, "matrix" === t.matrix ? "default" : void 0)
					},
					"number | BigNumber, number | BigNumber, string": function(e, t, r) {
						return u(e, t, r)
					},
					Array: function(e) {
						return s(e)
					},
					"Array, string": function(e, t) {
						return s(e, t)
					},
					Matrix: function(e) {
						return s(e.valueOf(), e.storage())
					},
					"Matrix, string": function(e, t) {
						return s(e.valueOf(), t)
					}
				});
			return f.toTex = "\\mathrm{${name}}\\left(${args}\\right)", f
		}
		var i = r(39),
			a = r(6).isInteger;
		t.name = "eye", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			function o(r) {
				return r >= 0 || t.predictable ? Math.log(r) : c(new e.Complex(r, 0))
			}

			function s(t) {
				return new e.Complex(Math.log(Math.sqrt(t.re * t.re + t.im * t.im)), Math.atan2(t.im, t.re))
			}
			var u = n(r(78)),
				c = a("log", {
					number: o,
					Complex: s,
					BigNumber: function(r) {
						return !r.isNegative() || t.predictable ? r.ln() : s(new e.Complex(r.toNumber(), 0))
					},
					"Array | Matrix": function(e) {
						return i(e, c)
					},
					"any, any": function(e, t) {
						return u(c(e), c(t))
					}
				});
			return c.toTex = {
				1: "\\ln\\left(${args[0]}\\right)",
				2: "\\log_{${args[1]}}\\left(${args[0]}\\right)"
			}, c
		}
		var i = r(19);
		t.name = "log", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = r(29),
				u = n(r(50)),
				c = n(r(51)),
				f = n(r(77)),
				l = n(r(47)),
				p = n(r(84)),
				m = n(r(56)),
				h = e.DenseMatrix,
				g = e.SparseMatrix,
				v = o("multiply", i({
					"Array, Array": function(e, t) {
						d(a.size(e), a.size(t));
						var r = v(u(e), u(t));
						return r && r.isMatrix === !0 ? r.valueOf() : r
					},
					"Matrix, Matrix": function(e, t) {
						var r = e.size(),
							n = t.size();
						return d(r, n), 1 === r.length ? 1 === n.length ? y(e, t, r[0]) : x(e, t) : 1 === n.length ? w(e, t) : N(e, t)
					},
					"Matrix, Array": function(e, t) {
						return v(e, u(t))
					},
					"Array, Matrix": function(e, t) {
						return v(u(e, t.storage()), t)
					},
					"Matrix, any": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = p(e, t, f, !1);
								break;
							case "dense":
								r = m(e, t, f, !1)
						}
						return r
					},
					"any, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = p(t, e, f, !0);
								break;
							case "dense":
								r = m(t, e, f, !0)
						}
						return r
					},
					"Array, any": function(e, t) {
						return m(u(e), t, f, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return m(u(t), e, f, !0).valueOf()
					}
				}, f.signatures)),
				d = function(e, t) {
					switch (e.length) {
						case 1:
							switch (t.length) {
								case 1:
									if (e[0] !== t[0]) throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");
									break;
								case 2:
									if (e[0] !== t[0]) throw new RangeError("Dimension mismatch in multiplication. Vector length (" + e[0] + ") must match Matrix rows (" + t[0] + ")");
									break;
								default:
									throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + t.length + " dimensions)")
							}
							break;
						case 2:
							switch (t.length) {
								case 1:
									if (e[1] !== t[0]) throw new RangeError("Dimension mismatch in multiplication. Matrix columns (" + e[1] + ") must match Vector length (" + t[0] + ")");
									break;
								case 2:
									if (e[1] !== t[0]) throw new RangeError("Dimension mismatch in multiplication. Matrix A columns (" + e[1] + ") must match Matrix B rows (" + t[0] + ")");
									break;
								default:
									throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + t.length + " dimensions)")
							}
							break;
						default:
							throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has " + e.length + " dimensions)")
					}
				},
				y = function(e, t, r) {
					if (0 === r) throw new Error("Cannot multiply two empty vectors");
					var n, i = e._data,
						a = e._datatype,
						s = t._data,
						u = t._datatype,
						l = c,
						p = f;
					a && u && a === u && "string" == typeof a && (n = a, l = o.find(c, [n, n]), p = o.find(f, [n, n]));
					for (var m = p(i[0], s[0]), h = 1; r > h; h++) m = l(m, p(i[h], s[h]));
					return m
				},
				x = function(e, t) {
					switch (t.storage()) {
						case "dense":
							return b(e, t)
					}
					throw new Error("Not implemented")
				},
				b = function(e, t) {
					var r, n = e._data,
						i = e._size,
						a = e._datatype,
						s = t._data,
						u = t._size,
						l = t._datatype,
						p = i[0],
						m = u[1],
						g = c,
						v = f;
					a && l && a === l && "string" == typeof a && (r = a, g = o.find(c, [r, r]), v = o.find(f, [r, r]));
					for (var d = [], y = 0; m > y; y++) {
						for (var x = v(n[0], s[0][y]), b = 1; p > b; b++) x = g(x, v(n[b], s[b][y]));
						d[y] = x
					}
					return 1 === m ? d[0] : new h({
						data: d,
						size: [m],
						datatype: r
					})
				},
				w = function(e, t) {
					switch (e.storage()) {
						case "dense":
							return E(e, t);
						case "sparse":
							return _(e, t)
					}
				},
				N = function(e, t) {
					switch (e.storage()) {
						case "dense":
							switch (t.storage()) {
								case "dense":
									return M(e, t);
								case "sparse":
									return A(e, t)
							}
							break;
						case "sparse":
							switch (t.storage()) {
								case "dense":
									return O(e, t);
								case "sparse":
									return T(e, t)
							}
					}
				},
				E = function(e, t) {
					var r, n = e._data,
						i = e._size,
						a = e._datatype,
						s = t._data,
						u = t._datatype,
						l = i[0],
						p = i[1],
						m = c,
						g = f;
					a && u && a === u && "string" == typeof a && (r = a, m = o.find(c, [r, r]), g = o.find(f, [r, r]));
					for (var v = [], d = 0; l > d; d++) {
						for (var y = n[d], x = g(y[0], s[0]), b = 1; p > b; b++) x = m(x, g(y[b], s[b]));
						v[d] = x
					}
					return 1 === l ? v[0] : new h({
						data: v,
						size: [l],
						datatype: r
					})
				},
				M = function(e, t) {
					var r, n = e._data,
						i = e._size,
						a = e._datatype,
						s = t._data,
						u = t._size,
						l = t._datatype,
						p = i[0],
						m = i[1],
						g = u[1],
						v = c,
						d = f;
					a && l && a === l && "string" == typeof a && (r = a, v = o.find(c, [r, r]), d = o.find(f, [r, r]));
					for (var y = [], x = 0; p > x; x++) {
						var b = n[x];
						y[x] = [];
						for (var w = 0; g > w; w++) {
							for (var N = d(b[0], s[0][w]), E = 1; m > E; E++) N = v(N, d(b[E], s[E][w]));
							y[x][w] = N
						}
					}
					return 1 === p && 1 === g ? y[0][0] : new h({
						data: y,
						size: [p, g],
						datatype: r
					})
				},
				A = function(e, t) {
					var r = e._data,
						n = e._size,
						i = e._datatype,
						a = t._values,
						s = t._index,
						u = t._ptr,
						p = t._size,
						m = t._datatype;
					if (!a) throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");
					var h, v = n[0],
						d = p[1],
						y = c,
						x = f,
						b = l,
						w = 0;
					i && m && i === m && "string" == typeof i && (h = i, y = o.find(c, [h, h]), x = o.find(f, [h, h]), b = o.find(l, [h, h]), w = o.convert(0, h));
					for (var N = [], E = [], M = [], A = new g({
							values: N,
							index: E,
							ptr: M,
							size: [v, d],
							datatype: h
						}), _ = 0; d > _; _++) {
						M[_] = E.length;
						var O = u[_],
							T = u[_ + 1];
						if (T > O)
							for (var C = 0, S = 0; v > S; S++) {
								for (var z, B = S + 1, k = O; T > k; k++) {
									var I = s[k];
									C !== B ? (z = x(r[S][I], a[k]), C = B) : z = y(z, x(r[S][I], a[k]))
								}
								C !== B || b(z, w) || (E.push(S), N.push(z))
							}
					}
					return M[d] = E.length, 1 === v && 1 === d ? 1 === N.length ? N[0] : 0 : A
				},
				_ = function(e, t) {
					var r = e._values,
						n = e._index,
						i = e._ptr,
						a = e._datatype;
					if (!r) throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
					var s, u = t._data,
						p = t._datatype,
						m = e._size[0],
						h = t._size[0],
						v = [],
						d = [],
						y = [],
						x = c,
						b = f,
						w = l,
						N = 0;
					a && p && a === p && "string" == typeof a && (s = a, x = o.find(c, [s, s]), b = o.find(f, [s, s]), w = o.find(l, [s, s]), N = o.convert(0, s));
					var E = [],
						M = [];
					y[0] = 0;
					for (var A = 0; h > A; A++) {
						var _ = u[A];
						if (!w(_, N))
							for (var O = i[A], T = i[A + 1], C = O; T > C; C++) {
								var S = n[C];
								M[S] ? E[S] = x(E[S], b(_, r[C])) : (M[S] = !0, d.push(S), E[S] = b(_, r[C]))
							}
					}
					for (var z = d.length, B = 0; z > B; B++) {
						var k = d[B];
						v[B] = E[k]
					}
					return y[1] = d.length, 1 === m ? 1 === v.length ? v[0] : 0 : new g({
						values: v,
						index: d,
						ptr: y,
						size: [m, 1],
						datatype: s
					})
				},
				O = function(e, t) {
					var r = e._values,
						n = e._index,
						i = e._ptr,
						a = e._datatype;
					if (!r) throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
					var s, u = t._data,
						p = t._datatype,
						m = e._size[0],
						h = t._size[0],
						v = t._size[1],
						d = c,
						y = f,
						x = l,
						b = 0;
					a && p && a === p && "string" == typeof a && (s = a, d = o.find(c, [s, s]), y = o.find(f, [s, s]), x = o.find(l, [s, s]), b = o.convert(0, s));
					for (var w = [], N = [], E = [], M = new g({
							values: w,
							index: N,
							ptr: E,
							size: [m, v],
							datatype: s
						}), A = [], _ = [], O = 0; v > O; O++) {
						E[O] = N.length;
						for (var T = O + 1, C = 0; h > C; C++) {
							var S = u[C][O];
							if (!x(S, b))
								for (var z = i[C], B = i[C + 1], k = z; B > k; k++) {
									var I = n[k];
									_[I] !== T ? (_[I] = T, N.push(I), A[I] = y(S, r[k])) : A[I] = d(A[I], y(S, r[k]))
								}
						}
						for (var R = E[O], P = N.length, U = R; P > U; U++) {
							var q = N[U];
							w[U] = A[q]
						}
					}
					return E[v] = N.length, 1 === m && 1 === v ? 1 === w.length ? w[0] : 0 : M
				},
				T = function(e, t) {
					var r, n = e._values,
						i = e._index,
						a = e._ptr,
						s = e._datatype,
						u = t._values,
						l = t._index,
						p = t._ptr,
						m = t._datatype,
						h = e._size[0],
						v = t._size[1],
						d = n && u,
						y = c,
						x = f;
					s && m && s === m && "string" == typeof s && (r = s, y = o.find(c, [r, r]), x = o.find(f, [r, r]));
					for (var b, w, N, E, M, A, _, O, T = d ? [] : void 0, C = [], S = [], z = new g({
							values: T,
							index: C,
							ptr: S,
							size: [h, v],
							datatype: r
						}), B = d ? [] : void 0, k = [], I = 0; v > I; I++) {
						S[I] = C.length;
						var R = I + 1;
						for (M = p[I], A = p[I + 1], E = M; A > E; E++)
							if (O = l[E], d)
								for (w = a[O], N = a[O + 1], b = w; N > b; b++) _ = i[b], k[_] !== R ? (k[_] = R, C.push(_), B[_] = x(u[E], n[b])) : B[_] = y(B[_], x(u[E], n[b]));
							else
								for (w = a[O], N = a[O + 1], b = w; N > b; b++) _ = i[b], k[_] !== R && (k[_] = R, C.push(_));
						if (d)
							for (var P = S[I], U = C.length, q = P; U > q; q++) {
								var L = C[q];
								T[q] = B[L]
							}
					}
					return S[v] = C.length, 1 === h && 1 === v && d ? 1 === T.length ? T[0] : 0 : z
				};
			return v.toTex = "\\left(${args[0]}" + s.operators.multiply + "${args[1]}\\right)", v
		}
		var i = r(3).extend,
			a = r(39);
		t.name = "multiply", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = n(r(47)),
				o = e.SparseMatrix,
				s = function(e, t, r, n) {
					var s = e._values,
						u = e._index,
						c = e._ptr,
						f = e._size,
						l = e._datatype;
					if (!s) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
					var p, m = f[0],
						h = f[1],
						g = a,
						v = 0,
						d = r;
					"string" == typeof l && (p = l, g = i.find(a, [p, p]), v = i.convert(0, p), t = i.convert(t, p), d = i.find(r, [p, p]));
					for (var y = [], x = [], b = [], w = new o({
							values: y,
							index: x,
							ptr: b,
							size: [m, h],
							datatype: p
						}), N = 0; h > N; N++) {
						b[N] = x.length;
						for (var E = c[N], M = c[N + 1], A = E; M > A; A++) {
							var _ = u[A],
								O = n ? d(t, s[A]) : d(s[A], t);
							g(O, v) || (x.push(_), y.push(O))
						}
					}
					return b[h] = x.length, w
				};
			return s
		}
		t.name = "algorithm11", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("abs", {
				number: Math.abs,
				Complex: function(e) {
					var t = Math.abs(e.re),
						r = Math.abs(e.im);
					if (1e3 > t && 1e3 > r) return Math.sqrt(t * t + r * r);
					if (t >= r) {
						var n = r / t;
						return t * Math.sqrt(1 + n * n)
					}
					var i = t / r;
					return r * Math.sqrt(1 + i * i)
				},
				BigNumber: function(e) {
					return e.abs()
				},
				Fraction: function(e) {
					return e.abs()
				},
				"Array | Matrix": function(e) {
					return i(e, a, !0)
				},
				Unit: function(e) {
					return e.abs()
				}
			});
			return a.toTex = "\\left|${args[0]}\\right|", a
		}
		var i = r(19);
		t.name = "abs", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = n(r(50)),
				o = n(r(47)),
				s = n(r(59)),
				u = n(r(60)),
				c = n(r(61)),
				f = n(r(55)),
				l = n(r(56)),
				p = r(29),
				m = i("equal", {
					"any, any": function(e, t) {
						return null === e ? null === t : null === t ? null === e : void 0 === e ? void 0 === t : void 0 === t ? void 0 === e : o(e, t)
					},
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = u(e, t, o);
										break;
									default:
										r = s(t, e, o, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = s(e, t, o, !1);
										break;
									default:
										r = f(e, t, o)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return m(a(e), a(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return m(a(e), t)
					},
					"Matrix, Array": function(e, t) {
						return m(e, a(t))
					},
					"Matrix, any": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = c(e, t, o, !1);
								break;
							default:
								r = l(e, t, o, !1)
						}
						return r
					},
					"any, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = c(t, e, o, !0);
								break;
							default:
								r = l(t, e, o, !0)
						}
						return r
					},
					"Array, any": function(e, t) {
						return l(a(e), t, o, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return l(a(t), e, o, !0).valueOf()
					}
				});
			return m.toTex = "\\left(${args[0]}" + p.operators.equal + "${args[1]}\\right)", m
		}
		t.name = "equal", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("isNumeric", {
				"number | BigNumber | Fraction | boolean": function() {
					return !0
				},
				"Complex | Unit | string": function() {
					return !1
				},
				"Array | Matrix": function(e) {
					return i(e, a)
				}
			});
			return a
		}
		var i = r(19);
		r(6);
		t.name = "isNumeric", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("format", {
				any: i.format,
				"any, Object | function | number": i.format
			});
			return a.toTex = "\\mathrm{${name}}\\left(${args}\\right)", a
		}
		var i = r(23);
		t.name = "format", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("_typeof", {
				any: function(e) {
					var t = i.type(e);
					if ("Object" === t) {
						if (e.isBigNumber === !0) return "BigNumber";
						if (e.isComplex === !0) return "Complex";
						if (e.isFraction === !0) return "Fraction";
						if (e.isMatrix === !0) return "Matrix";
						if (e.isUnit === !0) return "Unit";
						if (e.isIndex === !0) return "Index";
						if (e.isRange === !0) return "Range";
						if (e.isChain === !0) return "Chain";
						if (e.isHelp === !0) return "Help"
					}
					return t
				}
			});
			return a.toTex = "\\mathrm{${name}}\\left(${args}\\right)", a
		}
		var i = r(40);
		t.name = "typeof", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("unit", {
				Unit: function(e) {
					return e.clone()
				},
				string: function(t) {
					return e.Unit.isValuelessUnit(t) ? new e.Unit(null, t) : e.Unit.parse(t)
				},
				"number | BigNumber | Fraction | Complex, string": function(t, r) {
					return new e.Unit(t, r)
				},
				"Array | Matrix": function(e) {
					return i(e, a)
				}
			});
			return a.toTex = {
				1: "\\left(${args[0]}\\right)",
				2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)"
			}, a
		}
		var i = r(19);
		t.name = "unit", t.factory = n
	}, function(e, t, r) {
		function n(e, t, r, n, a) {
			function o(t) {
				var r = e.Unit.parse(t);
				return r.fixPrefix = !0, r
			}
			i(a, "speedOfLight", function() {
				return o("299792458 m s^-1")
			}), i(a, "gravitationConstant", function() {
				return o("6.6738480e-11 m^3 kg^-1 s^-2")
			}), i(a, "planckConstant", function() {
				return o("6.626069311e-34 J s")
			}), i(a, "reducedPlanckConstant", function() {
				return o("1.05457172647e-34 J s")
			}), i(a, "magneticConstant", function() {
				return o("1.2566370614e-6 N A^-2")
			}), i(a, "electricConstant", function() {
				return o("8.854187817e-12 F m^-1")
			}), i(a, "vacuumImpedance", function() {
				return o("376.730313461 ohm")
			}), i(a, "coulomb", function() {
				return o("8.9875517873681764e9 N m^2 C^-2")
			}), i(a, "elementaryCharge", function() {
				return o("1.60217656535e-19 C")
			}), i(a, "bohrMagneton", function() {
				return o("9.2740096820e-24 J T^-1")
			}), i(a, "conductanceQuantum", function() {
				return o("7.748091734625e-5 S")
			}), i(a, "inverseConductanceQuantum", function() {
				return o("12906.403721742 ohm")
			}), i(a, "magneticFluxQuantum", function() {
				return o("2.06783375846e-15 Wb")
			}), i(a, "nuclearMagneton", function() {
				return o("5.0507835311e-27 J T^-1")
			}), i(a, "klitzing", function() {
				return o("25812.807443484 ohm")
			}), i(a, "bohrRadius", function() {
				return o("5.291772109217e-11 m")
			}), i(a, "classicalElectronRadius", function() {
				return o("2.817940326727e-15 m")
			}), i(a, "electronMass", function() {
				return o("9.1093829140e-31 kg")
			}), i(a, "fermiCoupling", function() {
				return o("1.1663645e-5 GeV^-2")
			}), i(a, "fineStructure", function() {
				return .007297352569824
			}), i(a, "hartreeEnergy", function() {
				return o("4.3597443419e-18 J")
			}), i(a, "protonMass", function() {
				return o("1.67262177774e-27 kg")
			}), i(a, "deuteronMass", function() {
				return o("3.3435830926e-27 kg")
			}), i(a, "neutronMass", function() {
				return o("1.6749271613e-27 kg")
			}), i(a, "quantumOfCirculation", function() {
				return o("3.636947552024e-4 m^2 s^-1")
			}), i(a, "rydberg", function() {
				return o("10973731.56853955 m^-1")
			}), i(a, "thomsonCrossSection", function() {
				return o("6.65245873413e-29 m^2")
			}), i(a, "weakMixingAngle", function() {
				return .222321
			}), i(a, "efimovFactor", function() {
				return 22.7
			}), i(a, "atomicMass", function() {
				return o("1.66053892173e-27 kg")
			}), i(a, "avogadro", function() {
				return o("6.0221412927e23 mol^-1")
			}), i(a, "boltzmann", function() {
				return o("1.380648813e-23 J K^-1")
			}), i(a, "faraday", function() {
				return o("96485.336521 C mol^-1")
			}), i(a, "firstRadiation", function() {
				return o("3.7417715317e-16 W m^2")
			}), i(a, "loschmidt", function() {
				return o("2.686780524e25 m^-3")
			}), i(a, "gasConstant", function() {
				return o("8.314462175 J K^-1 mol^-1")
			}), i(a, "molarPlanckConstant", function() {
				return o("3.990312717628e-10 J s mol^-1")
			}), i(a, "molarVolume", function() {
				return o("2.241396820e-10 m^3 mol^-1")
			}), i(a, "sackurTetrode", function() {
				return -1.164870823
			}), i(a, "secondRadiation", function() {
				return o("1.438777013e-2 m K")
			}), i(a, "stefanBoltzmann", function() {
				return o("5.67037321e-8 W m^-2 K^-4")
			}), i(a, "wienDisplacement", function() {
				return o("2.897772126e-3 m K")
			}), i(a, "molarMass", function() {
				return o("1e-3 kg mol^-1")
			}), i(a, "molarMassC12", function() {
				return o("1.2e-2 kg mol^-1")
			}), i(a, "gravity", function() {
				return o("9.80665 m s^-2")
			}), i(a, "planckLength", function() {
				return o("1.61619997e-35 m")
			}), i(a, "planckMass", function() {
				return o("2.1765113e-8 kg")
			}), i(a, "planckTime", function() {
				return o("5.3910632e-44 s")
			}), i(a, "planckCharge", function() {
				return o("1.87554595641e-18 C")
			}), i(a, "planckTemperature", function() {
				return o("1.41683385e+32 K")
			})
		}
		var i = r(3).lazy;
		t.factory = n, t.lazy = !1, t.math = !0
	}, function(e, t, r) {
		"use strict";

		function n(e, t, o, s, u) {
			u.on("config", function(r, i) {
				r.number !== i.number && n(e, t, o, s, u)
			}), u["true"] = !0, u["false"] = !1, u["null"] = null, u.uninitialized = r(39).UNINITIALIZED, "bignumber" === t.number ? (u.Infinity = new e.BigNumber(1 / 0), u.NaN = new e.BigNumber(NaN), i.lazy(u, "pi", function() {
				return a.pi(e.BigNumber)
			}), i.lazy(u, "tau", function() {
				return a.tau(e.BigNumber)
			}), i.lazy(u, "e", function() {
				return a.e(e.BigNumber)
			}), i.lazy(u, "phi", function() {
				return a.phi(e.BigNumber)
			}), i.lazy(u, "E", function() {
				return u.e
			}), i.lazy(u, "LN2", function() {
				return new e.BigNumber(2).ln()
			}), i.lazy(u, "LN10", function() {
				return new e.BigNumber(10).ln()
			}), i.lazy(u, "LOG2E", function() {
				return new e.BigNumber(1).div(new e.BigNumber(2).ln())
			}), i.lazy(u, "LOG10E", function() {
				return new e.BigNumber(1).div(new e.BigNumber(10).ln())
			}), i.lazy(u, "PI", function() {
				return u.pi
			}), i.lazy(u, "SQRT1_2", function() {
				return new e.BigNumber("0.5").sqrt()
			}), i.lazy(u, "SQRT2", function() {
				return new e.BigNumber(2).sqrt()
			})) : (u.Infinity = 1 / 0, u.NaN = NaN, u.pi = Math.PI, u.tau = 2 * Math.PI, u.e = Math.E, u.phi = 1.618033988749895, u.E = u.e, u.LN2 = Math.LN2, u.LN10 = Math.LN10, u.LOG2E = Math.LOG2E, u.LOG10E = Math.LOG10E, u.PI = u.pi, u.SQRT1_2 = Math.SQRT1_2, u.SQRT2 = Math.SQRT2), u.i = new e.Complex(0, 1), u.version = r(95)
		}
		var i = r(3),
			a = r(93);
		t.factory = n, t.lazy = !1, t.math = !0
	}, function(e, t, r) {
		function n(e) {
			return e[0].precision
		}
		var i = r(44).memoize,
			a = r(94);
		t.e = i(function(e) {
			return new e(1).exp()
		}, n), t.phi = i(function(e) {
			return new e(1).plus(new e(5).sqrt()).div(2)
		}, n), t.pi = i(function(e) {
			var t = e.constructor({
					precision: e.precision + 4
				}),
				r = new t(4).times(a(new t(1).div(5))).minus(a(new t(1).div(239)));
			return new e(4).times(r)
		}, n), t.tau = i(function(e) {
			var r = t.pi(e.constructor({
				precision: e.precision + 2
			}));
			return new e(2).times(r)
		}, n)
	}, function(e, t) {
		e.exports = function(e) {
			for (var t = e, r = NaN, n = e.times(e), i = e, a = !0, o = 3; !t.equals(r); o += 2) i = i.times(n), r = t, a = !a, t = a ? t.plus(i.div(o)) : t.minus(i.div(o));
			return t
		}
	}, function(e, t) {
		e.exports = "2.6.0"
	}, function(e, t, r) {
		e.exports = [r(97), r(267), r(291), r(292), r(319), r(269), r(290)]
	}, function(e, t, r) {
		function n(e, t, n, i) {
			var a = {};
			return a.bignumber = r(98), a["boolean"] = r(99), a.complex = r(100), a.fraction = r(101), a.index = r(102), a.matrix = r(103), a.number = r(104), a.sparse = r(105), a.string = r(106), a.unit = r(107), a.e = r(108), a.E = r(108), a["false"] = r(109), a.i = r(110), a.Infinity = r(111), a.LN2 = r(112), a.LN10 = r(113), a.LOG2E = r(114), a.LOG10E = r(115), a.NaN = r(116), a["null"] = r(117), a.pi = r(118), a.PI = r(118), a.phi = r(119), a.SQRT1_2 = r(120), a.SQRT2 = r(121), a.tau = r(122), a["true"] = r(123), a.version = r(124), a.speedOfLight = {
				description: "Speed of light in vacuum",
				examples: ["speedOfLight"]
			}, a.gravitationConstant = {
				description: "Newtonian constant of gravitation",
				examples: ["gravitationConstant"]
			}, a.planckConstant = {
				description: "Planck constant",
				examples: ["planckConstant"]
			}, a.reducedPlanckConstant = {
				description: "Reduced Planck constant",
				examples: ["reducedPlanckConstant"]
			}, a.magneticConstant = {
				description: "Magnetic constant (vacuum permeability)",
				examples: ["magneticConstant"]
			}, a.electricConstant = {
				description: "Electric constant (vacuum permeability)",
				examples: ["electricConstant"]
			}, a.vacuumImpedance = {
				description: "Characteristic impedance of vacuum",
				examples: ["vacuumImpedance"]
			}, a.coulomb = {
				description: "Coulomb's constant",
				examples: ["coulomb"]
			}, a.elementaryCharge = {
				description: "Elementary charge",
				examples: ["elementaryCharge"]
			}, a.bohrMagneton = {
				description: "Borh magneton",
				examples: ["bohrMagneton"]
			}, a.conductanceQuantum = {
				description: "Conductance quantum",
				examples: ["conductanceQuantum"]
			}, a.inverseConductanceQuantum = {
				description: "Inverse conductance quantum",
				examples: ["inverseConductanceQuantum"]
			}, a.magneticFluxQuantum = {
				description: "Magnetic flux quantum",
				examples: ["magneticFluxQuantum"]
			}, a.nuclearMagneton = {
				description: "Nuclear magneton",
				examples: ["nuclearMagneton"]
			}, a.klitzing = {
				description: "Von Klitzing constant",
				examples: ["klitzing"]
			}, a.bohrRadius = {
				description: "Borh radius",
				examples: ["bohrRadius"]
			}, a.classicalElectronRadius = {
				description: "Classical electron radius",
				examples: ["classicalElectronRadius"]
			}, a.electronMass = {
				description: "Electron mass",
				examples: ["electronMass"]
			}, a.fermiCoupling = {
				description: "Fermi coupling constant",
				examples: ["fermiCoupling"]
			}, a.fineStructure = {
				description: "Fine-structure constant",
				examples: ["fineStructure"]
			}, a.hartreeEnergy = {
				description: "Hartree energy",
				examples: ["hartreeEnergy"]
			}, a.protonMass = {
				description: "Proton mass",
				examples: ["protonMass"]
			}, a.deuteronMass = {
				description: "Deuteron Mass",
				examples: ["deuteronMass"]
			}, a.neutronMass = {
				description: "Neutron mass",
				examples: ["neutronMass"]
			}, a.quantumOfCirculation = {
				description: "Quantum of circulation",
				examples: ["quantumOfCirculation"]
			}, a.rydberg = {
				description: "Rydberg constant",
				examples: ["rydberg"]
			}, a.thomsonCrossSection = {
				description: "Thomson cross section",
				examples: ["thomsonCrossSection"]
			}, a.weakMixingAngle = {
				description: "Weak mixing angle",
				examples: ["weakMixingAngle"]
			}, a.efimovFactor = {
				description: "Efimov factor",
				examples: ["efimovFactor"]
			}, a.atomicMass = {
				description: "Atomic mass constant",
				examples: ["atomicMass"]
			}, a.avogadro = {
				description: "Avogadro's number",
				examples: ["avogadro"]
			}, a.boltzmann = {
				description: "Boltzmann constant",
				examples: ["boltzmann"]
			}, a.faraday = {
				description: "Faraday constant",
				examples: ["faraday"]
			}, a.firstRadiation = {
				description: "First radiation constant",
				examples: ["firstRadiation"]
			}, a.loschmidt = {
				description: "Loschmidt constant at T=273.15 K and p=101.325 kPa",
				examples: ["loschmidt"]
			}, a.gasConstant = {
				description: "Gas constant",
				examples: ["gasConstant"]
			}, a.molarPlanckConstant = {
				description: "Molar Planck constant",
				examples: ["molarPlanckConstant"]
			}, a.molarVolume = {
				description: "Molar volume of an ideal gas at T=273.15 K and p=101.325 kPa",
				examples: ["molarVolume"]
			}, a.sackurTetrode = {
				description: "Sackur-Tetrode constant at T=1 K and p=101.325 kPa",
				examples: ["sackurTetrode"]
			}, a.secondRadiation = {
				description: "Second radiation constant",
				examples: ["secondRadiation"]
			}, a.stefanBoltzmann = {
				description: "Stefan-Boltzmann constant",
				examples: ["stefanBoltzmann"]
			}, a.wienDisplacement = {
				description: "Wien displacement law constant",
				examples: ["wienDisplacement"]
			}, a.molarMass = {
				description: "Molar mass constant",
				examples: ["molarMass"]
			}, a.molarMassC12 = {
				description: "Molar mass constant of carbon-12",
				examples: ["molarMassC12"]
			}, a.gravity = {
				description: "Standard acceleration of gravity (standard acceleration of free-fall on Earth)",
				examples: ["gravity"]
			}, a.planckLength = {
				description: "Planck length",
				examples: ["planckLength"]
			}, a.planckMass = {
				description: "Planck mass",
				examples: ["planckMass"]
			}, a.planckTime = {
				description: "Planck time",
				examples: ["planckTime"]
			}, a.planckCharge = {
				description: "Planck charge",
				examples: ["planckCharge"]
			}, a.planckTemperature = {
				description: "Planck temperature",
				examples: ["planckTemperature"]
			}, a.lsolve = r(125), a.lup = r(126), a.lusolve = r(127), a.slu = r(128), a.usolve = r(129), a.abs = r(130), a.add = r(131), a.cbrt = r(132), a.ceil = r(133), a.cube = r(134), a.divide = r(135), a.dotDivide = r(136), a.dotMultiply = r(137), a.dotPow = r(138), a.exp = r(139), a.fix = r(140), a.floor = r(141), a.gcd = r(142), a.hypot = r(143), a.lcm = r(144), a.log = r(145), a.log10 = r(146), a.mod = r(147), a.multiply = r(148), a.norm = r(149), a.nthRoot = r(150), a.pow = r(151), a.round = r(152), a.sign = r(153), a.sqrt = r(154), a.square = r(155), a.subtract = r(156), a.unaryMinus = r(157), a.unaryPlus = r(158), a.xgcd = r(159), a.bitAnd = r(160), a.bitNot = r(161), a.bitOr = r(162), a.bitXor = r(163), a.leftShift = r(164), a.rightArithShift = r(165), a.rightLogShift = r(166), a.bellNumbers = r(167), a.catalan = r(168), a.composition = r(169), a.stirlingS2 = r(170), a.arg = r(171), a.conj = r(172), a.re = r(173), a.im = r(174), a.eval = r(175), a.help = r(176), a.distance = r(177), a.intersect = r(178), a.and = r(179), a.not = r(180), a.or = r(181), a.xor = r(182), a.concat = r(183), a.cross = r(184), a.det = r(185), a.diag = r(186), a.dot = r(187), a.eye = r(188), a.flatten = r(189), a.inv = r(190), a.ones = r(191), a.range = r(192), a.resize = r(193), a.size = r(194), a.squeeze = r(195), a.subset = r(196), a.trace = r(197), a.transpose = r(198), a.zeros = r(199), a.combinations = r(200), a.factorial = r(201), a.gamma = r(202), a.kldivergence = r(203), a.multinomial = r(204), a.permutations = r(205), a.pickRandom = r(206), a.random = r(207), a.randomInt = r(208), a.compare = r(209), a.deepEqual = r(210), a.equal = r(211), a.larger = r(212), a.largerEq = r(213), a.smaller = r(214), a.smallerEq = r(215), a.unequal = r(216), a.max = r(217), a.mean = r(218), a.median = r(219), a.min = r(220), a.mode = r(221), a.prod = r(222), a.quantileSeq = r(223), a.std = r(224), a.sum = r(225), a["var"] = r(226), a.acos = r(227), a.acosh = r(228), a.acot = r(229), a.acoth = r(230), a.acsc = r(231), a.acsch = r(232), a.asec = r(233), a.asech = r(234), a.asin = r(235), a.asinh = r(236), a.atan = r(237), a.atanh = r(238), a.atan2 = r(239), a.cos = r(240), a.cosh = r(241), a.cot = r(242), a.coth = r(243), a.csc = r(244), a.csch = r(245), a.sec = r(246), a.sech = r(247), a.sin = r(248), a.sinh = r(249), a.tan = r(250), a.tanh = r(251), a.to = r(252), a.clone = r(253), a.map = r(254), a.partitionSelect = r(255), a.filter = r(256), a.forEach = r(257), a.format = r(258), a.isInteger = r(259), a.isNegative = r(260), a.isNumeric = r(261), a.isPositive = r(262), a.isZero = r(263), a["import"] = r(264), a.sort = r(265), a["typeof"] = r(266), a
		}
		t.name = "docs", t.path = "expression", t.factory = n
	}, function(e, t) {
		e.exports = {
			name: "bignumber",
			category: "Type",
			syntax: ["bignumber(x)"],
			description: "Create a big number from a number or string.",
			examples: ["0.1 + 0.2", "bignumber(0.1) + bignumber(0.2)", 'bignumber("7.2")', 'bignumber("7.2e500")', "bignumber([0.1, 0.2, 0.3])"],
			seealso: ["boolean", "complex", "fraction", "index", "matrix", "string", "unit"]
		}
	}, function(e, t) {
		e.exports = {
			name: "boolean",
			category: "Type",
			syntax: ["x", "boolean(x)"],
			description: "Convert a string or number into a boolean.",
			examples: ["boolean(0)", "boolean(1)", "boolean(3)", 'boolean("true")', 'boolean("false")', "boolean([1, 0, 1, 1])"],
			seealso: ["bignumber", "complex", "index", "matrix", "number", "string", "unit"]
		}
	}, function(e, t) {
		e.exports = {
			name: "complex",
			category: "Type",
			syntax: ["complex()", "complex(re, im)", "complex(string)"],
			description: "Create a complex number.",
			examples: ["complex()", "complex(2, 3)", 'complex("7 - 2i")'],
			seealso: ["bignumber", "boolean", "index", "matrix", "number", "string", "unit"]
		}
	}, function(e, t) {
		e.exports = {
			name: "fraction",
			category: "Type",
			syntax: ["fraction(num)", "fraction(num,den)"],
			description: "Create a fraction from a number or from a numerator and denominator.",
			examples: ["fraction(0.125)", "fraction(1, 3) + fraction(2, 5)"],
			seealso: ["bignumber", "boolean", "complex", "index", "matrix", "string", "unit"]
		}
	}, function(e, t) {
		e.exports = {
			name: "index",
			category: "Type",
			syntax: ["[start]", "[start:end]", "[start:step:end]", "[start1, start 2, ...]", "[start1:end1, start2:end2, ...]", "[start1:step1:end1, start2:step2:end2, ...]"],
			description: "Create an index to get or replace a subset of a matrix",
			examples: ["[]", "[1, 2, 3]", "A = [1, 2, 3; 4, 5, 6]", "A[1, :]", "A[1, 2] = 50", "A[0:2, 0:2] = ones(2, 2)"],
			seealso: ["bignumber", "boolean", "complex", "matrix,", "number", "range", "string", "unit"]
		}
	}, function(e, t) {
		e.exports = {
			name: "matrix",
			category: "Type",
			syntax: ["[]", "[a1, b1, ...; a2, b2, ...]", "matrix()", 'matrix("dense")', "matrix([...])"],
			description: "Create a matrix.",
			examples: ["[]", "[1, 2, 3]", "[1, 2, 3; 4, 5, 6]", "matrix()", "matrix([3, 4])", 'matrix([3, 4; 5, 6], "sparse")', 'matrix([3, 4; 5, 6], "sparse", "number")'],
			seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit", "sparse"]
		}
	}, function(e, t) {
		e.exports = {
			name: "number",
			category: "Type",
			syntax: ["x", "number(x)"],
			description: "Create a number or convert a string or boolean into a number.",
			examples: ["2", "2e3", "4.05", "number(2)", 'number("7.2")', "number(true)", "number([true, false, true, true])", 'number("52cm", "m")'],
			seealso: ["bignumber", "boolean", "complex", "fraction", "index", "matrix", "string", "unit"]
		}
	}, function(e, t) {
		e.exports = {
			name: "sparse",
			category: "Type",
			syntax: ["sparse()", "sparse([a1, b1, ...; a1, b2, ...])", 'sparse([a1, b1, ...; a1, b2, ...], "number")'],
			description: "Create a sparse matrix.",
			examples: ["sparse()", "sparse([3, 4; 5, 6])", 'sparse([3, 0; 5, 0], "number")'],
			seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit", "matrix"]
		}
	}, function(e, t) {
		e.exports = {
			name: "string",
			category: "Type",
			syntax: ['"text"', "string(x)"],
			description: "Create a string or convert a value to a string",
			examples: ['"Hello World!"', "string(4.2)", "string(3 + 2i)"],
			seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "unit"]
		}
	}, function(e, t) {
		e.exports = {
			name: "unit",
			category: "Type",
			syntax: ["value unit", "unit(value, unit)", "unit(string)"],
			description: "Create a unit.",
			examples: ["5.5 mm", "3 inch", 'unit(7.1, "kilogram")', 'unit("23 deg")'],
			seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "string"]
		}
	}, function(e, t) {
		e.exports = {
			name: "e",
			category: "Constants",
			syntax: ["e"],
			description: "Euler's number, the base of the natural logarithm. Approximately equal to 2.71828",
			examples: ["e", "e ^ 2", "exp(2)", "log(e)"],
			seealso: ["exp"]
		}
	}, function(e, t) {
		e.exports = {
			name: "false",
			category: "Constants",
			syntax: ["false"],
			description: "Boolean value false",
			examples: ["false"],
			seealso: ["true"]
		}
	}, function(e, t) {
		e.exports = {
			name: "i",
			category: "Constants",
			syntax: ["i"],
			description: "Imaginary unit, defined as i*i=-1. A complex number is described as a + b*i, where a is the real part, and b is the imaginary part.",
			examples: ["i", "i * i", "sqrt(-1)"],
			seealso: []
		}
	}, function(e, t) {
		e.exports = {
			name: "Infinity",
			category: "Constants",
			syntax: ["Infinity"],
			description: "Infinity, a number which is larger than the maximum number that can be handled by a floating point number.",
			examples: ["Infinity", "1 / 0"],
			seealso: []
		}
	}, function(e, t) {
		e.exports = {
			name: "LN2",
			category: "Constants",
			syntax: ["LN2"],
			description: "Returns the natural logarithm of 2, approximately equal to 0.693",
			examples: ["LN2", "log(2)"],
			seealso: []
		}
	}, function(e, t) {
		e.exports = {
			name: "LN10",
			category: "Constants",
			syntax: ["LN10"],
			description: "Returns the natural logarithm of 10, approximately equal to 2.302",
			examples: ["LN10", "log(10)"],
			seealso: []
		}
	}, function(e, t) {
		e.exports = {
			name: "LOG2E",
			category: "Constants",
			syntax: ["LOG2E"],
			description: "Returns the base-2 logarithm of E, approximately equal to 1.442",
			examples: ["LOG2E", "log(e, 2)"],
			seealso: []
		}
	}, function(e, t) {
		e.exports = {
			name: "LOG10E",
			category: "Constants",
			syntax: ["LOG10E"],
			description: "Returns the base-10 logarithm of E, approximately equal to 0.434",
			examples: ["LOG10E", "log(e, 10)"],
			seealso: []
		}
	}, function(e, t) {
		e.exports = {
			name: "NaN",
			category: "Constants",
			syntax: ["NaN"],
			description: "Not a number",
			examples: ["NaN", "0 / 0"],
			seealso: []
		}
	}, function(e, t) {
		e.exports = {
			name: "null",
			category: "Constants",
			syntax: ["null"],
			description: "Value null",
			examples: ["null"],
			seealso: ["true", "false"]
		}
	}, function(e, t) {
		e.exports = {
			name: "pi",
			category: "Constants",
			syntax: ["pi"],
			description: "The number pi is a mathematical constant that is the ratio of a circle's circumference to its diameter, and is approximately equal to 3.14159",
			examples: ["pi", "sin(pi/2)"],
			seealso: ["tau"]
		}
	}, function(e, t) {
		e.exports = {
			name: "phi",
			category: "Constants",
			syntax: ["phi"],
			description: "Phi is the golden ratio. Two quantities are in the golden ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities. Phi is defined as `(1 + sqrt(5)) / 2` and is approximately 1.618034...",
			examples: ["tau"],
			seealso: []
		}
	}, function(e, t) {
		e.exports = {
			name: "SQRT1_2",
			category: "Constants",
			syntax: ["SQRT1_2"],
			description: "Returns the square root of 1/2, approximately equal to 0.707",
			examples: ["SQRT1_2", "sqrt(1/2)"],
			seealso: []
		}
	}, function(e, t) {
		e.exports = {
			name: "SQRT2",
			category: "Constants",
			syntax: ["SQRT2"],
			description: "Returns the square root of 2, approximately equal to 1.414",
			examples: ["SQRT2", "sqrt(2)"],
			seealso: []
		}
	}, function(e, t) {
		e.exports = {
			name: "tau",
			category: "Constants",
			syntax: ["tau"],
			description: "Tau is the ratio constant of a circle's circumference to radius, equal to 2 * pi, approximately 6.2832.",
			examples: ["tau", "2 * pi"],
			seealso: ["pi"]
		}
	}, function(e, t) {
		e.exports = {
			name: "true",
			category: "Constants",
			syntax: ["true"],
			description: "Boolean value true",
			examples: ["true"],
			seealso: ["false"]
		}
	}, function(e, t) {
		e.exports = {
			name: "version",
			category: "Constants",
			syntax: ["version"],
			description: "A string with the version number of math.js",
			examples: ["version"],
			seealso: []
		}
	}, function(e, t) {
		e.exports = {
			name: "lsolve",
			category: "Algebra",
			syntax: ["x=lsolve(L, b)"],
			description: "Solves the linear system L * x = b where L is an [n x n] lower triangular matrix and b is a [n] column vector.",
			examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lsolve(a, b)"],
			seealso: ["lup", "lusolve", "usolve", "matrix", "sparse"]
		}
	}, function(e, t) {
		e.exports = {
			name: "lup",
			category: "Algebra",
			syntax: ["lup(m)"],
			description: "Calculate the Matrix LU decomposition with partial pivoting. Matrix A is decomposed in three matrices (L, U, P) where P * A = L * U",
			examples: ["lup([[2, 1], [1, 4]])", "lup(matrix([[2, 1], [1, 4]]))", "lup(sparse([[2, 1], [1, 4]]))"],
			seealso: ["lusolve", "lsolve", "usolve", "matrix", "sparse", "slu"]
		}
	}, function(e, t) {
		e.exports = {
			name: "lusolve",
			category: "Algebra",
			syntax: ["x=lusolve(A, b)", "x=lusolve(lu, b)"],
			description: "Solves the linear system A * x = b where A is an [n x n] matrix and b is a [n] column vector.",
			examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lusolve(a, b)"],
			seealso: ["lup", "slu", "lsolve", "usolve", "matrix", "sparse"]
		}
	}, function(e, t) {
		e.exports = {
			name: "slu",
			category: "Algebra",
			syntax: ["slu(A, order, threshold)"],
			description: "Calculate the Matrix LU decomposition with full pivoting. Matrix A is decomposed in two matrices (L, U) and two permutation vectors (pinv, q) where P * A * Q = L * U",
			examples: ["slu(sparse([4.5, 0, 3.2, 0; 3.1, 2.9, 0, 0.9; 0, 1.7, 3, 0; 3.5, 0.4, 0, 1]), 1, 0.001)"],
			seealso: ["lusolve", "lsolve", "usolve", "matrix", "sparse", "lup"]
		}
	}, function(e, t) {
		e.exports = {
			name: "usolve",
			category: "Algebra",
			syntax: ["x=usolve(U, b)"],
			description: "Solves the linear system U * x = b where U is an [n x n] upper triangular matrix and b is a [n] column vector.",
			examples: ["x=usolve(sparse([1, 1, 1, 1; 0, 1, 1, 1; 0, 0, 1, 1; 0, 0, 0, 1]), [1; 2; 3; 4])"],
			seealso: ["lup", "lusolve", "lsolve", "matrix", "sparse"]
		}
	}, function(e, t) {
		e.exports = {
			name: "abs",
			category: "Arithmetic",
			syntax: ["abs(x)"],
			description: "Compute the absolute value.",
			examples: ["abs(3.5)", "abs(-4.2)"],
			seealso: ["sign"]
		}
	}, function(e, t) {
		e.exports = {
			name: "add",
			category: "Operators",
			syntax: ["x + y", "add(x, y)"],
			description: "Add two values.",
			examples: ["a = 2.1 + 3.6", "a - 3.6", "3 + 2i", "3 cm + 2 inch", '"2.3" + "4"'],
			seealso: ["subtract"]
		}
	}, function(e, t) {
		e.exports = {
			name: "cbrt",
			category: "Arithmetic",
			syntax: ["cbrt(x)", "cbrt(x, allRoots)"],
			description: "Compute the cubic root value. If x = y * y * y, then y is the cubic root of x. When `x` is a number or complex number, an optional second argument `allRoots` can be provided to return all three cubic roots. If not provided, the principal root is returned",
			examples: ["cbrt(64)", "cube(4)", "cbrt(-8)", "cbrt(2 + 3i)", "cbrt(8i)", "cbrt(8i, true)", "cbrt(27 m^3)"],
			seealso: ["square", "sqrt", "cube", "multiply"]
		}
	}, function(e, t) {
		e.exports = {
			name: "ceil",
			category: "Arithmetic",
			syntax: ["ceil(x)"],
			description: "Round a value towards plus infinity. If x is complex, both real and imaginary part are rounded towards plus infinity.",
			examples: ["ceil(3.2)", "ceil(3.8)", "ceil(-4.2)"],
			seealso: ["floor", "fix", "round"]
		}
	}, function(e, t) {
		e.exports = {
			name: "cube",
			category: "Arithmetic",
			syntax: ["cube(x)"],
			description: "Compute the cube of a value. The cube of x is x * x * x.",
			examples: ["cube(2)", "2^3", "2 * 2 * 2"],
			seealso: ["multiply", "square", "pow"]
		}
	}, function(e, t) {
		e.exports = {
			name: "divide",
			category: "Operators",
			syntax: ["x / y", "divide(x, y)"],
			description: "Divide two values.",
			examples: ["a = 2 / 3", "a * 3", "4.5 / 2", "3 + 4 / 2", "(3 + 4) / 2", "18 km / 4.5"],
			seealso: ["multiply"]
		}
	}, function(e, t) {
		e.exports = {
			name: "dotDivide",
			category: "Operators",
			syntax: ["x ./ y", "dotDivide(x, y)"],
			description: "Divide two values element wise.",
			examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a ./ b"],
			seealso: ["multiply", "dotMultiply", "divide"]
		}
	}, function(e, t) {
		e.exports = {
			name: "dotMultiply",
			category: "Operators",
			syntax: ["x .* y", "dotMultiply(x, y)"],
			description: "Multiply two values element wise.",
			examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a .* b"],
			seealso: ["multiply", "divide", "dotDivide"]
		}
	}, function(e, t) {
		e.exports = {
			name: "dotpow",
			category: "Operators",
			syntax: ["x .^ y", "dotpow(x, y)"],
			description: "Calculates the power of x to y element wise.",
			examples: ["a = [1, 2, 3; 4, 5, 6]", "a .^ 2"],
			seealso: ["pow"]
		}
	}, function(e, t) {
		e.exports = {
			name: "exp",
			category: "Arithmetic",
			syntax: ["exp(x)"],
			description: "Calculate the exponent of a value.",
			examples: ["exp(1.3)", "e ^ 1.3", "log(exp(1.3))", "x = 2.4", "(exp(i*x) == cos(x) + i*sin(x))   # Euler's formula"],
			seealso: ["pow", "log"]
		}
	}, function(e, t) {
		e.exports = {
			name: "fix",
			category: "Arithmetic",
			syntax: ["fix(x)"],
			description: "Round a value towards zero. If x is complex, both real and imaginary part are rounded towards zero.",
			examples: ["fix(3.2)", "fix(3.8)", "fix(-4.2)", "fix(-4.8)"],
			seealso: ["ceil", "floor", "round"]
		}
	}, function(e, t) {
		e.exports = {
			name: "floor",
			category: "Arithmetic",
			syntax: ["floor(x)"],
			description: "Round a value towards minus infinity.If x is complex, both real and imaginary part are rounded towards minus infinity.",
			examples: ["floor(3.2)", "floor(3.8)", "floor(-4.2)"],
			seealso: ["ceil", "fix", "round"]
		}
	}, function(e, t) {
		e.exports = {
			name: "gcd",
			category: "Arithmetic",
			syntax: ["gcd(a, b)", "gcd(a, b, c, ...)"],
			description: "Compute the greatest common divisor.",
			examples: ["gcd(8, 12)", "gcd(-4, 6)", "gcd(25, 15, -10)"],
			seealso: ["lcm", "xgcd"]
		}
	}, function(e, t) {
		e.exports = {
			name: "hypot",
			category: "Arithmetic",
			syntax: ["hypot(a, b, c, ...)", "hypot([a, b, c, ...])"],
			description: "Calculate the hypotenusa of a list with values. ",
			examples: ["hypot(3, 4)", "sqrt(3^2 + 4^2)", "hypot(-2)", "hypot([3, 4, 5])"],
			seealso: ["abs", "norm"]
		}
	}, function(e, t) {
		e.exports = {
			name: "lcm",
			category: "Arithmetic",
			syntax: ["lcm(x, y)"],
			description: "Compute the least common multiple.",
			examples: ["lcm(4, 6)", "lcm(6, 21)", "lcm(6, 21, 5)"],
			seealso: ["gcd"]
		}
	}, function(e, t) {
		e.exports = {
			name: "log",
			category: "Arithmetic",
			syntax: ["log(x)", "log(x, base)"],
			description: "Compute the logarithm of a value. If no base is provided, the natural logarithm of x is calculated. If base if provided, the logarithm is calculated for the specified base. log(x, base) is defined as log(x) / log(base).",
			examples: ["log(3.5)", "a = log(2.4)", "exp(a)", "10 ^ 4", "log(10000, 10)", "log(10000) / log(10)", "b = log(1024, 2)", "2 ^ b"],
			seealso: ["exp", "log10"]
		}
	}, function(e, t) {
		e.exports = {
			name: "log10",
			category: "Arithmetic",
			syntax: ["log10(x)"],
			description: "Compute the 10-base logarithm of a value.",
			examples: ["log10(0.00001)", "log10(10000)", "10 ^ 4", "log(10000) / log(10)", "log(10000, 10)"],
			seealso: ["exp", "log"]
		}
	}, function(e, t) {
		e.exports = {
			name: "mod",
			category: "Operators",
			syntax: ["x % y", "x mod y", "mod(x, y)"],
			description: "Calculates the modulus, the remainder of an integer division.",
			examples: ["7 % 3", "11 % 2", "10 mod 4", "function isOdd(x) = x % 2", "isOdd(2)", "isOdd(3)"],
			seealso: ["divide"]
		}
	}, function(e, t) {
		e.exports = {
			name: "multiply",
			category: "Operators",
			syntax: ["x * y", "multiply(x, y)"],
			description: "multiply two values.",
			examples: ["a = 2.1 * 3.4", "a / 3.4", "2 * 3 + 4", "2 * (3 + 4)", "3 * 2.1 km"],
			seealso: ["divide"]
		}
	}, function(e, t) {
		e.exports = {
			name: "norm",
			category: "Arithmetic",
			syntax: ["norm(x)", "norm(x, p)"],
			description: "Calculate the norm of a number, vector or matrix.",
			examples: ["abs(-3.5)", "norm(-3.5)", "norm(3 - 4i))", "norm([1, 2, -3], Infinity)", "norm([1, 2, -3], -Infinity)", "norm([3, 4], 2)", "norm([[1, 2], [3, 4]], 1)", "norm([[1, 2], [3, 4]], 'inf')", "norm([[1, 2], [3, 4]], 'fro')"]
		}
	}, function(e, t) {
		e.exports = {
			name: "nthRoot",
			category: "Arithmetic",
			syntax: ["nthRoot(a)", "nthRoot(a, root)"],
			description: 'Calculate the nth root of a value. The principal nth root of a positive real number A, is the positive real solution of the equation "x^root = A".',
			examples: ["4 ^ 3", "nthRoot(64, 3)", "nthRoot(9, 2)", "sqrt(9)"],
			seealso: ["sqrt", "pow"]
		}
	}, function(e, t) {
		e.exports = {
			name: "pow",
			category: "Operators",
			syntax: ["x ^ y", "pow(x, y)"],
			description: "Calculates the power of x to y, x^y.",
			examples: ["2^3 = 8", "2*2*2", "1 + e ^ (pi * i)"],
			seealso: ["multiply"]
		}
	}, function(e, t) {
		e.exports = {
			name: "round",
			category: "Arithmetic",
			syntax: ["round(x)", "round(x, n)"],
			description: "round a value towards the nearest integer.If x is complex, both real and imaginary part are rounded towards the nearest integer. When n is specified, the value is rounded to n decimals.",
			examples: ["round(3.2)", "round(3.8)", "round(-4.2)", "round(-4.8)", "round(pi, 3)", "round(123.45678, 2)"],
			seealso: ["ceil", "floor", "fix"]
		}
	}, function(e, t) {
		e.exports = {
			name: "sign",
			category: "Arithmetic",
			syntax: ["sign(x)"],
			description: "Compute the sign of a value. The sign of a value x is 1 when x>1, -1 when x<0, and 0 when x=0.",
			examples: ["sign(3.5)", "sign(-4.2)", "sign(0)"],
			seealso: ["abs"]
		}
	}, function(e, t) {
		e.exports = {
			name: "sqrt",
			category: "Arithmetic",
			syntax: ["sqrt(x)"],
			description: "Compute the square root value. If x = y * y, then y is the square root of x.",
			examples: ["sqrt(25)", "5 * 5", "sqrt(-1)"],
			seealso: ["square", "multiply"]
		}
	}, function(e, t) {
		e.exports = {
			name: "square",
			category: "Arithmetic",
			syntax: ["square(x)"],
			description: "Compute the square of a value. The square of x is x * x.",
			examples: ["square(3)", "sqrt(9)", "3^2", "3 * 3"],
			seealso: ["multiply", "pow", "sqrt", "cube"]
		}
	}, function(e, t) {
		e.exports = {
			name: "subtract",
			category: "Operators",
			syntax: ["x - y", "subtract(x, y)"],
			description: "subtract two values.",
			examples: ["a = 5.3 - 2", "a + 2", "2/3 - 1/6", "2 * 3 - 3", "2.1 km - 500m"],
			seealso: ["add"]
		}
	}, function(e, t) {
		e.exports = {
			name: "unaryMinus",
			category: "Operators",
			syntax: ["-x", "unaryMinus(x)"],
			description: "Inverse the sign of a value. Converts booleans and strings to numbers.",
			examples: ["-4.5", "-(-5.6)", '-"22"'],
			seealso: ["add", "subtract", "unaryPlus"]
		}
	}, function(e, t) {
		e.exports = {
			name: "unaryPlus",
			category: "Operators",
			syntax: ["+x", "unaryPlus(x)"],
			description: "Converts booleans and strings to numbers.",
			examples: ["+true", '+"2"'],
			seealso: ["add", "subtract", "unaryMinus"]
		}
	}, function(e, t) {
		e.exports = {
			name: "xgcd",
			category: "Arithmetic",
			syntax: ["xgcd(a, b)"],
			description: "Calculate the extended greatest common divisor for two values",
			examples: ["xgcd(8, 12)", "gcd(8, 12)", "xgcd(36163, 21199)"],
			seealso: ["gcd", "lcm"]
		}
	}, function(e, t) {
		e.exports = {
			name: "bitAnd",
			category: "Bitwise",
			syntax: ["x & y", "bitAnd(x, y)"],
			description: "Bitwise AND operation. Performs the logical AND operation on each pair of the corresponding bits of the two given values by multiplying them. If both bits in the compared position are 1, the bit in the resulting binary representation is 1, otherwise, the result is 0",
			examples: ["5 & 3", "bitAnd(53, 131)", "[1, 12, 31] & 42"],
			seealso: ["bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
		}
	}, function(e, t) {
		e.exports = {
			name: "bitNot",
			category: "Bitwise",
			syntax: ["~x", "bitNot(x)"],
			description: "Bitwise NOT operation. Performs a logical negation on each bit of the given value. Bits that are 0 become 1, and those that are 1 become 0.",
			examples: ["~1", "~2", "bitNot([2, -3, 4])"],
			seealso: ["bitAnd", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
		}
	}, function(e, t) {
		e.exports = {
			name: "bitOr",
			category: "Bitwise",
			syntax: ["x | y", "bitOr(x, y)"],
			description: "Bitwise OR operation. Performs the logical inclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if the first bit is 1 or the second bit is 1 or both bits are 1, otherwise, the result is 0.",
			examples: ["5 | 3", "bitOr([1, 2, 3], 4)"],
			seealso: ["bitAnd", "bitNot", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
		}
	}, function(e, t) {
		e.exports = {
			name: "bitXor",
			category: "Bitwise",
			syntax: ["bitXor(x, y)"],
			description: "Bitwise XOR operation, exclusive OR. Performs the logical exclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if only the first bit is 1 or only the second bit is 1, but will be 0 if both are 0 or both are 1.",
			examples: ["bitOr(1, 2)", "bitXor([2, 3, 4], 4)"],
			seealso: ["bitAnd", "bitNot", "bitOr", "leftShift", "rightArithShift", "rightLogShift"]
		}
	}, function(e, t) {
		e.exports = {
			name: "leftShift",
			category: "Bitwise",
			syntax: ["x << y", "leftShift(x, y)"],
			description: "Bitwise left logical shift of a value x by y number of bits.",
			examples: ["4 << 1", "8 >> 1"],
			seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "rightArithShift", "rightLogShift"]
		}
	}, function(e, t) {
		e.exports = {
			name: "rightArithShift",
			category: "Bitwise",
			syntax: ["x >> y", "leftShift(x, y)"],
			description: "Bitwise right arithmetic shift of a value x by y number of bits.",
			examples: ["8 >> 1", "4 << 1", "-12 >> 2"],
			seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightLogShift"]
		}
	}, function(e, t) {
		e.exports = {
			name: "rightLogShift",
			category: "Bitwise",
			syntax: ["x >> y", "leftShift(x, y)"],
			description: "Bitwise right logical shift of a value x by y number of bits.",
			examples: ["8 >>> 1", "4 << 1", "-12 >>> 2"],
			seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift"]
		}
	}, function(e, t) {
		e.exports = {
			name: "bellNumbers",
			category: "Combinatorics",
			syntax: ["bellNumbers(n)"],
			description: "The Bell Numbers count the number of partitions of a set. A partition is a pairwise disjoint subset of S whose union is S. `bellNumbers` only takes integer arguments. The following condition must be enforced: n >= 0.",
			examples: ["bellNumbers(3)", "bellNumbers(8)"],
			seealso: ["stirlingS2"]
		}
	}, function(e, t) {
		e.exports = {
			name: "catalan",
			category: "Combinatorics",
			syntax: ["catalan(n)"],
			description: "The Catalan Numbers enumerate combinatorial structures of many different types. catalan only takes integer arguments. The following condition must be enforced: n >= 0.",
			examples: ["catalan(3)", "catalan(8)"],
			seealso: ["bellNumbers"]
		}
	}, function(e, t) {
		e.exports = {
			name: "composition",
			category: "Combinatorics",
			syntax: ["composition(n, k)"],
			description: "The composition counts of n into k parts. composition only takes integer arguments. The following condition must be enforced: k <= n.",
			examples: ["composition(5, 3)"],
			seealso: ["combinations"]
		}
	}, function(e, t) {
		e.exports = {
			name: "stirlingS2",
			category: "Combinatorics",
			syntax: ["stirlingS2(n, k)"],
			description: "he Stirling numbers of the second kind, counts the number of ways to partition a set of n labelled objects into k nonempty unlabelled subsets. `stirlingS2` only takes integer arguments. The following condition must be enforced: k <= n. If n = k or k = 1, then s(n,k) = 1.",
			examples: ["stirlingS2(5, 3)"],
			seealso: ["bellNumbers"]
		}
	}, function(e, t) {
		e.exports = {
			name: "arg",
			category: "Complex",
			syntax: ["arg(x)"],
			description: "Compute the argument of a complex value. If x = a+bi, the argument is computed as atan2(b, a).",
			examples: ["arg(2 + 2i)", "atan2(3, 2)", "arg(2 + 3i)"],
			seealso: ["re", "im", "conj", "abs"]
		}
	}, function(e, t) {
		e.exports = {
			name: "conj",
			category: "Complex",
			syntax: ["conj(x)"],
			description: "Compute the complex conjugate of a complex value. If x = a+bi, the complex conjugate is a-bi.",
			examples: ["conj(2 + 3i)", "conj(2 - 3i)", "conj(-5.2i)"],
			seealso: ["re", "im", "abs", "arg"]
		}
	}, function(e, t) {
		e.exports = {
			name: "re",
			category: "Complex",
			syntax: ["re(x)"],
			description: "Get the real part of a complex number.",
			examples: ["re(2 + 3i)", "im(2 + 3i)", "re(-5.2i)", "re(2.4)"],
			seealso: ["im", "conj", "abs", "arg"]
		}
	}, function(e, t) {
		e.exports = {
			name: "im",
			category: "Complex",
			syntax: ["im(x)"],
			description: "Get the imaginary part of a complex number.",
			examples: ["im(2 + 3i)", "re(2 + 3i)", "im(-5.2i)", "im(2.4)"],
			seealso: ["re", "conj", "abs", "arg"]
		}
	}, function(e, t) {
		e.exports = {
			name: "eval",
			category: "Expression",
			syntax: ["eval(expression)", "eval([expr1, expr2, expr3, ...])"],
			description: "Evaluate an expression or an array with expressions.",
			examples: ['eval("2 + 3")', 'eval("sqrt(" + 4 + ")")'],
			seealso: []
		}
	}, function(e, t) {
		e.exports = {
			name: "help",
			category: "Expression",
			syntax: ["help(object)", "help(string)"],
			description: "Display documentation on a function or data type.",
			examples: ["help(sqrt)", 'help("complex")'],
			seealso: []
		}
	}, function(e, t) {
		e.exports = {
			name: "distance",
			category: "Geometry",
			syntax: ["distance([x1, y1], [x2, y2])", "distance([[x1, y1], [x2, y2])"],
			description: "Calculates the Euclidean distance between two points.",
			examples: ["distance([0,0], [4,4])", "distance([[0,0], [4,4]])"],
			seealso: []
		}
	}, function(e, t) {
		e.exports = {
			name: "intersect",
			category: "Geometry",
			syntax: ["intersect(expr1, expr2, expr3, expr4)", "intersect(expr1, expr2, expr3)"],
			description: "Computes the intersection point of lines and/or planes.",
			examples: ["intersect([0, 0], [10, 10], [10, 0], [0, 10])", "intersect([1, 0, 1],  [4, -2, 2], [1, 1, 1, 6])"],
			seealso: []
		}
	}, function(e, t) {
		e.exports = {
			name: "and",
			category: "Logical",
			syntax: ["x and y", "and(x, y)"],
			description: "Logical and. Test whether two values are both defined with a nonzero/nonempty value.",
			examples: ["true and false", "true and true", "2 and 4"],
			seealso: ["not", "or", "xor"]
		}
	}, function(e, t) {
		e.exports = {
			name: "not",
			category: "Logical",
			syntax: ["not x", "not(x)"],
			description: "Logical not. Flips the boolean value of given argument.",
			examples: ["not true", "not false", "not 2", "not 0"],
			seealso: ["and", "or", "xor"]
		}
	}, function(e, t) {
		e.exports = {
			name: "or",
			category: "Logical",
			syntax: ["x or y", "or(x, y)"],
			description: "Logical or. Test if at least one value is defined with a nonzero/nonempty value.",
			examples: ["true or false", "false or false", "0 or 4"],
			seealso: ["not", "and", "xor"]
		}
	}, function(e, t) {
		e.exports = {
			name: "xor",
			category: "Logical",
			syntax: ["x or y", "or(x, y)"],
			description: "Logical exclusive or, xor. Test whether one and only one value is defined with a nonzero/nonempty value.",
			examples: ["true xor false", "false xor false", "true xor true", "0 or 4"],
			seealso: ["not", "and", "or"]
		}
	}, function(e, t) {
		e.exports = {
			name: "concat",
			category: "Matrix",
			syntax: ["concat(A, B, C, ...)", "concat(A, B, C, ..., dim)"],
			description: "Concatenate matrices. By default, the matrices are concatenated by the last dimension. The dimension on which to concatenate can be provided as last argument.",
			examples: ["A = [1, 2; 5, 6]", "B = [3, 4; 7, 8]", "concat(A, B)", "concat(A, B, 1)", "concat(A, B, 2)"],
			seealso: ["det", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
		}
	}, function(e, t) {
		e.exports = {
			name: "cross",
			category: "Matrix",
			syntax: ["cross(A, B)"],
			description: "Calculate the cross product for two vectors in three dimensional space.",
			examples: ["cross([1, 1, 0],  [0, 1, 1])", "cross([3, -3, 1], [4, 9, 2])", "cross([2, 3, 4],  [5, 6, 7])"],
			seealso: ["multiply", "dot"]
		}
	}, function(e, t) {
		e.exports = {
			name: "det",
			category: "Matrix",
			syntax: ["det(x)"],
			description: "Calculate the determinant of a matrix",
			examples: ["det([1, 2; 3, 4])", "det([-2, 2, 3; -1, 1, 3; 2, 0, -1])"],
			seealso: ["concat", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
		}
	}, function(e, t) {
		e.exports = {
			name: "diag",
			category: "Matrix",
			syntax: ["diag(x)", "diag(x, k)"],
			description: "Create a diagonal matrix or retrieve the diagonal of a matrix. When x is a vector, a matrix with the vector values on the diagonal will be returned. When x is a matrix, a vector with the diagonal values of the matrix is returned. When k is provided, the k-th diagonal will be filled in or retrieved, if k is positive, the values are placed on the super diagonal. When k is negative, the values are placed on the sub diagonal.",
			examples: ["diag(1:3)", "diag(1:3, 1)", "a = [1, 2, 3; 4, 5, 6; 7, 8, 9]", "diag(a)"],
			seealso: ["concat", "det", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
		}
	}, function(e, t) {
		e.exports = {
			name: "dot",
			category: "Matrix",
			syntax: ["dot(A, B)"],
			description: "Calculate the dot product of two vectors. The dot product of A = [a1, a2, a3, ..., an] and B = [b1, b2, b3, ..., bn] is defined as dot(A, B) = a1 * b1 + a2 * b2 + a3 * b3 + ... + an * bn",
			examples: ["dot([2, 4, 1], [2, 2, 3])", "[2, 4, 1] * [2, 2, 3]"],
			seealso: ["multiply", "cross"]
		}
	}, function(e, t) {
		e.exports = {
			name: "eye",
			category: "Matrix",
			syntax: ["eye(n)", "eye(m, n)", "eye([m, n])", "eye"],
			description: "Returns the identity matrix with size m-by-n. The matrix has ones on the diagonal and zeros elsewhere.",
			examples: ["eye(3)", "eye(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "eye(size(a))"],
			seealso: ["concat", "det", "diag", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
		}
	}, function(e, t) {
		e.exports = {
			name: "flatten",
			category: "Matrix",
			syntax: ["flatten(x)"],
			description: "Flatten a multi dimensional matrix into a single dimensional matrix.",
			examples: ["a = [1, 2, 3; 4, 5, 6]", "size(a)", "b = flatten(a)", "size(b)"],
			seealso: ["concat", "resize", "size", "squeeze"]
		}
	}, function(e, t) {
		e.exports = {
			name: "inv",
			category: "Matrix",
			syntax: ["inv(x)"],
			description: "Calculate the inverse of a matrix",
			examples: ["inv([1, 2; 3, 4])", "inv(4)", "1 / 4"],
			seealso: ["concat", "det", "diag", "eye", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
		}
	}, function(e, t) {
		e.exports = {
			name: "ones",
			category: "Matrix",
			syntax: ["ones(m)", "ones(m, n)", "ones(m, n, p, ...)", "ones([m])", "ones([m, n])", "ones([m, n, p, ...])", "ones"],
			description: "Create a matrix containing ones.",
			examples: ["ones(3)", "ones(3, 5)", "ones([2,3]) * 4.5", "a = [1, 2, 3; 4, 5, 6]", "ones(size(a))"],
			seealso: ["concat", "det", "diag", "eye", "inv", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
		}
	}, function(e, t) {
		e.exports = {
			name: "range",
			category: "Type",
			syntax: ["start:end", "start:step:end", "range(start, end)", "range(start, end, step)", "range(string)"],
			description: "Create a range. Lower bound of the range is included, upper bound is excluded.",
			examples: ["1:5", "3:-1:-3", "range(3, 7)", "range(0, 12, 2)", 'range("4:10")', "a = [1, 2, 3, 4; 5, 6, 7, 8]", "a[1:2, 1:2]"],
			seealso: ["concat", "det", "diag", "eye", "inv", "ones", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
		}
	}, function(e, t) {
		e.exports = {
			name: "resize",
			category: "Matrix",
			syntax: ["resize(x, size)", "resize(x, size, defaultValue)"],
			description: "Resize a matrix.",
			examples: ["resize([1,2,3,4,5], [3])", "resize([1,2,3], [5])", "resize([1,2,3], [5], -1)", "resize(2, [2, 3])", 'resize("hello", [8], "!")'],
			seealso: ["size", "subset", "squeeze"]
		}
	}, function(e, t) {
		e.exports = {
			name: "size",
			category: "Matrix",
			syntax: ["size(x)"],
			description: "Calculate the size of a matrix.",
			examples: ["size(2.3)", 'size("hello world")', "a = [1, 2; 3, 4; 5, 6]", "size(a)", "size(1:6)"],
			seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "squeeze", "subset", "trace", "transpose", "zeros"]
		}
	}, function(e, t) {
		e.exports = {
			name: "squeeze",
			category: "Matrix",
			syntax: ["squeeze(x)"],
			description: "Remove inner and outer singleton dimensions from a matrix.",
			examples: ["a = zeros(3,2,1)", "size(squeeze(a))", "b = zeros(1,1,3)", "size(squeeze(b))"],
			seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "size", "subset", "trace", "transpose", "zeros"]
		}
	}, function(e, t) {
		e.exports = {
			name: "subset",
			category: "Matrix",
			syntax: ["value(index)", "value(index) = replacement", "subset(value, [index])", "subset(value, [index], replacement)"],
			description: "Get or set a subset of a matrix or string. Indexes are one-based. Both the ranges lower-bound and upper-bound are included.",
			examples: ["d = [1, 2; 3, 4]", "e = []", "e[1, 1:2] = [5, 6]", "e[2, :] = [7, 8]", "f = d * e", "f[2, 1]", "f[:, 1]"],
			seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "trace", "transpose", "zeros"]
		}
	}, function(e, t) {
		e.exports = {
			name: "trace",
			category: "Matrix",
			syntax: ["trace(A)"],
			description: "Calculate the trace of a matrix: the sum of the elements on the main diagonal of a square matrix.",
			examples: ["A = [1, 2, 3; -1, 2, 3; 2, 0, 3]", "trace(A)"],
			seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "transpose", "zeros"]
		}
	}, function(e, t) {
		e.exports = {
			name: "transpose",
			category: "Matrix",
			syntax: ["x'", "transpose(x)"],
			description: "Transpose a matrix",
			examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "transpose(a)"],
			seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "zeros"]
		}
	}, function(e, t) {
		e.exports = {
			name: "zeros",
			category: "Matrix",
			syntax: ["zeros(m)", "zeros(m, n)", "zeros(m, n, p, ...)", "zeros([m])", "zeros([m, n])", "zeros([m, n, p, ...])", "zeros"],
			description: "Create a matrix containing zeros.",
			examples: ["zeros(3)", "zeros(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "zeros(size(a))"],
			seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose"]
		}
	}, function(e, t) {
		e.exports = {
			name: "combinations",
			category: "Probability",
			syntax: ["combinations(n, k)"],
			description: "Compute the number of combinations of n items taken k at a time",
			examples: ["combinations(7, 5)"],
			seealso: ["permutations", "factorial"]
		}
	}, function(e, t) {
		e.exports = {
			name: "factorial",
			category: "Probability",
			syntax: ["kldivergence(x, y)"],
			description: "Compute the factorial of a value",
			examples: ["5!", "5 * 4 * 3 * 2 * 1", "3!"],
			seealso: ["combinations", "permutations", "gamma"]
		}
	}, function(e, t) {
		e.exports = {
			name: "gamma",
			category: "Probability",
			syntax: ["gamma(n)"],
			description: "Compute the gamma function. For small values, the Lanczos approximation is used, and for large values the extended Stirling approximation.",
			examples: ["gamma(4)", "3!", "gamma(1/2)", "sqrt(pi)"],
			seealso: ["factorial"]
		}
	}, function(e, t) {
		e.exports = {
			name: "kldivergence",
			category: "Probability",
			syntax: ["n!", "factorial(n)"],
			description: "Calculate the Kullback-Leibler (KL) divergence  between two distributions.",
			examples: ["math.kldivergence([0.7,0.5,0.4], [0.2,0.9,0.5])"],
			seealso: []
		}
	}, function(e, t) {
		e.exports = {
			name: "multinomial",
			category: "Probability",
			syntax: ["multinomial(A)"],
			description: "Multinomial Coefficients compute the number of ways of picking a1, a2, ..., ai unordered outcomes from `n` possibilities. multinomial takes one array of integers as an argument. The following condition must be enforced: every ai <= 0.",
			examples: ["multinomial([1, 2, 1])"],
			seealso: ["combinations", "factorial"]
		}
	}, function(e, t) {
		e.exports = {
			name: "permutations",
			category: "Probability",
			syntax: ["permutations(n)", "permutations(n, k)"],
			description: "Compute the number of permutations of n items taken k at a time",
			examples: ["permutations(5)", "permutations(5, 3)"],
			seealso: ["combinations", "factorial"]
		}
	}, function(e, t) {
		e.exports = {
			name: "pickRandom",
			category: "Probability",
			syntax: ["pickRandom(array)"],
			description: "Pick a random entry from a given array.",
			examples: ["pickRandom(0:10)", "pickRandom([1, 3, 1, 6])"],
			seealso: ["random", "randomInt"]
		}
	}, function(e, t) {
		e.exports = {
			name: "random",
			category: "Probability",
			syntax: ["random()", "random(max)", "random(min, max)", "random(size)", "random(size, max)", "random(size, min, max)"],
			description: "Return a random number.",
			examples: ["random()", "random(10, 20)", "random([2, 3])"],
			seealso: ["pickRandom", "randomInt"]
		}
	}, function(e, t) {
		e.exports = {
			name: "randInt",
			category: "Probability",
			syntax: ["randInt(max)", "randInt(min, max)", "randInt(size)", "randInt(size, max)", "randInt(size, min, max)"],
			description: "Return a random integer number",
			examples: ["randInt(10, 20)", "randInt([2, 3], 10)"],
			seealso: ["pickRandom", "random"]
		}
	}, function(e, t) {
		e.exports = {
			name: "compare",
			category: "Relational",
			syntax: ["compare(x, y)"],
			description: "Compare two values. Returns 1 if x is larger than y, -1 if x is smaller than y, and 0 if x and y are equal.",
			examples: ["compare(2, 3)", "compare(3, 2)", "compare(2, 2)", "compare(5cm, 40mm)", "compare(2, [1, 2, 3])"],
			seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq"]
		}
	}, function(e, t) {
		e.exports = {
			name: "deepEqual",
			category: "Relational",
			syntax: ["deepEqual(x, y)"],
			description: "Check equality of two matrices element wise. Returns true if the size of both matrices is equal and when and each of the elements are equal.",
			examples: ["[1,3,4] == [1,3,4]", "[1,3,4] == [1,3]"],
			seealso: ["equal", "unequal", "smaller", "larger", "smallerEq", "largerEq", "compare"]
		}
	}, function(e, t) {
		e.exports = {
			name: "equal",
			category: "Relational",
			syntax: ["x == y", "equal(x, y)"],
			description: "Check equality of two values. Returns true if the values are equal, and false if not.",
			examples: ["2+2 == 3", "2+2 == 4", "a = 3.2", "b = 6-2.8", "a == b", "50cm == 0.5m"],
			seealso: ["unequal", "smaller", "larger", "smallerEq", "largerEq", "compare", "deepEqual"]
		}
	}, function(e, t) {
		e.exports = {
			name: "larger",
			category: "Relational",
			syntax: ["x > y", "larger(x, y)"],
			description: "Check if value x is larger than y. Returns true if x is larger than y, and false if not.",
			examples: ["2 > 3", "5 > 2*2", "a = 3.3", "b = 6-2.8", "(a > b)", "(b < a)", "5 cm > 2 inch"],
			seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare"]
		}
	}, function(e, t) {
		e.exports = {
			name: "largerEq",
			category: "Relational",
			syntax: ["x >= y", "largerEq(x, y)"],
			description: "Check if value x is larger or equal to y. Returns true if x is larger or equal to y, and false if not.",
			examples: ["2 > 1+1", "2 >= 1+1", "a = 3.2", "b = 6-2.8", "(a > b)"],
			seealso: ["equal", "unequal", "smallerEq", "smaller", "largerEq", "compare"]
		}
	}, function(e, t) {
		e.exports = {
			name: "smaller",
			category: "Relational",
			syntax: ["x < y", "smaller(x, y)"],
			description: "Check if value x is smaller than value y. Returns true if x is smaller than y, and false if not.",
			examples: ["2 < 3", "5 < 2*2", "a = 3.3", "b = 6-2.8", "(a < b)", "5 cm < 2 inch"],
			seealso: ["equal", "unequal", "larger", "smallerEq", "largerEq", "compare"]
		}
	}, function(e, t) {
		e.exports = {
			name: "smallerEq",
			category: "Relational",
			syntax: ["x <= y", "smallerEq(x, y)"],
			description: "Check if value x is smaller or equal to value y. Returns true if x is smaller than y, and false if not.",
			examples: ["2 < 1+1", "2 <= 1+1", "a = 3.2", "b = 6-2.8", "(a < b)"],
			seealso: ["equal", "unequal", "larger", "smaller", "largerEq", "compare"]
		}
	}, function(e, t) {
		e.exports = {
			name: "unequal",
			category: "Relational",
			syntax: ["x != y", "unequal(x, y)"],
			description: "Check unequality of two values. Returns true if the values are unequal, and false if they are equal.",
			examples: ["2+2 != 3", "2+2 != 4", "a = 3.2", "b = 6-2.8", "a != b", "50cm != 0.5m", "5 cm != 2 inch"],
			seealso: ["equal", "smaller", "larger", "smallerEq", "largerEq", "compare", "deepEqual"]
		}
	}, function(e, t) {
		e.exports = {
			name: "max",
			category: "Statistics",
			syntax: ["max(a, b, c, ...)", "max(A)", "max(A, dim)"],
			description: "Compute the maximum value of a list of values.",
			examples: ["max(2, 3, 4, 1)", "max([2, 3, 4, 1])", "max([2, 5; 4, 3])", "max([2, 5; 4, 3], 1)", "max([2, 5; 4, 3], 2)", "max(2.7, 7.1, -4.5, 2.0, 4.1)", "min(2.7, 7.1, -4.5, 2.0, 4.1)"],
			seealso: ["mean", "median", "min", "prod", "std", "sum", "var"]
		}
	}, function(e, t) {
		e.exports = {
			name: "mean",
			category: "Statistics",
			syntax: ["mean(a, b, c, ...)", "mean(A)", "mean(A, dim)"],
			description: "Compute the arithmetic mean of a list of values.",
			examples: ["mean(2, 3, 4, 1)", "mean([2, 3, 4, 1])", "mean([2, 5; 4, 3])", "mean([2, 5; 4, 3], 1)", "mean([2, 5; 4, 3], 2)", "mean([1.0, 2.7, 3.2, 4.0])"],
			seealso: ["max", "median", "min", "prod", "std", "sum", "var"]
		}
	}, function(e, t) {
		e.exports = {
			name: "median",
			category: "Statistics",
			syntax: ["median(a, b, c, ...)", "median(A)"],
			description: "Compute the median of all values. The values are sorted and the middle value is returned. In case of an even number of values, the average of the two middle values is returned.",
			examples: ["median(5, 2, 7)", "median([3, -1, 5, 7])"],
			seealso: ["max", "mean", "min", "prod", "std", "sum", "var"]
		}
	}, function(e, t) {
		e.exports = {
			name: "min",
			category: "Statistics",
			syntax: ["min(a, b, c, ...)", "min(A)", "min(A, dim)"],
			description: "Compute the minimum value of a list of values.",
			examples: ["min(2, 3, 4, 1)", "min([2, 3, 4, 1])", "min([2, 5; 4, 3])", "min([2, 5; 4, 3], 1)", "min([2, 5; 4, 3], 2)", "min(2.7, 7.1, -4.5, 2.0, 4.1)", "max(2.7, 7.1, -4.5, 2.0, 4.1)"],
			seealso: ["max", "mean", "median", "prod", "std", "sum", "var"]
		}
	}, function(e, t) {
		e.exports = {
			name: "mode",
			category: "Statistics",
			syntax: ["mode(a, b, c, ...)", "mode(A)", "mode(A, a, b, B, c, ...)"],
			description: "Computes the mode of all values as an array. In case mode being more than one, multiple values are returned in an array.",
			examples: ["mode(5, 2, 7)", "mode([3, -1, 5, 7])"],
			seealso: ["max", "mean", "min", "median", "prod", "std", "sum", "var"]
		}
	}, function(e, t) {
		e.exports = {
			name: "prod",
			category: "Statistics",
			syntax: ["prod(a, b, c, ...)", "prod(A)"],
			description: "Compute the product of all values.",
			examples: ["prod(2, 3, 4)", "prod([2, 3, 4])", "prod([2, 5; 4, 3])"],
			seealso: ["max", "mean", "min", "median", "min", "std", "sum", "var"]
		}
	}, function(e, t) {
		e.exports = {
			name: "quantileSeq",
			category: "Statistics",
			syntax: ["quantileSeq(A, prob[, sorted])", "quantileSeq(A, [prob1, prob2, ...][, sorted])", "quantileSeq(A, N[, sorted])"],
			description: "Compute the prob order quantile of a matrix or a list with values. The sequence is sorted and the middle value is returned. Supported types of sequence values are: Number, BigNumber, Unit Supported types of probablity are: Number, BigNumber. \n\nIn case of a (multi dimensional) array or matrix, the prob order quantile of all elements will be calculated.",
			examples: ["quantileSeq([3, -1, 5, 7], 0.5)", "quantileSeq([3, -1, 5, 7], [1/3, 2/3])", "quantileSeq([3, -1, 5, 7], 2)", "quantileSeq([-1, 3, 5, 7], 0.5, true)"],
			seealso: ["mean", "median", "min", "max", "prod", "std", "sum", "var"]
		}
	}, function(e, t) {
		e.exports = {
			name: "std",
			category: "Statistics",
			syntax: ["std(a, b, c, ...)", "std(A)", "std(A, normalization)"],
			description: 'Compute the standard deviation of all values, defined as std(A) = sqrt(var(A)). Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',
			examples: ["std(2, 4, 6)", "std([2, 4, 6, 8])", 'std([2, 4, 6, 8], "uncorrected")', 'std([2, 4, 6, 8], "biased")', "std([1, 2, 3; 4, 5, 6])"],
			seealso: ["max", "mean", "min", "median", "min", "prod", "sum", "var"]
		}
	}, function(e, t) {
		e.exports = {
			name: "sum",
			category: "Statistics",
			syntax: ["sum(a, b, c, ...)", "sum(A)"],
			description: "Compute the sum of all values.",
			examples: ["sum(2, 3, 4, 1)", "sum([2, 3, 4, 1])", "sum([2, 5; 4, 3])"],
			seealso: ["max", "mean", "median", "min", "prod", "std", "sum", "var"]
		}
	}, function(e, t) {
		e.exports = {
			name: "var",
			category: "Statistics",
			syntax: ["var(a, b, c, ...)", "var(A)", "var(A, normalization)"],
			description: 'Compute the variance of all values. Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',
			examples: ["var(2, 4, 6)", "var([2, 4, 6, 8])", 'var([2, 4, 6, 8], "uncorrected")', 'var([2, 4, 6, 8], "biased")', "var([1, 2, 3; 4, 5, 6])"],
			seealso: ["max", "mean", "min", "median", "min", "prod", "std", "sum"]
		}
	}, function(e, t) {
		e.exports = {
			name: "acos",
			category: "Trigonometry",
			syntax: ["acos(x)"],
			description: "Compute the inverse cosine of a value in radians.",
			examples: ["acos(0.5)", "acos(cos(2.3))"],
			seealso: ["cos", "atan", "asin"]
		}
	}, function(e, t) {
		e.exports = {
			name: "acosh",
			category: "Trigonometry",
			syntax: ["acosh(x)"],
			description: "Calculate the hyperbolic arccos of a value, defined as `acosh(x) = ln(sqrt(x^2 - 1) + x)`.",
			examples: ["acosh(1.5)"],
			seealso: ["cosh", "asinh", "atanh"]
		}
	}, function(e, t) {
		e.exports = {
			name: "acot",
			category: "Trigonometry",
			syntax: ["acot(x)"],
			description: "Calculate the inverse cotangent of a value.",
			examples: ["acot(0.5)", "acot(cot(0.5))", "acot(2)"],
			seealso: ["cot", "atan"]
		}
	}, function(e, t) {
		e.exports = {
			name: "acoth",
			category: "Trigonometry",
			syntax: ["acoth(x)"],
			description: "Calculate the hyperbolic arccotangent of a value, defined as `acoth(x) = (ln((x+1)/x) + ln(x/(x-1))) / 2`.",
			examples: ["acoth(0.5)"],
			seealso: ["acsch", "asech"]
		}
	}, function(e, t) {
		e.exports = {
			name: "acsc",
			category: "Trigonometry",
			syntax: ["acsc(x)"],
			description: "Calculate the inverse cotangent of a value.",
			examples: ["acsc(0.5)", "acsc(csc(0.5))", "acsc(2)"],
			seealso: ["csc", "asin", "asec"]
		}
	}, function(e, t) {
		e.exports = {
			name: "acsch",
			category: "Trigonometry",
			syntax: ["acsch(x)"],
			description: "Calculate the hyperbolic arccosecant of a value, defined as `acsch(x) = ln(1/x + sqrt(1/x^2 + 1))`.",
			examples: ["acsch(0.5)"],
			seealso: ["asech", "acoth"]
		}
	}, function(e, t) {
		e.exports = {
			name: "asec",
			category: "Trigonometry",
			syntax: ["asec(x)"],
			description: "Calculate the inverse secant of a value.",
			examples: ["asec(0.5)", "asec(sec(0.5))", "asec(2)"],
			seealso: ["acos", "acot", "acsc"]
		}
	}, function(e, t) {
		e.exports = {
			name: "asech",
			category: "Trigonometry",
			syntax: ["asech(x)"],
			description: "Calculate the inverse secant of a value.",
			examples: ["asech(0.5)"],
			seealso: ["acsch", "acoth"]
		}
	}, function(e, t) {
		e.exports = {
			name: "asin",
			category: "Trigonometry",
			syntax: ["asin(x)"],
			description: "Compute the inverse sine of a value in radians.",
			examples: ["asin(0.5)", "asin(sin(2.3))"],
			seealso: ["sin", "acos", "atan"]
		}
	}, function(e, t) {
		e.exports = {
			name: "asinh",
			category: "Trigonometry",
			syntax: ["asinh(x)"],
			description: "Calculate the hyperbolic arcsine of a value, defined as `asinh(x) = ln(x + sqrt(x^2 + 1))`.",
			examples: ["asinh(0.5)"],
			seealso: ["acosh", "atanh"]
		}
	}, function(e, t) {
		e.exports = {
			name: "atan",
			category: "Trigonometry",
			syntax: ["atan(x)"],
			description: "Compute the inverse tangent of a value in radians.",
			examples: ["atan(0.5)", "atan(tan(2.3))"],
			seealso: ["tan", "acos", "asin"]
		}
	}, function(e, t) {
		e.exports = {
			name: "atanh",
			category: "Trigonometry",
			syntax: ["atanh(x)"],
			description: "Calculate the hyperbolic arctangent of a value, defined as `atanh(x) = ln((1 + x)/(1 - x)) / 2`.",
			examples: ["atanh(0.5)"],
			seealso: ["acosh", "asinh"]
		}
	}, function(e, t) {
		e.exports = {
			name: "atan2",
			category: "Trigonometry",
			syntax: ["atan2(y, x)"],
			description: "Computes the principal value of the arc tangent of y/x in radians.",
			examples: ["atan2(2, 2) / pi", "angle = 60 deg in rad", "x = cos(angle)", "y = sin(angle)", "atan2(y, x)"],
			seealso: ["sin", "cos", "tan"]
		}
	}, function(e, t) {
		e.exports = {
			name: "cos",
			category: "Trigonometry",
			syntax: ["cos(x)"],
			description: "Compute the cosine of x in radians.",
			examples: ["cos(2)", "cos(pi / 4) ^ 2", "cos(180 deg)", "cos(60 deg)", "sin(0.2)^2 + cos(0.2)^2"],
			seealso: ["acos", "sin", "tan"]
		}
	}, function(e, t) {
		e.exports = {
			name: "cosh",
			category: "Trigonometry",
			syntax: ["cosh(x)"],
			description: "Compute the hyperbolic cosine of x in radians.",
			examples: ["cosh(0.5)"],
			seealso: ["sinh", "tanh", "coth"]
		}
	}, function(e, t) {
		e.exports = {
			name: "cot",
			category: "Trigonometry",
			syntax: ["cot(x)"],
			description: "Compute the cotangent of x in radians. Defined as 1/tan(x)",
			examples: ["cot(2)", "1 / tan(2)"],
			seealso: ["sec", "csc", "tan"]
		}
	}, function(e, t) {
		e.exports = {
			name: "coth",
			category: "Trigonometry",
			syntax: ["coth(x)"],
			description: "Compute the hyperbolic cotangent of x in radians.",
			examples: ["coth(2)", "1 / tanh(2)"],
			seealso: ["sech", "csch", "tanh"]
		}
	}, function(e, t) {
		e.exports = {
			name: "csc",
			category: "Trigonometry",
			syntax: ["csc(x)"],
			description: "Compute the cosecant of x in radians. Defined as 1/sin(x)",
			examples: ["csc(2)", "1 / sin(2)"],
			seealso: ["sec", "cot", "sin"]
		}
	}, function(e, t) {
		e.exports = {
			name: "csch",
			category: "Trigonometry",
			syntax: ["csch(x)"],
			description: "Compute the hyperbolic cosecant of x in radians. Defined as 1/sinh(x)",
			examples: ["csch(2)", "1 / sinh(2)"],
			seealso: ["sech", "coth", "sinh"]
		}
	}, function(e, t) {
		e.exports = {
			name: "sec",
			category: "Trigonometry",
			syntax: ["sec(x)"],
			description: "Compute the secant of x in radians. Defined as 1/cos(x)",
			examples: ["sec(2)", "1 / cos(2)"],
			seealso: ["cot", "csc", "cos"]
		}
	}, function(e, t) {
		e.exports = {
			name: "sech",
			category: "Trigonometry",
			syntax: ["sech(x)"],
			description: "Compute the hyperbolic secant of x in radians. Defined as 1/cosh(x)",
			examples: ["sech(2)", "1 / cosh(2)"],
			seealso: ["coth", "csch", "cosh"]
		}
	}, function(e, t) {
		e.exports = {
			name: "sin",
			category: "Trigonometry",
			syntax: ["sin(x)"],
			description: "Compute the sine of x in radians.",
			examples: ["sin(2)", "sin(pi / 4) ^ 2", "sin(90 deg)", "sin(30 deg)", "sin(0.2)^2 + cos(0.2)^2"],
			seealso: ["asin", "cos", "tan"]
		}
	}, function(e, t) {
		e.exports = {
			name: "sinh",
			category: "Trigonometry",
			syntax: ["sinh(x)"],
			description: "Compute the hyperbolic sine of x in radians.",
			examples: ["sinh(0.5)"],
			seealso: ["cosh", "tanh"]
		}
	}, function(e, t) {
		e.exports = {
			name: "tan",
			category: "Trigonometry",
			syntax: ["tan(x)"],
			description: "Compute the tangent of x in radians.",
			examples: ["tan(0.5)", "sin(0.5) / cos(0.5)", "tan(pi / 4)", "tan(45 deg)"],
			seealso: ["atan", "sin", "cos"]
		}
	}, function(e, t) {
		e.exports = {
			name: "tanh",
			category: "Trigonometry",
			syntax: ["tanh(x)"],
			description: "Compute the hyperbolic tangent of x in radians.",
			examples: ["tanh(0.5)", "sinh(0.5) / cosh(0.5)"],
			seealso: ["sinh", "cosh"]
		}
	}, function(e, t) {
		e.exports = {
			name: "to",
			category: "Units",
			syntax: ["x to unit", "to(x, unit)"],
			description: "Change the unit of a value.",
			examples: ["5 inch to cm", "3.2kg to g", "16 bytes in bits"],
			seealso: []
		}
	}, function(e, t) {
		e.exports = {
			name: "clone",
			category: "Utils",
			syntax: ["clone(x)"],
			description: "Clone a variable. Creates a copy of primitive variables,and a deep copy of matrices",
			examples: ["clone(3.5)", "clone(2 - 4i)", "clone(45 deg)", "clone([1, 2; 3, 4])", 'clone("hello world")'],
			seealso: []
		}
	}, function(e, t) {
		e.exports = {
			name: "map",
			category: "Utils",
			syntax: ["map(x, callback)"],
			description: "Create a new matrix or array with the results of the callback function executed on each entry of the matrix/array.",
			examples: ["map([1, 2, 3], function(val) { return value * value })"],
			seealso: ["filter", "forEach"]
		}
	}, function(e, t) {
		e.exports = {
			name: "partitionSelect",
			category: "Utils",
			syntax: ["partitionSelect(x, k)", "partitionSelect(x, k, compare)"],
			description: "Partition-based selection of an array or 1D matrix. Will find the kth smallest value, and mutates the input array. Uses Quickselect.",
			examples: ["partitionSelect([5, 10, 1], 2)", 'partitionSelect(["C", "B", "A", "D"], 1)'],
			seealso: ["sort"]
		}
	}, function(e, t) {
		e.exports = {
			name: "filter",
			category: "Utils",
			syntax: ["filter(x, test)"],
			description: "Filter items in a matrix.",
			examples: ["isPositive(x) = x > 0", "filter([6, -2, -1, 4, 3], isPositive)", "filter([6, -2, 0, 1, 0], x != 0)"],
			seealso: ["sort", "map", "forEach"]
		}
	}, function(e, t) {
		e.exports = {
			name: "forEach",
			category: "Utils",
			syntax: ["forEach(x, callback)"],
			description: "Iterates over all elements of a matrix/array, and executes the given callback function.",
			examples: ["forEach([1, 2, 3], function(val) { console.log(val) })"],
			seealso: ["map", "sort", "filter"]
		}
	}, function(e, t) {
		e.exports = {
			name: "format",
			category: "Utils",
			syntax: ["format(value)", "format(value, precision)"],
			description: "Format a value of any type as string.",
			examples: ["format(2.3)", "format(3 - 4i)", "format([])", "format(pi, 3)"],
			seealso: ["print"]
		}
	}, function(e, t) {
		e.exports = {
			name: "isInteger",
			category: "Utils",
			syntax: ["isInteger(x)"],
			description: "Test whether a value is an integer number.",
			examples: ["isInteger(2)", "isInteger(3.5)", "isInteger([3, 0.5, -2])"],
			seealso: ["isNegative", "isNumeric", "isPositive", "isZero"]
		}
	}, function(e, t) {
		e.exports = {
			name: "isNegative",
			category: "Utils",
			syntax: ["isNegative(x)"],
			description: "Test whether a value is negative: smaller than zero.",
			examples: ["isNegative(2)", "isNegative(0)", "isNegative(-4)", "isNegative([3, 0.5, -2])"],
			seealso: ["isInteger", "isNumeric", "isPositive", "isZero"]
		}
	}, function(e, t) {
		e.exports = {
			name: "isNumeric",
			category: "Utils",
			syntax: ["isNumeric(x)"],
			description: "Test whether a value is a numeric value. Returns true when the input is a number, BigNumber, Fraction, or boolean.",
			examples: ["isNumeric(2)", "isNumeric(0)", "isNumeric(bignumber(500))", "isNumeric(fraction(0.125))", 'isNumeric("3")', "isNumeric(2 + 3i)", 'isNumeric([2.3, "foo", false])'],
			seealso: ["isInteger", "isZero", "isNegative", "isPositive"]
		}
	}, function(e, t) {
		e.exports = {
			name: "isPositive",
			category: "Utils",
			syntax: ["isPositive(x)"],
			description: "Test whether a value is positive: larger than zero.",
			examples: ["isPositive(2)", "isPositive(0)", "isPositive(-4)", "isPositive([3, 0.5, -2])"],
			seealso: ["isInteger", "isNumeric", "isNegative", "isZero"]
		}
	}, function(e, t) {
		e.exports = {
			name: "isZero",
			category: "Utils",
			syntax: ["isZero(x)"],
			description: "Test whether a value is zero.",
			examples: ["isZero(2)", "isZero(0)", "isZero(-4)", "isZero([3, 0, -2, 0])"],
			seealso: ["isInteger", "isNumeric", "isNegative", "isPositive"]
		}
	}, function(e, t) {
		e.exports = {
			name: "import",
			category: "Utils",
			syntax: ["import(string)"],
			description: "Import functions from a file.",
			examples: ['import("numbers")', 'import("./mylib.js")'],
			seealso: []
		}
	}, function(e, t) {
		e.exports = {
			name: "sort",
			category: "Utils",
			syntax: ["sort(x)", "sort(x, compare)"],
			description: 'Sort the items in a matrix. Compare can be a string "asc" or "desc", or a custom sort function.',
			examples: ["sort([5, 10, 1])", 'sort(["C", "B", "A", "D"])', "sortByLength(a, b) = size(a)[1] - size(b)[1]", 'sort(["Langdon", "Tom", "Sara"], sortByLength)'],
			seealso: ["map", "filter", "forEach"]
		}
	}, function(e, t) {
		e.exports = {
			name: "typeof",
			category: "Utils",
			syntax: ["typeof(x)"],
			description: "Get the type of a variable.",
			examples: ["typeof(3.5)", "typeof(2 - 4i)", "typeof(45 deg)", 'typeof("hello world")'],
			seealso: []
		}
	}, function(e, t, r) {
		e.exports = [r(268), r(286), r(287), r(288), r(289)]
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(269));
			return a("compile", {
				string: function(e) {
					return o(e).compile()
				},
				"Array | Matrix": function(e) {
					return i(e, function(e) {
						return o(e).compile()
					})
				}
			})
		}
		var i = r(19);
		t.name = "compile", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			function s(t, r) {
				if (1 != arguments.length && 2 != arguments.length) throw new i("parse", arguments.length, 1, 2);
				if (he = r && r.nodes ? r.nodes : {}, "string" == typeof t) return ge = t, x();
				if (Array.isArray(t) || t instanceof e.Matrix) return a(t, function(e) {
					if ("string" != typeof e) throw new TypeError("String expected");
					return ge = e, x()
				});
				throw new TypeError("String or matrix expected")
			}

			function u() {
				ve = 0, de = ge.charAt(0), be = 0, we = null
			}

			function c() {
				ve++, de = ge.charAt(ve)
			}

			function f() {
				return ge.charAt(ve + 1)
			}

			function l() {
				return ge.charAt(ve + 2)
			}

			function p() {
				for (xe = le.NULL, ye = "";
					" " == de || "	" == de || "\n" == de && be;) c();
				if ("#" == de)
					for (;
						"\n" != de && "" != de;) c();
				if ("" == de) return void(xe = le.DELIMITER);
				if ("\n" == de && !be) return xe = le.DELIMITER, ye = de, void c();
				var e = de + f(),
					t = e + l();
				if (3 == t.length && pe[t]) return xe = le.DELIMITER, ye = t, c(), c(), void c();
				if (2 == e.length && pe[e]) return xe = le.DELIMITER, ye = e, c(), void c();
				if (pe[de]) return xe = le.DELIMITER, ye = de, void c();
				if (!d(de)) {
					if (v()) {
						for (; v() || y(de);) ye += de, c();
						return void(xe = me[ye] ? le.DELIMITER : le.SYMBOL)
					}
					for (xe = le.UNKNOWN;
						"" != de;) ye += de, c();
					throw X('Syntax error in part "' + ye + '"')
				}
				if (xe = le.NUMBER, "." == de) ye += de, c(), y(de) || (xe = le.UNKNOWN);
				else {
					for (; y(de);) ye += de, c();
					"." == de && (ye += de, c())
				}
				for (; y(de);) ye += de, c();
				if (e = f(), ("E" == de || "e" == de) && (y(e) || "-" == e || "+" == e))
					for (ye += de, c(), ("+" == de || "-" == de) && (ye += de, c()), y(de) || (xe = le.UNKNOWN); y(de);) ye += de, c()
			}

			function m() {
				do p(); while ("\n" == ye)
			}

			function h() {
				be++
			}

			function g() {
				be--
			}

			function v() {
				var e = ge.charAt(ve - 1),
					t = ge.charAt(ve + 1),
					r = function(e) {
						return /^[a-zA-Z_\u00C0-\u02AF\u0370-\u03FF]$/.test(e)
					},
					n = function(e, t) {
						return /^[\uD835]$/.test(e) && /^[\uDC00-\uDFFF]$/.test(t) && /^[^\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]$/.test(t)
					};
				return r(de) || n(de, t) || n(e, de)
			}

			function d(e) {
				return e >= "0" && "9" >= e || "." == e
			}

			function y(e) {
				return e >= "0" && "9" >= e
			}

			function x() {
				u(), p();
				var e = b();
				if ("" != ye) throw xe == le.DELIMITER ? J("Unexpected operator " + ye) : X('Unexpected part "' + ye + '"');
				return e
			}

			function b() {
				var e, t, r = [];
				if ("" == ye) return new re("undefined", "undefined");
				for ("\n" != ye && ";" != ye && (e = w());
					"\n" == ye || ";" == ye;) 0 == r.length && e && (t = ";" != ye, r.push({
					node: e,
					visible: t
				})), p(), "\n" != ye && ";" != ye && "" != ye && (e = w(), t = ";" != ye, r.push({
					node: e,
					visible: t
				}));
				return r.length > 0 ? new ee(r) : e
			}

			function w() {
				if (xe == le.SYMBOL && "function" == ye) throw X('Deprecated keyword "function". Functions can now be assigned without it, like "f(x) = x^2".');
				return N()
			}

			function N() {
				var e, t, r, n, i = E();
				if ("=" == ye) {
					if (i && i.isSymbolNode) return e = i.name, m(), r = N(), new K(e, r);
					if (i && i.isIndexNode) return m(), r = N(), new fe(i, r);
					if (i && i.isFunctionNode && (n = !0, t = [], e = i.name, i.args.forEach(function(e, r) {
							e && e.isSymbolNode ? t[r] = e.name : n = !1
						}), n)) return m(), r = N(), new ne(e, t, r);
					throw X("Invalid left hand side of assignment operator =")
				}
				return i
			}

			function E() {
				for (var e = M();
					"?" == ye;) {
					var t = we;
					we = be, m();
					var r = e,
						n = M();
					if (":" != ye) throw X("False part of conditional expression expected");
					we = null, m();
					var i = E();
					e = new te(r, n, i), we = t
				}
				return e
			}

			function M() {
				for (var e = A();
					"or" == ye;) m(), e = new ae("or", "or", [e, A()]);
				return e
			}

			function A() {
				for (var e = _();
					"xor" == ye;) m(), e = new ae("xor", "xor", [e, _()]);
				return e
			}

			function _() {
				for (var e = O();
					"and" == ye;) m(), e = new ae("and", "and", [e, O()]);
				return e
			}

			function O() {
				for (var e = T();
					"|" == ye;) m(), e = new ae("|", "bitOr", [e, T()]);
				return e
			}

			function T() {
				for (var e = C();
					"^|" == ye;) m(), e = new ae("^|", "bitXor", [e, C()]);
				return e
			}

			function C() {
				for (var e = S();
					"&" == ye;) m(), e = new ae("&", "bitAnd", [e, S()]);
				return e
			}

			function S() {
				var e, t, r, n, i;
				for (e = z(), t = {
						"==": "equal",
						"!=": "unequal",
						"<": "smaller",
						">": "larger",
						"<=": "smallerEq",
						">=": "largerEq"
					}; ye in t;) r = ye, n = t[r], m(), i = [e, z()], e = new ae(r, n, i);
				return e
			}

			function z() {
				var e, t, r, n, i;
				for (e = B(), t = {
						"<<": "leftShift",
						">>": "rightArithShift",
						">>>": "rightLogShift"
					}; ye in t;) r = ye, n = t[r], m(), i = [e, B()], e = new ae(r, n, i);
				return e
			}

			function B() {
				var e, t, r, n, i;
				for (e = k(), t = {
						to: "to",
						"in": "to"
					}; ye in t;) r = ye, n = t[r], m(), i = [e, k()], e = new ae(r, n, i);
				return e
			}

			function k() {
				var e, t = [];
				if (e = ":" == ye ? new re("1", "number") : I(), ":" == ye && we !== be) {
					for (t.push(e);
						":" == ye && t.length < 3;) m(), ")" == ye || "]" == ye || "," == ye || "" == ye ? t.push(new ce("end")) : t.push(I());
					e = 3 == t.length ? new ue(t[0], t[2], t[1]) : new ue(t[0], t[1])
				}
				return e
			}

			function I() {
				var e, t, r, n, i;
				for (e = R(), t = {
						"+": "add",
						"-": "subtract"
					}; ye in t;) r = ye, n = t[r], m(), i = [e, R()], e = new ae(r, n, i);
				return e
			}

			function R() {
				var e, t, r, n, i;
				for (e = P(), t = e, r = {
						"*": "multiply",
						".*": "dotMultiply",
						"/": "divide",
						"./": "dotDivide",
						"%": "mod",
						mod: "mod"
					};;)
					if (ye in r) n = ye, i = r[n], m(), t = P(), e = new ae(n, i, [e, t]);
					else {
						if (!(xe == le.SYMBOL || "in" == ye && e && e.isConstantNode || xe == le.NUMBER && !t.isConstantNode || "(" == ye || "[" == ye)) break;
						t = P(), e = new ae("*", "multiply", [e, t])
					}
				return e
			}

			function P() {
				var e, t, r = {
					"-": "unaryMinus",
					"+": "unaryPlus",
					"~": "bitNot",
					not: "not"
				}[ye];
				return r ? (e = ye, m(), t = [P()], new ae(e, r, t)) : U()
			}

			function U() {
				var e, t, r, n;
				return e = q(), ("^" == ye || ".^" == ye) && (t = ye, r = "^" == t ? "pow" : "dotPow", m(), n = [e, P()], e = new ae(t, r, n)), e
			}

			function q() {
				var e, t, r, n, i;
				for (e = L(), t = {
						"!": "factorial",
						"'": "transpose"
					}; ye in t;) r = ye, n = t[r], p(), i = [e], e = new ae(r, n, i);
				return e
			}

			function L() {
				var e, t = [];
				if (xe == le.SYMBOL && he[ye]) {
					if (e = he[ye], p(), "(" == ye) {
						if (t = [], h(), p(), ")" != ye)
							for (t.push(E());
								"," == ye;) p(), t.push(E());
						if (")" != ye) throw X("Parenthesis ) expected");
						g(), p()
					}
					return new e(t)
				}
				return F()
			}

			function F() {
				var e, t;
				return xe == le.SYMBOL || xe == le.DELIMITER && ye in me ? (t = ye, p(), e = D(t), e = $(e)) : j()
			}

			function D(e) {
				var t;
				if ("(" == ye) {
					if (t = [], h(), p(), ")" != ye)
						for (t.push(E());
							"," == ye;) p(), t.push(E());
					if (")" != ye) throw X("Parenthesis ) expected");
					return g(), p(), new se(e, t)
				}
				return new ce(e)
			}

			function $(e) {
				for (var t;
					"[" == ye;) {
					if (t = [], h(), p(), "]" != ye)
						for (t.push(E());
							"," == ye;) p(), t.push(E());
					if ("]" != ye) throw X("Parenthesis ] expected");
					g(), p(), e = new ie(e, t)
				}
				return e
			}

			function j() {
				var e, t, r;
				if ('"' == ye) {
					for (t = "", r = "";
						"" != de && ('"' != de || "\\" == r);) t += de, r = de, c();
					if (p(), '"' != ye) throw X('End of string " expected');
					return p(), e = new re(t, "string"), e = $(e)
				}
				return G()
			}

			function G() {
				var e, t, r, n;
				if ("[" == ye) {
					if (h(), p(), "]" != ye) {
						var i = H();
						if (";" == ye) {
							for (r = 1, t = [i];
								";" == ye;) p(), t[r] = H(), r++;
							if ("]" != ye) throw X("End of matrix ] expected");
							g(), p(), n = t[0].nodes.length;
							for (var a = 1; r > a; a++)
								if (t[a].nodes.length != n) throw J("Column dimensions mismatch (" + t[a].nodes.length + " != " + n + ")");
							e = new Q(t)
						} else {
							if ("]" != ye) throw X("End of matrix ] expected");
							g(), p(), e = i
						}
					} else g(), p(), e = new Q([]);
					return e
				}
				return V()
			}

			function H() {
				for (var e = [N()], t = 1;
					"," == ye;) p(), e[t] = N(), t++;
				return new Q(e)
			}

			function V() {
				var e;
				return xe == le.NUMBER ? (e = ye, p(), new re(e, "number")) : Z()
			}

			function Z() {
				var e;
				if ("(" == ye) {
					if (h(), p(), e = N(), ")" != ye) throw X("Parenthesis ) expected");
					return g(), p(), new oe(e)
				}
				return Y()
			}

			function Y() {
				throw X("" == ye ? "Unexpected end of expression" : "Value expected")
			}

			function W() {
				return ve - ye.length + 1
			}

			function X(e) {
				var t = W(),
					r = new SyntaxError(e + " (char " + t + ")");
				return r["char"] = t, r
			}

			function J(e) {
				var t = W(),
					r = new Error(e + " (char " + t + ")");
				return r["char"] = t, r
			}
			var Q = n(r(270)),
				K = n(r(273)),
				ee = n(r(275)),
				te = n(r(276)),
				re = n(r(277)),
				ne = n(r(278)),
				ie = n(r(279)),
				ae = n(r(282)),
				oe = n(r(284)),
				se = n(r(283)),
				ue = n(r(280)),
				ce = n(r(281)),
				fe = n(r(285)),
				le = {
					NULL: 0,
					DELIMITER: 1,
					NUMBER: 2,
					SYMBOL: 3,
					UNKNOWN: 4
				},
				pe = {
					",": !0,
					"(": !0,
					")": !0,
					"[": !0,
					"]": !0,
					'"': !0,
					";": !0,
					"+": !0,
					"-": !0,
					"*": !0,
					".*": !0,
					"/": !0,
					"./": !0,
					"%": !0,
					"^": !0,
					".^": !0,
					"~": !0,
					"!": !0,
					"&": !0,
					"|": !0,
					"^|": !0,
					"'": !0,
					"=": !0,
					":": !0,
					"?": !0,
					"==": !0,
					"!=": !0,
					"<": !0,
					">": !0,
					"<=": !0,
					">=": !0,
					"<<": !0,
					">>": !0,
					">>>": !0
				},
				me = {
					mod: !0,
					to: !0,
					"in": !0,
					and: !0,
					xor: !0,
					or: !0,
					not: !0
				},
				he = {},
				ge = "",
				ve = 0,
				de = "",
				ye = "",
				xe = le.NULL,
				be = 0,
				we = null;
			return s
		}
		var i = r(11),
			a = r(19);
		t.name = "parse", t.path = "expression", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			function o(e) {
				if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator");
				if (this.nodes = e || [], !Array.isArray(this.nodes) || !this.nodes.every(function(e) {
						return e && e.isNode
					})) throw new TypeError("Array containing Nodes expected")
			}
			var s = n(r(271));
			return o.prototype = new s, o.prototype.type = "ArrayNode", o.prototype.isArrayNode = !0, o.prototype._compile = function(e, t) {
				var r = "array" !== e.math.config().matrix,
					n = this.nodes.map(function(r) {
						return r._compile(e, t)
					});
				return (r ? "math.matrix([" : "[") + n.join(",") + (r ? "])" : "]")
			}, o.prototype.forEach = function(e) {
				for (var t = 0; t < this.nodes.length; t++) {
					var r = this.nodes[t];
					e(r, "nodes[" + t + "]", this)
				}
			}, o.prototype.map = function(e) {
				for (var t = [], r = 0; r < this.nodes.length; r++) t[r] = this._ifNode(e(this.nodes[r], "nodes[" + r + "]", this));
				return new o(t)
			}, o.prototype.clone = function() {
				return new o(this.nodes.slice(0))
			}, o.prototype._toString = function(e) {
				return i.format(this.nodes)
			}, o.prototype._toTex = function(e) {
				var t = "\\begin{bmatrix}";
				return this.nodes.forEach(function(r) {
					t += r.nodes ? r.nodes.map(function(t) {
						return t.toTex(e)
					}).join("&") : r.toTex(e), t += "\\\\"
				}), t += "\\end{bmatrix}"
			}, o
		}
		var i = r(23);
		t.name = "ArrayNode", t.path = "expression.node", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n, a) {
			function o() {
				if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator")
			}

			function s(e) {
				for (var t in e)
					if (e.hasOwnProperty(t) && t in i) throw new Error('Scope contains an illegal symbol, "' + t + '" is a reserved keyword')
			}
			return o.prototype.eval = function(e) {
				return this.compile().eval(e)
			}, o.prototype.type = "Node", o.prototype.isNode = !0, o.prototype.compile = function() {
				if (arguments.length > 0) throw new Error("Calling compile(math) is deprecated. Call the function as compile() instead.");
				var e = {
						math: a.expression.transform,
						args: {},
						_validateScope: s
					},
					t = {},
					r = this._compile(e, t),
					n = Object.keys(e).map(function(e) {
						return "    var " + e + ' = defs["' + e + '"];'
					}),
					i = n.join(" ") + 'return {  "eval": function (scope) {    if (scope) _validateScope(scope);    scope = scope || {};    return ' + r + ";  }};",
					o = new Function("defs", i);
				return o(e)
			}, o.prototype._compile = function(e, t) {
				throw new Error("Cannot compile a Node interface")
			}, o.prototype.forEach = function(e) {
				throw new Error("Cannot run forEach on a Node interface")
			}, o.prototype.map = function(e) {
				throw new Error("Cannot run map on a Node interface")
			}, o.prototype._ifNode = function(e) {
				if (!e || !e.isNode) throw new TypeError("Callback function must return a Node");
				return e
			}, o.prototype.traverse = function(e) {
				function t(e, r) {
					e.forEach(function(e, n, i) {
						r(e, n, i), t(e, r)
					})
				}
				e(this, null, null), t(this, e)
			}, o.prototype.transform = function(e) {
				function t(e, r) {
					return e.map(function(e, n, i) {
						var a = r(e, n, i);
						return t(a, r)
					})
				}
				var r = e(this, null, null);
				return t(r, e)
			}, o.prototype.filter = function(e) {
				var t = [];
				return this.traverse(function(r, n, i) {
					e(r, n, i) && t.push(r)
				}), t
			}, o.prototype.find = function() {
				throw new Error("Function Node.find is deprecated. Use Node.filter instead.")
			}, o.prototype.match = function() {
				throw new Error("Function Node.match is deprecated. See functions Node.filter, Node.transform, Node.traverse.")
			}, o.prototype.clone = function() {
				throw new Error("Cannot clone a Node interface")
			}, o.prototype.toString = function(e) {
				var t;
				if (e && "object" == typeof e) switch (typeof e.handler) {
					case "object":
					case "undefined":
						break;
					case "function":
						t = e.handler(this, e);
						break;
					default:
						throw new TypeError("Object or function expected as callback")
				}
				return "undefined" != typeof t ? t : this._toString(e)
			}, o.prototype._toString = function() {
				throw new Error("_toString not implemented for " + this.type)
			}, o.prototype.toTex = function(e) {
				var t;
				if (e && "object" == typeof e) switch (typeof e.handler) {
					case "object":
					case "undefined":
						break;
					case "function":
						t = e.handler(this, e);
						break;
					default:
						throw new TypeError("Object or function expected as callback")
				}
				return "undefined" != typeof t ? t : this._toTex(e)
			}, o.prototype._toTex = function(e) {
				throw new Error("_toTex not implemented for " + this.type)
			}, o.prototype.getIdentifier = function() {
				return this.type
			}, o.prototype.getContent = function() {
				return this
			}, o
		}
		var i = r(272);
		r(3).extend;
		t.name = "Node", t.path = "expression.node", t.math = !0, t.factory = n
	}, function(e, t) {
		"use strict";
		e.exports = {
			end: !0
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			function o(e, t) {
				if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator");
				if ("string" != typeof e) throw new TypeError('String expected for parameter "name"');
				if (!t || !t.isNode) throw new TypeError('Node expected for parameter "expr"');
				if (e in c) throw new Error('Illegal symbol name, "' + e + '" is a reserved keyword');
				this.name = e, this.expr = t
			}

			function s(e, t) {
				var r = f.getPrecedence(e, t),
					n = f.getPrecedence(e.expr, t);
				return "all" === t || null !== n && r >= n
			}
			var u = n(r(271)),
				c = (n(r(270)), r(272)),
				f = r(274);
			return o.prototype = new u, o.prototype.type = "AssignmentNode", o.prototype.isAssignmentNode = !0, o.prototype._compile = function(e, t) {
				return 'scope["' + this.name + '"] = ' + this.expr._compile(e, t)
			}, o.prototype.forEach = function(e) {
				e(this.expr, "expr", this)
			}, o.prototype.map = function(e) {
				return new o(this.name, this._ifNode(e(this.expr, "expr", this)))
			}, o.prototype.clone = function() {
				return new o(this.name, this.expr)
			}, o.prototype._toString = function(e) {
				var t = e && e.parenthesis ? e.parenthesis : "keep",
					r = this.expr.toString(e);
				return s(this, t) && (r = "(" + r + ")"), this.name + " = " + r
			}, o.prototype._toTex = function(e) {
				var t = e && e.parenthesis ? e.parenthesis : "keep",
					r = this.expr.toTex(e);
				return s(this, t) && (r = "\\left(" + r + "\\right)"), i.toSymbol(this.name) + ":=" + r
			}, o
		}
		var i = r(29);
		t.name = "AssignmentNode", t.path = "expression.node", t.factory = n
	}, function(e, t) {
		"use strict";

		function r(e, t) {
			var r = e;
			"keep" !== t && (r = e.getContent());
			for (var n = r.getIdentifier(), i = 0; i < a.length; i++)
				if (n in a[i]) return i;
			return null
		}

		function n(e, t) {
			var n = e;
			"keep" !== t && (n = e.getContent());
			var i = n.getIdentifier(),
				o = r(n, t);
			if (null === o) return null;
			var s = a[o][i];
			if (s.hasOwnProperty("associativity")) {
				if ("left" === s.associativity) return "left";
				if ("right" === s.associativity) return "right";
				throw Error("'" + i + "' has the invalid associativity '" + s.associativity + "'.")
			}
			return null
		}

		function i(e, t, n) {
			var i = e,
				o = t;
			if ("keep" !== n) var i = e.getContent(),
				o = t.getContent();
			var s = i.getIdentifier(),
				u = o.getIdentifier(),
				c = r(i, n);
			if (null === c) return null;
			var f = a[c][s];
			if (f.hasOwnProperty("associativeWith") && f.associativeWith instanceof Array) {
				for (var l = 0; l < f.associativeWith.length; l++)
					if (f.associativeWith[l] === u) return !0;
				return !1
			}
			return null
		}
		var a = [{
			AssignmentNode: {},
			FunctionAssignmentNode: {}
		}, {
			ConditionalNode: {
				latexLeftParens: !1,
				latexRightParens: !1,
				latexParens: !1
			}
		}, {
			"OperatorNode:or": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			"OperatorNode:xor": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			"OperatorNode:and": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			"OperatorNode:bitOr": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			"OperatorNode:bitXor": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			"OperatorNode:bitAnd": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			"OperatorNode:equal": {
				associativity: "left",
				associativeWith: []
			},
			"OperatorNode:unequal": {
				associativity: "left",
				associativeWith: []
			},
			"OperatorNode:smaller": {
				associativity: "left",
				associativeWith: []
			},
			"OperatorNode:larger": {
				associativity: "left",
				associativeWith: []
			},
			"OperatorNode:smallerEq": {
				associativity: "left",
				associativeWith: []
			},
			"OperatorNode:largerEq": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			"OperatorNode:leftShift": {
				associativity: "left",
				associativeWith: []
			},
			"OperatorNode:rightArithShift": {
				associativity: "left",
				associativeWith: []
			},
			"OperatorNode:rightLogShift": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			"OperatorNode:to": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			RangeNode: {}
		}, {
			"OperatorNode:add": {
				associativity: "left",
				associativeWith: ["OperatorNode:add", "OperatorNode:subtract"]
			},
			"OperatorNode:subtract": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			"OperatorNode:multiply": {
				associativity: "left",
				associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "Operator:dotMultiply", "Operator:dotDivide"]
			},
			"OperatorNode:divide": {
				associativity: "left",
				associativeWith: [],
				latexLeftParens: !1,
				latexRightParens: !1,
				latexParens: !1
			},
			"OperatorNode:dotMultiply": {
				associativity: "left",
				associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "OperatorNode:dotMultiply", "OperatorNode:doDivide"]
			},
			"OperatorNode:dotDivide": {
				associativity: "left",
				associativeWith: []
			},
			"OperatorNode:mod": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			"OperatorNode:unaryPlus": {
				associativity: "right"
			},
			"OperatorNode:unaryMinus": {
				associativity: "right"
			},
			"OperatorNode:bitNot": {
				associativity: "right"
			},
			"OperatorNode:not": {
				associativity: "right"
			}
		}, {
			"OperatorNode:pow": {
				associativity: "right",
				associativeWith: [],
				latexRightParens: !1
			},
			"OperatorNode:dotPow": {
				associativity: "right",
				associativeWith: []
			}
		}, {
			"OperatorNode:factorial": {
				associativity: "left"
			}
		}, {
			"OperatorNode:transpose": {
				associativity: "left"
			}
		}];
		e.exports.properties = a, e.exports.getPrecedence = r, e.exports.getAssociativity = n, e.exports.isAssociativeWith = i
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			function a(e) {
				if (!(this instanceof a)) throw new SyntaxError("Constructor must be called with the new operator");
				if (!Array.isArray(e)) throw new Error("Array expected");
				this.blocks = e.map(function(e) {
					var t = e && e.node,
						r = e && void 0 !== e.visible ? e.visible : !0;
					if (!t || !t.isNode) throw new TypeError('Property "node" must be a Node');
					if ("boolean" != typeof r) throw new TypeError('Property "visible" must be a boolean');
					return {
						node: t,
						visible: r
					}
				})
			}
			var o = n(r(271)),
				s = n(r(70));
			return a.prototype = new o, a.prototype.type = "BlockNode", a.prototype.isBlockNode = !0, a.prototype._compile = function(e, t) {
				e.ResultSet = s;
				var r = this.blocks.map(function(r) {
					var n = r.node._compile(e, t);
					return r.visible ? "results.push(" + n + ");" : n + ";"
				});
				return "(function () {var results = [];" + r.join("") + "return new ResultSet(results);})()"
			}, a.prototype.forEach = function(e) {
				for (var t = 0; t < this.blocks.length; t++) e(this.blocks[t].node, "blocks[" + t + "].node", this)
			}, a.prototype.map = function(e) {
				for (var t = [], r = 0; r < this.blocks.length; r++) {
					var n = this.blocks[r],
						i = this._ifNode(e(n.node, "blocks[" + r + "].node", this));
					t[r] = {
						node: i,
						visible: n.visible
					}
				}
				return new a(t)
			}, a.prototype.clone = function() {
				var e = this.blocks.map(function(e) {
					return {
						node: e.node,
						visible: e.visible
					}
				});
				return new a(e)
			}, a.prototype._toString = function(e) {
				return this.blocks.map(function(t) {
					return t.node.toString(e) + (t.visible ? "" : ";")
				}).join("\n")
			}, a.prototype._toTex = function(e) {
				return this.blocks.map(function(t) {
					return t.node.toTex(e) + (t.visible ? "" : ";")
				}).join("\\;\\;\n")
			}, a
		}
		t.name = "BlockNode", t.path = "expression.node", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			function o(e, t, r) {
				if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator");
				if (!e || !e.isNode) throw new TypeError("Parameter condition must be a Node");
				if (!t || !t.isNode) throw new TypeError("Parameter trueExpr must be a Node");
				if (!r || !r.isNode) throw new TypeError("Parameter falseExpr must be a Node");
				this.condition = e, this.trueExpr = t, this.falseExpr = r
			}
			var s = n(r(271));
			return o.prototype = new s, o.prototype.type = "ConditionalNode", o.prototype.isConditionalNode = !0, o.prototype._compile = function(e, t) {
				return e.testCondition = function(t) {
					if ("number" == typeof t || "boolean" == typeof t || "string" == typeof t) return t ? !0 : !1;
					if (t) {
						if (t.isBigNumber === !0) return t.isZero() ? !1 : !0;
						if (t.isComplex === !0) return t.re || t.im ? !0 : !1;
						if (t.isUnit === !0) return t.value ? !0 : !1
					}
					if (null === t || void 0 === t) return !1;
					throw new TypeError('Unsupported type of condition "' + e.math["typeof"](t) + '"')
				}, "testCondition(" + this.condition._compile(e, t) + ") ? ( " + this.trueExpr._compile(e, t) + ") : ( " + this.falseExpr._compile(e, t) + ")"
			}, o.prototype.forEach = function(e) {
				e(this.condition, "condition", this), e(this.trueExpr, "trueExpr", this), e(this.falseExpr, "falseExpr", this)
			}, o.prototype.map = function(e) {
				return new o(this._ifNode(e(this.condition, "condition", this)), this._ifNode(e(this.trueExpr, "trueExpr", this)), this._ifNode(e(this.falseExpr, "falseExpr", this)))
			}, o.prototype.clone = function() {
				return new o(this.condition, this.trueExpr, this.falseExpr)
			}, o.prototype._toString = function(e) {
				var t = e && e.parenthesis ? e.parenthesis : "keep",
					r = i.getPrecedence(this, t),
					n = this.condition.toString(e),
					a = i.getPrecedence(this.condition, t);
				("all" === t || "OperatorNode" === this.condition.type || null !== a && r >= a) && (n = "(" + n + ")");
				var o = this.trueExpr.toString(e),
					s = i.getPrecedence(this.trueExpr, t);
				("all" === t || "OperatorNode" === this.trueExpr.type || null !== s && r >= s) && (o = "(" + o + ")");
				var u = this.falseExpr.toString(e),
					c = i.getPrecedence(this.falseExpr, t);
				return ("all" === t || "OperatorNode" === this.falseExpr.type || null !== c && r >= c) && (u = "(" + u + ")"), n + " ? " + o + " : " + u
			}, o.prototype._toTex = function(e) {
				return "\\begin{cases} {" + this.trueExpr.toTex(e) + "}, &\\quad{\\text{if }\\;" + this.condition.toTex(e) + "}\\\\{" + this.falseExpr.toTex(e) + "}, &\\quad{\\text{otherwise}}\\end{cases}"
			}, o
		}
		var i = (r(29), r(274));
		t.name = "ConditionalNode", t.path = "expression.node", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			function o(e, t) {
				if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator");
				if (t) {
					if ("string" != typeof t) throw new TypeError('String expected for parameter "valueType"');
					if ("string" != typeof e) throw new TypeError('String expected for parameter "value"');
					this.value = e, this.valueType = t
				} else this.value = e + "", this.valueType = i(e);
				if (!u[this.valueType]) throw new TypeError('Unsupported type of value "' + this.valueType + '"')
			}
			var s = n(r(271)),
				u = {
					number: !0,
					string: !0,
					"boolean": !0,
					undefined: !0,
					"null": !0
				};
			return o.prototype = new s, o.prototype.type = "ConstantNode", o.prototype.isConstantNode = !0, o.prototype._compile = function(e, t) {
				switch (this.valueType) {
					case "number":
						var r = e.math.config().number;
						return "bignumber" === r ? 'math.bignumber("' + this.value + '")' : "fraction" === r ? 'math.fraction("' + this.value + '")' : this.value.replace(/^(0*)[0-9]/, function(e, t) {
							return e.substring(t.length)
						});
					case "string":
						return '"' + this.value + '"';
					case "boolean":
						return this.value;
					case "undefined":
						return this.value;
					case "null":
						return this.value;
					default:
						throw new TypeError('Unsupported type of constant "' + this.valueType + '"')
				}
			}, o.prototype.forEach = function(e) {}, o.prototype.map = function(e) {
				return this.clone()
			}, o.prototype.clone = function() {
				return new o(this.value, this.valueType)
			}, o.prototype._toString = function(e) {
				switch (this.valueType) {
					case "string":
						return '"' + this.value + '"';
					default:
						return this.value
				}
			}, o.prototype._toTex = function(e) {
				var t, r = this.value;
				switch (this.valueType) {
					case "string":
						return '\\mathtt{"' + r + '"}';
					case "number":
						return t = r.toLowerCase().indexOf("e"), -1 !== t ? r.substring(0, t) + "\\cdot10^{" + r.substring(t + 1) + "}" : r;
					default:
						return r
				}
			}, o
		}
		var i = r(40).type;
		t.name = "ConstantNode", t.path = "expression.node", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e) {
			return "string" == typeof e
		}

		function i(e, t, i, u) {
			function c(e, t, r) {
				if (!(this instanceof c)) throw new SyntaxError("Constructor must be called with the new operator");
				if ("string" != typeof e) throw new TypeError('String expected for parameter "name"');
				if (!Array.isArray(t) || !t.every(n)) throw new TypeError('Array containing strings expected for parameter "params"');
				if (!r || !r.isNode) throw new TypeError('Node expected for parameter "expr"');
				if (e in a) throw new Error('Illegal function name, "' + e + '" is a reserved keyword');
				this.name = e, this.params = t, this.expr = r
			}

			function f(e, t) {
				var r = s.getPrecedence(e, t),
					n = s.getPrecedence(e.expr, t);
				return "all" === t || null !== n && r >= n
			}
			var l = i(r(271));
			return c.prototype = new l, c.prototype.type = "FunctionAssignmentNode", c.prototype.isFunctionAssignmentNode = !0, c.prototype._compile = function(e, t) {
				var r = Object.create(t);
				this.params.forEach(function(e) {
					r[e] = !0
				});
				var n = this.expr._compile(e, r);
				return 'scope["' + this.name + '"] =   (function () {    var fn = function ' + this.name + "(" + this.params.join(",") + ") {      if (arguments.length != " + this.params.length + ') {        throw new SyntaxError("Wrong number of arguments in function ' + this.name + ' (" + arguments.length + " provided, ' + this.params.length + ' expected)");      }      return ' + n + '    };    fn.syntax = "' + this.name + "(" + this.params.join(", ") + ')";    return fn;  })()'
			}, c.prototype.forEach = function(e) {
				e(this.expr, "expr", this)
			}, c.prototype.map = function(e) {
				var t = this._ifNode(e(this.expr, "expr", this));
				return new c(this.name, this.params.slice(0), t)
			}, c.prototype.clone = function() {
				return new c(this.name, this.params.slice(0), this.expr)
			}, c.prototype._toString = function(e) {
				var t = e && e.parenthesis ? e.parenthesis : "keep",
					r = this.expr.toString(e);
				return f(this, t) && (r = "(" + r + ")"), "function " + this.name + "(" + this.params.join(", ") + ") = " + r
			}, c.prototype._toTex = function(e) {
				var t = e && e.parenthesis ? e.parenthesis : "keep",
					r = this.expr.toTex(e);
				return f(this, t) && (r = "\\left(" + r + "\\right)"), "\\mathrm{" + this.name + "}\\left(" + this.params.map(o.toSymbol).join(",") + "\\right):=" + r
			}, c
		}
		var a = r(272),
			o = r(29),
			s = r(274);
		t.name = "FunctionAssignmentNode", t.path = "expression.node", t.factory = i
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			function a(e, t) {
				if (!(this instanceof a)) throw new SyntaxError("Constructor must be called with the new operator");
				if (!e || !e.isNode) throw new TypeError('Node expected for parameter "object"');
				if (!c(t) || !t.every(function(e) {
						return e && e.isNode
					})) throw new TypeError('Array containing Nodes expected for parameter "ranges"');
				this.object = e, this.ranges = t
			}

			function o(e) {
				switch (e.object.type) {
					case "ArrayNode":
					case "ConstantNode":
					case "SymbolNode":
					case "ParenthesisNode":
						return !1;
					default:
						return !0
				}
			}
			var s = n(r(271)),
				u = (n(r(280)), n(r(281)), n(r(65))),
				c = Array.isArray;
			return a.prototype = new s, a.prototype.type = "IndexNode", a.prototype.isIndexNode = !0, a.prototype._compile = function(e, t) {
				return this.compileSubset(e, t)
			}, a.prototype.compileSubset = function(e, t, r) {
				function n(e) {
					return e && e.isSymbolNode && "end" == e.name
				}
				var i = !1,
					a = this.ranges.map(function(e) {
						var t = e.filter(n).length > 0;
						return i = t ? t : i, t
					});
				e.range = function(e, t, r) {
					return new u(e && e.isBigNumber === !0 ? e.toNumber() : e, t && t.isBigNumber === !0 ? t.toNumber() : t, r && r.isBigNumber === !0 ? r.toNumber() : r)
				};
				var o = Object.create(t),
					s = this.ranges.map(function(t, r) {
						var n = a[r];
						return t && t.isRangeNode ? n ? (o.end = !0, "(function () {  var end = size[" + r + "];  return range(    " + t.start._compile(e, o) + ",     " + t.end._compile(e, o) + ",     " + (t.step ? t.step._compile(e, o) : "1") + "  );})()") : "range(" + t.start._compile(e, o) + ", " + t.end._compile(e, o) + ", " + (t.step ? t.step._compile(e, o) : "1") + ")" : n ? (o.end = !0, "(function () {  var end = size[" + r + "];  return " + t._compile(e, o) + ";})()") : t._compile(e, o)
					});
				return i ? "(function () {  var obj = " + this.object._compile(e, o) + ";  var size = math.size(obj).valueOf();  return math.subset(    obj,     math.index(" + s.join(", ") + ")    " + (r ? ", " + r : "") + "  );})()" : "math.subset(" + this.object._compile(e, o) + ",math.index(" + s.join(", ") + ")" + (r ? ", " + r : "") + ")"
			}, a.prototype.forEach = function(e) {
				e(this.object, "object", this);
				for (var t = 0; t < this.ranges.length; t++) e(this.ranges[t], "ranges[" + t + "]", this)
			}, a.prototype.map = function(e) {
				for (var t = this._ifNode(e(this.object, "object", this)), r = [], n = 0; n < this.ranges.length; n++) r[n] = this._ifNode(e(this.ranges[n], "ranges[" + n + "]", this));
				return new a(t, r)
			}, a.prototype.objectName = function() {
				return this.object.name
			}, a.prototype.clone = function() {
				return new a(this.object, this.ranges.slice(0))
			}, a.prototype._toString = function(e) {
				var t = this.object.toString(e);
				return o(this) && (t = "(" + t + "("), t + "[" + this.ranges.join(", ") + "]"
			}, a.prototype._toTex = function(e) {
				var t = this.object.toTex(e);
				o(this) && (t = "\\left(" + t + "\\right)");
				var r = this.ranges.map(function(t) {
					return t.toTex(e)
				});
				return t + "_{" + r.join(",") + "}"
			}, a
		}
		t.name = "IndexNode", t.path = "expression.node", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			function o(e, t, r) {
				if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator");
				if (!e || !e.isNode) throw new TypeError("Node expected");
				if (!t || !t.isNode) throw new TypeError("Node expected");
				if (r && (!r || !r.isNode)) throw new TypeError("Node expected");
				if (arguments.length > 3) throw new Error("Too many arguments");
				this.start = e, this.end = t, this.step = r || null
			}

			function s(e, t) {
				var r = i.getPrecedence(e, t),
					n = {},
					a = i.getPrecedence(e.start, t);
				if (n.start = null !== a && r >= a || "all" === t, e.step) {
					var o = i.getPrecedence(e.step, t);
					n.step = null !== o && r >= o || "all" === t
				}
				var s = i.getPrecedence(e.end, t);
				return n.end = null !== s && r >= s || "all" === t, n
			}
			var u = n(r(271));
			return o.prototype = new u, o.prototype.type = "RangeNode", o.prototype.isRangeNode = !0, o.prototype._compile = function(e, t) {
				return "math.range(" + this.start._compile(e, t) + ", " + this.end._compile(e, t) + (this.step ? ", " + this.step._compile(e, t) : "") + ")"
			}, o.prototype.forEach = function(e) {
				e(this.start, "start", this), e(this.end, "end", this), this.step && e(this.step, "step", this)
			}, o.prototype.map = function(e) {
				return new o(this._ifNode(e(this.start, "start", this)), this._ifNode(e(this.end, "end", this)), this.step && this._ifNode(e(this.step, "step", this)))
			}, o.prototype.clone = function() {
				return new o(this.start, this.end, this.step && this.step)
			}, o.prototype._toString = function(e) {
				var t, r = e && e.parenthesis ? e.parenthesis : "keep",
					n = s(this, r),
					i = this.start.toString(e);
				if (n.start && (i = "(" + i + ")"), t = i, this.step) {
					var a = this.step.toString(e);
					n.step && (a = "(" + a + ")"), t += ":" + a
				}
				var o = this.end.toString(e);
				return n.end && (o = "(" + o + ")"), t += ":" + o
			}, o.prototype._toTex = function(e) {
				var t = e && e.parenthesis ? e.parenthesis : "keep",
					r = s(this, t),
					n = this.start.toTex(e);
				if (r.start && (n = "\\left(" + n + "\\right)"), this.step) {
					var i = this.step.toTex(e);
					r.step && (i = "\\left(" + i + "\\right)"), n += ":" + i
				}
				var a = this.end.toTex(e);
				return r.end && (a = "\\left(" + a + "\\right)"), n += ":" + a
			}, o
		}
		var i = r(274);
		t.name = "RangeNode", t.path = "expression.node", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a, o) {
			function s(e) {
				if (!(this instanceof s)) throw new SyntaxError("Constructor must be called with the new operator");
				if ("string" != typeof e) throw new TypeError('String expected for parameter "name"');
				this.name = e
			}

			function u(e) {
				throw new Error("Undefined symbol " + e)
			}
			var c = n(r(271)),
				f = n(r(73));
			return s.prototype = new c, s.prototype.type = "SymbolNode", s.prototype.isSymbolNode = !0, s.prototype._compile = function(e, t) {
				return e.undef = u, e.Unit = f, t[this.name] ? this.name : this.name in e.math ? '("' + this.name + '" in scope ? scope["' + this.name + '"] : math["' + this.name + '"])' : '("' + this.name + '" in scope ? scope["' + this.name + '"] : ' + (f.isValuelessUnit(this.name) ? 'new Unit(null, "' + this.name + '")' : 'undef("' + this.name + '")') + ")"
			}, s.prototype.forEach = function(e) {}, s.prototype.map = function(e) {
				return this.clone()
			}, s.prototype.clone = function() {
				return new s(this.name)
			}, s.prototype._toString = function(e) {
				return this.name
			}, s.prototype._toTex = function(e) {
				var t = !1;
				"undefined" == typeof o[this.name] && f.isValuelessUnit(this.name) && (t = !0);
				var r = i.toSymbol(this.name, t);
				return "\\" === r[0] ? r : " " + r
			}, s
		}
		var i = r(29);
		t.name = "SymbolNode", t.path = "expression.node", t.math = !0, t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o, s) {
			function u(e, t, r) {
				if (!(this instanceof u)) throw new SyntaxError("Constructor must be called with the new operator");
				if ("string" != typeof e) throw new TypeError('string expected for parameter "op"');
				if ("string" != typeof t) throw new TypeError('string expected for parameter "fn"');
				if (!Array.isArray(r) || !r.every(function(e) {
						return e && e.isNode
					})) throw new TypeError('Array containing Nodes expected for parameter "args"');
				this.op = e, this.fn = t, this.args = r || []
			}

			function c(e, t, r, n) {
				var i = a.getPrecedence(e, t),
					o = a.getAssociativity(e, t);
				if ("all" === t || r.length > 2) {
					var s = [];
					return r.forEach(function(e) {
						switch (e.getContent().type) {
							case "ArrayNode":
							case "ConstantNode":
							case "SymbolNode":
							case "ParenthesisNode":
								s.push(!1);
								break;
							default:
								s.push(!0)
						}
					}), s
				}
				switch (r.length) {
					case 0:
						return [];
					case 1:
						var u = a.getPrecedence(r[0], t);
						if (n && null !== u) {
							var c, f;
							if ("keep" === t ? (c = r[0].getIdentifier(), f = e.getIdentifier()) : (c = r[0].getContent().getIdentifier(), f = e.getContent().getIdentifier()), a.properties[i][f].latexLeftParens === !1) return [!1];
							if (a.properties[u][c].latexParens === !1) return [!1]
						}
						return null === u ? [!1] : i >= u ? [!0] : [!1];
					case 2:
						var l, p = a.getPrecedence(r[0], t),
							m = a.isAssociativeWith(e, r[0], t);
						l = null === p ? !1 : p !== i || "right" !== o || m ? i > p ? !0 : !1 : !0;
						var h, g = a.getPrecedence(r[1], t),
							v = a.isAssociativeWith(e, r[1], t);
						if (h = null === g ? !1 : g !== i || "left" !== o || v ? i > g ? !0 : !1 : !0, n) {
							var f, d, y;
							"keep" === t ? (f = e.getIdentifier(), d = e.args[0].getIdentifier(), y = e.args[1].getIdentifier()) : (f = e.getContent().getIdentifier(), d = e.args[0].getContent().getIdentifier(), y = e.args[1].getContent().getIdentifier()), null !== p && (a.properties[i][f].latexLeftParens === !1 && (l = !1), a.properties[p][d].latexParens === !1 && (l = !1)), null !== g && (a.properties[i][f].latexRightParens === !1 && (h = !1), a.properties[g][y].latexParens === !1 && (h = !1))
						}
						return [l, h]
				}
			}
			var f = n(r(271));
			n(r(277)), n(r(281)), n(r(283));
			return u.prototype = new f, u.prototype.type = "OperatorNode", u.prototype.isOperatorNode = !0, u.prototype._compile = function(e, t) {
				if (!e.math[this.fn]) throw new Error("Function " + this.fn + ' missing in provided namespace "math"');
				var r = this.args.map(function(r) {
					return r._compile(e, t)
				});
				return "math." + this.fn + "(" + r.join(", ") + ")"
			}, u.prototype.forEach = function(e) {
				for (var t = 0; t < this.args.length; t++) e(this.args[t], "args[" + t + "]", this)
			}, u.prototype.map = function(e) {
				for (var t = [], r = 0; r < this.args.length; r++) t[r] = this._ifNode(e(this.args[r], "args[" + r + "]", this));
				return new u(this.op, this.fn, t)
			}, u.prototype.clone = function() {
				return new u(this.op, this.fn, this.args.slice(0))
			}, u.prototype._toString = function(e) {
				var t = e && e.parenthesis ? e.parenthesis : "keep",
					r = this.args,
					n = c(this, t, r, !1);
				switch (r.length) {
					case 1:
						var i = a.getAssociativity(this, t),
							o = r[0].toString(e);
						return n[0] && (o = "(" + o + ")"), "right" === i ? this.op + o : "left" === i ? o + this.op : o + this.op;
					case 2:
						var s = r[0].toString(e),
							u = r[1].toString(e);
						return n[0] && (s = "(" + s + ")"), n[1] && (u = "(" + u + ")"), s + " " + this.op + " " + u;
					default:
						return this.fn + "(" + this.args.join(", ") + ")"
				}
			}, u.prototype._toTex = function(e) {
				var t = e && e.parenthesis ? e.parenthesis : "keep",
					r = this.args,
					n = c(this, t, r, !0),
					o = i.operators[this.fn];
				switch (o = "undefined" == typeof o ? this.op : o, r.length) {
					case 1:
						var s = a.getAssociativity(this, t),
							u = r[0].toTex(e);
						return n[0] && (u = "\\left(" + u + "\\right)"), "right" === s ? o + u : "left" === s ? u + o : u + o;
					case 2:
						var f = r[0],
							l = f.toTex(e);
						n[0] && (l = "\\left(" + l + "\\right)");
						var p = r[1],
							m = p.toTex(e);
						n[1] && (m = "\\left(" + m + "\\right)");
						var h;
						switch (h = "keep" === t ? f.getIdentifier() : f.getContent().getIdentifier(), this.getIdentifier()) {
							case "OperatorNode:divide":
								return o + "{" + l + "}{" + m + "}";
							case "OperatorNode:pow":
								switch (l = "{" + l + "}", m = "{" + m + "}", h) {
									case "ConditionalNode":
									case "OperatorNode:divide":
										l = "\\left(" + l + "\\right)"
								}
						}
						return l + o + m;
					default:
						return "\\mathrm{" + this.fn + "}\\left(" + r.map(function(t) {
							return t.toTex(e)
						}).join(",") + "\\right)"
				}
			}, u.prototype.getIdentifier = function() {
				return this.type + ":" + this.fn
			}, u
		}
		var i = r(29),
			a = r(274);
		t.name = "OperatorNode", t.path = "expression.node", t.math = !0, t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a, o) {
			function s(e, t) {
				if (!(this instanceof s)) throw new SyntaxError("Constructor must be called with the new operator");
				if ("string" != typeof e) throw new TypeError('string expected for parameter "name"');
				if (!Array.isArray(t) || !t.every(function(e) {
						return e && e.isNode
					})) throw new TypeError('Array containing Nodes expected for parameter "args"');
				this.name = e, this.args = t || []
			}

			function u(e, t, r) {
				for (var n, i = "", a = new RegExp("\\$(?:\\{([a-z_][a-z_0-9]*)(?:\\[([0-9]+)\\])?\\}|\\$)", "ig"), o = 0; null !== (n = a.exec(e));)
					if (i += e.substring(o, n.index), o = n.index, "$$" === n[0]) i += "$", o++;
					else {
						o += n[0].length;
						var s = t[n[1]];
						if (!s) throw new ReferenceError("Template: Property " + n[1] + " does not exist.");
						if (void 0 === n[2]) switch (typeof s) {
							case "string":
								i += s;
								break;
							case "object":
								if (s.isNode) i += s.toTex(r);
								else {
									if (!Array.isArray(s)) throw new TypeError("Template: " + n[1] + " has to be a Node, String or array of Nodes");
									i += s.map(function(e, t) {
										if (e && e.isNode) return e.toTex(r);
										throw new TypeError("Template: " + n[1] + "[" + t + "] is not a Node.")
									}).join(",")
								}
								break;
							default:
								throw new TypeError("Template: " + n[1] + " has to be a Node, String or array of Nodes")
						} else {
							if (!s[n[2]] || !s[n[2]].isNode) throw new TypeError("Template: " + n[1] + "[" + n[2] + "] is not a Node.");
							i += s[n[2]].toTex(r)
						}
					}
				return i += e.slice(o)
			}
			var c = n(r(271)),
				f = n(r(281));
			s.prototype = new c, s.prototype.type = "FunctionNode", s.prototype.isFunctionNode = !0, s.prototype._compile = function(e, t) {
				var r = e.math[this.name],
					n = "function" == typeof r && 1 == r.rawArgs,
					i = this.args.map(function(r) {
						return r._compile(e, t)
					});
				if (n) {
					var a, o = 0;
					do a = "p" + o, o++; while (a in e);
					return e[a] = this.args, '("' + this.name + '" in scope ? scope["' + this.name + '"](' + i.join(", ") + ') : math["' + this.name + '"](' + a + ", math, scope))"
				}
				var s = new f(this.name);
				return s._compile(e, t) + "(" + i.join(", ") + ")"
			}, s.prototype.forEach = function(e) {
				for (var t = 0; t < this.args.length; t++) e(this.args[t], "args[" + t + "]", this)
			}, s.prototype.map = function(e) {
				for (var t = [], r = 0; r < this.args.length; r++) t[r] = this._ifNode(e(this.args[r], "args[" + r + "]", this));
				return new s(this.name, t)
			}, s.prototype.clone = function() {
				return new s(this.name, this.args.slice(0))
			};
			var l = s.prototype.toString;
			s.prototype.toString = function(e) {
				var t;
				return e && "object" == typeof e.handler && e.handler.hasOwnProperty(this.name) && (t = e.handler[this.name](this, e)), "undefined" != typeof t ? t : l.call(this, e)
			}, s.prototype._toString = function(e) {
				return this.name + "(" + this.args.join(", ") + ")"
			};
			var p = s.prototype.toTex;
			return s.prototype.toTex = function(e) {
				var t;
				return e && "object" == typeof e.handler && e.handler.hasOwnProperty(this.name) && (t = e.handler[this.name](this, e)), "undefined" != typeof t ? t : p.call(this, e)
			}, s.prototype._toTex = function(e) {
				var t, r = (e && e.parenthesis ? e.parenthesis : "keep", this.args.map(function(t) {
					return t.toTex(e)
				}));
				!o[this.name] || "function" != typeof o[this.name].toTex && "object" != typeof o[this.name].toTex && "string" != typeof o[this.name].toTex || (t = o[this.name].toTex);
				var n;
				switch (typeof t) {
					case "function":
						n = t(this, e);
						break;
					case "string":
						n = u(t, this, e);
						break;
					case "object":
						switch (typeof t[r.length]) {
							case "function":
								n = t[r.length](this, e);
								break;
							case "string":
								n = u(t[r.length], this, e)
						}
				}
				return "undefined" != typeof n ? n : u(i.defaultTemplate, this, e)
			}, s.prototype.getIdentifier = function() {
				return this.type + ":" + this.name
			}, s
		}
		var i = r(29);
		t.name = "FunctionNode", t.path = "expression.node", t.math = !0, t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			function a(e) {
				if (!(this instanceof a)) throw new SyntaxError("Constructor must be called with the new operator");
				if (!e || !e.isNode) throw new TypeError('Node expected for parameter "content"');
				this.content = e
			}
			var o = n(r(271));
			return a.prototype = new o, a.prototype.type = "ParenthesisNode", a.prototype.isParenthesisNode = !0, a.prototype._compile = function(e, t) {
				return this.content._compile(e, t)
			}, a.prototype.getContent = function() {
				return this.content.getContent()
			}, a.prototype.forEach = function(e) {
				e(this.content, "content", this)
			}, a.prototype.map = function(e) {
				var t = e(this.content, "content", this);
				return new a(t)
			}, a.prototype.clone = function() {
				return new a(this.content)
			}, a.prototype._toString = function(e) {
				return !e || e && "keep" === e.parenthesis ? "(" + this.content.toString(e) + ")" : this.content.toString(e)
			}, a.prototype._toTex = function(e) {
				return !e || e && "keep" === e.parenthesis ? "\\left(" + this.content.toTex(e) + "\\right)" : this.content.toTex(e)
			}, a
		}
		t.name = "ParenthesisNode", t.path = "expression.node", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			function a(e, t) {
				if (!(this instanceof a)) throw new SyntaxError("Constructor must be called with the new operator");
				if (!e || !e.isIndexNode) throw new TypeError('Expected IndexNode for parameter "index"');
				if (!t || !t.isNode) throw new TypeError('Expected Node for parameter "expr"');
				this.index = e, this.expr = t
			}
			var o = n(r(271));
			n(r(279));
			return a.prototype = new o, a.prototype.type = "UpdateNode", a.prototype.isUpdateNode = !0, a.prototype._compile = function(e, t) {
				var r = t[this.index.objectName()] ? this.name + " = " : 'scope["' + this.index.objectName() + '"]',
					n = this.index.compileSubset(e, t, this.expr._compile(e, t));
				return r + " = " + n
			}, a.prototype.forEach = function(e) {
				e(this.index, "index", this), e(this.expr, "expr", this)
			}, a.prototype.map = function(e) {
				return new a(this._ifNode(e(this.index, "index", this)), this._ifNode(e(this.expr, "expr", this)))
			}, a.prototype.clone = function() {
				return new a(this.index, this.expr)
			}, a.prototype._toString = function(e) {
				var t = this.expr.toString(e);
				return e && "all" === e.parenthesis && (t = "(" + t + ")"), this.index.toString(e) + " = " + t
			}, a.prototype._toTex = function(e) {
				var t = this.expr.toTex(e);
				return e && "all" === e.parenthesis && (t = "\\left(" + t + "\\right)"), this.index.toTex(e) + ":=" + t
			}, a
		}
		t.name = "UpdateNode", t.path = "expression.node", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(269));
			return a("compile", {
				string: function(e) {
					var t = {};
					return o(e).compile().eval(t)
				},
				"string, Object": function(e, t) {
					return o(e).compile().eval(t)
				},
				"Array | Matrix": function(e) {
					var t = {};
					return i(e, function(e) {
						return o(e).compile().eval(t)
					})
				},
				"Array | Matrix, Object": function(e, t) {
					return i(e, function(e) {
						return o(e).compile().eval(t)
					})
				}
			})
		}
		var i = r(19);
		t.name = "eval", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i, a) {
			var o = n(r(97));
			return i("help", {
				any: function(t) {
					var r, n = t;
					if ("string" != typeof t)
						for (r in a)
							if (a.hasOwnProperty(r) && t === a[r]) {
								n = r;
								break
							}
					var i = o[n];
					if (!i) throw new Error('No documentation found on "' + n + '"');
					return new e.Help(i)
				}
			})
		}
		t.math = !0, t.name = "help", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = n(r(269));
			return i("parse", {
				"string | Array | Matrix": a,
				"string | Array | Matrix, Object": a
			})
		}
		t.name = "parse", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i, a) {
			var o = n(r(290));
			return i("parser", {
				"": function() {
					return new o(a)
				}
			})
		}
		t.name = "parser", t.factory = n, t.math = !0
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i, a) {
			function o() {
				if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator");
				this.scope = {}
			}
			var s = n(r(269));
			return o.prototype.type = "Parser", o.prototype.isParser = !0, o.prototype.parse = function(e) {
				throw new Error("Parser.parse is deprecated. Use math.parse instead.")
			}, o.prototype.compile = function(e) {
				throw new Error("Parser.compile is deprecated. Use math.compile instead.")
			}, o.prototype.eval = function(e) {
				return s(e).compile().eval(this.scope)
			}, o.prototype.get = function(e) {
				return this.scope[e]
			}, o.prototype.set = function(e, t) {
				return this.scope[e] = t
			}, o.prototype.remove = function(e) {
				delete this.scope[e]
			}, o.prototype.clear = function() {
				for (var e in this.scope) this.scope.hasOwnProperty(e) && delete this.scope[e]
			}, o
		}
		t.name = "Parser", t.path = "expression", t.factory = n, t.math = !0
	}, function(e, t, r) {
		e.exports = [r(270), r(273), r(275), r(276), r(277), r(279), r(278), r(283), r(271), r(282), r(284), r(280), r(281), r(285)]
	}, function(e, t, r) {
		e.exports = [r(293), r(296), r(298), r(300), r(301), r(303), r(308), r(313), r(315), r(317)]
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(295));
			return a("concat", {
				"...any": function(e) {
					var t = e.length - 1,
						r = e[t];
					"number" == typeof r ? e[t] = r - 1 : r && r.isBigNumber === !0 && (e[t] = r.minus(1));
					try {
						return o.apply(null, e)
					} catch (n) {
						throw i(n)
					}
				}
			})
		}
		var i = r(294).transform;
		t.name = "concat", t.path = "expression.transform", t.factory = n
	}, function(e, t, r) {
		var n = r(42);
		t.transform = function(e) {
			return e && e.isIndexError ? new n(e.index + 1, e.min + 1, e.max + 1) : e
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, f) {
			var l = n(r(50)),
				p = f("concat", {
					"...Array | Matrix | number | BigNumber": function(e) {
						var t, r, n = e.length,
							f = -1,
							p = !1,
							m = [];
						for (t = 0; n > t; t++) {
							var h = e[t];
							if (h && h.isMatrix === !0 && (p = !0), "number" == typeof h || h && h.isBigNumber === !0) {
								if (t !== n - 1) throw new Error("Dimension must be specified as last argument");
								if (r = f, f = h.valueOf(), !o(f)) throw new TypeError("Integer number expected for dimension");
								if (0 > f) throw new u(f);
								if (t > 0 && f > r) throw new u(f, r + 1)
							} else {
								var g = a(h).valueOf(),
									v = s.size(g);
								if (m[t] = g, r = f, f = v.length - 1, t > 0 && f != r) throw new c(r + 1, f + 1)
							}
						}
						if (0 == m.length) throw new SyntaxError("At least one matrix expected");
						for (var d = m.shift(); m.length;) d = i(d, m.shift(), f, 0);
						return p ? l(d) : d
					},
					"...string": function(e) {
						return e.join("")
					}
				});
			return p.toTex = "\\mathrm{${name}}\\left(${args}\\right)", p
		}

		function i(e, t, r, n) {
			if (r > n) {
				if (e.length != t.length) throw new c(e.length, t.length);
				for (var a = [], o = 0; o < e.length; o++) a[o] = i(e[o], t[o], r, n + 1);
				return a
			}
			return e.concat(t)
		}
		var a = r(3).clone,
			o = r(6).isInteger,
			s = r(39),
			u = r(42),
			c = r(41);
		t.name = "concat", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			function a(e, t, r) {
				var n, i;
				if (e[0] && (n = e[0].compile().eval(r)), e[1])
					if (e[1] && e[1].isSymbolNode) i = e[1].compile().eval(r);
					else {
						var a = r || {},
							s = e[1].filter(function(e) {
								return e && e.isSymbolNode && !(e.name in t) && !(e.name in a)
							})[0],
							u = Object.create(a),
							c = e[1].compile();
						if (!s) throw new Error("No undefined variable found in filter equation");
						var f = s.name;
						i = function(e) {
							return u[f] = e, c.eval(u)
						}
					}
				return o(n, i)
			}
			var o = n(r(297));
			n(r(281));
			return a.rawArgs = !0, a
		}
		t.name = "filter", t.path = "expression.transform", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = n(r(50)),
				u = o("filter", {
					"Array, function": i,
					"Array, RegExp": a,
					"Matrix, function": function(e, t) {
						return s(i(e.toArray(), t))
					},
					"Matrix, RegExp": function(e, t) {
						return s(a(e.toArray(), t))
					}
				});
			return u.toTex = "\\mathrm{${name}}\\left(${args}\\right)", u
		}

		function i(e, t) {
			if (1 !== o(e).length) throw new Error("Only one dimensional matrices supported");
			return e.filter(function(e) {
				return t(e)
			})
		}

		function a(e, t) {
			if (1 !== o(e).length) throw new Error("Only one dimensional matrices supported");
			return e.filter(function(e) {
				return t.test(e)
			})
		}
		var o = r(39).size;
		t.name = "filter", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			n(r(299));
			return i("forEach", {
				"Array | Matrix, function": function(e, t) {
					var r = function(n, i) {
						Array.isArray(n) ? n.forEach(function(e, t) {
							r(e, i.concat(t + 1))
						}) : t(n, i, e)
					};
					r(e.valueOf(), [])
				}
			})
		}
		t.name = "forEach", t.path = "expression.transform", t.factory = n
	}, function(e, t) {
		"use strict";

		function r(e, t, r, i) {
			var a = i("forEach", {
				"Array, function": n,
				"Matrix, function": function(e, t) {
					return e.forEach(t)
				}
			});
			return a.toTex = "\\mathrm{${name}}\\left(${args}\\right)", a
		}

		function n(e, t) {
			var r = function(n, i) {
				Array.isArray(n) ? n.forEach(function(e, t) {
					r(e, i.concat(t))
				}) : t(n, i, e)
			};
			r(e, [])
		}
		t.name = "forEach", t.factory = r
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n) {
			n(r(66));
			return function() {
				for (var t = [], r = 0, n = arguments.length; n > r; r++) {
					var i = arguments[r];
					if (i && i.isRange === !0) i.start--, i.end -= i.step > 0 ? 0 : 2;
					else if (i && i.isSet === !0) i = i.map(function(e) {
						return e - 1
					});
					else if (i && (i.isArray === !0 || i.isMatrix)) i = i.map(function(e) {
						return e - 1
					});
					else if ("number" == typeof i) i--;
					else {
						if (!i || i.isBigNumber !== !0) throw new TypeError("Ranges must be a Number, Range, Array or Matrix");
						i = i.toNumber() - 1
					}
					t[r] = i
				}
				var a = new e.Index;
				return e.Index.apply(a, t), a
			}
		}
		Array.isArray;
		t.name = "index", t.path = "expression.transform", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = (n(r(302)), n(r(50)));
			return a("max", {
				"Array, function": function(e, t) {
					return i(e, t, e)
				},
				"Matrix, function": function(e, t) {
					return o(i(e.valueOf(), t, e))
				}
			})
		}

		function i(e, t, r) {
			function n(e, i) {
				return Array.isArray(e) ? e.map(function(e, t) {
					return n(e, i.concat(t + 1))
				}) : t(e, i, r)
			}
			return n(e, [])
		}
		t.name = "map", t.path = "expression.transform", t.factory = n
	}, function(e, t) {
		"use strict";

		function r(e, t, r, i) {
			var a = i("map", {
				"Array, function": n,
				"Matrix, function": function(e, t) {
					return e.map(t)
				}
			});
			return a.toTex = "\\mathrm{${name}}\\left(${args}\\right)", a
		}

		function n(e, t) {
			var r = function(n, i) {
				return Array.isArray(n) ? n.map(function(e, t) {
					return r(e, i.concat(t))
				}) : t(n, i, e)
			};
			return r(e, [])
		}
		t.name = "map", t.factory = r
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = n(r(305));
			return o("max", {
				"...any": function(e) {
					if (2 == e.length && a(e[0])) {
						var t = e[1];
						"number" == typeof t ? e[1] = t - 1 : t && t.isBigNumber === !0 && (e[1] = t.minus(1))
					}
					try {
						return s.apply(null, e)
					} catch (r) {
						throw i(r)
					}
				}
			})
		}
		var i = r(294).transform,
			a = r(304);
		t.name = "max", t.path = "expression.transform", t.factory = n
	}, function(e, t) {
		"use strict";
		e.exports = function(e) {
			return Array.isArray(e) || e && e.isMatrix === !0
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			function s(e, t) {
				return c(e, t) ? e : t
			}

			function u(e) {
				var t = void 0;
				if (i(e, function(e) {
						(void 0 === t || c(e, t)) && (t = e)
					}), void 0 === t) throw new Error("Cannot calculate max of an empty array");
				return t
			}
			var c = n(r(62)),
				f = o("max", {
					"Array | Matrix": u,
					"Array | Matrix, number | BigNumber": function(e, t) {
						return a(e, t.valueOf(), s)
					},
					"...": function() {
						return u(arguments)
					}
				});
			return f.toTex = "\\max\\left(${args}\\right)", f
		}
		var i = r(306),
			a = r(307);
		t.name = "max", t.factory = n
	}, function(e, t) {
		"use strict";
		e.exports = function r(e, t) {
			e && e.isMatrix === !0 && (e = e.valueOf());
			for (var n = 0, i = e.length; i > n; n++) {
				var a = e[n];
				Array.isArray(a) ? r(a, t) : t(a)
			}
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r) {
			var a, o, s, u;
			if (0 >= t) {
				if (Array.isArray(e[0])) {
					for (u = i(e), o = [], a = 0; a < u.length; a++) o[a] = n(u[a], t - 1, r);
					return o
				}
				for (s = e[0], a = 1; a < e.length; a++) s = r(s, e[a]);
				return s
			}
			for (o = [], a = 0; a < e.length; a++) o[a] = n(e[a], t - 1, r);
			return o
		}

		function i(e) {
			var t, r, n = e.length,
				i = e[0].length,
				a = [];
			for (r = 0; i > r; r++) {
				var o = [];
				for (t = 0; n > t; t++) o.push(e[t][r]);
				a.push(o)
			}
			return a
		}
		var a = r(39).size,
			o = r(42);
		e.exports = function(e, t, r) {
			var i = Array.isArray(e) ? a(e) : e.size();
			if (0 > t) throw new o(t);
			if (t >= i.length) throw new o(t, i.length);
			return e && e.isMatrix === !0 ? e.create(n(e.valueOf(), t, r)) : n(e, t, r)
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = n(r(309));
			return o("mean", {
				"...any": function(e) {
					if (2 == e.length && a(e[0])) {
						var t = e[1];
						"number" == typeof t ? e[1] = t - 1 : t && t.isBigNumber === !0 && (e[1] = t.minus(1))
					}
					try {
						return s.apply(null, e)
					} catch (r) {
						throw i(r)
					}
				}
			})
		}
		var i = r(294).transform,
			a = r(304);
		t.name = "mean", t.path = "expression.transform", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, s) {
			function u(e, t) {
				var r = o(e, t, f),
					n = Array.isArray(e) ? i(e) : e.size();
				return l(r, n[t])
			}

			function c(e) {
				var t = 0,
					r = 0;
				if (a(e, function(e) {
						t = f(t, e), r++
					}), 0 === r) throw new Error("Cannot calculate mean of an empty array");
				return l(t, r)
			}
			var f = n(r(49)),
				l = n(r(310)),
				p = s("mean", {
					"Array | Matrix": c,
					"Array | Matrix, number | BigNumber": u,
					"...": function() {
						return c(arguments)
					}
				});
			return p.toTex = "\\mathrm{${name}}\\left(${args}\\right)", p
		}
		var i = r(39).size,
			a = r(306),
			o = r(307);
		t.name = "mean", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(78)),
				s = n(r(83)),
				u = n(r(311)),
				c = n(r(50)),
				f = n(r(84)),
				l = n(r(56)),
				p = a("divide", i({
					"Array | Matrix, Array | Matrix": function(e, t) {
						return s(e, u(t))
					},
					"Matrix, any": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = f(e, t, o, !1);
								break;
							case "dense":
								r = l(e, t, o, !1)
						}
						return r
					},
					"Array, any": function(e, t) {
						return l(c(e), t, o, !1).valueOf()
					},
					"any, Array | Matrix": function(e, t) {
						return s(e, u(t))
					}
				}, o.signatures));
			return p.toTex = "\\frac{${args[0]}}{${args[1]}}", p
		}
		var i = r(3).extend;
		t.name = "divide", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			function o(e, t, r) {
				var n, i, a, o, s;
				if (1 == t) {
					if (o = e[0][0], 0 == o) throw Error("Cannot calculate inverse, determinant is zero");
					return [
						[u(1, o)]
					]
				}
				if (2 == t) {
					var h = p(e);
					if (0 == h) throw Error("Cannot calculate inverse, determinant is zero");
					return [
						[u(e[1][1], h), u(l(e[0][1]), h)],
						[u(l(e[1][0]), h), u(e[0][0], h)]
					]
				}
				var g = e.concat();
				for (n = 0; t > n; n++) g[n] = g[n].concat();
				for (var v = m(t).valueOf(), d = 0; r > d; d++) {
					for (n = d; t > n && 0 == g[n][d];) n++;
					if (n == t || 0 == g[n][d]) throw Error("Cannot calculate inverse, determinant is zero");
					n != d && (s = g[d], g[d] = g[n], g[n] = s, s = v[d], v[d] = v[n], v[n] = s);
					var y = g[d],
						x = v[d];
					for (n = 0; t > n; n++) {
						var b = g[n],
							w = v[n];
						if (n != d) {
							if (0 != b[d]) {
								for (a = u(l(b[d]), y[d]), i = d; r > i; i++) b[i] = c(b[i], f(a, y[i]));
								for (i = 0; r > i; i++) w[i] = c(w[i], f(a, x[i]))
							}
						} else {
							for (a = y[d], i = d; r > i; i++) b[i] = u(b[i], a);
							for (i = 0; r > i; i++) w[i] = u(w[i], a)
						}
					}
				}
				return v
			}
			var s = n(r(50)),
				u = n(r(78)),
				c = n(r(51)),
				f = n(r(83)),
				l = n(r(75)),
				p = n(r(312)),
				m = n(r(81)),
				h = a("inv", {
					"Array | Matrix": function(e) {
						var t = e.isMatrix === !0 ? e.size() : i.array.size(e);
						switch (t.length) {
							case 1:
								if (1 == t[0]) return e.isMatrix === !0 ? s([u(1, e.valueOf()[0])]) : [u(1, e[0])];
								throw new RangeError("Matrix must be square (size: " + i.string.format(t) + ")");
							case 2:
								var r = t[0],
									n = t[1];
								if (r == n) return e.isMatrix === !0 ? s(o(e.valueOf(), r, n), e.storage()) : o(e, r, n);
								throw new RangeError("Matrix must be square (size: " + i.string.format(t) + ")");
							default:
								throw new RangeError("Matrix must be two dimensional (size: " + i.string.format(t) + ")")
						}
					},
					any: function(e) {
						return u(1, e)
					}
				});
			return h.toTex = "\\left(${args[0]}\\right)^{-1}", h
		}
		var i = r(38);
		t.name = "inv", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			function s(e, t, r) {
				if (1 == t) return a.clone(e[0][0]);
				if (2 == t) return f(l(e[0][0], e[1][1]), l(e[1][0], e[0][1]));
				for (var n = function(e) {
						var t, r, n = new Array(e.length),
							i = 0;
						for (t = 1; t < e.length; t++) i = c(i, e[t][t]);
						for (t = 0; t < e.length; t++) {
							for (n[t] = new Array(e.length), n[t][t] = p(i), r = 0; t > r; r++) n[t][r] = 0;
							for (r = t + 1; r < e.length; r++) n[t][r] = e[t][r];
							t + 1 < e.length && (i = f(i, e[t + 1][t + 1]))
						}
						return n
					}, i = e, o = 0; t - 1 > o; o++) i = l(n(i), e);
				return t % 2 == 0 ? p(i[0][0]) : i[0][0]
			}
			var u = n(r(50)),
				c = n(r(49)),
				f = n(r(74)),
				l = n(r(83)),
				p = n(r(75)),
				m = i("det", {
					any: function(e) {
						return a.clone(e)
					},
					"Array | Matrix": function(e) {
						var t;
						switch (e && e.isMatrix === !0 ? t = e.size() : Array.isArray(e) ? (e = u(e), t = e.size()) : t = [], t.length) {
							case 0:
								return a.clone(e);
							case 1:
								if (1 == t[0]) return a.clone(e.valueOf()[0]);
								throw new RangeError("Matrix must be square (size: " + o.format(t) + ")");
							case 2:
								var r = t[0],
									n = t[1];
								if (r == n) return s(e.clone().valueOf(), r, n);
								throw new RangeError("Matrix must be square (size: " + o.format(t) + ")");
							default:
								throw new RangeError("Matrix must be two dimensional (size: " + o.format(t) + ")")
						}
					}
				});
			return m.toTex = "\\det\\left(${args[0]}\\right)", m
		}
		var i = r(38),
			a = i.object,
			o = i.string;
		t.name = "det", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = n(r(314));
			return o("min", {
				"...any": function(e) {
					if (2 == e.length && a(e[0])) {
						var t = e[1];
						"number" == typeof t ? e[1] = t - 1 : t && t.isBigNumber === !0 && (e[1] = t.minus(1))
					}
					try {
						return s.apply(null, e)
					} catch (r) {
						throw i(r)
					}
				}
			})
		}
		var i = r(294).transform,
			a = r(304);
		t.name = "min", t.path = "expression.transform", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			function s(e, t) {
				return c(e, t) ? e : t
			}

			function u(e) {
				var t = void 0;
				if (i(e, function(e) {
						(void 0 === t || c(e, t)) && (t = e)
					}), void 0 === t) throw new Error("Cannot calculate min of an empty array");
				return t
			}
			var c = n(r(58)),
				f = o("min", {
					"Array | Matrix": u,
					"Array | Matrix, number | BigNumber": function(e, t) {
						return a(e, t.valueOf(), s)
					},
					"...": function() {
						return u(arguments)
					}
				});
			return f.toTex = "\\min\\left(${args}\\right)", f
		}
		var i = r(306),
			a = r(307);
		t.name = "min", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = n(r(316));
			return i("range", {
				"...any": function(e) {
					var t = e.length - 1,
						r = e[t];
					return "boolean" != typeof r && e.push(!0), a.apply(null, e)
				}
			})
		}
		t.name = "range", t.path = "expression.transform", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			function a(e) {
				return "array" === t.matrix ? e : p(e)
			}

			function o(r, n) {
				var i = l(r);
				if (!i) throw new SyntaxError('String "' + r + '" is no valid range');
				var o;
				return "bignumber" === t.number ? (o = n ? f : c, a(o(new e.BigNumber(i.start), new e.BigNumber(i.end), new e.BigNumber(i.step)))) : (o = n ? u : s, a(o(i.start, i.end, i.step)))
			}

			function s(e, t, r) {
				var n = [],
					i = e;
				if (r > 0)
					for (; t > i;) n.push(i), i += r;
				else if (0 > r)
					for (; i > t;) n.push(i), i += r;
				return n
			}

			function u(e, t, r) {
				var n = [],
					i = e;
				if (r > 0)
					for (; t >= i;) n.push(i), i += r;
				else if (0 > r)
					for (; i >= t;) n.push(i), i += r;
				return n
			}

			function c(e, t, r) {
				var n = [],
					i = e;
				if (r.gt(m))
					for (; i.lt(t);) n.push(i), i = i.plus(r);
				else if (r.lt(m))
					for (; i.gt(t);) n.push(i), i = i.plus(r);
				return n
			}

			function f(e, t, r) {
				var n = [],
					i = e;
				if (r.gt(m))
					for (; i.lte(t);) n.push(i), i = i.plus(r);
				else if (r.lt(m))
					for (; i.gte(t);) n.push(i), i = i.plus(r);
				return n
			}

			function l(e) {
				var t = e.split(":"),
					r = t.map(function(e) {
						return Number(e)
					}),
					n = r.some(function(e) {
						return isNaN(e)
					});
				if (n) return null;
				switch (r.length) {
					case 2:
						return {
							start: r[0],
							end: r[1],
							step: 1
						};
					case 3:
						return {
							start: r[0],
							end: r[2],
							step: r[1]
						};
					default:
						return null
				}
			}
			var p = n(r(50)),
				m = new e.BigNumber(0),
				h = new e.BigNumber(1),
				g = i("range", {
					string: o,
					"string, boolean": o,
					"number, number": function(e, t) {
						return a(s(e, t, 1))
					},
					"number, number, number": function(e, t, r) {
						return a(s(e, t, r))
					},
					"number, number, boolean": function(e, t, r) {
						return a(r ? u(e, t, 1) : s(e, t, 1))
					},
					"number, number, number, boolean": function(e, t, r, n) {
						return a(n ? u(e, t, r) : s(e, t, r))
					},
					"BigNumber, BigNumber": function(e, t) {
						return a(c(e, t, h))
					},
					"BigNumber, BigNumber, BigNumber": function(e, t, r) {
						return a(c(e, t, r))
					},
					"BigNumber, BigNumber, boolean": function(e, t, r) {
						return a(r ? f(e, t, h) : c(e, t, h))
					},
					"BigNumber, BigNumber, BigNumber, boolean": function(e, t, r, n) {
						return a(n ? f(e, t, r) : c(e, t, r))
					}
				});
			return g.toTex = "\\mathrm{${name}}\\left(${args}\\right)", g
		}
		t.name = "range", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(318));
			return a("subset", {
				"...any": function(e) {
					try {
						return o.apply(null, e)
					} catch (t) {
						throw i(t)
					}
				}
			})
		}
		var i = r(294).transform;
		t.name = "subset", t.path = "expression.transform", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, s) {
			function u(e, t) {
				if (!t || t.isIndex !== !0) throw new TypeError("Index expected");
				if (1 != t.size().length) throw new o(t.size().length, 1);
				var r = e.length;
				a(t.min()[0], r), a(t.max()[0], r);
				var n = t.dimension(0),
					i = "";
				return n.forEach(function(t) {
					i += e.charAt(t)
				}), i
			}

			function c(e, t, r, n) {
				if (!t || t.isIndex !== !0) throw new TypeError("Index expected");
				if (1 != t.size().length) throw new o(t.size().length, 1);
				if (void 0 !== n) {
					if ("string" != typeof n || 1 !== n.length) throw new TypeError("Single character expected as defaultValue")
				} else n = " ";
				var i = t.dimension(0),
					s = i.size()[0];
				if (s != r.length) throw new o(i.size()[0], r.length);
				var u = e.length;
				a(t.min()[0]), a(t.max()[0]);
				for (var c = [], f = 0; u > f; f++) c[f] = e.charAt(f);
				if (i.forEach(function(e, t) {
						c[e] = r.charAt(t[0])
					}), c.length > u)
					for (f = u - 1, s = c.length; s > f; f++) c[f] || (c[f] = n);
				return c.join("")
			}
			var f = n(r(50)),
				l = s("subset", {
					"Array, Index": function(e, t) {
						var r = f(e),
							n = r.subset(t);
						return n && n.valueOf()
					},
					"Matrix, Index": function(e, t) {
						return e.subset(t)
					},
					"string, Index": u,
					"Array, Index, any": function(e, t, r) {
						return f(i(e)).subset(t, r, void 0).valueOf()
					},
					"Array, Index, any, any": function(e, t, r, n) {
						return f(i(e)).subset(t, r, n).valueOf()
					},
					"Matrix, Index, any": function(e, t, r) {
						return e.clone().subset(t, r)
					},
					"Matrix, Index, any, any": function(e, t, r, n) {
						return e.clone().subset(t, r, n)
					},
					"string, Index, string": c,
					"string, Index, string, string": c
				});
			return l.toTex = "\\mathrm{${name}}\\left(${args}\\right)", l
		}
		var i = r(3).clone,
			a = r(39).validateIndex,
			o = r(41);
		t.name = "subset", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			function s(e) {
				if (!(this instanceof s)) throw new SyntaxError("Constructor must be called with the new operator");
				if (!e) throw new Error('Argument "doc" missing');
				this.doc = e
			}
			var u = n(r(289))();
			return s.prototype.type = "Help",
				s.prototype.isHelp = !0, s.prototype.toString = function() {
					var e = this.doc || {},
						t = "\n";
					if (e.name && (t += "Name: " + e.name + "\n\n"), e.category && (t += "Category: " + e.category + "\n\n"), e.description && (t += "Description:\n    " + e.description + "\n\n"), e.syntax && (t += "Syntax:\n    " + e.syntax.join("\n    ") + "\n\n"), e.examples) {
						t += "Examples:\n";
						for (var r = 0; r < e.examples.length; r++) {
							var n = e.examples[r];
							t += "    " + n + "\n";
							var i;
							try {
								i = u.eval(n)
							} catch (o) {
								i = o
							}
							i && !i.isHelp && (t += "        " + a.format(i, {
								precision: 14
							}) + "\n")
						}
						t += "\n"
					}
					return e.seealso && (t += "See also: " + e.seealso.join(", ") + "\n"), t
				}, s.prototype.toJSON = function() {
					var e = i.clone(this.doc);
					return e.mathjs = "Help", e
				}, s.fromJSON = function(e) {
					var t = {};
					for (var r in e) "mathjs" !== r && (t[r] = e[r]);
					return new s(t)
				}, s.prototype.valueOf = s.prototype.toString, s
		}
		var i = r(3),
			a = r(23);
		t.name = "Help", t.path = "type", t.factory = n
	}, function(e, t, r) {
		e.exports = [r(321), r(348), r(378), r(394), r(403), r(408), r(411), r(417), r(426), r(435), r(440), r(448), r(489), r(491)]
	}, function(e, t, r) {
		e.exports = [r(322), r(323), r(343), r(345), r(347)]
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var o = n(r(50)),
				s = n(r(85)),
				u = n(r(51)),
				c = n(r(78)),
				f = n(r(77)),
				l = n(r(74)),
				p = n(r(62)),
				m = n(r(47)),
				h = n(r(75)),
				g = e.SparseMatrix,
				v = e.DenseMatrix,
				d = e.Spa,
				y = i("lup", {
					DenseMatrix: function(e) {
						return x(e)
					},
					SparseMatrix: function(e) {
						return b(e)
					},
					Array: function(e) {
						var t = o(e),
							r = x(t);
						return {
							L: r.L.valueOf(),
							U: r.U.valueOf(),
							p: r.p
						}
					}
				}),
				x = function(e) {
					var t, r, n, i = e._size[0],
						o = e._size[1],
						h = Math.min(i, o),
						g = a.clone(e._data),
						d = [],
						y = [i, h],
						x = [],
						b = [h, o],
						w = [];
					for (t = 0; i > t; t++) w[t] = t;
					for (r = 0; o > r; r++) {
						if (r > 0)
							for (t = 0; i > t; t++) {
								var N = Math.min(t, r),
									E = 0;
								for (n = 0; N > n; n++) E = u(E, f(g[t][n], g[n][r]));
								g[t][r] = l(g[t][r], E)
							}
						var M = r,
							A = 0,
							_ = 0;
						for (t = r; i > t; t++) {
							var O = g[t][r],
								T = s(O);
							p(T, A) && (M = t, A = T, _ = O)
						}
						if (r !== M && (w[r] = [w[M], w[M] = w[r]][0], v._swapRows(r, M, g)), i > r)
							for (t = r + 1; i > t; t++) {
								var C = g[t][r];
								m(C, 0) || (g[t][r] = c(g[t][r], _))
							}
					}
					for (r = 0; o > r; r++)
						for (t = 0; i > t; t++) 0 === r && (o > t && (x[t] = []), d[t] = []), r > t ? (o > t && (x[t][r] = g[t][r]), i > r && (d[t][r] = 0)) : t !== r ? (o > t && (x[t][r] = 0), i > r && (d[t][r] = g[t][r])) : (o > t && (x[t][r] = g[t][r]), i > r && (d[t][r] = 1));
					var S = new v({
							data: d,
							size: y
						}),
						z = new v({
							data: x,
							size: b
						}),
						B = [];
					for (t = 0, h = w.length; h > t; t++) B[w[t]] = t;
					return {
						L: S,
						U: z,
						p: B,
						toString: function() {
							return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\nP: " + this.p
						}
					}
				},
				b = function(e) {
					var t, r, n, i = e._size[0],
						a = e._size[1],
						o = Math.min(i, a),
						u = e._values,
						l = e._index,
						v = e._ptr,
						y = [],
						x = [],
						b = [],
						w = [i, o],
						N = [],
						E = [],
						M = [],
						A = [o, a],
						_ = [],
						O = [];
					for (t = 0; i > t; t++) _[t] = t, O[t] = t;
					var T = function(e, t) {
						var r = O[e],
							n = O[t];
						_[r] = t, _[n] = e, O[e] = n, O[t] = r
					};
					for (r = 0; a > r; r++) {
						var C = new d;
						i > r && (b.push(y.length), y.push(1), x.push(r)), M.push(N.length);
						var S = v[r],
							z = v[r + 1];
						for (n = S; z > n; n++) t = l[n], C.set(_[t], u[n]);
						r > 0 && C.forEach(0, r - 1, function(e, t) {
							g._forEachRow(e, y, x, b, function(r, n) {
								r > e && C.accumulate(r, h(f(n, t)))
							})
						});
						var B = r,
							k = C.get(r),
							I = s(k);
						C.forEach(r + 1, i - 1, function(e, t) {
							var r = s(t);
							p(r, I) && (B = e, I = r, k = t)
						}), r !== B && (g._swapRows(r, B, w[1], y, x, b), g._swapRows(r, B, A[1], N, E, M), C.swap(r, B), T(r, B)), C.forEach(0, i - 1, function(e, t) {
							r >= e ? (N.push(t), E.push(e)) : (t = c(t, k), m(t, 0) || (y.push(t), x.push(e)))
						})
					}
					return M.push(N.length), b.push(y.length), {
						L: new g({
							values: y,
							index: x,
							ptr: b,
							size: w
						}),
						U: new g({
							values: N,
							index: E,
							ptr: M,
							size: A
						}),
						p: _,
						toString: function() {
							return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\nP: " + this.p
						}
					}
				};
			return y
		}
		var i = r(38),
			a = i.object;
		t.name = "lup", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = n(r(324)),
				s = n(r(335)),
				u = i("slu", {
					"SparseMatrix, number, number": function(e, t, r) {
						if (!o(t) || 0 > t || t > 3) throw new Error("Symbolic Ordering and Analysis order must be an integer number in the interval [0, 3]");
						if (0 > r || r > 1) throw new Error("Partial pivoting threshold must be a number from 0 to 1");
						var n = a(t, e, !1),
							i = s(e, n, r);
						return {
							L: i.L,
							U: i.U,
							p: i.pinv,
							q: n.q,
							toString: function() {
								return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\np: " + this.p.toString() + (this.q ? "\nq: " + this.q.toString() : "") + "\n"
							}
						}
					}
				});
			return u
		}
		var i = r(38),
			a = i.number,
			o = a.isInteger;
		t.name = "slu", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n) {
			var i = n(r(325)),
				a = n(r(330)),
				o = n(r(331)),
				s = n(r(332)),
				u = n(r(333)),
				c = function(e, t, r) {
					var n, c = t._ptr,
						l = t._size,
						p = l[1],
						m = {};
					if (m.q = i(e, t), e && !m.q) return null;
					if (r) {
						var h = e ? a(t, null, m.q, 0) : t;
						m.parent = o(h, 1);
						var g = s(m.parent, p);
						if (m.cp = u(h, m.parent, g, 1), h && m.parent && m.cp && f(h, m))
							for (m.unz = 0, n = 0; p > n; n++) m.unz += m.cp[n]
					} else m.unz = 4 * c[p] + p, m.lnz = m.unz;
					return m
				},
				f = function(e, t) {
					var r = e._ptr,
						n = e._index,
						i = e._size,
						a = i[0],
						o = i[1];
					t.pinv = [], t.leftmost = [];
					var s, u, c, f, l, p = t.parent,
						m = t.pinv,
						h = t.leftmost,
						g = [],
						v = 0,
						d = a,
						y = a + o,
						x = a + 2 * o;
					for (u = 0; o > u; u++) g[d + u] = -1, g[y + u] = -1, g[x + u] = 0;
					for (s = 0; a > s; s++) h[s] = -1;
					for (u = o - 1; u >= 0; u--)
						for (f = r[u], l = r[u + 1], c = f; l > c; c++) h[n[c]] = u;
					for (s = a - 1; s >= 0; s--) m[s] = -1, u = h[s], -1 != u && (0 === g[x + u]++ && (g[y + u] = s), g[v + s] = g[d + u], g[d + u] = s);
					for (t.lnz = 0, t.m2 = a, u = 0; o > u; u++)
						if (s = g[d + u], t.lnz++, 0 > s && (s = t.m2++), m[s] = u, !(--x[u] <= 0)) {
							t.lnz += g[x + u];
							var b = p[u]; - 1 != b && (0 === g[x + b] && (g[y + b] = g[y + u]), g[v + g[y + u]] = g[d + b], g[d + b] = g[v + s], g[x + b] += g[x + u])
						}
					for (s = 0; a > s; s++) m[s] < 0 && (m[s] = u++);
					return !0
				};
			return c
		}
		t.name = "cs_sqr", t.path = "sparse", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n) {
			var i = n(r(326)),
				a = n(r(327)),
				o = n(r(328)),
				s = n(r(49)),
				u = n(r(83)),
				c = n(r(329)),
				f = function(e, t) {
					if (!t || 0 >= e || e > 3) return null;
					var r = t._size,
						n = r[0],
						s = r[1],
						u = 0,
						c = Math.max(16, 10 * Math.sqrt(s));
					c = Math.min(s - 2, c);
					var f = l(e, t, n, s, c);
					a(f, g, null);
					for (var v, d, y, x, b, w, N, E, M, A, _, O, T, C, S, z, B = f._index, k = f._ptr, I = k[s], R = [], P = [], U = 0, q = s + 1, L = 2 * (s + 1), F = 3 * (s + 1), D = 4 * (s + 1), $ = 5 * (s + 1), j = 6 * (s + 1), G = 7 * (s + 1), H = R, V = p(s, k, P, U, F, H, L, G, q, j, D, $), Z = m(s, k, P, $, D, j, c, q, F, H, L), Y = 0; s > Z;) {
						for (y = -1; s > Y && -1 == (y = P[F + Y]); Y++); - 1 != P[L + y] && (H[P[L + y]] = -1), P[F + Y] = P[L + y];
						var W = P[D + y],
							X = P[q + y];
						Z += X;
						var J = 0;
						P[q + y] = -X;
						var Q = k[y],
							K = 0 === W ? Q : I,
							ee = K;
						for (x = 1; W + 1 >= x; x++) {
							for (x > W ? (w = y, N = Q, E = P[U + y] - W) : (w = B[Q++], N = k[w], E = P[U + w]), b = 1; E >= b; b++) v = B[N++], (M = P[q + v]) <= 0 || (J += M, P[q + v] = -M, B[ee++] = v, -1 != P[L + v] && (H[P[L + v]] = H[v]), -1 != H[v] ? P[L + H[v]] = P[L + v] : P[F + P[$ + v]] = P[L + v]);
							w != y && (k[w] = i(y), P[j + w] = 0)
						}
						for (0 !== W && (I = ee), P[$ + y] = J, k[y] = K, P[U + y] = ee - K, P[D + y] = -2, V = h(V, u, P, j, s), A = K; ee > A; A++)
							if (v = B[A], !((_ = P[D + v]) <= 0)) {
								M = -P[q + v];
								var te = V - M;
								for (Q = k[v], O = k[v] + _ - 1; O >= Q; Q++) w = B[Q], P[j + w] >= V ? P[j + w] -= M : 0 !== P[j + w] && (P[j + w] = P[$ + w] + te)
							}
						for (A = K; ee > A; A++) {
							for (v = B[A], O = k[v], T = O + P[D + v] - 1, C = O, S = 0, z = 0, Q = O; T >= Q; Q++)
								if (w = B[Q], 0 !== P[j + w]) {
									var re = P[j + w] - V;
									re > 0 ? (z += re, B[C++] = w, S += w) : (k[w] = i(y), P[j + w] = 0)
								}
							P[D + v] = C - O + 1;
							var ne = C,
								ie = O + P[U + v];
							for (Q = T + 1; ie > Q; Q++) {
								d = B[Q];
								var ae = P[q + d];
								0 >= ae || (z += ae, B[C++] = d, S += d)
							}
							0 === z ? (k[v] = i(y), M = -P[q + v], J -= M, X += M, Z += M, P[q + v] = 0, P[D + v] = -1) : (P[$ + v] = Math.min(P[$ + v], z), B[C] = B[ne], B[ne] = B[O], B[O] = y, P[U + v] = C - O + 1, S = (0 > S ? -S : S) % s, P[L + v] = P[G + S], P[G + S] = v, H[v] = S)
						}
						for (P[$ + y] = J, u = Math.max(u, J), V = h(V + u, u, P, j, s), A = K; ee > A; A++)
							if (v = B[A], !(P[q + v] >= 0))
								for (S = H[v], v = P[G + S], P[G + S] = -1; - 1 != v && -1 != P[L + v]; v = P[L + v], V++) {
									for (E = P[U + v], _ = P[D + v], Q = k[v] + 1; Q <= k[v] + E - 1; Q++) P[j + B[Q]] = V;
									var oe = v;
									for (d = P[L + v]; - 1 != d;) {
										var se = P[U + d] === E && P[D + d] === _;
										for (Q = k[d] + 1; se && Q <= k[d] + E - 1; Q++) P[j + B[Q]] != V && (se = 0);
										se ? (k[d] = i(v), P[q + v] += P[q + d], P[q + d] = 0, P[D + d] = -1, d = P[L + d], P[L + oe] = d) : (oe = d, d = P[L + d])
									}
								}
						for (Q = K, A = K; ee > A; A++) v = B[A], (M = -P[q + v]) <= 0 || (P[q + v] = M, z = P[$ + v] + J - M, z = Math.min(z, s - Z - M), -1 != P[F + z] && (H[P[F + z]] = v), P[L + v] = P[F + z], H[v] = -1, P[F + z] = v, Y = Math.min(Y, z), P[$ + v] = z, B[Q++] = v);
						P[q + y] = X, 0 === (P[U + y] = Q - K) && (k[y] = -1, P[j + y] = 0), 0 !== W && (I = Q)
					}
					for (v = 0; s > v; v++) k[v] = i(k[v]);
					for (d = 0; s >= d; d++) P[F + d] = -1;
					for (d = s; d >= 0; d--) P[q + d] > 0 || (P[L + d] = P[F + k[d]], P[F + k[d]] = d);
					for (w = s; w >= 0; w--) P[q + w] <= 0 || -1 != k[w] && (P[L + w] = P[F + k[w]], P[F + k[w]] = w);
					for (y = 0, v = 0; s >= v; v++) - 1 == k[v] && (y = o(v, y, P, F, L, R, j));
					return R.splice(R.length - 1, 1), R
				},
				l = function(e, t, r, n, i) {
					var a = c(t);
					if (1 === e && n === r) return s(t, a);
					if (2 == e) {
						for (var o = a._index, f = a._ptr, l = 0, p = 0; r > p; p++) {
							var m = f[p];
							if (f[p] = l, !(f[p + 1] - m > i))
								for (var h = f[p + 1]; h > m; m++) o[l++] = o[m]
						}
						return f[r] = l, t = c(a), u(a, t)
					}
					return u(a, t)
				},
				p = function(e, t, r, n, i, a, o, s, u, c, f, l) {
					for (var p = 0; e > p; p++) r[n + p] = t[p + 1] - t[p];
					r[n + e] = 0;
					for (var m = 0; e >= m; m++) r[i + m] = -1, a[m] = -1, r[o + m] = -1, r[s + m] = -1, r[u + m] = 1, r[c + m] = 1, r[f + m] = 0, r[l + m] = r[n + m];
					var g = h(0, 0, r, c, e);
					return r[f + e] = -2, t[e] = -1, r[c + e] = 0, g
				},
				m = function(e, t, r, n, a, o, s, u, c, f, l) {
					for (var p = 0, m = 0; e > m; m++) {
						var h = r[n + m];
						if (0 === h) r[a + m] = -2, p++, t[m] = -1, r[o + m] = 0;
						else if (h > s) r[u + m] = 0, r[a + m] = -1, p++, t[m] = i(e), r[u + e]++;
						else {
							var g = r[c + h]; - 1 != g && (f[g] = m), r[l + m] = r[c + h], r[c + h] = m
						}
					}
					return p
				},
				h = function(e, t, r, n, i) {
					if (2 > e || 0 > e + t) {
						for (var a = 0; i > a; a++) 0 !== r[n + a] && (r[n + a] = 1);
						e = 2
					}
					return e
				},
				g = function(e, t) {
					return e != t
				};
			return f
		}
		t.name = "cs_amd", t.path = "sparse", t.factory = n
	}, function(e, t) {
		"use strict";

		function r() {
			var e = function(e) {
				return -e - 2
			};
			return e
		}
		t.name = "cs_flip", t.path = "sparse", t.factory = r
	}, function(e, t) {
		"use strict";

		function r() {
			var e = function(e, t, r) {
				for (var n = e._values, i = e._index, a = e._ptr, o = e._size, s = o[1], u = 0, c = 0; s > c; c++) {
					var f = a[c];
					for (a[c] = u; f < a[c + 1]; f++) t(i[f], c, n ? n[f] : 1, r) && (i[u] = i[f], n && (n[u] = n[f]), u++)
				}
				return a[s] = u, i.splice(u, i.length - u), n && n.splice(u, n.length - u), u
			};
			return e
		}
		t.name = "cs_fkeep", t.path = "sparse", t.factory = r
	}, function(e, t) {
		"use strict";

		function r() {
			var e = function(e, t, r, n, i, a, o) {
				var s = 0;
				for (r[o] = e; s >= 0;) {
					var u = r[o + s],
						c = r[n + u]; - 1 == c ? (s--, a[t++] = u) : (r[n + u] = r[i + c], ++s, r[o + s] = c)
				}
				return t
			};
			return e
		}
		t.name = "cs_tdfs", t.path = "sparse", t.factory = r
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = r(29),
				u = n(r(50)),
				c = e.DenseMatrix,
				f = e.SparseMatrix,
				l = o("transpose", {
					Array: function(e) {
						return l(u(e)).valueOf()
					},
					Matrix: function(e) {
						var t, r = e.size();
						switch (r.length) {
							case 1:
								t = e.clone();
								break;
							case 2:
								var n = r[0],
									i = r[1];
								if (0 === i) throw new RangeError("Cannot transpose a 2D matrix with no columns (size: " + a(r) + ")");
								switch (e.storage()) {
									case "dense":
										t = p(e, n, i);
										break;
									case "sparse":
										t = m(e, n, i)
								}
								break;
							default:
								throw new RangeError("Matrix must be a vector or two dimensional (size: " + a(this._size) + ")")
						}
						return t
					},
					any: function(e) {
						return i(e)
					}
				}),
				p = function(e, t, r) {
					for (var n, a = e._data, o = [], s = 0; r > s; s++) {
						n = o[s] = [];
						for (var u = 0; t > u; u++) n[u] = i(a[u][s])
					}
					return new c({
						data: o,
						size: [r, t],
						datatype: e._datatype
					})
				},
				m = function(e, t, r) {
					for (var n = e._values, a = e._index, o = e._ptr, s = n ? [] : void 0, u = [], c = [], l = [], p = 0; t > p; p++) l[p] = 0;
					var m, h, g;
					for (m = 0, h = a.length; h > m; m++) l[a[m]]++;
					for (var v = 0, d = 0; t > d; d++) c.push(v), v += l[d], l[d] = c[d];
					for (c.push(v), g = 0; r > g; g++)
						for (var y = o[g], x = o[g + 1], b = y; x > b; b++) {
							var w = l[a[b]]++;
							u[w] = g, n && (s[w] = i(n[b]))
						}
					return new f({
						values: s,
						index: u,
						ptr: c,
						size: [r, t],
						datatype: e._datatype
					})
				};
			return l.toTex = "\\left(${args[0]}\\right)" + s.operators.transpose, l
		}
		var i = r(3).clone,
			a = r(23).format;
		t.name = "transpose", t.factory = n
	}, function(e, t) {
		"use strict";

		function r(e) {
			var t = e.SparseMatrix,
				r = function(e, r, n, i) {
					for (var a = e._values, o = e._index, s = e._ptr, u = e._size, c = e._datatype, f = u[0], l = u[1], p = i && e._values ? [] : null, m = [], h = [], g = 0, v = 0; l > v; v++) {
						h[v] = g;
						for (var d = n ? n[v] : v, y = s[d], x = s[d + 1], b = y; x > b; b++) {
							var w = r ? r[o[b]] : o[b];
							m[g] = w, p && (p[g] = a[b]), g++
						}
					}
					return h[l] = g, new t({
						values: p,
						index: m,
						ptr: h,
						size: [f, l],
						datatype: c
					})
				};
			return r
		}
		t.name = "cs_permute", t.path = "sparse", t.factory = r
	}, function(e, t) {
		"use strict";

		function r() {
			var e = function(e, t) {
				if (!e) return null;
				var r, n, i = e._index,
					a = e._ptr,
					o = e._size,
					s = o[0],
					u = o[1],
					c = [],
					f = [],
					l = 0,
					p = u;
				if (t)
					for (r = 0; s > r; r++) f[p + r] = -1;
				for (var m = 0; u > m; m++) {
					c[m] = -1, f[l + m] = -1;
					for (var h = a[m], g = a[m + 1], v = h; g > v; v++) {
						var d = i[v];
						for (r = t ? f[p + d] : d; - 1 != r && m > r; r = n) n = f[l + r], f[l + r] = m, -1 == n && (c[r] = m);
						t && (f[p + d] = m)
					}
				}
				return c
			};
			return e
		}
		t.name = "cs_etree", t.path = "sparse", t.factory = r
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n) {
			var i = n(r(328)),
				a = function(e, t) {
					if (!e) return null;
					var r, n = 0,
						a = [],
						o = [],
						s = 0,
						u = t,
						c = 2 * t;
					for (r = 0; t > r; r++) o[s + r] = -1;
					for (r = t - 1; r >= 0; r--) - 1 != e[r] && (o[u + r] = o[s + e[r]], o[s + e[r]] = r);
					for (r = 0; t > r; r++) - 1 == e[r] && (n = i(r, n, o, s, u, a, c));
					return a
				};
			return a
		}
		t.name = "cs_post", t.path = "sparse", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n) {
			var i = n(r(329)),
				a = n(r(334)),
				o = function(e, t, r, n) {
					if (!e || !t || !r) return null;
					var o, s, u, c, f, l, p, m = e._size,
						h = m[0],
						g = m[1],
						v = 4 * g + (n ? g + h + 1 : 0),
						d = [],
						y = 0,
						x = g,
						b = 2 * g,
						w = 3 * g,
						N = 4 * g,
						E = 5 * g + 1;
					for (u = 0; v > u; u++) d[u] = -1;
					var M = [],
						A = i(e),
						_ = A._index,
						O = A._ptr;
					for (u = 0; g > u; u++)
						for (s = r[u], M[s] = -1 == d[w + s] ? 1 : 0; - 1 != s && -1 == d[w + s]; s = t[s]) d[w + s] = u;
					if (n) {
						for (u = 0; g > u; u++) d[r[u]] = u;
						for (o = 0; h > o; o++) {
							for (u = g, l = O[o], p = O[o + 1], f = l; p > f; f++) u = Math.min(u, d[_[f]]);
							d[E + o] = d[N + u], d[N + u] = o
						}
					}
					for (o = 0; g > o; o++) d[y + o] = o;
					for (u = 0; g > u; u++) {
						for (s = r[u], -1 != t[s] && M[t[s]]--, c = n ? d[N + u] : s; - 1 != c; c = n ? d[E + c] : -1)
							for (f = O[c]; f < O[c + 1]; f++) {
								o = _[f];
								var T = a(o, s, d, w, x, b, y);
								T.jleaf >= 1 && M[s]++, 2 == T.jleaf && M[T.q]--
							} - 1 != t[s] && (d[y + s] = t[s])
					}
					for (s = 0; g > s; s++) - 1 != t[s] && (M[t[s]] += M[s]);
					return M
				};
			return o
		}
		t.name = "cs_counts", t.path = "sparse", t.factory = n
	}, function(e, t) {
		"use strict";

		function r() {
			var e = function(e, t, r, n, i, a, o) {
				var s, u, c, f, l = 0;
				if (t >= e || r[n + t] <= r[i + e]) return -1;
				if (r[i + e] = r[n + t], c = r[a + e], r[a + e] = t, -1 === c) l = 1, f = e;
				else {
					for (l = 2, f = c; f != r[o + f]; f = r[o + f]);
					for (s = c; s != f; s = u) u = r[o + s], r[o + s] = f
				}
				return {
					jleaf: l,
					q: f
				}
			};
			return e
		}
		t.name = "cs_leaf", t.path = "sparse", t.factory = r
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n) {
			var i = n(r(85)),
				a = n(r(78)),
				o = n(r(83)),
				s = n(r(62)),
				u = n(r(336)),
				c = n(r(337)),
				f = e.SparseMatrix,
				l = function(e, t, r) {
					if (!e) return null;
					var n, l = e._size,
						p = l[1],
						m = 100,
						h = 100;
					t && (n = t.q, m = t.lnz || m, h = t.unz || h);
					var g, v, d = [],
						y = [],
						x = [],
						b = new f({
							values: d,
							index: y,
							ptr: x,
							size: [p, p]
						}),
						w = [],
						N = [],
						E = [],
						M = new f({
							values: w,
							index: N,
							ptr: E,
							size: [p, p]
						}),
						A = [],
						_ = [],
						O = [];
					for (g = 0; p > g; g++) _[g] = 0, A[g] = -1, x[g + 1] = 0;
					m = 0, h = 0;
					for (var T = 0; p > T; T++) {
						x[T] = m, E[T] = h;
						var C = n ? n[T] : T,
							S = c(b, e, C, O, _, A, 1),
							z = -1,
							B = -1;
						for (v = S; p > v; v++)
							if (g = O[v], A[g] < 0) {
								var k = i(_[g]);
								s(k, B) && (B = k, z = g)
							} else N[h] = A[g], w[h++] = _[g];
						if (-1 == z || 0 >= B) return null;
						A[C] < 0 && u(i(_[C]), o(B, r)) && (z = C);
						var I = _[z];
						for (N[h] = T, w[h++] = I, A[z] = T, y[m] = z, d[m++] = 1, v = S; p > v; v++) g = O[v], A[g] < 0 && (y[m] = g, d[m++] = a(_[g], I)), _[g] = 0
					}
					for (x[p] = m, E[p] = h, v = 0; m > v; v++) y[v] = A[y[v]];
					return d.splice(m, d.length - m), y.splice(m, y.length - m), w.splice(h, w.length - h), N.splice(h, N.length - h), {
						L: b,
						U: M,
						pinv: A
					}
				};
			return l
		}
		t.name = "cs_lu", t.path = "sparse", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(50)),
				s = n(r(59)),
				u = n(r(60)),
				c = n(r(61)),
				f = n(r(55)),
				l = n(r(56)),
				p = r(29),
				m = a("largerEq", {
					"boolean, boolean": function(e, t) {
						return e >= t
					},
					"number, number": function(e, r) {
						return e >= r || i(e, r, t.epsilon)
					},
					"BigNumber, BigNumber": function(e, t) {
						return e.gte(t)
					},
					"Fraction, Fraction": function(e, t) {
						return -1 !== e.compare(t)
					},
					"Complex, Complex": function() {
						throw new TypeError("No ordering relation is defined for complex numbers")
					},
					"Unit, Unit": function(e, t) {
						if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
						return m(e.value, t.value)
					},
					"string, string": function(e, t) {
						return e >= t
					},
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = u(e, t, m);
										break;
									default:
										r = s(t, e, m, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = s(e, t, m, !1);
										break;
									default:
										r = f(e, t, m)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return m(o(e), o(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return m(o(e), t)
					},
					"Matrix, Array": function(e, t) {
						return m(e, o(t))
					},
					"Matrix, any": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = c(e, t, m, !1);
								break;
							default:
								r = l(e, t, m, !1)
						}
						return r
					},
					"any, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = c(t, e, m, !0);
								break;
							default:
								r = l(t, e, m, !0)
						}
						return r
					},
					"Array, any": function(e, t) {
						return l(o(e), t, m, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return l(o(t), e, m, !0).valueOf()
					}
				});
			return m.toTex = "\\left(${args[0]}" + p.operators.largerEq + "${args[1]}\\right)", m
		}
		var i = r(6).nearlyEqual;
		t.name = "largerEq", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n) {
			var i = n(r(78)),
				a = n(r(83)),
				o = n(r(74)),
				s = n(r(338)),
				u = function(e, t, r, n, u, c, f) {
					var l, p, m, h, g = e._values,
						v = e._index,
						d = e._ptr,
						y = e._size,
						x = y[1],
						b = t._values,
						w = t._index,
						N = t._ptr,
						E = s(e, t, r, n, c);
					for (l = E; x > l; l++) u[n[l]] = 0;
					for (p = N[r], m = N[r + 1], l = p; m > l; l++) u[w[l]] = b[l];
					for (var M = E; x > M; M++) {
						var A = n[M],
							_ = c ? c[A] : A;
						if (!(0 > _))
							for (p = d[_], m = d[_ + 1], u[A] = i(u[A], g[f ? p : m - 1]), l = f ? p + 1 : p, h = f ? m : m - 1; h > l; l++) {
								var O = v[l];
								u[O] = o(u[O], a(g[l], u[A]))
							}
					}
					return E
				};
			return u
		}
		t.name = "cs_spsolve", t.path = "sparse", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n) {
			var i = n(r(339)),
				a = n(r(340)),
				o = n(r(341)),
				s = function(e, t, r, n, s) {
					var u, c, f, l = e._ptr,
						p = e._size,
						m = t._index,
						h = t._ptr,
						g = p[1],
						v = g;
					for (c = h[r], f = h[r + 1], u = c; f > u; u++) {
						var d = m[u];
						a(l, d) || (v = i(d, e, v, n, s))
					}
					for (u = v; g > u; u++) o(l, n[u]);
					return v
				};
			return s
		}
		t.name = "cs_reach", t.path = "sparse", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n) {
			var i = n(r(340)),
				a = n(r(341)),
				o = n(r(342)),
				s = function(e, t, r, n, s) {
					var u, c, f, l = t._index,
						p = t._ptr,
						m = t._size,
						h = m[1],
						g = 0;
					for (n[0] = e; g >= 0;) {
						e = n[g];
						var v = s ? s[e] : e;
						i(p, e) || (a(p, e), n[h + g] = 0 > v ? 0 : o(p[v]));
						var d = 1;
						for (c = n[h + g], f = 0 > v ? 0 : o(p[v + 1]); f > c; c++)
							if (u = l[c], !i(p, u)) {
								n[h + g] = c, n[++g] = u, d = 0;
								break
							}
						d && (g--, n[--r] = e)
					}
					return r
				};
			return s
		}
		t.name = "cs_dfs", t.path = "sparse", t.factory = n
	}, function(e, t) {
		"use strict";

		function r() {
			var e = function(e, t) {
				return e[t] < 0
			};
			return e
		}
		t.name = "cs_marked", t.path = "sparse", t.factory = r
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n) {
			var i = n(r(326)),
				a = function(e, t) {
					e[t] = i(e[t])
				};
			return a
		}
		t.name = "cs_mark", t.path = "sparse", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n) {
			var i = n(r(326)),
				a = function(e) {
					return 0 > e ? i(e) : e
				};
			return a
		}
		t.name = "cs_unflip", t.path = "sparse", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = n(r(50)),
				o = n(r(78)),
				s = n(r(77)),
				u = n(r(74)),
				c = n(r(47)),
				f = n(r(344)),
				l = e.DenseMatrix,
				p = i("lsolve", {
					"SparseMatrix, Array | Matrix": function(e, t) {
						return h(e, t)
					},
					"DenseMatrix, Array | Matrix": function(e, t) {
						return m(e, t)
					},
					"Array, Array | Matrix": function(e, t) {
						var r = a(e),
							n = m(r, t);
						return n.valueOf()
					}
				}),
				m = function(e, t) {
					t = f(e, t, !0);
					for (var r = t._data, n = e._size[0], i = e._size[1], a = [], p = e._data, m = 0; i > m; m++) {
						var h, g = r[m][0] || 0;
						if (c(g, 0)) h = 0;
						else {
							var v = p[m][m];
							if (c(v, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
							h = o(g, v);
							for (var d = m + 1; n > d; d++) r[d] = [u(r[d][0] || 0, s(h, p[d][m]))]
						}
						a[m] = [h]
					}
					return new l({
						data: a,
						size: [n, 1]
					})
				},
				h = function(e, t) {
					t = f(e, t, !0);
					for (var r, n, i = t._data, a = e._size[0], p = e._size[1], m = e._values, h = e._index, g = e._ptr, v = [], d = 0; p > d; d++) {
						var y = i[d][0] || 0;
						if (c(y, 0)) v[d] = [0];
						else {
							var x = 0,
								b = [],
								w = [],
								N = g[d + 1];
							for (n = g[d]; N > n; n++) r = h[n], r === d ? x = m[n] : r > d && (b.push(m[n]), w.push(r));
							if (c(x, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
							var E = o(y, x);
							for (n = 0, N = w.length; N > n; n++) r = w[n], i[r] = [u(i[r][0] || 0, s(E, b[n]))];
							v[d] = [E]
						}
					}
					return new l({
						data: v,
						size: [a, 1]
					})
				};
			return p
		}
		t.name = "lsolve", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e) {
			var t = e.DenseMatrix,
				r = function(e, r, n) {
					var i = e.size();
					if (2 !== i.length) throw new RangeError("Matrix must be two dimensional (size: " + a.format(i) + ")");
					var u = i[0],
						c = i[1];
					if (u !== c) throw new RangeError("Matrix must be square (size: " + a.format(i) + ")");
					var f, l, p;
					if (r && r.isMatrix === !0) {
						var m = r.size();
						if (1 === m.length) {
							if (m[0] !== u) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
							for (f = [], p = r._data, l = 0; u > l; l++) f[l] = [p[l]];
							return new t({
								data: f,
								size: [u, 1],
								datatype: r._datatype
							})
						}
						if (2 === m.length) {
							if (m[0] !== u || 1 !== m[1]) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
							if (r.isDenseMatrix === !0) {
								if (n) {
									for (f = [], p = r._data, l = 0; u > l; l++) f[l] = [p[l][0]];
									return new t({
										data: f,
										size: [u, 1],
										datatype: r._datatype
									})
								}
								return r
							}
							for (f = [], l = 0; u > l; l++) f[l] = [0];
							for (var h = r._values, g = r._index, v = r._ptr, d = v[1], y = v[0]; d > y; y++) l = g[y], f[l][0] = h[y];
							return new t({
								data: f,
								size: [u, 1],
								datatype: r._datatype
							})
						}
						throw new RangeError("Dimension mismatch. Matrix columns must match vector length.")
					}
					if (s(r)) {
						var x = o.size(r);
						if (1 === x.length) {
							if (x[0] !== u) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
							for (f = [], l = 0; u > l; l++) f[l] = [r[l]];
							return new t({
								data: f,
								size: [u, 1]
							})
						}
						if (2 === x.length) {
							if (x[0] !== u || 1 !== x[1]) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
							for (f = [], l = 0; u > l; l++) f[l] = [r[l][0]];
							return new t({
								data: f,
								size: [u, 1]
							})
						}
						throw new RangeError("Dimension mismatch. Matrix columns must match vector length.")
					}
				};
			return r
		}
		var i = r(38),
			a = i.string,
			o = i.array,
			s = Array.isArray;
		t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(50)),
				s = n(r(322)),
				u = n(r(323)),
				c = n(r(346)),
				f = n(r(344)),
				l = n(r(347)),
				p = n(r(343)),
				m = a("lusolve", {
					"Array, Array | Matrix": function(e, t) {
						e = o(e);
						var r = s(e),
							n = g(r.L, r.U, r.p, null, t);
						return n.valueOf()
					},
					"DenseMatrix, Array | Matrix": function(e, t) {
						var r = s(e);
						return g(r.L, r.U, r.p, null, t)
					},
					"SparseMatrix, Array | Matrix": function(e, t) {
						var r = s(e);
						return g(r.L, r.U, r.p, null, t)
					},
					"SparseMatrix, Array | Matrix, number, number": function(e, t, r, n) {
						var i = u(e, r, n);
						return g(i.L, i.U, i.p, i.q, t)
					},
					"Object, Array | Matrix": function(e, t) {
						return g(e.L, e.U, e.p, e.q, t)
					}
				}),
				h = function(e) {
					if (e && e.isMatrix === !0) return e;
					if (i(e)) return o(e);
					throw new TypeError("Invalid Matrix LU decomposition")
				},
				g = function(e, t, r, n, i) {
					e = h(e), t = h(t), i = f(e, i, !1), r && (i._data = c(r, i._data));
					var a = p(e, i),
						o = l(t, a);
					return n && (o._data = c(n, o._data)), o
				};
			return m
		}
		var i = Array.isArray;
		t.name = "lusolve", t.factory = n
	}, function(e, t) {
		"use strict";

		function r() {
			var e = function(e, t, r) {
				var n, r = t.length,
					i = [];
				if (e)
					for (n = 0; r > n; n++) i[e[n]] = t[n];
				else
					for (n = 0; r > n; n++) i[n] = t[n];
				return i
			};
			return e
		}
		t.name = "cs_ipvec", t.path = "sparse", t.factory = r
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = n(r(50)),
				o = n(r(78)),
				s = n(r(77)),
				u = n(r(74)),
				c = n(r(47)),
				f = n(r(344)),
				l = e.DenseMatrix,
				p = i("usolve", {
					"SparseMatrix, Array | Matrix": function(e, t) {
						return h(e, t)
					},
					"DenseMatrix, Array | Matrix": function(e, t) {
						return m(e, t)
					},
					"Array, Array | Matrix": function(e, t) {
						var r = a(e),
							n = m(r, t);
						return n.valueOf()
					}
				}),
				m = function(e, t) {
					t = f(e, t, !0);
					for (var r = t._data, n = e._size[0], i = e._size[1], a = [], p = e._data, m = i - 1; m >= 0; m--) {
						var h, g = r[m][0] || 0;
						if (c(g, 0)) h = 0;
						else {
							var v = p[m][m];
							if (c(v, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
							h = o(g, v);
							for (var d = m - 1; d >= 0; d--) r[d] = [u(r[d][0] || 0, s(h, p[d][m]))]
						}
						a[m] = [h]
					}
					return new l({
						data: a,
						size: [n, 1]
					})
				},
				h = function(e, t) {
					t = f(e, t, !0);
					for (var r, n, i = t._data, a = e._size[0], p = e._size[1], m = e._values, h = e._index, g = e._ptr, v = [], d = p - 1; d >= 0; d--) {
						var y = i[d][0] || 0;
						if (c(y, 0)) v[d] = [0];
						else {
							var x = 0,
								b = [],
								w = [],
								N = g[d],
								E = g[d + 1];
							for (n = E - 1; n >= N; n--) r = h[n], r === d ? x = m[n] : d > r && (b.push(m[n]), w.push(r));
							if (c(x, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
							var M = o(y, x);
							for (n = 0, E = w.length; E > n; n++) r = w[n], i[r] = [u(i[r][0], s(M, b[n]))];
							v[d] = [M]
						}
					}
					return new l({
						data: v,
						size: [a, 1]
					})
				};
			return p
		}
		t.name = "usolve", t.factory = n
	}, function(e, t, r) {
		e.exports = [r(85), r(49), r(51), r(349), r(351), r(352), r(310), r(353), r(355), r(357), r(80), r(358), r(359), r(360), r(361), r(364), r(82), r(367), r(368), r(83), r(369), r(371), r(79), r(372), r(374), r(362), r(375), r(74), r(75), r(376), r(377)]
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			function o(e) {
				if (0 === e) return e;
				var t, r = 0 > e;
				return r && (e = -e), isFinite(e) ? (t = Math.exp(Math.log(e) / 3), t = (e / (t * t) + 2 * t) / 3) : t = e, r ? -t : t
			}

			function s(r, n) {
				var i = r.toPolar(),
					a = m(new e.Complex(o(i.r), 0), h(new e.Complex(0, i.phi / 3)));
				if (n) {
					var s = [a, m(new e.Complex(o(i.r), 0), h(new e.Complex(0, i.phi / 3 + 2 * Math.PI / 3))), m(new e.Complex(o(i.r), 0), h(new e.Complex(0, i.phi / 3 - 2 * Math.PI / 3)))];
					return "array" === t.matrix ? s : p(s)
				}
				return a
			}

			function u(e) {
				if (e.isZero()) return e;
				var t, r = e.isNegative();
				return r && (e = e.neg()), e.isFinite() ? (t = e.ln().div(3).exp(), t = e.div(t.times(t)).plus(t.times(2)).div(3)) : t = 1 / 0, r ? t.neg() : t
			}

			function c(t) {
				if (t.value && t.value.isComplex) {
					var r = t.clone();
					return r.value = 1, r = r.pow(1 / 3), r.value = s(t.value), r
				}
				var n = l(t.value);
				n && (t.value = f(t.value));
				var i;
				i = t.value && t.value.isBigNumber ? new e.BigNumber(1).div(3) : t.value && t.value.isFraction ? new e.Fraction(1, 3) : 1 / 3;
				var r = t.pow(i);
				return n && (r.value = f(r.value)), r
			}
			var f = n(r(75)),
				l = n(r(350)),
				p = n(r(50)),
				m = a.find(n(r(77)), ["Complex,Complex"]),
				h = a.find(n(r(80)), ["Complex"]),
				g = a("cbrt", {
					number: o,
					Complex: s,
					"Complex, boolean": s,
					BigNumber: u,
					Unit: c,
					"Array | Matrix": function(e) {
						return i(e, g, !0)
					}
				});
			return g.toTex = "\\sqrt[3]{${args[0]}}", g
		}
		var i = r(19);
		t.name = "cbrt", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("isNegative", {
				number: function(e) {
					return 0 > e
				},
				BigNumber: function(e) {
					return e.isNeg() && !e.isZero() && !e.isNaN()
				},
				Fraction: function(e) {
					return e.s < 0 && e.n > 0
				},
				Unit: function(e) {
					return a(e.value)
				},
				"Array | Matrix": function(e) {
					return i(e, a)
				}
			});
			return a
		}
		var i = r(19);
		r(6);
		t.name = "isNegative", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("ceil", {
				number: Math.ceil,
				Complex: function(t) {
					return new e.Complex(Math.ceil(t.re), Math.ceil(t.im))
				},
				BigNumber: function(e) {
					return e.ceil()
				},
				Fraction: function(e) {
					return e.ceil()
				},
				"Array | Matrix": function(e) {
					return i(e, a, !0)
				}
			});
			return a.toTex = "\\left\\lceil${args[0]}\\right\\rceil", a
		}
		var i = r(19);
		t.name = "ceil", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = a.find(n(r(77)), ["Complex,Complex"]),
				s = a("cube", {
					number: function(e) {
						return e * e * e
					},
					Complex: function(e) {
						return o(o(e, e), e)
					},
					BigNumber: function(e) {
						return e.times(e).times(e)
					},
					Fraction: function(e) {
						return e.mul(e).mul(e)
					},
					"Array | Matrix": function(e) {
						return i(e, s, !0)
					},
					Unit: function(e) {
						return e.pow(3)
					}
				});
			return s.toTex = "\\left(${args[0]}\\right)^3", s
		}
		var i = r(19);
		t.name = "cube", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = n(r(50)),
				o = n(r(78)),
				s = r(29),
				u = n(r(354)),
				c = n(r(59)),
				f = n(r(60)),
				l = n(r(84)),
				p = n(r(61)),
				m = n(r(55)),
				h = n(r(56)),
				g = i("dotDivide", {
					"any, any": o,
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = f(e, t, o, !1);
										break;
									default:
										r = u(t, e, o, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = c(e, t, o, !1);
										break;
									default:
										r = m(e, t, o)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return g(a(e), a(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return g(a(e), t)
					},
					"Matrix, Array": function(e, t) {
						return g(e, a(t))
					},
					"Matrix, any": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = l(e, t, o, !1);
								break;
							default:
								r = h(e, t, o, !1)
						}
						return r
					},
					"any, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = p(t, e, o, !0);
								break;
							default:
								r = h(t, e, o, !0)
						}
						return r
					},
					"Array, any": function(e, t) {
						return h(a(e), t, o, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return h(a(t), e, o, !0).valueOf()
					}
				});
			return g.toTex = "\\left(${args[0]}" + s.operators.dotDivide + "${args[1]}\\right)", g
		}
		t.name = "dotDivide", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(47)),
				s = e.SparseMatrix,
				u = function(e, t, r, n) {
					var u = e._data,
						c = e._size,
						f = e._datatype,
						l = t._values,
						p = t._index,
						m = t._ptr,
						h = t._size,
						g = t._datatype;
					if (c.length !== h.length) throw new i(c.length, h.length);
					if (c[0] !== h[0] || c[1] !== h[1]) throw new RangeError("Dimension mismatch. Matrix A (" + c + ") must match Matrix B (" + h + ")");
					if (!l) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
					var v, d = c[0],
						y = c[1],
						x = o,
						b = 0,
						w = r;
					"string" == typeof f && f === g && (v = f, x = a.find(o, [v, v]), b = a.convert(0, v), w = a.find(r, [v, v]));
					for (var N = [], E = [], M = [], A = 0; y > A; A++) {
						M[A] = E.length;
						for (var _ = m[A], O = m[A + 1], T = _; O > T; T++) {
							var C = p[T],
								S = n ? w(l[T], u[C][A]) : w(u[C][A], l[T]);
							x(S, b) || (E.push(C), N.push(S))
						}
					}
					return M[y] = E.length, new s({
						values: N,
						index: E,
						ptr: M,
						size: [d, y],
						datatype: v
					})
				};
			return u
		}
		var i = r(41);
		t.name = "algorithm02", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = n(r(50)),
				o = n(r(77)),
				s = r(29),
				u = n(r(354)),
				c = n(r(356)),
				f = n(r(84)),
				l = n(r(55)),
				p = n(r(56)),
				m = i("dotMultiply", {
					"any, any": o,
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = c(e, t, o, !1);
										break;
									default:
										r = u(t, e, o, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = u(e, t, o, !1);
										break;
									default:
										r = l(e, t, o)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return m(a(e), a(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return m(a(e), t)
					},
					"Matrix, Array": function(e, t) {
						return m(e, a(t))
					},
					"Matrix, any": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = f(e, t, o, !1);
								break;
							default:
								r = p(e, t, o, !1)
						}
						return r
					},
					"any, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = f(t, e, o, !0);
								break;
							default:
								r = p(t, e, o, !0)
						}
						return r
					},
					"Array, any": function(e, t) {
						return p(a(e), t, o, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return p(a(t), e, o, !0).valueOf()
					}
				});
			return m.toTex = "\\left(${args[0]}" + s.operators.dotMultiply + "${args[1]}\\right)", m
		}
		t.name = "dotMultiply", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(47)),
				s = e.SparseMatrix,
				u = function(e, t, r) {
					var n = e._values,
						u = e._index,
						c = e._ptr,
						f = e._size,
						l = e._datatype,
						p = t._values,
						m = t._index,
						h = t._ptr,
						g = t._size,
						v = t._datatype;
					if (f.length !== g.length) throw new i(f.length, g.length);
					if (f[0] !== g[0] || f[1] !== g[1]) throw new RangeError("Dimension mismatch. Matrix A (" + f + ") must match Matrix B (" + g + ")");
					var d, y = f[0],
						x = f[1],
						b = o,
						w = 0,
						N = r;
					"string" == typeof l && l === v && (d = l, b = a.find(o, [d, d]), w = a.convert(0, d), N = a.find(r, [d, d]));
					var E, M, A, _, O, T = n && p ? [] : void 0,
						C = [],
						S = [],
						z = new s({
							values: T,
							index: C,
							ptr: S,
							size: [y, x],
							datatype: d
						}),
						B = T ? [] : void 0,
						k = [];
					for (M = 0; x > M; M++) {
						S[M] = C.length;
						var I = M + 1;
						if (B)
							for (_ = h[M], O = h[M + 1], A = _; O > A; A++) E = m[A], k[E] = I, B[E] = p[A];
						for (_ = c[M], O = c[M + 1], A = _; O > A; A++)
							if (E = u[A], B) {
								var R = k[E] === I ? B[E] : w,
									P = N(n[A], R);
								b(P, w) || (C.push(E), T.push(P))
							} else C.push(E)
					}
					return S[x] = C.length, z
				};
			return u
		}
		var i = r(41);
		t.name = "algorithm09", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = n(r(50)),
				o = n(r(79)),
				s = r(29),
				u = n(r(59)),
				c = n(r(60)),
				f = n(r(84)),
				l = n(r(61)),
				p = n(r(55)),
				m = n(r(56)),
				h = i("dotPow", {
					"any, any": o,
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = c(e, t, o, !1);
										break;
									default:
										r = u(t, e, o, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = u(e, t, o, !1);
										break;
									default:
										r = p(e, t, o)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return h(a(e), a(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return h(a(e), t)
					},
					"Matrix, Array": function(e, t) {
						return h(e, a(t))
					},
					"Matrix, any": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = f(e, t, h, !1);
								break;
							default:
								r = m(e, t, h, !1)
						}
						return r
					},
					"any, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = l(t, e, h, !0);
								break;
							default:
								r = m(t, e, h, !0)
						}
						return r
					},
					"Array, any": function(e, t) {
						return m(a(e), t, h, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return m(a(t), e, h, !0).valueOf()
					}
				});
			return h.toTex = "\\left(${args[0]}" + s.operators.dotPow + "${args[1]}\\right)", h
		}
		t.name = "dotPow", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("fix", {
				number: function(e) {
					return e > 0 ? Math.floor(e) : Math.ceil(e)
				},
				Complex: function(t) {
					return new e.Complex(t.re > 0 ? Math.floor(t.re) : Math.ceil(t.re), t.im > 0 ? Math.floor(t.im) : Math.ceil(t.im))
				},
				BigNumber: function(e) {
					return e.isNegative() ? e.ceil() : e.floor()
				},
				Fraction: function(e) {
					return e.s < 0 ? e.ceil() : e.floor()
				},
				"Array | Matrix": function(e) {
					return i(e, a, !0)
				}
			});
			return a.toTex = "\\mathrm{${name}}\\left(${args}\\right)", a
		}
		var i = r(19);
		t.name = "fix", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("floor", {
				number: Math.floor,
				Complex: function(t) {
					return new e.Complex(Math.floor(t.re), Math.floor(t.im))
				},
				BigNumber: function(e) {
					return e.floor()
				},
				Fraction: function(e) {
					return e.floor()
				},
				"Array | Matrix": function(e) {
					return i(e, a, !0)
				}
			});
			return a.toTex = "\\left\\lfloor${args[0]}\\right\\rfloor", a
		}
		var i = r(19);
		t.name = "floor", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			function o(t, r) {
				if (!t.isInt() || !r.isInt()) throw new Error("Parameters in function gcd must be integer numbers");
				for (var n = new e.BigNumber(0); !r.isZero();) {
					var i = t.mod(r);
					t = r, r = i
				}
				return t.lt(n) ? t.neg() : t
			}
			var s = n(r(50)),
				u = n(r(52)),
				c = n(r(53)),
				f = n(r(54)),
				l = n(r(55)),
				p = n(r(56)),
				m = a("gcd", {
					"number, number": i,
					"BigNumber, BigNumber": o,
					"Fraction, Fraction": function(e, t) {
						return e.gcd(t)
					},
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = c(e, t, m);
										break;
									default:
										r = u(t, e, m, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = u(e, t, m, !1);
										break;
									default:
										r = l(e, t, m)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return m(s(e), s(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return m(s(e), t)
					},
					"Matrix, Array": function(e, t) {
						return m(e, s(t))
					},
					"Matrix, number | BigNumber": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = f(e, t, m, !1);
								break;
							default:
								r = p(e, t, m, !1)
						}
						return r
					},
					"number | BigNumber, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = f(t, e, m, !0);
								break;
							default:
								r = p(t, e, m, !0)
						}
						return r
					},
					"Array, number | BigNumber": function(e, t) {
						return p(s(e), t, m, !1).valueOf()
					},
					"number | BigNumber, Array": function(e, t) {
						return p(s(t), e, m, !0).valueOf()
					},
					"Array | Matrix | number | BigNumber, Array | Matrix | number | BigNumber, ...Array | Matrix | number | BigNumber": function(e, t, r) {
						for (var n = m(e, t), i = 0; i < r.length; i++) n = m(n, r[i]);
						return n
					}
				});
			return m.toTex = "\\gcd\\left(${args}\\right)", m
		}

		function i(e, t) {
			if (!a(e) || !a(t)) throw new Error("Parameters in function gcd must be integer numbers");
			for (var r; 0 != t;) r = e % t, e = t, t = r;
			return 0 > e ? -e : e
		}
		var a = r(6).isInteger;
		t.name = "gcd", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			function o(e) {
				for (var t = 0, r = 0, n = 0; n < e.length; n++) {
					var i = s(e[n]);
					p(r, i) ? (t = f(t, f(c(r, i), c(r, i))), t = u(t, 1), r = i) : t = u(t, m(i) ? f(c(i, r), c(i, r)) : i)
				}
				return f(r, l(t))
			}
			var s = n(r(85)),
				u = n(r(51)),
				c = n(r(78)),
				f = n(r(77)),
				l = n(r(362)),
				p = n(r(58)),
				m = n(r(363)),
				h = a("hypot", {
					"... number | BigNumber": o,
					Array: function(e) {
						return h.apply(h, i(e))
					},
					Matrix: function(e) {
						return h.apply(h, i(e.toArray()))
					}
				});
			return h.toTex = "\\hypot\\left(${args}\\right)", h
		}
		var i = r(39).flatten;
		t.name = "hypot", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			function a(r) {
				return r >= 0 || t.predictable ? Math.sqrt(r) : o(new e.Complex(r, 0))
			}

			function o(t) {
				var r, n, i = Math.sqrt(t.re * t.re + t.im * t.im);
				return r = t.re >= 0 ? .5 * Math.sqrt(2 * (i + t.re)) : Math.abs(t.im) / Math.sqrt(2 * (i - t.re)), n = t.re <= 0 ? .5 * Math.sqrt(2 * (i - t.re)) : Math.abs(t.im) / Math.sqrt(2 * (i + t.re)), t.im >= 0 ? new e.Complex(r, n) : new e.Complex(r, -n)
			}
			var s = n("sqrt", {
				number: a,
				Complex: o,
				BigNumber: function(e) {
					return !e.isNegative() || t.predictable ? e.sqrt() : a(e.toNumber())
				},
				"Array | Matrix": function(e) {
					return i(e, s, !0)
				},
				Unit: function(e) {
					return e.pow(.5)
				}
			});
			return s.toTex = "\\sqrt{${args[0]}}", s
		}
		var i = r(19);
		t.name = "sqrt", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("isPositive", {
				number: function(e) {
					return e > 0
				},
				BigNumber: function(e) {
					return !e.isNeg() && !e.isZero() && !e.isNaN()
				},
				Fraction: function(e) {
					return e.s > 0 && e.n > 0
				},
				Unit: function(e) {
					return a(e.value)
				},
				"Array | Matrix": function(e) {
					return i(e, a)
				}
			});
			return a
		}
		var i = r(19);
		r(6);
		t.name = "isPositive", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			function o(t, r) {
				if (!t.isInt() || !r.isInt()) throw new Error("Parameters in function lcm must be integer numbers");
				if (t.isZero() || r.isZero()) return new e.BigNumber(0);
				for (var n = t.times(r); !r.isZero();) {
					var i = r;
					r = t.mod(i), t = i
				}
				return n.div(t).abs()
			}
			var s = n(r(50)),
				u = n(r(354)),
				c = n(r(365)),
				f = n(r(84)),
				l = n(r(55)),
				p = n(r(56)),
				m = a("lcm", {
					"number, number": i,
					"BigNumber, BigNumber": o,
					"Fraction, Fraction": function(t, r) {
						return 0 === t.n && 0 === r.n ? new e.Fraction(0) : t.mul(r).abs().div(t.gcd(r))
					},
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = c(e, t, m);
										break;
									default:
										r = u(t, e, m, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = u(e, t, m, !1);
										break;
									default:
										r = l(e, t, m)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return m(s(e), s(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return m(s(e), t)
					},
					"Matrix, Array": function(e, t) {
						return m(e, s(t))
					},
					"Matrix, number | BigNumber": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = f(e, t, m, !1);
								break;
							default:
								r = p(e, t, m, !1)
						}
						return r
					},
					"number | BigNumber, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = f(t, e, m, !0);
								break;
							default:
								r = p(t, e, m, !0)
						}
						return r
					},
					"Array, number | BigNumber": function(e, t) {
						return p(s(e), t, m, !1).valueOf()
					},
					"number | BigNumber, Array": function(e, t) {
						return p(s(t), e, m, !0).valueOf()
					},
					"Array | Matrix | number | BigNumber, Array | Matrix | number | BigNumber, ...Array | Matrix | number | BigNumber": function(e, t, r) {
						for (var n = m(e, t), i = 0; i < r.length; i++) n = m(n, r[i]);
						return n
					}
				});
			return m.toTex = "\\mathrm{${name}}\\left(${args}\\right)", m
		}

		function i(e, t) {
			if (!a(e) || !a(t)) throw new Error("Parameters in function lcm must be integer numbers");
			if (0 == e || 0 == t) return 0;
			for (var r, n = e * t; 0 != t;) r = t, t = e % r, e = r;
			return Math.abs(n / e)
		}
		var a = r(6).isInteger;
		t.name = "lcm", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = n(r(47)),
				u = e.SparseMatrix,
				c = function(e, t, r) {
					var n = e._values,
						c = e._size,
						f = e._datatype,
						l = t._values,
						p = t._size,
						m = t._datatype;
					if (c.length !== p.length) throw new a(c.length, p.length);
					if (c[0] !== p[0] || c[1] !== p[1]) throw new RangeError("Dimension mismatch. Matrix A (" + c + ") must match Matrix B (" + p + ")");
					var h, g = c[0],
						v = c[1],
						d = s,
						y = 0,
						x = r;
					"string" == typeof f && f === m && (h = f, d = o.find(s, [h, h]), y = o.convert(0, h), x = o.find(r, [h, h]));
					for (var b = n && l ? [] : void 0, w = [], N = [], E = new u({
							values: b,
							index: w,
							ptr: N,
							size: [g, v],
							datatype: h
						}), M = b ? [] : void 0, A = [], _ = [], O = 0; v > O; O++) {
						N[O] = w.length;
						var T = O + 1;
						if (i(e, O, A, M, _, T, E, x), i(t, O, A, M, _, T, E, x), M)
							for (var C = N[O]; C < w.length;) {
								var S = w[C];
								if (_[S] === T) {
									var z = M[S];
									d(z, y) ? w.splice(C, 1) : (b.push(z), C++)
								} else w.splice(C, 1)
							} else
								for (var B = N[O]; B < w.length;) {
									var k = w[B];
									_[k] !== T ? w.splice(B, 1) : B++
								}
					}
					return N[v] = w.length, E
				};
			return c
		}
		var i = r(366),
			a = r(41);
		t.name = "algorithm06", t.factory = n
	}, function(e, t) {
		"use strict";
		e.exports = function(e, t, r, n, i, a, o, s, u, c, f) {
			var l, p, m, h, g = e._values,
				v = e._index,
				d = e._ptr,
				y = o._index;
			if (n)
				for (p = d[t], m = d[t + 1], l = p; m > l; l++) h = v[l], r[h] !== a ? (r[h] = a, y.push(h), c ? (n[h] = u ? s(g[l], f) : s(f, g[l]), i[h] = a) : n[h] = g[l]) : (n[h] = u ? s(g[l], n[h]) : s(n[h], g[l]), i[h] = a);
			else
				for (p = d[t], m = d[t + 1], l = p; m > l; l++) h = v[l], r[h] !== a ? (r[h] = a, y.push(h)) : i[h] = a
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			function a(t) {
				return new e.Complex(Math.log(Math.sqrt(t.re * t.re + t.im * t.im)) / Math.LN10, Math.atan2(t.im, t.re) / Math.LN10)
			}
			var o = n("log10", {
				number: function(r) {
					return r >= 0 || t.predictable ? Math.log(r) / Math.LN10 : o(new e.Complex(r, 0))
				},
				Complex: a,
				BigNumber: function(r) {
					return !r.isNegative() || t.predictable ? r.log() : a(new e.Complex(r.toNumber(), 0))
				},
				"Array | Matrix": function(e) {
					return i(e, o)
				}
			});
			return o.toTex = "\\log_{10}\\left(${args[0]}\\right)", o
		}
		var i = r(19);
		t.name = "log10", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			function a(e, t) {
				if (t > 0) return e - t * Math.floor(e / t);
				if (0 === t) return e;
				throw new Error("Cannot calculate mod for a negative divisor")
			}
			var o = n(r(50)),
				s = r(29),
				u = n(r(354)),
				c = n(r(59)),
				f = n(r(76)),
				l = n(r(84)),
				p = n(r(61)),
				m = n(r(55)),
				h = n(r(56)),
				g = i("mod", {
					"number, number": a,
					"BigNumber, BigNumber": function(e, t) {
						return t.isZero() ? e : e.mod(t)
					},
					"Fraction, Fraction": function(e, t) {
						return e.mod(t)
					},
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = f(e, t, g, !1);
										break;
									default:
										r = u(t, e, g, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = c(e, t, g, !1);
										break;
									default:
										r = m(e, t, g)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return g(o(e), o(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return g(o(e), t)
					},
					"Matrix, Array": function(e, t) {
						return g(e, o(t))
					},
					"Matrix, any": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = l(e, t, g, !1);
								break;
							default:
								r = h(e, t, g, !1)
						}
						return r
					},
					"any, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = p(t, e, g, !0);
								break;
							default:
								r = h(t, e, g, !0)
						}
						return r
					},
					"Array, any": function(e, t) {
						return h(o(e), t, g, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return h(o(t), e, g, !0).valueOf()
					}
				});
			return g.toTex = "\\left(${args[0]}" + s.operators.mod + "${args[1]}\\right)", g
		}
		t.name = "mod", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			function a(e, t) {
				var r = e.size();
				if (1 == r.length) {
					if (t === Number.POSITIVE_INFINITY || "inf" === t) {
						var n = 0;
						return e.forEach(function(e) {
							var t = o(e);
							p(t, n) && (n = t)
						}, !0), n
					}
					if (t === Number.NEGATIVE_INFINITY || "-inf" === t) {
						var i;
						return e.forEach(function(e) {
							var t = o(e);
							(!i || m(t, i)) && (i = t)
						}, !0), i || 0
					}
					if ("fro" === t) return a(e, 2);
					if ("number" == typeof t && !isNaN(t)) {
						if (!l(t, 0)) {
							var h = 0;
							return e.forEach(function(e) {
								h = s(u(o(e), t), h)
							}, !0), u(h, 1 / t)
						}
						return Number.POSITIVE_INFINITY
					}
					throw new Error("Unsupported parameter value")
				}
				if (2 == r.length) {
					if (1 === t) {
						var d = [],
							y = 0;
						return e.forEach(function(e, t) {
							var r = t[1],
								n = s(d[r] || 0, o(e));
							p(n, y) && (y = n), d[r] = n
						}, !0), y
					}
					if (t === Number.POSITIVE_INFINITY || "inf" === t) {
						var x = [],
							b = 0;
						return e.forEach(function(e, t) {
							var r = t[0],
								n = s(x[r] || 0, o(e));
							p(n, b) && (b = n), x[r] = n
						}, !0), b
					}
					if ("fro" === t) return c(g(f(v(e), e)));
					if (2 === t) throw new Error("Unsupported parameter value, missing implementation of matrix singular value decomposition");
					throw new Error("Unsupported parameter value")
				}
			}
			var o = n(r(85)),
				s = n(r(49)),
				u = n(r(79)),
				c = n(r(362)),
				f = n(r(83)),
				l = n(r(47)),
				p = n(r(62)),
				m = n(r(58)),
				h = n(r(50)),
				g = n(r(370)),
				v = n(r(329)),
				d = i.find(o, ["Complex"]),
				y = i("norm", {
					number: Math.abs,
					Complex: d,
					BigNumber: function(e) {
						return e.abs()
					},
					"boolean | null": function(e) {
						return Math.abs(e)
					},
					Array: function(e) {
						return a(h(e), 2)
					},
					Matrix: function(e) {
						return a(e, 2)
					},
					"number | Complex | BigNumber | boolean | null, number | BigNumber | string": function(e) {
						return y(e)
					},
					"Array, number | BigNumber | string": function(e, t) {
						return a(h(e), t)
					},
					"Matrix, number | BigNumber | string": function(e, t) {
						return a(e, t)
					}
				});
			return y.toTex = {
				1: "\\left\\|${args[0]}\\right\\|",
				2: "\\mathrm{${name}}\\left(${args}\\right)"
			}, y
		}
		t.name = "norm", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = n(r(50)),
				u = n(r(49)),
				c = o("trace", {
					Array: function(e) {
						return c(s(e))
					},
					Matrix: function(e) {
						var t;
						switch (e.storage()) {
							case "dense":
								t = f(e);
								break;
							case "sparse":
								t = l(e)
						}
						return t
					},
					any: i
				}),
				f = function(e) {
					var t = e._size,
						r = e._data;
					switch (t.length) {
						case 1:
							if (1 == t[0]) return i(r[0]);
							throw new RangeError("Matrix must be square (size: " + a(t) + ")");
						case 2:
							var n = t[0],
								o = t[1];
							if (n === o) {
								for (var s = 0, c = 0; n > c; c++) s = u(s, r[c][c]);
								return s
							}
							throw new RangeError("Matrix must be square (size: " + a(t) + ")");
						default:
							throw new RangeError("Matrix must be two dimensional (size: " + a(t) + ")")
					}
				},
				l = function(e) {
					var t = e._values,
						r = e._index,
						n = e._ptr,
						i = e._size,
						o = i[0],
						s = i[1];
					if (o === s) {
						var c = 0;
						if (t.length > 0)
							for (var f = 0; s > f; f++)
								for (var l = n[f], p = n[f + 1], m = l; p > m; m++) {
									var h = r[m];
									if (h === f) {
										c = u(c, t[m]);
										break
									}
									if (h > f) break
								}
						return c
					}
					throw new RangeError("Matrix must be square (size: " + a(i) + ")")
				};
			return c.toTex = "\\mathrm{tr}\\left(${args[0]}\\right)", c
		}
		var i = r(3).clone,
			a = r(23).format;
		t.name = "trace", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			function s(t, r) {
				var n = e.BigNumber.precision,
					i = e.BigNumber.constructor({
						precision: n + 2
					}),
					a = new e.BigNumber(0),
					o = new i(1),
					s = r.isNegative();
				if (s && (r = r.neg()), r.isZero()) throw new Error("Root must be non-zero");
				if (t.isNegative() && !r.abs().mod(2).equals(1)) throw new Error("Root must be odd when a is negative.");
				if (t.isZero()) return a;
				if (!t.isFinite()) return s ? a : t;
				var u = t.abs().pow(o.div(r));
				return u = t.isNeg() ? u.neg() : u, new e.BigNumber((s ? o.div(u) : u).toPrecision(n))
			}
			var u = n(r(50)),
				c = n(r(52)),
				f = n(r(354)),
				l = n(r(365)),
				p = n(r(84)),
				m = n(r(55)),
				h = n(r(56)),
				g = o("nthRoot", {
					number: function(e) {
						return i(e, 2)
					},
					"number, number": i,
					BigNumber: function(t) {
						return s(t, new e.BigNumber(2))
					},
					Complex: function(e) {
						return a(e, 2)
					},
					"Complex, number": a,
					"BigNumber, BigNumber": s,
					"Array | Matrix": function(e) {
						return g(e, 2)
					},
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										if (1 !== t.density()) throw new Error("Root must be non-zero");
										r = l(e, t, g);
										break;
									default:
										r = f(t, e, g, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										if (1 !== t.density()) throw new Error("Root must be non-zero");
										r = c(e, t, g, !1);
										break;
									default:
										r = m(e, t, g)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return g(u(e), u(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return g(u(e), t)
					},
					"Matrix, Array": function(e, t) {
						return g(e, u(t))
					},
					"Matrix, number | BigNumber": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = p(e, t, g, !1);
								break;
							default:
								r = h(e, t, g, !1)
						}
						return r
					},
					"number | BigNumber, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								if (1 !== t.density()) throw new Error("Root must be non-zero");
								r = p(t, e, g, !0);
								break;
							default:
								r = h(t, e, g, !0)
						}
						return r
					},
					"Array, number | BigNumber": function(e, t) {
						return g(u(e), t).valueOf()
					},
					"number | BigNumber, Array": function(e, t) {
						return g(e, u(t)).valueOf()
					}
				});
			return g.toTex = "\\sqrt[${args[1]}]{${args[0]}}", g
		}

		function i(e, t) {
			var r = 0 > t;
			if (r && (t = -t), 0 === t) throw new Error("Root must be non-zero");
			if (0 > e && Math.abs(t) % 2 != 1) throw new Error("Root must be odd when a is negative.");
			if (0 == e) return 0;
			if (!isFinite(e)) return r ? 0 : e;
			var n = Math.pow(Math.abs(e), 1 / t);
			return n = 0 > e ? -n : n, r ? 1 / n : n
		}

		function a(e, t) {
			if (0 > t) throw new Error("Root must be greater than zero");
			if (0 === t) throw new Error("Root must be non-zero");
			if (t % 1 !== 0) throw new Error("Root must be an integer");
			for (var r = e.toPolar(), n = [], i = Math.pow(r.r, 1 / t), a = 0; t > a; a++) n.push({
				r: i,
				phi: (r.phi + 2 * Math.PI * a) / t
			});
			return n
		}
		t.name = "nthRoot", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var c = n(r(50)),
				f = n(r(47)),
				l = n(r(373)),
				p = n(r(84)),
				m = n(r(61)),
				h = n(r(56)),
				g = o("round", {
					number: Math.round,
					"number, number": function(e, t) {
						if (!a(t)) throw new TypeError(u);
						if (0 > t || t > 15) throw new Error("Number of decimals in function round must be in te range of 0-15");
						return i(e, t)
					},
					Complex: function(t) {
						return new e.Complex(Math.round(t.re), Math.round(t.im))
					},
					"Complex, number": function(t, r) {
						return new e.Complex(i(t.re, r), i(t.im, r))
					},
					"Complex, BigNumber": function(t, r) {
						if (!r.isInteger()) throw new TypeError(u);
						var n = r.toNumber();
						return new e.Complex(i(t.re, n), i(t.im, n))
					},
					"number, BigNumber": function(t, r) {
						if (!r.isInteger()) throw new TypeError(u);
						return new e.BigNumber(t).toDecimalPlaces(r.toNumber())
					},
					BigNumber: function(e) {
						return e.toDecimalPlaces(0)
					},
					"BigNumber, BigNumber": function(e, t) {
						if (!t.isInteger()) throw new TypeError(u);
						return e.toDecimalPlaces(t.toNumber())
					},
					Fraction: function(e) {
						return e.round()
					},
					"Array | Matrix": function(e) {
						return s(e, g, !0)
					},
					"Matrix, number | BigNumber": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = p(e, t, g, !1);
								break;
							default:
								r = h(e, t, g, !1)
						}
						return r
					},
					"number | Complex | BigNumber, Matrix": function(e, t) {
						if (!f(e, 0)) {
							var r;
							switch (t.storage()) {
								case "sparse":
									r = m(t, e, g, !0);
									break;
								default:
									r = h(t, e, g, !0)
							}
							return r
						}
						return l(t.size(), t.storage())
					},
					"Array, number | BigNumber": function(e, t) {
						return h(c(e), t, g, !1).valueOf()
					},
					"number | Complex | BigNumber, Array": function(e, t) {
						return h(c(t), e, g, !0).valueOf()
					}
				});
			return g.toTex = {
				1: "\\left\\lfloor${args[0]}\\right\\rceil",
				2: "\\mathrm{${name}}\\left(${args}\\right)"
			}, g
		}

		function i(e, t) {
			return parseFloat(o(e, t))
		}
		var a = r(6).isInteger,
			o = r(6).toFixed,
			s = r(19),
			u = "Number of decimals in function round must be an integer";
		t.name = "round", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			function s(t, r) {
				var n = u(t),
					i = n ? new e.BigNumber(0) : 0;
				if (c(t), r) {
					var o = f(r);
					return t.length > 0 ? o.resize(t, i) : o
				}
				var s = [];
				return t.length > 0 ? a(s, t, i) : s
			}

			function u(e) {
				var t = !1;
				return e.forEach(function(e, r, n) {
					e && e.isBigNumber === !0 && (t = !0, n[r] = e.toNumber())
				}), t
			}

			function c(e) {
				e.forEach(function(e) {
					if ("number" != typeof e || !i(e) || 0 > e) throw new Error("Parameters in function zeros must be positive integers")
				})
			}
			var f = n(r(50)),
				l = o("zeros", {
					"": function() {
						return "array" === t.matrix ? s([]) : s([], "default")
					},
					"...number | BigNumber | string": function(e) {
						var r = e[e.length - 1];
						if ("string" == typeof r) {
							var n = e.pop();
							return s(e, n)
						}
						return "array" === t.matrix ? s(e) : s(e, "default")
					},
					Array: s,
					Matrix: function(e) {
						var t = e.storage();
						return s(e.valueOf(), t)
					},
					"Array | Matrix, string": function(e, t) {
						return s(e.valueOf(), t)
					}
				});
			return l.toTex = "\\mathrm{${name}}\\left(${args}\\right)", l
		}
		var i = r(6).isInteger,
			a = r(39).resize;
		t.name = "zeros", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var o = n("sign", {
				number: i.sign,
				Complex: function(t) {
					var r = Math.sqrt(t.re * t.re + t.im * t.im);
					return new e.Complex(t.re / r, t.im / r)
				},
				BigNumber: function(t) {
					return new e.BigNumber(t.cmp(0))
				},
				Fraction: function(t) {
					return new e.Fraction(t.s)
				},
				"Array | Matrix": function(e) {
					return a(e, o, !0)
				},
				Unit: function(e) {
					return o(e.value)
				}
			});
			return o.toTex = "\\mathrm{${name}}\\left(${args}\\right)", o
		}
		var i = r(6),
			a = r(19);
		t.name = "sign", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("square", {
				number: function(e) {
					return e * e
				},
				Complex: function(t) {
					return new e.Complex(t.re * t.re - t.im * t.im, t.re * t.im + t.im * t.re)
				},
				BigNumber: function(e) {
					return e.times(e)
				},
				Fraction: function(e) {
					return e.mul(e)
				},
				"Array | Matrix": function(e) {
					return i(e, a, !0)
				},
				Unit: function(e) {
					return e.pow(2)
				}
			});
			return a.toTex = "\\left(${args[0]}\\right)^2", a
		}
		var i = r(19);
		t.name = "square", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = r(29),
				s = a("unaryPlus", {
					number: function(e) {
						return e
					},
					Complex: function(e) {
						return e.clone()
					},
					BigNumber: function(e) {
						return e
					},
					Fraction: function(e) {
						return e
					},
					Unit: function(e) {
						return e.clone()
					},
					"Array | Matrix": function(e) {
						return i(e, s, !0)
					},
					"boolean | string | null": function(r) {
						return "bignumber" == t.number ? new e.BigNumber(+r) : +r
					}
				});
			return s.toTex = o.operators.unaryPlus + "\\left(${args[0]}\\right)", s
		}
		var i = r(19);
		t.name = "unaryPlus", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			function o(e, r) {
				var n, a, o, s = 0,
					c = 1,
					f = 1,
					l = 0;
				if (!i(e) || !i(r)) throw new Error("Parameters in function xgcd must be integer numbers");
				for (; r;) a = Math.floor(e / r), o = e % r, n = s, s = c - a * s, c = n, n = f, f = l - a * f, l = n, e = r, r = o;
				var p;
				return p = 0 > e ? [-e, -c, -l] : [e, e ? c : 0, l], "array" === t.matrix ? p : u(p)
			}

			function s(r, n) {
				var i, a, o, s = new e.BigNumber(0),
					c = new e.BigNumber(0),
					f = new e.BigNumber(1),
					l = new e.BigNumber(1),
					p = new e.BigNumber(0);
				if (!r.isInt() || !n.isInt()) throw new Error("Parameters in function xgcd must be integer numbers");
				for (; !n.isZero();) a = r.div(n).floor(), o = r.mod(n), i = c, c = f.minus(a.times(c)), f = i, i = l, l = p.minus(a.times(l)), p = i, r = n, n = o;
				var m;
				return m = r.lt(s) ? [r.neg(), f.neg(), p.neg()] : [r, r.isZero() ? 0 : f, p], "array" === t.matrix ? m : u(m)
			}
			var u = n(r(50)),
				c = a("xgcd", {
					"number, number": o,
					"BigNumber, BigNumber": s
				});
			return c.toTex = "\\mathrm{${name}}\\left(${args}\\right)", c
		}
		var i = r(6).isInteger;
		t.name = "xgcd", t.factory = n
	}, function(e, t, r) {
		e.exports = [r(379), r(383), r(384), r(386), r(388), r(391), r(393)]
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = r(29),
				u = n(r(50)),
				c = n(r(354)),
				f = n(r(365)),
				l = n(r(84)),
				p = n(r(55)),
				m = n(r(56)),
				h = o("bitAnd", {
					"number, number": function(e, t) {
						if (!i(e) || !i(t)) throw new Error("Integers expected in function bitAnd");
						return e & t
					},
					"BigNumber, BigNumber": a,
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = f(e, t, h, !1);
										break;
									default:
										r = c(t, e, h, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = c(e, t, h, !1);
										break;
									default:
										r = p(e, t, h)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return h(u(e), u(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return h(u(e), t)
					},
					"Matrix, Array": function(e, t) {
						return h(e, u(t))
					},
					"Matrix, any": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = l(e, t, h, !1);
								break;
							default:
								r = m(e, t, h, !1)
						}
						return r
					},
					"any, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = l(t, e, h, !0);
								break;
							default:
								r = m(t, e, h, !0)
						}
						return r
					},
					"Array, any": function(e, t) {
						return m(u(e), t, h, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return m(u(t), e, h, !0).valueOf()
					}
				});
			return h.toTex = "\\left(${args[0]}" + s.operators.bitAnd + "${args[1]}\\right)", h
		}
		var i = r(6).isInteger,
			a = r(380);
		t.name = "bitAnd", t.factory = n
	}, function(e, t, r) {
		var n = r(381);
		e.exports = function(e, t) {
			if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function bitAnd");
			var r = e.constructor;
			if (e.isNaN() || t.isNaN()) return new r(NaN);
			if (e.isZero() || t.eq(-1) || e.eq(t)) return e;
			if (t.isZero() || e.eq(-1)) return t;
			if (!e.isFinite() || !t.isFinite()) {
				if (!e.isFinite() && !t.isFinite()) return e.isNegative() == t.isNegative() ? e : new r(0);
				if (!e.isFinite()) return t.isNegative() ? e : e.isNegative() ? new r(0) : t;
				if (!t.isFinite()) return e.isNegative() ? t : t.isNegative() ? new r(0) : e
			}
			return n(e, t, function(e, t) {
				return e & t
			})
		}
	}, function(e, t, r) {
		function n(e) {
			for (var t = e.c, r = t[0] + "", n = 1; n < t.length; ++n) {
				for (var i = t[n] + "", a = 7 - i.length; a--;) i = "0" + i;
				r += i
			}
			var o;
			for (o = r.length - 1;
				"0" == r.charAt(o); --o);
			var s = e.e,
				u = r.slice(0, o + 1 || 1),
				c = u.length;
			if (s > 0)
				if (++s > c)
					for (s -= c; s--; u += "0");
				else c > s && (u = u.slice(0, s) + "." + u.slice(s));
			for (var f = [0], n = 0; n < u.length;) {
				for (var l = f.length; l--; f[l] *= 10);
				f[0] += u.charAt(n++) << 0;
				for (var o = 0; o < f.length; ++o) f[o] > 1 && (null == f[o + 1] && (f[o + 1] = 0), f[o + 1] += f[o] >> 1, f[o] &= 1)
			}
			return f.reverse()
		}
		var i = r(382);
		e.exports = function(e, t, r) {
			var a, o, s = e.constructor,
				u = +(e.s < 0),
				c = +(t.s < 0);
			if (u) {
				a = n(i(e));
				for (var f = 0; f < a.length; ++f) a[f] ^= 1
			} else a = n(e);
			if (c) {
				o = n(i(t));
				for (var f = 0; f < o.length; ++f) o[f] ^= 1
			} else o = n(t);
			var l, p, m;
			a.length <= o.length ? (l = a, p = o, m = u) : (l = o, p = a, m = c);
			var h = l.length,
				g = p.length,
				v = 1 ^ r(u, c),
				d = new s(1 ^ v),
				y = s.ONE,
				x = new s(2),
				b = s.precision;
			for (s.config({
					precision: 1e9
				}); h > 0;) r(l[--h], p[--g]) == v && (d = d.plus(y)), y = y.times(x);
			for (; g > 0;) r(m, p[--g]) == v && (d = d.plus(y)), y = y.times(x);
			return s.config({
				precision: b
			}), 0 == v && (d.s = -d.s), d
		}
	}, function(e, t) {
		e.exports = function(e) {
			if (e.isFinite() && !e.isInteger()) throw new Error("Integer expected in function bitNot");
			var t = e.constructor,
				r = t.precision;
			t.config({
				precision: 1e9
			});
			var e = e.plus(t.ONE);
			return e.s = -e.s || null, t.config({
				precision: r
			}), e
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, s) {
			var u = r(29),
				c = s("bitNot", {
					number: function(e) {
						if (!o(e)) throw new Error("Integer expected in function bitNot");
						return ~e
					},
					BigNumber: a,
					"Array | Matrix": function(e) {
						return i(e, c)
					}
				});
			return c.toTex = u.operators.bitNot + "\\left(${args[0]}\\right)", c
		}
		var i = r(19),
			a = r(382),
			o = r(6).isInteger;
		t.name = "bitNot", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = r(29),
				u = n(r(50)),
				c = n(r(52)),
				f = n(r(53)),
				l = n(r(54)),
				p = n(r(55)),
				m = n(r(56)),
				h = o("bitOr", {
					"number, number": function(e, t) {
						if (!i(e) || !i(t)) throw new Error("Integers expected in function bitOr");
						return e | t
					},
					"BigNumber, BigNumber": a,
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = f(e, t, h);
										break;
									default:
										r = c(t, e, h, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = c(e, t, h, !1);
										break;
									default:
										r = p(e, t, h)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return h(u(e), u(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return h(u(e), t)
					},
					"Matrix, Array": function(e, t) {
						return h(e, u(t))
					},
					"Matrix, any": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = l(e, t, h, !1);
								break;
							default:
								r = m(e, t, h, !1)
						}
						return r
					},
					"any, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = l(t, e, h, !0);
								break;
							default:
								r = m(t, e, h, !0)
						}
						return r
					},
					"Array, any": function(e, t) {
						return m(u(e), t, h, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return m(u(t), e, h, !0).valueOf()
					}
				});
			return h.toTex = "\\left(${args[0]}" + s.operators.bitOr + "${args[1]}\\right)", h
		}
		var i = r(6).isInteger,
			a = r(385);
		t.name = "bitOr", t.factory = n
	}, function(e, t, r) {
		var n = r(381);
		e.exports = function(e, t) {
			if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function bitOr");
			var r = e.constructor;
			if (e.isNaN() || t.isNaN()) return new r(NaN);
			var i = new r(-1);
			return e.isZero() || t.eq(i) || e.eq(t) ? t : t.isZero() || e.eq(i) ? e : e.isFinite() && t.isFinite() ? n(e, t, function(e, t) {
				return e | t
			}) : !e.isFinite() && !e.isNegative() && t.isNegative() || e.isNegative() && !t.isNegative() && !t.isFinite() ? i : e.isNegative() && t.isNegative() ? e.isFinite() ? e : t : e.isFinite() ? t : e
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = r(29),
				u = n(r(50)),
				c = n(r(59)),
				f = n(r(60)),
				l = n(r(61)),
				p = n(r(55)),
				m = n(r(56)),
				h = o("bitXor", {
					"number, number": function(e, t) {
						if (!i(e) || !i(t)) throw new Error("Integers expected in function bitXor");
						return e ^ t
					},
					"BigNumber, BigNumber": a,
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = f(e, t, h);
										break;
									default:
										r = c(t, e, h, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = c(e, t, h, !1);
										break;
									default:
										r = p(e, t, h)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return h(u(e), u(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return h(u(e), t)
					},
					"Matrix, Array": function(e, t) {
						return h(e, u(t))
					},
					"Matrix, any": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = l(e, t, h, !1);
								break;
							default:
								r = m(e, t, h, !1)
						}
						return r
					},
					"any, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = l(t, e, h, !0);
								break;
							default:
								r = m(t, e, h, !0)
						}
						return r
					},
					"Array, any": function(e, t) {
						return m(u(e), t, h, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return m(u(t), e, h, !0).valueOf()
					}
				});
			return h.toTex = "\\left(${args[0]}" + s.operators.bitXor + "${args[1]}\\right)", h
		}
		var i = r(6).isInteger,
			a = r(387);
		t.name = "bitXor", t.factory = n
	}, function(e, t, r) {
		var n = r(381),
			i = r(382);
		e.exports = function(e, t) {
			if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function bitXor");
			var r = e.constructor;
			if (e.isNaN() || t.isNaN()) return new r(NaN);
			if (e.isZero()) return t;
			if (t.isZero()) return e;
			if (e.eq(t)) return new r(0);
			var a = new r(-1);
			return e.eq(a) ? i(t) : t.eq(a) ? i(e) : e.isFinite() && t.isFinite() ? n(e, t, function(e, t) {
				return e ^ t
			}) : e.isFinite() || t.isFinite() ? new r(e.isNegative() == t.isNegative() ? 1 / 0 : -(1 / 0)) : a
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = r(29),
				u = n(r(50)),
				c = n(r(47)),
				f = n(r(373)),
				l = n(r(52)),
				p = n(r(354)),
				m = n(r(390)),
				h = n(r(54)),
				g = n(r(84)),
				v = n(r(55)),
				d = n(r(56)),
				y = o("leftShift", {
					"number, number": function(e, t) {
						if (!i(e) || !i(t)) throw new Error("Integers expected in function leftShift");
						return e << t
					},
					"BigNumber, BigNumber": a,
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = m(e, t, y, !1);
										break;
									default:
										r = p(t, e, y, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = l(e, t, y, !1);
										break;
									default:
										r = v(e, t, y)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return y(u(e), u(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return y(u(e), t)
					},
					"Matrix, Array": function(e, t) {
						return y(e, u(t))
					},
					"Matrix, number | BigNumber": function(e, t) {
						if (!c(t, 0)) {
							var r;
							switch (e.storage()) {
								case "sparse":
									r = g(e, t, y, !1);
									break;
								default:
									r = d(e, t, y, !1)
							}
							return r
						}
						return e.clone()
					},
					"number | BigNumber, Matrix": function(e, t) {
						if (!c(e, 0)) {
							var r;
							switch (t.storage()) {
								case "sparse":
									r = h(t, e, y, !0);
									break;
								default:
									r = d(t, e, y, !0)
							}
							return r
						}
						return f(t.size(), t.storage())
					},
					"Array, number | BigNumber": function(e, t) {
						return y(u(e), t).valueOf()
					},
					"number | BigNumber, Array": function(e, t) {
						return y(e, u(t)).valueOf()
					}
				});
			return y.toTex = "\\left(${args[0]}" + s.operators.leftShift + "${args[1]}\\right)", y
		}
		var i = r(6).isInteger,
			a = r(389);
		t.name = "leftShift", t.factory = n
	}, function(e, t) {
		e.exports = function(e, t) {
			if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function leftShift");
			var r = e.constructor;
			return e.isNaN() || t.isNaN() || t.isNegative() && !t.isZero() ? new r(NaN) : e.isZero() || t.isZero() ? e : e.isFinite() || t.isFinite() ? t.lt(55) ? e.times(Math.pow(2, t.toNumber()) + "") : e.times(new r(2).pow(t)) : new r(NaN)
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(47)),
				s = e.SparseMatrix,
				u = function(e, t, r) {
					var n = e._values,
						u = e._index,
						c = e._ptr,
						f = e._size,
						l = e._datatype,
						p = t._values,
						m = t._index,
						h = t._ptr,
						g = t._size,
						v = t._datatype;
					if (f.length !== g.length) throw new i(f.length, g.length);
					if (f[0] !== g[0] || f[1] !== g[1]) throw new RangeError("Dimension mismatch. Matrix A (" + f + ") must match Matrix B (" + g + ")");
					if (!n || !p) throw new Error("Cannot perform operation on Pattern Sparse Matrices");
					var d, y = f[0],
						x = f[1],
						b = o,
						w = 0,
						N = r;
					"string" == typeof l && l === v && (d = l, b = a.find(o, [d, d]), w = a.convert(0, d), N = a.find(r, [d, d]));
					for (var E, M, A, _, O = [], T = [], C = [], S = new s({
							values: O,
							index: T,
							ptr: C,
							size: [y, x],
							datatype: d
						}), z = [], B = [], k = 0; x > k; k++) {
						C[k] = T.length;
						var I = k + 1;
						for (M = c[k], A = c[k + 1], E = M; A > E; E++) _ = u[E], B[_] = I, z[_] = n[E], T.push(_);
						for (M = h[k], A = h[k + 1], E = M; A > E; E++) _ = m[E], B[_] === I && (z[_] = N(z[_], p[E]));
						for (E = C[k]; E < T.length;) {
							_ = T[E];
							var R = z[_];
							b(R, w) ? T.splice(E, 1) : (O.push(R), E++)
						}
					}
					return C[x] = T.length, S
				};
			return u
		}
		var i = r(41);
		t.name = "algorithm08", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = r(29),
				u = n(r(50)),
				c = n(r(47)),
				f = n(r(373)),
				l = n(r(52)),
				p = n(r(354)),
				m = n(r(390)),
				h = n(r(54)),
				g = n(r(84)),
				v = n(r(55)),
				d = n(r(56)),
				y = o("rightArithShift", {
					"number, number": function(e, t) {
						if (!i(e) || !i(t)) throw new Error("Integers expected in function rightArithShift");
						return e >> t
					},
					"BigNumber, BigNumber": a,
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = m(e, t, y, !1);
										break;
									default:
										r = p(t, e, y, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = l(e, t, y, !1);
										break;
									default:
										r = v(e, t, y)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return y(u(e), u(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return y(u(e), t)
					},
					"Matrix, Array": function(e, t) {
						return y(e, u(t))
					},
					"Matrix, number | BigNumber": function(e, t) {
						if (!c(t, 0)) {
							var r;
							switch (e.storage()) {
								case "sparse":
									r = g(e, t, y, !1);
									break;
								default:
									r = d(e, t, y, !1)
							}
							return r
						}
						return e.clone()
					},
					"number | BigNumber, Matrix": function(e, t) {
						if (!c(e, 0)) {
							var r;
							switch (t.storage()) {
								case "sparse":
									r = h(t, e, y, !0);
									break;
								default:
									r = d(t, e, y, !0)
							}
							return r
						}
						return f(t.size(), t.storage())
					},
					"Array, number | BigNumber": function(e, t) {
						return y(u(e), t).valueOf()
					},
					"number | BigNumber, Array": function(e, t) {
						return y(e, u(t)).valueOf()
					}
				});
			return y.toTex = "\\left(${args[0]}" + s.operators.rightArithShift + "${args[1]}\\right)", y
		}
		var i = r(6).isInteger,
			a = r(392);
		t.name = "rightArithShift", t.factory = n
	}, function(e, t) {
		e.exports = function(e, t) {
			if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function rightArithShift");
			var r = e.constructor;
			return e.isNaN() || t.isNaN() || t.isNegative() && !t.isZero() ? new r(NaN) : e.isZero() || t.isZero() ? e : t.isFinite() ? t.lt(55) ? e.div(Math.pow(2, t.toNumber()) + "").floor() : e.div(new r(2).pow(t)).floor() : new r(e.isNegative() ? -1 : e.isFinite() ? 0 : NaN)
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = r(29),
				s = n(r(50)),
				u = n(r(47)),
				c = n(r(373)),
				f = n(r(52)),
				l = n(r(354)),
				p = n(r(390)),
				m = n(r(54)),
				h = n(r(84)),
				g = n(r(55)),
				v = n(r(56)),
				d = a("rightLogShift", {
					"number, number": function(e, t) {
						if (!i(e) || !i(t)) throw new Error("Integers expected in function rightLogShift");
						return e >>> t
					},
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = p(e, t, d, !1);
										break;
									default:
										r = l(t, e, d, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = f(e, t, d, !1);
										break;
									default:
										r = g(e, t, d)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return d(s(e), s(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return d(s(e), t)
					},
					"Matrix, Array": function(e, t) {
						return d(e, s(t))
					},
					"Matrix, number | BigNumber": function(e, t) {
						if (!u(t, 0)) {
							var r;
							switch (e.storage()) {
								case "sparse":
									r = h(e, t, d, !1);
									break;
								default:
									r = v(e, t, d, !1)
							}
							return r
						}
						return e.clone()
					},
					"number | BigNumber, Matrix": function(e, t) {
						if (!u(e, 0)) {
							var r;
							switch (t.storage()) {
								case "sparse":
									r = m(t, e, d, !0);
									break;
								default:
									r = v(t, e, d, !0)
							}
							return r
						}
						return c(t.size(), t.storage())
					},
					"Array, number | BigNumber": function(e, t) {
						return d(s(e), t).valueOf()
					},
					"number | BigNumber, Array": function(e, t) {
						return d(e, s(t)).valueOf()
					}
				});
			return d.toTex = "\\left(${args[0]}" + o.operators.rightLogShift + "${args[1]}\\right)", d
		}
		var i = r(6).isInteger;
		t.name = "rightLogShift", t.factory = n
	}, function(e, t, r) {
		e.exports = [r(395), r(401), r(396), r(402)]
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = n(r(49)),
				o = n(r(396)),
				s = n(r(350)),
				u = n(r(400)),
				c = i("bellNumbers", {
					"number | BigNumber": function(e) {
						if (!u(e) || s(e)) throw new TypeError("Non-negative integer value expected in function bellNumbers");
						for (var t = 0, r = 0; e >= r; r++) t = a(t, o(e, r));
						return t
					}
				});
			return c.toTex = "\\mathrm{B}_{${args[0]}}", c
		}
		t.name = "bellNumbers", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = n(r(49)),
				o = n(r(74)),
				s = n(r(83)),
				u = n(r(310)),
				c = n(r(79)),
				f = n(r(397)),
				l = n(r(399)),
				p = n(r(350)),
				m = n(r(400)),
				h = n(r(62)),
				g = i("stirlingS2", {
					"number | BigNumber, number | BigNumber": function(e, t) {
						if (!m(e) || p(e) || !m(t) || p(t)) throw new TypeError("Non-negative integer value expected in function stirlingS2");
						if (h(t, e)) throw new TypeError("k must be less than or equal to n in function stirlingS2");
						for (var r = f(t), n = 0, i = 0; t >= i; i++) {
							var g = c(-1, o(t, i)),
								v = l(t, i),
								d = c(i, e);
							n = a(n, s(s(v, d), g))
						}
						return u(n, r)
					}
				});
			return g.toTex = "\\mathrm{S}\\left(${args[0]},${args[1]}\\right)", g
		}
		t.name = "stirlingS2", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(398)),
				s = r(29),
				u = a("factorial", {
					number: function(e) {
						if (0 > e) throw new Error("Value must be non-negative");
						return o(e + 1)
					},
					BigNumber: function(e) {
						if (e.isNegative()) throw new Error("Value must be non-negative");
						return o(e.plus(1))
					},
					"Array | Matrix": function(e) {
						return i(e, u)
					}
				});
			return u.toTex = "\\left(${args[0]}\\right)" + s.operators.factorial, u
		}
		var i = r(19);
		r(93);
		t.name = "factorial", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, u) {
			function c(r) {
				if (r.isZero()) return new e.BigNumber(1);
				for (var n = t.precision + (0 | Math.log(r.toNumber())), i = e.BigNumber.constructor({
						precision: n
					}), a = new i(r), o = r.toNumber() - 1; o > 1;) a = a.times(o), o--;
				return new e.BigNumber(a.toPrecision(e.BigNumber.precision))
			}
			var f = n(r(83)),
				l = n(r(79)),
				p = u("gamma", {
					number: function(e) {
						var t, r;
						if (a(e)) {
							if (0 >= e) return isFinite(e) ? 1 / 0 : NaN;
							if (e > 171) return 1 / 0;
							for (var n = e - 2, i = e - 1; n > 1;) i *= n, n--;
							return 0 == i && (i = 1), i
						}
						if (.5 > e) return Math.PI / (Math.sin(Math.PI * e) * p(1 - e));
						if (e >= 171.35) return 1 / 0;
						if (e > 85) {
							var u = e * e,
								c = u * e,
								f = c * e,
								l = f * e;
							return Math.sqrt(2 * Math.PI / e) * Math.pow(e / Math.E, e) * (1 + 1 / (12 * e) + 1 / (288 * u) - 139 / (51840 * c) - 571 / (2488320 * f) + 163879 / (209018880 * l) + 5246819 / (75246796800 * l * e));
						}--e, r = s[0];
						for (var m = 1; m < s.length; ++m) r += s[m] / (e + m);
						return t = e + o + .5, Math.sqrt(2 * Math.PI) * Math.pow(t, e + .5) * Math.exp(-t) * r
					},
					Complex: function(t) {
						var r, n;
						if (0 == t.im) return p(t.re);
						t = new e.Complex(t.re - 1, t.im), n = new e.Complex(s[0], 0);
						for (var i = 1; i < s.length; ++i) {
							var a = t.re + i,
								u = a * a + t.im * t.im;
							0 != u ? (n.re += s[i] * a / u, n.im += -(s[i] * t.im) / u) : n.re = s[i] < 0 ? -(1 / 0) : 1 / 0
						}
						r = new e.Complex(t.re + o + .5, t.im);
						var c = Math.sqrt(2 * Math.PI);
						t.re += .5;
						var m = l(r, t);
						0 == m.im ? m.re *= c : 0 == m.re ? m.im *= c : (m.re *= c, m.im *= c);
						var h = Math.exp(-r.re);
						return r.re = h * Math.cos(-r.im), r.im = h * Math.sin(-r.im), f(f(m, r), n)
					},
					BigNumber: function(t) {
						if (t.isInteger()) return t.isNegative() || t.isZero() ? new e.BigNumber(1 / 0) : c(t.minus(1));
						if (!t.isFinite()) return new e.BigNumber(t.isNegative() ? NaN : 1 / 0);
						throw new Error("Integer BigNumber expected")
					},
					"Array | Matrix": function(e) {
						return i(e, p)
					}
				});
			return p.toTex = "\\Gamma\\left(${args[0]}\\right)", p
		}
		var i = r(19),
			a = r(6).isInteger,
			o = 4.7421875,
			s = [.9999999999999971, 57.15623566586292, -59.59796035547549, 14.136097974741746, -.4919138160976202, 3399464998481189e-20, 4652362892704858e-20, -9837447530487956e-20, .0001580887032249125, -.00021026444172410488, .00021743961811521265, -.0001643181065367639, 8441822398385275e-20, -26190838401581408e-21, 36899182659531625e-22];
		t.name = "gamma", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var o = n("combinations", {
				"number, number": function(e, t) {
					var r, n, i;
					if (!a(e) || 0 > e) throw new TypeError("Positive integer value expected in function combinations");
					if (!a(t) || 0 > t) throw new TypeError("Positive integer value expected in function combinations");
					if (t > e) throw new TypeError("k must be less than or equal to n");
					for (r = Math.max(t, e - t), n = 1, i = 1; e - r >= i; i++) n = n * (r + i) / i;
					return n
				},
				"BigNumber, BigNumber": function(t, r) {
					var n, a, o, s, u = new e.BigNumber(1);
					if (!i(t) || !i(r)) throw new TypeError("Positive integer value expected in function combinations");
					if (r.gt(t)) throw new TypeError("k must be less than n in function combinations");
					for (n = t.minus(r), r.lt(n) && (n = r), a = u, o = u, s = t.minus(n); o.lte(s); o = o.plus(1)) a = a.times(n.plus(o)).dividedBy(o);
					return a
				}
			});
			return o.toTex = "\\binom{${args[0]}}{${args[1]}}", o
		}

		function i(e) {
			return e.isInteger() && e.gte(0)
		}
		var a = r(6).isInteger;
		t.name = "combinations", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var o = n("isInteger", {
				number: a.isInteger,
				BigNumber: function(e) {
					return e.isInt()
				},
				Fraction: function(e) {
					return 1 === e.d && isFinite(e.n)
				},
				"Array | Matrix": function(e) {
					return i(e, o)
				}
			});
			return o
		}
		var i = r(19),
			a = r(6);
		t.name = "isInteger", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = n(r(399)),
				o = n(r(51)),
				s = n(r(363)),
				u = n(r(400)),
				c = n(r(62)),
				f = i("composition", {
					"number | BigNumber, number | BigNumber": function(e, t) {
						if (!(u(e) && s(e) && u(t) && s(t))) throw new TypeError("Positive integer value expected in function composition");
						if (c(t, e)) throw new TypeError("k must be less than or equal to n in function composition");
						return a(o(e, -1), o(t, -1))
					}
				});
			return f.toTex = "\\mathrm{${name}}\\left(${args}\\right)", f
		}
		t.name = "composition", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = n(r(49)),
				o = n(r(310)),
				s = n(r(83)),
				u = n(r(399)),
				c = n(r(350)),
				f = n(r(400)),
				l = i("catalan", {
					"number | BigNumber": function(e) {
						if (!f(e) || c(e)) throw new TypeError("Non-negative integer value expected in function catalan");
						return o(u(s(e, 2), e), a(e, 1))
					}
				});
			return l.toTex = "\\mathrm{C}_{${args[0]}}", l
		}
		t.name = "catalan", t.factory = n
	}, function(e, t, r) {
		e.exports = [r(404), r(405), r(406), r(407)]
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("arg", {
				number: function(e) {
					return Math.atan2(0, e)
				},
				Complex: function(e) {
					return Math.atan2(e.im, e.re)
				},
				"Array | Matrix": function(e) {
					return i(e, a)
				}
			});
			return a.toTex = "\\arg\\left(${args[0]}\\right)", a
		}
		var i = r(19);
		t.name = "arg", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("conj", {
				number: function(e) {
					return e
				},
				BigNumber: function(e) {
					return e
				},
				Complex: function(t) {
					return new e.Complex(t.re, -t.im)
				},
				"Array | Matrix": function(e) {
					return i(e, a)
				}
			});
			return a.toTex = "\\left(${args[0]}\\right)^*", a
		}
		var i = r(19);
		t.name = "conj", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("im", {
				number: function(e) {
					return 0
				},
				BigNumber: function(t) {
					return new e.BigNumber(0)
				},
				Complex: function(e) {
					return e.im
				},
				"Array | Matrix": function(e) {
					return i(e, a)
				}
			});
			return a.toTex = "\\Im\\left\\lbrace${args[0]}\\right\\rbrace", a
		}
		var i = r(19);
		t.name = "im", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("re", {
				number: function(e) {
					return e
				},
				BigNumber: function(e) {
					return e
				},
				Complex: function(e) {
					return e.re
				},
				"Array | Matrix": function(e) {
					return i(e, a)
				}
			});
			return a.toTex = "\\Re\\left\\lbrace${args[0]}\\right\\rbrace", a
		}
		var i = r(19);
		t.name = "re", t.factory = n
	}, function(e, t, r) {
		e.exports = [r(409), r(410)]
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, f) {
			var l = n(r(50)),
				p = f("intersect", {
					"Array, Array, Array": function(e, t, r) {
						if (!a(e)) throw new TypeError("Array with 3 numbers expected for first argument");
						if (!a(t)) throw new TypeError("Array with 3 numbers expected for second argument");
						if (!o(r)) throw new TypeError("Array with 4 numbers expected as third argument");
						return c(e[0], e[1], e[2], t[0], t[1], t[2], r[0], r[1], r[2], r[3])
					},
					"Array, Array, Array, Array": function(e, t, r, n) {
						if (2 === e.length) {
							if (!i(e)) throw new TypeError("Array with 2 numbers expected for first argument");
							if (!i(t)) throw new TypeError("Array with 2 numbers expected for second argument");
							if (!i(r)) throw new TypeError("Array with 2 numbers expected for third argument");
							if (!i(n)) throw new TypeError("Array with 2 numbers expected for fourth argument");
							return s(e[0], e[1], t[0], t[1], r[0], r[1], n[0], n[1])
						}
						if (3 === e.length) {
							if (!a(e)) throw new TypeError("Array with 3 numbers expected for first argument");
							if (!a(t)) throw new TypeError("Array with 3 numbers expected for second argument");
							if (!a(r)) throw new TypeError("Array with 3 numbers expected for third argument");
							if (!a(n)) throw new TypeError("Array with 3 numbers expected for fourth argument");
							return u(e[0], e[1], e[2], t[0], t[1], t[2], r[0], r[1], r[2], n[0], n[1], n[2])
						}
						throw new TypeError("Arrays with two or thee dimensional points expected")
					},
					"Matrix, Matrix, Matrix": function(e, t, r) {
						return l(p(e.valueOf(), t.valueOf(), r.valueOf()))
					},
					"Matrix, Matrix, Matrix, Matrix": function(e, t, r, n) {
						return l(p(e.valueOf(), t.valueOf(), r.valueOf(), n.valueOf()))
					}
				});
			return p
		}

		function i(e) {
			return 2 === e.length && "number" == typeof e[0] && "number" == typeof e[1]
		}

		function a(e) {
			return 3 === e.length && "number" == typeof e[0] && "number" == typeof e[1] && "number" == typeof e[2]
		}

		function o(e) {
			return 4 === e.length && "number" == typeof e[0] && "number" == typeof e[1] && "number" == typeof e[2] && "number" == typeof e[3]
		}

		function s(e, t, r, n, i, a, o, s) {
			var u = (e - i) * (o - i) + (t - a) * (s - a),
				c = (o - i) * (r - e) + (s - a) * (n - t),
				f = (e - i) * (r - e) + (t - a) * (n - t),
				l = (o - i) * (o - i) + (s - a) * (s - a),
				p = (r - e) * (r - e) + (n - t) * (n - t),
				m = (u * c - f * l) / (p * l - c * c),
				h = (u + m * c) / l,
				g = e + m * (r - e),
				v = t + m * (n - t),
				d = i + h * (o - i),
				y = a + h * (s - a);
			return g === d && v === y ? [g, v] : null
		}

		function u(e, t, r, n, i, a, o, s, u, c, f, l) {
			var p = (e - o) * (c - o) + (t - s) * (f - s) + (r - u) * (l - u),
				m = (c - o) * (n - e) + (f - s) * (i - t) + (l - u) * (a - r),
				h = (e - o) * (n - e) + (t - s) * (i - t) + (r - u) * (a - r),
				g = (c - o) * (c - o) + (f - s) * (f - s) + (l - u) * (l - u),
				v = (n - e) * (n - e) + (i - t) * (i - t) + (a - r) * (a - r),
				d = (p * m - h * g) / (v * g - m * m),
				y = (p + d * m) / g,
				x = e + d * (n - e),
				b = t + d * (i - t),
				w = r + d * (a - r),
				N = o + y * (c - o),
				E = s + y * (f - s),
				M = u + y * (l - u);
			return x === N && b === E && w === M ? [x, b, w] : null
		}

		function c(e, t, r, n, i, a, o, s, u, c) {
			var f = (c - e * o - t * s - r * u) / (n * o + i * s + a * u - e - t - r),
				l = e + f * (n - e),
				p = t + f * (i - t),
				m = r + f * (a - r);
			return [l, p, m]
		}
		t.name = "intersect", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, s) {
			var h = (n(r(50)), s("distance", {
				"Array, Array, Array": function(e, t, r) {
					if (2 == e.length && 2 == t.length && 2 == r.length) {
						if (!i(e)) throw new TypeError("Array with 2 numbers expected for first argument");
						if (!i(t)) throw new TypeError("Array with 2 numbers expected for second argument");
						if (!i(r)) throw new TypeError("Array with 2 numbers expected for third argument");
						var n = (r[1] - r[0]) / (t[1] - t[0]),
							a = n * n * t[0],
							o = -1 * (n * t[0]),
							s = e[1];
						return c(e[0], e[1], a, o, s)
					}
					throw new TypeError("Invalid Arguments: Try again")
				},
				"Object, Object, Object": function(e, t, r) {
					if (2 == Object.keys(e).length && 2 == Object.keys(t).length && 2 == Object.keys(r).length) {
						if (!i(e)) throw new TypeError("Values of pointX and pointY should be numbers");
						if (!i(t)) throw new TypeError("Values of lineOnePtX and lineOnePtY should be numbers");
						if (!i(r)) throw new TypeError("Values of lineTwoPtX and lineTwoPtY should be numbers");
						if (e.hasOwnProperty("pointX") && e.hasOwnProperty("pointY") && t.hasOwnProperty("lineOnePtX") && t.hasOwnProperty("lineOnePtY") && r.hasOwnProperty("lineTwoPtX") && r.hasOwnProperty("lineTwoPtY")) {
							var n = (r.lineTwoPtY - r.lineTwoPtX) / (t.lineOnePtY - t.lineOnePtX),
								a = n * n * t.lineOnePtX,
								o = -1 * (n * t.lineOnePtX),
								s = e.pointX;
							return c(e.pointX, e.pointY, a, o, s)
						}
						throw new TypeError("Key names do not match")
					}
					throw new TypeError("Invalid Arguments: Try again")
				},
				"Array, Array": function(e, t) {
					if (2 == e.length && 3 == t.length) {
						if (!i(e)) throw new TypeError("Array with 2 numbers expected for first argument");
						if (!a(t)) throw new TypeError("Array with 3 numbers expected for second argument");
						return c(e[0], e[1], t[0], t[1], t[2])
					}
					if (3 == e.length && 6 == t.length) {
						if (!a(e)) throw new TypeError("Array with 3 numbers expected for first argument");
						if (!o(t)) throw new TypeError("Array with 6 numbers expected for second argument");
						return f(e[0], e[1], e[2], t[0], t[1], t[2], t[3], t[4], t[5])
					}
					if (2 == e.length && 2 == t.length) {
						if (!i(e)) throw new TypeError("Array with 2 numbers expected for first argument");
						if (!i(t)) throw new TypeError("Array with 2 numbers expected for second argument");
						return l(e[0], e[1], t[0], t[1])
					}
					if (3 == e.length && 3 == t.length) {
						if (!a(e)) throw new TypeError("Array with 3 numbers expected for first argument");
						if (!a(t)) throw new TypeError("Array with 3 numbers expected for second argument");
						return p(e[0], e[1], e[2], t[0], t[1], t[2])
					}
					throw new TypeError("Invalid Arguments: Try again")
				},
				"Object, Object": function(e, t) {
					if (2 == Object.keys(e).length && 3 == Object.keys(t).length) {
						if (!i(e)) throw new TypeError("Values of pointX and pointY should be numbers");
						if (!a(t)) throw new TypeError("Values of xCoeffLine, yCoeffLine and constant should be numbers");
						if (e.hasOwnProperty("pointX") && e.hasOwnProperty("pointY") && t.hasOwnProperty("xCoeffLine") && t.hasOwnProperty("yCoeffLine") && t.hasOwnProperty("yCoeffLine")) return c(e.pointX, e.pointY, t.xCoeffLine, t.yCoeffLine, t.constant);
						throw new TypeError("Key names do not match")
					}
					if (3 == Object.keys(e).length && 6 == Object.keys(t).length) {
						if (!a(e)) throw new TypeError("Values of pointX, pointY and pointZ should be numbers");
						if (!o(t)) throw new TypeError("Values of x0, y0, z0, a, b and c should be numbers");
						if (e.hasOwnProperty("pointX") && e.hasOwnProperty("pointY") && t.hasOwnProperty("x0") && t.hasOwnProperty("y0") && t.hasOwnProperty("z0") && t.hasOwnProperty("a") && t.hasOwnProperty("b") && t.hasOwnProperty("c")) return f(e.pointX, e.pointY, e.pointZ, t.x0, t.y0, t.z0, t.a, t.b, t.c);
						throw new TypeError("Key names do not match")
					}
					if (2 == Object.keys(e).length && 2 == Object.keys(t).length) {
						if (!i(e)) throw new TypeError("Values of pointOneX and pointOneY should be numbers");
						if (!i(t)) throw new TypeError("Values of pointTwoX and pointTwoY should be numbers");
						if (e.hasOwnProperty("pointOneX") && e.hasOwnProperty("pointOneY") && t.hasOwnProperty("pointTwoX") && t.hasOwnProperty("pointTwoY")) return l(e.pointOneX, e.pointOneY, t.pointTwoX, t.pointTwoY);
						throw new TypeError("Key names do not match")
					}
					if (3 == Object.keys(e).length && 3 == Object.keys(t).length) {
						if (!a(e)) throw new TypeError("Values of pointOneX, pointOneY and pointOneZ should be numbers");
						if (!a(t)) throw new TypeError("Values of pointTwoX, pointTwoY and pointTwoZ should be numbers");
						if (e.hasOwnProperty("pointOneX") && e.hasOwnProperty("pointOneY") && e.hasOwnProperty("pointOneZ") && t.hasOwnProperty("pointTwoX") && t.hasOwnProperty("pointTwoY") && t.hasOwnProperty("pointTwoZ")) return p(e.pointOneX, e.pointOneY, e.pointOneZ, t.pointTwoX, t.pointTwoY, t.pointTwoZ);
						throw new TypeError("Key names do not match")
					}
					throw new TypeError("Invalid Arguments: Try again")
				},
				Array: function(e) {
					if (!u(e)) throw new TypeError("Incorrect array format entered for pairwise distance calculation");
					return m(e)
				}
			}));
			return h
		}

		function i(e) {
			return e.constructor !== Array && (e = s(e)), "number" == typeof e[0] && "number" == typeof e[1]
		}

		function a(e) {
			return e.constructor !== Array && (e = s(e)), "number" == typeof e[0] && "number" == typeof e[1] && "number" == typeof e[2]
		}

		function o(e) {
			return e.constructor !== Array && (e = s(e)), "number" == typeof e[0] && "number" == typeof e[1] && "number" == typeof e[2] && "number" == typeof e[3] && "number" == typeof e[4] && "number" == typeof e[5]
		}

		function s(e) {
			for (var t = Object.keys(e), r = [], n = 0; n < t.length; n++) r.push(e[t[n]]);
			return r
		}

		function u(e) {
			if (2 == e[0].length && "number" == typeof e[0][0] && "number" == typeof e[0][1]) {
				for (var t in e)
					if (2 != e[t].length || "number" != typeof e[t][0] || "number" != typeof e[t][1]) return !1
			} else {
				if (3 != e[0].length || "number" != typeof e[0][0] || "number" != typeof e[0][1] || "number" != typeof e[0][2]) return !1;
				for (var t in e)
					if (3 != e[t].length || "number" != typeof e[t][0] || "number" != typeof e[t][1] || "number" != typeof e[t][2]) return !1
			}
			return !0
		}

		function c(e, t, r, n, i) {
			var a = Math.abs(r * e + n * t + i),
				o = Math.pow(r * r + n * n, .5),
				s = a / o;
			return s
		}

		function f(e, t, r, n, i, a, o, s, u) {
			var c = [(i - t) * u - (a - r) * s, (a - r) * o - (n - e) * u, (n - e) * s - (i - t) * o];
			c = Math.pow(c[0] * c[0] + c[1] * c[1] + c[2] * c[2], .5);
			var f = Math.pow(o * o + s * s + u * u, .5),
				l = c / f;
			return l
		}

		function l(e, t, r, n) {
			var i = n - t,
				a = r - e,
				o = i * i + a * a,
				s = Math.pow(o, .5);
			return s
		}

		function p(e, t, r, n, i, a) {
			var o = a - r,
				s = i - t,
				u = n - e,
				c = o * o + s * s + u * u,
				f = Math.pow(c, .5);
			return f
		}

		function m(e) {
			for (var t = [], r = 0; r < e.length - 1; r++)
				for (var n = r + 1; n < e.length; n++) 2 == e[0].length ? t.push(l(e[r][0], e[r][1], e[n][0], e[n][1])) : 3 == e[0].length && t.push(p(e[r][0], e[r][1], e[r][2], e[n][0], e[n][1], e[n][2]));
			return t
		}
		t.name = "distance", t.factory = n
	}, function(e, t, r) {
		e.exports = [r(412), r(413), r(415), r(416)]
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = r(29),
				o = n(r(50)),
				s = n(r(373)),
				u = n(r(413)),
				c = (n(r(414)), n(r(354))),
				f = n(r(365)),
				l = n(r(84)),
				p = n(r(55)),
				m = n(r(56)),
				h = i("and", {
					"number, number": function(e, t) {
						return !(!e || !t)
					},
					"Complex, Complex": function(e, t) {
						return !(0 === e.re && 0 === e.im || 0 === t.re && 0 === t.im)
					},
					"BigNumber, BigNumber": function(e, t) {
						return !(e.isZero() || t.isZero() || e.isNaN() || t.isNaN())
					},
					"Unit, Unit": function(e, t) {
						return h(e.value, t.value)
					},
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = f(e, t, h, !1);
										break;
									default:
										r = c(t, e, h, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = c(e, t, h, !1);
										break;
									default:
										r = p(e, t, h)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return h(o(e), o(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return h(o(e), t)
					},
					"Matrix, Array": function(e, t) {
						return h(e, o(t))
					},
					"Matrix, any": function(e, t) {
						if (u(t)) return s(e.size(), e.storage());
						var r;
						switch (e.storage()) {
							case "sparse":
								r = l(e, t, h, !1);
								break;
							default:
								r = m(e, t, h, !1)
						}
						return r
					},
					"any, Matrix": function(e, t) {
						if (u(e)) return s(e.size(), e.storage());
						var r;
						switch (t.storage()) {
							case "sparse":
								r = l(t, e, h, !0);
								break;
							default:
								r = m(t, e, h, !0)
						}
						return r
					},
					"Array, any": function(e, t) {
						return h(o(e), t).valueOf()
					},
					"any, Array": function(e, t) {
						return h(e, o(t)).valueOf()
					}
				});
			return h.toTex = "\\left(${args[0]}" + a.operators.and + "${args[1]}\\right)", h
		}
		t.name = "and", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = r(29),
				s = a("not", {
					number: function(e) {
						return !e
					},
					Complex: function(e) {
						return 0 === e.re && 0 === e.im
					},
					BigNumber: function(e) {
						return e.isZero() || e.isNaN()
					},
					Unit: function(e) {
						return s(e.value)
					},
					"Array | Matrix": function(e) {
						return i(e, s)
					}
				});
			return s.toTex = o.operators.not + "\\left(${args[0]}\\right)", s
		}
		var i = r(19);
		t.name = "not", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("isZero", {
				number: function(e) {
					return 0 === e
				},
				BigNumber: function(e) {
					return e.isZero()
				},
				Complex: function(e) {
					return 0 === e.re && 0 === e.im
				},
				Fraction: function(e) {
					return 1 === e.d && 0 === e.n
				},
				Unit: function(e) {
					return a(e.value)
				},
				"Array | Matrix": function(e) {
					return i(e, a)
				}
			});
			return a
		}
		var i = r(19);
		r(6);
		t.name = "isZero", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = r(29),
				o = n(r(50)),
				s = n(r(59)),
				u = n(r(76)),
				c = n(r(61)),
				f = n(r(55)),
				l = n(r(56)),
				p = i("or", {
					"number, number": function(e, t) {
						return !(!e && !t)
					},
					"Complex, Complex": function(e, t) {
						return 0 !== e.re || 0 !== e.im || 0 !== t.re || 0 !== t.im
					},
					"BigNumber, BigNumber": function(e, t) {
						return !e.isZero() && !e.isNaN() || !t.isZero() && !t.isNaN()
					},
					"Unit, Unit": function(e, t) {
						return p(e.value, t.value)
					},
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = u(e, t, p);
										break;
									default:
										r = s(t, e, p, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = s(e, t, p, !1);
										break;
									default:
										r = f(e, t, p)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return p(o(e), o(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return p(o(e), t)
					},
					"Matrix, Array": function(e, t) {
						return p(e, o(t))
					},
					"Matrix, any": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = c(e, t, p, !1);
								break;
							default:
								r = l(e, t, p, !1)
						}
						return r
					},
					"any, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = c(t, e, p, !0);
								break;
							default:
								r = l(t, e, p, !0)
						}
						return r
					},
					"Array, any": function(e, t) {
						return l(o(e), t, p, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return l(o(t), e, p, !0).valueOf()
					}
				});
			return p.toTex = "\\left(${args[0]}" + a.operators.or + "${args[1]}\\right)", p
		}
		t.name = "or", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = r(29),
				o = n(r(50)),
				s = n(r(59)),
				u = n(r(60)),
				c = n(r(61)),
				f = n(r(55)),
				l = n(r(56)),
				p = i("xor", {
					"number, number": function(e, t) {
						return !!(!!e ^ !!t)
					},
					"Complex, Complex": function(e, t) {
						return !!((0 !== e.re || 0 !== e.im) ^ (0 !== t.re || 0 !== t.im))
					},
					"BigNumber, BigNumber": function(e, t) {
						return !!((!e.isZero() && !e.isNaN()) ^ (!t.isZero() && !t.isNaN()))
					},
					"Unit, Unit": function(e, t) {
						return p(e.value, t.value)
					},
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = u(e, t, p);
										break;
									default:
										r = s(t, e, p, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = s(e, t, p, !1);
										break;
									default:
										r = f(e, t, p)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return p(o(e), o(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return p(o(e), t)
					},
					"Matrix, Array": function(e, t) {
						return p(e, o(t))
					},
					"Matrix, any": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = c(e, t, p, !1);
								break;
							default:
								r = l(e, t, p, !1)
						}
						return r
					},
					"any, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = c(t, e, p, !0);
								break;
							default:
								r = l(t, e, p, !0)
						}
						return r
					},
					"Array, any": function(e, t) {
						return l(o(e), t, p, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return l(o(t), e, p, !0).valueOf()
					}
				});
			return p.toTex = "\\left(${args[0]}" + a.operators.xor + "${args[1]}\\right)", p
		}
		t.name = "xor", t.factory = n
	}, function(e, t, r) {
		e.exports = [r(295), r(418), r(312), r(419), r(420), r(81), r(421), r(311), r(422), r(316), r(423), r(424), r(425), r(318), r(370), r(329), r(373)]
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			function o(e, t) {
				var r = i(e),
					n = i(t);
				if (1 != r.length || 1 != n.length || 3 != r[0] || 3 != n[0]) throw new RangeError("Vectors with length 3 expected (Size A = [" + r.join(", ") + "], B = [" + n.join(", ") + "])");
				return [u(c(e[1], t[2]), c(e[2], t[1])), u(c(e[2], t[0]), c(e[0], t[2])), u(c(e[0], t[1]), c(e[1], t[0]))]
			}
			var s = n(r(50)),
				u = n(r(74)),
				c = n(r(83)),
				f = a("cross", {
					"Matrix, Matrix": function(e, t) {
						return s(o(e.toArray(), t.toArray()))
					},
					"Matrix, Array": function(e, t) {
						return s(o(e.toArray(), t))
					},
					"Array, Matrix": function(e, t) {
						return s(o(e, t.toArray()))
					},
					"Array, Array": o
				});
			return f.toTex = "\\left(${args[0]}\\right)\\times\\left(${args[1]}\\right)", f
		}
		var i = r(39).size;
		t.name = "cross", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, s) {
			function u(e, t, r, n) {
				if (!o(t)) throw new TypeError("Second parameter in function diag must be an integer");
				var i = t > 0 ? t : 0,
					a = 0 > t ? -t : 0;
				switch (r.length) {
					case 1:
						return c(e, t, n, r[0], a, i);
					case 2:
						return f(e, t, n, r, a, i)
				}
				throw new RangeError("Matrix for function diag must be 2 dimensional")
			}

			function c(t, r, n, i, a, o) {
				var s = [i + a, i + o],
					u = e.Matrix.storage(n || "dense"),
					c = u.diagonal(s, t, r);
				return null !== n ? c : c.valueOf()
			}

			function f(e, t, r, n, i, o) {
				if (e && e.isMatrix === !0) {
					var s = e.diagonal(t);
					return null !== r ? r !== s.storage() ? l(s, r) : s : s.valueOf()
				}
				for (var u = Math.min(n[0] - i, n[1] - o), c = [], f = 0; u > f; f++) c[f] = a(e[f + i][f + o]);
				return null !== r ? l(c) : c
			}
			var l = n(r(50)),
				p = s("diag", {
					Array: function(e) {
						return u(e, 0, i.size(e), null)
					},
					"Array, number": function(e, t) {
						return u(e, t, i.size(e), null)
					},
					"Array, BigNumber": function(e, t) {
						return u(e, t.toNumber(), i.size(e), null)
					},
					"Array, string": function(e, t) {
						return u(e, 0, i.size(e), t)
					},
					"Array, number, string": function(e, t, r) {
						return u(e, t, i.size(e), r)
					},
					"Array, BigNumber, string": function(e, t, r) {
						return u(e, t.toNumber(), i.size(e), r)
					},
					Matrix: function(e) {
						return u(e, 0, e.size(), e.storage())
					},
					"Matrix, number": function(e, t) {
						return u(e, t, e.size(), e.storage())
					},
					"Matrix, BigNumber": function(e, t) {
						return u(e, t.toNumber(), e.size(), e.storage())
					},
					"Matrix, string": function(e, t) {
						return u(e, 0, e.size(), t)
					},
					"Matrix, number, string": function(e, t, r) {
						return u(e, t, e.size(), r)
					},
					"Matrix, BigNumber, string": function(e, t, r) {
						return u(e, t.toNumber(), e.size(), r)
					}
				});
			return p.toTex = "\\mathrm{${name}}\\left(${args}\\right)", p
		}
		var i = r(39),
			a = r(3).clone,
			o = r(6).isInteger;
		t.name = "diag", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			function o(e, t) {
				var r = i(e),
					n = i(t),
					a = r[0];
				if (1 !== r.length || 1 !== n.length) throw new RangeError("Vector expected");
				if (r[0] != n[0]) throw new RangeError("Vectors must have equal length (" + r[0] + " != " + n[0] + ")");
				if (0 == a) throw new RangeError("Cannot calculate the dot product of empty vectors");
				for (var o = 0, c = 0; a > c; c++) o = s(o, u(e[c], t[c]));
				return o
			}
			var s = n(r(49)),
				u = n(r(83)),
				c = a("dot", {
					"Matrix, Matrix": function(e, t) {
						return o(e.toArray(), t.toArray())
					},
					"Matrix, Array": function(e, t) {
						return o(e.toArray(), t)
					},
					"Array, Matrix": function(e, t) {
						return o(e, t.toArray())
					},
					"Array, Array": o
				});
			return c.toTex = "\\left(${args[0]}\\cdot${args[1]}\\right)", c
		}
		var i = r(39).size;
		t.name = "dot", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = n(r(50)),
				u = o("flatten", {
					Array: function(e) {
						return a(i(e))
					},
					Matrix: function(e) {
						var t = a(i(e.toArray()));
						return s(t)
					}
				});
			return u.toTex = "\\mathrm{${name}}\\left(${args}\\right)", u
		}
		var i = r(3).clone,
			a = r(39).flatten;
		t.name = "flatten", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			function s(t, r) {
				var n = u(t),
					i = n ? new e.BigNumber(1) : 1;
				if (c(t), r) {
					var o = f(r);
					return t.length > 0 ? o.resize(t, i) : o
				}
				var s = [];
				return t.length > 0 ? a(s, t, i) : s
			}

			function u(e) {
				var t = !1;
				return e.forEach(function(e, r, n) {
					e && e.isBigNumber === !0 && (t = !0, n[r] = e.toNumber())
				}), t
			}

			function c(e) {
				e.forEach(function(e) {
					if ("number" != typeof e || !i(e) || 0 > e) throw new Error("Parameters in function ones must be positive integers")
				})
			}
			var f = n(r(50)),
				l = o("ones", {
					"": function() {
						return "array" === t.matrix ? s([]) : s([], "default")
					},
					"...number | BigNumber | string": function(e) {
						var r = e[e.length - 1];
						if ("string" == typeof r) {
							var n = e.pop();
							return s(e, n)
						}
						return "array" === t.matrix ? s(e) : s(e, "default")
					},
					Array: s,
					Matrix: function(e) {
						var t = e.storage();
						return s(e.valueOf(), t)
					},
					"Array | Matrix, string": function(e, t) {
						return s(e.valueOf(), t)
					}
				});
			return l.toTex = "\\mathrm{${name}}\\left(${args}\\right)", l
		}
		var i = r(6).isInteger,
			a = r(39).resize;
		t.name = "ones", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, f) {
			function l(e, t, r) {
				if (void 0 !== r) {
					if ("string" != typeof r || 1 !== r.length) throw new TypeError("Single character expected as defaultValue")
				} else r = " ";
				if (1 !== t.length) throw new i(t.length, 1);
				var n = t[0];
				if ("number" != typeof n || !o(n)) throw new TypeError("Invalid size, must contain positive integers (size: " + s(t) + ")");
				if (e.length > n) return e.substring(0, n);
				if (e.length < n) {
					for (var a = e, u = 0, c = n - e.length; c > u; u++) a += r;
					return a
				}
				return e
			}
			var p = n(r(50)),
				m = function(e, r, n) {
					if (2 != arguments.length && 3 != arguments.length) throw new a("resize", arguments.length, 2, 3);
					if (r && r.isMatrix === !0 && (r = r.valueOf()), r.length && r[0] && r[0].isBigNumber === !0 && (r = r.map(function(e) {
							return e && e.isBigNumber === !0 ? e.toNumber() : e
						})), e && e.isMatrix === !0) return e.resize(r, n, !0);
					if ("string" == typeof e) return l(e, r, n);
					var i = Array.isArray(e) ? !1 : "array" !== t.matrix;
					if (0 == r.length) {
						for (; Array.isArray(e);) e = e[0];
						return u(e)
					}
					Array.isArray(e) || (e = [e]), e = u(e);
					var o = c.resize(e, r, n);
					return i ? p(o) : o
				};
			return m.toTex = "\\mathrm{${name}}\\left(${args}\\right)", m
		}
		var i = r(41),
			a = r(11),
			o = r(6).isInteger,
			s = r(23).format,
			u = r(3).clone,
			c = r(39);
		t.name = "resize", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(50)),
				s = a("size", {
					Matrix: function(e) {
						return o(e.size())
					},
					Array: i.size,
					string: function(e) {
						return "array" === t.matrix ? [e.length] : o([e.length])
					},
					"number | Complex | BigNumber | Unit | boolean | null": function(e) {
						return "array" === t.matrix ? [] : o([])
					}
				});
			return s.toTex = "\\mathrm{${name}}\\left(${args}\\right)", s
		}
		var i = r(39);
		t.name = "size", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = n(r(50)),
				u = o("squeeze", {
					Array: function(e) {
						return a.squeeze(i.clone(e))
					},
					Matrix: function(e) {
						var t = a.squeeze(e.toArray());
						return Array.isArray(t) ? s(t) : t
					},
					any: function(e) {
						return i.clone(e)
					}
				});
			return u.toTex = "\\mathrm{${name}}\\left(${args}\\right)", u
		}
		var i = r(3),
			a = r(39);
		t.name = "squeeze", t.factory = n
	}, function(e, t, r) {
		e.exports = [r(399), r(397), r(398), r(427), r(429), r(430), r(431), r(433), r(434)]
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			function a(e, t) {
				var r = t.size().length,
					n = e.size().length;
				if (r > 1) throw new Error("first object must be one dimensional");
				if (n > 1) throw new Error("second object must be one dimensional");
				if (r !== n) throw new Error("Length of two vectors must be equal");
				var i = u(e);
				if (0 === i) throw new Error("Sum of elements in first object must be non zero");
				var a = u(t);
				if (0 === a) throw new Error("Sum of elements in second object must be non zero");
				var o = s(e, u(e)),
					m = s(t, u(t)),
					h = u(c(o, l(f(o, m))));
				return p(h) ? h : Number.NaN
			}
			var o = n(r(50)),
				s = n(r(310)),
				u = n(r(428)),
				c = n(r(83)),
				f = n(r(353)),
				l = n(r(82)),
				p = n(r(87)),
				m = i("kldivergence", {
					"Array, Array": function(e, t) {
						return a(o(e), o(t))
					},
					"Matrix, Array": function(e, t) {
						return a(e, o(t))
					},
					"Array, Matrix": function(e, t) {
						return a(o(e), t)
					},
					"Matrix, Matrix": function(e, t) {
						return a(e, t)
					}
				});
			return m
		}
		t.name = "kldivergence", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			function o(r) {
				var n = void 0;
				if (i(r, function(e) {
						n = void 0 === n ? e : s(n, e)
					}), void 0 === n) switch (t.number) {
					case "number":
						return 0;
					case "bignumber":
						return new e.BigNumber(0);
					case "fraction":
						return new e.Fraction(0);
					default:
						return 0
				}
				return n
			}
			var s = n(r(51)),
				u = a("sum", {
					"Array | Matrix": function(e) {
						return o(e)
					},
					"Array | Matrix, number | BigNumber": function() {
						throw new Error("sum(A, dim) is not yet supported")
					},
					"...": function() {
						return o(arguments)
					}
				});
			return u.toTex = "\\mathrm{${name}}\\left(${args}\\right)", u
		}
		var i = r(306);
		t.name = "sum", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(49)),
				s = n(r(83)),
				u = n(r(310)),
				c = n(r(397)),
				f = n(r(400)),
				l = n(r(363));
			return a("multinomial", {
				"Array | Matrix": function(e) {
					var t = 0,
						r = 1;
					return i(e, function(e) {
						if (!f(e) || !l(e)) throw new TypeError("Positive integer value expected in function multinomial");
						t = o(t, e), r = s(r, c(e))
					}), u(c(t), r)
				}
			})
		}
		var i = r(306);
		t.name = "multinomial", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = n(r(397)),
				u = o("permutations", {
					"number | BigNumber": s,
					"number, number": function(e, t) {
						var r, n;
						if (!a(e) || 0 > e) throw new TypeError("Positive integer value expected in function permutations");
						if (!a(t) || 0 > t) throw new TypeError("Positive integer value expected in function permutations");
						if (t > e) throw new TypeError("second argument k must be less than or equal to first argument n");
						for (r = 1, n = e - t + 1; e >= n; n++) r *= n;
						return r
					},
					"BigNumber, BigNumber": function(t, r) {
						var n, a;
						if (!i(t) || !i(r)) throw new TypeError("Positive integer value expected in function permutations");
						if (r.gt(t)) throw new TypeError("second argument k must be less than or equal to first argument n");
						for (n = new e.BigNumber(1), a = t.minus(r).plus(1); a.lte(t); a = a.plus(1)) n = n.times(a);
						return n
					}
				});
			return u.toTex = "\\mathrm{${name}}\\left(${args}\\right)", u
		}

		function i(e) {
			return e.isInteger() && e.gte(0)
		}
		var a = r(6).isInteger;
		t.name = "permutations", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = n(r(432)),
				o = a("uniform").pickRandom;
			return o.toTex = "\\mathrm{${name}}\\left(${args}\\right)", o
		}
		t.name = "pickRandom", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			function s(e) {
				if (!f.hasOwnProperty(e)) throw new Error("Unknown distribution " + e);
				var t = Array.prototype.slice.call(arguments, 1),
					r = f[e].apply(this, t);
				return function(e) {
					var t = {
							random: function(e, t, n) {
								var s, c, f;
								if (arguments.length > 3) throw new i("random", arguments.length, 0, 3);
								if (1 === arguments.length ? a(e) ? s = e : f = e : 2 === arguments.length ? a(e) ? (s = e, f = t) : (c = e, f = t) : (s = e, c = t, f = n), void 0 === f && (f = 1), void 0 === c && (c = 0), void 0 !== s) {
									var l = o(s.valueOf(), c, f, r);
									return s && s.isMatrix === !0 ? u(l) : l
								}
								return r(c, f)
							},
							randomInt: function(e, t, r) {
								var s, c, f;
								if (arguments.length > 3 || arguments.length < 1) throw new i("randomInt", arguments.length, 1, 3);
								if (1 === arguments.length ? a(e) ? s = e : f = e : 2 === arguments.length ? a(e) ? (s = e, f = t) : (c = e, f = t) : (s = e, c = t, f = r), void 0 === c && (c = 0), void 0 !== s) {
									var l = o(s.valueOf(), c, f, n);
									return s && s.isMatrix === !0 ? u(l) : l
								}
								return n(c, f)
							},
							pickRandom: function(e) {
								if (1 !== arguments.length) throw new i("pickRandom", arguments.length, 1);
								if (e && e.isMatrix === !0) e = e.valueOf();
								else if (!Array.isArray(e)) throw new TypeError("Unsupported type of value in function pickRandom");
								if (c.size(e).length > 1) throw new Error("Only one dimensional vectors supported");
								return e[Math.floor(Math.random() * e.length)]
							}
						},
						r = function(t, r) {
							return t + e() * (r - t)
						},
						n = function(t, r) {
							return Math.floor(t + e() * (r - t))
						},
						o = function(e, t, r, n) {
							var i, a, s = [];
							if (e = e.slice(0), e.length > 1)
								for (a = 0, i = e.shift(); i > a; a++) s.push(o(e, t, r, n));
							else
								for (a = 0, i = e.shift(); i > a; a++) s.push(n(t, r));
							return s
						};
					return t
				}(r)
			}
			var u = n(r(50)),
				c = r(39),
				f = {
					uniform: function() {
						return Math.random
					},
					normal: function() {
						return function() {
							for (var e, t, r = -1; 0 > r || r > 1;) e = Math.random(), t = Math.random(), r = 1 / 6 * Math.pow(-2 * Math.log(e), .5) * Math.cos(2 * Math.PI * t) + .5;
							return r
						}
					}
				};
			return s.toTex = "\\mathrm{${name}}\\left(${args}\\right)", s
		}
		var i = r(11),
			a = r(304);
		t.name = "distribution", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = n(r(432)),
				o = a("uniform").random;
			return o.toTex = "\\mathrm{${name}}\\left(${args}\\right)", o
		}
		t.name = "random", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = n(r(432)),
				o = a("uniform").randomInt;
			return o.toTex = "\\mathrm{${name}}\\left(${args}\\right)", o
		}
		t.name = "randomInt", t.factory = n
	}, function(e, t, r) {
		e.exports = [r(436), r(437), r(86), r(62), r(336), r(58), r(438), r(439)]
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(50)),
				s = n(r(59)),
				u = n(r(76)),
				c = n(r(61)),
				f = n(r(55)),
				l = n(r(56)),
				p = a("compare", {
					"boolean, boolean": function(e, t) {
						return e === t ? 0 : e > t ? 1 : -1
					},
					"number, number": function(e, r) {
						return e === r || i(e, r, t.epsilon) ? 0 : e > r ? 1 : -1
					},
					"BigNumber, BigNumber": function(t, r) {
						return new e.BigNumber(t.cmp(r))
					},
					"Fraction, Fraction": function(t, r) {
						return new e.Fraction(t.compare(r))
					},
					"Complex, Complex": function() {
						throw new TypeError("No ordering relation is defined for complex numbers")
					},
					"Unit, Unit": function(e, t) {
						if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
						return p(e.value, t.value)
					},
					"string, string": function(e, t) {
						return e === t ? 0 : e > t ? 1 : -1
					},
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = u(e, t, p);
										break;
									default:
										r = s(t, e, p, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = s(e, t, p, !1);
										break;
									default:
										r = f(e, t, p)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return p(o(e), o(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return p(o(e), t)
					},
					"Matrix, Array": function(e, t) {
						return p(e, o(t))
					},
					"Matrix, any": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = c(e, t, p, !1);
								break;
							default:
								r = l(e, t, p, !1)
						}
						return r
					},
					"any, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = c(t, e, p, !0);
								break;
							default:
								r = l(t, e, p, !0)
						}
						return r
					},
					"Array, any": function(e, t) {
						return l(o(e), t, p, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return l(o(t), e, p, !0).valueOf()
					}
				});
			return p.toTex = "\\mathrm{${name}}\\left(${args}\\right)", p
		}
		var i = r(6).nearlyEqual;
		t.name = "compare", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			function a(e, t) {
				if (Array.isArray(e)) {
					if (Array.isArray(t)) {
						var r = e.length;
						if (r !== t.length) return !1;
						for (var n = 0; r > n; n++)
							if (!a(e[n], t[n])) return !1;
						return !0
					}
					return !1
				}
				return Array.isArray(t) ? !1 : o(e, t)
			}
			var o = n(r(86)),
				s = i("deepEqual", {
					"any, any": function(e, t) {
						return a(e.valueOf(), t.valueOf())
					}
				});
			return s.toTex = "\\mathrm{${name}}\\left(${args}\\right)",
				s
		}
		t.name = "deepEqual", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(50)),
				s = n(r(59)),
				u = n(r(60)),
				c = n(r(61)),
				f = n(r(55)),
				l = n(r(56)),
				p = r(29),
				m = a("smallerEq", {
					"boolean, boolean": function(e, t) {
						return t >= e
					},
					"number, number": function(e, r) {
						return r >= e || i(e, r, t.epsilon)
					},
					"BigNumber, BigNumber": function(e, t) {
						return e.lte(t)
					},
					"Fraction, Fraction": function(e, t) {
						return 1 !== e.compare(t)
					},
					"Complex, Complex": function() {
						throw new TypeError("No ordering relation is defined for complex numbers")
					},
					"Unit, Unit": function(e, t) {
						if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
						return m(e.value, t.value)
					},
					"string, string": function(e, t) {
						return t >= e
					},
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = u(e, t, m);
										break;
									default:
										r = s(t, e, m, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = s(e, t, m, !1);
										break;
									default:
										r = f(e, t, m)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return m(o(e), o(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return m(o(e), t)
					},
					"Matrix, Array": function(e, t) {
						return m(e, o(t))
					},
					"Matrix, any": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = c(e, t, m, !1);
								break;
							default:
								r = l(e, t, m, !1)
						}
						return r
					},
					"any, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = c(t, e, m, !0);
								break;
							default:
								r = l(t, e, m, !0)
						}
						return r
					},
					"Array, any": function(e, t) {
						return l(o(e), t, m, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return l(o(t), e, m, !0).valueOf()
					}
				});
			return m.toTex = "\\left(${args[0]}" + p.operators.smallerEq + "${args[1]}\\right)", m
		}
		var i = r(6).nearlyEqual;
		t.name = "smallerEq", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(50)),
				s = n(r(59)),
				u = n(r(60)),
				c = n(r(61)),
				f = n(r(55)),
				l = n(r(56)),
				p = r(29),
				m = a("unequal", {
					"any, any": function(e, t) {
						return null === e ? null !== t : null === t ? null !== e : void 0 === e ? void 0 !== t : void 0 === t ? void 0 !== e : h(e, t)
					},
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = u(e, t, h);
										break;
									default:
										r = s(t, e, h, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = s(e, t, h, !1);
										break;
									default:
										r = f(e, t, h)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return m(o(e), o(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return m(o(e), t)
					},
					"Matrix, Array": function(e, t) {
						return m(e, o(t))
					},
					"Matrix, any": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = c(e, t, h, !1);
								break;
							default:
								r = l(e, t, h, !1)
						}
						return r
					},
					"any, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = c(t, e, h, !0);
								break;
							default:
								r = l(t, e, h, !0)
						}
						return r
					},
					"Array, any": function(e, t) {
						return l(o(e), t, h, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return l(o(t), e, h, !0).valueOf()
					}
				}),
				h = a("_unequal", {
					"boolean, boolean": function(e, t) {
						return e !== t
					},
					"number, number": function(e, r) {
						return !i(e, r, t.epsilon)
					},
					"BigNumber, BigNumber": function(e, t) {
						return !e.eq(t)
					},
					"Fraction, Fraction": function(e, t) {
						return 0 !== e.compare(t)
					},
					"Complex, Complex": function(e, r) {
						return !i(e.re, r.re, t.epsilon) || !i(e.im, r.im, t.epsilon)
					},
					"Unit, Unit": function(e, t) {
						if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
						return m(e.value, t.value)
					},
					"string, string": function(e, t) {
						return e !== t
					}
				});
			return m.toTex = "\\left(${args[0]}" + p.operators.unequal + "${args[1]}\\right)", m
		}
		var i = r(6).nearlyEqual;
		t.name = "unequal", t.factory = n
	}, function(e, t, r) {
		e.exports = [r(305), r(309), r(441), r(314), r(443), r(444), r(445), r(446), r(428), r(447)]
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			function o(e) {
				e = i(e.valueOf());
				var t = e.length;
				if (0 == t) throw new Error("Cannot calculate median of an empty array");
				if (t % 2 == 0) {
					for (var r = t / 2 - 1, n = f(e, r + 1), a = e[r], o = 0; r > o; ++o) c(e[o], a) > 0 && (a = e[o]);
					return m(a, n)
				}
				var s = f(e, (t - 1) / 2);
				return p(s)
			}
			var s = n(r(51)),
				u = n(r(78)),
				c = n(r(436)),
				f = n(r(442)),
				l = a("median", {
					"Array | Matrix": o,
					"Array | Matrix, number | BigNumber": function(e, t) {
						throw new Error("median(A, dim) is not yet supported")
					},
					"...": function() {
						return o(Array.prototype.slice.call(arguments))
					}
				}),
				p = a({
					"number | BigNumber | Unit": function(e) {
						return e
					}
				}),
				m = a({
					"number | BigNumber | Unit, number | BigNumber | Unit": function(e, t) {
						return u(s(e, t), 2)
					}
				});
			return l.toTex = "\\mathrm{${name}}\\left(${args}\\right)", l
		}
		var i = r(39).flatten;
		t.name = "median", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			function o(e, t) {
				return -c(e, t)
			}

			function s(e, t, r) {
				if (!i(t) || 0 > t) throw new Error("k must be a non-negative integer");
				if (e && e.isMatrix) {
					var n = e.size();
					if (n.length > 1) throw new Error("Only one dimensional matrices supported");
					return u(e.valueOf(), t, r)
				}
				return Array.isArray(e) ? u(e, t, r) : void 0
			}

			function u(e, t, r) {
				if (t >= e.length) throw new Error("k out of bounds");
				for (var n = 0, i = e.length - 1; i > n;) {
					for (var a = n, o = i, s = e[Math.floor(Math.random() * (i - n + 1)) + n]; o > a;)
						if (r(e[a], s) >= 0) {
							var u = e[o];
							e[o] = e[a], e[a] = u, --o
						} else ++a;
					r(e[a], s) > 0 && --a, a >= t ? i = a : n = a + 1
				}
				return e[t]
			}
			var c = n(r(436));
			return a("partitionSelect", {
				"Array | Matrix, number": function(e, t) {
					return s(e, t, c)
				},
				"Array | Matrix, number, string": function(e, t, r) {
					if ("asc" === r) return s(e, t, c);
					if ("desc" === r) return s(e, t, o);
					throw new Error('Compare string must be "asc" or "desc"')
				},
				"Array | Matrix, number, function": s
			})
		}
		var i = r(6).isInteger;
		t.name = "partitionSelect", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			function a(e) {
				e = i(e.valueOf());
				var t = e.length;
				if (0 == t) throw new Error("Cannot calculate mode of an empty array");
				var r = {},
					n = [],
					a = 0;
				for (var o in e) e[o] in r || (r[e[o]] = 0), r[e[o]]++, r[e[o]] == a ? n.push(e[o]) : r[e[o]] > a && (a = r[e[o]], n = [e[o]]);
				return n
			}
			var o = n("mode", {
				"Array | Matrix": a,
				"...": function() {
					return a(Array.prototype.slice.call(arguments))
				}
			});
			return o
		}
		var i = r(39).flatten;
		t.name = "mode", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			function o(e) {
				var t = void 0;
				if (i(e, function(e) {
						t = void 0 === t ? e : s(t, e)
					}), void 0 === t) throw new Error("Cannot calculate prod of an empty array");
				return t
			}
			var s = n(r(77)),
				u = a("prod", {
					"Array | Matrix": o,
					"Array | Matrix, number | BigNumber": function(e, t) {
						throw new Error("prod(A, dim) is not yet supported")
					},
					"...": function() {
						return o(arguments)
					}
				});
			return u.toTex = "\\mathrm{${name}}\\left(${args}\\right)", u
		}
		var i = r(306);
		t.name = "prod", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, u) {
			function c(t, r, n) {
				var o, u, c;
				if (arguments.length < 2 || arguments.length > 3) throw new SyntaxError("Function quantileSeq requires two or three parameters");
				if (s(t)) {
					if (n = n || !1, "boolean" == typeof n) {
						if (u = t.valueOf(), a(r)) {
							if (0 > r) throw new Error("N/prob must be non-negative");
							if (1 >= r) return f(u, r, n);
							if (r > 1) {
								if (!i(r)) throw new Error("N must be a positive integer");
								var l = r + 1;
								o = new Array(r);
								for (var p = 0; r > p;) o[p] = f(u, ++p / l, n);
								return o
							}
						}
						if (r && r.isBigNumber) {
							if (r.isNegative()) throw new Error("N/prob must be non-negative");
							if (c = r.constructor.ONE, r.lte(c)) return f(u, r, n);
							if (r.gt(c)) {
								if (!r.isInteger()) throw new Error("N must be a positive integer");
								var m = r.toNumber();
								if (m > 4294967295) throw new Error("N must be less than or equal to 2^32-1, as that is the maximum length of an Array");
								var l = new e.BigNumber(m + 1);
								o = new Array(m);
								for (var p = 0; m > p;) o[p] = f(u, new e.BigNumber(++p).div(l), n);
								return o
							}
						}
						if (Array.isArray(r)) {
							o = new Array(r.length);
							for (var p = 0; p < o.length; ++p) {
								var h = r[p];
								if (a(h)) {
									if (0 > h || h > 1) throw new Error("Probability must be between 0 and 1, inclusive")
								} else {
									if (!h || !h.isBigNumber) throw new TypeError("Unexpected type of argument in function quantileSeq");
									if (c = h.constructor.ONE, h.isNegative() || h.gt(c)) throw new Error("Probability must be between 0 and 1, inclusive")
								}
								o[p] = f(u, h, n)
							}
							return o
						}
						throw new TypeError("Unexpected type of argument in function quantileSeq")
					}
					throw new TypeError("Unexpected type of argument in function quantileSeq")
				}
				throw new TypeError("Unexpected type of argument in function quantileSeq")
			}

			function f(e, t, r) {
				var n = o(e),
					i = n.length;
				if (0 === i) throw new Error("Cannot calculate quantile of an empty sequence");
				if (a(t)) {
					var s = t * (i - 1),
						u = s % 1;
					if (0 === u) {
						var c = r ? n[s] : m(n, s);
						return g(c), c
					}
					var f, v, d = Math.floor(s);
					if (r) f = n[d], v = n[d + 1];
					else {
						v = m(n, d + 1), f = n[d];
						for (var y = 0; d > y; ++y) h(n[y], f) > 0 && (f = n[y])
					}
					return g(f), g(v), l(p(f, 1 - u), p(v, u))
				}
				var s = t.times(i - 1);
				if (s.isInteger()) {
					s = s.toNumber();
					var c = r ? n[s] : m(n, s);
					return g(c), c
				}
				var f, v, d = s.floor(),
					u = s.minus(d),
					x = d.toNumber();
				if (r) f = n[x], v = n[x + 1];
				else {
					v = m(n, x + 1), f = n[x];
					for (var y = 0; x > y; ++y) h(n[y], f) > 0 && (f = n[y])
				}
				g(f), g(v);
				var b = u.constructor.ONE;
				return l(p(f, b.minus(u)), p(v, u))
			}
			var l = n(r(49)),
				p = n(r(83)),
				m = n(r(442)),
				h = n(r(436)),
				g = u({
					"number | BigNumber | Unit": function(e) {
						return e
					}
				});
			return c
		}
		var i = r(6).isInteger,
			a = r(6).isNumber,
			o = r(39).flatten,
			s = r(304);
		t.name = "quantileSeq", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			function a(e, t) {
				if (0 == e.length) throw new SyntaxError("Function std requires one or more parameters (0 provided)");
				return o(s.apply(null, arguments))
			}
			var o = n(r(362)),
				s = n(r(447)),
				u = i("std", {
					"Array | Matrix": a,
					"Array | Matrix, string": a,
					"...": function() {
						return a(Array.prototype.slice.call(arguments))
					}
				});
			return u.toTex = "\\mathrm{${name}}\\left(${args}\\right)", u
		}
		t.name = "std", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			function s(t, r) {
				var n = 0,
					i = 0;
				if (0 == t.length) throw new SyntaxError("Function var requires one or more parameters (0 provided)");
				if (a(t, function(e) {
						n = u(n, e), i++
					}), 0 === i) throw new Error("Cannot calculate var of an empty array");
				var o = l(n, i);
				switch (n = 0, a(t, function(e) {
					var t = c(e, o);
					n = u(n, f(t, t))
				}), r) {
					case "uncorrected":
						return l(n, i);
					case "biased":
						return l(n, i + 1);
					case "unbiased":
						var s = n && n.isBigNumber === !0 ? new e.BigNumber(0) : 0;
						return 1 == i ? s : l(n, i - 1);
					default:
						throw new Error('Unknown normalization "' + r + '". Choose "unbiased" (default), "uncorrected", or "biased".')
				}
			}
			var u = n(r(51)),
				c = n(r(74)),
				f = n(r(77)),
				l = n(r(78)),
				p = o("variance", {
					"Array | Matrix": function(e) {
						return s(e, i)
					},
					"Array | Matrix, string": s,
					"...": function() {
						return s(arguments, i)
					}
				});
			return p.toTex = "\\mathrm{Var}\\left(${args}\\right)", p
		}
		var i = "unbiased",
			a = r(306);
		t.name = "var", t.factory = n
	}, function(e, t, r) {
		e.exports = [r(449), r(459), r(461), r(463), r(466), r(468), r(470), r(471), r(467), r(469), r(462), r(472), r(465), r(474), r(475), r(478), r(480), r(482), r(483), r(484), r(485), r(486), r(477), r(487), r(488)]
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			function s(t) {
				var r = new e.Complex(t.im * t.im - t.re * t.re + 1, -2 * t.re * t.im),
					n = u(r),
					i = new e.Complex(n.re - t.im, n.im + t.re),
					a = c(i);
				return new e.Complex(1.5707963267948966 - a.im, a.re)
			}
			var u = o.find(n(r(362)), ["Complex"]),
				c = o.find(n(r(82)), ["Complex"]),
				f = o("acos", {
					number: function(r) {
						return r >= -1 && 1 >= r || t.predictable ? Math.acos(r) : s(new e.Complex(r, 0))
					},
					Complex: s,
					BigNumber: function(t) {
						return a(t, e.BigNumber, !1)
					},
					"Array | Matrix": function(e) {
						return i(e, f)
					}
				});
			return f.toTex = "\\cos^{-1}\\left(${args[0]}\\right)", f
		}
		var i = r(19),
			a = r(450);
		t.name = "acos", t.factory = n
	}, function(e, t, r) {
		var n = r(93).pi,
			i = r(451);
		e.exports = function(e, t, r) {
			if (r) {
				if (e.abs().lt(t.ONE)) throw new Error("asec() only has non-complex values for |x| >= 1.")
			} else if (e.abs().gt(t.ONE)) throw new Error("acos() only has non-complex values for |x| <= 1.");
			if (e.eq(-1)) return n(t);
			var a = t.precision;
			t.config({
				precision: a + 4
			}), r && (e = t.ONE.div(e));
			var o = i(t.ONE.minus(e.times(e)).sqrt().div(e.plus(t.ONE)), t).times(2);
			return t.config({
				precision: a
			}), o.toDP(a - 1)
		}
	}, function(e, t, r) {
		var n = r(93),
			i = r(452),
			a = r(94);
		e.exports = function(e, t, r) {
			if (e.isNaN()) return new t(NaN);
			if (!r && e.isZero() || r && !e.isFinite()) return new t(0);
			var o = t.precision;
			if (!r && !e.isFinite() || r && e.isZero()) {
				var s = n.pi(t.constructor({
					precision: o + 2
				})).div(2).toDP(o - 1);
				return s.constructor = t, s.s = e.s, s
			}
			t.config({
				precision: o + 4
			}), r && (e = t.ONE.div(e));
			var u = e.abs();
			if (u.lte(.875)) {
				var c = a(e);
				return c.constructor = t, t.config({
					precision: o
				}), c.toDP(t.precision - 1)
			}
			if (u.gte(1.143)) {
				var s = n.pi(t.constructor({
						precision: o + 4
					})).div(2),
					c = s.minus(a(t.ONE.div(u)));
				return c.s = e.s, c.constructor = t, t.config({
					precision: o
				}), c.toDP(t.precision - 1)
			}
			return e = e.div(e.times(e).plus(1).sqrt()), t.config({
				precision: o
			}), i(e, t)
		}
	}, function(e, t, r) {
		var n = r(93).pi,
			i = r(453),
			a = r(454);
		e.exports = function o(e, t, r) {
			if (e.isNaN()) return new t(NaN);
			var s = t.precision,
				u = e.abs();
			if (r) {
				if (u.lt(t.ONE)) throw new Error("acsc() only has non-complex values for |x| >= 1.");
				t.config({
					precision: s + 2
				}), e = t.ONE.div(e), t.config({
					precision: s
				}), u = e.abs()
			} else if (u.gt(t.ONE)) throw new Error("asin() only has non-complex values for |x| <= 1.");
			if (u.gt(.8)) {
				t.config({
					precision: s + 4
				});
				var c = e.s,
					f = n(t.constructor({
						precision: s + 4
					})).div(2);
				return e = f.minus(o(t.ONE.minus(e.times(e)).sqrt(), t)), e.s = c, e.constructor = t, t.config({
					precision: s
				}), e.toDP(s - 1)
			}
			var l = u.gt(.58);
			l && (t.config({
				precision: s + 8
			}), e = e.div(new t(2).sqrt().times(t.ONE.minus(e.times(e)).sqrt().plus(t.ONE).sqrt())), t.config({
				precision: s
			}));
			var p = 60 >= s || e.dp() <= Math.log(s) && e.lt(.05) ? i(e, s) : a(e, t);
			return l ? p.times(2) : p
		}
	}, function(e, t) {
		e.exports = function(e, t) {
			var r = e.constructor;
			r.config({
				precision: t + Math.log(t) | 4
			});
			for (var n = new r(1), i = e, a = NaN, o = e.times(e), s = e, u = new r(n), c = new r(n), f = new r(n), l = 3; !i.equals(a); l += 2) s = s.times(o), u = u.times(f), c = c.times(f.plus(n)), a = i, f = new r(l), i = i.plus(s.times(u).div(f.times(c)));
			return r.config({
				precision: t
			}), i.toDP(t - 1)
		}
	}, function(e, t, r) {
		var n = r(455),
			i = r(458);
		e.exports = function(e, t) {
			var r = t.precision,
				a = -(r + 4),
				o = r + 8 - e.e,
				s = 25 - e.e,
				u = Math.max(1.442695 * Math.log(r + 2) | 5, 5);
			t.config({
				precision: s
			});
			var c = 0,
				f = new t(Math.asin(e.toNumber()) + "");
			do {
				var l = n(f, t, 1, !1),
					p = i(l);
				l.isZero() || (l.s = f.s);
				var m = l.minus(e).div(p);
				f = f.minus(m), s = Math.min(2 * s, o), t.config({
					precision: s
				})
			} while (2 * m.e >= a && !m.isZero() && ++c <= u);
			if (c == u) throw new Error("asin() failed to converge to the requested accuracy.Try with a higher precision.");
			return t.config({
				precision: r
			}), f.toDP(r - 1)
		}
	}, function(e, t, r) {
		var n = r(456),
			i = r(457);
		e.exports = function(e, t, r, a) {
			if (e.isNaN() || !e.isFinite()) return new t(NaN);
			var o = t.precision,
				s = new t(e),
				u = s.isNegative();
			u && (s.s = -s.s);
			var c = o + (0 | Math.log(o)) + 3;
			if (t.config({
					precision: c
				}), s = n(s, t.constructor({
					precision: c
				}), r), s[0].constructor = t, s[1]) return s = s[0], a && s.isZero() && (s = new t(1 / 0)), t.config({
				precision: o
			}), s;
			var f;
			if (s = s[0], r) {
				f = i(s.div(3125), r), t.config({
					precision: Math.min(c, o + 15)
				});
				for (var l = new t(5), p = new t(16), m = new t(20), h = 0; 5 > h; ++h) {
					var g = f.times(f),
						v = g.times(f),
						d = v.times(g);
					f = p.times(d).minus(m.times(v)).plus(l.times(f))
				}
				u && (f.s = -f.s)
			} else {
				var y, x;
				s.abs().lt(t.ONE) ? (y = 64, x = 3) : (y = 256, x = 4), f = i(s.div(y), r), t.config({
					precision: Math.min(c, o + 8)
				});
				for (var b = new t(8); x > 0; --x) {
					var g = f.times(f),
						w = g.times(g);
					f = b.times(w.minus(g)).plus(t.ONE)
				}
			}
			return a && (f = f.e <= -o ? new t(1 / 0) : t.ONE.div(f)), t.config({
				precision: o
			}), f.toDP(o - 1)
		}
	}, function(e, t, r) {
		var n = r(93);
		e.exports = function(e, t, r) {
			var i = n.pi(t.constructor({
					precision: t.precision + 2
				})),
				a = n.tau(t);
			if (e.abs().lte(i.toDP(e.dp()))) return [e, !1];
			if (e.dp() > 0 && e.div(i.toDP(e.dp())).toNumber() % 2 == 0) return [new t(1 ^ r), !0];
			var o = e.mod(a);
			return e.dp() > 0 && o.toDP(e.dp(), 1).isZero() ? [new t(1 ^ r), !0] : (o.gt(i) && (r ? (o = o.minus(i), o.s = -o.s) : o = a.minus(o)), o.constructor = e.constructor, [o, !1])
		}
	}, function(e, t) {
		e.exports = function(e, t) {
			for (var r = e.constructor.ONE, n = e, i = NaN, a = e.times(e), o = t ? n : n = r, s = r, u = !0, c = t; !n.equals(i); c += 2) o = o.times(a), s = s.times(c + 1).times(c + 2), i = n, u = !u, n = u ? n.plus(o.div(s)) : n.minus(o.div(s));
			return n
		}
	}, function(e, t) {
		e.exports = function(e) {
			var t = e.constructor,
				r = t.precision;
			t.config({
				precision: r + 2
			});
			var n = t.ONE.minus(e.times(e)).sqrt();
			return t.config({
				precision: r
			}), n.toDP(r - 1)
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			function s(e) {
				var t, r = u(e);
				return r.im <= 0 ? (t = r.re, r.re = -r.im, r.im = t) : (t = r.im, r.im = -r.re, r.re = t), r
			}
			var u = o.find(n(r(449)), ["Complex"]),
				c = o("acosh", {
					number: function(r) {
						return r >= 1 || t.predictable ? Math.log(Math.sqrt(r * r - 1) + r) : -1 >= r ? new e.Complex(Math.log(Math.sqrt(r * r - 1) - r), Math.PI) : s(new e.Complex(r, 0))
					},
					Complex: s,
					BigNumber: function(t) {
						return a(t, e.BigNumber, !1, !1)
					},
					"Array | Matrix": function(e) {
						return i(e, c)
					}
				});
			return c.toTex = "\\cosh^{-1}\\left(${args[0]}\\right)", c
		}
		var i = r(19),
			a = r(460);
		t.name = "acosh", t.factory = n
	}, function(e, t) {
		e.exports = function(e, t, r, n) {
			if (e.isNaN()) return new t(NaN);
			if (n && e.isZero()) return new t(1 / 0);
			if (!r)
				if (n) {
					if (e.isNegative() || e.gt(t.ONE)) throw new Error("asech() only has non-complex values for 0 <= x <= 1.")
				} else if (e.lt(t.ONE)) throw new Error("acosh() only has non-complex values for x >= 1.");
			var i = t.precision;
			t.config({
				precision: i + 4
			});
			var a = new t(e);
			a.constructor = t, n && (a = t.ONE.div(a));
			var o = r ? a.times(a).plus(t.ONE) : a.times(a).minus(t.ONE),
				s = a.plus(o.sqrt()).ln();
			return t.config({
				precision: i
			}), new t(s.toPrecision(i))
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, s) {
			var u = s.find(n(r(462)), ["Complex"]),
				c = s("acot", {
					number: function(e) {
						return e ? Math.atan(1 / e) : o
					},
					Complex: function(t) {
						if (0 == t.im) return new e.Complex(t.re ? Math.atan(1 / t.re) : o, 0);
						var r = t.re * t.re + t.im * t.im;
						return t = 0 != r ? new e.Complex(t.re = t.re / r, t.im = -t.im / r) : new e.Complex(0 != t.re ? t.re / 0 : 0, 0 != t.im ? -(t.im / 0) : 0), u(t)
					},
					BigNumber: function(t) {
						return a(t, e.BigNumber, !0)
					},
					"Array | Matrix": function(e) {
						return i(e, c)
					}
				});
			return c.toTex = "\\cot^{-1}\\left(${args[0]}\\right)", c
		}
		var i = r(19),
			a = r(451),
			o = 1.5707963267948966;
		t.name = "acot", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = o.find(n(r(82)), ["Complex"]),
				u = o("atan", {
					number: function(e) {
						return Math.atan(e)
					},
					Complex: function(t) {
						if (0 == t.re) {
							if (1 == t.im) return new e.Complex(0, 1 / 0);
							if (-1 == t.im) return new e.Complex(0, -(1 / 0))
						}
						var r = t.re,
							n = t.im,
							i = r * r + (1 - n) * (1 - n),
							a = new e.Complex((1 - n * n - r * r) / i, -2 * r / i),
							o = s(a);
						return new e.Complex(-.5 * o.im, .5 * o.re)
					},
					BigNumber: function(t) {
						return a(t, e.BigNumber, !1)
					},
					"Array | Matrix": function(e) {
						return i(e, u, !0)
					}
				});
			return u.toTex = "\\tan^{-1}\\left(${args[0]}\\right)", u
		}
		var i = r(19),
			a = r(451);
		t.name = "atan", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, s) {
			function u(t) {
				if (0 == t.re && 0 == t.im) return new e.Complex(0, o);
				var r = t.re * t.re + t.im * t.im;
				return t = 0 != r ? new e.Complex(t.re / r, -t.im / r) : new e.Complex(0 != t.re ? t.re / 0 : 0, 0 != t.im ? -(t.im / 0) : 0), c(t)
			}
			var c = s.find(n(r(465)), ["Complex"]),
				f = s("acoth", {
					number: function(r) {
						return r >= 1 || -1 >= r || t.predictable ? isFinite(r) ? (Math.log((r + 1) / r) + Math.log(r / (r - 1))) / 2 : 0 : 0 !== r ? u(new e.Complex(r, 0)) : new e.Complex(0, o)
					},
					Complex: u,
					BigNumber: function(t) {
						return a(t, e.BigNumber, !0)
					},
					"Array | Matrix": function(e) {
						return i(e, f)
					}
				});
			return f.toTex = "\\coth^{-1}\\left(${args[0]}\\right)", f
		}
		var i = r(19),
			a = r(464),
			o = 1.5707963267948966;
		t.name = "acoth", t.factory = n
	}, function(e, t) {
		e.exports = function(e, t, r) {
			if (e.isNaN()) return new t(NaN);
			var n = e.abs();
			if (n.eq(t.ONE)) return new t(e.isNegative() ? -(1 / 0) : 1 / 0);
			if (n.gt(t.ONE)) {
				if (!r) throw new Error("atanh() only has non-complex values for |x| <= 1.")
			} else if (r) throw new Error("acoth() has complex values for |x| < 1.");
			if (e.isZero()) return new t(0);
			var i = t.precision;
			t.config({
				precision: i + 4
			});
			var a = new t(e);
			a.constructor = t, r && (a = t.ONE.div(a));
			var o = t.ONE.plus(a).div(t.ONE.minus(a)).ln().div(2);
			return t.config({
				precision: i
			}), new t(o.toPrecision(i))
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			function o(t) {
				var r = t.re > 1 && 0 == t.im,
					n = 1 - t.re,
					i = 1 + t.re,
					a = n * n + t.im * t.im;
				t = 0 != a ? new e.Complex((i * n - t.im * t.im) / a, (t.im * n + i * t.im) / a) : new e.Complex(-1 != t.re ? t.re / 0 : 0, 0 != t.im ? t.im / 0 : 0);
				var o = t.re;
				return t.re = Math.log(Math.sqrt(t.re * t.re + t.im * t.im)) / 2, t.im = Math.atan2(t.im, o) / 2, r && (t.im = -t.im), t
			}
			var s = n("atanh", {
				number: function(r) {
					return 1 >= r && r >= -1 || t.predictable ? Math.log((1 + r) / (1 - r)) / 2 : o(new e.Complex(r, 0))
				},
				Complex: o,
				BigNumber: function(t) {
					return a(t, e.BigNumber, !1)
				},
				"Array | Matrix": function(e) {
					return i(e, s, !0)
				}
			});
			return s.toTex = "\\tanh^{-1}\\left(${args[0]}\\right)", s
		}
		var i = r(19),
			a = r(464);
		t.name = "atanh", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, s) {
			function u(t) {
				if (0 == t.re && 0 == t.im) return new e.Complex(o, 1 / 0);
				var r = t.re * t.re + t.im * t.im;
				return t = 0 != r ? new e.Complex(t.re = t.re / r, t.im = -t.im / r) : new e.Complex(0 != t.re ? t.re / 0 : 0, 0 != t.im ? -(t.im / 0) : 0), c(t)
			}
			var c = s.find(n(r(467)), ["Complex"]),
				f = s("acsc", {
					number: function(r) {
						return -1 >= r || r >= 1 || t.predictable ? Math.asin(1 / r) : u(new e.Complex(r, 0))
					},
					Complex: u,
					BigNumber: function(t) {
						return a(t, e.BigNumber, !0)
					},
					"Array | Matrix": function(e) {
						return i(e, f)
					}
				});
			return f.toTex = "\\csc^{-1}\\left(${args[0]}\\right)", f
		}
		var i = r(19),
			a = r(452),
			o = 1.5707963267948966;
		t.name = "acsc", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			function s(t) {
				var r = t.re,
					n = t.im,
					i = new e.Complex(n * n - r * r + 1, -2 * r * n),
					a = u(i),
					o = new e.Complex(a.re - n, a.im + r),
					s = c(o);
				return new e.Complex(s.im, -s.re)
			}
			var u = o.find(n(r(362)), ["Complex"]),
				c = o.find(n(r(82)), ["Complex"]),
				f = o("asin", {
					number: function(r) {
						return r >= -1 && 1 >= r || t.predictable ? Math.asin(r) : s(new e.Complex(r, 0))
					},
					Complex: s,
					BigNumber: function(t) {
						return a(t, e.BigNumber, !1)
					},
					"Array | Matrix": function(e) {
						return i(e, f, !0)
					}
				});
			return f.toTex = "\\sin^{-1}\\left(${args[0]}\\right)", f
		}
		var i = r(19),
			a = r(452);
		t.name = "asin", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = o.find(n(r(469)), ["Complex"]),
				u = o("acsch", {
					number: function(e) {
						return e = 1 / e, Math.log(e + Math.sqrt(e * e + 1))
					},
					Complex: function(t) {
						if (0 == t.im) return t = 0 != t.re ? Math.log(t.re + Math.sqrt(t.re * t.re + 1)) : 1 / 0, new e.Complex(t, 0);
						var r = t.re * t.re + t.im * t.im;
						return t = 0 != r ? new e.Complex(t.re / r, -t.im / r) : new e.Complex(0 != t.re ? t.re / 0 : 0, 0 != t.im ? -(t.im / 0) : 0), s(t)
					},
					BigNumber: function(t) {
						return a(t, e.BigNumber, !0, !0)
					},
					"Array | Matrix": function(e) {
						return i(e, u)
					}
				});
			return u.toTex = "\\mathrm{csch}^{-1}\\left(${args[0]}\\right)", u
		}
		var i = r(19),
			a = r(460);
		t.name = "acsch", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = o.find(n(r(467)), ["Complex"]),
				u = o("asinh", {
					number: function(e) {
						return Math.log(Math.sqrt(e * e + 1) + e)
					},
					Complex: function(e) {
						var t = e.im;
						e.im = -e.re, e.re = t;
						var r = s(e);
						return e.re = -e.im, e.im = t, t = r.re, r.re = -r.im, r.im = t, r
					},
					BigNumber: function(t) {
						return a(t, e.BigNumber, !0, !1)
					},
					"Array | Matrix": function(e) {
						return i(e, u, !0)
					}
				});
			return u.toTex = "\\sinh^{-1}\\left(${args[0]}\\right)", u
		}
		var i = r(19),
			a = r(460);
		t.name = "asinh", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			function s(t) {
				if (0 == t.re && 0 == t.im) return new e.Complex(0, 1 / 0);
				var r = t.re * t.re + t.im * t.im;
				return t = 0 != r ? new e.Complex(t.re = t.re / r, t.im = -t.im / r) : new e.Complex(0 != t.re ? t.re / 0 : 0, 0 != t.im ? -(t.im / 0) : 0), u(t)
			}
			var u = o.find(n(r(449)), ["Complex"]),
				c = o("asec", {
					number: function(r) {
						return -1 >= r || r >= 1 || t.predictable ? Math.acos(1 / r) : s(new e.Complex(r, 0))
					},
					Complex: s,
					BigNumber: function(t) {
						return a(t, e.BigNumber, !0)
					},
					"Array | Matrix": function(e) {
						return i(e, c)
					}
				});
			return c.toTex = "\\sec^{-1}\\left(${args[0]}\\right)", c
		}
		var i = r(19),
			a = r(450);
		t.name = "asec", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			function s(t) {
				if (0 == t.re && 0 == t.im) return new e.Complex(1 / 0, 0);
				var r = t.re * t.re + t.im * t.im;
				return t = 0 != r ? new e.Complex(t.re / r, -t.im / r) : new e.Complex(0 != t.re ? t.re / 0 : 0, 0 != t.im ? -(t.im / 0) : 0), u(t)
			}
			var u = o.find(n(r(459)), ["Complex"]),
				c = o("asech", {
					number: function(r) {
						if (1 >= r && r >= -1 || t.predictable) {
							r = 1 / r;
							var n = Math.sqrt(r * r - 1);
							return r > 0 || t.predictable ? Math.log(n + r) : new e.Complex(Math.log(n - r), Math.PI)
						}
						return s(new e.Complex(r, 0))
					},
					Complex: s,
					BigNumber: function(t) {
						return a(t, e.BigNumber, !1, !0)
					},
					"Array | Matrix": function(e) {
						return i(e, c)
					}
				});
			return c.toTex = "\\mathrm{sech}^{-1}\\left(${args[0]}\\right)", c
		}
		var i = r(19),
			a = r(460);
		t.name = "asech", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			var o = n(r(50)),
				s = n(r(354)),
				u = n(r(59)),
				c = n(r(356)),
				f = n(r(84)),
				l = n(r(61)),
				p = n(r(55)),
				m = n(r(56)),
				h = a("atan2", {
					"number, number": Math.atan2,
					"BigNumber, BigNumber": function(t, r) {
						return i(t, r, e.BigNumber)
					},
					"Matrix, Matrix": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								switch (t.storage()) {
									case "sparse":
										r = c(e, t, h, !1);
										break;
									default:
										r = s(t, e, h, !0)
								}
								break;
							default:
								switch (t.storage()) {
									case "sparse":
										r = u(e, t, h, !1);
										break;
									default:
										r = p(e, t, h)
								}
						}
						return r
					},
					"Array, Array": function(e, t) {
						return h(o(e), o(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return h(o(e), t)
					},
					"Matrix, Array": function(e, t) {
						return h(e, o(t))
					},
					"Matrix, number | BigNumber": function(e, t) {
						var r;
						switch (e.storage()) {
							case "sparse":
								r = f(e, t, h, !1);
								break;
							default:
								r = m(e, t, h, !1)
						}
						return r
					},
					"number | BigNumber, Matrix": function(e, t) {
						var r;
						switch (t.storage()) {
							case "sparse":
								r = l(t, e, h, !0);
								break;
							default:
								r = m(t, e, h, !0)
						}
						return r
					},
					"Array, number | BigNumber": function(e, t) {
						return m(o(e), t, h, !1).valueOf()
					},
					"number | BigNumber, Array": function(e, t) {
						return m(o(t), e, h, !0).valueOf()
					}
				});
			return h.toTex = "\\mathrm{atan2}\\left(${args}\\right)", h
		}
		var i = r(473);
		t.name = "atan2", t.factory = n
	}, function(e, t, r) {
		var n = r(93),
			i = r(451);
		e.exports = function(e, t, r) {
			var a = r.precision;
			if (t.isZero()) {
				if (e.isZero()) return new r(NaN);
				var o = n.pi(r.constructor({
					precision: a + 2
				})).div(2).toDP(a - 1);
				return o.constructor = r, o.s = e.s, o
			}
			r.config({
				precision: a + 2
			});
			var s = i(e.div(t), r, !1);
			if (t.isNegative()) {
				var u = n.pi(r);
				s = e.isNegative() ? s.minus(u) : s.plus(u)
			}
			return s.constructor = r, r.config({
				precision: a
			}), s.toDP(a - 1)
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = o.find(n(r(475)), ["number"]),
				u = o.find(n(r(477)), ["number"]),
				c = o("cos", {
					number: Math.cos,
					Complex: function(t) {
						return new e.Complex(Math.cos(t.re) * s(-t.im), Math.sin(t.re) * u(-t.im))
					},
					BigNumber: function(t) {
						return a(t, e.BigNumber, 0, !1)
					},
					Unit: function(t) {
						if (!t.hasBase(e.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cos is no angle");
						return c(t.value)
					},
					"Array | Matrix": function(e) {
						return i(e, c)
					}
				});
			return c.toTex = "\\cos\\left(${args[0]}\\right)", c
		}
		var i = r(19),
			a = r(455);
		t.name = "cos", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var s = n("cosh", {
				number: i,
				Complex: function(t) {
					var r = Math.exp(t.re),
						n = Math.exp(-t.re);
					return new e.Complex(Math.cos(t.im) * (r + n) / 2, Math.sin(t.im) * (r - n) / 2)
				},
				BigNumber: function(t) {
					return o(t, e.BigNumber, !1, !1)
				},
				Unit: function(t) {
					if (!t.hasBase(e.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cosh is no angle");
					return s(t.value)
				},
				"Array | Matrix": function(e) {
					return a(e, s)
				}
			});
			return s.toTex = "\\cosh\\left(${args[0]}\\right)", s
		}

		function i(e) {
			return (Math.exp(e) + Math.exp(-e)) / 2
		}
		var a = r(19),
			o = r(476);
		t.name = "cosh", t.factory = n
	}, function(e, t) {
		e.exports = function(e, t, r, n) {
			if (e.isNaN()) return new t(NaN);
			if (!e.isFinite()) return new t(n ? 0 : r ? e : 1 / 0);
			var i = t.precision;
			t.config({
				precision: i + 4
			});
			var a = new t(e);
			return a.constructor = t, a = a.exp(), a = r ? a.minus(t.ONE.div(a)) : a.plus(t.ONE.div(a)), a = n ? new t(2).div(a) : a.div(2), t.config({
				precision: i
			}), new t(a.toPrecision(i))
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var s = n("sinh", {
				number: i,
				Complex: function(t) {
					var r = Math.cos(t.im),
						n = Math.sin(t.im),
						i = Math.exp(t.re),
						a = Math.exp(-t.re);
					return new e.Complex(r * (i - a) / 2, n * (i + a) / 2)
				},
				BigNumber: function(t) {
					return o(t, e.BigNumber, !0, !1)
				},
				Unit: function(t) {
					if (!t.hasBase(e.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sinh is no angle");
					return s(t.value)
				},
				"Array | Matrix": function(e) {
					return a(e, s, !0)
				}
			});
			return s.toTex = "\\sinh\\left(${args[0]}\\right)", s
		}

		function i(e) {
			return Math.abs(e) < 1 ? e + e * e * e / 6 + e * e * e * e * e / 120 : (Math.exp(e) - Math.exp(-e)) / 2
		}
		var a = r(19),
			o = r(476);
		t.name = "sinh", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var o = n("cot", {
				number: function(e) {
					return 1 / Math.tan(e)
				},
				Complex: function(t) {
					var r = Math.exp(-4 * t.im) - 2 * Math.exp(-2 * t.im) * Math.cos(2 * t.re) + 1;
					return new e.Complex(2 * Math.exp(-2 * t.im) * Math.sin(2 * t.re) / r, (Math.exp(-4 * t.im) - 1) / r)
				},
				BigNumber: function(t) {
					return a(t, e.BigNumber, !0)
				},
				Unit: function(t) {
					if (!t.hasBase(e.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cot is no angle");
					return o(t.value)
				},
				"Array | Matrix": function(e) {
					return i(e, o)
				}
			});
			return o.toTex = "\\cot\\left(${args[0]}\\right)", o
		}
		var i = r(19),
			a = r(479);
		t.name = "cot", t.factory = n
	}, function(e, t, r) {
		var n = r(93),
			i = r(455),
			a = r(458),
			o = r(456);
		e.exports = function(e, t, r) {
			if (e.isNaN()) return new t(NaN);
			var s = t.precision,
				u = n.pi(t.constructor({
					precision: s + 2
				})),
				c = u.div(2).toDP(s - 1);
			u = u.toDP(s - 1);
			var f = o(e, t, 1)[0];
			if (f.abs().eq(u)) return new t(1 / 0);
			t.config({
				precision: s + 4
			});
			var l = i(f, t, 1, !1),
				p = a(l);
			l = l.toDP(s), p = p.toDP(s), f.eq(e) ? f.gt(c) && (p.s = -p.s) : u.minus(f.abs()).gt(c) && (p.s = -p.s);
			var m = r ? p.div(l) : l.div(p);
			return t.config({
				precision: s
			}), new t(m.toPrecision(s))
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var s = n("coth", {
				number: i,
				Complex: function(t) {
					var r = Math.exp(2 * t.re),
						n = r * Math.cos(2 * t.im),
						i = r * Math.sin(2 * t.im),
						a = (n - 1) * (n - 1) + i * i;
					return new e.Complex(((n + 1) * (n - 1) + i * i) / a, -2 * i / a)
				},
				BigNumber: function(t) {
					return o(t, e.BigNumber, !0)
				},
				Unit: function(t) {
					if (!t.hasBase(e.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function coth is no angle");
					return s(t.value)
				},
				"Array | Matrix": function(e) {
					return a(e, s)
				}
			});
			return s.toTex = "\\coth\\left(${args[0]}\\right)", s
		}

		function i(e) {
			var t = Math.exp(2 * e);
			return (t + 1) / (t - 1)
		}
		var a = r(19),
			o = r(481);
		t.name = "coth", t.factory = n
	}, function(e, t) {
		e.exports = function(e, t, r) {
			if (e.isNaN()) return new t(NaN);
			if (!e.isFinite()) return new t(e.s);
			var n = t.precision;
			t.config({
				precision: n + 4
			});
			var i = new t(e);
			i.constructor = t;
			var a = i.exp(),
				o = t.ONE.div(a),
				s = a.minus(o);
			return s = r ? a.plus(o).div(s) : s.div(a.plus(o)), t.config({
				precision: n
			}), s.toDP(n - 1)
		}
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var o = n("csc", {
				number: function(e) {
					return 1 / Math.sin(e)
				},
				Complex: function(t) {
					var r = .25 * (Math.exp(-2 * t.im) + Math.exp(2 * t.im)) - .5 * Math.cos(2 * t.re);
					return new e.Complex(.5 * Math.sin(t.re) * (Math.exp(-t.im) + Math.exp(t.im)) / r, .5 * Math.cos(t.re) * (Math.exp(-t.im) - Math.exp(t.im)) / r)
				},
				BigNumber: function(t) {
					return a(t, e.BigNumber, 1, !0)
				},
				Unit: function(t) {
					if (!t.hasBase(e.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function csc is no angle");
					return o(t.value)
				},
				"Array | Matrix": function(e) {
					return i(e, o)
				}
			});
			return o.toTex = "\\csc\\left(${args[0]}\\right)", o
		}
		var i = r(19),
			a = r(455);
		t.name = "csc", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var s = n("csch", {
				number: i,
				Complex: function(t) {
					var r = Math.exp(t.re),
						n = Math.exp(-t.re),
						i = Math.cos(t.im) * (r - n),
						a = Math.sin(t.im) * (r + n),
						o = i * i + a * a;
					return new e.Complex(2 * i / o, -2 * a / o)
				},
				BigNumber: function(t) {
					return o(t, e.BigNumber, !0, !0)
				},
				Unit: function(t) {
					if (!t.hasBase(e.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function csch is no angle");
					return s(t.value)
				},
				"Array | Matrix": function(e) {
					return a(e, s)
				}
			});
			return s.toTex = "\\mathrm{csch}\\left(${args[0]}\\right)", s
		}

		function i(e) {
			return 0 == e ? Number.POSITIVE_INFINITY : Math.abs(2 / (Math.exp(e) - Math.exp(-e))) * s(e)
		}
		var a = r(19),
			o = r(476),
			s = r(6).sign;
		t.name = "csch", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var o = n("sec", {
				number: function(e) {
					return 1 / Math.cos(e)
				},
				Complex: function(t) {
					var r = .25 * (Math.exp(-2 * t.im) + Math.exp(2 * t.im)) + .5 * Math.cos(2 * t.re);
					return new e.Complex(.5 * Math.cos(t.re) * (Math.exp(-t.im) + Math.exp(t.im)) / r, .5 * Math.sin(t.re) * (Math.exp(t.im) - Math.exp(-t.im)) / r)
				},
				BigNumber: function(t) {
					return a(t, e.BigNumber, 0, !0)
				},
				Unit: function(t) {
					if (!t.hasBase(e.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sec is no angle");
					return o(t.value)
				},
				"Array | Matrix": function(e) {
					return i(e, o)
				}
			});
			return o.toTex = "\\sec\\left(${args[0]}\\right)", o
		}
		var i = r(19),
			a = r(455);
		t.name = "sec", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var s = n("sech", {
				number: i,
				Complex: function(t) {
					var r = Math.exp(t.re),
						n = Math.exp(-t.re),
						i = Math.cos(t.im) * (r + n),
						a = Math.sin(t.im) * (r - n),
						o = i * i + a * a;
					return new e.Complex(2 * i / o, -2 * a / o)
				},
				BigNumber: function(t) {
					return o(t, e.BigNumber, !1, !0)
				},
				Unit: function(t) {
					if (!t.hasBase(e.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sech is no angle");
					return s(t.value)
				},
				"Array | Matrix": function(e) {
					return a(e, s)
				}
			});
			return s.toTex = "\\mathrm{sech}\\left(${args[0]}\\right)", s
		}

		function i(e) {
			return 2 / (Math.exp(e) + Math.exp(-e))
		}
		var a = r(19),
			o = r(476);
		t.name = "sech", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, o) {
			var s = o.find(n(r(475)), ["number"]),
				u = o.find(n(r(477)), ["number"]),
				c = o("sin", {
					number: Math.sin,
					Complex: function(t) {
						return new e.Complex(Math.sin(t.re) * s(-t.im), Math.cos(t.re) * u(t.im))
					},
					BigNumber: function(t) {
						return a(t, e.BigNumber, 1, !1)
					},
					Unit: function(t) {
						if (!t.hasBase(e.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sin is no angle");
						return c(t.value)
					},
					"Array | Matrix": function(e) {
						return i(e, c, !0)
					}
				});
			return c.toTex = "\\sin\\left(${args[0]}\\right)", c
		}
		var i = r(19),
			a = r(455);
		t.name = "sin", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var o = n("tan", {
				number: Math.tan,
				Complex: function(t) {
					var r = Math.exp(-4 * t.im) + 2 * Math.exp(-2 * t.im) * Math.cos(2 * t.re) + 1;
					return new e.Complex(2 * Math.exp(-2 * t.im) * Math.sin(2 * t.re) / r, (1 - Math.exp(-4 * t.im)) / r)
				},
				BigNumber: function(t) {
					return a(t, e.BigNumber, !1)
				},
				Unit: function(t) {
					if (!t.hasBase(e.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function tan is no angle");
					return o(t.value)
				},
				"Array | Matrix": function(e) {
					return i(e, o, !0)
				}
			});
			return o.toTex = "\\tan\\left(${args[0]}\\right)", o
		}
		var i = r(19),
			a = r(479);
		t.name = "tan", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var s = n("tanh", {
				number: i,
				Complex: function(t) {
					var r = Math.exp(2 * t.re),
						n = r * Math.cos(2 * t.im),
						i = r * Math.sin(2 * t.im),
						a = (n + 1) * (n + 1) + i * i;
					return new e.Complex(((n - 1) * (n + 1) + i * i) / a, 2 * i / a)
				},
				BigNumber: function(t) {
					return o(t, e.BigNumber, !1)
				},
				Unit: function(t) {
					if (!t.hasBase(e.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function tanh is no angle");
					return s(t.value)
				},
				"Array | Matrix": function(e) {
					return a(e, s, !0)
				}
			});
			return s.toTex = "\\tanh\\left(${args[0]}\\right)", s
		}

		function i(e) {
			var t = Math.exp(2 * e);
			return (t - 1) / (t + 1)
		}
		var a = r(19),
			o = r(481);
		t.name = "tanh", t.factory = n
	}, function(e, t, r) {
		e.exports = [r(490)]
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, i) {
			var a = r(29),
				o = n(r(50)),
				s = n(r(55)),
				u = n(r(56)),
				c = i("to", {
					"Unit, Unit | string": function(e, t) {
						return e.to(t)
					},
					"Matrix, Matrix": function(e, t) {
						return s(e, t, c)
					},
					"Array, Array": function(e, t) {
						return c(o(e), o(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return c(o(e), t)
					},
					"Matrix, Array": function(e, t) {
						return c(e, o(t))
					},
					"Matrix, any": function(e, t) {
						return u(e, t, c, !1)
					},
					"any, Matrix": function(e, t) {
						return u(t, e, c, !0)
					},
					"Array, any": function(e, t) {
						return u(o(e), t, c, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return u(o(t), e, c, !0).valueOf()
					}
				});
			return c.toTex = "\\left(${args[0]}" + a.operators.to + "${args[1]}\\right)", c
		}
		t.name = "to", t.factory = n
	}, function(e, t, r) {
		e.exports = [r(492), r(297), r(88), r(400), r(350), r(87), r(363), r(414), r(302), r(442), r(493), r(494), r(89), r(299)]
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("clone", {
				any: i.clone
			});
			return a.toTex = "\\mathrm{${name}}\\left(${args}\\right)", a
		}
		var i = r(3);
		t.name = "clone", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r, n) {
			var a = n("print", {
				"string, Object": i,
				"string, Object, number": i
			});
			return a.toTex = "\\mathrm{${name}}\\left(${args}\\right)", a
		}

		function i(e, t, r) {
			return e.replace(/\$([\w\.]+)/g, function(e, n) {
				for (var i = n.split("."), s = t[i.shift()]; i.length && void 0 !== s;) {
					var u = i.shift();
					s = u ? s[u] : s + "."
				}
				return void 0 !== s ? a(s) ? s : o(s, r) : e
			})
		}
		var a = r(23).isString,
			o = r(23).format;
		t.name = "print", t.factory = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t, n, a) {
			function o(e) {
				if ("asc" === e) return f;
				if ("desc" === e) return l;
				throw new Error('String "asc" or "desc" expected')
			}

			function s(e) {
				if (1 !== i(e).length) throw new Error("One dimensional array expected")
			}

			function u(e) {
				if (1 !== e.size().length) throw new Error("One dimensional matrix expected")
			}
			var c = n(r(50)),
				f = n(r(436)),
				l = function(e, t) {
					return -f(e, t)
				},
				p = a("sort", {
					Array: function(e) {
						return s(e), e.sort(f)
					},
					Matrix: function(e) {
						return u(e), c(e.toArray().sort(f), e.storage())
					},
					"Array, function": function(e, t) {
						return s(e), e.sort(t)
					},
					"Matrix, function": function(e, t) {
						return u(e), c(e.toArray().sort(t), e.storage())
					},
					"Array, string": function(e, t) {
						return s(e), e.sort(o(t))
					},
					"Matrix, string": function(e, t) {
						return u(e), c(e.toArray().sort(o(t)), e.storage())
					}
				});
			return p.toTex = "\\mathrm{${name}}\\left(${args}\\right)", p
		}
		var i = r(39).size;
		t.name = "sort", t.factory = n
	}, function(e, t, r) {
		e.exports = [r(496)]
	}, function(e, t) {
		"use strict";

		function r(e, t, r, n) {
			return function(t, r) {
				var n = e[r && r.mathjs];
				return n && "function" == typeof n.fromJSON ? n.fromJSON(r) : r
			}
		}
		t.name = "reviver", t.path = "json", t.factory = r
	}, function(e, t, r) {
		"use strict";
		var n = r(11),
			i = r(41),
			a = r(42);
		e.exports = [{
			name: "ArgumentsError",
			path: "error",
			factory: function() {
				return n
			}
		}, {
			name: "DimensionError",
			path: "error",
			factory: function() {
				return i
			}
		}, {
			name: "IndexError",
			path: "error",
			factory: function() {
				return a
			}
		}]
	}])
});
