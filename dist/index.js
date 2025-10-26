import { VueFinalModal as ye, useModal as be, ModalsContainer as pe, createVfm as he } from "vue-final-modal";
import { createElementBlock as s, openBlock as a, normalizeClass as y, renderSlot as x, mergeModels as $, useModel as S, createBlock as F, createCommentVNode as w, withCtx as M, createElementVNode as d, withDirectives as P, createVNode as h, toDisplayString as p, Transition as U, unref as g, vShow as K, ref as T, onMounted as R, onUnmounted as te, computed as B, watch as O, Fragment as E, renderList as L, normalizeStyle as le, createTextVNode as q, withModifiers as Z, onBeforeUnmount as ne, useSlots as N, nextTick as oe, createSlots as H, resolveComponent as X, vModelText as xe, inject as $e, provide as ke } from "vue";
import { FontAwesomeIcon as D } from "@fortawesome/vue-fontawesome";
import { faChevronDown as ee, faHeadphones as Se, faVideoCamera as we, faFile as ae, faXmark as J, faCheck as se, faCalendar as Ce, faUpload as Ve, faPlus as ze, faSort as Me } from "@fortawesome/free-solid-svg-icons";
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
    return (l, t) => (a(), s("div", {
      class: y([
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
}, De = { class: "text-xl font-medium" }, Fe = { class: "pt-4" }, Ie = { key: 1 }, Ee = { class: "p-2" }, zl = {
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
    const l = S(e, "modelValue");
    return (t, o) => e.variant === "card" ? (a(), F(ie, { key: 0 }, {
      default: M(() => [
        d("div", {
          onClick: o[0] || (o[0] = (n) => l.value = !l.value),
          class: "flex items-center justify-between gap-2 cursor-pointer"
        }, [
          d("h3", De, p(e.title), 1),
          h(U, { name: "rotate" }, {
            default: M(() => [
              d("div", {
                class: y({ rotated: l.value, "not-rotated": !l.value })
              }, [
                h(g(D), {
                  icon: g(ee),
                  size: "lg"
                }, null, 8, ["icon"])
              ], 2)
            ]),
            _: 1
          })
        ]),
        P(d("div", Fe, [
          x(t.$slots, "default")
        ], 512), [
          [K, l.value]
        ])
      ]),
      _: 3
    })) : e.variant === "minimal" ? (a(), s("div", Ie, [
      d("div", {
        onClick: o[1] || (o[1] = (n) => l.value = !l.value),
        class: "p-2 border-b-2 border-base-text flex items-center justify-between gap-2 cursor-pointer"
      }, [
        d("h3", null, p(e.title), 1),
        h(U, { name: "rotate" }, {
          default: M(() => [
            d("div", {
              class: y({ rotated: l.value, "not-rotated": !l.value })
            }, [
              h(g(D), { icon: g(ee) }, null, 8, ["icon"])
            ], 2)
          ]),
          _: 1
        })
      ]),
      P(d("div", Ee, [
        x(t.$slots, "default")
      ], 512), [
        [K, l.value]
      ])
    ])) : w("", !0);
  }
}, ue = (e = 800) => {
  const l = T(innerWidth < e), t = () => l.value = innerWidth < e;
  return R(() => addEventListener("resize", t)), te(() => removeEventListener("resize", t)), l;
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
}, Le = (e) => Math.floor(e) !== e && e.toString().split(".")[1]?.length || 0, Ae = { class: "flex justify-center gap-2 w-full p-4" }, Oe = ["onMouseenter"], Ue = ["onClick"], Re = ["src", "alt"], Ne = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-secondary-text bg-card rounded-md"
}, Pe = ["onClick"], He = {
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
    const l = e, t = S(e, "files"), o = S(e, "selectedIdx"), n = ue(), { formatFiles: r } = ce(), i = T(-1), u = T(r(l.files)), c = (m) => {
      t.value = t.value.filter((f, C) => C !== m), o.value > m && (o.value -= 1);
    }, v = ({ moved: { oldIndex: m, newIndex: f } }) => {
      t.value = je(t.value, m, f), o.value === m ? o.value = f : o.value > m && o.value <= f ? o.value-- : o.value < m && o.value >= f && o.value++;
    }, b = B(() => l.size === "lg" ? "w-16 h-16" : "w-14 h-14");
    return O(t, () => u.value = r(l.files)), (m, f) => (a(), s("div", Ae, [
      x(m.$slots, "additional-items-before"),
      h(g(Be), {
        modelValue: u.value,
        "onUpdate:modelValue": f[1] || (f[1] = (C) => u.value = C),
        "item-key": "uuid",
        "swap-threshold": 0.65,
        animation: 200,
        class: "flex gap-2",
        onChange: v
      }, {
        item: M(({ element: C, index: V }) => [
          d("div", {
            class: y(`relative border-secondary rounded-md ${b.value} ${o.value === V ? "border-3 bg-secondary" : ""}`),
            onMouseenter: (A) => i.value = V,
            onMouseleave: f[0] || (f[0] = (A) => i.value = -1)
          }, [
            d("button", {
              class: "w-full h-full",
              onClick: (A) => o.value = V
            }, [
              C.type === "image" ? (a(), s("img", {
                key: 0,
                src: C.preview,
                alt: C.name,
                class: "w-full h-full object-cover rounded-md"
              }, null, 8, Re)) : (a(), s("span", Ne, [
                C.type === "audio" ? (a(), F(g(D), {
                  key: 0,
                  icon: g(Se),
                  size: "lg"
                }, null, 8, ["icon"])) : C.type === "video" ? (a(), F(g(D), {
                  key: 1,
                  icon: g(we),
                  size: "lg"
                }, null, 8, ["icon"])) : (a(), F(g(D), {
                  key: 2,
                  icon: g(ae),
                  size: "lg"
                }, null, 8, ["icon"]))
              ]))
            ], 8, Ue),
            i.value === V || g(n) ? (a(), s("button", {
              key: 0,
              onClick: (A) => c(V),
              class: "absolute cursor-pointer top-0 right-0 text-secondary-text bg-card/80 rounded-full w-5 h-5 flex justify-center items-center"
            }, [
              h(g(D), {
                icon: g(J),
                size: "xs"
              }, null, 8, ["icon"])
            ], 8, Pe)) : w("", !0)
          ], 42, Oe)
        ]),
        _: 1
      }, 8, ["modelValue"]),
      x(m.$slots, "additional-items-after")
    ]));
  }
}, Qe = ["src"], Ml = {
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
    }, null, 10, Qe));
  }
}, qe = { class: "flex items-center" }, We = ["src", "alt"], Bl = {
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
    return (l, t) => (a(), s("div", qe, [
      (a(!0), s(E, null, L(e.avatars, (o, n) => (a(), s("img", {
        key: n,
        src: o,
        alt: `avatar ${n + 1}`,
        class: y(`${e.width} rounded-full relative`),
        style: le({ marginLeft: n === 0 ? "0" : `-${e.overlap}px` })
      }, null, 14, We))), 128))
    ]));
  }
}, Tl = {
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
      x(l.$slots, "default", {}, () => [
        q(p(e.content), 1)
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
    const t = e, o = l, n = T(!1), r = (c) => {
      t.href && window.open(t.href), o("click", c);
    }, i = B(() => t.color === "base" ? "secondary-text" : t.color), u = B(() => {
      const c = [
        "btn",
        t.styles,
        { pressed: n },
        { "disabled-btn": t.disabled },
        { "cursor-default": !t.hoverEffects }
      ];
      switch (t.variant) {
        case "light":
          c.push(`bg-${i.value}/20 text-${i.value}`), t.hoverEffects && c.push(`hover:bg-${i.value}/35`);
          break;
        case "outline":
          c.push(`text-${i.value} border-${i.value} border-2`), t.hoverEffects && c.push(`hover:bg-${i.value}/10`);
          break;
        case "subtle":
          c.push(`text-${i.value} bg-transparent`), t.hoverEffects && c.push(`hover:bg-${i.value}/10`);
          break;
        case "dashed":
          c.push(`text-${i.value} border-${i.value} border-2 border-dashed`), t.hoverEffects && c.push(`hover:bg-${i.value}/10`);
          break;
        default:
          c.push(`text-black bg-${i.value}`);
          break;
      }
      return c;
    });
    return (c, v) => (a(), s("button", {
      onClick: r,
      onMousedown: v[0] || (v[0] = (b) => n.value = !0),
      onMouseup: v[1] || (v[1] = (b) => n.value = !1),
      class: y(u.value),
      disabled: e.disabled,
      type: e.type
    }, [
      x(c.$slots, "default")
    ], 42, Ge));
  }
}, Ze = { class: "flex items-center gap-2" }, Xe = ["for"], Je = {
  key: 0,
  class: "text-error text-sm"
}, Dl = {
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
    const t = S(e, "modelValue"), o = l, n = () => {
      t.value = !t.value, o("toggle", t.value);
    };
    return (r, i) => (a(), s("div", null, [
      d("div", Ze, [
        d("button", {
          onClick: i[0] || (i[0] = (u) => n()),
          type: "button",
          class: y(["rounded-sm cursor-pointer border-secondary border-2 w-4 h-4 flex items-center justify-center text-black", { "bg-secondary": t.value, "hover:bg-secondary/30": !t.value }])
        }, [
          t.value ? (a(), F(g(D), {
            key: 0,
            icon: g(se),
            size: "xs"
          }, null, 8, ["icon"])) : w("", !0)
        ], 2),
        d("label", { for: e.name }, [
          x(r.$slots, "default")
        ], 8, Xe)
      ]),
      e.error ? (a(), s("p", Je, p(e.error), 1)) : w("", !0)
    ]));
  }
}, Fl = {
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
    const t = e, o = l, n = S(e, "modelValue"), r = B(() => `${t.styles} py-1 px-3 duration-100 text-center border-2 rounded-${t.rounded} text-${t.size} text-${t.color} border-${t.color} hover:bg-${t.color}/10`), i = B(() => `${t.styles} py-1 px-3 duration-100 text-center border-2 rounded-${t.rounded} text-${t.size} bg-${t.color} border-${t.color} text-black`);
    return (u, c) => (a(), s("button", {
      onClick: c[0] || (c[0] = (v) => o("select")),
      class: y(n.value ? i.value : r.value)
    }, [
      x(u.$slots, "default")
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
    const t = e, o = l, n = S(e, "modelValue"), r = S(e, "input"), i = T(!1), u = B(
      () => t.variant === "filled" ? `bg-${t.color}` : "bg-transparent border border-border"
    ), c = (m) => {
      i.value = !0, o("input", m);
    }, v = (m) => {
      i.value = !1, o("blur", m);
    }, b = (m) => {
      n.value = m.target.value, o("input", m);
    };
    return (m, f) => (a(), s("div", null, [
      d("label", {
        for: e.name,
        class: y(e.labelStyles)
      }, p(e.label), 11, Ye),
      d("div", {
        class: y([
          "rounded-lg flex items-center duration-300",
          u.value,
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
        e.icon ? (a(), s("div", _e, [
          h(g(D), {
            icon: e.icon,
            size: e.size,
            class: "text-secondary-text"
          }, null, 8, ["icon", "size"])
        ])) : w("", !0),
        d("div", {
          class: y(["flex-grow w-full flex items-center gap-1 flex-wrap p-2", { "pl-0": e.icon }])
        }, [
          x(m.$slots, "left-section"),
          e.disabled ? (a(), s("div", {
            key: 0,
            class: y([{ "pl-0": e.icon, "text-sm": e.size === "sm" }, "flex-grow overflow-hidden whitespace-nowrap"])
          }, [
            n.value ? (a(), s("span", et, p(n.value), 1)) : e.value ? (a(), s("span", tt, p(e.value), 1)) : e.placeholder ? (a(), s("span", lt, p(e.placeholder), 1)) : w("", !0)
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
            onFocus: c,
            onBlur: v,
            class: y([{ "placeholder:text-sm": e.size === "sm" }, "p-0 flex-grow border-none outline-none rounded-lg bg-transparent placeholder:text-secondary-text"])
          }, null, 42, nt))
        ], 2),
        x(m.$slots, "right-section")
      ], 2),
      e.error && typeof e.error != "boolean" ? (a(), s("p", ot, p(e.error), 1)) : e.success && typeof e.error != "boolean" ? (a(), s("p", at, p(e.success), 1)) : w("", !0)
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
    const l = e, t = S(e, "modelValue"), o = (r) => {
      let i = parseFloat(r.target.value.replace(/[^\d.-]/g, ""));
      Le(i) > 0 && (i = (Math.round(i * 100) / 100).toFixed(2)), t.value = i;
    }, n = B(() => {
      if (t.value)
        return `${l.currencySymbol}${t.value}`;
    });
    return (r, i) => (a(), F(W, {
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
}, El = {
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
    const l = e, t = S(e, "modelValue"), o = T(null), n = B(() => l.range ? rt : l.includeTime ? st : Q);
    return (r, i) => (a(), s("div", {
      class: y(e.styles)
    }, [
      d("label", it, p(e.label), 1),
      h(g(Te), {
        modelValue: t.value,
        "onUpdate:modelValue": i[0] || (i[0] = (u) => t.value = u),
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
        "dp-input": M(({ value: u }) => [
          h(W, {
            placeholder: e.placeholder,
            value: u,
            icon: g(Ce),
            variant: e.variant,
            size: e.size,
            color: e.color,
            error: !!e.error
          }, null, 8, ["placeholder", "value", "icon", "variant", "size", "color", "error"])
        ]),
        _: 1
      }, 8, ["modelValue", "format", "disabled", "enable-time-picker", "range", "min-date", "max-date"]),
      e.error ? (a(), s("p", ut, p(e.error), 1)) : w("", !0)
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
    const t = l, o = S(e, "modelValue"), n = (r) => {
      o.value = !1, t("drop", r);
    };
    return (r, i) => (a(), s("div", {
      onDragover: i[0] || (i[0] = Z((u) => o.value = !0, ["prevent"])),
      onDragleave: i[1] || (i[1] = (u) => o.value = !1),
      onDrop: Z(n, ["prevent"])
    }, [
      x(r.$slots, "default", { isDragOver: o.value })
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
    const t = e, o = l, n = T(null), r = () => {
      t.disabled || n.value.click();
    };
    return (i, u) => (a(), s("div", null, [
      d("input", {
        type: "file",
        ref_key: "fileInput",
        ref: n,
        onChange: u[0] || (u[0] = (c) => o("change", c)),
        multiple: e.multiple,
        accept: e.accept,
        hidden: ""
      }, null, 40, dt),
      d("div", { onClick: r }, [
        x(i.$slots, "default")
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
    const l = S(e, "modelValue"), t = (r) => l.value = Array.from(r), o = (r) => t(r.dataTransfer.files), n = (r) => t(r.target.files);
    return (r, i) => (a(), s("div", null, [
      e.label ? (a(), s("p", mt, p(e.label), 1)) : w("", !0),
      d("div", null, [
        h(de, {
          onChange: n,
          accept: "image/*"
        }, {
          default: M(() => [
            h(ct, { onDrop: o }, {
              default: M(({ isDragOver: u }) => [
                d("div", {
                  class: y(["cursor-pointer duration-300 text-center border-2 border-dashed py-6 px-4 rounded-lg", {
                    "bg-secondary/30": u,
                    "text-secondary border-secondary": !e.error,
                    "text-error border-error": e.error
                  }])
                }, [
                  e.withIcon ? (a(), s("div", ft, [
                    h(g(D), {
                      icon: g(Ve),
                      size: "lg"
                    }, null, 8, ["icon"])
                  ])) : w("", !0),
                  d("p", vt, p(e.dropText), 1)
                ], 2)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e.error ? (a(), s("p", gt, p(e.error), 1)) : w("", !0)
      ])
    ]));
  }
}, me = () => {
  const e = T(!1), l = T(null), t = () => e.value = !0, o = () => e.value = !1, n = (r) => {
    l.value.contains(r.target) || o();
  };
  return R(() => {
    document.addEventListener("mousedown", n);
  }), ne(() => {
    document.removeEventListener("mousedown", n);
  }), { dropdownOpen: e, dropdownContainer: l, open: t, close: o };
}, Y = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [o, n] of l)
    t[o] = n;
  return t;
}, bt = ["onClick", "onMouseover"], pt = { key: 1 }, ht = {
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
    const t = e, o = l, n = N(), r = T(-1), i = T("top-full"), u = T(null), c = (f) => o("select", f), v = () => {
      const f = t.container.getBoundingClientRect(), C = window.innerHeight || document.documentElement.clientHeight;
      i.value = f.bottom + 150 > C ? "bottom-full" : "top-full";
    }, b = () => {
      i.value = "top-full";
    }, m = async (f) => {
      r.value += f, r.value < 0 ? r.value = t.options.length - 1 : r.value >= t.options.length && (r.value = 0), await oe();
      const V = u.value?.querySelectorAll("div > div")?.[r.value];
      V && V.scrollIntoView({ block: "nearest", behavior: "smooth" });
    };
    return G("ArrowDown", (f) => {
      t.open && t.options.length > 0 && (f.preventDefault(), m(1));
    }), G("ArrowUp", (f) => {
      t.open && t.options.length > 0 && (f.preventDefault(), m(-1));
    }), G("Enter", (f) => {
      t.open && t.options.length > 0 ? (f.preventDefault(), c(t.options[r.value])) : t.acceptsEmptySelection && (f.preventDefault(), c());
    }), O(() => t.open, () => {
      t.open || (r.value = -1);
    }), (f, C) => (a(), F(U, {
      name: i.value === "top-full" ? "slide-down" : "slide-up",
      onBeforeEnter: v,
      onAfterLeave: b
    }, {
      default: M(() => [
        e.open && e.options?.length > 0 ? (a(), s("div", {
          key: 0,
          ref_key: "optionsContainer",
          ref: u,
          class: y([
            "rounded-md bg-dropdown text-dropdown-text absolute overflow-auto max-h-64 flex flex-col cursor-pointer z-50",
            e.width,
            e.direction === "right" ? "right-0" : "left-0",
            i.value
          ])
        }, [
          (a(!0), s(E, null, L(e.options, (V, A) => (a(), s("div", {
            key: e.trackBy ? e.options[e.trackBy] : V,
            onClick: (j) => c(V),
            onMouseover: (j) => r.value = A,
            class: y(["text-md py-2 px-6 rounded-md text-left", { "bg-dropdown-select": r.value === A }])
          }, [
            g(n).option ? x(f.$slots, "option", {
              key: 0,
              option: V
            }, void 0, !0) : (a(), s("div", pt, [
              q(p(e.optionLabel ? V[e.optionLabel] : V) + " ", 1),
              V[e.optionDescription] ? (a(), s("div", ht, p(V[e.optionDescription]), 1)) : w("", !0)
            ]))
          ], 42, bt))), 128))
        ], 2)) : w("", !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}, _ = /* @__PURE__ */ Y(xt, [["__scopeId", "data-v-32652279"]]), jl = {
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
    const t = l, o = N(), { dropdownOpen: n, dropdownContainer: r } = me(), i = (u) => {
      n.value = !1, t("select", u);
    };
    return (u, c) => (a(), s("div", {
      class: "relative",
      ref_key: "dropdownContainer",
      ref: r
    }, [
      d("div", {
        onClick: c[0] || (c[0] = (v) => n.value = !g(n))
      }, [
        x(u.$slots, "trigger")
      ]),
      h(_, {
        container: g(r),
        options: e.options,
        open: g(n),
        "option-label": e.label,
        "track-by": e.trackBy,
        "accepts-empty-selection": "",
        onSelect: i,
        width: "w-64",
        direction: e.direction
      }, H({ _: 2 }, [
        g(o).option ? {
          name: "option",
          fn: M(({ option: v }) => [
            x(u.$slots, "option", { option: v })
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
    return (r, i) => (a(), F(Ke, {
      styles: `${e.styles} ${n.value} flex justify-center items-center !px-0 !py-0`,
      href: e.href,
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      variant: e.variant,
      "hover-effects": e.hoverEffects,
      onClick: i[0] || (i[0] = (u) => o("click", u))
    }, {
      default: M(() => [
        h(g(D), {
          size: e.size,
          icon: e.icon
        }, null, 8, ["size", "icon"])
      ]),
      _: 1
    }, 8, ["styles", "href", "type", "color", "disabled", "variant", "hover-effects"]));
  }
}, $t = { class: "flex items-center justify-center" }, kt = {
  key: 0,
  class: "text-center font-medium mt-2"
}, St = {
  __name: "Loader",
  props: {
    label: String
  },
  setup(e) {
    return (l, t) => (a(), s("div", $t, [
      d("div", null, [
        t[0] || (t[0] = d("div", { class: "spinner" }, null, -1)),
        e.label ? (a(), s("p", kt, p(e.label), 1)) : w("", !0)
      ])
    ]));
  }
}, Ll = /* @__PURE__ */ Y(St, [["__scopeId", "data-v-d8288a84"]]), wt = { class: "flex items-center justify-center" }, Ct = { key: 0 }, Vt = ["src", "alt"], zt = { key: 1 }, Mt = ["src"], Bt = { key: 2 }, Tt = ["src"], Dt = {
  key: 3,
  class: "text-center"
}, Ft = {
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
    const l = S(e, "selectedIdx"), t = ue(), o = () => {
      const n = document.querySelector("swiper-container").swiper;
      l.value = n.activeIndex;
    };
    return O(l, () => {
      const n = document.querySelector("swiper-container")?.swiper;
      l.value !== n.activeIndex && n.slideTo(l.value);
    }), (n, r) => {
      const i = X("swiper-slide"), u = X("swiper-container");
      return a(), F(u, {
        "slides-per-view": 1,
        "centered-slides": !0,
        navigation: !g(t),
        onSwiperslidechange: o
      }, {
        default: M(() => [
          (a(!0), s(E, null, L(e.files, (c) => (a(), F(i, null, {
            default: M(() => [
              d("div", wt, [
                c.type === "image" ? (a(), s("div", Ct, [
                  d("img", {
                    src: c.preview,
                    alt: c.name,
                    class: y(e.maxMediaHeight)
                  }, null, 10, Vt)
                ])) : c.type === "video" ? (a(), s("div", zt, [
                  d("video", {
                    src: c.preview,
                    controls: "",
                    class: y(e.maxMediaHeight)
                  }, null, 10, Mt)
                ])) : c.type === "audio" ? (a(), s("div", Bt, [
                  d("audio", {
                    src: c.preview,
                    controls: ""
                  }, null, 8, Tt)
                ])) : (a(), s("div", Dt, [
                  h(g(D), {
                    icon: g(ae),
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
}, It = {
  key: 0,
  class: "font-medium mb-1"
}, Et = {
  key: 1,
  class: "mb-2"
}, jt = {
  key: 0,
  class: "text-error text-sm mt-1"
}, Al = {
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
    const l = S(e, "modelValue"), t = T(0), { formatFiles: o } = ce(), n = (i) => l.value.push(...i.target.files), r = B(() => o(l.value));
    return (i, u) => (a(), s("div", null, [
      e.label ? (a(), s("label", It, p(e.label), 1)) : w("", !0),
      l.value.length > 0 ? (a(), s("div", Et, [
        h(Ft, {
          "selected-idx": t.value,
          "onUpdate:selectedIdx": u[0] || (u[0] = (c) => t.value = c),
          files: r.value
        }, null, 8, ["selected-idx", "files"]),
        h(He, {
          "selected-idx": t.value,
          "onUpdate:selectedIdx": u[1] || (u[1] = (c) => t.value = c),
          files: l.value,
          "onUpdate:files": u[2] || (u[2] = (c) => l.value = c)
        }, {
          "additional-items-after": M(() => [
            h(de, {
              onChange: n,
              accept: "image/*"
            }, {
              default: M(() => [
                h(fe, {
                  icon: g(ze),
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
        e.error ? (a(), s("p", jt, p(e.error), 1)) : w("", !0)
      ])) : (a(), F(yt, {
        key: 2,
        "with-icon": "",
        "drop-text": e.placeholder,
        modelValue: l.value,
        "onUpdate:modelValue": u[3] || (u[3] = (c) => l.value = c),
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
    return te(() => t("close")), (o, n) => (a(), F(g(ye), {
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
}, Ol = {
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
    const l = e, t = S(e, "modelValue"), o = N(), n = be({
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
    }), (r, i) => (a(), F(g(pe)));
  }
}, At = {
  key: 0,
  class: "text-error text-sm"
}, Ul = {
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
    const t = e, o = l, n = S(e, "modelValue"), r = S(e, "searchQuery"), i = S(e, "input"), u = N(), c = T(!1), v = T(null), b = B(() => t.acceptsDuplicates ? t.options : t.options.filter((k) => !n.value.includes(t.formatResult(k)))), m = (k) => {
      n.value.push(t.formatResult(k)), r.value = "", o("select", k);
    }, f = (k) => {
      n.value = n.value.filter((z, I) => I !== k);
    }, C = () => {
      c.value = !0;
    }, V = () => {
      c.value = !1;
    }, A = () => {
      t.searchable || (c.value ? V() : C());
    }, j = (k) => {
      v.value.contains(k.target) || V();
    };
    return R(() => {
      document.addEventListener("mousedown", j);
    }), ne(() => {
      document.removeEventListener("mousedown", j);
    }), O(r, () => {
      t.searchable && r.value.length > 0 && C();
    }), (k, z) => (a(), s("div", {
      class: y([e.styles])
    }, [
      d("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: v
      }, [
        d("div", {
          onClick: z[4] || (z[4] = (I) => A()),
          class: y({ "cursor-pointer": !e.searchable })
        }, [
          h(W, {
            modelValue: r.value,
            "onUpdate:modelValue": z[0] || (z[0] = (I) => r.value = I),
            input: i.value,
            "onUpdate:input": z[1] || (z[1] = (I) => i.value = I),
            label: e.label,
            placeholder: e.placeholder,
            disabled: !e.searchable,
            icon: e.icon,
            error: !!e.error,
            size: e.size,
            color: e.color,
            variant: e.variant,
            styles: e.textboxStyles,
            onFocus: z[2] || (z[2] = (I) => o("focus", I)),
            onBlur: z[3] || (z[3] = (I) => o("blur", I))
          }, {
            "left-section": M(() => [
              (a(!0), s(E, null, L(n.value, (I, ge) => (a(), s("div", {
                key: e.optionLabel[e.trackBy]
              }, [
                x(k.$slots, "selectedTag", {
                  option: I,
                  deselect: () => f(ge)
                })
              ]))), 128))
            ]),
            _: 3
          }, 8, ["modelValue", "input", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        h(_, {
          container: v.value,
          options: b.value,
          "option-label": e.optionLabel,
          "track-by": e.trackBy,
          open: c.value,
          "accepts-empty-selection": e.acceptsEmptySelection,
          onSelect: m
        }, H({ _: 2 }, [
          g(u).option ? {
            name: "option",
            fn: M(({ option: I }) => [
              x(k.$slots, "option", { option: I })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      e.error && typeof e.error != "boolean" ? (a(), s("p", At, p(e.error), 1)) : w("", !0)
    ], 2));
  }
}, Ot = { class: "font-medium" }, Ut = {
  key: 0,
  class: "text-text-secondary flex justify-center items-center w-10 rounded-l-md"
}, Rt = ["placeholder", "min", "max", "disabled"], Nt = {
  key: 0,
  class: "text-error text-sm"
}, Pt = {
  key: 1,
  class: "text-error text-sm"
}, Rl = {
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
    const l = e, t = S(e, "modelValue"), o = B(
      () => l.variant === "filled" ? `bg-${l.color}` : "bg-transparent border border-secondary-text"
    ), n = B(() => l.modelValue > l.max ? `Value must be ${l.max} or less.` : l.modelValue < l.min ? `Value must be ${l.min} or more.` : !1);
    return (r, i) => (a(), s("div", null, [
      d("h4", Ot, p(e.label), 1),
      d("div", {
        class: y(["rounded-lg flex h-10 items-center", o.value, e.styles, { error: n.value || e.error, "px-2": !e.icon }])
      }, [
        e.icon ? (a(), s("div", Ut, [
          h(g(D), {
            icon: e.icon,
            size: "1x",
            class: "text-secondary-text"
          }, null, 8, ["icon"])
        ])) : w("", !0),
        P(d("input", {
          "onUpdate:modelValue": i[0] || (i[0] = (u) => t.value = u),
          placeholder: e.placeholder,
          type: "number",
          min: e.min,
          max: e.max,
          disabled: e.disabled,
          class: "flex-grow w-full py-2 px-0 border-none outline-none rounded-lg placeholder:text-secondary-text bg-transparent appearance-none"
        }, null, 8, Rt), [
          [xe, t.value]
        ])
      ], 2),
      n.value ? (a(), s("p", Nt, p(n.value), 1)) : e.error && typeof e.error == "string" ? (a(), s("p", Pt, p(e.error), 1)) : w("", !0)
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
    return (o, n) => (a(), s("p", {
      class: y([e.styles, { "whitespace-pre-wrap": e.includeWhitespace }])
    }, p(t.value), 3));
  }
}, Ht = ["name", "value", "checked"], Qt = { class: "rounded-full border-2 border-secondary flex items-center justify-center h-4 w-4" }, Pl = {
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
    const t = e, o = l, n = S(e, "modelValue"), r = T(!1), i = B(() => t.modelValue === t.value), u = (c) => {
      n.value = t.value, o("select", c);
    };
    return (c, v) => (a(), s("label", {
      class: "flex items-center gap-3 relative cursor-pointer",
      onMouseenter: v[1] || (v[1] = (b) => r.value = !0),
      onMouseleave: v[2] || (v[2] = (b) => r.value = !1)
    }, [
      d("input", {
        class: "absolute opacity-0 cursor-pointer",
        type: "radio",
        name: e.name,
        value: e.value,
        checked: i.value,
        onChange: v[0] || (v[0] = (b) => u(b))
      }, null, 40, Ht),
      d("span", Qt, [
        d("span", {
          class: y(["rounded-full h-2 w-2", { "bg-secondary": r.value || i.value }])
        }, null, 2)
      ]),
      d("span", null, p(e.label), 1)
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
    const t = e, o = l, n = S(e, "modelValue"), r = S(e, "searchQuery"), i = S(e, "input"), u = N(), { dropdownOpen: c, dropdownContainer: v, open: b, close: m } = me(), f = (j) => {
      const k = t.formatResult(j);
      n.value = k, o("select", k), t.optionLabel && t.searchable ? r.value = j[t.optionLabel] : t.searchable && (r.value = j), oe(m);
    }, C = (j) => {
      j.stopPropagation(), n.value = null, r.value = "";
    }, V = () => {
      t.searchable || (c.value ? m() : b());
    }, A = B(() => n.value && t.optionLabel ? n.value[t.optionLabel] : n.value ? n.value : null);
    return O(r, () => {
      t.searchable && r.value.length > 0 ? b() : t.searchable && m();
    }), (j, k) => (a(), s("div", {
      class: y([e.styles])
    }, [
      d("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: v
      }, [
        d("div", {
          onClick: k[5] || (k[5] = (z) => V()),
          class: y({ "cursor-pointer": !e.searchable })
        }, [
          h(W, {
            modelValue: r.value,
            "onUpdate:modelValue": k[1] || (k[1] = (z) => r.value = z),
            input: i.value,
            "onUpdate:input": k[2] || (k[2] = (z) => i.value = z),
            value: A.value,
            label: e.label,
            placeholder: e.placeholder,
            disabled: !e.searchable || e.lockOnSelect && n.value,
            icon: n.value?.icon ?? e.icon,
            error: !!e.error,
            size: e.size,
            color: e.color,
            variant: e.variant,
            styles: e.textboxStyles,
            onFocus: k[3] || (k[3] = (z) => o("focus", z)),
            onBlur: k[4] || (k[4] = (z) => o("blur", z))
          }, H({ _: 2 }, [
            e.lockOnSelect && e.searchable && n.value ? {
              name: "right-section",
              fn: M(() => [
                d("div", qt, [
                  h(fe, {
                    icon: g(J),
                    onClick: k[0] || (k[0] = (z) => C()),
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
                  h(g(D), {
                    icon: g(Me),
                    size: e.size
                  }, null, 8, ["icon", "size"])
                ])
              ]),
              key: "1"
            }
          ]), 1032, ["modelValue", "input", "value", "label", "placeholder", "disabled", "icon", "error", "size", "color", "variant", "styles"])
        ], 2),
        h(_, {
          container: g(v),
          options: e.options,
          "option-label": e.optionLabel,
          "track-by": e.trackBy,
          open: g(c),
          "accepts-empty-selection": e.acceptsEmptySelection,
          onSelect: f
        }, H({ _: 2 }, [
          g(u).option ? {
            name: "option",
            fn: M(({ option: z }) => [
              x(j.$slots, "option", { option: z })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      e.error && typeof e.error != "boolean" ? (a(), s("p", Gt, p(e.error), 1)) : w("", !0)
    ], 2));
  }
}, Kt = {
  key: 0,
  class: "w-full"
}, Zt = { class: "flex justify-between items-center gap-2 px-4" }, Xt = ["onClick"], Jt = { class: "flex justify-between items-center mt-1 px-3" }, Yt = ["onClick"], _t = ["onClick"], Ql = {
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
    const l = e, t = S(e, "modelValue"), o = B(() => l.steps.findIndex((c) => c.value === t.value)), n = B(() => l.steps.map((c, v) => v < o.value ? { ...c, status: "completed" } : v === o.value ? { ...c, status: "in-progress" } : { ...c, status: "uncompleted" })), r = (c) => c.status === "uncompleted" || c.status !== "in-progress" && l.variant === "minimalist" ? "text-secondary-text bg-card-accent" : `text-${l.color} bg-${l.color}${l.variant === "classic" ? "/30" : ""}`, i = (c) => l.canMoveForwards && c > o.value || l.canMoveBackwards && c < o.value ? "cursor-pointer" : "cursor-default", u = (c, v) => {
      (l.canMoveForwards && v > o.value || l.canMoveBackwards && v < o.value) && (t.value = c.value);
    };
    return (c, v) => e.variant === "classic" ? (a(), s("div", Kt, [
      d("div", Zt, [
        (a(!0), s(E, null, L(n.value, (b, m) => (a(), s(E, {
          key: b.value
        }, [
          d("div", {
            onClick: (f) => u(b, m),
            class: y([
              "w-10 h-10 rounded-full flex items-center justify-center",
              r(b),
              i(m)
            ])
          }, [
            h(g(D), {
              icon: b.status === "completed" && !e.canMoveBackwards ? g(se) : b.icon
            }, null, 8, ["icon"])
          ], 10, Xt),
          m < e.steps.length - 1 ? (a(), s("div", {
            key: 0,
            class: y(`flex-grow bg-${n.value[m + 1].status === "uncompleted" ? "secondary-text" : e.color} h-0.5`)
          }, null, 2)) : w("", !0)
        ], 64))), 128))
      ]),
      d("div", Jt, [
        (a(!0), s(E, null, L(n.value, (b, m) => (a(), s("p", {
          key: "label-" + b.value,
          onClick: (f) => u(b, m),
          class: y([
            b.status === "uncompleted" ? "text-secondary-text" : `text-${e.color}`,
            "text-xs font-medium text-center",
            i(m)
          ])
        }, p(b.label), 11, Yt))), 128))
      ])
    ])) : e.variant === "minimalist" ? (a(), s("div", {
      key: 1,
      class: y(`grid grid-cols-${n.value.length} gap-1`)
    }, [
      (a(!0), s(E, null, L(n.value, (b, m) => (a(), s("div", {
        key: b.value,
        onClick: (f) => u(b, m)
      }, [
        d("div", {
          class: y(["h-1 rounded-lg mb-1", r(b), i(m)])
        }, null, 2),
        d("p", {
          class: y([
            b.status !== "in-progress" ? "text-secondary-text" : `text-${e.color}`,
            "text-sm font-medium",
            i(m)
          ])
        }, p(b.label), 3)
      ], 8, _t))), 128))
    ], 2)) : w("", !0);
  }
}, el = {};
function tl(e, l) {
  return a(), s("div", {
    onClick: Z(() => {
    }, ["stop"])
  }, [
    x(e.$slots, "default")
  ]);
}
const ql = /* @__PURE__ */ Y(el, [["render", tl]]), ll = { class: "overflow-hidden rounded-xl shadow-full-box border border-border" }, nl = { class: "w-full border-collapse table-fixed bg-card overflow-hidden" }, ol = ["onClick"], al = ["colspan", "rowspan"], Wl = {
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
    const l = e, t = (u) => ({
      width: u.width ? typeof u.width == "number" ? `${u.width}px` : u.width : void 0,
      height: u.height ? typeof u.height == "number" ? `${u.height}px` : u.height : void 0
    }), o = (u, c, v) => [
      `text-${u.align ?? "left"} p-2 border-border`,
      { "border-r": v !== l.rows[c].cells?.length - 1 && v !== l.rows[c].length - 1 },
      u.class
    ], n = (u, c) => [
      u.class ?? "",
      "border-border",
      { "border-b": c !== l.rows.length - 1 },
      { "cursor-pointer hover:bg-muted/50": u.onClick || l.onRowClick }
    ], r = (u, c) => {
      if (u.onClick) return u.onClick(u, c);
      if (l.onRowClick) return l.onRowClick(u, c);
    }, i = (u) => String.fromCharCode(65 + u);
    return (u, c) => (a(), s("div", ll, [
      d("table", nl, [
        d("tbody", null, [
          (a(!0), s(E, null, L(e.rows, (v, b) => (a(), s("tr", {
            key: "row-" + b,
            class: y(n(v, b)),
            onClick: (m) => r(v, b)
          }, [
            (a(!0), s(E, null, L(v.cells ?? v, (m, f) => (a(), s("td", {
              key: "cell-" + b + "-" + f,
              colspan: m.colspan || 1,
              rowspan: m.rowspan || 1,
              class: y(o(m, b, f)),
              style: le(t(m))
            }, [
              x(u.$slots, `${i(f)}${b + 1}`, {}, () => [
                q(p(m.content), 1)
              ])
            ], 14, al))), 128))
          ], 10, ol))), 128))
        ])
      ])
    ]));
  }
}, sl = ["onClick"], Gl = {
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
    const l = S(e, "selectedTab");
    return (t, o) => (a(), s("div", null, [
      d("div", {
        class: y(["tab-container", { "justify-between": e.stretch }])
      }, [
        (a(!0), s(E, null, L(e.tabs, (n) => (a(), s("button", {
          key: n.name,
          class: y(["cursor-pointer", [{
            "text-error": n.error,
            "underline-offset-8 underline font-medium": n.name === l.value
          }, `text-${e.size}`]]),
          onClick: (r) => l.value = n.name,
          type: "button"
        }, p(n.label), 11, sl))), 128))
      ], 2),
      (a(!0), s(E, null, L(e.tabs, (n) => P((a(), s("div", {
        key: n.name
      }, [
        x(t.$slots, `tab-${n.name}`)
      ])), [
        [K, n.name === l.value]
      ])), 128))
    ]));
  }
}, Kl = {
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
      x(l.$slots, "default")
    ], 2));
  }
}, rl = { class: "flex items-center justify-between" }, il = ["for"], ul = {
  key: 0,
  class: "text-xs text-secondary-text mr-1"
}, cl = ["name", "placeholder", "value", "disabled", "maxlength", "rows"], dl = {
  key: 0,
  class: "text-error text-sm"
}, ml = {
  key: 1,
  class: "text-success text-sm"
}, Zl = {
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
    const t = e, o = l, n = S(e, "modelValue"), r = S(e, "input"), i = T(t.modelValue), u = T(!1), c = B(
      () => t.variant === "filled" ? `bg-${t.color}` : "bg-transparent border border-border"
    ), v = (f) => {
      u.value = !0, o("focus", f);
    }, b = (f) => {
      u.value = !1, o("blur", f);
    }, m = (f) => {
      const C = f.target;
      i.value = C.value, n.value = C.value, o("input", f);
    };
    return O(
      () => t.modelValue,
      (f) => {
        i.value = f;
      }
    ), (f, C) => (a(), s("div", null, [
      d("div", rl, [
        d("label", {
          for: e.name,
          class: "font-medium"
        }, p(e.label), 9, il),
        e.maxlength ? (a(), s("p", ul, p(n.value?.length ?? 0) + " / " + p(e.maxlength), 1)) : w("", !0)
      ]),
      d("div", {
        class: y([
          "rounded-lg flex duration-300 max-h-48 overflow-auto",
          c.value,
          e.styles,
          {
            error: e.error,
            success: e.success,
            selected: u.value
          }
        ])
      }, [
        d("textarea", {
          class: y(["rounded-lg p-2 flex-grow bg-transparent outline-none max-w-full placeholder:text-secondary-text border-none", { "field-sizing-content": e.fieldSizingContent }]),
          name: e.name,
          placeholder: e.placeholder,
          value: n.value,
          disabled: e.disabled,
          onInput: m,
          onFocus: v,
          onBlur: b,
          onKeydown: C[0] || (C[0] = (V) => o("keyPress", V)),
          maxlength: e.maxlength,
          rows: e.rows,
          ref_key: "inputElement",
          ref: r
        }, null, 42, cl)
      ], 2),
      e.error && typeof e.error != "boolean" ? (a(), s("p", dl, p(e.error), 1)) : e.success && typeof e.error != "boolean" ? (a(), s("p", ml, p(e.success), 1)) : w("", !0)
    ]));
  }
}, ve = () => {
  const e = $e("toastMessages", T([]));
  return {
    initializeToast: () => ke("toastMessages", T([])),
    toastMessages: e,
    addToast: (n) => e.value.push({ ...n, uuid: re() }),
    closeToast: (n) => e.value = e.value.filter((r) => r.uuid !== n)
  };
}, fl = { class: "flex-grow" }, vl = { class: "text-sm font-medium" }, gl = { class: "text-sm" }, yl = {
  __name: "ToastMessage",
  props: {
    message: Object
  },
  setup(e) {
    const l = e, { closeToast: t } = ve();
    return R(() => {
      l.message.duration && setTimeout(() => t(l.message.uuid), l.message.duration);
    }), (o, n) => {
      const r = X("IconButton");
      return a(), F(U, {
        name: "slide-fade",
        appear: ""
      }, {
        default: M(() => [
          d("div", {
            class: y(`w-72 flex items-center gap-2 rounded-md p-2 bg-${e.message.color ?? "success"}/${e.message.opacity ?? 60}`)
          }, [
            d("div", fl, [
              d("p", vl, p(e.message.title), 1),
              d("p", gl, p(e.message.content), 1)
            ]),
            h(r, {
              icon: g(J),
              color: "base",
              variant: "subtle",
              onClick: n[0] || (n[0] = (i) => g(t)(e.message.uuid))
            }, null, 8, ["icon"])
          ], 2)
        ]),
        _: 1
      });
    };
  }
}, bl = { class: "relative" }, Xl = {
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
    return (n, r) => (a(), s("div", bl, [
      x(n.$slots, "default"),
      o.value.length > 0 ? (a(), s("div", {
        key: 0,
        class: y(["absolute p-4 z-50 flex flex-col gap-2 overflow-hidden", e.position])
      }, [
        (a(!0), s(E, null, L(o.value, (i) => (a(), s("div", {
          key: i.uuid
        }, [
          x(n.$slots, "toast-content", { message: i }, () => [
            h(yl, { message: i }, null, 8, ["message"])
          ])
        ]))), 128))
      ], 2)) : w("", !0)
    ]));
  }
}, Jl = {
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
    const t = e, o = l, n = S(e, "modelValue"), r = () => {
      n.value = !n.value, o("toggle", n.value);
    }, i = B(
      () => n.value ? `bg-${t.activeColor}` : "bg-gray-300 dark:bg-gray-600"
    ), u = B(
      () => n.value ? "translate-x-6" : "translate-x-0"
    );
    return R(() => {
      n.value = n.value ?? t.value;
    }), (c, v) => (a(), s("div", {
      onClick: r,
      class: y([i.value, "cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300"])
    }, [
      d("div", {
        class: y([u.value, "bg-white dark:bg-gray-200 text-black text-sm flex justify-center items-center w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"])
      }, [
        e.icon ? (a(), F(g(D), {
          key: 0,
          icon: e.icon
        }, null, 8, ["icon"])) : w("", !0)
      ], 2)
    ], 2));
  }
}, pl = { class: "rounded-md bg-dropdown/80 text-dropdown-text p-1 text-xs text-nowrap" }, Yl = {
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
    return (n, r) => (a(), s("div", {
      class: "relative flex items-center",
      onMouseenter: r[0] || (r[0] = (i) => t.value = !0),
      onMouseleave: r[1] || (r[1] = (i) => t.value = !1)
    }, [
      x(n.$slots, "default"),
      h(U, { name: "fade" }, {
        default: M(() => [
          t.value ? (a(), s("div", {
            key: 0,
            class: y([o.value, "absolute delay-1000 z-50"])
          }, [
            d("div", pl, [
              x(n.$slots, "tooltip-content", {}, () => [
                q(p(e.text), 1)
              ])
            ])
          ], 2)) : w("", !0)
        ]),
        _: 3
      })
    ], 32));
  }
}, _l = {
  install(e) {
    const l = he();
    e.use(l);
  }
};
export {
  zl as Accordion,
  He as AttachmentList,
  Ml as Avatar,
  Bl as AvatarGroup,
  Tl as Badge,
  Ke as Button,
  ie as Card,
  Dl as Checkbox,
  Fl as ClickableTag,
  Il as CurrencyInput,
  El as DatePicker,
  yt as DragAndDropFiles,
  jl as DropdownMenu,
  _ as DropdownOptions,
  ct as Dropzone,
  de as FileButton,
  fe as IconButton,
  Ll as Loader,
  Ft as MediaCarousel,
  Al as MediaInput,
  Ol as Modal,
  Ul as Multiselect,
  Rl as NumberInput,
  Nl as Paragraph,
  Pl as Radio,
  Hl as Select,
  Ql as Stepper,
  ql as StopPropagation,
  Wl as TableCard,
  Gl as Tabs,
  Kl as Tag,
  Zl as Textarea,
  W as Textbox,
  Xl as ToastContainer,
  Jl as Toggle,
  Yl as Tooltip,
  _l as default,
  ce as useFiles,
  ue as useIsHandheld,
  ve as useToast
};
