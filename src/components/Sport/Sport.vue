<template>
    <div class="sport">
        <div class="container sport__container">
            <div class="sport__list">
            <div class="flex">
            <div class="flex-2">
                 <img class="flex__img-1" src="../../assets/img/last-news-icon.svg" alt="" width="14" height="14">
                <h3 class="flex__heading">#Sport</h3>
            </div>
             <router-link class="link" to="/id/5">
                <div class="flex-2">
                <p>Барчаси</p>
                <img class="flex__img-2" src="../../assets/img/right-icon.svg" alt="" width="36" height="36">
             </div>
             </router-link>
           </div>
           <hr class="hr">
                <div class="flex-3">
                    <div class="block">
                    <img class="block__img" src="../../assets/img/modrich.jpg" alt="">
                    <h3 class="block__heading">Модрич Саудия клубининг таклифини рад қилди</h3>
                    <div class="flex-3">
                        <p class="flex-3__heading">Спорт</p>
                        <p class="flex-3__title">2 кун олдин</p>
                    </div>
                </div>
            <sport-right :sportNewsLeft="sportNewsLeft"/>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import SportRight from './SportRight/SportRight.vue'
export default {
  name: "Sport",
  components: {
    SportRight
  },
  data() {
    return {
       sportNewsLeft: [
        {id: 4, img: require("../../assets/img/messi.jpg"), title: "Саудия клуби Месси исми туширилган либосларни сотувга чиқарди", desc1: "Спорт",  desc2: "2 кун олдин"},
        {id: 0, img: require("../../assets/img/suares.jpg"), title: "Луис Суарес «Гремио» билан шартнома имзолади",desc1: "Sport", desc2: "2 кун олдин" },
        {id: 1, img: require("../../assets/img/ronaldo.jpg"), title: "Криштиану Роналду «Ан Наср» билан икки йиллик шартнома имзолади", desc1: "Sport",  desc2: "2 кун олдин"},
        {id: 2, img: require("../../assets/img/ramos.jpg"), title: "Роналду ва Рамос битта жамоада фаолиятини давом эттириши мумкин", desc1: "Sport",  desc2: "2 кун олдин"},
        {id: 3, img: require("../../assets/img/eldor.jpg"), title: "Элдор Шомуродов «Торино»га ўтиши мумкин", desc1: "Sport",  desc2: "2 кун олдин"},
      ]
    }
  },
};
</script>

<style scoped>
.sport {
  margin-top: 30px;
}

.sport__list {
  background: #ffffff;
  border-radius: 16px;
  width: 1300px;
  height: 710px;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.flex-2 {
  display: flex;
  align-items: center;
}

.flex__img-1 {
  margin-left: 20px;
}

.flex-2 h3 {
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #1d3068;
  margin-left: 10px;
}

.flex-3 {
  display: flex;
  align-items: top;
}

.flex-2 p {
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: #1d3068;
}

.link {
  text-decoration: none;
}

.hr {
  opacity: 0.5;
  margin-left: 20px;
  margin-right: 20px;
}

.block__img {
  margin-left: 20px;
}

.block__heading {
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #1d3068;
  margin-left: 20px;
}

.flex-3__heading {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #e50029;
  margin-left: 20px;
}

.flex-3__title {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #a9aabc;
  margin-left: 20px;
}

.sport__container{
    display: flex
}
</style>

