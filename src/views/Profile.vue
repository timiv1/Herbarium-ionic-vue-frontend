<template>
  <base-page title="Profile">
    <div class="green-box"></div>
    <ion-grid fixed>
      <ion-row>
        <ion-col size="12">
          <ion-avatar class="avatar">
            <img
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
            />
          </ion-avatar>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <h3 class="align-center">Name LastName</h3>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col class="input-row">
          <ion-input
            type="search"
            placeholder="Search for plants"
            class="custom-input"
          >
          </ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col class="input-row">
          <ion-input
            type="search"
            placeholder="Search for plants"
            class="custom-input"
          >
          </ion-input>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-page>
</template>

<script lang="ts">
import BasePage from "../components/BasePage.vue";
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

export default defineComponent({
  name: "HomePage",
  components: {
    BasePage,
    IonGrid,
    IonRow,
    IonCol,
    IonAvatar,
    IonInput,
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
.align-center {
  text-align: center;
  margin: auto;
  margin-top: 12px;
}
</style>
