import { VueFinalModal as ye, useModal as pe, ModalsContainer as be, createVfm as he } from "vue-final-modal";
import { createElementBlock as s, openBlock as a, normalizeClass as g, renderSlot as $, mergeModels as S, useModel as k, createBlock as F, createCommentVNode as x, withCtx as V, createElementVNode as d, withDirectives as P, createVNode as h, toDisplayString as b, Transition as U, unref as v, vShow as X, ref as T, onMounted as N, onUnmounted as ne, computed as z, watch as O, Fragment as E, renderList as L, normalizeStyle as oe, createTextVNode as q, withModifiers as J, onBeforeUnmount as ae, useSlots as H, nextTick as se, createSlots as Q, resolveComponent as Y, vModelText as xe, inject as $e, provide as ke } from "vue";
import { FontAwesomeIcon as D } from "@fortawesome/vue-fontawesome";
import { faChevronDown as le, faHeadphones as Se, faVideoCamera as we, faFile as _, faXmark as G, faCheck as re, faCopy as Ce, faCalendar as Ve, faDownload as Be, faUpload as Me, faPlus as ze, faSort as Te } from "@fortawesome/free-solid-svg-icons";
import De from "vuedraggable";
import { v4 as ie } from "uuid";
import { useClipboard as Fe, onKeyStroke as Z } from "@vueuse/core";
import Ie from "@vuepic/vue-datepicker";
const ue = {
  __name: "Card",
  props: {
    styles: {
      type: String,
      default: ""
    },
    padding: {
      type: String,
      default: "p-4"
    },
    flat: Boolean,
    boxed: Boolean
  },
  setup(e) {
    return (l, t) => (a(), s("div", {
      class: g([
        e.styles,
        e.padding,
        { "shadow-sm": !e.flat && !e.styles.includes("shadow") },
        { "rounded-md": !e.boxed && !e.styles.includes("rounded") },
        "bg-card border border-border dark:border-none"
      ])
    }, [
      $(l.$slots, "default")
    ], 2));
  }
}, Ee = { class: "text-xl font-medium" }, Le = { class: "pt-4" }, Ae = { key: 1 }, je = { class: "p-2" }, Rl = {
  __name: "Accordion",
  props: /* @__PURE__ */ S({
    title: String,
    variant: {
      type: String,
      default: "card"
    }
  }, {
    modelValue: { default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = k(e, "modelValue");
    return (t, o) => e.variant === "card" ? (a(), F(ue, { key: 0 }, {
      default: V(() => [
        d("div", {
          onClick: o[0] || (o[0] = (n) => l.value = !l.value),
          class: "flex items-center justify-between gap-2 cursor-pointer"
        }, [
          d("h3", Ee, b(e.title), 1),
          h(U, { name: "rotate" }, {
            default: V(() => [
              d("div", {
                class: g({ rotated: l.value, "not-rotated": !l.value })
              }, [
                h(v(D), {
                  icon: v(le),
                  size: "lg"
                }, null, 8, ["icon"])
              ], 2)
            ]),
            _: 1
          })
        ]),
        P(d("div", Le, [
          $(t.$slots, "default")
        ], 512), [
          [X, l.value]
        ])
      ]),
      _: 3
    })) : e.variant === "minimal" ? (a(), s("div", Ae, [
      d("div", {
        onClick: o[1] || (o[1] = (n) => l.value = !l.value),
        class: "p-2 border-b-2 border-base-text flex items-center justify-between gap-2 cursor-pointer"
      }, [
        d("h3", null, b(e.title), 1),
        h(U, { name: "rotate" }, {
          default: V(() => [
            d("div", {
              class: g({ rotated: l.value, "not-rotated": !l.value })
            }, [
              h(v(D), { icon: v(le) }, null, 8, ["icon"])
            ], 2)
          ]),
          _: 1
        })
      ]),
      P(d("div", je, [
        $(t.$slots, "default")
      ], 512), [
        [X, l.value]
      ])
    ])) : x("", !0);
  }
}, ce = (e = 800) => {
  const l = T(innerWidth < e), t = () => l.value = innerWidth < e;
  return N(() => addEventListener("resize", t)), ne(() => removeEventListener("resize", t)), l;
}, de = () => ({ readableFileSize: (t) => {
  const o = ["Bytes", "KB", "MB", "GB", "TB"], n = Math.floor(Math.log(t) / Math.log(1024));
  return `${Math.round(t / Math.pow(1024, n))} ${o[n]}`;
}, formatFiles: (t) => t?.map((o) => o.uuid ? o : {
  name: o.name,
  size: o.size,
  uuid: ie(),
  preview: URL.createObjectURL(o),
  type: o.type?.split("/")[0]
}) }), Oe = (e, l, t) => {
  if (l < 0 || l >= e.length || t < 0 || t >= e.length)
    throw new Error("Invalid indices");
  const [o] = e.splice(l, 1);
  return e.splice(t, 0, o), e;
}, Ue = (e) => Math.floor(e) !== e && e.toString().split(".")[1]?.length || 0, Re = (e, l) => e ? e.split(",").map((o) => o.trim().toLowerCase()).some((o) => {
  if (o.startsWith("."))
    return file.name.toLowerCase().endsWith(o);
  if (o.endsWith("/*")) {
    const n = o.split("/")[0];
    return file.type.startsWith(n + "/");
  }
  return file.type === o;
}) : !0, Ne = { class: "flex justify-center gap-2 w-full p-4" }, He = ["onMouseenter"], Pe = ["onClick"], Qe = ["src", "alt"], We = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-secondary-text bg-card rounded-md"
}, qe = ["onClick"], Ge = {
  __name: "AttachmentList",
  props: /* @__PURE__ */ S({
    size: String
  }, {
    files: { type: Array, required: !0 },
    filesModifiers: {},
    selectedIdx: { default: 0 },
    selectedIdxModifiers: {}
  }),
  emits: ["update:files", "update:selectedIdx"],
  setup(e) {
    const l = e, t = k(e, "files"), o = k(e, "selectedIdx"), n = ce(), { formatFiles: u } = de(), r = T(-1), i = T(u(l.files)), c = (f) => {
      t.value = t.value.filter((y, C) => C !== f), o.value > f && (o.value -= 1);
    }, m = ({ moved: { oldIndex: f, newIndex: y } }) => {
      t.value = Oe(t.value, f, y), o.value === f ? o.value = y : o.value > f && o.value <= y ? o.value-- : o.value < f && o.value >= y && o.value++;
    }, p = z(() => l.size === "lg" ? "w-16 h-16" : "w-14 h-14");
    return O(t, () => i.value = u(l.files)), (f, y) => (a(), s("div", Ne, [
      $(f.$slots, "additional-items-before"),
      h(v(De), {
        modelValue: i.value,
        "onUpdate:modelValue": y[1] || (y[1] = (C) => i.value = C),
        "item-key": "uuid",
        "swap-threshold": 0.65,
        animation: 200,
        class: "flex gap-2",
        onChange: m
      }, {
        item: V(({ element: C, index: B }) => [
          d("div", {
            class: g(`relative border-secondary rounded-md ${p.value} ${o.value === B ? "border-3 bg-secondary" : ""}`),
            onMouseenter: (j) => r.value = B,
            onMouseleave: y[0] || (y[0] = (j) => r.value = -1)
          }, [
            d("button", {
              class: "w-full h-full",
              onClick: (j) => o.value = B
            }, [
              C.type === "image" ? (a(), s("img", {
                key: 0,
                src: C.preview,
                alt: C.name,
                class: "w-full h-full object-cover rounded-md"
              }, null, 8, Qe)) : (a(), s("span", We, [
                C.type === "audio" ? (a(), F(v(D), {
                  key: 0,
                  icon: v(Se),
                  size: "lg"
                }, null, 8, ["icon"])) : C.type === "video" ? (a(), F(v(D), {
                  key: 1,
                  icon: v(we),
                  size: "lg"
                }, null, 8, ["icon"])) : (a(), F(v(D), {
                  key: 2,
                  icon: v(_),
                  size: "lg"
                }, null, 8, ["icon"]))
              ]))
            ], 8, Pe),
            r.value === B || v(n) ? (a(), s("button", {
              key: 0,
              onClick: (j) => c(B),
              class: "absolute cursor-pointer top-0 right-0 text-secondary-text bg-card/80 rounded-full w-5 h-5 flex justify-center items-center"
            }, [
              h(v(D), {
                icon: v(G),
                size: "xs"
              }, null, 8, ["icon"])
            ], 8, qe)) : x("", !0)
          ], 42, He)
        ]),
        _: 1
      }, 8, ["modelValue"]),
      $(f.$slots, "additional-items-after")
    ]));
  }
}, Ke = ["src"], Nl = {
  __name: "Avatar",
  props: {
    src: String,
    styles: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (l, t) => (a(), s("img", {
      src: e.src,
      alt: "avatar",
      class: g(`rounded-full ${e.styles}`)
    }, null, 10, Ke));
  }
}, Ze = { class: "flex items-center" }, Xe = ["src", "alt"], Hl = {
  __name: "AvatarGroup",
  props: {
    avatars: Array,
    width: {
      type: String,
      default: "w-6"
    },
    overlap: {
      type: Number,
      default: 12
    }
  },
  setup(e) {
    return (l, t) => (a(), s("div", Ze, [
      (a(!0), s(E, null, L(e.avatars, (o, n) => (a(), s("img", {
        key: n,
        src: o,
        alt: `avatar ${n + 1}`,
        class: g(`${e.width} rounded-full relative`),
        style: oe({ marginLeft: n === 0 ? "0" : `-${e.overlap}px` })
      }, null, 14, Xe))), 128))
    ]));
  }
}, Pl = {
  __name: "Badge",
  props: {
    content: [String, Number, null],
    color: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "xs"
    },
    styles: String
  },
  setup(e) {
    return (l, t) => (a(), s("div", {
      class: g(`text-${e.size} text-black font-bold bg-${e.color} rounded-xl px-1 ${e.styles} min-w-3 min-h-3`)
    }, [
      $(l.$slots, "default", {}, () => [
        q(b(e.content), 1)
      ])
    ], 2));
  }
}, Je = ["disabled", "type"], Ye = {
  __name: "Button",
  props: {
    color: {
      type: String,
      default: "primary"
    },
    variant: {
      type: String,
      default: "filled"
    },
    styles: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "button"
    },
    href: {
      type: String,
      default: ""
    },
    onClick: {
      type: Function,
      default: (e) => {
      }
    },
    hoverEffects: {
      type: Boolean,
      default: !0
    },
    textColor: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = e, o = l, n = T(!1), u = (c) => {
      t.href && window.open(t.href), o("click", c);
    }, r = z(() => t.color === "base" ? "secondary-text" : t.color), i = z(() => {
      const c = [
        "btn",
        t.styles,
        { pressed: n },
        { "disabled-btn": t.disabled },
        { "cursor-default": !t.hoverEffects }
      ];
      switch (t.variant) {
        case "light":
          c.push(`bg-${r.value}/20 text-${r.value}`), t.hoverEffects && c.push(`hover:bg-${r.value}/35`);
          break;
        case "outline":
          c.push(`text-${t.textColor ?? r.value} border-${r.value} border-2`), t.hoverEffects && c.push(`hover:bg-${r.value}/10`);
          break;
        case "subtle":
          c.push(`text-${t.textColor ?? r.value} bg-transparent`), t.hoverEffects && c.push(`hover:bg-${r.value}/10`);
          break;
        case "dashed":
          c.push(`text-${t.textColor ?? r.value} border-${r.value} border-2 border-dashed`), t.hoverEffects && c.push(`hover:bg-${r.value}/10`);
          break;
        default:
          c.push(`text-${t.textColor ?? "black"} bg-${r.value}`);
          break;
      }
      return c;
    });
    return (c, m) => (a(), s("button", {
      onClick: u,
      onMousedown: m[0] || (m[0] = (p) => n.value = !0),
      onMouseup: m[1] || (m[1] = (p) => n.value = !1),
      class: g(i.value),
      disabled: e.disabled,
      type: e.type
    }, [
      $(c.$slots, "default")
    ], 42, Je));
  }
}, _e = { class: "flex items-center gap-2" }, et = ["for"], tt = {
  key: 0,
  class: "text-error text-sm"
}, Ql = {
  __name: "Checkbox",
  props: /* @__PURE__ */ S({
    name: String,
    error: String
  }, {
    modelValue: { default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ S(["toggle"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = k(e, "modelValue"), o = l, n = () => {
      t.value = !t.value, o("toggle", t.value);
    };
    return (u, r) => (a(), s("div", null, [
      d("div", _e, [
        d("button", {
          onClick: r[0] || (r[0] = (i) => n()),
          type: "button",
          class: g(["rounded-sm cursor-pointer border-secondary border-2 w-4 h-4 flex items-center justify-center text-black", { "bg-secondary": t.value, "hover:bg-secondary/30": !t.value }])
        }, [
          t.value ? (a(), F(v(D), {
            key: 0,
            icon: v(re),
            size: "xs"
          }, null, 8, ["icon"])) : x("", !0)
        ], 2),
        d("label", { for: e.name }, [
          $(u.$slots, "default")
        ], 8, et)
      ]),
      e.error ? (a(), s("p", tt, b(e.error), 1)) : x("", !0)
    ]));
  }
}, Wl = {
  __name: "ClickableTag",
  props: /* @__PURE__ */ S({
    color: {
      type: String,
      default: "secondary"
    },
    size: {
      type: String,
      default: "md"
    },
    rounded: {
      type: String,
      default: "full"
    },
    styles: {
      type: String,
      default: ""
    }
  }, {
    modelValue: { default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ S(["select"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = k(e, "modelValue"), u = z(() => `${t.styles} py-1 px-3 duration-100 text-center border-2 rounded-${t.rounded} text-${t.size} text-${t.color} border-${t.color} hover:bg-${t.color}/10`), r = z(() => `${t.styles} py-1 px-3 duration-100 text-center border-2 rounded-${t.rounded} text-${t.size} bg-${t.color} border-${t.color} text-black`);
    return (i, c) => (a(), s("button", {
      onClick: c[0] || (c[0] = (m) => o("select")),
      class: g(n.value ? r.value : u.value)
    }, [
      $(i.$slots, "default")
    ], 2));
  }
}, R = {
  __name: "IconButton",
  props: {
    icon: {
      required: !0
    },
    size: {
      type: String,
      default: void 0
    },
    color: {
      type: String,
      default: "primary"
    },
    variant: {
      type: String,
      default: "filled"
    },
    styles: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "button"
    },
    href: {
      type: String,
      default: ""
    },
    hoverEffects: {
      type: Boolean,
      default: !0
    },
    textColor: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = e, o = l, n = z(() => {
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
    return (u, r) => (a(), F(Ye, {
      styles: `${e.styles} ${n.value} flex justify-center items-center !px-0 !py-0`,
      href: e.href,
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      variant: e.variant,
      "hover-effects": e.hoverEffects,
      "text-color": e.textColor,
      onClick: r[0] || (r[0] = (i) => o("click", i))
    }, {
      default: V(() => [
        h(v(D), {
          size: e.size,
          icon: e.icon
        }, null, 8, ["size", "icon"])
      ]),
      _: 1
    }, 8, ["styles", "href", "type", "color", "disabled", "variant", "hover-effects", "text-color"]));
  }
}, lt = {
  __name: "HoverBox",
  props: {
    modelValue: { default: !1 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const l = k(e, "modelValue");
    return (t, o) => (a(), s("div", {
      onMouseenter: o[0] || (o[0] = (n) => l.value = !0),
      onMouseleave: o[1] || (o[1] = (n) => l.value = !1)
    }, [
      $(t.$slots, "default")
    ], 32));
  }
}, nt = {
  key: 0,
  class: "p-2 absolute top-0 right-0 text-sm"
}, ql = {
  __name: "CodeSnippet",
  props: {
    snippet: String,
    allowCopy: Boolean,
    styles: String
  },
  setup(e) {
    const l = e, t = T(!1), { copy: o } = Fe(), n = async () => await o(l.snippet);
    return (u, r) => (a(), F(lt, {
      modelValue: t.value,
      "onUpdate:modelValue": r[1] || (r[1] = (i) => t.value = i)
    }, {
      default: V(() => [
        d("div", {
          class: g([e.styles, "p-2 rounded-lg bg-base whitespace-pre-wrap text-sm font-mono relative overflow-auto"])
        }, [
          d("p", null, b(e.snippet), 1),
          e.allowCopy && t.value ? (a(), s("div", nt, [
            h(R, {
              icon: v(Ce),
              color: "card",
              onClick: r[0] || (r[0] = (i) => n())
            }, null, 8, ["icon"])
          ])) : x("", !0)
        ], 2)
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}, ot = ["for"], at = {
  key: 0,
  class: "flex justify-center items-center w-10 rounded-l-md"
}, st = { key: 0 }, rt = { key: 1 }, it = {
  key: 2,
  class: "text-secondary-text"
}, ut = ["name", "type", "placeholder", "value", "disabled"], ct = {
  key: 0,
  class: "text-error text-sm"
}, dt = {
  key: 1,
  class: "text-success text-sm"
}, K = {
  __name: "Textbox",
  props: /* @__PURE__ */ S({
    name: String,
    value: String,
    type: {
      type: String,
      default: "text"
    },
    disabled: Boolean,
    error: [String, Boolean],
    success: [String, Boolean],
    variant: {
      type: String,
      default: "filled"
    },
    size: String,
    color: {
      type: String,
      default: "base"
    },
    styles: String,
    label: String,
    icon: Object,
    placeholder: String,
    labelStyles: {
      type: String,
      default: "font-medium"
    }
  }, {
    modelValue: {},
    modelModifiers: {},
    input: {},
    inputModifiers: {}
  }),
  emits: /* @__PURE__ */ S(["input", "focus", "blur"], ["update:modelValue", "update:input"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = k(e, "modelValue"), u = k(e, "input"), r = T(!1), i = z(
      () => t.variant === "filled" ? `bg-${t.color}` : "bg-transparent border border-border"
    ), c = (f) => {
      r.value = !0, o("input", f);
    }, m = (f) => {
      r.value = !1, o("blur", f);
    }, p = (f) => {
      n.value = f.target.value, o("input", f);
    };
    return (f, y) => (a(), s("div", null, [
      d("label", {
        for: e.name,
        class: g(e.labelStyles)
      }, b(e.label), 11, ot),
      d("div", {
        class: g([
          "rounded-lg flex items-center duration-300",
          i.value,
          e.styles,
          {
            error: e.error,
            success: e.success,
            selected: r.value,
            "min-h-10": e.size !== "sm",
            "min-h-8": e.size === "sm"
          }
        ])
      }, [
        e.icon ? (a(), s("div", at, [
          h(v(D), {
            icon: e.icon,
            size: e.size,
            class: "text-secondary-text"
          }, null, 8, ["icon", "size"])
        ])) : x("", !0),
        d("div", {
          class: g(["flex-grow w-full flex items-center gap-1 flex-wrap p-2", { "pl-0": e.icon }])
        }, [
          $(f.$slots, "left-section"),
          e.disabled ? (a(), s("div", {
            key: 0,
            class: g([{ "pl-0": e.icon, "text-sm": e.size === "sm" }, "flex-grow overflow-hidden whitespace-nowrap"])
          }, [
            n.value ? (a(), s("span", st, b(n.value), 1)) : e.value ? (a(), s("span", rt, b(e.value), 1)) : e.placeholder ? (a(), s("span", it, b(e.placeholder), 1)) : x("", !0)
          ], 2)) : (a(), s("input", {
            key: 1,
            ref_key: "inputElement",
            ref: u,
            name: e.name,
            type: e.type,
            placeholder: e.placeholder,
            value: n.value ?? e.value,
            disabled: e.disabled,
            onInput: p,
            onFocus: c,
            onBlur: m,
            class: g([{ "placeholder:text-sm": e.size === "sm" }, "p-0 flex-grow border-none outline-none rounded-lg bg-transparent placeholder:text-secondary-text"])
          }, null, 42, ut))
        ], 2),
        $(f.$slots, "right-section")
      ], 2),
      e.error && typeof e.error != "boolean" ? (a(), s("p", ct, b(e.error), 1)) : e.success && typeof e.error != "boolean" ? (a(), s("p", dt, b(e.success), 1)) : x("", !0)
    ]));
  }
}, Gl = {
  __name: "CurrencyInput",
  props: /* @__PURE__ */ S({
    currencySymbol: {
      type: String,
      default: "$"
    },
    variant: {
      type: String,
      default: "filled"
    },
    size: {
      type: String
    },
    color: {
      type: String,
      default: "base"
    },
    label: String,
    error: String
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = e, t = k(e, "modelValue"), o = (u) => {
      let r = parseFloat(u.target.value.replace(/[^\d.-]/g, ""));
      Ue(r) > 0 && (r = (Math.round(r * 100) / 100).toFixed(2)), t.value = r;
    }, n = z(() => {
      if (t.value)
        return `${l.currencySymbol}${t.value}`;
    });
    return (u, r) => (a(), F(K, {
      label: e.label,
      value: n.value,
      "on-input": o,
      placeholder: e.currencySymbol,
      size: e.size,
      color: e.color,
      variant: e.variant
    }, null, 8, ["label", "value", "placeholder", "size", "color", "variant"]));
  }
}, W = (e) => {
  const l = navigator.language || "en-US", t = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return new Intl.DateTimeFormat(l, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: t
  }).format(e);
}, mt = (e) => `${W(e)} ${formatTimestamp24Hour(e)}`, ft = (e) => `${W(e[0])} - ${W(e[1])}`, vt = { class: "font-medium" }, gt = {
  key: 0,
  class: "text-error text-sm"
}, Kl = {
  __name: "DatePicker",
  props: /* @__PURE__ */ S({
    error: String,
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "filled"
    },
    size: {
      type: String
    },
    color: {
      type: String,
      default: "base"
    },
    range: Boolean,
    maxDate: Date,
    minDate: Date,
    includeTime: Boolean,
    disabled: Boolean,
    styles: String
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = e, t = k(e, "modelValue"), o = T(null), n = z(() => l.range ? ft : l.includeTime ? mt : W);
    return (u, r) => (a(), s("div", {
      class: g(e.styles)
    }, [
      d("label", vt, b(e.label), 1),
      h(v(Ie), {
        modelValue: t.value,
        "onUpdate:modelValue": r[0] || (r[0] = (i) => t.value = i),
        ref_key: "dp",
        ref: o,
        format: n.value,
        disabled: e.disabled,
        "auto-apply": "",
        "enable-time-picker": e.includeTime,
        range: e.range,
        "min-date": e.minDate,
        "max-date": e.maxDate
      }, {
        "dp-input": V(({ value: i }) => [
          h(K, {
            placeholder: e.placeholder,
            value: i,
            icon: v(Ve),
            variant: e.variant,
            size: e.size,
            color: e.color,
            error: !!e.error
          }, null, 8, ["placeholder", "value", "icon", "variant", "size", "color", "error"])
        ]),
        _: 1
      }, 8, ["modelValue", "format", "disabled", "enable-time-picker", "range", "min-date", "max-date"]),
      e.error ? (a(), s("p", gt, b(e.error), 1)) : x("", !0)
    ], 2));
  }
}, yt = {
  __name: "Dropzone",
  props: {
    modelValue: { default: !1 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ S(["drop"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = l, o = k(e, "modelValue"), n = (u) => {
      o.value = !1, t("drop", u);
    };
    return (u, r) => (a(), s("div", {
      onDragover: r[0] || (r[0] = J((i) => o.value = !0, ["prevent"])),
      onDragleave: r[1] || (r[1] = (i) => o.value = !1),
      onDrop: J(n, ["prevent"])
    }, [
      $(u.$slots, "default", { isDragOver: o.value })
    ], 32));
  }
}, pt = ["multiple", "accept"], me = {
  __name: "FileButton",
  props: {
    multiple: {
      type: Boolean,
      default: !0
    },
    disabled: Boolean,
    accept: String
  },
  emits: ["change"],
  setup(e, { emit: l }) {
    const t = e, o = l, n = T(null), u = () => {
      t.disabled || n.value.click();
    };
    return (r, i) => (a(), s("div", null, [
      d("input", {
        type: "file",
        ref_key: "fileInput",
        ref: n,
        onChange: i[0] || (i[0] = (c) => o("change", c)),
        multiple: e.multiple,
        accept: e.accept,
        hidden: ""
      }, null, 40, pt),
      d("div", { onClick: u }, [
        $(r.$slots, "default")
      ])
    ]));
  }
}, bt = { class: "flex flex-col gap-2 text-sm" }, ht = { class: "flex gap-2 items-center" }, xt = { key: 0 }, $t = {
  key: 1,
  class: "text-xl"
}, kt = {
  key: 2,
  class: "text-sm"
}, St = {
  __name: "FileList",
  props: {
    files: Array,
    showDownload: Boolean,
    showDelete: Boolean
  },
  emits: ["download", "delete"],
  setup(e, { emit: l }) {
    const t = l;
    return (o, n) => (a(), s("div", bt, [
      (a(!0), s(E, null, L(e.files, (u) => (a(), s("div", ht, [
        e.showDownload ? (a(), s("div", xt, [
          h(R, {
            icon: v(Be),
            onClick: (r) => t("download", u),
            variant: "light",
            color: "secondary"
          }, null, 8, ["icon", "onClick"])
        ])) : (a(), s("div", $t, [
          h(v(D), { icon: v(_) }, null, 8, ["icon"])
        ])),
        d("p", null, b(u.name), 1),
        n[0] || (n[0] = d("div", { class: "flex-grow" }, null, -1)),
        e.showDelete ? (a(), s("div", kt, [
          h(R, {
            icon: v(G),
            onClick: (r) => t("delete", u),
            color: "error",
            variant: "light",
            size: "sm"
          }, null, 8, ["icon", "onClick"])
        ])) : x("", !0)
      ]))), 256))
    ]));
  }
}, wt = {
  key: 0,
  class: "font-medium mb-1"
}, Ct = { key: 1 }, Vt = {
  key: 0,
  class: "mb-2"
}, Bt = { class: "font-medium" }, Mt = {
  key: 0,
  class: "text-error text-sm mt-1"
}, zt = {
  __name: "DragAndDropFiles",
  props: /* @__PURE__ */ S({
    label: String,
    dropText: {
      type: String,
      default: "Drag and drop files here, or click to select files"
    },
    error: String,
    withIcon: Boolean,
    limit: Number,
    accept: String,
    showFileList: Boolean,
    disabled: Boolean
  }, {
    modelValue: { default: [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = e, t = k(e, "modelValue"), o = (i) => {
      const m = Array.from(i).filter((f) => Re(l.accept)), p = l.limit ? l.limit - t.value.length : m.length;
      l.limit && m.length > l.limit ? t.value.push(...m.slice(0, p)) : t.value.push(...m.slice(0, p));
    }, n = (i) => {
      t.value = t.value.filter((c) => c !== i);
    }, u = (i) => o(i.dataTransfer.files), r = (i) => o(i.target.files);
    return (i, c) => (a(), s("div", null, [
      e.label ? (a(), s("p", wt, b(e.label), 1)) : x("", !0),
      !e.disabled && t.value.length < e.limit ? (a(), s("div", Ct, [
        h(me, {
          onChange: r,
          accept: e.accept
        }, {
          default: V(() => [
            h(yt, { onDrop: u }, {
              default: V(({ isDragOver: m }) => [
                d("div", {
                  class: g(["cursor-pointer duration-300 text-center border-2 border-dashed py-6 px-4 rounded-lg", {
                    "bg-secondary/30": m,
                    "text-secondary border-secondary": !e.error,
                    "text-error border-error": e.error
                  }])
                }, [
                  e.withIcon ? (a(), s("div", Vt, [
                    h(v(D), {
                      icon: v(Me),
                      size: "lg"
                    }, null, 8, ["icon"])
                  ])) : x("", !0),
                  d("p", Bt, b(e.dropText), 1)
                ], 2)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["accept"]),
        e.error ? (a(), s("p", Mt, b(e.error), 1)) : x("", !0)
      ])) : x("", !0),
      t.value.length > 0 && e.showFileList ? (a(), s("div", {
        key: 2,
        class: g({ "mt-4": !e.disabled })
      }, [
        h(St, {
          files: t.value,
          "show-delete": !e.disabled,
          onDelete: n
        }, null, 8, ["files", "show-delete"])
      ], 2)) : x("", !0)
    ]));
  }
}, fe = () => {
  const e = T(!1), l = T(null), t = () => e.value = !0, o = () => e.value = !1, n = (u) => {
    l.value.contains(u.target) || o();
  };
  return N(() => {
    document.addEventListener("mousedown", n);
  }), ae(() => {
    document.removeEventListener("mousedown", n);
  }), { dropdownOpen: e, dropdownContainer: l, open: t, close: o };
}, ee = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [o, n] of l)
    t[o] = n;
  return t;
}, Tt = ["onClick", "onMouseover"], Dt = { key: 1 }, Ft = {
  key: 0,
  class: "text-xs text-secondary-text"
}, It = {
  __name: "DropdownOptions",
  props: {
    container: Object,
    options: Array,
    optionLabel: String,
    trackBy: String,
    optionDescription: String,
    width: {
      type: String,
      default: "w-full"
    },
    direction: {
      type: String,
      default: "left"
    },
    open: Boolean,
    acceptsEmptySelection: Boolean
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const t = e, o = l, n = H(), u = T(-1), r = T("top-full"), i = T(null), c = (y) => o("select", y), m = () => {
      const y = t.container.getBoundingClientRect(), C = window.innerHeight || document.documentElement.clientHeight;
      r.value = y.bottom + 150 > C ? "bottom-full" : "top-full";
    }, p = () => {
      r.value = "top-full";
    }, f = async (y) => {
      u.value += y, u.value < 0 ? u.value = t.options.length - 1 : u.value >= t.options.length && (u.value = 0), await se();
      const B = i.value?.querySelectorAll("div > div")?.[u.value];
      B && B.scrollIntoView({ block: "nearest", behavior: "smooth" });
    };
    return Z("ArrowDown", (y) => {
      t.open && t.options.length > 0 && (y.preventDefault(), f(1));
    }), Z("ArrowUp", (y) => {
      t.open && t.options.length > 0 && (y.preventDefault(), f(-1));
    }), Z("Enter", (y) => {
      t.open && t.options.length > 0 ? (y.preventDefault(), c(t.options[u.value])) : t.acceptsEmptySelection && (y.preventDefault(), c());
    }), O(() => t.open, () => {
      t.open || (u.value = -1);
    }), (y, C) => (a(), F(U, {
      name: r.value === "top-full" ? "slide-down" : "slide-up",
      onBeforeEnter: m,
      onAfterLeave: p
    }, {
      default: V(() => [
        e.open && e.options?.length > 0 ? (a(), s("div", {
          key: 0,
          ref_key: "optionsContainer",
          ref: i,
          class: g([
            "rounded-md bg-dropdown text-dropdown-text absolute overflow-auto max-h-64 flex flex-col cursor-pointer z-50",
            e.width,
            e.direction === "right" ? "right-0" : "left-0",
            r.value
          ])
        }, [
          (a(!0), s(E, null, L(e.options, (B, j) => (a(), s("div", {
            key: e.trackBy ? e.options[e.trackBy] : B,
            onClick: (A) => c(B),
            onMouseover: (A) => u.value = j,
            class: g(["text-md py-2 px-6 rounded-md text-left", { "bg-dropdown-select": u.value === j }])
          }, [
            v(n).option ? $(y.$slots, "option", {
              key: 0,
              option: B
            }, void 0, !0) : (a(), s("div", Dt, [
              q(b(e.optionLabel ? B[e.optionLabel] : B) + " ", 1),
              B[e.optionDescription] ? (a(), s("div", Ft, b(B[e.optionDescription]), 1)) : x("", !0)
            ]))
          ], 42, Tt))), 128))
        ], 2)) : x("", !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}, te = /* @__PURE__ */ ee(It, [["__scopeId", "data-v-32652279"]]), Zl = {
  __name: "DropdownMenu",
  props: {
    options: Array,
    label: {
      type: String,
      default: "label"
    },
    trackBy: {
      type: String,
      default: "value"
    },
    direction: {
      type: String,
      default: "left"
    }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const t = l, o = H(), { dropdownOpen: n, dropdownContainer: u } = fe(), r = (i) => {
      n.value = !1, t("select", i);
    };
    return (i, c) => (a(), s("div", {
      class: "relative",
      ref_key: "dropdownContainer",
      ref: u
    }, [
      d("div", {
        onClick: c[0] || (c[0] = (m) => n.value = !v(n))
      }, [
        $(i.$slots, "trigger")
      ]),
      h(te, {
        container: v(u),
        options: e.options,
        open: v(n),
        "option-label": e.label,
        "track-by": e.trackBy,
        "accepts-empty-selection": "",
        onSelect: r,
        width: "w-64",
        direction: e.direction
      }, Q({ _: 2 }, [
        v(o).option ? {
          name: "option",
          fn: V(({ option: m }) => [
            $(i.$slots, "option", { option: m })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["container", "options", "open", "option-label", "track-by", "direction"])
    ], 512));
  }
}, Et = { class: "flex items-center justify-center" }, Lt = {
  key: 0,
  class: "text-center font-medium mt-2"
}, At = {
  __name: "Loader",
  props: {
    label: String
  },
  setup(e) {
    return (l, t) => (a(), s("div", Et, [
      d("div", null, [
        t[0] || (t[0] = d("div", { class: "spinner" }, null, -1)),
        e.label ? (a(), s("p", Lt, b(e.label), 1)) : x("", !0)
      ])
    ]));
  }
}, Xl = /* @__PURE__ */ ee(At, [["__scopeId", "data-v-d8288a84"]]), jt = { class: "flex items-center justify-center" }, Ot = { key: 0 }, Ut = ["src", "alt"], Rt = { key: 1 }, Nt = ["src"], Ht = { key: 2 }, Pt = ["src"], Qt = {
  key: 3,
  class: "text-center"
}, Wt = {
  __name: "MediaCarousel",
  props: /* @__PURE__ */ S({
    files: Array,
    maxMediaHeight: {
      type: String,
      default: "max-h-72"
    }
  }, {
    selectedIdx: { default: 0 },
    selectedIdxModifiers: {}
  }),
  emits: ["update:selectedIdx"],
  setup(e) {
    const l = k(e, "selectedIdx"), t = ce(), o = () => {
      const n = document.querySelector("swiper-container").swiper;
      l.value = n.activeIndex;
    };
    return O(l, () => {
      const n = document.querySelector("swiper-container")?.swiper;
      l.value !== n.activeIndex && n.slideTo(l.value);
    }), (n, u) => {
      const r = Y("swiper-slide"), i = Y("swiper-container");
      return a(), F(i, {
        "slides-per-view": 1,
        "centered-slides": !0,
        navigation: !v(t),
        onSwiperslidechange: o
      }, {
        default: V(() => [
          (a(!0), s(E, null, L(e.files, (c) => (a(), F(r, null, {
            default: V(() => [
              d("div", jt, [
                c.type === "image" ? (a(), s("div", Ot, [
                  d("img", {
                    src: c.preview,
                    alt: c.name,
                    class: g(e.maxMediaHeight)
                  }, null, 10, Ut)
                ])) : c.type === "video" ? (a(), s("div", Rt, [
                  d("video", {
                    src: c.preview,
                    controls: "",
                    class: g(e.maxMediaHeight)
                  }, null, 10, Nt)
                ])) : c.type === "audio" ? (a(), s("div", Ht, [
                  d("audio", {
                    src: c.preview,
                    controls: ""
                  }, null, 8, Pt)
                ])) : (a(), s("div", Qt, [
                  h(v(D), {
                    icon: v(_),
                    size: "xl"
                  }, null, 8, ["icon"]),
                  u[0] || (u[0] = d("p", { class: "text-lg mt-2" }, "No preview available", -1))
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
}, qt = {
  key: 0,
  class: "font-medium mb-1"
}, Gt = {
  key: 1,
  class: "mb-2"
}, Kt = {
  key: 0,
  class: "text-error text-sm mt-1"
}, Jl = {
  __name: "MediaInput",
  props: /* @__PURE__ */ S({
    label: String,
    placeholder: String,
    error: String
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = k(e, "modelValue"), t = T(0), { formatFiles: o } = de(), n = (r) => l.value.push(...r.target.files), u = z(() => o(l.value));
    return (r, i) => (a(), s("div", null, [
      e.label ? (a(), s("label", qt, b(e.label), 1)) : x("", !0),
      l.value.length > 0 ? (a(), s("div", Gt, [
        h(Wt, {
          "selected-idx": t.value,
          "onUpdate:selectedIdx": i[0] || (i[0] = (c) => t.value = c),
          files: u.value
        }, null, 8, ["selected-idx", "files"]),
        h(Ge, {
          "selected-idx": t.value,
          "onUpdate:selectedIdx": i[1] || (i[1] = (c) => t.value = c),
          files: l.value,
          "onUpdate:files": i[2] || (i[2] = (c) => l.value = c)
        }, {
          "additional-items-after": V(() => [
            h(me, {
              onChange: n,
              accept: "image/*"
            }, {
              default: V(() => [
                h(R, {
                  icon: v(ze),
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
        e.error ? (a(), s("p", Kt, b(e.error), 1)) : x("", !0)
      ])) : (a(), F(zt, {
        key: 2,
        "with-icon": "",
        "drop-text": e.placeholder,
        modelValue: l.value,
        "onUpdate:modelValue": i[3] || (i[3] = (c) => l.value = c),
        error: e.error
      }, null, 8, ["drop-text", "modelValue", "error"]))
    ]));
  }
}, Zt = {
  __name: "ModalContent",
  props: {
    contentClass: {
      type: String,
      default: "w-full max-w-xl p-2"
    }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const t = l;
    return ne(() => t("close")), (o, n) => (a(), F(v(ye), {
      "overlay-transition": "vfm-fade",
      "content-transition": "vfm-fade",
      class: "flex justify-center items-center",
      "content-class": e.contentClass
    }, {
      default: V(() => [
        h(ue, { styles: "w-full" }, {
          default: V(() => [
            $(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["content-class"]));
  }
}, Yl = {
  __name: "Modal",
  props: /* @__PURE__ */ S({
    contentClass: {
      type: String,
      default: "w-full max-w-xl p-2"
    },
    clickToClose: {
      type: Boolean,
      default: !0
    },
    escToClose: {
      type: Boolean,
      default: !0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = e, t = k(e, "modelValue"), o = H(), n = pe({
      component: Zt,
      attrs: {
        contentClass: l.contentClass,
        clickToClose: l.clickToClose,
        escToClose: l.escToClose,
        onClose: () => t.value = !1
      },
      slots: {
        default: o.default
      }
    });
    return O(t, () => {
      t.value === !0 ? n.open() : t.value === !1 && n.close();
    }), (u, r) => (a(), F(v(be)));
  }
}, Xt = {
  key: 0,
  class: "text-error text-sm"
}, _l = {
  __name: "Multiselect",
  props: /* @__PURE__ */ S({
    options: Array,
    label: String,
    optionLabel: String,
    trackBy: String,
    searchable: Boolean,
    icon: Object,
    error: [String, Boolean],
    placeholder: {
      type: String,
      default: "Select an option..."
    },
    size: {
      type: String
    },
    variant: {
      type: String,
      default: "filled"
    },
    color: {
      type: String,
      default: "base"
    },
    formatResult: {
      type: Function,
      default: (e) => e
    },
    styles: String,
    textboxStyles: String,
    acceptsEmptySelection: Boolean,
    acceptsDuplicates: Boolean
  }, {
    modelValue: { default: [] },
    modelModifiers: {},
    searchQuery: { default: "" },
    searchQueryModifiers: {},
    input: {},
    inputModifiers: {}
  }),
  emits: /* @__PURE__ */ S(["select", "focus", "blur"], ["update:modelValue", "update:searchQuery", "update:input"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = k(e, "modelValue"), u = k(e, "searchQuery"), r = k(e, "input"), i = H(), c = T(!1), m = T(null), p = z(() => t.acceptsDuplicates ? t.options : t.options.filter((w) => !n.value.includes(t.formatResult(w)))), f = (w) => {
      n.value.push(t.formatResult(w)), u.value = "", o("select", w);
    }, y = (w) => {
      n.value = n.value.filter((M, I) => I !== w);
    }, C = () => {
      c.value = !0;
    }, B = () => {
      c.value = !1;
    }, j = () => {
      t.searchable || (c.value ? B() : C());
    }, A = (w) => {
      m.value.contains(w.target) || B();
    };
    return N(() => {
      document.addEventListener("mousedown", A);
    }), ae(() => {
      document.removeEventListener("mousedown", A);
    }), O(u, () => {
      t.searchable && u.value.length > 0 && C();
    }), (w, M) => (a(), s("div", {
      class: g([e.styles])
    }, [
      d("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: m
      }, [
        d("div", {
          onClick: M[4] || (M[4] = (I) => j()),
          class: g({ "cursor-pointer": !e.searchable })
        }, [
          h(K, {
            modelValue: u.value,
            "onUpdate:modelValue": M[0] || (M[0] = (I) => u.value = I),
            input: r.value,
            "onUpdate:input": M[1] || (M[1] = (I) => r.value = I),
            label: e.label,
            placeholder: e.placeholder,
            disabled: !e.searchable,
            icon: e.icon,
            error: !!e.error,
            size: e.size,
            color: e.color,
            variant: e.variant,
            styles: e.textboxStyles,
            onFocus: M[2] || (M[2] = (I) => o("focus", I)),
            onBlur: M[3] || (M[3] = (I) => o("blur", I))
          }, {
            "left-section": V(() => [
              (a(!0), s(E, null, L(n.value, (I, ge) => (a(), s("div", {
                key: e.optionLabel[e.trackBy]
              }, [
                $(w.$slots, "selectedTag", {
                  option: I,
                  deselect: () => y(ge)
                })
              ]))), 128))
            ]),
            _: 3
          }, 8, ["modelValue", "input", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        h(te, {
          container: m.value,
          options: p.value,
          "option-label": e.optionLabel,
          "track-by": e.trackBy,
          open: c.value,
          "accepts-empty-selection": e.acceptsEmptySelection,
          onSelect: f
        }, Q({ _: 2 }, [
          v(i).option ? {
            name: "option",
            fn: V(({ option: I }) => [
              $(w.$slots, "option", { option: I })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      e.error && typeof e.error != "boolean" ? (a(), s("p", Xt, b(e.error), 1)) : x("", !0)
    ], 2));
  }
}, Jt = { class: "font-medium" }, Yt = {
  key: 0,
  class: "text-text-secondary flex justify-center items-center w-10 rounded-l-md"
}, _t = ["placeholder", "min", "max", "disabled"], el = {
  key: 0,
  class: "text-error text-sm"
}, tl = {
  key: 1,
  class: "text-error text-sm"
}, en = {
  __name: "NumberInput",
  props: /* @__PURE__ */ S({
    label: String,
    icon: Object,
    placeholder: String,
    styles: String,
    error: String,
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1e4
    },
    variant: {
      type: String,
      default: "filled"
    },
    size: {
      type: String
    },
    color: {
      type: String,
      default: "base"
    },
    disabled: Boolean
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = e, t = k(e, "modelValue"), o = z(
      () => l.variant === "filled" ? `bg-${l.color}` : "bg-transparent border border-secondary-text"
    ), n = z(() => l.modelValue > l.max ? `Value must be ${l.max} or less.` : l.modelValue < l.min ? `Value must be ${l.min} or more.` : !1);
    return (u, r) => (a(), s("div", null, [
      d("h4", Jt, b(e.label), 1),
      d("div", {
        class: g(["rounded-lg flex h-10 items-center", o.value, e.styles, { error: n.value || e.error, "px-2": !e.icon }])
      }, [
        e.icon ? (a(), s("div", Yt, [
          h(v(D), {
            icon: e.icon,
            size: "1x",
            class: "text-secondary-text"
          }, null, 8, ["icon"])
        ])) : x("", !0),
        P(d("input", {
          "onUpdate:modelValue": r[0] || (r[0] = (i) => t.value = i),
          placeholder: e.placeholder,
          type: "number",
          min: e.min,
          max: e.max,
          disabled: e.disabled,
          class: "flex-grow w-full py-2 px-0 border-none outline-none rounded-lg placeholder:text-secondary-text bg-transparent appearance-none"
        }, null, 8, _t), [
          [xe, t.value]
        ])
      ], 2),
      n.value ? (a(), s("p", el, b(n.value), 1)) : e.error && typeof e.error == "string" ? (a(), s("p", tl, b(e.error), 1)) : x("", !0)
    ]));
  }
}, tn = {
  __name: "Paragraph",
  props: {
    text: String,
    styles: String,
    limit: Number,
    includeWhitespace: Boolean
  },
  setup(e) {
    const l = e, t = z(() => l.limit ? `${l.text.substring(0, l.limit)}${l.text.length > l.limit ? "..." : ""}` : l.text);
    return (o, n) => (a(), s("p", {
      class: g([e.styles, { "whitespace-pre-wrap": e.includeWhitespace }])
    }, b(t.value), 3));
  }
}, ll = ["name", "value", "checked"], nl = { class: "rounded-full border-2 border-secondary flex items-center justify-center h-4 w-4" }, ln = {
  __name: "Radio",
  props: /* @__PURE__ */ S({
    value: [String, Boolean],
    label: String,
    name: String,
    modelValue: String
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ S(["select"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = k(e, "modelValue"), u = T(!1), r = z(() => t.modelValue === t.value), i = (c) => {
      n.value = t.value, o("select", c);
    };
    return (c, m) => (a(), s("label", {
      class: "flex items-center gap-3 relative cursor-pointer",
      onMouseenter: m[1] || (m[1] = (p) => u.value = !0),
      onMouseleave: m[2] || (m[2] = (p) => u.value = !1)
    }, [
      d("input", {
        class: "absolute opacity-0 cursor-pointer",
        type: "radio",
        name: e.name,
        value: e.value,
        checked: r.value,
        onChange: m[0] || (m[0] = (p) => i(p))
      }, null, 40, ll),
      d("span", nl, [
        d("span", {
          class: g(["rounded-full h-2 w-2", { "bg-secondary": u.value || r.value }])
        }, null, 2)
      ]),
      d("span", null, b(e.label), 1)
    ], 32));
  }
}, ol = { class: "flex items-center pr-1" }, al = { class: "flex items-center pr-2 text-secondary-text" }, sl = {
  key: 0,
  class: "text-error text-sm"
}, nn = {
  __name: "Select",
  props: /* @__PURE__ */ S({
    options: Array,
    label: String,
    optionLabel: String,
    trackBy: String,
    optionDescription: String,
    searchable: Boolean,
    icon: Object,
    error: [String, Boolean],
    placeholder: {
      type: String,
      default: "Select an option..."
    },
    size: {
      type: String
    },
    variant: {
      type: String,
      default: "filled"
    },
    color: {
      type: String,
      default: "base"
    },
    lockOnSelect: {
      type: Boolean,
      default: !0
    },
    formatResult: {
      type: Function,
      default: (e) => e
    },
    styles: String,
    textboxStyles: String,
    acceptsEmptySelection: Boolean
  }, {
    modelValue: {},
    modelModifiers: {},
    searchQuery: { default: "" },
    searchQueryModifiers: {},
    input: {},
    inputModifiers: {}
  }),
  emits: /* @__PURE__ */ S(["select", "blur", "focus"], ["update:modelValue", "update:searchQuery", "update:input"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = k(e, "modelValue"), u = k(e, "searchQuery"), r = k(e, "input"), i = H(), { dropdownOpen: c, dropdownContainer: m, open: p, close: f } = fe(), y = (A) => {
      const w = t.formatResult(A);
      n.value = w, o("select", w), t.optionLabel && t.searchable ? u.value = A[t.optionLabel] : t.searchable && (u.value = A), se(f);
    }, C = (A) => {
      A.stopPropagation(), n.value = null, u.value = "";
    }, B = () => {
      t.searchable || (c.value ? f() : p());
    }, j = z(() => n.value && t.optionLabel ? n.value[t.optionLabel] : n.value ? n.value : null);
    return O(u, () => {
      t.searchable && u.value.length > 0 ? p() : t.searchable && f();
    }), (A, w) => (a(), s("div", {
      class: g([e.styles])
    }, [
      d("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: m
      }, [
        d("div", {
          onClick: w[5] || (w[5] = (M) => B()),
          class: g({ "cursor-pointer": !e.searchable })
        }, [
          h(K, {
            modelValue: u.value,
            "onUpdate:modelValue": w[1] || (w[1] = (M) => u.value = M),
            input: r.value,
            "onUpdate:input": w[2] || (w[2] = (M) => r.value = M),
            value: j.value,
            label: e.label,
            placeholder: e.placeholder,
            disabled: !e.searchable || e.lockOnSelect && n.value,
            icon: n.value?.icon ?? e.icon,
            error: !!e.error,
            size: e.size,
            color: e.color,
            variant: e.variant,
            styles: e.textboxStyles,
            onFocus: w[3] || (w[3] = (M) => o("focus", M)),
            onBlur: w[4] || (w[4] = (M) => o("blur", M))
          }, Q({ _: 2 }, [
            e.lockOnSelect && e.searchable && n.value ? {
              name: "right-section",
              fn: V(() => [
                d("div", ol, [
                  h(R, {
                    icon: v(G),
                    onClick: w[0] || (w[0] = (M) => C()),
                    variant: "subtle",
                    color: "base",
                    size: e.size
                  }, null, 8, ["icon", "size"])
                ])
              ]),
              key: "0"
            } : e.searchable ? void 0 : {
              name: "right-section",
              fn: V(() => [
                d("div", al, [
                  h(v(D), {
                    icon: v(Te),
                    size: e.size
                  }, null, 8, ["icon", "size"])
                ])
              ]),
              key: "1"
            }
          ]), 1032, ["modelValue", "input", "value", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        h(te, {
          container: v(m),
          options: e.options,
          "option-label": e.optionLabel,
          "track-by": e.trackBy,
          open: v(c),
          "accepts-empty-selection": e.acceptsEmptySelection,
          onSelect: y
        }, Q({ _: 2 }, [
          v(i).option ? {
            name: "option",
            fn: V(({ option: M }) => [
              $(A.$slots, "option", { option: M })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      e.error && typeof e.error != "boolean" ? (a(), s("p", sl, b(e.error), 1)) : x("", !0)
    ], 2));
  }
}, rl = {
  key: 0,
  class: "w-full"
}, il = { class: "flex justify-between items-center gap-2 px-4" }, ul = ["onClick"], cl = { class: "flex justify-between items-center mt-1 px-3" }, dl = ["onClick"], ml = ["onClick"], on = {
  __name: "Stepper",
  props: /* @__PURE__ */ S({
    steps: Array,
    color: {
      type: String,
      default: "primary"
    },
    variant: {
      type: String,
      default: "classic"
    },
    canMoveForwards: Boolean,
    canMoveBackwards: Boolean
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = e, t = k(e, "modelValue"), o = z(() => l.steps.findIndex((c) => c.value === t.value)), n = z(() => l.steps.map((c, m) => m < o.value ? { ...c, status: "completed" } : m === o.value ? { ...c, status: "in-progress" } : { ...c, status: "uncompleted" })), u = (c) => c.status === "uncompleted" || c.status !== "in-progress" && l.variant === "minimalist" ? "text-secondary-text bg-card-accent" : `text-${l.color} bg-${l.color}${l.variant === "classic" ? "/30" : ""}`, r = (c) => l.canMoveForwards && c > o.value || l.canMoveBackwards && c < o.value ? "cursor-pointer" : "cursor-default", i = (c, m) => {
      (l.canMoveForwards && m > o.value || l.canMoveBackwards && m < o.value) && (t.value = c.value);
    };
    return (c, m) => e.variant === "classic" ? (a(), s("div", rl, [
      d("div", il, [
        (a(!0), s(E, null, L(n.value, (p, f) => (a(), s(E, {
          key: p.value
        }, [
          d("div", {
            onClick: (y) => i(p, f),
            class: g([
              "w-10 h-10 rounded-full flex items-center justify-center",
              u(p),
              r(f)
            ])
          }, [
            h(v(D), {
              icon: p.status === "completed" && !e.canMoveBackwards ? v(re) : p.icon
            }, null, 8, ["icon"])
          ], 10, ul),
          f < e.steps.length - 1 ? (a(), s("div", {
            key: 0,
            class: g(`flex-grow bg-${n.value[f + 1].status === "uncompleted" ? "secondary-text" : e.color} h-0.5`)
          }, null, 2)) : x("", !0)
        ], 64))), 128))
      ]),
      d("div", cl, [
        (a(!0), s(E, null, L(n.value, (p, f) => (a(), s("p", {
          key: "label-" + p.value,
          onClick: (y) => i(p, f),
          class: g([
            p.status === "uncompleted" ? "text-secondary-text" : `text-${e.color}`,
            "text-xs font-medium text-center",
            r(f)
          ])
        }, b(p.label), 11, dl))), 128))
      ])
    ])) : e.variant === "minimalist" ? (a(), s("div", {
      key: 1,
      class: g(`grid grid-cols-${n.value.length} gap-1`)
    }, [
      (a(!0), s(E, null, L(n.value, (p, f) => (a(), s("div", {
        key: p.value,
        onClick: (y) => i(p, f)
      }, [
        d("div", {
          class: g(["h-1 rounded-lg mb-1", u(p), r(f)])
        }, null, 2),
        d("p", {
          class: g([
            p.status !== "in-progress" ? "text-secondary-text" : `text-${e.color}`,
            "text-sm font-medium",
            r(f)
          ])
        }, b(p.label), 3)
      ], 8, ml))), 128))
    ], 2)) : x("", !0);
  }
}, fl = {};
function vl(e, l) {
  return a(), s("div", {
    onClick: J(() => {
    }, ["stop"])
  }, [
    $(e.$slots, "default")
  ]);
}
const an = /* @__PURE__ */ ee(fl, [["render", vl]]), gl = { class: "overflow-hidden rounded-xl shadow-full-box border border-border" }, yl = { class: "w-full border-collapse table-fixed bg-card overflow-hidden" }, pl = ["onClick"], bl = ["colspan", "rowspan"], sn = {
  __name: "TableCard",
  props: {
    rows: {
      type: Array,
      required: !0
    },
    headerClasses: String,
    onRowClick: Function
  },
  setup(e) {
    const l = e, t = (i) => ({
      width: i.width ? typeof i.width == "number" ? `${i.width}px` : i.width : void 0,
      height: i.height ? typeof i.height == "number" ? `${i.height}px` : i.height : void 0
    }), o = (i, c, m) => [
      `text-${i.align ?? "left"} p-2 border-border`,
      { "border-r": m !== l.rows[c].cells?.length - 1 && m !== l.rows[c].length - 1 },
      i.class
    ], n = (i, c) => [
      i.class ?? "",
      "border-border",
      { "border-b": c !== l.rows.length - 1 },
      { "cursor-pointer hover:bg-muted/50": i.onClick || l.onRowClick }
    ], u = (i, c) => {
      if (i.onClick) return i.onClick(i, c);
      if (l.onRowClick) return l.onRowClick(i, c);
    }, r = (i) => String.fromCharCode(65 + i);
    return (i, c) => (a(), s("div", gl, [
      d("table", yl, [
        d("tbody", null, [
          (a(!0), s(E, null, L(e.rows, (m, p) => (a(), s("tr", {
            key: "row-" + p,
            class: g(n(m, p)),
            onClick: (f) => u(m, p)
          }, [
            (a(!0), s(E, null, L(m.cells ?? m, (f, y) => (a(), s("td", {
              key: "cell-" + p + "-" + y,
              colspan: f.colspan || 1,
              rowspan: f.rowspan || 1,
              class: g(o(f, p, y)),
              style: oe(t(f))
            }, [
              $(i.$slots, `${r(y)}${p + 1}`, {}, () => [
                q(b(f.content), 1)
              ])
            ], 14, bl))), 128))
          ], 10, pl))), 128))
        ])
      ])
    ]));
  }
}, hl = ["onClick"], rn = {
  __name: "Tabs",
  props: /* @__PURE__ */ S({
    tabs: Array,
    stretch: Boolean,
    size: {
      type: String,
      default: "lg"
    }
  }, {
    selectedTab: {},
    selectedTabModifiers: {}
  }),
  emits: ["update:selectedTab"],
  setup(e) {
    const l = k(e, "selectedTab");
    return (t, o) => (a(), s("div", null, [
      d("div", {
        class: g(["tab-container", { "justify-between": e.stretch }])
      }, [
        (a(!0), s(E, null, L(e.tabs, (n) => (a(), s("button", {
          key: n.name,
          class: g(["cursor-pointer", [{
            "text-error": n.error,
            "underline-offset-8 underline font-medium": n.name === l.value
          }, `text-${e.size}`]]),
          onClick: (u) => l.value = n.name,
          type: "button"
        }, b(n.label), 11, hl))), 128))
      ], 2),
      (a(!0), s(E, null, L(e.tabs, (n) => P((a(), s("div", {
        key: n.name
      }, [
        $(t.$slots, `tab-${n.name}`)
      ])), [
        [X, n.name === l.value]
      ])), 128))
    ]));
  }
}, un = {
  __name: "Tag",
  props: {
    color: {
      type: String,
      default: "secondary"
    },
    size: {
      type: String,
      default: "md"
    },
    styles: {
      type: String,
      default: ""
    },
    rounded: {
      type: String,
      default: "full"
    }
  },
  setup(e) {
    return (l, t) => (a(), s("div", {
      class: g(`py-1 px-4 rounded-${e.rounded} duration-100 text-center text-black text-${e.size} bg-${e.color}`)
    }, [
      $(l.$slots, "default")
    ], 2));
  }
}, xl = { class: "flex items-center justify-between" }, $l = ["for"], kl = {
  key: 0,
  class: "text-xs text-secondary-text mr-1"
}, Sl = ["name", "placeholder", "value", "disabled", "maxlength", "rows"], wl = {
  key: 0,
  class: "text-error text-sm"
}, Cl = {
  key: 1,
  class: "text-success text-sm"
}, cn = {
  __name: "Textarea",
  props: /* @__PURE__ */ S({
    name: String,
    disabled: Boolean,
    error: [String, Boolean],
    success: [String, Boolean],
    label: String,
    placeholder: String,
    modelValue: String,
    maxlength: Number,
    styles: String,
    variant: {
      type: String,
      default: "filled"
    },
    color: {
      type: String,
      default: "base"
    },
    rows: {
      type: Number,
      default: 4
    },
    fieldSizingContent: {
      type: Boolean,
      default: !1
    }
  }, {
    modelValue: {},
    modelModifiers: {},
    input: {},
    inputModifiers: {}
  }),
  emits: /* @__PURE__ */ S(["focus", "blur", "keyPress", "input"], ["update:modelValue", "update:input"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = k(e, "modelValue"), u = k(e, "input"), r = T(t.modelValue), i = T(!1), c = z(
      () => t.variant === "filled" ? `bg-${t.color}` : "bg-transparent border border-border"
    ), m = (y) => {
      i.value = !0, o("focus", y);
    }, p = (y) => {
      i.value = !1, o("blur", y);
    }, f = (y) => {
      const C = y.target;
      r.value = C.value, n.value = C.value, o("input", y);
    };
    return O(
      () => t.modelValue,
      (y) => {
        r.value = y;
      }
    ), (y, C) => (a(), s("div", null, [
      d("div", xl, [
        d("label", {
          for: e.name,
          class: "font-medium"
        }, b(e.label), 9, $l),
        e.maxlength ? (a(), s("p", kl, b(n.value?.length ?? 0) + " / " + b(e.maxlength), 1)) : x("", !0)
      ]),
      d("div", {
        class: g([
          "rounded-lg flex duration-300 max-h-48 overflow-auto",
          c.value,
          e.styles,
          {
            error: e.error,
            success: e.success,
            selected: i.value
          }
        ])
      }, [
        d("textarea", {
          class: g(["rounded-lg p-2 flex-grow bg-transparent outline-none max-w-full placeholder:text-secondary-text border-none", { "field-sizing-content": e.fieldSizingContent }]),
          name: e.name,
          placeholder: e.placeholder,
          value: n.value,
          disabled: e.disabled,
          onInput: f,
          onFocus: m,
          onBlur: p,
          onKeydown: C[0] || (C[0] = (B) => o("keyPress", B)),
          maxlength: e.maxlength,
          rows: e.rows,
          ref_key: "inputElement",
          ref: u
        }, null, 42, Sl)
      ], 2),
      e.error && typeof e.error != "boolean" ? (a(), s("p", wl, b(e.error), 1)) : e.success && typeof e.error != "boolean" ? (a(), s("p", Cl, b(e.success), 1)) : x("", !0)
    ]));
  }
}, ve = () => {
  const e = $e("toastMessages", T([]));
  return {
    initializeToast: () => ke("toastMessages", T([])),
    toastMessages: e,
    addToast: (n) => e.value.push({ ...n, uuid: ie() }),
    closeToast: (n) => e.value = e.value.filter((u) => u.uuid !== n)
  };
}, Vl = { class: "flex-grow" }, Bl = { class: "text-sm font-medium" }, Ml = { class: "text-sm" }, zl = {
  __name: "ToastMessage",
  props: {
    message: Object
  },
  setup(e) {
    const l = e, { closeToast: t } = ve();
    return N(() => {
      l.message.duration && setTimeout(() => t(l.message.uuid), l.message.duration);
    }), (o, n) => {
      const u = Y("IconButton");
      return a(), F(U, {
        name: "slide-fade",
        appear: ""
      }, {
        default: V(() => [
          d("div", {
            class: g(`w-72 flex items-center gap-2 rounded-md p-2 bg-${e.message.color ?? "success"}/${e.message.opacity ?? 60}`)
          }, [
            d("div", Vl, [
              d("p", Bl, b(e.message.title), 1),
              d("p", Ml, b(e.message.content), 1)
            ]),
            h(u, {
              icon: v(G),
              color: "base",
              variant: "subtle",
              onClick: n[0] || (n[0] = (r) => v(t)(e.message.uuid))
            }, null, 8, ["icon"])
          ], 2)
        ]),
        _: 1
      });
    };
  }
}, Tl = { class: "relative" }, dn = {
  __name: "ToastContainer",
  props: {
    containerName: String,
    position: {
      type: String,
      default: "top-0 right-0"
    }
  },
  setup(e) {
    const l = e, { toastMessages: t } = ve(), o = z(() => t.value.filter((n) => n.container === l.containerName));
    return (n, u) => (a(), s("div", Tl, [
      $(n.$slots, "default"),
      o.value.length > 0 ? (a(), s("div", {
        key: 0,
        class: g(["absolute p-4 z-50 flex flex-col gap-2 overflow-hidden", e.position])
      }, [
        (a(!0), s(E, null, L(o.value, (r) => (a(), s("div", {
          key: r.uuid
        }, [
          $(n.$slots, "toast-content", { message: r }, () => [
            h(zl, { message: r }, null, 8, ["message"])
          ])
        ]))), 128))
      ], 2)) : x("", !0)
    ]));
  }
}, mn = {
  __name: "Toggle",
  props: /* @__PURE__ */ S({
    activeColor: {
      type: String,
      default: "secondary"
    },
    value: {
      type: Boolean,
      default: !1
    },
    icon: Object
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ S(["toggle"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = k(e, "modelValue"), u = () => {
      n.value = !n.value, o("toggle", n.value);
    }, r = z(
      () => n.value ? `bg-${t.activeColor}` : "bg-gray-300 dark:bg-gray-600"
    ), i = z(
      () => n.value ? "translate-x-6" : "translate-x-0"
    );
    return N(() => {
      n.value = n.value ?? t.value;
    }), (c, m) => (a(), s("div", {
      onClick: u,
      class: g([r.value, "cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300"])
    }, [
      d("div", {
        class: g([i.value, "bg-white dark:bg-gray-200 text-black text-sm flex justify-center items-center w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"])
      }, [
        e.icon ? (a(), F(v(D), {
          key: 0,
          icon: e.icon
        }, null, 8, ["icon"])) : x("", !0)
      ], 2)
    ], 2));
  }
}, Dl = { class: "rounded-md bg-dropdown/80 text-dropdown-text p-1 text-xs text-nowrap" }, fn = {
  __name: "Tooltip",
  props: {
    text: {
      type: String,
      required: !0
    },
    position: {
      type: String,
      default: "top"
    }
  },
  setup(e) {
    const l = e, t = T(!1), o = z(() => {
      let n;
      switch (l.position) {
        case "right":
          n = "left-full pl-4";
          break;
      }
      return n;
    });
    return (n, u) => (a(), s("div", {
      class: "relative flex items-center",
      onMouseenter: u[0] || (u[0] = (r) => t.value = !0),
      onMouseleave: u[1] || (u[1] = (r) => t.value = !1)
    }, [
      $(n.$slots, "default"),
      h(U, { name: "fade" }, {
        default: V(() => [
          t.value ? (a(), s("div", {
            key: 0,
            class: g([o.value, "absolute delay-1000 z-50"])
          }, [
            d("div", Dl, [
              $(n.$slots, "tooltip-content", {}, () => [
                q(b(e.text), 1)
              ])
            ])
          ], 2)) : x("", !0)
        ]),
        _: 3
      })
    ], 32));
  }
}, vn = {
  install(e) {
    const l = he();
    e.use(l);
  }
};
export {
  Rl as Accordion,
  Ge as AttachmentList,
  Nl as Avatar,
  Hl as AvatarGroup,
  Pl as Badge,
  Ye as Button,
  ue as Card,
  Ql as Checkbox,
  Wl as ClickableTag,
  ql as CodeSnippet,
  Gl as CurrencyInput,
  Kl as DatePicker,
  zt as DragAndDropFiles,
  Zl as DropdownMenu,
  te as DropdownOptions,
  yt as Dropzone,
  me as FileButton,
  St as FileList,
  lt as HoverBox,
  R as IconButton,
  Xl as Loader,
  Wt as MediaCarousel,
  Jl as MediaInput,
  Yl as Modal,
  _l as Multiselect,
  en as NumberInput,
  tn as Paragraph,
  ln as Radio,
  nn as Select,
  on as Stepper,
  an as StopPropagation,
  sn as TableCard,
  rn as Tabs,
  un as Tag,
  cn as Textarea,
  K as Textbox,
  dn as ToastContainer,
  mn as Toggle,
  fn as Tooltip,
  vn as default,
  de as useFiles,
  ce as useIsHandheld,
  ve as useToast
};
