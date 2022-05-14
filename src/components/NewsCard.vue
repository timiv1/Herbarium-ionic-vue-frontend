<template>
  <ion-card>
    <img
      src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
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
  },
});
</script>
