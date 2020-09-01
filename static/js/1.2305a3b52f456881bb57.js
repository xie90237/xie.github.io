webpackJsonp([1],{"8hXn":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=[{date:0,type:"record",subtag:"",choiceness:!1,original:!0,transpondURL:"",Title:"标题",content:"内容"},{date:1598340277761,type:"record",original:!0,choiceness:!1,transpondURL:"",Title:"开始写博客的日子",content:'\n      <h2>开始写博客的日子</h2>\n      <hr />\n      <p>&emsp;写给自己也写给大家;</p>\n      <p>&emsp;之前从高中就去当兵了，回来就学java。 但是后来阴差阳错的走上了前端的路。也算是野路子出家，一直也摸不着方向（其实现在我也是一个初学者，还是摸不清方向）。还好有一个朋友对前端很厉害，起码很有见识，在开始给了我很大的帮助，能让我在这条路走下去，在这里，感谢一下他，名字就不说了，推一下他的博客网站以作感谢。</p>\n      <p>&emsp;<a href="https://www.yinzhuoei.com/">因卓诶-enjoy</a></p>\n      <p>&emsp;以前其实也一直想写，但是第一是觉得没啥必要，第二是觉得自己文笔太差，所以一直是在印象笔记，自己做做笔记，前段时间才开始看知乎，才发现自己欠缺的太多了，于是决定开始写属于自己的博客。</p>\n      <p>&emsp;现在斗胆在这里写一写自己的一些学习见解，水平泛泛。希望技术上能给大家一些帮助，也希望在看的各位大佬，能给出自己的意见和建议，能指点一下方向就更好了，我在工作空余或者下班回详细看每一条评论的，在这里也谢谢大家了。</p>\n     '},{date:1598342040783,type:"record",original:!0,choiceness:!1,transpondURL:"",Title:"有了搭建博客网站的想法",content:"\n      <h2>有了搭建博客网站的想法</h2>\n      <hr />\n      <p>&emsp;今天在开源中国写博客，第一次想写博客，然后也没关键字，也没特殊符号，偏偏说检测有问题，这就很气，我从早上十一点开始弄 找管理员 到现在还没有搞好，望天。</p>\n      <p>&emsp;于是升起了搭建一个属于自己的个人博客。如果我能把这个想法确定并且实现下去。</p>\n      <p>&emsp;本来想着弄一个引擎什么的，本来也不太懂。但是最近工作比较闲，有空余时间，也不想回去没啥事干，毕竟有时候看书也看不进去。对前端和java都有过接触和了解。然后在网上搜了一下，就想着要不自己弄一个。也顺便学习一些东西，平时也充实一下自己。</p>\n      <p>&emsp;目前的想法是：</p>\n      <ol>\n          <li>每周坚持写博客 就当给自己看 如果个人博客搭建成功 就放上去</li>\n          <li>写前端</li>\n          <li>根据需求看需不需要写后台</li>\n          <li>写完 调试完成 测试完成</li>\n          <li>买服务器 域名 备案等等</li>\n          <li>放上去</li>\n          <li>希望在年底之前完成</li>\n      </ol>\n      "},{date:1598347975e3,type:"record",subtag:"",choiceness:!1,original:!0,transpondURL:"",Title:"搭建一个博客的需求",content:"\n          <h2>搭建一个博客的需求</h2>\n          <hr />\n          <p>因为完全靠自己，所以根据我的理解分为两部分，当然 服务器排除在外； 前端框架 vue vue-router UI框架 elementUI（样式不够自己写） axios 不说了 还需要 一个markdown 和 html 编辑的编辑器带预览功能 到时候网上找找 后端 到时候使用java springboot 边学边做 还不一定用呢 毕竟实在不行 直接操作JSON文件 数据库用 mySQL吧 （待定） 0. 登录</p>\n          <ol>\n              <li>展示功能</li>\n              <li>发布功能（只有自己可以操作自己的文章，毕竟不可能自己玩单机啊，对吧。哪怕没人用也得有这个功能。）;</li>\n              <li>分类功能</li>\n              <li>检索 根据（时间，类型，标签，原创，转发，精华，作者，收藏）进行检索</li>\n          </ol>\n          "},{date:1598366212707,type:"record",subtag:"",choiceness:!1,original:!0,transpondURL:"",Title:"day1 为了目标,建一个博客网站",content:"\n          <h2>day1 为了目标,建一个个人博客网站</h2>\n          <hr />\n          <p>&emsp;晚上了，为目标准备下。</p>\n          <p>&emsp;好久不创建vue项目了，电脑也是刚修好，nice。</p>\n          <ul>\n            <li>安装 node。</li>\n            <li>安装 cnpm。</li>\n            <li>安装webstrom。</li>\n            <li>安装vue-cli。</li>\n            <li>创建vue纠结了快半个小时，各种报错。好久没创建项目了，果然还是熟能生巧（小声逼逼，网慢）。</li>\n            <li>创建成功，随便先写个页面，把今天的这几个博客转成HTML放在Context.js中,做一个数组，先存着。</li>\n          </ul>\n          <p>&emsp;显示？？ 显示当然是白天先做了个小dome，可以编辑的markdown编辑器。模仿开源中国做的，可以HTML、markdown切换，写完，点源代码。然后copy 放进context.js 中，我真是个天才。</p>\n          <p><strong>总之博客需要坚持，为了目标前进。</strong></p>\n          "},{date:1598454861234,type:"record",subtag:"",choiceness:!1,original:!0,transpondURL:"",Title:"day2 建立个人博客网站的第二天",content:"\n    <h2>day2 建立博客网站的第二天</h2>\n    <hr />\n    <p>&emsp;总结一下今天，昨天晚上创建了项目。</p>\n    <p>&emsp;今天准备放入组件 scss 和element-ui 还有mavon-editor（markdown富文本编辑解析工具）;</p>\n    <p>&emsp;一切进展不顺利，惆怅、望天。</p>\n    <p>&emsp;element-ui挺顺利的，直接就能用了，但身为一个成熟的前端工程师，scss这么方便的东西怎么能不用呢。对吧，于是安装，在网上各种找办法，各种安装。然后各种报错，整了接近三个小时才发现竟然是版本不兼容。</p>\n    <p>&emsp;？？？ 我靠，心态爆炸！！！</p>\n    <p>&emsp;其实还好，我喜欢一些比较不平常的报错，一般相同的错误我很少会需要解决两遍，每次报错都能学到一些东西。例如：这个版本报错的信息我就记住了，下次再出现，就能直接排查掉了。</p>\n    <p><strong>&emsp;scss 版本如果相差太大，会导致版本不兼容。至于和什么版本不兼容，下次再碰到了，有时间就好好查查。</strong></p>\n    <p><strong>&emsp;vue.use() 参数是一个对象，将对象中的模板对象，依次插入vue的components(应该是这样的，个人总结)</strong></p>\n    <p>（后边有时间了需要好好学习一下这类东西，其实个人单独从零开始，建一个项目，到后期，可以发现自己很多的薄弱点，然后针对性的学习，感觉好处还是蛮多的）</p>\n    <p>&emsp;后边挺顺利的，直接把编辑页面画出来，毕竟网站的建立还是需要博客来支撑的对吧。界面功能都实现的差不多，但是毕竟还是太多了。包括图片，代码，不好放。等网站搭起来，在考虑把代码，和展示效果放出来。</p>\n    <p>&emsp;暂时就这样了，晚安了。</p>\n    "},{date:1598541537172,title:"day3 建立博客的第三天",content:"## day3 建立博客的第三天\n其实总的来说，今天有事办事去了,回来洗漱完，都十点半了。但是为了坚持写博客,我继续昨天的功能。\n* 首先，把编辑页面的自适应调整了下，总不能页面一小就错位么。\n* 然后，因为没有后台和数据库，暂时做了一个点击成成剪切板的按钮\n（很难受，写这句话的时候，看见键盘上有一根头发，刚掉的，emmmm）。\n行了  就到这把，这都几点了，休息了，为了不秃头。",type:"record",subtag:[],choiceness:!1,original:!0,snowfall:""}],s={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"header"},[t("div",{staticClass:"head-title"},[n._v("厚载人生 - 个人博客")]),n._v(" "),t("div",{staticClass:"head-menu"},n._l(n.headMenuList,function(e,i){return t("div",{key:i,staticClass:"menu-item"},[t("div",{class:"menu-item-text "+(e.key==n.activeKey?"active":""),on:{click:function(t){return n.menuClick(e)}}},[n._v(n._s(e.name))])])}),0)])},staticRenderFns:[]};var a={name:"index",components:{Header:t("C7Lr")({name:"index",data:function(){return{headMenuList:[{name:"首页",path:"/index",key:"home"},{name:"编辑",path:"/modifyPage",key:"modifyPage"}],activeKey:""}},mounted:function(){this.activeKey=this.$route.name},methods:{menuClick:function(n){this.activeKey=n.key,this.$router.push(n.path)}}},s,!1,function(n){t("UH/m")},"data-v-7d355fde",null).exports},data:function(){return{textMarkDown:i,Inde:0}},methods:{pre:function(){0!=this.Inde&&this.Inde--},next:function(){this.Inde!=this.textMarkDown.length-1&&this.Inde++}}},o={render:function(){var n=this.$createElement,e=this._self._c||n;return e("section",{staticClass:"home"},[e("Header"),this._v(" "),e("div",{staticClass:"content"},[e("router-view")],1)],1)},staticRenderFns:[]};var p=t("C7Lr")(a,o,!1,function(n){t("Jy7I")},"data-v-6d0ca7cd",null);e.default=p.exports},Jy7I:function(n,e){},"UH/m":function(n,e){}});
//# sourceMappingURL=1.2305a3b52f456881bb57.js.map