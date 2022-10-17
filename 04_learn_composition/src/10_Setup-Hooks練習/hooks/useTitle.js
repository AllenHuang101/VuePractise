import { ref, watch } from 'vue';

export default function useTitle(titleValue) {
  // document.title = title;

  // 定義ref的引用數據
  const title = ref(titleValue);

  // 監聽title的改變
  watch(
    title,
    (newValue) => {
      document.title = newValue;
    },
    {
      immediate: true,
    }
  );

  // 返回ref值
  return title;
}
