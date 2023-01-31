<template>
   <header class="header">
        <div class="container">
            <img src="../../assets/img/ads-header.svg" alt="" width="1300" height="220">
            <div class="header__container">
                <div class="nav-top">
                   <router-link to="/"> <img class="nav-top__img" src="../../assets/img/platina-logo.svg" alt=""></router-link>
                    <div class="nav-top__form">
                        <img class="nav-top__form-search" src="../../assets/img/seach-icon.svg" alt="" width="25" height="25">
                        <input class="nav-top__input" type="text" placeholder="Сайт бўйлаб қидирув...">
                    </div>
                    <a class="nav-top__telegram-link" href="https://t.me/platinauzb">
                    <img src="../../assets/img/telegram-icon.svg" alt="">
                    <span>@platinauzb</span>
                    </a>
                    <select class="nav-top__select">
                        <option class="nav-top__select-value" value="Ўзб">Ўзбекча</option>
                        <option class="nav-top__select-value" value="Uzb">O’zbekcha</option>
                        <option class="nav-top__select-value" value="Rus">Русский</option>
                        <option class="nav-top__select-value" value="Eng">English</option>
                    </select>
                </div>
                <nav class="sitenav">
                    <div class="sitenav__container">
                        <ul class="sitenav__list">
                        <li class="sitenav__item">
                            <router-link class="sitenav__link-route" to="/uzbekistan">Ўзбекистон</router-link>
                        </li>
                        <li class="sitenav__item">
                            <router-link class="sitenav__link-route" to="/uzbekistan">Жаҳон</router-link>
                        </li>
                        <li class="sitenav__item">
                            <router-link class="sitenav__link-route" to="/uzbekistan">Жамият</router-link>
                        </li>
                        <li class="sitenav__item">
                            <router-link class="sitenav__link-route" to="/uzbekistan">Таҳлил</router-link>
                        </li>
                        <li class="sitenav__item">
                            <router-link class="sitenav__link-route" to="/uzbekistan">Спорт</router-link>
                        </li>
                        <li class="sitenav__item">
                            <router-link class="sitenav__link-route" to="/uzbekistan">Медиа</router-link>
                        </li>
                    </ul>
                    <ul class="sitenav__list">
                        <li class="sitenav__item-sun">
                            <img src="../../assets/img/sun-icon.svg" alt="">
                            <span>+9 °C</span>
                        </li>
                        <li class="sitenav__item-usd">
                            <img class="sitenav__item-usd-img" src="../../assets/img/USD.svg" alt="">
                            <span>USD <span class="red"> 11318.74</span> </span>
                            <img class="sitenav__item-usd-img" src="../../assets/img/strelka.svg" alt="">
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
        </div>
   </header>
        <router-view/>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
@font-face {
  font-family: "SF Pro";
  src: local("SF Pro"), url("../../assets/fonts/SF-Pro-Display-Heavy.ttf");
}
@font-face {
  font-family: "SF Pro Display";
  src: local("SF Pro Display"), url("../../assets/fonts/SF-Pro-Display-Regular.woff");
}

.nav-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}

.nav-top__img {
  transition: all 0.4s;
}
.nav-top__img:hover {
  opacity: 0.8;
  transition: all 0.4s;
}

.nav-top__form {
  display: flex;
  align-items: center;
  width: 775px;
  height: 48px;
  background: #f8f8ff;
  border-radius: 8px;
}

.nav-top__form-search {
  margin-left: 20px;
}

.nav-top__input {
  width: 770px;
  border: none;
  background-color: transparent;
  outline: none;
  margin-left: 13px;
}

.nav-top__input::placeholder {
  font-family: "SF pro";
}

.nav-top__telegram-link {
  width: 161px;
  height: 48px;
  background: #34aadf;
  border-radius: 8px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-family: "SF pro";
}

.nav-top__telegram-link:hover {
  background: linear-gradient(
      0deg,
      rgba(29, 48, 104, 0.1),
      rgba(29, 48, 104, 0.1)
    ),
    #34aadf;
  transition: all 0.4s;
}

.nav-top__telegram-link:active {
  background: linear-gradient(
      0deg,
      rgba(29, 48, 104, 0.3),
      rgba(29, 48, 104, 0.3)
    ),
    #34aadf;
  transition: all 0.4s !important;
}

.nav-top__telegram-link span {
  margin-left: 8px;
}

.nav-top__telegram-link img {
  margin-left: 23px;
}

.nav-top__select {
  background: #f8f8ff;
  border-radius: 8px;
  width: 136px;
  height: 48px;
  border: none;
  outline: none;
}

.nav-top__select-value {
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: #1d3068;
  background: #ffffff;
  border-radius: 8px;
}

/* SITENAV */

.sitenav__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sitenav__list {
  display: flex;
  align-items: center;
  list-style: none;
  margin-left: -40px !important;
}

.sitenav__item {
  margin-left: 40px;
}

.sitenav__link-route {
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
 color: #1D3068;
  text-decoration: none;
  transition: all 0.4s;
}

.sitenav__link-route:hover {
  opacity: 0.6;
  transition: all 0.4s;
}

.sitenav__link-route:active {
  opacity: 0.4;
  transition: all 0.4s;
}

.sitenav__item-sun {
  display: flex;
  align-items: center;
}
.sitenav__item-usd {
  display: flex;
  align-items: center;
  margin-left: 90px;
}

.sitenav__item-sun span {
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #1d3068;
  margin-left: 6px;
}

.sitenav__item-usd span {
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: #1d3068;
}

.red{
    color: red !important;
}
</style>


