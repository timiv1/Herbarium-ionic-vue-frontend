<template>
  <div class="ion-text-center" style="margin-left: 10px; margin-right: 10px">
    <img :src="url" />
    <span class="text-collection-components" style="display: none"
      >{{ name }} {{ date }}</span
    >
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {} from "@ionic/vue";

export default defineComponent({
  name: "PlantCard",
  components: {},
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
.collection-image {
  width: 50px;
  height: 50px;
}
</style>
