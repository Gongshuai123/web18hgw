<template>
  <div>
    <button @click="show = true" :class="[type]" :title=[title]>{{title}}</button>
    <transition :name="silde">
      <p v-if="show" :class='cls'>
        <slot></slot>
      </p>
    </transition>
      <p v-if='show' class="mark" @click="show = false"></p>
  </div>
</template>

<script>

export default {
  name:'darwer',
  props: {
    type:{
      type:String,
      default:'fang'
    },
    title:{
      type:String,
      default:'点击弹出'
    },
    silde:{
      type:String,
      default:'lft'
    }
  },
  data() {
    return {
      show: false,
      cls:'add1'
    };
  },
  created () {
    this.act()
    console.log(this.silde)
  },
  methods: {
    act(){
      if(this.silde=='lft'){
        this.cls='add'
      }else{
        this.cls='add1'
      }
    }
  }
}
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
.add1{
    background: #fff;
    position: fixed;
    height: 100vh;
    width: 30%;
    top:0;
    right: 0;
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
.lft-enter-active {
  transition: all 0.3s ease;
}
.lft-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.lft-enter, .lft-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-30px);
  opacity: 0;
}
.rit-enter-active {
  transition: all 0.3s ease;
}
.rit-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.rit-enter, .rit-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
}
</style>