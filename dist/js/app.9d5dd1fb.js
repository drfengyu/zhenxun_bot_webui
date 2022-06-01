(function(){"use strict";var t={2783:function(t,e,a){var l=a(144),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],n={name:"App",components:{}},r=n,o=a(1001),u=(0,o.Z)(r,i,s,!1,null,null,null),p=u.exports,c=a(8345),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100vh","min-height":"500px"}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"loginForm",staticClass:"loginContainer",attrs:{"element-loading-text":"正在登录...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)",rules:t.rules,model:t.loginForm},nativeOn:{submit:function(t){t.preventDefault()}}},[a("h3",{staticClass:"loginTitle"},[t._v("真寻的后台")]),a("el-form-item",{attrs:{prop:"username"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入用户名"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1),a("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary","native-type":"submit"},on:{click:t.submitLogin}},[t._v("登录")])],1)],1)},d=[],m=a(129),h=a.n(m),f=a(9669),_=a.n(f),v=a(4720),b=a.n(v);_().interceptors.request.use((t=>($("tokenStr")&&(t.headers["Authorization"]=$("tokenStr")),t)),(t=>{console.log(t)})),_().interceptors.response.use((t=>{if(t.status&&200===t.status){if(500==t.data.code||401==t.data.code||403==t.data.code)return void v.Message.error({message:t.data.message});t.data.message&&v.Message.success({message:t.data.message})}return t.data}),(t=>{504==t.response.code||404==t.response.code?v.Message.error({message:"服务器被吃了┭┮﹏┭┮"}):401==t.response.status?("Could not validate credentials"==t.response.data.detail?v.Message.error({message:"用户名或密码错误"}):v.Message.error({message:"尚未登录，请登录"}),qe.replace("/")):422==t.response.status?v.Message.error({message:"修改的数据类型返回错误"}):v.Message.error({message:"未知错误"})}));let y="";const w=(t,e)=>_()({method:"post",url:`${y}${t}`,data:e}),x=(t,e)=>_()({method:"put",url:`${y}${t}`,data:e}),k=(t,e)=>_()({method:"get",url:`${y}${t}`,data:e}),S=(t,e)=>_()({method:"delete",url:`${y}${t}`,data:e}),D=(t,e)=>{var a=7,l=new Date;l.setTime(l.getTime()+24*a*60*60*30),document.cookie=t+"="+encodeURI(e)+";expires="+l.toGMTString()},$=t=>{var e,a=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return document.cookie.match(a)?(e=document.cookie.match(a),decodeURI(e[2])):null},T=t=>{D(t,"",-1)};var q={name:"Login",data(){return{loginForm:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},loading:!1}},methods:{submitLogin(){this.$refs.loginForm.validate((t=>{if(!t)return this.$message.error("请输入所有字段！"),!1;this.loading=!0,this.postRequest("/webui/login",h().stringify({username:this.loginForm.username,password:this.loginForm.password}),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((t=>{if(t){const e=t.token_type+" "+t.access_token;$&&T("tokenStr"),D("tokenStr",e);let a=this.$route.query.redirect;this.$router.replace("/"==a||void 0==a?"/home":a)}})),this.loading=!1}))}}},z=q,L=(0,o.Z)(z,g,d,!1,null,null,null),P=L.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-container",[a("el-header",{staticClass:"homeHeader"},[a("div",{staticClass:"title"},[t._v("小真寻的后台捏")]),a("div",{staticClass:"menu-btn",on:{click:t.showmenu}},[a("div",{staticClass:"btn-logo"},[a("div",{staticClass:"cover",class:{covershow:t.covershow}})])])]),a("el-container",{staticClass:"layoutbox"},[a("el-aside",{staticClass:"left-aside",class:{show:t.asideshow}},[a("div",{staticClass:"myscrollbar"},[a("el-menu",{on:{select:t.handleSelect}},[a("el-menu-item",{attrs:{index:"/plugin"}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("插件列表")])]),a("el-menu-item",{attrs:{index:"/group"}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("群组管理")])]),a("el-menu-item",{attrs:{index:"/request"}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("请求管理")])]),a("el-menu-item",{attrs:{index:"/system"}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("系统信息")])])],1)],1)]),a("el-main",[a("router-view",{staticClass:"homeRouterView"})],1)],1)],1)],1)},R=[],N={name:"Home",data(){return{asideshow:!1,covershow:!1}},methods:{handleSelect(t){this.$router.replace(t)},showmenu(){this.asideshow=!this.asideshow,this.covershow=!this.covershow}}},E=N,O=(0,o.Z)(E,C,R,!1,null,null,null),M=O.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"普通插件",name:"NormalPlugin"}},[a("NormalPlugin")],1),a("el-tab-pane",{attrs:{label:"管理员插件",name:"AdminPlugin"}},[a("AdminPlugin")],1),a("el-tab-pane",{attrs:{label:"超级用户插件",name:"SuperPlugin"}},[a("SuperPlugin")],1),a("el-tab-pane",{attrs:{label:"其他插件",name:"OtherPlugin"}},[a("OtherPlugin")],1)],1)],1)},V=[],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("PluginListTemplate",{attrs:{"plugin-type":t.type}})],1)},A=[],G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{display:"flex","margin-bottom":"10px"}},[a("el-button",{attrs:{icon:"el-icon-refresh",circle:""},on:{click:t.refresh}})],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pluginList}},[a("el-table-column",{attrs:{prop:"model",label:"模块",width:"150"}}),a("el-table-column",{attrs:{prop:"plugin_manager.plugin_name",label:"插件名称",width:"200"}}),a("el-table-column",{attrs:{prop:"plugin_manager.author",label:"作者",width:"150"}}),a("el-table-column",{attrs:{prop:"plugin_manager.version",label:"版本",width:"110"}}),"normal"==t.pluginType?[a("el-table-column",{attrs:{prop:"plugin_manager.status",label:"插件状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[null!=e.row.plugin_manager&&1==e.row.plugin_manager.status?a("el-tag",{attrs:{type:"success"}},[t._v("启用")]):a("el-tag",{attrs:{type:"danger"}},[t._v("禁用")])]}}],null,!1,3561711531)}),a("el-table-column",{attrs:{prop:"plugin_manager.block_type",label:"禁用类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.plugin_manager.status?a("el-tag",{attrs:{type:"success"}},[t._v("未禁用")]):a("el-tag",{attrs:{type:"danger"}},[t._v(t._s(e.row.plugin_manager.block_type))])]}}],null,!1,409102598)}),a("el-table-column",{attrs:{prop:"plugin_settings.level",label:"群权限"}}),a("el-table-column",{attrs:{prop:"plugin_settings.default_status",label:"默认开关"},scopedSlots:t._u([{key:"default",fn:function(e){return[null==e.row.plugin_settings||1==e.row.plugin_settings.default_status||null==e.row.plugin_settings.level?a("el-tag",{attrs:{type:"success"}},[t._v("开启")]):a("el-tag",{attrs:{type:"danger"}},[t._v("关闭")])]}}],null,!1,3881543238)}),a("el-table-column",{attrs:{prop:"plugin_settings.limit_superuser",label:"限制超级用户"},scopedSlots:t._u([{key:"default",fn:function(e){return[null==e.row.plugin_settings||0==e.row.plugin_settings.limit_superuser||null==e.row.plugin_settings.level?a("el-tag",{attrs:{type:"success"}},[t._v("否")]):a("el-tag",{attrs:{type:"danger"}},[t._v("是")])]}}],null,!1,1234206991)}),a("el-table-column",{attrs:{prop:"plugin_settings.cmd",label:"别名"}}),a("el-table-column",{attrs:{prop:"plugin_settings.cost_gold",label:"花费金币"}}),a("el-table-column",{attrs:{prop:"plugin_settings.plugin_type[0]",label:"插件类型"}}),a("el-table-column",{attrs:{prop:"plugin_manager.error",label:"加载状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[null!=e.row.plugin_manager&&0==e.row.plugin_manager.error?a("el-tag",{attrs:{type:"success"}},[t._v("正常")]):a("el-tag",{attrs:{type:"danger"}},[t._v("错误")])]}}],null,!1,1054784431)})]:t._e(),a("el-table-column",{attrs:{label:"配置项",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[null!=e.row.plugin_config?a("span",[a("el-button",{attrs:{size:"small"},on:{click:function(a){return t.showPluginConfigEditVie(e.row)}}},[t._v("配置项")])],1):t._e()]}}])}),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return"normal"==t.pluginType?[null!=e.row.plugin_settings&&null!=e.row.plugin_settings.level?a("el-button",{attrs:{size:"small"},on:{click:function(a){return t.showEditView(e.row)}}},[t._v("编辑")]):t._e()]:void 0}}],null,!0)})],2),a("el-dialog",{attrs:{title:"编辑插件",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("table",[a("tr",[a("td",[t._v("插件名称")]),a("td",[a("el-input",{attrs:{placeholder:"",size:"small"},model:{value:t.pluginData.plugin_manager.plugin_name,callback:function(e){t.$set(t.pluginData.plugin_manager,"plugin_name",e)},expression:"pluginData.plugin_manager.plugin_name"}})],1)]),a("tr",[a("td",[t._v("插件状态")]),a("td",[a("el-switch",{staticStyle:{"margin-right":"30px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"启用","inactive-text":"禁用",size:"small"},model:{value:t.pluginData.plugin_manager.status,callback:function(e){t.$set(t.pluginData.plugin_manager,"status",e)},expression:"pluginData.plugin_manager.status"}})],1)]),a("tr",[a("td",[t._v("禁用类型")]),a("td",[a("el-select",{attrs:{size:"small",disabled:1==t.pluginData.plugin_manager.status},model:{value:t.pluginData.plugin_manager.block_type,callback:function(e){t.$set(t.pluginData.plugin_manager,"block_type",e)},expression:"pluginData.plugin_manager.block_type"}},t._l(t.blockType,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),a("tr",[a("td",[t._v("群权限")]),a("td",[a("el-input",{attrs:{placeholder:"",size:"small"},model:{value:t.pluginData.plugin_settings.level,callback:function(e){t.$set(t.pluginData.plugin_settings,"level",t._n(e))},expression:"pluginData.plugin_settings.level"}})],1)]),a("tr",[a("td",[t._v("默认开关")]),a("td",[a("el-switch",{staticStyle:{"margin-right":"30px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"开启","inactive-text":"关闭",size:"small"},model:{value:t.pluginData.plugin_settings.default_status,callback:function(e){t.$set(t.pluginData.plugin_settings,"default_status",e)},expression:"pluginData.plugin_settings.default_status"}})],1)]),a("tr",[a("td",[t._v("限制超级用户")]),a("td",[a("el-switch",{staticStyle:{"margin-right":"30px"},attrs:{"active-color":"#ff4949","inactive-color":"#13ce66","active-text":"是","inactive-text":"否",size:"small"},model:{value:t.pluginData.plugin_settings.limit_superuser,callback:function(e){t.$set(t.pluginData.plugin_settings,"limit_superuser",e)},expression:"pluginData.plugin_settings.limit_superuser"}})],1)]),a("tr",[a("td",[t._v("别名")]),a("td",[a("el-input",{attrs:{placeholder:"",size:"small"},model:{value:t.pluginData.plugin_settings.cmd,callback:function(e){t.$set(t.pluginData.plugin_settings,"cmd",e)},expression:"pluginData.plugin_settings.cmd"}})],1)]),a("tr",[a("td",[t._v("花费金币")]),a("td",[a("el-input",{attrs:{placeholder:"",size:"small"},model:{value:t.pluginData.plugin_settings.cost_gold,callback:function(e){t.$set(t.pluginData.plugin_settings,"cost_gold",t._n(e))},expression:"pluginData.plugin_settings.cost_gold"}})],1)]),a("tr",[a("td",[t._v("插件类型")]),a("td",[a("el-input",{attrs:{placeholder:"",size:"small"},model:{value:t.pluginData.plugin_settings.plugin_type[0],callback:function(e){t.$set(t.pluginData.plugin_settings.plugin_type,0,e)},expression:"pluginData.plugin_settings.plugin_type[0]"}})],1)])]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.doUpdate}},[t._v("确 定")])],1)]),a("el-dialog",{attrs:{title:"编辑配置项",visible:t.configDialogVisible,"custom-class":"edit-opt"},on:{"update:visible":function(e){t.configDialogVisible=e}}},[a("table"),a("el-table",{attrs:{data:t.pluginData.plugin_config}},[a("el-table-column",{attrs:{prop:"key",label:"键"}}),a("el-table-column",{attrs:{label:"值"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pluginData.plugin_config[e.row.id].value,callback:function(a){t.$set(t.pluginData.plugin_config[e.row.id],"value",t._n(a))},expression:"pluginData.plugin_config[scope.row.id].value"}})]}}])}),a("el-table-column",{attrs:{prop:"help_",label:"说明"}}),a("el-table-column",{attrs:{label:"默认值"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.default_value?a("span",[t._v(" True ")]):0==e.row.default_value?a("span",[t._v(" False ")]):a("span",[t._v(" "+t._s(e.row.default_value)+" ")])]}}])})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.configDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.doConfigUpdate}},[t._v("确 定")])],1)],1)],1)},B=[],I={name:"PluginListTemplate",props:["pluginType"],data(){return{pluginList:[],dialogVisible:!1,configDialogVisible:!1,pluginData:{model:"",plugin_settings:{level:0,default_status:null,limit_superuser:null,cmd:"",cost_gold:0,plugin_type:""},plugin_manager:{plugin_name:"",status:null,error:null,version:0,author:"",block_type:"all"},plugin_config:[],cd_limit:null,block_limit:null,count_limit:null},configsType:[],blockType:[{value:"all",label:"全部"},{value:"group",label:"群组"},{value:"private",label:"私聊"}]}},mounted(){this.initPluginList()},methods:{refresh(){this.initPluginList(),this.$message({message:"刷新成功",type:"success"})},initPluginList(){this.getRequest("/webui/plugins?type_="+this.pluginType).then((t=>{t?this.pluginList=t.data:this.$message.error("获取数据失败！")}))},showPluginConfigEditVie(t){null==t.plugin_settings&&(t.plugin_settings={level:0,default_status:null,limit_superuser:null,cmd:"",cost_gold:0,plugin_type:""}),this.pluginData=JSON.parse(JSON.stringify(t));for(var e=0;e<this.pluginData.plugin_config.length;e++)this.pluginData.plugin_config[e].value instanceof Array?(this.pluginData.plugin_config[e].value=this.pluginData.plugin_config[e].value.join(","),this.configsType.push({index:e,type:"list"})):this.pluginData.plugin_config[e].value=String(this.pluginData.plugin_config[e].value);this.configDialogVisible=!0},showEditView(t){this.pluginData=JSON.parse(JSON.stringify(t)),""!=this.pluginData.plugin_manager.block_type&&null!=this.pluginData.plugin_manager.block_type||(this.pluginData.plugin_manager.block_type="all"),this.dialogVisible=!0},doUpdate(){let t=JSON.parse(JSON.stringify(this.pluginData));t.plugin_manager.status&&(t.plugin_manager.block_type=""),t.plugin_config=null,t.plugin_settings.cmd&&(t.plugin_settings.cmd=t.plugin_settings.cmd.replace("，",",")),this.postRequest("/webui/plugins",t).then((t=>{t&&200==t.code?(this.$message({message:"修改成功",type:"success"}),this.initPluginList()):(t&&t.data?this.$message.error(t.data):this.$message.error("修改失败"),this.initPluginList())})),this.dialogVisible=!1},doConfigUpdate(){let t=JSON.parse(JSON.stringify(this.pluginData));t.plugin_manager=null,t.plugin_settings=null;for(var e=0;e<this.configsType.length;e++)"list"!=this.configsType[e].type||t.plugin_config[this.configsType[e].index].value instanceof Array||(t.plugin_config[this.configsType[e].index].value=t.plugin_config[this.configsType[e].index].value.split(","));this.postRequest("/webui/plugins",t).then((t=>{200==t.code?(this.$message({message:"修改成功",type:"success"}),this.initPluginList()):this.$message.error(t.data)})),this.configDialogVisible=!1}}},H=I,J=(0,o.Z)(H,G,B,!1,null,null,null),j=J.exports,U={name:"NormalPlugin",components:{PluginListTemplate:j},data(){return{type:"normal"}}},W=U,K=(0,o.Z)(W,Z,A,!1,null,null,null),Q=K.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("PluginListTemplate",{attrs:{"plugin-type":t.type}})],1)},Y=[],tt={name:"AdminPlugin",components:{PluginListTemplate:j},data(){return{type:"admin"}}},et=tt,at=(0,o.Z)(et,X,Y,!1,null,null,null),lt=at.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("PluginListTemplate",{attrs:{"plugin-type":t.type}})],1)},st=[],nt={name:"SuperPlugin",components:{PluginListTemplate:j},data(){return{pluginList:[],type:"superuser"}}},rt=nt,ot=(0,o.Z)(rt,it,st,!1,null,null,null),ut=ot.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("PluginListTemplate",{attrs:{"plugin-type":t.type}})],1)},ct=[],gt={name:"OtherPlugin",components:{PluginListTemplate:j},data(){return{type:"hidden"}}},dt=gt,mt=(0,o.Z)(dt,pt,ct,!1,null,null,null),ht=mt.exports,ft={name:"PluginList",data(){return{activeName:"NormalPlugin"}},components:{NormalPlugin:Q,AdminPlugin:lt,SuperPlugin:ut,OtherPlugin:ht}},_t=ft,vt=(0,o.Z)(_t,F,V,!1,null,null,null),bt=vt.exports,yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"群组管理",name:"GroupManage"}},[a("GroupMana")],1)],1)],1)},wt=[],xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{display:"flex","margin-bottom":"10px"}},[a("el-button",{attrs:{icon:"el-icon-refresh",circle:""},on:{click:t.refresh}})],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.groupList}},[a("el-table-column",{attrs:{prop:"group.group_id",label:"群号",width:"150"}}),a("el-table-column",{attrs:{prop:"group.group_name",label:"群名",width:"150"}}),a("el-table-column",{attrs:{prop:"group.member_count",label:"成员数",width:"150"}}),a("el-table-column",{attrs:{prop:"group.max_member_count",label:"最大成员数",width:"150"}}),a("el-table-column",{attrs:{prop:"level",label:"群权限",width:"150"}}),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?a("el-tag",{attrs:{type:"success"}},[t._v("启用")]):a("el-tag",{attrs:{type:"danger"}},[t._v("禁用")])]}}])}),a("el-table-column",{attrs:{label:"已开启被动",width:"450"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.task,(function(e){return a("span",{key:e.name,attrs:{label:e.nameZh}},[1==e.status?a("span",[t._v(t._s(e.nameZh)+",")]):t._e()])}))}}])}),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){return t.showEditView(e.row)}}},[t._v("编辑")])]}}])})],1),a("el-dialog",{attrs:{title:"编辑群聊",visible:t.dialogVisible,width:"400px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("table",[a("tr",[a("td",[t._v("状态")]),a("td",[a("el-switch",{staticStyle:{"margin-right":"30px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"启用","inactive-text":"禁用",size:"small"},model:{value:t.group.status,callback:function(e){t.$set(t.group,"status",e)},expression:"group.status"}})],1)]),a("tr",[a("td",[t._v("群权限")]),a("td",[a("el-input",{attrs:{placeholder:"",size:"small"},model:{value:t.group.level,callback:function(e){t.$set(t.group,"level",e)},expression:"group.level"}})],1)])]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.doUpdate}},[t._v("确 定")])],1)])],1)},kt=[],St={name:"GroupMana",props:["pluginType"],data(){return{groupList:[],dialogVisible:!1,taskList:[],taskZhList:[],group:{group:{group_id:0},status:null,level:0}}},mounted(){this.initGroupList()},methods:{refresh(){this.initGroupList(),this.$message({message:"刷新成功",type:"success"})},initGroupList(){this.getRequest("/webui/group").then((t=>{t?this.groupList=t.data:this.$message.error("获取群数据失败！")}))},showEditView(t){this.group=JSON.parse(JSON.stringify(t)),this.dialogVisible=!0},doUpdate(){this.postRequest("/webui/group",this.group).then((t=>{t&&(this.$message({message:"修改成功",type:"success"}),this.initGroupList())})),this.dialogVisible=!1}}},Dt=St,$t=(0,o.Z)(Dt,xt,kt,!1,null,null,null),Tt=$t.exports,qt={name:"PluginList",data(){return{activeName:"GroupManage"}},components:{GroupMana:Tt}},zt=qt,Lt=(0,o.Z)(zt,yt,wt,!1,null,null,null),Pt=Lt.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"群组请求",name:"GroupRequestMana"}},[a("GroupRequestMana")],1),a("el-tab-pane",{attrs:{label:"好友请求",name:"PrivateRequestMana"}},[a("PrivateRequestMana")],1)],1)],1)},Rt=[],Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("RequestListTemplate",{attrs:{"request-type":t.type}})],1)},Et=[],Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{display:"flex","margin-bottom":"10px"}},[a("el-button",{attrs:{icon:"el-icon-refresh",circle:""},on:{click:t.refresh}}),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:t.clear}},[t._v("清空请求")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.requestList}},[a("el-table-column",{attrs:{prop:"oid",label:"id",width:"50"}}),a("el-table-column",{attrs:{prop:"id",label:"qq",width:"150"}}),a("el-table-column",{attrs:{prop:"flag",label:"flag",width:"170"}}),a("el-table-column",{attrs:{prop:"nickname",label:"昵称",width:"150"}}),a("el-table-column",{attrs:{prop:"level",label:"等级",width:"100"}}),a("el-table-column",{attrs:{label:"性别",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return["male"==e.row.sex?a("span",[t._v(" 男 ")]):a("span",[t._v(" 女 ")])]}}])}),a("el-table-column",{attrs:{prop:"age",label:"年龄",width:"150"}}),a("el-table-column",{attrs:{prop:"comment",label:"验证消息",width:"150"}}),"group"==t.requestType?[a("el-table-column",{attrs:{prop:"invite_group",label:"邀请入群",width:"150"}}),a("el-table-column",{attrs:{prop:"group_name",label:"群聊名称",width:"150"}})]:t._e(),a("el-table-column",{attrs:{label:"操作",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"success"},on:{click:function(a){return t.approveHandler(e.row)}}},[t._v("同意")]),a("el-button",{attrs:{size:"small",type:"warning"},on:{click:function(a){return t.refuseHandler(e.row)}}},[t._v("拒绝")]),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){return t.deleteHandle(e.row)}}},[t._v("删除")])]}}])})],2)],1)},Mt=[],Ft={name:"RequestListTemplate",props:["requestType"],data(){return{requestList:[],noticeMsg:"",request:{id:null,handle:null,type:""}}},mounted(){this.initRequestList()},methods:{refresh(){this.initRequestList(),this.$message({message:"刷新成功",type:"success"})},initRequestList(){this.getRequest("/webui/request?type_="+this.requestType).then((t=>{t?this.requestList=t.data:this.$message.error("获取请求数据失败！")}))},clear(){this.$confirm("确认清空全部请求?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.deleteRequest("/webui/request?type_="+this.requestType).then((t=>{t&&(this.initRequestList(),this.$message({message:"清空成功",type:"success"}))}))})).catch((()=>{this.$message({type:"info",message:"已取消操作"})}))},approveHandler(t){this.request.handle="approve",this.noticeMsg="同意",this.handle(t)},refuseHandler(t){this.request.handle="refuse",this.noticeMsg="拒绝",this.handle(t)},deleteHandle(t){this.request.handle="delete",this.noticeMsg="删除",this.handle(t)},handle(t){this.request.id=t.oid,this.request.type=this.requestType,this.$confirm("确认"+this.noticeMsg+" id："+t.oid+" 请求?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.postRequest("/webui/request",this.request).then((t=>{t&&("ok"==t.data?(this.initRequestList(),this.$message({message:"操作成功",type:"success"})):(this.$message.error(t.data),this.initRequestList()))}))})).catch((()=>{this.$message({type:"info",message:"已取消操作"})}))}}},Vt=Ft,Zt=(0,o.Z)(Vt,Ot,Mt,!1,null,null,null),At=Zt.exports,Gt={name:"GroupRequest",components:{RequestListTemplate:At},data(){return{type:"group"}}},Bt=Gt,It=(0,o.Z)(Bt,Nt,Et,!1,null,null,null),Ht=It.exports,Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("RequestListTemplate",{attrs:{"request-type":t.type}})],1)},jt=[],Ut={name:"PrivateRequest",components:{RequestListTemplate:At},data(){return{type:"private"}}},Wt=Ut,Kt=(0,o.Z)(Wt,Jt,jt,!1,null,null,null),Qt=Kt.exports,Xt={name:"RequestManage",data(){return{activeName:"GroupRequestMana"}},components:{GroupRequestMana:Ht,PrivateRequestMana:Qt}},Yt=Xt,te=(0,o.Z)(Yt,Ct,Rt,!1,null,null,null),ee=te.exports,ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"系统信息",name:"SystemBasicInfo"}},[a("SystemBasicInfo")],1)],1)],1)},le=[],ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-wrapper"},[a("div",{staticClass:"grid-content bg-purple"},[a("el-row",[a("SystemStatusTemplate",{attrs:{"status-type":t.type[0],getData:t.getData}})],1),a("el-row",[a("SystemStatusTemplate",{attrs:{"status-type":t.type[1],getData:t.getData}})],1),a("el-row",[a("SystemStatusTemplate",{attrs:{"status-type":t.type[2],getData:t.getData}})],1)],1),a("div",{staticClass:"grid-content bg-purple-light"},[a("SystemResourceTemplate")],1)])},se=[],ne=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"echarts",style:{width:"100%",height:"338px"},attrs:{"element-loading-text":"加载中...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}})])},re=[],oe={name:"SystemLineDrawTemplate",props:["statusType","getData"],data(){return{statusData:null,data:[],xAxisTable:[],timer:null,myChart:null,loading:!0}},mounted(){this.initData(),this.timer=setInterval((()=>{setTimeout(this.initData)}),5e3)},destroyed(){clearInterval(this.timer),this.timer=null},methods:{initData(){this.statusData=this.getData(this.statusType),Array.isArray(this.statusData)&&(this.xAxisTable=this.statusData.map((t=>t.time)),this.data=this.statusData.map((t=>t.data)),null!=this.data&&(this.loading=!1),this.drawLine())},drawLine(){null==this.myChart&&(this.myChart=this.$echarts.init(this.$refs.echarts));let t="";t="cpu"==this.statusType?"CPU使用率（%）":"memory"==this.statusType?"内存使用率（%）":"硬盘使用率（%）",this.myChart.setOption({title:{text:t,top:"30",left:"32",textStyle:{fontSize:16,color:"#333",fontWeight:"500"}},tooltip:{trigger:"axis",axisPointer:{type:"line",lineStyle:{type:"dashed",color:"#808BA9"}},backgroundColor:"#fff",color:"#333",borderWidth:"1",borderColor:"#D9E1F8",textStyle:{color:"#333",fontSize:"12",lineHeight:"17"},formatter:function(t){return t[0].name+'<br><span style="margin:0 5px 2px 0;display:inline-block;width:6px;height:6px;border-radius:5px;background-color:'+t[0].color+';"></span>'+t[0].seriesName+'<span style="margin-left:10px;">'+t[0].data+"%</span>"}},legend:{icon:"circle",itemHeight:10,textStyle:{fontSize:14,color:"#333"},x:"left",y:"top",padding:[81,0,0,32]},grid:{top:"145",left:"17",right:"17",bottom:"41",containLabel:!0},xAxis:{type:"category",data:this.xAxisTable,axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:"#666",width:"1"}},axisLabel:{formatter(t){return`{a|${t}}`},rich:{a:{height:40,color:"#666",fontSize:14}}}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},boundaryGap:[.1,0],splitLine:{show:!0,lineStyle:{type:"dashed",color:"#D9E1F8"}},axisLabel:{fontSize:14,color:"#92A5E3"}},series:[{name:"使用率",type:"line",data:this.data,color:"#00C5AB",symbolSize:8}]})}}},ue=oe,pe=(0,o.Z)(ue,ne,re,!1,null,null,null),ce=pe.exports,ge=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"resbox"},[a("div",{ref:"echarts",staticStyle:{width:"100%",height:"100%"}}),a("el-drawer",{attrs:{title:t.ccw.title,visible:t.drawer},on:{"update:visible":function(e){t.drawer=e}}},[a("div",{ref:"ccwEcharts",staticStyle:{width:"100%",height:"90%"}})])],1)},de=[],me={name:"SystemResourceTemplate",data(){return{data:[],myChart:null,total_size:null,drawer:!1,ccw:{chart:null,data:[],title:"",total_size:0}}},mounted(){this.initData()},methods:{initData(){null==this.myChart&&(this.myChart=this.$echarts.init(this.$refs.echarts)),this.getRequest("/webui/system/disk").then((t=>{if(t&&200==t.code){for(var e in this.data={image:t.data.image_dir_size,text:t.data.text_dir_size,record:t.data.record_dir_size,font:t.data.font_dir_size,data:t.data.data_dir_size,log:t.data.log_dir_size,temp:t.data.temp_dir_size},t.data)"check_time"!=e&&(this.total_size+=t.data[e]);this.drawPie()}}))},drawPie(t){let e=[],a=[],l=0,i=" MB";if("ccw"==t){for(var s in this.ccw.data)"check_time"!=s&&a.push({value:(this.ccw.data[s]/this.ccw.total_size*100).toFixed(2),name:s});l=this.ccw.total_size}else l=this.total_size,e=["图片资源","文本资源","音频资源","字体资源","数据文件","日志文件","临时文件"],a=[{value:(this.data.image/this.total_size*100).toFixed(2),name:"图片资源"},{value:(this.data.text/this.total_size*100).toFixed(2),name:"文本资源"},{value:(this.data.record/this.total_size*100).toFixed(2),name:"音频资源"},{value:(this.data.font/this.total_size*100).toFixed(2),name:"字体资源"},{value:(this.data.data/this.total_size*100).toFixed(2),name:"数据文件"},{value:(this.data.log/this.total_size*100).toFixed(2),name:"日志文件"},{value:(this.data.temp/this.total_size*100).toFixed(2),name:"临时文件"}];l>1024&&(l/=1024,i=" GB");let n={tooltip:{trigger:"item",formatter:t=>{let e=0;e=-1!=["图片资源","文本资源","音频资源","字体资源","数据文件","日志文件","临时文件"].indexOf(t.name)?this.total_size:this.ccw.total_size;let a="MB",l=t.data.value*e/100;return l>1024&&(l/=1024,a="GB"),t.data.name+"<br>"+l.toFixed(2)+" "+a}},legend:{orient:"vertical",left:10,data:e},graphic:{type:"text",right:"3%",top:"13%",style:{text:"总占用空间："+l.toFixed(2)+i,textAlign:"center",fill:"#333",fontSize:20}},series:[{name:"占用空间",type:"pie",minAngle:5,radius:["30%","70%"],center:["48%","58%"],label:{formatter:"{b|{b}}\n（{c}%）\n",rich:{b:{align:"center"}}},data:a}]};"ccw"==t?this.ccw.chart.setOption(n):this.myChart.setOption(n),this.myChart.on("click",this.showFolderSize)},showFolderSize(t){if("graphic"!=t.componentType){this.drawer=!0;let e="";"字体资源"==t.name?e="font":"图片资源"==t.name?e="image":"文本资源"==t.name?e="text":"音频资源"==t.name?e="record":"数据文件"==t.name?e="data":"日志文件"==t.name?e="log":"临时文件"==t.name&&(e="temp"),this.getRequest("/webui/system/disk?type_="+e).then((e=>{if(null==this.ccw.chart&&(this.ccw.chart=this.$echarts.init(this.$refs.ccwEcharts)),e&&200==e.code){for(var a in this.ccw.title=t.name,this.ccw.data=e.data,this.ccw.total_size=0,e.data)"check_time"!=a&&(this.ccw.total_size+=e.data[a]);this.drawPie("ccw")}}))}}}},he=me,fe=(0,o.Z)(he,ge,de,!1,null,null,null),_e=fe.exports,ve={name:"SystemBasicInfo",components:{SystemStatusTemplate:ce,SystemResourceTemplate:_e},data(){return{type:["cpu","memory","disk"],data:null,timer:null}},mounted(){this.initStatusData(),this.timer=setInterval((()=>{setTimeout(this.initStatusData)}),5e3)},methods:{initStatusData(){this.getRequest("/webui/system/statusList").then((t=>{t&&200==t.code&&(this.data=t.data)}))},getData(t){return null==this.data?{}:"cpu"==t?this.data.cpu_data:"memory"==t?this.data.memory_data:this.data.disk_data}},destroyed(){clearInterval(this.timer),this.timer=null}},be=ve,ye=(0,o.Z)(be,ie,se,!1,null,null,null),we=ye.exports,xe={name:"SystemInfo",data(){return{activeName:"SystemBasicInfo"}},components:{SystemBasicInfo:we}},ke=xe,Se=(0,o.Z)(ke,ae,le,!1,null,null,null),De=Se.exports;l["default"].use(c.Z);const $e=[{path:"/",name:"Login",component:P},{path:"/home",name:"Home",component:M,redirect:"/plugin",children:[{path:"/plugin",name:"插件列表",component:bt},{path:"/group",name:"群组管理",component:Pt},{path:"/request",name:"请求管理",component:ee},{path:"/system",name:"系统信息",component:De}]}],Te=new c.Z({routes:$e});var qe=Te,ze=a(7968),Le=a.n(ze);l["default"].use(Le());var Pe=new(Le().Store)({state:{}}),Ce=a(2261);a(184);l["default"].use(b()),l["default"].config.productionTip=!1,l["default"].prototype.postRequest=w,l["default"].prototype.putRequest=x,l["default"].prototype.getRequest=k,l["default"].prototype.deleteRequest=S,l["default"].prototype.$echarts=Ce,new l["default"]({router:qe,store:Pe,render:t=>t(p)}).$mount("#app")}},e={};function a(l){var i=e[l];if(void 0!==i)return i.exports;var s=e[l]={exports:{}};return t[l](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,l,i,s){if(!l){var n=1/0;for(p=0;p<t.length;p++){l=t[p][0],i=t[p][1],s=t[p][2];for(var r=!0,o=0;o<l.length;o++)(!1&s||n>=s)&&Object.keys(a.O).every((function(t){return a.O[t](l[o])}))?l.splice(o--,1):(r=!1,s<n&&(n=s));if(r){t.splice(p--,1);var u=i();void 0!==u&&(e=u)}}return e}s=s||0;for(var p=t.length;p>0&&t[p-1][2]>s;p--)t[p]=t[p-1];t[p]=[l,i,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var l in e)a.o(e,l)&&!a.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:e[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,l){var i,s,n=l[0],r=l[1],o=l[2],u=0;if(n.some((function(e){return 0!==t[e]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(o)var p=o(a)}for(e&&e(l);u<n.length;u++)s=n[u],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(p)},l=self["webpackChunkweb_ui"]=self["webpackChunkweb_ui"]||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))}();var l=a.O(void 0,[998],(function(){return a(2783)}));l=a.O(l)})();