    
    <template>
  <div>
    <div @click="pushMe()" class="web-item">
      {{title}}
      <transition>
        <template v-if="activeNames.indexOf(name) != -1">
          <div>
            <slot></slot>
          </div>
        </template>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "webCollapseItem",
  props: {
    title: {
      type: String
    },
    name: {
      type: [String, Number]
    },
    activeNames: {
      type: [String, Array]
    }
  },
  data() {
    return {
      newActiveNames: this.activeNames
    };
  },
  methods: {
    pushMe() {
      if (
        this.newActiveNames.indexOf(this.name) == -1 &&
        Object.prototype.toString.call(this.newActiveNames) == "[object Array]"
      ) {
        this.newActiveNames.push(this.name),
          this.$emit("bb", this.newActiveNames);
      } else if (
        this.newActiveNames.indexOf(this.name) != -1 &&
        Object.prototype.toString.call(this.newActiveNames) == "[object Array]"
      ) {
        let a = this.newActiveNames.indexOf(this.name);
        this.newActiveNames.splice(a, 1);
        this.$emit("bb", this.newActiveNames);
      }
      if (
        Object.prototype.toString.call(this.newActiveNames) ==
          "[object String]" &&
        this.newActiveNames != this.name
      ) {
        console.log("该拉开");
        this.newActiveNames = this.name.toString();
        this.$emit("bb", this.newActiveNames);
      } else if (
        Object.prototype.toString.call(this.newActiveNames) ==
          "[object String]" &&
        this.newActiveNames == this.name
      ) {
        console.log("该收起来");
        this.newActiveNames = "";
        this.$emit("bb", this.newActiveNames);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.web-item {
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  position: relative;
}
.v-enter-active {
  transition: all 0.3s;
}
.v-leave-active {
  transition: all 0.1s;
}
.v-enter  /* 进入的开始状态(从什么样式开始进入) */ {
  transform: translateY(-10px);
  opacity: 0;
}
.v-enter-to {
  /*进入到什么样式(进入的结束样式)*/
  transform: translateX(0);
}

</style>

