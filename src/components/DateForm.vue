<!--该组件负责输入课程的所有时段-->
<template>
<div class="d1">
<ul>

    <li v-for="(p,index1) in $store.getters.periodNumbers" :key="index1" class="l1">
        时段种类{{index1+1}}:
        <select
            v-for="(n,index2) in $store.getters.periodNumbers[0]"
            :key="index2"
            class="s1"
            @change="changeClass($event,index1,(index1+1)*index2)"
        >
            <option :value="1">周一12节</option>
            <option :value="2">周一34节</option>
            <option :value="3">周一67节</option>
            <option :value="4">周一89节</option>
            <option :value="5">周一10-12节</option>
            <option :value="6">周二12节</option>
            <option :value="7">周二34节</option>
            <option :value="8">周二67节</option>
            <option :value="9">周二89节</option>
            <option :value="10">周二10-12节</option>
            <option :value="11">周三12节</option>
            <option :value="12">周三34节</option>
            <option :value="13">周三67节</option>
            <option :value="14">周三89节</option>
            <option :value="15">周三10-12节</option>
            <option :value="16">周四12节</option>
            <option :value="17">周四34节</option>
            <option :value="18">周四67节</option>
            <option :value="19">周四89节</option>
            <option :value="20">周四10-12节</option>
            <option :value="21">周五12节</option>
            <option :value="22">周五34节</option>
            <option :value="23">周五67节</option>
            <option :value="24">周五89节</option>
            <option :value="25">周五10-12节</option>
            <option :value="26">周六12节</option>
            <option :value="27">周六34节</option>
            <option :value="28">周六67节</option>
            <option :value="29">周六89节</option>
            <option :value="30">周六10-12节</option>
            <option :value="31">周日12节</option>
            <option :value="32">周日34节</option>
            <option :value="33">周日67节</option>
            <option :value="34">周日89节</option>
            <option :value="35">周日10-12节</option>
        </select>
    </li>
</ul>
</div>
</template>

<script>
export default {
    name: "DateForm",
    methods:{
        changeClass(e,index1,index2){
            console.log(e.target.value,index1,index2)
            this.$store.state.classes[index1].splice(index2,1,e.target.value)
        }
    }
}
</script>

<style scoped lang="less">
.d1{
    margin-top: 50px;
    margin-left: 100px;
    .l1{
        //margin-left: 100px;
        //margin-right: 30px;
        margin-bottom: 10px;
        .s1{
            margin-left: 10px;
        }
    }
    .d2{
        margin-bottom: 20px;
        //background-color: skyblue;

    }
}
</style>
