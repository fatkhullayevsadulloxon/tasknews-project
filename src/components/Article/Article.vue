<template>
    <div class="article">
        <div class="container article__container">
            <div class="article__list">
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
            <hr class="hr">
            <div class="block__container">
                <router-link class="link" to="/id/85" v-for="articles in article" :key="articles.id">
                    <img v-bind:src="articles.img" alt="">
                    <h3>{{articles.title}}</h3>
                    <div class="flex-3">
                        <p class="flex-3__heading">{{articles.desc1}}</p>
                        <p class="flex-3__title">{{articles.desc2}}</p>
                    </div>
                </router-link>
            </div>
            <div class="block__container">
                <router-link class="link" to="/id/85" v-for="articles in article2" :key="articles.id">
                    <img v-bind:src="articles.img" alt="">
                    <h3>{{articles.title}}</h3>
                    <div class="flex-3">
                        <p class="flex-3__heading">{{articles.desc1}}</p>
                        <p class="flex-3__title">{{articles.desc2}}</p>
                    </div>
                </router-link>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    article:{
        type: Array
    },
    article2:{
        type: Array
    }
  }
};
</script>

<style scoped>
.article {
  margin-top: 30px;
}

.article__list {
  background: #ffffff;
  border-radius: 16px;
  height: 788px;
}

.hr {
  opacity: 0.6;
  margin-left: 20px;
  margin-right: 20px;
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
  margin-top: 10px
}

.link img{
    margin-left: 20px
}

.link h3 {
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #1d3068;
  margin-left: 20px;
  max-width: 408px;
}

.flex-3__heading {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #2da85b;
  margin: 0;
  padding: 0;
  margin-left: 20px;
}

.flex-3__title {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #A9AABC;
  margin: 0;
  padding: 0;
  margin-left: 20px;
}

.block__container{
    display: flex
}
</style>
