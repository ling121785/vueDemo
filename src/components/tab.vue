<template>
    <div class="home-container">
        <mt-tab-container class="page-container" v-model="selected">
            <mt-tab-container-item id="home" class='page-container'>
                <home></home>
            </mt-tab-container-item>
            <mt-tab-container-item id="plan">
                <plan></plan>
            </mt-tab-container-item>
            <mt-tab-container-item id="store">
                <store></store>
            </mt-tab-container-item>
            <mt-tab-container-item id="user">
                <user></user>
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-tabbar v-model="selected" fixed class="tab">
            <mt-tab-item id="home">
                <img slot="icon" src="../assets/home/sy2.png" v-if="selected=='home'" />
                <img slot="icon" src="../assets/home/sy.png" v-else/> 首页
            </mt-tab-item>
            <mt-tab-item id="plan">
                <img slot="icon" src="../assets/home/pq2.png" v-if="selected=='plan'" />
                <img slot="icon" src="../assets/home/pq.png" v-else/> 排期
            </mt-tab-item>
            <mt-tab-item id="store">
                <img slot="icon" src="../assets/home/mp2.png" v-if="selected=='store'" />
                <img slot="icon" src="../assets/home/mp.png" v-else/> 卖品
            </mt-tab-item>
            <mt-tab-item id="user">
                <img slot="icon" src="../assets/home/me2.png" v-if="selected=='user'" />
                <img slot="icon" src="../assets/home/me.png" v-else/> 我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
import home from './home'
import plan from './plan'
import store from './store'
import user from './user'
export default {
    name: 'tab',
    components: {
        home, plan, store, user
    },
    data() {
        return {
            selected: 'home'
        }
    }
}
</script>

<style lang="less">
.home-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    .mint-tab-container-wrap {
        height: 100%;
    }
    .page-container {
        width: 100%;
        flex: 1;
        height: 100%;
    }
}
</style>


