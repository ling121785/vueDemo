<template>
    <div class="head-container padding-lr-normal">
        <img @click="gotoBack()" src="../../assets/common/back.png" class="leftImg" v-if="back" />
        <div class="title f16" v-if="title">{{title}}</div>
        <div v-if="navbarArray" class="navbar">
            <div class="navbar-item " :class="item==itemSelected?'is-selected':''" v-for="item in navbarArray" :key="item" @click="navbarClick(item)">{{item}}</div>
        </div>
        <div class="cinema" v-if="showCinema">
            <div class="cinemaName f14" @click="chooseCinema()">{{cinema?cinema.cinemaName||'':''}} ></div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    props: {
        back: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        showCinema: {
            type: Boolean,
            default: false
        },
        navbarArray: {
            type: Array,
            default: function() {
                return null
            }
        },
        selected: {
            type: String,
            default: function() {
                if (this.navbarArray && this.navbarArray.length > 0)
                    return this.navbarArray[0]
                else
                    return ''
            }
        }
    },
    data() {
        return {
            itemSelected: this.selected
        }
    },
    computed: {
        ...mapState('app', [
            'cinema'
        ]),
    },
    methods: {
        navbarClick: function(item) {
            this.itemSelected = item
            this.$emit('selectedChange', item)
        },
        chooseCinema: function() {
            this.$router.push({ path: 'cinema', params: { type: 0 } })
        },
        gotoBack: function() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less">
.head-container {
    height: 48px;
    background: #dc3c38;
    color: white;
    justify-content: center;
    overflow: hidden;
    display: flex;
    flex-direction: center;
    align-items: center;
    position: relative;
    .leftImg {
        width: 20px;
        height: 20px;
        position: absolute;
        margin-left: 15px;
        margin-right: 15px;
        left: 0;
        z-index: 10;
    }
    .title {
        position: absolute;
        justify-content: center;
        text-align: center;
        display: flex;
        align-items: center;
        width: 100%;
    }
    .navbar {
        position: absolute;
        justify-content: center;
        text-align: center;
        display: flex;
        align-items: center;
        border: 0.5px solid white;
        border-radius: 4px;
        padding: 1px;
        height: 30px;
        .navbar-item {
            color: white;
            background: #dc3c38;
            padding: 0px 10px;
            height: 100%;
            justify-content: center;
            display: flex;
            align-items: center;
            font-size: 15px;
        }
        .navbar-item.is-selected {
            color: #dc3c38;
            background: white;
            border-bottom: transparent;
        }
    }
    .cinema {
        position: absolute;
        margin-left: 15px;
        margin-right: 15px;
        right: 0;
        z-index: 10;
        text-align: right;
        .cinemaName {}
    }
}
</style>


