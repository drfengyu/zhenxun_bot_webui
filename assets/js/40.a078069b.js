(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{643:function(s,t,n){"use strict";n.r(t);var a=n(17),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"title"},[s._v("版本警告")]),n("p",[s._v("真寻Bot需要python环境为 "),n("strong",[s._v("python3.8")]),s._v(" 或 "),n("strong",[s._v("python3.9")])])]),n("h1",{attrs:{id:"开始部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开始部署"}},[s._v("#")]),s._v(" 开始部署")]),s._v(" "),n("ol",[n("li",[s._v("从 "),n("a",{attrs:{href:"https://github.com/HibiKier/zhenxun_bot",target:"_blank",rel:"noopener noreferrer"}},[s._v("HibiKier / zhenxun_bot"),n("OutboundLink")],1),s._v(" clone代码 或 直接下载 "),n("a",{attrs:{href:"https://github.com/HibiKier/zhenxun_bot/archive/refs/heads/main.zip",target:"_blank",rel:"noopener noreferrer"}},[s._v("压缩包"),n("OutboundLink")],1),s._v(" 解压")]),s._v(" "),n("li",[s._v("安装依赖包")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("pip3 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" poetry     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用poetry管理python包")]),s._v("\npoetry "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\n\npoetry shell            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入虚拟环境")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## playwright 需要安装额外的系统环境，在命令行输入以下")]),s._v("\nplaywright "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" chromium\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该命令在win下无需输入")]),s._v("\nplaywright install-deps chromium\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("设置超级用户，打开 "),n("strong",[s._v(".env.dev")]),s._v(" 文件，在"),n("code",[s._v("SUPERUSERS")]),s._v("中添加自己的QQ")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('SUPERUSERS=["123456789"]\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[s._v("打开 "),n("strong",[s._v("configs/config.py")]),s._v(" 填写数据库数据")])]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库（必要）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果填写了bind就不需要再填写后面的字段了#）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 示例："bind": "postgresql://user:password@127.0.0.1:5432/database"')]),s._v("\nbind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库连接链接")]),s._v("\nsql_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"postgresql"')]),s._v("\nuser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据用户名")]),s._v("\npassword"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库密码")]),s._v("\naddress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库地址")]),s._v("\nport"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库端口")]),s._v("\ndatabase"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库名称")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("############################################################")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 如果你是与教程一模一样的命令代码，且数据库也在该服务器上 ###")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("############################################################")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以直接复制以下配置")]),s._v("\nbind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库连接链接")]),s._v("\nsql_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"postgresql"')]),s._v("\nuser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uname"')]),s._v("\npassword"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhenxun"')]),s._v("\naddress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1"')]),s._v("\nport"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5432"')]),s._v("\ndatabase"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testdb"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("ol",[n("li",[s._v("启动真寻，会在 "),n("strong",[s._v("configs")]),s._v(" 和 "),n("strong",[s._v("data/configs")]),s._v(" 目录下生成各种配置文件")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("python3 bot.py\n# or\npython bot.py\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ol",{attrs:{start:"6"}},[n("li",[s._v("打开 "),n("strong",[s._v("configs/config.yaml")]),s._v("，里面包含的是各种插件的配置项，填写完毕后重启真寻Bot")])])])}),[],!1,null,null,null);t.default=r.exports}}]);