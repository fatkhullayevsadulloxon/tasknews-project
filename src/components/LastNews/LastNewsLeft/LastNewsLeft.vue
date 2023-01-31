<template>
    <div class="last-news-left">
        <div class="container last-news-left__container">
            <div class="last-news-left__list">
                <router-link class="link" to="/last-news">
                  <div class="flex">
                  <img class="flex__img-1" src="../../../assets/img/last-news-icon.svg" alt="" width="14" height="14">
                  <h3 class="flex__heading">Сўнгги янгиликлар</h3>
                  <img class="flex__img-2" src="../../../assets/img/right-icon.svg" alt="">
                </div>
                </router-link>
              <div class="last-news-left__block" v-for="lastNews in lastNewsLeft" :key="lastNews.id">
                   <hr class="hr">
                 <router-link class="link" to="/id/3">
                    <div class="last-news-left__block-flex">
                       <div>
                        <h3>{{lastNews.title}}</h3>
                        <div class="flex">
                          <p class="flex__title">Жаҳон</p>
                          <p class="flex__desc2">2 кун олдин</p>
                        </div>
                       </div>
                       <img v-bind:src="lastNews.img" alt="">   
                   </div>
                 </router-link>
              </div>
              <hr class="hr">
            </div>
            <img class="link-ads" src="../../../assets/img/ads.jpg" alt="">
        </div>
    </div>
</template>


<script>
export default {
  name: "LastNewsLeft",
  props: {
    lastNewsLeft:{
      type: Array
    }
  }
};
</script>

<style scoped>
.last-news-left {
  background: #ffffff;
  border-radius: 16px;
  width: 420px;
  height: 957px;
  margin-top: 30px;
}

.flex {
  display: flex;
  align-items: center;
}

.flex__img-1 {
  margin-left: 20px;
}

.flex__heading {
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #1d3068;
  margin-left: 10px;
}

.flex__img-2 {
  margin-left: 70px;
}

.link {
  text-decoration: none;
}

.hr {
  width: 380px;
  margin-left: -1px;
  opacity: 0.6;
}

.last-news-left__block-flex {
  display: flex;
  align-items: top;
}

.last-news-left__block-flex h3 {
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #1d3068;
  max-width: 280px;
  margin: 0;
  padding: 0;
}

.flex__title {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ff7d25;
}

.flex__desc2 {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #a9aabc;
  margin-left: 20px
}

.link-ads{
  margin-top: 20px
}
</style>

