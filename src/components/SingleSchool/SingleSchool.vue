<template>
    <div class="all-news">
        <div class="container all-news__container">
            <div class="all-news__list">
            <h3 class="all-news__list-heading">Кечадан ўқиш бошланган мактабларда иссиқлик талабга жавоб берадими?</h3>
            <p class="all-news__list-desc">Маҳаллий ҳокимликлар чиқарган қарорга кўра, кеча, яъни 11 январдан кўпгина мактабларда ўқиш жараёни бошланди. Ташқаридаги ҳаво ҳарорати эса сўнгги йиллардаги айни шу мавсум кўрсаткичидан анча юқори. </p>
            <div class="flex">
                <div class="flex-3">
                  <p class="flex-heading">Жамият</p>
                  <p class="flex-desc">2 январь, 11:12</p>
                </div>
                <div class="flex-3">
                  <p class="flex-desc">Жамият</p>
                  <p class="flex-desc">2 январь, 11:12</p>
                </div>
            </div>
            <img class="flex-img" src="../../assets/img/maktab.jpg" alt="">
            <p class="flex-desc-1">Маҳаллий ҳокимликлар чиқарган қарорга кўра, кеча, яъни 11 январдан кўпгина мактабларда ўқиш жараёни бошланди. Ташқаридаги ҳаво ҳарорати эса сўнгги йиллардаги айни шу мавсум кўрсаткичидан анча юқори. Яъни “Ўзгидромет”нинг тақдим этган маълумотига кўра, 12-15 январда республика бўйича аномал совуқ об-ҳаво бўлиши кутилмоқда. Хўш, бундай совуқ ҳароратда 11 январдан ўқиш жараёнлари бошланган мактабларда иссиқлик талаблари қандай бўлиши керак? Санитария-эпидемиология хизмати ана шу талабларни эслатиб ўтди: <br>

          </p>
            <ul class="list">
              <li class="item">
                Таълим муассасаларининг ўқув хоналарида ҳаво ҳарорати 16º С дан паст бўлмаслиги керак.
              </li>
              <li class="item">
               Таълим муассасаларининг ўқув хоналарида машғулотлар ўтказишда меҳнатни муҳофаза қилиш талабларига мувофиқ ўқув хоналарида ҳаво ҳарорати енгил жисмоний ишда 21º С, ўртача оғир ишда 17º С ва оғир ишда 16º С дан паст бўлмаслиги керак.
              </li>
              <li class="item">
               Физика ўқув лаборатория хонасида мунтазам равишда ҳарорат 18º С – 21º С, ҳавонинг намлиги 40 – 60 фоиз бўлиши керак.
              </li>
              <li class="item">
                Таълим муассасаси ҳудудидаги ҳожатхоналар иссиқ сув ва канализация тизимига уланган бўлиши лозим.
              </li>
              <li class="item">
              Таълим муассасасида канализация тизими йўқ бўлганда давлат санитария назорати органлари билан келишилган ҳолда таълим муассасасида ер қатламини ифлослантирмаган ҳолда душхоналардан ва юз-қўл ювгичлардан сув оқмайдиган қурилмали ахлат ўраларининг мавжуд бўлишига рухсат этилади.
              </li>
              <li class="item">
               Информатика ўқув хонасини ертўлаларда жойлаштириш тақиқланади.
              </li>
              <li class="item">
               Ўқув устахоналаридаги иш ўрни ҳар қандай бахтсиз ҳодисанинг олдини олишга қаратилган ҳолда ташкил қилинган бўлиши керак.
              </li>
              <li class="item">
               Хўш, кечадан дарс ўтилаётган мактаблардаги иссиқлик шу талабларга жавоб берадими?
              </li>
            </ul>
            </div>
            <div class="left-flex">
                <img src="../../assets/img/left.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "SingleSchool",
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
  margin-top: 30px;
}

.all-news__container {
  display: flex;
  align-items: top;
  justify-content: space-between;
}

.left-flex img {
  padding: 20px;
}

.all-news__list-heading {
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #1d3068;
  margin: 0;
  padding: 0;
  margin-left: 20px;
  margin-top: 20px;
}
.all-news__list-desc {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
  color: #1d3068;
  margin: 0;
  padding: 0;
  margin-left: 20px;
  margin-top: 12px;
}
.flex-heading {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ff7d25;
  margin-left: 20px;
}
.flex-desc {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #a9aabc;
  margin-left: 20px;
}

.flex-img {
  margin-left: 20px;
}

.flex-desc-1 {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
  color: #1d3068;
  max-width: 820px;
  margin-left: 20px;
}

.list {
  max-width: 820px;
}

.item {
  max-width: 820px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
  color: #1d3068;
}
</style>

