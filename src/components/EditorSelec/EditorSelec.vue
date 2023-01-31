<template>
    <div class="editor-selec">
        <div class="container editor-selec__container">
           <div class="flex">
            <div class="flex-2">
                 <img class="flex__img-1" src="../../assets/img/last-news-icon.svg" alt="" width="14" height="14">
                <h3 class="flex__heading">Муҳаррир танлови</h3>
            </div>
             <div>
                <img class="flex__img-1" src="../../assets/img/Arrow-left.svg" alt="" width="36" height="36">
                <img class="flex__img-1" src="../../assets/img/Arrow-right.svg" alt="" width="36" height="36">
             </div>
           </div>
            <div class="editor-selec__list-container">
                <router-link class="link" v-for="editor in editorSelec" :key="editor.id" to="/id/3">
                    <div class="editor-selec__list">
                    <img v-bind:src="editor.img" alt="">
                    <h3>{{editor.title}}</h3>
                    <div class="flex-2">
                        <p class="flex-2__heading">{{editor.desc1}}</p>
                        <p class="flex-2__title">{{editor.desc2}}</p>
                    </div>
                </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "EditorSelec",
  props: {
    editorSelec: {
        type: Array
    }
  }
};
</script>

<style scoped>
.editor-selec {
  background: #f8f8ff;
  margin-top: 30px;
}

.editor-selec__container {
  width: 1255px;
  height: 425px;
  background: #ffffff;
  border-radius: 16px;
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

.flex-2 h3 {
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #1d3068;
  margin-left: 10px;
}

.editor-selec__list h3 {
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #1d3068;
  max-width: 360px;
}

.editor-selec__list-container {
  display: flex;
}

.link {
  text-decoration: none;
}

.flex-2__heading {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #2da85b;
}

.flex-2__title {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #a9aabc;
  margin-left: 20px
}
</style>
