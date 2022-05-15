<template>
  <ion-card class="collection-card">
    <img class="img-size" :src="url" />
    <div class="text-box ion-text-center">
      <span class="text-collection-components" style="">{{ name }}</span>
    </div>
  </ion-card>
  <!-- <div class="ion-text-center" style="margin-left: 10px; margin-right: 10px"> -->

  <!-- </div> -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {IonCard} from "@ionic/vue";

export default defineComponent({
  name: "PlantCard",
  components: {IonCard},
  props: {
    name: { type: String, required: true },
    date: { type: String, required: true },
    url: { type: String, required: true },
  },
});
</script>
<style scoped>
.text-collection-components {
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #36455a;
}
.collection-card {
  margin: 3px;
}
.collection-image {
  width: 20px;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}
.text-box {
  margin: 5px 5px 5px 5px;
}
.img-size{
  width: 142px;
  height: 80px;
}
</style>
