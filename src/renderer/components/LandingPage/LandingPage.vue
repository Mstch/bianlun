<!--suppress ALL -->
<template>
    <div v-contextmenu:allmenu id="bianlun">
        <v-contextmenu ref="contextmenu">
            <v-contextmenu-item>菜单</v-contextmenu-item>
        </v-contextmenu>

        <v-contextmenu ref="allmenu">
            <v-contextmenu-item>菜单</v-contextmenu-item>
            <v-contextmenu-item>菜单</v-contextmenu-item>
            <v-contextmenu-item>
                <router-link :to="{name: 'theme'}">退出</router-link>
            </v-contextmenu-item>
        </v-contextmenu>
        <el-row class="title" type="flex" justify="center">
            <span @click="precourse"><i :class="currentCourseIndex==0?'disable':''" class="el-icon-d-arrow-left"></i>&nbsp;&nbsp;</span>
            <span>{{courses[currentCourseIndex].name}}</span>
            <span @click="nextcourse">&nbsp;&nbsp;<i  :class="currentCourseIndex==courses.length-1?'disable':''"  class="el-icon-d-arrow-right"></i></span>
        </el-row>
        <div class="main">
            <el-row type="flex" justify="space-between">
                <el-col v-contextmenu:contextmenu ref="pkZheng" :span="4">
                    <span class="name pkZheng">{{courses[currentCourseIndex].pk[0]}}</span>
                    <img width="100%" src="~@/assets/imgs/ren.jpg"/>
                </el-col>
                <el-col ref="time" :span="12">
                    <span class="time pkZheng">{{Math.floor(time/60)}}:{{time%60}}</span>
                </el-col>
                <el-col ref="pkFan" :span="4"><span class="pk">{{courses[currentCourseIndex].pk[1]}}</span>
                    <img width="100%" src="~@/assets/imgs/ren.jpg"/></el-col>
            </el-row>
        </div>
        <el-row type="flex" justify="center">
            <el-col :span="4">
                <el-button class="rolebtn">正方</el-button>
            </el-col>
            <el-col :span="4">
                <el-button class="rolebtn">反方</el-button>
            </el-col>
        </el-row>
        <el-row class="bottom-operate" type="flex" justify="space-between">
            <el-button @click="switchStatus" class="pausebtn" style="height:50px" :span="2">
                {{status=='over'?'重新开始':status=='pause'?'继续':'暂停'}}
            </el-button>
            <el-col :span="3">
                <qrcode-vue :value="qrcode.value" :size="qrcode.size" level="H"></qrcode-vue>
            </el-col>
        </el-row>
    </div>
</template>
<style>
    canvas {
        width: 80px;
    }

    #bianlun {
        color: #fff;
        text-align: center;
        height: 100%;
        padding: 10px;
    }

    .title * {
        font-size: 1.5rem !important;
    }

    .main {
        padding: 10px;
        min-height: 65%;
    }

    .main img {
        margin-top: 10px;
        border: 2px solid #fff;
        box-shadow: 0 0 2px #000;
        position: relative;
    }
    .disable{
        color:#aaa;
    }

    .time {
        color: #f1a277;
        font-size: 15rem;
        font-weight: 700;
        text-shadow: -3px -3px 0 #000,
        3px -3px 0 #000,
        -3px 3px 0 #000,
        3px 3px 0 #000;
    }

    .rolebtn,
    .pausebtn {
        font-size: 1.5rem !important;
        color: #fff !important;

        background: rgba(60, 0, 150, 0.3) !important;
    }

    .el-header span {
        font-size: 1.5rem;
    }


    a {
        text-decoration: none;
    }

    .right-menu a {
        padding: 2px;
    }

    .right-menu a:hover {
        background: #42b983;
    }

    .bottom-operate {
        position: absolute !important;
        height: 120px;
        width: 100%;
        bottom: 0;
        line-height: 120px;
    }
</style>

<script>
    import ls from "../util/listFiles.js";

    export default {
        data() {
            return {
                status: 'ready',
                interval: {},
                qrcode: {
                    value: "测试链接，尚未部署",
                    size: 100
                },
                time: 20,
                currentCourseIndex:0,
                backgroundImgUrl: "test.jpg"
            };
        },
        created() {
            console.log('setInterval:', setInterval(() => {
            }, 1000).constructor, '\n', 'window.setInterval:', window.setInterval(() => {
            }, 1000));
            let self = this;
            self.start();
        },
        mounted() {
        },
        methods: {
            precourse(){
                if(this.currentCourseIndex==0) return;
                else this.currentCourseIndex--;
            },
            nextcourse(){
                if(this.currentCourseIndex==this.courses.length-1) return;
                else this.currentCourseIndex++;
            },
            switchStatus() {
                if (this.status == 'over' || this.status == 'pause') this.start();
                else if (this.status == 'running') this.pause();
            },
            start() {
                let self = this;
                console.log('定时器开始了，目前状态是：', self.status);
                if (self.status == 'over') self.time = 20;
                self.interval = window.setInterval(function () {
                    console.log(self.interval);
                    self.time = self.time - 1;
                    if (self.time <= 0) self.timeover();
                }, 100);
                self.status = 'running';
            },
            timeover() {
                let self = this;
                window.clearInterval(self.interval);
                this.status = 'over';
            },
            pause() {
                let self = this;
                window.clearInterval(self.interval);
                this.status = 'pause';
            }
        }
    };
</script>