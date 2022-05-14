<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="profile" href="/profile">
          <ion-icon :icon="person" />
        </ion-tab-button>

        <ion-tab-button tab="Home" href="/home">
          <ion-icon :icon="home" />
        </ion-tab-button>

        <ion-tab-button tab="Collection" href="/collection">
          <ion-icon :icon="images" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { home, images, person } from "ionicons/icons";

export default defineComponent({
  name: "TabsPage",
  components: {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      home,
      images,
      person,
    };
  },
});
</script>
