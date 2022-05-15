<template>
  <base-page title="Profile">
    <ion-grid fixed>
      <header1></header1>  
      <!-- <li v-for="(item, index) in items">
  {{ parentMessage }} - {{ index }} - {{ item.message }} -->

 <!-- <div
    v-for="todo in achivements_list"
    :key="todo.id"
  />



<div :v-for="(item, this.achivements_list) in items">

</div>
      <ion-row v-for="(item, this.achivements_list) in items"> > -->
<div v-for="(item,i) in this.achivements_list" :key="i">
  <ion-row>
        <ion-col class="input-row">
          <achievements class="achievement" 
            :name= item.name 
            :description= item.description 
            :image= item.image 
            :points=  item.points>
          </achievements>           
        </ion-col>
      </ion-row>
</div>
     
          
    </ion-grid>
  </base-page>
</template>

<script lang="ts">
import BasePage from "../components/BasePage.vue";
import Achievements from "../components/Achievements.vue";

import { IonModal } from '@ionic/vue';
import Modal from './modal.vue'

import { defineComponent } from "vue";

import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
  IonInput,
} from "@ionic/vue";
import Header1 from "../components/Header.vue";
import axios from 'axios';

export default defineComponent({
  name: "ProfilePage",
  components: {
    BasePage,
    Achievements,
    IonGrid,
    IonRow,
    IonCol,
    Header1,
  },
  data() {
    return { 
       achivements_list: {}
    };
  },

// http://88.200.36.115:8070/achievements/findAll
// http://88.200.36.115:8070/achievements/findById/1
// http://88.200.36.115:8070/collection/plant/1/user/1
// http://88.200.36.115:8070/collection/upload
// http://88.200.36.115:8070/collection/user/1
// http://88.200.36.115:8070/leaderboards
// http://88.200.36.115:8070/leaderboards/findAll
// http://88.200.36.115:8070/leaderboards/findById/1


  async ionViewDidEnter() {

    axios
      .get("http://88.200.36.115:8070/achievements/findAll") // Methods you can use also: .get , .put
      .then((response) => {
        console.log(response.data);
        this.achivements_list = response.data
        return response.data;
      })     
      .catch((error) => {
        console.log("an error occurred");
      });    
 
}
 
});
</script>
<style scoped>
.custom-input {
  width: 80%;
  height: 50px;
  left: 10%;
  right: 10%;
  margin-top: 24px;

  background: #ffffff;
  box-shadow: 3px 5px 20px rgba(182, 182, 182, 0.15);
  border-radius: 3100px;
  box-shadow: 5px 10px 18px #888888;
}
.green-box {
  position: absolute;
  width: 100%;
  height: 244px;
  left: 0px;
  top: 0px;

  background: linear-gradient(107.16deg, #61d2c4 -9.45%, #29d890 85.23%);
}
::v-deep .native-input {
  margin-left: 20px;
  /* padding-right: auto; */
}
.avatar {
  min-height: 72px;
  min-width: 72px;
  margin: auto;
  margin-top: 32px;
}

.achievement{
  margin-top: 24px;
}
</style>
