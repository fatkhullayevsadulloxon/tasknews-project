<template>
    <div class="back">
        <single-school/>
    </div>
</template>

<script>
import SingleSchool from "../SingleSchool/SingleSchool.vue"
export default {
    name: "SinglePage",
    components :{
        SingleSchool
    }
}
</script>

<style scoped>
    .back{
        background: #F8F8FF;
    }
</style>
