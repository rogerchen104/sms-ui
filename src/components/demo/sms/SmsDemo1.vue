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
        </section>
    </article>
</template>

<script>
    export default {
        name: 'VbDemoComponentPage',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                items: [{
                text: 'Admin',
                link: '#',
                }, {
                text: 'Manage',
                link: '#',
                }, {
                text: 'Library',
                active: true
                }]
            }
        }
    }
</script>