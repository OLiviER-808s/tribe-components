import { VueFinalModal as he, useModal as be, ModalsContainer as ge, createVfm as $e } from "vue-final-modal";
import { defineComponent as $, createElementBlock as u, openBlock as r, normalizeClass as h, renderSlot as B, mergeModels as _, useModel as V, createBlock as x, createCommentVNode as C, withCtx as T, createElementVNode as m, withDirectives as Q, createVNode as w, toDisplayString as g, Transition as U, unref as v, vShow as X, ref as F, onMounted as H, onUnmounted as le, computed as D, watch as O, Fragment as L, renderList as A, normalizeStyle as ne, createTextVNode as q, withModifiers as J, onBeforeUnmount as ae, useSlots as P, nextTick as re, createSlots as W, resolveComponent as Y, vModelText as ke, inject as we, provide as Ce } from "vue";
import { FontAwesomeIcon as I } from "@fortawesome/vue-fontawesome";
import { faChevronDown as se, faHeadphones as Be, faVideoCamera as Ve, faFile as ee, faXmark as Z, faCheck as ie, faCopy as _e, faCalendar as Me, faDownload as ze, faUpload as Se, faPlus as Te, faSort as De } from "@fortawesome/free-solid-svg-icons";
import Fe from "vuedraggable";
import { v4 as ue } from "uuid";
import { useClipboard as xe, onKeyStroke as K } from "@vueuse/core";
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
}), Ee = { class: "text-xl font-medium" }, Le = { class: "pt-4" }, Ae = { key: 1 }, je = { class: "p-2" }, Po = /* @__PURE__ */ $({
  __name: "Accordion",
  props: /* @__PURE__ */ _({
    title: {},
    variant: { default: "card" }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(l) {
    const t = V(l, "modelValue");
    return (e, n) => e.variant === "card" ? (r(), x(de, { key: 0 }, {
      default: T(() => [
        m("div", {
          onClick: n[0] || (n[0] = (s) => t.value = !t.value),
          class: "flex items-center justify-between gap-2 cursor-pointer"
        }, [
          m("h3", Ee, g(e.title), 1),
          w(U, { name: "rotate" }, {
            default: T(() => [
              m("div", {
                class: h({ rotated: t.value, "not-rotated": !t.value })
              }, [
                w(v(I), {
                  icon: v(se),
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
        onClick: n[1] || (n[1] = (s) => t.value = !t.value),
        class: "p-2 border-b-2 border-base-text flex items-center justify-between gap-2 cursor-pointer"
      }, [
        m("h3", null, g(e.title), 1),
        w(U, { name: "rotate" }, {
          default: T(() => [
            m("div", {
              class: h({ rotated: t.value, "not-rotated": !t.value })
            }, [
              w(v(I), { icon: v(se) }, null, 8, ["icon"])
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
  const t = F(innerWidth < l), e = () => {
    t.value = innerWidth < l;
  };
  return H(() => addEventListener("resize", e)), le(() => removeEventListener("resize", e)), t;
}, pe = () => ({ readableFileSize: (e) => {
  const n = ["Bytes", "KB", "MB", "GB", "TB"], s = Math.floor(Math.log(e) / Math.log(1024));
  return `${Math.round(e / Math.pow(1024, s))} ${n[s]}`;
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
    const s = n.split("/")[0];
    return t.type.startsWith(s + "/");
  }
  return t.type === n;
}) : !0, He = { class: "flex justify-center gap-2 w-full p-4" }, Pe = ["onMouseenter"], Qe = ["onClick"], We = ["src", "alt"], Ne = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-secondary-text bg-card rounded-md"
}, qe = ["onClick"], Ze = /* @__PURE__ */ $({
  __name: "AttachmentList",
  props: /* @__PURE__ */ _({
    size: {}
  }, {
    files: { required: !0 },
    filesModifiers: {},
    selectedIdx: { default: 0 },
    selectedIdxModifiers: {}
  }),
  emits: ["update:files", "update:selectedIdx"],
  setup(l) {
    const t = l, e = V(l, "files"), n = V(l, "selectedIdx"), s = ce(), { formatFiles: o } = pe(), d = F(-1), a = F(o(e.value)), i = (c) => {
      e.value = e.value.filter((p, z) => z !== c), n.value > c && (n.value -= 1);
    }, f = ({ moved: { oldIndex: c, newIndex: p } }) => {
      e.value = Oe(e.value, c, p), n.value === c ? n.value = p : n.value > c && n.value <= p ? n.value-- : n.value < c && n.value >= p && n.value++;
    }, y = D(() => t.size === "lg" ? "w-16 h-16" : "w-14 h-14");
    return O(e, () => a.value = o(e.value)), (c, p) => (r(), u("div", He, [
      B(c.$slots, "additional-items-before"),
      w(v(Fe), {
        modelValue: a.value,
        "onUpdate:modelValue": p[1] || (p[1] = (z) => a.value = z),
        "item-key": "uuid",
        "swap-threshold": 0.65,
        animation: 200,
        class: "flex gap-2",
        onChange: f
      }, {
        item: T(({ element: z, index: S }) => [
          m("div", {
            class: h(`relative border-secondary rounded-md ${y.value} ${n.value === S ? "border-3 bg-secondary" : ""}`),
            onMouseenter: (j) => d.value = S,
            onMouseleave: p[0] || (p[0] = (j) => d.value = -1)
          }, [
            m("button", {
              class: "w-full h-full",
              onClick: (j) => n.value = S
            }, [
              z.type === "image" ? (r(), u("img", {
                key: 0,
                src: z.preview,
                alt: z.name,
                class: "w-full h-full object-cover rounded-md"
              }, null, 8, We)) : (r(), u("span", Ne, [
                z.type === "audio" ? (r(), x(v(I), {
                  key: 0,
                  icon: v(Be),
                  size: "lg"
                }, null, 8, ["icon"])) : z.type === "video" ? (r(), x(v(I), {
                  key: 1,
                  icon: v(Ve),
                  size: "lg"
                }, null, 8, ["icon"])) : (r(), x(v(I), {
                  key: 2,
                  icon: v(ee),
                  size: "lg"
                }, null, 8, ["icon"]))
              ]))
            ], 8, Qe),
            d.value === S || v(s) ? (r(), u("button", {
              key: 0,
              onClick: (j) => i(S),
              class: "absolute cursor-pointer top-0 right-0 text-secondary-text bg-card/80 rounded-full w-5 h-5 flex justify-center items-center"
            }, [
              w(v(I), {
                icon: v(Z),
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
}), Ge = ["src"], Qo = /* @__PURE__ */ $({
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
    }, null, 10, Ge));
  }
}), Ke = { class: "flex items-center" }, Xe = ["src", "alt"], Wo = /* @__PURE__ */ $({
  __name: "AvatarGroup",
  props: {
    avatars: {},
    width: { default: "w-6" },
    overlap: { default: 12 }
  },
  setup(l) {
    return (t, e) => (r(), u("div", Ke, [
      (r(!0), u(L, null, A(t.avatars, (n, s) => (r(), u("img", {
        key: s,
        src: n,
        alt: `avatar ${s + 1}`,
        class: h(`${t.width} rounded-full relative`),
        style: ne({ marginLeft: s === 0 ? "0" : `-${t.overlap}px` })
      }, null, 14, Xe))), 128))
    ]));
  }
}), No = /* @__PURE__ */ $({
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
    hoverEffects: { type: Boolean, default: !0 },
    textColor: { default: "" }
  },
  emits: ["click"],
  setup(l, { emit: t }) {
    const e = l, n = t, s = F(!1), o = (i) => {
      e.href && window.open(e.href), n("click", i);
    }, d = D(() => e.color === "base" ? "secondary-text" : e.color), a = D(() => {
      const i = [
        "btn",
        e.styles,
        { pressed: s },
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
      onClick: o,
      onMousedown: f[0] || (f[0] = (y) => s.value = !0),
      onMouseup: f[1] || (f[1] = (y) => s.value = !1),
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
}, qo = /* @__PURE__ */ $({
  __name: "Checkbox",
  props: /* @__PURE__ */ _({
    name: {},
    error: {}
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ _(["toggle"], ["update:modelValue"]),
  setup(l, { emit: t }) {
    const e = V(l, "modelValue"), n = t, s = () => {
      e.value = !e.value, n("toggle", e.value);
    };
    return (o, d) => (r(), u("div", null, [
      m("div", et, [
        m("button", {
          onClick: d[0] || (d[0] = (a) => s()),
          type: "button",
          class: h(["rounded-sm cursor-pointer border-secondary border-2 w-4 h-4 flex items-center justify-center text-black", { "bg-secondary": e.value, "hover:bg-secondary/30": !e.value }])
        }, [
          e.value ? (r(), x(v(I), {
            key: 0,
            icon: v(ie),
            size: "xs"
          }, null, 8, ["icon"])) : C("", !0)
        ], 2),
        m("label", { for: o.name }, [
          B(o.$slots, "default")
        ], 8, tt)
      ]),
      o.error ? (r(), u("p", ot, g(o.error), 1)) : C("", !0)
    ]));
  }
}), Zo = /* @__PURE__ */ $({
  __name: "ClickableTag",
  props: /* @__PURE__ */ _({
    color: { default: "secondary" },
    size: { default: "md" },
    rounded: { default: "full" },
    styles: { default: "" }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ _(["select"], ["update:modelValue"]),
  setup(l, { emit: t }) {
    const e = l, n = t, s = V(l, "modelValue"), o = D(() => `${e.styles} py-1 px-3 duration-100 text-center border-2 rounded-${e.rounded} text-${e.size} text-${e.color} border-${e.color} hover:bg-${e.color}/10`), d = D(() => `${e.styles} py-1 px-3 duration-100 text-center border-2 rounded-${e.rounded} text-${e.size} bg-${e.color} border-${e.color} text-black`);
    return (a, i) => (r(), u("button", {
      onClick: i[0] || (i[0] = (f) => n("select")),
      class: h(s.value ? d.value : o.value)
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
    const e = l, n = t, s = D(() => {
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
    return (o, d) => (r(), x(Ye, {
      styles: `${o.styles} ${s.value} flex justify-center items-center !px-0 !py-0`,
      href: o.href,
      type: o.type,
      color: o.color,
      disabled: o.disabled,
      variant: o.variant,
      "hover-effects": o.hoverEffects,
      "text-color": o.textColor,
      onClick: d[0] || (d[0] = (a) => n("click", a))
    }, {
      default: T(() => [
        w(v(I), {
          size: o.size,
          icon: o.icon
        }, null, 8, ["size", "icon"])
      ]),
      _: 1
    }, 8, ["styles", "href", "type", "color", "disabled", "variant", "hover-effects", "text-color"]));
  }
}), st = /* @__PURE__ */ $({
  __name: "HoverBox",
  props: {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(l) {
    const t = V(l, "modelValue");
    return (e, n) => (r(), u("div", {
      onMouseenter: n[0] || (n[0] = (s) => t.value = !0),
      onMouseleave: n[1] || (n[1] = (s) => t.value = !1)
    }, [
      B(e.$slots, "default")
    ], 32));
  }
}), lt = {
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
    const t = l, e = F(!1), { copy: n } = xe(), s = async () => {
      t.snippet && await n(t.snippet);
    };
    return (o, d) => (r(), x(st, {
      modelValue: e.value,
      "onUpdate:modelValue": d[1] || (d[1] = (a) => e.value = a)
    }, {
      default: T(() => [
        m("div", {
          class: h([o.styles, "p-2 rounded-lg bg-base whitespace-pre-wrap text-sm font-mono relative overflow-auto"])
        }, [
          m("p", null, g(o.snippet), 1),
          o.allowCopy && e.value ? (r(), u("div", lt, [
            w(R, {
              icon: v(_e),
              color: "card",
              onClick: d[0] || (d[0] = (a) => s())
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
}, G = /* @__PURE__ */ $({
  __name: "Textbox",
  props: /* @__PURE__ */ _({
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
  emits: /* @__PURE__ */ _(["input", "focus", "blur"], ["update:modelValue", "update:input"]),
  setup(l, { emit: t }) {
    const e = l, n = t, s = V(l, "modelValue"), o = V(l, "input"), d = F(!1), a = D(
      () => e.variant === "filled" ? `bg-${e.color}` : "bg-transparent border border-border"
    ), i = (c) => {
      d.value = !0, n("input", c);
    }, f = (c) => {
      d.value = !1, n("blur", c);
    }, y = (c) => {
      const p = c.target;
      s.value = p.value, n("input", c);
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
          w(v(I), {
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
            s.value ? (r(), u("span", rt, g(s.value), 1)) : c.value ? (r(), u("span", it, g(c.value), 1)) : c.placeholder ? (r(), u("span", ut, g(c.placeholder), 1)) : C("", !0)
          ], 2)) : (r(), u("input", {
            key: 1,
            ref_key: "inputElement",
            ref: o,
            name: c.name,
            type: c.type,
            placeholder: c.placeholder,
            value: s.value ?? c.value,
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
  props: /* @__PURE__ */ _({
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
    const t = l, e = V(l, "modelValue"), n = (o) => {
      const d = o.target;
      let a = parseFloat(d.value.replace(/[^\d.-]/g, ""));
      Ue(a) > 0 && (a = (Math.round(a * 100) / 100).toFixed(2)), e.value = a;
    }, s = D(() => {
      if (e.value)
        return `${t.currencySymbol}${e.value}`;
    });
    return (o, d) => (r(), x(G, {
      label: o.label,
      value: s.value,
      "on-input": n,
      placeholder: o.currencySymbol,
      size: o.size,
      color: o.color,
      variant: o.variant
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
}, mt = (l) => {
  const t = navigator.language || "en-US", e = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return new Intl.DateTimeFormat(t, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
    timeZone: e
  }).format(l);
}, ft = (l) => `${N(l)} ${mt(l)}`, vt = (l) => `${N(l[0])} - ${N(l[1])}`, yt = { class: "font-medium" }, ht = {
  key: 0,
  class: "text-error text-sm"
}, Xo = /* @__PURE__ */ $({
  __name: "DatePicker",
  props: /* @__PURE__ */ _({
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
    const t = l, e = V(l, "modelValue"), n = F(null), s = D(() => t.range ? (o) => vt([o[0], o[1]]) : t.includeTime ? (o) => ft(o) : (o) => N(o));
    return (o, d) => (r(), u("div", {
      class: h(o.styles)
    }, [
      m("label", yt, g(o.label), 1),
      w(v(Ie), {
        modelValue: e.value,
        "onUpdate:modelValue": d[0] || (d[0] = (a) => e.value = a),
        ref_key: "dp",
        ref: n,
        format: s.value,
        disabled: o.disabled,
        "auto-apply": "",
        "enable-time-picker": o.includeTime,
        range: o.range,
        "min-date": o.minDate,
        "max-date": o.maxDate
      }, {
        "dp-input": T(({ value: a }) => [
          w(G, {
            placeholder: o.placeholder,
            value: a,
            icon: v(Me),
            variant: o.variant,
            size: o.size,
            color: o.color,
            error: !!o.error,
            styles: o.disabled ? "" : "cursor-pointer",
            disabled: ""
          }, null, 8, ["placeholder", "value", "icon", "variant", "size", "color", "error", "styles"])
        ]),
        _: 1
      }, 8, ["modelValue", "format", "disabled", "enable-time-picker", "range", "min-date", "max-date"]),
      o.error ? (r(), u("p", ht, g(o.error), 1)) : C("", !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ $({
  __name: "Dropzone",
  props: {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ _(["drop"], ["update:modelValue"]),
  setup(l, { emit: t }) {
    const e = t, n = V(l, "modelValue"), s = (o) => {
      n.value = !1, e("drop", o);
    };
    return (o, d) => (r(), u("div", {
      onDragover: d[0] || (d[0] = J((a) => n.value = !0, ["prevent"])),
      onDragleave: d[1] || (d[1] = (a) => n.value = !1),
      onDrop: J(s, ["prevent"])
    }, [
      B(o.$slots, "default", { isDragOver: n.value })
    ], 32));
  }
}), gt = ["multiple", "accept"], me = /* @__PURE__ */ $({
  __name: "FileButton",
  props: {
    multiple: { type: Boolean, default: !0 },
    disabled: { type: Boolean },
    accept: {}
  },
  emits: ["change"],
  setup(l, { emit: t }) {
    const e = l, n = t, s = F(null), o = () => {
      !e.disabled && s.value && s.value.click();
    };
    return (d, a) => (r(), u("div", null, [
      m("input", {
        type: "file",
        ref_key: "fileInput",
        ref: s,
        onChange: a[0] || (a[0] = (i) => n("change", i)),
        multiple: d.multiple,
        accept: d.accept,
        hidden: ""
      }, null, 40, gt),
      m("div", { onClick: o }, [
        B(d.$slots, "default")
      ])
    ]));
  }
}), $t = { class: "flex flex-col gap-2 text-sm" }, kt = { class: "flex gap-2 items-center" }, wt = { key: 0 }, Ct = {
  key: 1,
  class: "text-xl"
}, Bt = {
  key: 2,
  class: "text-sm"
}, Vt = /* @__PURE__ */ $({
  __name: "FileList",
  props: {
    files: {},
    showDownload: { type: Boolean },
    showDelete: { type: Boolean }
  },
  emits: ["download", "delete"],
  setup(l, { emit: t }) {
    const e = t;
    return (n, s) => (r(), u("div", $t, [
      (r(!0), u(L, null, A(n.files, (o) => (r(), u("div", kt, [
        n.showDownload ? (r(), u("div", wt, [
          w(R, {
            icon: v(ze),
            onClick: (d) => e("download", o),
            variant: "light",
            color: "secondary"
          }, null, 8, ["icon", "onClick"])
        ])) : (r(), u("div", Ct, [
          w(v(I), { icon: v(ee) }, null, 8, ["icon"])
        ])),
        m("p", null, g(o.name), 1),
        s[0] || (s[0] = m("div", { class: "flex-grow" }, null, -1)),
        n.showDelete ? (r(), u("div", Bt, [
          w(R, {
            icon: v(Z),
            onClick: (d) => e("delete", o),
            color: "error",
            variant: "light",
            size: "sm"
          }, null, 8, ["icon", "onClick"])
        ])) : C("", !0)
      ]))), 256))
    ]));
  }
}), _t = {
  key: 0,
  class: "font-medium mb-1"
}, Mt = { key: 1 }, zt = {
  key: 0,
  class: "mb-2"
}, St = { class: "font-medium" }, Tt = {
  key: 0,
  class: "text-error text-sm mt-1"
}, Dt = /* @__PURE__ */ $({
  __name: "DragAndDropFiles",
  props: /* @__PURE__ */ _({
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
    }, s = (a) => {
      e.value = e.value.filter((i) => i !== a);
    }, o = (a) => {
      n(a.dataTransfer?.files ?? null);
    }, d = (a) => {
      const i = a.target;
      n(i.files);
    };
    return (a, i) => (r(), u("div", null, [
      a.label ? (r(), u("p", _t, g(a.label), 1)) : C("", !0),
      (a.limit ? !a.disabled && e.value.length < a.limit : !a.disabled) ? (r(), u("div", Mt, [
        w(me, {
          onChange: d,
          accept: a.accept
        }, {
          default: T(() => [
            w(bt, { onDrop: o }, {
              default: T(({ isDragOver: f }) => [
                m("div", {
                  class: h(["cursor-pointer duration-300 text-center border-2 border-dashed py-6 px-4 rounded-lg", {
                    "bg-secondary/30": f,
                    "text-secondary border-secondary": !a.error,
                    "text-error border-error": a.error
                  }])
                }, [
                  a.withIcon ? (r(), u("div", zt, [
                    w(v(I), {
                      icon: v(Se),
                      size: "lg"
                    }, null, 8, ["icon"])
                  ])) : C("", !0),
                  m("p", St, g(a.dropText), 1)
                ], 2)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["accept"]),
        a.error ? (r(), u("p", Tt, g(a.error), 1)) : C("", !0)
      ])) : C("", !0),
      e.value.length > 0 && a.showFileList ? (r(), u("div", {
        key: 2,
        class: h({ "mt-4": !a.disabled })
      }, [
        w(Vt, {
          files: e.value,
          "show-delete": !a.disabled,
          onDelete: s
        }, null, 8, ["files", "show-delete"])
      ], 2)) : C("", !0)
    ]));
  }
}), fe = () => {
  const l = F(!1), t = F(null), e = () => l.value = !0, n = () => l.value = !1, s = (o) => {
    t.value && !t.value.contains(o.target) && n();
  };
  return H(() => {
    document.addEventListener("mousedown", s);
  }), ae(() => {
    document.removeEventListener("mousedown", s);
  }), { dropdownOpen: l, dropdownContainer: t, open: e, close: n };
}, Ft = ["onClick", "onMouseover"], xt = { key: 1 }, It = {
  key: 0,
  class: "text-xs text-secondary-text"
}, Et = /* @__PURE__ */ $({
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
    const e = l, n = t, s = P(), o = F(-1), d = F("top-full"), a = F(null), i = (p) => {
      n("select", p);
    }, f = () => {
      if (!e.container) return;
      const p = e.container.getBoundingClientRect(), z = window.innerHeight || document.documentElement.clientHeight;
      d.value = p.bottom + 150 > z ? "bottom-full" : "top-full";
    }, y = () => {
      d.value = "top-full";
    }, c = async (p) => {
      if (!e.options || e.options.length === 0) return;
      o.value += p, o.value < 0 ? o.value = e.options.length - 1 : o.value >= e.options.length && (o.value = 0), await re();
      const S = a.value?.querySelectorAll("div > div")?.[o.value];
      S && S.scrollIntoView({ block: "nearest", behavior: "smooth" });
    };
    return K("ArrowDown", (p) => {
      e.open && e.options && e.options.length > 0 && (p.preventDefault(), c(1));
    }), K("ArrowUp", (p) => {
      e.open && e.options && e.options.length > 0 && (p.preventDefault(), c(-1));
    }), K("Enter", (p) => {
      e.open && e.options && e.options.length > 0 ? (p.preventDefault(), i(e.options[o.value])) : e.acceptsEmptySelection && (p.preventDefault(), i());
    }), O(() => e.open, () => {
      e.open || (o.value = -1);
    }), (p, z) => (r(), x(U, {
      name: d.value === "top-full" ? "slide-down" : "slide-up",
      onBeforeEnter: f,
      onAfterLeave: y
    }, {
      default: T(() => [
        p.open && p.options && p.options.length > 0 ? (r(), u("div", {
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
          (r(!0), u(L, null, A(p.options, (S, j) => (r(), u("div", {
            key: p.trackBy ? S[p.trackBy] : S,
            onClick: (k) => i(S),
            onMouseover: (k) => o.value = j,
            class: h(["text-md py-2 px-6 rounded-md text-left", { "bg-dropdown-select": o.value === j }])
          }, [
            v(s).option ? B(p.$slots, "option", {
              key: 0,
              option: S
            }, void 0, !0) : (r(), u("div", xt, [
              q(g(p.optionLabel ? S[p.optionLabel] : S) + " ", 1),
              p.optionDescription && S[p.optionDescription] ? (r(), u("div", It, g(S[p.optionDescription]), 1)) : C("", !0)
            ]))
          ], 42, Ft))), 128))
        ], 2)) : C("", !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), te = (l, t) => {
  const e = l.__vccOpts || l;
  for (const [n, s] of t)
    e[n] = s;
  return e;
}, oe = /* @__PURE__ */ te(Et, [["__scopeId", "data-v-5cd7ada7"]]), Jo = /* @__PURE__ */ $({
  __name: "DropdownMenu",
  props: {
    options: {},
    label: { default: "label" },
    trackBy: { default: "value" },
    direction: { default: "left" }
  },
  emits: ["select"],
  setup(l, { emit: t }) {
    const e = t, n = P(), { dropdownOpen: s, dropdownContainer: o } = fe(), d = (a) => {
      s.value = !1, e("select", a);
    };
    return (a, i) => (r(), u("div", {
      class: "relative",
      ref_key: "dropdownContainer",
      ref: o
    }, [
      m("div", {
        onClick: i[0] || (i[0] = (f) => s.value = !v(s))
      }, [
        B(a.$slots, "trigger")
      ]),
      w(oe, {
        container: v(o),
        options: a.options,
        open: v(s),
        "option-label": a.label,
        "track-by": a.trackBy,
        "accepts-empty-selection": "",
        onSelect: d,
        width: "w-64",
        direction: a.direction
      }, W({ _: 2 }, [
        v(n).option ? {
          name: "option",
          fn: T(({ option: f }) => [
            B(a.$slots, "option", { option: f })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["container", "options", "open", "option-label", "track-by", "direction"])
    ], 512));
  }
}), Lt = { class: "flex items-center justify-center" }, At = {
  key: 0,
  class: "text-center font-medium mt-2"
}, jt = /* @__PURE__ */ $({
  __name: "Loader",
  props: {
    label: {}
  },
  setup(l) {
    return (t, e) => (r(), u("div", Lt, [
      m("div", null, [
        e[0] || (e[0] = m("div", { class: "spinner" }, null, -1)),
        t.label ? (r(), u("p", At, g(t.label), 1)) : C("", !0)
      ])
    ]));
  }
}), Yo = /* @__PURE__ */ te(jt, [["__scopeId", "data-v-025bfaf0"]]), Ot = { class: "flex items-center justify-center" }, Ut = { key: 0 }, Rt = ["src", "alt"], Ht = { key: 1 }, Pt = ["src"], Qt = { key: 2 }, Wt = ["src"], Nt = {
  key: 3,
  class: "text-center"
}, qt = /* @__PURE__ */ $({
  __name: "MediaCarousel",
  props: /* @__PURE__ */ _({
    files: {},
    maxMediaHeight: { default: "max-h-72" }
  }, {
    selectedIdx: { default: 0 },
    selectedIdxModifiers: {}
  }),
  emits: ["update:selectedIdx"],
  setup(l) {
    const t = V(l, "selectedIdx"), e = ce(), n = () => {
      const s = document.querySelector("swiper-container")?.swiper;
      s && (t.value = s.activeIndex);
    };
    return O(t, () => {
      const s = document.querySelector("swiper-container")?.swiper;
      s && t.value !== s.activeIndex && s.slideTo(t.value);
    }), (s, o) => {
      const d = Y("swiper-slide"), a = Y("swiper-container");
      return r(), x(a, {
        "slides-per-view": 1,
        "centered-slides": !0,
        navigation: !v(e),
        onSwiperslidechange: n
      }, {
        default: T(() => [
          (r(!0), u(L, null, A(s.files, (i) => (r(), x(d, null, {
            default: T(() => [
              m("div", Ot, [
                i.type === "image" ? (r(), u("div", Ut, [
                  m("img", {
                    src: i.preview,
                    alt: i.name,
                    class: h(s.maxMediaHeight)
                  }, null, 10, Rt)
                ])) : i.type === "video" ? (r(), u("div", Ht, [
                  m("video", {
                    src: i.preview,
                    controls: "",
                    class: h(s.maxMediaHeight)
                  }, null, 10, Pt)
                ])) : i.type === "audio" ? (r(), u("div", Qt, [
                  m("audio", {
                    src: i.preview,
                    controls: ""
                  }, null, 8, Wt)
                ])) : (r(), u("div", Nt, [
                  w(v(I), {
                    icon: v(ee),
                    size: "xl"
                  }, null, 8, ["icon"]),
                  o[0] || (o[0] = m("p", { class: "text-lg mt-2" }, "No preview available", -1))
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
}), Zt = {
  key: 0,
  class: "font-medium mb-1"
}, Gt = {
  key: 1,
  class: "mb-2"
}, Kt = {
  key: 0,
  class: "text-error text-sm mt-1"
}, es = /* @__PURE__ */ $({
  __name: "MediaInput",
  props: /* @__PURE__ */ _({
    label: {},
    placeholder: {},
    error: {}
  }, {
    modelValue: { default: [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(l) {
    const t = V(l, "modelValue"), e = F(0), { formatFiles: n } = pe(), s = (d) => {
      const a = d.target;
      a.files && t.value.push(...Array.from(a.files));
    }, o = D(() => n(t.value));
    return (d, a) => (r(), u("div", null, [
      d.label ? (r(), u("label", Zt, g(d.label), 1)) : C("", !0),
      t.value.length > 0 ? (r(), u("div", Gt, [
        w(qt, {
          "selected-idx": e.value,
          "onUpdate:selectedIdx": a[0] || (a[0] = (i) => e.value = i),
          files: o.value
        }, null, 8, ["selected-idx", "files"]),
        w(Ze, {
          "selected-idx": e.value,
          "onUpdate:selectedIdx": a[1] || (a[1] = (i) => e.value = i),
          files: t.value,
          "onUpdate:files": a[2] || (a[2] = (i) => t.value = i)
        }, {
          "additional-items-after": T(() => [
            w(me, {
              onChange: s,
              accept: "image/*"
            }, {
              default: T(() => [
                w(R, {
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
      ])) : (r(), x(Dt, {
        key: 2,
        "with-icon": "",
        "drop-text": d.placeholder,
        modelValue: t.value,
        "onUpdate:modelValue": a[3] || (a[3] = (i) => t.value = i),
        error: d.error
      }, null, 8, ["drop-text", "modelValue", "error"]))
    ]));
  }
}), Xt = {
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
    return le(() => e("close")), (n, s) => (r(), x(v(he), {
      "overlay-transition": "vfm-fade",
      "content-transition": "vfm-fade",
      class: "flex justify-center items-center",
      "content-class": l.contentClass
    }, {
      default: T(() => [
        w(de, { styles: "w-full" }, {
          default: T(() => [
            B(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["content-class"]));
  }
}, ts = /* @__PURE__ */ $({
  __name: "Modal",
  props: /* @__PURE__ */ _({
    contentClass: { default: "w-full max-w-xl p-2" },
    clickToClose: { type: Boolean, default: !0 },
    escToClose: { type: Boolean, default: !0 }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(l) {
    const t = l, e = V(l, "modelValue"), n = P(), s = be({
      component: Xt,
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
      e.value === !0 ? s.open() : e.value === !1 && s.close();
    }), (o, d) => (r(), x(v(ge)));
  }
}), Jt = {
  key: 0,
  class: "text-error text-sm"
}, os = /* @__PURE__ */ $({
  __name: "Multiselect",
  props: /* @__PURE__ */ _({
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
  emits: /* @__PURE__ */ _(["select", "focus", "blur"], ["update:modelValue", "update:searchQuery", "update:input"]),
  setup(l, { emit: t }) {
    const e = l, n = t, s = V(l, "modelValue"), o = V(l, "searchQuery"), d = V(l, "input"), a = P(), i = F(!1), f = F(null), y = D(() => e.acceptsDuplicates || !e.options ? e.options : e.options.filter((b) => !s.value.includes(e.formatResult(b)))), c = (b) => {
      s.value.push(e.formatResult(b)), o.value = "", n("select", b);
    }, p = (b) => {
      s.value = s.value.filter((M, E) => E !== b);
    }, z = () => {
      i.value = !0;
    }, S = () => {
      i.value = !1;
    }, j = () => {
      e.searchable || (i.value ? S() : z());
    }, k = (b) => {
      const M = b.target;
      f.value && !f.value.contains(M) && S();
    };
    return H(() => {
      document.addEventListener("mousedown", k);
    }), ae(() => {
      document.removeEventListener("mousedown", k);
    }), O(o, () => {
      e.searchable && o.value.length > 0 && z();
    }), (b, M) => (r(), u("div", {
      class: h([b.styles])
    }, [
      m("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: f
      }, [
        m("div", {
          onClick: M[4] || (M[4] = (E) => j()),
          class: h({ "cursor-pointer": !b.searchable })
        }, [
          w(G, {
            modelValue: o.value,
            "onUpdate:modelValue": M[0] || (M[0] = (E) => o.value = E),
            input: d.value,
            "onUpdate:input": M[1] || (M[1] = (E) => d.value = E),
            label: b.label,
            placeholder: b.placeholder,
            disabled: !b.searchable,
            icon: b.icon,
            error: !!b.error,
            size: b.size,
            color: b.color,
            variant: b.variant,
            styles: b.textboxStyles,
            onFocus: M[2] || (M[2] = (E) => n("focus", E)),
            onBlur: M[3] || (M[3] = (E) => n("blur", E))
          }, {
            "left-section": T(() => [
              (r(!0), u(L, null, A(s.value, (E, ye) => (r(), u("div", {
                key: E[b.trackBy]
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
        w(oe, {
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
            fn: T(({ option: E }) => [
              B(b.$slots, "option", { option: E })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      b.error && typeof b.error != "boolean" ? (r(), u("p", Jt, g(b.error), 1)) : C("", !0)
    ], 2));
  }
}), Yt = { class: "font-medium" }, eo = {
  key: 0,
  class: "text-text-secondary flex justify-center items-center w-10 rounded-l-md"
}, to = ["placeholder", "min", "max", "disabled"], oo = {
  key: 0,
  class: "text-error text-sm"
}, so = {
  key: 1,
  class: "text-error text-sm"
}, ss = /* @__PURE__ */ $({
  __name: "NumberInput",
  props: /* @__PURE__ */ _({
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
    ), s = D(() => {
      const o = typeof e.value == "string" ? parseFloat(e.value) : e.value;
      return o && o > t.max ? `Value must be ${t.max} or less.` : o && o < t.min ? `Value must be ${t.min} or more.` : !1;
    });
    return (o, d) => (r(), u("div", null, [
      m("h4", Yt, g(o.label), 1),
      m("div", {
        class: h(["rounded-lg flex h-10 items-center", n.value, o.styles, { error: s.value || o.error, "px-2": !o.icon }])
      }, [
        o.icon ? (r(), u("div", eo, [
          w(v(I), {
            icon: o.icon,
            size: "1x",
            class: "text-secondary-text"
          }, null, 8, ["icon"])
        ])) : C("", !0),
        Q(m("input", {
          "onUpdate:modelValue": d[0] || (d[0] = (a) => e.value = a),
          placeholder: o.placeholder,
          type: "number",
          min: o.min,
          max: o.max,
          disabled: o.disabled,
          class: "flex-grow w-full py-2 px-0 border-none outline-none rounded-lg placeholder:text-secondary-text bg-transparent appearance-none"
        }, null, 8, to), [
          [ke, e.value]
        ])
      ], 2),
      s.value ? (r(), u("p", oo, g(s.value), 1)) : o.error && typeof o.error == "string" ? (r(), u("p", so, g(o.error), 1)) : C("", !0)
    ]));
  }
}), ls = /* @__PURE__ */ $({
  __name: "Paragraph",
  props: {
    text: {},
    styles: {},
    limit: {},
    includeWhitespace: { type: Boolean }
  },
  setup(l) {
    const t = l, e = D(() => t.text && t.limit ? `${t.text.substring(0, t.limit)}${t.text.length > t.limit ? "..." : ""}` : t.text);
    return (n, s) => (r(), u("p", {
      class: h([n.styles, { "whitespace-pre-wrap": n.includeWhitespace }])
    }, g(e.value), 3));
  }
}), lo = ["name", "value", "checked"], no = { class: "rounded-full border-2 border-secondary flex items-center justify-center h-4 w-4" }, ns = /* @__PURE__ */ $({
  __name: "Radio",
  props: /* @__PURE__ */ _({
    value: { type: [String, Boolean] },
    label: {},
    name: {},
    modelValue: {}
  }, {
    modelValue: { type: [String, Boolean] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ _(["select"], ["update:modelValue"]),
  setup(l, { emit: t }) {
    const e = l, n = t, s = V(l, "modelValue"), o = F(!1), d = D(() => e.modelValue === e.value), a = (i) => {
      s.value = e.value, n("select", i);
    };
    return (i, f) => (r(), u("label", {
      class: "flex items-center gap-3 relative cursor-pointer",
      onMouseenter: f[1] || (f[1] = (y) => o.value = !0),
      onMouseleave: f[2] || (f[2] = (y) => o.value = !1)
    }, [
      m("input", {
        class: "absolute opacity-0 cursor-pointer",
        type: "radio",
        name: i.name,
        value: i.value,
        checked: d.value,
        onChange: f[0] || (f[0] = (y) => a(y))
      }, null, 40, lo),
      m("span", no, [
        m("span", {
          class: h(["rounded-full h-2 w-2", { "bg-secondary": o.value || d.value }])
        }, null, 2)
      ]),
      m("span", null, g(i.label), 1)
    ], 32));
  }
}), ao = { class: "flex items-center pr-1" }, ro = { class: "flex items-center pr-2 text-secondary-text" }, io = {
  key: 0,
  class: "text-error text-sm"
}, as = /* @__PURE__ */ $({
  __name: "Select",
  props: /* @__PURE__ */ _({
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
  emits: /* @__PURE__ */ _(["select", "blur", "focus"], ["update:modelValue", "update:searchQuery", "update:input"]),
  setup(l, { emit: t }) {
    const e = l, n = t, s = V(l, "modelValue"), o = V(l, "searchQuery"), d = V(l, "input"), a = P(), { dropdownOpen: i, dropdownContainer: f, open: y, close: c } = fe(), p = (k) => {
      const b = e.formatResult(k);
      s.value = b, n("select", b), e.optionLabel && e.searchable ? o.value = k[e.optionLabel] : e.searchable && (o.value = k), re(c);
    }, z = (k) => {
      s.value = null, o.value = "";
    }, S = () => {
      e.searchable || (i.value ? c() : y());
    }, j = D(() => s.value && e.optionLabel ? s.value[e.optionLabel] : s.value ? s.value : null);
    return O(o, () => {
      e.searchable && o.value.length > 0 ? y() : e.searchable && c();
    }), (k, b) => (r(), u("div", {
      class: h([k.styles])
    }, [
      m("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: f
      }, [
        m("div", {
          onClick: b[5] || (b[5] = (M) => S()),
          class: h({ "cursor-pointer": !k.searchable })
        }, [
          w(G, {
            modelValue: o.value,
            "onUpdate:modelValue": b[1] || (b[1] = (M) => o.value = M),
            input: d.value,
            "onUpdate:input": b[2] || (b[2] = (M) => d.value = M),
            value: j.value,
            label: k.label,
            placeholder: k.placeholder,
            disabled: !k.searchable || k.lockOnSelect && s.value,
            icon: s.value?.icon ?? k.icon,
            error: !!k.error,
            size: k.size,
            color: k.color,
            variant: k.variant,
            styles: k.textboxStyles,
            onFocus: b[3] || (b[3] = (M) => n("focus", M)),
            onBlur: b[4] || (b[4] = (M) => n("blur", M))
          }, W({ _: 2 }, [
            k.lockOnSelect && k.searchable && s.value ? {
              name: "right-section",
              fn: T(() => [
                m("div", ao, [
                  w(R, {
                    icon: v(Z),
                    onClick: b[0] || (b[0] = (M) => z()),
                    variant: "subtle",
                    color: "base",
                    size: k.size
                  }, null, 8, ["icon", "size"])
                ])
              ]),
              key: "0"
            } : k.searchable ? void 0 : {
              name: "right-section",
              fn: T(() => [
                m("div", ro, [
                  w(v(I), {
                    icon: v(De),
                    size: k.size
                  }, null, 8, ["icon", "size"])
                ])
              ]),
              key: "1"
            }
          ]), 1032, ["modelValue", "input", "value", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        w(oe, {
          container: v(f),
          options: k.options,
          "option-label": k.optionLabel,
          "track-by": k.trackBy,
          open: v(i),
          "accepts-empty-selection": k.acceptsEmptySelection,
          onSelect: p
        }, W({ _: 2 }, [
          v(a).option ? {
            name: "option",
            fn: T(({ option: M }) => [
              B(k.$slots, "option", { option: M })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      k.error && typeof k.error != "boolean" ? (r(), u("p", io, g(k.error), 1)) : C("", !0)
    ], 2));
  }
}), uo = {
  key: 0,
  class: "w-full"
}, co = { class: "flex justify-between items-center gap-2 px-4" }, po = ["onClick"], mo = { class: "flex justify-between items-center mt-1 px-3" }, fo = ["onClick"], vo = ["onClick"], rs = /* @__PURE__ */ $({
  __name: "Stepper",
  props: /* @__PURE__ */ _({
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
    const t = l, e = V(l, "modelValue"), n = D(() => t.steps ? t.steps.findIndex((i) => i.value === e.value) : -1), s = D(() => t.steps ? t.steps.map((i, f) => f < n.value ? { ...i, status: "completed" } : f === n.value ? { ...i, status: "in-progress" } : { ...i, status: "uncompleted" }) : []), o = (i) => i.status === "uncompleted" || i.status !== "in-progress" && t.variant === "minimalist" ? "text-secondary-text bg-card-accent" : `text-${t.color} bg-${t.color}${t.variant === "classic" ? "/30" : ""}`, d = (i) => t.canMoveForwards && i > n.value || t.canMoveBackwards && i < n.value ? "cursor-pointer" : "cursor-default", a = (i, f) => {
      (t.canMoveForwards && f > n.value || t.canMoveBackwards && f < n.value) && (e.value = i.value);
    };
    return (i, f) => i.variant === "classic" ? (r(), u("div", uo, [
      m("div", co, [
        (r(!0), u(L, null, A(s.value, (y, c) => (r(), u(L, {
          key: y.value
        }, [
          m("div", {
            onClick: (p) => a(y, c),
            class: h([
              "w-10 h-10 rounded-full flex items-center justify-center",
              o(y),
              d(c)
            ])
          }, [
            y.icon ? (r(), x(v(I), {
              key: 0,
              icon: y.status === "completed" && !i.canMoveBackwards ? v(ie) : y.icon
            }, null, 8, ["icon"])) : C("", !0)
          ], 10, po),
          c < i.steps.length - 1 ? (r(), u("div", {
            key: 0,
            class: h(`flex-grow bg-${s.value[c + 1].status === "uncompleted" ? "secondary-text" : i.color} h-0.5`)
          }, null, 2)) : C("", !0)
        ], 64))), 128))
      ]),
      m("div", mo, [
        (r(!0), u(L, null, A(s.value, (y, c) => (r(), u("p", {
          key: "label-" + y.value,
          onClick: (p) => a(y, c),
          class: h([
            y.status === "uncompleted" ? "text-secondary-text" : `text-${i.color}`,
            "text-xs font-medium text-center",
            d(c)
          ])
        }, g(y.label), 11, fo))), 128))
      ])
    ])) : i.variant === "minimalist" ? (r(), u("div", {
      key: 1,
      class: h(`grid grid-cols-${s.value.length} gap-1`)
    }, [
      (r(!0), u(L, null, A(s.value, (y, c) => (r(), u("div", {
        key: y.value,
        onClick: (p) => a(y, c)
      }, [
        m("div", {
          class: h(["h-1 rounded-lg mb-1", o(y), d(c)])
        }, null, 2),
        m("p", {
          class: h([
            y.status !== "in-progress" ? "text-secondary-text" : `text-${i.color}`,
            "text-sm font-medium",
            d(c)
          ])
        }, g(y.label), 3)
      ], 8, vo))), 128))
    ], 2)) : C("", !0);
  }
}), yo = {};
function ho(l, t) {
  return r(), u("div", {
    onClick: J(() => {
    }, ["stop"])
  }, [
    B(l.$slots, "default")
  ]);
}
const is = /* @__PURE__ */ te(yo, [["render", ho]]), bo = { class: "overflow-hidden rounded-xl shadow-full-box border border-border" }, go = { class: "w-full border-collapse table-fixed bg-card overflow-hidden" }, $o = ["onClick"], ko = ["colspan", "rowspan"], us = /* @__PURE__ */ $({
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
    }, s = (a, i) => {
      const f = Array.isArray(a) ? {} : a;
      return [
        f.class ?? "",
        "border-border",
        { "border-b": i !== t.rows.length - 1 },
        { "cursor-pointer hover:bg-muted/50": f.onClick || t.onRowClick }
      ];
    }, o = (a, i) => {
      const f = Array.isArray(a) ? {} : a;
      f.onClick ? f.onClick(a, i) : t.onRowClick && t.onRowClick(a, i);
    }, d = (a) => String.fromCharCode(65 + a);
    return (a, i) => (r(), u("div", bo, [
      m("table", go, [
        m("tbody", null, [
          (r(!0), u(L, null, A(a.rows, (f, y) => (r(), u("tr", {
            key: "row-" + y,
            class: h(s(f, y)),
            onClick: (c) => o(f, y)
          }, [
            (r(!0), u(L, null, A(Array.isArray(f) ? f : f.cells, (c, p) => (r(), u("td", {
              key: "cell-" + y + "-" + p,
              colspan: c.colspan || 1,
              rowspan: c.rowspan || 1,
              class: h(n(c, y, p)),
              style: ne(e(c))
            }, [
              B(a.$slots, `${d(p)}${y + 1}`, {}, () => [
                q(g(c.content), 1)
              ])
            ], 14, ko))), 128))
          ], 10, $o))), 128))
        ])
      ])
    ]));
  }
}), wo = ["onClick"], ds = /* @__PURE__ */ $({
  __name: "Tabs",
  props: /* @__PURE__ */ _({
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
        (r(!0), u(L, null, A(e.tabs, (s) => (r(), u("button", {
          key: s.name,
          class: h(["cursor-pointer", [{
            "text-error": s.error,
            "underline-offset-8 underline font-medium": s.name === t.value
          }, `text-${e.size}`]]),
          onClick: (o) => t.value = s.name,
          type: "button"
        }, g(s.label), 11, wo))), 128))
      ], 2),
      (r(!0), u(L, null, A(e.tabs, (s) => Q((r(), u("div", {
        key: s.name
      }, [
        B(e.$slots, `tab-${s.name}`)
      ])), [
        [X, s.name === t.value]
      ])), 128))
    ]));
  }
}), cs = /* @__PURE__ */ $({
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
}), Co = { class: "flex items-center justify-between" }, Bo = ["for"], Vo = {
  key: 0,
  class: "text-xs text-secondary-text mr-1"
}, _o = ["name", "placeholder", "value", "disabled", "maxlength", "rows"], Mo = {
  key: 0,
  class: "text-error text-sm"
}, zo = {
  key: 1,
  class: "text-success text-sm"
}, ps = /* @__PURE__ */ $({
  __name: "Textarea",
  props: /* @__PURE__ */ _({
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
  emits: /* @__PURE__ */ _(["focus", "blur", "keyPress", "input"], ["update:modelValue", "update:input"]),
  setup(l, { emit: t }) {
    const e = l, n = t, s = V(l, "modelValue"), o = V(l, "input"), d = F(e.modelValue), a = F(!1), i = D(
      () => e.variant === "filled" ? `bg-${e.color}` : "bg-transparent border border-border"
    ), f = (p) => {
      a.value = !0, n("focus", p);
    }, y = (p) => {
      a.value = !1, n("blur", p);
    }, c = (p) => {
      const z = p.target;
      d.value = z.value, s.value = z.value, n("input", p);
    };
    return O(
      () => e.modelValue,
      (p) => {
        d.value = p;
      }
    ), (p, z) => (r(), u("div", null, [
      m("div", Co, [
        m("label", {
          for: p.name,
          class: "font-medium"
        }, g(p.label), 9, Bo),
        p.maxlength ? (r(), u("p", Vo, g(s.value?.length ?? 0) + " / " + g(p.maxlength), 1)) : C("", !0)
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
          value: s.value,
          disabled: p.disabled,
          onInput: c,
          onFocus: f,
          onBlur: y,
          onKeydown: z[0] || (z[0] = (S) => n("keyPress", S)),
          maxlength: p.maxlength,
          rows: p.rows,
          ref_key: "inputElement",
          ref: o
        }, null, 42, _o)
      ], 2),
      p.error && typeof p.error != "boolean" ? (r(), u("p", Mo, g(p.error), 1)) : p.success && typeof p.error != "boolean" ? (r(), u("p", zo, g(p.success), 1)) : C("", !0)
    ]));
  }
}), ve = () => {
  const l = we("toastMessages", F([]));
  return {
    initializeToast: () => Ce("toastMessages", F([])),
    toastMessages: l,
    addToast: (s) => l.value.push({ ...s, uuid: ue() }),
    closeToast: (s) => l.value = l.value.filter((o) => o.uuid !== s)
  };
}, So = { class: "flex-grow" }, To = { class: "text-sm font-medium" }, Do = { class: "text-sm" }, Fo = /* @__PURE__ */ $({
  __name: "ToastMessage",
  props: {
    message: {}
  },
  setup(l) {
    const t = l, { closeToast: e } = ve();
    return H(() => {
      t.message.duration && setTimeout(() => e(t.message.uuid), t.message.duration);
    }), (n, s) => {
      const o = Y("IconButton");
      return r(), x(U, {
        name: "slide-fade",
        appear: ""
      }, {
        default: T(() => [
          m("div", {
            class: h(`w-72 flex items-center gap-2 rounded-md p-2 bg-${n.message.color ?? "success"}/${n.message.opacity ?? 60}`)
          }, [
            m("div", So, [
              m("p", To, g(n.message.title), 1),
              m("p", Do, g(n.message.content), 1)
            ]),
            w(o, {
              icon: v(Z),
              color: "base",
              variant: "subtle",
              onClick: s[0] || (s[0] = (d) => v(e)(n.message.uuid))
            }, null, 8, ["icon"])
          ], 2)
        ]),
        _: 1
      });
    };
  }
}), xo = { class: "relative" }, ms = {
  __name: "ToastContainer",
  props: {
    containerName: String,
    position: {
      type: String,
      default: "top-0 right-0"
    }
  },
  setup(l) {
    const t = l, { toastMessages: e } = ve(), n = D(() => e.value.filter((s) => s.container === t.containerName));
    return (s, o) => (r(), u("div", xo, [
      B(s.$slots, "default"),
      n.value.length > 0 ? (r(), u("div", {
        key: 0,
        class: h(["absolute p-4 z-50 flex flex-col gap-2 overflow-hidden", l.position])
      }, [
        (r(!0), u(L, null, A(n.value, (d) => (r(), u("div", {
          key: d.uuid
        }, [
          B(s.$slots, "toast-content", { message: d }, () => [
            w(Fo, { message: d }, null, 8, ["message"])
          ])
        ]))), 128))
      ], 2)) : C("", !0)
    ]));
  }
}, fs = /* @__PURE__ */ $({
  __name: "Toggle",
  props: /* @__PURE__ */ _({
    activeColor: { default: "secondary" },
    value: { type: Boolean, default: !1 },
    icon: {}
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ _(["toggle"], ["update:modelValue"]),
  setup(l, { emit: t }) {
    const e = l, n = t, s = V(l, "modelValue"), o = () => {
      s.value = !s.value, n("toggle", s.value);
    }, d = D(
      () => s.value ? `bg-${e.activeColor}` : "bg-gray-300 dark:bg-gray-600"
    ), a = D(
      () => s.value ? "translate-x-6" : "translate-x-0"
    );
    return H(() => {
      s.value === void 0 && (s.value = e.value);
    }), (i, f) => (r(), u("div", {
      onClick: o,
      class: h([d.value, "cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300"])
    }, [
      m("div", {
        class: h([a.value, "bg-white dark:bg-gray-200 text-black text-sm flex justify-center items-center w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"])
      }, [
        i.icon ? (r(), x(v(I), {
          key: 0,
          icon: i.icon
        }, null, 8, ["icon"])) : C("", !0)
      ], 2)
    ], 2));
  }
}), Io = { class: "rounded-md bg-dropdown/80 text-dropdown-text p-1 text-xs text-nowrap" }, vs = /* @__PURE__ */ $({
  __name: "Tooltip",
  props: {
    text: {},
    position: { default: "top" }
  },
  setup(l) {
    const t = l, e = F(!1), n = D(() => {
      let s;
      switch (t.position) {
        case "right":
          s = "left-full pl-4";
          break;
      }
      return s;
    });
    return (s, o) => (r(), u("div", {
      class: "relative flex items-center",
      onMouseenter: o[0] || (o[0] = (d) => e.value = !0),
      onMouseleave: o[1] || (o[1] = (d) => e.value = !1)
    }, [
      B(s.$slots, "default"),
      w(U, { name: "fade" }, {
        default: T(() => [
          e.value ? (r(), u("div", {
            key: 0,
            class: h([n.value, "absolute delay-1000 z-50"])
          }, [
            m("div", Io, [
              B(s.$slots, "tooltip-content", {}, () => [
                q(g(s.text), 1)
              ])
            ])
          ], 2)) : C("", !0)
        ]),
        _: 3
      })
    ], 32));
  }
}), ys = {
  install(l) {
    const t = $e();
    l.use(t);
  }
};
export {
  Po as Accordion,
  Ze as AttachmentList,
  Qo as Avatar,
  Wo as AvatarGroup,
  No as Badge,
  Ye as Button,
  de as Card,
  qo as Checkbox,
  Zo as ClickableTag,
  Go as CodeSnippet,
  Ko as CurrencyInput,
  Xo as DatePicker,
  Dt as DragAndDropFiles,
  Jo as DropdownMenu,
  oe as DropdownOptions,
  bt as Dropzone,
  me as FileButton,
  Vt as FileList,
  st as HoverBox,
  R as IconButton,
  Yo as Loader,
  qt as MediaCarousel,
  es as MediaInput,
  ts as Modal,
  os as Multiselect,
  ss as NumberInput,
  ls as Paragraph,
  ns as Radio,
  as as Select,
  rs as Stepper,
  is as StopPropagation,
  us as TableCard,
  ds as Tabs,
  cs as Tag,
  ps as Textarea,
  G as Textbox,
  ms as ToastContainer,
  fs as Toggle,
  vs as Tooltip,
  ys as default,
  pe as useFiles,
  ce as useIsHandheld,
  ve as useToast
};
