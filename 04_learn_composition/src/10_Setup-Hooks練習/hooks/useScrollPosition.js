import { reactive } from 'vue';

export default function useScrollPosition() {
  // 1. 使用reative紀錄位置
  const scrollPosition = reactive({
    x: 0,
    y: 0,
  });

  // 2.監聽滾動
  document.addEventListener('scroll', () => {
    scrollPosition.x = window.scrollX;
    scrollPosition.y = window.scrollY;
  });

  return {
    scrollPosition,
  };
}
