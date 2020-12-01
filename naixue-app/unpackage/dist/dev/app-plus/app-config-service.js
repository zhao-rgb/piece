
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/menu/menu","pages/take-foods/take-foods","pages/mine/mine","pages/login/login","pages/address/address","pages/address/add","pages/address/edit","pages/stores/stores","pages/pay/pay","pages/remark/remark","pages/member-code/member-code"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#919293","selectedColor":"#97AF13","backgroundColor":"#FFF","borderStyle":"black","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/images/tabBar/index.png","selectedIconPath":"static/images/tabBar/index_selected.png"},{"pagePath":"pages/menu/menu","text":"点餐","iconPath":"static/images/tabBar/drink.png","selectedIconPath":"static/images/tabBar/drink_selected.png"},{"pagePath":"pages/take-foods/take-foods","text":"取餐","iconPath":"static/images/tabBar/take.png","selectedIconPath":"static/images/tabBar/take_selected.png"},{"pagePath":"pages/mine/mine","text":"我的","iconPath":"static/images/tabBar/mine.png","selectedIconPath":"static/images/tabBar/mine_selected.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"naixue-app","compilerVersion":"2.9.3","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/menu/menu","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#F8F8F8","navigationBarTextStyle":"black","navigationBarTitleText":"奈雪の茶"}},{"path":"/pages/take-foods/take-foods","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#F8F8F8","navigationBarTextStyle":"black","navigationBarTitleText":"奈雪の茶"}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#F8F8F8","navigationBarTextStyle":"black","navigationBarTitleText":"个人中心"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarBackgroundColor":"#F8F8F8","navigationBarTextStyle":"black","navigationBarTitleText":"个人登录"}},{"path":"/pages/address/address","meta":{},"window":{"navigationBarTitleText":"我的地址","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F8F8F8"}},{"path":"/pages/address/add","meta":{},"window":{"navigationBarTitleText":"添加地址","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F8F8F8"}},{"path":"/pages/address/edit","meta":{},"window":{"navigationBarTitleText":"修改地址","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F8F8F8"}},{"path":"/pages/stores/stores","meta":{},"window":{"navigationBarBackgroundColor":"#F8F8F8","navigationBarTextStyle":"black","navigationBarTitleText":"选择门店"}},{"path":"/pages/pay/pay","meta":{},"window":{"navigationBarBackgroundColor":"#F8F8F8","navigationBarTextStyle":"black","navigationBarTitleText":"支付"}},{"path":"/pages/remark/remark","meta":{},"window":{"navigationBarBackgroundColor":"#F8F8F8","navigationBarTextStyle":"black","navigationBarTitleText":"订单备注"}},{"path":"/pages/member-code/member-code","meta":{},"window":{"navigationBarBackgroundColor":"#F8F8F8","navigationBarTextStyle":"black","navigationBarTitleText":"会员码"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
