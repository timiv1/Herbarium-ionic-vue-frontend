<template>
  <base-page title="Home">
    <div class="green-box">
      <!-- <div style="margin-top: 50px">
        
      </div> -->
    </div>

    <ion-grid fixed>
      <ion-row class="ion-align-items-center">
        <ion-col size="9" style="margin-left: 12px">
          <ion-text color="light">
            <span class="user-title-text">Hello Awesome_69,</span>
            <br />
            <span class="small-text"
              >Let's Discover Our Beautifull Planet together</span
            >
          </ion-text>
        </ion-col>
        <ion-col size="auto">
          <ion-avatar>
            <img
              src="https://www.t2transfer.com/wp-content/uploads/2021/10/83-836357_greg-ezeilo-avatar-icon-png.jpg"
            />
          </ion-avatar>
        </ion-col>
        <ion-col size="12" class="input-row">
          <ion-input
            type="search"
            placeholder="Search for plants"
            class="custom-input"
          >
          </ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="12" style="margin-left: 12px">
          <h1>News</h1>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="12" style="margin-bottom: 20px">
          <ion-slides>
            <ion-slide>
              <news-card
                :img_url="'https://i0.wp.com/citymagazine.si/wp-content/uploads/2019/01/shutterstock_557542792.jpg?ssl=1'"
                :title="'Rastlina dneva'"
                :subtitle="'Zelena vrtnica'"
                :content="'Zelo velika lepa zelena vrtnica'"
              ></news-card>
            </ion-slide>
            <ion-slide>
              <news-card
                :img_url="'https://www.openaccessgovernment.org/wp-content/uploads/2018/11/dreamstime_s_74844293.jpg'"
                :title="'Okoljske zgodbe'"
                :subtitle="'s terena'"
                :content="'boj za čisto in zdravo okolje. Naše okoljske pravice in kako do njih.'"
              ></news-card>
            </ion-slide>
            <ion-slide>
              <news-card
                :img_url="'https://www.slo-foto.net/modules/Galerija/data/media/13/4125970397.jpg'"
                :title="'Planika'"
                :subtitle="'Najbolj iskano'"
                :content="'Dvojne točke za najdbo.'"
              ></news-card>
            </ion-slide>
          </ion-slides>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-page>
</template>

<script lang="ts">
import BasePage from "../components/BasePage.vue";
import { defineComponent } from "vue";
import {
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonSlides,
  IonSlide,
  IonText,
} from "@ionic/vue";
import NewsCard from "../components/NewsCard.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    BasePage,
    IonInput,
    IonGrid,
    IonRow,
    IonCol,
    IonSlides,
    IonSlide,
    NewsCard,
    IonText,
  },
});
</script>
<style scoped>
.small-text {
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.8;
}
.user-title-text {
  font-size: 21px;
  line-height: 25px;
  color: #ffffff;
}
.custom-input {
  width: 80%;
  height: 50px;
  left: 10%;
  right: 10%;
  margin-top: 11px;

  background: #ffffff;
  box-shadow: 3px 5px 20px rgba(182, 182, 182, 0.15);
  border-radius: 3100px;
  box-shadow: 5px 10px 18px #888888;
}
.green-box {
  position: absolute;
  width: 100%;
  height: 172px;
  left: 0px;
  top: 0px;

  background: linear-gradient(107.16deg, #61d2c4 -9.45%, #29d890 85.23%);
}
::v-deep .native-input {
  margin-left: 20px;
  /* padding-right: auto; */
}
</style>
