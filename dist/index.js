import { VueFinalModal as he, useModal as be, ModalsContainer as ge, createVfm as $e } from "vue-final-modal";
import { defineComponent as $, createElementBlock as u, openBlock as r, normalizeClass as h, renderSlot as B, mergeModels as M, useModel as V, createBlock as I, createCommentVNode as C, withCtx as S, createElementVNode as m, withDirectives as Q, createVNode as k, toDisplayString as g, Transition as U, unref as v, vShow as X, ref as x, onMounted as H, onUnmounted as se, computed as D, watch as O, Fragment as L, renderList as A, normalizeStyle as ne, createTextVNode as q, withModifiers as J, onBeforeUnmount as ae, useSlots as P, nextTick as re, createSlots as W, resolveComponent as Y, vModelText as ke, inject as we, provide as Ce } from "vue";
import { FontAwesomeIcon as F } from "@fortawesome/vue-fontawesome";
import { faChevronDown as le, faHeadphones as Be, faVideoCamera as Ve, faFile as ee, faXmark as G, faCheck as ie, faCopy as Me, faCalendar as ze, faDownload as _e, faUpload as Se, faPlus as Te, faSort as De } from "@fortawesome/free-solid-svg-icons";
import xe from "vuedraggable";
import { v4 as ue } from "uuid";
import { useClipboard as Fe, onKeyStroke as Z } from "@vueuse/core";
import Ie from "@vuepic/vue-datepicker";
const de = /* @__PURE__ */ $({
  __name: "Card",
  props: {
    styles: { default: "" },
    padding: { default: "p-4" },
    flat: { type: Boolean, default: !1 },
    boxed: { type: Boolean, default: !1 }
  },
  setup(l) {
    return (t, e) => (r(), u("div", {
      class: h([
        t.styles,
        t.padding,
        { "shadow-sm": !t.flat && !t.styles.includes("shadow") },
        { "rounded-md": !t.boxed && !t.styles.includes("rounded") },
        "bg-card border border-border dark:border-none"
      ])
    }, [
      B(t.$slots, "default")
    ], 2));
  }
}), Ee = { class: "text-xl font-medium" }, Le = { class: "pt-4" }, Ae = { key: 1 }, je = { class: "p-2" }, Ho = /* @__PURE__ */ $({
  __name: "Accordion",
  props: /* @__PURE__ */ M({
    title: {},
    variant: { default: "card" }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(l) {
    const t = V(l, "modelValue");
    return (e, n) => e.variant === "card" ? (r(), I(de, { key: 0 }, {
      default: S(() => [
        m("div", {
          onClick: n[0] || (n[0] = (o) => t.value = !t.value),
          class: "flex items-center justify-between gap-2 cursor-pointer"
        }, [
          m("h3", Ee, g(e.title), 1),
          k(U, { name: "rotate" }, {
            default: S(() => [
              m("div", {
                class: h({ rotated: t.value, "not-rotated": !t.value })
              }, [
                k(v(F), {
                  icon: v(le),
                  size: "lg"
                }, null, 8, ["icon"])
              ], 2)
            ]),
            _: 1
          })
        ]),
        Q(m("div", Le, [
          B(e.$slots, "default")
        ], 512), [
          [X, t.value]
        ])
      ]),
      _: 3
    })) : e.variant === "minimal" ? (r(), u("div", Ae, [
      m("div", {
        onClick: n[1] || (n[1] = (o) => t.value = !t.value),
        class: "p-2 border-b-2 border-base-text flex items-center justify-between gap-2 cursor-pointer"
      }, [
        m("h3", null, g(e.title), 1),
        k(U, { name: "rotate" }, {
          default: S(() => [
            m("div", {
              class: h({ rotated: t.value, "not-rotated": !t.value })
            }, [
              k(v(F), { icon: v(le) }, null, 8, ["icon"])
            ], 2)
          ]),
          _: 1
        })
      ]),
      Q(m("div", je, [
        B(e.$slots, "default")
      ], 512), [
        [X, t.value]
      ])
    ])) : C("", !0);
  }
}), ce = (l = 800) => {
  const t = x(innerWidth < l), e = () => {
    t.value = innerWidth < l;
  };
  return H(() => addEventListener("resize", e)), se(() => removeEventListener("resize", e)), t;
}, pe = () => ({ readableFileSize: (e) => {
  const n = ["Bytes", "KB", "MB", "GB", "TB"], o = Math.floor(Math.log(e) / Math.log(1024));
  return `${Math.round(e / Math.pow(1024, o))} ${n[o]}`;
}, formatFiles: (e) => e?.map((n) => "uuid" in n && n.uuid ? n : {
  name: n.name,
  size: n.size,
  uuid: ue(),
  preview: URL.createObjectURL(n),
  type: n.type?.split("/")[0] || ""
}) || [] }), Oe = (l, t, e) => {
  if (t < 0 || t >= l.length || e < 0 || e >= l.length)
    throw new Error("Invalid indices");
  const [n] = l.splice(t, 1);
  return l.splice(e, 0, n), l;
}, Ue = (l) => Math.floor(l) !== l && l.toString().split(".")[1]?.length || 0, Re = (l, t) => l ? l.split(",").map((n) => n.trim().toLowerCase()).some((n) => {
  if (n.startsWith("."))
    return t.name.toLowerCase().endsWith(n);
  if (n.endsWith("/*")) {
    const o = n.split("/")[0];
    return t.type.startsWith(o + "/");
  }
  return t.type === n;
}) : !0, He = { class: "flex justify-center gap-2 w-full p-4" }, Pe = ["onMouseenter"], Qe = ["onClick"], We = ["src", "alt"], Ne = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-secondary-text bg-card rounded-md"
}, qe = ["onClick"], Ge = /* @__PURE__ */ $({
  __name: "AttachmentList",
  props: /* @__PURE__ */ M({
    size: {}
  }, {
    files: { required: !0 },
    filesModifiers: {},
    selectedIdx: { default: 0 },
    selectedIdxModifiers: {}
  }),
  emits: ["update:files", "update:selectedIdx"],
  setup(l) {
    const t = l, e = V(l, "files"), n = V(l, "selectedIdx"), o = ce(), { formatFiles: s } = pe(), d = x(-1), a = x(s(e.value)), i = (c) => {
      e.value = e.value.filter((p, _) => _ !== c), n.value > c && (n.value -= 1);
    }, f = ({ moved: { oldIndex: c, newIndex: p } }) => {
      e.value = Oe(e.value, c, p), n.value === c ? n.value = p : n.value > c && n.value <= p ? n.value-- : n.value < c && n.value >= p && n.value++;
    }, y = D(() => t.size === "lg" ? "w-16 h-16" : "w-14 h-14");
    return O(e, () => a.value = s(e.value)), (c, p) => (r(), u("div", He, [
      B(c.$slots, "additional-items-before"),
      k(v(xe), {
        modelValue: a.value,
        "onUpdate:modelValue": p[1] || (p[1] = (_) => a.value = _),
        "item-key": "uuid",
        "swap-threshold": 0.65,
        animation: 200,
        class: "flex gap-2",
        onChange: f
      }, {
        item: S(({ element: _, index: T }) => [
          m("div", {
            class: h(`relative border-secondary rounded-md ${y.value} ${n.value === T ? "border-3 bg-secondary" : ""}`),
            onMouseenter: (j) => d.value = T,
            onMouseleave: p[0] || (p[0] = (j) => d.value = -1)
          }, [
            m("button", {
              class: "w-full h-full",
              onClick: (j) => n.value = T
            }, [
              _.type === "image" ? (r(), u("img", {
                key: 0,
                src: _.preview,
                alt: _.name,
                class: "w-full h-full object-cover rounded-md"
              }, null, 8, We)) : (r(), u("span", Ne, [
                _.type === "audio" ? (r(), I(v(F), {
                  key: 0,
                  icon: v(Be),
                  size: "lg"
                }, null, 8, ["icon"])) : _.type === "video" ? (r(), I(v(F), {
                  key: 1,
                  icon: v(Ve),
                  size: "lg"
                }, null, 8, ["icon"])) : (r(), I(v(F), {
                  key: 2,
                  icon: v(ee),
                  size: "lg"
                }, null, 8, ["icon"]))
              ]))
            ], 8, Qe),
            d.value === T || v(o) ? (r(), u("button", {
              key: 0,
              onClick: (j) => i(T),
              class: "absolute cursor-pointer top-0 right-0 text-secondary-text bg-card/80 rounded-full w-5 h-5 flex justify-center items-center"
            }, [
              k(v(F), {
                icon: v(G),
                size: "xs"
              }, null, 8, ["icon"])
            ], 8, qe)) : C("", !0)
          ], 42, Pe)
        ]),
        _: 1
      }, 8, ["modelValue"]),
      B(c.$slots, "additional-items-after")
    ]));
  }
}), Ke = ["src"], Po = /* @__PURE__ */ $({
  __name: "Avatar",
  props: {
    src: {},
    styles: { default: "" }
  },
  setup(l) {
    return (t, e) => (r(), u("img", {
      src: t.src,
      alt: "avatar",
      class: h(`rounded-full ${t.styles}`)
    }, null, 10, Ke));
  }
}), Ze = { class: "flex items-center" }, Xe = ["src", "alt"], Qo = /* @__PURE__ */ $({
  __name: "AvatarGroup",
  props: {
    avatars: {},
    width: { default: "w-6" },
    overlap: { default: 12 }
  },
  setup(l) {
    return (t, e) => (r(), u("div", Ze, [
      (r(!0), u(L, null, A(t.avatars, (n, o) => (r(), u("img", {
        key: o,
        src: n,
        alt: `avatar ${o + 1}`,
        class: h(`${t.width} rounded-full relative`),
        style: ne({ marginLeft: o === 0 ? "0" : `-${t.overlap}px` })
      }, null, 14, Xe))), 128))
    ]));
  }
}), Wo = /* @__PURE__ */ $({
  __name: "Badge",
  props: {
    content: {},
    color: { default: "primary" },
    size: { default: "xs" },
    styles: {}
  },
  setup(l) {
    return (t, e) => (r(), u("div", {
      class: h(`text-${t.size} text-black font-bold bg-${t.color} rounded-xl px-1 ${t.styles} min-w-3 min-h-3`)
    }, [
      B(t.$slots, "default", {}, () => [
        q(g(t.content), 1)
      ])
    ], 2));
  }
}), Je = ["disabled", "type"], Ye = /* @__PURE__ */ $({
  __name: "Button",
  props: {
    color: { default: "primary" },
    variant: { default: "filled" },
    styles: { default: "" },
    disabled: { type: Boolean, default: !1 },
    type: { default: "button" },
    href: { default: "" },
    onClick: { type: Function, default: (l) => {
    } },
    hoverEffects: { type: Boolean, default: !0 },
    textColor: { default: "" }
  },
  emits: ["click"],
  setup(l, { emit: t }) {
    const e = l, n = t, o = x(!1), s = (i) => {
      e.href && window.open(e.href), n("click", i);
    }, d = D(() => e.color === "base" ? "secondary-text" : e.color), a = D(() => {
      const i = [
        "btn",
        e.styles,
        { pressed: o },
        { "disabled-btn": e.disabled },
        { "cursor-default": !e.hoverEffects }
      ];
      switch (e.variant) {
        case "light":
          i.push(`bg-${d.value}/20 text-${d.value}`), e.hoverEffects && i.push(`hover:bg-${d.value}/35`);
          break;
        case "outline":
          i.push(`text-${e.textColor ?? d.value} border-${d.value} border-2`), e.hoverEffects && i.push(`hover:bg-${d.value}/10`);
          break;
        case "subtle":
          i.push(`text-${e.textColor ?? d.value} bg-transparent`), e.hoverEffects && i.push(`hover:bg-${d.value}/10`);
          break;
        case "dashed":
          i.push(`text-${e.textColor ?? d.value} border-${d.value} border-2 border-dashed`), e.hoverEffects && i.push(`hover:bg-${d.value}/10`);
          break;
        default:
          i.push(`text-${e.textColor ?? "black"} bg-${d.value}`);
          break;
      }
      return i;
    });
    return (i, f) => (r(), u("button", {
      onClick: s,
      onMousedown: f[0] || (f[0] = (y) => o.value = !0),
      onMouseup: f[1] || (f[1] = (y) => o.value = !1),
      class: h(a.value),
      disabled: i.disabled,
      type: i.type
    }, [
      B(i.$slots, "default")
    ], 42, Je));
  }
}), et = { class: "flex items-center gap-2" }, tt = ["for"], ot = {
  key: 0,
  class: "text-error text-sm"
}, No = /* @__PURE__ */ $({
  __name: "Checkbox",
  props: /* @__PURE__ */ M({
    name: {},
    error: {}
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ M(["toggle"], ["update:modelValue"]),
  setup(l, { emit: t }) {
    const e = V(l, "modelValue"), n = t, o = () => {
      e.value = !e.value, n("toggle", e.value);
    };
    return (s, d) => (r(), u("div", null, [
      m("div", et, [
        m("button", {
          onClick: d[0] || (d[0] = (a) => o()),
          type: "button",
          class: h(["rounded-sm cursor-pointer border-secondary border-2 w-4 h-4 flex items-center justify-center text-black", { "bg-secondary": e.value, "hover:bg-secondary/30": !e.value }])
        }, [
          e.value ? (r(), I(v(F), {
            key: 0,
            icon: v(ie),
            size: "xs"
          }, null, 8, ["icon"])) : C("", !0)
        ], 2),
        m("label", { for: s.name }, [
          B(s.$slots, "default")
        ], 8, tt)
      ]),
      s.error ? (r(), u("p", ot, g(s.error), 1)) : C("", !0)
    ]));
  }
}), qo = /* @__PURE__ */ $({
  __name: "ClickableTag",
  props: /* @__PURE__ */ M({
    color: { default: "secondary" },
    size: { default: "md" },
    rounded: { default: "full" },
    styles: { default: "" }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ M(["select"], ["update:modelValue"]),
  setup(l, { emit: t }) {
    const e = l, n = t, o = V(l, "modelValue"), s = D(() => `${e.styles} py-1 px-3 duration-100 text-center border-2 rounded-${e.rounded} text-${e.size} text-${e.color} border-${e.color} hover:bg-${e.color}/10`), d = D(() => `${e.styles} py-1 px-3 duration-100 text-center border-2 rounded-${e.rounded} text-${e.size} bg-${e.color} border-${e.color} text-black`);
    return (a, i) => (r(), u("button", {
      onClick: i[0] || (i[0] = (f) => n("select")),
      class: h(o.value ? d.value : s.value)
    }, [
      B(a.$slots, "default")
    ], 2));
  }
}), R = /* @__PURE__ */ $({
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
  setup(l, { emit: t }) {
    const e = l, n = t, o = D(() => {
      switch (e.size) {
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
    return (s, d) => (r(), I(Ye, {
      styles: `${s.styles} ${o.value} flex justify-center items-center !px-0 !py-0`,
      href: s.href,
      type: s.type,
      color: s.color,
      disabled: s.disabled,
      variant: s.variant,
      "hover-effects": s.hoverEffects,
      "text-color": s.textColor,
      onClick: d[0] || (d[0] = (a) => n("click", a))
    }, {
      default: S(() => [
        k(v(F), {
          size: s.size,
          icon: s.icon
        }, null, 8, ["size", "icon"])
      ]),
      _: 1
    }, 8, ["styles", "href", "type", "color", "disabled", "variant", "hover-effects", "text-color"]));
  }
}), lt = /* @__PURE__ */ $({
  __name: "HoverBox",
  props: {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(l) {
    const t = V(l, "modelValue");
    return (e, n) => (r(), u("div", {
      onMouseenter: n[0] || (n[0] = (o) => t.value = !0),
      onMouseleave: n[1] || (n[1] = (o) => t.value = !1)
    }, [
      B(e.$slots, "default")
    ], 32));
  }
}), st = {
  key: 0,
  class: "p-2 absolute top-0 right-0 text-sm"
}, Go = /* @__PURE__ */ $({
  __name: "CodeSnippet",
  props: {
    snippet: {},
    allowCopy: { type: Boolean },
    styles: {}
  },
  setup(l) {
    const t = l, e = x(!1), { copy: n } = Fe(), o = async () => {
      t.snippet && await n(t.snippet);
    };
    return (s, d) => (r(), I(lt, {
      modelValue: e.value,
      "onUpdate:modelValue": d[1] || (d[1] = (a) => e.value = a)
    }, {
      default: S(() => [
        m("div", {
          class: h([s.styles, "p-2 rounded-lg bg-base whitespace-pre-wrap text-sm font-mono relative overflow-auto"])
        }, [
          m("p", null, g(s.snippet), 1),
          s.allowCopy && e.value ? (r(), u("div", st, [
            k(R, {
              icon: v(Me),
              color: "card",
              onClick: d[0] || (d[0] = (a) => o())
            }, null, 8, ["icon"])
          ])) : C("", !0)
        ], 2)
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), nt = ["for"], at = {
  key: 0,
  class: "flex justify-center items-center w-10 rounded-l-md"
}, rt = { key: 0 }, it = { key: 1 }, ut = {
  key: 2,
  class: "text-secondary-text"
}, dt = ["name", "type", "placeholder", "value", "disabled"], ct = {
  key: 0,
  class: "text-error text-sm"
}, pt = {
  key: 1,
  class: "text-success text-sm"
}, K = /* @__PURE__ */ $({
  __name: "Textbox",
  props: /* @__PURE__ */ M({
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
  emits: /* @__PURE__ */ M(["input", "focus", "blur"], ["update:modelValue", "update:input"]),
  setup(l, { emit: t }) {
    const e = l, n = t, o = V(l, "modelValue"), s = V(l, "input"), d = x(!1), a = D(
      () => e.variant === "filled" ? `bg-${e.color}` : "bg-transparent border border-border"
    ), i = (c) => {
      d.value = !0, n("input", c);
    }, f = (c) => {
      d.value = !1, n("blur", c);
    }, y = (c) => {
      const p = c.target;
      o.value = p.value, n("input", c);
    };
    return (c, p) => (r(), u("div", null, [
      m("label", {
        for: c.name,
        class: h(c.labelStyles)
      }, g(c.label), 11, nt),
      m("div", {
        class: h([
          "rounded-lg flex items-center duration-300",
          a.value,
          c.styles,
          {
            error: c.error,
            success: c.success,
            selected: d.value,
            "min-h-10": c.size !== "sm",
            "min-h-8": c.size === "sm"
          }
        ])
      }, [
        c.icon ? (r(), u("div", at, [
          k(v(F), {
            icon: c.icon,
            size: c.size,
            class: "text-secondary-text"
          }, null, 8, ["icon", "size"])
        ])) : C("", !0),
        m("div", {
          class: h(["flex-grow w-full flex items-center gap-1 flex-wrap p-2", { "pl-0": c.icon }])
        }, [
          B(c.$slots, "left-section"),
          c.disabled ? (r(), u("div", {
            key: 0,
            class: h([{ "pl-0": c.icon, "text-sm": c.size === "sm" }, "flex-grow overflow-hidden whitespace-nowrap"])
          }, [
            o.value ? (r(), u("span", rt, g(o.value), 1)) : c.value ? (r(), u("span", it, g(c.value), 1)) : c.placeholder ? (r(), u("span", ut, g(c.placeholder), 1)) : C("", !0)
          ], 2)) : (r(), u("input", {
            key: 1,
            ref_key: "inputElement",
            ref: s,
            name: c.name,
            type: c.type,
            placeholder: c.placeholder,
            value: o.value ?? c.value,
            disabled: c.disabled,
            onInput: y,
            onFocus: i,
            onBlur: f,
            class: h([{ "placeholder:text-sm": c.size === "sm" }, "p-0 flex-grow border-none outline-none rounded-lg bg-transparent placeholder:text-secondary-text"])
          }, null, 42, dt))
        ], 2),
        B(c.$slots, "right-section")
      ], 2),
      c.error && typeof c.error != "boolean" ? (r(), u("p", ct, g(c.error), 1)) : c.success && typeof c.error != "boolean" ? (r(), u("p", pt, g(c.success), 1)) : C("", !0)
    ]));
  }
}), Ko = /* @__PURE__ */ $({
  __name: "CurrencyInput",
  props: /* @__PURE__ */ M({
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
  setup(l) {
    const t = l, e = V(l, "modelValue"), n = (s) => {
      const d = s.target;
      let a = parseFloat(d.value.replace(/[^\d.-]/g, ""));
      Ue(a) > 0 && (a = (Math.round(a * 100) / 100).toFixed(2)), e.value = a;
    }, o = D(() => {
      if (e.value)
        return `${t.currencySymbol}${e.value}`;
    });
    return (s, d) => (r(), I(K, {
      label: s.label,
      value: o.value,
      "on-input": n,
      placeholder: s.currencySymbol,
      size: s.size,
      color: s.color,
      variant: s.variant
    }, null, 8, ["label", "value", "placeholder", "size", "color", "variant"]));
  }
}), N = (l) => {
  const t = navigator.language || "en-US", e = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return new Intl.DateTimeFormat(t, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: e
  }).format(l);
}, mt = (l) => `${N(l)} ${formatTimestamp24Hour(l)}`, ft = (l) => `${N(l[0])} - ${N(l[1])}`, vt = { class: "font-medium" }, yt = {
  key: 0,
  class: "text-error text-sm"
}, Zo = /* @__PURE__ */ $({
  __name: "DatePicker",
  props: /* @__PURE__ */ M({
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
  setup(l) {
    const t = l, e = V(l, "modelValue"), n = x(null), o = D(() => t.range ? ft : t.includeTime ? mt : N);
    return (s, d) => (r(), u("div", {
      class: h(s.styles)
    }, [
      m("label", vt, g(s.label), 1),
      k(v(Ie), {
        modelValue: e.value,
        "onUpdate:modelValue": d[0] || (d[0] = (a) => e.value = a),
        ref_key: "dp",
        ref: n,
        format: o.value,
        disabled: s.disabled,
        "auto-apply": "",
        "enable-time-picker": s.includeTime,
        range: s.range,
        "min-date": s.minDate,
        "max-date": s.maxDate
      }, {
        "dp-input": S(({ value: a }) => [
          k(K, {
            placeholder: s.placeholder,
            value: a,
            icon: v(ze),
            variant: s.variant,
            size: s.size,
            color: s.color,
            error: !!s.error,
            styles: s.disabled ? "" : "cursor-pointer",
            disabled: ""
          }, null, 8, ["placeholder", "value", "icon", "variant", "size", "color", "error", "styles"])
        ]),
        _: 1
      }, 8, ["modelValue", "format", "disabled", "enable-time-picker", "range", "min-date", "max-date"]),
      s.error ? (r(), u("p", yt, g(s.error), 1)) : C("", !0)
    ], 2));
  }
}), ht = /* @__PURE__ */ $({
  __name: "Dropzone",
  props: {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ M(["drop"], ["update:modelValue"]),
  setup(l, { emit: t }) {
    const e = t, n = V(l, "modelValue"), o = (s) => {
      n.value = !1, e("drop", s);
    };
    return (s, d) => (r(), u("div", {
      onDragover: d[0] || (d[0] = J((a) => n.value = !0, ["prevent"])),
      onDragleave: d[1] || (d[1] = (a) => n.value = !1),
      onDrop: J(o, ["prevent"])
    }, [
      B(s.$slots, "default", { isDragOver: n.value })
    ], 32));
  }
}), bt = ["multiple", "accept"], me = /* @__PURE__ */ $({
  __name: "FileButton",
  props: {
    multiple: { type: Boolean, default: !0 },
    disabled: { type: Boolean },
    accept: {}
  },
  emits: ["change"],
  setup(l, { emit: t }) {
    const e = l, n = t, o = x(null), s = () => {
      !e.disabled && o.value && o.value.click();
    };
    return (d, a) => (r(), u("div", null, [
      m("input", {
        type: "file",
        ref_key: "fileInput",
        ref: o,
        onChange: a[0] || (a[0] = (i) => n("change", i)),
        multiple: d.multiple,
        accept: d.accept,
        hidden: ""
      }, null, 40, bt),
      m("div", { onClick: s }, [
        B(d.$slots, "default")
      ])
    ]));
  }
}), gt = { class: "flex flex-col gap-2 text-sm" }, $t = { class: "flex gap-2 items-center" }, kt = { key: 0 }, wt = {
  key: 1,
  class: "text-xl"
}, Ct = {
  key: 2,
  class: "text-sm"
}, Bt = /* @__PURE__ */ $({
  __name: "FileList",
  props: {
    files: {},
    showDownload: { type: Boolean },
    showDelete: { type: Boolean }
  },
  emits: ["download", "delete"],
  setup(l, { emit: t }) {
    const e = t;
    return (n, o) => (r(), u("div", gt, [
      (r(!0), u(L, null, A(n.files, (s) => (r(), u("div", $t, [
        n.showDownload ? (r(), u("div", kt, [
          k(R, {
            icon: v(_e),
            onClick: (d) => e("download", s),
            variant: "light",
            color: "secondary"
          }, null, 8, ["icon", "onClick"])
        ])) : (r(), u("div", wt, [
          k(v(F), { icon: v(ee) }, null, 8, ["icon"])
        ])),
        m("p", null, g(s.name), 1),
        o[0] || (o[0] = m("div", { class: "flex-grow" }, null, -1)),
        n.showDelete ? (r(), u("div", Ct, [
          k(R, {
            icon: v(G),
            onClick: (d) => e("delete", s),
            color: "error",
            variant: "light",
            size: "sm"
          }, null, 8, ["icon", "onClick"])
        ])) : C("", !0)
      ]))), 256))
    ]));
  }
}), Vt = {
  key: 0,
  class: "font-medium mb-1"
}, Mt = { key: 1 }, zt = {
  key: 0,
  class: "mb-2"
}, _t = { class: "font-medium" }, St = {
  key: 0,
  class: "text-error text-sm mt-1"
}, Tt = /* @__PURE__ */ $({
  __name: "DragAndDropFiles",
  props: /* @__PURE__ */ M({
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
  setup(l) {
    const t = l, e = V(l, "modelValue"), n = (a) => {
      if (!a) return;
      const f = Array.from(a).filter((c) => Re(t.accept, c)), y = t.limit ? t.limit - e.value.length : f.length;
      t.limit && f.length > t.limit ? e.value.push(...f.slice(0, y)) : e.value.push(...f.slice(0, y));
    }, o = (a) => {
      e.value = e.value.filter((i) => i !== a);
    }, s = (a) => {
      n(a.dataTransfer?.files ?? null);
    }, d = (a) => {
      const i = a.target;
      n(i.files);
    };
    return (a, i) => (r(), u("div", null, [
      a.label ? (r(), u("p", Vt, g(a.label), 1)) : C("", !0),
      !a.disabled && e.value.length < a.limit ? (r(), u("div", Mt, [
        k(me, {
          onChange: d,
          accept: a.accept
        }, {
          default: S(() => [
            k(ht, { onDrop: s }, {
              default: S(({ isDragOver: f }) => [
                m("div", {
                  class: h(["cursor-pointer duration-300 text-center border-2 border-dashed py-6 px-4 rounded-lg", {
                    "bg-secondary/30": f,
                    "text-secondary border-secondary": !a.error,
                    "text-error border-error": a.error
                  }])
                }, [
                  a.withIcon ? (r(), u("div", zt, [
                    k(v(F), {
                      icon: v(Se),
                      size: "lg"
                    }, null, 8, ["icon"])
                  ])) : C("", !0),
                  m("p", _t, g(a.dropText), 1)
                ], 2)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["accept"]),
        a.error ? (r(), u("p", St, g(a.error), 1)) : C("", !0)
      ])) : C("", !0),
      e.value.length > 0 && a.showFileList ? (r(), u("div", {
        key: 2,
        class: h({ "mt-4": !a.disabled })
      }, [
        k(Bt, {
          files: e.value,
          "show-delete": !a.disabled,
          onDelete: o
        }, null, 8, ["files", "show-delete"])
      ], 2)) : C("", !0)
    ]));
  }
}), fe = () => {
  const l = x(!1), t = x(null), e = () => l.value = !0, n = () => l.value = !1, o = (s) => {
    t.value.contains(s.target) || n();
  };
  return H(() => {
    document.addEventListener("mousedown", o);
  }), ae(() => {
    document.removeEventListener("mousedown", o);
  }), { dropdownOpen: l, dropdownContainer: t, open: e, close: n };
}, Dt = ["onClick", "onMouseover"], xt = { key: 1 }, Ft = {
  key: 0,
  class: "text-xs text-secondary-text"
}, It = /* @__PURE__ */ $({
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
  setup(l, { emit: t }) {
    const e = l, n = t, o = P(), s = x(-1), d = x("top-full"), a = x(null), i = (p) => {
      n("select", p);
    }, f = () => {
      if (!e.container) return;
      const p = e.container.getBoundingClientRect(), _ = window.innerHeight || document.documentElement.clientHeight;
      d.value = p.bottom + 150 > _ ? "bottom-full" : "top-full";
    }, y = () => {
      d.value = "top-full";
    }, c = async (p) => {
      if (!e.options || e.options.length === 0) return;
      s.value += p, s.value < 0 ? s.value = e.options.length - 1 : s.value >= e.options.length && (s.value = 0), await re();
      const T = a.value?.querySelectorAll("div > div")?.[s.value];
      T && T.scrollIntoView({ block: "nearest", behavior: "smooth" });
    };
    return Z("ArrowDown", (p) => {
      e.open && e.options && e.options.length > 0 && (p.preventDefault(), c(1));
    }), Z("ArrowUp", (p) => {
      e.open && e.options && e.options.length > 0 && (p.preventDefault(), c(-1));
    }), Z("Enter", (p) => {
      e.open && e.options && e.options.length > 0 ? (p.preventDefault(), i(e.options[s.value])) : e.acceptsEmptySelection && (p.preventDefault(), i());
    }), O(() => e.open, () => {
      e.open || (s.value = -1);
    }), (p, _) => (r(), I(U, {
      name: d.value === "top-full" ? "slide-down" : "slide-up",
      onBeforeEnter: f,
      onAfterLeave: y
    }, {
      default: S(() => [
        p.open && p.options?.length > 0 ? (r(), u("div", {
          key: 0,
          ref_key: "optionsContainer",
          ref: a,
          class: h([
            "rounded-md bg-dropdown text-dropdown-text absolute overflow-auto max-h-64 flex flex-col cursor-pointer z-50",
            p.width,
            p.direction === "right" ? "right-0" : "left-0",
            d.value
          ])
        }, [
          (r(!0), u(L, null, A(p.options, (T, j) => (r(), u("div", {
            key: p.trackBy ? p.options[p.trackBy] : T,
            onClick: (w) => i(T),
            onMouseover: (w) => s.value = j,
            class: h(["text-md py-2 px-6 rounded-md text-left", { "bg-dropdown-select": s.value === j }])
          }, [
            v(o).option ? B(p.$slots, "option", {
              key: 0,
              option: T
            }, void 0, !0) : (r(), u("div", xt, [
              q(g(p.optionLabel ? T[p.optionLabel] : T) + " ", 1),
              T[p.optionDescription] ? (r(), u("div", Ft, g(T[p.optionDescription]), 1)) : C("", !0)
            ]))
          ], 42, Dt))), 128))
        ], 2)) : C("", !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), te = (l, t) => {
  const e = l.__vccOpts || l;
  for (const [n, o] of t)
    e[n] = o;
  return e;
}, oe = /* @__PURE__ */ te(It, [["__scopeId", "data-v-9007147d"]]), Xo = /* @__PURE__ */ $({
  __name: "DropdownMenu",
  props: {
    options: {},
    label: { default: "label" },
    trackBy: { default: "value" },
    direction: { default: "left" }
  },
  emits: ["select"],
  setup(l, { emit: t }) {
    const e = t, n = P(), { dropdownOpen: o, dropdownContainer: s } = fe(), d = (a) => {
      o.value = !1, e("select", a);
    };
    return (a, i) => (r(), u("div", {
      class: "relative",
      ref_key: "dropdownContainer",
      ref: s
    }, [
      m("div", {
        onClick: i[0] || (i[0] = (f) => o.value = !v(o))
      }, [
        B(a.$slots, "trigger")
      ]),
      k(oe, {
        container: v(s),
        options: a.options,
        open: v(o),
        "option-label": a.label,
        "track-by": a.trackBy,
        "accepts-empty-selection": "",
        onSelect: d,
        width: "w-64",
        direction: a.direction
      }, W({ _: 2 }, [
        v(n).option ? {
          name: "option",
          fn: S(({ option: f }) => [
            B(a.$slots, "option", { option: f })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["container", "options", "open", "option-label", "track-by", "direction"])
    ], 512));
  }
}), Et = { class: "flex items-center justify-center" }, Lt = {
  key: 0,
  class: "text-center font-medium mt-2"
}, At = /* @__PURE__ */ $({
  __name: "Loader",
  props: {
    label: {}
  },
  setup(l) {
    return (t, e) => (r(), u("div", Et, [
      m("div", null, [
        e[0] || (e[0] = m("div", { class: "spinner" }, null, -1)),
        t.label ? (r(), u("p", Lt, g(t.label), 1)) : C("", !0)
      ])
    ]));
  }
}), Jo = /* @__PURE__ */ te(At, [["__scopeId", "data-v-025bfaf0"]]), jt = { class: "flex items-center justify-center" }, Ot = { key: 0 }, Ut = ["src", "alt"], Rt = { key: 1 }, Ht = ["src"], Pt = { key: 2 }, Qt = ["src"], Wt = {
  key: 3,
  class: "text-center"
}, Nt = /* @__PURE__ */ $({
  __name: "MediaCarousel",
  props: /* @__PURE__ */ M({
    files: {},
    maxMediaHeight: { default: "max-h-72" }
  }, {
    selectedIdx: { default: 0 },
    selectedIdxModifiers: {}
  }),
  emits: ["update:selectedIdx"],
  setup(l) {
    const t = V(l, "selectedIdx"), e = ce(), n = () => {
      const o = document.querySelector("swiper-container")?.swiper;
      o && (t.value = o.activeIndex);
    };
    return O(t, () => {
      const o = document.querySelector("swiper-container")?.swiper;
      o && t.value !== o.activeIndex && o.slideTo(t.value);
    }), (o, s) => {
      const d = Y("swiper-slide"), a = Y("swiper-container");
      return r(), I(a, {
        "slides-per-view": 1,
        "centered-slides": !0,
        navigation: !v(e),
        onSwiperslidechange: n
      }, {
        default: S(() => [
          (r(!0), u(L, null, A(o.files, (i) => (r(), I(d, null, {
            default: S(() => [
              m("div", jt, [
                i.type === "image" ? (r(), u("div", Ot, [
                  m("img", {
                    src: i.preview,
                    alt: i.name,
                    class: h(o.maxMediaHeight)
                  }, null, 10, Ut)
                ])) : i.type === "video" ? (r(), u("div", Rt, [
                  m("video", {
                    src: i.preview,
                    controls: "",
                    class: h(o.maxMediaHeight)
                  }, null, 10, Ht)
                ])) : i.type === "audio" ? (r(), u("div", Pt, [
                  m("audio", {
                    src: i.preview,
                    controls: ""
                  }, null, 8, Qt)
                ])) : (r(), u("div", Wt, [
                  k(v(F), {
                    icon: v(ee),
                    size: "xl"
                  }, null, 8, ["icon"]),
                  s[0] || (s[0] = m("p", { class: "text-lg mt-2" }, "No preview available", -1))
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
}), qt = {
  key: 0,
  class: "font-medium mb-1"
}, Gt = {
  key: 1,
  class: "mb-2"
}, Kt = {
  key: 0,
  class: "text-error text-sm mt-1"
}, Yo = /* @__PURE__ */ $({
  __name: "MediaInput",
  props: /* @__PURE__ */ M({
    label: {},
    placeholder: {},
    error: {}
  }, {
    modelValue: { default: [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(l) {
    const t = V(l, "modelValue"), e = x(0), { formatFiles: n } = pe(), o = (d) => {
      const a = d.target;
      a.files && t.value.push(...Array.from(a.files));
    }, s = D(() => n(t.value));
    return (d, a) => (r(), u("div", null, [
      d.label ? (r(), u("label", qt, g(d.label), 1)) : C("", !0),
      t.value.length > 0 ? (r(), u("div", Gt, [
        k(Nt, {
          "selected-idx": e.value,
          "onUpdate:selectedIdx": a[0] || (a[0] = (i) => e.value = i),
          files: s.value
        }, null, 8, ["selected-idx", "files"]),
        k(Ge, {
          "selected-idx": e.value,
          "onUpdate:selectedIdx": a[1] || (a[1] = (i) => e.value = i),
          files: t.value,
          "onUpdate:files": a[2] || (a[2] = (i) => t.value = i)
        }, {
          "additional-items-after": S(() => [
            k(me, {
              onChange: o,
              accept: "image/*"
            }, {
              default: S(() => [
                k(R, {
                  icon: v(Te),
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
        d.error ? (r(), u("p", Kt, g(d.error), 1)) : C("", !0)
      ])) : (r(), I(Tt, {
        key: 2,
        "with-icon": "",
        "drop-text": d.placeholder,
        modelValue: t.value,
        "onUpdate:modelValue": a[3] || (a[3] = (i) => t.value = i),
        error: d.error
      }, null, 8, ["drop-text", "modelValue", "error"]))
    ]));
  }
}), Zt = {
  __name: "ModalContent",
  props: {
    contentClass: {
      type: String,
      default: "w-full max-w-xl p-2"
    }
  },
  emits: ["close"],
  setup(l, { emit: t }) {
    const e = t;
    return se(() => e("close")), (n, o) => (r(), I(v(he), {
      "overlay-transition": "vfm-fade",
      "content-transition": "vfm-fade",
      class: "flex justify-center items-center",
      "content-class": l.contentClass
    }, {
      default: S(() => [
        k(de, { styles: "w-full" }, {
          default: S(() => [
            B(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["content-class"]));
  }
}, el = /* @__PURE__ */ $({
  __name: "Modal",
  props: /* @__PURE__ */ M({
    contentClass: { default: "w-full max-w-xl p-2" },
    clickToClose: { type: Boolean, default: !0 },
    escToClose: { type: Boolean, default: !0 }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(l) {
    const t = l, e = V(l, "modelValue"), n = P(), o = be({
      component: Zt,
      attrs: {
        contentClass: t.contentClass,
        clickToClose: t.clickToClose,
        escToClose: t.escToClose,
        onClose: () => {
          e.value = !1;
        }
      },
      slots: {
        default: n.default
      }
    });
    return O(e, () => {
      e.value === !0 ? o.open() : e.value === !1 && o.close();
    }), (s, d) => (r(), I(v(ge)));
  }
}), Xt = {
  key: 0,
  class: "text-error text-sm"
}, tl = /* @__PURE__ */ $({
  __name: "Multiselect",
  props: /* @__PURE__ */ M({
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
    formatResult: { type: Function, default: (l) => l },
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
  emits: /* @__PURE__ */ M(["select", "focus", "blur"], ["update:modelValue", "update:searchQuery", "update:input"]),
  setup(l, { emit: t }) {
    const e = l, n = t, o = V(l, "modelValue"), s = V(l, "searchQuery"), d = V(l, "input"), a = P(), i = x(!1), f = x(null), y = D(() => e.acceptsDuplicates || !e.options ? e.options : e.options.filter((b) => !o.value.includes(e.formatResult(b)))), c = (b) => {
      o.value.push(e.formatResult(b)), s.value = "", n("select", b);
    }, p = (b) => {
      o.value = o.value.filter((z, E) => E !== b);
    }, _ = () => {
      i.value = !0;
    }, T = () => {
      i.value = !1;
    }, j = () => {
      e.searchable || (i.value ? T() : _());
    }, w = (b) => {
      const z = b.target;
      f.value && !f.value.contains(z) && T();
    };
    return H(() => {
      document.addEventListener("mousedown", w);
    }), ae(() => {
      document.removeEventListener("mousedown", w);
    }), O(s, () => {
      e.searchable && s.value.length > 0 && _();
    }), (b, z) => (r(), u("div", {
      class: h([b.styles])
    }, [
      m("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: f
      }, [
        m("div", {
          onClick: z[4] || (z[4] = (E) => j()),
          class: h({ "cursor-pointer": !b.searchable })
        }, [
          k(K, {
            modelValue: s.value,
            "onUpdate:modelValue": z[0] || (z[0] = (E) => s.value = E),
            input: d.value,
            "onUpdate:input": z[1] || (z[1] = (E) => d.value = E),
            label: b.label,
            placeholder: b.placeholder,
            disabled: !b.searchable,
            icon: b.icon,
            error: !!b.error,
            size: b.size,
            color: b.color,
            variant: b.variant,
            styles: b.textboxStyles,
            onFocus: z[2] || (z[2] = (E) => n("focus", E)),
            onBlur: z[3] || (z[3] = (E) => n("blur", E))
          }, {
            "left-section": S(() => [
              (r(!0), u(L, null, A(o.value, (E, ye) => (r(), u("div", {
                key: b.optionLabel[b.trackBy]
              }, [
                B(b.$slots, "selectedTag", {
                  option: E,
                  deselect: () => p(ye)
                })
              ]))), 128))
            ]),
            _: 3
          }, 8, ["modelValue", "input", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        k(oe, {
          container: f.value,
          options: y.value,
          "option-label": b.optionLabel,
          "track-by": b.trackBy,
          open: i.value,
          "accepts-empty-selection": b.acceptsEmptySelection,
          onSelect: c
        }, W({ _: 2 }, [
          v(a).option ? {
            name: "option",
            fn: S(({ option: E }) => [
              B(b.$slots, "option", { option: E })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      b.error && typeof b.error != "boolean" ? (r(), u("p", Xt, g(b.error), 1)) : C("", !0)
    ], 2));
  }
}), Jt = { class: "font-medium" }, Yt = {
  key: 0,
  class: "text-text-secondary flex justify-center items-center w-10 rounded-l-md"
}, eo = ["placeholder", "min", "max", "disabled"], to = {
  key: 0,
  class: "text-error text-sm"
}, oo = {
  key: 1,
  class: "text-error text-sm"
}, ol = /* @__PURE__ */ $({
  __name: "NumberInput",
  props: /* @__PURE__ */ M({
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
  setup(l) {
    const t = l, e = V(l, "modelValue"), n = D(
      () => t.variant === "filled" ? `bg-${t.color}` : "bg-transparent border border-secondary-text"
    ), o = D(() => {
      const s = typeof e.value == "string" ? parseFloat(e.value) : e.value;
      return s && s > t.max ? `Value must be ${t.max} or less.` : s && s < t.min ? `Value must be ${t.min} or more.` : !1;
    });
    return (s, d) => (r(), u("div", null, [
      m("h4", Jt, g(s.label), 1),
      m("div", {
        class: h(["rounded-lg flex h-10 items-center", n.value, s.styles, { error: o.value || s.error, "px-2": !s.icon }])
      }, [
        s.icon ? (r(), u("div", Yt, [
          k(v(F), {
            icon: s.icon,
            size: "1x",
            class: "text-secondary-text"
          }, null, 8, ["icon"])
        ])) : C("", !0),
        Q(m("input", {
          "onUpdate:modelValue": d[0] || (d[0] = (a) => e.value = a),
          placeholder: s.placeholder,
          type: "number",
          min: s.min,
          max: s.max,
          disabled: s.disabled,
          class: "flex-grow w-full py-2 px-0 border-none outline-none rounded-lg placeholder:text-secondary-text bg-transparent appearance-none"
        }, null, 8, eo), [
          [ke, e.value]
        ])
      ], 2),
      o.value ? (r(), u("p", to, g(o.value), 1)) : s.error && typeof s.error == "string" ? (r(), u("p", oo, g(s.error), 1)) : C("", !0)
    ]));
  }
}), ll = /* @__PURE__ */ $({
  __name: "Paragraph",
  props: {
    text: {},
    styles: {},
    limit: {},
    includeWhitespace: { type: Boolean }
  },
  setup(l) {
    const t = l, e = D(() => t.text && t.limit ? `${t.text.substring(0, t.limit)}${t.text.length > t.limit ? "..." : ""}` : t.text);
    return (n, o) => (r(), u("p", {
      class: h([n.styles, { "whitespace-pre-wrap": n.includeWhitespace }])
    }, g(e.value), 3));
  }
}), lo = ["name", "value", "checked"], so = { class: "rounded-full border-2 border-secondary flex items-center justify-center h-4 w-4" }, sl = /* @__PURE__ */ $({
  __name: "Radio",
  props: /* @__PURE__ */ M({
    value: { type: [String, Boolean] },
    label: {},
    name: {},
    modelValue: {}
  }, {
    modelValue: { type: [String, Boolean] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ M(["select"], ["update:modelValue"]),
  setup(l, { emit: t }) {
    const e = l, n = t, o = V(l, "modelValue"), s = x(!1), d = D(() => e.modelValue === e.value), a = (i) => {
      o.value = e.value, n("select", i);
    };
    return (i, f) => (r(), u("label", {
      class: "flex items-center gap-3 relative cursor-pointer",
      onMouseenter: f[1] || (f[1] = (y) => s.value = !0),
      onMouseleave: f[2] || (f[2] = (y) => s.value = !1)
    }, [
      m("input", {
        class: "absolute opacity-0 cursor-pointer",
        type: "radio",
        name: i.name,
        value: i.value,
        checked: d.value,
        onChange: f[0] || (f[0] = (y) => a(y))
      }, null, 40, lo),
      m("span", so, [
        m("span", {
          class: h(["rounded-full h-2 w-2", { "bg-secondary": s.value || d.value }])
        }, null, 2)
      ]),
      m("span", null, g(i.label), 1)
    ], 32));
  }
}), no = { class: "flex items-center pr-1" }, ao = { class: "flex items-center pr-2 text-secondary-text" }, ro = {
  key: 0,
  class: "text-error text-sm"
}, nl = /* @__PURE__ */ $({
  __name: "Select",
  props: /* @__PURE__ */ M({
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
    formatResult: { type: Function, default: (l) => l },
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
  emits: /* @__PURE__ */ M(["select", "blur", "focus"], ["update:modelValue", "update:searchQuery", "update:input"]),
  setup(l, { emit: t }) {
    const e = l, n = t, o = V(l, "modelValue"), s = V(l, "searchQuery"), d = V(l, "input"), a = P(), { dropdownOpen: i, dropdownContainer: f, open: y, close: c } = fe(), p = (w) => {
      const b = e.formatResult(w);
      o.value = b, n("select", b), e.optionLabel && e.searchable ? s.value = w[e.optionLabel] : e.searchable && (s.value = w), re(c);
    }, _ = (w) => {
      o.value = null, s.value = "";
    }, T = () => {
      e.searchable || (i.value ? c() : y());
    }, j = D(() => o.value && e.optionLabel ? o.value[e.optionLabel] : o.value ? o.value : null);
    return O(s, () => {
      e.searchable && s.value.length > 0 ? y() : e.searchable && c();
    }), (w, b) => (r(), u("div", {
      class: h([w.styles])
    }, [
      m("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: f
      }, [
        m("div", {
          onClick: b[5] || (b[5] = (z) => T()),
          class: h({ "cursor-pointer": !w.searchable })
        }, [
          k(K, {
            modelValue: s.value,
            "onUpdate:modelValue": b[1] || (b[1] = (z) => s.value = z),
            input: d.value,
            "onUpdate:input": b[2] || (b[2] = (z) => d.value = z),
            value: j.value,
            label: w.label,
            placeholder: w.placeholder,
            disabled: !w.searchable || w.lockOnSelect && o.value,
            icon: o.value?.icon ?? w.icon,
            error: !!w.error,
            size: w.size,
            color: w.color,
            variant: w.variant,
            styles: w.textboxStyles,
            onFocus: b[3] || (b[3] = (z) => n("focus", z)),
            onBlur: b[4] || (b[4] = (z) => n("blur", z))
          }, W({ _: 2 }, [
            w.lockOnSelect && w.searchable && o.value ? {
              name: "right-section",
              fn: S(() => [
                m("div", no, [
                  k(R, {
                    icon: v(G),
                    onClick: b[0] || (b[0] = (z) => _()),
                    variant: "subtle",
                    color: "base",
                    size: w.size
                  }, null, 8, ["icon", "size"])
                ])
              ]),
              key: "0"
            } : w.searchable ? void 0 : {
              name: "right-section",
              fn: S(() => [
                m("div", ao, [
                  k(v(F), {
                    icon: v(De),
                    size: w.size
                  }, null, 8, ["icon", "size"])
                ])
              ]),
              key: "1"
            }
          ]), 1032, ["modelValue", "input", "value", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        k(oe, {
          container: v(f),
          options: w.options,
          "option-label": w.optionLabel,
          "track-by": w.trackBy,
          open: v(i),
          "accepts-empty-selection": w.acceptsEmptySelection,
          onSelect: p
        }, W({ _: 2 }, [
          v(a).option ? {
            name: "option",
            fn: S(({ option: z }) => [
              B(w.$slots, "option", { option: z })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      w.error && typeof w.error != "boolean" ? (r(), u("p", ro, g(w.error), 1)) : C("", !0)
    ], 2));
  }
}), io = {
  key: 0,
  class: "w-full"
}, uo = { class: "flex justify-between items-center gap-2 px-4" }, co = ["onClick"], po = { class: "flex justify-between items-center mt-1 px-3" }, mo = ["onClick"], fo = ["onClick"], al = /* @__PURE__ */ $({
  __name: "Stepper",
  props: /* @__PURE__ */ M({
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
  setup(l) {
    const t = l, e = V(l, "modelValue"), n = D(() => t.steps ? t.steps.findIndex((i) => i.value === e.value) : -1), o = D(() => t.steps ? t.steps.map((i, f) => f < n.value ? { ...i, status: "completed" } : f === n.value ? { ...i, status: "in-progress" } : { ...i, status: "uncompleted" }) : []), s = (i) => i.status === "uncompleted" || i.status !== "in-progress" && t.variant === "minimalist" ? "text-secondary-text bg-card-accent" : `text-${t.color} bg-${t.color}${t.variant === "classic" ? "/30" : ""}`, d = (i) => t.canMoveForwards && i > n.value || t.canMoveBackwards && i < n.value ? "cursor-pointer" : "cursor-default", a = (i, f) => {
      (t.canMoveForwards && f > n.value || t.canMoveBackwards && f < n.value) && (e.value = i.value);
    };
    return (i, f) => i.variant === "classic" ? (r(), u("div", io, [
      m("div", uo, [
        (r(!0), u(L, null, A(o.value, (y, c) => (r(), u(L, {
          key: y.value
        }, [
          m("div", {
            onClick: (p) => a(y, c),
            class: h([
              "w-10 h-10 rounded-full flex items-center justify-center",
              s(y),
              d(c)
            ])
          }, [
            k(v(F), {
              icon: y.status === "completed" && !i.canMoveBackwards ? v(ie) : y.icon
            }, null, 8, ["icon"])
          ], 10, co),
          c < i.steps.length - 1 ? (r(), u("div", {
            key: 0,
            class: h(`flex-grow bg-${o.value[c + 1].status === "uncompleted" ? "secondary-text" : i.color} h-0.5`)
          }, null, 2)) : C("", !0)
        ], 64))), 128))
      ]),
      m("div", po, [
        (r(!0), u(L, null, A(o.value, (y, c) => (r(), u("p", {
          key: "label-" + y.value,
          onClick: (p) => a(y, c),
          class: h([
            y.status === "uncompleted" ? "text-secondary-text" : `text-${i.color}`,
            "text-xs font-medium text-center",
            d(c)
          ])
        }, g(y.label), 11, mo))), 128))
      ])
    ])) : i.variant === "minimalist" ? (r(), u("div", {
      key: 1,
      class: h(`grid grid-cols-${o.value.length} gap-1`)
    }, [
      (r(!0), u(L, null, A(o.value, (y, c) => (r(), u("div", {
        key: y.value,
        onClick: (p) => a(y, c)
      }, [
        m("div", {
          class: h(["h-1 rounded-lg mb-1", s(y), d(c)])
        }, null, 2),
        m("p", {
          class: h([
            y.status !== "in-progress" ? "text-secondary-text" : `text-${i.color}`,
            "text-sm font-medium",
            d(c)
          ])
        }, g(y.label), 3)
      ], 8, fo))), 128))
    ], 2)) : C("", !0);
  }
}), vo = {};
function yo(l, t) {
  return r(), u("div", {
    onClick: J(() => {
    }, ["stop"])
  }, [
    B(l.$slots, "default")
  ]);
}
const rl = /* @__PURE__ */ te(vo, [["render", yo]]), ho = { class: "overflow-hidden rounded-xl shadow-full-box border border-border" }, bo = { class: "w-full border-collapse table-fixed bg-card overflow-hidden" }, go = ["onClick"], $o = ["colspan", "rowspan"], il = /* @__PURE__ */ $({
  __name: "TableCard",
  props: {
    rows: {},
    headerClasses: {},
    onRowClick: { type: Function }
  },
  setup(l) {
    const t = l, e = (a) => ({
      width: a.width ? typeof a.width == "number" ? `${a.width}px` : a.width : void 0,
      height: a.height ? typeof a.height == "number" ? `${a.height}px` : a.height : void 0
    }), n = (a, i, f) => {
      const y = t.rows[i], p = (Array.isArray(y) ? y : y.cells)?.length ?? 0;
      return [
        `text-${a.align ?? "left"} p-2 border-border`,
        { "border-r": f !== p - 1 },
        a.class
      ];
    }, o = (a, i) => {
      const f = Array.isArray(a) ? {} : a;
      return [
        f.class ?? "",
        "border-border",
        { "border-b": i !== t.rows.length - 1 },
        { "cursor-pointer hover:bg-muted/50": f.onClick || t.onRowClick }
      ];
    }, s = (a, i) => {
      const f = Array.isArray(a) ? {} : a;
      f.onClick ? f.onClick(a, i) : t.onRowClick && t.onRowClick(a, i);
    }, d = (a) => String.fromCharCode(65 + a);
    return (a, i) => (r(), u("div", ho, [
      m("table", bo, [
        m("tbody", null, [
          (r(!0), u(L, null, A(a.rows, (f, y) => (r(), u("tr", {
            key: "row-" + y,
            class: h(o(f, y)),
            onClick: (c) => s(f, y)
          }, [
            (r(!0), u(L, null, A(f.cells ?? f, (c, p) => (r(), u("td", {
              key: "cell-" + y + "-" + p,
              colspan: c.colspan || 1,
              rowspan: c.rowspan || 1,
              class: h(n(c, y, p)),
              style: ne(e(c))
            }, [
              B(a.$slots, `${d(p)}${y + 1}`, {}, () => [
                q(g(c.content), 1)
              ])
            ], 14, $o))), 128))
          ], 10, go))), 128))
        ])
      ])
    ]));
  }
}), ko = ["onClick"], ul = /* @__PURE__ */ $({
  __name: "Tabs",
  props: /* @__PURE__ */ M({
    tabs: {},
    stretch: { type: Boolean },
    size: { default: "lg" }
  }, {
    selectedTab: {},
    selectedTabModifiers: {}
  }),
  emits: ["update:selectedTab"],
  setup(l) {
    const t = V(l, "selectedTab");
    return (e, n) => (r(), u("div", null, [
      m("div", {
        class: h(["tab-container", { "justify-between": e.stretch }])
      }, [
        (r(!0), u(L, null, A(e.tabs, (o) => (r(), u("button", {
          key: o.name,
          class: h(["cursor-pointer", [{
            "text-error": o.error,
            "underline-offset-8 underline font-medium": o.name === t.value
          }, `text-${e.size}`]]),
          onClick: (s) => t.value = o.name,
          type: "button"
        }, g(o.label), 11, ko))), 128))
      ], 2),
      (r(!0), u(L, null, A(e.tabs, (o) => Q((r(), u("div", {
        key: o.name
      }, [
        B(e.$slots, `tab-${o.name}`)
      ])), [
        [X, o.name === t.value]
      ])), 128))
    ]));
  }
}), dl = /* @__PURE__ */ $({
  __name: "Tag",
  props: {
    color: { default: "secondary" },
    size: { default: "md" },
    styles: { default: "" },
    rounded: { default: "full" }
  },
  setup(l) {
    return (t, e) => (r(), u("div", {
      class: h(`py-1 px-4 rounded-${t.rounded} duration-100 text-center text-black text-${t.size} bg-${t.color}`)
    }, [
      B(t.$slots, "default")
    ], 2));
  }
}), wo = { class: "flex items-center justify-between" }, Co = ["for"], Bo = {
  key: 0,
  class: "text-xs text-secondary-text mr-1"
}, Vo = ["name", "placeholder", "value", "disabled", "maxlength", "rows"], Mo = {
  key: 0,
  class: "text-error text-sm"
}, zo = {
  key: 1,
  class: "text-success text-sm"
}, cl = /* @__PURE__ */ $({
  __name: "Textarea",
  props: /* @__PURE__ */ M({
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
  emits: /* @__PURE__ */ M(["focus", "blur", "keyPress", "input"], ["update:modelValue", "update:input"]),
  setup(l, { emit: t }) {
    const e = l, n = t, o = V(l, "modelValue"), s = V(l, "input"), d = x(e.modelValue), a = x(!1), i = D(
      () => e.variant === "filled" ? `bg-${e.color}` : "bg-transparent border border-border"
    ), f = (p) => {
      a.value = !0, n("focus", p);
    }, y = (p) => {
      a.value = !1, n("blur", p);
    }, c = (p) => {
      const _ = p.target;
      d.value = _.value, o.value = _.value, n("input", p);
    };
    return O(
      () => e.modelValue,
      (p) => {
        d.value = p;
      }
    ), (p, _) => (r(), u("div", null, [
      m("div", wo, [
        m("label", {
          for: p.name,
          class: "font-medium"
        }, g(p.label), 9, Co),
        p.maxlength ? (r(), u("p", Bo, g(o.value?.length ?? 0) + " / " + g(p.maxlength), 1)) : C("", !0)
      ]),
      m("div", {
        class: h([
          "rounded-lg flex duration-300 max-h-48 overflow-auto",
          i.value,
          p.styles,
          {
            error: p.error,
            success: p.success,
            selected: a.value
          }
        ])
      }, [
        m("textarea", {
          class: h(["rounded-lg p-2 flex-grow bg-transparent outline-none max-w-full placeholder:text-secondary-text border-none", { "field-sizing-content": p.fieldSizingContent }]),
          name: p.name,
          placeholder: p.placeholder,
          value: o.value,
          disabled: p.disabled,
          onInput: c,
          onFocus: f,
          onBlur: y,
          onKeydown: _[0] || (_[0] = (T) => n("keyPress", T)),
          maxlength: p.maxlength,
          rows: p.rows,
          ref_key: "inputElement",
          ref: s
        }, null, 42, Vo)
      ], 2),
      p.error && typeof p.error != "boolean" ? (r(), u("p", Mo, g(p.error), 1)) : p.success && typeof p.error != "boolean" ? (r(), u("p", zo, g(p.success), 1)) : C("", !0)
    ]));
  }
}), ve = () => {
  const l = we("toastMessages", x([]));
  return {
    initializeToast: () => Ce("toastMessages", x([])),
    toastMessages: l,
    addToast: (o) => l.value.push({ ...o, uuid: ue() }),
    closeToast: (o) => l.value = l.value.filter((s) => s.uuid !== o)
  };
}, _o = { class: "flex-grow" }, So = { class: "text-sm font-medium" }, To = { class: "text-sm" }, Do = {
  __name: "ToastMessage",
  props: {
    message: Object
  },
  setup(l) {
    const t = l, { closeToast: e } = ve();
    return H(() => {
      t.message.duration && setTimeout(() => e(t.message.uuid), t.message.duration);
    }), (n, o) => {
      const s = Y("IconButton");
      return r(), I(U, {
        name: "slide-fade",
        appear: ""
      }, {
        default: S(() => [
          m("div", {
            class: h(`w-72 flex items-center gap-2 rounded-md p-2 bg-${l.message.color ?? "success"}/${l.message.opacity ?? 60}`)
          }, [
            m("div", _o, [
              m("p", So, g(l.message.title), 1),
              m("p", To, g(l.message.content), 1)
            ]),
            k(s, {
              icon: v(G),
              color: "base",
              variant: "subtle",
              onClick: o[0] || (o[0] = (d) => v(e)(l.message.uuid))
            }, null, 8, ["icon"])
          ], 2)
        ]),
        _: 1
      });
    };
  }
}, xo = { class: "relative" }, pl = {
  __name: "ToastContainer",
  props: {
    containerName: String,
    position: {
      type: String,
      default: "top-0 right-0"
    }
  },
  setup(l) {
    const t = l, { toastMessages: e } = ve(), n = D(() => e.value.filter((o) => o.container === t.containerName));
    return (o, s) => (r(), u("div", xo, [
      B(o.$slots, "default"),
      n.value.length > 0 ? (r(), u("div", {
        key: 0,
        class: h(["absolute p-4 z-50 flex flex-col gap-2 overflow-hidden", l.position])
      }, [
        (r(!0), u(L, null, A(n.value, (d) => (r(), u("div", {
          key: d.uuid
        }, [
          B(o.$slots, "toast-content", { message: d }, () => [
            k(Do, { message: d }, null, 8, ["message"])
          ])
        ]))), 128))
      ], 2)) : C("", !0)
    ]));
  }
}, ml = /* @__PURE__ */ $({
  __name: "Toggle",
  props: /* @__PURE__ */ M({
    activeColor: { default: "secondary" },
    value: { type: Boolean, default: !1 },
    icon: {}
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ M(["toggle"], ["update:modelValue"]),
  setup(l, { emit: t }) {
    const e = l, n = t, o = V(l, "modelValue"), s = () => {
      o.value = !o.value, n("toggle", o.value);
    }, d = D(
      () => o.value ? `bg-${e.activeColor}` : "bg-gray-300 dark:bg-gray-600"
    ), a = D(
      () => o.value ? "translate-x-6" : "translate-x-0"
    );
    return H(() => {
      o.value === void 0 && (o.value = e.value);
    }), (i, f) => (r(), u("div", {
      onClick: s,
      class: h([d.value, "cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300"])
    }, [
      m("div", {
        class: h([a.value, "bg-white dark:bg-gray-200 text-black text-sm flex justify-center items-center w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"])
      }, [
        i.icon ? (r(), I(v(F), {
          key: 0,
          icon: i.icon
        }, null, 8, ["icon"])) : C("", !0)
      ], 2)
    ], 2));
  }
}), Fo = { class: "rounded-md bg-dropdown/80 text-dropdown-text p-1 text-xs text-nowrap" }, fl = /* @__PURE__ */ $({
  __name: "Tooltip",
  props: {
    text: {},
    position: { default: "top" }
  },
  setup(l) {
    const t = l, e = x(!1), n = D(() => {
      let o;
      switch (t.position) {
        case "right":
          o = "left-full pl-4";
          break;
      }
      return o;
    });
    return (o, s) => (r(), u("div", {
      class: "relative flex items-center",
      onMouseenter: s[0] || (s[0] = (d) => e.value = !0),
      onMouseleave: s[1] || (s[1] = (d) => e.value = !1)
    }, [
      B(o.$slots, "default"),
      k(U, { name: "fade" }, {
        default: S(() => [
          e.value ? (r(), u("div", {
            key: 0,
            class: h([n.value, "absolute delay-1000 z-50"])
          }, [
            m("div", Fo, [
              B(o.$slots, "tooltip-content", {}, () => [
                q(g(o.text), 1)
              ])
            ])
          ], 2)) : C("", !0)
        ]),
        _: 3
      })
    ], 32));
  }
}), vl = {
  install(l) {
    const t = $e();
    l.use(t);
  }
};
export {
  Ho as Accordion,
  Ge as AttachmentList,
  Po as Avatar,
  Qo as AvatarGroup,
  Wo as Badge,
  Ye as Button,
  de as Card,
  No as Checkbox,
  qo as ClickableTag,
  Go as CodeSnippet,
  Ko as CurrencyInput,
  Zo as DatePicker,
  Tt as DragAndDropFiles,
  Xo as DropdownMenu,
  oe as DropdownOptions,
  ht as Dropzone,
  me as FileButton,
  Bt as FileList,
  lt as HoverBox,
  R as IconButton,
  Jo as Loader,
  Nt as MediaCarousel,
  Yo as MediaInput,
  el as Modal,
  tl as Multiselect,
  ol as NumberInput,
  ll as Paragraph,
  sl as Radio,
  nl as Select,
  al as Stepper,
  rl as StopPropagation,
  il as TableCard,
  ul as Tabs,
  dl as Tag,
  cl as Textarea,
  K as Textbox,
  pl as ToastContainer,
  ml as Toggle,
  fl as Tooltip,
  vl as default,
  pe as useFiles,
  ce as useIsHandheld,
  ve as useToast
};
