<template>
  <base-page title="Collection">
    <ion-grid fixed>
      <header1></header1>
      <ion-row class="ion-justify-content-center">
        <ion-col size="4"
          ><collection-card :name="'Daisy'" :date="'8.6.2022'">
          </collection-card>
        </ion-col>
        <ion-col size="4"
          ><collection-card :name="'Daisy'" :date="'8.6.2022'">
          </collection-card>
        </ion-col>
        <ion-col size="4"
          ><collection-card :name="'Daisy'" :date="'8.6.2022'">
          </collection-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-page>
</template>

<script lang="ts">
import Header1 from "../components/Header.vue";
import BasePage from "../components/BasePage.vue";
import { defineComponent } from "vue";
import { IonGrid, IonRow, IonCol } from "@ionic/vue";
import CollectionCard from "@/components/CollectionCard.vue";

export default defineComponent({
  name: "CollectionPage",
  components: { BasePage, Header1, CollectionCard, IonGrid, IonRow, IonCol },
});
</script>
