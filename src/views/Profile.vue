<template>
  <base-page title="Profile">
    <ion-grid fixed>
      <header1></header1>
      <ion-row>
        <ion-col class="input-row">
          <achievements class="achievement"
          :img_url="'https://i0.wp.com/citymagazine.si/wp-content/uploads/2019/01/shutterstock_557542792.jpg?ssl=1'"
                :title="'Rastlina dneva'"
                :subtitle="'Zelena vrtnica'"
                :content="'Zelo velika lepa zelena vrtnica'">
          </achievements>           
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-page>
</template>

<script lang="ts">
import BasePage from "../components/BasePage.vue";
import Achievements from "../components/Achievements.vue";

import { defineComponent } from "vue";

import {
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
