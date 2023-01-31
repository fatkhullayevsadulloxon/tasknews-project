<template>
    <div class="all-news">
        <div class="container all-news__container">
            <div class="all-news__list">
                <div class="flex">
            <div class="flex-2">
                 <img class="flex__img-1" src="../../assets/img/last-news-icon.svg" alt="" width="14" height="14">
                <h3 class="flex__heading">Мақолалар</h3>
            </div>
             <router-link class="link" to="/id/5">
                <div class="flex-2">
                <p>Барчаси</p>
                <img class="flex__img-2" src="../../assets/img/right-icon.svg" alt="" width="36" height="36">
             </div>
             </router-link>
           </div>
           <div class="all-news__list-block" v-for="allNew in allNews" :key="allNew.id">
           <hr class="hr">
            <router-link class="link" to="/id/525">
                    <div class="last-news-left__block-flex">
                       <div>
                        <h3>{{allNew.title}}</h3>
                        <div class="flex-5">
                          <p class="flex__title">{{allNew.desc1}}</p>
                          <p class="flex__desc2">{{allNew.desc2}}</p>
                        </div>
                       </div>
                       <img v-bind:src="allNew.img" alt="" width="213" height="120">   
                   </div>
                 </router-link>
           </div>
           <button class="btn">Яна юклаш</button>
            </div>
            <div class="left-flex">
                <img src="../../assets/img/left.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "AllNews",
  props: {
    allNews: {
      type: Array
    }
  }
};
</script>

<style scoped>
.all-news__list {
  background: #ffffff;
  border-radius: 16px;
  margin-top: 30px;
  width: 860px;
  height: 2164px;
}

.flex__title {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ff7d25;
  margin-left: 20px;
}
.flex__desc2 {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #a9aabc;
  margin-left: 20px;
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

.flex-5 {
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
  margin: 0;
  padding: 0;
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
  margin-top: 30px;
}

.hr {
  opacity: 0.6;
  margin-left: 20px;
  margin-right: 20px;
}

.last-news-left__block-flex {
  display: flex;
  align-items: top;
  justify-content: space-between;
}

.last-news-left__block-flex h3 {
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #1d3068;
  max-width: 587px;
  margin-left: 20px;
}

.btn {
  background: #f8f8ff;
  border-radius: 6px;
  border: none;
  width: 820px;
  height: 48px;
  margin-left: 20px;
  cursor: pointer;
}

.left-flex {
  background: #ffffff;
  border-radius: 16px;
  width: 420px;
  height: 754px;
  margin-top: 30px
}

.all-news__container{
  display: flex;
  align-items: top;
  justify-content: space-between
}

.left-flex img{
  padding: 20px
}
</style>

