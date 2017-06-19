<template>
    <aside class="sidebar">
        <div class="sidebar-container">
            <div class="sidebar-header">
                <div class="brand">
                    <div class="logo" v-on:click="test($event)">
                        <img src="../assets/104.png"></img>
                        <span class="l l1"></span> <span class="l l2"></span> <span class="l l3"></span> <span class="l l4"></span> <span class="l l5"></span>
                    </div> SMS-Admin </div>
            </div>
            <nav class="menu">
                <ul class="nav metismenu" id="sidebar-menu">
                    <li class="active"  v-on:click="active($event)">
                        <a>
                            <i class="fa fa-home"></i>儀表板
                        </a>
                    </li>
                    <li  v-on:click="active($event)">
                        <a>
                            <i class="fa fa-th-large"></i> 項目顯示
                            <i class="fa arrow"></i>
                        </a>
                        <ul>
                            <li> <a href="items-list.html">
        								Items List
        							</a> </li>
                            <li> <a href="item-editor.html">
        								Item Editor
        							</a> </li>
                        </ul>
                    </li>
                    <li  v-on:click="active($event)">
                        <a>
                            <i class="fa fa-bar-chart"></i> 圖表
                            <i class="fa arrow"></i>
                        </a>
                        <ul>
                            <li> <a href="charts-flot.html">
        								Flot Charts
        							</a> </li>
                            <li> <a href="charts-morris.html">
        								Morris Charts
        							</a> </li>
                        </ul>
                    </li>
                    <li   v-on:click="active($event)">
                        <a>
                            <i class="fa fa-table"></i> 表格
                            <i class="fa arrow"></i>
                        </a>
                        <ul>
                            <li> <a href="static-tables.html">
        								Static Tables
        							</a> </li>
                            <li> <a href="responsive-tables.html">
        								Responsive Tables
        							</a> </li>
                        </ul>
                    </li>
                    <li   v-on:click="active($event)">
                        <router-link to="demo-form"> <i class="fa fa-pencil-square-o"></i>表單</router-link>
                    </li>
                    <li   v-on:click="active($event)">
                        <a>
                            <i class="fa fa-desktop"></i> UI元素
                            <i class="fa arrow"></i>
                        </a>
                        <ul>
                            <li> 

                                 <router-link to="demo-button"> Buttons</router-link>

                            </li>
                            <li> <a href="cards.html">
        								Cards
        							</a> </li>
                            <li> <a href="typography.html">
        								Typography
        							</a> </li>
                            <li> <a href="icons.html">
        								Icons
        							</a> </li>
                            <li> <a href="grid.html">
        								Grid
        							</a> </li>
                        </ul>
                    </li>
                    <li   v-on:click="active($event)">
                        <a>
                            <i class="fa fa-file-text-o"></i> 頁面
                            <i class="fa arrow"></i>
                        </a>
                        <ul>
                            <li> <a href="login.html">
        								Login
        							</a> </li>
                            <li> <a href="signup.html">
        								Sign Up
        							</a> </li>
                            <li> <a href="reset.html">
        								Reset
        							</a> </li>
                            <li> <a href="error-404.html">
        								Error 404 App
        							</a> </li>
                            <li> <a href="error-404-alt.html">
        								Error 404 Global
        							</a> </li>
                            <li> <a href="error-500.html">
        								Error 500 App
        							</a> </li>
                            <li> <a href="error-500-alt.html">
        								Error 500 Global
        							</a> </li>
                        </ul>
                    </li>
                     <li  >
                     <router-link to="test"> <i class="fa fa-home"></i>Route 測試</router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <footer class="sidebar-footer">
            <ul class="nav metismenu" id="customize-menu">
                <li>
                    <ul>
                        <li class="customize">
                            <div class="customize-item">
                                <div class="row customize-header">
                                    <div class="col-xs-4"> </div>
                                    <div class="col-xs-4"> <label class="title">fixed</label> </div>
                                    <div class="col-xs-4"> <label class="title">static</label> </div>
                                </div>
                                <div class="row hidden-md-down">
                                    <div class="col-xs-4"> <label class="title">Sidebar:</label> </div>
                                    <div class="col-xs-4"> <label>
        				                        <input class="radio" type="radio" name="sidebarPosition" value="sidebar-fixed" >
        				                        <span></span>
        				                    </label> </div>
                                    <div class="col-xs-4"> <label>
        				                        <input class="radio" type="radio" name="sidebarPosition" value="">
        				                        <span></span>
        				                    </label> </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-4"> <label class="title">Header:</label> </div>
                                    <div class="col-xs-4"> <label>
        				                        <input class="radio" type="radio" name="headerPosition" value="header-fixed">
        				                        <span></span>
        				                    </label> </div>
                                    <div class="col-xs-4"> <label>
        				                        <input class="radio" type="radio" name="headerPosition" value="">
        				                        <span></span>
        				                    </label> </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-4"> <label class="title">Footer:</label> </div>
                                    <div class="col-xs-4"> <label>
        				                        <input class="radio" type="radio" name="footerPosition" value="footer-fixed">
        				                        <span></span>
        				                    </label> </div>
                                    <div class="col-xs-4"> <label>
        				                        <input class="radio" type="radio" name="footerPosition" value="">
        				                        <span></span>
        				                    </label> </div>
                                </div>
                            </div>
                            <div class="customize-item">
                                <ul class="customize-colors">
                                    <li> <span class="color-item color-red" data-theme="red"></span> </li>
                                    <li> <span class="color-item color-orange" data-theme="orange"></span> </li>
                                    <li> <span class="color-item color-green active" data-theme=""></span> </li>
                                    <li> <span class="color-item color-seagreen" data-theme="seagreen"></span> </li>
                                    <li> <span class="color-item color-blue" data-theme="blue"></span> </li>
                                    <li> <span class="color-item color-purple" data-theme="purple"></span> </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <a href="">
                        <i class="fa fa-cog"></i> Customize
                    </a>
                </li>
            </ul>
        </footer>
    </aside>
</template>

<script>
    import jquery from 'jquery';
    export default {
        name: 'VAside',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted:function(){
            console.log('hello mounted!!');
            $("#sidebar-menu").on('clean.active',function(e){
                
                $('#sidebar-menu li').removeClass('active');
            });
        },
        methods:{
            test:function(e){
                console.log(e);
                console.log(this.msg);
            },
            active:function(e){
                console.log(e.target.parentNode.parentNode);               
                $(e.target.parentNode.parentNode).trigger("clean.active");
                $(e.target.parentNode).addClass('active');

            }
        }
    }
</script>