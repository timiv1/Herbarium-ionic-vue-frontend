<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <slot></slot>
      <photo-fab></photo-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import PhotoFab from "./PhotoFab.vue";
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
export default defineComponent({
  name: "Tab1Page",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    PhotoFab,
  },
  props: { title: { type: String, required: true } },
});
</script>
