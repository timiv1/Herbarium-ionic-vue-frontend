<template>
  <base-page title="Home">
    <div class="green-box"></div>
    <ion-grid fixed>
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
        <ion-col size="12">
          <ion-card>
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            />
            <ion-card-header>
              <ion-card-subtitle>Destination</ion-card-subtitle>
              <ion-card-title>Madison, WI</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              Founded in 1829 on an isthmus between Lake Monona and Lake
              Mendota, Madison was named the capital of the Wisconsin Territory
              in 1836.
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-page>
</template>

<script lang="ts">
import BasePage from "../components/BasePage.vue";
import { defineComponent } from "vue";
import {
  IonInput,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";

export default defineComponent({
  name: "HomePage",
  components: {
    BasePage,
    IonInput,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonGrid,
    IonRow,
    IonCol,
  },
});
</script>
<style scoped>
.custom-input {
  width: 80%;
  height: 50px;
  left: 10%;
  right: 10%;
  margin-top: 91px;

  background: #ffffff;
  box-shadow: 3px 5px 20px rgba(182, 182, 182, 0.15);
  border-radius: 3100px;
  box-shadow: 5px 10px 18px #888888;
}
.green-box {
  position: absolute;
  width: 100%;
  height: 172px;
  left: 0px;
  top: 0px;

  background: linear-gradient(107.16deg, #61d2c4 -9.45%, #29d890 85.23%);
}
::v-deep .native-input {
  margin-left: 20px;
  /* padding-right: auto; */
}
</style>
