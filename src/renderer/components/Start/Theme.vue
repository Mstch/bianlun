<!--suppress ALL -->
<template>
    <div id="theme">
        <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="10">
                <span class="label">正方名称</span>
                <el-input
                        type="textarea"
                        :rows="8"
                        placeholder="请输入内容"
                        v-model="pkZheng.name">
                </el-input>
            </el-col>
            <el-col :span="10">
                <span class="label">反方名称</span>
                <el-input
                        type="textarea"
                        :rows="8"
                        placeholder="请输入内容"
                        v-model="pkFan.name">
                </el-input>
            </el-col>
            <el-col :span="10">
                <span class="label">正方观点</span>
                <el-input
                        type="textarea"
                        :rows="8"
                        placeholder="请输入内容"
                        v-model="pkZheng.view">
                </el-input>
            </el-col>
            <el-col :span="10">
                <span class="label">正方名称</span>
                <el-input
                        type="textarea"
                        :rows="8"
                        placeholder="请输入内容"
                        v-model="pkFan.view">
                </el-input>
            </el-col>
            <el-button @click="start" :disabled="isComplete" class="startbtn">
                进入辩论赛
            </el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Theme",
        data() {
            return {
                isComplete: false,
                pkZheng: {
                    name: '',
                    img: '',
                    view: ''
                },
                pkFan: {
                    name: '',
                    img: '',
                    view: ''
                }
            }
        },
        created() {
            let self = this;
        },
        methods: {
            start() {
                let self = this;
                self.pkZheng.name = self.pkZheng.name.trim();
                self.pkFan.name = self.pkZheng.name.trim();
                self.pkZheng.view = self.pkZheng.view.trim();
                self.pkFan.view = self.pkFan.view.trim();
                if (self.pkZheng.name == '' || self.pkFan.name == '' || self.pkZheng.view == '' || self.pkFan.view == '') {
                    self.$confirm('尚未完成填写，无法开始辩论', {
                        type: 'error',
                        center: true
                    })
                } else {
                    self.globalpk[0]=self.pkZheng;
                    self.globalpk[1]=self.pkFan;
                    this.$router.push({name: 'landing-page'});
                }
            }
        }
    }
</script>

<style lang="scss">
    #theme {
        .row-bg {
            flex-wrap: wrap;
        }

        .el-col {
            padding-bottom: 10px;
            margin-top: 10px;
            background: rgba(0, 0, 0, .4);

            .label {
                color: #fff;
                display: block;
                text-align: center;
                padding: 10px;
            }

            .el-textarea__inner {
                width: 80%;
                margin: 0 auto;
                color: #000;
                max-height: 8rem;
            }
        }

        .startbtn {
            width: 15rem;
            background: url('~@/assets/imgs/background_0.jpg') !important;
            background-size: cover !important;
            margin-top: 1.5rem !important;
            display: inline-block !important;
            font-size: 1.5rem !important;
            padding: 0 !important;

            span {
                width: 100%;
                display: block;
                padding-top: 1rem;
                padding-bottom: 1rem;
                background: rgba(250, 0, 0, .3);
                box-shadow: 0 0 5px rgba(200, 200, 200, 1);
                color: #fff;
                font-weight: 700;

                &:hover {
                    height: height+2rem;
                }
            }

            &:hover {
                height: 4rem;
                width: 16rem;
            }
        }


        .bg-purple {
            background: #d3dce6;
        }

        .bg-purple-light {
            background: #e5e9f2;
        }

        .grid-content {
            border-radius: 4px;
            min-height: 36px;
        }
    }
</style>