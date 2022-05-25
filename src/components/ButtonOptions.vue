<template>
<div class="d1">
    <button class="b1">回退</button>
    <button class="b1">加课</button>
    <button class="b1" @click="SUBMIT">确定提交</button>
</div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
    name: "ButtonOptions",
    methods:{
        ...mapMutations(['SUBMIT'])
    }
}
</script>

<style scoped lang="less">
    .d1{
        margin-left: 100px;
        margin-top: 10px;
        .b1{
            margin-right: 20px;
        }
    }
</style>
