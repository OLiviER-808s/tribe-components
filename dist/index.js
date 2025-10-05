import { createElementBlock as s, openBlock as o, normalizeClass as f, renderSlot as z, mergeModels as h, useModel as S, createBlock as E, createCommentVNode as $, withCtx as B, createElementVNode as c, withDirectives as R, createVNode as x, toDisplayString as y, Transition as N, unref as g, vShow as W, ref as D, onMounted as P, onUnmounted as ce, computed as M, watch as O, Fragment as L, renderList as A, normalizeStyle as de, createTextVNode as Z, withModifiers as G, useSlots as X, nextTick as te, resolveComponent as _, onBeforeUnmount as le, createSlots as K, vModelText as me } from "vue";
import { FontAwesomeIcon as T } from "@fortawesome/vue-fontawesome";
import { faChevronDown as ee, faHeadphones as fe, faVideoCamera as ve, faFile as ne, faXmark as J, faCheck as oe, faCalendar as ye, faUpload as ge, faPlus as be, faSort as pe } from "@fortawesome/free-solid-svg-icons";
import he from "vuedraggable";
import { v4 as xe } from "uuid";
import $e from "@vuepic/vue-datepicker";
import { onKeyStroke as q } from "@vueuse/core";
import { QuillEditor as Se } from "@vueup/vue-quill";
const ke = {
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
    return (l, t) => (o(), s("div", {
      class: f(`${e.styles} ${e.padding} bg-card border border-border dark:border-none rounded-md shadow-sm`)
    }, [
      z(l.$slots, "default")
    ], 2));
  }
}, U = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [a, n] of l)
    t[a] = n;
  return t;
}, we = { class: "text-xl font-medium" }, Ve = { class: "pt-4" }, ze = { key: 1 }, Ce = { class: "p-2" }, Me = {
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
    return (t, a) => e.variant === "card" ? (o(), E(ke, { key: 0 }, {
      default: B(() => [
        c("div", {
          onClick: a[0] || (a[0] = (n) => l.value = !l.value),
          class: "flex items-center justify-between gap-2 cursor-pointer"
        }, [
          c("h3", we, y(e.title), 1),
          x(N, { name: "rotate" }, {
            default: B(() => [
              c("div", {
                class: f({ rotated: l.value, "not-rotated": !l.value })
              }, [
                x(g(T), {
                  icon: g(ee),
                  size: "lg"
                }, null, 8, ["icon"])
              ], 2)
            ]),
            _: 1
          })
        ]),
        R(c("div", Ve, [
          z(t.$slots, "default", {}, void 0, !0)
        ], 512), [
          [W, l.value]
        ])
      ]),
      _: 3
    })) : e.variant === "minimal" ? (o(), s("div", ze, [
      c("div", {
        onClick: a[1] || (a[1] = (n) => l.value = !l.value),
        class: "p-2 border-b-2 border-base-text flex items-center justify-between gap-2 cursor-pointer"
      }, [
        c("h3", null, y(e.title), 1),
        x(N, { name: "rotate" }, {
          default: B(() => [
            c("div", {
              class: f({ rotated: l.value, "not-rotated": !l.value })
            }, [
              x(g(T), { icon: g(ee) }, null, 8, ["icon"])
            ], 2)
          ]),
          _: 1
        })
      ]),
      R(c("div", Ce, [
        z(t.$slots, "default", {}, void 0, !0)
      ], 512), [
        [W, l.value]
      ])
    ])) : $("", !0);
  }
}, bl = /* @__PURE__ */ U(Me, [["__scopeId", "data-v-9e95a274"]]), ae = (e = 800) => {
  const l = D(innerWidth < e), t = () => l.value = innerWidth < e;
  return P(() => addEventListener("resize", t)), ce(() => removeEventListener("resize", t)), l;
}, se = () => ({ readableFileSize: (t) => {
  const a = ["Bytes", "KB", "MB", "GB", "TB"], n = Math.floor(Math.log(t) / Math.log(1024));
  return `${Math.round(t / Math.pow(1024, n))} ${a[n]}`;
}, formatFiles: (t) => t?.map((a) => a.uuid ? a : {
  name: a.name,
  size: a.size,
  uuid: xe(),
  preview: URL.createObjectURL(a),
  type: a.type?.split("/")[0]
}) }), Be = (e, l, t) => {
  if (l < 0 || l >= e.length || t < 0 || t >= e.length)
    throw new Error("Invalid indices");
  const [a] = e.splice(l, 1);
  return e.splice(t, 0, a), e;
}, De = (e) => Math.floor(e) !== e && e.toString().split(".")[1]?.length || 0, Te = { class: "flex justify-center gap-2 w-full p-4" }, Fe = ["onMouseenter"], Ie = ["onClick"], Ee = ["src", "alt"], je = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-secondary-text bg-card rounded-md"
}, Le = ["onClick"], Ae = {
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
    const l = e, t = S(e, "files"), a = S(e, "selectedIdx"), n = ae(), { formatFiles: i } = se(), r = D(-1), d = D(i(l.files)), u = (v) => {
      t.value = t.value.filter((m, k) => k !== v), a.value > v && (a.value -= 1);
    }, b = ({ moved: { oldIndex: v, newIndex: m } }) => {
      t.value = Be(t.value, v, m), a.value === v ? a.value = m : a.value > v && a.value <= m ? a.value-- : a.value < v && a.value >= m && a.value++;
    }, p = M(() => l.size === "lg" ? "w-16 h-16" : "w-14 h-14");
    return O(t, () => d.value = i(l.files)), (v, m) => (o(), s("div", Te, [
      z(v.$slots, "additional-items-before"),
      x(g(he), {
        modelValue: d.value,
        "onUpdate:modelValue": m[1] || (m[1] = (k) => d.value = k),
        "item-key": "uuid",
        "swap-threshold": 0.65,
        animation: 200,
        class: "flex gap-2",
        onChange: b
      }, {
        item: B(({ element: k, index: C }) => [
          c("div", {
            class: f(`relative border-secondary rounded-md ${p.value} ${a.value === C ? "border-3 bg-secondary" : ""}`),
            onMouseenter: (j) => r.value = C,
            onMouseleave: m[0] || (m[0] = (j) => r.value = -1)
          }, [
            c("button", {
              class: "w-full h-full",
              onClick: (j) => a.value = C
            }, [
              k.type === "image" ? (o(), s("img", {
                key: 0,
                src: k.preview,
                alt: k.name,
                class: "w-full h-full object-cover rounded-md"
              }, null, 8, Ee)) : (o(), s("span", je, [
                k.type === "audio" ? (o(), E(g(T), {
                  key: 0,
                  icon: g(fe),
                  size: "lg"
                }, null, 8, ["icon"])) : k.type === "video" ? (o(), E(g(T), {
                  key: 1,
                  icon: g(ve),
                  size: "lg"
                }, null, 8, ["icon"])) : (o(), E(g(T), {
                  key: 2,
                  icon: g(ne),
                  size: "lg"
                }, null, 8, ["icon"]))
              ]))
            ], 8, Ie),
            r.value === C || g(n) ? (o(), s("button", {
              key: 0,
              onClick: (j) => u(C),
              class: "absolute cursor-pointer top-0 right-0 text-secondary-text bg-card/80 rounded-full w-5 h-5 flex justify-center items-center"
            }, [
              x(g(T), {
                icon: g(J),
                size: "xs"
              }, null, 8, ["icon"])
            ], 8, Le)) : $("", !0)
          ], 42, Fe)
        ]),
        _: 1
      }, 8, ["modelValue"]),
      z(v.$slots, "additional-items-after")
    ]));
  }
}, Oe = ["src"], pl = {
  __name: "Avatar",
  props: {
    src: String,
    styles: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (l, t) => (o(), s("img", {
      src: e.src,
      alt: "avatar",
      class: f(`rounded-full ${e.styles}`)
    }, null, 10, Oe));
  }
}, Ue = { class: "flex items-center" }, Ne = ["src", "alt"], hl = {
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
    return (l, t) => (o(), s("div", Ue, [
      (o(!0), s(L, null, A(e.avatars, (a, n) => (o(), s("img", {
        key: n,
        src: a,
        alt: `avatar ${n + 1}`,
        class: f(`${e.width} rounded-full relative`),
        style: de({ marginLeft: n === 0 ? "0" : `-${e.overlap}px` })
      }, null, 14, Ne))), 128))
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
    return (l, t) => (o(), s("div", {
      class: f(`text-${e.size} text-black font-bold bg-${e.color} rounded-xl px-1 ${e.styles} min-w-3 min-h-3`)
    }, [
      z(l.$slots, "default", {}, () => [
        Z(y(e.content), 1)
      ])
    ], 2));
  }
}, Pe = ["disabled", "type"], Re = {
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
    const t = e, a = l, n = D(!1), i = (u) => {
      t.href && window.open(t.href), a("click", u);
    }, r = M(() => t.color === "base" ? "secondary-text" : t.color), d = M(() => {
      switch (variant) {
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
    return (u, b) => (o(), s("button", {
      onClick: i,
      onMousedown: b[0] || (b[0] = (p) => n.value = !0),
      onMouseup: b[1] || (b[1] = (p) => n.value = !1),
      class: f([d.value, { pressed: n.value }, { "disabled-btn": e.disabled }]),
      disabled: e.disabled,
      type: e.type
    }, [
      z(u.$slots, "default", {}, void 0, !0)
    ], 42, Pe));
  }
}, He = /* @__PURE__ */ U(Re, [["__scopeId", "data-v-1b563b4d"]]), Qe = { class: "flex items-center gap-2" }, qe = ["for"], We = {
  key: 0,
  class: "text-error text-sm"
}, $l = {
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
    const t = S(e, "modelValue"), a = l, n = () => {
      t.value = !t.value, a("toggle", t.value);
    };
    return (i, r) => (o(), s("div", null, [
      c("div", Qe, [
        c("button", {
          onClick: r[0] || (r[0] = (d) => n()),
          type: "button",
          class: f(["rounded-sm cursor-pointer border-secondary border-2 w-4 h-4 flex items-center justify-center text-black", { "bg-secondary": t.value, "hover:bg-secondary/30": !t.value }])
        }, [
          t.value ? (o(), E(g(T), {
            key: 0,
            icon: g(oe),
            size: "xs"
          }, null, 8, ["icon"])) : $("", !0)
        ], 2),
        c("label", { for: e.name }, [
          z(i.$slots, "default")
        ], 8, qe)
      ]),
      e.error ? (o(), s("p", We, y(e.error), 1)) : $("", !0)
    ]));
  }
}, Sl = {
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
    const t = e, a = l, n = S(e, "modelValue"), i = M(() => `${t.styles} py-1 px-3 duration-100 text-center border-2 rounded-${t.rounded} text-${t.size} text-${t.color} border-${t.color} hover:bg-${t.color}/10`), r = M(() => `${t.styles} py-1 px-3 duration-100 text-center border-2 rounded-${t.rounded} text-${t.size} bg-${t.color} border-${t.color} text-black`);
    return (d, u) => (o(), s("button", {
      onClick: u[0] || (u[0] = (b) => a("select")),
      class: f(n.value ? r.value : i.value)
    }, [
      z(d.$slots, "default")
    ], 2));
  }
}, Ge = ["for"], Ke = {
  key: 0,
  class: "flex justify-center items-center w-10 rounded-l-md"
}, Ze = { key: 0 }, Xe = { key: 1 }, Je = {
  key: 2,
  class: "text-secondary-text"
}, Ye = ["name", "type", "placeholder", "value", "disabled"], _e = {
  key: 0,
  class: "text-error text-sm"
}, et = {
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
    const t = e, a = l, n = S(e, "modelValue"), i = S(e, "input"), r = D(!1), d = M(
      () => t.variant === "filled" ? `bg-${t.color}` : "bg-transparent border border-secondary-text"
    ), u = (v) => {
      r.value = !0, a("input", v);
    }, b = (v) => {
      r.value = !1, a("blur", v);
    }, p = (v) => {
      n.value = v.target.value, a("input", v);
    };
    return (v, m) => (o(), s("div", null, [
      c("label", {
        for: e.name,
        class: "font-medium"
      }, y(e.label), 9, Ge),
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
        e.icon ? (o(), s("div", Ke, [
          x(g(T), {
            icon: e.icon,
            size: e.size,
            class: "text-secondary-text"
          }, null, 8, ["icon", "size"])
        ])) : $("", !0),
        c("div", {
          class: f(["flex-grow w-full flex items-center gap-1 flex-wrap p-2", { "pl-0": e.icon }])
        }, [
          z(v.$slots, "left-section"),
          e.disabled ? (o(), s("div", {
            key: 0,
            class: f([{ "pl-0": e.icon, "text-sm": e.size === "sm" }, "flex-grow"])
          }, [
            n.value ? (o(), s("span", Ze, y(n.value), 1)) : e.value ? (o(), s("span", Xe, y(e.value), 1)) : e.placeholder ? (o(), s("span", Je, y(e.placeholder), 1)) : $("", !0)
          ], 2)) : (o(), s("input", {
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
          }, null, 42, Ye))
        ], 2),
        z(v.$slots, "right-section")
      ], 2),
      e.error && typeof e.error != "boolean" ? (o(), s("p", _e, y(e.error), 1)) : e.success && typeof e.error != "boolean" ? (o(), s("p", et, y(e.success), 1)) : $("", !0)
    ]));
  }
}, kl = {
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
    const l = e, t = S(e, "modelValue"), a = (i) => {
      let r = parseFloat(i.target.value.replace(/[^\d.-]/g, ""));
      De(r) > 0 && (r = (Math.round(r * 100) / 100).toFixed(2)), t.value = r;
    }, n = M(() => {
      if (t.value)
        return `${l.currencySymbol}${t.value}`;
    });
    return (i, r) => (o(), E(Q, {
      label: e.label,
      value: n.value,
      "on-input": a,
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
}, tt = (e) => `${H(e)} ${formatTimestamp24Hour(e)}`, lt = (e) => `${H(e[0])} - ${H(e[1])}`, nt = { class: "font-medium" }, ot = {
  key: 0,
  class: "text-error text-sm"
}, wl = {
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
    const l = e, t = S(e, "modelValue"), a = D(null), n = M(() => l.range ? lt : l.includeTime ? tt : H);
    return (i, r) => (o(), s("div", {
      class: f(e.styles)
    }, [
      c("label", nt, y(e.label), 1),
      x(g($e), {
        modelValue: t.value,
        "onUpdate:modelValue": r[0] || (r[0] = (d) => t.value = d),
        ref_key: "dp",
        ref: a,
        format: n.value,
        disabled: e.disabled,
        "auto-apply": "",
        "enable-time-picker": e.includeTime,
        range: e.range,
        "min-date": e.minDate,
        "max-date": e.maxDate
      }, {
        "dp-input": B(({ value: d }) => [
          x(Q, {
            placeholder: e.placeholder,
            value: d,
            icon: g(ye),
            variant: e.variant,
            size: e.size,
            color: e.color,
            error: !!e.error
          }, null, 8, ["placeholder", "value", "icon", "variant", "size", "color", "error"])
        ]),
        _: 1
      }, 8, ["modelValue", "format", "disabled", "enable-time-picker", "range", "min-date", "max-date"]),
      e.error ? (o(), s("p", ot, y(e.error), 1)) : $("", !0)
    ], 2));
  }
}, at = {
  __name: "Dropzone",
  props: {
    modelValue: { default: !1 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ h(["drop"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const t = l, a = S(e, "modelValue"), n = (i) => {
      a.value = !1, t("drop", i);
    };
    return (i, r) => (o(), s("div", {
      onDragover: r[0] || (r[0] = G((d) => a.value = !0, ["prevent"])),
      onDragleave: r[1] || (r[1] = (d) => a.value = !1),
      onDrop: G(n, ["prevent"])
    }, [
      z(i.$slots, "default", { isDragOver: a.value })
    ], 32));
  }
}, st = ["multiple", "accept"], re = {
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
    const t = e, a = l, n = D(null), i = () => {
      t.disabled || n.value.click();
    };
    return (r, d) => (o(), s("div", null, [
      c("input", {
        type: "file",
        ref_key: "fileInput",
        ref: n,
        onChange: d[0] || (d[0] = (u) => a("change", u)),
        multiple: e.multiple,
        accept: e.accept,
        hidden: ""
      }, null, 40, st),
      c("div", { onClick: i }, [
        z(r.$slots, "default")
      ])
    ]));
  }
}, rt = {
  key: 0,
  class: "font-medium mb-1"
}, it = {
  key: 0,
  class: "mb-2"
}, ut = { class: "font-medium" }, ct = {
  key: 0,
  class: "text-error text-sm mt-1"
}, dt = {
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
    const l = S(e, "modelValue"), t = (i) => l.value = Array.from(i), a = (i) => t(i.dataTransfer.files), n = (i) => t(i.target.files);
    return (i, r) => (o(), s("div", null, [
      e.label ? (o(), s("p", rt, y(e.label), 1)) : $("", !0),
      c("div", null, [
        x(re, {
          onChange: n,
          accept: "image/*"
        }, {
          default: B(() => [
            x(at, { onDrop: a }, {
              default: B(({ isDragOver: d }) => [
                c("div", {
                  class: f(["cursor-pointer duration-300 text-center border-2 border-dashed py-6 px-4 rounded-lg", {
                    "bg-secondary/30": d,
                    "text-secondary border-secondary": !e.error,
                    "text-error border-error": e.error
                  }])
                }, [
                  e.withIcon ? (o(), s("div", it, [
                    x(g(T), {
                      icon: g(ge),
                      size: "lg"
                    }, null, 8, ["icon"])
                  ])) : $("", !0),
                  c("p", ut, y(e.dropText), 1)
                ], 2)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e.error ? (o(), s("p", ct, y(e.error), 1)) : $("", !0)
      ])
    ]));
  }
}, mt = ["onClick", "onMouseover"], ft = { key: 1 }, vt = {
  key: 0,
  class: "text-xs text-secondary-text"
}, yt = {
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
    const t = e, a = l;
    S(e, "modelValue");
    const n = X(), i = D(-1), r = D("top-full"), d = D(null), u = (m) => a("select", m), b = () => {
      const m = t.container.getBoundingClientRect(), k = window.innerHeight || document.documentElement.clientHeight;
      r.value = m.bottom + 150 > k ? "bottom-full" : "top-full";
    }, p = () => {
      r.value = "top-full";
    }, v = async (m) => {
      i.value += m, i.value < 0 ? i.value = t.options.length - 1 : i.value >= t.options.length && (i.value = 0), await te();
      const C = d.value?.querySelectorAll("div > div")?.[i.value];
      C && C.scrollIntoView({ block: "nearest", behavior: "smooth" });
    };
    return q("ArrowDown", (m) => {
      t.open && t.options.length > 0 && (m.preventDefault(), v(1));
    }), q("ArrowUp", (m) => {
      t.open && t.options.length > 0 && (m.preventDefault(), v(-1));
    }), q("Enter", (m) => {
      t.open && t.options.length > 0 ? (m.preventDefault(), u(t.options[i.value])) : t.acceptsEmptySelection && (m.preventDefault(), u());
    }), O(() => t.open, () => {
      t.open || (i.value = -1);
    }), (m, k) => (o(), E(N, {
      name: r.value === "top-full" ? "slide-down" : "slide-up",
      onBeforeEnter: b,
      onAfterLeave: p
    }, {
      default: B(() => [
        e.open && e.options?.length > 0 ? (o(), s("div", {
          key: 0,
          ref_key: "dropdownContainer",
          ref: d,
          class: f([
            "w-full rounded-md bg-dropdown text-dropdown-text absolute overflow-auto max-h-64 flex flex-col cursor-pointer z-50",
            r.value
          ])
        }, [
          (o(!0), s(L, null, A(e.options, (C, j) => (o(), s("div", {
            key: e.options[e.trackBy],
            onClick: (F) => u(C),
            onMouseover: (F) => i.value = j,
            class: f(["text-md py-2 px-6 rounded-md text-left", { "bg-dropdown-select": i.value === j }])
          }, [
            g(n).option ? z(m.$slots, "option", {
              key: 0,
              option: C
            }, void 0, !0) : (o(), s("div", ft, [
              Z(y(C[e.optionLabel]) + " ", 1),
              C[e.optionDescription] ? (o(), s("div", vt, y(C[e.optionDescription]), 1)) : $("", !0)
            ]))
          ], 42, mt))), 128))
        ], 2)) : $("", !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}, ie = /* @__PURE__ */ U(yt, [["__scopeId", "data-v-2cf8e7b1"]]), Y = {
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
    return (a, n) => (o(), E(He, {
      styles: `${e.styles} ${t.value} flex justify-center items-center !px-0 !py-0`,
      href: e.href,
      type: e.type,
      color: e.color,
      "on-click": e.onClick,
      disabled: e.disabled,
      variant: e.variant
    }, {
      default: B(() => [
        x(g(T), {
          size: e.size,
          icon: e.icon
        }, null, 8, ["size", "icon"])
      ]),
      _: 1
    }, 8, ["styles", "href", "type", "color", "on-click", "disabled", "variant"]));
  }
}, gt = { class: "flex-grow" }, bt = { class: "text-md font-medium" }, Vl = {
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
    return P(() => setTimeout(() => t.value = !1, l.duration)), (a, n) => (o(), E(N, { name: "slide-fade" }, {
      default: B(() => [
        t.value ? (o(), s("div", {
          key: 0,
          class: f(`w-96 flex items-center gap-2 rounded-md p-2 my-2 bg-${e.color}/${e.opacity}`)
        }, [
          c("div", gt, [
            c("p", bt, y(e.content), 1)
          ]),
          x(Y, {
            icon: g(J),
            color: "base",
            variant: "subtle",
            "on-click": () => t.value = !1
          }, null, 8, ["icon", "on-click"])
        ], 2)) : $("", !0)
      ]),
      _: 1
    }));
  }
}, pt = { class: "flex items-center justify-center" }, ht = {
  key: 0,
  class: "text-center font-medium mt-2"
}, xt = {
  __name: "Loader",
  props: {
    label: String
  },
  setup(e) {
    return (l, t) => (o(), s("div", pt, [
      c("div", null, [
        t[0] || (t[0] = c("div", { class: "spinner" }, null, -1)),
        e.label ? (o(), s("p", ht, y(e.label), 1)) : $("", !0)
      ])
    ]));
  }
}, zl = /* @__PURE__ */ U(xt, [["__scopeId", "data-v-d8288a84"]]), $t = { class: "flex items-center justify-center" }, St = { key: 0 }, kt = ["src", "alt"], wt = { key: 1 }, Vt = ["src"], zt = { key: 2 }, Ct = ["src"], Mt = {
  key: 3,
  class: "text-center"
}, Bt = {
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
    const l = S(e, "selectedIdx"), t = ae(), a = () => {
      const n = document.querySelector("swiper-container").swiper;
      l.value = n.activeIndex;
    };
    return O(l, () => {
      const n = document.querySelector("swiper-container")?.swiper;
      l.value !== n.activeIndex && n.slideTo(l.value);
    }), (n, i) => {
      const r = _("swiper-slide"), d = _("swiper-container");
      return o(), E(d, {
        "slides-per-view": 1,
        "centered-slides": !0,
        navigation: !g(t),
        onSwiperslidechange: a
      }, {
        default: B(() => [
          (o(!0), s(L, null, A(e.files, (u) => (o(), E(r, null, {
            default: B(() => [
              c("div", $t, [
                u.type === "image" ? (o(), s("div", St, [
                  c("img", {
                    src: u.preview,
                    alt: u.name,
                    class: f(e.maxMediaHeight)
                  }, null, 10, kt)
                ])) : u.type === "video" ? (o(), s("div", wt, [
                  c("video", {
                    src: u.preview,
                    controls: "",
                    class: f(e.maxMediaHeight)
                  }, null, 10, Vt)
                ])) : u.type === "audio" ? (o(), s("div", zt, [
                  c("audio", {
                    src: u.preview,
                    controls: ""
                  }, null, 8, Ct)
                ])) : (o(), s("div", Mt, [
                  x(g(T), {
                    icon: g(ne),
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
}, Dt = {
  key: 0,
  class: "font-medium mb-1"
}, Tt = {
  key: 1,
  class: "mb-2"
}, Ft = {
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
    const l = S(e, "modelValue"), t = D(0), { formatFiles: a } = se(), n = (r) => l.value.push(...r.target.files), i = M(() => a(l.value));
    return (r, d) => (o(), s("div", null, [
      e.label ? (o(), s("label", Dt, y(e.label), 1)) : $("", !0),
      l.value.length > 0 ? (o(), s("div", Tt, [
        x(Bt, {
          "selected-idx": t.value,
          "onUpdate:selectedIdx": d[0] || (d[0] = (u) => t.value = u),
          files: i.value
        }, null, 8, ["selected-idx", "files"]),
        x(Ae, {
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
                  icon: g(be),
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
        e.error ? (o(), s("p", Ft, y(e.error), 1)) : $("", !0)
      ])) : (o(), E(dt, {
        key: 2,
        "with-icon": "",
        "drop-text": e.placeholder,
        modelValue: l.value,
        "onUpdate:modelValue": d[3] || (d[3] = (u) => l.value = u),
        error: e.error
      }, null, 8, ["drop-text", "modelValue", "error"]))
    ]));
  }
}, It = {
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
    const t = e, a = l, n = S(e, "modelValue"), i = S(e, "searchQuery"), r = S(e, "input"), d = X(), u = D(!1), b = D(null), p = M(() => t.acceptsDuplicates ? t.options : t.options.filter((w) => !n.value.includes(t.formatResult(w)))), v = (w) => {
      n.value.push(t.formatResult(w)), i.value = "", a("select", w);
    }, m = (w) => {
      n.value = n.value.filter((V, I) => I !== w);
    }, k = () => {
      u.value = !0;
    }, C = () => {
      u.value = !1;
    }, j = () => {
      t.searchable || (u.value ? C() : k());
    }, F = (w) => {
      b.value.contains(w.target) || C();
    };
    return P(() => {
      document.addEventListener("mousedown", F);
    }), le(() => {
      document.removeEventListener("mousedown", F);
    }), O(i, () => {
      t.searchable && i.value.length > 0 && k();
    }), (w, V) => (o(), s("div", {
      class: f([e.styles])
    }, [
      c("div", {
        class: "relative",
        ref_key: "dropdownContainer",
        ref: b
      }, [
        c("div", {
          onClick: V[4] || (V[4] = (I) => j()),
          class: f({ "cursor-pointer": !e.searchable })
        }, [
          x(Q, {
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
            onFocus: V[2] || (V[2] = (I) => a("focus", I)),
            onBlur: V[3] || (V[3] = (I) => a("blur", I))
          }, {
            "left-section": B(() => [
              (o(!0), s(L, null, A(n.value, (I, ue) => (o(), s("div", {
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
        }, K({ _: 2 }, [
          g(d).option ? {
            name: "option",
            fn: B(({ option: I }) => [
              z(w.$slots, "option", { option: I })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      e.error && typeof e.error != "boolean" ? (o(), s("p", It, y(e.error), 1)) : $("", !0)
    ], 2));
  }
}, Et = { class: "font-medium" }, jt = {
  key: 0,
  class: "text-text-secondary flex justify-center items-center w-10 rounded-l-md"
}, Lt = ["placeholder", "min", "max", "disabled"], At = {
  key: 0,
  class: "text-error text-sm"
}, Ot = {
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
    const l = e, t = S(e, "modelValue"), a = M(
      () => l.variant === "filled" ? `bg-${l.color}` : "bg-transparent border border-secondary-text"
    ), n = M(() => l.modelValue > l.max ? `Value must be ${l.max} or less.` : l.modelValue < l.min ? `Value must be ${l.min} or more.` : !1);
    return (i, r) => (o(), s("div", null, [
      c("h4", Et, y(e.label), 1),
      c("div", {
        class: f(["rounded-lg flex h-10 items-center", a.value, e.styles, { error: n.value || e.error, "px-2": !e.icon }])
      }, [
        e.icon ? (o(), s("div", jt, [
          x(g(T), {
            icon: e.icon,
            size: "1x",
            class: "text-secondary-text"
          }, null, 8, ["icon"])
        ])) : $("", !0),
        R(c("input", {
          "onUpdate:modelValue": r[0] || (r[0] = (d) => t.value = d),
          placeholder: e.placeholder,
          type: "number",
          min: e.min,
          max: e.max,
          disabled: e.disabled,
          class: "flex-grow w-full py-2 px-0 border-none outline-none rounded-lg placeholder:text-secondary-text bg-transparent appearance-none"
        }, null, 8, Lt), [
          [me, t.value]
        ])
      ], 2),
      n.value ? (o(), s("p", At, y(n.value), 1)) : e.error && typeof e.error == "string" ? (o(), s("p", Ot, y(e.error), 1)) : $("", !0)
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
    const l = e, t = M(() => l.limit ? `${l.text.substring(0, l.limit)}${l.text.length > l.limit ? "..." : ""}` : l.text);
    return (a, n) => (o(), s("p", {
      class: f([e.styles, { "whitespace-pre-wrap": e.includeWhitespace }])
    }, y(t.value), 3));
  }
}, Ut = ["name", "value", "checked"], Nt = { class: "rounded-full border-2 border-secondary flex items-center justify-center h-4 w-4" }, Tl = {
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
    const t = e, a = l, n = S(e, "modelValue"), i = D(!1), r = M(() => t.modelValue === t.value), d = (u) => {
      n.value = t.value, a("select", u);
    };
    return (u, b) => (o(), s("label", {
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
      }, null, 40, Ut),
      c("span", Nt, [
        c("span", {
          class: f(["rounded-full h-2 w-2", { "bg-secondary": i.value || r.value }])
        }, null, 2)
      ]),
      c("span", null, y(e.label), 1)
    ], 32));
  }
}, Pt = {
  key: 0,
  class: "font-medium"
}, Rt = {
  key: 1,
  class: "text-error text-sm mt-1"
}, Fl = {
  __name: "RichTextEditor",
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
    const l = S(e, "modelValue");
    return (t, a) => (o(), s("div", null, [
      e.label ? (o(), s("label", Pt, y(e.label), 1)) : $("", !0),
      x(g(Se), {
        theme: "snow",
        "content-type": "html",
        placeholder: e.placeholder,
        content: l.value,
        "onUpdate:content": a[0] || (a[0] = (n) => l.value = n)
      }, null, 8, ["placeholder", "content"]),
      e.error ? (o(), s("p", Rt, y(e.error), 1)) : $("", !0)
    ]));
  }
}, Ht = { class: "flex items-center pr-1" }, Qt = { class: "flex items-center pr-2 text-secondary-text" }, qt = {
  key: 0,
  class: "text-error text-sm"
}, Il = {
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
    const t = e, a = l, n = S(e, "modelValue"), i = S(e, "searchQuery"), r = S(e, "input"), d = X(), u = D(!1), b = D(null), p = (F) => {
      n.value = t.formatResult(F), t.optionLabel && (i.value = F[t.optionLabel]), a("select", F), te(k);
    }, v = (F) => {
      F.stopPropagation(), n.value = null, i.value = "";
    }, m = () => {
      u.value = !0;
    }, k = () => {
      u.value = !1;
    }, C = () => {
      t.searchable || (u.value ? k() : m());
    }, j = (F) => {
      b.value.contains(F.target) || k();
    };
    return P(() => {
      document.addEventListener("mousedown", j);
    }), le(() => {
      document.removeEventListener("mousedown", j);
    }), O(i, () => {
      t.searchable && i.value.length > 0 ? m() : t.searchable && k();
    }), (F, w) => (o(), s("div", {
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
          x(Q, {
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
            onFocus: w[2] || (w[2] = (V) => a("focus", V)),
            onBlur: w[3] || (w[3] = (V) => a("blur", V))
          }, K({ _: 2 }, [
            e.lockOnSelect && e.searchable && n.value ? {
              name: "right-section",
              fn: B(() => [
                c("div", Ht, [
                  x(Y, {
                    icon: g(J),
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
                c("div", Qt, [
                  x(g(T), {
                    icon: g(pe),
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
        }, K({ _: 2 }, [
          g(d).option ? {
            name: "option",
            fn: B(({ option: V }) => [
              z(F.$slots, "option", { option: V })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["container", "options", "option-label", "track-by", "open", "accepts-empty-selection"])
      ], 512),
      e.error && typeof e.error != "boolean" ? (o(), s("p", qt, y(e.error), 1)) : $("", !0)
    ], 2));
  }
}, Wt = {
  key: 0,
  class: "w-full"
}, Gt = { class: "flex justify-between items-center gap-2 px-4" }, Kt = ["onClick"], Zt = { class: "flex justify-between items-center mt-1 px-3" }, Xt = ["onClick"], Jt = ["onClick"], El = {
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
    const l = e, t = S(e, "modelValue"), a = M(() => l.steps.findIndex((u) => u.value === t.value)), n = M(() => l.steps.map((u, b) => b < a.value ? { ...u, status: "completed" } : b === a.value ? { ...u, status: "in-progress" } : { ...u, status: "uncompleted" })), i = (u) => u.status === "uncompleted" || u.status !== "in-progress" && l.variant === "minimalist" ? "text-secondary-text bg-card-accent" : `text-${l.color} bg-${l.color}${l.variant === "classic" ? "/30" : ""}`, r = (u) => l.canMoveForwards && u > a.value || l.canMoveBackwards && u < a.value ? "cursor-pointer" : "cursor-default", d = (u, b) => {
      (l.canMoveForwards && b > a.value || l.canMoveBackwards && b < a.value) && (t.value = u.value);
    };
    return (u, b) => e.variant === "classic" ? (o(), s("div", Wt, [
      c("div", Gt, [
        (o(!0), s(L, null, A(n.value, (p, v) => (o(), s(L, {
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
            x(g(T), {
              icon: p.status === "completed" && !e.canMoveBackwards ? g(oe) : p.icon
            }, null, 8, ["icon"])
          ], 10, Kt),
          v < e.steps.length - 1 ? (o(), s("div", {
            key: 0,
            class: f(`flex-grow bg-${n.value[v + 1].status === "uncompleted" ? "secondary-text" : e.color} h-0.5`)
          }, null, 2)) : $("", !0)
        ], 64))), 128))
      ]),
      c("div", Zt, [
        (o(!0), s(L, null, A(n.value, (p, v) => (o(), s("p", {
          key: "label-" + p.value,
          onClick: (m) => d(p, v),
          class: f([
            p.status === "uncompleted" ? "text-secondary-text" : `text-${e.color}`,
            "text-xs font-medium text-center",
            r(v)
          ])
        }, y(p.label), 11, Xt))), 128))
      ])
    ])) : e.variant === "minimalist" ? (o(), s("div", {
      key: 1,
      class: f(`grid grid-cols-${n.value.length} gap-1`)
    }, [
      (o(!0), s(L, null, A(n.value, (p, v) => (o(), s("div", {
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
        }, y(p.label), 3)
      ], 8, Jt))), 128))
    ], 2)) : $("", !0);
  }
}, Yt = {};
function _t(e, l) {
  return o(), s("div", {
    onClick: G(() => {
    }, ["stop"])
  }, [
    z(e.$slots, "default")
  ]);
}
const jl = /* @__PURE__ */ U(Yt, [["render", _t]]), el = ["onClick"], Ll = {
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
    return (t, a) => (o(), s("div", null, [
      c("div", {
        class: f(["tab-container", { "justify-between": e.stretch }])
      }, [
        (o(!0), s(L, null, A(e.tabs, (n) => (o(), s("button", {
          key: n.name,
          class: f(["cursor-pointer", [{
            "text-error": n.error,
            "underline-offset-8 underline font-medium": n.name === l.value
          }, `text-${e.size}`]]),
          onClick: (i) => l.value = n.name
        }, y(n.label), 11, el))), 128))
      ], 2),
      (o(!0), s(L, null, A(e.tabs, (n) => R((o(), s("div", {
        key: n.name
      }, [
        z(t.$slots, `tab-${n.name}`)
      ])), [
        [W, n.name === l.value]
      ])), 128))
    ]));
  }
}, Al = {
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
    return (l, t) => (o(), s("div", {
      class: f(`py-1 px-4 rounded-${e.rounded} duration-100 text-center text-black text-${e.size} bg-${e.color}`)
    }, [
      z(l.$slots, "default")
    ], 2));
  }
}, tl = { class: "flex items-center justify-between" }, ll = ["for"], nl = {
  key: 0,
  class: "text-xs text-secondary-text mr-1"
}, ol = ["name", "placeholder", "value", "disabled", "maxlength", "rows"], al = {
  key: 0,
  class: "text-error text-sm"
}, sl = {
  key: 1,
  class: "text-success text-sm"
}, Ol = {
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
    const t = e, a = l, n = S(e, "modelValue"), i = S(e, "input"), r = D(t.modelValue), d = D(!1), u = M(
      () => t.variant === "filled" ? `bg-${t.color}` : "bg-transparent ring-1 ring-secondary-text"
    ), b = (m) => {
      d.value = !0, a("focus", m);
    }, p = (m) => {
      d.value = !1, a("blur", m);
    }, v = (m) => {
      const k = m.target;
      r.value = k.value, n.value = k.value, a("input", m);
    };
    return O(
      () => t.modelValue,
      (m) => {
        r.value = m;
      }
    ), (m, k) => (o(), s("div", null, [
      c("div", tl, [
        c("label", {
          for: e.name,
          class: "font-medium"
        }, y(e.label), 9, ll),
        e.maxlength ? (o(), s("p", nl, y(n.value?.length ?? 0) + " / " + y(e.maxlength), 1)) : $("", !0)
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
          onKeydown: k[0] || (k[0] = (C) => a("keyPress", C)),
          maxlength: e.maxlength,
          rows: e.rows,
          ref_key: "inputElement",
          ref: i
        }, null, 42, ol)
      ], 2),
      e.error && typeof e.error != "boolean" ? (o(), s("p", al, y(e.error), 1)) : e.success && typeof e.error != "boolean" ? (o(), s("p", sl, y(e.success), 1)) : $("", !0)
    ]));
  }
}, Ul = {
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
    const t = e, a = l, n = S(e, "modelValue"), i = () => {
      n.value = !n.value, a("toggle", n.value);
    }, r = M(
      () => n.value ? `bg-${t.activeColor}` : "bg-gray-300 dark:bg-gray-600"
    ), d = M(
      () => n.value ? "translate-x-6" : "translate-x-0"
    );
    return P(() => {
      n.value = n.value ?? t.value;
    }), (u, b) => (o(), s("div", {
      onClick: i,
      class: f([r.value, "cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300"])
    }, [
      c("div", {
        class: f([d.value, "bg-white dark:bg-gray-200 text-black text-sm flex justify-center items-center w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"])
      }, [
        e.icon ? (o(), E(g(T), {
          key: 0,
          icon: e.icon
        }, null, 8, ["icon"])) : $("", !0)
      ], 2)
    ], 2));
  }
}, rl = { class: "rounded-md bg-dropdown/80 text-dropdown-text p-1 text-xs text-nowrap" }, il = {
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
    const l = e, t = D(!1), a = M(() => {
      let n;
      switch (l.position) {
        case "right":
          n = "left-full pl-4";
          break;
      }
      return n;
    });
    return (n, i) => (o(), s("div", {
      class: "relative flex items-center",
      onMouseenter: i[0] || (i[0] = (r) => t.value = !0),
      onMouseleave: i[1] || (i[1] = (r) => t.value = !1)
    }, [
      z(n.$slots, "default", {}, void 0, !0),
      x(N, { name: "fade" }, {
        default: B(() => [
          t.value ? (o(), s("div", {
            key: 0,
            class: f([a.value, "absolute delay-1000 z-50"])
          }, [
            c("div", rl, [
              z(n.$slots, "tooltip-content", {}, () => [
                Z(y(e.text), 1)
              ], !0)
            ])
          ], 2)) : $("", !0)
        ]),
        _: 3
      })
    ], 32));
  }
}, Nl = /* @__PURE__ */ U(il, [["__scopeId", "data-v-27f2bf31"]]);
export {
  bl as Accordion,
  Ae as AttachmentList,
  pl as Avatar,
  hl as AvatarGroup,
  xl as Badge,
  He as Button,
  ke as Card,
  $l as Checkbox,
  Sl as ClickableTag,
  kl as CurrencyInput,
  wl as DatePicker,
  dt as DragAndDropFiles,
  ie as DropdownOptions,
  at as Dropzone,
  re as FileButton,
  Vl as FlashMessage,
  Y as IconButton,
  zl as Loader,
  Bt as MediaCarousel,
  Cl as MediaInput,
  Ml as Multiselect,
  Bl as NumberInput,
  Dl as Paragraph,
  Tl as Radio,
  Fl as RichTextEditor,
  Il as Select,
  El as Stepper,
  jl as StopPropagation,
  Ll as Tabs,
  Al as Tag,
  Ol as Textarea,
  Q as Textbox,
  Ul as Toggle,
  Nl as Tooltip,
  se as useFiles,
  ae as useIsHandheld
};
