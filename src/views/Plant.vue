<template>
  <base-page title="Collection">
    <ion-grid fixed>
      <header1>BRAVO! A new plant! </header1>
      <ion-row class="ion-justify-content-center" style="margin-top: 41px">
        <ion-col size="12">
         
        </ion-col>

        <ion-col size="4"> </ion-col>
      </ion-row>
    </ion-grid>
  </base-page>
</template>

<script lang="ts">
import Header1 from "../components/Header.vue";
import BasePage from "../components/BasePage.vue";
import { defineComponent } from "vue";
import { IonGrid, IonRow, IonCol } from "@ionic/vue";

export default defineComponent({
  name: "PlantPage",
  components: { BasePage, Header1, IonGrid, IonRow, IonCol },
});
</script>
<style>
.title-page-news {
  font-size: 27px;
  line-height: 32px;
  /* identical to box height */

  color: #36455a;
}
</style>
