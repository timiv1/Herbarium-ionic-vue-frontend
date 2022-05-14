<template>
  <base-page title="Collection">
    <ion-grid fixed>
      <header1></header1>
      <ion-row class="ion-justify-content-center" style="margin-top: 41px">
        <ion-col size="12">
          <h3 style="margin-left: 12px">Recent</h3>
        </ion-col>

        <ion-col size="4"
          ><collection-card
            :name="'Daisy'"
            :date="'8.6.2022'"
            :url="'https://www.thespruce.com/thmb/nXN4-57cybyk8U0lYRv8NEcXzjo=/4288x2412/smart/filters:no_upscale()/oxeye-daisy-growing-guide-5190951-hero-baed472653934a6da8c8f86237dcf7bc.jpg'"
          >
          </collection-card>
        </ion-col>
        <ion-col size="4"
          ><collection-card
            :name="'Daisy'"
            :date="'8.6.2022'"
            :url="'https://www.thespruce.com/thmb/nXN4-57cybyk8U0lYRv8NEcXzjo=/4288x2412/smart/filters:no_upscale()/oxeye-daisy-growing-guide-5190951-hero-baed472653934a6da8c8f86237dcf7bc.jpg'"
          >
          </collection-card>
        </ion-col>
        <ion-col size="4"
          ><collection-card
            :name="'Daisy'"
            :date="'8.6.2022'"
            :url="'https://www.thespruce.com/thmb/nXN4-57cybyk8U0lYRv8NEcXzjo=/4288x2412/smart/filters:no_upscale()/oxeye-daisy-growing-guide-5190951-hero-baed472653934a6da8c8f86237dcf7bc.jpg'"
          >
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
