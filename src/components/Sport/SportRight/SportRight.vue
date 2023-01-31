<template>
    <div class="last-news-left">
        <div class="container last-news-left__container">
            <div class="last-news-left__list">
              <div class="last-news-left__block" v-for="sportNews in sportNewsLeft" :key="sportNews.id">
                 <router-link class="link" to="/id/3">
                    <div class="last-news-left__block-flex">
                       <div>
                        <h3>{{sportNews.title}}</h3>
                        <div class="flex">
                          <p class="flex__title">{{sportNews.desc1}}</p>
                          <p class="flex__desc2">2 кун олдин</p>
                        </div>
                       </div>
                       <img v-bind:src="sportNews.img" alt="">   
                   </div>
                 </router-link>
                 <hr class="hr">
              </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: "LastNewsLeft",
  props: {
    sportNewsLeft:{
      type: Array
    }
  }
};
</script>

<style scoped>

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
  color: #E50029;
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

