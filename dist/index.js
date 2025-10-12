import { VueFinalModal as fe, useModal as ve, ModalsContainer as ye, createVfm as ge } from "vue-final-modal";
import { createElementBlock as s, openBlock as a, normalizeClass as y, renderSlot as w, mergeModels as x, useModel as $, createBlock as F, createCommentVNode as S, withCtx as z, createElementVNode as d, withDirectives as H, createVNode as h, toDisplayString as b, Transition as U, unref as m, vShow as G, ref as D, onMounted as N, onUnmounted as le, computed as B, watch as O, Fragment as L, renderList as A, normalizeStyle as be, createTextVNode as Z, withModifiers as K, onBeforeUnmount as ne, useSlots as P, nextTick as oe, createSlots as R, resolveComponent as ee, vModelText as pe } from "vue";
import { FontAwesomeIcon as T } from "@fortawesome/vue-fontawesome";
import { faChevronDown as te, faHeadphones as he, faVideoCamera as xe, faFile as ae, faXmark as X, faCheck as se, faCalendar as $e, faUpload as Se, faPlus as ke, faSort as we } from "@fortawesome/free-solid-svg-icons";
import Ve from "vuedraggable";
import { v4 as Ce } from "uuid";
import ze from "@vuepic/vue-datepicker";
import { onKeyStroke as W } from "@vueuse/core";
const re = {
  __name: "Card",
  props: {
    styles: {
      type: String,
      default: ""
    },
    padding: {
      type: String,
      default: "p-4"
    }
  },
  setup(e) {
    return (l, t) => (a(), s("div", {
      class: y(`${e.styles} ${e.padding} bg-card border border-border dark:border-none rounded-md shadow-sm`)
    }, [
      w(l.$slots, "default")
    ], 2));
  }
}, Me = { class: "text-xl font-medium" }, Be = { class: "pt-4" }, De = { key: 1 }, Te = { class: "p-2" }, bl = {
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
    return (t, o) => e.variant === "card" ? (a(), F(re, { key: 0 }, {
      default: z(() => [
        d("div", {
          onClick: o[0] || (o[0] = (n) => l.value = !l.value),
          class: "flex items-center justify-between gap-2 cursor-pointer"
        }, [
          d("h3", Me, b(e.title), 1),
          h(U, { name: "rotate" }, {
            default: z(() => [
              d("div", {
                class: y({ rotated: l.value, "not-rotated": !l.value })
              }, [
                h(m(T), {
                  icon: m(te),
                  size: "lg"
                }, null, 8, ["icon"])
              ], 2)
            ]),
            _: 1
          })
        ]),
        H(d("div", Be, [
          w(t.$slots, "default")
        ], 512), [
          [G, l.value]
        ])
      ]),
      _: 3
    })) : e.variant === "minimal" ? (a(), s("div", De, [
      d("div", {
        onClick: o[1] || (o[1] = (n) => l.value = !l.value),
        class: "p-2 border-b-2 border-base-text flex items-center justify-between gap-2 cursor-pointer"
      }, [
        d("h3", null, b(e.title), 1),
        h(U, { name: "rotate" }, {
          default: z(() => [
            d("div", {
              class: y({ rotated: l.value, "not-rotated": !l.value })
            }, [
              h(m(T), { icon: m(te) }, null, 8, ["icon"])
            ], 2)
          ]),
          _: 1
        })
      ]),
      H(d("div", Te, [
        w(t.$slots, "default")
      ], 512), [
        [G, l.value]
      ])
    ])) : S("", !0);
  }
}, ie = (e = 800) => {
  const l = D(innerWidth < e), t = () => l.value = innerWidth < e;
  return N(() => addEventListener("resize", t)), le(() => removeEventListener("resize", t)), l;
}, ue = () => ({ readableFileSize: (t) => {
  const o = ["Bytes", "KB", "MB", "GB", "TB"], n = Math.floor(Math.log(t) / Math.log(1024));
  return `${Math.round(t / Math.pow(1024, n))} ${o[n]}`;
}, formatFiles: (t) => t?.map((o) => o.uuid ? o : {
  name: o.name,
  size: o.size,
  uuid: Ce(),
  preview: URL.createObjectURL(o),
  type: o.type?.split("/")[0]
}) }), Fe = (e, l, t) => {
  if (l < 0 || l >= e.length || t < 0 || t >= e.length)
    throw new Error("Invalid indices");
  const [o] = e.splice(l, 1);
  return e.splice(t, 0, o), e;
}, Ie = (e) => Math.floor(e) !== e && e.toString().split(".")[1]?.length || 0, je = { class: "flex justify-center gap-2 w-full p-4" }, Ee = ["onMouseenter"], Le = ["onClick"], Ae = ["src", "alt"], Oe = {
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
    const l = e, t = $(e, "files"), o = $(e, "selectedIdx"), n = ie(), { formatFiles: r } = ue(), i = D(-1), c = D(r(l.files)), u = (f) => {
      t.value = t.value.filter((v, V) => V !== f), o.value > f && (o.value -= 1);
    }, g = ({ moved: { oldIndex: f, newIndex: v } }) => {
      t.value = Fe(t.value, f, v), o.value === f ? o.value = v : o.value > f && o.value <= v ? o.value-- : o.value < f && o.value >= v && o.value++;
    }, p = B(() => l.size === "lg" ? "w-16 h-16" : "w-14 h-14");
    return O(t, () => c.value = r(l.files)), (f, v) => (a(), s("div", je, [
      w(f.$slots, "additional-items-before"),
      h(m(Ve), {
        modelValue: c.value,
        "onUpdate:modelValue": v[1] || (v[1] = (V) => c.value = V),
        "item-key": "uuid",
        "swap-threshold": 0.65,
        animation: 200,
        class: "flex gap-2",
        onChange: g
      }, {
        item: z(({ element: V, index: C }) => [
          d("div", {
            class: y(`relative border-secondary rounded-md ${p.value} ${o.value === C ? "border-3 bg-secondary" : ""}`),
            onMouseenter: (E) => i.value = C,
            onMouseleave: v[0] || (v[0] = (E) => i.value = -1)
          }, [
            d("button", {
              class: "w-full h-full",
              onClick: (E) => o.value = C
            }, [
              V.type === "image" ? (a(), s("img", {
                key: 0,
                src: V.preview,
                alt: V.name,
                class: "w-full h-full object-cover rounded-md"
              }, null, 8, Ae)) : (a(), s("span", Oe, [
                V.type === "audio" ? (a(), F(m(T), {
                  key: 0,
                  icon: m(he),
                  size: "lg"
                }, null, 8, ["icon"])) : V.type === "video" ? (a(), F(m(T), {
                  key: 1,
                  icon: m(xe),
                  size: "lg"
                }, null, 8, ["icon"])) : (a(), F(m(T), {
                  key: 2,
                  icon: m(ae),
                  size: "lg"
                }, null, 8, ["icon"]))
              ]))
            ], 8, Le),
            i.value === C || m(n) ? (a(), s("button", {
              key: 0,
              onClick: (E) => u(C),
              class: "absolute cursor-pointer top-0 right-0 text-secondary-text bg-card/80 rounded-full w-5 h-5 flex justify-center items-center"
            }, [
              h(m(T), {
                icon: m(X),
                size: "xs"
              }, null, 8, ["icon"])
            ], 8, Ue)) : S("", !0)
          ], 42, Ee)
        ]),
        _: 1
      }, 8, ["modelValue"]),
      w(f.$slots, "additional-items-after")
    ]));
  }
}, Pe = ["src"], pl = {
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
      class: y(`rounded-full ${e.styles}`)
    }, null, 10, Pe));
  }
}, He = { class: "flex items-center" }, Re = ["src", "alt"], hl = {
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
    return (l, t) => (a(), s("div", He, [
      (a(!0), s(L, null, A(e.avatars, (o, n) => (a(), s("img", {
        key: n,
        src: o,
        alt: `avatar ${n + 1}`,
        class: y(`${e.width} rounded-full relative`),
        style: be({ marginLeft: n === 0 ? "0" : `-${e.overlap}px` })
      }, null, 14, Re))), 128))
    ]));
  }
}, xl = {
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
      class: y(`text-${e.size} text-black font-bold bg-${e.color} rounded-xl px-1 ${e.styles} min-w-3 min-h-3`)
    }, [
      w(l.$slots, "default", {}, () => [
        Z(b(e.content), 1)
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
    }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = e, o = l, n = D(!1), r = (u) => {
      t.href && window.open(t.href), o("click", u);
    }, i = B(() => t.color === "base" ? "secondary-text" : t.color), c = B(() => {
      switch (t.variant) {
        case "light":
          return `${t.styles} btn bg-${i.value}/20 hover:bg-${i.value}/35 text-${i.value}`;
        case "outline":
          return `${t.styles} btn text-${i.value} border-${i.value} hover:bg-${i.value}/10 border-2`;
        case "subtle":
          return `${t.styles} btn text-${i.value} hover:bg-${i.value}/10`;
        case "dashed":
          return `${t.styles} btn text-${i.value} border-${i.value} border-2 border-dashed hover:bg-${i.value}/10`;
        default:
          return `${t.styles} btn text-black bg-${i.value}`;
      }
    });
    return (u, g) => (a(), s("button", {
      onClick: r,
      onMousedown: g[0] || (g[0] = (p) => n.value = !0),
      onMouseup: g[1] || (g[1] = (p) => n.value = !1),
      class: y([c.value, { pressed: n.value }, { "disabled-btn": e.disabled }]),
      disabled: e.disabled,
      type: e.type
    }, [
      w(u.$slots, "default")
    ], 42, Qe));
  }
}, We = { class: "flex items-center gap-2" }, Ge = ["for"], Ke = {
  key: 0,
  class: "text-error text-sm"
}, $l = {
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
    return (r, i) => (a(), s("div", null, [
      d("div", We, [
        d("button", {
          onClick: i[0] || (i[0] = (c) => n()),
          type: "button",
          class: y(["rounded-sm cursor-pointer border-secondary border-2 w-4 h-4 flex items-center justify-center text-black", { "bg-secondary": t.value, "hover:bg-secondary/30": !t.value }])
        }, [
          t.value ? (a(), F(m(T), {
            key: 0,
            icon: m(se),
            size: "xs"
          }, null, 8, ["icon"])) : S("", !0)
        ], 2),
        d("label", { for: e.name }, [
          w(r.$slots, "default")
        ], 8, Ge)
      ]),
      e.error ? (a(), s("p", Ke, b(e.error), 1)) : S("", !0)
    ]));
  }
}, Sl = {
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
    const t = e, o = l, n = $(e, "modelValue"), r = B(() => `${t.styles} py-1 px-3 duration-100 text-center border-2 rounded-${t.rounded} text-${t.size} text-${t.color} border-${t.color} hover:bg-${t.color}/10`), i = B(() => `${t.styles} py-1 px-3 duration-100 text-center border-2 rounded-${t.rounded} text-${t.size} bg-${t.color} border-${t.color} text-black`);
    return (c, u) => (a(), s("button", {
      onClick: u[0] || (u[0] = (g) => o("select")),
      class: y(n.value ? i.value : r.value)
    }, [
      w(c.$slots, "default")
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
}, q = {
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
    size: {
      type: String
    },
    color: {
      type: String,
      default: "base"
    },
    styles: String,
    label: String,
    icon: Object,
    placeholder: String
  }, {
    modelValue: {},
    modelModifiers: {},
    input: {},
    inputModifiers: {}
  }),
  emits: /* @__PURE__ */ x(["input", "focus", "blur"], ["update:modelValue", "update:input"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = $(e, "modelValue"), r = $(e, "input"), i = D(!1), c = B(
      () => t.variant === "filled" ? `bg-${t.color}` : "bg-transparent border border-secondary-text"
    ), u = (f) => {
      i.value = !0, o("input", f);
    }, g = (f) => {
      i.value = !1, o("blur", f);
    }, p = (f) => {
      n.value = f.target.value, o("input", f);
    };
    return (f, v) => (a(), s("div", null, [
      d("label", {
        for: e.name,
        class: "font-medium"
      }, b(e.label), 9, Ze),
      d("div", {
        class: y([
          "rounded-lg flex items-center duration-300",
          c.value,
          e.styles,
          {
            error: e.error,
            success: e.success,
            selected: i.value,
            "min-h-10": e.size !== "sm",
            "min-h-8": e.size === "sm"
          }
        ])
      }, [
        e.icon ? (a(), s("div", Xe, [
          h(m(T), {
            icon: e.icon,
            size: e.size,
            class: "text-secondary-text"
          }, null, 8, ["icon", "size"])
        ])) : S("", !0),
        d("div", {
          class: y(["flex-grow w-full flex items-center gap-1 flex-wrap p-2", { "pl-0": e.icon }])
        }, [
          w(f.$slots, "left-section"),
          e.disabled ? (a(), s("div", {
            key: 0,
            class: y([{ "pl-0": e.icon, "text-sm": e.size === "sm" }, "flex-grow"])
          }, [
            n.value ? (a(), s("span", Je, b(n.value), 1)) : e.value ? (a(), s("span", Ye, b(e.value), 1)) : e.placeholder ? (a(), s("span", _e, b(e.placeholder), 1)) : S("", !0)
          ], 2)) : (a(), s("input", {
            key: 1,
            ref_key: "inputElement",
            ref: r,
            name: e.name,
            type: e.type,
            placeholder: e.placeholder,
            value: n.value ?? e.value,
            disabled: e.disabled,
            onInput: p,
            onFocus: u,
            onBlur: g,
            class: y([{ "placeholder:text-sm": e.size === "sm" }, "p-0 flex-grow border-none outline-none rounded-lg bg-transparent placeholder:text-secondary-text"])
          }, null, 42, et))
        ], 2),
        w(f.$slots, "right-section")
      ], 2),
      e.error && typeof e.error != "boolean" ? (a(), s("p", tt, b(e.error), 1)) : e.success && typeof e.error != "boolean" ? (a(), s("p", lt, b(e.success), 1)) : S("", !0)
    ]));
  }
}, kl = {
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
    const l = e, t = $(e, "modelValue"), o = (r) => {
      let i = parseFloat(r.target.value.replace(/[^\d.-]/g, ""));
      Ie(i) > 0 && (i = (Math.round(i * 100) / 100).toFixed(2)), t.value = i;
    }, n = B(() => {
      if (t.value)
        return `${l.currencySymbol}${t.value}`;
    });
    return (r, i) => (a(), F(q, {
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
}, wl = {
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
    const l = e, t = $(e, "modelValue"), o = D(null), n = B(() => l.range ? ot : l.includeTime ? nt : Q);
    return (r, i) => (a(), s("div", {
      class: y(e.styles)
    }, [
      d("label", at, b(e.label), 1),
      h(m(ze), {
        modelValue: t.value,
        "onUpdate:modelValue": i[0] || (i[0] = (c) => t.value = c),
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
          h(q, {
            placeholder: e.placeholder,
            value: c,
            icon: m($e),
            variant: e.variant,
            size: e.size,
            color: e.color,
            error: !!e.error
          }, null, 8, ["placeholder", "value", "icon", "variant", "size", "color", "error"])
        ]),
        _: 1
      }, 8, ["modelValue", "format", "disabled", "enable-time-picker", "range", "min-date", "max-date"]),
      e.error ? (a(), s("p", st, b(e.error), 1)) : S("", !0)
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
    const t = l, o = $(e, "modelValue"), n = (r) => {
      o.value = !1, t("drop", r);
    };
    return (r, i) => (a(), s("div", {
      onDragover: i[0] || (i[0] = K((c) => o.value = !0, ["prevent"])),
      onDragleave: i[1] || (i[1] = (c) => o.value = !1),
      onDrop: K(n, ["prevent"])
    }, [
      w(r.$slots, "default", { isDragOver: o.value })
    ], 32));
  }
}, it = ["multiple", "accept"], ce = {
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
    const t = e, o = l, n = D(null), r = () => {
      t.disabled || n.value.click();
    };
    return (i, c) => (a(), s("div", null, [
      d("input", {
        type: "file",
        ref_key: "fileInput",
        ref: n,
        onChange: c[0] || (c[0] = (u) => o("change", u)),
        multiple: e.multiple,
        accept: e.accept,
        hidden: ""
      }, null, 40, it),
      d("div", { onClick: r }, [
        w(i.$slots, "default")
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
    const l = $(e, "modelValue"), t = (r) => l.value = Array.from(r), o = (r) => t(r.dataTransfer.files), n = (r) => t(r.target.files);
    return (r, i) => (a(), s("div", null, [
      e.label ? (a(), s("p", ut, b(e.label), 1)) : S("", !0),
      d("div", null, [
        h(ce, {
          onChange: n,
          accept: "image/*"
        }, {
          default: z(() => [
            h(rt, { onDrop: o }, {
              default: z(({ isDragOver: c }) => [
                d("div", {
                  class: y(["cursor-pointer duration-300 text-center border-2 border-dashed py-6 px-4 rounded-lg", {
                    "bg-secondary/30": c,
                    "text-secondary border-secondary": !e.error,
                    "text-error border-error": e.error
                  }])
                }, [
                  e.withIcon ? (a(), s("div", ct, [
                    h(m(T), {
                      icon: m(Se),
                      size: "lg"
                    }, null, 8, ["icon"])
                  ])) : S("", !0),
                  d("p", dt, b(e.dropText), 1)
                ], 2)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e.error ? (a(), s("p", mt, b(e.error), 1)) : S("", !0)
      ])
    ]));
  }
}, de = () => {
  const e = D(!1), l = D(null), t = () => e.value = !0, o = () => e.value = !1, n = (r) => {
    l.value.contains(r.target) || o();
  };
  return N(() => {
    document.addEventListener("mousedown", n);
  }), ne(() => {
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
    const t = e, o = l, n = P(), r = D(-1), i = D("top-full"), c = D(null), u = (v) => o("select", v), g = () => {
      const v = t.container.getBoundingClientRect(), V = window.innerHeight || document.documentElement.clientHeight;
      i.value = v.bottom + 150 > V ? "bottom-full" : "top-full";
    }, p = () => {
      i.value = "top-full";
    }, f = async (v) => {
      r.value += v, r.value < 0 ? r.value = t.options.length - 1 : r.value >= t.options.length && (r.value = 0), await oe();
      const C = c.value?.querySelectorAll("div > div")?.[r.value];
      C && C.scrollIntoView({ block: "nearest", behavior: "smooth" });
    };
    return W("ArrowDown", (v) => {
      t.open && t.options.length > 0 && (v.preventDefault(), f(1));
    }), W("ArrowUp", (v) => {
      t.open && t.options.length > 0 && (v.preventDefault(), f(-1));
    }), W("Enter", (v) => {
      t.open && t.options.length > 0 ? (v.preventDefault(), u(t.options[r.value])) : t.acceptsEmptySelection && (v.preventDefault(), u());
    }), O(() => t.open, () => {
      t.open || (r.value = -1);
    }), (v, V) => (a(), F(U, {
      name: i.value === "top-full" ? "slide-down" : "slide-up",
      onBeforeEnter: g,
      onAfterLeave: p
    }, {
      default: z(() => [
        e.open && e.options?.length > 0 ? (a(), s("div", {
          key: 0,
          ref_key: "optionsContainer",
          ref: c,
          class: y([
            "rounded-md bg-dropdown text-dropdown-text absolute overflow-auto max-h-64 flex flex-col cursor-pointer z-50",
            e.width,
            e.direction === "right" ? "right-0" : "left-0",
            i.value
          ])
        }, [
          (a(!0), s(L, null, A(e.options, (C, E) => (a(), s("div", {
            key: e.trackBy ? e.options[e.trackBy] : C,
            onClick: (j) => u(C),
            onMouseover: (j) => r.value = E,
            class: y(["text-md py-2 px-6 rounded-md text-left", { "bg-dropdown-select": r.value === E }])
          }, [
            m(n).option ? w(v.$slots, "option", {
              key: 0,
              option: C
            }, void 0, !0) : (a(), s("div", yt, [
              Z(b(e.optionLabel ? C[e.optionLabel] : C) + " ", 1),
              C[e.optionDescription] ? (a(), s("div", gt, b(C[e.optionDescription]), 1)) : S("", !0)
            ]))
          ], 42, vt))), 128))
        ], 2)) : S("", !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}, Y = /* @__PURE__ */ J(bt, [["__scopeId", "data-v-32652279"]]), Vl = {
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
    const t = l, o = P(), { dropdownOpen: n, dropdownContainer: r } = de(), i = (c) => {
      n.value = !1, t("select", c);
    };
    return (c, u) => (a(), s("div", {
      class: "relative",
      ref_key: "dropdownContainer",
      ref: r
    }, [
      d("div", {
        onClick: u[0] || (u[0] = (g) => n.value = !m(n))
      }, [
        w(c.$slots, "trigger")
      ]),
      h(Y, {
        container: m(r),
        options: e.options,
        open: m(n),
        "option-label": e.label,
        "track-by": e.trackBy,
        "accepts-empty-selection": "",
        onSelect: i,
        width: "w-64",
        direction: e.direction
      }, R({ _: 2 }, [
        m(o).option ? {
          name: "option",
          fn: z(({ option: g }) => [
            w(c.$slots, "option", { option: g })
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
    return (r, i) => (a(), F(qe, {
      styles: `${e.styles} ${n.value} flex justify-center items-center !px-0 !py-0`,
      href: e.href,
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      variant: e.variant,
      onClick: i[0] || (i[0] = (c) => o("click", c))
    }, {
      default: z(() => [
        h(m(T), {
          size: e.size,
          icon: e.icon
        }, null, 8, ["size", "icon"])
      ]),
      _: 1
    }, 8, ["styles", "href", "type", "color", "disabled", "variant"]));
  }
}, pt = { class: "flex-grow" }, ht = { class: "text-md font-medium" }, Cl = {
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
        t.value ? (a(), s("div", {
          key: 0,
          class: y(`w-96 flex items-center gap-2 rounded-md p-2 my-2 bg-${e.color}/${e.opacity}`)
        }, [
          d("div", pt, [
            d("p", ht, b(e.content), 1)
          ]),
          h(_, {
            icon: m(X),
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
    return (l, t) => (a(), s("div", xt, [
      d("div", null, [
        t[0] || (t[0] = d("div", { class: "spinner" }, null, -1)),
        e.label ? (a(), s("p", $t, b(e.label), 1)) : S("", !0)
      ])
    ]));
  }
}, zl = /* @__PURE__ */ J(St, [["__scopeId", "data-v-d8288a84"]]), kt = { class: "flex items-center justify-center" }, wt = { key: 0 }, Vt = ["src", "alt"], Ct = { key: 1 }, zt = ["src"], Mt = { key: 2 }, Bt = ["src"], Dt = {
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
    const l = $(e, "selectedIdx"), t = ie(), o = () => {
      const n = document.querySelector("swiper-container").swiper;
      l.value = n.activeIndex;
    };
    return O(l, () => {
      const n = document.querySelector("swiper-container")?.swiper;
      l.value !== n.activeIndex && n.slideTo(l.value);
    }), (n, r) => {
      const i = ee("swiper-slide"), c = ee("swiper-container");
      return a(), F(c, {
        "slides-per-view": 1,
        "centered-slides": !0,
        navigation: !m(t),
        onSwiperslidechange: o
      }, {
        default: z(() => [
          (a(!0), s(L, null, A(e.files, (u) => (a(), F(i, null, {
            default: z(() => [
              d("div", kt, [
                u.type === "image" ? (a(), s("div", wt, [
                  d("img", {
                    src: u.preview,
                    alt: u.name,
                    class: y(e.maxMediaHeight)
                  }, null, 10, Vt)
                ])) : u.type === "video" ? (a(), s("div", Ct, [
                  d("video", {
                    src: u.preview,
                    controls: "",
                    class: y(e.maxMediaHeight)
                  }, null, 10, zt)
                ])) : u.type === "audio" ? (a(), s("div", Mt, [
                  d("audio", {
                    src: u.preview,
                    controls: ""
                  }, null, 8, Bt)
                ])) : (a(), s("div", Dt, [
                  h(m(T), {
                    icon: m(ae),
                    size: "xl"
                  }, null, 8, ["icon"]),
                  r[0] || (r[0] = d("p", { class: "text-lg mt-2" }, "No preview available", -1))
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
}, jt = {
  key: 0,
  class: "text-error text-sm mt-1"
}, Ml = {
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
    const l = $(e, "modelValue"), t = D(0), { formatFiles: o } = ue(), n = (i) => l.value.push(...i.target.files), r = B(() => o(l.value));
    return (i, c) => (a(), s("div", null, [
      e.label ? (a(), s("label", Ft, b(e.label), 1)) : S("", !0),
      l.value.length > 0 ? (a(), s("div", It, [
        h(Tt, {
          "selected-idx": t.value,
          "onUpdate:selectedIdx": c[0] || (c[0] = (u) => t.value = u),
          files: r.value
        }, null, 8, ["selected-idx", "files"]),
        h(Ne, {
          "selected-idx": t.value,
          "onUpdate:selectedIdx": c[1] || (c[1] = (u) => t.value = u),
          files: l.value,
          "onUpdate:files": c[2] || (c[2] = (u) => l.value = u)
        }, {
          "additional-items-after": z(() => [
            h(ce, {
              onChange: n,
              accept: "image/*"
            }, {
              default: z(() => [
                h(_, {
                  icon: m(ke),
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
        e.error ? (a(), s("p", jt, b(e.error), 1)) : S("", !0)
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
}, Et = {
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
    return le(() => t("close")), (o, n) => (a(), F(m(fe), {
      "overlay-transition": "vfm-fade",
      "content-transition": "vfm-fade",
      class: "flex justify-center items-center",
      "content-class": e.contentClass
    }, {
      default: z(() => [
        h(re, { styles: "w-full" }, {
          default: z(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["content-class"]));
  }
}, Bl = {
  __name: "Modal",
  props: /* @__PURE__ */ x({
    contentClass: {
      type: String,
      default: "w-full max-w-xl p-2"
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = e, t = $(e, "modelValue"), o = P(), n = ve({
      component: Et,
      attrs: {
        contentClass: l.contentClass,
        onClose: () => t.value = !1
      },
      slots: {
        default: o.default
      }
    });
    return O(t, () => {
      t.value === !0 ? n.open() : t.value === !1 && n.close();
    }), (r, i) => (a(), F(m(ye)));
  }
}, Lt = {
  key: 0,
  class: "text-error text-sm"
}, Dl = {
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
    const t = e, o = l, n = $(e, "modelValue"), r = $(e, "searchQuery"), i = $(e, "input"), c = P(), u = D(!1), g = D(null), p = B(() => t.acceptsDuplicates ? t.options : t.options.filter((k) => !n.value.includes(t.formatResult(k)))), f = (k) => {
      n.value.push(t.formatResult(k)), r.value = "", o("select", k);
    }, v = (k) => {
      n.value = n.value.filter((M, I) => I !== k);
    }, V = () => {
      u.value = !0;
    }, C = () => {
      u.value = !1;
    }, E = () => {
      t.searchable || (u.value ? C() : V());
    }, j = (k) => {
      g.value.contains(k.target) || C();
    };
    return N(() => {
      document.addEventListener("mousedown", j);
    }), ne(() => {
      document.removeEventListener("mousedown", j);
    }), O(r, () => {
      t.searchable && r.value.length > 0 && V();
    }), (k, M) => (a(), s("div", {
      class: y([e.styles])
    }, [
      d("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: g
      }, [
        d("div", {
          onClick: M[4] || (M[4] = (I) => E()),
          class: y({ "cursor-pointer": !e.searchable })
        }, [
          h(q, {
            modelValue: r.value,
            "onUpdate:modelValue": M[0] || (M[0] = (I) => r.value = I),
            input: i.value,
            "onUpdate:input": M[1] || (M[1] = (I) => i.value = I),
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
            "left-section": z(() => [
              (a(!0), s(L, null, A(n.value, (I, me) => (a(), s("div", {
                key: e.optionLabel[e.trackBy]
              }, [
                w(k.$slots, "selectedTag", {
                  option: I,
                  deselect: () => v(me)
                })
              ]))), 128))
            ]),
            _: 3
          }, 8, ["modelValue", "input", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        h(Y, {
          container: g.value,
          options: p.value,
          "option-label": e.optionLabel,
          "track-by": e.trackBy,
          open: u.value,
          "accepts-empty-selection": e.acceptsEmptySelection,
          onSelect: f
        }, R({ _: 2 }, [
          m(c).option ? {
            name: "option",
            fn: z(({ option: I }) => [
              w(k.$slots, "option", { option: I })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      e.error && typeof e.error != "boolean" ? (a(), s("p", Lt, b(e.error), 1)) : S("", !0)
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
}, Tl = {
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
    const l = e, t = $(e, "modelValue"), o = B(
      () => l.variant === "filled" ? `bg-${l.color}` : "bg-transparent border border-secondary-text"
    ), n = B(() => l.modelValue > l.max ? `Value must be ${l.max} or less.` : l.modelValue < l.min ? `Value must be ${l.min} or more.` : !1);
    return (r, i) => (a(), s("div", null, [
      d("h4", At, b(e.label), 1),
      d("div", {
        class: y(["rounded-lg flex h-10 items-center", o.value, e.styles, { error: n.value || e.error, "px-2": !e.icon }])
      }, [
        e.icon ? (a(), s("div", Ot, [
          h(m(T), {
            icon: e.icon,
            size: "1x",
            class: "text-secondary-text"
          }, null, 8, ["icon"])
        ])) : S("", !0),
        H(d("input", {
          "onUpdate:modelValue": i[0] || (i[0] = (c) => t.value = c),
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
      n.value ? (a(), s("p", Nt, b(n.value), 1)) : e.error && typeof e.error == "string" ? (a(), s("p", Pt, b(e.error), 1)) : S("", !0)
    ]));
  }
}, Fl = {
  __name: "Paragraph",
  props: {
    text: String,
    styles: String,
    limit: Number,
    includeWhitespace: Boolean
  },
  setup(e) {
    const l = e, t = B(() => l.limit ? `${l.text.substring(0, l.limit)}${l.text.length > l.limit ? "..." : ""}` : l.text);
    return (o, n) => (a(), s("p", {
      class: y([e.styles, { "whitespace-pre-wrap": e.includeWhitespace }])
    }, b(t.value), 3));
  }
}, Ht = ["name", "value", "checked"], Rt = { class: "rounded-full border-2 border-secondary flex items-center justify-center h-4 w-4" }, Il = {
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
    const t = e, o = l, n = $(e, "modelValue"), r = D(!1), i = B(() => t.modelValue === t.value), c = (u) => {
      n.value = t.value, o("select", u);
    };
    return (u, g) => (a(), s("label", {
      class: "flex items-center gap-3 relative cursor-pointer",
      onMouseenter: g[1] || (g[1] = (p) => r.value = !0),
      onMouseleave: g[2] || (g[2] = (p) => r.value = !1)
    }, [
      d("input", {
        class: "absolute opacity-0 cursor-pointer",
        type: "radio",
        name: e.name,
        value: e.value,
        checked: i.value,
        onChange: g[0] || (g[0] = (p) => c(p))
      }, null, 40, Ht),
      d("span", Rt, [
        d("span", {
          class: y(["rounded-full h-2 w-2", { "bg-secondary": r.value || i.value }])
        }, null, 2)
      ]),
      d("span", null, b(e.label), 1)
    ], 32));
  }
}, Qt = { class: "flex items-center pr-1" }, qt = { class: "flex items-center pr-2 text-secondary-text" }, Wt = {
  key: 0,
  class: "text-error text-sm"
}, jl = {
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
    const t = e, o = l, n = $(e, "modelValue"), r = $(e, "searchQuery"), i = $(e, "input"), c = P(), { dropdownOpen: u, dropdownContainer: g, open: p, close: f } = de(), v = (j) => {
      const k = t.formatResult(j);
      n.value = k, o("select", k), t.optionLabel && (r.value = j[t.optionLabel]), oe(f);
    }, V = (j) => {
      j.stopPropagation(), n.value = null, r.value = "";
    }, C = () => {
      t.searchable || (u.value ? f() : p());
    }, E = () => n.value && t.optionLabel ? n.value[t.optionLabel] : n.value ? n.value : null;
    return O(r, () => {
      t.searchable && r.value.length > 0 ? p() : t.searchable && f();
    }), (j, k) => (a(), s("div", {
      class: y([e.styles])
    }, [
      d("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: g
      }, [
        d("div", {
          onClick: k[4] || (k[4] = (M) => C()),
          class: y({ "cursor-pointer": !e.searchable })
        }, [
          h(q, {
            modelValue: r.value,
            "onUpdate:modelValue": k[0] || (k[0] = (M) => r.value = M),
            input: i.value,
            "onUpdate:input": k[1] || (k[1] = (M) => i.value = M),
            value: E(),
            label: e.label,
            placeholder: e.placeholder,
            disabled: !e.searchable || e.lockOnSelect && n.value,
            icon: n.value?.icon ?? e.icon,
            error: !!e.error,
            size: e.size,
            color: e.color,
            variant: e.variant,
            styles: e.textboxStyles,
            onFocus: k[2] || (k[2] = (M) => o("focus", M)),
            onBlur: k[3] || (k[3] = (M) => o("blur", M))
          }, R({ _: 2 }, [
            e.lockOnSelect && e.searchable && n.value ? {
              name: "right-section",
              fn: z(() => [
                d("div", Qt, [
                  h(_, {
                    icon: m(X),
                    "on-click": V,
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
                  h(m(T), {
                    icon: m(we),
                    size: e.size
                  }, null, 8, ["icon", "size"])
                ])
              ]),
              key: "1"
            }
          ]), 1032, ["modelValue", "input", "value", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        h(Y, {
          container: m(g),
          options: e.options,
          "option-label": e.optionLabel,
          "track-by": e.trackBy,
          open: m(u),
          "accepts-empty-selection": e.acceptsEmptySelection,
          onSelect: v
        }, R({ _: 2 }, [
          m(c).option ? {
            name: "option",
            fn: z(({ option: M }) => [
              w(j.$slots, "option", { option: M })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      e.error && typeof e.error != "boolean" ? (a(), s("p", Wt, b(e.error), 1)) : S("", !0)
    ], 2));
  }
}, Gt = {
  key: 0,
  class: "w-full"
}, Kt = { class: "flex justify-between items-center gap-2 px-4" }, Zt = ["onClick"], Xt = { class: "flex justify-between items-center mt-1 px-3" }, Jt = ["onClick"], Yt = ["onClick"], El = {
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
    const l = e, t = $(e, "modelValue"), o = B(() => l.steps.findIndex((u) => u.value === t.value)), n = B(() => l.steps.map((u, g) => g < o.value ? { ...u, status: "completed" } : g === o.value ? { ...u, status: "in-progress" } : { ...u, status: "uncompleted" })), r = (u) => u.status === "uncompleted" || u.status !== "in-progress" && l.variant === "minimalist" ? "text-secondary-text bg-card-accent" : `text-${l.color} bg-${l.color}${l.variant === "classic" ? "/30" : ""}`, i = (u) => l.canMoveForwards && u > o.value || l.canMoveBackwards && u < o.value ? "cursor-pointer" : "cursor-default", c = (u, g) => {
      (l.canMoveForwards && g > o.value || l.canMoveBackwards && g < o.value) && (t.value = u.value);
    };
    return (u, g) => e.variant === "classic" ? (a(), s("div", Gt, [
      d("div", Kt, [
        (a(!0), s(L, null, A(n.value, (p, f) => (a(), s(L, {
          key: p.value
        }, [
          d("div", {
            onClick: (v) => c(p, f),
            class: y([
              "w-10 h-10 rounded-full flex items-center justify-center",
              r(p),
              i(f)
            ])
          }, [
            h(m(T), {
              icon: p.status === "completed" && !e.canMoveBackwards ? m(se) : p.icon
            }, null, 8, ["icon"])
          ], 10, Zt),
          f < e.steps.length - 1 ? (a(), s("div", {
            key: 0,
            class: y(`flex-grow bg-${n.value[f + 1].status === "uncompleted" ? "secondary-text" : e.color} h-0.5`)
          }, null, 2)) : S("", !0)
        ], 64))), 128))
      ]),
      d("div", Xt, [
        (a(!0), s(L, null, A(n.value, (p, f) => (a(), s("p", {
          key: "label-" + p.value,
          onClick: (v) => c(p, f),
          class: y([
            p.status === "uncompleted" ? "text-secondary-text" : `text-${e.color}`,
            "text-xs font-medium text-center",
            i(f)
          ])
        }, b(p.label), 11, Jt))), 128))
      ])
    ])) : e.variant === "minimalist" ? (a(), s("div", {
      key: 1,
      class: y(`grid grid-cols-${n.value.length} gap-1`)
    }, [
      (a(!0), s(L, null, A(n.value, (p, f) => (a(), s("div", {
        key: p.value,
        onClick: (v) => c(p, f)
      }, [
        d("div", {
          class: y(["h-1 rounded-lg mb-1", r(p), i(f)])
        }, null, 2),
        d("p", {
          class: y([
            p.status !== "in-progress" ? "text-secondary-text" : `text-${e.color}`,
            "text-sm font-medium",
            i(f)
          ])
        }, b(p.label), 3)
      ], 8, Yt))), 128))
    ], 2)) : S("", !0);
  }
}, _t = {};
function el(e, l) {
  return a(), s("div", {
    onClick: K(() => {
    }, ["stop"])
  }, [
    w(e.$slots, "default")
  ]);
}
const Ll = /* @__PURE__ */ J(_t, [["render", el]]), tl = ["onClick"], Al = {
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
    return (t, o) => (a(), s("div", null, [
      d("div", {
        class: y(["tab-container", { "justify-between": e.stretch }])
      }, [
        (a(!0), s(L, null, A(e.tabs, (n) => (a(), s("button", {
          key: n.name,
          class: y(["cursor-pointer", [{
            "text-error": n.error,
            "underline-offset-8 underline font-medium": n.name === l.value
          }, `text-${e.size}`]]),
          onClick: (r) => l.value = n.name,
          type: "button"
        }, b(n.label), 11, tl))), 128))
      ], 2),
      (a(!0), s(L, null, A(e.tabs, (n) => H((a(), s("div", {
        key: n.name
      }, [
        w(t.$slots, `tab-${n.name}`)
      ])), [
        [G, n.name === l.value]
      ])), 128))
    ]));
  }
}, Ol = {
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
      class: y(`py-1 px-4 rounded-${e.rounded} duration-100 text-center text-black text-${e.size} bg-${e.color}`)
    }, [
      w(l.$slots, "default")
    ], 2));
  }
}, ll = { class: "flex items-center justify-between" }, nl = ["for"], ol = {
  key: 0,
  class: "text-xs text-secondary-text mr-1"
}, al = ["name", "placeholder", "value", "disabled", "maxlength", "rows"], sl = {
  key: 0,
  class: "text-error text-sm"
}, rl = {
  key: 1,
  class: "text-success text-sm"
}, Ul = {
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
    const t = e, o = l, n = $(e, "modelValue"), r = $(e, "input"), i = D(t.modelValue), c = D(!1), u = B(
      () => t.variant === "filled" ? `bg-${t.color}` : "bg-transparent ring-1 ring-secondary-text"
    ), g = (v) => {
      c.value = !0, o("focus", v);
    }, p = (v) => {
      c.value = !1, o("blur", v);
    }, f = (v) => {
      const V = v.target;
      i.value = V.value, n.value = V.value, o("input", v);
    };
    return O(
      () => t.modelValue,
      (v) => {
        i.value = v;
      }
    ), (v, V) => (a(), s("div", null, [
      d("div", ll, [
        d("label", {
          for: e.name,
          class: "font-medium"
        }, b(e.label), 9, nl),
        e.maxlength ? (a(), s("p", ol, b(n.value?.length ?? 0) + " / " + b(e.maxlength), 1)) : S("", !0)
      ]),
      d("div", {
        class: y([
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
          class: y(["rounded-lg p-2 flex-grow bg-transparent outline-none max-w-full placeholder:text-secondary-text border-none", { "field-sizing-content": e.fieldSizingContent }]),
          name: e.name,
          placeholder: e.placeholder,
          value: n.value,
          disabled: e.disabled,
          onInput: f,
          onFocus: g,
          onBlur: p,
          onKeydown: V[0] || (V[0] = (C) => o("keyPress", C)),
          maxlength: e.maxlength,
          rows: e.rows,
          ref_key: "inputElement",
          ref: r
        }, null, 42, al)
      ], 2),
      e.error && typeof e.error != "boolean" ? (a(), s("p", sl, b(e.error), 1)) : e.success && typeof e.error != "boolean" ? (a(), s("p", rl, b(e.success), 1)) : S("", !0)
    ]));
  }
}, Nl = {
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
    const t = e, o = l, n = $(e, "modelValue"), r = () => {
      n.value = !n.value, o("toggle", n.value);
    }, i = B(
      () => n.value ? `bg-${t.activeColor}` : "bg-gray-300 dark:bg-gray-600"
    ), c = B(
      () => n.value ? "translate-x-6" : "translate-x-0"
    );
    return N(() => {
      n.value = n.value ?? t.value;
    }), (u, g) => (a(), s("div", {
      onClick: r,
      class: y([i.value, "cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300"])
    }, [
      d("div", {
        class: y([c.value, "bg-white dark:bg-gray-200 text-black text-sm flex justify-center items-center w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"])
      }, [
        e.icon ? (a(), F(m(T), {
          key: 0,
          icon: e.icon
        }, null, 8, ["icon"])) : S("", !0)
      ], 2)
    ], 2));
  }
}, il = { class: "rounded-md bg-dropdown/80 text-dropdown-text p-1 text-xs text-nowrap" }, Pl = {
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
    const l = e, t = D(!1), o = B(() => {
      let n;
      switch (l.position) {
        case "right":
          n = "left-full pl-4";
          break;
      }
      return n;
    });
    return (n, r) => (a(), s("div", {
      class: "relative flex items-center",
      onMouseenter: r[0] || (r[0] = (i) => t.value = !0),
      onMouseleave: r[1] || (r[1] = (i) => t.value = !1)
    }, [
      w(n.$slots, "default"),
      h(U, { name: "fade" }, {
        default: z(() => [
          t.value ? (a(), s("div", {
            key: 0,
            class: y([o.value, "absolute delay-1000 z-50"])
          }, [
            d("div", il, [
              w(n.$slots, "tooltip-content", {}, () => [
                Z(b(e.text), 1)
              ])
            ])
          ], 2)) : S("", !0)
        ]),
        _: 3
      })
    ], 32));
  }
}, Hl = {
  install(e) {
    const l = ge();
    e.use(l);
  }
};
export {
  bl as Accordion,
  Ne as AttachmentList,
  pl as Avatar,
  hl as AvatarGroup,
  xl as Badge,
  qe as Button,
  re as Card,
  $l as Checkbox,
  Sl as ClickableTag,
  kl as CurrencyInput,
  wl as DatePicker,
  ft as DragAndDropFiles,
  Vl as DropdownMenu,
  Y as DropdownOptions,
  rt as Dropzone,
  ce as FileButton,
  Cl as FlashMessage,
  _ as IconButton,
  zl as Loader,
  Tt as MediaCarousel,
  Ml as MediaInput,
  Bl as Modal,
  Dl as Multiselect,
  Tl as NumberInput,
  Fl as Paragraph,
  Il as Radio,
  jl as Select,
  El as Stepper,
  Ll as StopPropagation,
  Al as Tabs,
  Ol as Tag,
  Ul as Textarea,
  q as Textbox,
  Nl as Toggle,
  Pl as Tooltip,
  Hl as default,
  ue as useFiles,
  ie as useIsHandheld
};
