<template>
  <div id="phoneBar" class="phonebar">1111111111111111111111111</div>
</template>
<script>
export default {
  name: 'PhoneBar',
    data() {
        return {
            phoneBar: null
        }
    },
    methods: {
        initPhoneBar() {
            if (this.phoneBar) {
                this.phoneBar.destroy();
            }
            // eslint-disable-next-line no-undef
            this.phoneBar = new PhoneBar({
                renderTo: 'phoneBar',
                proxyUrl: 'ws://cc.95ykf.com:8787/websocket',
                sipServerUrl: 'cc.95ykf.com:5188',
                startupSoftPhone: true,
                tid: '10013',
                thisDN: '1002',
                agentID: '1002',
                password: '666666',
                onAgentStatusChange: function (newState, beforeValue) {console.log('坐席状态由[' + beforeValue + ']变更为[' + newState+']');},
                onScreenPopup: function (lineState, callInfo) {console.log('弹屏事件：', lineState, callInfo);},
                onRinging: function (callInfo) {console.log('振铃事件：', callInfo);},
                onTalking: function (callInfo) {console.log('接通事件：', callInfo);},
                onHangup: function (callInfo) {console.log('挂机事件：', callInfo);},
                onLinkDisconnected: function() {location.href = 'login.html'},
            });
        }

    },
    mounted() {
        this.initPhoneBar();
    }
}
</script>

<style scoped>
.phonebar {
    width: 100%;
    height: 80px;
    background-color: chartreuse;
    margin-top: 50px;
}
</style>
