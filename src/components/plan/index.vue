<template>
    <div>
        <cheader :back="false"  :title="title" :showCinema="true"></cheader>
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
            title:'排期'
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


