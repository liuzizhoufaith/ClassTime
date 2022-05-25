<template>
  <div id="app">
    <input-information></input-information>
      <date-form></date-form>
      <button-options></button-options>
      <tip-information></tip-information>
      <time-table></time-table>
  </div>
</template>

<script>
import ButtonOptions from "@/components/ButtonOptions";
import DateForm from "@/components/DateForm";
import InputInformation from "@/components/InputInformation";
import TimeTable from "@/components/TimeTable";
import TipInformation from "@/components/TipInformation";

export default {
  name: 'App',
  components: {
    ButtonOptions,DateForm,InputInformation,TimeTable,TipInformation
  }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
*{
    font-size: 20px;
    font-family: "Microsoft YaHei UI";
}
</style>
