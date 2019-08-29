<template>
    <div :class="type">
		<span v-if="'scroll'==type">up</span>	
        <span v-if="'wrap'==type" class="iconfont iconxiangshang"></span>
	</div>
</template>
<script>
export default {
    name:"taurusf",
    props:{
        type:{
            type:String,
            default:"scroll"
        }
    },
    data() {
        return {
            tp:this.type
        }
    },
    watch:{     
        childMsg(){    
            this.tp =this.type     
        }    
    },
    mounted () {  
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
           handleScroll: function(){
		var st =document.documentElement.scrollTop
		if(st >= 200){
		document.querySelector('.'+this.tp).style.display="block"
			
		}else{
			document.querySelector('.'+this.tp).style.display="none"
		}
			document.querySelector('.'+this.tp).onclick = function(){
		document.documentElement.scrollTop=0
		}
		
	}
    },
}
</script>
<style lang="scss" scoped>
    .scroll{
        height: 40px;
        width: 40px;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
        position: fixed;
        right: 40px;
        bottom: 40px;
        display: none;
    }
    .wrap{
        height: 40px;
        width: 40px;
        border: 1px solid rgba(204,204,204, .3) ;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        border-radius:50% ;
        text-align: center;
        line-height: 40px;
        position: fixed;
        right: 40px;
        bottom: 40px;
        display: none;
    }
    span{
        color: rgba(64,158,255,1) ;
    }
    .wrap:hover{
        background:rgba(64,158,255, .08) ;
        border: 1px solid rgba(64,158,255, .08) ;
    }
</style>