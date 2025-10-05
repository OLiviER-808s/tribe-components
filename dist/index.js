import { VueFinalModal as me, useModal as fe, ModalsContainer as ve, createVfm as ye } from "vue-final-modal";
import { createElementBlock as s, openBlock as a, normalizeClass as f, renderSlot as w, mergeModels as h, useModel as $, createBlock as T, createCommentVNode as k, withCtx as z, createElementVNode as c, withDirectives as P, createVNode as x, toDisplayString as g, Transition as U, unref as y, vShow as W, ref as D, onMounted as N, onUnmounted as te, computed as B, watch as O, Fragment as L, renderList as A, normalizeStyle as ge, createTextVNode as Z, withModifiers as G, useSlots as R, nextTick as le, resolveComponent as _, onBeforeUnmount as ne, createSlots as K, vModelText as be } from "vue";
import { FontAwesomeIcon as F } from "@fortawesome/vue-fontawesome";
import { faChevronDown as ee, faHeadphones as pe, faVideoCamera as he, faFile as ae, faXmark as X, faCheck as oe, faCalendar as xe, faUpload as $e, faPlus as Se, faSort as ke } from "@fortawesome/free-solid-svg-icons";
import we from "vuedraggable";
import { v4 as Ve } from "uuid";
import Ce from "@vuepic/vue-datepicker";
import { onKeyStroke as q } from "@vueuse/core";
const se = {
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
      class: f(`${e.styles} ${e.padding} bg-card border border-border dark:border-none rounded-md shadow-sm`)
    }, [
      w(l.$slots, "default")
    ], 2));
  }
}, ze = { class: "text-xl font-medium" }, Me = { class: "pt-4" }, Be = { key: 1 }, De = { class: "p-2" }, gl = {
  __name: "Accordion",
  props: /* @__PURE__ */ h({
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
    return (t, o) => e.variant === "card" ? (a(), T(se, { key: 0 }, {
      default: z(() => [
        c("div", {
          onClick: o[0] || (o[0] = (n) => l.value = !l.value),
          class: "flex items-center justify-between gap-2 cursor-pointer"
        }, [
          c("h3", ze, g(e.title), 1),
          x(U, { name: "rotate" }, {
            default: z(() => [
              c("div", {
                class: f({ rotated: l.value, "not-rotated": !l.value })
              }, [
                x(y(F), {
                  icon: y(ee),
                  size: "lg"
                }, null, 8, ["icon"])
              ], 2)
            ]),
            _: 1
          })
        ]),
        P(c("div", Me, [
          w(t.$slots, "default")
        ], 512), [
          [W, l.value]
        ])
      ]),
      _: 3
    })) : e.variant === "minimal" ? (a(), s("div", Be, [
      c("div", {
        onClick: o[1] || (o[1] = (n) => l.value = !l.value),
        class: "p-2 border-b-2 border-base-text flex items-center justify-between gap-2 cursor-pointer"
      }, [
        c("h3", null, g(e.title), 1),
        x(U, { name: "rotate" }, {
          default: z(() => [
            c("div", {
              class: f({ rotated: l.value, "not-rotated": !l.value })
            }, [
              x(y(F), { icon: y(ee) }, null, 8, ["icon"])
            ], 2)
          ]),
          _: 1
        })
      ]),
      P(c("div", De, [
        w(t.$slots, "default")
      ], 512), [
        [W, l.value]
      ])
    ])) : k("", !0);
  }
}, re = (e = 800) => {
  const l = D(innerWidth < e), t = () => l.value = innerWidth < e;
  return N(() => addEventListener("resize", t)), te(() => removeEventListener("resize", t)), l;
}, ie = () => ({ readableFileSize: (t) => {
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
}, Te = (e) => Math.floor(e) !== e && e.toString().split(".")[1]?.length || 0, Ie = { class: "flex justify-center gap-2 w-full p-4" }, je = ["onMouseenter"], Ee = ["onClick"], Le = ["src", "alt"], Ae = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-secondary-text bg-card rounded-md"
}, Oe = ["onClick"], Ue = {
  __name: "AttachmentList",
  props: /* @__PURE__ */ h({
    size: String
  }, {
    files: { type: Array, required: !0 },
    filesModifiers: {},
    selectedIdx: { default: 0 },
    selectedIdxModifiers: {}
  }),
  emits: ["update:files", "update:selectedIdx"],
  setup(e) {
    const l = e, t = $(e, "files"), o = $(e, "selectedIdx"), n = re(), { formatFiles: i } = ie(), r = D(-1), d = D(i(l.files)), u = (v) => {
      t.value = t.value.filter((m, S) => S !== v), o.value > v && (o.value -= 1);
    }, b = ({ moved: { oldIndex: v, newIndex: m } }) => {
      t.value = Fe(t.value, v, m), o.value === v ? o.value = m : o.value > v && o.value <= m ? o.value-- : o.value < v && o.value >= m && o.value++;
    }, p = B(() => l.size === "lg" ? "w-16 h-16" : "w-14 h-14");
    return O(t, () => d.value = i(l.files)), (v, m) => (a(), s("div", Ie, [
      w(v.$slots, "additional-items-before"),
      x(y(we), {
        modelValue: d.value,
        "onUpdate:modelValue": m[1] || (m[1] = (S) => d.value = S),
        "item-key": "uuid",
        "swap-threshold": 0.65,
        animation: 200,
        class: "flex gap-2",
        onChange: b
      }, {
        item: z(({ element: S, index: M }) => [
          c("div", {
            class: f(`relative border-secondary rounded-md ${p.value} ${o.value === M ? "border-3 bg-secondary" : ""}`),
            onMouseenter: (E) => r.value = M,
            onMouseleave: m[0] || (m[0] = (E) => r.value = -1)
          }, [
            c("button", {
              class: "w-full h-full",
              onClick: (E) => o.value = M
            }, [
              S.type === "image" ? (a(), s("img", {
                key: 0,
                src: S.preview,
                alt: S.name,
                class: "w-full h-full object-cover rounded-md"
              }, null, 8, Le)) : (a(), s("span", Ae, [
                S.type === "audio" ? (a(), T(y(F), {
                  key: 0,
                  icon: y(pe),
                  size: "lg"
                }, null, 8, ["icon"])) : S.type === "video" ? (a(), T(y(F), {
                  key: 1,
                  icon: y(he),
                  size: "lg"
                }, null, 8, ["icon"])) : (a(), T(y(F), {
                  key: 2,
                  icon: y(ae),
                  size: "lg"
                }, null, 8, ["icon"]))
              ]))
            ], 8, Ee),
            r.value === M || y(n) ? (a(), s("button", {
              key: 0,
              onClick: (E) => u(M),
              class: "absolute cursor-pointer top-0 right-0 text-secondary-text bg-card/80 rounded-full w-5 h-5 flex justify-center items-center"
            }, [
              x(y(F), {
                icon: y(X),
                size: "xs"
              }, null, 8, ["icon"])
            ], 8, Oe)) : k("", !0)
          ], 42, je)
        ]),
        _: 1
      }, 8, ["modelValue"]),
      w(v.$slots, "additional-items-after")
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
      class: f(`rounded-full ${e.styles}`)
    }, null, 10, Ne));
  }
}, Pe = { class: "flex items-center" }, He = ["src", "alt"], pl = {
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
        class: f(`${e.width} rounded-full relative`),
        style: ge({ marginLeft: n === 0 ? "0" : `-${e.overlap}px` })
      }, null, 14, He))), 128))
    ]));
  }
}, hl = {
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
      class: f(`text-${e.size} text-black font-bold bg-${e.color} rounded-xl px-1 ${e.styles} min-w-3 min-h-3`)
    }, [
      w(l.$slots, "default", {}, () => [
        Z(g(e.content), 1)
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
    const t = e, o = l, n = D(!1), i = (u) => {
      t.href && window.open(t.href), o("click", u);
    }, r = B(() => t.color === "base" ? "secondary-text" : t.color), d = B(() => {
      switch (t.variant) {
        case "light":
          return `${t.styles} btn bg-${r.value}/20 hover:bg-${r.value}/35 text-${r.value}`;
        case "outline":
          return `${t.styles} btn text-${r.value} border-${r.value} hover:bg-${r.value}/10 border-2`;
        case "subtle":
          return `${t.styles} btn text-${r.value} hover:bg-${r.value}/10`;
        case "dashed":
          return `${t.styles} btn text-${r.value} border-${r.value} border-2 border-dashed hover:bg-${r.value}/10`;
        default:
          return `${t.styles} btn text-black bg-${r.value}`;
      }
    });
    return (u, b) => (a(), s("button", {
      onClick: i,
      onMousedown: b[0] || (b[0] = (p) => n.value = !0),
      onMouseup: b[1] || (b[1] = (p) => n.value = !1),
      class: f([d.value, { pressed: n.value }, { "disabled-btn": e.disabled }]),
      disabled: e.disabled,
      type: e.type
    }, [
      w(u.$slots, "default")
    ], 42, Re));
  }
}, qe = { class: "flex items-center gap-2" }, We = ["for"], Ge = {
  key: 0,
  class: "text-error text-sm"
}, xl = {
  __name: "Checkbox",
  props: /* @__PURE__ */ h({
    name: String,
    error: String
  }, {
    modelValue: { default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ h(["toggle"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = $(e, "modelValue"), o = l, n = () => {
      t.value = !t.value, o("toggle", t.value);
    };
    return (i, r) => (a(), s("div", null, [
      c("div", qe, [
        c("button", {
          onClick: r[0] || (r[0] = (d) => n()),
          type: "button",
          class: f(["rounded-sm cursor-pointer border-secondary border-2 w-4 h-4 flex items-center justify-center text-black", { "bg-secondary": t.value, "hover:bg-secondary/30": !t.value }])
        }, [
          t.value ? (a(), T(y(F), {
            key: 0,
            icon: y(oe),
            size: "xs"
          }, null, 8, ["icon"])) : k("", !0)
        ], 2),
        c("label", { for: e.name }, [
          w(i.$slots, "default")
        ], 8, We)
      ]),
      e.error ? (a(), s("p", Ge, g(e.error), 1)) : k("", !0)
    ]));
  }
}, $l = {
  __name: "ClickableTag",
  props: /* @__PURE__ */ h({
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
  emits: /* @__PURE__ */ h(["select"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = $(e, "modelValue"), i = B(() => `${t.styles} py-1 px-3 duration-100 text-center border-2 rounded-${t.rounded} text-${t.size} text-${t.color} border-${t.color} hover:bg-${t.color}/10`), r = B(() => `${t.styles} py-1 px-3 duration-100 text-center border-2 rounded-${t.rounded} text-${t.size} bg-${t.color} border-${t.color} text-black`);
    return (d, u) => (a(), s("button", {
      onClick: u[0] || (u[0] = (b) => o("select")),
      class: f(n.value ? r.value : i.value)
    }, [
      w(d.$slots, "default")
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
}, Q = {
  __name: "Textbox",
  props: /* @__PURE__ */ h({
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
  emits: /* @__PURE__ */ h(["input", "focus", "blur"], ["update:modelValue", "update:input"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = $(e, "modelValue"), i = $(e, "input"), r = D(!1), d = B(
      () => t.variant === "filled" ? `bg-${t.color}` : "bg-transparent border border-secondary-text"
    ), u = (v) => {
      r.value = !0, o("input", v);
    }, b = (v) => {
      r.value = !1, o("blur", v);
    }, p = (v) => {
      n.value = v.target.value, o("input", v);
    };
    return (v, m) => (a(), s("div", null, [
      c("label", {
        for: e.name,
        class: "font-medium"
      }, g(e.label), 9, Ke),
      c("div", {
        class: f([
          "rounded-lg flex items-center duration-300",
          d.value,
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
        e.icon ? (a(), s("div", Ze, [
          x(y(F), {
            icon: e.icon,
            size: e.size,
            class: "text-secondary-text"
          }, null, 8, ["icon", "size"])
        ])) : k("", !0),
        c("div", {
          class: f(["flex-grow w-full flex items-center gap-1 flex-wrap p-2", { "pl-0": e.icon }])
        }, [
          w(v.$slots, "left-section"),
          e.disabled ? (a(), s("div", {
            key: 0,
            class: f([{ "pl-0": e.icon, "text-sm": e.size === "sm" }, "flex-grow"])
          }, [
            n.value ? (a(), s("span", Xe, g(n.value), 1)) : e.value ? (a(), s("span", Je, g(e.value), 1)) : e.placeholder ? (a(), s("span", Ye, g(e.placeholder), 1)) : k("", !0)
          ], 2)) : (a(), s("input", {
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
            onBlur: b,
            class: f([{ "placeholder:text-sm": e.size === "sm" }, "p-0 flex-grow border-none outline-none rounded-lg bg-transparent placeholder:text-secondary-text"])
          }, null, 42, _e))
        ], 2),
        w(v.$slots, "right-section")
      ], 2),
      e.error && typeof e.error != "boolean" ? (a(), s("p", et, g(e.error), 1)) : e.success && typeof e.error != "boolean" ? (a(), s("p", tt, g(e.success), 1)) : k("", !0)
    ]));
  }
}, Sl = {
  __name: "CurrencyInput",
  props: /* @__PURE__ */ h({
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
      let r = parseFloat(i.target.value.replace(/[^\d.-]/g, ""));
      Te(r) > 0 && (r = (Math.round(r * 100) / 100).toFixed(2)), t.value = r;
    }, n = B(() => {
      if (t.value)
        return `${l.currencySymbol}${t.value}`;
    });
    return (i, r) => (a(), T(Q, {
      label: e.label,
      value: n.value,
      "on-input": o,
      placeholder: e.currencySymbol,
      size: e.size,
      color: e.color,
      variant: e.variant
    }, null, 8, ["label", "value", "placeholder", "size", "color", "variant"]));
  }
}, H = (e) => {
  const l = navigator.language || "en-US", t = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return new Intl.DateTimeFormat(l, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: t
  }).format(e);
}, lt = (e) => `${H(e)} ${formatTimestamp24Hour(e)}`, nt = (e) => `${H(e[0])} - ${H(e[1])}`, at = { class: "font-medium" }, ot = {
  key: 0,
  class: "text-error text-sm"
}, kl = {
  __name: "DatePicker",
  props: /* @__PURE__ */ h({
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
    const l = e, t = $(e, "modelValue"), o = D(null), n = B(() => l.range ? nt : l.includeTime ? lt : H);
    return (i, r) => (a(), s("div", {
      class: f(e.styles)
    }, [
      c("label", at, g(e.label), 1),
      x(y(Ce), {
        modelValue: t.value,
        "onUpdate:modelValue": r[0] || (r[0] = (d) => t.value = d),
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
        "dp-input": z(({ value: d }) => [
          x(Q, {
            placeholder: e.placeholder,
            value: d,
            icon: y(xe),
            variant: e.variant,
            size: e.size,
            color: e.color,
            error: !!e.error
          }, null, 8, ["placeholder", "value", "icon", "variant", "size", "color", "error"])
        ]),
        _: 1
      }, 8, ["modelValue", "format", "disabled", "enable-time-picker", "range", "min-date", "max-date"]),
      e.error ? (a(), s("p", ot, g(e.error), 1)) : k("", !0)
    ], 2));
  }
}, st = {
  __name: "Dropzone",
  props: {
    modelValue: { default: !1 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ h(["drop"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = l, o = $(e, "modelValue"), n = (i) => {
      o.value = !1, t("drop", i);
    };
    return (i, r) => (a(), s("div", {
      onDragover: r[0] || (r[0] = G((d) => o.value = !0, ["prevent"])),
      onDragleave: r[1] || (r[1] = (d) => o.value = !1),
      onDrop: G(n, ["prevent"])
    }, [
      w(i.$slots, "default", { isDragOver: o.value })
    ], 32));
  }
}, rt = ["multiple", "accept"], ue = {
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
    return (r, d) => (a(), s("div", null, [
      c("input", {
        type: "file",
        ref_key: "fileInput",
        ref: n,
        onChange: d[0] || (d[0] = (u) => o("change", u)),
        multiple: e.multiple,
        accept: e.accept,
        hidden: ""
      }, null, 40, rt),
      c("div", { onClick: i }, [
        w(r.$slots, "default")
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
  props: /* @__PURE__ */ h({
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
    return (i, r) => (a(), s("div", null, [
      e.label ? (a(), s("p", it, g(e.label), 1)) : k("", !0),
      c("div", null, [
        x(ue, {
          onChange: n,
          accept: "image/*"
        }, {
          default: z(() => [
            x(st, { onDrop: o }, {
              default: z(({ isDragOver: d }) => [
                c("div", {
                  class: f(["cursor-pointer duration-300 text-center border-2 border-dashed py-6 px-4 rounded-lg", {
                    "bg-secondary/30": d,
                    "text-secondary border-secondary": !e.error,
                    "text-error border-error": e.error
                  }])
                }, [
                  e.withIcon ? (a(), s("div", ut, [
                    x(y(F), {
                      icon: y($e),
                      size: "lg"
                    }, null, 8, ["icon"])
                  ])) : k("", !0),
                  c("p", ct, g(e.dropText), 1)
                ], 2)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e.error ? (a(), s("p", dt, g(e.error), 1)) : k("", !0)
      ])
    ]));
  }
}, J = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [o, n] of l)
    t[o] = n;
  return t;
}, ft = ["onClick", "onMouseover"], vt = { key: 1 }, yt = {
  key: 0,
  class: "text-xs text-secondary-text"
}, gt = {
  __name: "DropdownOptions",
  props: /* @__PURE__ */ h({
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
    open: Boolean,
    acceptsEmptySelection: Boolean
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ h(["select"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = e, o = l;
    $(e, "modelValue");
    const n = R(), i = D(-1), r = D("top-full"), d = D(null), u = (m) => o("select", m), b = () => {
      const m = t.container.getBoundingClientRect(), S = window.innerHeight || document.documentElement.clientHeight;
      r.value = m.bottom + 150 > S ? "bottom-full" : "top-full";
    }, p = () => {
      r.value = "top-full";
    }, v = async (m) => {
      i.value += m, i.value < 0 ? i.value = t.options.length - 1 : i.value >= t.options.length && (i.value = 0), await le();
      const M = d.value?.querySelectorAll("div > div")?.[i.value];
      M && M.scrollIntoView({ block: "nearest", behavior: "smooth" });
    };
    return q("ArrowDown", (m) => {
      t.open && t.options.length > 0 && (m.preventDefault(), v(1));
    }), q("ArrowUp", (m) => {
      t.open && t.options.length > 0 && (m.preventDefault(), v(-1));
    }), q("Enter", (m) => {
      t.open && t.options.length > 0 ? (m.preventDefault(), u(t.options[i.value])) : t.acceptsEmptySelection && (m.preventDefault(), u());
    }), O(() => t.open, () => {
      t.open || (i.value = -1);
    }), (m, S) => (a(), T(U, {
      name: r.value === "top-full" ? "slide-down" : "slide-up",
      onBeforeEnter: b,
      onAfterLeave: p
    }, {
      default: z(() => [
        e.open && e.options?.length > 0 ? (a(), s("div", {
          key: 0,
          ref_key: "dropdownContainer",
          ref: d,
          class: f([
            "w-full rounded-md bg-dropdown text-dropdown-text absolute overflow-auto max-h-64 flex flex-col cursor-pointer z-50",
            r.value
          ])
        }, [
          (a(!0), s(L, null, A(e.options, (M, E) => (a(), s("div", {
            key: e.options[e.trackBy],
            onClick: (I) => u(M),
            onMouseover: (I) => i.value = E,
            class: f(["text-md py-2 px-6 rounded-md text-left", { "bg-dropdown-select": i.value === E }])
          }, [
            y(n).option ? w(m.$slots, "option", {
              key: 0,
              option: M
            }, void 0, !0) : (a(), s("div", vt, [
              Z(g(M[e.optionLabel]) + " ", 1),
              M[e.optionDescription] ? (a(), s("div", yt, g(M[e.optionDescription]), 1)) : k("", !0)
            ]))
          ], 42, ft))), 128))
        ], 2)) : k("", !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}, ce = /* @__PURE__ */ J(gt, [["__scopeId", "data-v-2cf8e7b1"]]), Y = {
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
    onClick: {
      type: Function,
      default: (e) => {
      }
    }
  },
  setup(e) {
    const l = e, t = B(() => {
      switch (l.size) {
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
    return (o, n) => (a(), T(Qe, {
      styles: `${e.styles} ${t.value} flex justify-center items-center !px-0 !py-0`,
      href: e.href,
      type: e.type,
      color: e.color,
      "on-click": e.onClick,
      disabled: e.disabled,
      variant: e.variant
    }, {
      default: z(() => [
        x(y(F), {
          size: e.size,
          icon: e.icon
        }, null, 8, ["size", "icon"])
      ]),
      _: 1
    }, 8, ["styles", "href", "type", "color", "on-click", "disabled", "variant"]));
  }
}, bt = { class: "flex-grow" }, pt = { class: "text-md font-medium" }, wl = {
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
    return N(() => setTimeout(() => t.value = !1, l.duration)), (o, n) => (a(), T(U, { name: "slide-fade" }, {
      default: z(() => [
        t.value ? (a(), s("div", {
          key: 0,
          class: f(`w-96 flex items-center gap-2 rounded-md p-2 my-2 bg-${e.color}/${e.opacity}`)
        }, [
          c("div", bt, [
            c("p", pt, g(e.content), 1)
          ]),
          x(Y, {
            icon: y(X),
            color: "base",
            variant: "subtle",
            "on-click": () => t.value = !1
          }, null, 8, ["icon", "on-click"])
        ], 2)) : k("", !0)
      ]),
      _: 1
    }));
  }
}, ht = { class: "flex items-center justify-center" }, xt = {
  key: 0,
  class: "text-center font-medium mt-2"
}, $t = {
  __name: "Loader",
  props: {
    label: String
  },
  setup(e) {
    return (l, t) => (a(), s("div", ht, [
      c("div", null, [
        t[0] || (t[0] = c("div", { class: "spinner" }, null, -1)),
        e.label ? (a(), s("p", xt, g(e.label), 1)) : k("", !0)
      ])
    ]));
  }
}, Vl = /* @__PURE__ */ J($t, [["__scopeId", "data-v-d8288a84"]]), St = { class: "flex items-center justify-center" }, kt = { key: 0 }, wt = ["src", "alt"], Vt = { key: 1 }, Ct = ["src"], zt = { key: 2 }, Mt = ["src"], Bt = {
  key: 3,
  class: "text-center"
}, Dt = {
  __name: "MediaCarousel",
  props: /* @__PURE__ */ h({
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
    const l = $(e, "selectedIdx"), t = re(), o = () => {
      const n = document.querySelector("swiper-container").swiper;
      l.value = n.activeIndex;
    };
    return O(l, () => {
      const n = document.querySelector("swiper-container")?.swiper;
      l.value !== n.activeIndex && n.slideTo(l.value);
    }), (n, i) => {
      const r = _("swiper-slide"), d = _("swiper-container");
      return a(), T(d, {
        "slides-per-view": 1,
        "centered-slides": !0,
        navigation: !y(t),
        onSwiperslidechange: o
      }, {
        default: z(() => [
          (a(!0), s(L, null, A(e.files, (u) => (a(), T(r, null, {
            default: z(() => [
              c("div", St, [
                u.type === "image" ? (a(), s("div", kt, [
                  c("img", {
                    src: u.preview,
                    alt: u.name,
                    class: f(e.maxMediaHeight)
                  }, null, 10, wt)
                ])) : u.type === "video" ? (a(), s("div", Vt, [
                  c("video", {
                    src: u.preview,
                    controls: "",
                    class: f(e.maxMediaHeight)
                  }, null, 10, Ct)
                ])) : u.type === "audio" ? (a(), s("div", zt, [
                  c("audio", {
                    src: u.preview,
                    controls: ""
                  }, null, 8, Mt)
                ])) : (a(), s("div", Bt, [
                  x(y(F), {
                    icon: y(ae),
                    size: "xl"
                  }, null, 8, ["icon"]),
                  i[0] || (i[0] = c("p", { class: "text-lg mt-2" }, "No preview available", -1))
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
}, Tt = {
  key: 1,
  class: "mb-2"
}, It = {
  key: 0,
  class: "text-error text-sm mt-1"
}, Cl = {
  __name: "MediaInput",
  props: /* @__PURE__ */ h({
    label: String,
    placeholder: String,
    error: String
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = $(e, "modelValue"), t = D(0), { formatFiles: o } = ie(), n = (r) => l.value.push(...r.target.files), i = B(() => o(l.value));
    return (r, d) => (a(), s("div", null, [
      e.label ? (a(), s("label", Ft, g(e.label), 1)) : k("", !0),
      l.value.length > 0 ? (a(), s("div", Tt, [
        x(Dt, {
          "selected-idx": t.value,
          "onUpdate:selectedIdx": d[0] || (d[0] = (u) => t.value = u),
          files: i.value
        }, null, 8, ["selected-idx", "files"]),
        x(Ue, {
          "selected-idx": t.value,
          "onUpdate:selectedIdx": d[1] || (d[1] = (u) => t.value = u),
          files: l.value,
          "onUpdate:files": d[2] || (d[2] = (u) => l.value = u)
        }, {
          "additional-items-after": z(() => [
            x(ue, {
              onChange: n,
              accept: "image/*"
            }, {
              default: z(() => [
                x(Y, {
                  icon: y(Se),
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
        e.error ? (a(), s("p", It, g(e.error), 1)) : k("", !0)
      ])) : (a(), T(mt, {
        key: 2,
        "with-icon": "",
        "drop-text": e.placeholder,
        modelValue: l.value,
        "onUpdate:modelValue": d[3] || (d[3] = (u) => l.value = u),
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
    return te(() => t("close")), (o, n) => (a(), T(y(me), {
      "overlay-transition": "vfm-fade",
      "content-transition": "vfm-fade",
      class: "flex justify-center items-center",
      "content-class": e.contentClass
    }, {
      default: z(() => [
        x(se, { styles: "w-full" }, {
          default: z(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["content-class"]));
  }
}, zl = {
  __name: "Modal",
  props: /* @__PURE__ */ h({
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
    const l = e, t = $(e, "modelValue"), o = R(), n = fe({
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
    }), (i, r) => (a(), T(y(ve)));
  }
}, Et = {
  key: 0,
  class: "text-error text-sm"
}, Ml = {
  __name: "Multiselect",
  props: /* @__PURE__ */ h({
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
  emits: /* @__PURE__ */ h(["select", "focus", "blur"], ["update:modelValue", "update:searchQuery", "update:input"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = $(e, "modelValue"), i = $(e, "searchQuery"), r = $(e, "input"), d = R(), u = D(!1), b = D(null), p = B(() => t.acceptsDuplicates ? t.options : t.options.filter((V) => !n.value.includes(t.formatResult(V)))), v = (V) => {
      n.value.push(t.formatResult(V)), i.value = "", o("select", V);
    }, m = (V) => {
      n.value = n.value.filter((C, j) => j !== V);
    }, S = () => {
      u.value = !0;
    }, M = () => {
      u.value = !1;
    }, E = () => {
      t.searchable || (u.value ? M() : S());
    }, I = (V) => {
      b.value.contains(V.target) || M();
    };
    return N(() => {
      document.addEventListener("mousedown", I);
    }), ne(() => {
      document.removeEventListener("mousedown", I);
    }), O(i, () => {
      t.searchable && i.value.length > 0 && S();
    }), (V, C) => (a(), s("div", {
      class: f([e.styles])
    }, [
      c("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: b
      }, [
        c("div", {
          onClick: C[4] || (C[4] = (j) => E()),
          class: f({ "cursor-pointer": !e.searchable })
        }, [
          x(Q, {
            modelValue: i.value,
            "onUpdate:modelValue": C[0] || (C[0] = (j) => i.value = j),
            input: r.value,
            "onUpdate:input": C[1] || (C[1] = (j) => r.value = j),
            label: e.label,
            placeholder: e.placeholder,
            disabled: !e.searchable,
            icon: e.icon,
            error: !!e.error,
            size: e.size,
            color: e.color,
            variant: e.variant,
            styles: e.textboxStyles,
            onFocus: C[2] || (C[2] = (j) => o("focus", j)),
            onBlur: C[3] || (C[3] = (j) => o("blur", j))
          }, {
            "left-section": z(() => [
              (a(!0), s(L, null, A(n.value, (j, de) => (a(), s("div", {
                key: e.optionLabel[e.trackBy]
              }, [
                w(V.$slots, "selectedTag", {
                  option: j,
                  deselect: () => m(de)
                })
              ]))), 128))
            ]),
            _: 3
          }, 8, ["modelValue", "input", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        x(ce, {
          container: b.value,
          options: p.value,
          "option-label": e.optionLabel,
          "track-by": e.trackBy,
          open: u.value,
          "accepts-empty-selection": e.acceptsEmptySelection,
          onSelect: v
        }, K({ _: 2 }, [
          y(d).option ? {
            name: "option",
            fn: z(({ option: j }) => [
              w(V.$slots, "option", { option: j })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      e.error && typeof e.error != "boolean" ? (a(), s("p", Et, g(e.error), 1)) : k("", !0)
    ], 2));
  }
}, Lt = { class: "font-medium" }, At = {
  key: 0,
  class: "text-text-secondary flex justify-center items-center w-10 rounded-l-md"
}, Ot = ["placeholder", "min", "max", "disabled"], Ut = {
  key: 0,
  class: "text-error text-sm"
}, Nt = {
  key: 1,
  class: "text-error text-sm"
}, Bl = {
  __name: "NumberInput",
  props: /* @__PURE__ */ h({
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
    return (i, r) => (a(), s("div", null, [
      c("h4", Lt, g(e.label), 1),
      c("div", {
        class: f(["rounded-lg flex h-10 items-center", o.value, e.styles, { error: n.value || e.error, "px-2": !e.icon }])
      }, [
        e.icon ? (a(), s("div", At, [
          x(y(F), {
            icon: e.icon,
            size: "1x",
            class: "text-secondary-text"
          }, null, 8, ["icon"])
        ])) : k("", !0),
        P(c("input", {
          "onUpdate:modelValue": r[0] || (r[0] = (d) => t.value = d),
          placeholder: e.placeholder,
          type: "number",
          min: e.min,
          max: e.max,
          disabled: e.disabled,
          class: "flex-grow w-full py-2 px-0 border-none outline-none rounded-lg placeholder:text-secondary-text bg-transparent appearance-none"
        }, null, 8, Ot), [
          [be, t.value]
        ])
      ], 2),
      n.value ? (a(), s("p", Ut, g(n.value), 1)) : e.error && typeof e.error == "string" ? (a(), s("p", Nt, g(e.error), 1)) : k("", !0)
    ]));
  }
}, Dl = {
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
      class: f([e.styles, { "whitespace-pre-wrap": e.includeWhitespace }])
    }, g(t.value), 3));
  }
}, Pt = ["name", "value", "checked"], Ht = { class: "rounded-full border-2 border-secondary flex items-center justify-center h-4 w-4" }, Fl = {
  __name: "Radio",
  props: /* @__PURE__ */ h({
    value: [String, Boolean],
    label: String,
    name: String,
    modelValue: String
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ h(["select"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = $(e, "modelValue"), i = D(!1), r = B(() => t.modelValue === t.value), d = (u) => {
      n.value = t.value, o("select", u);
    };
    return (u, b) => (a(), s("label", {
      class: "flex items-center gap-3 relative cursor-pointer",
      onMouseenter: b[1] || (b[1] = (p) => i.value = !0),
      onMouseleave: b[2] || (b[2] = (p) => i.value = !1)
    }, [
      c("input", {
        class: "absolute opacity-0 cursor-pointer",
        type: "radio",
        name: e.name,
        value: e.value,
        checked: r.value,
        onChange: b[0] || (b[0] = (p) => d(p))
      }, null, 40, Pt),
      c("span", Ht, [
        c("span", {
          class: f(["rounded-full h-2 w-2", { "bg-secondary": i.value || r.value }])
        }, null, 2)
      ]),
      c("span", null, g(e.label), 1)
    ], 32));
  }
}, Rt = { class: "flex items-center pr-1" }, Qt = { class: "flex items-center pr-2 text-secondary-text" }, qt = {
  key: 0,
  class: "text-error text-sm"
}, Tl = {
  __name: "Select",
  props: /* @__PURE__ */ h({
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
  emits: /* @__PURE__ */ h(["select", "blur", "focus"], ["update:modelValue", "update:searchQuery", "update:input"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = $(e, "modelValue"), i = $(e, "searchQuery"), r = $(e, "input"), d = R(), u = D(!1), b = D(null), p = (I) => {
      n.value = t.formatResult(I), t.optionLabel && (i.value = I[t.optionLabel]), o("select", I), le(S);
    }, v = (I) => {
      I.stopPropagation(), n.value = null, i.value = "";
    }, m = () => {
      u.value = !0;
    }, S = () => {
      u.value = !1;
    }, M = () => {
      t.searchable || (u.value ? S() : m());
    }, E = (I) => {
      b.value.contains(I.target) || S();
    };
    return N(() => {
      document.addEventListener("mousedown", E);
    }), ne(() => {
      document.removeEventListener("mousedown", E);
    }), O(i, () => {
      t.searchable && i.value.length > 0 ? m() : t.searchable && S();
    }), (I, V) => (a(), s("div", {
      class: f([e.styles])
    }, [
      c("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: b
      }, [
        c("div", {
          onClick: V[4] || (V[4] = (C) => M()),
          class: f({ "cursor-pointer": !e.searchable })
        }, [
          x(Q, {
            modelValue: i.value,
            "onUpdate:modelValue": V[0] || (V[0] = (C) => i.value = C),
            input: r.value,
            "onUpdate:input": V[1] || (V[1] = (C) => r.value = C),
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
            onFocus: V[2] || (V[2] = (C) => o("focus", C)),
            onBlur: V[3] || (V[3] = (C) => o("blur", C))
          }, K({ _: 2 }, [
            e.lockOnSelect && e.searchable && n.value ? {
              name: "right-section",
              fn: z(() => [
                c("div", Rt, [
                  x(Y, {
                    icon: y(X),
                    "on-click": v,
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
                c("div", Qt, [
                  x(y(F), {
                    icon: y(ke),
                    size: e.size
                  }, null, 8, ["icon", "size"])
                ])
              ]),
              key: "1"
            }
          ]), 1032, ["modelValue", "input", "value", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        x(ce, {
          container: b.value,
          options: e.options,
          "option-label": e.optionLabel,
          "track-by": e.trackBy,
          open: u.value,
          "accepts-empty-selection": e.acceptsEmptySelection,
          onSelect: p
        }, K({ _: 2 }, [
          y(d).option ? {
            name: "option",
            fn: z(({ option: C }) => [
              w(I.$slots, "option", { option: C })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      e.error && typeof e.error != "boolean" ? (a(), s("p", qt, g(e.error), 1)) : k("", !0)
    ], 2));
  }
}, Wt = {
  key: 0,
  class: "w-full"
}, Gt = { class: "flex justify-between items-center gap-2 px-4" }, Kt = ["onClick"], Zt = { class: "flex justify-between items-center mt-1 px-3" }, Xt = ["onClick"], Jt = ["onClick"], Il = {
  __name: "Stepper",
  props: /* @__PURE__ */ h({
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
    const l = e, t = $(e, "modelValue"), o = B(() => l.steps.findIndex((u) => u.value === t.value)), n = B(() => l.steps.map((u, b) => b < o.value ? { ...u, status: "completed" } : b === o.value ? { ...u, status: "in-progress" } : { ...u, status: "uncompleted" })), i = (u) => u.status === "uncompleted" || u.status !== "in-progress" && l.variant === "minimalist" ? "text-secondary-text bg-card-accent" : `text-${l.color} bg-${l.color}${l.variant === "classic" ? "/30" : ""}`, r = (u) => l.canMoveForwards && u > o.value || l.canMoveBackwards && u < o.value ? "cursor-pointer" : "cursor-default", d = (u, b) => {
      (l.canMoveForwards && b > o.value || l.canMoveBackwards && b < o.value) && (t.value = u.value);
    };
    return (u, b) => e.variant === "classic" ? (a(), s("div", Wt, [
      c("div", Gt, [
        (a(!0), s(L, null, A(n.value, (p, v) => (a(), s(L, {
          key: p.value
        }, [
          c("div", {
            onClick: (m) => d(p, v),
            class: f([
              "w-10 h-10 rounded-full flex items-center justify-center",
              i(p),
              r(v)
            ])
          }, [
            x(y(F), {
              icon: p.status === "completed" && !e.canMoveBackwards ? y(oe) : p.icon
            }, null, 8, ["icon"])
          ], 10, Kt),
          v < e.steps.length - 1 ? (a(), s("div", {
            key: 0,
            class: f(`flex-grow bg-${n.value[v + 1].status === "uncompleted" ? "secondary-text" : e.color} h-0.5`)
          }, null, 2)) : k("", !0)
        ], 64))), 128))
      ]),
      c("div", Zt, [
        (a(!0), s(L, null, A(n.value, (p, v) => (a(), s("p", {
          key: "label-" + p.value,
          onClick: (m) => d(p, v),
          class: f([
            p.status === "uncompleted" ? "text-secondary-text" : `text-${e.color}`,
            "text-xs font-medium text-center",
            r(v)
          ])
        }, g(p.label), 11, Xt))), 128))
      ])
    ])) : e.variant === "minimalist" ? (a(), s("div", {
      key: 1,
      class: f(`grid grid-cols-${n.value.length} gap-1`)
    }, [
      (a(!0), s(L, null, A(n.value, (p, v) => (a(), s("div", {
        key: p.value,
        onClick: (m) => d(p, v)
      }, [
        c("div", {
          class: f(["h-1 rounded-lg mb-1", i(p), r(v)])
        }, null, 2),
        c("p", {
          class: f([
            p.status !== "in-progress" ? "text-secondary-text" : `text-${e.color}`,
            "text-sm font-medium",
            r(v)
          ])
        }, g(p.label), 3)
      ], 8, Jt))), 128))
    ], 2)) : k("", !0);
  }
}, Yt = {};
function _t(e, l) {
  return a(), s("div", {
    onClick: G(() => {
    }, ["stop"])
  }, [
    w(e.$slots, "default")
  ]);
}
const jl = /* @__PURE__ */ J(Yt, [["render", _t]]), el = ["onClick"], El = {
  __name: "Tabs",
  props: /* @__PURE__ */ h({
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
      c("div", {
        class: f(["tab-container", { "justify-between": e.stretch }])
      }, [
        (a(!0), s(L, null, A(e.tabs, (n) => (a(), s("button", {
          key: n.name,
          class: f(["cursor-pointer", [{
            "text-error": n.error,
            "underline-offset-8 underline font-medium": n.name === l.value
          }, `text-${e.size}`]]),
          onClick: (i) => l.value = n.name
        }, g(n.label), 11, el))), 128))
      ], 2),
      (a(!0), s(L, null, A(e.tabs, (n) => P((a(), s("div", {
        key: n.name
      }, [
        w(t.$slots, `tab-${n.name}`)
      ])), [
        [W, n.name === l.value]
      ])), 128))
    ]));
  }
}, Ll = {
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
      class: f(`py-1 px-4 rounded-${e.rounded} duration-100 text-center text-black text-${e.size} bg-${e.color}`)
    }, [
      w(l.$slots, "default")
    ], 2));
  }
}, tl = { class: "flex items-center justify-between" }, ll = ["for"], nl = {
  key: 0,
  class: "text-xs text-secondary-text mr-1"
}, al = ["name", "placeholder", "value", "disabled", "maxlength", "rows"], ol = {
  key: 0,
  class: "text-error text-sm"
}, sl = {
  key: 1,
  class: "text-success text-sm"
}, Al = {
  __name: "Textarea",
  props: /* @__PURE__ */ h({
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
  emits: /* @__PURE__ */ h(["focus", "blur", "keyPress", "input"], ["update:modelValue", "update:input"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = $(e, "modelValue"), i = $(e, "input"), r = D(t.modelValue), d = D(!1), u = B(
      () => t.variant === "filled" ? `bg-${t.color}` : "bg-transparent ring-1 ring-secondary-text"
    ), b = (m) => {
      d.value = !0, o("focus", m);
    }, p = (m) => {
      d.value = !1, o("blur", m);
    }, v = (m) => {
      const S = m.target;
      r.value = S.value, n.value = S.value, o("input", m);
    };
    return O(
      () => t.modelValue,
      (m) => {
        r.value = m;
      }
    ), (m, S) => (a(), s("div", null, [
      c("div", tl, [
        c("label", {
          for: e.name,
          class: "font-medium"
        }, g(e.label), 9, ll),
        e.maxlength ? (a(), s("p", nl, g(n.value?.length ?? 0) + " / " + g(e.maxlength), 1)) : k("", !0)
      ]),
      c("div", {
        class: f([
          "rounded-lg flex duration-300 max-h-48 overflow-auto",
          u.value,
          e.styles,
          {
            error: e.error,
            success: e.success,
            selected: d.value
          }
        ])
      }, [
        c("textarea", {
          class: f(["rounded-lg p-2 flex-grow bg-transparent outline-none max-w-full placeholder:text-secondary-text border-none", { "field-sizing-content": e.fieldSizingContent }]),
          name: e.name,
          placeholder: e.placeholder,
          value: n.value,
          disabled: e.disabled,
          onInput: v,
          onFocus: b,
          onBlur: p,
          onKeydown: S[0] || (S[0] = (M) => o("keyPress", M)),
          maxlength: e.maxlength,
          rows: e.rows,
          ref_key: "inputElement",
          ref: i
        }, null, 42, al)
      ], 2),
      e.error && typeof e.error != "boolean" ? (a(), s("p", ol, g(e.error), 1)) : e.success && typeof e.error != "boolean" ? (a(), s("p", sl, g(e.success), 1)) : k("", !0)
    ]));
  }
}, Ol = {
  __name: "Toggle",
  props: /* @__PURE__ */ h({
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
  emits: /* @__PURE__ */ h(["toggle"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = e, o = l, n = $(e, "modelValue"), i = () => {
      n.value = !n.value, o("toggle", n.value);
    }, r = B(
      () => n.value ? `bg-${t.activeColor}` : "bg-gray-300 dark:bg-gray-600"
    ), d = B(
      () => n.value ? "translate-x-6" : "translate-x-0"
    );
    return N(() => {
      n.value = n.value ?? t.value;
    }), (u, b) => (a(), s("div", {
      onClick: i,
      class: f([r.value, "cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300"])
    }, [
      c("div", {
        class: f([d.value, "bg-white dark:bg-gray-200 text-black text-sm flex justify-center items-center w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"])
      }, [
        e.icon ? (a(), T(y(F), {
          key: 0,
          icon: e.icon
        }, null, 8, ["icon"])) : k("", !0)
      ], 2)
    ], 2));
  }
}, rl = { class: "rounded-md bg-dropdown/80 text-dropdown-text p-1 text-xs text-nowrap" }, Ul = {
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
    return (n, i) => (a(), s("div", {
      class: "relative flex items-center",
      onMouseenter: i[0] || (i[0] = (r) => t.value = !0),
      onMouseleave: i[1] || (i[1] = (r) => t.value = !1)
    }, [
      w(n.$slots, "default"),
      x(U, { name: "fade" }, {
        default: z(() => [
          t.value ? (a(), s("div", {
            key: 0,
            class: f([o.value, "absolute delay-1000 z-50"])
          }, [
            c("div", rl, [
              w(n.$slots, "tooltip-content", {}, () => [
                Z(g(e.text), 1)
              ])
            ])
          ], 2)) : k("", !0)
        ]),
        _: 3
      })
    ], 32));
  }
}, Nl = {
  install(e) {
    const l = ye();
    e.use(l);
  }
};
export {
  gl as Accordion,
  Ue as AttachmentList,
  bl as Avatar,
  pl as AvatarGroup,
  hl as Badge,
  Qe as Button,
  se as Card,
  xl as Checkbox,
  $l as ClickableTag,
  Sl as CurrencyInput,
  kl as DatePicker,
  mt as DragAndDropFiles,
  ce as DropdownOptions,
  st as Dropzone,
  ue as FileButton,
  wl as FlashMessage,
  Y as IconButton,
  Vl as Loader,
  Dt as MediaCarousel,
  Cl as MediaInput,
  zl as Modal,
  Ml as Multiselect,
  Bl as NumberInput,
  Dl as Paragraph,
  Fl as Radio,
  Tl as Select,
  Il as Stepper,
  jl as StopPropagation,
  El as Tabs,
  Ll as Tag,
  Al as Textarea,
  Q as Textbox,
  Ol as Toggle,
  Ul as Tooltip,
  Nl as default,
  ie as useFiles,
  re as useIsHandheld
};
