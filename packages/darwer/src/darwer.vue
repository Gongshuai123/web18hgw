<template>
  <div>
    <button @click="show = true" :class="[type]">{{title}}</button>
    <transition name="slide-fade">
      <p v-if="show" class='add'>
        <slot></slot>
      </p>
    </transition>
      <p v-if='show' class="mark" @click="show = false"></p>
  </div>
</template>

<script>

export default {
  props: {
    type:{
      type:String,
      default:'fang'
    }
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
  }
};
</script>

<style lang='scss' scoped>
button:focus {
    outline: 0!important;
}
.fang{width: 90px;height: 40px;background: lightblue;color: #fff;border: none;line-height: 40px;border-radius: 3px;}
.fang:active{background: #409eff;}
.fang:hover{opacity: .8;}
.yuan{width: 90px;height: 40px;background: lightblue;color: #fff;border: none;line-height: 40px;border-radius: 20px;}
.yuan:active{background: #409eff;}
.yuan:hover{opacity: .8;}
.add{
    background: #fff;
    position: fixed;
    height: 100vh;
    width: 30%;
    top:0;
    left: 0;
    z-index: 10;
}
.mark{
  background: #333;
  opacity: .5;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-30px);
  opacity: 0;
}
</style>