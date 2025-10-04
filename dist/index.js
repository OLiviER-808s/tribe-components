import { computed as r, createElementBlock as d, openBlock as a, normalizeClass as u, renderSlot as i } from "vue";
const p = {
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
    const e = t, l = r(() => `${e.styles} py-1 px-3 duration-100 text-center border-2 rounded-${e.rounded} text-${e.size} text-${e.color} border-${e.color} hover:bg-${e.color}/10`), n = r(() => `${e.styles} py-1 px-3 duration-100 text-center border-2 rounded-${e.rounded} text-${e.size} bg-${e.color} border-${e.color} text-black`);
    return (s, o) => (a(), d("button", {
      onClick: o[0] || (o[0] = (...c) => t.onSelect && t.onSelect(...c)),
      class: u(t.selected ? n.value : l.value)
    }, [
      i(s.$slots, "default")
    ], 2));
  }
};
export {
  p as ClickableTag
};
