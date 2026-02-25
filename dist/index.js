import { ref as F, watch as ee, defineComponent as B, useAttrs as Jt, getCurrentInstance as Mt, computed as O, onMounted as we, onBeforeUnmount as ze, nextTick as ce, toRef as ot, createBlock as Z, openBlock as c, Teleport as eo, withDirectives as he, createCommentVNode as D, unref as h, createElementBlock as f, mergeProps as $e, withModifiers as _e, withKeys as to, createVNode as I, Transition as ye, toHandlers as gt, withCtx as U, normalizeStyle as ft, normalizeClass as C, vShow as Te, renderSlot as z, normalizeProps as Dt, guardReactiveProps as oo, createElementVNode as g, inject as Ft, reactive as it, Fragment as oe, renderList as ne, resolveDynamicComponent as nt, createSlots as xe, shallowReactive as Pe, markRaw as Ue, mergeModels as j, useModel as P, toDisplayString as E, onUnmounted as It, createTextVNode as Je, useSlots as Re, resolveComponent as ut, vModelText as no, provide as ao } from "vue";
import { unrefElement as lo, tryOnScopeDispose as ro, useEventListener as ue, tryOnUnmounted as so, useClipboard as io, onKeyStroke as at } from "@vueuse/core";
import { FontAwesomeIcon as te } from "@fortawesome/vue-fontawesome";
import { faChevronDown as wt, faHeadphones as uo, faVideoCamera as co, faFile as vt, faXmark as et, faCheck as Nt, faCopy as fo, faCalendar as vo, faDownload as po, faUpload as mo, faPlus as bo, faSort as ho } from "@fortawesome/free-solid-svg-icons";
import yo from "vuedraggable";
import { v4 as Ot } from "uuid";
import go from "@vuepic/vue-datepicker";
var _t = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], We = /* @__PURE__ */ _t.join(","), xt = typeof Element > "u", ge = xt ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Ge = !xt && Element.prototype.getRootNode ? function(o) {
  var e;
  return o == null || (e = o.getRootNode) === null || e === void 0 ? void 0 : e.call(o);
} : function(o) {
  return o?.ownerDocument;
}, qe = function o(e, t) {
  var n;
  t === void 0 && (t = !0);
  var l = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "inert"), r = l === "" || l === "true", a = r || t && e && o(e.parentNode);
  return a;
}, wo = function(e) {
  var t, n = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, "contenteditable");
  return n === "" || n === "true";
}, At = function(e, t, n) {
  if (qe(e))
    return [];
  var l = Array.prototype.slice.apply(e.querySelectorAll(We));
  return t && ge.call(e, We) && l.unshift(e), l = l.filter(n), l;
}, Lt = function o(e, t, n) {
  for (var l = [], r = Array.from(e); r.length; ) {
    var a = r.shift();
    if (!qe(a, !1))
      if (a.tagName === "SLOT") {
        var s = a.assignedElements(), i = s.length ? s : a.children, u = o(i, !0, n);
        n.flatten ? l.push.apply(l, u) : l.push({
          scopeParent: a,
          candidates: u
        });
      } else {
        var m = ge.call(a, We);
        m && n.filter(a) && (t || !e.includes(a)) && l.push(a);
        var d = a.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(a), v = !qe(d, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
        if (d && v) {
          var k = o(d === !0 ? a.children : d.children, !0, n);
          n.flatten ? l.push.apply(l, k) : l.push({
            scopeParent: a,
            candidates: k
          });
        } else
          r.unshift.apply(r, a.children);
      }
  }
  return l;
}, zt = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, me = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || wo(e)) && !zt(e) ? 0 : e.tabIndex;
}, ko = function(e, t) {
  var n = me(e);
  return n < 0 && t && !zt(e) ? 0 : n;
}, $o = function(e, t) {
  return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, Rt = function(e) {
  return e.tagName === "INPUT";
}, To = function(e) {
  return Rt(e) && e.type === "hidden";
}, Co = function(e) {
  var t = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return t;
}, So = function(e, t) {
  for (var n = 0; n < e.length; n++)
    if (e[n].checked && e[n].form === t)
      return e[n];
}, Eo = function(e) {
  if (!e.name)
    return !0;
  var t = e.form || Ge(e), n = function(s) {
    return t.querySelectorAll('input[type="radio"][name="' + s + '"]');
  }, l;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    l = n(window.CSS.escape(e.name));
  else
    try {
      l = n(e.name);
    } catch (a) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1;
    }
  var r = So(l, e.form);
  return !r || r === e;
}, Bo = function(e) {
  return Rt(e) && e.type === "radio";
}, Vo = function(e) {
  return Bo(e) && !Eo(e);
}, Mo = function(e) {
  var t, n = e && Ge(e), l = (t = n) === null || t === void 0 ? void 0 : t.host, r = !1;
  if (n && n !== e) {
    var a, s, i;
    for (r = !!((a = l) !== null && a !== void 0 && (s = a.ownerDocument) !== null && s !== void 0 && s.contains(l) || e != null && (i = e.ownerDocument) !== null && i !== void 0 && i.contains(e)); !r && l; ) {
      var u, m, d;
      n = Ge(l), l = (u = n) === null || u === void 0 ? void 0 : u.host, r = !!((m = l) !== null && m !== void 0 && (d = m.ownerDocument) !== null && d !== void 0 && d.contains(l));
    }
  }
  return r;
}, kt = function(e) {
  var t = e.getBoundingClientRect(), n = t.width, l = t.height;
  return n === 0 && l === 0;
}, Do = function(e, t) {
  var n = t.displayCheck, l = t.getShadowRoot;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var r = ge.call(e, "details>summary:first-of-type"), a = r ? e.parentElement : e;
  if (ge.call(a, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || n === "legacy-full") {
    if (typeof l == "function") {
      for (var s = e; e; ) {
        var i = e.parentElement, u = Ge(e);
        if (i && !i.shadowRoot && l(i) === !0)
          return kt(e);
        e.assignedSlot ? e = e.assignedSlot : !i && u !== e.ownerDocument ? e = u.host : e = i;
      }
      e = s;
    }
    if (Mo(e))
      return !e.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return kt(e);
  return !1;
}, Fo = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var t = e.parentElement; t; ) {
      if (t.tagName === "FIELDSET" && t.disabled) {
        for (var n = 0; n < t.children.length; n++) {
          var l = t.children.item(n);
          if (l.tagName === "LEGEND")
            return ge.call(t, "fieldset[disabled] *") ? !0 : !l.contains(e);
        }
        return !0;
      }
      t = t.parentElement;
    }
  return !1;
}, Ze = function(e, t) {
  return !(t.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  qe(t) || To(t) || Do(t, e) || // For a details element with a summary, the summary element gets the focus
  Co(t) || Fo(t));
}, dt = function(e, t) {
  return !(Vo(t) || me(t) < 0 || !Ze(e, t));
}, Io = function(e) {
  var t = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(t) || t >= 0);
}, No = function o(e) {
  var t = [], n = [];
  return e.forEach(function(l, r) {
    var a = !!l.scopeParent, s = a ? l.scopeParent : l, i = ko(s, a), u = a ? o(l.candidates) : s;
    i === 0 ? a ? t.push.apply(t, u) : t.push(s) : n.push({
      documentOrder: r,
      tabIndex: i,
      item: l,
      isScope: a,
      content: u
    });
  }), n.sort($o).reduce(function(l, r) {
    return r.isScope ? l.push.apply(l, r.content) : l.push(r.content), l;
  }, []).concat(t);
}, Oo = function(e, t) {
  t = t || {};
  var n;
  return t.getShadowRoot ? n = Lt([e], t.includeContainer, {
    filter: dt.bind(null, t),
    flatten: !1,
    getShadowRoot: t.getShadowRoot,
    shadowRootFilter: Io
  }) : n = At(e, t.includeContainer, dt.bind(null, t)), No(n);
}, _o = function(e, t) {
  t = t || {};
  var n;
  return t.getShadowRoot ? n = Lt([e], t.includeContainer, {
    filter: Ze.bind(null, t),
    flatten: !0,
    getShadowRoot: t.getShadowRoot
  }) : n = At(e, t.includeContainer, Ze.bind(null, t)), n;
}, ke = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return ge.call(e, We) === !1 ? !1 : dt(t, e);
}, xo = /* @__PURE__ */ _t.concat("iframe").join(","), lt = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return ge.call(e, xo) === !1 ? !1 : Ze(t, e);
};
function ct(o, e) {
  (e == null || e > o.length) && (e = o.length);
  for (var t = 0, n = Array(e); t < e; t++) n[t] = o[t];
  return n;
}
function Ao(o) {
  if (Array.isArray(o)) return ct(o);
}
function Lo(o, e, t) {
  return (e = Ho(e)) in o ? Object.defineProperty(o, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[e] = t, o;
}
function zo(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o);
}
function Ro() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $t(o, e) {
  var t = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(o);
    e && (n = n.filter(function(l) {
      return Object.getOwnPropertyDescriptor(o, l).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Tt(o) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? $t(Object(t), !0).forEach(function(n) {
      Lo(o, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t)) : $t(Object(t)).forEach(function(n) {
      Object.defineProperty(o, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return o;
}
function Po(o) {
  return Ao(o) || zo(o) || Uo(o) || Ro();
}
function jo(o, e) {
  if (typeof o != "object" || !o) return o;
  var t = o[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(o, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
function Ho(o) {
  var e = jo(o, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Uo(o, e) {
  if (o) {
    if (typeof o == "string") return ct(o, e);
    var t = {}.toString.call(o).slice(8, -1);
    return t === "Object" && o.constructor && (t = o.constructor.name), t === "Map" || t === "Set" ? Array.from(o) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ct(o, e) : void 0;
  }
}
var Ct = {
  activateTrap: function(e, t) {
    if (e.length > 0) {
      var n = e[e.length - 1];
      n !== t && n._setPausedState(!0);
    }
    var l = e.indexOf(t);
    l === -1 || e.splice(l, 1), e.push(t);
  },
  deactivateTrap: function(e, t) {
    var n = e.indexOf(t);
    n !== -1 && e.splice(n, 1), e.length > 0 && !e[e.length - 1]._isManuallyPaused() && e[e.length - 1]._setPausedState(!1);
  }
}, Ko = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, Wo = function(e) {
  return e?.key === "Escape" || e?.key === "Esc" || e?.keyCode === 27;
}, De = function(e) {
  return e?.key === "Tab" || e?.keyCode === 9;
}, Go = function(e) {
  return De(e) && !e.shiftKey;
}, qo = function(e) {
  return De(e) && e.shiftKey;
}, St = function(e) {
  return setTimeout(e, 0);
}, Be = function(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
    n[l - 1] = arguments[l];
  return typeof e == "function" ? e.apply(void 0, n) : e;
}, je = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, Zo = [], Qo = function(e, t) {
  var n = t?.document || document, l = t?.trapStack || Zo, r = Tt({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: Go,
    isKeyBackward: qo
  }, t), a = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    manuallyPaused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, s, i = function(p, b, T) {
    return p && p[b] !== void 0 ? p[b] : r[T || b];
  }, u = function(p, b) {
    var T = typeof b?.composedPath == "function" ? b.composedPath() : void 0;
    return a.containerGroups.findIndex(function(_) {
      var L = _.container, K = _.tabbableNodes;
      return L.contains(p) || T?.includes(L) || K.find(function(N) {
        return N === p;
      });
    });
  }, m = function(p) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, T = b.hasFallback, _ = T === void 0 ? !1 : T, L = b.params, K = L === void 0 ? [] : L, N = r[p];
    if (typeof N == "function" && (N = N.apply(void 0, Po(K))), N === !0 && (N = void 0), !N) {
      if (N === void 0 || N === !1)
        return N;
      throw new Error("`".concat(p, "` was specified but was not a node, or did not return a node"));
    }
    var q = N;
    if (typeof N == "string") {
      try {
        q = n.querySelector(N);
      } catch (X) {
        throw new Error("`".concat(p, '` appears to be an invalid selector; error="').concat(X.message, '"'));
      }
      if (!q && !_)
        throw new Error("`".concat(p, "` as selector refers to no known node"));
    }
    return q;
  }, d = function() {
    var p = m("initialFocus", {
      hasFallback: !0
    });
    if (p === !1)
      return !1;
    if (p === void 0 || p && !lt(p, r.tabbableOptions))
      if (u(n.activeElement) >= 0)
        p = n.activeElement;
      else {
        var b = a.tabbableGroups[0], T = b && b.firstTabbableNode;
        p = T || m("fallbackFocus");
      }
    else p === null && (p = m("fallbackFocus"));
    if (!p)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return p;
  }, v = function() {
    if (a.containerGroups = a.containers.map(function(p) {
      var b = Oo(p, r.tabbableOptions), T = _o(p, r.tabbableOptions), _ = b.length > 0 ? b[0] : void 0, L = b.length > 0 ? b[b.length - 1] : void 0, K = T.find(function(X) {
        return ke(X);
      }), N = T.slice().reverse().find(function(X) {
        return ke(X);
      }), q = !!b.find(function(X) {
        return me(X) > 0;
      });
      return {
        container: p,
        tabbableNodes: b,
        focusableNodes: T,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: q,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: _,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: L,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: K,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: N,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(ie) {
          var ve = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, le = b.indexOf(ie);
          return le < 0 ? ve ? T.slice(T.indexOf(ie) + 1).find(function(pe) {
            return ke(pe);
          }) : T.slice(0, T.indexOf(ie)).reverse().find(function(pe) {
            return ke(pe);
          }) : b[le + (ve ? 1 : -1)];
        }
      };
    }), a.tabbableGroups = a.containerGroups.filter(function(p) {
      return p.tabbableNodes.length > 0;
    }), a.tabbableGroups.length <= 0 && !m("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (a.containerGroups.find(function(p) {
      return p.posTabIndexesFound;
    }) && a.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, k = function(p) {
    var b = p.activeElement;
    if (b)
      return b.shadowRoot && b.shadowRoot.activeElement !== null ? k(b.shadowRoot) : b;
  }, S = function(p) {
    if (p !== !1 && p !== k(document)) {
      if (!p || !p.focus) {
        S(d());
        return;
      }
      p.focus({
        preventScroll: !!r.preventScroll
      }), a.mostRecentlyFocusedNode = p, Ko(p) && p.select();
    }
  }, G = function(p) {
    var b = m("setReturnFocus", {
      params: [p]
    });
    return b || (b === !1 ? !1 : p);
  }, $ = function(p) {
    var b = p.target, T = p.event, _ = p.isBackward, L = _ === void 0 ? !1 : _;
    b = b || je(T), v();
    var K = null;
    if (a.tabbableGroups.length > 0) {
      var N = u(b, T), q = N >= 0 ? a.containerGroups[N] : void 0;
      if (N < 0)
        L ? K = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : K = a.tabbableGroups[0].firstTabbableNode;
      else if (L) {
        var X = a.tabbableGroups.findIndex(function(Se) {
          var Ee = Se.firstTabbableNode;
          return b === Ee;
        });
        if (X < 0 && (q.container === b || lt(b, r.tabbableOptions) && !ke(b, r.tabbableOptions) && !q.nextTabbableNode(b, !1)) && (X = N), X >= 0) {
          var ie = X === 0 ? a.tabbableGroups.length - 1 : X - 1, ve = a.tabbableGroups[ie];
          K = me(b) >= 0 ? ve.lastTabbableNode : ve.lastDomTabbableNode;
        } else De(T) || (K = q.nextTabbableNode(b, !1));
      } else {
        var le = a.tabbableGroups.findIndex(function(Se) {
          var Ee = Se.lastTabbableNode;
          return b === Ee;
        });
        if (le < 0 && (q.container === b || lt(b, r.tabbableOptions) && !ke(b, r.tabbableOptions) && !q.nextTabbableNode(b)) && (le = N), le >= 0) {
          var pe = le === a.tabbableGroups.length - 1 ? 0 : le + 1, Ce = a.tabbableGroups[pe];
          K = me(b) >= 0 ? Ce.firstTabbableNode : Ce.firstDomTabbableNode;
        } else De(T) || (K = q.nextTabbableNode(b));
      }
    } else
      K = m("fallbackFocus");
    return K;
  }, y = function(p) {
    var b = je(p);
    if (!(u(b, p) >= 0)) {
      if (Be(r.clickOutsideDeactivates, p)) {
        s.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: r.returnFocusOnDeactivate
        });
        return;
      }
      Be(r.allowOutsideClick, p) || p.preventDefault();
    }
  }, V = function(p) {
    var b = je(p), T = u(b, p) >= 0;
    if (T || b instanceof Document)
      T && (a.mostRecentlyFocusedNode = b);
    else {
      p.stopImmediatePropagation();
      var _, L = !0;
      if (a.mostRecentlyFocusedNode)
        if (me(a.mostRecentlyFocusedNode) > 0) {
          var K = u(a.mostRecentlyFocusedNode), N = a.containerGroups[K].tabbableNodes;
          if (N.length > 0) {
            var q = N.findIndex(function(X) {
              return X === a.mostRecentlyFocusedNode;
            });
            q >= 0 && (r.isKeyForward(a.recentNavEvent) ? q + 1 < N.length && (_ = N[q + 1], L = !1) : q - 1 >= 0 && (_ = N[q - 1], L = !1));
          }
        } else
          a.containerGroups.some(function(X) {
            return X.tabbableNodes.some(function(ie) {
              return me(ie) > 0;
            });
          }) || (L = !1);
      else
        L = !1;
      L && (_ = $({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: a.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(a.recentNavEvent)
      })), S(_ || a.mostRecentlyFocusedNode || d());
    }
    a.recentNavEvent = void 0;
  }, A = function(p) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    a.recentNavEvent = p;
    var T = $({
      event: p,
      isBackward: b
    });
    T && (De(p) && p.preventDefault(), S(T));
  }, ae = function(p) {
    (r.isKeyForward(p) || r.isKeyBackward(p)) && A(p, r.isKeyBackward(p));
  }, w = function(p) {
    Wo(p) && Be(r.escapeDeactivates, p) !== !1 && (p.preventDefault(), s.deactivate());
  }, H = function(p) {
    var b = je(p);
    u(b, p) >= 0 || Be(r.clickOutsideDeactivates, p) || Be(r.allowOutsideClick, p) || (p.preventDefault(), p.stopImmediatePropagation());
  }, x = function() {
    if (a.active)
      return Ct.activateTrap(l, s), a.delayInitialFocusTimer = r.delayInitialFocus ? St(function() {
        S(d());
      }) : S(d()), n.addEventListener("focusin", V, !0), n.addEventListener("mousedown", y, {
        capture: !0,
        passive: !1
      }), n.addEventListener("touchstart", y, {
        capture: !0,
        passive: !1
      }), n.addEventListener("click", H, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", ae, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", w), s;
  }, Y = function() {
    if (a.active)
      return n.removeEventListener("focusin", V, !0), n.removeEventListener("mousedown", y, !0), n.removeEventListener("touchstart", y, !0), n.removeEventListener("click", H, !0), n.removeEventListener("keydown", ae, !0), n.removeEventListener("keydown", w), s;
  }, Q = function(p) {
    var b = p.some(function(T) {
      var _ = Array.from(T.removedNodes);
      return _.some(function(L) {
        return L === a.mostRecentlyFocusedNode;
      });
    });
    b && S(d());
  }, fe = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(Q) : void 0, re = function() {
    fe && (fe.disconnect(), a.active && !a.paused && a.containers.map(function(p) {
      fe.observe(p, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return s = {
    get active() {
      return a.active;
    },
    get paused() {
      return a.paused;
    },
    activate: function(p) {
      if (a.active)
        return this;
      var b = i(p, "onActivate"), T = i(p, "onPostActivate"), _ = i(p, "checkCanFocusTrap");
      _ || v(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = k(n), b?.();
      var L = function() {
        _ && v(), x(), re(), T?.();
      };
      return _ ? (_(a.containers.concat()).then(L, L), this) : (L(), this);
    },
    deactivate: function(p) {
      if (!a.active)
        return this;
      var b = Tt({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, p);
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, Y(), a.active = !1, a.paused = !1, re(), Ct.deactivateTrap(l, s);
      var T = i(b, "onDeactivate"), _ = i(b, "onPostDeactivate"), L = i(b, "checkCanReturnFocus"), K = i(b, "returnFocus", "returnFocusOnDeactivate");
      T?.();
      var N = function() {
        St(function() {
          K && S(G(a.nodeFocusedBeforeActivation)), _?.();
        });
      };
      return K && L ? (L(G(a.nodeFocusedBeforeActivation)).then(N, N), this) : (N(), this);
    },
    pause: function(p) {
      return a.active ? (a.manuallyPaused = !0, this._setPausedState(!0, p)) : this;
    },
    unpause: function(p) {
      return a.active ? (a.manuallyPaused = !1, l[l.length - 1] !== this ? this : this._setPausedState(!1, p)) : this;
    },
    updateContainerElements: function(p) {
      var b = [].concat(p).filter(Boolean);
      return a.containers = b.map(function(T) {
        return typeof T == "string" ? n.querySelector(T) : T;
      }), a.active && v(), re(), this;
    }
  }, Object.defineProperties(s, {
    _isManuallyPaused: {
      value: function() {
        return a.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(p, b) {
        if (a.paused === p)
          return this;
        if (a.paused = p, p) {
          var T = i(b, "onPause"), _ = i(b, "onPostPause");
          T?.(), Y(), re(), _?.();
        } else {
          var L = i(b, "onUnpause"), K = i(b, "onPostUnpause");
          L?.(), v(), x(), re(), K?.();
        }
        return this;
      }
    }
  }), s.updateContainerElements(e), s;
};
function Yo(o, e = {}) {
  let t;
  const { immediate: n, ...l } = e, r = F(!1), a = F(!1), s = (d) => t && t.activate(d), i = (d) => t && t.deactivate(d), u = () => {
    t && (t.pause(), a.value = !0);
  }, m = () => {
    t && (t.unpause(), a.value = !1);
  };
  return ee(
    () => lo(o),
    (d) => {
      d && (t = Qo(d, {
        ...l,
        onActivate() {
          r.value = !0, e.onActivate && e.onActivate();
        },
        onDeactivate() {
          r.value = !1, e.onDeactivate && e.onDeactivate();
        }
      }), n && s());
    },
    { flush: "post" }
  ), ro(() => i()), {
    hasFocus: r,
    isPaused: a,
    activate: s,
    deactivate: i,
    pause: u,
    unpause: m
  };
}
const Xo = (o) => (...e) => {
  o && (o?.(...e), o = null);
}, Ae = () => {
};
function He(o, e, t) {
  return o > t ? t : o < e ? e : o;
}
const pt = (o) => typeof o == "string";
function rt(o, e) {
  var t;
  const n = ((t = Me(o, e)) == null ? void 0 : t[0]) || e;
  o.push(n);
}
function Me(o, e) {
  const t = o.indexOf(e);
  if (t !== -1)
    return o.splice(t, 1);
}
function Pt(o) {
  return Object.entries(o);
}
const Jo = {
  /**
   * @description Set `null | false` to disable teleport.
   * @default `'body'`
   * @example
   * ```js
   * teleportTo: '#modals'
   * ```
   */
  teleportTo: {
    type: [String, null, Boolean, Object],
    default: "body"
  },
  /**
   * @description An uniq name for the open/close a modal via vfm.open/vfm.close APIs.
   * @default `undefined`
   * @example Symbol: `Symbol('MyModal')`
   * @example String: `'AUniqString'`
   * @example Number: `300`
   */
  modalId: {
    type: [String, Number, Symbol],
    default: void 0
  },
  /**
   * @description Display the modal or not.
   * @default `undefined`
   * @example
   * ```js
   * const showModal = ref(false)
   * v-model="showModal"
   * ```
   */
  modelValue: {
    type: Boolean,
    default: void 0
  },
  /**
   * @description Render the modal via `if` or `show`.
   * @default `'if'`
   * @example
   * ```js
   * displayDirective: 'if'
   * ```
   * @example
   * ```js
   * displayDirective: 'show'
   * ```
   */
  displayDirective: {
    type: String,
    default: "if",
    validator: (o) => ["if", "show", "visible"].includes(o)
  },
  /**
   * @description Hide the overlay or not.
   * @default `undefined`
   * @example
   * ```js
   * hideOverlay="true"
   * ```
   */
  hideOverlay: {
    type: Boolean,
    default: void 0
  },
  /**
   * @description Customize the overlay behavior.
   */
  overlayBehavior: {
    type: String,
    default: "auto",
    validator: (o) => ["auto", "persist"].includes(o)
  },
  /**
   * @description Customize the overlay transition.
   * @default `undefined`
   */
  overlayTransition: {
    type: [String, Object],
    default: void 0
  },
  /**
   * @description Customize the content transition.
   * @default `undefined`
   */
  contentTransition: {
    type: [String, Object],
    default: void 0
  },
  /**
   * @description Bind class to vfm__overlay.
   * @default `undefined`
   */
  overlayClass: {
    type: void 0,
    default: void 0
  },
  /**
   * @description Bind class to vfm__content.
   * @default `undefined`
   */
  contentClass: {
    type: void 0,
    default: void 0
  },
  /**
   * @description Bind style to vfm__overlay.
   * @default `undefined`
   */
  overlayStyle: {
    type: [String, Object, Array],
    default: void 0
  },
  /**
   * @description Bind style to vfm__content.
   * @default `undefined`
   */
  contentStyle: {
    type: [String, Object, Array],
    default: void 0
  },
  /**
   * @description Is it allow to close the modal by clicking the overlay.
   * @default `true`
   */
  clickToClose: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Is it allow to close the modal by keypress `esc`.
   * @default `true`
   */
  escToClose: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Is it allow to click outside of the vfm__content when the modal is opened
   * @default `'non-interactive'`
   */
  background: {
    type: String,
    default: "non-interactive",
    validator: (o) => ["interactive", "non-interactive"].includes(o)
  },
  /**
   * @description
   * * Use `{ disabled: true }` to disable the focusTrap.
   * * Checkout the createOptions type here https://github.com/focus-trap/focus-trap for more.
   * @default `{ allowOutsideClick: true }`
   */
  focusTrap: {
    type: [Boolean, Object],
    default: () => ({
      allowOutsideClick: !0
    })
  },
  /**
   * @description Lock body scroll or not when the modal is opened.
   * @default `true`
   */
  lockScroll: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Creates a padding-right when scroll is locked to prevent the page from jumping
   * @default `true`
   */
  reserveScrollBarGap: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Define how to increase the zIndex when there are nested modals
   * @default `({ index }) => 1000 + 2 * index`
   */
  zIndexFn: {
    type: Function,
    default: ({ index: o }) => 1e3 + 2 * o
  },
  /**
   * @description The direction of swiping to close the modal
   * @default `none`
   * @example
   * Set swipeToClose="none" to disable swiping to close
   * ```js
   * swipeToClose="none"
   * ```
   */
  swipeToClose: {
    type: String,
    default: "none",
    validator: (o) => ["none", "up", "right", "down", "left"].includes(o)
  },
  /**
   * @description Threshold for swipe to close
   * @default `0`
   */
  threshold: {
    type: Number,
    default: 0
  },
  /**
   * @description If set `:showSwipeBanner="true"`, only allow clicking `swipe-banner` slot to swipe to close
   * @default `undefined`
   * @example
   * ```js
   * swipeToClose="right"
   * :showSwipeBanner="true"
   * ```
   * ```html
   * <VueFinalModal
   *   ...
   *   swipeToClose="right"
   *   :showSwipeBanner="true"
   * >
   *   <template #swipe-banner>
   *     <div style="position: absolute; height: 100%; top: 0; left: 0; width: 10px;" />
   *   </template>
   *   ...modal content
   * </VueFinalModal>
   * ```
   */
  showSwipeBanner: {
    type: Boolean,
    default: void 0
  },
  /**
   * @description When set `:preventNavigationGestures="true"`, there will be two invisible bars for prevent navigation gestures including swiping back/forward on mobile webkit. For example: Safari mobile.
   * @default `undefined`
   * @example
   * Set preventNavigationGestures="true" to prevent Safari navigation gestures including swiping back/forward.
   * ```js
   * :preventNavigationGestures="true"
   * ```
   */
  preventNavigationGestures: {
    type: Boolean,
    default: void 0
  }
};
function Et(o = !1) {
  const e = F(o), t = F(e.value ? 0 : void 0);
  return [e, t, {
    beforeEnter() {
      t.value = 1;
    },
    afterEnter() {
      t.value = 0;
    },
    beforeLeave() {
      t.value = 3;
    },
    afterLeave() {
      t.value = 2;
    }
  }];
}
function en(o, e) {
  const { modelValueLocal: t, onEntering: n, onEnter: l, onLeaving: r, onLeave: a } = e, s = F(t.value), [i, u, m] = Et(s.value), [d, v, k] = Et(s.value), S = O(() => typeof o.contentTransition == "string" ? { name: o.contentTransition, appear: !0 } : { appear: !0, ...o.contentTransition }), G = O(() => typeof o.overlayTransition == "string" ? { name: o.overlayTransition, appear: !0 } : { appear: !0, ...o.overlayTransition }), $ = O(
    () => (o.hideOverlay || v.value === 2) && u.value === 2
    /* Leave */
  );
  ee(
    $,
    (A) => {
      A && (s.value = !1);
    }
  ), ee(u, (A) => {
    if (A === 1) {
      if (!s.value)
        return;
      n?.();
    } else if (A === 0) {
      if (!s.value)
        return;
      l?.();
    } else
      A === 3 ? r?.() : A === 2 && a?.();
  });
  async function y() {
    s.value = !0, await ce(), i.value = !0, d.value = !0;
  }
  function V() {
    i.value = !1, d.value = !1;
  }
  return {
    visible: s,
    contentVisible: i,
    contentListeners: m,
    contentTransition: S,
    overlayVisible: d,
    overlayListeners: k,
    overlayTransition: G,
    enterTransition: y,
    leaveTransition: V
  };
}
function tn(o, e, t) {
  const { vfmRootEl: n, vfmContentEl: l, visible: r, modelValueLocal: a } = t, s = F();
  function i() {
    r.value && o.escToClose && (a.value = !1);
  }
  function u(d) {
    s.value = d?.target;
  }
  function m() {
    var d;
    s.value === n.value && (o.clickToClose ? a.value = !1 : ((d = l.value) == null || d.focus(), e("clickOutside")));
  }
  return {
    onEsc: i,
    onMouseupRoot: m,
    onMousedown: u
  };
}
function on(o, e, t) {
  let n = !1;
  const { open: l, close: r } = t, a = F(!1), s = {
    get value() {
      return a.value;
    },
    set value(u) {
      i(u);
    }
  };
  function i(u) {
    (u ? l() : r()) ? (a.value = u, u !== o.modelValue && e("update:modelValue", u)) : (n = !0, e("update:modelValue", !u), ce(() => {
      n = !1;
    }));
  }
  return ee(() => o.modelValue, (u) => {
    n || (s.value = !!u);
  }), {
    modelValueLocal: s
  };
}
function nn(o, e) {
  if (o.focusTrap === !1)
    return {
      focus() {
      },
      blur() {
      }
    };
  const { focusEl: t } = e, { hasFocus: n, activate: l, deactivate: r } = Yo(t, o.focusTrap);
  function a() {
    requestAnimationFrame(() => {
      l();
    });
  }
  function s() {
    n.value && r();
  }
  return { focus: a, blur: s };
}
let mt = !1;
if (typeof window < "u") {
  const o = {
    get passive() {
      mt = !0;
    }
  };
  window.addEventListener("testPassive", null, o), window.removeEventListener("testPassive", null, o);
}
const jt = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
let de = [], Qe = !1, Ke = 0, Ht = -1, Fe, Ie;
const an = (o) => {
  if (!o || o.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const e = window.getComputedStyle(o);
  return ["auto", "scroll"].includes(e.overflowY) && o.scrollHeight > o.clientHeight;
}, ln = (o, e) => !(o.scrollTop === 0 && e < 0 || o.scrollTop + o.clientHeight + e >= o.scrollHeight && e > 0), rn = (o) => {
  const e = [];
  for (; o; ) {
    if (e.push(o), o.classList.contains("vfm"))
      return e;
    o = o.parentElement;
  }
  return e;
}, sn = (o, e) => {
  let t = !1;
  return rn(o).forEach((n) => {
    an(n) && ln(n, e) && (t = !0);
  }), t;
}, Ut = (o) => de.some(() => sn(o, -Ke)), bt = (o) => {
  const e = o || window.event;
  return Ut(e.target) || e.touches.length > 1 ? !0 : (e.preventDefault && e.preventDefault(), !1);
}, un = (o) => {
  if (Ie === void 0) {
    const e = !!o && o.reserveScrollBarGap === !0, t = window.innerWidth - document.documentElement.clientWidth;
    if (e && t > 0) {
      const n = parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
      Ie = document.body.style.paddingRight, document.body.style.paddingRight = `${n + t}px`;
    }
  }
  Fe === void 0 && (Fe = document.body.style.overflow, document.body.style.overflow = "hidden");
}, dn = () => {
  Ie !== void 0 && (document.body.style.paddingRight = Ie, Ie = void 0), Fe !== void 0 && (document.body.style.overflow = Fe, Fe = void 0);
}, cn = (o) => o ? o.scrollHeight - o.scrollTop <= o.clientHeight : !1, fn = (o, e) => (Ke = o.targetTouches[0].clientY - Ht, Ut(o.target) ? !1 : e && e.scrollTop === 0 && Ke > 0 || cn(e) && Ke < 0 ? bt(o) : (o.stopPropagation(), !0)), vn = (o, e) => {
  if (!o) {
    console.error(
      "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
    );
    return;
  }
  if (de.some((n) => n.targetElement === o))
    return;
  const t = {
    targetElement: o,
    options: e || {}
  };
  de = [...de, t], jt ? (o.ontouchstart = (n) => {
    n.targetTouches.length === 1 && (Ht = n.targetTouches[0].clientY);
  }, o.ontouchmove = (n) => {
    n.targetTouches.length === 1 && fn(n, o);
  }, Qe || (document.addEventListener("touchmove", bt, mt ? { passive: !1 } : void 0), Qe = !0)) : un(e);
}, pn = (o) => {
  if (!o) {
    console.error(
      "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
    );
    return;
  }
  de = de.filter((e) => e.targetElement !== o), jt ? (o.ontouchstart = null, o.ontouchmove = null, Qe && de.length === 0 && (document.removeEventListener("touchmove", bt, mt ? { passive: !1 } : void 0), Qe = !1)) : de.length || dn();
};
function mn(o, e) {
  const { lockScrollEl: t, modelValueLocal: n } = e;
  let l;
  ee(t, (s) => {
    s && (l = s);
  }, { immediate: !0 }), ee(() => o.lockScroll, (s) => {
    s ? a() : r();
  }), ze(() => {
    r();
  });
  function r() {
    l && pn(l);
  }
  function a() {
    n.value && o.lockScroll && l && vn(l, {
      reserveScrollBarGap: o.reserveScrollBarGap,
      allowTouchMove: (s) => {
        for (; s && s !== document.body; ) {
          if (s.getAttribute("vfm-scroll-lock-ignore") !== null)
            return !0;
          s = s.parentElement;
        }
        return !1;
      }
    });
  }
  return {
    enableBodyScroll: r,
    disableBodyScroll: a
  };
}
function bn(o) {
  const e = F();
  function t(l) {
    var r;
    e.value = (r = o.zIndexFn) == null ? void 0 : r.call(o, { index: l <= -1 ? 0 : l });
  }
  function n() {
    e.value = void 0;
  }
  return {
    zIndex: e,
    refreshZIndex: t,
    resetZIndex: n
  };
}
const st = {
  beforeMount(o, { value: e }, { transition: t }) {
    o._vov = o.style.visibility === "hidden" ? "" : o.style.visibility, t && e ? t.beforeEnter(o) : Ve(o, e);
  },
  mounted(o, { value: e }, { transition: t }) {
    t && e && t.enter(o);
  },
  updated(o, { value: e, oldValue: t }, { transition: n }) {
    !e != !t && (n ? e ? (n.beforeEnter(o), Ve(o, !0), n.enter(o)) : n.leave(o, () => {
      Ve(o, !1);
    }) : Ve(o, e));
  },
  beforeUnmount(o, { value: e }) {
    Ve(o, e);
  }
};
function Ve(o, e) {
  o.style.visibility = e ? o._vov : "hidden";
}
const Bt = (o) => {
  if (o instanceof MouseEvent) {
    const { clientX: e, clientY: t } = o;
    return { x: e, y: t };
  } else {
    const { clientX: e, clientY: t } = o.targetTouches[0];
    return { x: e, y: t };
  }
};
function hn(o) {
  if (!o)
    return !1;
  let e = !1;
  const t = {
    get passive() {
      return e = !0, !1;
    }
  };
  return o.addEventListener("x", Ae, t), o.removeEventListener("x", Ae), e;
}
function yn(o, {
  threshold: e = 0,
  onSwipeStart: t,
  onSwipe: n,
  onSwipeEnd: l,
  passive: r = !0
}) {
  const a = it({ x: 0, y: 0 }), s = it({ x: 0, y: 0 }), i = O(() => a.x - s.x), u = O(() => a.y - s.y), { max: m, abs: d } = Math, v = O(
    () => m(d(i.value), d(u.value)) >= e
  ), k = F(!1), S = O(() => v.value ? d(i.value) > d(u.value) ? i.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), G = (x, Y) => {
    a.x = x, a.y = Y;
  }, $ = (x, Y) => {
    s.x = x, s.y = Y;
  };
  let y, V;
  function A(x) {
    y.capture && !y.passive && x.preventDefault();
    const { x: Y, y: Q } = Bt(x);
    G(Y, Q), $(Y, Q), t?.(x), V = [
      ue(o, "mousemove", ae, y),
      ue(o, "touchmove", ae, y),
      ue(o, "mouseup", w, y),
      ue(o, "touchend", w, y),
      ue(o, "touchcancel", w, y)
    ];
  }
  function ae(x) {
    const { x: Y, y: Q } = Bt(x);
    $(Y, Q), !k.value && v.value && (k.value = !0), k.value && n?.(x);
  }
  function w(x) {
    k.value && l?.(x, S.value), k.value = !1, V.forEach((Y) => Y());
  }
  let H = [];
  return we(() => {
    const x = hn(window?.document);
    r ? y = x ? { passive: !0 } : { capture: !1 } : y = x ? { passive: !1, capture: !0 } : { capture: !0 }, H = [
      ue(o, "mousedown", A, y),
      ue(o, "touchstart", A, y)
    ];
  }), {
    isSwiping: k,
    direction: S,
    coordsStart: a,
    coordsEnd: s,
    lengthX: i,
    lengthY: u,
    stop: () => {
      H.forEach((x) => x()), V.forEach((x) => x());
    }
  };
}
function gn(o, e) {
  const { vfmContentEl: t, modelValueLocal: n } = e, l = 0.1, r = 300, a = F(), s = O(() => {
    if (!(o.swipeToClose === void 0 || o.swipeToClose === "none"))
      return o.showSwipeBanner ? a.value : t.value;
  }), i = F(0), u = F(!0);
  let m = Ae, d = !0, v, k = !1;
  const { lengthX: S, lengthY: G, direction: $, isSwiping: y } = yn(s, {
    threshold: o.threshold,
    onSwipeStart(w) {
      m = ue(document, "selectionchange", () => {
        var H;
        u.value = (H = window.getSelection()) == null ? void 0 : H.isCollapsed;
      }), v = (/* @__PURE__ */ new Date()).getTime(), k = ae(w?.target);
    },
    onSwipe() {
      var w, H, x, Y;
      if (k && u.value && $.value === o.swipeToClose) {
        if ($.value === "up") {
          const Q = He(Math.abs(G.value || 0), 0, ((w = s.value) == null ? void 0 : w.offsetHeight) || 0) - (o.threshold || 0);
          i.value = Q;
        } else if ($.value === "down") {
          const Q = He(Math.abs(G.value || 0), 0, ((H = s.value) == null ? void 0 : H.offsetHeight) || 0) - (o.threshold || 0);
          i.value = -Q;
        } else if ($.value === "right") {
          const Q = He(Math.abs(S.value || 0), 0, ((x = s.value) == null ? void 0 : x.offsetWidth) || 0) - (o.threshold || 0);
          i.value = -Q;
        } else if ($.value === "left") {
          const Q = He(Math.abs(S.value || 0), 0, ((Y = s.value) == null ? void 0 : Y.offsetWidth) || 0) - (o.threshold || 0);
          i.value = Q;
        }
      }
    },
    onSwipeEnd(w, H) {
      if (m(), !u.value) {
        u.value = !0;
        return;
      }
      const x = (/* @__PURE__ */ new Date()).getTime(), Y = H === o.swipeToClose, Q = (() => {
        var re, R;
        if (H === "up" || H === "down")
          return Math.abs(G?.value || 0) > l * (((re = s.value) == null ? void 0 : re.offsetHeight) || 0);
        if (H === "left" || H === "right")
          return Math.abs(S?.value || 0) > l * (((R = s.value) == null ? void 0 : R.offsetWidth) || 0);
      })(), fe = x - v <= r;
      if (d && k && Y && (Q || fe)) {
        n.value = !1;
        return;
      }
      i.value = 0;
    }
  }), V = O(() => {
    if (o.swipeToClose === "none")
      return;
    const w = (() => {
      switch (o.swipeToClose) {
        case "up":
        case "down":
          return "translateY";
        case "left":
        case "right":
          return "translateX";
      }
    })();
    return {
      class: { "vfm-bounce-back": !y.value },
      style: { transform: `${w}(${-i.value}px)` }
    };
  });
  ee(
    () => u.value,
    (w) => {
      w || (i.value = 0);
    }
  ), ee(
    () => n.value,
    (w) => {
      w && (i.value = 0);
    }
  ), ee(
    () => i.value,
    (w, H) => {
      switch (o.swipeToClose) {
        case "down":
        case "right":
          d = w < H;
          break;
        case "up":
        case "left":
          d = w > H;
          break;
      }
    }
  );
  function A(w) {
    o.preventNavigationGestures && w.preventDefault();
  }
  function ae(w) {
    const H = w?.tagName;
    if (!H || ["INPUT", "TEXTAREA"].includes(H))
      return !1;
    const x = (() => {
      switch (o.swipeToClose) {
        case "up":
          return w?.scrollTop + w?.clientHeight === w?.scrollHeight;
        case "left":
          return w?.scrollLeft + w?.clientWidth === w?.scrollWidth;
        case "down":
          return w?.scrollTop === 0;
        case "right":
          return w?.scrollLeft === 0;
        default:
          return !1;
      }
    })();
    return w === s.value ? x : x && ae(w?.parentElement);
  }
  return {
    vfmContentEl: t,
    swipeBannerEl: a,
    bindSwipe: V,
    onTouchStartSwipeBanner: A
  };
}
const Kt = /* @__PURE__ */ Symbol("vfm");
let be;
const wn = (o) => be = o, kn = {
  install: Ae,
  modals: [],
  openedModals: [],
  openedModalOverlays: [],
  dynamicModals: [],
  modalsContainers: F([]),
  get: () => {
  },
  toggle: () => {
  },
  open: () => {
  },
  close: () => {
  },
  closeAll: () => Promise.allSettled([])
}, $n = () => Mt() && Ft(Kt, kn) || be;
function Tn() {
  const o = Pe([]), e = Pe([]), t = Pe([]), n = Pe([]), l = F([]), r = Ue({
    install(a) {
      a.provide(Kt, r), a.config.globalProperties.$vfm = r;
    },
    modals: o,
    openedModals: e,
    openedModalOverlays: t,
    dynamicModals: n,
    modalsContainers: l,
    get(a) {
      return o.find((s) => {
        var i, u;
        return ((u = (i = Ne(s)) == null ? void 0 : i.value.modalId) == null ? void 0 : u.value) === a;
      });
    },
    toggle(a, s) {
      var i;
      const u = r.get(a);
      return (i = Ne(u)) == null ? void 0 : i.value.toggle(s);
    },
    open(a) {
      return r.toggle(a, !0);
    },
    close(a) {
      return r.toggle(a, !1);
    },
    closeAll() {
      return Promise.allSettled(
        e.reduce((a, s) => {
          const i = Ne(s), u = i?.value.toggle(!1);
          return u && a.push(u), a;
        }, [])
      );
    }
  });
  return wn(r), r;
}
function Ne(o) {
  var e;
  return (e = o?.exposed) == null ? void 0 : e.modalExposed;
}
const Cn = B({ inheritAttrs: !1 }), Wt = /* @__PURE__ */ B({
  ...Cn,
  __name: "VueFinalModal",
  props: Jo,
  emits: ["update:modelValue", "beforeOpen", "opened", "beforeClose", "closed", "clickOutside"],
  setup(o, { expose: e, emit: t }) {
    const n = o, l = t, r = Jt(), a = Mt(), { modals: s, openedModals: i, openedModalOverlays: u } = Oe(), m = F(), d = F(), { focus: v, blur: k } = nn(n, { focusEl: m }), { zIndex: S, refreshZIndex: G, resetZIndex: $ } = bn(n), { modelValueLocal: y } = on(n, l, { open: X, close: ie }), { enableBodyScroll: V, disableBodyScroll: A } = mn(n, {
      lockScrollEl: m,
      modelValueLocal: y
    });
    let ae = Ae;
    const {
      visible: w,
      contentVisible: H,
      contentListeners: x,
      contentTransition: Y,
      overlayVisible: Q,
      overlayListeners: fe,
      overlayTransition: re,
      enterTransition: R,
      leaveTransition: p
    } = en(n, {
      modelValueLocal: y,
      onEntering() {
        ce(() => {
          A(), v();
        });
      },
      onEnter() {
        l("opened"), ae("opened");
      },
      onLeave() {
        Me(i, a), $(), V(), l("closed"), ae("closed");
      }
    }), { onEsc: b, onMouseupRoot: T, onMousedown: _ } = tn(n, l, { vfmRootEl: m, vfmContentEl: d, visible: w, modelValueLocal: y }), {
      swipeBannerEl: L,
      bindSwipe: K,
      onTouchStartSwipeBanner: N
    } = gn(n, { vfmContentEl: d, modelValueLocal: y }), q = O(() => a ? i.indexOf(a) : -1);
    ee([() => n.zIndexFn, q], () => {
      w.value && G(q.value);
    }), we(() => {
      rt(s, a);
    }), n.modelValue && (y.value = !0);
    function X() {
      let M = !1;
      return l("beforeOpen", { stop: () => M = !0 }), M ? !1 : (rt(i, a), rt(u, a), le(), R(), !0);
    }
    function ie() {
      let M = !1;
      return l("beforeClose", { stop: () => M = !0 }), M ? !1 : (Me(u, a), le(), k(), p(), !0);
    }
    function ve() {
      y.value = !1;
    }
    ze(() => {
      V(), Me(s, a), Me(i, a), k(), le();
    });
    async function le() {
      await ce();
      const M = u.filter((W) => {
        var J;
        const se = Ne(W);
        return se?.value.overlayBehavior.value === "auto" && !((J = se?.value.hideOverlay) != null && J.value);
      });
      M.forEach((W, J) => {
        const se = Ne(W);
        se != null && se.value && (se.value.overlayVisible.value = J === M.length - 1);
      });
    }
    const pe = ot(() => n.modalId), Ce = ot(() => n.hideOverlay), Se = ot(() => n.overlayBehavior), Ee = O(() => ({
      modalId: pe,
      hideOverlay: Ce,
      overlayBehavior: Se,
      overlayVisible: Q,
      toggle(M) {
        return new Promise((W) => {
          ae = Xo((se) => W(se));
          const J = typeof M == "boolean" ? M : !y.value;
          y.value = J;
        });
      }
    }));
    return e({
      modalExposed: Ee
    }), (M, W) => (c(), Z(eo, {
      to: M.teleportTo ? M.teleportTo : void 0,
      disabled: !M.teleportTo
    }, [
      M.displayDirective !== "if" || h(w) ? he((c(), f("div", $e({ key: 0 }, h(r), {
        ref_key: "vfmRootEl",
        ref: m,
        class: ["vfm vfm--fixed vfm--inset", { "vfm--prevent-none": M.background === "interactive" }],
        style: { zIndex: h(S) },
        role: "dialog",
        "aria-modal": "true",
        onKeydown: W[7] || (W[7] = to(() => h(b)(), ["esc"])),
        onMouseup: W[8] || (W[8] = _e(() => h(T)(), ["self"])),
        onMousedown: W[9] || (W[9] = _e((J) => h(_)(J), ["self"]))
      }), [
        Ce.value ? D("", !0) : (c(), Z(ye, $e({ key: 0 }, h(re), gt(h(fe))), {
          default: U(() => [
            M.displayDirective !== "if" || h(Q) ? he((c(), f("div", {
              key: 0,
              class: C(["vfm__overlay vfm--overlay vfm--absolute vfm--inset vfm--prevent-none", M.overlayClass]),
              style: ft(M.overlayStyle),
              "aria-hidden": "true"
            }, null, 6)), [
              [Te, M.displayDirective !== "show" || h(Q)],
              [h(st), M.displayDirective !== "visible" || h(Q)]
            ]) : D("", !0)
          ]),
          _: 1
        }, 16)),
        I(ye, $e(h(Y), gt(h(x))), {
          default: U(() => [
            M.displayDirective !== "if" || h(H) ? he((c(), f("div", $e({
              key: 0,
              ref_key: "vfmContentEl",
              ref: d,
              class: ["vfm__content vfm--outline-none", [M.contentClass, { "vfm--prevent-auto": M.background === "interactive" }]],
              style: M.contentStyle,
              tabindex: "0"
            }, h(K), {
              onMousedown: W[6] || (W[6] = () => h(_)())
            }), [
              z(M.$slots, "default", Dt(oo({ close: ve }))),
              M.showSwipeBanner ? (c(), f("div", {
                key: 0,
                ref_key: "swipeBannerEl",
                ref: L,
                class: "vfm-swipe-banner-container",
                onTouchstart: W[2] || (W[2] = (J) => h(N)(J))
              }, [
                z(M.$slots, "swipe-banner", {}, () => [
                  g("div", {
                    class: "vfm-swipe-banner-back",
                    onTouchstart: W[0] || (W[0] = (J) => M.swipeToClose === "left" && J.preventDefault())
                  }, null, 32),
                  g("div", {
                    class: "vfm-swipe-banner-forward",
                    onTouchstart: W[1] || (W[1] = (J) => M.swipeToClose === "right" && J.preventDefault())
                  }, null, 32)
                ])
              ], 544)) : !M.showSwipeBanner && M.preventNavigationGestures ? (c(), f("div", {
                key: 1,
                class: "vfm-swipe-banner-container",
                onTouchstart: W[5] || (W[5] = (J) => h(N)(J))
              }, [
                g("div", {
                  class: "vfm-swipe-banner-back",
                  onTouchstart: W[3] || (W[3] = (J) => M.swipeToClose === "left" && J.preventDefault())
                }, null, 32),
                g("div", {
                  class: "vfm-swipe-banner-forward",
                  onTouchstart: W[4] || (W[4] = (J) => M.swipeToClose === "right" && J.preventDefault())
                }, null, 32)
              ], 32)) : D("", !0)
            ], 16)), [
              [Te, M.displayDirective !== "show" || h(H)],
              [h(st), M.displayDirective !== "visible" || h(H)]
            ]) : D("", !0)
          ]),
          _: 3
        }, 16)
      ], 16)), [
        [Te, M.displayDirective !== "show" || h(w)],
        [h(st), M.displayDirective !== "visible" || h(w)]
      ]) : D("", !0)
    ], 8, ["to", "disabled"]));
  }
});
function Oe() {
  const o = $n();
  if (!o)
    throw new Error(
      `[Vue Final Modal]: getActiveVfm was called with no active Vfm. Did you forget to install vfm?
	const vfm = createVfm()
	app.use(vfm)
This will fail in production.`
    );
  return o;
}
function Vt(o, e = Wt) {
  const { component: t, slots: n, ...l } = o, r = typeof n > "u" ? {} : Object.fromEntries(Pt(n).map(([a, s]) => pt(s) ? [a, s] : Ye(s) ? [a, {
    ...s,
    component: Ue(s.component)
  }] : [a, Ue(s)]));
  return {
    ...l,
    component: Ue(t || e),
    slots: r
  };
}
function Sn(o) {
  const e = it({
    id: /* @__PURE__ */ Symbol("useModal"),
    modelValue: !!(o != null && o.defaultModelValue),
    resolveOpened: () => {
    },
    resolveClosed: () => {
    },
    attrs: {},
    ...Vt(o)
  });
  so(() => {
    e != null && e.keepAlive || s();
  }), e.modelValue === !0 && (be ? be?.dynamicModals.push(e) : ce(() => {
    const i = Oe();
    i?.dynamicModals.push(e);
  }));
  async function t() {
    let i;
    return be ? i = be : (await ce(), i = Oe()), e.modelValue ? Promise.resolve("[Vue Final Modal] modal is already opened.") : (s(), e.modelValue = !0, i.dynamicModals.push(e), new Promise((u) => {
      e.resolveOpened = () => u("opened");
    }));
  }
  function n() {
    return e.modelValue ? (e.modelValue = !1, new Promise((i) => {
      e.resolveClosed = () => i("closed");
    })) : Promise.resolve("[Vue Final Modal] modal is already closed.");
  }
  function l(i) {
    const { slots: u, ...m } = Vt(i, e.component);
    i.defaultModelValue !== void 0 && (e.defaultModelValue = i.defaultModelValue), i?.keepAlive !== void 0 && (e.keepAlive = i?.keepAlive), r(e, m), u && Pt(u).forEach(([d, v]) => {
      const k = e.slots[d];
      pt(k) ? e.slots[d] = v : Ye(k) && Ye(v) ? r(k, v) : e.slots[d] = v;
    });
  }
  function r(i, u) {
    u.component && (i.component = u.component), u.attrs && a(i.attrs, u.attrs);
  }
  function a(i, u) {
    return Object.entries(u).forEach(([m, d]) => {
      i[m] = d;
    }), i;
  }
  function s() {
    const i = Oe(), u = i.dynamicModals.indexOf(e);
    u !== -1 && i.dynamicModals.splice(u, 1);
  }
  return {
    options: e,
    open: t,
    close: n,
    patchOptions: l,
    destroy: s
  };
}
function Ye(o) {
  return typeof o == "object" && o !== null ? "component" in o : !1;
}
const En = ["innerHTML"], Bn = /* @__PURE__ */ B({
  __name: "ModalsContainer",
  setup(o) {
    const { modalsContainers: e, dynamicModals: t } = Oe(), n = /* @__PURE__ */ Symbol("ModalsContainer"), l = O(() => {
      var s;
      return n === ((s = e.value) == null ? void 0 : s[0]);
    });
    e.value.push(n), ze(() => {
      e.value = e.value.filter((s) => s !== n);
    });
    function r(s) {
      var i, u, m;
      (u = (i = t[s]) == null ? void 0 : i.resolveClosed) == null || u.call(i), (m = t[s]) != null && m.keepAlive || t.splice(s, 1);
    }
    function a(s) {
      var i, u;
      (u = (i = t[s]) == null ? void 0 : i.resolveOpened) == null || u.call(i);
    }
    return (s, i) => l.value ? (c(!0), f(oe, { key: 0 }, ne(h(t), (u, m) => (c(), Z(nt(u.component), $e({
      key: u.id
    }, {
      displayDirective: u != null && u.keepAlive ? "show" : void 0,
      ...typeof u.attrs == "object" ? u.attrs : {}
    }, {
      modelValue: u.modelValue,
      "onUpdate:modelValue": (d) => u.modelValue = d,
      onClosed: () => r(m),
      onOpened: () => a(m)
    }), xe({ _: 2 }, [
      ne(u.slots, (d, v) => ({
        name: v,
        fn: U(() => [
          h(pt)(d) ? (c(), f("div", {
            key: 0,
            innerHTML: d
          }, null, 8, En)) : h(Ye)(d) ? (c(), Z(nt(d.component), Dt($e({ key: 1 }, d.attrs)), null, 16)) : (c(), Z(nt(d), { key: 2 }))
        ])
      }))
    ]), 1040, ["modelValue", "onUpdate:modelValue", "onClosed", "onOpened"]))), 128)) : D("", !0);
  }
}), Gt = /* @__PURE__ */ B({
  __name: "Card",
  props: {
    styles: { default: "" },
    padding: { default: "p-4" },
    flat: { type: Boolean, default: !1 },
    boxed: { type: Boolean, default: !1 },
    border: { default: "border-border dark:border-none" }
  },
  setup(o) {
    return (e, t) => (c(), f("div", {
      class: C([
        e.styles,
        e.padding,
        e.border,
        { "shadow-sm": !e.flat && !e.styles.includes("shadow") },
        { "rounded-md": !e.boxed && !e.styles.includes("rounded") },
        "border bg-card"
      ])
    }, [
      z(e.$slots, "default")
    ], 2));
  }
}), Vn = { class: "text-xl font-medium" }, Mn = { class: "pt-4" }, Dn = { key: 1 }, Fn = { class: "p-2" }, Ol = /* @__PURE__ */ B({
  __name: "Accordion",
  props: /* @__PURE__ */ j({
    title: {},
    variant: { default: "card" }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(o) {
    const e = P(o, "modelValue");
    return (t, n) => t.variant === "card" ? (c(), Z(Gt, { key: 0 }, {
      default: U(() => [
        g("div", {
          onClick: n[0] || (n[0] = (l) => e.value = !e.value),
          class: "flex items-center justify-between gap-2 cursor-pointer"
        }, [
          g("h3", Vn, E(t.title), 1),
          I(ye, { name: "rotate" }, {
            default: U(() => [
              g("div", {
                class: C({ rotated: e.value, "not-rotated": !e.value })
              }, [
                I(h(te), {
                  icon: h(wt),
                  size: "lg"
                }, null, 8, ["icon"])
              ], 2)
            ]),
            _: 1
          })
        ]),
        he(g("div", Mn, [
          z(t.$slots, "default")
        ], 512), [
          [Te, e.value]
        ])
      ]),
      _: 3
    })) : t.variant === "minimal" ? (c(), f("div", Dn, [
      g("div", {
        onClick: n[1] || (n[1] = (l) => e.value = !e.value),
        class: "p-2 border-b-2 border-base-text flex items-center justify-between gap-2 cursor-pointer"
      }, [
        g("h3", null, E(t.title), 1),
        I(ye, { name: "rotate" }, {
          default: U(() => [
            g("div", {
              class: C({ rotated: e.value, "not-rotated": !e.value })
            }, [
              I(h(te), { icon: h(wt) }, null, 8, ["icon"])
            ], 2)
          ]),
          _: 1
        })
      ]),
      he(g("div", Fn, [
        z(t.$slots, "default")
      ], 512), [
        [Te, e.value]
      ])
    ])) : D("", !0);
  }
}), qt = (o = 800) => {
  const e = F(innerWidth < o), t = () => {
    e.value = innerWidth < o;
  };
  return we(() => addEventListener("resize", t)), It(() => removeEventListener("resize", t)), e;
}, Zt = () => ({ readableFileSize: (t) => {
  const n = ["Bytes", "KB", "MB", "GB", "TB"], l = Math.floor(Math.log(t) / Math.log(1024));
  return `${Math.round(t / Math.pow(1024, l))} ${n[l]}`;
}, formatFiles: (t) => t?.map((n) => "uuid" in n && n.uuid ? n : {
  name: n.name,
  size: n.size,
  uuid: Ot(),
  preview: URL.createObjectURL(n),
  type: n.type?.split("/")[0] || ""
}) || [] }), In = (o, e, t) => {
  if (e < 0 || e >= o.length || t < 0 || t >= o.length)
    throw new Error("Invalid indices");
  const [n] = o.splice(e, 1);
  return o.splice(t, 0, n), o;
}, Nn = (o) => Math.floor(o) !== o && o.toString().split(".")[1]?.length || 0, On = (o, e) => o ? o.split(",").map((n) => n.trim().toLowerCase()).some((n) => {
  if (n.startsWith("."))
    return e.name.toLowerCase().endsWith(n);
  if (n.endsWith("/*")) {
    const l = n.split("/")[0];
    return e.type.startsWith(l + "/");
  }
  return e.type === n;
}) : !0, _n = { class: "flex justify-center gap-2 w-full p-4" }, xn = ["onMouseenter"], An = ["onClick"], Ln = ["src", "alt"], zn = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-secondary-text bg-card rounded-md"
}, Rn = ["onClick"], Pn = /* @__PURE__ */ B({
  __name: "AttachmentList",
  props: /* @__PURE__ */ j({
    size: {}
  }, {
    files: { required: !0 },
    filesModifiers: {},
    selectedIdx: { default: 0 },
    selectedIdxModifiers: {}
  }),
  emits: ["update:files", "update:selectedIdx"],
  setup(o) {
    const e = o, t = P(o, "files"), n = P(o, "selectedIdx"), l = qt(), { formatFiles: r } = Zt(), a = F(-1), s = F(r(t.value)), i = (d) => {
      t.value = t.value.filter((v, k) => k !== d), n.value > d && (n.value -= 1);
    }, u = ({ moved: { oldIndex: d, newIndex: v } }) => {
      t.value = In(t.value, d, v), n.value === d ? n.value = v : n.value > d && n.value <= v ? n.value-- : n.value < d && n.value >= v && n.value++;
    }, m = O(() => e.size === "lg" ? "w-16 h-16" : "w-14 h-14");
    return ee(t, () => s.value = r(t.value)), (d, v) => (c(), f("div", _n, [
      z(d.$slots, "additional-items-before"),
      I(h(yo), {
        modelValue: s.value,
        "onUpdate:modelValue": v[1] || (v[1] = (k) => s.value = k),
        "item-key": "uuid",
        "swap-threshold": 0.65,
        animation: 200,
        class: "flex gap-2",
        onChange: u
      }, {
        item: U(({ element: k, index: S }) => [
          g("div", {
            class: C(`relative border-secondary rounded-md ${m.value} ${n.value === S ? "border-3 bg-secondary" : ""}`),
            onMouseenter: (G) => a.value = S,
            onMouseleave: v[0] || (v[0] = (G) => a.value = -1)
          }, [
            g("button", {
              class: "w-full h-full",
              onClick: (G) => n.value = S
            }, [
              k.type === "image" ? (c(), f("img", {
                key: 0,
                src: k.preview,
                alt: k.name,
                class: "w-full h-full object-cover rounded-md"
              }, null, 8, Ln)) : (c(), f("span", zn, [
                k.type === "audio" ? (c(), Z(h(te), {
                  key: 0,
                  icon: h(uo),
                  size: "lg"
                }, null, 8, ["icon"])) : k.type === "video" ? (c(), Z(h(te), {
                  key: 1,
                  icon: h(co),
                  size: "lg"
                }, null, 8, ["icon"])) : (c(), Z(h(te), {
                  key: 2,
                  icon: h(vt),
                  size: "lg"
                }, null, 8, ["icon"]))
              ]))
            ], 8, An),
            a.value === S || h(l) ? (c(), f("button", {
              key: 0,
              onClick: (G) => i(S),
              class: "absolute cursor-pointer top-0 right-0 text-secondary-text bg-card/80 rounded-full w-5 h-5 flex justify-center items-center"
            }, [
              I(h(te), {
                icon: h(et),
                size: "xs"
              }, null, 8, ["icon"])
            ], 8, Rn)) : D("", !0)
          ], 42, xn)
        ]),
        _: 1
      }, 8, ["modelValue"]),
      z(d.$slots, "additional-items-after")
    ]));
  }
}), jn = ["src"], _l = /* @__PURE__ */ B({
  __name: "Avatar",
  props: {
    src: {},
    styles: { default: "" }
  },
  setup(o) {
    return (e, t) => (c(), f("img", {
      src: e.src,
      alt: "avatar",
      class: C(`rounded-full ${e.styles}`)
    }, null, 10, jn));
  }
}), Hn = { class: "flex items-center" }, Un = ["src", "alt"], xl = /* @__PURE__ */ B({
  __name: "AvatarGroup",
  props: {
    avatars: {},
    width: { default: "w-6" },
    overlap: { default: 12 }
  },
  setup(o) {
    return (e, t) => (c(), f("div", Hn, [
      (c(!0), f(oe, null, ne(e.avatars, (n, l) => (c(), f("img", {
        key: l,
        src: n,
        alt: `avatar ${l + 1}`,
        class: C(`${e.width} rounded-full relative`),
        style: ft({ marginLeft: l === 0 ? "0" : `-${e.overlap}px` })
      }, null, 14, Un))), 128))
    ]));
  }
}), Al = /* @__PURE__ */ B({
  __name: "Badge",
  props: {
    content: {},
    color: { default: "primary" },
    size: { default: "xs" },
    styles: {}
  },
  setup(o) {
    return (e, t) => (c(), f("div", {
      class: C(`text-${e.size} text-black font-bold bg-${e.color} rounded-xl px-1 ${e.styles} min-w-3 min-h-3`)
    }, [
      z(e.$slots, "default", {}, () => [
        Je(E(e.content), 1)
      ])
    ], 2));
  }
}), Kn = ["disabled", "type"], Wn = /* @__PURE__ */ B({
  __name: "Button",
  props: {
    color: { default: "primary" },
    variant: { default: "filled" },
    styles: { default: "" },
    disabled: { type: Boolean, default: !1 },
    type: { default: "button" },
    href: { default: "" },
    hoverEffects: { type: Boolean, default: !0 },
    textColor: { default: "" }
  },
  emits: ["click"],
  setup(o, { emit: e }) {
    const t = o, n = e, l = F(!1), r = (i) => {
      t.href && window.open(t.href), n("click", i);
    }, a = O(() => t.color === "base" ? "secondary-text" : t.color), s = O(() => {
      const i = [
        "btn",
        t.styles,
        { pressed: l },
        { "disabled-btn": t.disabled },
        { "cursor-default": !t.hoverEffects }
      ];
      switch (t.variant) {
        case "light":
          i.push(`bg-${a.value}/20 text-${a.value}`), t.hoverEffects && i.push(`hover:bg-${a.value}/35`);
          break;
        case "outline":
          i.push(`text-${t.textColor ?? a.value} border-${a.value} border-2`), t.hoverEffects && i.push(`hover:bg-${a.value}/10`);
          break;
        case "subtle":
          i.push(`text-${t.textColor ?? a.value} bg-transparent`), t.hoverEffects && i.push(`hover:bg-${a.value}/10`);
          break;
        case "dashed":
          i.push(`text-${t.textColor ?? a.value} border-${a.value} border-2 border-dashed`), t.hoverEffects && i.push(`hover:bg-${a.value}/10`);
          break;
        default:
          i.push(`text-${t.textColor ?? "black"} bg-${a.value}`);
          break;
      }
      return i;
    });
    return (i, u) => (c(), f("button", {
      onClick: r,
      onMousedown: u[0] || (u[0] = (m) => l.value = !0),
      onMouseup: u[1] || (u[1] = (m) => l.value = !1),
      class: C(s.value),
      disabled: i.disabled,
      type: i.type
    }, [
      z(i.$slots, "default")
    ], 42, Kn));
  }
}), Gn = { class: "flex items-center gap-2" }, qn = ["for"], Zn = {
  key: 0,
  class: "text-error text-sm"
}, Ll = /* @__PURE__ */ B({
  __name: "Checkbox",
  props: /* @__PURE__ */ j({
    name: {},
    error: {}
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ j(["toggle"], ["update:modelValue"]),
  setup(o, { emit: e }) {
    const t = P(o, "modelValue"), n = e, l = () => {
      t.value = !t.value, n("toggle", t.value);
    };
    return (r, a) => (c(), f("div", null, [
      g("div", Gn, [
        g("button", {
          onClick: a[0] || (a[0] = (s) => l()),
          type: "button",
          class: C(["rounded-sm cursor-pointer border-secondary border-2 w-4 h-4 flex items-center justify-center text-black", { "bg-secondary": t.value, "hover:bg-secondary/30": !t.value }])
        }, [
          t.value ? (c(), Z(h(te), {
            key: 0,
            icon: h(Nt),
            size: "xs"
          }, null, 8, ["icon"])) : D("", !0)
        ], 2),
        g("label", { for: r.name }, [
          z(r.$slots, "default")
        ], 8, qn)
      ]),
      r.error ? (c(), f("p", Zn, E(r.error), 1)) : D("", !0)
    ]));
  }
}), zl = /* @__PURE__ */ B({
  __name: "ClickableTag",
  props: /* @__PURE__ */ j({
    color: { default: "secondary" },
    size: { default: "md" },
    rounded: { default: "full" },
    styles: { default: "" }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ j(["select"], ["update:modelValue"]),
  setup(o, { emit: e }) {
    const t = o, n = e, l = P(o, "modelValue"), r = O(() => `${t.styles} py-1 px-3 duration-100 text-center border-2 rounded-${t.rounded} text-${t.size} text-${t.color} border-${t.color} hover:bg-${t.color}/10`), a = O(() => `${t.styles} py-1 px-3 duration-100 text-center border-2 rounded-${t.rounded} text-${t.size} bg-${t.color} border-${t.color} text-black`);
    return (s, i) => (c(), f("button", {
      onClick: i[0] || (i[0] = (u) => n("select")),
      class: C(l.value ? a.value : r.value)
    }, [
      z(s.$slots, "default")
    ], 2));
  }
}), Le = /* @__PURE__ */ B({
  __name: "IconButton",
  props: {
    icon: {},
    size: { default: void 0 },
    color: { default: "primary" },
    variant: { default: "filled" },
    styles: { default: "" },
    disabled: { type: Boolean, default: !1 },
    type: { default: "button" },
    href: { default: "" },
    hoverEffects: { type: Boolean, default: !0 },
    textColor: { default: "" }
  },
  emits: ["click"],
  setup(o, { emit: e }) {
    const t = o, n = e, l = O(() => {
      switch (t.size) {
        case "sm":
          return "w-6 h-6";
        case "lg":
          return "w-10 h-10";
        case "xl":
          return "w-12 h-12";
        default:
          return "w-8 h-8";
      }
    });
    return (r, a) => (c(), Z(Wn, {
      styles: `${r.styles} ${l.value} flex justify-center items-center !px-0 !py-0`,
      href: r.href,
      type: r.type,
      color: r.color,
      disabled: r.disabled,
      variant: r.variant,
      "hover-effects": r.hoverEffects,
      "text-color": r.textColor,
      onClick: a[0] || (a[0] = (s) => n("click", s))
    }, {
      default: U(() => [
        I(h(te), {
          size: r.size,
          icon: r.icon
        }, null, 8, ["size", "icon"])
      ]),
      _: 1
    }, 8, ["styles", "href", "type", "color", "disabled", "variant", "hover-effects", "text-color"]));
  }
}), Qn = /* @__PURE__ */ B({
  __name: "HoverBox",
  props: {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const e = P(o, "modelValue");
    return (t, n) => (c(), f("div", {
      onMouseenter: n[0] || (n[0] = (l) => e.value = !0),
      onMouseleave: n[1] || (n[1] = (l) => e.value = !1)
    }, [
      z(t.$slots, "default")
    ], 32));
  }
}), Yn = {
  key: 0,
  class: "p-2 absolute top-0 right-0 text-sm"
}, Rl = /* @__PURE__ */ B({
  __name: "CodeSnippet",
  props: {
    snippet: {},
    allowCopy: { type: Boolean },
    styles: {}
  },
  setup(o) {
    const e = o, t = F(!1), { copy: n } = io(), l = async () => {
      e.snippet && await n(e.snippet);
    };
    return (r, a) => (c(), Z(Qn, {
      modelValue: t.value,
      "onUpdate:modelValue": a[1] || (a[1] = (s) => t.value = s)
    }, {
      default: U(() => [
        g("div", {
          class: C([r.styles, "p-2 rounded-lg bg-base whitespace-pre-wrap text-sm font-mono relative overflow-auto"])
        }, [
          g("p", null, E(r.snippet), 1),
          r.allowCopy && t.value ? (c(), f("div", Yn, [
            I(Le, {
              icon: h(fo),
              color: "card",
              onClick: a[0] || (a[0] = (s) => l())
            }, null, 8, ["icon"])
          ])) : D("", !0)
        ], 2)
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), Xn = ["for"], Jn = {
  key: 0,
  class: "flex justify-center items-center w-10 rounded-l-md"
}, ea = { key: 0 }, ta = { key: 1 }, oa = {
  key: 2,
  class: "text-secondary-text"
}, na = ["name", "type", "placeholder", "value", "disabled"], aa = {
  key: 0,
  class: "text-error text-sm"
}, la = {
  key: 1,
  class: "text-success text-sm"
}, tt = /* @__PURE__ */ B({
  __name: "Textbox",
  props: /* @__PURE__ */ j({
    name: {},
    value: {},
    type: { default: "text" },
    disabled: { type: Boolean },
    error: { type: [String, Boolean] },
    success: { type: [String, Boolean] },
    variant: { default: "filled" },
    size: {},
    color: { default: "base" },
    styles: {},
    label: {},
    icon: {},
    placeholder: {},
    labelStyles: { default: "font-medium" }
  }, {
    modelValue: {},
    modelModifiers: {},
    input: {},
    inputModifiers: {}
  }),
  emits: /* @__PURE__ */ j(["input", "focus", "blur"], ["update:modelValue", "update:input"]),
  setup(o, { emit: e }) {
    const t = o, n = e, l = P(o, "modelValue"), r = P(o, "input"), a = F(!1), s = O(
      () => t.variant === "filled" ? `bg-${t.color}` : "bg-transparent border border-border"
    ), i = (d) => {
      a.value = !0, n("input", d);
    }, u = (d) => {
      a.value = !1, n("blur", d);
    }, m = (d) => {
      const v = d.target;
      l.value = v.value, n("input", d);
    };
    return (d, v) => (c(), f("div", null, [
      g("label", {
        for: d.name,
        class: C(d.labelStyles)
      }, E(d.label), 11, Xn),
      g("div", {
        class: C([
          "rounded-lg flex items-center duration-300",
          s.value,
          d.styles,
          {
            error: d.error,
            success: d.success,
            selected: a.value,
            "min-h-10": d.size !== "sm",
            "min-h-8": d.size === "sm"
          }
        ])
      }, [
        d.icon ? (c(), f("div", Jn, [
          I(h(te), {
            icon: d.icon,
            size: d.size,
            class: "text-secondary-text"
          }, null, 8, ["icon", "size"])
        ])) : D("", !0),
        g("div", {
          class: C(["flex-grow w-full flex items-center gap-1 flex-wrap p-2", { "pl-0": d.icon }])
        }, [
          z(d.$slots, "left-section"),
          d.disabled ? (c(), f("div", {
            key: 0,
            class: C([{ "pl-0": d.icon, "text-sm": d.size === "sm" }, "flex-grow overflow-hidden whitespace-nowrap"])
          }, [
            l.value ? (c(), f("span", ea, E(l.value), 1)) : d.value ? (c(), f("span", ta, E(d.value), 1)) : d.placeholder ? (c(), f("span", oa, E(d.placeholder), 1)) : D("", !0)
          ], 2)) : (c(), f("input", {
            key: 1,
            ref_key: "inputElement",
            ref: r,
            name: d.name,
            type: d.type,
            placeholder: d.placeholder,
            value: l.value ?? d.value,
            disabled: d.disabled,
            onInput: m,
            onFocus: i,
            onBlur: u,
            class: C([{ "placeholder:text-sm": d.size === "sm" }, "p-0 flex-grow border-none outline-none rounded-lg bg-transparent placeholder:text-secondary-text"])
          }, null, 42, na))
        ], 2),
        z(d.$slots, "right-section")
      ], 2),
      d.error && typeof d.error != "boolean" ? (c(), f("p", aa, E(d.error), 1)) : d.success && typeof d.error != "boolean" ? (c(), f("p", la, E(d.success), 1)) : D("", !0)
    ]));
  }
}), Pl = /* @__PURE__ */ B({
  __name: "CurrencyInput",
  props: /* @__PURE__ */ j({
    currencySymbol: { default: "$" },
    variant: { default: "filled" },
    size: {},
    color: { default: "base" },
    label: {},
    error: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(o) {
    const e = o, t = P(o, "modelValue"), n = (r) => {
      const a = r.target;
      let s = parseFloat(a.value.replace(/[^\d.-]/g, ""));
      Nn(s) > 0 && (s = (Math.round(s * 100) / 100).toFixed(2)), t.value = s;
    }, l = O(() => {
      if (t.value)
        return `${e.currencySymbol}${t.value}`;
    });
    return (r, a) => (c(), Z(tt, {
      label: r.label,
      value: l.value,
      "on-input": n,
      placeholder: r.currencySymbol,
      size: r.size,
      color: r.color,
      variant: r.variant
    }, null, 8, ["label", "value", "placeholder", "size", "color", "variant"]));
  }
}), Xe = (o) => {
  const e = navigator.language || "en-US", t = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return new Intl.DateTimeFormat(e, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: t
  }).format(o);
}, ra = (o) => {
  const e = navigator.language || "en-US", t = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return new Intl.DateTimeFormat(e, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
    timeZone: t
  }).format(o);
}, sa = (o) => `${Xe(o)} ${ra(o)}`, ia = (o) => `${Xe(o[0])} - ${Xe(o[1])}`, ua = { class: "font-medium" }, da = {
  key: 0,
  class: "text-error text-sm"
}, jl = /* @__PURE__ */ B({
  __name: "DatePicker",
  props: /* @__PURE__ */ j({
    error: {},
    label: { default: "" },
    placeholder: { default: "" },
    variant: { default: "filled" },
    size: {},
    color: { default: "base" },
    range: { type: Boolean },
    maxDate: {},
    minDate: {},
    includeTime: { type: Boolean },
    disabled: { type: Boolean },
    styles: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(o) {
    const e = o, t = P(o, "modelValue"), n = F(null), l = O(() => e.range ? (r) => ia([r[0], r[1]]) : e.includeTime ? (r) => sa(r) : (r) => Xe(r));
    return (r, a) => (c(), f("div", {
      class: C(r.styles)
    }, [
      g("label", ua, E(r.label), 1),
      I(h(go), {
        modelValue: t.value,
        "onUpdate:modelValue": a[0] || (a[0] = (s) => t.value = s),
        ref_key: "dp",
        ref: n,
        format: l.value,
        disabled: r.disabled,
        "auto-apply": "",
        "enable-time-picker": r.includeTime,
        range: r.range,
        "min-date": r.minDate,
        "max-date": r.maxDate
      }, {
        "dp-input": U(({ value: s }) => [
          I(tt, {
            placeholder: r.placeholder,
            value: s,
            icon: h(vo),
            variant: r.variant,
            size: r.size,
            color: r.color,
            error: !!r.error,
            styles: r.disabled ? "" : "cursor-pointer",
            disabled: ""
          }, null, 8, ["placeholder", "value", "icon", "variant", "size", "color", "error", "styles"])
        ]),
        _: 1
      }, 8, ["modelValue", "format", "disabled", "enable-time-picker", "range", "min-date", "max-date"]),
      r.error ? (c(), f("p", da, E(r.error), 1)) : D("", !0)
    ], 2));
  }
}), ca = /* @__PURE__ */ B({
  __name: "Dropzone",
  props: {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ j(["drop"], ["update:modelValue"]),
  setup(o, { emit: e }) {
    const t = e, n = P(o, "modelValue"), l = (r) => {
      n.value = !1, t("drop", r);
    };
    return (r, a) => (c(), f("div", {
      onDragover: a[0] || (a[0] = _e((s) => n.value = !0, ["prevent"])),
      onDragleave: a[1] || (a[1] = (s) => n.value = !1),
      onDrop: _e(l, ["prevent"])
    }, [
      z(r.$slots, "default", { isDragOver: n.value })
    ], 32));
  }
}), fa = ["multiple", "accept"], Qt = /* @__PURE__ */ B({
  __name: "FileButton",
  props: {
    multiple: { type: Boolean, default: !0 },
    disabled: { type: Boolean },
    accept: {}
  },
  emits: ["change"],
  setup(o, { emit: e }) {
    const t = o, n = e, l = F(null), r = () => {
      !t.disabled && l.value && l.value.click();
    };
    return (a, s) => (c(), f("div", null, [
      g("input", {
        type: "file",
        ref_key: "fileInput",
        ref: l,
        onChange: s[0] || (s[0] = (i) => n("change", i)),
        multiple: a.multiple,
        accept: a.accept,
        hidden: ""
      }, null, 40, fa),
      g("div", { onClick: r }, [
        z(a.$slots, "default")
      ])
    ]));
  }
}), va = { class: "flex flex-col gap-2 text-sm" }, pa = { class: "flex gap-2 items-center" }, ma = { key: 0 }, ba = {
  key: 1,
  class: "text-xl"
}, ha = {
  key: 2,
  class: "text-sm"
}, ya = /* @__PURE__ */ B({
  __name: "FileList",
  props: {
    files: {},
    showDownload: { type: Boolean },
    showDelete: { type: Boolean }
  },
  emits: ["download", "delete"],
  setup(o, { emit: e }) {
    const t = e;
    return (n, l) => (c(), f("div", va, [
      (c(!0), f(oe, null, ne(n.files, (r) => (c(), f("div", pa, [
        n.showDownload ? (c(), f("div", ma, [
          I(Le, {
            icon: h(po),
            onClick: (a) => t("download", r),
            variant: "light",
            color: "secondary"
          }, null, 8, ["icon", "onClick"])
        ])) : (c(), f("div", ba, [
          I(h(te), { icon: h(vt) }, null, 8, ["icon"])
        ])),
        g("p", null, E(r.name), 1),
        l[0] || (l[0] = g("div", { class: "flex-grow" }, null, -1)),
        n.showDelete ? (c(), f("div", ha, [
          I(Le, {
            icon: h(et),
            onClick: (a) => t("delete", r),
            color: "error",
            variant: "light",
            size: "sm"
          }, null, 8, ["icon", "onClick"])
        ])) : D("", !0)
      ]))), 256))
    ]));
  }
}), ga = {
  key: 0,
  class: "font-medium mb-1"
}, wa = { key: 1 }, ka = {
  key: 0,
  class: "mb-2"
}, $a = { class: "font-medium" }, Ta = {
  key: 0,
  class: "text-error text-sm mt-1"
}, Ca = /* @__PURE__ */ B({
  __name: "DragAndDropFiles",
  props: /* @__PURE__ */ j({
    label: {},
    dropText: { default: "Drag and drop files here, or click to select files" },
    error: {},
    withIcon: { type: Boolean },
    limit: {},
    accept: {},
    showFileList: { type: Boolean },
    disabled: { type: Boolean }
  }, {
    modelValue: { default: [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(o) {
    const e = o, t = P(o, "modelValue"), n = (s) => {
      if (!s) return;
      const u = Array.from(s).filter((d) => On(e.accept, d)), m = e.limit ? e.limit - t.value.length : u.length;
      e.limit && u.length > e.limit ? t.value.push(...u.slice(0, m)) : t.value.push(...u.slice(0, m));
    }, l = (s) => {
      t.value = t.value.filter((i) => i !== s);
    }, r = (s) => {
      n(s.dataTransfer?.files ?? null);
    }, a = (s) => {
      const i = s.target;
      n(i.files);
    };
    return (s, i) => (c(), f("div", null, [
      s.label ? (c(), f("p", ga, E(s.label), 1)) : D("", !0),
      (s.limit ? !s.disabled && t.value.length < s.limit : !s.disabled) ? (c(), f("div", wa, [
        I(Qt, {
          onChange: a,
          accept: s.accept
        }, {
          default: U(() => [
            I(ca, { onDrop: r }, {
              default: U(({ isDragOver: u }) => [
                g("div", {
                  class: C(["cursor-pointer duration-300 text-center border-2 border-dashed py-6 px-4 rounded-lg", {
                    "bg-secondary/30": u,
                    "text-secondary border-secondary": !s.error,
                    "text-error border-error": s.error
                  }])
                }, [
                  s.withIcon ? (c(), f("div", ka, [
                    I(h(te), {
                      icon: h(mo),
                      size: "lg"
                    }, null, 8, ["icon"])
                  ])) : D("", !0),
                  g("p", $a, E(s.dropText), 1)
                ], 2)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["accept"]),
        s.error ? (c(), f("p", Ta, E(s.error), 1)) : D("", !0)
      ])) : D("", !0),
      t.value.length > 0 && s.showFileList ? (c(), f("div", {
        key: 2,
        class: C({ "mt-4": !s.disabled })
      }, [
        I(ya, {
          files: t.value,
          "show-delete": !s.disabled,
          onDelete: l
        }, null, 8, ["files", "show-delete"])
      ], 2)) : D("", !0)
    ]));
  }
}), Yt = () => {
  const o = F(!1), e = F(null), t = () => o.value = !0, n = () => o.value = !1, l = (r) => {
    e.value && !e.value.contains(r.target) && n();
  };
  return we(() => {
    document.addEventListener("mousedown", l);
  }), ze(() => {
    document.removeEventListener("mousedown", l);
  }), { dropdownOpen: o, dropdownContainer: e, open: t, close: n };
}, Sa = ["onClick", "onMouseover"], Ea = { key: 1 }, Ba = {
  key: 0,
  class: "text-xs text-secondary-text"
}, Va = /* @__PURE__ */ B({
  __name: "DropdownOptions",
  props: {
    container: {},
    options: {},
    optionLabel: {},
    trackBy: {},
    optionDescription: {},
    width: { default: "w-full" },
    direction: { default: "left" },
    open: { type: Boolean },
    acceptsEmptySelection: { type: Boolean }
  },
  emits: ["select"],
  setup(o, { emit: e }) {
    const t = o, n = e, l = Re(), r = F(-1), a = F("top-full"), s = F(null), i = (v) => {
      n("select", v);
    }, u = () => {
      if (!t.container) return;
      const v = t.container.getBoundingClientRect(), k = window.innerHeight || document.documentElement.clientHeight;
      a.value = v.bottom + 150 > k ? "bottom-full" : "top-full";
    }, m = () => {
      a.value = "top-full";
    }, d = async (v) => {
      if (!t.options || t.options.length === 0) return;
      r.value += v, r.value < 0 ? r.value = t.options.length - 1 : r.value >= t.options.length && (r.value = 0), await ce();
      const S = s.value?.querySelectorAll("div > div")?.[r.value];
      S && S.scrollIntoView({ block: "nearest", behavior: "smooth" });
    };
    return at("ArrowDown", (v) => {
      t.open && t.options && t.options.length > 0 && (v.preventDefault(), d(1));
    }), at("ArrowUp", (v) => {
      t.open && t.options && t.options.length > 0 && (v.preventDefault(), d(-1));
    }), at("Enter", (v) => {
      t.open && t.options && t.options.length > 0 ? (v.preventDefault(), i(t.options[r.value])) : t.acceptsEmptySelection && (v.preventDefault(), i());
    }), ee(() => t.open, () => {
      t.open || (r.value = -1);
    }), (v, k) => (c(), Z(ye, {
      name: a.value === "top-full" ? "slide-down" : "slide-up",
      onBeforeEnter: u,
      onAfterLeave: m
    }, {
      default: U(() => [
        v.open && v.options && v.options.length > 0 ? (c(), f("div", {
          key: 0,
          ref_key: "optionsContainer",
          ref: s,
          class: C([
            "rounded-md bg-dropdown text-dropdown-text absolute overflow-auto max-h-64 flex flex-col cursor-pointer z-50",
            v.width,
            v.direction === "right" ? "right-0" : "left-0",
            a.value
          ])
        }, [
          (c(!0), f(oe, null, ne(v.options, (S, G) => (c(), f("div", {
            key: v.trackBy ? S[v.trackBy] : S,
            onClick: ($) => i(S),
            onMouseover: ($) => r.value = G,
            class: C(["text-md py-2 px-6 rounded-md text-left", { "bg-dropdown-select": r.value === G }])
          }, [
            h(l).option ? z(v.$slots, "option", {
              key: 0,
              option: S
            }, void 0, !0) : (c(), f("div", Ea, [
              Je(E(v.optionLabel ? S[v.optionLabel] : S) + " ", 1),
              v.optionDescription && S[v.optionDescription] ? (c(), f("div", Ba, E(S[v.optionDescription]), 1)) : D("", !0)
            ]))
          ], 42, Sa))), 128))
        ], 2)) : D("", !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), ht = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [n, l] of e)
    t[n] = l;
  return t;
}, yt = /* @__PURE__ */ ht(Va, [["__scopeId", "data-v-5cd7ada7"]]), Hl = /* @__PURE__ */ B({
  __name: "DropdownMenu",
  props: {
    options: {},
    label: { default: "label" },
    trackBy: { default: "value" },
    direction: { default: "left" }
  },
  emits: ["select"],
  setup(o, { emit: e }) {
    const t = e, n = Re(), { dropdownOpen: l, dropdownContainer: r } = Yt(), a = (s) => {
      l.value = !1, t("select", s);
    };
    return (s, i) => (c(), f("div", {
      class: "relative",
      ref_key: "dropdownContainer",
      ref: r
    }, [
      g("div", {
        onClick: i[0] || (i[0] = (u) => l.value = !h(l))
      }, [
        z(s.$slots, "trigger")
      ]),
      I(yt, {
        container: h(r),
        options: s.options,
        open: h(l),
        "option-label": s.label,
        "track-by": s.trackBy,
        "accepts-empty-selection": "",
        onSelect: a,
        width: "w-64",
        direction: s.direction
      }, xe({ _: 2 }, [
        h(n).option ? {
          name: "option",
          fn: U(({ option: u }) => [
            z(s.$slots, "option", { option: u })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["container", "options", "open", "option-label", "track-by", "direction"])
    ], 512));
  }
}), Ma = { class: "flex items-center justify-center" }, Da = {
  key: 0,
  class: "text-center font-medium mt-2"
}, Fa = /* @__PURE__ */ B({
  __name: "Loader",
  props: {
    label: {}
  },
  setup(o) {
    return (e, t) => (c(), f("div", Ma, [
      g("div", null, [
        t[0] || (t[0] = g("div", { class: "spinner" }, null, -1)),
        e.label ? (c(), f("p", Da, E(e.label), 1)) : D("", !0)
      ])
    ]));
  }
}), Ul = /* @__PURE__ */ ht(Fa, [["__scopeId", "data-v-025bfaf0"]]), Ia = { class: "flex items-center justify-center" }, Na = { key: 0 }, Oa = ["src", "alt"], _a = { key: 1 }, xa = ["src"], Aa = { key: 2 }, La = ["src"], za = {
  key: 3,
  class: "text-center"
}, Ra = /* @__PURE__ */ B({
  __name: "MediaCarousel",
  props: /* @__PURE__ */ j({
    files: {},
    maxMediaHeight: { default: "max-h-72" }
  }, {
    selectedIdx: { default: 0 },
    selectedIdxModifiers: {}
  }),
  emits: ["update:selectedIdx"],
  setup(o) {
    const e = P(o, "selectedIdx"), t = qt(), n = () => {
      const l = document.querySelector("swiper-container")?.swiper;
      l && (e.value = l.activeIndex);
    };
    return ee(e, () => {
      const l = document.querySelector("swiper-container")?.swiper;
      l && e.value !== l.activeIndex && l.slideTo(e.value);
    }), (l, r) => {
      const a = ut("swiper-slide"), s = ut("swiper-container");
      return c(), Z(s, {
        "slides-per-view": 1,
        "centered-slides": !0,
        navigation: !h(t),
        onSwiperslidechange: n
      }, {
        default: U(() => [
          (c(!0), f(oe, null, ne(l.files, (i) => (c(), Z(a, null, {
            default: U(() => [
              g("div", Ia, [
                i.type === "image" ? (c(), f("div", Na, [
                  g("img", {
                    src: i.preview,
                    alt: i.name,
                    class: C(l.maxMediaHeight)
                  }, null, 10, Oa)
                ])) : i.type === "video" ? (c(), f("div", _a, [
                  g("video", {
                    src: i.preview,
                    controls: "",
                    class: C(l.maxMediaHeight)
                  }, null, 10, xa)
                ])) : i.type === "audio" ? (c(), f("div", Aa, [
                  g("audio", {
                    src: i.preview,
                    controls: ""
                  }, null, 8, La)
                ])) : (c(), f("div", za, [
                  I(h(te), {
                    icon: h(vt),
                    size: "xl"
                  }, null, 8, ["icon"]),
                  r[0] || (r[0] = g("p", { class: "text-lg mt-2" }, "No preview available", -1))
                ]))
              ])
            ]),
            _: 2
          }, 1024))), 256))
        ]),
        _: 1
      }, 8, ["navigation"]);
    };
  }
}), Pa = {
  key: 0,
  class: "font-medium mb-1"
}, ja = {
  key: 1,
  class: "mb-2"
}, Ha = {
  key: 0,
  class: "text-error text-sm mt-1"
}, Kl = /* @__PURE__ */ B({
  __name: "MediaInput",
  props: /* @__PURE__ */ j({
    label: {},
    placeholder: {},
    error: {}
  }, {
    modelValue: { default: [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(o) {
    const e = P(o, "modelValue"), t = F(0), { formatFiles: n } = Zt(), l = (a) => {
      const s = a.target;
      s.files && e.value.push(...Array.from(s.files));
    }, r = O(() => n(e.value));
    return (a, s) => (c(), f("div", null, [
      a.label ? (c(), f("label", Pa, E(a.label), 1)) : D("", !0),
      e.value.length > 0 ? (c(), f("div", ja, [
        I(Ra, {
          "selected-idx": t.value,
          "onUpdate:selectedIdx": s[0] || (s[0] = (i) => t.value = i),
          files: r.value
        }, null, 8, ["selected-idx", "files"]),
        I(Pn, {
          "selected-idx": t.value,
          "onUpdate:selectedIdx": s[1] || (s[1] = (i) => t.value = i),
          files: e.value,
          "onUpdate:files": s[2] || (s[2] = (i) => e.value = i)
        }, {
          "additional-items-after": U(() => [
            I(Qt, {
              onChange: l,
              accept: "image/*"
            }, {
              default: U(() => [
                I(Le, {
                  icon: h(bo),
                  color: "secondary",
                  variant: "dashed",
                  styles: "!w-14 !h-14 !rounded-md"
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["selected-idx", "files"]),
        a.error ? (c(), f("p", Ha, E(a.error), 1)) : D("", !0)
      ])) : (c(), Z(Ca, {
        key: 2,
        "with-icon": "",
        "drop-text": a.placeholder,
        modelValue: e.value,
        "onUpdate:modelValue": s[3] || (s[3] = (i) => e.value = i),
        error: a.error
      }, null, 8, ["drop-text", "modelValue", "error"]))
    ]));
  }
}), Ua = {
  __name: "ModalContent",
  props: {
    contentClass: {
      type: String,
      default: "w-full max-w-xl p-2"
    }
  },
  emits: ["close"],
  setup(o, { emit: e }) {
    const t = e;
    return It(() => t("close")), (n, l) => (c(), Z(h(Wt), {
      "overlay-transition": "vfm-fade",
      "content-transition": "vfm-fade",
      class: "flex justify-center items-center",
      "content-class": o.contentClass
    }, {
      default: U(() => [
        I(Gt, { styles: "w-full" }, {
          default: U(() => [
            z(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["content-class"]));
  }
}, Wl = /* @__PURE__ */ B({
  __name: "Modal",
  props: /* @__PURE__ */ j({
    contentClass: { default: "w-full max-w-xl p-2" },
    clickToClose: { type: Boolean, default: !0 },
    escToClose: { type: Boolean, default: !0 }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(o) {
    const e = o, t = P(o, "modelValue"), n = Re(), l = Sn({
      component: Ua,
      attrs: {
        contentClass: e.contentClass,
        clickToClose: e.clickToClose,
        escToClose: e.escToClose,
        onClose: () => {
          t.value = !1;
        }
      },
      slots: {
        default: n.default
      }
    });
    return ee(t, () => {
      t.value === !0 ? l.open() : t.value === !1 && l.close();
    }), (r, a) => (c(), Z(h(Bn)));
  }
}), Ka = {
  key: 0,
  class: "text-error text-sm"
}, Gl = /* @__PURE__ */ B({
  __name: "Multiselect",
  props: /* @__PURE__ */ j({
    options: {},
    label: {},
    optionLabel: {},
    trackBy: {},
    searchable: { type: Boolean },
    icon: {},
    error: { type: [String, Boolean] },
    placeholder: { default: "Select an option..." },
    size: {},
    variant: { default: "filled" },
    color: { default: "base" },
    formatResult: { type: Function, default: (o) => o },
    styles: {},
    textboxStyles: {},
    acceptsEmptySelection: { type: Boolean },
    acceptsDuplicates: { type: Boolean }
  }, {
    modelValue: { default: [] },
    modelModifiers: {},
    searchQuery: { default: "" },
    searchQueryModifiers: {},
    input: {},
    inputModifiers: {}
  }),
  emits: /* @__PURE__ */ j(["select", "focus", "blur"], ["update:modelValue", "update:searchQuery", "update:input"]),
  setup(o, { emit: e }) {
    const t = o, n = e, l = P(o, "modelValue"), r = P(o, "searchQuery"), a = P(o, "input"), s = Re(), i = F(!1), u = F(null), m = O(() => t.acceptsDuplicates || !t.options ? t.options : t.options.filter((y) => !l.value.includes(t.formatResult(y)))), d = (y) => {
      l.value.push(t.formatResult(y)), r.value = "", n("select", y);
    }, v = (y) => {
      l.value = l.value.filter((V, A) => A !== y);
    }, k = () => {
      i.value = !0;
    }, S = () => {
      i.value = !1;
    }, G = () => {
      t.searchable || (i.value ? S() : k());
    }, $ = (y) => {
      const V = y.target;
      u.value && !u.value.contains(V) && S();
    };
    return we(() => {
      document.addEventListener("mousedown", $);
    }), ze(() => {
      document.removeEventListener("mousedown", $);
    }), ee(r, () => {
      t.searchable && r.value.length > 0 && k();
    }), (y, V) => (c(), f("div", {
      class: C([y.styles])
    }, [
      g("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: u
      }, [
        g("div", {
          onClick: V[4] || (V[4] = (A) => G()),
          class: C({ "cursor-pointer": !y.searchable })
        }, [
          I(tt, {
            modelValue: r.value,
            "onUpdate:modelValue": V[0] || (V[0] = (A) => r.value = A),
            input: a.value,
            "onUpdate:input": V[1] || (V[1] = (A) => a.value = A),
            label: y.label,
            placeholder: y.placeholder,
            disabled: !y.searchable,
            icon: y.icon,
            error: !!y.error,
            size: y.size,
            color: y.color,
            variant: y.variant,
            styles: y.textboxStyles,
            onFocus: V[2] || (V[2] = (A) => n("focus", A)),
            onBlur: V[3] || (V[3] = (A) => n("blur", A))
          }, {
            "left-section": U(() => [
              (c(!0), f(oe, null, ne(l.value, (A, ae) => (c(), f("div", {
                key: A[y.trackBy]
              }, [
                z(y.$slots, "selectedTag", {
                  option: A,
                  deselect: () => v(ae)
                })
              ]))), 128))
            ]),
            _: 3
          }, 8, ["modelValue", "input", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        I(yt, {
          container: u.value,
          options: m.value,
          "option-label": y.optionLabel,
          "track-by": y.trackBy,
          open: i.value,
          "accepts-empty-selection": y.acceptsEmptySelection,
          onSelect: d
        }, xe({ _: 2 }, [
          h(s).option ? {
            name: "option",
            fn: U(({ option: A }) => [
              z(y.$slots, "option", { option: A })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      y.error && typeof y.error != "boolean" ? (c(), f("p", Ka, E(y.error), 1)) : D("", !0)
    ], 2));
  }
}), Wa = { class: "font-medium" }, Ga = {
  key: 0,
  class: "text-text-secondary flex justify-center items-center w-10 rounded-l-md"
}, qa = ["placeholder", "min", "max", "disabled"], Za = {
  key: 0,
  class: "text-error text-sm"
}, Qa = {
  key: 1,
  class: "text-error text-sm"
}, ql = /* @__PURE__ */ B({
  __name: "NumberInput",
  props: /* @__PURE__ */ j({
    label: {},
    icon: {},
    placeholder: {},
    styles: {},
    error: {},
    min: { default: 0 },
    max: { default: 1e4 },
    variant: { default: "filled" },
    size: {},
    color: { default: "base" },
    disabled: { type: Boolean }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(o) {
    const e = o, t = P(o, "modelValue"), n = O(
      () => e.variant === "filled" ? `bg-${e.color}` : "bg-transparent border border-secondary-text"
    ), l = O(() => {
      const r = typeof t.value == "string" ? parseFloat(t.value) : t.value;
      return r && r > e.max ? `Value must be ${e.max} or less.` : r && r < e.min ? `Value must be ${e.min} or more.` : !1;
    });
    return (r, a) => (c(), f("div", null, [
      g("h4", Wa, E(r.label), 1),
      g("div", {
        class: C(["rounded-lg flex h-10 items-center", n.value, r.styles, { error: l.value || r.error, "px-2": !r.icon }])
      }, [
        r.icon ? (c(), f("div", Ga, [
          I(h(te), {
            icon: r.icon,
            size: "1x",
            class: "text-secondary-text"
          }, null, 8, ["icon"])
        ])) : D("", !0),
        he(g("input", {
          "onUpdate:modelValue": a[0] || (a[0] = (s) => t.value = s),
          placeholder: r.placeholder,
          type: "number",
          min: r.min,
          max: r.max,
          disabled: r.disabled,
          class: "flex-grow w-full py-2 px-0 border-none outline-none rounded-lg placeholder:text-secondary-text bg-transparent appearance-none"
        }, null, 8, qa), [
          [no, t.value]
        ])
      ], 2),
      l.value ? (c(), f("p", Za, E(l.value), 1)) : r.error && typeof r.error == "string" ? (c(), f("p", Qa, E(r.error), 1)) : D("", !0)
    ]));
  }
}), Zl = /* @__PURE__ */ B({
  __name: "Paragraph",
  props: {
    text: {},
    styles: {},
    limit: {},
    includeWhitespace: { type: Boolean }
  },
  setup(o) {
    const e = o, t = O(() => e.text && e.limit ? `${e.text.substring(0, e.limit)}${e.text.length > e.limit ? "..." : ""}` : e.text);
    return (n, l) => (c(), f("p", {
      class: C([n.styles, { "whitespace-pre-wrap": n.includeWhitespace }])
    }, E(t.value), 3));
  }
}), Ya = ["name", "value", "checked"], Xa = { class: "rounded-full border-2 border-secondary flex items-center justify-center h-4 w-4" }, Ql = /* @__PURE__ */ B({
  __name: "Radio",
  props: /* @__PURE__ */ j({
    value: { type: [String, Boolean] },
    label: {},
    name: {},
    modelValue: {}
  }, {
    modelValue: { type: [String, Boolean] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ j(["select"], ["update:modelValue"]),
  setup(o, { emit: e }) {
    const t = o, n = e, l = P(o, "modelValue"), r = F(!1), a = O(() => t.modelValue === t.value), s = (i) => {
      l.value = t.value, n("select", i);
    };
    return (i, u) => (c(), f("label", {
      class: "flex items-center gap-3 relative cursor-pointer",
      onMouseenter: u[1] || (u[1] = (m) => r.value = !0),
      onMouseleave: u[2] || (u[2] = (m) => r.value = !1)
    }, [
      g("input", {
        class: "absolute opacity-0 cursor-pointer",
        type: "radio",
        name: i.name,
        value: i.value,
        checked: a.value,
        onChange: u[0] || (u[0] = (m) => s(m))
      }, null, 40, Ya),
      g("span", Xa, [
        g("span", {
          class: C(["rounded-full h-2 w-2", { "bg-secondary": r.value || a.value }])
        }, null, 2)
      ]),
      g("span", null, E(i.label), 1)
    ], 32));
  }
}), Ja = { class: "flex items-center pr-1" }, el = { class: "flex items-center pr-2 text-secondary-text" }, tl = {
  key: 0,
  class: "text-error text-sm"
}, Yl = /* @__PURE__ */ B({
  __name: "Select",
  props: /* @__PURE__ */ j({
    options: {},
    label: {},
    optionLabel: {},
    trackBy: {},
    optionDescription: {},
    searchable: { type: Boolean },
    icon: {},
    error: { type: [String, Boolean] },
    placeholder: { default: "Select an option..." },
    size: {},
    variant: { default: "filled" },
    color: { default: "base" },
    lockOnSelect: { type: Boolean, default: !0 },
    formatResult: { type: Function, default: (o) => o },
    styles: {},
    textboxStyles: {},
    acceptsEmptySelection: { type: Boolean }
  }, {
    modelValue: {},
    modelModifiers: {},
    searchQuery: { default: "" },
    searchQueryModifiers: {},
    input: {},
    inputModifiers: {}
  }),
  emits: /* @__PURE__ */ j(["select", "blur", "focus"], ["update:modelValue", "update:searchQuery", "update:input"]),
  setup(o, { emit: e }) {
    const t = o, n = e, l = P(o, "modelValue"), r = P(o, "searchQuery"), a = P(o, "input"), s = Re(), { dropdownOpen: i, dropdownContainer: u, open: m, close: d } = Yt(), v = ($) => {
      const y = t.formatResult($);
      l.value = y, n("select", y), t.optionLabel && t.searchable ? r.value = $[t.optionLabel] : t.searchable && (r.value = $), ce(d);
    }, k = ($) => {
      l.value = null, r.value = "";
    }, S = () => {
      t.searchable || (i.value ? d() : m());
    }, G = O(() => l.value && t.optionLabel ? l.value[t.optionLabel] : l.value ? l.value : null);
    return ee(r, () => {
      t.searchable && r.value.length > 0 ? m() : t.searchable && d();
    }), ($, y) => (c(), f("div", {
      class: C([$.styles])
    }, [
      g("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: u
      }, [
        g("div", {
          onClick: y[5] || (y[5] = (V) => S()),
          class: C({ "cursor-pointer": !$.searchable })
        }, [
          I(tt, {
            modelValue: r.value,
            "onUpdate:modelValue": y[1] || (y[1] = (V) => r.value = V),
            input: a.value,
            "onUpdate:input": y[2] || (y[2] = (V) => a.value = V),
            value: G.value,
            label: $.label,
            placeholder: $.placeholder,
            disabled: !$.searchable || $.lockOnSelect && l.value,
            icon: l.value?.icon ?? $.icon,
            error: !!$.error,
            size: $.size,
            color: $.color,
            variant: $.variant,
            styles: $.textboxStyles,
            onFocus: y[3] || (y[3] = (V) => n("focus", V)),
            onBlur: y[4] || (y[4] = (V) => n("blur", V))
          }, xe({ _: 2 }, [
            $.lockOnSelect && $.searchable && l.value ? {
              name: "right-section",
              fn: U(() => [
                g("div", Ja, [
                  I(Le, {
                    icon: h(et),
                    onClick: y[0] || (y[0] = (V) => k()),
                    variant: "subtle",
                    color: "base",
                    size: $.size
                  }, null, 8, ["icon", "size"])
                ])
              ]),
              key: "0"
            } : $.searchable ? void 0 : {
              name: "right-section",
              fn: U(() => [
                g("div", el, [
                  I(h(te), {
                    icon: h(ho),
                    size: $.size
                  }, null, 8, ["icon", "size"])
                ])
              ]),
              key: "1"
            }
          ]), 1032, ["modelValue", "input", "value", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        I(yt, {
          container: h(u),
          options: $.options,
          "option-label": $.optionLabel,
          "track-by": $.trackBy,
          open: h(i),
          "accepts-empty-selection": $.acceptsEmptySelection,
          onSelect: v
        }, xe({ _: 2 }, [
          h(s).option ? {
            name: "option",
            fn: U(({ option: V }) => [
              z($.$slots, "option", { option: V })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      $.error && typeof $.error != "boolean" ? (c(), f("p", tl, E($.error), 1)) : D("", !0)
    ], 2));
  }
}), ol = {
  key: 0,
  class: "w-full"
}, nl = { class: "flex justify-between items-center gap-2 px-4" }, al = ["onClick"], ll = { class: "flex justify-between items-center mt-1 px-3" }, rl = ["onClick"], sl = ["onClick"], Xl = /* @__PURE__ */ B({
  __name: "Stepper",
  props: /* @__PURE__ */ j({
    steps: {},
    color: { default: "primary" },
    variant: { default: "classic" },
    canMoveForwards: { type: Boolean },
    canMoveBackwards: { type: Boolean }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(o) {
    const e = o, t = P(o, "modelValue"), n = O(() => e.steps ? e.steps.findIndex((i) => i.value === t.value) : -1), l = O(() => e.steps ? e.steps.map((i, u) => u < n.value ? { ...i, status: "completed" } : u === n.value ? { ...i, status: "in-progress" } : { ...i, status: "uncompleted" }) : []), r = (i) => i.status === "uncompleted" || i.status !== "in-progress" && e.variant === "minimalist" ? "text-secondary-text bg-card-accent" : `text-${e.color} bg-${e.color}${e.variant === "classic" ? "/30" : ""}`, a = (i) => e.canMoveForwards && i > n.value || e.canMoveBackwards && i < n.value ? "cursor-pointer" : "cursor-default", s = (i, u) => {
      (e.canMoveForwards && u > n.value || e.canMoveBackwards && u < n.value) && (t.value = i.value);
    };
    return (i, u) => i.variant === "classic" ? (c(), f("div", ol, [
      g("div", nl, [
        (c(!0), f(oe, null, ne(l.value, (m, d) => (c(), f(oe, {
          key: m.value
        }, [
          g("div", {
            onClick: (v) => s(m, d),
            class: C([
              "w-10 h-10 rounded-full flex items-center justify-center",
              r(m),
              a(d)
            ])
          }, [
            m.icon ? (c(), Z(h(te), {
              key: 0,
              icon: m.status === "completed" && !i.canMoveBackwards ? h(Nt) : m.icon
            }, null, 8, ["icon"])) : D("", !0)
          ], 10, al),
          d < i.steps.length - 1 ? (c(), f("div", {
            key: 0,
            class: C(`flex-grow bg-${l.value[d + 1].status === "uncompleted" ? "secondary-text" : i.color} h-0.5`)
          }, null, 2)) : D("", !0)
        ], 64))), 128))
      ]),
      g("div", ll, [
        (c(!0), f(oe, null, ne(l.value, (m, d) => (c(), f("p", {
          key: "label-" + m.value,
          onClick: (v) => s(m, d),
          class: C([
            m.status === "uncompleted" ? "text-secondary-text" : `text-${i.color}`,
            "text-xs font-medium text-center",
            a(d)
          ])
        }, E(m.label), 11, rl))), 128))
      ])
    ])) : i.variant === "minimalist" ? (c(), f("div", {
      key: 1,
      class: C(`grid grid-cols-${l.value.length} gap-1`)
    }, [
      (c(!0), f(oe, null, ne(l.value, (m, d) => (c(), f("div", {
        key: m.value,
        onClick: (v) => s(m, d)
      }, [
        g("div", {
          class: C(["h-1 rounded-lg mb-1", r(m), a(d)])
        }, null, 2),
        g("p", {
          class: C([
            m.status !== "in-progress" ? "text-secondary-text" : `text-${i.color}`,
            "text-sm font-medium",
            a(d)
          ])
        }, E(m.label), 3)
      ], 8, sl))), 128))
    ], 2)) : D("", !0);
  }
}), il = {};
function ul(o, e) {
  return c(), f("div", {
    onClick: _e(() => {
    }, ["stop"])
  }, [
    z(o.$slots, "default")
  ]);
}
const Jl = /* @__PURE__ */ ht(il, [["render", ul]]), dl = { class: "overflow-hidden rounded-xl shadow-full-box border border-border" }, cl = { class: "w-full border-collapse table-fixed bg-card overflow-hidden" }, fl = ["onClick"], vl = ["colspan", "rowspan"], er = /* @__PURE__ */ B({
  __name: "TableCard",
  props: {
    rows: {},
    headerClasses: {},
    onRowClick: { type: Function }
  },
  setup(o) {
    const e = o, t = (s) => ({
      width: s.width ? typeof s.width == "number" ? `${s.width}px` : s.width : void 0,
      height: s.height ? typeof s.height == "number" ? `${s.height}px` : s.height : void 0
    }), n = (s, i, u) => {
      const m = e.rows[i], v = (Array.isArray(m) ? m : m.cells)?.length ?? 0;
      return [
        `text-${s.align ?? "left"} p-2 border-border`,
        { "border-r": u !== v - 1 },
        s.class
      ];
    }, l = (s, i) => {
      const u = Array.isArray(s) ? {} : s;
      return [
        u.class ?? "",
        "border-border",
        { "border-b": i !== e.rows.length - 1 },
        { "cursor-pointer hover:bg-muted/50": u.onClick || e.onRowClick }
      ];
    }, r = (s, i) => {
      const u = Array.isArray(s) ? {} : s;
      u.onClick ? u.onClick(s, i) : e.onRowClick && e.onRowClick(s, i);
    }, a = (s) => String.fromCharCode(65 + s);
    return (s, i) => (c(), f("div", dl, [
      g("table", cl, [
        g("tbody", null, [
          (c(!0), f(oe, null, ne(s.rows, (u, m) => (c(), f("tr", {
            key: "row-" + m,
            class: C(l(u, m)),
            onClick: (d) => r(u, m)
          }, [
            (c(!0), f(oe, null, ne(Array.isArray(u) ? u : u.cells, (d, v) => (c(), f("td", {
              key: "cell-" + m + "-" + v,
              colspan: d.colspan || 1,
              rowspan: d.rowspan || 1,
              class: C(n(d, m, v)),
              style: ft(t(d))
            }, [
              z(s.$slots, `${a(v)}${m + 1}`, {}, () => [
                Je(E(d.content), 1)
              ])
            ], 14, vl))), 128))
          ], 10, fl))), 128))
        ])
      ])
    ]));
  }
}), pl = ["onClick"], tr = /* @__PURE__ */ B({
  __name: "Tabs",
  props: /* @__PURE__ */ j({
    tabs: {},
    stretch: { type: Boolean },
    size: { default: "lg" }
  }, {
    selectedTab: {},
    selectedTabModifiers: {}
  }),
  emits: ["update:selectedTab"],
  setup(o) {
    const e = P(o, "selectedTab");
    return (t, n) => (c(), f("div", null, [
      g("div", {
        class: C(["tab-container", { "justify-between": t.stretch }])
      }, [
        (c(!0), f(oe, null, ne(t.tabs, (l) => (c(), f("button", {
          key: l.name,
          class: C(["cursor-pointer", [{
            "text-error": l.error,
            "underline-offset-8 underline font-medium": l.name === e.value
          }, `text-${t.size}`]]),
          onClick: (r) => e.value = l.name,
          type: "button"
        }, E(l.label), 11, pl))), 128))
      ], 2),
      (c(!0), f(oe, null, ne(t.tabs, (l) => he((c(), f("div", {
        key: l.name
      }, [
        z(t.$slots, `tab-${l.name}`)
      ])), [
        [Te, l.name === e.value]
      ])), 128))
    ]));
  }
}), or = /* @__PURE__ */ B({
  __name: "Tag",
  props: {
    color: { default: "secondary" },
    size: { default: "md" },
    styles: { default: "" },
    rounded: { default: "full" }
  },
  setup(o) {
    return (e, t) => (c(), f("div", {
      class: C(`py-1 px-4 rounded-${e.rounded} duration-100 text-center text-black text-${e.size} bg-${e.color}`)
    }, [
      z(e.$slots, "default")
    ], 2));
  }
}), ml = { class: "flex items-center justify-between" }, bl = ["for"], hl = {
  key: 0,
  class: "text-xs text-secondary-text mr-1"
}, yl = ["name", "placeholder", "value", "disabled", "maxlength", "rows"], gl = {
  key: 0,
  class: "text-error text-sm"
}, wl = {
  key: 1,
  class: "text-success text-sm"
}, nr = /* @__PURE__ */ B({
  __name: "Textarea",
  props: /* @__PURE__ */ j({
    name: {},
    disabled: { type: Boolean },
    error: { type: [String, Boolean] },
    success: { type: [String, Boolean] },
    label: {},
    placeholder: {},
    modelValue: {},
    maxlength: {},
    styles: {},
    variant: { default: "filled" },
    color: { default: "base" },
    rows: { default: 4 },
    fieldSizingContent: { type: Boolean, default: !1 }
  }, {
    modelValue: {},
    modelModifiers: {},
    input: {},
    inputModifiers: {}
  }),
  emits: /* @__PURE__ */ j(["focus", "blur", "keyPress", "input"], ["update:modelValue", "update:input"]),
  setup(o, { emit: e }) {
    const t = o, n = e, l = P(o, "modelValue"), r = P(o, "input"), a = F(t.modelValue), s = F(!1), i = O(
      () => t.variant === "filled" ? `bg-${t.color}` : "bg-transparent border border-border"
    ), u = (v) => {
      s.value = !0, n("focus", v);
    }, m = (v) => {
      s.value = !1, n("blur", v);
    }, d = (v) => {
      const k = v.target;
      a.value = k.value, l.value = k.value, n("input", v);
    };
    return ee(
      () => t.modelValue,
      (v) => {
        a.value = v;
      }
    ), (v, k) => (c(), f("div", null, [
      g("div", ml, [
        g("label", {
          for: v.name,
          class: "font-medium"
        }, E(v.label), 9, bl),
        v.maxlength ? (c(), f("p", hl, E(l.value?.length ?? 0) + " / " + E(v.maxlength), 1)) : D("", !0)
      ]),
      g("div", {
        class: C([
          "rounded-lg flex duration-300 max-h-48 overflow-auto",
          i.value,
          v.styles,
          {
            error: v.error,
            success: v.success,
            selected: s.value
          }
        ])
      }, [
        g("textarea", {
          class: C(["rounded-lg p-2 flex-grow bg-transparent outline-none max-w-full placeholder:text-secondary-text border-none", { "field-sizing-content": v.fieldSizingContent }]),
          name: v.name,
          placeholder: v.placeholder,
          value: l.value,
          disabled: v.disabled,
          onInput: d,
          onFocus: u,
          onBlur: m,
          onKeydown: k[0] || (k[0] = (S) => n("keyPress", S)),
          maxlength: v.maxlength,
          rows: v.rows,
          ref_key: "inputElement",
          ref: r
        }, null, 42, yl)
      ], 2),
      v.error && typeof v.error != "boolean" ? (c(), f("p", gl, E(v.error), 1)) : v.success && typeof v.error != "boolean" ? (c(), f("p", wl, E(v.success), 1)) : D("", !0)
    ]));
  }
}), Xt = () => {
  const o = Ft("toastMessages", F([]));
  return {
    initializeToast: () => ao("toastMessages", F([])),
    toastMessages: o,
    addToast: (l) => o.value.push({ ...l, uuid: Ot() }),
    closeToast: (l) => o.value = o.value.filter((r) => r.uuid !== l)
  };
}, kl = { class: "flex-grow" }, $l = { class: "text-sm font-medium" }, Tl = { class: "text-sm" }, Cl = /* @__PURE__ */ B({
  __name: "ToastMessage",
  props: {
    message: {}
  },
  setup(o) {
    const e = o, { closeToast: t } = Xt();
    return we(() => {
      e.message.duration && setTimeout(() => t(e.message.uuid), e.message.duration);
    }), (n, l) => {
      const r = ut("IconButton");
      return c(), Z(ye, {
        name: "slide-fade",
        appear: ""
      }, {
        default: U(() => [
          g("div", {
            class: C(`w-72 flex items-center gap-2 rounded-md p-2 bg-${n.message.color ?? "success"}/${n.message.opacity ?? 60}`)
          }, [
            g("div", kl, [
              g("p", $l, E(n.message.title), 1),
              g("p", Tl, E(n.message.content), 1)
            ]),
            I(r, {
              icon: h(et),
              color: "base",
              variant: "subtle",
              onClick: l[0] || (l[0] = (a) => h(t)(n.message.uuid))
            }, null, 8, ["icon"])
          ], 2)
        ]),
        _: 1
      });
    };
  }
}), Sl = { class: "relative" }, ar = {
  __name: "ToastContainer",
  props: {
    containerName: String,
    position: {
      type: String,
      default: "top-0 right-0"
    }
  },
  setup(o) {
    const e = o, { toastMessages: t } = Xt(), n = O(() => t.value.filter((l) => l.container === e.containerName));
    return (l, r) => (c(), f("div", Sl, [
      z(l.$slots, "default"),
      n.value.length > 0 ? (c(), f("div", {
        key: 0,
        class: C(["absolute p-4 z-50 flex flex-col gap-2 overflow-hidden", o.position])
      }, [
        (c(!0), f(oe, null, ne(n.value, (a) => (c(), f("div", {
          key: a.uuid
        }, [
          z(l.$slots, "toast-content", { message: a }, () => [
            I(Cl, { message: a }, null, 8, ["message"])
          ])
        ]))), 128))
      ], 2)) : D("", !0)
    ]));
  }
}, lr = /* @__PURE__ */ B({
  __name: "Toggle",
  props: /* @__PURE__ */ j({
    activeColor: { default: "secondary" },
    value: { type: Boolean, default: !1 },
    icon: {}
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ j(["toggle"], ["update:modelValue"]),
  setup(o, { emit: e }) {
    const t = o, n = e, l = P(o, "modelValue"), r = () => {
      l.value = !l.value, n("toggle", l.value);
    }, a = O(
      () => l.value ? `bg-${t.activeColor}` : "bg-gray-300 dark:bg-gray-600"
    ), s = O(
      () => l.value ? "translate-x-6" : "translate-x-0"
    );
    return we(() => {
      l.value === void 0 && (l.value = t.value);
    }), (i, u) => (c(), f("div", {
      onClick: r,
      class: C([a.value, "cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300"])
    }, [
      g("div", {
        class: C([s.value, "bg-white dark:bg-gray-200 text-black text-sm flex justify-center items-center w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"])
      }, [
        i.icon ? (c(), Z(h(te), {
          key: 0,
          icon: i.icon
        }, null, 8, ["icon"])) : D("", !0)
      ], 2)
    ], 2));
  }
}), El = { class: "rounded-md bg-dropdown/80 text-dropdown-text p-1 text-xs text-nowrap" }, rr = /* @__PURE__ */ B({
  __name: "Tooltip",
  props: {
    text: {},
    position: { default: "top" }
  },
  setup(o) {
    const e = o, t = F(!1), n = O(() => {
      let l;
      return e.position === "right" && (l = "left-full pl-4"), l;
    });
    return (l, r) => (c(), f("div", {
      class: "relative flex items-center",
      onMouseenter: r[0] || (r[0] = (a) => t.value = !0),
      onMouseleave: r[1] || (r[1] = (a) => t.value = !1)
    }, [
      z(l.$slots, "default"),
      I(ye, { name: "fade" }, {
        default: U(() => [
          t.value ? (c(), f("div", {
            key: 0,
            class: C([n.value, "absolute delay-1000 z-50"])
          }, [
            g("div", El, [
              z(l.$slots, "tooltip-content", {}, () => [
                Je(E(l.text), 1)
              ])
            ])
          ], 2)) : D("", !0)
        ]),
        _: 3
      })
    ], 32));
  }
}), sr = {
  install(o) {
    const e = Tn();
    o.use(e);
  }
};
export {
  Ol as Accordion,
  Pn as AttachmentList,
  _l as Avatar,
  xl as AvatarGroup,
  Al as Badge,
  Wn as Button,
  Gt as Card,
  Ll as Checkbox,
  zl as ClickableTag,
  Rl as CodeSnippet,
  Pl as CurrencyInput,
  jl as DatePicker,
  Ca as DragAndDropFiles,
  Hl as DropdownMenu,
  yt as DropdownOptions,
  ca as Dropzone,
  Qt as FileButton,
  ya as FileList,
  Qn as HoverBox,
  Le as IconButton,
  Ul as Loader,
  Ra as MediaCarousel,
  Kl as MediaInput,
  Wl as Modal,
  Gl as Multiselect,
  ql as NumberInput,
  Zl as Paragraph,
  Ql as Radio,
  Yl as Select,
  Xl as Stepper,
  Jl as StopPropagation,
  er as TableCard,
  tr as Tabs,
  or as Tag,
  nr as Textarea,
  tt as Textbox,
  ar as ToastContainer,
  lr as Toggle,
  rr as Tooltip,
  sr as default,
  Zt as useFiles,
  qt as useIsHandheld,
  Xt as useToast
};
