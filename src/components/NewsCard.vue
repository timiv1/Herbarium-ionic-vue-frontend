<template>
  <ion-card>
    <img
      :src=img_url
    />
    <ion-card-header>
      <ion-card-subtitle>{{ subtitle }}</ion-card-subtitle>
      <ion-card-title>{{ title }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      {{ content }}
    </ion-card-content>
  </ion-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonCard, IonCardHeader, IonCardSubtitle } from "@ionic/vue";

export default defineComponent({
  name: "PlantCard",
  components: {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
  },
  props: {
    subtitle: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    img_url: {type: String, required: true }
  },
});
</script>
