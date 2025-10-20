import { VueFinalModal as ve, useModal as ye, ModalsContainer as ge, createVfm as be } from "vue-final-modal";
import { createElementBlock as r, openBlock as a, normalizeClass as v, renderSlot as k, mergeModels as x, useModel as $, createBlock as F, createCommentVNode as S, withCtx as z, createElementVNode as d, withDirectives as H, createVNode as h, toDisplayString as p, Transition as U, unref as f, vShow as K, ref as D, onMounted as N, onUnmounted as le, computed as M, watch as O, Fragment as E, renderList as L, normalizeStyle as ne, createTextVNode as q, withModifiers as Z, onBeforeUnmount as oe, useSlots as P, nextTick as ae, createSlots as R, resolveComponent as ee, vModelText as pe } from "vue";
import { FontAwesomeIcon as T } from "@fortawesome/vue-fontawesome";
import { faChevronDown as te, faHeadphones as he, faVideoCamera as xe, faFile as se, faXmark as X, faCheck as re, faCalendar as $e, faUpload as Se, faPlus as ke, faSort as we } from "@fortawesome/free-solid-svg-icons";
import Ce from "vuedraggable";
import { v4 as Ve } from "uuid";
import ze from "@vuepic/vue-datepicker";
import { onKeyStroke as G } from "@vueuse/core";
const ie = {
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
    return (l, t) => (a(), r("div", {
      class: v([
        e.styles,
        e.padding,
        { "shadow-sm": !e.flat },
        { "rounded-md": !e.boxed },
        "bg-card border border-border dark:border-none"
      ])
    }, [
      k(l.$slots, "default")
    ], 2));
  }
}, Be = { class: "text-xl font-medium" }, Me = { class: "pt-4" }, De = { key: 1 }, Te = { class: "p-2" }, xl = {
  __name: "Accordion",
  props: /* @__PURE__ */ x({
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
    const l = $(e, "modelValue");
    return (t, o) => e.variant === "card" ? (a(), F(ie, { key: 0 }, {
      default: z(() => [
        d("div", {
          onClick: o[0] || (o[0] = (n) => l.value = !l.value),
          class: "flex items-center justify-between gap-2 cursor-pointer"
        }, [
          d("h3", Be, p(e.title), 1),
          h(U, { name: "rotate" }, {
            default: z(() => [
              d("div", {
                class: v({ rotated: l.value, "not-rotated": !l.value })
              }, [
                h(f(T), {
                  icon: f(te),
                  size: "lg"
                }, null, 8, ["icon"])
              ], 2)
            ]),
            _: 1
          })
        ]),
        H(d("div", Me, [
          k(t.$slots, "default")
        ], 512), [
          [K, l.value]
        ])
      ]),
      _: 3
    })) : e.variant === "minimal" ? (a(), r("div", De, [
      d("div", {
        onClick: o[1] || (o[1] = (n) => l.value = !l.value),
        class: "p-2 border-b-2 border-base-text flex items-center justify-between gap-2 cursor-pointer"
      }, [
        d("h3", null, p(e.title), 1),
        h(U, { name: "rotate" }, {
          default: z(() => [
            d("div", {
              class: v({ rotated: l.value, "not-rotated": !l.value })
            }, [
              h(f(T), { icon: f(te) }, null, 8, ["icon"])
            ], 2)
          ]),
          _: 1
        })
      ]),
      H(d("div", Te, [
        k(t.$slots, "default")
      ], 512), [
        [K, l.value]
      ])
    ])) : S("", !0);
  }
}, ue = (e = 800) => {
  const l = D(innerWidth < e), t = () => l.value = innerWidth < e;
  return N(() => addEventListener("resize", t)), le(() => removeEventListener("resize", t)), l;
}, ce = () => ({ readableFileSize: (t) => {
  const o = ["Bytes", "KB", "MB", "GB", "TB"], n = Math.floor(Math.log(t) / Math.log(1024));
  return `${Math.round(t / Math.pow(1024, n))} ${o[n]}`;
}, formatFiles: (t) => t?.map((o) => o.uuid ? o : {
  name: o.name,
  size: o.size,
  uuid: Ve(),
  preview: URL.createObjectURL(o),
  type: o.type?.split("/")[0]
}) }), Fe = (e, l, t) => {
  if (l < 0 || l >= e.length || t < 0 || t >= e.length)
    throw new Error("Invalid indices");
  const [o] = e.splice(l, 1);
  return e.splice(t, 0, o), e;
}, Ie = (e) => Math.floor(e) !== e && e.toString().split(".")[1]?.length || 0, Ee = { class: "flex justify-center gap-2 w-full p-4" }, je = ["onMouseenter"], Le = ["onClick"], Ae = ["src", "alt"], Oe = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-secondary-text bg-card rounded-md"
}, Ue = ["onClick"], Ne = {
  __name: "AttachmentList",
  props: /* @__PURE__ */ x({
    size: String
  }, {
    files: { type: Array, required: !0 },
    filesModifiers: {},
    selectedIdx: { default: 0 },
    selectedIdxModifiers: {}
  }),
  emits: ["update:files", "update:selectedIdx"],
  setup(e) {
    const l = e, t = $(e, "files"), o = $(e, "selectedIdx"), n = ue(), { formatFiles: i } = ce(), s = D(-1), c = D(i(l.files)), u = (m) => {
      t.value = t.value.filter((g, C) => C !== m), o.value > m && (o.value -= 1);
    }, y = ({ moved: { oldIndex: m, newIndex: g } }) => {
      t.value = Fe(t.value, m, g), o.value === m ? o.value = g : o.value > m && o.value <= g ? o.value-- : o.value < m && o.value >= g && o.value++;
    }, b = M(() => l.size === "lg" ? "w-16 h-16" : "w-14 h-14");
    return O(t, () => c.value = i(l.files)), (m, g) => (a(), r("div", Ee, [
      k(m.$slots, "additional-items-before"),
      h(f(Ce), {
        modelValue: c.value,
        "onUpdate:modelValue": g[1] || (g[1] = (C) => c.value = C),
        "item-key": "uuid",
        "swap-threshold": 0.65,
        animation: 200,
        class: "flex gap-2",
        onChange: y
      }, {
        item: z(({ element: C, index: V }) => [
          d("div", {
            class: v(`relative border-secondary rounded-md ${b.value} ${o.value === V ? "border-3 bg-secondary" : ""}`),
            onMouseenter: (A) => s.value = V,
            onMouseleave: g[0] || (g[0] = (A) => s.value = -1)
          }, [
            d("button", {
              class: "w-full h-full",
              onClick: (A) => o.value = V
            }, [
              C.type === "image" ? (a(), r("img", {
                key: 0,
                src: C.preview,
                alt: C.name,
                class: "w-full h-full object-cover rounded-md"
              }, null, 8, Ae)) : (a(), r("span", Oe, [
                C.type === "audio" ? (a(), F(f(T), {
                  key: 0,
                  icon: f(he),
                  size: "lg"
                }, null, 8, ["icon"])) : C.type === "video" ? (a(), F(f(T), {
                  key: 1,
                  icon: f(xe),
                  size: "lg"
                }, null, 8, ["icon"])) : (a(), F(f(T), {
                  key: 2,
                  icon: f(se),
                  size: "lg"
                }, null, 8, ["icon"]))
              ]))
            ], 8, Le),
            s.value === V || f(n) ? (a(), r("button", {
              key: 0,
              onClick: (A) => u(V),
              class: "absolute cursor-pointer top-0 right-0 text-secondary-text bg-card/80 rounded-full w-5 h-5 flex justify-center items-center"
            }, [
              h(f(T), {
                icon: f(X),
                size: "xs"
              }, null, 8, ["icon"])
            ], 8, Ue)) : S("", !0)
          ], 42, je)
        ]),
        _: 1
      }, 8, ["modelValue"]),
      k(m.$slots, "additional-items-after")
    ]));
  }
}, Pe = ["src"], $l = {
  __name: "Avatar",
  props: {
    src: String,
    styles: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (l, t) => (a(), r("img", {
      src: e.src,
      alt: "avatar",
      class: v(`rounded-full ${e.styles}`)
    }, null, 10, Pe));
  }
}, He = { class: "flex items-center" }, Re = ["src", "alt"], Sl = {
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
    return (l, t) => (a(), r("div", He, [
      (a(!0), r(E, null, L(e.avatars, (o, n) => (a(), r("img", {
        key: n,
        src: o,
        alt: `avatar ${n + 1}`,
        class: v(`${e.width} rounded-full relative`),
        style: ne({ marginLeft: n === 0 ? "0" : `-${e.overlap}px` })
      }, null, 14, Re))), 128))
    ]));
  }
}, kl = {
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
    return (l, t) => (a(), r("div", {
      class: v(`text-${e.size} text-black font-bold bg-${e.color} rounded-xl px-1 ${e.styles} min-w-3 min-h-3`)
    }, [
      k(l.$slots, "default", {}, () => [
        q(p(e.content), 1)
      ])
    ], 2));
  }
}, Qe = ["disabled", "type"], qe = {
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
    }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = e, o = l, n = D(!1), i = (u) => {
      t.href && window.open(t.href), o("click", u);
    }, s = M(() => t.color === "base" ? "secondary-text" : t.color), c = M(() => {
      const u = [
        "btn",
        t.styles,
        { pressed: n },
        { "disabled-btn": t.disabled },
        { "cursor-default": !t.hoverEffects }
      ];
      switch (t.variant) {
        case "light":
          u.push(`bg-${s.value}/20 text-${s.value}`), t.hoverEffects && u.push(`hover:bg-${s.value}/35`);
          break;
        case "outline":
          u.push(`text-${s.value} border-${s.value} border-2`), t.hoverEffects && u.push(`hover:bg-${s.value}/10`);
          break;
        case "subtle":
          u.push(`text-${s.value} bg-transparent`), t.hoverEffects && u.push(`hover:bg-${s.value}/10`);
          break;
        case "dashed":
          u.push(`text-${s.value} border-${s.value} border-2 border-dashed`), t.hoverEffects && u.push(`hover:bg-${s.value}/10`);
          break;
        default:
          u.push(`text-black bg-${s.value}`);
          break;
      }
      return u;
    });
    return (u, y) => (a(), r("button", {
      onClick: i,
      onMousedown: y[0] || (y[0] = (b) => n.value = !0),
      onMouseup: y[1] || (y[1] = (b) => n.value = !1),
      class: v(c.value),
      disabled: e.disabled,
      type: e.type
    }, [
      k(u.$slots, "default")
    ], 42, Qe));
  }
}, We = { class: "flex items-center gap-2" }, Ge = ["for"], Ke = {
  key: 0,
  class: "text-error text-sm"
}, wl = {
  __name: "Checkbox",
  props: /* @__PURE__ */ x({
    name: String,
    error: String
  }, {
    modelValue: { default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ x(["toggle"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = $(e, "modelValue"), o = l, n = () => {
      t.value = !t.value, o("toggle", t.value);
    };
    return (i, s) => (a(), r("div", null, [
      d("div", We, [
        d("button", {
          onClick: s[0] || (s[0] = (c) => n()),
          type: "button",
          class: v(["rounded-sm cursor-pointer border-secondary border-2 w-4 h-4 flex items-center justify-center text-black", { "bg-secondary": t.value, "hover:bg-secondary/30": !t.value }])
        }, [
          t.value ? (a(), F(f(T), {
            key: 0,
            icon: f(re),
            size: "xs"
          }, null, 8, ["icon"])) : S("", !0)
        ], 2),
        d("label", { for: e.name }, [
          k(i.$slots, "default")
        ], 8, Ge)
      ]),
      e.error ? (a(), r("p", Ke, p(e.error), 1)) : S("", !0)
    ]));
  }
}, Cl = {
  __name: "ClickableTag",
  props: /* @__PURE__ */ x({
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
  emits: /* @__PURE__ */ x(["select"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = $(e, "modelValue"), i = M(() => `${t.styles} py-1 px-3 duration-100 text-center border-2 rounded-${t.rounded} text-${t.size} text-${t.color} border-${t.color} hover:bg-${t.color}/10`), s = M(() => `${t.styles} py-1 px-3 duration-100 text-center border-2 rounded-${t.rounded} text-${t.size} bg-${t.color} border-${t.color} text-black`);
    return (c, u) => (a(), r("button", {
      onClick: u[0] || (u[0] = (y) => o("select")),
      class: v(n.value ? s.value : i.value)
    }, [
      k(c.$slots, "default")
    ], 2));
  }
}, Ze = ["for"], Xe = {
  key: 0,
  class: "flex justify-center items-center w-10 rounded-l-md"
}, Je = { key: 0 }, Ye = { key: 1 }, _e = {
  key: 2,
  class: "text-secondary-text"
}, et = ["name", "type", "placeholder", "value", "disabled"], tt = {
  key: 0,
  class: "text-error text-sm"
}, lt = {
  key: 1,
  class: "text-success text-sm"
}, W = {
  __name: "Textbox",
  props: /* @__PURE__ */ x({
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
  emits: /* @__PURE__ */ x(["input", "focus", "blur"], ["update:modelValue", "update:input"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = $(e, "modelValue"), i = $(e, "input"), s = D(!1), c = M(
      () => t.variant === "filled" ? `bg-${t.color}` : "bg-transparent border border-border"
    ), u = (m) => {
      s.value = !0, o("input", m);
    }, y = (m) => {
      s.value = !1, o("blur", m);
    }, b = (m) => {
      n.value = m.target.value, o("input", m);
    };
    return (m, g) => (a(), r("div", null, [
      d("label", {
        for: e.name,
        class: v(e.labelStyles)
      }, p(e.label), 11, Ze),
      d("div", {
        class: v([
          "rounded-lg flex items-center duration-300",
          c.value,
          e.styles,
          {
            error: e.error,
            success: e.success,
            selected: s.value,
            "min-h-10": e.size !== "sm",
            "min-h-8": e.size === "sm"
          }
        ])
      }, [
        e.icon ? (a(), r("div", Xe, [
          h(f(T), {
            icon: e.icon,
            size: e.size,
            class: "text-secondary-text"
          }, null, 8, ["icon", "size"])
        ])) : S("", !0),
        d("div", {
          class: v(["flex-grow w-full flex items-center gap-1 flex-wrap p-2", { "pl-0": e.icon }])
        }, [
          k(m.$slots, "left-section"),
          e.disabled ? (a(), r("div", {
            key: 0,
            class: v([{ "pl-0": e.icon, "text-sm": e.size === "sm" }, "flex-grow overflow-hidden"])
          }, [
            n.value ? (a(), r("span", Je, p(n.value), 1)) : e.value ? (a(), r("span", Ye, p(e.value), 1)) : e.placeholder ? (a(), r("span", _e, p(e.placeholder), 1)) : S("", !0)
          ], 2)) : (a(), r("input", {
            key: 1,
            ref_key: "inputElement",
            ref: i,
            name: e.name,
            type: e.type,
            placeholder: e.placeholder,
            value: n.value ?? e.value,
            disabled: e.disabled,
            onInput: b,
            onFocus: u,
            onBlur: y,
            class: v([{ "placeholder:text-sm": e.size === "sm" }, "p-0 flex-grow border-none outline-none rounded-lg bg-transparent placeholder:text-secondary-text"])
          }, null, 42, et))
        ], 2),
        k(m.$slots, "right-section")
      ], 2),
      e.error && typeof e.error != "boolean" ? (a(), r("p", tt, p(e.error), 1)) : e.success && typeof e.error != "boolean" ? (a(), r("p", lt, p(e.success), 1)) : S("", !0)
    ]));
  }
}, Vl = {
  __name: "CurrencyInput",
  props: /* @__PURE__ */ x({
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
    const l = e, t = $(e, "modelValue"), o = (i) => {
      let s = parseFloat(i.target.value.replace(/[^\d.-]/g, ""));
      Ie(s) > 0 && (s = (Math.round(s * 100) / 100).toFixed(2)), t.value = s;
    }, n = M(() => {
      if (t.value)
        return `${l.currencySymbol}${t.value}`;
    });
    return (i, s) => (a(), F(W, {
      label: e.label,
      value: n.value,
      "on-input": o,
      placeholder: e.currencySymbol,
      size: e.size,
      color: e.color,
      variant: e.variant
    }, null, 8, ["label", "value", "placeholder", "size", "color", "variant"]));
  }
}, Q = (e) => {
  const l = navigator.language || "en-US", t = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return new Intl.DateTimeFormat(l, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: t
  }).format(e);
}, nt = (e) => `${Q(e)} ${formatTimestamp24Hour(e)}`, ot = (e) => `${Q(e[0])} - ${Q(e[1])}`, at = { class: "font-medium" }, st = {
  key: 0,
  class: "text-error text-sm"
}, zl = {
  __name: "DatePicker",
  props: /* @__PURE__ */ x({
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
    const l = e, t = $(e, "modelValue"), o = D(null), n = M(() => l.range ? ot : l.includeTime ? nt : Q);
    return (i, s) => (a(), r("div", {
      class: v(e.styles)
    }, [
      d("label", at, p(e.label), 1),
      h(f(ze), {
        modelValue: t.value,
        "onUpdate:modelValue": s[0] || (s[0] = (c) => t.value = c),
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
        "dp-input": z(({ value: c }) => [
          h(W, {
            placeholder: e.placeholder,
            value: c,
            icon: f($e),
            variant: e.variant,
            size: e.size,
            color: e.color,
            error: !!e.error
          }, null, 8, ["placeholder", "value", "icon", "variant", "size", "color", "error"])
        ]),
        _: 1
      }, 8, ["modelValue", "format", "disabled", "enable-time-picker", "range", "min-date", "max-date"]),
      e.error ? (a(), r("p", st, p(e.error), 1)) : S("", !0)
    ], 2));
  }
}, rt = {
  __name: "Dropzone",
  props: {
    modelValue: { default: !1 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ x(["drop"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = l, o = $(e, "modelValue"), n = (i) => {
      o.value = !1, t("drop", i);
    };
    return (i, s) => (a(), r("div", {
      onDragover: s[0] || (s[0] = Z((c) => o.value = !0, ["prevent"])),
      onDragleave: s[1] || (s[1] = (c) => o.value = !1),
      onDrop: Z(n, ["prevent"])
    }, [
      k(i.$slots, "default", { isDragOver: o.value })
    ], 32));
  }
}, it = ["multiple", "accept"], de = {
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
    const t = e, o = l, n = D(null), i = () => {
      t.disabled || n.value.click();
    };
    return (s, c) => (a(), r("div", null, [
      d("input", {
        type: "file",
        ref_key: "fileInput",
        ref: n,
        onChange: c[0] || (c[0] = (u) => o("change", u)),
        multiple: e.multiple,
        accept: e.accept,
        hidden: ""
      }, null, 40, it),
      d("div", { onClick: i }, [
        k(s.$slots, "default")
      ])
    ]));
  }
}, ut = {
  key: 0,
  class: "font-medium mb-1"
}, ct = {
  key: 0,
  class: "mb-2"
}, dt = { class: "font-medium" }, mt = {
  key: 0,
  class: "text-error text-sm mt-1"
}, ft = {
  __name: "DragAndDropFiles",
  props: /* @__PURE__ */ x({
    label: String,
    dropText: {
      type: String,
      default: "Drag and drop files here, or click to select files"
    },
    error: String,
    withIcon: Boolean
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = $(e, "modelValue"), t = (i) => l.value = Array.from(i), o = (i) => t(i.dataTransfer.files), n = (i) => t(i.target.files);
    return (i, s) => (a(), r("div", null, [
      e.label ? (a(), r("p", ut, p(e.label), 1)) : S("", !0),
      d("div", null, [
        h(de, {
          onChange: n,
          accept: "image/*"
        }, {
          default: z(() => [
            h(rt, { onDrop: o }, {
              default: z(({ isDragOver: c }) => [
                d("div", {
                  class: v(["cursor-pointer duration-300 text-center border-2 border-dashed py-6 px-4 rounded-lg", {
                    "bg-secondary/30": c,
                    "text-secondary border-secondary": !e.error,
                    "text-error border-error": e.error
                  }])
                }, [
                  e.withIcon ? (a(), r("div", ct, [
                    h(f(T), {
                      icon: f(Se),
                      size: "lg"
                    }, null, 8, ["icon"])
                  ])) : S("", !0),
                  d("p", dt, p(e.dropText), 1)
                ], 2)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e.error ? (a(), r("p", mt, p(e.error), 1)) : S("", !0)
      ])
    ]));
  }
}, me = () => {
  const e = D(!1), l = D(null), t = () => e.value = !0, o = () => e.value = !1, n = (i) => {
    l.value.contains(i.target) || o();
  };
  return N(() => {
    document.addEventListener("mousedown", n);
  }), oe(() => {
    document.removeEventListener("mousedown", n);
  }), { dropdownOpen: e, dropdownContainer: l, open: t, close: o };
}, J = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [o, n] of l)
    t[o] = n;
  return t;
}, vt = ["onClick", "onMouseover"], yt = { key: 1 }, gt = {
  key: 0,
  class: "text-xs text-secondary-text"
}, bt = {
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
    const t = e, o = l, n = P(), i = D(-1), s = D("top-full"), c = D(null), u = (g) => o("select", g), y = () => {
      const g = t.container.getBoundingClientRect(), C = window.innerHeight || document.documentElement.clientHeight;
      s.value = g.bottom + 150 > C ? "bottom-full" : "top-full";
    }, b = () => {
      s.value = "top-full";
    }, m = async (g) => {
      i.value += g, i.value < 0 ? i.value = t.options.length - 1 : i.value >= t.options.length && (i.value = 0), await ae();
      const V = c.value?.querySelectorAll("div > div")?.[i.value];
      V && V.scrollIntoView({ block: "nearest", behavior: "smooth" });
    };
    return G("ArrowDown", (g) => {
      t.open && t.options.length > 0 && (g.preventDefault(), m(1));
    }), G("ArrowUp", (g) => {
      t.open && t.options.length > 0 && (g.preventDefault(), m(-1));
    }), G("Enter", (g) => {
      t.open && t.options.length > 0 ? (g.preventDefault(), u(t.options[i.value])) : t.acceptsEmptySelection && (g.preventDefault(), u());
    }), O(() => t.open, () => {
      t.open || (i.value = -1);
    }), (g, C) => (a(), F(U, {
      name: s.value === "top-full" ? "slide-down" : "slide-up",
      onBeforeEnter: y,
      onAfterLeave: b
    }, {
      default: z(() => [
        e.open && e.options?.length > 0 ? (a(), r("div", {
          key: 0,
          ref_key: "optionsContainer",
          ref: c,
          class: v([
            "rounded-md bg-dropdown text-dropdown-text absolute overflow-auto max-h-64 flex flex-col cursor-pointer z-50",
            e.width,
            e.direction === "right" ? "right-0" : "left-0",
            s.value
          ])
        }, [
          (a(!0), r(E, null, L(e.options, (V, A) => (a(), r("div", {
            key: e.trackBy ? e.options[e.trackBy] : V,
            onClick: (j) => u(V),
            onMouseover: (j) => i.value = A,
            class: v(["text-md py-2 px-6 rounded-md text-left", { "bg-dropdown-select": i.value === A }])
          }, [
            f(n).option ? k(g.$slots, "option", {
              key: 0,
              option: V
            }, void 0, !0) : (a(), r("div", yt, [
              q(p(e.optionLabel ? V[e.optionLabel] : V) + " ", 1),
              V[e.optionDescription] ? (a(), r("div", gt, p(V[e.optionDescription]), 1)) : S("", !0)
            ]))
          ], 42, vt))), 128))
        ], 2)) : S("", !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}, Y = /* @__PURE__ */ J(bt, [["__scopeId", "data-v-32652279"]]), Bl = {
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
    const t = l, o = P(), { dropdownOpen: n, dropdownContainer: i } = me(), s = (c) => {
      n.value = !1, t("select", c);
    };
    return (c, u) => (a(), r("div", {
      class: "relative",
      ref_key: "dropdownContainer",
      ref: i
    }, [
      d("div", {
        onClick: u[0] || (u[0] = (y) => n.value = !f(n))
      }, [
        k(c.$slots, "trigger")
      ]),
      h(Y, {
        container: f(i),
        options: e.options,
        open: f(n),
        "option-label": e.label,
        "track-by": e.trackBy,
        "accepts-empty-selection": "",
        onSelect: s,
        width: "w-64",
        direction: e.direction
      }, R({ _: 2 }, [
        f(o).option ? {
          name: "option",
          fn: z(({ option: y }) => [
            k(c.$slots, "option", { option: y })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["container", "options", "open", "option-label", "track-by", "direction"])
    ], 512));
  }
}, _ = {
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
    }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = e, o = l, n = M(() => {
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
    return (i, s) => (a(), F(qe, {
      styles: `${e.styles} ${n.value} flex justify-center items-center !px-0 !py-0`,
      href: e.href,
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      variant: e.variant,
      "hover-effects": e.hoverEffects,
      onClick: s[0] || (s[0] = (c) => o("click", c))
    }, {
      default: z(() => [
        h(f(T), {
          size: e.size,
          icon: e.icon
        }, null, 8, ["size", "icon"])
      ]),
      _: 1
    }, 8, ["styles", "href", "type", "color", "disabled", "variant", "hover-effects"]));
  }
}, pt = { class: "flex-grow" }, ht = { class: "text-md font-medium" }, Ml = {
  __name: "FlashMessage",
  props: {
    content: String,
    opacity: {
      type: Number,
      default: 60
    },
    color: {
      type: String,
      default: "success"
    },
    duration: {
      type: Number,
      default: 1e3
    }
  },
  setup(e) {
    const l = e, t = D(!0);
    return N(() => setTimeout(() => t.value = !1, l.duration)), (o, n) => (a(), F(U, { name: "slide-fade" }, {
      default: z(() => [
        t.value ? (a(), r("div", {
          key: 0,
          class: v(`w-96 flex items-center gap-2 rounded-md p-2 my-2 bg-${e.color}/${e.opacity}`)
        }, [
          d("div", pt, [
            d("p", ht, p(e.content), 1)
          ]),
          h(_, {
            icon: f(X),
            color: "base",
            variant: "subtle",
            "on-click": () => t.value = !1
          }, null, 8, ["icon", "on-click"])
        ], 2)) : S("", !0)
      ]),
      _: 1
    }));
  }
}, xt = { class: "flex items-center justify-center" }, $t = {
  key: 0,
  class: "text-center font-medium mt-2"
}, St = {
  __name: "Loader",
  props: {
    label: String
  },
  setup(e) {
    return (l, t) => (a(), r("div", xt, [
      d("div", null, [
        t[0] || (t[0] = d("div", { class: "spinner" }, null, -1)),
        e.label ? (a(), r("p", $t, p(e.label), 1)) : S("", !0)
      ])
    ]));
  }
}, Dl = /* @__PURE__ */ J(St, [["__scopeId", "data-v-d8288a84"]]), kt = { class: "flex items-center justify-center" }, wt = { key: 0 }, Ct = ["src", "alt"], Vt = { key: 1 }, zt = ["src"], Bt = { key: 2 }, Mt = ["src"], Dt = {
  key: 3,
  class: "text-center"
}, Tt = {
  __name: "MediaCarousel",
  props: /* @__PURE__ */ x({
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
    const l = $(e, "selectedIdx"), t = ue(), o = () => {
      const n = document.querySelector("swiper-container").swiper;
      l.value = n.activeIndex;
    };
    return O(l, () => {
      const n = document.querySelector("swiper-container")?.swiper;
      l.value !== n.activeIndex && n.slideTo(l.value);
    }), (n, i) => {
      const s = ee("swiper-slide"), c = ee("swiper-container");
      return a(), F(c, {
        "slides-per-view": 1,
        "centered-slides": !0,
        navigation: !f(t),
        onSwiperslidechange: o
      }, {
        default: z(() => [
          (a(!0), r(E, null, L(e.files, (u) => (a(), F(s, null, {
            default: z(() => [
              d("div", kt, [
                u.type === "image" ? (a(), r("div", wt, [
                  d("img", {
                    src: u.preview,
                    alt: u.name,
                    class: v(e.maxMediaHeight)
                  }, null, 10, Ct)
                ])) : u.type === "video" ? (a(), r("div", Vt, [
                  d("video", {
                    src: u.preview,
                    controls: "",
                    class: v(e.maxMediaHeight)
                  }, null, 10, zt)
                ])) : u.type === "audio" ? (a(), r("div", Bt, [
                  d("audio", {
                    src: u.preview,
                    controls: ""
                  }, null, 8, Mt)
                ])) : (a(), r("div", Dt, [
                  h(f(T), {
                    icon: f(se),
                    size: "xl"
                  }, null, 8, ["icon"]),
                  i[0] || (i[0] = d("p", { class: "text-lg mt-2" }, "No preview available", -1))
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
}, Ft = {
  key: 0,
  class: "font-medium mb-1"
}, It = {
  key: 1,
  class: "mb-2"
}, Et = {
  key: 0,
  class: "text-error text-sm mt-1"
}, Tl = {
  __name: "MediaInput",
  props: /* @__PURE__ */ x({
    label: String,
    placeholder: String,
    error: String
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = $(e, "modelValue"), t = D(0), { formatFiles: o } = ce(), n = (s) => l.value.push(...s.target.files), i = M(() => o(l.value));
    return (s, c) => (a(), r("div", null, [
      e.label ? (a(), r("label", Ft, p(e.label), 1)) : S("", !0),
      l.value.length > 0 ? (a(), r("div", It, [
        h(Tt, {
          "selected-idx": t.value,
          "onUpdate:selectedIdx": c[0] || (c[0] = (u) => t.value = u),
          files: i.value
        }, null, 8, ["selected-idx", "files"]),
        h(Ne, {
          "selected-idx": t.value,
          "onUpdate:selectedIdx": c[1] || (c[1] = (u) => t.value = u),
          files: l.value,
          "onUpdate:files": c[2] || (c[2] = (u) => l.value = u)
        }, {
          "additional-items-after": z(() => [
            h(de, {
              onChange: n,
              accept: "image/*"
            }, {
              default: z(() => [
                h(_, {
                  icon: f(ke),
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
        e.error ? (a(), r("p", Et, p(e.error), 1)) : S("", !0)
      ])) : (a(), F(ft, {
        key: 2,
        "with-icon": "",
        "drop-text": e.placeholder,
        modelValue: l.value,
        "onUpdate:modelValue": c[3] || (c[3] = (u) => l.value = u),
        error: e.error
      }, null, 8, ["drop-text", "modelValue", "error"]))
    ]));
  }
}, jt = {
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
    return le(() => t("close")), (o, n) => (a(), F(f(ve), {
      "overlay-transition": "vfm-fade",
      "content-transition": "vfm-fade",
      class: "flex justify-center items-center",
      "content-class": e.contentClass
    }, {
      default: z(() => [
        h(ie, { styles: "w-full" }, {
          default: z(() => [
            k(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["content-class"]));
  }
}, Fl = {
  __name: "Modal",
  props: /* @__PURE__ */ x({
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
    const l = e, t = $(e, "modelValue"), o = P(), n = ye({
      component: jt,
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
    }), (i, s) => (a(), F(f(ge)));
  }
}, Lt = {
  key: 0,
  class: "text-error text-sm"
}, Il = {
  __name: "Multiselect",
  props: /* @__PURE__ */ x({
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
  emits: /* @__PURE__ */ x(["select", "focus", "blur"], ["update:modelValue", "update:searchQuery", "update:input"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = $(e, "modelValue"), i = $(e, "searchQuery"), s = $(e, "input"), c = P(), u = D(!1), y = D(null), b = M(() => t.acceptsDuplicates ? t.options : t.options.filter((w) => !n.value.includes(t.formatResult(w)))), m = (w) => {
      n.value.push(t.formatResult(w)), i.value = "", o("select", w);
    }, g = (w) => {
      n.value = n.value.filter((B, I) => I !== w);
    }, C = () => {
      u.value = !0;
    }, V = () => {
      u.value = !1;
    }, A = () => {
      t.searchable || (u.value ? V() : C());
    }, j = (w) => {
      y.value.contains(w.target) || V();
    };
    return N(() => {
      document.addEventListener("mousedown", j);
    }), oe(() => {
      document.removeEventListener("mousedown", j);
    }), O(i, () => {
      t.searchable && i.value.length > 0 && C();
    }), (w, B) => (a(), r("div", {
      class: v([e.styles])
    }, [
      d("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: y
      }, [
        d("div", {
          onClick: B[4] || (B[4] = (I) => A()),
          class: v({ "cursor-pointer": !e.searchable })
        }, [
          h(W, {
            modelValue: i.value,
            "onUpdate:modelValue": B[0] || (B[0] = (I) => i.value = I),
            input: s.value,
            "onUpdate:input": B[1] || (B[1] = (I) => s.value = I),
            label: e.label,
            placeholder: e.placeholder,
            disabled: !e.searchable,
            icon: e.icon,
            error: !!e.error,
            size: e.size,
            color: e.color,
            variant: e.variant,
            styles: e.textboxStyles,
            onFocus: B[2] || (B[2] = (I) => o("focus", I)),
            onBlur: B[3] || (B[3] = (I) => o("blur", I))
          }, {
            "left-section": z(() => [
              (a(!0), r(E, null, L(n.value, (I, fe) => (a(), r("div", {
                key: e.optionLabel[e.trackBy]
              }, [
                k(w.$slots, "selectedTag", {
                  option: I,
                  deselect: () => g(fe)
                })
              ]))), 128))
            ]),
            _: 3
          }, 8, ["modelValue", "input", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        h(Y, {
          container: y.value,
          options: b.value,
          "option-label": e.optionLabel,
          "track-by": e.trackBy,
          open: u.value,
          "accepts-empty-selection": e.acceptsEmptySelection,
          onSelect: m
        }, R({ _: 2 }, [
          f(c).option ? {
            name: "option",
            fn: z(({ option: I }) => [
              k(w.$slots, "option", { option: I })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      e.error && typeof e.error != "boolean" ? (a(), r("p", Lt, p(e.error), 1)) : S("", !0)
    ], 2));
  }
}, At = { class: "font-medium" }, Ot = {
  key: 0,
  class: "text-text-secondary flex justify-center items-center w-10 rounded-l-md"
}, Ut = ["placeholder", "min", "max", "disabled"], Nt = {
  key: 0,
  class: "text-error text-sm"
}, Pt = {
  key: 1,
  class: "text-error text-sm"
}, El = {
  __name: "NumberInput",
  props: /* @__PURE__ */ x({
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
    const l = e, t = $(e, "modelValue"), o = M(
      () => l.variant === "filled" ? `bg-${l.color}` : "bg-transparent border border-secondary-text"
    ), n = M(() => l.modelValue > l.max ? `Value must be ${l.max} or less.` : l.modelValue < l.min ? `Value must be ${l.min} or more.` : !1);
    return (i, s) => (a(), r("div", null, [
      d("h4", At, p(e.label), 1),
      d("div", {
        class: v(["rounded-lg flex h-10 items-center", o.value, e.styles, { error: n.value || e.error, "px-2": !e.icon }])
      }, [
        e.icon ? (a(), r("div", Ot, [
          h(f(T), {
            icon: e.icon,
            size: "1x",
            class: "text-secondary-text"
          }, null, 8, ["icon"])
        ])) : S("", !0),
        H(d("input", {
          "onUpdate:modelValue": s[0] || (s[0] = (c) => t.value = c),
          placeholder: e.placeholder,
          type: "number",
          min: e.min,
          max: e.max,
          disabled: e.disabled,
          class: "flex-grow w-full py-2 px-0 border-none outline-none rounded-lg placeholder:text-secondary-text bg-transparent appearance-none"
        }, null, 8, Ut), [
          [pe, t.value]
        ])
      ], 2),
      n.value ? (a(), r("p", Nt, p(n.value), 1)) : e.error && typeof e.error == "string" ? (a(), r("p", Pt, p(e.error), 1)) : S("", !0)
    ]));
  }
}, jl = {
  __name: "Paragraph",
  props: {
    text: String,
    styles: String,
    limit: Number,
    includeWhitespace: Boolean
  },
  setup(e) {
    const l = e, t = M(() => l.limit ? `${l.text.substring(0, l.limit)}${l.text.length > l.limit ? "..." : ""}` : l.text);
    return (o, n) => (a(), r("p", {
      class: v([e.styles, { "whitespace-pre-wrap": e.includeWhitespace }])
    }, p(t.value), 3));
  }
}, Ht = ["name", "value", "checked"], Rt = { class: "rounded-full border-2 border-secondary flex items-center justify-center h-4 w-4" }, Ll = {
  __name: "Radio",
  props: /* @__PURE__ */ x({
    value: [String, Boolean],
    label: String,
    name: String,
    modelValue: String
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ x(["select"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = $(e, "modelValue"), i = D(!1), s = M(() => t.modelValue === t.value), c = (u) => {
      n.value = t.value, o("select", u);
    };
    return (u, y) => (a(), r("label", {
      class: "flex items-center gap-3 relative cursor-pointer",
      onMouseenter: y[1] || (y[1] = (b) => i.value = !0),
      onMouseleave: y[2] || (y[2] = (b) => i.value = !1)
    }, [
      d("input", {
        class: "absolute opacity-0 cursor-pointer",
        type: "radio",
        name: e.name,
        value: e.value,
        checked: s.value,
        onChange: y[0] || (y[0] = (b) => c(b))
      }, null, 40, Ht),
      d("span", Rt, [
        d("span", {
          class: v(["rounded-full h-2 w-2", { "bg-secondary": i.value || s.value }])
        }, null, 2)
      ]),
      d("span", null, p(e.label), 1)
    ], 32));
  }
}, Qt = { class: "flex items-center pr-1" }, qt = { class: "flex items-center pr-2 text-secondary-text" }, Wt = {
  key: 0,
  class: "text-error text-sm"
}, Al = {
  __name: "Select",
  props: /* @__PURE__ */ x({
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
  emits: /* @__PURE__ */ x(["select", "blur", "focus"], ["update:modelValue", "update:searchQuery", "update:input"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = $(e, "modelValue"), i = $(e, "searchQuery"), s = $(e, "input"), c = P(), { dropdownOpen: u, dropdownContainer: y, open: b, close: m } = me(), g = (j) => {
      const w = t.formatResult(j);
      n.value = w, o("select", w), t.optionLabel && (i.value = j[t.optionLabel]), ae(m);
    }, C = (j) => {
      j.stopPropagation(), n.value = null, i.value = "";
    }, V = () => {
      t.searchable || (u.value ? m() : b());
    }, A = () => n.value && t.optionLabel ? n.value[t.optionLabel] : n.value ? n.value : null;
    return O(i, () => {
      t.searchable && i.value.length > 0 ? b() : t.searchable && m();
    }), (j, w) => (a(), r("div", {
      class: v([e.styles])
    }, [
      d("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: y
      }, [
        d("div", {
          onClick: w[4] || (w[4] = (B) => V()),
          class: v({ "cursor-pointer": !e.searchable })
        }, [
          h(W, {
            modelValue: i.value,
            "onUpdate:modelValue": w[0] || (w[0] = (B) => i.value = B),
            input: s.value,
            "onUpdate:input": w[1] || (w[1] = (B) => s.value = B),
            value: A(),
            label: e.label,
            placeholder: e.placeholder,
            disabled: !e.searchable || e.lockOnSelect && n.value,
            icon: n.value?.icon ?? e.icon,
            error: !!e.error,
            size: e.size,
            color: e.color,
            variant: e.variant,
            styles: e.textboxStyles,
            onFocus: w[2] || (w[2] = (B) => o("focus", B)),
            onBlur: w[3] || (w[3] = (B) => o("blur", B))
          }, R({ _: 2 }, [
            e.lockOnSelect && e.searchable && n.value ? {
              name: "right-section",
              fn: z(() => [
                d("div", Qt, [
                  h(_, {
                    icon: f(X),
                    "on-click": C,
                    variant: "subtle",
                    color: "base",
                    size: e.size
                  }, null, 8, ["icon", "size"])
                ])
              ]),
              key: "0"
            } : e.searchable ? void 0 : {
              name: "right-section",
              fn: z(() => [
                d("div", qt, [
                  h(f(T), {
                    icon: f(we),
                    size: e.size
                  }, null, 8, ["icon", "size"])
                ])
              ]),
              key: "1"
            }
          ]), 1032, ["modelValue", "input", "value", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        h(Y, {
          container: f(y),
          options: e.options,
          "option-label": e.optionLabel,
          "track-by": e.trackBy,
          open: f(u),
          "accepts-empty-selection": e.acceptsEmptySelection,
          onSelect: g
        }, R({ _: 2 }, [
          f(c).option ? {
            name: "option",
            fn: z(({ option: B }) => [
              k(j.$slots, "option", { option: B })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      e.error && typeof e.error != "boolean" ? (a(), r("p", Wt, p(e.error), 1)) : S("", !0)
    ], 2));
  }
}, Gt = {
  key: 0,
  class: "w-full"
}, Kt = { class: "flex justify-between items-center gap-2 px-4" }, Zt = ["onClick"], Xt = { class: "flex justify-between items-center mt-1 px-3" }, Jt = ["onClick"], Yt = ["onClick"], Ol = {
  __name: "Stepper",
  props: /* @__PURE__ */ x({
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
    const l = e, t = $(e, "modelValue"), o = M(() => l.steps.findIndex((u) => u.value === t.value)), n = M(() => l.steps.map((u, y) => y < o.value ? { ...u, status: "completed" } : y === o.value ? { ...u, status: "in-progress" } : { ...u, status: "uncompleted" })), i = (u) => u.status === "uncompleted" || u.status !== "in-progress" && l.variant === "minimalist" ? "text-secondary-text bg-card-accent" : `text-${l.color} bg-${l.color}${l.variant === "classic" ? "/30" : ""}`, s = (u) => l.canMoveForwards && u > o.value || l.canMoveBackwards && u < o.value ? "cursor-pointer" : "cursor-default", c = (u, y) => {
      (l.canMoveForwards && y > o.value || l.canMoveBackwards && y < o.value) && (t.value = u.value);
    };
    return (u, y) => e.variant === "classic" ? (a(), r("div", Gt, [
      d("div", Kt, [
        (a(!0), r(E, null, L(n.value, (b, m) => (a(), r(E, {
          key: b.value
        }, [
          d("div", {
            onClick: (g) => c(b, m),
            class: v([
              "w-10 h-10 rounded-full flex items-center justify-center",
              i(b),
              s(m)
            ])
          }, [
            h(f(T), {
              icon: b.status === "completed" && !e.canMoveBackwards ? f(re) : b.icon
            }, null, 8, ["icon"])
          ], 10, Zt),
          m < e.steps.length - 1 ? (a(), r("div", {
            key: 0,
            class: v(`flex-grow bg-${n.value[m + 1].status === "uncompleted" ? "secondary-text" : e.color} h-0.5`)
          }, null, 2)) : S("", !0)
        ], 64))), 128))
      ]),
      d("div", Xt, [
        (a(!0), r(E, null, L(n.value, (b, m) => (a(), r("p", {
          key: "label-" + b.value,
          onClick: (g) => c(b, m),
          class: v([
            b.status === "uncompleted" ? "text-secondary-text" : `text-${e.color}`,
            "text-xs font-medium text-center",
            s(m)
          ])
        }, p(b.label), 11, Jt))), 128))
      ])
    ])) : e.variant === "minimalist" ? (a(), r("div", {
      key: 1,
      class: v(`grid grid-cols-${n.value.length} gap-1`)
    }, [
      (a(!0), r(E, null, L(n.value, (b, m) => (a(), r("div", {
        key: b.value,
        onClick: (g) => c(b, m)
      }, [
        d("div", {
          class: v(["h-1 rounded-lg mb-1", i(b), s(m)])
        }, null, 2),
        d("p", {
          class: v([
            b.status !== "in-progress" ? "text-secondary-text" : `text-${e.color}`,
            "text-sm font-medium",
            s(m)
          ])
        }, p(b.label), 3)
      ], 8, Yt))), 128))
    ], 2)) : S("", !0);
  }
}, _t = {};
function el(e, l) {
  return a(), r("div", {
    onClick: Z(() => {
    }, ["stop"])
  }, [
    k(e.$slots, "default")
  ]);
}
const Ul = /* @__PURE__ */ J(_t, [["render", el]]), tl = { class: "overflow-hidden rounded-xl shadow-full-box border border-border" }, ll = { class: "w-full border-collapse table-fixed bg-card overflow-hidden" }, nl = ["colspan", "rowspan"], Nl = {
  __name: "TableCard",
  props: {
    rows: Array,
    headerClasses: String
  },
  setup(e) {
    const l = e, t = (s) => ({
      width: s.width ? typeof s.width == "number" ? `${s.width}px` : s.width : void 0,
      height: s.height ? typeof s.height == "number" ? `${s.height}px` : s.height : void 0
    }), o = (s, c, u) => [
      `text-${s.align ?? "left"} p-2 border-border`,
      { "border-r": u !== l.rows[c].length - 1 },
      s.class
    ], n = (s) => [
      s === 0 && l.headerClasses ? l.headerClasses : "",
      "border-border",
      { "border-b": s !== l.rows.length - 1 }
    ], i = (s) => String.fromCharCode(65 + s);
    return (s, c) => (a(), r("div", tl, [
      d("table", ll, [
        d("tbody", null, [
          (a(!0), r(E, null, L(e.rows, (u, y) => (a(), r("tr", {
            key: "row-" + y,
            class: v(n(y))
          }, [
            (a(!0), r(E, null, L(u, (b, m) => (a(), r("td", {
              key: "cell-" + y + "-" + m,
              colspan: b.colspan || 1,
              rowspan: b.rowspan || 1,
              class: v(o(b, y, m)),
              style: ne(t(b))
            }, [
              k(s.$slots, `${i(m)}${y + 1}`, {}, () => [
                q(p(b.content), 1)
              ])
            ], 14, nl))), 128))
          ], 2))), 128))
        ])
      ])
    ]));
  }
}, ol = ["onClick"], Pl = {
  __name: "Tabs",
  props: /* @__PURE__ */ x({
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
    const l = $(e, "selectedTab");
    return (t, o) => (a(), r("div", null, [
      d("div", {
        class: v(["tab-container", { "justify-between": e.stretch }])
      }, [
        (a(!0), r(E, null, L(e.tabs, (n) => (a(), r("button", {
          key: n.name,
          class: v(["cursor-pointer", [{
            "text-error": n.error,
            "underline-offset-8 underline font-medium": n.name === l.value
          }, `text-${e.size}`]]),
          onClick: (i) => l.value = n.name,
          type: "button"
        }, p(n.label), 11, ol))), 128))
      ], 2),
      (a(!0), r(E, null, L(e.tabs, (n) => H((a(), r("div", {
        key: n.name
      }, [
        k(t.$slots, `tab-${n.name}`)
      ])), [
        [K, n.name === l.value]
      ])), 128))
    ]));
  }
}, Hl = {
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
    return (l, t) => (a(), r("div", {
      class: v(`py-1 px-4 rounded-${e.rounded} duration-100 text-center text-black text-${e.size} bg-${e.color}`)
    }, [
      k(l.$slots, "default")
    ], 2));
  }
}, al = { class: "flex items-center justify-between" }, sl = ["for"], rl = {
  key: 0,
  class: "text-xs text-secondary-text mr-1"
}, il = ["name", "placeholder", "value", "disabled", "maxlength", "rows"], ul = {
  key: 0,
  class: "text-error text-sm"
}, cl = {
  key: 1,
  class: "text-success text-sm"
}, Rl = {
  __name: "Textarea",
  props: /* @__PURE__ */ x({
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
  emits: /* @__PURE__ */ x(["focus", "blur", "keyPress", "input"], ["update:modelValue", "update:input"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = $(e, "modelValue"), i = $(e, "input"), s = D(t.modelValue), c = D(!1), u = M(
      () => t.variant === "filled" ? `bg-${t.color}` : "bg-transparent border border-border"
    ), y = (g) => {
      c.value = !0, o("focus", g);
    }, b = (g) => {
      c.value = !1, o("blur", g);
    }, m = (g) => {
      const C = g.target;
      s.value = C.value, n.value = C.value, o("input", g);
    };
    return O(
      () => t.modelValue,
      (g) => {
        s.value = g;
      }
    ), (g, C) => (a(), r("div", null, [
      d("div", al, [
        d("label", {
          for: e.name,
          class: "font-medium"
        }, p(e.label), 9, sl),
        e.maxlength ? (a(), r("p", rl, p(n.value?.length ?? 0) + " / " + p(e.maxlength), 1)) : S("", !0)
      ]),
      d("div", {
        class: v([
          "rounded-lg flex duration-300 max-h-48 overflow-auto",
          u.value,
          e.styles,
          {
            error: e.error,
            success: e.success,
            selected: c.value
          }
        ])
      }, [
        d("textarea", {
          class: v(["rounded-lg p-2 flex-grow bg-transparent outline-none max-w-full placeholder:text-secondary-text border-none", { "field-sizing-content": e.fieldSizingContent }]),
          name: e.name,
          placeholder: e.placeholder,
          value: n.value,
          disabled: e.disabled,
          onInput: m,
          onFocus: y,
          onBlur: b,
          onKeydown: C[0] || (C[0] = (V) => o("keyPress", V)),
          maxlength: e.maxlength,
          rows: e.rows,
          ref_key: "inputElement",
          ref: i
        }, null, 42, il)
      ], 2),
      e.error && typeof e.error != "boolean" ? (a(), r("p", ul, p(e.error), 1)) : e.success && typeof e.error != "boolean" ? (a(), r("p", cl, p(e.success), 1)) : S("", !0)
    ]));
  }
}, Ql = {
  __name: "Toggle",
  props: /* @__PURE__ */ x({
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
  emits: /* @__PURE__ */ x(["toggle"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = $(e, "modelValue"), i = () => {
      n.value = !n.value, o("toggle", n.value);
    }, s = M(
      () => n.value ? `bg-${t.activeColor}` : "bg-gray-300 dark:bg-gray-600"
    ), c = M(
      () => n.value ? "translate-x-6" : "translate-x-0"
    );
    return N(() => {
      n.value = n.value ?? t.value;
    }), (u, y) => (a(), r("div", {
      onClick: i,
      class: v([s.value, "cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300"])
    }, [
      d("div", {
        class: v([c.value, "bg-white dark:bg-gray-200 text-black text-sm flex justify-center items-center w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"])
      }, [
        e.icon ? (a(), F(f(T), {
          key: 0,
          icon: e.icon
        }, null, 8, ["icon"])) : S("", !0)
      ], 2)
    ], 2));
  }
}, dl = { class: "rounded-md bg-dropdown/80 text-dropdown-text p-1 text-xs text-nowrap" }, ql = {
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
    const l = e, t = D(!1), o = M(() => {
      let n;
      switch (l.position) {
        case "right":
          n = "left-full pl-4";
          break;
      }
      return n;
    });
    return (n, i) => (a(), r("div", {
      class: "relative flex items-center",
      onMouseenter: i[0] || (i[0] = (s) => t.value = !0),
      onMouseleave: i[1] || (i[1] = (s) => t.value = !1)
    }, [
      k(n.$slots, "default"),
      h(U, { name: "fade" }, {
        default: z(() => [
          t.value ? (a(), r("div", {
            key: 0,
            class: v([o.value, "absolute delay-1000 z-50"])
          }, [
            d("div", dl, [
              k(n.$slots, "tooltip-content", {}, () => [
                q(p(e.text), 1)
              ])
            ])
          ], 2)) : S("", !0)
        ]),
        _: 3
      })
    ], 32));
  }
}, Wl = {
  install(e) {
    const l = be();
    e.use(l);
  }
};
export {
  xl as Accordion,
  Ne as AttachmentList,
  $l as Avatar,
  Sl as AvatarGroup,
  kl as Badge,
  qe as Button,
  ie as Card,
  wl as Checkbox,
  Cl as ClickableTag,
  Vl as CurrencyInput,
  zl as DatePicker,
  ft as DragAndDropFiles,
  Bl as DropdownMenu,
  Y as DropdownOptions,
  rt as Dropzone,
  de as FileButton,
  Ml as FlashMessage,
  _ as IconButton,
  Dl as Loader,
  Tt as MediaCarousel,
  Tl as MediaInput,
  Fl as Modal,
  Il as Multiselect,
  El as NumberInput,
  jl as Paragraph,
  Ll as Radio,
  Al as Select,
  Ol as Stepper,
  Ul as StopPropagation,
  Nl as TableCard,
  Pl as Tabs,
  Hl as Tag,
  Rl as Textarea,
  W as Textbox,
  Ql as Toggle,
  ql as Tooltip,
  Wl as default,
  ce as useFiles,
  ue as useIsHandheld
};
