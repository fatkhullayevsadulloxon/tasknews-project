<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__container">
                <div class="footer__top">
                    <img src="../../assets/img/platina-logo.svg" alt="">
                    <ul class="footer__list">
                        <li class="footer__item">
                            <router-link class="footer__link" to="/about">Сайт ҳақида</router-link>
                        </li>
                        <li class="footer__item">
                            <router-link class="footer__link" to="/reklama">Реклама</router-link>
                        </li>
                        <li class="footer__item">
                            <router-link class="footer__link" to="/security">Маҳфийлик сиёсати</router-link>
                        </li>
                    </ul>
                </div>
                <div class="footer__body">
                    <ul class="footer__body-list">
                        <li class="footer__body-item">
                            <p class="footer__body-desc">© 2023 Platina.uz. Барча ҳуқуқлар ҳимояланган. «Platina.uz» сайтида жойланган маълумотлар муаллифнинг шахсий фикри. Сайтда жойланган ҳар қандай материалларни ёзма рухсатсиз фойдаланиш таъқиқланади.</p>
                        </li>
                        <li class="footer__body-item">
                            <p class="footer__body-desc">Ўзбекистон Республикаси Президенти Администрацияси ҳузуридаги Ахборот ва оммавий коммуникациялар агентлиги томонидан 02.12.2022 санасида №051412 сонли гувоҳнома билан ОАВ сифатида рўйхатга олинган</p>
                        </li>
                        <li class="footer__body-item">
                            <p class="footer__body-desc">Агарда хатолик топсангиз матннинг бир қисмини белгилаб Ctrl+Enter тугмаларини босинг</p>
                        </li>
                    </ul>
                    <hr>
                </div>
                <div class="footer__bottom">
                    <div class="footer__bottom-container">
                        <div>
                            <ul class="footer__bottom-list">
                                <li class="footer__bottom-item">
                                    <img class="footer__bottom-img" src="../../assets/img/footer-tg.svg" alt="">
                                </li>
                                <li class="footer__bottom-item">
                                    <img class="footer__bottom-img" src="../../assets/img/footer-insta.svg" alt="">
                                </li>
                                <li class="footer__bottom-item">
                                    <img class="footer__bottom-img" src="../../assets/img/footer-face.svg" alt="">
                                </li>
                                <li class="footer__bottom-item">
                                    <img class="footer__bottom-img" src="../../assets/img/footer-ytb.svg" alt="">
                                </li>
                                <li class="footer__bottom-item">
                                    <img class="footer__bottom-img" src="../../assets/img/footer-tik.svg" alt="">
                                </li>
                                <li class="footer__bottom-item">
                                    <img class="footer__bottom-img" src="../../assets/img/footer-twit.svg" alt="">
                                </li>
                            </ul>
                        </div>
                        <div class="footer__bottom-center">
                            <img src="../../assets/img/redmedia.svg" alt="">
                            <p>IT-компанияси томонидан ишлаб чиқилди</p>
                        </div>
                        <div>
                            <img src="../../assets/img/18+.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  background: #ffffff;
  border-top: 1px solid #d5ddf3;
  margin-top: 30px !important ;
}

.footer__top {
  display: flex;
  margin-top: 36px;
}

.footer__list {
  display: flex;
  align-items: center;
  list-style: none;
}

.footer__item {
  margin-left: 55px;
}

.footer__link {
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: #1d3068;
  text-decoration: none;
}

.footer__body {
  margin-top: 36px;
}

.footer__body-list {
  display: flex;
  align-items: top;
  justify-content: space-between;
  list-style: none;
}

.footer__body-desc {
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #737c98;
  max-width: 406px;
}

.footer__bottom-container{
    display: flex;
    align-items: center;
    justify-content: space-between
}

.footer__bottom {
  margin-top: 19px;
}

.footer__bottom-list {
  display: flex;
  align-items: center;
  list-style: none;
}

.footer__bottom-item {
  margin-left: 20px;
}

.footer__bottom-center {
  display: flex;
}

.footer__bottom-center p {
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #737c98;
  margin-left: 10px
}
</style>

