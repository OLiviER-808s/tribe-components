import { ref as x, watch as ee, defineComponent as E, useAttrs as Jt, getCurrentInstance as Vt, computed as I, onMounted as we, onBeforeUnmount as Ae, nextTick as ce, toRef as lt, createBlock as Z, openBlock as c, Teleport as eo, withDirectives as be, createCommentVNode as F, unref as T, createElementBlock as v, mergeProps as ke, withModifiers as Ne, withKeys as to, createVNode as D, Transition as ye, toHandlers as gt, withCtx as U, normalizeStyle as ft, normalizeClass as k, vShow as Ce, renderSlot as B, normalizeProps as Mt, guardReactiveProps as oo, createElementVNode as b, inject as Dt, reactive as ut, Fragment as te, renderList as oe, resolveDynamicComponent as Ke, createSlots as ze, shallowReactive as je, markRaw as We, mergeModels as j, useModel as P, toDisplayString as _, onUnmounted as Ft, createTextVNode as tt, useSlots as Re, resolveComponent as dt, vModelText as no, provide as lo } from "vue";
import { unrefElement as ao, tryOnScopeDispose as ro, useEventListener as ue, tryOnUnmounted as so, useClipboard as io, onKeyStroke as at } from "@vueuse/core";
import uo from "vuedraggable";
import { v4 as xt } from "uuid";
import { FontAwesomeIcon as co } from "@fortawesome/vue-fontawesome";
import vo from "@vuepic/vue-datepicker";
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
}, fo = function(e) {
  var o, n = e == null || (o = e.getAttribute) === null || o === void 0 ? void 0 : o.call(e, "contenteditable");
  return n === "" || n === "true";
}, zt = function(e, o, n) {
  if (Qe(e))
    return [];
  var a = Array.prototype.slice.apply(e.querySelectorAll(qe));
  return o && ge.call(e, qe) && a.unshift(e), a = a.filter(n), a;
}, Ot = function t(e, o, n) {
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
}, Lt = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, me = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || fo(e)) && !Lt(e) ? 0 : e.tabIndex;
}, po = function(e, o) {
  var n = me(e);
  return n < 0 && o && !Lt(e) ? 0 : n;
}, mo = function(e, o) {
  return e.tabIndex === o.tabIndex ? e.documentOrder - o.documentOrder : e.tabIndex - o.tabIndex;
}, At = function(e) {
  return e.tagName === "INPUT";
}, ho = function(e) {
  return At(e) && e.type === "hidden";
}, bo = function(e) {
  var o = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return o;
}, yo = function(e, o) {
  for (var n = 0; n < e.length; n++)
    if (e[n].checked && e[n].form === o)
      return e[n];
}, go = function(e) {
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
  var r = yo(a, e.form);
  return !r || r === e;
}, wo = function(e) {
  return At(e) && e.type === "radio";
}, $o = function(e) {
  return wo(e) && !go(e);
}, ko = function(e) {
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
}, Co = function(e, o) {
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
    if (ko(e))
      return !e.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return wt(e);
  return !1;
}, To = function(e) {
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
  Qe(o) || ho(o) || Co(o, e) || // For a details element with a summary, the summary element gets the focus
  bo(o) || To(o));
}, ct = function(e, o) {
  return !($o(o) || me(o) < 0 || !Ye(e, o));
}, So = function(e) {
  var o = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(o) || o >= 0);
}, Eo = function t(e) {
  var o = [], n = [];
  return e.forEach(function(a, r) {
    var l = !!a.scopeParent, s = l ? a.scopeParent : a, i = po(s, l), u = l ? t(a.candidates) : s;
    i === 0 ? l ? o.push.apply(o, u) : o.push(s) : n.push({
      documentOrder: r,
      tabIndex: i,
      item: a,
      isScope: l,
      content: u
    });
  }), n.sort(mo).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(o);
}, _o = function(e, o) {
  o = o || {};
  var n;
  return o.getShadowRoot ? n = Ot([e], o.includeContainer, {
    filter: ct.bind(null, o),
    flatten: !1,
    getShadowRoot: o.getShadowRoot,
    shadowRootFilter: So
  }) : n = zt(e, o.includeContainer, ct.bind(null, o)), Eo(n);
}, Bo = function(e, o) {
  o = o || {};
  var n;
  return o.getShadowRoot ? n = Ot([e], o.includeContainer, {
    filter: Ye.bind(null, o),
    flatten: !0,
    getShadowRoot: o.getShadowRoot
  }) : n = zt(e, o.includeContainer, Ye.bind(null, o)), n;
}, $e = function(e, o) {
  if (o = o || {}, !e)
    throw new Error("No node provided");
  return ge.call(e, qe) === !1 ? !1 : ct(o, e);
}, Vo = /* @__PURE__ */ It.concat("iframe").join(","), rt = function(e, o) {
  if (o = o || {}, !e)
    throw new Error("No node provided");
  return ge.call(e, Vo) === !1 ? !1 : Ye(o, e);
};
function vt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var o = 0, n = Array(e); o < e; o++) n[o] = t[o];
  return n;
}
function Mo(t) {
  if (Array.isArray(t)) return vt(t);
}
function Do(t, e, o) {
  return (e = zo(e)) in t ? Object.defineProperty(t, e, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = o, t;
}
function Fo(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function xo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $t(t, e) {
  var o = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), o.push.apply(o, n);
  }
  return o;
}
function kt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var o = arguments[e] != null ? arguments[e] : {};
    e % 2 ? $t(Object(o), !0).forEach(function(n) {
      Do(t, n, o[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : $t(Object(o)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
    });
  }
  return t;
}
function Io(t) {
  return Mo(t) || Fo(t) || Oo(t) || xo();
}
function No(t, e) {
  if (typeof t != "object" || !t) return t;
  var o = t[Symbol.toPrimitive];
  if (o !== void 0) {
    var n = o.call(t, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function zo(t) {
  var e = No(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Oo(t, e) {
  if (t) {
    if (typeof t == "string") return vt(t, e);
    var o = {}.toString.call(t).slice(8, -1);
    return o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set" ? Array.from(t) : o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? vt(t, e) : void 0;
  }
}
var Ct = {
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
}, Lo = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, Ao = function(e) {
  return e?.key === "Escape" || e?.key === "Esc" || e?.keyCode === 27;
}, Me = function(e) {
  return e?.key === "Tab" || e?.keyCode === 9;
}, Ro = function(e) {
  return Me(e) && !e.shiftKey;
}, Po = function(e) {
  return Me(e) && e.shiftKey;
}, Tt = function(e) {
  return setTimeout(e, 0);
}, _e = function(e) {
  for (var o = arguments.length, n = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
    n[a - 1] = arguments[a];
  return typeof e == "function" ? e.apply(void 0, n) : e;
}, He = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, jo = [], Ho = function(e, o) {
  var n = o?.document || document, a = o?.trapStack || jo, r = kt({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: Ro,
    isKeyBackward: Po
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
    return l.containerGroups.findIndex(function(z) {
      var A = z.container, K = z.tabbableNodes;
      return A.contains(p) || C?.includes(A) || K.find(function(N) {
        return N === p;
      });
    });
  }, m = function(p) {
    var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = h.hasFallback, z = C === void 0 ? !1 : C, A = h.params, K = A === void 0 ? [] : A, N = r[p];
    if (typeof N == "function" && (N = N.apply(void 0, Io(K))), N === !0 && (N = void 0), !N) {
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
      if (!q && !z)
        throw new Error("`".concat(p, "` as selector refers to no known node"));
    }
    return q;
  }, d = function() {
    var p = m("initialFocus", {
      hasFallback: !0
    });
    if (p === !1)
      return !1;
    if (p === void 0 || p && !rt(p, r.tabbableOptions))
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
      var h = _o(p, r.tabbableOptions), C = Bo(p, r.tabbableOptions), z = h.length > 0 ? h[0] : void 0, A = h.length > 0 ? h[h.length - 1] : void 0, K = C.find(function(X) {
        return $e(X);
      }), N = C.slice().reverse().find(function(X) {
        return $e(X);
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
        firstTabbableNode: z,
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
          var fe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, ae = h.indexOf(ie);
          return ae < 0 ? fe ? C.slice(C.indexOf(ie) + 1).find(function(pe) {
            return $e(pe);
          }) : C.slice(0, C.indexOf(ie)).reverse().find(function(pe) {
            return $e(pe);
          }) : h[ae + (fe ? 1 : -1)];
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
      }), l.mostRecentlyFocusedNode = p, Lo(p) && p.select();
    }
  }, G = function(p) {
    var h = m("setReturnFocus", {
      params: [p]
    });
    return h || (h === !1 ? !1 : p);
  }, $ = function(p) {
    var h = p.target, C = p.event, z = p.isBackward, A = z === void 0 ? !1 : z;
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
        if (X < 0 && (q.container === h || rt(h, r.tabbableOptions) && !$e(h, r.tabbableOptions) && !q.nextTabbableNode(h, !1)) && (X = N), X >= 0) {
          var ie = X === 0 ? l.tabbableGroups.length - 1 : X - 1, fe = l.tabbableGroups[ie];
          K = me(h) >= 0 ? fe.lastTabbableNode : fe.lastDomTabbableNode;
        } else Me(C) || (K = q.nextTabbableNode(h, !1));
      } else {
        var ae = l.tabbableGroups.findIndex(function(Se) {
          var Ee = Se.lastTabbableNode;
          return h === Ee;
        });
        if (ae < 0 && (q.container === h || rt(h, r.tabbableOptions) && !$e(h, r.tabbableOptions) && !q.nextTabbableNode(h)) && (ae = N), ae >= 0) {
          var pe = ae === l.tabbableGroups.length - 1 ? 0 : ae + 1, Te = l.tabbableGroups[pe];
          K = me(h) >= 0 ? Te.firstTabbableNode : Te.firstDomTabbableNode;
        } else Me(C) || (K = q.nextTabbableNode(h));
      }
    } else
      K = m("fallbackFocus");
    return K;
  }, y = function(p) {
    var h = He(p);
    if (!(u(h, p) >= 0)) {
      if (_e(r.clickOutsideDeactivates, p)) {
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
      _e(r.allowOutsideClick, p) || p.preventDefault();
    }
  }, V = function(p) {
    var h = He(p), C = u(h, p) >= 0;
    if (C || h instanceof Document)
      C && (l.mostRecentlyFocusedNode = h);
    else {
      p.stopImmediatePropagation();
      var z, A = !0;
      if (l.mostRecentlyFocusedNode)
        if (me(l.mostRecentlyFocusedNode) > 0) {
          var K = u(l.mostRecentlyFocusedNode), N = l.containerGroups[K].tabbableNodes;
          if (N.length > 0) {
            var q = N.findIndex(function(X) {
              return X === l.mostRecentlyFocusedNode;
            });
            q >= 0 && (r.isKeyForward(l.recentNavEvent) ? q + 1 < N.length && (z = N[q + 1], A = !1) : q - 1 >= 0 && (z = N[q - 1], A = !1));
          }
        } else
          l.containerGroups.some(function(X) {
            return X.tabbableNodes.some(function(ie) {
              return me(ie) > 0;
            });
          }) || (A = !1);
      else
        A = !1;
      A && (z = $({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: l.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(l.recentNavEvent)
      })), S(z || l.mostRecentlyFocusedNode || d());
    }
    l.recentNavEvent = void 0;
  }, L = function(p) {
    var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    l.recentNavEvent = p;
    var C = $({
      event: p,
      isBackward: h
    });
    C && (Me(p) && p.preventDefault(), S(C));
  }, le = function(p) {
    (r.isKeyForward(p) || r.isKeyBackward(p)) && L(p, r.isKeyBackward(p));
  }, g = function(p) {
    Ao(p) && _e(r.escapeDeactivates, p) !== !1 && (p.preventDefault(), s.deactivate());
  }, H = function(p) {
    var h = He(p);
    u(h, p) >= 0 || _e(r.clickOutsideDeactivates, p) || _e(r.allowOutsideClick, p) || (p.preventDefault(), p.stopImmediatePropagation());
  }, O = function() {
    if (l.active)
      return Ct.activateTrap(a, s), l.delayInitialFocusTimer = r.delayInitialFocus ? Tt(function() {
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
      }), n.addEventListener("keydown", le, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", g), s;
  }, Y = function() {
    if (l.active)
      return n.removeEventListener("focusin", V, !0), n.removeEventListener("mousedown", y, !0), n.removeEventListener("touchstart", y, !0), n.removeEventListener("click", H, !0), n.removeEventListener("keydown", le, !0), n.removeEventListener("keydown", g), s;
  }, Q = function(p) {
    var h = p.some(function(C) {
      var z = Array.from(C.removedNodes);
      return z.some(function(A) {
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
      var h = i(p, "onActivate"), C = i(p, "onPostActivate"), z = i(p, "checkCanFocusTrap");
      z || f(), l.active = !0, l.paused = !1, l.nodeFocusedBeforeActivation = w(n), h?.();
      var A = function() {
        z && f(), O(), re(), C?.();
      };
      return z ? (z(l.containers.concat()).then(A, A), this) : (A(), this);
    },
    deactivate: function(p) {
      if (!l.active)
        return this;
      var h = kt({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, p);
      clearTimeout(l.delayInitialFocusTimer), l.delayInitialFocusTimer = void 0, Y(), l.active = !1, l.paused = !1, re(), Ct.deactivateTrap(a, s);
      var C = i(h, "onDeactivate"), z = i(h, "onPostDeactivate"), A = i(h, "checkCanReturnFocus"), K = i(h, "returnFocus", "returnFocusOnDeactivate");
      C?.();
      var N = function() {
        Tt(function() {
          K && S(G(l.nodeFocusedBeforeActivation)), z?.();
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
          var C = i(h, "onPause"), z = i(h, "onPostPause");
          C?.(), Y(), re(), z?.();
        } else {
          var A = i(h, "onUnpause"), K = i(h, "onPostUnpause");
          A?.(), f(), O(), re(), K?.();
        }
        return this;
      }
    }
  }), s.updateContainerElements(e), s;
};
function Uo(t, e = {}) {
  let o;
  const { immediate: n, ...a } = e, r = x(!1), l = x(!1), s = (d) => o && o.activate(d), i = (d) => o && o.deactivate(d), u = () => {
    o && (o.pause(), l.value = !0);
  }, m = () => {
    o && (o.unpause(), l.value = !1);
  };
  return ee(
    () => ao(t),
    (d) => {
      d && (o = Ho(d, {
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
const Ko = (t) => (...e) => {
  t && (t?.(...e), t = null);
}, Oe = () => {
};
function Ue(t, e, o) {
  return t > o ? o : t < e ? e : t;
}
const pt = (t) => typeof t == "string";
function st(t, e) {
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
const Wo = {
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
function Go(t, e) {
  const { modelValueLocal: o, onEntering: n, onEnter: a, onLeaving: r, onLeave: l } = e, s = x(o.value), [i, u, m] = St(s.value), [d, f, w] = St(s.value), S = I(() => typeof t.contentTransition == "string" ? { name: t.contentTransition, appear: !0 } : { appear: !0, ...t.contentTransition }), G = I(() => typeof t.overlayTransition == "string" ? { name: t.overlayTransition, appear: !0 } : { appear: !0, ...t.overlayTransition }), $ = I(
    () => (t.hideOverlay || f.value === 2) && u.value === 2
    /* Leave */
  );
  ee(
    $,
    (L) => {
      L && (s.value = !1);
    }
  ), ee(u, (L) => {
    if (L === 1) {
      if (!s.value)
        return;
      n?.();
    } else if (L === 0) {
      if (!s.value)
        return;
      a?.();
    } else
      L === 3 ? r?.() : L === 2 && l?.();
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
function qo(t, e, o) {
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
function Zo(t, e, o) {
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
function Qo(t, e) {
  if (t.focusTrap === !1)
    return {
      focus() {
      },
      blur() {
      }
    };
  const { focusEl: o } = e, { hasFocus: n, activate: a, deactivate: r } = Uo(o, t.focusTrap);
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
let mt = !1;
if (typeof window < "u") {
  const t = {
    get passive() {
      mt = !0;
    }
  };
  window.addEventListener("testPassive", null, t), window.removeEventListener("testPassive", null, t);
}
const Pt = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
let de = [], Xe = !1, Ge = 0, jt = -1, De, Fe;
const Yo = (t) => {
  if (!t || t.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const e = window.getComputedStyle(t);
  return ["auto", "scroll"].includes(e.overflowY) && t.scrollHeight > t.clientHeight;
}, Xo = (t, e) => !(t.scrollTop === 0 && e < 0 || t.scrollTop + t.clientHeight + e >= t.scrollHeight && e > 0), Jo = (t) => {
  const e = [];
  for (; t; ) {
    if (e.push(t), t.classList.contains("vfm"))
      return e;
    t = t.parentElement;
  }
  return e;
}, en = (t, e) => {
  let o = !1;
  return Jo(t).forEach((n) => {
    Yo(n) && Xo(n, e) && (o = !0);
  }), o;
}, Ht = (t) => de.some(() => en(t, -Ge)), ht = (t) => {
  const e = t || window.event;
  return Ht(e.target) || e.touches.length > 1 ? !0 : (e.preventDefault && e.preventDefault(), !1);
}, tn = (t) => {
  if (Fe === void 0) {
    const e = !!t && t.reserveScrollBarGap === !0, o = window.innerWidth - document.documentElement.clientWidth;
    if (e && o > 0) {
      const n = parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
      Fe = document.body.style.paddingRight, document.body.style.paddingRight = `${n + o}px`;
    }
  }
  De === void 0 && (De = document.body.style.overflow, document.body.style.overflow = "hidden");
}, on = () => {
  Fe !== void 0 && (document.body.style.paddingRight = Fe, Fe = void 0), De !== void 0 && (document.body.style.overflow = De, De = void 0);
}, nn = (t) => t ? t.scrollHeight - t.scrollTop <= t.clientHeight : !1, ln = (t, e) => (Ge = t.targetTouches[0].clientY - jt, Ht(t.target) ? !1 : e && e.scrollTop === 0 && Ge > 0 || nn(e) && Ge < 0 ? ht(t) : (t.stopPropagation(), !0)), an = (t, e) => {
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
    n.targetTouches.length === 1 && ln(n, t);
  }, Xe || (document.addEventListener("touchmove", ht, mt ? { passive: !1 } : void 0), Xe = !0)) : tn(e);
}, rn = (t) => {
  if (!t) {
    console.error(
      "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
    );
    return;
  }
  de = de.filter((e) => e.targetElement !== t), Pt ? (t.ontouchstart = null, t.ontouchmove = null, Xe && de.length === 0 && (document.removeEventListener("touchmove", ht, mt ? { passive: !1 } : void 0), Xe = !1)) : de.length || on();
};
function sn(t, e) {
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
    a && rn(a);
  }
  function l() {
    n.value && t.lockScroll && a && an(a, {
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
function un(t) {
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
const it = {
  beforeMount(t, { value: e }, { transition: o }) {
    t._vov = t.style.visibility === "hidden" ? "" : t.style.visibility, o && e ? o.beforeEnter(t) : Be(t, e);
  },
  mounted(t, { value: e }, { transition: o }) {
    o && e && o.enter(t);
  },
  updated(t, { value: e, oldValue: o }, { transition: n }) {
    !e != !o && (n ? e ? (n.beforeEnter(t), Be(t, !0), n.enter(t)) : n.leave(t, () => {
      Be(t, !1);
    }) : Be(t, e));
  },
  beforeUnmount(t, { value: e }) {
    Be(t, e);
  }
};
function Be(t, e) {
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
function dn(t) {
  if (!t)
    return !1;
  let e = !1;
  const o = {
    get passive() {
      return e = !0, !1;
    }
  };
  return t.addEventListener("x", Oe, o), t.removeEventListener("x", Oe), e;
}
function cn(t, {
  threshold: e = 0,
  onSwipeStart: o,
  onSwipe: n,
  onSwipeEnd: a,
  passive: r = !0
}) {
  const l = ut({ x: 0, y: 0 }), s = ut({ x: 0, y: 0 }), i = I(() => l.x - s.x), u = I(() => l.y - s.y), { max: m, abs: d } = Math, f = I(
    () => m(d(i.value), d(u.value)) >= e
  ), w = x(!1), S = I(() => f.value ? d(i.value) > d(u.value) ? i.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), G = (O, Y) => {
    l.x = O, l.y = Y;
  }, $ = (O, Y) => {
    s.x = O, s.y = Y;
  };
  let y, V;
  function L(O) {
    y.capture && !y.passive && O.preventDefault();
    const { x: Y, y: Q } = Et(O);
    G(Y, Q), $(Y, Q), o?.(O), V = [
      ue(t, "mousemove", le, y),
      ue(t, "touchmove", le, y),
      ue(t, "mouseup", g, y),
      ue(t, "touchend", g, y),
      ue(t, "touchcancel", g, y)
    ];
  }
  function le(O) {
    const { x: Y, y: Q } = Et(O);
    $(Y, Q), !w.value && f.value && (w.value = !0), w.value && n?.(O);
  }
  function g(O) {
    w.value && a?.(O, S.value), w.value = !1, V.forEach((Y) => Y());
  }
  let H = [];
  return we(() => {
    const O = dn(window?.document);
    r ? y = O ? { passive: !0 } : { capture: !1 } : y = O ? { passive: !1, capture: !0 } : { capture: !0 }, H = [
      ue(t, "mousedown", L, y),
      ue(t, "touchstart", L, y)
    ];
  }), {
    isSwiping: w,
    direction: S,
    coordsStart: l,
    coordsEnd: s,
    lengthX: i,
    lengthY: u,
    stop: () => {
      H.forEach((O) => O()), V.forEach((O) => O());
    }
  };
}
function vn(t, e) {
  const { vfmContentEl: o, modelValueLocal: n } = e, a = 0.1, r = 300, l = x(), s = I(() => {
    if (!(t.swipeToClose === void 0 || t.swipeToClose === "none"))
      return t.showSwipeBanner ? l.value : o.value;
  }), i = x(0), u = x(!0);
  let m = Oe, d = !0, f, w = !1;
  const { lengthX: S, lengthY: G, direction: $, isSwiping: y } = cn(s, {
    threshold: t.threshold,
    onSwipeStart(g) {
      m = ue(document, "selectionchange", () => {
        var H;
        u.value = (H = window.getSelection()) == null ? void 0 : H.isCollapsed;
      }), f = (/* @__PURE__ */ new Date()).getTime(), w = le(g?.target);
    },
    onSwipe() {
      var g, H, O, Y;
      if (w && u.value && $.value === t.swipeToClose) {
        if ($.value === "up") {
          const Q = Ue(Math.abs(G.value || 0), 0, ((g = s.value) == null ? void 0 : g.offsetHeight) || 0) - (t.threshold || 0);
          i.value = Q;
        } else if ($.value === "down") {
          const Q = Ue(Math.abs(G.value || 0), 0, ((H = s.value) == null ? void 0 : H.offsetHeight) || 0) - (t.threshold || 0);
          i.value = -Q;
        } else if ($.value === "right") {
          const Q = Ue(Math.abs(S.value || 0), 0, ((O = s.value) == null ? void 0 : O.offsetWidth) || 0) - (t.threshold || 0);
          i.value = -Q;
        } else if ($.value === "left") {
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
      const O = (/* @__PURE__ */ new Date()).getTime(), Y = H === t.swipeToClose, Q = (() => {
        var re, R;
        if (H === "up" || H === "down")
          return Math.abs(G?.value || 0) > a * (((re = s.value) == null ? void 0 : re.offsetHeight) || 0);
        if (H === "left" || H === "right")
          return Math.abs(S?.value || 0) > a * (((R = s.value) == null ? void 0 : R.offsetWidth) || 0);
      })(), ve = O - f <= r;
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
  function L(g) {
    t.preventNavigationGestures && g.preventDefault();
  }
  function le(g) {
    const H = g?.tagName;
    if (!H || ["INPUT", "TEXTAREA"].includes(H))
      return !1;
    const O = (() => {
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
    return g === s.value ? O : O && le(g?.parentElement);
  }
  return {
    vfmContentEl: o,
    swipeBannerEl: l,
    bindSwipe: V,
    onTouchStartSwipeBanner: L
  };
}
const Ut = /* @__PURE__ */ Symbol("vfm");
let he;
const fn = (t) => he = t, pn = {
  install: Oe,
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
}, mn = () => Vt() && Dt(Ut, pn) || he;
function hn() {
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
  return fn(r), r;
}
function xe(t) {
  var e;
  return (e = t?.exposed) == null ? void 0 : e.modalExposed;
}
const bn = E({ inheritAttrs: !1 }), Kt = /* @__PURE__ */ E({
  ...bn,
  __name: "VueFinalModal",
  props: Wo,
  emits: ["update:modelValue", "beforeOpen", "opened", "beforeClose", "closed", "clickOutside"],
  setup(t, { expose: e, emit: o }) {
    const n = t, a = o, r = Jt(), l = Vt(), { modals: s, openedModals: i, openedModalOverlays: u } = Ie(), m = x(), d = x(), { focus: f, blur: w } = Qo(n, { focusEl: m }), { zIndex: S, refreshZIndex: G, resetZIndex: $ } = un(n), { modelValueLocal: y } = Zo(n, a, { open: X, close: ie }), { enableBodyScroll: V, disableBodyScroll: L } = sn(n, {
      lockScrollEl: m,
      modelValueLocal: y
    });
    let le = Oe;
    const {
      visible: g,
      contentVisible: H,
      contentListeners: O,
      contentTransition: Y,
      overlayVisible: Q,
      overlayListeners: ve,
      overlayTransition: re,
      enterTransition: R,
      leaveTransition: p
    } = Go(n, {
      modelValueLocal: y,
      onEntering() {
        ce(() => {
          L(), f();
        });
      },
      onEnter() {
        a("opened"), le("opened");
      },
      onLeave() {
        Ve(i, l), $(), V(), a("closed"), le("closed");
      }
    }), { onEsc: h, onMouseupRoot: C, onMousedown: z } = qo(n, a, { vfmRootEl: m, vfmContentEl: d, visible: g, modelValueLocal: y }), {
      swipeBannerEl: A,
      bindSwipe: K,
      onTouchStartSwipeBanner: N
    } = vn(n, { vfmContentEl: d, modelValueLocal: y }), q = I(() => l ? i.indexOf(l) : -1);
    ee([() => n.zIndexFn, q], () => {
      g.value && G(q.value);
    }), we(() => {
      st(s, l);
    }), n.modelValue && (y.value = !0);
    function X() {
      let M = !1;
      return a("beforeOpen", { stop: () => M = !0 }), M ? !1 : (st(i, l), st(u, l), ae(), R(), !0);
    }
    function ie() {
      let M = !1;
      return a("beforeClose", { stop: () => M = !0 }), M ? !1 : (Ve(u, l), ae(), w(), p(), !0);
    }
    function fe() {
      y.value = !1;
    }
    Ae(() => {
      V(), Ve(s, l), Ve(i, l), w(), ae();
    });
    async function ae() {
      await ce();
      const M = u.filter((W) => {
        var J;
        const se = xe(W);
        return se?.value.overlayBehavior.value === "auto" && !((J = se?.value.hideOverlay) != null && J.value);
      });
      M.forEach((W, J) => {
        const se = xe(W);
        se != null && se.value && (se.value.overlayVisible.value = J === M.length - 1);
      });
    }
    const pe = lt(() => n.modalId), Te = lt(() => n.hideOverlay), Se = lt(() => n.overlayBehavior), Ee = I(() => ({
      modalId: pe,
      hideOverlay: Te,
      overlayBehavior: Se,
      overlayVisible: Q,
      toggle(M) {
        return new Promise((W) => {
          le = Ko((se) => W(se));
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
      M.displayDirective !== "if" || T(g) ? be((c(), v("div", ke({ key: 0 }, T(r), {
        ref_key: "vfmRootEl",
        ref: m,
        class: ["vfm vfm--fixed vfm--inset", { "vfm--prevent-none": M.background === "interactive" }],
        style: { zIndex: T(S) },
        role: "dialog",
        "aria-modal": "true",
        onKeydown: W[7] || (W[7] = to(() => T(h)(), ["esc"])),
        onMouseup: W[8] || (W[8] = Ne(() => T(C)(), ["self"])),
        onMousedown: W[9] || (W[9] = Ne((J) => T(z)(J), ["self"]))
      }), [
        Te.value ? F("", !0) : (c(), Z(ye, ke({ key: 0 }, T(re), gt(T(ve))), {
          default: U(() => [
            M.displayDirective !== "if" || T(Q) ? be((c(), v("div", {
              key: 0,
              class: k(["vfm__overlay vfm--overlay vfm--absolute vfm--inset vfm--prevent-none", M.overlayClass]),
              style: ft(M.overlayStyle),
              "aria-hidden": "true"
            }, null, 6)), [
              [Ce, M.displayDirective !== "show" || T(Q)],
              [T(it), M.displayDirective !== "visible" || T(Q)]
            ]) : F("", !0)
          ]),
          _: 1
        }, 16)),
        D(ye, ke(T(Y), gt(T(O))), {
          default: U(() => [
            M.displayDirective !== "if" || T(H) ? be((c(), v("div", ke({
              key: 0,
              ref_key: "vfmContentEl",
              ref: d,
              class: ["vfm__content vfm--outline-none", [M.contentClass, { "vfm--prevent-auto": M.background === "interactive" }]],
              style: M.contentStyle,
              tabindex: "0"
            }, T(K), {
              onMousedown: W[6] || (W[6] = () => T(z)())
            }), [
              B(M.$slots, "default", Mt(oo({ close: fe }))),
              M.showSwipeBanner ? (c(), v("div", {
                key: 0,
                ref_key: "swipeBannerEl",
                ref: A,
                class: "vfm-swipe-banner-container",
                onTouchstart: W[2] || (W[2] = (J) => T(N)(J))
              }, [
                B(M.$slots, "swipe-banner", {}, () => [
                  b("div", {
                    class: "vfm-swipe-banner-back",
                    onTouchstart: W[0] || (W[0] = (J) => M.swipeToClose === "left" && J.preventDefault())
                  }, null, 32),
                  b("div", {
                    class: "vfm-swipe-banner-forward",
                    onTouchstart: W[1] || (W[1] = (J) => M.swipeToClose === "right" && J.preventDefault())
                  }, null, 32)
                ])
              ], 544)) : !M.showSwipeBanner && M.preventNavigationGestures ? (c(), v("div", {
                key: 1,
                class: "vfm-swipe-banner-container",
                onTouchstart: W[5] || (W[5] = (J) => T(N)(J))
              }, [
                b("div", {
                  class: "vfm-swipe-banner-back",
                  onTouchstart: W[3] || (W[3] = (J) => M.swipeToClose === "left" && J.preventDefault())
                }, null, 32),
                b("div", {
                  class: "vfm-swipe-banner-forward",
                  onTouchstart: W[4] || (W[4] = (J) => M.swipeToClose === "right" && J.preventDefault())
                }, null, 32)
              ], 32)) : F("", !0)
            ], 16)), [
              [Ce, M.displayDirective !== "show" || T(H)],
              [T(it), M.displayDirective !== "visible" || T(H)]
            ]) : F("", !0)
          ]),
          _: 3
        }, 16)
      ], 16)), [
        [Ce, M.displayDirective !== "show" || T(g)],
        [T(it), M.displayDirective !== "visible" || T(g)]
      ]) : F("", !0)
    ], 8, ["to", "disabled"]));
  }
});
function Ie() {
  const t = mn();
  if (!t)
    throw new Error(
      `[Vue Final Modal]: getActiveVfm was called with no active Vfm. Did you forget to install vfm?
	const vfm = createVfm()
	app.use(vfm)
This will fail in production.`
    );
  return t;
}
function _t(t, e = Kt) {
  const { component: o, slots: n, ...a } = t, r = typeof n > "u" ? {} : Object.fromEntries(Rt(n).map(([l, s]) => pt(s) ? [l, s] : Je(s) ? [l, {
    ...s,
    component: We(s.component)
  }] : [l, We(s)]));
  return {
    ...a,
    component: We(o || e),
    slots: r
  };
}
function yn(t) {
  const e = ut({
    id: /* @__PURE__ */ Symbol("useModal"),
    modelValue: !!(t != null && t.defaultModelValue),
    resolveOpened: () => {
    },
    resolveClosed: () => {
    },
    attrs: {},
    ..._t(t)
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
    const { slots: u, ...m } = _t(i, e.component);
    i.defaultModelValue !== void 0 && (e.defaultModelValue = i.defaultModelValue), i?.keepAlive !== void 0 && (e.keepAlive = i?.keepAlive), r(e, m), u && Rt(u).forEach(([d, f]) => {
      const w = e.slots[d];
      pt(w) ? e.slots[d] = f : Je(w) && Je(f) ? r(w, f) : e.slots[d] = f;
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
const gn = ["innerHTML"], wn = /* @__PURE__ */ E({
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
    return (s, i) => a.value ? (c(!0), v(te, { key: 0 }, oe(T(o), (u, m) => (c(), Z(Ke(u.component), ke({
      key: u.id
    }, {
      displayDirective: u != null && u.keepAlive ? "show" : void 0,
      ...typeof u.attrs == "object" ? u.attrs : {}
    }, {
      modelValue: u.modelValue,
      "onUpdate:modelValue": (d) => u.modelValue = d,
      onClosed: () => r(m),
      onOpened: () => l(m)
    }), ze({ _: 2 }, [
      oe(u.slots, (d, f) => ({
        name: f,
        fn: U(() => [
          T(pt)(d) ? (c(), v("div", {
            key: 0,
            innerHTML: d
          }, null, 8, gn)) : T(Je)(d) ? (c(), Z(Ke(d.component), Mt(ke({ key: 1 }, d.attrs)), null, 16)) : (c(), Z(Ke(d), { key: 2 }))
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
      class: k([
        e.styles,
        e.padding,
        e.border,
        { "shadow-sm": !e.flat && !e.styles.includes("shadow") },
        { "rounded-md": !e.boxed && !e.styles.includes("rounded") },
        "border bg-card"
      ])
    }, [
      B(e.$slots, "default")
    ], 2));
  }
}), ne = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, a] of e)
    o[n] = a;
  return o;
}, $n = {}, kn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function Cn(t, e) {
  return c(), v("svg", kn, e[0] || (e[0] = [
    b("path", { d: "M7 10l5 5 5-5z" }, null, -1)
  ]));
}
const Bt = /* @__PURE__ */ ne($n, [["render", Cn]]), Tn = { class: "text-xl font-medium" }, Sn = { class: "pt-4" }, En = { key: 1 }, _n = { class: "p-2" }, br = /* @__PURE__ */ E({
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
          b("h3", Tn, _(o.title), 1),
          D(ye, { name: "rotate" }, {
            default: U(() => [
              b("div", {
                class: k({ rotated: e.value, "not-rotated": !e.value })
              }, [
                B(o.$slots, "chevron", {}, () => [
                  D(Bt, { class: "w-5 h-5" })
                ])
              ], 2)
            ]),
            _: 3
          })
        ]),
        be(b("div", Sn, [
          B(o.$slots, "default")
        ], 512), [
          [Ce, e.value]
        ])
      ]),
      _: 3
    })) : o.variant === "minimal" ? (c(), v("div", En, [
      b("div", {
        onClick: n[1] || (n[1] = (a) => e.value = !e.value),
        class: "p-2 border-b-2 border-base-text flex items-center justify-between gap-2 cursor-pointer"
      }, [
        b("h3", null, _(o.title), 1),
        D(ye, { name: "rotate" }, {
          default: U(() => [
            b("div", {
              class: k({ rotated: e.value, "not-rotated": !e.value })
            }, [
              B(o.$slots, "chevron", {}, () => [
                D(Bt, { class: "w-4 h-4" })
              ])
            ], 2)
          ]),
          _: 3
        })
      ]),
      be(b("div", _n, [
        B(o.$slots, "default")
      ], 512), [
        [Ce, e.value]
      ])
    ])) : F("", !0);
  }
}), Bn = {}, Vn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function Mn(t, e) {
  return c(), v("svg", Vn, e[0] || (e[0] = [
    b("path", { d: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" }, null, -1)
  ]));
}
const bt = /* @__PURE__ */ ne(Bn, [["render", Mn]]), Dn = {}, Fn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function xn(t, e) {
  return c(), v("svg", Fn, e[0] || (e[0] = [
    b("path", { d: "M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" }, null, -1)
  ]));
}
const In = /* @__PURE__ */ ne(Dn, [["render", xn]]), Nn = {}, zn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function On(t, e) {
  return c(), v("svg", zn, e[0] || (e[0] = [
    b("path", { d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" }, null, -1)
  ]));
}
const Ln = /* @__PURE__ */ ne(Nn, [["render", On]]), An = {}, Rn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function Pn(t, e) {
  return c(), v("svg", Rn, e[0] || (e[0] = [
    b("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, null, -1)
  ]));
}
const ot = /* @__PURE__ */ ne(An, [["render", Pn]]), Gt = (t = 800) => {
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
}) || [] }), jn = (t, e, o) => {
  if (e < 0 || e >= t.length || o < 0 || o >= t.length)
    throw new Error("Invalid indices");
  const [n] = t.splice(e, 1);
  return t.splice(o, 0, n), t;
}, Hn = (t) => Math.floor(t) !== t && t.toString().split(".")[1]?.length || 0, Un = (t, e) => t ? t.split(",").map((n) => n.trim().toLowerCase()).some((n) => {
  if (n.startsWith("."))
    return e.name.toLowerCase().endsWith(n);
  if (n.endsWith("/*")) {
    const a = n.split("/")[0];
    return e.type.startsWith(a + "/");
  }
  return e.type === n;
}) : !0, Kn = { class: "flex justify-center gap-2 w-full p-4" }, Wn = ["onMouseenter"], Gn = ["onClick"], qn = ["src", "alt"], Zn = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-secondary-text bg-card rounded-md"
}, Qn = ["onClick"], Yn = /* @__PURE__ */ E({
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
      o.value = jn(o.value, d, f), n.value === d ? n.value = f : n.value > d && n.value <= f ? n.value-- : n.value < d && n.value >= f && n.value++;
    }, m = I(() => e.size === "lg" ? "w-16 h-16" : "w-14 h-14");
    return ee(o, () => s.value = r(o.value)), (d, f) => (c(), v("div", Kn, [
      B(d.$slots, "additional-items-before"),
      D(T(uo), {
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
            class: k(`relative border-secondary rounded-md ${m.value} ${n.value === S ? "border-3 bg-secondary" : ""}`),
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
              }, null, 8, qn)) : (c(), v("span", Zn, [
                w.type === "audio" ? B(d.$slots, "audio-icon", { key: 0 }, () => [
                  D(In, { class: "w-5 h-5" })
                ]) : w.type === "video" ? B(d.$slots, "video-icon", { key: 1 }, () => [
                  D(Ln, { class: "w-5 h-5" })
                ]) : B(d.$slots, "file-icon", { key: 2 }, () => [
                  D(bt, { class: "w-5 h-5" })
                ])
              ]))
            ], 8, Gn),
            l.value === S || T(a) ? (c(), v("button", {
              key: 0,
              onClick: (G) => i(S),
              class: "absolute cursor-pointer top-0 right-0 text-secondary-text bg-card/80 rounded-full w-5 h-5 flex justify-center items-center"
            }, [
              B(d.$slots, "remove-icon", {}, () => [
                D(ot, { class: "w-3 h-3" })
              ])
            ], 8, Qn)) : F("", !0)
          ], 42, Wn)
        ]),
        _: 3
      }, 8, ["modelValue"]),
      B(d.$slots, "additional-items-after")
    ]));
  }
}), Xn = ["src"], yr = /* @__PURE__ */ E({
  __name: "Avatar",
  props: {
    src: {},
    styles: { default: "" }
  },
  setup(t) {
    return (e, o) => (c(), v("img", {
      src: e.src,
      alt: "avatar",
      class: k(`rounded-full ${e.styles}`)
    }, null, 10, Xn));
  }
}), Jn = { class: "flex items-center" }, el = ["src", "alt"], gr = /* @__PURE__ */ E({
  __name: "AvatarGroup",
  props: {
    avatars: {},
    width: { default: "w-6" },
    overlap: { default: 12 }
  },
  setup(t) {
    return (e, o) => (c(), v("div", Jn, [
      (c(!0), v(te, null, oe(e.avatars, (n, a) => (c(), v("img", {
        key: a,
        src: n,
        alt: `avatar ${a + 1}`,
        class: k(`${e.width} rounded-full relative`),
        style: ft({ marginLeft: a === 0 ? "0" : `-${e.overlap}px` })
      }, null, 14, el))), 128))
    ]));
  }
}), wr = /* @__PURE__ */ E({
  __name: "Badge",
  props: {
    content: {},
    color: { default: "primary" },
    size: { default: "xs" },
    styles: {}
  },
  setup(t) {
    return (e, o) => (c(), v("div", {
      class: k(`text-${e.size} text-black font-bold bg-${e.color} rounded-xl px-1 ${e.styles} min-w-3 min-h-3`)
    }, [
      B(e.$slots, "default", {}, () => [
        tt(_(e.content), 1)
      ])
    ], 2));
  }
}), tl = ["disabled", "type"], ol = /* @__PURE__ */ E({
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
      class: k(s.value),
      disabled: i.disabled,
      type: i.type
    }, [
      B(i.$slots, "default")
    ], 42, tl));
  }
}), nl = {}, ll = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function al(t, e) {
  return c(), v("svg", ll, e[0] || (e[0] = [
    b("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }, null, -1)
  ]));
}
const Zt = /* @__PURE__ */ ne(nl, [["render", al]]), rl = { class: "flex items-center gap-2" }, sl = ["for"], il = {
  key: 0,
  class: "text-error text-sm"
}, $r = /* @__PURE__ */ E({
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
      b("div", rl, [
        b("button", {
          onClick: l[0] || (l[0] = (s) => a()),
          type: "button",
          class: k(["rounded-xs cursor-pointer border-secondary border-2 w-4 h-4 flex items-center justify-center text-black", { "bg-secondary": o.value, "hover:bg-secondary/30": !o.value }])
        }, [
          o.value ? (c(), Z(Zt, {
            key: 0,
            class: "w-3 h-3"
          })) : F("", !0)
        ], 2),
        b("label", { for: r.name }, [
          B(r.$slots, "default")
        ], 8, sl)
      ]),
      r.error ? (c(), v("p", il, _(r.error), 1)) : F("", !0)
    ]));
  }
}), kr = /* @__PURE__ */ E({
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
      class: k(a.value ? l.value : r.value)
    }, [
      B(s.$slots, "default")
    ], 2));
  }
});
function ul(t) {
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
    return (n, a) => T(ul)(n.icon) ? (c(), Z(T(co), {
      key: 0,
      icon: n.icon,
      size: n.size
    }, null, 8, ["icon", "size"])) : (c(), Z(Ke(n.icon), {
      key: 1,
      class: k(o.value)
    }, null, 8, ["class"]));
  }
}), Le = /* @__PURE__ */ E({
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
    return (r, l) => (c(), Z(ol, {
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
}), dl = /* @__PURE__ */ E({
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
      B(o.$slots, "default")
    ], 32));
  }
}), cl = {}, vl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function fl(t, e) {
  return c(), v("svg", vl, e[0] || (e[0] = [
    b("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" }, null, -1)
  ]));
}
const pl = /* @__PURE__ */ ne(cl, [["render", fl]]), ml = {
  key: 0,
  class: "p-2 absolute top-0 right-0 text-sm"
}, Cr = /* @__PURE__ */ E({
  __name: "CodeSnippet",
  props: {
    snippet: {},
    allowCopy: { type: Boolean },
    styles: {},
    copyIcon: { default: () => pl }
  },
  setup(t) {
    const e = t, o = x(!1), { copy: n } = io(), a = async () => {
      e.snippet && await n(e.snippet);
    };
    return (r, l) => (c(), Z(dl, {
      modelValue: o.value,
      "onUpdate:modelValue": l[1] || (l[1] = (s) => o.value = s)
    }, {
      default: U(() => [
        b("div", {
          class: k([r.styles, "p-2 rounded-lg bg-base whitespace-pre-wrap text-sm font-mono relative overflow-auto"])
        }, [
          b("p", null, _(r.snippet), 1),
          r.allowCopy && o.value ? (c(), v("div", ml, [
            D(Le, {
              icon: r.copyIcon,
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
}, $l = ["name", "type", "placeholder", "value", "disabled"], kl = {
  key: 0,
  class: "text-error text-sm"
}, Cl = {
  key: 1,
  class: "text-success text-sm"
}, nt = /* @__PURE__ */ E({
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
        class: k(d.labelStyles)
      }, _(d.label), 11, hl),
      b("div", {
        class: k([
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
          class: k(["flex-grow w-full flex items-center gap-1 flex-wrap p-2", { "pl-0": d.icon }])
        }, [
          B(d.$slots, "left-section"),
          d.disabled ? (c(), v("div", {
            key: 0,
            class: k([{ "pl-0": d.icon, "text-sm": d.size === "sm" }, "flex-grow overflow-hidden whitespace-nowrap"])
          }, [
            a.value ? (c(), v("span", yl, _(a.value), 1)) : d.value ? (c(), v("span", gl, _(d.value), 1)) : d.placeholder ? (c(), v("span", wl, _(d.placeholder), 1)) : F("", !0)
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
            class: k([{ "placeholder:text-sm": d.size === "sm" }, "p-0 flex-grow border-none outline-none rounded-lg bg-transparent placeholder:text-secondary-text"])
          }, null, 42, $l))
        ], 2),
        B(d.$slots, "right-section")
      ], 2),
      d.error && typeof d.error != "boolean" ? (c(), v("p", kl, _(d.error), 1)) : d.success && typeof d.error != "boolean" ? (c(), v("p", Cl, _(d.success), 1)) : F("", !0)
    ]));
  }
}), Tr = /* @__PURE__ */ E({
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
      Hn(s) > 0 && (s = (Math.round(s * 100) / 100).toFixed(2)), o.value = s;
    }, a = I(() => {
      if (o.value)
        return `${e.currencySymbol}${o.value}`;
    });
    return (r, l) => (c(), Z(nt, {
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
}, Tl = (t) => {
  const e = navigator.language || "en-US", o = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return new Intl.DateTimeFormat(e, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
    timeZone: o
  }).format(t);
}, Sl = (t) => `${et(t)} ${Tl(t)}`, El = (t) => `${et(t[0])} - ${et(t[1])}`, _l = {}, Bl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function Vl(t, e) {
  return c(), v("svg", Bl, e[0] || (e[0] = [
    b("path", { d: "M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" }, null, -1)
  ]));
}
const Ml = /* @__PURE__ */ ne(_l, [["render", Vl]]), Dl = { class: "font-medium" }, Fl = {
  key: 0,
  class: "text-error text-sm"
}, Sr = /* @__PURE__ */ E({
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
    styles: {},
    icon: { default: () => Ml }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const e = t, o = P(t, "modelValue"), n = x(null), a = I(() => e.range ? (r) => El([r[0], r[1]]) : e.includeTime ? (r) => Sl(r) : (r) => et(r));
    return (r, l) => (c(), v("div", {
      class: k(r.styles)
    }, [
      b("label", Dl, _(r.label), 1),
      D(T(vo), {
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
          D(nt, {
            placeholder: r.placeholder,
            value: s,
            icon: r.icon,
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
      r.error ? (c(), v("p", Fl, _(r.error), 1)) : F("", !0)
    ], 2));
  }
}), xl = /* @__PURE__ */ E({
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
      B(r.$slots, "default", { isDragOver: n.value })
    ], 32));
  }
}), Il = {}, Nl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function zl(t, e) {
  return c(), v("svg", Nl, e[0] || (e[0] = [
    b("path", { d: "M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" }, null, -1)
  ]));
}
const Ol = /* @__PURE__ */ ne(Il, [["render", zl]]), Ll = ["multiple", "accept"], Qt = /* @__PURE__ */ E({
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
      }, null, 40, Ll),
      b("div", { onClick: r }, [
        B(l.$slots, "default")
      ])
    ]));
  }
}), Al = {}, Rl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function Pl(t, e) {
  return c(), v("svg", Rl, e[0] || (e[0] = [
    b("path", { d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" }, null, -1)
  ]));
}
const jl = /* @__PURE__ */ ne(Al, [["render", Pl]]), Hl = { class: "flex flex-col gap-2 text-sm" }, Ul = { class: "flex gap-2 items-center" }, Kl = { key: 0 }, Wl = {
  key: 1,
  class: "text-xl"
}, Gl = {
  key: 2,
  class: "text-sm"
}, ql = /* @__PURE__ */ E({
  __name: "FileList",
  props: {
    files: {},
    showDownload: { type: Boolean },
    showDelete: { type: Boolean }
  },
  emits: ["download", "delete"],
  setup(t, { emit: e }) {
    const o = e;
    return (n, a) => (c(), v("div", Hl, [
      (c(!0), v(te, null, oe(n.files, (r) => (c(), v("div", Ul, [
        n.showDownload ? (c(), v("div", Kl, [
          D(Le, {
            icon: jl,
            onClick: (l) => o("download", r),
            variant: "light",
            color: "secondary"
          }, null, 8, ["onClick"])
        ])) : (c(), v("div", Wl, [
          B(n.$slots, "file-icon", {}, () => [
            D(bt, { class: "w-5 h-5" })
          ])
        ])),
        b("p", null, _(r.name), 1),
        a[0] || (a[0] = b("div", { class: "flex-grow" }, null, -1)),
        n.showDelete ? (c(), v("div", Gl, [
          D(Le, {
            icon: ot,
            onClick: (l) => o("delete", r),
            color: "error",
            variant: "light",
            size: "sm"
          }, null, 8, ["onClick"])
        ])) : F("", !0)
      ]))), 256))
    ]));
  }
}), Zl = {
  key: 0,
  class: "font-medium mb-1"
}, Ql = { key: 1 }, Yl = {
  key: 0,
  class: "mb-2"
}, Xl = { class: "font-medium" }, Jl = {
  key: 0,
  class: "text-error text-sm mt-1"
}, ea = /* @__PURE__ */ E({
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
      const u = Array.from(s).filter((d) => Un(e.accept, d)), m = e.limit ? e.limit - o.value.length : u.length;
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
      s.label ? (c(), v("p", Zl, _(s.label), 1)) : F("", !0),
      (s.limit ? !s.disabled && o.value.length < s.limit : !s.disabled) ? (c(), v("div", Ql, [
        D(Qt, {
          onChange: l,
          accept: s.accept
        }, {
          default: U(() => [
            D(xl, { onDrop: r }, {
              default: U(({ isDragOver: u }) => [
                b("div", {
                  class: k(["cursor-pointer duration-300 text-center border-2 border-dashed py-6 px-4 rounded-lg", {
                    "bg-secondary/30": u,
                    "text-secondary border-secondary": !s.error,
                    "text-error border-error": s.error
                  }])
                }, [
                  s.withIcon ? (c(), v("div", Yl, [
                    B(s.$slots, "upload-icon", {}, () => [
                      D(Ol, { class: "w-5 h-5 mx-auto" })
                    ])
                  ])) : F("", !0),
                  b("p", Xl, _(s.dropText), 1)
                ], 2)
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["accept"]),
        s.error ? (c(), v("p", Jl, _(s.error), 1)) : F("", !0)
      ])) : F("", !0),
      o.value.length > 0 && s.showFileList ? (c(), v("div", {
        key: 2,
        class: k({ "mt-4": !s.disabled })
      }, [
        D(ql, {
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
}, ta = ["onClick", "onMouseover"], oa = { key: 1 }, na = {
  key: 0,
  class: "text-xs text-secondary-text"
}, la = /* @__PURE__ */ E({
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
    return at("ArrowDown", (f) => {
      o.open && o.options && o.options.length > 0 && (f.preventDefault(), d(1));
    }), at("ArrowUp", (f) => {
      o.open && o.options && o.options.length > 0 && (f.preventDefault(), d(-1));
    }), at("Enter", (f) => {
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
          class: k([
            "rounded-md bg-dropdown text-dropdown-text absolute overflow-auto max-h-64 flex flex-col cursor-pointer z-50",
            f.width,
            f.direction === "right" ? "right-0" : "left-0",
            l.value
          ])
        }, [
          (c(!0), v(te, null, oe(f.options, (S, G) => (c(), v("div", {
            key: f.trackBy ? S[f.trackBy] : S,
            onClick: ($) => i(S),
            onMouseover: ($) => r.value = G,
            class: k(["text-md py-2 px-6 rounded-md text-left", { "bg-dropdown-select": r.value === G }])
          }, [
            T(a).option ? B(f.$slots, "option", {
              key: 0,
              option: S
            }, void 0, !0) : (c(), v("div", oa, [
              tt(_(f.optionLabel ? S[f.optionLabel] : S) + " ", 1),
              f.optionDescription && S[f.optionDescription] ? (c(), v("div", na, _(S[f.optionDescription]), 1)) : F("", !0)
            ]))
          ], 42, ta))), 128))
        ], 2)) : F("", !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), yt = /* @__PURE__ */ ne(la, [["__scopeId", "data-v-5cd7ada7"]]), Er = /* @__PURE__ */ E({
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
        onClick: i[0] || (i[0] = (u) => a.value = !T(a))
      }, [
        B(s.$slots, "trigger")
      ]),
      D(yt, {
        container: T(r),
        options: s.options,
        open: T(a),
        "option-label": s.label,
        "track-by": s.trackBy,
        "accepts-empty-selection": "",
        onSelect: l,
        width: "w-64",
        direction: s.direction
      }, ze({ _: 2 }, [
        T(n).option ? {
          name: "option",
          fn: U(({ option: u }) => [
            B(s.$slots, "option", { option: u })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["container", "options", "open", "option-label", "track-by", "direction"])
    ], 512));
  }
}), aa = { class: "flex items-center justify-center" }, ra = {
  key: 0,
  class: "text-center font-medium mt-2"
}, sa = /* @__PURE__ */ E({
  __name: "Loader",
  props: {
    label: {}
  },
  setup(t) {
    return (e, o) => (c(), v("div", aa, [
      b("div", null, [
        o[0] || (o[0] = b("div", { class: "spinner border-4 border-base border-t-primary" }, null, -1)),
        e.label ? (c(), v("p", ra, _(e.label), 1)) : F("", !0)
      ])
    ]));
  }
}), _r = /* @__PURE__ */ ne(sa, [["__scopeId", "data-v-50892209"]]), ia = { class: "flex items-center justify-center" }, ua = { key: 0 }, da = ["src", "alt"], ca = { key: 1 }, va = ["src"], fa = { key: 2 }, pa = ["src"], ma = {
  key: 3,
  class: "text-center"
}, ha = /* @__PURE__ */ E({
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
      const l = dt("swiper-slide"), s = dt("swiper-container");
      return c(), Z(s, {
        "slides-per-view": 1,
        "centered-slides": !0,
        navigation: !T(o),
        onSwiperslidechange: n
      }, {
        default: U(() => [
          (c(!0), v(te, null, oe(a.files, (i) => (c(), Z(l, null, {
            default: U(() => [
              b("div", ia, [
                i.type === "image" ? (c(), v("div", ua, [
                  b("img", {
                    src: i.preview,
                    alt: i.name,
                    class: k(a.maxMediaHeight)
                  }, null, 10, da)
                ])) : i.type === "video" ? (c(), v("div", ca, [
                  b("video", {
                    src: i.preview,
                    controls: "",
                    class: k(a.maxMediaHeight)
                  }, null, 10, va)
                ])) : i.type === "audio" ? (c(), v("div", fa, [
                  b("audio", {
                    src: i.preview,
                    controls: ""
                  }, null, 8, pa)
                ])) : (c(), v("div", ma, [
                  B(a.$slots, "file-icon", {}, () => [
                    D(bt, { class: "w-6 h-6 mx-auto" })
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
}), ba = {}, ya = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function ga(t, e) {
  return c(), v("svg", ya, e[0] || (e[0] = [
    b("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }, null, -1)
  ]));
}
const wa = /* @__PURE__ */ ne(ba, [["render", ga]]), $a = {
  key: 0,
  class: "font-medium mb-1"
}, ka = {
  key: 1,
  class: "mb-2"
}, Ca = {
  key: 0,
  class: "text-error text-sm mt-1"
}, Br = /* @__PURE__ */ E({
  __name: "MediaInput",
  props: /* @__PURE__ */ j({
    label: {},
    placeholder: {},
    error: {},
    addIcon: { default: () => wa }
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
      l.label ? (c(), v("label", $a, _(l.label), 1)) : F("", !0),
      e.value.length > 0 ? (c(), v("div", ka, [
        D(ha, {
          "selected-idx": o.value,
          "onUpdate:selectedIdx": s[0] || (s[0] = (i) => o.value = i),
          files: r.value
        }, null, 8, ["selected-idx", "files"]),
        D(Yn, {
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
                D(Le, {
                  icon: l.addIcon,
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
        l.error ? (c(), v("p", Ca, _(l.error), 1)) : F("", !0)
      ])) : (c(), Z(ea, {
        key: 2,
        "with-icon": "",
        "drop-text": l.placeholder,
        modelValue: e.value,
        "onUpdate:modelValue": s[3] || (s[3] = (i) => e.value = i),
        error: l.error
      }, null, 8, ["drop-text", "modelValue", "error"]))
    ]));
  }
}), Ta = {
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
    return Ft(() => o("close")), (n, a) => (c(), Z(T(Kt), {
      "overlay-transition": "vfm-fade",
      "content-transition": "vfm-fade",
      class: "flex justify-center items-center",
      "content-class": t.contentClass
    }, {
      default: U(() => [
        D(Wt, { styles: "w-full" }, {
          default: U(() => [
            B(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["content-class"]));
  }
}, Vr = /* @__PURE__ */ E({
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
    const e = t, o = P(t, "modelValue"), n = Re(), a = yn({
      component: Ta,
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
    }), (r, l) => (c(), Z(T(wn)));
  }
}), Sa = {
  key: 0,
  class: "text-error text-sm"
}, Mr = /* @__PURE__ */ E({
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
      a.value = a.value.filter((V, L) => L !== y);
    }, w = () => {
      i.value = !0;
    }, S = () => {
      i.value = !1;
    }, G = () => {
      o.searchable || (i.value ? S() : w());
    }, $ = (y) => {
      const V = y.target;
      u.value && !u.value.contains(V) && S();
    };
    return we(() => {
      document.addEventListener("mousedown", $);
    }), Ae(() => {
      document.removeEventListener("mousedown", $);
    }), ee(r, () => {
      o.searchable && r.value.length > 0 && w();
    }), (y, V) => (c(), v("div", {
      class: k([y.styles])
    }, [
      b("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: u
      }, [
        b("div", {
          onClick: V[4] || (V[4] = (L) => G()),
          class: k({ "cursor-pointer": !y.searchable })
        }, [
          D(nt, {
            modelValue: r.value,
            "onUpdate:modelValue": V[0] || (V[0] = (L) => r.value = L),
            input: l.value,
            "onUpdate:input": V[1] || (V[1] = (L) => l.value = L),
            label: y.label,
            placeholder: y.placeholder,
            disabled: !y.searchable,
            icon: y.icon,
            error: !!y.error,
            size: y.size,
            color: y.color,
            variant: y.variant,
            styles: y.textboxStyles,
            onFocus: V[2] || (V[2] = (L) => n("focus", L)),
            onBlur: V[3] || (V[3] = (L) => n("blur", L))
          }, {
            "left-section": U(() => [
              (c(!0), v(te, null, oe(a.value, (L, le) => (c(), v("div", {
                key: L[y.trackBy]
              }, [
                B(y.$slots, "selectedTag", {
                  option: L,
                  deselect: () => f(le)
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
        }, ze({ _: 2 }, [
          T(s).option ? {
            name: "option",
            fn: U(({ option: L }) => [
              B(y.$slots, "option", { option: L })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      y.error && typeof y.error != "boolean" ? (c(), v("p", Sa, _(y.error), 1)) : F("", !0)
    ], 2));
  }
}), Ea = { class: "font-medium" }, _a = {
  key: 0,
  class: "text-text-secondary flex justify-center items-center w-10 rounded-l-md"
}, Ba = ["placeholder", "min", "max", "disabled"], Va = {
  key: 0,
  class: "text-error text-sm"
}, Ma = {
  key: 1,
  class: "text-error text-sm"
}, Dr = /* @__PURE__ */ E({
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
      b("h4", Ea, _(r.label), 1),
      b("div", {
        class: k(["rounded-lg flex h-10 items-center", n.value, r.styles, { error: a.value || r.error, "px-2": !r.icon }])
      }, [
        r.icon ? (c(), v("div", _a, [
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
        }, null, 8, Ba), [
          [no, o.value]
        ])
      ], 2),
      a.value ? (c(), v("p", Va, _(a.value), 1)) : r.error && typeof r.error == "string" ? (c(), v("p", Ma, _(r.error), 1)) : F("", !0)
    ]));
  }
}), Fr = /* @__PURE__ */ E({
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
      class: k([n.styles, { "whitespace-pre-wrap": n.includeWhitespace }])
    }, _(o.value), 3));
  }
}), Da = ["name", "value", "checked"], Fa = { class: "rounded-full border-2 border-secondary flex items-center justify-center h-4 w-4" }, xr = /* @__PURE__ */ E({
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
      }, null, 40, Da),
      b("span", Fa, [
        b("span", {
          class: k(["rounded-full h-2 w-2", { "bg-secondary": r.value || l.value }])
        }, null, 2)
      ]),
      b("span", null, _(i.label), 1)
    ], 32));
  }
}), xa = {}, Ia = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
function Na(t, e) {
  return c(), v("svg", Ia, e[0] || (e[0] = [
    b("path", { d: "M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z" }, null, -1)
  ]));
}
const za = /* @__PURE__ */ ne(xa, [["render", Na]]), Oa = { class: "flex items-center pr-1" }, La = { class: "flex items-center pr-2 text-secondary-text" }, Aa = {
  key: 0,
  class: "text-error text-sm"
}, Ir = /* @__PURE__ */ E({
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
    const o = t, n = e, a = P(t, "modelValue"), r = P(t, "searchQuery"), l = P(t, "input"), s = Re(), { dropdownOpen: i, dropdownContainer: u, open: m, close: d } = Yt(), f = ($) => {
      const y = o.formatResult($);
      a.value = y, n("select", y), o.optionLabel && o.searchable ? r.value = $[o.optionLabel] : o.searchable && (r.value = $), ce(d);
    }, w = ($) => {
      a.value = null, r.value = "";
    }, S = () => {
      o.searchable || (i.value ? d() : m());
    }, G = I(() => a.value && o.optionLabel ? a.value[o.optionLabel] : a.value ? a.value : null);
    return ee(r, () => {
      o.searchable && r.value.length > 0 ? m() : o.searchable && d();
    }), ($, y) => (c(), v("div", {
      class: k([$.styles])
    }, [
      b("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: u
      }, [
        b("div", {
          onClick: y[5] || (y[5] = (V) => S()),
          class: k({ "cursor-pointer": !$.searchable })
        }, [
          D(nt, {
            modelValue: r.value,
            "onUpdate:modelValue": y[1] || (y[1] = (V) => r.value = V),
            input: l.value,
            "onUpdate:input": y[2] || (y[2] = (V) => l.value = V),
            value: G.value,
            label: $.label,
            placeholder: $.placeholder,
            disabled: !$.searchable || $.lockOnSelect && a.value,
            icon: a.value?.icon ?? $.icon,
            error: !!$.error,
            size: $.size,
            color: $.color,
            variant: $.variant,
            styles: $.textboxStyles,
            onFocus: y[3] || (y[3] = (V) => n("focus", V)),
            onBlur: y[4] || (y[4] = (V) => n("blur", V))
          }, ze({ _: 2 }, [
            $.lockOnSelect && $.searchable && a.value ? {
              name: "right-section",
              fn: U(() => [
                b("div", Oa, [
                  D(Le, {
                    icon: ot,
                    onClick: y[0] || (y[0] = (V) => w()),
                    variant: "subtle",
                    color: "base",
                    size: $.size
                  }, null, 8, ["size"])
                ])
              ]),
              key: "0"
            } : $.searchable ? void 0 : {
              name: "right-section",
              fn: U(() => [
                b("div", La, [
                  D(za, { class: "w-4 h-4" })
                ])
              ]),
              key: "1"
            }
          ]), 1032, ["modelValue", "input", "value", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        D(yt, {
          container: T(u),
          options: $.options,
          "option-label": $.optionLabel,
          "track-by": $.trackBy,
          open: T(i),
          "accepts-empty-selection": $.acceptsEmptySelection,
          onSelect: f
        }, ze({ _: 2 }, [
          T(s).option ? {
            name: "option",
            fn: U(({ option: V }) => [
              B($.$slots, "option", { option: V })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      $.error && typeof $.error != "boolean" ? (c(), v("p", Aa, _($.error), 1)) : F("", !0)
    ], 2));
  }
}), Ra = {
  key: 0,
  class: "w-full"
}, Pa = { class: "flex justify-between items-center gap-2 px-4" }, ja = ["onClick"], Ha = { class: "flex justify-between items-center mt-1 px-3" }, Ua = ["onClick"], Ka = ["onClick"], Nr = /* @__PURE__ */ E({
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
    return (i, u) => i.variant === "classic" ? (c(), v("div", Ra, [
      b("div", Pa, [
        (c(!0), v(te, null, oe(a.value, (m, d) => (c(), v(te, {
          key: m.value
        }, [
          b("div", {
            onClick: (f) => s(m, d),
            class: k([
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
          ], 10, ja),
          d < i.steps.length - 1 ? (c(), v("div", {
            key: 0,
            class: k(`flex-grow bg-${a.value[d + 1].status === "uncompleted" ? "secondary-text" : i.color} h-0.5`)
          }, null, 2)) : F("", !0)
        ], 64))), 128))
      ]),
      b("div", Ha, [
        (c(!0), v(te, null, oe(a.value, (m, d) => (c(), v("p", {
          key: "label-" + m.value,
          onClick: (f) => s(m, d),
          class: k([
            m.status === "uncompleted" ? "text-secondary-text" : `text-${i.color}`,
            "text-xs font-medium text-center",
            l(d)
          ])
        }, _(m.label), 11, Ua))), 128))
      ])
    ])) : i.variant === "minimalist" ? (c(), v("div", {
      key: 1,
      class: k(`grid grid-cols-${a.value.length} gap-1`)
    }, [
      (c(!0), v(te, null, oe(a.value, (m, d) => (c(), v("div", {
        key: m.value,
        onClick: (f) => s(m, d)
      }, [
        b("div", {
          class: k(["h-1 rounded-lg mb-1", r(m), l(d)])
        }, null, 2),
        b("p", {
          class: k([
            m.status !== "in-progress" ? "text-secondary-text" : `text-${i.color}`,
            "text-sm font-medium",
            l(d)
          ])
        }, _(m.label), 3)
      ], 8, Ka))), 128))
    ], 2)) : F("", !0);
  }
}), Wa = {};
function Ga(t, e) {
  return c(), v("div", {
    onClick: Ne(() => {
    }, ["stop"])
  }, [
    B(t.$slots, "default")
  ]);
}
const zr = /* @__PURE__ */ ne(Wa, [["render", Ga]]), qa = { class: "overflow-hidden rounded-xl shadow-full-box border border-border" }, Za = { class: "w-full border-collapse table-fixed bg-card overflow-hidden" }, Qa = ["onClick"], Ya = ["colspan", "rowspan"], Or = /* @__PURE__ */ E({
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
    return (s, i) => (c(), v("div", qa, [
      b("table", Za, [
        b("tbody", null, [
          (c(!0), v(te, null, oe(s.rows, (u, m) => (c(), v("tr", {
            key: "row-" + m,
            class: k(a(u, m)),
            onClick: (d) => r(u, m)
          }, [
            (c(!0), v(te, null, oe(Array.isArray(u) ? u : u.cells, (d, f) => (c(), v("td", {
              key: "cell-" + m + "-" + f,
              colspan: d.colspan || 1,
              rowspan: d.rowspan || 1,
              class: k(n(d, m, f)),
              style: ft(o(d))
            }, [
              B(s.$slots, `${l(f)}${m + 1}`, {}, () => [
                tt(_(d.content), 1)
              ])
            ], 14, Ya))), 128))
          ], 10, Qa))), 128))
        ])
      ])
    ]));
  }
}), Xa = ["onClick"], Lr = /* @__PURE__ */ E({
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
        class: k(["tab-container", { "justify-between": o.stretch }])
      }, [
        (c(!0), v(te, null, oe(o.tabs, (a) => (c(), v("button", {
          key: a.name,
          class: k(["cursor-pointer", [{
            "text-error": a.error,
            "underline-offset-8 underline font-medium": a.name === e.value
          }, `text-${o.size}`]]),
          onClick: (r) => e.value = a.name,
          type: "button"
        }, _(a.label), 11, Xa))), 128))
      ], 2),
      (c(!0), v(te, null, oe(o.tabs, (a) => be((c(), v("div", {
        key: a.name
      }, [
        B(o.$slots, `tab-${a.name}`)
      ])), [
        [Ce, a.name === e.value]
      ])), 128))
    ]));
  }
}), Ar = /* @__PURE__ */ E({
  __name: "Tag",
  props: {
    color: { default: "secondary" },
    size: { default: "md" },
    styles: { default: "" },
    rounded: { default: "full" }
  },
  setup(t) {
    return (e, o) => (c(), v("div", {
      class: k(`py-1 px-4 rounded-${e.rounded} duration-100 text-center text-black text-${e.size} bg-${e.color}`)
    }, [
      B(e.$slots, "default")
    ], 2));
  }
}), Ja = { class: "flex items-center justify-between" }, er = ["for"], tr = {
  key: 0,
  class: "text-xs text-secondary-text mr-1"
}, or = ["name", "placeholder", "value", "disabled", "maxlength", "rows"], nr = {
  key: 0,
  class: "text-error text-sm"
}, lr = {
  key: 1,
  class: "text-success text-sm"
}, Rr = /* @__PURE__ */ E({
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
      b("div", Ja, [
        b("label", {
          for: f.name,
          class: "font-medium"
        }, _(f.label), 9, er),
        f.maxlength ? (c(), v("p", tr, _(a.value?.length ?? 0) + " / " + _(f.maxlength), 1)) : F("", !0)
      ]),
      b("div", {
        class: k([
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
          class: k(["rounded-lg p-2 flex-grow bg-transparent outline-none max-w-full placeholder:text-secondary-text border-none", { "field-sizing-content": f.fieldSizingContent }]),
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
        }, null, 42, or)
      ], 2),
      f.error && typeof f.error != "boolean" ? (c(), v("p", nr, _(f.error), 1)) : f.success && typeof f.error != "boolean" ? (c(), v("p", lr, _(f.success), 1)) : F("", !0)
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
}, ar = { class: "grow" }, rr = { class: "text-sm font-medium" }, sr = { class: "text-sm" }, ir = /* @__PURE__ */ E({
  __name: "ToastMessage",
  props: {
    message: {},
    closeIcon: { default: () => ot }
  },
  setup(t) {
    const e = t, { closeToast: o } = Xt();
    return we(() => {
      e.message.duration && setTimeout(() => o(e.message.uuid), e.message.duration);
    }), (n, a) => {
      const r = dt("IconButton");
      return c(), Z(ye, {
        name: "slide-fade",
        appear: ""
      }, {
        default: U(() => [
          b("div", {
            class: k(`w-72 flex items-center gap-2 rounded-md p-2 bg-${n.message.color ?? "success"}/${n.message.opacity ?? 60}`)
          }, [
            b("div", ar, [
              b("p", rr, _(n.message.title), 1),
              b("p", sr, _(n.message.content), 1)
            ]),
            D(r, {
              icon: n.closeIcon,
              color: "base",
              variant: "subtle",
              onClick: a[0] || (a[0] = (l) => T(o)(n.message.uuid))
            }, null, 8, ["icon"])
          ], 2)
        ]),
        _: 1
      });
    };
  }
}), ur = { class: "relative" }, Pr = {
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
    return (a, r) => (c(), v("div", ur, [
      B(a.$slots, "default"),
      n.value.length > 0 ? (c(), v("div", {
        key: 0,
        class: k(["absolute p-4 z-50 flex flex-col gap-2 overflow-hidden", t.position])
      }, [
        (c(!0), v(te, null, oe(n.value, (l) => (c(), v("div", {
          key: l.uuid
        }, [
          B(a.$slots, "toast-content", { message: l }, () => [
            D(ir, { message: l }, null, 8, ["message"])
          ])
        ]))), 128))
      ], 2)) : F("", !0)
    ]));
  }
}, jr = /* @__PURE__ */ E({
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
      class: k([l.value, "cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300"])
    }, [
      b("div", {
        class: k([s.value, "bg-white dark:bg-gray-200 text-black text-sm flex justify-center items-center w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"])
      }, [
        i.icon ? (c(), Z(Pe, {
          key: 0,
          icon: i.icon
        }, null, 8, ["icon"])) : F("", !0)
      ], 2)
    ], 2));
  }
}), dr = { class: "rounded-md bg-dropdown/80 text-dropdown-text p-1 text-xs text-nowrap" }, Hr = /* @__PURE__ */ E({
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
      B(a.$slots, "default"),
      D(ye, { name: "fade" }, {
        default: U(() => [
          o.value ? (c(), v("div", {
            key: 0,
            class: k([n.value, "absolute delay-1000 z-50"])
          }, [
            b("div", dr, [
              B(a.$slots, "tooltip-content", {}, () => [
                tt(_(a.text), 1)
              ])
            ])
          ], 2)) : F("", !0)
        ]),
        _: 3
      })
    ], 32));
  }
}), Ur = {
  install(t) {
    const e = hn();
    t.use(e);
  }
};
export {
  br as Accordion,
  Yn as AttachmentList,
  yr as Avatar,
  gr as AvatarGroup,
  wr as Badge,
  ol as Button,
  Wt as Card,
  $r as Checkbox,
  kr as ClickableTag,
  Cr as CodeSnippet,
  Tr as CurrencyInput,
  Sr as DatePicker,
  ea as DragAndDropFiles,
  Er as DropdownMenu,
  yt as DropdownOptions,
  xl as Dropzone,
  Qt as FileButton,
  ql as FileList,
  dl as HoverBox,
  Le as IconButton,
  _r as Loader,
  ha as MediaCarousel,
  Br as MediaInput,
  Vr as Modal,
  Mr as Multiselect,
  Dr as NumberInput,
  Fr as Paragraph,
  xr as Radio,
  Ir as Select,
  Nr as Stepper,
  zr as StopPropagation,
  Or as TableCard,
  Lr as Tabs,
  Ar as Tag,
  Rr as Textarea,
  nt as Textbox,
  Pr as ToastContainer,
  jr as Toggle,
  Hr as Tooltip,
  Pe as TribeIcon,
  Ur as default,
  qt as useFiles,
  Gt as useIsHandheld,
  Xt as useToast
};
