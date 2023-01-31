<template>
    <div>
        <div class="back">
            <last-news :lastNewsRight="lastNewsRight"/>
            <editor-selec :editorSelec="editorSelec"/> 
            <sport/>
            <Article :article2="article2" :article="article"/>
            <all-news :allNews="allNews"/>
            <biznes :biznes="biznes"/>
        </div>
    </div>
</template>


<script>
import LastNews from "../LastNews/LastNews.vue"
import EditorSelec from "../EditorSelec/EditorSelec.vue"
import Sport from "../Sport/Sport.vue"
import Article from "../Article/Article.vue"
import AllNews from "../AllNews/AllNews.vue"
import Biznes from "../Biznes/Biznes.vue"
export default {
    name: "HomePage",
    components: {
        LastNews,
        EditorSelec,
        Sport,  
        Article,
        AllNews,
        Biznes
    },
    data() {
        return {
            lastNewsRight: [
                {id: 0, img: require("../../assets/img/fransiya-avto.jpg"), title: "Францияда 700 га яқин машина ёқиб юборилди",desc1: "Жаҳон", desc2: "2 кун олдин" },
                {id: 1, img: require("../../assets/img/xavo-malumot.jpg"), title: "Ўзбекистонда 3 январь куни кузатиладиган об-ҳаво маълумоти эълон қилинди ҳаво маълумоти эълон қилинди", desc1: "Жамият",  desc2: "2 кун олдин"}
            ],
            editorSelec: [
                {img: require("../../assets/img/ambrol.jpg"), title: "“Амбронол” сиропи ҳам сотувдан олинмоқда", desc1: "Ўзбекистон", desc2: "2 кун олдин"},
                {img: require("../../assets/img/vacansy.jpg"), title: "“Вакант лавозимларга энг кўп очиқ танлов ўтказган ташкилотлар маълум қилинди", desc1: "Ўзбекистон", desc2: "2 кун олдин"},
                {img: require("../../assets/img/dok.jpg"), title: "Тизимда жуда катта коррупцион схема авж олиб кетган” — Зарифбой Ибодуллаев", desc1: "Ўзбекистон", desc2: "2 кун олдин"},
                {img: require("../../assets/img/kalendar.jpg"), title: "2023 йилдаги қўшимча дам олиш кунлари...", desc1: "Ўзбекистон", desc2: "2 кун олдин"},
            ],
            article: [
                {img: require("../../assets/img/oila.jpg"), title: "Оиладаги зўравонлик, аёллар ўлими, етим қолган болалар…", desc1: "Ўзбекистон", desc2: "2 кун олдин"},
                {img: require("../../assets/img/madaniyat.jpg"), title: "Маданият вазирлиги ҳузуридаги палата хусусий телерадиоканаллар даромадидан...", desc1: "Ўзбекистон", desc2: "2 кун олдин"},
                {img: require("../../assets/img/isroil.jpg"), title: "Ўзбекистон Исроилдан авокадо импорти ҳажмини оширди", desc1: "Ўзбекистон", desc2: "2 кун олдин"},
            ],
            article2: [
                {img: require("../../assets/img/hokim.jpg"), title: "Ғофуржон Мирзаев Сирдарё вилояти ҳокимлигидан кетди", desc1: "Ўзбекистон", desc2: "2 кун олдин"},
                {img: require("../../assets/img/samarqand.jpg"), title: "Самарқандда БМТ Бутунжаҳон туризм ташкилоти сессияси ўтказилади", desc1: "Ўзбекистон", desc2: "2 кун олдин"},
                {img: require("../../assets/img/dollar.jpg"), title: "Сурхондарёда 1 гектар ерни 100 минг долларга сотмоқчи бўлган", desc1: "Ўзбекистон", desc2: "2 кун олдин"},
            ],
            allNews: [
                {img: require("../../assets/img/sinf.jpg"), title: "Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди", desc1: "Жамият", desc2: "2 кун олдин"},
                {img: require("../../assets/img/modrich.jpg"), title: "Модрич Саудия клубининг таклифини рад қилди", desc1: "Спорт", desc2: "2 кун олдин"},
                {img: require("../../assets/img/astana.jpg"), title: "Тошкентдан Олмаотага учган самолёт бўйича қўшимча маълумот берилди", desc1: "Жамият", desc2: "2 кун олдин"},
                {img: require("../../assets/img/fransiya-avto.jpg"), title: "Францияда 700 га яқин машина ёқиб юборилди", desc1: "Жаҳон", desc2: "2 кун олдин"},
                {img: require("../../assets/img/xavo-malumot.jpg"), title: "Ўзбекистонда 3 январь куни кузатиладиган об-ҳаво маълумоти эълон қилинди", desc1: "Жамият", desc2: "2 кун олдин"},
                {img: require("../../assets/img/turkiya.jpg"), title: "Туркияда кўплаб авиарейслар туман бекор қилинди", desc1: "Жаҳон", desc2: "2 кун олдин"},
                {img: require("../../assets/img/toshkent.jpg"), title: "Тошкентдаги 31 та олигоҳда дарс вақти ўзгаради", desc1: "Жамият", desc2: "2 кун олдин"},
                {img: require("../../assets/img/ayol.jpg"), title: "Қайси ҳудудда аёл раҳбарлар бошқарувидаги корхоналар сони кўп?", desc1: "Жамият", desc2: "2 кун олдин"},
                {img: require("../../assets/img/karta.jpg"), title: "Андижонда сотувчи мижозининг пластик картасидан пул ўғирлади", desc1: "Жамият", desc2: "2 кун олдин"},
                {img: require("../../assets/img/messi.jpg"), title: "Саудия клуби Месси исми туширилган либосларни сотувга чиқарди", desc1: "Спорт", desc2: "2 кун олдин"},
                {img: require("../../assets/img/messi.jpg"), title: "Саудия клуби Месси исми туширилган либосларни сотувга чиқарди", desc1: "Спорт", desc2: "2 кун олдин"},
                {img: require("../../assets/img/messi.jpg"), title: "Саудия клуби Месси исми туширилган либосларни сотувга чиқарди", desc1: "Спорт", desc2: "2 кун олдин"},
            ],
             biznes: [
                {img: require("../../assets/img/biznes.jpg"), title: "Янги Меҳнат кодексига кўра, қатор ходимлар ишга қабул қилинганда дастлабки синов белгиланмайди", desc1: "Ўзбекистон", desc2: "2 кун олдин"},
                {img: require("../../assets/img/biznes.jpg"), title: "Янги Меҳнат кодексига кўра, қатор ходимлар ишга қабул қилинганда дастлабки синов белгиланмайди", desc1: "Ўзбекистон", desc2: "2 кун олдин"},
                {img: require("../../assets/img/biznes.jpg"), title: "Янги Меҳнат кодексига кўра, қатор ходимлар ишга қабул қилинганда дастлабки синов белгиланмайди", desc1: "Ўзбекистон", desc2: "2 кун олдин"},
                {img: require("../../assets/img/biznes2.jpg"), title: "Янги Меҳнат кодексига кўра, қатор...", desc1: "Ўзбекистон", desc2: "2 кун олдин"},
            ],
        }
    },
}
</script>

<style scoped>
    .back{
       background: #F8F8FF;

    }
</style>
