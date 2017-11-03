<template>
    <div class="home-container">
        <cheader :back="false" :navbarArray="navbarArray" :showCinema="true" @selectedChange='selectedChange'></cheader>
        <mt-loadmore :top-method="pullToRefresh" :bottom-method="allLoaded?null:loadMore" :bottom-all-loaded="allLoaded" ref="loadmore" style="height:100%">
            <mt-swipe class="banner">
                <mt-swipe-item>1</mt-swipe-item>
                <mt-swipe-item>2</mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item>
            </mt-swipe>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="热映">
                    <div class="bg-white padding-lr-normal">
                        <div class="film-item padding-tb-small">
                            <div class="left">
                                <img src="" class="img margin-r-small"></img>
                            </div>
                            <div class="right">
                                <div class="title t-black f16">
                                    <span class="flex ellipsis">异性：契约和大家卡空间里大家爱看了赶紧来打卡机过来看大家爱劳动纠纷拉进来看大家</span>
                                    <div class=" t-orange f14">8.7
                                        <span class="f12">万人想看</span>
                                    </div>
                                </div>
                                <div class="describe t-black f12">天堂是假象，险象险中还</div>
                                <div class="actor t-gay f12">迈克尔/约翰</div>
                                <mt-button class="button f12" type="danger">购票</mt-button>
                            </div>
                        </div>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="待映">
                    <div class="bg-white padding-lr-normal">
                        <div class="film-item padding-tb-small">
                            <div class="left">
                                <img src="" class="img margin-r-small"></img>
                            </div>
                            <div class="right">
                                <div class="title t-black f16">
                                    <span class="flex ellipsis">异性：契约和大家卡空间里大家爱看了赶紧来打卡机过来看大家爱劳动纠纷拉进来看大家</span>
                                    <div class=" t-orange f14">8.7
                                        <span class="f12">万人想看</span>
                                    </div>
                                </div>
                                <div class="describe t-black f12">天堂是假象，险象险中还</div>
                                <div class="actor t-gay f12">迈克尔/约翰</div>
                                <mt-button class="button f12" type="danger">关注</mt-button>
                            </div>
                        </div>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </mt-loadmore>
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
            navbarArray: ["热映", "待映"],
            selected: '热映',
            allLoaded: true //数据是否全部加载完毕
        }
    },
    methods: {
        selectedChange: function(item) {
            this.selected = item
        },
        pullToRefresh: function() {
            console.log("pullToRefresh")
        },
        loadMore: function() {
            console.log("loadMore")
        }
    }
}
</script>

<style lang="less">
.home-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .banner {
        width: 100%;
        height: 126px;
    }
    .film-item {
        border-bottom: 1px solid #e8e8e8;
        display: flex;
        &:last-child {
            border-bottom: 1px solid transparent;
        }
        .left {
            position: relative;
            .img {
                width: 64px;
                height: 84px;
            }
        }
        .right {
            position: relative;
            display: flex;
            flex: 1;
            flex-direction: column;
            text-align: left;
            overflow: hidden;
            .title {
                display: flex;
                flex-direction: row;
                overflow: hidden;
                flex: 1.5;
            }
            .describe {
                flex: 1;
            }
            .actor {
                flex: 0.8;
            }
            .button {
                position: absolute;
                right: 0px;
                bottom: 0px;
                height: 29px;
                width: 49px;
            }
        }
    }
}
</style>


