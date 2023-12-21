<template>
  <div class="ad-container">
    <div class="ad-scroll" ref="adScroll">
      <div v-for="ad in extendedAds" :key="ad.id" class="ad-item">
        <img :src="ad.imageUrl" alt="Ad Image">
        <p>{{ ad.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ads: [
        { id: 1, imageUrl: "src/views/assets/img/cat1.jpg", content: "广告1" },
        { id: 2, imageUrl: "src/views/assets/img/cat1.jpg", content: "广告2" },
        // 其他广告项
      ],
      scrollSpeed: 1, // 滚动速度，可以根据需要调整
      intervalId: null,
    };
  },
  computed: {
    extendedAds() {
      // 将最后一个广告项复制并添加到列表的开头
      const lastAd = this.ads[this.ads.length - 1];
      return [...this.ads, lastAd];
    },
  },
  mounted() {
    this.startAutoScroll();
  },
  beforeDestroy() {
    this.stopAutoScroll();
  },
  methods: {
    startAutoScroll() {
      this.intervalId = setInterval(() => {
        this.scrollAds();
      }, 20); // 调整滚动间隔，可以根据需要调整
    },
    stopAutoScroll() {
      clearInterval(this.intervalId);
    },
    scrollAds() {
      const adScroll = this.$refs.adScroll;
      adScroll.scrollLeft += this.scrollSpeed;

      if (adScroll.scrollLeft >= adScroll.scrollWidth - adScroll.clientWidth) {
        adScroll.scrollLeft = 0;
      }
    },
  },
};
</script>

<style>
.ad-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 200px; /* 适当设置广告项的高度 */
}

.ad-scroll {
  display: flex;
  white-space: nowrap; /* 水平不换行 */
  animation: scrollAnimation linear infinite;
}

.ad-item {
  box-sizing: border-box;
  width: 200px; /* 适当设置广告项的宽度 */
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

.ad-item img {
  max-width: 100%;
  max-height: 80%;
  margin-bottom: 8px;
}

@keyframes scrollAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
