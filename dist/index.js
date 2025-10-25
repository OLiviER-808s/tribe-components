import { VueFinalModal as ye, useModal as pe, ModalsContainer as be, createVfm as he } from "vue-final-modal";
import { createElementBlock as r, openBlock as a, normalizeClass as v, renderSlot as x, mergeModels as $, useModel as k, createBlock as I, createCommentVNode as w, withCtx as M, createElementVNode as d, withDirectives as H, createVNode as h, toDisplayString as b, Transition as U, unref as f, vShow as K, ref as T, onMounted as N, onUnmounted as te, computed as B, watch as O, Fragment as E, renderList as j, normalizeStyle as le, createTextVNode as q, withModifiers as Z, onBeforeUnmount as ne, useSlots as P, nextTick as oe, createSlots as R, resolveComponent as X, vModelText as xe, inject as $e, provide as Se } from "vue";
import { FontAwesomeIcon as D } from "@fortawesome/vue-fontawesome";
import { faChevronDown as ee, faHeadphones as ke, faVideoCamera as we, faFile as ae, faXmark as J, faCheck as se, faCalendar as Ce, faUpload as Ve, faPlus as ze, faSort as Me } from "@fortawesome/free-solid-svg-icons";
import Be from "vuedraggable";
import { v4 as re } from "uuid";
import Te from "@vuepic/vue-datepicker";
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
      x(l.$slots, "default")
    ], 2));
  }
}, De = { class: "text-xl font-medium" }, Ie = { class: "pt-4" }, Fe = { key: 1 }, Ee = { class: "p-2" }, Vl = {
  __name: "Accordion",
  props: /* @__PURE__ */ $({
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
    return (t, o) => e.variant === "card" ? (a(), I(ie, { key: 0 }, {
      default: M(() => [
        d("div", {
          onClick: o[0] || (o[0] = (n) => l.value = !l.value),
          class: "flex items-center justify-between gap-2 cursor-pointer"
        }, [
          d("h3", De, b(e.title), 1),
          h(U, { name: "rotate" }, {
            default: M(() => [
              d("div", {
                class: v({ rotated: l.value, "not-rotated": !l.value })
              }, [
                h(f(D), {
                  icon: f(ee),
                  size: "lg"
                }, null, 8, ["icon"])
              ], 2)
            ]),
            _: 1
          })
        ]),
        H(d("div", Ie, [
          x(t.$slots, "default")
        ], 512), [
          [K, l.value]
        ])
      ]),
      _: 3
    })) : e.variant === "minimal" ? (a(), r("div", Fe, [
      d("div", {
        onClick: o[1] || (o[1] = (n) => l.value = !l.value),
        class: "p-2 border-b-2 border-base-text flex items-center justify-between gap-2 cursor-pointer"
      }, [
        d("h3", null, b(e.title), 1),
        h(U, { name: "rotate" }, {
          default: M(() => [
            d("div", {
              class: v({ rotated: l.value, "not-rotated": !l.value })
            }, [
              h(f(D), { icon: f(ee) }, null, 8, ["icon"])
            ], 2)
          ]),
          _: 1
        })
      ]),
      H(d("div", Ee, [
        x(t.$slots, "default")
      ], 512), [
        [K, l.value]
      ])
    ])) : w("", !0);
  }
}, ue = (e = 800) => {
  const l = T(innerWidth < e), t = () => l.value = innerWidth < e;
  return N(() => addEventListener("resize", t)), te(() => removeEventListener("resize", t)), l;
}, ce = () => ({ readableFileSize: (t) => {
  const o = ["Bytes", "KB", "MB", "GB", "TB"], n = Math.floor(Math.log(t) / Math.log(1024));
  return `${Math.round(t / Math.pow(1024, n))} ${o[n]}`;
}, formatFiles: (t) => t?.map((o) => o.uuid ? o : {
  name: o.name,
  size: o.size,
  uuid: re(),
  preview: URL.createObjectURL(o),
  type: o.type?.split("/")[0]
}) }), je = (e, l, t) => {
  if (l < 0 || l >= e.length || t < 0 || t >= e.length)
    throw new Error("Invalid indices");
  const [o] = e.splice(l, 1);
  return e.splice(t, 0, o), e;
}, Le = (e) => Math.floor(e) !== e && e.toString().split(".")[1]?.length || 0, Ae = { class: "flex justify-center gap-2 w-full p-4" }, Oe = ["onMouseenter"], Ue = ["onClick"], Ne = ["src", "alt"], Pe = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-secondary-text bg-card rounded-md"
}, He = ["onClick"], Re = {
  __name: "AttachmentList",
  props: /* @__PURE__ */ $({
    size: String
  }, {
    files: { type: Array, required: !0 },
    filesModifiers: {},
    selectedIdx: { default: 0 },
    selectedIdxModifiers: {}
  }),
  emits: ["update:files", "update:selectedIdx"],
  setup(e) {
    const l = e, t = k(e, "files"), o = k(e, "selectedIdx"), n = ue(), { formatFiles: i } = ce(), s = T(-1), c = T(i(l.files)), u = (m) => {
      t.value = t.value.filter((y, C) => C !== m), o.value > m && (o.value -= 1);
    }, g = ({ moved: { oldIndex: m, newIndex: y } }) => {
      t.value = je(t.value, m, y), o.value === m ? o.value = y : o.value > m && o.value <= y ? o.value-- : o.value < m && o.value >= y && o.value++;
    }, p = B(() => l.size === "lg" ? "w-16 h-16" : "w-14 h-14");
    return O(t, () => c.value = i(l.files)), (m, y) => (a(), r("div", Ae, [
      x(m.$slots, "additional-items-before"),
      h(f(Be), {
        modelValue: c.value,
        "onUpdate:modelValue": y[1] || (y[1] = (C) => c.value = C),
        "item-key": "uuid",
        "swap-threshold": 0.65,
        animation: 200,
        class: "flex gap-2",
        onChange: g
      }, {
        item: M(({ element: C, index: V }) => [
          d("div", {
            class: v(`relative border-secondary rounded-md ${p.value} ${o.value === V ? "border-3 bg-secondary" : ""}`),
            onMouseenter: (A) => s.value = V,
            onMouseleave: y[0] || (y[0] = (A) => s.value = -1)
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
              }, null, 8, Ne)) : (a(), r("span", Pe, [
                C.type === "audio" ? (a(), I(f(D), {
                  key: 0,
                  icon: f(ke),
                  size: "lg"
                }, null, 8, ["icon"])) : C.type === "video" ? (a(), I(f(D), {
                  key: 1,
                  icon: f(we),
                  size: "lg"
                }, null, 8, ["icon"])) : (a(), I(f(D), {
                  key: 2,
                  icon: f(ae),
                  size: "lg"
                }, null, 8, ["icon"]))
              ]))
            ], 8, Ue),
            s.value === V || f(n) ? (a(), r("button", {
              key: 0,
              onClick: (A) => u(V),
              class: "absolute cursor-pointer top-0 right-0 text-secondary-text bg-card/80 rounded-full w-5 h-5 flex justify-center items-center"
            }, [
              h(f(D), {
                icon: f(J),
                size: "xs"
              }, null, 8, ["icon"])
            ], 8, He)) : w("", !0)
          ], 42, Oe)
        ]),
        _: 1
      }, 8, ["modelValue"]),
      x(m.$slots, "additional-items-after")
    ]));
  }
}, Qe = ["src"], zl = {
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
    }, null, 10, Qe));
  }
}, qe = { class: "flex items-center" }, We = ["src", "alt"], Ml = {
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
    return (l, t) => (a(), r("div", qe, [
      (a(!0), r(E, null, j(e.avatars, (o, n) => (a(), r("img", {
        key: n,
        src: o,
        alt: `avatar ${n + 1}`,
        class: v(`${e.width} rounded-full relative`),
        style: le({ marginLeft: n === 0 ? "0" : `-${e.overlap}px` })
      }, null, 14, We))), 128))
    ]));
  }
}, Bl = {
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
      x(l.$slots, "default", {}, () => [
        q(b(e.content), 1)
      ])
    ], 2));
  }
}, Ge = ["disabled", "type"], Ke = {
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
    const t = e, o = l, n = T(!1), i = (u) => {
      t.href && window.open(t.href), o("click", u);
    }, s = B(() => t.color === "base" ? "secondary-text" : t.color), c = B(() => {
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
    return (u, g) => (a(), r("button", {
      onClick: i,
      onMousedown: g[0] || (g[0] = (p) => n.value = !0),
      onMouseup: g[1] || (g[1] = (p) => n.value = !1),
      class: v(c.value),
      disabled: e.disabled,
      type: e.type
    }, [
      x(u.$slots, "default")
    ], 42, Ge));
  }
}, Ze = { class: "flex items-center gap-2" }, Xe = ["for"], Je = {
  key: 0,
  class: "text-error text-sm"
}, Tl = {
  __name: "Checkbox",
  props: /* @__PURE__ */ $({
    name: String,
    error: String
  }, {
    modelValue: { default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ $(["toggle"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = k(e, "modelValue"), o = l, n = () => {
      t.value = !t.value, o("toggle", t.value);
    };
    return (i, s) => (a(), r("div", null, [
      d("div", Ze, [
        d("button", {
          onClick: s[0] || (s[0] = (c) => n()),
          type: "button",
          class: v(["rounded-sm cursor-pointer border-secondary border-2 w-4 h-4 flex items-center justify-center text-black", { "bg-secondary": t.value, "hover:bg-secondary/30": !t.value }])
        }, [
          t.value ? (a(), I(f(D), {
            key: 0,
            icon: f(se),
            size: "xs"
          }, null, 8, ["icon"])) : w("", !0)
        ], 2),
        d("label", { for: e.name }, [
          x(i.$slots, "default")
        ], 8, Xe)
      ]),
      e.error ? (a(), r("p", Je, b(e.error), 1)) : w("", !0)
    ]));
  }
}, Dl = {
  __name: "ClickableTag",
  props: /* @__PURE__ */ $({
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
  emits: /* @__PURE__ */ $(["select"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = k(e, "modelValue"), i = B(() => `${t.styles} py-1 px-3 duration-100 text-center border-2 rounded-${t.rounded} text-${t.size} text-${t.color} border-${t.color} hover:bg-${t.color}/10`), s = B(() => `${t.styles} py-1 px-3 duration-100 text-center border-2 rounded-${t.rounded} text-${t.size} bg-${t.color} border-${t.color} text-black`);
    return (c, u) => (a(), r("button", {
      onClick: u[0] || (u[0] = (g) => o("select")),
      class: v(n.value ? s.value : i.value)
    }, [
      x(c.$slots, "default")
    ], 2));
  }
}, Ye = ["for"], _e = {
  key: 0,
  class: "flex justify-center items-center w-10 rounded-l-md"
}, et = { key: 0 }, tt = { key: 1 }, lt = {
  key: 2,
  class: "text-secondary-text"
}, nt = ["name", "type", "placeholder", "value", "disabled"], ot = {
  key: 0,
  class: "text-error text-sm"
}, at = {
  key: 1,
  class: "text-success text-sm"
}, W = {
  __name: "Textbox",
  props: /* @__PURE__ */ $({
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
  emits: /* @__PURE__ */ $(["input", "focus", "blur"], ["update:modelValue", "update:input"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = k(e, "modelValue"), i = k(e, "input"), s = T(!1), c = B(
      () => t.variant === "filled" ? `bg-${t.color}` : "bg-transparent border border-border"
    ), u = (m) => {
      s.value = !0, o("input", m);
    }, g = (m) => {
      s.value = !1, o("blur", m);
    }, p = (m) => {
      n.value = m.target.value, o("input", m);
    };
    return (m, y) => (a(), r("div", null, [
      d("label", {
        for: e.name,
        class: v(e.labelStyles)
      }, b(e.label), 11, Ye),
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
        e.icon ? (a(), r("div", _e, [
          h(f(D), {
            icon: e.icon,
            size: e.size,
            class: "text-secondary-text"
          }, null, 8, ["icon", "size"])
        ])) : w("", !0),
        d("div", {
          class: v(["flex-grow w-full flex items-center gap-1 flex-wrap p-2", { "pl-0": e.icon }])
        }, [
          x(m.$slots, "left-section"),
          e.disabled ? (a(), r("div", {
            key: 0,
            class: v([{ "pl-0": e.icon, "text-sm": e.size === "sm" }, "flex-grow overflow-hidden whitespace-nowrap"])
          }, [
            n.value ? (a(), r("span", et, b(n.value), 1)) : e.value ? (a(), r("span", tt, b(e.value), 1)) : e.placeholder ? (a(), r("span", lt, b(e.placeholder), 1)) : w("", !0)
          ], 2)) : (a(), r("input", {
            key: 1,
            ref_key: "inputElement",
            ref: i,
            name: e.name,
            type: e.type,
            placeholder: e.placeholder,
            value: n.value ?? e.value,
            disabled: e.disabled,
            onInput: p,
            onFocus: u,
            onBlur: g,
            class: v([{ "placeholder:text-sm": e.size === "sm" }, "p-0 flex-grow border-none outline-none rounded-lg bg-transparent placeholder:text-secondary-text"])
          }, null, 42, nt))
        ], 2),
        x(m.$slots, "right-section")
      ], 2),
      e.error && typeof e.error != "boolean" ? (a(), r("p", ot, b(e.error), 1)) : e.success && typeof e.error != "boolean" ? (a(), r("p", at, b(e.success), 1)) : w("", !0)
    ]));
  }
}, Il = {
  __name: "CurrencyInput",
  props: /* @__PURE__ */ $({
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
    const l = e, t = k(e, "modelValue"), o = (i) => {
      let s = parseFloat(i.target.value.replace(/[^\d.-]/g, ""));
      Le(s) > 0 && (s = (Math.round(s * 100) / 100).toFixed(2)), t.value = s;
    }, n = B(() => {
      if (t.value)
        return `${l.currencySymbol}${t.value}`;
    });
    return (i, s) => (a(), I(W, {
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
}, st = (e) => `${Q(e)} ${formatTimestamp24Hour(e)}`, rt = (e) => `${Q(e[0])} - ${Q(e[1])}`, it = { class: "font-medium" }, ut = {
  key: 0,
  class: "text-error text-sm"
}, Fl = {
  __name: "DatePicker",
  props: /* @__PURE__ */ $({
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
    const l = e, t = k(e, "modelValue"), o = T(null), n = B(() => l.range ? rt : l.includeTime ? st : Q);
    return (i, s) => (a(), r("div", {
      class: v(e.styles)
    }, [
      d("label", it, b(e.label), 1),
      h(f(Te), {
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
        "dp-input": M(({ value: c }) => [
          h(W, {
            placeholder: e.placeholder,
            value: c,
            icon: f(Ce),
            variant: e.variant,
            size: e.size,
            color: e.color,
            error: !!e.error
          }, null, 8, ["placeholder", "value", "icon", "variant", "size", "color", "error"])
        ]),
        _: 1
      }, 8, ["modelValue", "format", "disabled", "enable-time-picker", "range", "min-date", "max-date"]),
      e.error ? (a(), r("p", ut, b(e.error), 1)) : w("", !0)
    ], 2));
  }
}, ct = {
  __name: "Dropzone",
  props: {
    modelValue: { default: !1 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ $(["drop"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = l, o = k(e, "modelValue"), n = (i) => {
      o.value = !1, t("drop", i);
    };
    return (i, s) => (a(), r("div", {
      onDragover: s[0] || (s[0] = Z((c) => o.value = !0, ["prevent"])),
      onDragleave: s[1] || (s[1] = (c) => o.value = !1),
      onDrop: Z(n, ["prevent"])
    }, [
      x(i.$slots, "default", { isDragOver: o.value })
    ], 32));
  }
}, dt = ["multiple", "accept"], de = {
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
    const t = e, o = l, n = T(null), i = () => {
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
      }, null, 40, dt),
      d("div", { onClick: i }, [
        x(s.$slots, "default")
      ])
    ]));
  }
}, mt = {
  key: 0,
  class: "font-medium mb-1"
}, ft = {
  key: 0,
  class: "mb-2"
}, vt = { class: "font-medium" }, gt = {
  key: 0,
  class: "text-error text-sm mt-1"
}, yt = {
  __name: "DragAndDropFiles",
  props: /* @__PURE__ */ $({
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
    const l = k(e, "modelValue"), t = (i) => l.value = Array.from(i), o = (i) => t(i.dataTransfer.files), n = (i) => t(i.target.files);
    return (i, s) => (a(), r("div", null, [
      e.label ? (a(), r("p", mt, b(e.label), 1)) : w("", !0),
      d("div", null, [
        h(de, {
          onChange: n,
          accept: "image/*"
        }, {
          default: M(() => [
            h(ct, { onDrop: o }, {
              default: M(({ isDragOver: c }) => [
                d("div", {
                  class: v(["cursor-pointer duration-300 text-center border-2 border-dashed py-6 px-4 rounded-lg", {
                    "bg-secondary/30": c,
                    "text-secondary border-secondary": !e.error,
                    "text-error border-error": e.error
                  }])
                }, [
                  e.withIcon ? (a(), r("div", ft, [
                    h(f(D), {
                      icon: f(Ve),
                      size: "lg"
                    }, null, 8, ["icon"])
                  ])) : w("", !0),
                  d("p", vt, b(e.dropText), 1)
                ], 2)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e.error ? (a(), r("p", gt, b(e.error), 1)) : w("", !0)
      ])
    ]));
  }
}, me = () => {
  const e = T(!1), l = T(null), t = () => e.value = !0, o = () => e.value = !1, n = (i) => {
    l.value.contains(i.target) || o();
  };
  return N(() => {
    document.addEventListener("mousedown", n);
  }), ne(() => {
    document.removeEventListener("mousedown", n);
  }), { dropdownOpen: e, dropdownContainer: l, open: t, close: o };
}, Y = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [o, n] of l)
    t[o] = n;
  return t;
}, pt = ["onClick", "onMouseover"], bt = { key: 1 }, ht = {
  key: 0,
  class: "text-xs text-secondary-text"
}, xt = {
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
    const t = e, o = l, n = P(), i = T(-1), s = T("top-full"), c = T(null), u = (y) => o("select", y), g = () => {
      const y = t.container.getBoundingClientRect(), C = window.innerHeight || document.documentElement.clientHeight;
      s.value = y.bottom + 150 > C ? "bottom-full" : "top-full";
    }, p = () => {
      s.value = "top-full";
    }, m = async (y) => {
      i.value += y, i.value < 0 ? i.value = t.options.length - 1 : i.value >= t.options.length && (i.value = 0), await oe();
      const V = c.value?.querySelectorAll("div > div")?.[i.value];
      V && V.scrollIntoView({ block: "nearest", behavior: "smooth" });
    };
    return G("ArrowDown", (y) => {
      t.open && t.options.length > 0 && (y.preventDefault(), m(1));
    }), G("ArrowUp", (y) => {
      t.open && t.options.length > 0 && (y.preventDefault(), m(-1));
    }), G("Enter", (y) => {
      t.open && t.options.length > 0 ? (y.preventDefault(), u(t.options[i.value])) : t.acceptsEmptySelection && (y.preventDefault(), u());
    }), O(() => t.open, () => {
      t.open || (i.value = -1);
    }), (y, C) => (a(), I(U, {
      name: s.value === "top-full" ? "slide-down" : "slide-up",
      onBeforeEnter: g,
      onAfterLeave: p
    }, {
      default: M(() => [
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
          (a(!0), r(E, null, j(e.options, (V, A) => (a(), r("div", {
            key: e.trackBy ? e.options[e.trackBy] : V,
            onClick: (L) => u(V),
            onMouseover: (L) => i.value = A,
            class: v(["text-md py-2 px-6 rounded-md text-left", { "bg-dropdown-select": i.value === A }])
          }, [
            f(n).option ? x(y.$slots, "option", {
              key: 0,
              option: V
            }, void 0, !0) : (a(), r("div", bt, [
              q(b(e.optionLabel ? V[e.optionLabel] : V) + " ", 1),
              V[e.optionDescription] ? (a(), r("div", ht, b(V[e.optionDescription]), 1)) : w("", !0)
            ]))
          ], 42, pt))), 128))
        ], 2)) : w("", !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}, _ = /* @__PURE__ */ Y(xt, [["__scopeId", "data-v-32652279"]]), El = {
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
        onClick: u[0] || (u[0] = (g) => n.value = !f(n))
      }, [
        x(c.$slots, "trigger")
      ]),
      h(_, {
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
          fn: M(({ option: g }) => [
            x(c.$slots, "option", { option: g })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["container", "options", "open", "option-label", "track-by", "direction"])
    ], 512));
  }
}, fe = {
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
    const t = e, o = l, n = B(() => {
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
    return (i, s) => (a(), I(Ke, {
      styles: `${e.styles} ${n.value} flex justify-center items-center !px-0 !py-0`,
      href: e.href,
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      variant: e.variant,
      "hover-effects": e.hoverEffects,
      onClick: s[0] || (s[0] = (c) => o("click", c))
    }, {
      default: M(() => [
        h(f(D), {
          size: e.size,
          icon: e.icon
        }, null, 8, ["size", "icon"])
      ]),
      _: 1
    }, 8, ["styles", "href", "type", "color", "disabled", "variant", "hover-effects"]));
  }
}, $t = { class: "flex items-center justify-center" }, St = {
  key: 0,
  class: "text-center font-medium mt-2"
}, kt = {
  __name: "Loader",
  props: {
    label: String
  },
  setup(e) {
    return (l, t) => (a(), r("div", $t, [
      d("div", null, [
        t[0] || (t[0] = d("div", { class: "spinner" }, null, -1)),
        e.label ? (a(), r("p", St, b(e.label), 1)) : w("", !0)
      ])
    ]));
  }
}, jl = /* @__PURE__ */ Y(kt, [["__scopeId", "data-v-d8288a84"]]), wt = { class: "flex items-center justify-center" }, Ct = { key: 0 }, Vt = ["src", "alt"], zt = { key: 1 }, Mt = ["src"], Bt = { key: 2 }, Tt = ["src"], Dt = {
  key: 3,
  class: "text-center"
}, It = {
  __name: "MediaCarousel",
  props: /* @__PURE__ */ $({
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
    const l = k(e, "selectedIdx"), t = ue(), o = () => {
      const n = document.querySelector("swiper-container").swiper;
      l.value = n.activeIndex;
    };
    return O(l, () => {
      const n = document.querySelector("swiper-container")?.swiper;
      l.value !== n.activeIndex && n.slideTo(l.value);
    }), (n, i) => {
      const s = X("swiper-slide"), c = X("swiper-container");
      return a(), I(c, {
        "slides-per-view": 1,
        "centered-slides": !0,
        navigation: !f(t),
        onSwiperslidechange: o
      }, {
        default: M(() => [
          (a(!0), r(E, null, j(e.files, (u) => (a(), I(s, null, {
            default: M(() => [
              d("div", wt, [
                u.type === "image" ? (a(), r("div", Ct, [
                  d("img", {
                    src: u.preview,
                    alt: u.name,
                    class: v(e.maxMediaHeight)
                  }, null, 10, Vt)
                ])) : u.type === "video" ? (a(), r("div", zt, [
                  d("video", {
                    src: u.preview,
                    controls: "",
                    class: v(e.maxMediaHeight)
                  }, null, 10, Mt)
                ])) : u.type === "audio" ? (a(), r("div", Bt, [
                  d("audio", {
                    src: u.preview,
                    controls: ""
                  }, null, 8, Tt)
                ])) : (a(), r("div", Dt, [
                  h(f(D), {
                    icon: f(ae),
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
}, Et = {
  key: 1,
  class: "mb-2"
}, jt = {
  key: 0,
  class: "text-error text-sm mt-1"
}, Ll = {
  __name: "MediaInput",
  props: /* @__PURE__ */ $({
    label: String,
    placeholder: String,
    error: String
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = k(e, "modelValue"), t = T(0), { formatFiles: o } = ce(), n = (s) => l.value.push(...s.target.files), i = B(() => o(l.value));
    return (s, c) => (a(), r("div", null, [
      e.label ? (a(), r("label", Ft, b(e.label), 1)) : w("", !0),
      l.value.length > 0 ? (a(), r("div", Et, [
        h(It, {
          "selected-idx": t.value,
          "onUpdate:selectedIdx": c[0] || (c[0] = (u) => t.value = u),
          files: i.value
        }, null, 8, ["selected-idx", "files"]),
        h(Re, {
          "selected-idx": t.value,
          "onUpdate:selectedIdx": c[1] || (c[1] = (u) => t.value = u),
          files: l.value,
          "onUpdate:files": c[2] || (c[2] = (u) => l.value = u)
        }, {
          "additional-items-after": M(() => [
            h(de, {
              onChange: n,
              accept: "image/*"
            }, {
              default: M(() => [
                h(fe, {
                  icon: f(ze),
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
        e.error ? (a(), r("p", jt, b(e.error), 1)) : w("", !0)
      ])) : (a(), I(yt, {
        key: 2,
        "with-icon": "",
        "drop-text": e.placeholder,
        modelValue: l.value,
        "onUpdate:modelValue": c[3] || (c[3] = (u) => l.value = u),
        error: e.error
      }, null, 8, ["drop-text", "modelValue", "error"]))
    ]));
  }
}, Lt = {
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
    return te(() => t("close")), (o, n) => (a(), I(f(ye), {
      "overlay-transition": "vfm-fade",
      "content-transition": "vfm-fade",
      class: "flex justify-center items-center",
      "content-class": e.contentClass
    }, {
      default: M(() => [
        h(ie, { styles: "w-full" }, {
          default: M(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["content-class"]));
  }
}, Al = {
  __name: "Modal",
  props: /* @__PURE__ */ $({
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
    const l = e, t = k(e, "modelValue"), o = P(), n = pe({
      component: Lt,
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
    }), (i, s) => (a(), I(f(be)));
  }
}, At = {
  key: 0,
  class: "text-error text-sm"
}, Ol = {
  __name: "Multiselect",
  props: /* @__PURE__ */ $({
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
  emits: /* @__PURE__ */ $(["select", "focus", "blur"], ["update:modelValue", "update:searchQuery", "update:input"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = k(e, "modelValue"), i = k(e, "searchQuery"), s = k(e, "input"), c = P(), u = T(!1), g = T(null), p = B(() => t.acceptsDuplicates ? t.options : t.options.filter((S) => !n.value.includes(t.formatResult(S)))), m = (S) => {
      n.value.push(t.formatResult(S)), i.value = "", o("select", S);
    }, y = (S) => {
      n.value = n.value.filter((z, F) => F !== S);
    }, C = () => {
      u.value = !0;
    }, V = () => {
      u.value = !1;
    }, A = () => {
      t.searchable || (u.value ? V() : C());
    }, L = (S) => {
      g.value.contains(S.target) || V();
    };
    return N(() => {
      document.addEventListener("mousedown", L);
    }), ne(() => {
      document.removeEventListener("mousedown", L);
    }), O(i, () => {
      t.searchable && i.value.length > 0 && C();
    }), (S, z) => (a(), r("div", {
      class: v([e.styles])
    }, [
      d("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: g
      }, [
        d("div", {
          onClick: z[4] || (z[4] = (F) => A()),
          class: v({ "cursor-pointer": !e.searchable })
        }, [
          h(W, {
            modelValue: i.value,
            "onUpdate:modelValue": z[0] || (z[0] = (F) => i.value = F),
            input: s.value,
            "onUpdate:input": z[1] || (z[1] = (F) => s.value = F),
            label: e.label,
            placeholder: e.placeholder,
            disabled: !e.searchable,
            icon: e.icon,
            error: !!e.error,
            size: e.size,
            color: e.color,
            variant: e.variant,
            styles: e.textboxStyles,
            onFocus: z[2] || (z[2] = (F) => o("focus", F)),
            onBlur: z[3] || (z[3] = (F) => o("blur", F))
          }, {
            "left-section": M(() => [
              (a(!0), r(E, null, j(n.value, (F, ge) => (a(), r("div", {
                key: e.optionLabel[e.trackBy]
              }, [
                x(S.$slots, "selectedTag", {
                  option: F,
                  deselect: () => y(ge)
                })
              ]))), 128))
            ]),
            _: 3
          }, 8, ["modelValue", "input", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        h(_, {
          container: g.value,
          options: p.value,
          "option-label": e.optionLabel,
          "track-by": e.trackBy,
          open: u.value,
          "accepts-empty-selection": e.acceptsEmptySelection,
          onSelect: m
        }, R({ _: 2 }, [
          f(c).option ? {
            name: "option",
            fn: M(({ option: F }) => [
              x(S.$slots, "option", { option: F })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      e.error && typeof e.error != "boolean" ? (a(), r("p", At, b(e.error), 1)) : w("", !0)
    ], 2));
  }
}, Ot = { class: "font-medium" }, Ut = {
  key: 0,
  class: "text-text-secondary flex justify-center items-center w-10 rounded-l-md"
}, Nt = ["placeholder", "min", "max", "disabled"], Pt = {
  key: 0,
  class: "text-error text-sm"
}, Ht = {
  key: 1,
  class: "text-error text-sm"
}, Ul = {
  __name: "NumberInput",
  props: /* @__PURE__ */ $({
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
    const l = e, t = k(e, "modelValue"), o = B(
      () => l.variant === "filled" ? `bg-${l.color}` : "bg-transparent border border-secondary-text"
    ), n = B(() => l.modelValue > l.max ? `Value must be ${l.max} or less.` : l.modelValue < l.min ? `Value must be ${l.min} or more.` : !1);
    return (i, s) => (a(), r("div", null, [
      d("h4", Ot, b(e.label), 1),
      d("div", {
        class: v(["rounded-lg flex h-10 items-center", o.value, e.styles, { error: n.value || e.error, "px-2": !e.icon }])
      }, [
        e.icon ? (a(), r("div", Ut, [
          h(f(D), {
            icon: e.icon,
            size: "1x",
            class: "text-secondary-text"
          }, null, 8, ["icon"])
        ])) : w("", !0),
        H(d("input", {
          "onUpdate:modelValue": s[0] || (s[0] = (c) => t.value = c),
          placeholder: e.placeholder,
          type: "number",
          min: e.min,
          max: e.max,
          disabled: e.disabled,
          class: "flex-grow w-full py-2 px-0 border-none outline-none rounded-lg placeholder:text-secondary-text bg-transparent appearance-none"
        }, null, 8, Nt), [
          [xe, t.value]
        ])
      ], 2),
      n.value ? (a(), r("p", Pt, b(n.value), 1)) : e.error && typeof e.error == "string" ? (a(), r("p", Ht, b(e.error), 1)) : w("", !0)
    ]));
  }
}, Nl = {
  __name: "Paragraph",
  props: {
    text: String,
    styles: String,
    limit: Number,
    includeWhitespace: Boolean
  },
  setup(e) {
    const l = e, t = B(() => l.limit ? `${l.text.substring(0, l.limit)}${l.text.length > l.limit ? "..." : ""}` : l.text);
    return (o, n) => (a(), r("p", {
      class: v([e.styles, { "whitespace-pre-wrap": e.includeWhitespace }])
    }, b(t.value), 3));
  }
}, Rt = ["name", "value", "checked"], Qt = { class: "rounded-full border-2 border-secondary flex items-center justify-center h-4 w-4" }, Pl = {
  __name: "Radio",
  props: /* @__PURE__ */ $({
    value: [String, Boolean],
    label: String,
    name: String,
    modelValue: String
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ $(["select"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = k(e, "modelValue"), i = T(!1), s = B(() => t.modelValue === t.value), c = (u) => {
      n.value = t.value, o("select", u);
    };
    return (u, g) => (a(), r("label", {
      class: "flex items-center gap-3 relative cursor-pointer",
      onMouseenter: g[1] || (g[1] = (p) => i.value = !0),
      onMouseleave: g[2] || (g[2] = (p) => i.value = !1)
    }, [
      d("input", {
        class: "absolute opacity-0 cursor-pointer",
        type: "radio",
        name: e.name,
        value: e.value,
        checked: s.value,
        onChange: g[0] || (g[0] = (p) => c(p))
      }, null, 40, Rt),
      d("span", Qt, [
        d("span", {
          class: v(["rounded-full h-2 w-2", { "bg-secondary": i.value || s.value }])
        }, null, 2)
      ]),
      d("span", null, b(e.label), 1)
    ], 32));
  }
}, qt = { class: "flex items-center pr-1" }, Wt = { class: "flex items-center pr-2 text-secondary-text" }, Gt = {
  key: 0,
  class: "text-error text-sm"
}, Hl = {
  __name: "Select",
  props: /* @__PURE__ */ $({
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
  emits: /* @__PURE__ */ $(["select", "blur", "focus"], ["update:modelValue", "update:searchQuery", "update:input"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = k(e, "modelValue"), i = k(e, "searchQuery"), s = k(e, "input"), c = P(), { dropdownOpen: u, dropdownContainer: g, open: p, close: m } = me(), y = (L) => {
      const S = t.formatResult(L);
      n.value = S, o("select", S), t.optionLabel && (i.value = L[t.optionLabel]), oe(m);
    }, C = (L) => {
      L.stopPropagation(), n.value = null, i.value = "";
    }, V = () => {
      t.searchable || (u.value ? m() : p());
    }, A = () => n.value && t.optionLabel ? n.value[t.optionLabel] : n.value ? n.value : null;
    return O(i, () => {
      t.searchable && i.value.length > 0 ? p() : t.searchable && m();
    }), (L, S) => (a(), r("div", {
      class: v([e.styles])
    }, [
      d("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: g
      }, [
        d("div", {
          onClick: S[5] || (S[5] = (z) => V()),
          class: v({ "cursor-pointer": !e.searchable })
        }, [
          h(W, {
            modelValue: i.value,
            "onUpdate:modelValue": S[1] || (S[1] = (z) => i.value = z),
            input: s.value,
            "onUpdate:input": S[2] || (S[2] = (z) => s.value = z),
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
            onFocus: S[3] || (S[3] = (z) => o("focus", z)),
            onBlur: S[4] || (S[4] = (z) => o("blur", z))
          }, R({ _: 2 }, [
            e.lockOnSelect && e.searchable && n.value ? {
              name: "right-section",
              fn: M(() => [
                d("div", qt, [
                  h(fe, {
                    icon: f(J),
                    onClick: S[0] || (S[0] = (z) => C()),
                    variant: "subtle",
                    color: "base",
                    size: e.size
                  }, null, 8, ["icon", "size"])
                ])
              ]),
              key: "0"
            } : e.searchable ? void 0 : {
              name: "right-section",
              fn: M(() => [
                d("div", Wt, [
                  h(f(D), {
                    icon: f(Me),
                    size: e.size
                  }, null, 8, ["icon", "size"])
                ])
              ]),
              key: "1"
            }
          ]), 1032, ["modelValue", "input", "value", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        h(_, {
          container: f(g),
          options: e.options,
          "option-label": e.optionLabel,
          "track-by": e.trackBy,
          open: f(u),
          "accepts-empty-selection": e.acceptsEmptySelection,
          onSelect: y
        }, R({ _: 2 }, [
          f(c).option ? {
            name: "option",
            fn: M(({ option: z }) => [
              x(L.$slots, "option", { option: z })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      e.error && typeof e.error != "boolean" ? (a(), r("p", Gt, b(e.error), 1)) : w("", !0)
    ], 2));
  }
}, Kt = {
  key: 0,
  class: "w-full"
}, Zt = { class: "flex justify-between items-center gap-2 px-4" }, Xt = ["onClick"], Jt = { class: "flex justify-between items-center mt-1 px-3" }, Yt = ["onClick"], _t = ["onClick"], Rl = {
  __name: "Stepper",
  props: /* @__PURE__ */ $({
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
    const l = e, t = k(e, "modelValue"), o = B(() => l.steps.findIndex((u) => u.value === t.value)), n = B(() => l.steps.map((u, g) => g < o.value ? { ...u, status: "completed" } : g === o.value ? { ...u, status: "in-progress" } : { ...u, status: "uncompleted" })), i = (u) => u.status === "uncompleted" || u.status !== "in-progress" && l.variant === "minimalist" ? "text-secondary-text bg-card-accent" : `text-${l.color} bg-${l.color}${l.variant === "classic" ? "/30" : ""}`, s = (u) => l.canMoveForwards && u > o.value || l.canMoveBackwards && u < o.value ? "cursor-pointer" : "cursor-default", c = (u, g) => {
      (l.canMoveForwards && g > o.value || l.canMoveBackwards && g < o.value) && (t.value = u.value);
    };
    return (u, g) => e.variant === "classic" ? (a(), r("div", Kt, [
      d("div", Zt, [
        (a(!0), r(E, null, j(n.value, (p, m) => (a(), r(E, {
          key: p.value
        }, [
          d("div", {
            onClick: (y) => c(p, m),
            class: v([
              "w-10 h-10 rounded-full flex items-center justify-center",
              i(p),
              s(m)
            ])
          }, [
            h(f(D), {
              icon: p.status === "completed" && !e.canMoveBackwards ? f(se) : p.icon
            }, null, 8, ["icon"])
          ], 10, Xt),
          m < e.steps.length - 1 ? (a(), r("div", {
            key: 0,
            class: v(`flex-grow bg-${n.value[m + 1].status === "uncompleted" ? "secondary-text" : e.color} h-0.5`)
          }, null, 2)) : w("", !0)
        ], 64))), 128))
      ]),
      d("div", Jt, [
        (a(!0), r(E, null, j(n.value, (p, m) => (a(), r("p", {
          key: "label-" + p.value,
          onClick: (y) => c(p, m),
          class: v([
            p.status === "uncompleted" ? "text-secondary-text" : `text-${e.color}`,
            "text-xs font-medium text-center",
            s(m)
          ])
        }, b(p.label), 11, Yt))), 128))
      ])
    ])) : e.variant === "minimalist" ? (a(), r("div", {
      key: 1,
      class: v(`grid grid-cols-${n.value.length} gap-1`)
    }, [
      (a(!0), r(E, null, j(n.value, (p, m) => (a(), r("div", {
        key: p.value,
        onClick: (y) => c(p, m)
      }, [
        d("div", {
          class: v(["h-1 rounded-lg mb-1", i(p), s(m)])
        }, null, 2),
        d("p", {
          class: v([
            p.status !== "in-progress" ? "text-secondary-text" : `text-${e.color}`,
            "text-sm font-medium",
            s(m)
          ])
        }, b(p.label), 3)
      ], 8, _t))), 128))
    ], 2)) : w("", !0);
  }
}, el = {};
function tl(e, l) {
  return a(), r("div", {
    onClick: Z(() => {
    }, ["stop"])
  }, [
    x(e.$slots, "default")
  ]);
}
const Ql = /* @__PURE__ */ Y(el, [["render", tl]]), ll = { class: "overflow-hidden rounded-xl shadow-full-box border border-border" }, nl = { class: "w-full border-collapse table-fixed bg-card overflow-hidden" }, ol = ["colspan", "rowspan"], ql = {
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
    return (s, c) => (a(), r("div", ll, [
      d("table", nl, [
        d("tbody", null, [
          (a(!0), r(E, null, j(e.rows, (u, g) => (a(), r("tr", {
            key: "row-" + g,
            class: v(n(g))
          }, [
            (a(!0), r(E, null, j(u, (p, m) => (a(), r("td", {
              key: "cell-" + g + "-" + m,
              colspan: p.colspan || 1,
              rowspan: p.rowspan || 1,
              class: v(o(p, g, m)),
              style: le(t(p))
            }, [
              x(s.$slots, `${i(m)}${g + 1}`, {}, () => [
                q(b(p.content), 1)
              ])
            ], 14, ol))), 128))
          ], 2))), 128))
        ])
      ])
    ]));
  }
}, al = ["onClick"], Wl = {
  __name: "Tabs",
  props: /* @__PURE__ */ $({
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
    return (t, o) => (a(), r("div", null, [
      d("div", {
        class: v(["tab-container", { "justify-between": e.stretch }])
      }, [
        (a(!0), r(E, null, j(e.tabs, (n) => (a(), r("button", {
          key: n.name,
          class: v(["cursor-pointer", [{
            "text-error": n.error,
            "underline-offset-8 underline font-medium": n.name === l.value
          }, `text-${e.size}`]]),
          onClick: (i) => l.value = n.name,
          type: "button"
        }, b(n.label), 11, al))), 128))
      ], 2),
      (a(!0), r(E, null, j(e.tabs, (n) => H((a(), r("div", {
        key: n.name
      }, [
        x(t.$slots, `tab-${n.name}`)
      ])), [
        [K, n.name === l.value]
      ])), 128))
    ]));
  }
}, Gl = {
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
      x(l.$slots, "default")
    ], 2));
  }
}, sl = { class: "flex items-center justify-between" }, rl = ["for"], il = {
  key: 0,
  class: "text-xs text-secondary-text mr-1"
}, ul = ["name", "placeholder", "value", "disabled", "maxlength", "rows"], cl = {
  key: 0,
  class: "text-error text-sm"
}, dl = {
  key: 1,
  class: "text-success text-sm"
}, Kl = {
  __name: "Textarea",
  props: /* @__PURE__ */ $({
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
  emits: /* @__PURE__ */ $(["focus", "blur", "keyPress", "input"], ["update:modelValue", "update:input"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = k(e, "modelValue"), i = k(e, "input"), s = T(t.modelValue), c = T(!1), u = B(
      () => t.variant === "filled" ? `bg-${t.color}` : "bg-transparent border border-border"
    ), g = (y) => {
      c.value = !0, o("focus", y);
    }, p = (y) => {
      c.value = !1, o("blur", y);
    }, m = (y) => {
      const C = y.target;
      s.value = C.value, n.value = C.value, o("input", y);
    };
    return O(
      () => t.modelValue,
      (y) => {
        s.value = y;
      }
    ), (y, C) => (a(), r("div", null, [
      d("div", sl, [
        d("label", {
          for: e.name,
          class: "font-medium"
        }, b(e.label), 9, rl),
        e.maxlength ? (a(), r("p", il, b(n.value?.length ?? 0) + " / " + b(e.maxlength), 1)) : w("", !0)
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
          onFocus: g,
          onBlur: p,
          onKeydown: C[0] || (C[0] = (V) => o("keyPress", V)),
          maxlength: e.maxlength,
          rows: e.rows,
          ref_key: "inputElement",
          ref: i
        }, null, 42, ul)
      ], 2),
      e.error && typeof e.error != "boolean" ? (a(), r("p", cl, b(e.error), 1)) : e.success && typeof e.error != "boolean" ? (a(), r("p", dl, b(e.success), 1)) : w("", !0)
    ]));
  }
}, ve = () => {
  const e = $e("toastMessages", T([]));
  return {
    initializeToast: () => Se("toastMessages", T([])),
    toastMessages: e,
    addToast: (n) => e.value.push({ ...n, uuid: re() }),
    closeToast: (n) => e.value = e.value.filter((i) => i.uuid !== n)
  };
}, ml = { class: "flex-grow" }, fl = { class: "text-sm font-medium" }, vl = { class: "text-sm" }, gl = {
  __name: "ToastMessage",
  props: {
    message: Object
  },
  setup(e) {
    const l = e, { closeToast: t } = ve();
    return N(() => {
      l.message.duration && setTimeout(() => t(l.message.uuid), l.message.duration);
    }), (o, n) => {
      const i = X("IconButton");
      return a(), I(U, {
        name: "slide-fade",
        appear: ""
      }, {
        default: M(() => [
          d("div", {
            class: v(`w-72 flex items-center gap-2 rounded-md p-2 bg-${e.message.color ?? "success"}/${e.message.opacity ?? 60}`)
          }, [
            d("div", ml, [
              d("p", fl, b(e.message.title), 1),
              d("p", vl, b(e.message.content), 1)
            ]),
            h(i, {
              icon: f(J),
              color: "base",
              variant: "subtle",
              onClick: n[0] || (n[0] = (s) => f(t)(e.message.uuid))
            }, null, 8, ["icon"])
          ], 2)
        ]),
        _: 1
      });
    };
  }
}, yl = { class: "relative" }, Zl = {
  __name: "ToastContainer",
  props: {
    containerName: String,
    position: {
      type: String,
      default: "top-0 right-0"
    }
  },
  setup(e) {
    const l = e, { toastMessages: t } = ve(), o = B(() => t.value.filter((n) => n.container === l.containerName));
    return (n, i) => (a(), r("div", yl, [
      x(n.$slots, "default"),
      o.value.length > 0 ? (a(), r("div", {
        key: 0,
        class: v(["absolute p-4 z-50 flex flex-col gap-2 overflow-hidden", e.position])
      }, [
        (a(!0), r(E, null, j(o.value, (s) => (a(), r("div", {
          key: s.uuid
        }, [
          x(n.$slots, "toast-content", { message: s }, () => [
            h(gl, { message: s }, null, 8, ["message"])
          ])
        ]))), 128))
      ], 2)) : w("", !0)
    ]));
  }
}, Xl = {
  __name: "Toggle",
  props: /* @__PURE__ */ $({
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
  emits: /* @__PURE__ */ $(["toggle"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = k(e, "modelValue"), i = () => {
      n.value = !n.value, o("toggle", n.value);
    }, s = B(
      () => n.value ? `bg-${t.activeColor}` : "bg-gray-300 dark:bg-gray-600"
    ), c = B(
      () => n.value ? "translate-x-6" : "translate-x-0"
    );
    return N(() => {
      n.value = n.value ?? t.value;
    }), (u, g) => (a(), r("div", {
      onClick: i,
      class: v([s.value, "cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300"])
    }, [
      d("div", {
        class: v([c.value, "bg-white dark:bg-gray-200 text-black text-sm flex justify-center items-center w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"])
      }, [
        e.icon ? (a(), I(f(D), {
          key: 0,
          icon: e.icon
        }, null, 8, ["icon"])) : w("", !0)
      ], 2)
    ], 2));
  }
}, pl = { class: "rounded-md bg-dropdown/80 text-dropdown-text p-1 text-xs text-nowrap" }, Jl = {
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
    const l = e, t = T(!1), o = B(() => {
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
      x(n.$slots, "default"),
      h(U, { name: "fade" }, {
        default: M(() => [
          t.value ? (a(), r("div", {
            key: 0,
            class: v([o.value, "absolute delay-1000 z-50"])
          }, [
            d("div", pl, [
              x(n.$slots, "tooltip-content", {}, () => [
                q(b(e.text), 1)
              ])
            ])
          ], 2)) : w("", !0)
        ]),
        _: 3
      })
    ], 32));
  }
}, Yl = {
  install(e) {
    const l = he();
    e.use(l);
  }
};
export {
  Vl as Accordion,
  Re as AttachmentList,
  zl as Avatar,
  Ml as AvatarGroup,
  Bl as Badge,
  Ke as Button,
  ie as Card,
  Tl as Checkbox,
  Dl as ClickableTag,
  Il as CurrencyInput,
  Fl as DatePicker,
  yt as DragAndDropFiles,
  El as DropdownMenu,
  _ as DropdownOptions,
  ct as Dropzone,
  de as FileButton,
  fe as IconButton,
  jl as Loader,
  It as MediaCarousel,
  Ll as MediaInput,
  Al as Modal,
  Ol as Multiselect,
  Ul as NumberInput,
  Nl as Paragraph,
  Pl as Radio,
  Hl as Select,
  Rl as Stepper,
  Ql as StopPropagation,
  ql as TableCard,
  Wl as Tabs,
  Gl as Tag,
  Kl as Textarea,
  W as Textbox,
  Zl as ToastContainer,
  Xl as Toggle,
  Jl as Tooltip,
  Yl as default,
  ce as useFiles,
  ue as useIsHandheld,
  ve as useToast
};
