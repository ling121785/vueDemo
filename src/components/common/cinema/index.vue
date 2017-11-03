<template>
    <div>
        <cheader :back="true"  :title="title" :showCinema="false"></cheader>
    </div>
</template>

<script>
import cheader from '../header'
export default {
    components: {
        cheader
    },
    data() {
        return {
            title:'选择城市'
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


