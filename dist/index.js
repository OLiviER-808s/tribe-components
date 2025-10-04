import { computed as l, createElementBlock as a, openBlock as d, normalizeClass as u, renderSlot as i } from "vue";
const g = {
  __name: "ClickableTag",
  props: {
    selected: Boolean,
    onSelect: Function,
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
  },
  setup(t) {
    const e = t, r = l(() => `${e.styles} tag rounded-${e.rounded} text-${e.size} text-${e.color} border-${e.color} hover:bg-${e.color}/10`), n = l(() => `${e.styles} tag rounded-${e.rounded} text-${e.size} bg-${e.color} border-${e.color} text-black`);
    return (s, o) => (d(), a("button", {
      onClick: o[0] || (o[0] = (...c) => t.onSelect && t.onSelect(...c)),
      class: u(t.selected ? n.value : r.value)
    }, [
      i(s.$slots, "default")
    ], 2));
  }
};
export {
  g as ClickableTag
};
