
<template>

     <article class="content dashboard-page">
           <section class="section">
                    <div class="row sameheight-container">
                        <div class="col col-xs-12 col-sm-12 col-md-12 col-xl-12 stats-col">
                            <div class="card sameheight-item stats" data-exclude="xs">
                                <div class="card-block">
                                    <div class="title-block">
                                        <h4 class="title">  Web component </h4>
                                        <p class="title-description"> Web component  
            				 
            				  </p>
                                    </div>
                                    <div class="row row-sm stats-container">
                                               
    
                                        <div class="col-xs-12 col-sm-12 stat-col">
                                                <div class="form-group"><label class="control-label">所屬產品</label><select-ap-product id="apProdSelect"  placeholder="輸入產品名稱:)"   style="width:400px "></select-ap-product></div>
                                        </div>
                                        
                                         
                                        

                                    </div>
                                </div>
                            </div>
                        </div>
                         
                    </div>
                </section>
            </article>
            




</template>
<script>
 
export default {
  name: 'VArticle',
  mounted:function(){
    //    document.getElementById('my_select2_element').model = [
    //   {
    //     label: 'Asia',
    //     value: 'AS'
    //   },
    //   {
    //     label: 'Africa',
    //     value: 'AF'
    //   },
    //   {
    //     label: 'North America',
    //     value: 'NA'
    //   },
    //   {
    //     label: 'South America',
    //     value: 'SA'
    //   },
    //   {
    //     label: 'Antarctica',
    //     value: 'AN'
    //   },
    //   {
    //     label: 'Europe',
    //     value: 'EU'
    //   },
    //   {
    //     label: 'Australia',
    //     value: 'OC'
    //   },
    // ];
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>