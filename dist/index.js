import { ref as x, watch as ee, defineComponent as E, useAttrs as Jt, getCurrentInstance as Vt, computed as I, onMounted as we, onBeforeUnmount as Ae, nextTick as ce, toRef as nt, createBlock as Z, openBlock as c, Teleport as eo, withDirectives as be, createCommentVNode as F, unref as $, createElementBlock as v, mergeProps as $e, withModifiers as Ne, withKeys as to, createVNode as D, Transition as ye, toHandlers as gt, withCtx as U, normalizeStyle as vt, normalizeClass as T, vShow as Te, renderSlot as M, normalizeProps as _t, guardReactiveProps as oo, createElementVNode as b, inject as Dt, reactive as it, Fragment as te, renderList as oe, resolveDynamicComponent as Ke, createSlots as Oe, shallowReactive as je, markRaw as We, mergeModels as j, useModel as P, toDisplayString as B, onUnmounted as Ft, createTextVNode as tt, useSlots as Re, resolveComponent as ut, vModelText as no, provide as lo } from "vue";
import { unrefElement as ao, tryOnScopeDispose as ro, useEventListener as ue, tryOnUnmounted as so, useClipboard as io, onKeyStroke as lt } from "@vueuse/core";
import uo from "vuedraggable";
import { v4 as xt } from "uuid";
import { faCopy as co, faCalendar as vo, faPlus as fo, faXmark as po } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as mo } from "@fortawesome/vue-fontawesome";
import ho from "@vuepic/vue-datepicker";
var It = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], qe = /* @__PURE__ */ It.join(","), Nt = typeof Element > "u", ge = Nt ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Ze = !Nt && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t?.ownerDocument;
}, Qe = function t(e, o) {
  var n;
  o === void 0 && (o = !0);
  var a = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "inert"), r = a === "" || a === "true", l = r || o && e && t(e.parentNode);
  return l;
}, bo = function(e) {
  var o, n = e == null || (o = e.getAttribute) === null || o === void 0 ? void 0 : o.call(e, "contenteditable");
  return n === "" || n === "true";
}, Ot = function(e, o, n) {
  if (Qe(e))
    return [];
  var a = Array.prototype.slice.apply(e.querySelectorAll(qe));
  return o && ge.call(e, qe) && a.unshift(e), a = a.filter(n), a;
}, Lt = function t(e, o, n) {
  for (var a = [], r = Array.from(e); r.length; ) {
    var l = r.shift();
    if (!Qe(l, !1))
      if (l.tagName === "SLOT") {
        var s = l.assignedElements(), i = s.length ? s : l.children, u = t(i, !0, n);
        n.flatten ? a.push.apply(a, u) : a.push({
          scopeParent: l,
          candidates: u
        });
      } else {
        var m = ge.call(l, qe);
        m && n.filter(l) && (o || !e.includes(l)) && a.push(l);
        var d = l.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(l), f = !Qe(d, !1) && (!n.shadowRootFilter || n.shadowRootFilter(l));
        if (d && f) {
          var w = t(d === !0 ? l.children : d.children, !0, n);
          n.flatten ? a.push.apply(a, w) : a.push({
            scopeParent: l,
            candidates: w
          });
        } else
          r.unshift.apply(r, l.children);
      }
  }
  return a;
}, zt = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, me = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || bo(e)) && !zt(e) ? 0 : e.tabIndex;
}, yo = function(e, o) {
  var n = me(e);
  return n < 0 && o && !zt(e) ? 0 : n;
}, go = function(e, o) {
  return e.tabIndex === o.tabIndex ? e.documentOrder - o.documentOrder : e.tabIndex - o.tabIndex;
}, At = function(e) {
  return e.tagName === "INPUT";
}, wo = function(e) {
  return At(e) && e.type === "hidden";
}, ko = function(e) {
  var o = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return o;
}, $o = function(e, o) {
  for (var n = 0; n < e.length; n++)
    if (e[n].checked && e[n].form === o)
      return e[n];
}, To = function(e) {
  if (!e.name)
    return !0;
  var o = e.form || Ze(e), n = function(s) {
    return o.querySelectorAll('input[type="radio"][name="' + s + '"]');
  }, a;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    a = n(window.CSS.escape(e.name));
  else
    try {
      a = n(e.name);
    } catch (l) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", l.message), !1;
    }
  var r = $o(a, e.form);
  return !r || r === e;
}, Co = function(e) {
  return At(e) && e.type === "radio";
}, So = function(e) {
  return Co(e) && !To(e);
}, Eo = function(e) {
  var o, n = e && Ze(e), a = (o = n) === null || o === void 0 ? void 0 : o.host, r = !1;
  if (n && n !== e) {
    var l, s, i;
    for (r = !!((l = a) !== null && l !== void 0 && (s = l.ownerDocument) !== null && s !== void 0 && s.contains(a) || e != null && (i = e.ownerDocument) !== null && i !== void 0 && i.contains(e)); !r && a; ) {
      var u, m, d;
      n = Ze(a), a = (u = n) === null || u === void 0 ? void 0 : u.host, r = !!((m = a) !== null && m !== void 0 && (d = m.ownerDocument) !== null && d !== void 0 && d.contains(a));
    }
  }
  return r;
}, wt = function(e) {
  var o = e.getBoundingClientRect(), n = o.width, a = o.height;
  return n === 0 && a === 0;
}, Bo = function(e, o) {
  var n = o.displayCheck, a = o.getShadowRoot;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var r = ge.call(e, "details>summary:first-of-type"), l = r ? e.parentElement : e;
  if (ge.call(l, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || n === "legacy-full") {
    if (typeof a == "function") {
      for (var s = e; e; ) {
        var i = e.parentElement, u = Ze(e);
        if (i && !i.shadowRoot && a(i) === !0)
          return wt(e);
        e.assignedSlot ? e = e.assignedSlot : !i && u !== e.ownerDocument ? e = u.host : e = i;
      }
      e = s;
    }
    if (Eo(e))
      return !e.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return wt(e);
  return !1;
}, Mo = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var o = e.parentElement; o; ) {
      if (o.tagName === "FIELDSET" && o.disabled) {
        for (var n = 0; n < o.children.length; n++) {
          var a = o.children.item(n);
          if (a.tagName === "LEGEND")
            return ge.call(o, "fieldset[disabled] *") ? !0 : !a.contains(e);
        }
        return !0;
      }
      o = o.parentElement;
    }
  return !1;
}, Ye = function(e, o) {
  return !(o.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  Qe(o) || wo(o) || Bo(o, e) || // For a details element with a summary, the summary element gets the focus
  ko(o) || Mo(o));
}, dt = function(e, o) {
  return !(So(o) || me(o) < 0 || !Ye(e, o));
}, Vo = function(e) {
  var o = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(o) || o >= 0);
}, _o = function t(e) {
  var o = [], n = [];
  return e.forEach(function(a, r) {
    var l = !!a.scopeParent, s = l ? a.scopeParent : a, i = yo(s, l), u = l ? t(a.candidates) : s;
    i === 0 ? l ? o.push.apply(o, u) : o.push(s) : n.push({
      documentOrder: r,
      tabIndex: i,
      item: a,
      isScope: l,
      content: u
    });
  }), n.sort(go).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(o);
}, Do = function(e, o) {
  o = o || {};
  var n;
  return o.getShadowRoot ? n = Lt([e], o.includeContainer, {
    filter: dt.bind(null, o),
    flatten: !1,
    getShadowRoot: o.getShadowRoot,
    shadowRootFilter: Vo
  }) : n = Ot(e, o.includeContainer, dt.bind(null, o)), _o(n);
}, Fo = function(e, o) {
  o = o || {};
  var n;
  return o.getShadowRoot ? n = Lt([e], o.includeContainer, {
    filter: Ye.bind(null, o),
    flatten: !0,
    getShadowRoot: o.getShadowRoot
  }) : n = Ot(e, o.includeContainer, Ye.bind(null, o)), n;
}, ke = function(e, o) {
  if (o = o || {}, !e)
    throw new Error("No node provided");
  return ge.call(e, qe) === !1 ? !1 : dt(o, e);
}, xo = /* @__PURE__ */ It.concat("iframe").join(","), at = function(e, o) {
  if (o = o || {}, !e)
    throw new Error("No node provided");
  return ge.call(e, xo) === !1 ? !1 : Ye(o, e);
};
function ct(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var o = 0, n = Array(e); o < e; o++) n[o] = t[o];
  return n;
}
function Io(t) {
  if (Array.isArray(t)) return ct(t);
}
function No(t, e, o) {
  return (e = Ro(e)) in t ? Object.defineProperty(t, e, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = o, t;
}
function Oo(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Lo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kt(t, e) {
  var o = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), o.push.apply(o, n);
  }
  return o;
}
function $t(t) {
  for (var e = 1; e < arguments.length; e++) {
    var o = arguments[e] != null ? arguments[e] : {};
    e % 2 ? kt(Object(o), !0).forEach(function(n) {
      No(t, n, o[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : kt(Object(o)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
    });
  }
  return t;
}
function zo(t) {
  return Io(t) || Oo(t) || Po(t) || Lo();
}
function Ao(t, e) {
  if (typeof t != "object" || !t) return t;
  var o = t[Symbol.toPrimitive];
  if (o !== void 0) {
    var n = o.call(t, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Ro(t) {
  var e = Ao(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Po(t, e) {
  if (t) {
    if (typeof t == "string") return ct(t, e);
    var o = {}.toString.call(t).slice(8, -1);
    return o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set" ? Array.from(t) : o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? ct(t, e) : void 0;
  }
}
var Tt = {
  activateTrap: function(e, o) {
    if (e.length > 0) {
      var n = e[e.length - 1];
      n !== o && n._setPausedState(!0);
    }
    var a = e.indexOf(o);
    a === -1 || e.splice(a, 1), e.push(o);
  },
  deactivateTrap: function(e, o) {
    var n = e.indexOf(o);
    n !== -1 && e.splice(n, 1), e.length > 0 && !e[e.length - 1]._isManuallyPaused() && e[e.length - 1]._setPausedState(!1);
  }
}, jo = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, Ho = function(e) {
  return e?.key === "Escape" || e?.key === "Esc" || e?.keyCode === 27;
}, _e = function(e) {
  return e?.key === "Tab" || e?.keyCode === 9;
}, Uo = function(e) {
  return _e(e) && !e.shiftKey;
}, Ko = function(e) {
  return _e(e) && e.shiftKey;
}, Ct = function(e) {
  return setTimeout(e, 0);
}, Be = function(e) {
  for (var o = arguments.length, n = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
    n[a - 1] = arguments[a];
  return typeof e == "function" ? e.apply(void 0, n) : e;
}, He = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, Wo = [], Go = function(e, o) {
  var n = o?.document || document, a = o?.trapStack || Wo, r = $t({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: Uo,
    isKeyBackward: Ko
  }, o), l = {
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
  }, s, i = function(p, h, C) {
    return p && p[h] !== void 0 ? p[h] : r[C || h];
  }, u = function(p, h) {
    var C = typeof h?.composedPath == "function" ? h.composedPath() : void 0;
    return l.containerGroups.findIndex(function(O) {
      var A = O.container, K = O.tabbableNodes;
      return A.contains(p) || C?.includes(A) || K.find(function(N) {
        return N === p;
      });
    });
  }, m = function(p) {
    var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = h.hasFallback, O = C === void 0 ? !1 : C, A = h.params, K = A === void 0 ? [] : A, N = r[p];
    if (typeof N == "function" && (N = N.apply(void 0, zo(K))), N === !0 && (N = void 0), !N) {
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
      if (!q && !O)
        throw new Error("`".concat(p, "` as selector refers to no known node"));
    }
    return q;
  }, d = function() {
    var p = m("initialFocus", {
      hasFallback: !0
    });
    if (p === !1)
      return !1;
    if (p === void 0 || p && !at(p, r.tabbableOptions))
      if (u(n.activeElement) >= 0)
        p = n.activeElement;
      else {
        var h = l.tabbableGroups[0], C = h && h.firstTabbableNode;
        p = C || m("fallbackFocus");
      }
    else p === null && (p = m("fallbackFocus"));
    if (!p)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return p;
  }, f = function() {
    if (l.containerGroups = l.containers.map(function(p) {
      var h = Do(p, r.tabbableOptions), C = Fo(p, r.tabbableOptions), O = h.length > 0 ? h[0] : void 0, A = h.length > 0 ? h[h.length - 1] : void 0, K = C.find(function(X) {
        return ke(X);
      }), N = C.slice().reverse().find(function(X) {
        return ke(X);
      }), q = !!h.find(function(X) {
        return me(X) > 0;
      });
      return {
        container: p,
        tabbableNodes: h,
        focusableNodes: C,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: q,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: O,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: A,
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
          var fe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, le = h.indexOf(ie);
          return le < 0 ? fe ? C.slice(C.indexOf(ie) + 1).find(function(pe) {
            return ke(pe);
          }) : C.slice(0, C.indexOf(ie)).reverse().find(function(pe) {
            return ke(pe);
          }) : h[le + (fe ? 1 : -1)];
        }
      };
    }), l.tabbableGroups = l.containerGroups.filter(function(p) {
      return p.tabbableNodes.length > 0;
    }), l.tabbableGroups.length <= 0 && !m("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (l.containerGroups.find(function(p) {
      return p.posTabIndexesFound;
    }) && l.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, w = function(p) {
    var h = p.activeElement;
    if (h)
      return h.shadowRoot && h.shadowRoot.activeElement !== null ? w(h.shadowRoot) : h;
  }, S = function(p) {
    if (p !== !1 && p !== w(document)) {
      if (!p || !p.focus) {
        S(d());
        return;
      }
      p.focus({
        preventScroll: !!r.preventScroll
      }), l.mostRecentlyFocusedNode = p, jo(p) && p.select();
    }
  }, G = function(p) {
    var h = m("setReturnFocus", {
      params: [p]
    });
    return h || (h === !1 ? !1 : p);
  }, k = function(p) {
    var h = p.target, C = p.event, O = p.isBackward, A = O === void 0 ? !1 : O;
    h = h || He(C), f();
    var K = null;
    if (l.tabbableGroups.length > 0) {
      var N = u(h, C), q = N >= 0 ? l.containerGroups[N] : void 0;
      if (N < 0)
        A ? K = l.tabbableGroups[l.tabbableGroups.length - 1].lastTabbableNode : K = l.tabbableGroups[0].firstTabbableNode;
      else if (A) {
        var X = l.tabbableGroups.findIndex(function(Se) {
          var Ee = Se.firstTabbableNode;
          return h === Ee;
        });
        if (X < 0 && (q.container === h || at(h, r.tabbableOptions) && !ke(h, r.tabbableOptions) && !q.nextTabbableNode(h, !1)) && (X = N), X >= 0) {
          var ie = X === 0 ? l.tabbableGroups.length - 1 : X - 1, fe = l.tabbableGroups[ie];
          K = me(h) >= 0 ? fe.lastTabbableNode : fe.lastDomTabbableNode;
        } else _e(C) || (K = q.nextTabbableNode(h, !1));
      } else {
        var le = l.tabbableGroups.findIndex(function(Se) {
          var Ee = Se.lastTabbableNode;
          return h === Ee;
        });
        if (le < 0 && (q.container === h || at(h, r.tabbableOptions) && !ke(h, r.tabbableOptions) && !q.nextTabbableNode(h)) && (le = N), le >= 0) {
          var pe = le === l.tabbableGroups.length - 1 ? 0 : le + 1, Ce = l.tabbableGroups[pe];
          K = me(h) >= 0 ? Ce.firstTabbableNode : Ce.firstDomTabbableNode;
        } else _e(C) || (K = q.nextTabbableNode(h));
      }
    } else
      K = m("fallbackFocus");
    return K;
  }, y = function(p) {
    var h = He(p);
    if (!(u(h, p) >= 0)) {
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
    var h = He(p), C = u(h, p) >= 0;
    if (C || h instanceof Document)
      C && (l.mostRecentlyFocusedNode = h);
    else {
      p.stopImmediatePropagation();
      var O, A = !0;
      if (l.mostRecentlyFocusedNode)
        if (me(l.mostRecentlyFocusedNode) > 0) {
          var K = u(l.mostRecentlyFocusedNode), N = l.containerGroups[K].tabbableNodes;
          if (N.length > 0) {
            var q = N.findIndex(function(X) {
              return X === l.mostRecentlyFocusedNode;
            });
            q >= 0 && (r.isKeyForward(l.recentNavEvent) ? q + 1 < N.length && (O = N[q + 1], A = !1) : q - 1 >= 0 && (O = N[q - 1], A = !1));
          }
        } else
          l.containerGroups.some(function(X) {
            return X.tabbableNodes.some(function(ie) {
              return me(ie) > 0;
            });
          }) || (A = !1);
      else
        A = !1;
      A && (O = k({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: l.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(l.recentNavEvent)
      })), S(O || l.mostRecentlyFocusedNode || d());
    }
    l.recentNavEvent = void 0;
  }, z = function(p) {
    var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    l.recentNavEvent = p;
    var C = k({
      event: p,
      isBackward: h
    });
    C && (_e(p) && p.preventDefault(), S(C));
  }, ne = function(p) {
    (r.isKeyForward(p) || r.isKeyBackward(p)) && z(p, r.isKeyBackward(p));
  }, g = function(p) {
    Ho(p) && Be(r.escapeDeactivates, p) !== !1 && (p.preventDefault(), s.deactivate());
  }, H = function(p) {
    var h = He(p);
    u(h, p) >= 0 || Be(r.clickOutsideDeactivates, p) || Be(r.allowOutsideClick, p) || (p.preventDefault(), p.stopImmediatePropagation());
  }, L = function() {
    if (l.active)
      return Tt.activateTrap(a, s), l.delayInitialFocusTimer = r.delayInitialFocus ? Ct(function() {
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
      }), n.addEventListener("keydown", ne, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", g), s;
  }, Y = function() {
    if (l.active)
      return n.removeEventListener("focusin", V, !0), n.removeEventListener("mousedown", y, !0), n.removeEventListener("touchstart", y, !0), n.removeEventListener("click", H, !0), n.removeEventListener("keydown", ne, !0), n.removeEventListener("keydown", g), s;
  }, Q = function(p) {
    var h = p.some(function(C) {
      var O = Array.from(C.removedNodes);
      return O.some(function(A) {
        return A === l.mostRecentlyFocusedNode;
      });
    });
    h && S(d());
  }, ve = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(Q) : void 0, re = function() {
    ve && (ve.disconnect(), l.active && !l.paused && l.containers.map(function(p) {
      ve.observe(p, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return s = {
    get active() {
      return l.active;
    },
    get paused() {
      return l.paused;
    },
    activate: function(p) {
      if (l.active)
        return this;
      var h = i(p, "onActivate"), C = i(p, "onPostActivate"), O = i(p, "checkCanFocusTrap");
      O || f(), l.active = !0, l.paused = !1, l.nodeFocusedBeforeActivation = w(n), h?.();
      var A = function() {
        O && f(), L(), re(), C?.();
      };
      return O ? (O(l.containers.concat()).then(A, A), this) : (A(), this);
    },
    deactivate: function(p) {
      if (!l.active)
        return this;
      var h = $t({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, p);
      clearTimeout(l.delayInitialFocusTimer), l.delayInitialFocusTimer = void 0, Y(), l.active = !1, l.paused = !1, re(), Tt.deactivateTrap(a, s);
      var C = i(h, "onDeactivate"), O = i(h, "onPostDeactivate"), A = i(h, "checkCanReturnFocus"), K = i(h, "returnFocus", "returnFocusOnDeactivate");
      C?.();
      var N = function() {
        Ct(function() {
          K && S(G(l.nodeFocusedBeforeActivation)), O?.();
        });
      };
      return K && A ? (A(G(l.nodeFocusedBeforeActivation)).then(N, N), this) : (N(), this);
    },
    pause: function(p) {
      return l.active ? (l.manuallyPaused = !0, this._setPausedState(!0, p)) : this;
    },
    unpause: function(p) {
      return l.active ? (l.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, p)) : this;
    },
    updateContainerElements: function(p) {
      var h = [].concat(p).filter(Boolean);
      return l.containers = h.map(function(C) {
        return typeof C == "string" ? n.querySelector(C) : C;
      }), l.active && f(), re(), this;
    }
  }, Object.defineProperties(s, {
    _isManuallyPaused: {
      value: function() {
        return l.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(p, h) {
        if (l.paused === p)
          return this;
        if (l.paused = p, p) {
          var C = i(h, "onPause"), O = i(h, "onPostPause");
          C?.(), Y(), re(), O?.();
        } else {
          var A = i(h, "onUnpause"), K = i(h, "onPostUnpause");
          A?.(), f(), L(), re(), K?.();
        }
        return this;
      }
    }
  }), s.updateContainerElements(e), s;
};
function qo(t, e = {}) {
  let o;
  const { immediate: n, ...a } = e, r = x(!1), l = x(!1), s = (d) => o && o.activate(d), i = (d) => o && o.deactivate(d), u = () => {
    o && (o.pause(), l.value = !0);
  }, m = () => {
    o && (o.unpause(), l.value = !1);
  };
  return ee(
    () => ao(t),
    (d) => {
      d && (o = Go(d, {
        ...a,
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
    isPaused: l,
    activate: s,
    deactivate: i,
    pause: u,
    unpause: m
  };
}
const Zo = (t) => (...e) => {
  t && (t?.(...e), t = null);
}, Le = () => {
};
function Ue(t, e, o) {
  return t > o ? o : t < e ? e : t;
}
const ft = (t) => typeof t == "string";
function rt(t, e) {
  var o;
  const n = ((o = Ve(t, e)) == null ? void 0 : o[0]) || e;
  t.push(n);
}
function Ve(t, e) {
  const o = t.indexOf(e);
  if (o !== -1)
    return t.splice(o, 1);
}
function Rt(t) {
  return Object.entries(t);
}
const Qo = {
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
    validator: (t) => ["if", "show", "visible"].includes(t)
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
    validator: (t) => ["auto", "persist"].includes(t)
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
    validator: (t) => ["interactive", "non-interactive"].includes(t)
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
    default: ({ index: t }) => 1e3 + 2 * t
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
    validator: (t) => ["none", "up", "right", "down", "left"].includes(t)
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
function St(t = !1) {
  const e = x(t), o = x(e.value ? 0 : void 0);
  return [e, o, {
    beforeEnter() {
      o.value = 1;
    },
    afterEnter() {
      o.value = 0;
    },
    beforeLeave() {
      o.value = 3;
    },
    afterLeave() {
      o.value = 2;
    }
  }];
}
function Yo(t, e) {
  const { modelValueLocal: o, onEntering: n, onEnter: a, onLeaving: r, onLeave: l } = e, s = x(o.value), [i, u, m] = St(s.value), [d, f, w] = St(s.value), S = I(() => typeof t.contentTransition == "string" ? { name: t.contentTransition, appear: !0 } : { appear: !0, ...t.contentTransition }), G = I(() => typeof t.overlayTransition == "string" ? { name: t.overlayTransition, appear: !0 } : { appear: !0, ...t.overlayTransition }), k = I(
    () => (t.hideOverlay || f.value === 2) && u.value === 2
    /* Leave */
  );
  ee(
    k,
    (z) => {
      z && (s.value = !1);
    }
  ), ee(u, (z) => {
    if (z === 1) {
      if (!s.value)
        return;
      n?.();
    } else if (z === 0) {
      if (!s.value)
        return;
      a?.();
    } else
      z === 3 ? r?.() : z === 2 && l?.();
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
    overlayListeners: w,
    overlayTransition: G,
    enterTransition: y,
    leaveTransition: V
  };
}
function Xo(t, e, o) {
  const { vfmRootEl: n, vfmContentEl: a, visible: r, modelValueLocal: l } = o, s = x();
  function i() {
    r.value && t.escToClose && (l.value = !1);
  }
  function u(d) {
    s.value = d?.target;
  }
  function m() {
    var d;
    s.value === n.value && (t.clickToClose ? l.value = !1 : ((d = a.value) == null || d.focus(), e("clickOutside")));
  }
  return {
    onEsc: i,
    onMouseupRoot: m,
    onMousedown: u
  };
}
function Jo(t, e, o) {
  let n = !1;
  const { open: a, close: r } = o, l = x(!1), s = {
    get value() {
      return l.value;
    },
    set value(u) {
      i(u);
    }
  };
  function i(u) {
    (u ? a() : r()) ? (l.value = u, u !== t.modelValue && e("update:modelValue", u)) : (n = !0, e("update:modelValue", !u), ce(() => {
      n = !1;
    }));
  }
  return ee(() => t.modelValue, (u) => {
    n || (s.value = !!u);
  }), {
    modelValueLocal: s
  };
}
function en(t, e) {
  if (t.focusTrap === !1)
    return {
      focus() {
      },
      blur() {
      }
    };
  const { focusEl: o } = e, { hasFocus: n, activate: a, deactivate: r } = qo(o, t.focusTrap);
  function l() {
    requestAnimationFrame(() => {
      a();
    });
  }
  function s() {
    n.value && r();
  }
  return { focus: l, blur: s };
}
let pt = !1;
if (typeof window < "u") {
  const t = {
    get passive() {
      pt = !0;
    }
  };
  window.addEventListener("testPassive", null, t), window.removeEventListener("testPassive", null, t);
}
const Pt = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
let de = [], Xe = !1, Ge = 0, jt = -1, De, Fe;
const tn = (t) => {
  if (!t || t.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const e = window.getComputedStyle(t);
  return ["auto", "scroll"].includes(e.overflowY) && t.scrollHeight > t.clientHeight;
}, on = (t, e) => !(t.scrollTop === 0 && e < 0 || t.scrollTop + t.clientHeight + e >= t.scrollHeight && e > 0), nn = (t) => {
  const e = [];
  for (; t; ) {
    if (e.push(t), t.classList.contains("vfm"))
      return e;
    t = t.parentElement;
  }
  return e;
}, ln = (t, e) => {
  let o = !1;
  return nn(t).forEach((n) => {
    tn(n) && on(n, e) && (o = !0);
  }), o;
}, Ht = (t) => de.some(() => ln(t, -Ge)), mt = (t) => {
  const e = t || window.event;
  return Ht(e.target) || e.touches.length > 1 ? !0 : (e.preventDefault && e.preventDefault(), !1);
}, an = (t) => {
  if (Fe === void 0) {
    const e = !!t && t.reserveScrollBarGap === !0, o = window.innerWidth - document.documentElement.clientWidth;
    if (e && o > 0) {
      const n = parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
      Fe = document.body.style.paddingRight, document.body.style.paddingRight = `${n + o}px`;
    }
  }
  De === void 0 && (De = document.body.style.overflow, document.body.style.overflow = "hidden");
}, rn = () => {
  Fe !== void 0 && (document.body.style.paddingRight = Fe, Fe = void 0), De !== void 0 && (document.body.style.overflow = De, De = void 0);
}, sn = (t) => t ? t.scrollHeight - t.scrollTop <= t.clientHeight : !1, un = (t, e) => (Ge = t.targetTouches[0].clientY - jt, Ht(t.target) ? !1 : e && e.scrollTop === 0 && Ge > 0 || sn(e) && Ge < 0 ? mt(t) : (t.stopPropagation(), !0)), dn = (t, e) => {
  if (!t) {
    console.error(
      "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
    );
    return;
  }
  if (de.some((n) => n.targetElement === t))
    return;
  const o = {
    targetElement: t,
    options: e || {}
  };
  de = [...de, o], Pt ? (t.ontouchstart = (n) => {
    n.targetTouches.length === 1 && (jt = n.targetTouches[0].clientY);
  }, t.ontouchmove = (n) => {
    n.targetTouches.length === 1 && un(n, t);
  }, Xe || (document.addEventListener("touchmove", mt, pt ? { passive: !1 } : void 0), Xe = !0)) : an(e);
}, cn = (t) => {
  if (!t) {
    console.error(
      "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
    );
    return;
  }
  de = de.filter((e) => e.targetElement !== t), Pt ? (t.ontouchstart = null, t.ontouchmove = null, Xe && de.length === 0 && (document.removeEventListener("touchmove", mt, pt ? { passive: !1 } : void 0), Xe = !1)) : de.length || rn();
};
function vn(t, e) {
  const { lockScrollEl: o, modelValueLocal: n } = e;
  let a;
  ee(o, (s) => {
    s && (a = s);
  }, { immediate: !0 }), ee(() => t.lockScroll, (s) => {
    s ? l() : r();
  }), Ae(() => {
    r();
  });
  function r() {
    a && cn(a);
  }
  function l() {
    n.value && t.lockScroll && a && dn(a, {
      reserveScrollBarGap: t.reserveScrollBarGap,
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
    disableBodyScroll: l
  };
}
function fn(t) {
  const e = x();
  function o(a) {
    var r;
    e.value = (r = t.zIndexFn) == null ? void 0 : r.call(t, { index: a <= -1 ? 0 : a });
  }
  function n() {
    e.value = void 0;
  }
  return {
    zIndex: e,
    refreshZIndex: o,
    resetZIndex: n
  };
}
const st = {
  beforeMount(t, { value: e }, { transition: o }) {
    t._vov = t.style.visibility === "hidden" ? "" : t.style.visibility, o && e ? o.beforeEnter(t) : Me(t, e);
  },
  mounted(t, { value: e }, { transition: o }) {
    o && e && o.enter(t);
  },
  updated(t, { value: e, oldValue: o }, { transition: n }) {
    !e != !o && (n ? e ? (n.beforeEnter(t), Me(t, !0), n.enter(t)) : n.leave(t, () => {
      Me(t, !1);
    }) : Me(t, e));
  },
  beforeUnmount(t, { value: e }) {
    Me(t, e);
  }
};
function Me(t, e) {
  t.style.visibility = e ? t._vov : "hidden";
}
const Et = (t) => {
  if (t instanceof MouseEvent) {
    const { clientX: e, clientY: o } = t;
    return { x: e, y: o };
  } else {
    const { clientX: e, clientY: o } = t.targetTouches[0];
    return { x: e, y: o };
  }
};
function pn(t) {
  if (!t)
    return !1;
  let e = !1;
  const o = {
    get passive() {
      return e = !0, !1;
    }
  };
  return t.addEventListener("x", Le, o), t.removeEventListener("x", Le), e;
}
function mn(t, {
  threshold: e = 0,
  onSwipeStart: o,
  onSwipe: n,
  onSwipeEnd: a,
  passive: r = !0
}) {
  const l = it({ x: 0, y: 0 }), s = it({ x: 0, y: 0 }), i = I(() => l.x - s.x), u = I(() => l.y - s.y), { max: m, abs: d } = Math, f = I(
    () => m(d(i.value), d(u.value)) >= e
  ), w = x(!1), S = I(() => f.value ? d(i.value) > d(u.value) ? i.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), G = (L, Y) => {
    l.x = L, l.y = Y;
  }, k = (L, Y) => {
    s.x = L, s.y = Y;
  };
  let y, V;
  function z(L) {
    y.capture && !y.passive && L.preventDefault();
    const { x: Y, y: Q } = Et(L);
    G(Y, Q), k(Y, Q), o?.(L), V = [
      ue(t, "mousemove", ne, y),
      ue(t, "touchmove", ne, y),
      ue(t, "mouseup", g, y),
      ue(t, "touchend", g, y),
      ue(t, "touchcancel", g, y)
    ];
  }
  function ne(L) {
    const { x: Y, y: Q } = Et(L);
    k(Y, Q), !w.value && f.value && (w.value = !0), w.value && n?.(L);
  }
  function g(L) {
    w.value && a?.(L, S.value), w.value = !1, V.forEach((Y) => Y());
  }
  let H = [];
  return we(() => {
    const L = pn(window?.document);
    r ? y = L ? { passive: !0 } : { capture: !1 } : y = L ? { passive: !1, capture: !0 } : { capture: !0 }, H = [
      ue(t, "mousedown", z, y),
      ue(t, "touchstart", z, y)
    ];
  }), {
    isSwiping: w,
    direction: S,
    coordsStart: l,
    coordsEnd: s,
    lengthX: i,
    lengthY: u,
    stop: () => {
      H.forEach((L) => L()), V.forEach((L) => L());
    }
  };
}
function hn(t, e) {
  const { vfmContentEl: o, modelValueLocal: n } = e, a = 0.1, r = 300, l = x(), s = I(() => {
    if (!(t.swipeToClose === void 0 || t.swipeToClose === "none"))
      return t.showSwipeBanner ? l.value : o.value;
  }), i = x(0), u = x(!0);
  let m = Le, d = !0, f, w = !1;
  const { lengthX: S, lengthY: G, direction: k, isSwiping: y } = mn(s, {
    threshold: t.threshold,
    onSwipeStart(g) {
      m = ue(document, "selectionchange", () => {
        var H;
        u.value = (H = window.getSelection()) == null ? void 0 : H.isCollapsed;
      }), f = (/* @__PURE__ */ new Date()).getTime(), w = ne(g?.target);
    },
    onSwipe() {
      var g, H, L, Y;
      if (w && u.value && k.value === t.swipeToClose) {
        if (k.value === "up") {
          const Q = Ue(Math.abs(G.value || 0), 0, ((g = s.value) == null ? void 0 : g.offsetHeight) || 0) - (t.threshold || 0);
          i.value = Q;
        } else if (k.value === "down") {
          const Q = Ue(Math.abs(G.value || 0), 0, ((H = s.value) == null ? void 0 : H.offsetHeight) || 0) - (t.threshold || 0);
          i.value = -Q;
        } else if (k.value === "right") {
          const Q = Ue(Math.abs(S.value || 0), 0, ((L = s.value) == null ? void 0 : L.offsetWidth) || 0) - (t.threshold || 0);
          i.value = -Q;
        } else if (k.value === "left") {
          const Q = Ue(Math.abs(S.value || 0), 0, ((Y = s.value) == null ? void 0 : Y.offsetWidth) || 0) - (t.threshold || 0);
          i.value = Q;
        }
      }
    },
    onSwipeEnd(g, H) {
      if (m(), !u.value) {
        u.value = !0;
        return;
      }
      const L = (/* @__PURE__ */ new Date()).getTime(), Y = H === t.swipeToClose, Q = (() => {
        var re, R;
        if (H === "up" || H === "down")
          return Math.abs(G?.value || 0) > a * (((re = s.value) == null ? void 0 : re.offsetHeight) || 0);
        if (H === "left" || H === "right")
          return Math.abs(S?.value || 0) > a * (((R = s.value) == null ? void 0 : R.offsetWidth) || 0);
      })(), ve = L - f <= r;
      if (d && w && Y && (Q || ve)) {
        n.value = !1;
        return;
      }
      i.value = 0;
    }
  }), V = I(() => {
    if (t.swipeToClose === "none")
      return;
    const g = (() => {
      switch (t.swipeToClose) {
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
      style: { transform: `${g}(${-i.value}px)` }
    };
  });
  ee(
    () => u.value,
    (g) => {
      g || (i.value = 0);
    }
  ), ee(
    () => n.value,
    (g) => {
      g && (i.value = 0);
    }
  ), ee(
    () => i.value,
    (g, H) => {
      switch (t.swipeToClose) {
        case "down":
        case "right":
          d = g < H;
          break;
        case "up":
        case "left":
          d = g > H;
          break;
      }
    }
  );
  function z(g) {
    t.preventNavigationGestures && g.preventDefault();
  }
  function ne(g) {
    const H = g?.tagName;
    if (!H || ["INPUT", "TEXTAREA"].includes(H))
      return !1;
    const L = (() => {
      switch (t.swipeToClose) {
        case "up":
          return g?.scrollTop + g?.clientHeight === g?.scrollHeight;
        case "left":
          return g?.scrollLeft + g?.clientWidth === g?.scrollWidth;
        case "down":
          return g?.scrollTop === 0;
        case "right":
          return g?.scrollLeft === 0;
        default:
          return !1;
      }
    })();
    return g === s.value ? L : L && ne(g?.parentElement);
  }
  return {
    vfmContentEl: o,
    swipeBannerEl: l,
    bindSwipe: V,
    onTouchStartSwipeBanner: z
  };
}
const Ut = /* @__PURE__ */ Symbol("vfm");
let he;
const bn = (t) => he = t, yn = {
  install: Le,
  modals: [],
  openedModals: [],
  openedModalOverlays: [],
  dynamicModals: [],
  modalsContainers: x([]),
  get: () => {
  },
  toggle: () => {
  },
  open: () => {
  },
  close: () => {
  },
  closeAll: () => Promise.allSettled([])
}, gn = () => Vt() && Dt(Ut, yn) || he;
function wn() {
  const t = je([]), e = je([]), o = je([]), n = je([]), a = x([]), r = We({
    install(l) {
      l.provide(Ut, r), l.config.globalProperties.$vfm = r;
    },
    modals: t,
    openedModals: e,
    openedModalOverlays: o,
    dynamicModals: n,
    modalsContainers: a,
    get(l) {
      return t.find((s) => {
        var i, u;
        return ((u = (i = xe(s)) == null ? void 0 : i.value.modalId) == null ? void 0 : u.value) === l;
      });
    },
    toggle(l, s) {
      var i;
      const u = r.get(l);
      return (i = xe(u)) == null ? void 0 : i.value.toggle(s);
    },
    open(l) {
      return r.toggle(l, !0);
    },
    close(l) {
      return r.toggle(l, !1);
    },
    closeAll() {
      return Promise.allSettled(
        e.reduce((l, s) => {
          const i = xe(s), u = i?.value.toggle(!1);
          return u && l.push(u), l;
        }, [])
      );
    }
  });
  return bn(r), r;
}
function xe(t) {
  var e;
  return (e = t?.exposed) == null ? void 0 : e.modalExposed;
}
const kn = E({ inheritAttrs: !1 }), Kt = /* @__PURE__ */ E({
  ...kn,
  __name: "VueFinalModal",
  props: Qo,
  emits: ["update:modelValue", "beforeOpen", "opened", "beforeClose", "closed", "clickOutside"],
  setup(t, { expose: e, emit: o }) {
    const n = t, a = o, r = Jt(), l = Vt(), { modals: s, openedModals: i, openedModalOverlays: u } = Ie(), m = x(), d = x(), { focus: f, blur: w } = en(n, { focusEl: m }), { zIndex: S, refreshZIndex: G, resetZIndex: k } = fn(n), { modelValueLocal: y } = Jo(n, a, { open: X, close: ie }), { enableBodyScroll: V, disableBodyScroll: z } = vn(n, {
      lockScrollEl: m,
      modelValueLocal: y
    });
    let ne = Le;
    const {
      visible: g,
      contentVisible: H,
      contentListeners: L,
      contentTransition: Y,
      overlayVisible: Q,
      overlayListeners: ve,
      overlayTransition: re,
      enterTransition: R,
      leaveTransition: p
    } = Yo(n, {
      modelValueLocal: y,
      onEntering() {
        ce(() => {
          z(), f();
        });
      },
      onEnter() {
        a("opened"), ne("opened");
      },
      onLeave() {
        Ve(i, l), k(), V(), a("closed"), ne("closed");
      }
    }), { onEsc: h, onMouseupRoot: C, onMousedown: O } = Xo(n, a, { vfmRootEl: m, vfmContentEl: d, visible: g, modelValueLocal: y }), {
      swipeBannerEl: A,
      bindSwipe: K,
      onTouchStartSwipeBanner: N
    } = hn(n, { vfmContentEl: d, modelValueLocal: y }), q = I(() => l ? i.indexOf(l) : -1);
    ee([() => n.zIndexFn, q], () => {
      g.value && G(q.value);
    }), we(() => {
      rt(s, l);
    }), n.modelValue && (y.value = !0);
    function X() {
      let _ = !1;
      return a("beforeOpen", { stop: () => _ = !0 }), _ ? !1 : (rt(i, l), rt(u, l), le(), R(), !0);
    }
    function ie() {
      let _ = !1;
      return a("beforeClose", { stop: () => _ = !0 }), _ ? !1 : (Ve(u, l), le(), w(), p(), !0);
    }
    function fe() {
      y.value = !1;
    }
    Ae(() => {
      V(), Ve(s, l), Ve(i, l), w(), le();
    });
    async function le() {
      await ce();
      const _ = u.filter((W) => {
        var J;
        const se = xe(W);
        return se?.value.overlayBehavior.value === "auto" && !((J = se?.value.hideOverlay) != null && J.value);
      });
      _.forEach((W, J) => {
        const se = xe(W);
        se != null && se.value && (se.value.overlayVisible.value = J === _.length - 1);
      });
    }
    const pe = nt(() => n.modalId), Ce = nt(() => n.hideOverlay), Se = nt(() => n.overlayBehavior), Ee = I(() => ({
      modalId: pe,
      hideOverlay: Ce,
      overlayBehavior: Se,
      overlayVisible: Q,
      toggle(_) {
        return new Promise((W) => {
          ne = Zo((se) => W(se));
          const J = typeof _ == "boolean" ? _ : !y.value;
          y.value = J;
        });
      }
    }));
    return e({
      modalExposed: Ee
    }), (_, W) => (c(), Z(eo, {
      to: _.teleportTo ? _.teleportTo : void 0,
      disabled: !_.teleportTo
    }, [
      _.displayDirective !== "if" || $(g) ? be((c(), v("div", $e({ key: 0 }, $(r), {
        ref_key: "vfmRootEl",
        ref: m,
        class: ["vfm vfm--fixed vfm--inset", { "vfm--prevent-none": _.background === "interactive" }],
        style: { zIndex: $(S) },
        role: "dialog",
        "aria-modal": "true",
        onKeydown: W[7] || (W[7] = to(() => $(h)(), ["esc"])),
        onMouseup: W[8] || (W[8] = Ne(() => $(C)(), ["self"])),
        onMousedown: W[9] || (W[9] = Ne((J) => $(O)(J), ["self"]))
      }), [
        Ce.value ? F("", !0) : (c(), Z(ye, $e({ key: 0 }, $(re), gt($(ve))), {
          default: U(() => [
            _.displayDirective !== "if" || $(Q) ? be((c(), v("div", {
              key: 0,
              class: T(["vfm__overlay vfm--overlay vfm--absolute vfm--inset vfm--prevent-none", _.overlayClass]),
              style: vt(_.overlayStyle),
              "aria-hidden": "true"
            }, null, 6)), [
              [Te, _.displayDirective !== "show" || $(Q)],
              [$(st), _.displayDirective !== "visible" || $(Q)]
            ]) : F("", !0)
          ]),
          _: 1
        }, 16)),
        D(ye, $e($(Y), gt($(L))), {
          default: U(() => [
            _.displayDirective !== "if" || $(H) ? be((c(), v("div", $e({
              key: 0,
              ref_key: "vfmContentEl",
              ref: d,
              class: ["vfm__content vfm--outline-none", [_.contentClass, { "vfm--prevent-auto": _.background === "interactive" }]],
              style: _.contentStyle,
              tabindex: "0"
            }, $(K), {
              onMousedown: W[6] || (W[6] = () => $(O)())
            }), [
              M(_.$slots, "default", _t(oo({ close: fe }))),
              _.showSwipeBanner ? (c(), v("div", {
                key: 0,
                ref_key: "swipeBannerEl",
                ref: A,
                class: "vfm-swipe-banner-container",
                onTouchstart: W[2] || (W[2] = (J) => $(N)(J))
              }, [
                M(_.$slots, "swipe-banner", {}, () => [
                  b("div", {
                    class: "vfm-swipe-banner-back",
                    onTouchstart: W[0] || (W[0] = (J) => _.swipeToClose === "left" && J.preventDefault())
                  }, null, 32),
                  b("div", {
                    class: "vfm-swipe-banner-forward",
                    onTouchstart: W[1] || (W[1] = (J) => _.swipeToClose === "right" && J.preventDefault())
                  }, null, 32)
                ])
              ], 544)) : !_.showSwipeBanner && _.preventNavigationGestures ? (c(), v("div", {
                key: 1,
                class: "vfm-swipe-banner-container",
                onTouchstart: W[5] || (W[5] = (J) => $(N)(J))
              }, [
                b("div", {
                  class: "vfm-swipe-banner-back",
                  onTouchstart: W[3] || (W[3] = (J) => _.swipeToClose === "left" && J.preventDefault())
                }, null, 32),
                b("div", {
                  class: "vfm-swipe-banner-forward",
                  onTouchstart: W[4] || (W[4] = (J) => _.swipeToClose === "right" && J.preventDefault())
                }, null, 32)
              ], 32)) : F("", !0)
            ], 16)), [
              [Te, _.displayDirective !== "show" || $(H)],
              [$(st), _.displayDirective !== "visible" || $(H)]
            ]) : F("", !0)
          ]),
          _: 3
        }, 16)
      ], 16)), [
        [Te, _.displayDirective !== "show" || $(g)],
        [$(st), _.displayDirective !== "visible" || $(g)]
      ]) : F("", !0)
    ], 8, ["to", "disabled"]));
  }
});
function Ie() {
  const t = gn();
  if (!t)
    throw new Error(
      `[Vue Final Modal]: getActiveVfm was called with no active Vfm. Did you forget to install vfm?
	const vfm = createVfm()
	app.use(vfm)
This will fail in production.`
    );
  return t;
}
function Bt(t, e = Kt) {
  const { component: o, slots: n, ...a } = t, r = typeof n > "u" ? {} : Object.fromEntries(Rt(n).map(([l, s]) => ft(s) ? [l, s] : Je(s) ? [l, {
    ...s,
    component: We(s.component)
  }] : [l, We(s)]));
  return {
    ...a,
    component: We(o || e),
    slots: r
  };
}
function $n(t) {
  const e = it({
    id: /* @__PURE__ */ Symbol("useModal"),
    modelValue: !!(t != null && t.defaultModelValue),
    resolveOpened: () => {
    },
    resolveClosed: () => {
    },
    attrs: {},
    ...Bt(t)
  });
  so(() => {
    e != null && e.keepAlive || s();
  }), e.modelValue === !0 && (he ? he?.dynamicModals.push(e) : ce(() => {
    const i = Ie();
    i?.dynamicModals.push(e);
  }));
  async function o() {
    let i;
    return he ? i = he : (await ce(), i = Ie()), e.modelValue ? Promise.resolve("[Vue Final Modal] modal is already opened.") : (s(), e.modelValue = !0, i.dynamicModals.push(e), new Promise((u) => {
      e.resolveOpened = () => u("opened");
    }));
  }
  function n() {
    return e.modelValue ? (e.modelValue = !1, new Promise((i) => {
      e.resolveClosed = () => i("closed");
    })) : Promise.resolve("[Vue Final Modal] modal is already closed.");
  }
  function a(i) {
    const { slots: u, ...m } = Bt(i, e.component);
    i.defaultModelValue !== void 0 && (e.defaultModelValue = i.defaultModelValue), i?.keepAlive !== void 0 && (e.keepAlive = i?.keepAlive), r(e, m), u && Rt(u).forEach(([d, f]) => {
      const w = e.slots[d];
      ft(w) ? e.slots[d] = f : Je(w) && Je(f) ? r(w, f) : e.slots[d] = f;
    });
  }
  function r(i, u) {
    u.component && (i.component = u.component), u.attrs && l(i.attrs, u.attrs);
  }
  function l(i, u) {
    return Object.entries(u).forEach(([m, d]) => {
      i[m] = d;
    }), i;
  }
  function s() {
    const i = Ie(), u = i.dynamicModals.indexOf(e);
    u !== -1 && i.dynamicModals.splice(u, 1);
  }
  return {
    options: e,
    open: o,
    close: n,
    patchOptions: a,
    destroy: s
  };
}
function Je(t) {
  return typeof t == "object" && t !== null ? "component" in t : !1;
}
const Tn = ["innerHTML"], Cn = /* @__PURE__ */ E({
  __name: "ModalsContainer",
  setup(t) {
    const { modalsContainers: e, dynamicModals: o } = Ie(), n = /* @__PURE__ */ Symbol("ModalsContainer"), a = I(() => {
      var s;
      return n === ((s = e.value) == null ? void 0 : s[0]);
    });
    e.value.push(n), Ae(() => {
      e.value = e.value.filter((s) => s !== n);
    });
    function r(s) {
      var i, u, m;
      (u = (i = o[s]) == null ? void 0 : i.resolveClosed) == null || u.call(i), (m = o[s]) != null && m.keepAlive || o.splice(s, 1);
    }
    function l(s) {
      var i, u;
      (u = (i = o[s]) == null ? void 0 : i.resolveOpened) == null || u.call(i);
    }
    return (s, i) => a.value ? (c(!0), v(te, { key: 0 }, oe($(o), (u, m) => (c(), Z(Ke(u.component), $e({
      key: u.id
    }, {
      displayDirective: u != null && u.keepAlive ? "show" : void 0,
      ...typeof u.attrs == "object" ? u.attrs : {}
    }, {
      modelValue: u.modelValue,
      "onUpdate:modelValue": (d) => u.modelValue = d,
      onClosed: () => r(m),
      onOpened: () => l(m)
    }), Oe({ _: 2 }, [
      oe(u.slots, (d, f) => ({
        name: f,
        fn: U(() => [
          $(ft)(d) ? (c(), v("div", {
            key: 0,
            innerHTML: d
          }, null, 8, Tn)) : $(Je)(d) ? (c(), Z(Ke(d.component), _t($e({ key: 1 }, d.attrs)), null, 16)) : (c(), Z(Ke(d), { key: 2 }))
        ])
      }))
    ]), 1040, ["modelValue", "onUpdate:modelValue", "onClosed", "onOpened"]))), 128)) : F("", !0);
  }
}), Wt = /* @__PURE__ */ E({
  __name: "Card",
  props: {
    styles: { default: "" },
    padding: { default: "p-4" },
    flat: { type: Boolean, default: !1 },
    boxed: { type: Boolean, default: !1 },
    border: { default: "border-border dark:border-none" }
  },
  setup(t) {
    return (e, o) => (c(), v("div", {
      class: T([
        e.styles,
        e.padding,
        e.border,
        { "shadow-sm": !e.flat && !e.styles.includes("shadow") },
        { "rounded-md": !e.boxed && !e.styles.includes("rounded") },
        "border bg-card"
      ])
    }, [
      M(e.$slots, "default")
    ], 2));
  }
}), ae = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, a] of e)
    o[n] = a;
  return o;
}, Sn = {}, En = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function Bn(t, e) {
  return c(), v("svg", En, e[0] || (e[0] = [
    b("path", { d: "M7 10l5 5 5-5z" }, null, -1)
  ]));
}
const Mt = /* @__PURE__ */ ae(Sn, [["render", Bn]]), Mn = { class: "text-xl font-medium" }, Vn = { class: "pt-4" }, _n = { key: 1 }, Dn = { class: "p-2" }, dr = /* @__PURE__ */ E({
  __name: "Accordion",
  props: /* @__PURE__ */ j({
    title: {},
    variant: { default: "card" }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const e = P(t, "modelValue");
    return (o, n) => o.variant === "card" ? (c(), Z(Wt, { key: 0 }, {
      default: U(() => [
        b("div", {
          onClick: n[0] || (n[0] = (a) => e.value = !e.value),
          class: "flex items-center justify-between gap-2 cursor-pointer"
        }, [
          b("h3", Mn, B(o.title), 1),
          D(ye, { name: "rotate" }, {
            default: U(() => [
              b("div", {
                class: T({ rotated: e.value, "not-rotated": !e.value })
              }, [
                M(o.$slots, "chevron", {}, () => [
                  D(Mt, { class: "w-5 h-5" })
                ])
              ], 2)
            ]),
            _: 3
          })
        ]),
        be(b("div", Vn, [
          M(o.$slots, "default")
        ], 512), [
          [Te, e.value]
        ])
      ]),
      _: 3
    })) : o.variant === "minimal" ? (c(), v("div", _n, [
      b("div", {
        onClick: n[1] || (n[1] = (a) => e.value = !e.value),
        class: "p-2 border-b-2 border-base-text flex items-center justify-between gap-2 cursor-pointer"
      }, [
        b("h3", null, B(o.title), 1),
        D(ye, { name: "rotate" }, {
          default: U(() => [
            b("div", {
              class: T({ rotated: e.value, "not-rotated": !e.value })
            }, [
              M(o.$slots, "chevron", {}, () => [
                D(Mt, { class: "w-4 h-4" })
              ])
            ], 2)
          ]),
          _: 3
        })
      ]),
      be(b("div", Dn, [
        M(o.$slots, "default")
      ], 512), [
        [Te, e.value]
      ])
    ])) : F("", !0);
  }
}), Fn = {}, xn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function In(t, e) {
  return c(), v("svg", xn, e[0] || (e[0] = [
    b("path", { d: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" }, null, -1)
  ]));
}
const ht = /* @__PURE__ */ ae(Fn, [["render", In]]), Nn = {}, On = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function Ln(t, e) {
  return c(), v("svg", On, e[0] || (e[0] = [
    b("path", { d: "M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" }, null, -1)
  ]));
}
const zn = /* @__PURE__ */ ae(Nn, [["render", Ln]]), An = {}, Rn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function Pn(t, e) {
  return c(), v("svg", Rn, e[0] || (e[0] = [
    b("path", { d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" }, null, -1)
  ]));
}
const jn = /* @__PURE__ */ ae(An, [["render", Pn]]), Hn = {}, Un = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function Kn(t, e) {
  return c(), v("svg", Un, e[0] || (e[0] = [
    b("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, null, -1)
  ]));
}
const bt = /* @__PURE__ */ ae(Hn, [["render", Kn]]), Gt = (t = 800) => {
  const e = x(innerWidth < t), o = () => {
    e.value = innerWidth < t;
  };
  return we(() => addEventListener("resize", o)), Ft(() => removeEventListener("resize", o)), e;
}, qt = () => ({ readableFileSize: (o) => {
  const n = ["Bytes", "KB", "MB", "GB", "TB"], a = Math.floor(Math.log(o) / Math.log(1024));
  return `${Math.round(o / Math.pow(1024, a))} ${n[a]}`;
}, formatFiles: (o) => o?.map((n) => "uuid" in n && n.uuid ? n : {
  name: n.name,
  size: n.size,
  uuid: xt(),
  preview: URL.createObjectURL(n),
  type: n.type?.split("/")[0] || ""
}) || [] }), Wn = (t, e, o) => {
  if (e < 0 || e >= t.length || o < 0 || o >= t.length)
    throw new Error("Invalid indices");
  const [n] = t.splice(e, 1);
  return t.splice(o, 0, n), t;
}, Gn = (t) => Math.floor(t) !== t && t.toString().split(".")[1]?.length || 0, qn = (t, e) => t ? t.split(",").map((n) => n.trim().toLowerCase()).some((n) => {
  if (n.startsWith("."))
    return e.name.toLowerCase().endsWith(n);
  if (n.endsWith("/*")) {
    const a = n.split("/")[0];
    return e.type.startsWith(a + "/");
  }
  return e.type === n;
}) : !0, Zn = { class: "flex justify-center gap-2 w-full p-4" }, Qn = ["onMouseenter"], Yn = ["onClick"], Xn = ["src", "alt"], Jn = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-secondary-text bg-card rounded-md"
}, el = ["onClick"], tl = /* @__PURE__ */ E({
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
  setup(t) {
    const e = t, o = P(t, "files"), n = P(t, "selectedIdx"), a = Gt(), { formatFiles: r } = qt(), l = x(-1), s = x(r(o.value)), i = (d) => {
      o.value = o.value.filter((f, w) => w !== d), n.value > d && (n.value -= 1);
    }, u = ({ moved: { oldIndex: d, newIndex: f } }) => {
      o.value = Wn(o.value, d, f), n.value === d ? n.value = f : n.value > d && n.value <= f ? n.value-- : n.value < d && n.value >= f && n.value++;
    }, m = I(() => e.size === "lg" ? "w-16 h-16" : "w-14 h-14");
    return ee(o, () => s.value = r(o.value)), (d, f) => (c(), v("div", Zn, [
      M(d.$slots, "additional-items-before"),
      D($(uo), {
        modelValue: s.value,
        "onUpdate:modelValue": f[1] || (f[1] = (w) => s.value = w),
        "item-key": "uuid",
        "swap-threshold": 0.65,
        animation: 200,
        class: "flex gap-2",
        onChange: u
      }, {
        item: U(({ element: w, index: S }) => [
          b("div", {
            class: T(`relative border-secondary rounded-md ${m.value} ${n.value === S ? "border-3 bg-secondary" : ""}`),
            onMouseenter: (G) => l.value = S,
            onMouseleave: f[0] || (f[0] = (G) => l.value = -1)
          }, [
            b("button", {
              class: "w-full h-full",
              onClick: (G) => n.value = S
            }, [
              w.type === "image" ? (c(), v("img", {
                key: 0,
                src: w.preview,
                alt: w.name,
                class: "w-full h-full object-cover rounded-md"
              }, null, 8, Xn)) : (c(), v("span", Jn, [
                w.type === "audio" ? M(d.$slots, "audio-icon", { key: 0 }, () => [
                  D(zn, { class: "w-5 h-5" })
                ]) : w.type === "video" ? M(d.$slots, "video-icon", { key: 1 }, () => [
                  D(jn, { class: "w-5 h-5" })
                ]) : M(d.$slots, "file-icon", { key: 2 }, () => [
                  D(ht, { class: "w-5 h-5" })
                ])
              ]))
            ], 8, Yn),
            l.value === S || $(a) ? (c(), v("button", {
              key: 0,
              onClick: (G) => i(S),
              class: "absolute cursor-pointer top-0 right-0 text-secondary-text bg-card/80 rounded-full w-5 h-5 flex justify-center items-center"
            }, [
              M(d.$slots, "remove-icon", {}, () => [
                D(bt, { class: "w-3 h-3" })
              ])
            ], 8, el)) : F("", !0)
          ], 42, Qn)
        ]),
        _: 3
      }, 8, ["modelValue"]),
      M(d.$slots, "additional-items-after")
    ]));
  }
}), ol = ["src"], cr = /* @__PURE__ */ E({
  __name: "Avatar",
  props: {
    src: {},
    styles: { default: "" }
  },
  setup(t) {
    return (e, o) => (c(), v("img", {
      src: e.src,
      alt: "avatar",
      class: T(`rounded-full ${e.styles}`)
    }, null, 10, ol));
  }
}), nl = { class: "flex items-center" }, ll = ["src", "alt"], vr = /* @__PURE__ */ E({
  __name: "AvatarGroup",
  props: {
    avatars: {},
    width: { default: "w-6" },
    overlap: { default: 12 }
  },
  setup(t) {
    return (e, o) => (c(), v("div", nl, [
      (c(!0), v(te, null, oe(e.avatars, (n, a) => (c(), v("img", {
        key: a,
        src: n,
        alt: `avatar ${a + 1}`,
        class: T(`${e.width} rounded-full relative`),
        style: vt({ marginLeft: a === 0 ? "0" : `-${e.overlap}px` })
      }, null, 14, ll))), 128))
    ]));
  }
}), fr = /* @__PURE__ */ E({
  __name: "Badge",
  props: {
    content: {},
    color: { default: "primary" },
    size: { default: "xs" },
    styles: {}
  },
  setup(t) {
    return (e, o) => (c(), v("div", {
      class: T(`text-${e.size} text-black font-bold bg-${e.color} rounded-xl px-1 ${e.styles} min-w-3 min-h-3`)
    }, [
      M(e.$slots, "default", {}, () => [
        tt(B(e.content), 1)
      ])
    ], 2));
  }
}), al = ["disabled", "type"], rl = /* @__PURE__ */ E({
  __name: "Button",
  props: {
    color: { default: "primary" },
    variant: { default: "filled" },
    styles: { default: "" },
    disabled: { type: Boolean, default: !1 },
    type: { default: "button" },
    href: { default: "" },
    hoverEffects: { type: Boolean, default: !0 },
    textColor: { default: "" },
    padding: { default: "px-6 py-2" }
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const o = t, n = e, a = x(!1), r = (i) => {
      o.href && window.open(o.href), n("click", i);
    }, l = I(() => o.color === "base" ? "secondary-text" : o.color), s = I(() => {
      const i = [
        "btn",
        o.styles,
        o.padding,
        { pressed: a },
        { "disabled-btn": o.disabled },
        { "cursor-pointer": o.hoverEffects }
      ];
      switch (o.variant) {
        case "light":
          i.push(`bg-${l.value}/20 text-${l.value}`), o.hoverEffects && i.push(`hover:bg-${l.value}/35`);
          break;
        case "outline":
          i.push(`text-${o.textColor ?? l.value} border-${l.value} border-2`), o.hoverEffects && i.push(`hover:bg-${l.value}/10`);
          break;
        case "subtle":
          i.push(`text-${o.textColor ?? l.value} bg-transparent`), o.hoverEffects && i.push(`hover:bg-${l.value}/10`);
          break;
        case "dashed":
          i.push(`text-${o.textColor ?? l.value} border-${l.value} border-2 border-dashed`), o.hoverEffects && i.push(`hover:bg-${l.value}/10`);
          break;
        default:
          i.push(`text-${o.textColor ?? "black"} bg-${l.value}`);
          break;
      }
      return i;
    });
    return (i, u) => (c(), v("button", {
      onClick: r,
      onMousedown: u[0] || (u[0] = (m) => a.value = !0),
      onMouseup: u[1] || (u[1] = (m) => a.value = !1),
      class: T(s.value),
      disabled: i.disabled,
      type: i.type
    }, [
      M(i.$slots, "default")
    ], 42, al));
  }
}), sl = {}, il = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function ul(t, e) {
  return c(), v("svg", il, e[0] || (e[0] = [
    b("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }, null, -1)
  ]));
}
const Zt = /* @__PURE__ */ ae(sl, [["render", ul]]), dl = { class: "flex items-center gap-2" }, cl = ["for"], vl = {
  key: 0,
  class: "text-error text-sm"
}, pr = /* @__PURE__ */ E({
  __name: "Checkbox",
  props: /* @__PURE__ */ j({
    name: {},
    error: {}
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ j(["toggle"], ["update:modelValue"]),
  setup(t, { emit: e }) {
    const o = P(t, "modelValue"), n = e, a = () => {
      o.value = !o.value, n("toggle", o.value);
    };
    return (r, l) => (c(), v("div", null, [
      b("div", dl, [
        b("button", {
          onClick: l[0] || (l[0] = (s) => a()),
          type: "button",
          class: T(["rounded-xs cursor-pointer border-secondary border-2 w-4 h-4 flex items-center justify-center text-black", { "bg-secondary": o.value, "hover:bg-secondary/30": !o.value }])
        }, [
          o.value ? (c(), Z(Zt, {
            key: 0,
            class: "w-3 h-3"
          })) : F("", !0)
        ], 2),
        b("label", { for: r.name }, [
          M(r.$slots, "default")
        ], 8, cl)
      ]),
      r.error ? (c(), v("p", vl, B(r.error), 1)) : F("", !0)
    ]));
  }
}), mr = /* @__PURE__ */ E({
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
  setup(t, { emit: e }) {
    const o = t, n = e, a = P(t, "modelValue"), r = I(() => `${o.styles} py-1 px-3 duration-100 text-center border-2 rounded-${o.rounded} text-${o.size} text-${o.color} border-${o.color} hover:bg-${o.color}/10`), l = I(() => `${o.styles} py-1 px-3 duration-100 text-center border-2 rounded-${o.rounded} text-${o.size} bg-${o.color} border-${o.color} text-black`);
    return (s, i) => (c(), v("button", {
      onClick: i[0] || (i[0] = (u) => n("select")),
      class: T(a.value ? l.value : r.value)
    }, [
      M(s.$slots, "default")
    ], 2));
  }
});
function fl(t) {
  return typeof t == "object" && t !== null && "prefix" in t && "iconName" in t && "icon" in t;
}
const Pe = /* @__PURE__ */ E({
  __name: "TribeIcon",
  props: {
    icon: {},
    size: {}
  },
  setup(t) {
    const e = t, o = I(() => {
      const n = {
        "2xs": "w-2 h-2",
        xs: "w-3 h-3",
        sm: "w-4 h-4",
        lg: "w-5 h-5",
        xl: "w-6 h-6",
        "2xl": "w-8 h-8",
        "1x": "w-4 h-4",
        "2x": "w-8 h-8",
        "3x": "w-12 h-12",
        "4x": "w-16 h-16",
        "5x": "w-20 h-20"
      };
      return e.size ? n[e.size] ?? "w-4 h-4" : "w-4 h-4";
    });
    return (n, a) => $(fl)(n.icon) ? (c(), Z($(mo), {
      key: 0,
      icon: n.icon,
      size: n.size
    }, null, 8, ["icon", "size"])) : (c(), Z(Ke(n.icon), {
      key: 1,
      class: T(o.value)
    }, null, 8, ["class"]));
  }
}), ze = /* @__PURE__ */ E({
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
    textColor: { default: "" },
    padding: { default: "p-0" }
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const o = t, n = e, a = I(() => {
      switch (o.size) {
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
    return (r, l) => (c(), Z(rl, {
      styles: `${r.styles} ${a.value} flex justify-center items-center`,
      padding: r.padding,
      href: r.href,
      type: r.type,
      color: r.color,
      disabled: r.disabled,
      variant: r.variant,
      "hover-effects": r.hoverEffects,
      "text-color": r.textColor,
      onClick: l[0] || (l[0] = (s) => n("click", s))
    }, {
      default: U(() => [
        D(Pe, {
          size: r.size,
          icon: r.icon
        }, null, 8, ["size", "icon"])
      ]),
      _: 1
    }, 8, ["styles", "padding", "href", "type", "color", "disabled", "variant", "hover-effects", "text-color"]));
  }
}), pl = /* @__PURE__ */ E({
  __name: "HoverBox",
  props: {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const e = P(t, "modelValue");
    return (o, n) => (c(), v("div", {
      onMouseenter: n[0] || (n[0] = (a) => e.value = !0),
      onMouseleave: n[1] || (n[1] = (a) => e.value = !1)
    }, [
      M(o.$slots, "default")
    ], 32));
  }
}), ml = {
  key: 0,
  class: "p-2 absolute top-0 right-0 text-sm"
}, hr = /* @__PURE__ */ E({
  __name: "CodeSnippet",
  props: {
    snippet: {},
    allowCopy: { type: Boolean },
    styles: {}
  },
  setup(t) {
    const e = t, o = x(!1), { copy: n } = io(), a = async () => {
      e.snippet && await n(e.snippet);
    };
    return (r, l) => (c(), Z(pl, {
      modelValue: o.value,
      "onUpdate:modelValue": l[1] || (l[1] = (s) => o.value = s)
    }, {
      default: U(() => [
        b("div", {
          class: T([r.styles, "p-2 rounded-lg bg-base whitespace-pre-wrap text-sm font-mono relative overflow-auto"])
        }, [
          b("p", null, B(r.snippet), 1),
          r.allowCopy && o.value ? (c(), v("div", ml, [
            D(ze, {
              icon: $(co),
              color: "card",
              onClick: l[0] || (l[0] = (s) => a())
            }, null, 8, ["icon"])
          ])) : F("", !0)
        ], 2)
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), hl = ["for"], bl = {
  key: 0,
  class: "flex justify-center items-center w-10 rounded-l-md"
}, yl = { key: 0 }, gl = { key: 1 }, wl = {
  key: 2,
  class: "text-secondary-text"
}, kl = ["name", "type", "placeholder", "value", "disabled"], $l = {
  key: 0,
  class: "text-error text-sm"
}, Tl = {
  key: 1,
  class: "text-success text-sm"
}, ot = /* @__PURE__ */ E({
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
  setup(t, { emit: e }) {
    const o = t, n = e, a = P(t, "modelValue"), r = P(t, "input"), l = x(!1), s = I(
      () => o.variant === "filled" ? `bg-${o.color}` : "bg-transparent border border-border"
    ), i = (d) => {
      l.value = !0, n("input", d);
    }, u = (d) => {
      l.value = !1, n("blur", d);
    }, m = (d) => {
      const f = d.target;
      a.value = f.value, n("input", d);
    };
    return (d, f) => (c(), v("div", null, [
      b("label", {
        for: d.name,
        class: T(d.labelStyles)
      }, B(d.label), 11, hl),
      b("div", {
        class: T([
          "rounded-lg flex items-center duration-300",
          s.value,
          d.styles,
          {
            error: d.error,
            success: d.success,
            selected: l.value,
            "min-h-10": d.size !== "sm",
            "min-h-8": d.size === "sm"
          }
        ])
      }, [
        d.icon ? (c(), v("div", bl, [
          D(Pe, {
            icon: d.icon,
            size: d.size,
            class: "text-secondary-text"
          }, null, 8, ["icon", "size"])
        ])) : F("", !0),
        b("div", {
          class: T(["flex-grow w-full flex items-center gap-1 flex-wrap p-2", { "pl-0": d.icon }])
        }, [
          M(d.$slots, "left-section"),
          d.disabled ? (c(), v("div", {
            key: 0,
            class: T([{ "pl-0": d.icon, "text-sm": d.size === "sm" }, "flex-grow overflow-hidden whitespace-nowrap"])
          }, [
            a.value ? (c(), v("span", yl, B(a.value), 1)) : d.value ? (c(), v("span", gl, B(d.value), 1)) : d.placeholder ? (c(), v("span", wl, B(d.placeholder), 1)) : F("", !0)
          ], 2)) : (c(), v("input", {
            key: 1,
            ref_key: "inputElement",
            ref: r,
            name: d.name,
            type: d.type,
            placeholder: d.placeholder,
            value: a.value ?? d.value,
            disabled: d.disabled,
            onInput: m,
            onFocus: i,
            onBlur: u,
            class: T([{ "placeholder:text-sm": d.size === "sm" }, "p-0 flex-grow border-none outline-none rounded-lg bg-transparent placeholder:text-secondary-text"])
          }, null, 42, kl))
        ], 2),
        M(d.$slots, "right-section")
      ], 2),
      d.error && typeof d.error != "boolean" ? (c(), v("p", $l, B(d.error), 1)) : d.success && typeof d.error != "boolean" ? (c(), v("p", Tl, B(d.success), 1)) : F("", !0)
    ]));
  }
}), br = /* @__PURE__ */ E({
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
  setup(t) {
    const e = t, o = P(t, "modelValue"), n = (r) => {
      const l = r.target;
      let s = parseFloat(l.value.replace(/[^\d.-]/g, ""));
      Gn(s) > 0 && (s = (Math.round(s * 100) / 100).toFixed(2)), o.value = s;
    }, a = I(() => {
      if (o.value)
        return `${e.currencySymbol}${o.value}`;
    });
    return (r, l) => (c(), Z(ot, {
      label: r.label,
      value: a.value,
      "on-input": n,
      placeholder: r.currencySymbol,
      size: r.size,
      color: r.color,
      variant: r.variant
    }, null, 8, ["label", "value", "placeholder", "size", "color", "variant"]));
  }
}), et = (t) => {
  const e = navigator.language || "en-US", o = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return new Intl.DateTimeFormat(e, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: o
  }).format(t);
}, Cl = (t) => {
  const e = navigator.language || "en-US", o = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return new Intl.DateTimeFormat(e, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
    timeZone: o
  }).format(t);
}, Sl = (t) => `${et(t)} ${Cl(t)}`, El = (t) => `${et(t[0])} - ${et(t[1])}`, Bl = { class: "font-medium" }, Ml = {
  key: 0,
  class: "text-error text-sm"
}, yr = /* @__PURE__ */ E({
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
  setup(t) {
    const e = t, o = P(t, "modelValue"), n = x(null), a = I(() => e.range ? (r) => El([r[0], r[1]]) : e.includeTime ? (r) => Sl(r) : (r) => et(r));
    return (r, l) => (c(), v("div", {
      class: T(r.styles)
    }, [
      b("label", Bl, B(r.label), 1),
      D($(ho), {
        modelValue: o.value,
        "onUpdate:modelValue": l[0] || (l[0] = (s) => o.value = s),
        ref_key: "dp",
        ref: n,
        format: a.value,
        disabled: r.disabled,
        "auto-apply": "",
        "enable-time-picker": r.includeTime,
        range: r.range,
        "min-date": r.minDate,
        "max-date": r.maxDate
      }, {
        "dp-input": U(({ value: s }) => [
          D(ot, {
            placeholder: r.placeholder,
            value: s,
            icon: $(vo),
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
      r.error ? (c(), v("p", Ml, B(r.error), 1)) : F("", !0)
    ], 2));
  }
}), Vl = /* @__PURE__ */ E({
  __name: "Dropzone",
  props: {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ j(["drop"], ["update:modelValue"]),
  setup(t, { emit: e }) {
    const o = e, n = P(t, "modelValue"), a = (r) => {
      n.value = !1, o("drop", r);
    };
    return (r, l) => (c(), v("div", {
      onDragover: l[0] || (l[0] = Ne((s) => n.value = !0, ["prevent"])),
      onDragleave: l[1] || (l[1] = (s) => n.value = !1),
      onDrop: Ne(a, ["prevent"])
    }, [
      M(r.$slots, "default", { isDragOver: n.value })
    ], 32));
  }
}), _l = {}, Dl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function Fl(t, e) {
  return c(), v("svg", Dl, e[0] || (e[0] = [
    b("path", { d: "M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" }, null, -1)
  ]));
}
const xl = /* @__PURE__ */ ae(_l, [["render", Fl]]), Il = ["multiple", "accept"], Qt = /* @__PURE__ */ E({
  __name: "FileButton",
  props: {
    multiple: { type: Boolean, default: !0 },
    disabled: { type: Boolean },
    accept: {}
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const o = t, n = e, a = x(null), r = () => {
      !o.disabled && a.value && a.value.click();
    };
    return (l, s) => (c(), v("div", null, [
      b("input", {
        type: "file",
        ref_key: "fileInput",
        ref: a,
        onChange: s[0] || (s[0] = (i) => n("change", i)),
        multiple: l.multiple,
        accept: l.accept,
        hidden: ""
      }, null, 40, Il),
      b("div", { onClick: r }, [
        M(l.$slots, "default")
      ])
    ]));
  }
}), Nl = {}, Ol = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function Ll(t, e) {
  return c(), v("svg", Ol, e[0] || (e[0] = [
    b("path", { d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" }, null, -1)
  ]));
}
const zl = /* @__PURE__ */ ae(Nl, [["render", Ll]]), Al = { class: "flex flex-col gap-2 text-sm" }, Rl = { class: "flex gap-2 items-center" }, Pl = { key: 0 }, jl = {
  key: 1,
  class: "text-xl"
}, Hl = {
  key: 2,
  class: "text-sm"
}, Ul = /* @__PURE__ */ E({
  __name: "FileList",
  props: {
    files: {},
    showDownload: { type: Boolean },
    showDelete: { type: Boolean }
  },
  emits: ["download", "delete"],
  setup(t, { emit: e }) {
    const o = e;
    return (n, a) => (c(), v("div", Al, [
      (c(!0), v(te, null, oe(n.files, (r) => (c(), v("div", Rl, [
        n.showDownload ? (c(), v("div", Pl, [
          D(ze, {
            icon: zl,
            onClick: (l) => o("download", r),
            variant: "light",
            color: "secondary"
          }, null, 8, ["onClick"])
        ])) : (c(), v("div", jl, [
          M(n.$slots, "file-icon", {}, () => [
            D(ht, { class: "w-5 h-5" })
          ])
        ])),
        b("p", null, B(r.name), 1),
        a[0] || (a[0] = b("div", { class: "flex-grow" }, null, -1)),
        n.showDelete ? (c(), v("div", Hl, [
          D(ze, {
            icon: bt,
            onClick: (l) => o("delete", r),
            color: "error",
            variant: "light",
            size: "sm"
          }, null, 8, ["onClick"])
        ])) : F("", !0)
      ]))), 256))
    ]));
  }
}), Kl = {
  key: 0,
  class: "font-medium mb-1"
}, Wl = { key: 1 }, Gl = {
  key: 0,
  class: "mb-2"
}, ql = { class: "font-medium" }, Zl = {
  key: 0,
  class: "text-error text-sm mt-1"
}, Ql = /* @__PURE__ */ E({
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
  setup(t) {
    const e = t, o = P(t, "modelValue"), n = (s) => {
      if (!s) return;
      const u = Array.from(s).filter((d) => qn(e.accept, d)), m = e.limit ? e.limit - o.value.length : u.length;
      e.limit && u.length > e.limit ? o.value.push(...u.slice(0, m)) : o.value.push(...u.slice(0, m));
    }, a = (s) => {
      o.value = o.value.filter((i) => i !== s);
    }, r = (s) => {
      n(s.dataTransfer?.files ?? null);
    }, l = (s) => {
      const i = s.target;
      n(i.files);
    };
    return (s, i) => (c(), v("div", null, [
      s.label ? (c(), v("p", Kl, B(s.label), 1)) : F("", !0),
      (s.limit ? !s.disabled && o.value.length < s.limit : !s.disabled) ? (c(), v("div", Wl, [
        D(Qt, {
          onChange: l,
          accept: s.accept
        }, {
          default: U(() => [
            D(Vl, { onDrop: r }, {
              default: U(({ isDragOver: u }) => [
                b("div", {
                  class: T(["cursor-pointer duration-300 text-center border-2 border-dashed py-6 px-4 rounded-lg", {
                    "bg-secondary/30": u,
                    "text-secondary border-secondary": !s.error,
                    "text-error border-error": s.error
                  }])
                }, [
                  s.withIcon ? (c(), v("div", Gl, [
                    M(s.$slots, "upload-icon", {}, () => [
                      D(xl, { class: "w-5 h-5 mx-auto" })
                    ])
                  ])) : F("", !0),
                  b("p", ql, B(s.dropText), 1)
                ], 2)
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["accept"]),
        s.error ? (c(), v("p", Zl, B(s.error), 1)) : F("", !0)
      ])) : F("", !0),
      o.value.length > 0 && s.showFileList ? (c(), v("div", {
        key: 2,
        class: T({ "mt-4": !s.disabled })
      }, [
        D(Ul, {
          files: o.value,
          "show-delete": !s.disabled,
          onDelete: a
        }, null, 8, ["files", "show-delete"])
      ], 2)) : F("", !0)
    ]));
  }
}), Yt = () => {
  const t = x(!1), e = x(null), o = () => t.value = !0, n = () => t.value = !1, a = (r) => {
    e.value && !e.value.contains(r.target) && n();
  };
  return we(() => {
    document.addEventListener("mousedown", a);
  }), Ae(() => {
    document.removeEventListener("mousedown", a);
  }), { dropdownOpen: t, dropdownContainer: e, open: o, close: n };
}, Yl = ["onClick", "onMouseover"], Xl = { key: 1 }, Jl = {
  key: 0,
  class: "text-xs text-secondary-text"
}, ea = /* @__PURE__ */ E({
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
  setup(t, { emit: e }) {
    const o = t, n = e, a = Re(), r = x(-1), l = x("top-full"), s = x(null), i = (f) => {
      n("select", f);
    }, u = () => {
      if (!o.container) return;
      const f = o.container.getBoundingClientRect(), w = window.innerHeight || document.documentElement.clientHeight;
      l.value = f.bottom + 150 > w ? "bottom-full" : "top-full";
    }, m = () => {
      l.value = "top-full";
    }, d = async (f) => {
      if (!o.options || o.options.length === 0) return;
      r.value += f, r.value < 0 ? r.value = o.options.length - 1 : r.value >= o.options.length && (r.value = 0), await ce();
      const S = s.value?.querySelectorAll("div > div")?.[r.value];
      S && S.scrollIntoView({ block: "nearest", behavior: "smooth" });
    };
    return lt("ArrowDown", (f) => {
      o.open && o.options && o.options.length > 0 && (f.preventDefault(), d(1));
    }), lt("ArrowUp", (f) => {
      o.open && o.options && o.options.length > 0 && (f.preventDefault(), d(-1));
    }), lt("Enter", (f) => {
      o.open && o.options && o.options.length > 0 ? (f.preventDefault(), i(o.options[r.value])) : o.acceptsEmptySelection && (f.preventDefault(), i());
    }), ee(() => o.open, () => {
      o.open || (r.value = -1);
    }), (f, w) => (c(), Z(ye, {
      name: l.value === "top-full" ? "slide-down" : "slide-up",
      onBeforeEnter: u,
      onAfterLeave: m
    }, {
      default: U(() => [
        f.open && f.options && f.options.length > 0 ? (c(), v("div", {
          key: 0,
          ref_key: "optionsContainer",
          ref: s,
          class: T([
            "rounded-md bg-dropdown text-dropdown-text absolute overflow-auto max-h-64 flex flex-col cursor-pointer z-50",
            f.width,
            f.direction === "right" ? "right-0" : "left-0",
            l.value
          ])
        }, [
          (c(!0), v(te, null, oe(f.options, (S, G) => (c(), v("div", {
            key: f.trackBy ? S[f.trackBy] : S,
            onClick: (k) => i(S),
            onMouseover: (k) => r.value = G,
            class: T(["text-md py-2 px-6 rounded-md text-left", { "bg-dropdown-select": r.value === G }])
          }, [
            $(a).option ? M(f.$slots, "option", {
              key: 0,
              option: S
            }, void 0, !0) : (c(), v("div", Xl, [
              tt(B(f.optionLabel ? S[f.optionLabel] : S) + " ", 1),
              f.optionDescription && S[f.optionDescription] ? (c(), v("div", Jl, B(S[f.optionDescription]), 1)) : F("", !0)
            ]))
          ], 42, Yl))), 128))
        ], 2)) : F("", !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), yt = /* @__PURE__ */ ae(ea, [["__scopeId", "data-v-5cd7ada7"]]), gr = /* @__PURE__ */ E({
  __name: "DropdownMenu",
  props: {
    options: {},
    label: { default: "label" },
    trackBy: { default: "value" },
    direction: { default: "left" }
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const o = e, n = Re(), { dropdownOpen: a, dropdownContainer: r } = Yt(), l = (s) => {
      a.value = !1, o("select", s);
    };
    return (s, i) => (c(), v("div", {
      class: "relative",
      ref_key: "dropdownContainer",
      ref: r
    }, [
      b("div", {
        onClick: i[0] || (i[0] = (u) => a.value = !$(a))
      }, [
        M(s.$slots, "trigger")
      ]),
      D(yt, {
        container: $(r),
        options: s.options,
        open: $(a),
        "option-label": s.label,
        "track-by": s.trackBy,
        "accepts-empty-selection": "",
        onSelect: l,
        width: "w-64",
        direction: s.direction
      }, Oe({ _: 2 }, [
        $(n).option ? {
          name: "option",
          fn: U(({ option: u }) => [
            M(s.$slots, "option", { option: u })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["container", "options", "open", "option-label", "track-by", "direction"])
    ], 512));
  }
}), ta = { class: "flex items-center justify-center" }, oa = {
  key: 0,
  class: "text-center font-medium mt-2"
}, na = /* @__PURE__ */ E({
  __name: "Loader",
  props: {
    label: {}
  },
  setup(t) {
    return (e, o) => (c(), v("div", ta, [
      b("div", null, [
        o[0] || (o[0] = b("div", { class: "spinner border-4 border-base border-t-primary" }, null, -1)),
        e.label ? (c(), v("p", oa, B(e.label), 1)) : F("", !0)
      ])
    ]));
  }
}), wr = /* @__PURE__ */ ae(na, [["__scopeId", "data-v-50892209"]]), la = { class: "flex items-center justify-center" }, aa = { key: 0 }, ra = ["src", "alt"], sa = { key: 1 }, ia = ["src"], ua = { key: 2 }, da = ["src"], ca = {
  key: 3,
  class: "text-center"
}, va = /* @__PURE__ */ E({
  __name: "MediaCarousel",
  props: /* @__PURE__ */ j({
    files: {},
    maxMediaHeight: { default: "max-h-72" }
  }, {
    selectedIdx: { default: 0 },
    selectedIdxModifiers: {}
  }),
  emits: ["update:selectedIdx"],
  setup(t) {
    const e = P(t, "selectedIdx"), o = Gt(), n = () => {
      const a = document.querySelector("swiper-container")?.swiper;
      a && (e.value = a.activeIndex);
    };
    return ee(e, () => {
      const a = document.querySelector("swiper-container")?.swiper;
      a && e.value !== a.activeIndex && a.slideTo(e.value);
    }), (a, r) => {
      const l = ut("swiper-slide"), s = ut("swiper-container");
      return c(), Z(s, {
        "slides-per-view": 1,
        "centered-slides": !0,
        navigation: !$(o),
        onSwiperslidechange: n
      }, {
        default: U(() => [
          (c(!0), v(te, null, oe(a.files, (i) => (c(), Z(l, null, {
            default: U(() => [
              b("div", la, [
                i.type === "image" ? (c(), v("div", aa, [
                  b("img", {
                    src: i.preview,
                    alt: i.name,
                    class: T(a.maxMediaHeight)
                  }, null, 10, ra)
                ])) : i.type === "video" ? (c(), v("div", sa, [
                  b("video", {
                    src: i.preview,
                    controls: "",
                    class: T(a.maxMediaHeight)
                  }, null, 10, ia)
                ])) : i.type === "audio" ? (c(), v("div", ua, [
                  b("audio", {
                    src: i.preview,
                    controls: ""
                  }, null, 8, da)
                ])) : (c(), v("div", ca, [
                  M(a.$slots, "file-icon", {}, () => [
                    D(ht, { class: "w-6 h-6 mx-auto" })
                  ]),
                  r[0] || (r[0] = b("p", { class: "text-lg mt-2" }, "No preview available", -1))
                ]))
              ])
            ]),
            _: 2
          }, 1024))), 256))
        ]),
        _: 3
      }, 8, ["navigation"]);
    };
  }
}), fa = {
  key: 0,
  class: "font-medium mb-1"
}, pa = {
  key: 1,
  class: "mb-2"
}, ma = {
  key: 0,
  class: "text-error text-sm mt-1"
}, kr = /* @__PURE__ */ E({
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
  setup(t) {
    const e = P(t, "modelValue"), o = x(0), { formatFiles: n } = qt(), a = (l) => {
      const s = l.target;
      s.files && e.value.push(...Array.from(s.files));
    }, r = I(() => n(e.value));
    return (l, s) => (c(), v("div", null, [
      l.label ? (c(), v("label", fa, B(l.label), 1)) : F("", !0),
      e.value.length > 0 ? (c(), v("div", pa, [
        D(va, {
          "selected-idx": o.value,
          "onUpdate:selectedIdx": s[0] || (s[0] = (i) => o.value = i),
          files: r.value
        }, null, 8, ["selected-idx", "files"]),
        D(tl, {
          "selected-idx": o.value,
          "onUpdate:selectedIdx": s[1] || (s[1] = (i) => o.value = i),
          files: e.value,
          "onUpdate:files": s[2] || (s[2] = (i) => e.value = i)
        }, {
          "additional-items-after": U(() => [
            D(Qt, {
              onChange: a,
              accept: "image/*"
            }, {
              default: U(() => [
                D(ze, {
                  icon: $(fo),
                  color: "secondary",
                  variant: "dashed",
                  styles: "w-14! h-14! rounded-md!"
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["selected-idx", "files"]),
        l.error ? (c(), v("p", ma, B(l.error), 1)) : F("", !0)
      ])) : (c(), Z(Ql, {
        key: 2,
        "with-icon": "",
        "drop-text": l.placeholder,
        modelValue: e.value,
        "onUpdate:modelValue": s[3] || (s[3] = (i) => e.value = i),
        error: l.error
      }, null, 8, ["drop-text", "modelValue", "error"]))
    ]));
  }
}), ha = {
  __name: "ModalContent",
  props: {
    contentClass: {
      type: String,
      default: "w-full max-w-xl p-2"
    }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const o = e;
    return Ft(() => o("close")), (n, a) => (c(), Z($(Kt), {
      "overlay-transition": "vfm-fade",
      "content-transition": "vfm-fade",
      class: "flex justify-center items-center",
      "content-class": t.contentClass
    }, {
      default: U(() => [
        D(Wt, { styles: "w-full" }, {
          default: U(() => [
            M(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["content-class"]));
  }
}, $r = /* @__PURE__ */ E({
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
  setup(t) {
    const e = t, o = P(t, "modelValue"), n = Re(), a = $n({
      component: ha,
      attrs: {
        contentClass: e.contentClass,
        clickToClose: e.clickToClose,
        escToClose: e.escToClose,
        onClose: () => {
          o.value = !1;
        }
      },
      slots: {
        default: n.default
      }
    });
    return ee(o, () => {
      o.value === !0 ? a.open() : o.value === !1 && a.close();
    }), (r, l) => (c(), Z($(Cn)));
  }
}), ba = {
  key: 0,
  class: "text-error text-sm"
}, Tr = /* @__PURE__ */ E({
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
    formatResult: { type: Function, default: (t) => t },
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
  setup(t, { emit: e }) {
    const o = t, n = e, a = P(t, "modelValue"), r = P(t, "searchQuery"), l = P(t, "input"), s = Re(), i = x(!1), u = x(null), m = I(() => o.acceptsDuplicates || !o.options ? o.options : o.options.filter((y) => !a.value.includes(o.formatResult(y)))), d = (y) => {
      a.value.push(o.formatResult(y)), r.value = "", n("select", y);
    }, f = (y) => {
      a.value = a.value.filter((V, z) => z !== y);
    }, w = () => {
      i.value = !0;
    }, S = () => {
      i.value = !1;
    }, G = () => {
      o.searchable || (i.value ? S() : w());
    }, k = (y) => {
      const V = y.target;
      u.value && !u.value.contains(V) && S();
    };
    return we(() => {
      document.addEventListener("mousedown", k);
    }), Ae(() => {
      document.removeEventListener("mousedown", k);
    }), ee(r, () => {
      o.searchable && r.value.length > 0 && w();
    }), (y, V) => (c(), v("div", {
      class: T([y.styles])
    }, [
      b("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: u
      }, [
        b("div", {
          onClick: V[4] || (V[4] = (z) => G()),
          class: T({ "cursor-pointer": !y.searchable })
        }, [
          D(ot, {
            modelValue: r.value,
            "onUpdate:modelValue": V[0] || (V[0] = (z) => r.value = z),
            input: l.value,
            "onUpdate:input": V[1] || (V[1] = (z) => l.value = z),
            label: y.label,
            placeholder: y.placeholder,
            disabled: !y.searchable,
            icon: y.icon,
            error: !!y.error,
            size: y.size,
            color: y.color,
            variant: y.variant,
            styles: y.textboxStyles,
            onFocus: V[2] || (V[2] = (z) => n("focus", z)),
            onBlur: V[3] || (V[3] = (z) => n("blur", z))
          }, {
            "left-section": U(() => [
              (c(!0), v(te, null, oe(a.value, (z, ne) => (c(), v("div", {
                key: z[y.trackBy]
              }, [
                M(y.$slots, "selectedTag", {
                  option: z,
                  deselect: () => f(ne)
                })
              ]))), 128))
            ]),
            _: 3
          }, 8, ["modelValue", "input", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        D(yt, {
          container: u.value,
          options: m.value,
          "option-label": y.optionLabel,
          "track-by": y.trackBy,
          open: i.value,
          "accepts-empty-selection": y.acceptsEmptySelection,
          onSelect: d
        }, Oe({ _: 2 }, [
          $(s).option ? {
            name: "option",
            fn: U(({ option: z }) => [
              M(y.$slots, "option", { option: z })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      y.error && typeof y.error != "boolean" ? (c(), v("p", ba, B(y.error), 1)) : F("", !0)
    ], 2));
  }
}), ya = { class: "font-medium" }, ga = {
  key: 0,
  class: "text-text-secondary flex justify-center items-center w-10 rounded-l-md"
}, wa = ["placeholder", "min", "max", "disabled"], ka = {
  key: 0,
  class: "text-error text-sm"
}, $a = {
  key: 1,
  class: "text-error text-sm"
}, Cr = /* @__PURE__ */ E({
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
  setup(t) {
    const e = t, o = P(t, "modelValue"), n = I(
      () => e.variant === "filled" ? `bg-${e.color}` : "bg-transparent border border-secondary-text"
    ), a = I(() => {
      const r = typeof o.value == "string" ? parseFloat(o.value) : o.value;
      return r && r > e.max ? `Value must be ${e.max} or less.` : r && r < e.min ? `Value must be ${e.min} or more.` : !1;
    });
    return (r, l) => (c(), v("div", null, [
      b("h4", ya, B(r.label), 1),
      b("div", {
        class: T(["rounded-lg flex h-10 items-center", n.value, r.styles, { error: a.value || r.error, "px-2": !r.icon }])
      }, [
        r.icon ? (c(), v("div", ga, [
          D(Pe, {
            icon: r.icon,
            size: "1x",
            class: "text-secondary-text"
          }, null, 8, ["icon"])
        ])) : F("", !0),
        be(b("input", {
          "onUpdate:modelValue": l[0] || (l[0] = (s) => o.value = s),
          placeholder: r.placeholder,
          type: "number",
          min: r.min,
          max: r.max,
          disabled: r.disabled,
          class: "flex-grow w-full py-2 px-0 border-none outline-none rounded-lg placeholder:text-secondary-text bg-transparent appearance-none"
        }, null, 8, wa), [
          [no, o.value]
        ])
      ], 2),
      a.value ? (c(), v("p", ka, B(a.value), 1)) : r.error && typeof r.error == "string" ? (c(), v("p", $a, B(r.error), 1)) : F("", !0)
    ]));
  }
}), Sr = /* @__PURE__ */ E({
  __name: "Paragraph",
  props: {
    text: {},
    styles: {},
    limit: {},
    includeWhitespace: { type: Boolean }
  },
  setup(t) {
    const e = t, o = I(() => e.text && e.limit ? `${e.text.substring(0, e.limit)}${e.text.length > e.limit ? "..." : ""}` : e.text);
    return (n, a) => (c(), v("p", {
      class: T([n.styles, { "whitespace-pre-wrap": n.includeWhitespace }])
    }, B(o.value), 3));
  }
}), Ta = ["name", "value", "checked"], Ca = { class: "rounded-full border-2 border-secondary flex items-center justify-center h-4 w-4" }, Er = /* @__PURE__ */ E({
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
  setup(t, { emit: e }) {
    const o = t, n = e, a = P(t, "modelValue"), r = x(!1), l = I(() => o.modelValue === o.value), s = (i) => {
      a.value = o.value, n("select", i);
    };
    return (i, u) => (c(), v("label", {
      class: "flex items-center gap-3 relative cursor-pointer",
      onMouseenter: u[1] || (u[1] = (m) => r.value = !0),
      onMouseleave: u[2] || (u[2] = (m) => r.value = !1)
    }, [
      b("input", {
        class: "absolute opacity-0 cursor-pointer",
        type: "radio",
        name: i.name,
        value: i.value,
        checked: l.value,
        onChange: u[0] || (u[0] = (m) => s(m))
      }, null, 40, Ta),
      b("span", Ca, [
        b("span", {
          class: T(["rounded-full h-2 w-2", { "bg-secondary": r.value || l.value }])
        }, null, 2)
      ]),
      b("span", null, B(i.label), 1)
    ], 32));
  }
}), Sa = {}, Ea = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function Ba(t, e) {
  return c(), v("svg", Ea, e[0] || (e[0] = [
    b("path", { d: "M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z" }, null, -1)
  ]));
}
const Ma = /* @__PURE__ */ ae(Sa, [["render", Ba]]), Va = { class: "flex items-center pr-1" }, _a = { class: "flex items-center pr-2 text-secondary-text" }, Da = {
  key: 0,
  class: "text-error text-sm"
}, Br = /* @__PURE__ */ E({
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
    formatResult: { type: Function, default: (t) => t },
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
  setup(t, { emit: e }) {
    const o = t, n = e, a = P(t, "modelValue"), r = P(t, "searchQuery"), l = P(t, "input"), s = Re(), { dropdownOpen: i, dropdownContainer: u, open: m, close: d } = Yt(), f = (k) => {
      const y = o.formatResult(k);
      a.value = y, n("select", y), o.optionLabel && o.searchable ? r.value = k[o.optionLabel] : o.searchable && (r.value = k), ce(d);
    }, w = (k) => {
      a.value = null, r.value = "";
    }, S = () => {
      o.searchable || (i.value ? d() : m());
    }, G = I(() => a.value && o.optionLabel ? a.value[o.optionLabel] : a.value ? a.value : null);
    return ee(r, () => {
      o.searchable && r.value.length > 0 ? m() : o.searchable && d();
    }), (k, y) => (c(), v("div", {
      class: T([k.styles])
    }, [
      b("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: u
      }, [
        b("div", {
          onClick: y[5] || (y[5] = (V) => S()),
          class: T({ "cursor-pointer": !k.searchable })
        }, [
          D(ot, {
            modelValue: r.value,
            "onUpdate:modelValue": y[1] || (y[1] = (V) => r.value = V),
            input: l.value,
            "onUpdate:input": y[2] || (y[2] = (V) => l.value = V),
            value: G.value,
            label: k.label,
            placeholder: k.placeholder,
            disabled: !k.searchable || k.lockOnSelect && a.value,
            icon: a.value?.icon ?? k.icon,
            error: !!k.error,
            size: k.size,
            color: k.color,
            variant: k.variant,
            styles: k.textboxStyles,
            onFocus: y[3] || (y[3] = (V) => n("focus", V)),
            onBlur: y[4] || (y[4] = (V) => n("blur", V))
          }, Oe({ _: 2 }, [
            k.lockOnSelect && k.searchable && a.value ? {
              name: "right-section",
              fn: U(() => [
                b("div", Va, [
                  D(ze, {
                    icon: bt,
                    onClick: y[0] || (y[0] = (V) => w()),
                    variant: "subtle",
                    color: "base",
                    size: k.size
                  }, null, 8, ["size"])
                ])
              ]),
              key: "0"
            } : k.searchable ? void 0 : {
              name: "right-section",
              fn: U(() => [
                b("div", _a, [
                  D(Ma, { class: "w-4 h-4" })
                ])
              ]),
              key: "1"
            }
          ]), 1032, ["modelValue", "input", "value", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        D(yt, {
          container: $(u),
          options: k.options,
          "option-label": k.optionLabel,
          "track-by": k.trackBy,
          open: $(i),
          "accepts-empty-selection": k.acceptsEmptySelection,
          onSelect: f
        }, Oe({ _: 2 }, [
          $(s).option ? {
            name: "option",
            fn: U(({ option: V }) => [
              M(k.$slots, "option", { option: V })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      k.error && typeof k.error != "boolean" ? (c(), v("p", Da, B(k.error), 1)) : F("", !0)
    ], 2));
  }
}), Fa = {
  key: 0,
  class: "w-full"
}, xa = { class: "flex justify-between items-center gap-2 px-4" }, Ia = ["onClick"], Na = { class: "flex justify-between items-center mt-1 px-3" }, Oa = ["onClick"], La = ["onClick"], Mr = /* @__PURE__ */ E({
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
  setup(t) {
    const e = t, o = P(t, "modelValue"), n = I(() => e.steps ? e.steps.findIndex((i) => i.value === o.value) : -1), a = I(() => e.steps ? e.steps.map((i, u) => u < n.value ? { ...i, status: "completed" } : u === n.value ? { ...i, status: "in-progress" } : { ...i, status: "uncompleted" }) : []), r = (i) => i.status === "uncompleted" || i.status !== "in-progress" && e.variant === "minimalist" ? "text-secondary-text bg-card-accent" : `text-${e.color} bg-${e.color}${e.variant === "classic" ? "/30" : ""}`, l = (i) => e.canMoveForwards && i > n.value || e.canMoveBackwards && i < n.value ? "cursor-pointer" : "cursor-default", s = (i, u) => {
      (e.canMoveForwards && u > n.value || e.canMoveBackwards && u < n.value) && (o.value = i.value);
    };
    return (i, u) => i.variant === "classic" ? (c(), v("div", Fa, [
      b("div", xa, [
        (c(!0), v(te, null, oe(a.value, (m, d) => (c(), v(te, {
          key: m.value
        }, [
          b("div", {
            onClick: (f) => s(m, d),
            class: T([
              "w-10 h-10 rounded-full flex items-center justify-center",
              r(m),
              l(d)
            ])
          }, [
            m.icon && m.status === "completed" && !i.canMoveBackwards ? (c(), Z(Zt, {
              key: 0,
              class: "w-4 h-4"
            })) : m.icon ? (c(), Z(Pe, {
              key: 1,
              icon: m.icon
            }, null, 8, ["icon"])) : F("", !0)
          ], 10, Ia),
          d < i.steps.length - 1 ? (c(), v("div", {
            key: 0,
            class: T(`flex-grow bg-${a.value[d + 1].status === "uncompleted" ? "secondary-text" : i.color} h-0.5`)
          }, null, 2)) : F("", !0)
        ], 64))), 128))
      ]),
      b("div", Na, [
        (c(!0), v(te, null, oe(a.value, (m, d) => (c(), v("p", {
          key: "label-" + m.value,
          onClick: (f) => s(m, d),
          class: T([
            m.status === "uncompleted" ? "text-secondary-text" : `text-${i.color}`,
            "text-xs font-medium text-center",
            l(d)
          ])
        }, B(m.label), 11, Oa))), 128))
      ])
    ])) : i.variant === "minimalist" ? (c(), v("div", {
      key: 1,
      class: T(`grid grid-cols-${a.value.length} gap-1`)
    }, [
      (c(!0), v(te, null, oe(a.value, (m, d) => (c(), v("div", {
        key: m.value,
        onClick: (f) => s(m, d)
      }, [
        b("div", {
          class: T(["h-1 rounded-lg mb-1", r(m), l(d)])
        }, null, 2),
        b("p", {
          class: T([
            m.status !== "in-progress" ? "text-secondary-text" : `text-${i.color}`,
            "text-sm font-medium",
            l(d)
          ])
        }, B(m.label), 3)
      ], 8, La))), 128))
    ], 2)) : F("", !0);
  }
}), za = {};
function Aa(t, e) {
  return c(), v("div", {
    onClick: Ne(() => {
    }, ["stop"])
  }, [
    M(t.$slots, "default")
  ]);
}
const Vr = /* @__PURE__ */ ae(za, [["render", Aa]]), Ra = { class: "overflow-hidden rounded-xl shadow-full-box border border-border" }, Pa = { class: "w-full border-collapse table-fixed bg-card overflow-hidden" }, ja = ["onClick"], Ha = ["colspan", "rowspan"], _r = /* @__PURE__ */ E({
  __name: "TableCard",
  props: {
    rows: {},
    headerClasses: {},
    onRowClick: { type: Function }
  },
  setup(t) {
    const e = t, o = (s) => ({
      width: s.width ? typeof s.width == "number" ? `${s.width}px` : s.width : void 0,
      height: s.height ? typeof s.height == "number" ? `${s.height}px` : s.height : void 0
    }), n = (s, i, u) => {
      const m = e.rows[i], f = (Array.isArray(m) ? m : m.cells)?.length ?? 0;
      return [
        `text-${s.align ?? "left"} p-2 border-border`,
        { "border-r": u !== f - 1 },
        s.class
      ];
    }, a = (s, i) => {
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
    }, l = (s) => String.fromCharCode(65 + s);
    return (s, i) => (c(), v("div", Ra, [
      b("table", Pa, [
        b("tbody", null, [
          (c(!0), v(te, null, oe(s.rows, (u, m) => (c(), v("tr", {
            key: "row-" + m,
            class: T(a(u, m)),
            onClick: (d) => r(u, m)
          }, [
            (c(!0), v(te, null, oe(Array.isArray(u) ? u : u.cells, (d, f) => (c(), v("td", {
              key: "cell-" + m + "-" + f,
              colspan: d.colspan || 1,
              rowspan: d.rowspan || 1,
              class: T(n(d, m, f)),
              style: vt(o(d))
            }, [
              M(s.$slots, `${l(f)}${m + 1}`, {}, () => [
                tt(B(d.content), 1)
              ])
            ], 14, Ha))), 128))
          ], 10, ja))), 128))
        ])
      ])
    ]));
  }
}), Ua = ["onClick"], Dr = /* @__PURE__ */ E({
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
  setup(t) {
    const e = P(t, "selectedTab");
    return (o, n) => (c(), v("div", null, [
      b("div", {
        class: T(["tab-container", { "justify-between": o.stretch }])
      }, [
        (c(!0), v(te, null, oe(o.tabs, (a) => (c(), v("button", {
          key: a.name,
          class: T(["cursor-pointer", [{
            "text-error": a.error,
            "underline-offset-8 underline font-medium": a.name === e.value
          }, `text-${o.size}`]]),
          onClick: (r) => e.value = a.name,
          type: "button"
        }, B(a.label), 11, Ua))), 128))
      ], 2),
      (c(!0), v(te, null, oe(o.tabs, (a) => be((c(), v("div", {
        key: a.name
      }, [
        M(o.$slots, `tab-${a.name}`)
      ])), [
        [Te, a.name === e.value]
      ])), 128))
    ]));
  }
}), Fr = /* @__PURE__ */ E({
  __name: "Tag",
  props: {
    color: { default: "secondary" },
    size: { default: "md" },
    styles: { default: "" },
    rounded: { default: "full" }
  },
  setup(t) {
    return (e, o) => (c(), v("div", {
      class: T(`py-1 px-4 rounded-${e.rounded} duration-100 text-center text-black text-${e.size} bg-${e.color}`)
    }, [
      M(e.$slots, "default")
    ], 2));
  }
}), Ka = { class: "flex items-center justify-between" }, Wa = ["for"], Ga = {
  key: 0,
  class: "text-xs text-secondary-text mr-1"
}, qa = ["name", "placeholder", "value", "disabled", "maxlength", "rows"], Za = {
  key: 0,
  class: "text-error text-sm"
}, Qa = {
  key: 1,
  class: "text-success text-sm"
}, xr = /* @__PURE__ */ E({
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
  setup(t, { emit: e }) {
    const o = t, n = e, a = P(t, "modelValue"), r = P(t, "input"), l = x(o.modelValue), s = x(!1), i = I(
      () => o.variant === "filled" ? `bg-${o.color}` : "bg-transparent border border-border"
    ), u = (f) => {
      s.value = !0, n("focus", f);
    }, m = (f) => {
      s.value = !1, n("blur", f);
    }, d = (f) => {
      const w = f.target;
      l.value = w.value, a.value = w.value, n("input", f);
    };
    return ee(
      () => o.modelValue,
      (f) => {
        l.value = f;
      }
    ), (f, w) => (c(), v("div", null, [
      b("div", Ka, [
        b("label", {
          for: f.name,
          class: "font-medium"
        }, B(f.label), 9, Wa),
        f.maxlength ? (c(), v("p", Ga, B(a.value?.length ?? 0) + " / " + B(f.maxlength), 1)) : F("", !0)
      ]),
      b("div", {
        class: T([
          "rounded-lg flex duration-300 max-h-48 overflow-auto",
          i.value,
          f.styles,
          {
            error: f.error,
            success: f.success,
            selected: s.value
          }
        ])
      }, [
        b("textarea", {
          class: T(["rounded-lg p-2 flex-grow bg-transparent outline-none max-w-full placeholder:text-secondary-text border-none", { "field-sizing-content": f.fieldSizingContent }]),
          name: f.name,
          placeholder: f.placeholder,
          value: a.value,
          disabled: f.disabled,
          onInput: d,
          onFocus: u,
          onBlur: m,
          onKeydown: w[0] || (w[0] = (S) => n("keyPress", S)),
          maxlength: f.maxlength,
          rows: f.rows,
          ref_key: "inputElement",
          ref: r
        }, null, 42, qa)
      ], 2),
      f.error && typeof f.error != "boolean" ? (c(), v("p", Za, B(f.error), 1)) : f.success && typeof f.error != "boolean" ? (c(), v("p", Qa, B(f.success), 1)) : F("", !0)
    ]));
  }
}), Xt = () => {
  const t = Dt("toastMessages", x([]));
  return {
    initializeToast: () => lo("toastMessages", x([])),
    toastMessages: t,
    addToast: (a) => t.value.push({ ...a, uuid: xt() }),
    closeToast: (a) => t.value = t.value.filter((r) => r.uuid !== a)
  };
}, Ya = { class: "grow" }, Xa = { class: "text-sm font-medium" }, Ja = { class: "text-sm" }, er = /* @__PURE__ */ E({
  __name: "ToastMessage",
  props: {
    message: {}
  },
  setup(t) {
    const e = t, { closeToast: o } = Xt();
    return we(() => {
      e.message.duration && setTimeout(() => o(e.message.uuid), e.message.duration);
    }), (n, a) => {
      const r = ut("IconButton");
      return c(), Z(ye, {
        name: "slide-fade",
        appear: ""
      }, {
        default: U(() => [
          b("div", {
            class: T(`w-72 flex items-center gap-2 rounded-md p-2 bg-${n.message.color ?? "success"}/${n.message.opacity ?? 60}`)
          }, [
            b("div", Ya, [
              b("p", Xa, B(n.message.title), 1),
              b("p", Ja, B(n.message.content), 1)
            ]),
            D(r, {
              icon: $(po),
              color: "base",
              variant: "subtle",
              onClick: a[0] || (a[0] = (l) => $(o)(n.message.uuid))
            }, null, 8, ["icon"])
          ], 2)
        ]),
        _: 1
      });
    };
  }
}), tr = { class: "relative" }, Ir = {
  __name: "ToastContainer",
  props: {
    containerName: String,
    position: {
      type: String,
      default: "top-0 right-0"
    }
  },
  setup(t) {
    const e = t, { toastMessages: o } = Xt(), n = I(() => o.value.filter((a) => a.container === e.containerName));
    return (a, r) => (c(), v("div", tr, [
      M(a.$slots, "default"),
      n.value.length > 0 ? (c(), v("div", {
        key: 0,
        class: T(["absolute p-4 z-50 flex flex-col gap-2 overflow-hidden", t.position])
      }, [
        (c(!0), v(te, null, oe(n.value, (l) => (c(), v("div", {
          key: l.uuid
        }, [
          M(a.$slots, "toast-content", { message: l }, () => [
            D(er, { message: l }, null, 8, ["message"])
          ])
        ]))), 128))
      ], 2)) : F("", !0)
    ]));
  }
}, Nr = /* @__PURE__ */ E({
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
  setup(t, { emit: e }) {
    const o = t, n = e, a = P(t, "modelValue"), r = () => {
      a.value = !a.value, n("toggle", a.value);
    }, l = I(
      () => a.value ? `bg-${o.activeColor}` : "bg-gray-300 dark:bg-gray-600"
    ), s = I(
      () => a.value ? "translate-x-6" : "translate-x-0"
    );
    return we(() => {
      a.value === void 0 && (a.value = o.value);
    }), (i, u) => (c(), v("div", {
      onClick: r,
      class: T([l.value, "cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300"])
    }, [
      b("div", {
        class: T([s.value, "bg-white dark:bg-gray-200 text-black text-sm flex justify-center items-center w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"])
      }, [
        i.icon ? (c(), Z(Pe, {
          key: 0,
          icon: i.icon
        }, null, 8, ["icon"])) : F("", !0)
      ], 2)
    ], 2));
  }
}), or = { class: "rounded-md bg-dropdown/80 text-dropdown-text p-1 text-xs text-nowrap" }, Or = /* @__PURE__ */ E({
  __name: "Tooltip",
  props: {
    text: {},
    position: { default: "top" }
  },
  setup(t) {
    const e = t, o = x(!1), n = I(() => {
      let a;
      return e.position === "right" && (a = "left-full pl-4"), a;
    });
    return (a, r) => (c(), v("div", {
      class: "relative flex items-center",
      onMouseenter: r[0] || (r[0] = (l) => o.value = !0),
      onMouseleave: r[1] || (r[1] = (l) => o.value = !1)
    }, [
      M(a.$slots, "default"),
      D(ye, { name: "fade" }, {
        default: U(() => [
          o.value ? (c(), v("div", {
            key: 0,
            class: T([n.value, "absolute delay-1000 z-50"])
          }, [
            b("div", or, [
              M(a.$slots, "tooltip-content", {}, () => [
                tt(B(a.text), 1)
              ])
            ])
          ], 2)) : F("", !0)
        ]),
        _: 3
      })
    ], 32));
  }
}), Lr = {
  install(t) {
    const e = wn();
    t.use(e);
  }
};
export {
  dr as Accordion,
  tl as AttachmentList,
  cr as Avatar,
  vr as AvatarGroup,
  fr as Badge,
  rl as Button,
  Wt as Card,
  pr as Checkbox,
  mr as ClickableTag,
  hr as CodeSnippet,
  br as CurrencyInput,
  yr as DatePicker,
  Ql as DragAndDropFiles,
  gr as DropdownMenu,
  yt as DropdownOptions,
  Vl as Dropzone,
  Qt as FileButton,
  Ul as FileList,
  pl as HoverBox,
  ze as IconButton,
  wr as Loader,
  va as MediaCarousel,
  kr as MediaInput,
  $r as Modal,
  Tr as Multiselect,
  Cr as NumberInput,
  Sr as Paragraph,
  Er as Radio,
  Br as Select,
  Mr as Stepper,
  Vr as StopPropagation,
  _r as TableCard,
  Dr as Tabs,
  Fr as Tag,
  xr as Textarea,
  ot as Textbox,
  Ir as ToastContainer,
  Nr as Toggle,
  Or as Tooltip,
  Pe as TribeIcon,
  Lr as default,
  qt as useFiles,
  Gt as useIsHandheld,
  Xt as useToast
};
