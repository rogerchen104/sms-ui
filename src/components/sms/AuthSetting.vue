<template>
    <article class="content forms-page">
        <div class="title-block">
            <h3 class="title"><i class="fa fa-user" aria-hidden="true"></i> 帳號權限定 </h3>
        </div>
        <section class="section">
  
        
            <div class="col-xl-12 ">
                   <div class="card card-default">
                        <div class="card-block">

                <div class="row">
                    <div  class="col-md-12 text-md-right" >
                        <b-btn class="btn btn-info"   v-b-modal.modal1><i class="fa fa-plus" aria-hidden="true"></i>
                        新增</b-btn>
                    </div>
                </div>
    
                <!-- Main table element -->
                <b-table striped bordered show-empty small head-variant hover :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter">
                     <template slot="index" scope="data">
                        <!-- A Virtul column -->
                        {{data.index + 1}}
                    </template>
                   
                    <template slot="user" scope="item">
                            {{item.value.first}}. {{item.value.last}}
                    </template>
                    <template slot="updateInfo" scope="item">
                         {{item.value.date}}
                    </template>
                    <template slot="createInfo" scope="item">
                        <div style="text-align:center"> {{item.value.date}} <br/> {{item.value.userName}}</div>
                    </template>
                    <template slot="actions" scope="item">
                        <b-btn size="" @click="details(item.item)"  >
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i> 
                        </b-btn>
                         
                    </template>
                 </b-table> 
                 <div class="justify-content-center my-1">
                    <b-pagination size="md" :total-rows="items.length" :per-page="perPage" v-model="currentPage" />
                </div>
            </div>   
            </div>
            </div> 
        </div> 
      
        </section>
       <!-- Modal -->
         <!-- Modal Component -->
        <b-modal id="modal1" title="Submit your name" @ok="submit" @shown="clearName">
            
            <modal-title>Hello</modal-title>
            <form @submit.stop.prevent="submit">
            <b-form-input type="text" placeholder="Enter your name" v-model="name"></b-form-input>
            </form>

        </b-modal>

   
   
   
   
   
    
   
   
    </article>

</template>

<script>
    export default {
        name: 'VbDemoComponentPage',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                 items: [
                    {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }, createInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, 
                     {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }, createInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }, createInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }, createInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }, createInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }, createInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }, createInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }, createInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }, createInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }, createInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }, createInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }, createInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }, createInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }, createInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }, createInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }, createInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }, {
                        isActive: true, 
                        age: 40,
                        user: { first: 'Roger', last: 'Chen' },
                        updateInfo:{
                            date:"2016/12/04 11:20",
                            userName:"陳昭竹"
                        }
                    }
                    ],
                    fields: {
                    index:{
     
                        sortable: true,
                        thClass: "black-header",
                        thStyle:"width:2%",
                         tdClass:"align-middle"

                    },
                    user:{
                        label :"人員",
                        sortable: true,
                         thClass: "black-header",
                          thStyle:"width:20%",
                           tdClass:"align-middle"
                    },
                    updateInfo:{
                        label:"修改資料",
                        sortable: true,
                        thClass: "black-header",
                          thStyle:"width:20%",
                           tdClass:"align-middle"
                    },
                    createInfo:{
                        label:"建立資料",
                         thClass: "black-header",
                           thStyle:"width:20%",
                           tdClass:"align-middle"
                    },
                    actions: {
                        label: '活動',
                        thClass: "black-header",
                         thStyle:"width:20%",
                         tdClass:"align-middle"
                    }
                    },
                    currentPage: 1,
                    perPage: 10,
                    filter: null
                }
            
        },
        methods:{
            submit(e) {
                if (!this.name) {
                alert('Please enter your name');
                return e.cancel();
                }

                this.names.push(this.name);
                this.name = '';
            }

        }
    }
</script>
<style>
    .black-header{
        color: #fff;
        background-color: #4f5f6f;
        font-weight:200;
    }
</style>
