<template>
  <ion-page class="background-white">
    <!-- <ion-header class="ion-no-border green-hader">
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <div class="side-cricle"></div>

    <div class="green-hader"></div>
    <ion-title style="display: none">{{ title }}</ion-title>

    <ion-content :fullscreen="true">
      <slot></slot>
      <photo-fab></photo-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import PhotoFab from "./PhotoFab.vue";
import { defineComponent } from "vue";
import { IonPage, IonTitle, IonContent } from "@ionic/vue";
export default defineComponent({
  name: "Tab1Page",
  components: {
    IonTitle,
    IonContent,
    IonPage,
    PhotoFab,
  },
  props: { title: { type: String, required: true } },
});
</script>
<style>
.green-hader {
  height: 56px;
  width: 100%;
  background: linear-gradient(107.16deg, #61d2c4 -9.45%, #29d890 85.23%);
}
.side-cricle {
  position: absolute;
  width: 204px;
  height: 204px;
  left: 207px;
  top: -86px;

  background: rgba(255, 255, 255, 0.15);
}
/* .background-white {
  background-color: white;
} */
</style>
