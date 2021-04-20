<template>
  <div class="better-scroll" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      finishPullingUp() {
        this.scroll.finishPullUp()
      }
    },
    mounted() {
      // 1. create instance of BetterScroll
      this.scroll = new BetterScroll(this.$refs.wrapper, {
        observeDOM: true,
        observeImage: true,
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      // 2. create position listener
      if (this.probeType ===2 || this.probeType ===3){
        this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
        })
      }
      // 3. pull up loading listener
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
        })
      }
    }
  }
</script>

<style scoped>

</style>