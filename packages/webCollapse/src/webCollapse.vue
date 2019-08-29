<template>
    <div class="webcollapse">
        <slot></slot>
        
    </div>
</template>

<script>
// import import webCollapseItem from '../webCollapse-Item/webCollapse-Item.vue'
import webCollapseItem from '../webCollapse-Item/src/webCollapse-Item.vue'
export default {
    name : 'webCollapse',
    components : {webCollapseItem}
}
</script>


<style lang="scss" scopedS>


</style>