<style lang="scss">
.my-clock {
  .clock {
    position: absolute;
    opacity: 1;
  }
  .centre {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
  }
  .expand {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
  }
  .anchor {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
  }
  .element {
    position: absolute;
    top: 0;
    left: 0;
  }
  .round {
    border-radius: 296px;
  }
  .circle-1 {
    background: white;
    width: 12px;
    height: 12px;
  }
  .circle-2 {
    background: #fa9f22;
    width: 8px;
    height: 8px;
  }
  .circle-3 {
    background: black;
    width: 4px;
    height: 4px;
  }
  .second {
    transform: rotate(180deg);
  }
  .minute {
    transform: rotate(54deg);
  }
  .second-hand {
    width: 2px;
    height: 164px;
    background: #fa9f22;
    transform: translate(-50%, -100%) translateY(24px);
  }
  .hour {
    transform: rotate(304.5deg);
  }
  .thin-hand {
    width: 4px;
    height: 50px;
    background: white;
    transform: translate(-50%, -100%);
  }
  .fat-hand {
    width: 10px;
    height: 57px;
    border-radius: 10px;
    background: white;
    transform: translate(-50%, -100%) translateY(-18px);
  }
  .minute-hand {
    height: 112px;
  }
  .hour-text {
    position: absolute;
    font: 40px Hei, Helvetica, Arial, sans-serif;
    color: white;
    transform: translate(-50%, -50%);
  }
  .hour-10 {
    padding-left: 0.4ex;
  }
  .hour-11 {
    padding-left: 0.25ex;
  }
  .minute-text {
    position: absolute;
    font: 12px Avenir Next, Helvetica, Arial, sans-serif;
    color: white;
    transform: translate(-50%, -50%);
  }
  .minute-line {
    background: white;
    width: 1px;
    height: 9px;
    transform: translate(-50%, -100%) translateY(-131px);
    opacity: 0.34;
  }
}
</style>
<template>
  <div class="my-clock">
    <div class="fill">
      <div class="clock" id="utility-clock">
        <div class="centre">
          <div class="dynamic"></div>
          <div class="expand round circle-1"></div>
          <div class="anchor hour">
            <div class="element thin-hand"></div>
            <div class="element fat-hand"></div>
          </div>
          <div class="anchor minute">
            <div class="element thin-hand"></div>
            <div class="element fat-hand minute-hand"></div>
          </div>
          <div class="anchor second">
            <div class="element second-hand"></div>
          </div>
          <div class="expand round circle-2"></div>
          <div class="expand round circle-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { utilityClock, autoResize } from '../plugins/js/clockScript'

export default {
  name: 'digital-clock',
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    init() {
      const clock = document.querySelector('#utility-clock')
      utilityClock(clock)
      // 判断父节点的类名是否为fill contains判断指定的类名是否存在
      if (clock.parentNode.classList.contains('fill')) {
        autoResize(clock, 1000)
      }
    }
  },
  mounted() {
    this.init()
  }
}
</script>
