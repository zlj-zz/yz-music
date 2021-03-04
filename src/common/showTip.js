import { ref } from "vue";

export default function() {
  const ifShowTip = ref(false);
  const tip = ref("");
  const tipType = ref(0);
  const tipTimer = ref();
  function showTip(t, time, type) {
    tip.value = t;
    tipType.value = type;
    ifShowTip.value = true;
    if (tipTimer.value) clearTimeout(tipTimer.value);
    tipTimer.value = setTimeout(() => {
      ifShowTip.value = false;
    }, time);
  }
  return { ifShowTip, tip, tipType, showTip };
}
