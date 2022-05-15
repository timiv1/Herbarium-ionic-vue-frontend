<template>
  <base-page title="Profile">
    <ion-grid fixed>
      <header1></header1>      
      <ion-row>
        <ion-col class="input-row">
          <achievements class="achievement" 
            :name= "'Plant of the day'"
            :description="'You just scanned the special plant of the day!'"
            :image="'https://img.icons8.com/bubbles/452/chili-pepper.png'"
            :points="'10'">
          </achievements>           
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col class="input-row">
          <achievements class="achievement" 
            :name= "'10th Plant Scanned'"
            :description="'Achievement for 10th plant scanned'"
            :image="'https://cdn-icons-png.flaticon.com/512/628/628283.png'"
            :points="'10'">
          </achievements>           
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col class="input-row">
          <achievements class="achievement" 
            :name= "'Happy birthday to you'"
            :description="'The day is all yours — have fun!'"
            :image="'https://img.icons8.com/bubbles/452/poppy-flower.png'"
            :points="'5'">
          </achievements>           
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col class="input-row">
          <achievements class="achievement" 
            :name= "'You are still active!'"
            :description="'Returning to Herbarium for the past week improved your flower knowledge, didnt it?'"
            :image="'https://img.icons8.com/bubbles/452/banana.png'"
            :points="'5'">
          </achievements>           
        </ion-col>
      </ion-row>
    <ion-row>
        <ion-col class="input-row">
          <achievements class="achievement" 
            :name= "'Rare one!'"
            :description="'You have just hit the jackpot with this one!'"
            :image="'https://img.icons8.com/bubbles/344/melon.png'"
            :points="'20'">
          </achievements>           
        </ion-col>
      </ion-row>     
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
