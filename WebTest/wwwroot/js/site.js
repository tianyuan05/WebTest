// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
async function Test() {
    await CefSharp.BindObjectAsync("boundAsync");
    console.log("this is Html");
    boundAsync.div(9, 1).then(function (rs) {
        //document.URL = "http://www.baidu.com";
        self.location = "http://www.baidu.com";
        alert(rs);
    });
}

async function CallBack() {
    await CefSharp.BindObjectAsync("boundAsync");
    var json = {
        type: 'Login',
        message: '',
        result: true,
    };
    var sjson = JSON.stringify(json)
    boundAsync.write(sjson);

}

async function Call() {
    await CefSharp.BindObjectAsync("boundAsync");
    boundAsync.callBack(Do);
}

function Do(a, b) {
    return a + b;
}

function Test1(msg) {
    alert(msg);
}

async function DDD() {
    await CefSharp.BindObjectAsync("userLogin");
    userLogin.postMessage("Test Ok");
}

async function SendUrl() {
    await CefSharp.BindObjectAsync("boundAsync");
    var json = {
        type: 'Login',
        message: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=js%20%E5%BD%93%E5%89%8D%E9%A1%B5%E6%89%93%E5%BC%80%E6%96%B0%E9%A1%B5%E9%9D%A2&rsv_pq=aec1e67b000213be&rsv_t=8ca8rU%2Fmy8Oma6Wjo2f01Iah%2ForxWHiUVi%2B%2BLdNhIhwBT3TTYqnOpueiYcE&rqlang=cn&rsv_enter=1&rsv_sug3=44&rsv_sug1=50&rsv_sug7=100',
        result: true,
    };
    var sjson = JSON.stringify(json)
    boundAsync.write(sjson);
}

async function RecivedUrl() {
    await CefSharp.BindObjectAsync("boundAsync");
    boundAsync.url().then(function (rs) {
        self.location = rs;
        alert(rs);
    });
}

