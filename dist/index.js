import { VueFinalModal as me, useModal as fe, ModalsContainer as ve, createVfm as ye } from "vue-final-modal";
import { createElementBlock as s, openBlock as a, normalizeClass as v, renderSlot as w, mergeModels as x, useModel as S, createBlock as F, createCommentVNode as k, withCtx as V, createElementVNode as d, withDirectives as H, createVNode as h, toDisplayString as p, Transition as N, unref as f, vShow as G, ref as M, onMounted as U, onUnmounted as ne, computed as D, watch as O, Fragment as L, renderList as A, normalizeStyle as ge, createTextVNode as Z, withModifiers as K, onBeforeUnmount as X, useSlots as P, nextTick as oe, createSlots as R, resolveComponent as te, vModelText as pe } from "vue";
import { FontAwesomeIcon as T } from "@fortawesome/vue-fontawesome";
import { faChevronDown as le, faHeadphones as be, faVideoCamera as he, faFile as ae, faXmark as J, faCheck as se, faCalendar as xe, faUpload as $e, faPlus as Se, faSort as ke } from "@fortawesome/free-solid-svg-icons";
import we from "vuedraggable";
import { v4 as Ve } from "uuid";
import Ce from "@vuepic/vue-datepicker";
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
      class: v(`${e.styles} ${e.padding} bg-card border border-border dark:border-none rounded-md shadow-sm`)
    }, [
      w(l.$slots, "default")
    ], 2));
  }
}, ze = { class: "text-xl font-medium" }, Me = { class: "pt-4" }, Be = { key: 1 }, De = { class: "p-2" }, pl = {
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
    const l = S(e, "modelValue");
    return (t, o) => e.variant === "card" ? (a(), F(re, { key: 0 }, {
      default: V(() => [
        d("div", {
          onClick: o[0] || (o[0] = (n) => l.value = !l.value),
          class: "flex items-center justify-between gap-2 cursor-pointer"
        }, [
          d("h3", ze, p(e.title), 1),
          h(N, { name: "rotate" }, {
            default: V(() => [
              d("div", {
                class: v({ rotated: l.value, "not-rotated": !l.value })
              }, [
                h(f(T), {
                  icon: f(le),
                  size: "lg"
                }, null, 8, ["icon"])
              ], 2)
            ]),
            _: 1
          })
        ]),
        H(d("div", Me, [
          w(t.$slots, "default")
        ], 512), [
          [G, l.value]
        ])
      ]),
      _: 3
    })) : e.variant === "minimal" ? (a(), s("div", Be, [
      d("div", {
        onClick: o[1] || (o[1] = (n) => l.value = !l.value),
        class: "p-2 border-b-2 border-base-text flex items-center justify-between gap-2 cursor-pointer"
      }, [
        d("h3", null, p(e.title), 1),
        h(N, { name: "rotate" }, {
          default: V(() => [
            d("div", {
              class: v({ rotated: l.value, "not-rotated": !l.value })
            }, [
              h(f(T), { icon: f(le) }, null, 8, ["icon"])
            ], 2)
          ]),
          _: 1
        })
      ]),
      H(d("div", De, [
        w(t.$slots, "default")
      ], 512), [
        [G, l.value]
      ])
    ])) : k("", !0);
  }
}, ie = (e = 800) => {
  const l = M(innerWidth < e), t = () => l.value = innerWidth < e;
  return U(() => addEventListener("resize", t)), ne(() => removeEventListener("resize", t)), l;
}, ue = () => ({ readableFileSize: (t) => {
  const o = ["Bytes", "KB", "MB", "GB", "TB"], n = Math.floor(Math.log(t) / Math.log(1024));
  return `${Math.round(t / Math.pow(1024, n))} ${o[n]}`;
}, formatFiles: (t) => t?.map((o) => o.uuid ? o : {
  name: o.name,
  size: o.size,
  uuid: Ve(),
  preview: URL.createObjectURL(o),
  type: o.type?.split("/")[0]
}) }), Te = (e, l, t) => {
  if (l < 0 || l >= e.length || t < 0 || t >= e.length)
    throw new Error("Invalid indices");
  const [o] = e.splice(l, 1);
  return e.splice(t, 0, o), e;
}, Fe = (e) => Math.floor(e) !== e && e.toString().split(".")[1]?.length || 0, Ie = { class: "flex justify-center gap-2 w-full p-4" }, Ee = ["onMouseenter"], je = ["onClick"], Le = ["src", "alt"], Ae = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-secondary-text bg-card rounded-md"
}, Oe = ["onClick"], Ue = {
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
    const l = e, t = S(e, "files"), o = S(e, "selectedIdx"), n = ie(), { formatFiles: r } = ue(), i = M(-1), c = M(r(l.files)), u = (y) => {
      t.value = t.value.filter((m, $) => $ !== y), o.value > y && (o.value -= 1);
    }, g = ({ moved: { oldIndex: y, newIndex: m } }) => {
      t.value = Te(t.value, y, m), o.value === y ? o.value = m : o.value > y && o.value <= m ? o.value-- : o.value < y && o.value >= m && o.value++;
    }, b = D(() => l.size === "lg" ? "w-16 h-16" : "w-14 h-14");
    return O(t, () => c.value = r(l.files)), (y, m) => (a(), s("div", Ie, [
      w(y.$slots, "additional-items-before"),
      h(f(we), {
        modelValue: c.value,
        "onUpdate:modelValue": m[1] || (m[1] = ($) => c.value = $),
        "item-key": "uuid",
        "swap-threshold": 0.65,
        animation: 200,
        class: "flex gap-2",
        onChange: g
      }, {
        item: V(({ element: $, index: B }) => [
          d("div", {
            class: v(`relative border-secondary rounded-md ${b.value} ${o.value === B ? "border-3 bg-secondary" : ""}`),
            onMouseenter: (j) => i.value = B,
            onMouseleave: m[0] || (m[0] = (j) => i.value = -1)
          }, [
            d("button", {
              class: "w-full h-full",
              onClick: (j) => o.value = B
            }, [
              $.type === "image" ? (a(), s("img", {
                key: 0,
                src: $.preview,
                alt: $.name,
                class: "w-full h-full object-cover rounded-md"
              }, null, 8, Le)) : (a(), s("span", Ae, [
                $.type === "audio" ? (a(), F(f(T), {
                  key: 0,
                  icon: f(be),
                  size: "lg"
                }, null, 8, ["icon"])) : $.type === "video" ? (a(), F(f(T), {
                  key: 1,
                  icon: f(he),
                  size: "lg"
                }, null, 8, ["icon"])) : (a(), F(f(T), {
                  key: 2,
                  icon: f(ae),
                  size: "lg"
                }, null, 8, ["icon"]))
              ]))
            ], 8, je),
            i.value === B || f(n) ? (a(), s("button", {
              key: 0,
              onClick: (j) => u(B),
              class: "absolute cursor-pointer top-0 right-0 text-secondary-text bg-card/80 rounded-full w-5 h-5 flex justify-center items-center"
            }, [
              h(f(T), {
                icon: f(J),
                size: "xs"
              }, null, 8, ["icon"])
            ], 8, Oe)) : k("", !0)
          ], 42, Ee)
        ]),
        _: 1
      }, 8, ["modelValue"]),
      w(y.$slots, "additional-items-after")
    ]));
  }
}, Ne = ["src"], bl = {
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
      class: v(`rounded-full ${e.styles}`)
    }, null, 10, Ne));
  }
}, Pe = { class: "flex items-center" }, He = ["src", "alt"], hl = {
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
    return (l, t) => (a(), s("div", Pe, [
      (a(!0), s(L, null, A(e.avatars, (o, n) => (a(), s("img", {
        key: n,
        src: o,
        alt: `avatar ${n + 1}`,
        class: v(`${e.width} rounded-full relative`),
        style: ge({ marginLeft: n === 0 ? "0" : `-${e.overlap}px` })
      }, null, 14, He))), 128))
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
      class: v(`text-${e.size} text-black font-bold bg-${e.color} rounded-xl px-1 ${e.styles} min-w-3 min-h-3`)
    }, [
      w(l.$slots, "default", {}, () => [
        Z(p(e.content), 1)
      ])
    ], 2));
  }
}, Re = ["disabled", "type"], Qe = {
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
    const t = e, o = l, n = M(!1), r = (u) => {
      t.href && window.open(t.href), o("click", u);
    }, i = D(() => t.color === "base" ? "secondary-text" : t.color), c = D(() => {
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
      onMousedown: g[0] || (g[0] = (b) => n.value = !0),
      onMouseup: g[1] || (g[1] = (b) => n.value = !1),
      class: v([c.value, { pressed: n.value }, { "disabled-btn": e.disabled }]),
      disabled: e.disabled,
      type: e.type
    }, [
      w(u.$slots, "default")
    ], 42, Re));
  }
}, qe = { class: "flex items-center gap-2" }, We = ["for"], Ge = {
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
    const t = S(e, "modelValue"), o = l, n = () => {
      t.value = !t.value, o("toggle", t.value);
    };
    return (r, i) => (a(), s("div", null, [
      d("div", qe, [
        d("button", {
          onClick: i[0] || (i[0] = (c) => n()),
          type: "button",
          class: v(["rounded-sm cursor-pointer border-secondary border-2 w-4 h-4 flex items-center justify-center text-black", { "bg-secondary": t.value, "hover:bg-secondary/30": !t.value }])
        }, [
          t.value ? (a(), F(f(T), {
            key: 0,
            icon: f(se),
            size: "xs"
          }, null, 8, ["icon"])) : k("", !0)
        ], 2),
        d("label", { for: e.name }, [
          w(r.$slots, "default")
        ], 8, We)
      ]),
      e.error ? (a(), s("p", Ge, p(e.error), 1)) : k("", !0)
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
    const t = e, o = l, n = S(e, "modelValue"), r = D(() => `${t.styles} py-1 px-3 duration-100 text-center border-2 rounded-${t.rounded} text-${t.size} text-${t.color} border-${t.color} hover:bg-${t.color}/10`), i = D(() => `${t.styles} py-1 px-3 duration-100 text-center border-2 rounded-${t.rounded} text-${t.size} bg-${t.color} border-${t.color} text-black`);
    return (c, u) => (a(), s("button", {
      onClick: u[0] || (u[0] = (g) => o("select")),
      class: v(n.value ? i.value : r.value)
    }, [
      w(c.$slots, "default")
    ], 2));
  }
}, Ke = ["for"], Ze = {
  key: 0,
  class: "flex justify-center items-center w-10 rounded-l-md"
}, Xe = { key: 0 }, Je = { key: 1 }, Ye = {
  key: 2,
  class: "text-secondary-text"
}, _e = ["name", "type", "placeholder", "value", "disabled"], et = {
  key: 0,
  class: "text-error text-sm"
}, tt = {
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
    const t = e, o = l, n = S(e, "modelValue"), r = S(e, "input"), i = M(!1), c = D(
      () => t.variant === "filled" ? `bg-${t.color}` : "bg-transparent border border-secondary-text"
    ), u = (y) => {
      i.value = !0, o("input", y);
    }, g = (y) => {
      i.value = !1, o("blur", y);
    }, b = (y) => {
      n.value = y.target.value, o("input", y);
    };
    return (y, m) => (a(), s("div", null, [
      d("label", {
        for: e.name,
        class: "font-medium"
      }, p(e.label), 9, Ke),
      d("div", {
        class: v([
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
        e.icon ? (a(), s("div", Ze, [
          h(f(T), {
            icon: e.icon,
            size: e.size,
            class: "text-secondary-text"
          }, null, 8, ["icon", "size"])
        ])) : k("", !0),
        d("div", {
          class: v(["flex-grow w-full flex items-center gap-1 flex-wrap p-2", { "pl-0": e.icon }])
        }, [
          w(y.$slots, "left-section"),
          e.disabled ? (a(), s("div", {
            key: 0,
            class: v([{ "pl-0": e.icon, "text-sm": e.size === "sm" }, "flex-grow"])
          }, [
            n.value ? (a(), s("span", Xe, p(n.value), 1)) : e.value ? (a(), s("span", Je, p(e.value), 1)) : e.placeholder ? (a(), s("span", Ye, p(e.placeholder), 1)) : k("", !0)
          ], 2)) : (a(), s("input", {
            key: 1,
            ref_key: "inputElement",
            ref: r,
            name: e.name,
            type: e.type,
            placeholder: e.placeholder,
            value: n.value ?? e.value,
            disabled: e.disabled,
            onInput: b,
            onFocus: u,
            onBlur: g,
            class: v([{ "placeholder:text-sm": e.size === "sm" }, "p-0 flex-grow border-none outline-none rounded-lg bg-transparent placeholder:text-secondary-text"])
          }, null, 42, _e))
        ], 2),
        w(y.$slots, "right-section")
      ], 2),
      e.error && typeof e.error != "boolean" ? (a(), s("p", et, p(e.error), 1)) : e.success && typeof e.error != "boolean" ? (a(), s("p", tt, p(e.success), 1)) : k("", !0)
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
    const l = e, t = S(e, "modelValue"), o = (r) => {
      let i = parseFloat(r.target.value.replace(/[^\d.-]/g, ""));
      Fe(i) > 0 && (i = (Math.round(i * 100) / 100).toFixed(2)), t.value = i;
    }, n = D(() => {
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
}, lt = (e) => `${Q(e)} ${formatTimestamp24Hour(e)}`, nt = (e) => `${Q(e[0])} - ${Q(e[1])}`, ot = { class: "font-medium" }, at = {
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
    const l = e, t = S(e, "modelValue"), o = M(null), n = D(() => l.range ? nt : l.includeTime ? lt : Q);
    return (r, i) => (a(), s("div", {
      class: v(e.styles)
    }, [
      d("label", ot, p(e.label), 1),
      h(f(Ce), {
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
        "dp-input": V(({ value: c }) => [
          h(q, {
            placeholder: e.placeholder,
            value: c,
            icon: f(xe),
            variant: e.variant,
            size: e.size,
            color: e.color,
            error: !!e.error
          }, null, 8, ["placeholder", "value", "icon", "variant", "size", "color", "error"])
        ]),
        _: 1
      }, 8, ["modelValue", "format", "disabled", "enable-time-picker", "range", "min-date", "max-date"]),
      e.error ? (a(), s("p", at, p(e.error), 1)) : k("", !0)
    ], 2));
  }
}, st = {
  __name: "Dropzone",
  props: {
    modelValue: { default: !1 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ x(["drop"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = l, o = S(e, "modelValue"), n = (r) => {
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
}, rt = ["multiple", "accept"], ce = {
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
    const t = e, o = l, n = M(null), r = () => {
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
      }, null, 40, rt),
      d("div", { onClick: r }, [
        w(i.$slots, "default")
      ])
    ]));
  }
}, it = {
  key: 0,
  class: "font-medium mb-1"
}, ut = {
  key: 0,
  class: "mb-2"
}, ct = { class: "font-medium" }, dt = {
  key: 0,
  class: "text-error text-sm mt-1"
}, mt = {
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
    const l = S(e, "modelValue"), t = (r) => l.value = Array.from(r), o = (r) => t(r.dataTransfer.files), n = (r) => t(r.target.files);
    return (r, i) => (a(), s("div", null, [
      e.label ? (a(), s("p", it, p(e.label), 1)) : k("", !0),
      d("div", null, [
        h(ce, {
          onChange: n,
          accept: "image/*"
        }, {
          default: V(() => [
            h(st, { onDrop: o }, {
              default: V(({ isDragOver: c }) => [
                d("div", {
                  class: v(["cursor-pointer duration-300 text-center border-2 border-dashed py-6 px-4 rounded-lg", {
                    "bg-secondary/30": c,
                    "text-secondary border-secondary": !e.error,
                    "text-error border-error": e.error
                  }])
                }, [
                  e.withIcon ? (a(), s("div", ut, [
                    h(f(T), {
                      icon: f($e),
                      size: "lg"
                    }, null, 8, ["icon"])
                  ])) : k("", !0),
                  d("p", ct, p(e.dropText), 1)
                ], 2)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e.error ? (a(), s("p", dt, p(e.error), 1)) : k("", !0)
      ])
    ]));
  }
}, ft = () => {
  const e = M(!1), l = M(null), t = () => e.value = !0, o = () => e.value = !1, n = (r) => {
    l.value.contains(r.target) || o();
  };
  return U(() => {
    document.addEventListener("mousedown", n);
  }), X(() => {
    document.removeEventListener("mousedown", n);
  }), { dropdownOpen: e, dropdownContainer: l, open: t, close: o };
}, Y = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [o, n] of l)
    t[o] = n;
  return t;
}, vt = ["onClick", "onMouseover"], yt = { key: 1 }, gt = {
  key: 0,
  class: "text-xs text-secondary-text"
}, pt = {
  __name: "DropdownOptions",
  props: {
    container: Object,
    options: Array,
    optionLabel: {
      type: String,
      default: "label"
    },
    trackBy: {
      type: String,
      default: "value"
    },
    optionDescription: {
      type: String,
      default: "description"
    },
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
    const t = e, o = l, n = P(), r = M(-1), i = M("top-full"), c = M(null), u = (m) => o("select", m), g = () => {
      const m = t.container.getBoundingClientRect(), $ = window.innerHeight || document.documentElement.clientHeight;
      i.value = m.bottom + 150 > $ ? "bottom-full" : "top-full";
    }, b = () => {
      i.value = "top-full";
    }, y = async (m) => {
      r.value += m, r.value < 0 ? r.value = t.options.length - 1 : r.value >= t.options.length && (r.value = 0), await oe();
      const B = c.value?.querySelectorAll("div > div")?.[r.value];
      B && B.scrollIntoView({ block: "nearest", behavior: "smooth" });
    };
    return W("ArrowDown", (m) => {
      t.open && t.options.length > 0 && (m.preventDefault(), y(1));
    }), W("ArrowUp", (m) => {
      t.open && t.options.length > 0 && (m.preventDefault(), y(-1));
    }), W("Enter", (m) => {
      t.open && t.options.length > 0 ? (m.preventDefault(), u(t.options[r.value])) : t.acceptsEmptySelection && (m.preventDefault(), u());
    }), O(() => t.open, () => {
      t.open || (r.value = -1);
    }), (m, $) => (a(), F(N, {
      name: i.value === "top-full" ? "slide-down" : "slide-up",
      onBeforeEnter: g,
      onAfterLeave: b
    }, {
      default: V(() => [
        e.open && e.options?.length > 0 ? (a(), s("div", {
          key: 0,
          ref_key: "optionsContainer",
          ref: c,
          class: v([
            "rounded-md bg-dropdown text-dropdown-text absolute overflow-auto max-h-64 flex flex-col cursor-pointer z-50",
            e.width,
            e.direction === "right" ? "right-0" : "left-0",
            i.value
          ])
        }, [
          (a(!0), s(L, null, A(e.options, (B, j) => (a(), s("div", {
            key: e.options[e.trackBy],
            onClick: (I) => u(B),
            onMouseover: (I) => r.value = j,
            class: v(["text-md py-2 px-6 rounded-md text-left", { "bg-dropdown-select": r.value === j }])
          }, [
            f(n).option ? w(m.$slots, "option", {
              key: 0,
              option: B
            }, void 0, !0) : (a(), s("div", yt, [
              Z(p(B[e.optionLabel]) + " ", 1),
              B[e.optionDescription] ? (a(), s("div", gt, p(B[e.optionDescription]), 1)) : k("", !0)
            ]))
          ], 42, vt))), 128))
        ], 2)) : k("", !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}, _ = /* @__PURE__ */ Y(pt, [["__scopeId", "data-v-f26fd92c"]]), Vl = {
  __name: "DropdownMenu",
  props: {
    options: Array,
    direction: {
      type: String,
      default: "left"
    }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const t = l, o = P(), { dropdownOpen: n, dropdownContainer: r } = ft(), i = (c) => {
      n.value = !1, t("select", c);
    };
    return (c, u) => (a(), s("div", {
      class: "relative",
      ref_key: "dropdownContainer",
      ref: r
    }, [
      d("div", {
        onClick: u[0] || (u[0] = (g) => n.value = !f(n))
      }, [
        w(c.$slots, "trigger")
      ]),
      h(_, {
        container: f(r),
        options: e.options,
        open: f(n),
        "accepts-empty-selection": "",
        onSelect: i,
        width: "w-64",
        direction: e.direction
      }, R({ _: 2 }, [
        f(o).option ? {
          name: "option",
          fn: V(({ option: g }) => [
            w(c.$slots, "option", { option: g })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["container", "options", "open", "direction"])
    ], 512));
  }
}, ee = {
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
    const t = e, o = l, n = D(() => {
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
    return (r, i) => (a(), F(Qe, {
      styles: `${e.styles} ${n.value} flex justify-center items-center !px-0 !py-0`,
      href: e.href,
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      variant: e.variant,
      onClick: i[0] || (i[0] = (c) => o("click", c))
    }, {
      default: V(() => [
        h(f(T), {
          size: e.size,
          icon: e.icon
        }, null, 8, ["size", "icon"])
      ]),
      _: 1
    }, 8, ["styles", "href", "type", "color", "disabled", "variant"]));
  }
}, bt = { class: "flex-grow" }, ht = { class: "text-md font-medium" }, Cl = {
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
    const l = e, t = M(!0);
    return U(() => setTimeout(() => t.value = !1, l.duration)), (o, n) => (a(), F(N, { name: "slide-fade" }, {
      default: V(() => [
        t.value ? (a(), s("div", {
          key: 0,
          class: v(`w-96 flex items-center gap-2 rounded-md p-2 my-2 bg-${e.color}/${e.opacity}`)
        }, [
          d("div", bt, [
            d("p", ht, p(e.content), 1)
          ]),
          h(ee, {
            icon: f(J),
            color: "base",
            variant: "subtle",
            "on-click": () => t.value = !1
          }, null, 8, ["icon", "on-click"])
        ], 2)) : k("", !0)
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
        e.label ? (a(), s("p", $t, p(e.label), 1)) : k("", !0)
      ])
    ]));
  }
}, zl = /* @__PURE__ */ Y(St, [["__scopeId", "data-v-d8288a84"]]), kt = { class: "flex items-center justify-center" }, wt = { key: 0 }, Vt = ["src", "alt"], Ct = { key: 1 }, zt = ["src"], Mt = { key: 2 }, Bt = ["src"], Dt = {
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
    const l = S(e, "selectedIdx"), t = ie(), o = () => {
      const n = document.querySelector("swiper-container").swiper;
      l.value = n.activeIndex;
    };
    return O(l, () => {
      const n = document.querySelector("swiper-container")?.swiper;
      l.value !== n.activeIndex && n.slideTo(l.value);
    }), (n, r) => {
      const i = te("swiper-slide"), c = te("swiper-container");
      return a(), F(c, {
        "slides-per-view": 1,
        "centered-slides": !0,
        navigation: !f(t),
        onSwiperslidechange: o
      }, {
        default: V(() => [
          (a(!0), s(L, null, A(e.files, (u) => (a(), F(i, null, {
            default: V(() => [
              d("div", kt, [
                u.type === "image" ? (a(), s("div", wt, [
                  d("img", {
                    src: u.preview,
                    alt: u.name,
                    class: v(e.maxMediaHeight)
                  }, null, 10, Vt)
                ])) : u.type === "video" ? (a(), s("div", Ct, [
                  d("video", {
                    src: u.preview,
                    controls: "",
                    class: v(e.maxMediaHeight)
                  }, null, 10, zt)
                ])) : u.type === "audio" ? (a(), s("div", Mt, [
                  d("audio", {
                    src: u.preview,
                    controls: ""
                  }, null, 8, Bt)
                ])) : (a(), s("div", Dt, [
                  h(f(T), {
                    icon: f(ae),
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
}, Et = {
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
    const l = S(e, "modelValue"), t = M(0), { formatFiles: o } = ue(), n = (i) => l.value.push(...i.target.files), r = D(() => o(l.value));
    return (i, c) => (a(), s("div", null, [
      e.label ? (a(), s("label", Ft, p(e.label), 1)) : k("", !0),
      l.value.length > 0 ? (a(), s("div", It, [
        h(Tt, {
          "selected-idx": t.value,
          "onUpdate:selectedIdx": c[0] || (c[0] = (u) => t.value = u),
          files: r.value
        }, null, 8, ["selected-idx", "files"]),
        h(Ue, {
          "selected-idx": t.value,
          "onUpdate:selectedIdx": c[1] || (c[1] = (u) => t.value = u),
          files: l.value,
          "onUpdate:files": c[2] || (c[2] = (u) => l.value = u)
        }, {
          "additional-items-after": V(() => [
            h(ce, {
              onChange: n,
              accept: "image/*"
            }, {
              default: V(() => [
                h(ee, {
                  icon: f(Se),
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
        e.error ? (a(), s("p", Et, p(e.error), 1)) : k("", !0)
      ])) : (a(), F(mt, {
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
    return ne(() => t("close")), (o, n) => (a(), F(f(me), {
      "overlay-transition": "vfm-fade",
      "content-transition": "vfm-fade",
      class: "flex justify-center items-center",
      "content-class": e.contentClass
    }, {
      default: V(() => [
        h(re, { styles: "w-full" }, {
          default: V(() => [
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
    const l = e, t = S(e, "modelValue"), o = P(), n = fe({
      component: jt,
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
    }), (r, i) => (a(), F(f(ve)));
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
    const t = e, o = l, n = S(e, "modelValue"), r = S(e, "searchQuery"), i = S(e, "input"), c = P(), u = M(!1), g = M(null), b = D(() => t.acceptsDuplicates ? t.options : t.options.filter((C) => !n.value.includes(t.formatResult(C)))), y = (C) => {
      n.value.push(t.formatResult(C)), r.value = "", o("select", C);
    }, m = (C) => {
      n.value = n.value.filter((z, E) => E !== C);
    }, $ = () => {
      u.value = !0;
    }, B = () => {
      u.value = !1;
    }, j = () => {
      t.searchable || (u.value ? B() : $());
    }, I = (C) => {
      g.value.contains(C.target) || B();
    };
    return U(() => {
      document.addEventListener("mousedown", I);
    }), X(() => {
      document.removeEventListener("mousedown", I);
    }), O(r, () => {
      t.searchable && r.value.length > 0 && $();
    }), (C, z) => (a(), s("div", {
      class: v([e.styles])
    }, [
      d("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: g
      }, [
        d("div", {
          onClick: z[4] || (z[4] = (E) => j()),
          class: v({ "cursor-pointer": !e.searchable })
        }, [
          h(q, {
            modelValue: r.value,
            "onUpdate:modelValue": z[0] || (z[0] = (E) => r.value = E),
            input: i.value,
            "onUpdate:input": z[1] || (z[1] = (E) => i.value = E),
            label: e.label,
            placeholder: e.placeholder,
            disabled: !e.searchable,
            icon: e.icon,
            error: !!e.error,
            size: e.size,
            color: e.color,
            variant: e.variant,
            styles: e.textboxStyles,
            onFocus: z[2] || (z[2] = (E) => o("focus", E)),
            onBlur: z[3] || (z[3] = (E) => o("blur", E))
          }, {
            "left-section": V(() => [
              (a(!0), s(L, null, A(n.value, (E, de) => (a(), s("div", {
                key: e.optionLabel[e.trackBy]
              }, [
                w(C.$slots, "selectedTag", {
                  option: E,
                  deselect: () => m(de)
                })
              ]))), 128))
            ]),
            _: 3
          }, 8, ["modelValue", "input", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        h(_, {
          container: g.value,
          options: b.value,
          "option-label": e.optionLabel,
          "track-by": e.trackBy,
          open: u.value,
          "accepts-empty-selection": e.acceptsEmptySelection,
          onSelect: y
        }, R({ _: 2 }, [
          f(c).option ? {
            name: "option",
            fn: V(({ option: E }) => [
              w(C.$slots, "option", { option: E })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      e.error && typeof e.error != "boolean" ? (a(), s("p", Lt, p(e.error), 1)) : k("", !0)
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
    const l = e, t = S(e, "modelValue"), o = D(
      () => l.variant === "filled" ? `bg-${l.color}` : "bg-transparent border border-secondary-text"
    ), n = D(() => l.modelValue > l.max ? `Value must be ${l.max} or less.` : l.modelValue < l.min ? `Value must be ${l.min} or more.` : !1);
    return (r, i) => (a(), s("div", null, [
      d("h4", At, p(e.label), 1),
      d("div", {
        class: v(["rounded-lg flex h-10 items-center", o.value, e.styles, { error: n.value || e.error, "px-2": !e.icon }])
      }, [
        e.icon ? (a(), s("div", Ot, [
          h(f(T), {
            icon: e.icon,
            size: "1x",
            class: "text-secondary-text"
          }, null, 8, ["icon"])
        ])) : k("", !0),
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
      n.value ? (a(), s("p", Nt, p(n.value), 1)) : e.error && typeof e.error == "string" ? (a(), s("p", Pt, p(e.error), 1)) : k("", !0)
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
    const l = e, t = D(() => l.limit ? `${l.text.substring(0, l.limit)}${l.text.length > l.limit ? "..." : ""}` : l.text);
    return (o, n) => (a(), s("p", {
      class: v([e.styles, { "whitespace-pre-wrap": e.includeWhitespace }])
    }, p(t.value), 3));
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
    const t = e, o = l, n = S(e, "modelValue"), r = M(!1), i = D(() => t.modelValue === t.value), c = (u) => {
      n.value = t.value, o("select", u);
    };
    return (u, g) => (a(), s("label", {
      class: "flex items-center gap-3 relative cursor-pointer",
      onMouseenter: g[1] || (g[1] = (b) => r.value = !0),
      onMouseleave: g[2] || (g[2] = (b) => r.value = !1)
    }, [
      d("input", {
        class: "absolute opacity-0 cursor-pointer",
        type: "radio",
        name: e.name,
        value: e.value,
        checked: i.value,
        onChange: g[0] || (g[0] = (b) => c(b))
      }, null, 40, Ht),
      d("span", Rt, [
        d("span", {
          class: v(["rounded-full h-2 w-2", { "bg-secondary": r.value || i.value }])
        }, null, 2)
      ]),
      d("span", null, p(e.label), 1)
    ], 32));
  }
}, Qt = { class: "flex items-center pr-1" }, qt = { class: "flex items-center pr-2 text-secondary-text" }, Wt = {
  key: 0,
  class: "text-error text-sm"
}, El = {
  __name: "Select",
  props: /* @__PURE__ */ x({
    options: Array,
    label: String,
    optionLabel: {
      type: String,
      default: "label"
    },
    trackBy: {
      type: String,
      default: "value"
    },
    optionDescription: {
      type: String,
      default: "description"
    },
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
    const t = e, o = l, n = S(e, "modelValue"), r = S(e, "searchQuery"), i = S(e, "input"), c = P(), u = M(!1), g = M(null), b = (I) => {
      n.value = t.formatResult(I), t.optionLabel && (r.value = I[t.optionLabel]), o("select", I), oe($);
    }, y = (I) => {
      I.stopPropagation(), n.value = null, r.value = "";
    }, m = () => {
      u.value = !0;
    }, $ = () => {
      u.value = !1;
    }, B = () => {
      t.searchable || (u.value ? $() : m());
    }, j = (I) => {
      g.value.contains(I.target) || $();
    };
    return U(() => {
      document.addEventListener("mousedown", j);
    }), X(() => {
      document.removeEventListener("mousedown", j);
    }), O(r, () => {
      t.searchable && r.value.length > 0 ? m() : t.searchable && $();
    }), (I, C) => (a(), s("div", {
      class: v([e.styles])
    }, [
      d("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: g
      }, [
        d("div", {
          onClick: C[4] || (C[4] = (z) => B()),
          class: v({ "cursor-pointer": !e.searchable })
        }, [
          h(q, {
            modelValue: r.value,
            "onUpdate:modelValue": C[0] || (C[0] = (z) => r.value = z),
            input: i.value,
            "onUpdate:input": C[1] || (C[1] = (z) => i.value = z),
            value: n.value ? n.value[e.optionLabel] : null,
            label: e.label,
            placeholder: e.placeholder,
            disabled: !e.searchable || e.lockOnSelect && n.value,
            icon: n.value?.icon ?? e.icon,
            error: !!e.error,
            size: e.size,
            color: e.color,
            variant: e.variant,
            styles: e.textboxStyles,
            onFocus: C[2] || (C[2] = (z) => o("focus", z)),
            onBlur: C[3] || (C[3] = (z) => o("blur", z))
          }, R({ _: 2 }, [
            e.lockOnSelect && e.searchable && n.value ? {
              name: "right-section",
              fn: V(() => [
                d("div", Qt, [
                  h(ee, {
                    icon: f(J),
                    "on-click": y,
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
                d("div", qt, [
                  h(f(T), {
                    icon: f(ke),
                    size: e.size
                  }, null, 8, ["icon", "size"])
                ])
              ]),
              key: "1"
            }
          ]), 1032, ["modelValue", "input", "value", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        h(_, {
          container: g.value,
          options: e.options,
          "option-label": e.optionLabel,
          "track-by": e.trackBy,
          open: u.value,
          "accepts-empty-selection": e.acceptsEmptySelection,
          onSelect: b
        }, R({ _: 2 }, [
          f(c).option ? {
            name: "option",
            fn: V(({ option: z }) => [
              w(I.$slots, "option", { option: z })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      e.error && typeof e.error != "boolean" ? (a(), s("p", Wt, p(e.error), 1)) : k("", !0)
    ], 2));
  }
}, Gt = {
  key: 0,
  class: "w-full"
}, Kt = { class: "flex justify-between items-center gap-2 px-4" }, Zt = ["onClick"], Xt = { class: "flex justify-between items-center mt-1 px-3" }, Jt = ["onClick"], Yt = ["onClick"], jl = {
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
    const l = e, t = S(e, "modelValue"), o = D(() => l.steps.findIndex((u) => u.value === t.value)), n = D(() => l.steps.map((u, g) => g < o.value ? { ...u, status: "completed" } : g === o.value ? { ...u, status: "in-progress" } : { ...u, status: "uncompleted" })), r = (u) => u.status === "uncompleted" || u.status !== "in-progress" && l.variant === "minimalist" ? "text-secondary-text bg-card-accent" : `text-${l.color} bg-${l.color}${l.variant === "classic" ? "/30" : ""}`, i = (u) => l.canMoveForwards && u > o.value || l.canMoveBackwards && u < o.value ? "cursor-pointer" : "cursor-default", c = (u, g) => {
      (l.canMoveForwards && g > o.value || l.canMoveBackwards && g < o.value) && (t.value = u.value);
    };
    return (u, g) => e.variant === "classic" ? (a(), s("div", Gt, [
      d("div", Kt, [
        (a(!0), s(L, null, A(n.value, (b, y) => (a(), s(L, {
          key: b.value
        }, [
          d("div", {
            onClick: (m) => c(b, y),
            class: v([
              "w-10 h-10 rounded-full flex items-center justify-center",
              r(b),
              i(y)
            ])
          }, [
            h(f(T), {
              icon: b.status === "completed" && !e.canMoveBackwards ? f(se) : b.icon
            }, null, 8, ["icon"])
          ], 10, Zt),
          y < e.steps.length - 1 ? (a(), s("div", {
            key: 0,
            class: v(`flex-grow bg-${n.value[y + 1].status === "uncompleted" ? "secondary-text" : e.color} h-0.5`)
          }, null, 2)) : k("", !0)
        ], 64))), 128))
      ]),
      d("div", Xt, [
        (a(!0), s(L, null, A(n.value, (b, y) => (a(), s("p", {
          key: "label-" + b.value,
          onClick: (m) => c(b, y),
          class: v([
            b.status === "uncompleted" ? "text-secondary-text" : `text-${e.color}`,
            "text-xs font-medium text-center",
            i(y)
          ])
        }, p(b.label), 11, Jt))), 128))
      ])
    ])) : e.variant === "minimalist" ? (a(), s("div", {
      key: 1,
      class: v(`grid grid-cols-${n.value.length} gap-1`)
    }, [
      (a(!0), s(L, null, A(n.value, (b, y) => (a(), s("div", {
        key: b.value,
        onClick: (m) => c(b, y)
      }, [
        d("div", {
          class: v(["h-1 rounded-lg mb-1", r(b), i(y)])
        }, null, 2),
        d("p", {
          class: v([
            b.status !== "in-progress" ? "text-secondary-text" : `text-${e.color}`,
            "text-sm font-medium",
            i(y)
          ])
        }, p(b.label), 3)
      ], 8, Yt))), 128))
    ], 2)) : k("", !0);
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
const Ll = /* @__PURE__ */ Y(_t, [["render", el]]), tl = ["onClick"], Al = {
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
    const l = S(e, "selectedTab");
    return (t, o) => (a(), s("div", null, [
      d("div", {
        class: v(["tab-container", { "justify-between": e.stretch }])
      }, [
        (a(!0), s(L, null, A(e.tabs, (n) => (a(), s("button", {
          key: n.name,
          class: v(["cursor-pointer", [{
            "text-error": n.error,
            "underline-offset-8 underline font-medium": n.name === l.value
          }, `text-${e.size}`]]),
          onClick: (r) => l.value = n.name,
          type: "button"
        }, p(n.label), 11, tl))), 128))
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
      class: v(`py-1 px-4 rounded-${e.rounded} duration-100 text-center text-black text-${e.size} bg-${e.color}`)
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
    const t = e, o = l, n = S(e, "modelValue"), r = S(e, "input"), i = M(t.modelValue), c = M(!1), u = D(
      () => t.variant === "filled" ? `bg-${t.color}` : "bg-transparent ring-1 ring-secondary-text"
    ), g = (m) => {
      c.value = !0, o("focus", m);
    }, b = (m) => {
      c.value = !1, o("blur", m);
    }, y = (m) => {
      const $ = m.target;
      i.value = $.value, n.value = $.value, o("input", m);
    };
    return O(
      () => t.modelValue,
      (m) => {
        i.value = m;
      }
    ), (m, $) => (a(), s("div", null, [
      d("div", ll, [
        d("label", {
          for: e.name,
          class: "font-medium"
        }, p(e.label), 9, nl),
        e.maxlength ? (a(), s("p", ol, p(n.value?.length ?? 0) + " / " + p(e.maxlength), 1)) : k("", !0)
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
          onInput: y,
          onFocus: g,
          onBlur: b,
          onKeydown: $[0] || ($[0] = (B) => o("keyPress", B)),
          maxlength: e.maxlength,
          rows: e.rows,
          ref_key: "inputElement",
          ref: r
        }, null, 42, al)
      ], 2),
      e.error && typeof e.error != "boolean" ? (a(), s("p", sl, p(e.error), 1)) : e.success && typeof e.error != "boolean" ? (a(), s("p", rl, p(e.success), 1)) : k("", !0)
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
    const t = e, o = l, n = S(e, "modelValue"), r = () => {
      n.value = !n.value, o("toggle", n.value);
    }, i = D(
      () => n.value ? `bg-${t.activeColor}` : "bg-gray-300 dark:bg-gray-600"
    ), c = D(
      () => n.value ? "translate-x-6" : "translate-x-0"
    );
    return U(() => {
      n.value = n.value ?? t.value;
    }), (u, g) => (a(), s("div", {
      onClick: r,
      class: v([i.value, "cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300"])
    }, [
      d("div", {
        class: v([c.value, "bg-white dark:bg-gray-200 text-black text-sm flex justify-center items-center w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"])
      }, [
        e.icon ? (a(), F(f(T), {
          key: 0,
          icon: e.icon
        }, null, 8, ["icon"])) : k("", !0)
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
    const l = e, t = M(!1), o = D(() => {
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
      h(N, { name: "fade" }, {
        default: V(() => [
          t.value ? (a(), s("div", {
            key: 0,
            class: v([o.value, "absolute delay-1000 z-50"])
          }, [
            d("div", il, [
              w(n.$slots, "tooltip-content", {}, () => [
                Z(p(e.text), 1)
              ])
            ])
          ], 2)) : k("", !0)
        ]),
        _: 3
      })
    ], 32));
  }
}, Hl = {
  install(e) {
    const l = ye();
    e.use(l);
  }
};
export {
  pl as Accordion,
  Ue as AttachmentList,
  bl as Avatar,
  hl as AvatarGroup,
  xl as Badge,
  Qe as Button,
  re as Card,
  $l as Checkbox,
  Sl as ClickableTag,
  kl as CurrencyInput,
  wl as DatePicker,
  mt as DragAndDropFiles,
  Vl as DropdownMenu,
  _ as DropdownOptions,
  st as Dropzone,
  ce as FileButton,
  Cl as FlashMessage,
  ee as IconButton,
  zl as Loader,
  Tt as MediaCarousel,
  Ml as MediaInput,
  Bl as Modal,
  Dl as Multiselect,
  Tl as NumberInput,
  Fl as Paragraph,
  Il as Radio,
  El as Select,
  jl as Stepper,
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
