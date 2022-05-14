<template>
  <div class="ion-text-center">
    <ion-card>
      <img
        src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
      />
    </ion-card>
    <span style="margin-left: 10px; margin-right: 10px"
      >{{ name }} {{ date }}</span
    >
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonCard } from "@ionic/vue";

export default defineComponent({
  name: "PlantCard",
  components: {
    IonCard,
  },
  props: {
    name: { type: String, required: true },
    date: { type: String, required: true },
  },
});
</script>
