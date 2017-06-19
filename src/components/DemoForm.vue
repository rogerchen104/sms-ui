<template>
    <article class="content forms-page">
        <div class="title-block">
            <h3 class="title"> 表單 </h3>
            <p class="title-description">基本表單元素</p>
        </div>
        <div class="subtitle-block">
            <h3 class="subtitle">  Admin Inputs </h3>
        </div>
        <section class="section">
            <div class="row sameheight-container">
                <div class="col-md-6">
                    <div class="card card-block sameheight-item">
                        <div class="title-block">
                            <h3 class="title"> 底線輸入元素 </h3>
                        </div>
                        <form role="form">
                            <div class="form-group"> <label class="control-label">文字輸入</label> <input type="text" class="form-control underlined"> </div>
                            <div class="form-group"> <label class="control-label">密碼輸入</label> <input type="password" class="form-control underlined"> </div>
                            <div class="form-group"> <label class="control-label">提示字元輪入</label> <input type="text" class="form-control underlined" placeholder="Placeholder text"> </div>
                            <div class="form-group"> <label class="control-label">唯讀輸入</label> <input type="text" disabled="disabled" class="form-control underlined" placeholder="Disabled input text"> </div>
                            <div class="form-group"> <label class="control-label">靜態顯示</label>
                                <p class="form-control-static underlined">email@example.com</p>
                            </div>
                            <div class="form-group"> <label class="control-label">唯讀輸入</label> <input type="text" readonly="readonly" class="form-control underlined" value="Readonly input text"> </div>
                            <div class="form-group"> <label class="control-label">Textarea</label> <textarea rows="3" class="form-control underlined"></textarea> </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card card-block sameheight-item">
                        <div class="title-block">
                            <h3 class="title">底線輸入檢核元素 </h3>
                        </div>
                        <form role="form">
                            <div class="form-group has-success"> <label class="control-label" for="inputSuccess1">輸入成功訊息</label> <input type="text" class="form-control underlined" id="inputSuccess1"> <span class="has-success">Success message.</span> </div>
                            <div class="form-group has-warning">
                                <label class="control-label" for="inputWarning1">輸入警告訊息</label> <input type="text" class="form-control underlined" id="inputWarning1"> <span class="has-warning">Warning message.</span> </div>
                            <div class="form-group has-error">
                                <label class="control-label" for="inputError1">輸入錯誤訊息</label> <input type="text" class="form-control underlined" id="inputError1"> <span class="has-error">Error message.</span> </div>
                            <div class="form-group has-success  has-feedback">
                                <label class="control-label" for="inputSuccess2">輸入成功訊息(icon)</label> <input type="text" class="form-control underlined" id="inputSuccess2"> <span class="fa fa-check form-control-feedback"></span> </div>
                            <div class="form-group has-warning  has-feedback"> <label class="control-label" for="inputWarning2">輸入警告訊息(icon)</label> <input type="text" class="form-control underlined" id="inputWarning2"> <span class="fa fa-exclamation form-control-feedback"></span> </div>
                            <div class="form-group has-error  has-feedback"> <label class="control-label" for="inputError2">輸入錯誤訊息(icon)</label> <input type="text" class="form-control underlined" id="inputError2"> <span class="fa fa-times form-control-feedback"></span> </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="row sameheight-container">
                <div class="col-md-6">
                    <div class="card card-block sameheight-item">
                        <div class="title-block">
                            <h3 class="title"> 方框輸入元素 </h3>
                        </div>
                        <form>
                            <div class="form-group"> <label class="control-label">文字輸入</label> <input type="text" class="form-control boxed"> </div>
                            <div class="form-group"> <label class="control-label">密碼輸入</label> <input type="password" class="form-control boxed"> </div>
                            <div class="form-group"> <label class="control-label">提示字元輪入</label> <input type="text" class="form-control boxed" placeholder="Placeholder text"> </div>
                            <div class="form-group"> <label class="control-label">唯讀輸入</label> <input type="text" disabled="disabled" class="form-control boxed" placeholder="Disabled input text"> </div>
                            <div class="form-group"> <label class="control-label">靜態顯示</label>
                                <p class="form-control-static boxed">email@example.com</p>
                            </div>
                            <div class="form-group"> <label class="control-label">唯讀輸入</label> <input type="text" readonly="readonly" class="form-control boxed" value="Readonly input text"> </div>
                            <div class="form-group"> <label class="control-label">Textarea</label> <textarea rows="3" class="form-control boxed"></textarea> </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card card-block sameheight-item">
                        <div class="title-block">
                            <h3 class="title">方框輸入檢核元素 </h3>
                        </div>
                        <form role="form">
                            <div class="form-group has-success"> <label class="control-label" for="inputSuccess1">輸入成功訊息</label> <input type="text" class="form-control boxed" id="inputSuccess1"> <span class="has-success">Success message.</span> </div>
                            <div class="form-group has-warning">
                                <label class="control-label" for="inputWarning1">輸入警告訊息</label> <input type="text" class="form-control boxed" id="inputWarning1"> <span class="has-warning">Warning message.</span> </div>
                            <div class="form-group has-error">
                                <label class="control-label" for="inputError1">輸入錯誤訊息</label> <input type="text" class="form-control boxed" id="inputError1"> <span class="has-error">Error message.</span> </div>
                            <div class="form-group has-success  has-feedback">
                                <label class="control-label" for="inputSuccess2">輸入成功訊息(icon)</label> <input type="text" class="form-control boxed" id="inputSuccess2"> <span class="fa fa-check form-control-feedback"></span> </div>
                            <div class="form-group has-warning  has-feedback"> <label class="control-label" for="inputWarning2">輸入警告訊息(icon)</label> <input type="text" class="form-control boxed" id="inputWarning2"> <span class="fa fa-exclamation form-control-feedback"></span> </div>
                            <div class="form-group has-error  has-feedback"> <label class="control-label" for="inputError2">輸入錯誤訊息(icon)</label> <input type="text" class="form-control boxed" id="inputError2"> <span class="fa fa-times form-control-feedback"></span> </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="row sameheight-container">
                <div class="col-md-6">
                    <div class="card card-block">
                        <div class="title-block">
                            <h3 class="title"> Radio Types </h3>
                        </div>
                        <form role="form">
                            <div class="form-group"> <label class="control-label">Radios</label>
                                <div> <label>
    			                    <input class="radio" name="radios" type="radio">
    			                    <span>項目一</span>
    			                </label> </div>
                                <div> <label>
    			                    <input class="radio" type="radio" name="radios" checked="checked">
    			                    <span>項目二</span>
    			                </label> </div>
                                <div> <label>
    			                    <input class="radio" type="radio" name="disabled-radios" disabled="disabled" checked="checked">
    			                    <span>項目三(checked & disabled)</span>
    			                </label> </div>
                                <div> <label>
    			                    <input class="radio" type="radio" name="disabled-radios" disabled="disabled" >
    			                    <span>項目四(disabled)</span>
    			                </label> </div>
                            </div>
                            <div class="form-group"> <label class="control-label">Inline Radios</label>
                                <div> <label>
    			                    <input class="radio" name="inline-radios" type="radio">
    			                    <span>選項一</span>
    			                </label> <label>
    			                    <input class="radio" name="inline-radios" type="radio">
    			                    <span>選項二</span>
    			                </label> <label>
    			                    <input class="radio" name="inline-radios" type="radio">
    			                    <span>選項三</span>
    			                </label> </div>
                            </div>
                            <div class="form-group"> <label class="control-label">Squared Radios</label>
                                <div> <label>
    			                    <input class="radio squared"  name="squared-radios" checked="checked" type="radio">
    			                    <span>已勾選</span>
    			                </label> <label>
    			                    <input class="radio squared"  name="squared-radios" type="radio">
    			                    <span>未勾選</span>
    			                </label> </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card card-block">
                        <div class="title-block">
                            <h3 class="title"> Checkboxe Types </h3>
                        </div>
                        <form role="form">
                            <div class="form-group"> <label class="control-label">Checkboxes</label>
                                <div> <label>
    			                    <input class="checkbox" type="checkbox">
    			                    <span>項目一</span>
    			                </label> </div>
                                <div> <label>
    			                    <input class="checkbox" type="checkbox" checked="checked">
    			                    <span>項目二(checked)</span>
    			                </label> </div>
                                <div> <label>
    			                    <input class="checkbox" type="checkbox" disabled="disabled" checked="checked">
    			                    <span>項目三(checked & disabled)</span>
    			                </label> </div>
                                <div> <label>
    			                    <input class="checkbox" type="checkbox" disabled="disabled" >
    			                    <span>項目四(checked & disabled)</span>
    			                </label> </div>
                            </div>
                            <div class="form-group"> <label class="control-label">Inline Checkboxes</label>
                                <div> <label>
    			                    <input class="checkbox" type="checkbox">
    			                    <span>選項一</span>
    			                </label> <label>
    			                    <input class="checkbox" type="checkbox">
    			                    <span>選項二</span>
    			                </label> <label>
    			                    <input class="checkbox" type="checkbox">
    			                    <span>選項三</span>
    			                </label> </div>
                            </div>
                            <div class="form-group"> <label class="control-label">圓型 Checkbox</label>
                                <div> <label>
    			                    <input class="checkbox rounded" checked="checked" type="checkbox">
    			                    <span>已勾選</span>
    			                </label> <label>
    			                    <input class="checkbox rounded" type="checkbox">
    			                    <span>未勾選</span>
    			                </label> </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <div class="subtitle-block">
            <h3 class="subtitle"> Bootstrap Inputs </h3>
        </div>
        <section class="section">
            <div class="row sameheight-container">
                <div class="col-md-6">
                    <div class="card card-block sameheight-item">
                        <div class="title-block">
                            <h3 class="title"> Bootstrap 預設樣式 </h3>
                        </div>
                        <form role="form">
                            <fieldset class="form-group"> <label class="control-label" for="formGroupExampleInput">輸入文字</label> <input type="text" class="form-control" id="formGroupExampleInput"> </fieldset>
                            <fieldset class="form-group"> <label class="control-label" for="formGroupExampleInput2">輸入密碼</label> <input type="password" class="form-control" id="formGroupExampleInput2"> </fieldset>
                            <fieldset class="form-group"> <label class="control-label" for="formGroupExampleInput3">提示輸入框</label> <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="請輸入文字"> </fieldset>
                            <fieldset class="form-group">
                                <label class="control-label" for="formGroupExampleInput4">Disabled輸入框</label> <input type="text" disabled="disabled" class="form-control" id="formGroupExampleInput4" placeholder="Disabled的文字"> </fieldset>
                            <fieldset class="form-group"> <label class="control-label" for="formGroupExampleInput5">靜態顯示</label>
                                <p class="form-control-static" id="formGroupExampleInput5">email@example.com</p>
                            </fieldset>
                            <fieldset class="form-group"> <label class="control-label" for="formGroupExampleInput6">唯讀輸入</label> <input type="text" readonly="readonly" class="form-control" id="formGroupExampleInput6" value="Readonly input text"> </fieldset>
                            <fieldset class="form-group"> <label class="control-label" for="formGroupExampleInput7">Textarea</label> <textarea rows="3" class="form-control" id="formGroupExampleInput7"></textarea> </fieldset>
                        </form>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card card-block sameheight-item">
                        <div class="title-block">
                            <h3 class="title">Bootstrap Inputs Validation </h3>
                        </div>
                        <form role="form">
                            <div class="form-group has-success"> <label class="control-label" for="inputSuccess1">Input with success</label> <input type="text" class="form-control" id="inputSuccess1"> <span class="has-success">Success message.</span> </div>
                            <div class="form-group has-warning">
                                <label class="control-label" for="inputWarning1">Input with warning</label> <input type="text" class="form-control" id="inputWarning1"> <span class="has-warning">Warning message.</span> </div>
                            <div class="form-group has-error">
                                <label class="control-label" for="inputError1">Input with error</label> <input type="text" class="form-control" id="inputError1"> <span class="has-error">Error message.</span> </div>
                            <div class="form-group has-success  has-feedback">
                                <label class="control-label" for="inputSuccess2">Input with success icon</label> <input type="text" class="form-control" id="inputSuccess2"> <span class="fa fa-check form-control-feedback"></span> </div>
                            <div class="form-group has-warning  has-feedback">
                                <label class="control-label" for="inputWarning2">Input with warning icon</label> <input type="text" class="form-control" id="inputWarning2"> <span class="fa fa-exclamation form-control-feedback"></span> </div>
                            <div class="form-group has-error  has-feedback">
                                <label class="control-label" for="inputError2">Input with error icon</label> <input type="text" class="form-control" id="inputError2"> <span class="fa fa-times form-control-feedback"></span> </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="row sameheight-container">
                <div class="col-md-6">
                    <div class="card card-block sameheight-item">
                        <div class="title-block">
                            <h3 class="title"> Input Groups </h3>
                        </div>
                        <form>
                            <div class="form-group"> <label class="control-label">輸入文字</label>
                                <div class="input-group"> <span class="input-group-addon">@</span> <input type="text" class="form-control" placeholder="請輸入文字"> </div>
                                <div class="input-group"> <input type="text" class="form-control" placeholder="請輸入文字"> <span class="input-group-addon">.00</span> </div>
                                <div class="input-group"> <span class="input-group-addon">$</span> <input type="text" class="form-control" placeholder="請輸入文字"> <span class="input-group-addon">.00</span> </div>
                            </div>
                            <div class="form-group"> <label class="control-label">輸入文字(縮放)</label>
                                <div class="input-group input-group-lg"> <span class="input-group-addon">@</span> <input type="text" class="form-control" placeholder="使用者名稱"> </div>
                                <div class="input-group"> <span class="input-group-addon">@</span> <input type="text" class="form-control" placeholder="使用者名稱"> </div>
                                <div class="input-group input-group-sm"> <span class="input-group-addon">@</span> <input type="text" class="form-control" placeholder="使用者名稱"> </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card card-block">
                        <div class="panel-title-block">
                            <h3 class="title"> Custom Bootstrap Select/File </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="subtitle-block">
            <h3 class="subtitle"> Input Sizing </h3>
        </div>
        <section class="section">
            <div class="row sameheight-container">
                <div class="col-md-6">
                    <div class="card card-block sameheight-item">
                        <div class="title-block">
                            <h3 class="title"> Bootstrap 縮放 </h3>
                        </div>
                        <form role="form">
                            <div class="form-group"> <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg"> </div>
                            <div class="form-group"> <input class="form-control" type="text" placeholder="Default input"> </div>
                            <div class="form-group"> <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm"> </div>
                            <div class="form-group"> <select class="form-control form-control-lg">
    							<option>項目一</option>
    							<option>項目二</option>
    							<option>項目三</option>
    							<option>項目四</option>
    						</select> </div>
                            <div class="form-group"> <select class="form-control">
    						    <option>項目一</option>
    							<option>項目二</option>
    							<option>項目三</option>
    							<option>項目四</option>
    						</select> </div>
                            <div class="form-group"> <select class="form-control form-control-sm">
				                <option>項目一</option>
    							<option>項目二</option>
    							<option>項目三</option>
    							<option>項目四</option>
    						</select> </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card card-block sameheight-item">
                        <div class="title-block">
                            <h3 class="title"> 欄位縮放 </h3>
                        </div>
                        <form role="form">
                            <div class="row form-group">
                                <div class="col-xs-6"> <input type="text" class="form-control" placeholder=".col-xs-6"> </div>
                                <div class="col-xs-6"> <input type="text" class="form-control" placeholder=".col-xs-6"> </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-xs-2"> <input type="text" class="form-control" placeholder=".col-xs-2"> </div>
                                <div class="col-xs-3"> <input type="text" class="form-control" placeholder=".col-xs-3"> </div>
                                <div class="col-xs-7"> <input type="text" class="form-control" placeholder=".col-xs-7"> </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-xs-2"> <input type="text" class="form-control" placeholder=".col-xs-2"> </div>
                                <div class="col-xs-2 col-xs-offset-1"> <input type="text" class="form-control" placeholder=".col-xs-2"> </div>
                                <div class="col-xs-2 col-xs-offset-2"> <input type="text" class="form-control" placeholder=".col-xs-2"> </div>
                                <div class="col-xs-2 col-xs-offset-1"> <input type="text" class="form-control" placeholder=".col-xs-2"> </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-xs-3"> <input type="text" class="form-control" placeholder=".col-xs-3"> </div>
                                <div class="col-xs-4 col-xs-offset-1"> <input type="text" class="form-control" placeholder=".col-xs-4"> </div>
                                <div class="col-xs-3 col-xs-offset-1"> <input type="text" class="form-control" placeholder=".col-xs-3"> </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-xs-4"> <input type="text" class="form-control" placeholder=".col-xs-4"> </div>
                                <div class="col-xs-3 col-xs-offset-3"> <input type="text" class="form-control" placeholder=".col-xs-3"> </div>
                                <div class="col-xs-2"> <input type="text" class="form-control" placeholder=".col-xs-2"> </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-xs-3"> <input type="text" class="form-control" placeholder=".col-xs-3"> </div>
                                <div class="col-xs-3"> <input type="text" class="form-control" placeholder=".col-xs-3"> </div>
                                <div class="col-xs-5 col-xs-offset-1"> <input type="text" class="form-control" placeholder=".col-xs-5"> </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <div class="subtitle-block">
            <h3 class="subtitle">表單排版 </h3>
        </div>
        <section class="section">
            <div class="row sameheight-container">
                <div class="col-md-6">
                    <div class="card card-block sameheight-item">
                        <div class="title-block">
                            <h3 class="title"> 基本表單 </h3>
                        </div>
                        <form role="form">
                            <div class="form-group"> <label for="exampleInputEmail1">Email address</label> <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"> </div>
                            <div class="form-group"> <label for="exampleInputPassword1">Password</label> <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> </div>
                            <div class="form-group"> <button type="submit" class="btn btn-primary">送出</button> </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card card-block sameheight-item">
                        <div class="title-block">
                            <h3 class="title">網格表單 </h3>
                        </div>
                        <form>
                            <div class="form-group row"> <label for="inputEmail3" class="col-sm-2 form-control-label">Email</label>
                                <div class="col-sm-10"> <input type="email" class="form-control" id="inputEmail3" placeholder="Email"> </div>
                            </div>
                            <div class="form-group row"> <label for="inputPassword3" class="col-sm-2 form-control-label">Password</label>
                                <div class="col-sm-10"> <input type="password" class="form-control" id="inputPassword3" placeholder="Password"> </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-offset-2 col-sm-10"> <button type="submit" class="btn btn-success">Sign in</button> </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="row sameheight-container">
                <div class="col-md-12">
                    <div class="card card-block sameheight-item">
                        <div class="title-block">
                            <h3 class="title"> Inline 表單 </h3>
                        </div>
                        <form class="form-inline">
                            <div class="form-group"> <label for="exampleInputEmail3">Email address</label> <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Enter email"> </div>
                            <div class="form-group"> <label for="exampleInputPassword3">Password</label> <input type="password" class="form-control" id="exampleInputPassword3" placeholder="Password"> </div>
                            <div class="checkbox"> <label>
    							<input type="checkbox"> Remember me
    						</label> </div> <button type="submit" class="btn btn-primary">登入n</button> </form>
                    </div>
                </div>
            </div>
        </section>
    </article>
</template>

<script>
export default {
  name: 'DemoForm',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
