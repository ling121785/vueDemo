<template>
    <div>
        <cheader :back="false" :selected="selected" :navbarArray="navbarArray" :showCinema="true" @selectedChange='selectedChange'></cheader>
    </div>
</template>

<script>
import cheader from '../../components/common/header'
export default {
    components: {
        cheader
    },
    data() {
        return {
            navbarArray: ["小吃", "套票"],
            selected: '小吃'
        }
    },
    methods: {
        selectedChange: function(item) {
            this.selected = item
        },
    }
}
</script>

<style lang="less">

</style>


