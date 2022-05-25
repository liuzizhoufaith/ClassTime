<!--该组件负责输入课程名,选择课程时段数量-->
<template>
<div class="top">
    <span class="s1">请输入课程名:</span>
    <input type="text" v-model="className" @keyup.enter="submitName" placeholder="按下回车确定">
    <div class="d1">
        本课程有多少种不同时段:
        <select class="se1" v-model="$store.state.numbers1" @change="changeClassNumbers($event)">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
            <option :value="4">4</option>
            <option :value="5">5</option>
            <option :value="6">6</option>
            <option :value="7">7</option>
            <option :value="8">8</option>
            <option :value="9">9</option>
            <option :value="10">10</option>
        </select>
        本课程每周有多少学时:
        <select class="se1" v-model="$store.state.numbers2">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
    </div>
</div>
</template>

<script>
export default {
    name: "InputInformation",
    data(){
        return{
            className:'',
            time:'',
        }
    },
    methods:{
        submitName(){
            this.$store.commit('CN',this.className)
        },
        changeClassNumbers(e){
            for(let i=0;i<e.target.value;i++) this.$store.state.classes[i]=[]
        }
    }
}
</script>

<style scoped lang="less">
.top{
    display: flex;
    margin-left: 100px;
    margin-top: 20px;
    .s1{
        line-height: 33px;
        margin-right: 10px;
    }
    //background-color: red;
    .d1{
        margin-left: 100px;
        line-height: 33px;
        .se1{
            margin-left: 10px;
            margin-right: 50px;
        }
    }
}
</style>
