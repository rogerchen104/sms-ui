<template>
    <article class="content cards-page">    
        <div class="title-block">
            <h3 class="title"> Vue+Bootstrap DEMO </h3>
            <p class="title-description"> <b-breadcrumb :items="items" /> </p>
        </div>
        <section class="section">
            <div class="row">
                <div class="col-xl-12">
                    <div class="card card-default">
                        <div class="card-block">
                      
                        <b-alert show>
                            Default Alert
                        </b-alert>
                        <b-alert   variant="success" show>
                            Default Success
                        </b-alert>
                        <b-alert   variant="warning" show>
                            Default INFO
                        </b-alert>
                        <div>
                        <b-tooltip content="Online!" show>
                            <b-btn variant="outline-success">Live chat</b-btn>
                            <b-btn variant="outline-info">outline-info</b-btn>
                                                        <b-btn variant="outline-warning">outline-info</b-btn>

                        </b-tooltip>
                        </div>
                            <h3>Example heading <b-badge>New</b-badge></h3>
                            <h4>Example heading <b-badge variant="primary">New</b-badge></h4>
                            <h5>Example heading <b-badge pill variant="success">New</b-badge></h5>
                        </div>
                    </div>
                     <b-card header="Card header text"
                            class="mb-2"
                            title="Card title"
                            sub-title="Card subtitle"
                            show-footer>
                            <small slot="footer" class="text-muted">
                                Last updated 3 mins ago SDSSSSSS
                            </small>
                    </b-card>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                        <b-card class="mb-2" variant="success">Simple Card</b-card>

                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                      <b-carousel controls indicators :interval="3000" background="#ABABAB" height="300px">

                        <!-- Text slides -->
                        <b-carousel-slide height="300px" caption="First slide" text="Nulla vitae elit libero, a pharetra augue mollis interdum." img="http://placeskull.com/600/300/ABABAB/-1/0">
                        </b-carousel-slide>

                        <!-- Slides with custom text -->
                        <b-carousel-slide height="300px" img="http://placeskull.com/600/300/1C90F3/-1/0">
                        Hello world
                        </b-carousel-slide>

                        <!-- Slides with image -->
                        <b-carousel-slide height="300px" img="http://placeskull.com/600/300/f44336/-1/0">
                        </b-carousel-slide>

                    </b-carousel>
                </div>
            </div>
            <div class="my-1 row">
    <div class="col-6">
      <b-form-fieldset horizontal label="Rows per page" :label-cols="6">
        <b-form-select :options="[{text:5,value:5},{text:10,value:10},{text:15,value:15}]" v-model="perPage">
        </b-form-select>
      </b-form-fieldset>
    </div>
    <div class="col-6">
      <b-form-fieldset horizontal label="Filter" :label-cols="3">
        <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
      </b-form-fieldset>
    </div>
  </div>

  <div class="justify-content-center my-1">
    <b-pagination size="md" :total-rows="items.length" :per-page="perPage" v-model="currentPage" />
  </div>

  <!-- Main table element -->
  <b-table striped hover 
           :items="items"
           :fields="fields"
           :current-page="currentPage"
           :per-page="perPage"
           :filter="filter"
  >
    <template slot="name" scope="item">
      {{item.value.first}} {{item.value.last}}
    </template>
    <template slot="isActive" scope="item">
      {{item.value?'Yes :)':'No :('}}
    </template>
    <template slot="actions" scope="item">
      <b-btn size="sm" @click="details(item.item)">Details</b-btn>
    </template>
  </b-table>

 </div> 
        </section>
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
                        isActive: true, age: 40, name: { first: 'Dickerson', last: 'Macdonald' }
                    }, {
                        isActive: false, age: 21, name: { first: 'Larsen', last: 'Shaw' }
                    }, {
                        _rowVariant: 'success',
                        isActive: false, age: 9, name: { first: 'Mitzi', last: 'Navarro' }
                    }, {
                        isActive: false, age: 89, name: { first: 'Geneva', last: 'Wilson' }
                    }, {
                        isActive: true, age: 38, name: { first: 'Jami', last: 'Carney' }
                    }, {
                        isActive: false, age: 27, name: { first: 'Essie', last: 'Dunlap' }
                    }, {
                        isActive: true, age: 40, name: { first: 'Dickerson', last: 'Macdonald' }
                    }, {
                        _cellVariants: { age: 'danger', name: 'success' },
                        isActive: false, age: 21, name: { first: 'Larsen', last: 'Shaw' }
                    }, {
                        isActive: false, age: 26, name: { first: 'Mitzi', last: 'Navarro' }
                    }, {
                        isActive: false, age: 22, name: { first: 'Geneva', last: 'Wilson' }
                    }, {
                        isActive: true, age: 38, name: { first: 'Jami', last: 'Carney' }
                    }, {
                        isActive: false, age: 27, name: { first: 'Essie', last: 'Dunlap' }
                    }
                    ],
                    fields: {
                    name: {
                        label: 'Person Full name',
                        sortable: true
                    },
                    age: {
                        label: 'Person age',
                        sortable: true
                    },
                    isActive: {
                        label: 'is Active'
                    },
                    actions: {
                        label: 'Actions'
                    }
                    },
                    currentPage: 1,
                    perPage: 5,
                    filter: null
                }
            
        }
    }
</script>