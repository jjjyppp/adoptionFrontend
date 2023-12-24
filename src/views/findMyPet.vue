<template>
  <div class="carousel-container">
    <div class="carousel">
      <div v-for="(image, index) in images" :key="index" class="carousel-item">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: 'src/views/assets/img/cat1.jpg', alt: 'Image 1' },
        { src: 'src/views/assets/img/indir.jpg', alt: 'Image 2' },
        { src: 'src/views/assets/img/indir.jpg', alt: 'Image 3' },
        { src: 'src/views/assets/img/cat1.jpg', alt: 'Image 3' },
        // 添加更多图片...
      ],
      translateX: 0,
      currentIndex: 0,
    };
  },
  mounted() {
    // 开启定时器，实现图片循环播放
    setInterval(() => {
      let image = this.images[0]
      this.images.splice(0, 1)
      this.images.push(image)
    }, 3000); // 间隔时间，可根据需要调整
  },
  methods: {

  },
};
</script>

<style scoped>
.carousel-container {
  overflow: hidden;
  width: 100%; /* 跑马灯容器宽度，可根据需要调整 */
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out; /* 添加过渡效果 */
}

.carousel-item {
  flex: 0 0 33.33%; /* 每张图片占容器的 1/3，即一次展现三张图片 */
}

img {
  width: 100%;
  height: auto;
}
</style>