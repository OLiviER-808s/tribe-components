import { createElementBlock as s, openBlock as a, normalizeClass as f, renderSlot as z, mergeModels as h, useModel as S, createBlock as j, createCommentVNode as k, withCtx as B, createElementVNode as c, withDirectives as P, createVNode as x, toDisplayString as g, Transition as U, unref as y, vShow as q, ref as D, onMounted as N, onUnmounted as ce, computed as M, watch as O, Fragment as L, renderList as A, normalizeStyle as de, createTextVNode as K, withModifiers as W, useSlots as Z, nextTick as te, resolveComponent as _, onBeforeUnmount as le, createSlots as G, vModelText as me } from "vue";
import { FontAwesomeIcon as T } from "@fortawesome/vue-fontawesome";
import { faChevronDown as ee, faHeadphones as fe, faVideoCamera as ve, faFile as ne, faXmark as X, faCheck as ae, faCalendar as ye, faUpload as ge, faPlus as be, faSort as pe } from "@fortawesome/free-solid-svg-icons";
import he from "vuedraggable";
import { v4 as xe } from "uuid";
import $e from "@vuepic/vue-datepicker";
import { onKeyStroke as Q } from "@vueuse/core";
const Se = {
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
      z(l.$slots, "default")
    ], 2));
  }
}, ke = { class: "text-xl font-medium" }, we = { class: "pt-4" }, Ve = { key: 1 }, ze = { class: "p-2" }, cl = {
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
    const l = S(e, "modelValue");
    return (t, o) => e.variant === "card" ? (a(), j(Se, { key: 0 }, {
      default: B(() => [
        c("div", {
          onClick: o[0] || (o[0] = (n) => l.value = !l.value),
          class: "flex items-center justify-between gap-2 cursor-pointer"
        }, [
          c("h3", ke, g(e.title), 1),
          x(U, { name: "rotate" }, {
            default: B(() => [
              c("div", {
                class: f({ rotated: l.value, "not-rotated": !l.value })
              }, [
                x(y(T), {
                  icon: y(ee),
                  size: "lg"
                }, null, 8, ["icon"])
              ], 2)
            ]),
            _: 1
          })
        ]),
        P(c("div", we, [
          z(t.$slots, "default")
        ], 512), [
          [q, l.value]
        ])
      ]),
      _: 3
    })) : e.variant === "minimal" ? (a(), s("div", Ve, [
      c("div", {
        onClick: o[1] || (o[1] = (n) => l.value = !l.value),
        class: "p-2 border-b-2 border-base-text flex items-center justify-between gap-2 cursor-pointer"
      }, [
        c("h3", null, g(e.title), 1),
        x(U, { name: "rotate" }, {
          default: B(() => [
            c("div", {
              class: f({ rotated: l.value, "not-rotated": !l.value })
            }, [
              x(y(T), { icon: y(ee) }, null, 8, ["icon"])
            ], 2)
          ]),
          _: 1
        })
      ]),
      P(c("div", ze, [
        z(t.$slots, "default")
      ], 512), [
        [q, l.value]
      ])
    ])) : k("", !0);
  }
}, oe = (e = 800) => {
  const l = D(innerWidth < e), t = () => l.value = innerWidth < e;
  return N(() => addEventListener("resize", t)), ce(() => removeEventListener("resize", t)), l;
}, se = () => ({ readableFileSize: (t) => {
  const o = ["Bytes", "KB", "MB", "GB", "TB"], n = Math.floor(Math.log(t) / Math.log(1024));
  return `${Math.round(t / Math.pow(1024, n))} ${o[n]}`;
}, formatFiles: (t) => t?.map((o) => o.uuid ? o : {
  name: o.name,
  size: o.size,
  uuid: xe(),
  preview: URL.createObjectURL(o),
  type: o.type?.split("/")[0]
}) }), Ce = (e, l, t) => {
  if (l < 0 || l >= e.length || t < 0 || t >= e.length)
    throw new Error("Invalid indices");
  const [o] = e.splice(l, 1);
  return e.splice(t, 0, o), e;
}, Me = (e) => Math.floor(e) !== e && e.toString().split(".")[1]?.length || 0, Be = { class: "flex justify-center gap-2 w-full p-4" }, De = ["onMouseenter"], Te = ["onClick"], Fe = ["src", "alt"], Ie = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-secondary-text bg-card rounded-md"
}, je = ["onClick"], Ee = {
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
    const l = e, t = S(e, "files"), o = S(e, "selectedIdx"), n = oe(), { formatFiles: i } = se(), r = D(-1), d = D(i(l.files)), u = (v) => {
      t.value = t.value.filter((m, $) => $ !== v), o.value > v && (o.value -= 1);
    }, b = ({ moved: { oldIndex: v, newIndex: m } }) => {
      t.value = Ce(t.value, v, m), o.value === v ? o.value = m : o.value > v && o.value <= m ? o.value-- : o.value < v && o.value >= m && o.value++;
    }, p = M(() => l.size === "lg" ? "w-16 h-16" : "w-14 h-14");
    return O(t, () => d.value = i(l.files)), (v, m) => (a(), s("div", Be, [
      z(v.$slots, "additional-items-before"),
      x(y(he), {
        modelValue: d.value,
        "onUpdate:modelValue": m[1] || (m[1] = ($) => d.value = $),
        "item-key": "uuid",
        "swap-threshold": 0.65,
        animation: 200,
        class: "flex gap-2",
        onChange: b
      }, {
        item: B(({ element: $, index: C }) => [
          c("div", {
            class: f(`relative border-secondary rounded-md ${p.value} ${o.value === C ? "border-3 bg-secondary" : ""}`),
            onMouseenter: (E) => r.value = C,
            onMouseleave: m[0] || (m[0] = (E) => r.value = -1)
          }, [
            c("button", {
              class: "w-full h-full",
              onClick: (E) => o.value = C
            }, [
              $.type === "image" ? (a(), s("img", {
                key: 0,
                src: $.preview,
                alt: $.name,
                class: "w-full h-full object-cover rounded-md"
              }, null, 8, Fe)) : (a(), s("span", Ie, [
                $.type === "audio" ? (a(), j(y(T), {
                  key: 0,
                  icon: y(fe),
                  size: "lg"
                }, null, 8, ["icon"])) : $.type === "video" ? (a(), j(y(T), {
                  key: 1,
                  icon: y(ve),
                  size: "lg"
                }, null, 8, ["icon"])) : (a(), j(y(T), {
                  key: 2,
                  icon: y(ne),
                  size: "lg"
                }, null, 8, ["icon"]))
              ]))
            ], 8, Te),
            r.value === C || y(n) ? (a(), s("button", {
              key: 0,
              onClick: (E) => u(C),
              class: "absolute cursor-pointer top-0 right-0 text-secondary-text bg-card/80 rounded-full w-5 h-5 flex justify-center items-center"
            }, [
              x(y(T), {
                icon: y(X),
                size: "xs"
              }, null, 8, ["icon"])
            ], 8, je)) : k("", !0)
          ], 42, De)
        ]),
        _: 1
      }, 8, ["modelValue"]),
      z(v.$slots, "additional-items-after")
    ]));
  }
}, Le = ["src"], dl = {
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
    }, null, 10, Le));
  }
}, Ae = { class: "flex items-center" }, Oe = ["src", "alt"], ml = {
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
    return (l, t) => (a(), s("div", Ae, [
      (a(!0), s(L, null, A(e.avatars, (o, n) => (a(), s("img", {
        key: n,
        src: o,
        alt: `avatar ${n + 1}`,
        class: f(`${e.width} rounded-full relative`),
        style: de({ marginLeft: n === 0 ? "0" : `-${e.overlap}px` })
      }, null, 14, Oe))), 128))
    ]));
  }
}, fl = {
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
      z(l.$slots, "default", {}, () => [
        K(g(e.content), 1)
      ])
    ], 2));
  }
}, Ue = ["disabled", "type"], Ne = {
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
    }, r = M(() => t.color === "base" ? "secondary-text" : t.color), d = M(() => {
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
      z(u.$slots, "default")
    ], 42, Ue));
  }
}, Pe = { class: "flex items-center gap-2" }, He = ["for"], Re = {
  key: 0,
  class: "text-error text-sm"
}, vl = {
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
    const t = S(e, "modelValue"), o = l, n = () => {
      t.value = !t.value, o("toggle", t.value);
    };
    return (i, r) => (a(), s("div", null, [
      c("div", Pe, [
        c("button", {
          onClick: r[0] || (r[0] = (d) => n()),
          type: "button",
          class: f(["rounded-sm cursor-pointer border-secondary border-2 w-4 h-4 flex items-center justify-center text-black", { "bg-secondary": t.value, "hover:bg-secondary/30": !t.value }])
        }, [
          t.value ? (a(), j(y(T), {
            key: 0,
            icon: y(ae),
            size: "xs"
          }, null, 8, ["icon"])) : k("", !0)
        ], 2),
        c("label", { for: e.name }, [
          z(i.$slots, "default")
        ], 8, He)
      ]),
      e.error ? (a(), s("p", Re, g(e.error), 1)) : k("", !0)
    ]));
  }
}, yl = {
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
    const t = e, o = l, n = S(e, "modelValue"), i = M(() => `${t.styles} py-1 px-3 duration-100 text-center border-2 rounded-${t.rounded} text-${t.size} text-${t.color} border-${t.color} hover:bg-${t.color}/10`), r = M(() => `${t.styles} py-1 px-3 duration-100 text-center border-2 rounded-${t.rounded} text-${t.size} bg-${t.color} border-${t.color} text-black`);
    return (d, u) => (a(), s("button", {
      onClick: u[0] || (u[0] = (b) => o("select")),
      class: f(n.value ? r.value : i.value)
    }, [
      z(d.$slots, "default")
    ], 2));
  }
}, Qe = ["for"], qe = {
  key: 0,
  class: "flex justify-center items-center w-10 rounded-l-md"
}, We = { key: 0 }, Ge = { key: 1 }, Ke = {
  key: 2,
  class: "text-secondary-text"
}, Ze = ["name", "type", "placeholder", "value", "disabled"], Xe = {
  key: 0,
  class: "text-error text-sm"
}, Je = {
  key: 1,
  class: "text-success text-sm"
}, R = {
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
    const t = e, o = l, n = S(e, "modelValue"), i = S(e, "input"), r = D(!1), d = M(
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
      }, g(e.label), 9, Qe),
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
        e.icon ? (a(), s("div", qe, [
          x(y(T), {
            icon: e.icon,
            size: e.size,
            class: "text-secondary-text"
          }, null, 8, ["icon", "size"])
        ])) : k("", !0),
        c("div", {
          class: f(["flex-grow w-full flex items-center gap-1 flex-wrap p-2", { "pl-0": e.icon }])
        }, [
          z(v.$slots, "left-section"),
          e.disabled ? (a(), s("div", {
            key: 0,
            class: f([{ "pl-0": e.icon, "text-sm": e.size === "sm" }, "flex-grow"])
          }, [
            n.value ? (a(), s("span", We, g(n.value), 1)) : e.value ? (a(), s("span", Ge, g(e.value), 1)) : e.placeholder ? (a(), s("span", Ke, g(e.placeholder), 1)) : k("", !0)
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
          }, null, 42, Ze))
        ], 2),
        z(v.$slots, "right-section")
      ], 2),
      e.error && typeof e.error != "boolean" ? (a(), s("p", Xe, g(e.error), 1)) : e.success && typeof e.error != "boolean" ? (a(), s("p", Je, g(e.success), 1)) : k("", !0)
    ]));
  }
}, gl = {
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
    const l = e, t = S(e, "modelValue"), o = (i) => {
      let r = parseFloat(i.target.value.replace(/[^\d.-]/g, ""));
      Me(r) > 0 && (r = (Math.round(r * 100) / 100).toFixed(2)), t.value = r;
    }, n = M(() => {
      if (t.value)
        return `${l.currencySymbol}${t.value}`;
    });
    return (i, r) => (a(), j(R, {
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
}, Ye = (e) => `${H(e)} ${formatTimestamp24Hour(e)}`, _e = (e) => `${H(e[0])} - ${H(e[1])}`, et = { class: "font-medium" }, tt = {
  key: 0,
  class: "text-error text-sm"
}, bl = {
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
    const l = e, t = S(e, "modelValue"), o = D(null), n = M(() => l.range ? _e : l.includeTime ? Ye : H);
    return (i, r) => (a(), s("div", {
      class: f(e.styles)
    }, [
      c("label", et, g(e.label), 1),
      x(y($e), {
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
        "dp-input": B(({ value: d }) => [
          x(R, {
            placeholder: e.placeholder,
            value: d,
            icon: y(ye),
            variant: e.variant,
            size: e.size,
            color: e.color,
            error: !!e.error
          }, null, 8, ["placeholder", "value", "icon", "variant", "size", "color", "error"])
        ]),
        _: 1
      }, 8, ["modelValue", "format", "disabled", "enable-time-picker", "range", "min-date", "max-date"]),
      e.error ? (a(), s("p", tt, g(e.error), 1)) : k("", !0)
    ], 2));
  }
}, lt = {
  __name: "Dropzone",
  props: {
    modelValue: { default: !1 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ h(["drop"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = l, o = S(e, "modelValue"), n = (i) => {
      o.value = !1, t("drop", i);
    };
    return (i, r) => (a(), s("div", {
      onDragover: r[0] || (r[0] = W((d) => o.value = !0, ["prevent"])),
      onDragleave: r[1] || (r[1] = (d) => o.value = !1),
      onDrop: W(n, ["prevent"])
    }, [
      z(i.$slots, "default", { isDragOver: o.value })
    ], 32));
  }
}, nt = ["multiple", "accept"], re = {
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
      }, null, 40, nt),
      c("div", { onClick: i }, [
        z(r.$slots, "default")
      ])
    ]));
  }
}, at = {
  key: 0,
  class: "font-medium mb-1"
}, ot = {
  key: 0,
  class: "mb-2"
}, st = { class: "font-medium" }, rt = {
  key: 0,
  class: "text-error text-sm mt-1"
}, it = {
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
    const l = S(e, "modelValue"), t = (i) => l.value = Array.from(i), o = (i) => t(i.dataTransfer.files), n = (i) => t(i.target.files);
    return (i, r) => (a(), s("div", null, [
      e.label ? (a(), s("p", at, g(e.label), 1)) : k("", !0),
      c("div", null, [
        x(re, {
          onChange: n,
          accept: "image/*"
        }, {
          default: B(() => [
            x(lt, { onDrop: o }, {
              default: B(({ isDragOver: d }) => [
                c("div", {
                  class: f(["cursor-pointer duration-300 text-center border-2 border-dashed py-6 px-4 rounded-lg", {
                    "bg-secondary/30": d,
                    "text-secondary border-secondary": !e.error,
                    "text-error border-error": e.error
                  }])
                }, [
                  e.withIcon ? (a(), s("div", ot, [
                    x(y(T), {
                      icon: y(ge),
                      size: "lg"
                    }, null, 8, ["icon"])
                  ])) : k("", !0),
                  c("p", st, g(e.dropText), 1)
                ], 2)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e.error ? (a(), s("p", rt, g(e.error), 1)) : k("", !0)
      ])
    ]));
  }
}, J = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [o, n] of l)
    t[o] = n;
  return t;
}, ut = ["onClick", "onMouseover"], ct = { key: 1 }, dt = {
  key: 0,
  class: "text-xs text-secondary-text"
}, mt = {
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
    S(e, "modelValue");
    const n = Z(), i = D(-1), r = D("top-full"), d = D(null), u = (m) => o("select", m), b = () => {
      const m = t.container.getBoundingClientRect(), $ = window.innerHeight || document.documentElement.clientHeight;
      r.value = m.bottom + 150 > $ ? "bottom-full" : "top-full";
    }, p = () => {
      r.value = "top-full";
    }, v = async (m) => {
      i.value += m, i.value < 0 ? i.value = t.options.length - 1 : i.value >= t.options.length && (i.value = 0), await te();
      const C = d.value?.querySelectorAll("div > div")?.[i.value];
      C && C.scrollIntoView({ block: "nearest", behavior: "smooth" });
    };
    return Q("ArrowDown", (m) => {
      t.open && t.options.length > 0 && (m.preventDefault(), v(1));
    }), Q("ArrowUp", (m) => {
      t.open && t.options.length > 0 && (m.preventDefault(), v(-1));
    }), Q("Enter", (m) => {
      t.open && t.options.length > 0 ? (m.preventDefault(), u(t.options[i.value])) : t.acceptsEmptySelection && (m.preventDefault(), u());
    }), O(() => t.open, () => {
      t.open || (i.value = -1);
    }), (m, $) => (a(), j(U, {
      name: r.value === "top-full" ? "slide-down" : "slide-up",
      onBeforeEnter: b,
      onAfterLeave: p
    }, {
      default: B(() => [
        e.open && e.options?.length > 0 ? (a(), s("div", {
          key: 0,
          ref_key: "dropdownContainer",
          ref: d,
          class: f([
            "w-full rounded-md bg-dropdown text-dropdown-text absolute overflow-auto max-h-64 flex flex-col cursor-pointer z-50",
            r.value
          ])
        }, [
          (a(!0), s(L, null, A(e.options, (C, E) => (a(), s("div", {
            key: e.options[e.trackBy],
            onClick: (F) => u(C),
            onMouseover: (F) => i.value = E,
            class: f(["text-md py-2 px-6 rounded-md text-left", { "bg-dropdown-select": i.value === E }])
          }, [
            y(n).option ? z(m.$slots, "option", {
              key: 0,
              option: C
            }, void 0, !0) : (a(), s("div", ct, [
              K(g(C[e.optionLabel]) + " ", 1),
              C[e.optionDescription] ? (a(), s("div", dt, g(C[e.optionDescription]), 1)) : k("", !0)
            ]))
          ], 42, ut))), 128))
        ], 2)) : k("", !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}, ie = /* @__PURE__ */ J(mt, [["__scopeId", "data-v-2cf8e7b1"]]), Y = {
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
    const l = e, t = M(() => {
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
    return (o, n) => (a(), j(Ne, {
      styles: `${e.styles} ${t.value} flex justify-center items-center !px-0 !py-0`,
      href: e.href,
      type: e.type,
      color: e.color,
      "on-click": e.onClick,
      disabled: e.disabled,
      variant: e.variant
    }, {
      default: B(() => [
        x(y(T), {
          size: e.size,
          icon: e.icon
        }, null, 8, ["size", "icon"])
      ]),
      _: 1
    }, 8, ["styles", "href", "type", "color", "on-click", "disabled", "variant"]));
  }
}, ft = { class: "flex-grow" }, vt = { class: "text-md font-medium" }, pl = {
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
    return N(() => setTimeout(() => t.value = !1, l.duration)), (o, n) => (a(), j(U, { name: "slide-fade" }, {
      default: B(() => [
        t.value ? (a(), s("div", {
          key: 0,
          class: f(`w-96 flex items-center gap-2 rounded-md p-2 my-2 bg-${e.color}/${e.opacity}`)
        }, [
          c("div", ft, [
            c("p", vt, g(e.content), 1)
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
}, yt = { class: "flex items-center justify-center" }, gt = {
  key: 0,
  class: "text-center font-medium mt-2"
}, bt = {
  __name: "Loader",
  props: {
    label: String
  },
  setup(e) {
    return (l, t) => (a(), s("div", yt, [
      c("div", null, [
        t[0] || (t[0] = c("div", { class: "spinner" }, null, -1)),
        e.label ? (a(), s("p", gt, g(e.label), 1)) : k("", !0)
      ])
    ]));
  }
}, hl = /* @__PURE__ */ J(bt, [["__scopeId", "data-v-d8288a84"]]), pt = { class: "flex items-center justify-center" }, ht = { key: 0 }, xt = ["src", "alt"], $t = { key: 1 }, St = ["src"], kt = { key: 2 }, wt = ["src"], Vt = {
  key: 3,
  class: "text-center"
}, zt = {
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
    const l = S(e, "selectedIdx"), t = oe(), o = () => {
      const n = document.querySelector("swiper-container").swiper;
      l.value = n.activeIndex;
    };
    return O(l, () => {
      const n = document.querySelector("swiper-container")?.swiper;
      l.value !== n.activeIndex && n.slideTo(l.value);
    }), (n, i) => {
      const r = _("swiper-slide"), d = _("swiper-container");
      return a(), j(d, {
        "slides-per-view": 1,
        "centered-slides": !0,
        navigation: !y(t),
        onSwiperslidechange: o
      }, {
        default: B(() => [
          (a(!0), s(L, null, A(e.files, (u) => (a(), j(r, null, {
            default: B(() => [
              c("div", pt, [
                u.type === "image" ? (a(), s("div", ht, [
                  c("img", {
                    src: u.preview,
                    alt: u.name,
                    class: f(e.maxMediaHeight)
                  }, null, 10, xt)
                ])) : u.type === "video" ? (a(), s("div", $t, [
                  c("video", {
                    src: u.preview,
                    controls: "",
                    class: f(e.maxMediaHeight)
                  }, null, 10, St)
                ])) : u.type === "audio" ? (a(), s("div", kt, [
                  c("audio", {
                    src: u.preview,
                    controls: ""
                  }, null, 8, wt)
                ])) : (a(), s("div", Vt, [
                  x(y(T), {
                    icon: y(ne),
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
}, Ct = {
  key: 0,
  class: "font-medium mb-1"
}, Mt = {
  key: 1,
  class: "mb-2"
}, Bt = {
  key: 0,
  class: "text-error text-sm mt-1"
}, xl = {
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
    const l = S(e, "modelValue"), t = D(0), { formatFiles: o } = se(), n = (r) => l.value.push(...r.target.files), i = M(() => o(l.value));
    return (r, d) => (a(), s("div", null, [
      e.label ? (a(), s("label", Ct, g(e.label), 1)) : k("", !0),
      l.value.length > 0 ? (a(), s("div", Mt, [
        x(zt, {
          "selected-idx": t.value,
          "onUpdate:selectedIdx": d[0] || (d[0] = (u) => t.value = u),
          files: i.value
        }, null, 8, ["selected-idx", "files"]),
        x(Ee, {
          "selected-idx": t.value,
          "onUpdate:selectedIdx": d[1] || (d[1] = (u) => t.value = u),
          files: l.value,
          "onUpdate:files": d[2] || (d[2] = (u) => l.value = u)
        }, {
          "additional-items-after": B(() => [
            x(re, {
              onChange: n,
              accept: "image/*"
            }, {
              default: B(() => [
                x(Y, {
                  icon: y(be),
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
        e.error ? (a(), s("p", Bt, g(e.error), 1)) : k("", !0)
      ])) : (a(), j(it, {
        key: 2,
        "with-icon": "",
        "drop-text": e.placeholder,
        modelValue: l.value,
        "onUpdate:modelValue": d[3] || (d[3] = (u) => l.value = u),
        error: e.error
      }, null, 8, ["drop-text", "modelValue", "error"]))
    ]));
  }
}, Dt = {
  key: 0,
  class: "text-error text-sm"
}, $l = {
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
    const t = e, o = l, n = S(e, "modelValue"), i = S(e, "searchQuery"), r = S(e, "input"), d = Z(), u = D(!1), b = D(null), p = M(() => t.acceptsDuplicates ? t.options : t.options.filter((w) => !n.value.includes(t.formatResult(w)))), v = (w) => {
      n.value.push(t.formatResult(w)), i.value = "", o("select", w);
    }, m = (w) => {
      n.value = n.value.filter((V, I) => I !== w);
    }, $ = () => {
      u.value = !0;
    }, C = () => {
      u.value = !1;
    }, E = () => {
      t.searchable || (u.value ? C() : $());
    }, F = (w) => {
      b.value.contains(w.target) || C();
    };
    return N(() => {
      document.addEventListener("mousedown", F);
    }), le(() => {
      document.removeEventListener("mousedown", F);
    }), O(i, () => {
      t.searchable && i.value.length > 0 && $();
    }), (w, V) => (a(), s("div", {
      class: f([e.styles])
    }, [
      c("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: b
      }, [
        c("div", {
          onClick: V[4] || (V[4] = (I) => E()),
          class: f({ "cursor-pointer": !e.searchable })
        }, [
          x(R, {
            modelValue: i.value,
            "onUpdate:modelValue": V[0] || (V[0] = (I) => i.value = I),
            input: r.value,
            "onUpdate:input": V[1] || (V[1] = (I) => r.value = I),
            label: e.label,
            placeholder: e.placeholder,
            disabled: !e.searchable,
            icon: e.icon,
            error: !!e.error,
            size: e.size,
            color: e.color,
            variant: e.variant,
            styles: e.textboxStyles,
            onFocus: V[2] || (V[2] = (I) => o("focus", I)),
            onBlur: V[3] || (V[3] = (I) => o("blur", I))
          }, {
            "left-section": B(() => [
              (a(!0), s(L, null, A(n.value, (I, ue) => (a(), s("div", {
                key: e.optionLabel[e.trackBy]
              }, [
                z(w.$slots, "selectedTag", {
                  option: I,
                  deselect: () => m(ue)
                })
              ]))), 128))
            ]),
            _: 3
          }, 8, ["modelValue", "input", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        x(ie, {
          container: b.value,
          options: p.value,
          "option-label": e.optionLabel,
          "track-by": e.trackBy,
          open: u.value,
          "accepts-empty-selection": e.acceptsEmptySelection,
          onSelect: v
        }, G({ _: 2 }, [
          y(d).option ? {
            name: "option",
            fn: B(({ option: I }) => [
              z(w.$slots, "option", { option: I })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      e.error && typeof e.error != "boolean" ? (a(), s("p", Dt, g(e.error), 1)) : k("", !0)
    ], 2));
  }
}, Tt = { class: "font-medium" }, Ft = {
  key: 0,
  class: "text-text-secondary flex justify-center items-center w-10 rounded-l-md"
}, It = ["placeholder", "min", "max", "disabled"], jt = {
  key: 0,
  class: "text-error text-sm"
}, Et = {
  key: 1,
  class: "text-error text-sm"
}, Sl = {
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
    const l = e, t = S(e, "modelValue"), o = M(
      () => l.variant === "filled" ? `bg-${l.color}` : "bg-transparent border border-secondary-text"
    ), n = M(() => l.modelValue > l.max ? `Value must be ${l.max} or less.` : l.modelValue < l.min ? `Value must be ${l.min} or more.` : !1);
    return (i, r) => (a(), s("div", null, [
      c("h4", Tt, g(e.label), 1),
      c("div", {
        class: f(["rounded-lg flex h-10 items-center", o.value, e.styles, { error: n.value || e.error, "px-2": !e.icon }])
      }, [
        e.icon ? (a(), s("div", Ft, [
          x(y(T), {
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
        }, null, 8, It), [
          [me, t.value]
        ])
      ], 2),
      n.value ? (a(), s("p", jt, g(n.value), 1)) : e.error && typeof e.error == "string" ? (a(), s("p", Et, g(e.error), 1)) : k("", !0)
    ]));
  }
}, kl = {
  __name: "Paragraph",
  props: {
    text: String,
    styles: String,
    limit: Number,
    includeWhitespace: Boolean
  },
  setup(e) {
    const l = e, t = M(() => l.limit ? `${l.text.substring(0, l.limit)}${l.text.length > l.limit ? "..." : ""}` : l.text);
    return (o, n) => (a(), s("p", {
      class: f([e.styles, { "whitespace-pre-wrap": e.includeWhitespace }])
    }, g(t.value), 3));
  }
}, Lt = ["name", "value", "checked"], At = { class: "rounded-full border-2 border-secondary flex items-center justify-center h-4 w-4" }, wl = {
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
    const t = e, o = l, n = S(e, "modelValue"), i = D(!1), r = M(() => t.modelValue === t.value), d = (u) => {
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
      }, null, 40, Lt),
      c("span", At, [
        c("span", {
          class: f(["rounded-full h-2 w-2", { "bg-secondary": i.value || r.value }])
        }, null, 2)
      ]),
      c("span", null, g(e.label), 1)
    ], 32));
  }
}, Ot = { class: "flex items-center pr-1" }, Ut = { class: "flex items-center pr-2 text-secondary-text" }, Nt = {
  key: 0,
  class: "text-error text-sm"
}, Vl = {
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
    const t = e, o = l, n = S(e, "modelValue"), i = S(e, "searchQuery"), r = S(e, "input"), d = Z(), u = D(!1), b = D(null), p = (F) => {
      n.value = t.formatResult(F), t.optionLabel && (i.value = F[t.optionLabel]), o("select", F), te($);
    }, v = (F) => {
      F.stopPropagation(), n.value = null, i.value = "";
    }, m = () => {
      u.value = !0;
    }, $ = () => {
      u.value = !1;
    }, C = () => {
      t.searchable || (u.value ? $() : m());
    }, E = (F) => {
      b.value.contains(F.target) || $();
    };
    return N(() => {
      document.addEventListener("mousedown", E);
    }), le(() => {
      document.removeEventListener("mousedown", E);
    }), O(i, () => {
      t.searchable && i.value.length > 0 ? m() : t.searchable && $();
    }), (F, w) => (a(), s("div", {
      class: f([e.styles])
    }, [
      c("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: b
      }, [
        c("div", {
          onClick: w[4] || (w[4] = (V) => C()),
          class: f({ "cursor-pointer": !e.searchable })
        }, [
          x(R, {
            modelValue: i.value,
            "onUpdate:modelValue": w[0] || (w[0] = (V) => i.value = V),
            input: r.value,
            "onUpdate:input": w[1] || (w[1] = (V) => r.value = V),
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
            onFocus: w[2] || (w[2] = (V) => o("focus", V)),
            onBlur: w[3] || (w[3] = (V) => o("blur", V))
          }, G({ _: 2 }, [
            e.lockOnSelect && e.searchable && n.value ? {
              name: "right-section",
              fn: B(() => [
                c("div", Ot, [
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
              fn: B(() => [
                c("div", Ut, [
                  x(y(T), {
                    icon: y(pe),
                    size: e.size
                  }, null, 8, ["icon", "size"])
                ])
              ]),
              key: "1"
            }
          ]), 1032, ["modelValue", "input", "value", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        x(ie, {
          container: b.value,
          options: e.options,
          "option-label": e.optionLabel,
          "track-by": e.trackBy,
          open: u.value,
          "accepts-empty-selection": e.acceptsEmptySelection,
          onSelect: p
        }, G({ _: 2 }, [
          y(d).option ? {
            name: "option",
            fn: B(({ option: V }) => [
              z(F.$slots, "option", { option: V })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      e.error && typeof e.error != "boolean" ? (a(), s("p", Nt, g(e.error), 1)) : k("", !0)
    ], 2));
  }
}, Pt = {
  key: 0,
  class: "w-full"
}, Ht = { class: "flex justify-between items-center gap-2 px-4" }, Rt = ["onClick"], Qt = { class: "flex justify-between items-center mt-1 px-3" }, qt = ["onClick"], Wt = ["onClick"], zl = {
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
    const l = e, t = S(e, "modelValue"), o = M(() => l.steps.findIndex((u) => u.value === t.value)), n = M(() => l.steps.map((u, b) => b < o.value ? { ...u, status: "completed" } : b === o.value ? { ...u, status: "in-progress" } : { ...u, status: "uncompleted" })), i = (u) => u.status === "uncompleted" || u.status !== "in-progress" && l.variant === "minimalist" ? "text-secondary-text bg-card-accent" : `text-${l.color} bg-${l.color}${l.variant === "classic" ? "/30" : ""}`, r = (u) => l.canMoveForwards && u > o.value || l.canMoveBackwards && u < o.value ? "cursor-pointer" : "cursor-default", d = (u, b) => {
      (l.canMoveForwards && b > o.value || l.canMoveBackwards && b < o.value) && (t.value = u.value);
    };
    return (u, b) => e.variant === "classic" ? (a(), s("div", Pt, [
      c("div", Ht, [
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
            x(y(T), {
              icon: p.status === "completed" && !e.canMoveBackwards ? y(ae) : p.icon
            }, null, 8, ["icon"])
          ], 10, Rt),
          v < e.steps.length - 1 ? (a(), s("div", {
            key: 0,
            class: f(`flex-grow bg-${n.value[v + 1].status === "uncompleted" ? "secondary-text" : e.color} h-0.5`)
          }, null, 2)) : k("", !0)
        ], 64))), 128))
      ]),
      c("div", Qt, [
        (a(!0), s(L, null, A(n.value, (p, v) => (a(), s("p", {
          key: "label-" + p.value,
          onClick: (m) => d(p, v),
          class: f([
            p.status === "uncompleted" ? "text-secondary-text" : `text-${e.color}`,
            "text-xs font-medium text-center",
            r(v)
          ])
        }, g(p.label), 11, qt))), 128))
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
      ], 8, Wt))), 128))
    ], 2)) : k("", !0);
  }
}, Gt = {};
function Kt(e, l) {
  return a(), s("div", {
    onClick: W(() => {
    }, ["stop"])
  }, [
    z(e.$slots, "default")
  ]);
}
const Cl = /* @__PURE__ */ J(Gt, [["render", Kt]]), Zt = ["onClick"], Ml = {
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
    const l = S(e, "selectedTab");
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
        }, g(n.label), 11, Zt))), 128))
      ], 2),
      (a(!0), s(L, null, A(e.tabs, (n) => P((a(), s("div", {
        key: n.name
      }, [
        z(t.$slots, `tab-${n.name}`)
      ])), [
        [q, n.name === l.value]
      ])), 128))
    ]));
  }
}, Bl = {
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
      z(l.$slots, "default")
    ], 2));
  }
}, Xt = { class: "flex items-center justify-between" }, Jt = ["for"], Yt = {
  key: 0,
  class: "text-xs text-secondary-text mr-1"
}, _t = ["name", "placeholder", "value", "disabled", "maxlength", "rows"], el = {
  key: 0,
  class: "text-error text-sm"
}, tl = {
  key: 1,
  class: "text-success text-sm"
}, Dl = {
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
    const t = e, o = l, n = S(e, "modelValue"), i = S(e, "input"), r = D(t.modelValue), d = D(!1), u = M(
      () => t.variant === "filled" ? `bg-${t.color}` : "bg-transparent ring-1 ring-secondary-text"
    ), b = (m) => {
      d.value = !0, o("focus", m);
    }, p = (m) => {
      d.value = !1, o("blur", m);
    }, v = (m) => {
      const $ = m.target;
      r.value = $.value, n.value = $.value, o("input", m);
    };
    return O(
      () => t.modelValue,
      (m) => {
        r.value = m;
      }
    ), (m, $) => (a(), s("div", null, [
      c("div", Xt, [
        c("label", {
          for: e.name,
          class: "font-medium"
        }, g(e.label), 9, Jt),
        e.maxlength ? (a(), s("p", Yt, g(n.value?.length ?? 0) + " / " + g(e.maxlength), 1)) : k("", !0)
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
          onKeydown: $[0] || ($[0] = (C) => o("keyPress", C)),
          maxlength: e.maxlength,
          rows: e.rows,
          ref_key: "inputElement",
          ref: i
        }, null, 42, _t)
      ], 2),
      e.error && typeof e.error != "boolean" ? (a(), s("p", el, g(e.error), 1)) : e.success && typeof e.error != "boolean" ? (a(), s("p", tl, g(e.success), 1)) : k("", !0)
    ]));
  }
}, Tl = {
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
    const t = e, o = l, n = S(e, "modelValue"), i = () => {
      n.value = !n.value, o("toggle", n.value);
    }, r = M(
      () => n.value ? `bg-${t.activeColor}` : "bg-gray-300 dark:bg-gray-600"
    ), d = M(
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
        e.icon ? (a(), j(y(T), {
          key: 0,
          icon: e.icon
        }, null, 8, ["icon"])) : k("", !0)
      ], 2)
    ], 2));
  }
}, ll = { class: "rounded-md bg-dropdown/80 text-dropdown-text p-1 text-xs text-nowrap" }, Fl = {
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
    return (n, i) => (a(), s("div", {
      class: "relative flex items-center",
      onMouseenter: i[0] || (i[0] = (r) => t.value = !0),
      onMouseleave: i[1] || (i[1] = (r) => t.value = !1)
    }, [
      z(n.$slots, "default"),
      x(U, { name: "fade" }, {
        default: B(() => [
          t.value ? (a(), s("div", {
            key: 0,
            class: f([o.value, "absolute delay-1000 z-50"])
          }, [
            c("div", ll, [
              z(n.$slots, "tooltip-content", {}, () => [
                K(g(e.text), 1)
              ])
            ])
          ], 2)) : k("", !0)
        ]),
        _: 3
      })
    ], 32));
  }
};
export {
  cl as Accordion,
  Ee as AttachmentList,
  dl as Avatar,
  ml as AvatarGroup,
  fl as Badge,
  Ne as Button,
  Se as Card,
  vl as Checkbox,
  yl as ClickableTag,
  gl as CurrencyInput,
  bl as DatePicker,
  it as DragAndDropFiles,
  ie as DropdownOptions,
  lt as Dropzone,
  re as FileButton,
  pl as FlashMessage,
  Y as IconButton,
  hl as Loader,
  zt as MediaCarousel,
  xl as MediaInput,
  $l as Multiselect,
  Sl as NumberInput,
  kl as Paragraph,
  wl as Radio,
  Vl as Select,
  zl as Stepper,
  Cl as StopPropagation,
  Ml as Tabs,
  Bl as Tag,
  Dl as Textarea,
  R as Textbox,
  Tl as Toggle,
  Fl as Tooltip,
  se as useFiles,
  oe as useIsHandheld
};
