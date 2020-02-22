const defaultRatio = "56.25";

export const aspectRatio = {
  bind(el, binding) {
    // el might not be present for server-side rendering.
    if (el && binding.value) {
      let elRatio = (binding.value.h / binding.value.w) * 100;
      el.style.paddingTop = elRatio + "%";
    } else if(el){
      el.style.paddingTop = defaultRatio + "%";
    }
  }
};
