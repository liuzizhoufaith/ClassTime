<template>
<div>
    <table class="t1">
        <tr class="t2">
            <td class="t3 t4"></td>
            <td class="t3">周一</td>
            <td class="t3">周二</td>
            <td class="t3">周三</td>
            <td class="t3">周四</td>
            <td class="t3">周五</td>
            <td class="t3">周六</td>
            <td class="t3">周日</td>
        </tr>
        <tr class="t2">
            <td class="t3 t4">12节</td>
            <td class="t3">{{$store.getters.table.className[1]}}</td>
            <td class="t3">{{$store.getters.table.className[6]}}</td>
            <td class="t3">{{$store.getters.table.className[11]}}</td>
            <td class="t3">{{$store.getters.table.className[16]}}</td>
            <td class="t3">{{$store.getters.table.className[21]}}</td>
            <td class="t3">{{$store.getters.table.className[26]}}</td>
            <td class="t3">{{$store.getters.table.className[31]}}</td>
        </tr>
        <tr class="t2">
            <td class="t3 t4">34节</td>
            <td class="t3">{{$store.getters.table.className[2]}}</td>
            <td class="t3">{{$store.getters.table.className[7]}}</td>
            <td class="t3">{{$store.getters.table.className[12]}}</td>
            <td class="t3">{{$store.getters.table.className[17]}}</td>
            <td class="t3">{{$store.getters.table.className[22]}}</td>
            <td class="t3">{{$store.getters.table.className[27]}}</td>
            <td class="t3">{{$store.getters.table.className[32]}}</td>
        </tr>
        <tr class="t2">
            <td class="t3 t4">第5节</td>
            <td class="t3">{{$store.getters.table.className[2]}}</td>
            <td class="t3">{{$store.getters.table.className[7]}}</td>
            <td class="t3">{{$store.getters.table.className[12]}}</td>
            <td class="t3">{{$store.getters.table.className[17]}}</td>
            <td class="t3">{{$store.getters.table.className[22]}}</td>
            <td class="t3">{{$store.getters.table.className[27]}}</td>
            <td class="t3">{{$store.getters.table.className[33]}}</td>
        </tr>
        <tr class="t2">
            <td class="t3 t4">67节</td>
            <td class="t3">{{$store.getters.table.className[3]}}</td>
            <td class="t3">{{$store.getters.table.className[8]}}</td>
            <td class="t3">{{$store.getters.table.className[13]}}</td>
            <td class="t3">{{$store.getters.table.className[18]}}</td>
            <td class="t3">{{$store.getters.table.className[23]}}</td>
            <td class="t3">{{$store.getters.table.className[28]}}</td>
            <td class="t3">{{$store.getters.table.className[34]}}</td>
        </tr>
        <tr class="t2">
            <td class="t3 t4">89节</td>
            <td class="t3">{{$store.getters.table.className[4]}}</td>
            <td class="t3">{{$store.getters.table.className[9]}}</td>
            <td class="t3">{{$store.getters.table.className[14]}}</td>
            <td class="t3">{{$store.getters.table.className[19]}}</td>
            <td class="t3">{{$store.getters.table.className[24]}}</td>
            <td class="t3">{{$store.getters.table.className[29]}}</td>
            <td class="t3">{{$store.getters.table.className[35]}}</td>
        </tr>
        <tr class="t2">

            <td class="t3 t4">10-12节</td>
            <td class="t3">{{$store.getters.table.className[5]}}</td>
            <td class="t3">{{$store.getters.table.className[10]}}</td>
            <td class="t3">{{$store.getters.table.className[15]}}</td>
            <td class="t3">{{$store.getters.table.className[20]}}</td>
            <td class="t3">{{$store.getters.table.className[25]}}</td>
            <td class="t3">{{$store.getters.table.className[30]}}</td>
            <td class="t3">{{$store.getters.table.className[36]}}</td>
        </tr>
</table>
    <br><br><br><br>
</div>
</template>

<script>
// import {mapState} from "vuex";

export default {
    name: "TimeTable",
    computed:{
        // ...mapState(['mi','tsi','wi','tri','fi','sai','sui'])
    }
}
</script>

<style scoped lang="less">
.t1{
    border: 1px solid black;
    width: 1000px;
    height: 400px;
    margin-top: 20px;
    margin-left: 100px;
    .t2{
        border: 1px solid black;
        width: 20%;
        //display: table;
        .t3{
            border: 1px solid black;
            //width: 20%;
            text-align:center;
        }
    }
}
</style>
