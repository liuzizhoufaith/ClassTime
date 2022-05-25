import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)
const actions={}
const getters={
    periodNumbers(state){
        const a=[]
        for(let i=0;i<state.numbers1;i++){
            a[a.length]=Array(state.numbers2)
        }
        return a
    },
    table(state){
        // for (let i=1;i<36;i++){
            for(let j=0;j<state.classTime[0].time[0].length;j++){
                state.all.classTable[parseInt(state.classTime[0].time[0][j])]=false
                state.all.className[parseInt(state.classTime[0].time[0][j])]=state.classTime[0].name
            }
        // }
        return state.all
    }

}
const mutations={
    CN(state,value){
        state.name=value
    },
    SUBMIT(state){
        state.information.name=state.name
        state.information.time.push(state.classes)
        state.classTime.push(state.information)
    },


}
const state={
    name:'',
    classTime:[],
    information:{name:'',time:[]},
    numbers1:0,
    numbers2:0,
    classes:[],


    all:{classTable:[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],className:[]}
}
const store=new Vuex.Store({actions,mutations,state,getters})
export default store
