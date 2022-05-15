<template>
  <ion-card>
      
    <div class="block_container" >
      <img class="icon_img block_container" :src="image" />
    <h2 class="content" style="margin: auto;">{{ name }}</h2>
    <div>
 <h3 class="content">{{ points }} <img class="star-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/640px-Star_full.svg.png"/></h3>
 
    </div>
   
    
    </div>

    <div>
        <h4 class="content">
        {{ description }}
      </h4>
    </div>
  </ion-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonCard, IonCardHeader, IonCardSubtitle } from "@ionic/vue";

export default defineComponent({
  name: "AchivmentsComponent",
  components: {
    IonCard,   
  
  },
  props: {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    points: { type: String, required: true },
  },
});
</script>
<style scoped>
.icon_img {
  width: 64px;
  height: 64px;
  margin: 16px;
}

.block_container {
  display: flex;  
}
.content{
    margin: 24px;
}
.star-icon{
    width: 16px;
    height: 16px;
}
</style>


<!-- Filip Zdjelar
[
  {
    "id": "2",
    "name": "First Plant Scanned",
    "description": "Achievement for the first plant scanned",
    "image": "slika",
    "points": null,
    "status": true
  },
  {
    "id": "string",
    "name": "10th Plant Scanned",
    "description": "Achievement for 10th plant scanned",
    "image": "https://cdn-icons-png.flaticon.com/512/628/628283.png",
    "points": null,
    "status": true
  },
  {
    "id": null,
    "name": "10th Plant Scanned",
    "description": "Achievement for 10th plant scanned",
    "image": "https://cdn-icons-png.flaticon.com/512/628/628283.png",
    "points": null,
    "status": true
  }
] -->