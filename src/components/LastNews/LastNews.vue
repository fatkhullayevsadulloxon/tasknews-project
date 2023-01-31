<template>
    <div class="last-news">
        <div class="container last-news__container">
                 <div class="last-news__left-list">
                    <router-link class="link" to="/id/1">
                      <img src="../../assets/img/olmota-news.jpg" alt="" width="820" height="461">
                    <h1 class="last-news__left-heading">Тошкентдан Олмаотага учган самолёт бўйича қўшимча маълумот берилди</h1>
                    <p class="last-news__left-desc">2023 йил 2 январь куни Тошкент – Олмаота йўналиши бўйича КC128 рейсини амалга ошириш чоғида «Air Astana» авиакомпаниясининг самолёти Чимкент парвозларни бошқариш маркази ҳудудида 350 (10600 м) баландликда кучли турбулентликка учради. Самолёт...</p>
                    <div class="last-news__left-flex">
                        <p class="last-news__left-flex-title1">Жамият</p>
                        <p class="last-news__left-flex-title2">2 кун олдин</p>
                    </div>
                    </router-link>
                    <hr>
                    <div class="last-news__bottom-list" >
                     <div class="last-news__bottom-block" v-for="leftRight in lastNewsRight" :key="leftRight.id">
                       <router-link class="link" to="/id/2" >
                        <img v-bind:src="leftRight.img" :key="leftRight.id" alt="" width="390" height="210">
                        <h3>{{leftRight.title}}</h3>
                       <div class="flex">
                         <p class="flex-desc1">{{leftRight.desc1}}</p>
                         <p class="flex-desc2">{{leftRight.desc2}}</p>
                       </div>
                      </router-link>
                     </div>
                    </div>
                    </div>
                    <last-news-left :lastNewsLeft="lastNewsLeft"/>
                </div>
        </div>
</template>

<script>
  import LastNewsLeft from './LastNewsLeft/LastNewsLeft.vue'
export default {
  name: "LastNews",
  components: {
    LastNewsLeft
  },
  props: {
    lastNewsRight: {
      type: Array
    }
  },
  data() {
    return {
      lastNewsLeft: [
        {id: 0, img: require("../../assets/img/turkiya.jpg"), title: "Туркияда кўплаб авиарейслар туман сабаб бекор қилинди",desc1: "Жаҳон", desc2: "2 кун олдин" },
        {id: 1, img: require("../../assets/img/toshkent.jpg"), title: "Тошкентдаги 31 та олигоҳда дарс вақти ўзгаради", desc1: "Жамият",  desc2: "2 кун олдин"},
        {id: 2, img: require("../../assets/img/ayol.jpg"), title: "Қайси ҳудудда аёл раҳбарлар бошқарувидаги корхоналар сони кўп?", desc1: "Жамият",  desc2: "2 кун олдин"},
        {id: 3, img: require("../../assets/img/karta.jpg"), title: "Андижонда сотувчи мижозининг пластик картасидан пул ўғирлади", desc1: "Жамият",  desc2: "2 кун олдин"},
        {id: 4, img: require("../../assets/img/messi.jpg"), title: "Саудия клуби Месси исми туширилган либосларни сотувга чиқарди", desc1: "Спорт",  desc2: "2 кун олдин"},
        {id: 4, img: require("../../assets/img/astana.jpg"), title: "Air Astana авиакомпаниясининг Тошкент-Олмаота рейси йўловчилари жабрланди", desc1: "Жамият",  desc2: "2 кун олдин"},
      ]
    }
  },
};
</script>


<style scoped>
@font-face {
  font-family: "SF Pro Display";
  src: local("SF Pro Display"),
    url("../../assets/fonts/SF-Pro-Display-Regular.woff");
}

.last-news {
  background: #f8f8ff;
  border-top: 1px solid #d5ddf3;
}

.last-news__container{
  display: flex;
  justify-content: space-between
}

.last-news__left-list {
  width: 860px;
  height: 1150px;
  background: #ffffff;
  border-radius: 16px;
  margin-top: 30px;
}

.last-news__left-list img {
  padding: 20px;
}

.last-news__left-heading {
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #1d3068;
  margin: 0;
  padding: 0;
  padding: 20px;
  text-decoration: none;
}

.last-news__left-desc {
  margin: 0;
  padding: 0;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 25px;
  color: #485680;
  padding-left: 20px;
  text-decoration: none;
}

.last-news__left-flex {
  display: flex;
  align-items: center;
}

.last-news__left-flex-title1 {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ff7d25;
  margin: 0;
  padding: 0;
  padding: 20px;
  text-decoration: none;
}

.last-news__left-flex-title2 {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #a9aabc;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

hr {
  margin-left: 20px;
  margin-right: 20px;
  opacity: 0.6;
}

.link {
  text-decoration: none;
}

.last-news__bottom-list {
  display: flex;
}

.last-news__bottom-list h3 {
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #1d3068;
  margin: 0;
  padding: 0;
  margin-left: 20px;
}

.flex {
  display: flex;
  align-items: center;
}

.flex-desc1 {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ff7d25;
  margin-left: 20px;
}

.flex-desc2 {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #a9aabc;
  margin-left: 20px;
}
</style>
