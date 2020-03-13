(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28811f42","chunk-2d0aef35","chunk-2d0dd10e","chunk-2d0f0bc6"],{"0bf3":function(n,t,d){"use strict";d.r(t),t["default"]="<template>\n  <div>\n    <d2-crud\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date',\n          width: '180'\n        },\n        {\n          title: '姓名',\n          key: 'name',\n          width: '180'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄'\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄'\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄'\n        }\n      ]\n    }\n  },\n  mounted () {\n    console.log(this.$refs.d2Crud.d2CrudData)\n  }\n}\n<\/script>"},6942:function(n,t,d){"use strict";d.r(t);var e=function(){var n=this,t=n.$createElement,d=n._self._c||t;return d("d2-container",[d("template",{slot:"header"},[n._v("基础表格")]),d("d2-crud",{ref:"d2Crud",attrs:{columns:n.columns,data:n.data}}),d("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[d("d2-markdown",{attrs:{source:n.doc}})],1),d("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[d("d2-highlight",{attrs:{code:n.code}})],1),d("d2-link-btn",{attrs:{slot:"footer",title:"文档",link:"https://d2.pub/zh/doc/d2-crud-v2"},slot:"footer"})],2)},a=[],s=(d("8099"),d("9e48")),r=d.n(s),o=d("0bf3"),u={data:function(){return{doc:r.a,code:o["default"],columns:[{title:"日期",key:"date",width:"180"},{title:"姓名",key:"name",width:"180"},{title:"地址",key:"address"}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}},mounted:function(){console.log(this.$refs.d2Crud.d2CrudData)}},c=u,l=d("2877"),i=function(n){n.options.__source="src/views/demo/d2-crud/demo1/index.vue"},m=i,f=Object(l["a"])(c,e,a,!1,null,null,null);"function"===typeof m&&m(f);t["default"]=f.exports},8099:function(n,t,d){"use strict";d.r(t);var e=d("8bbf"),a=d.n(e),s=d("d075"),r=d.n(s);a.a.use(r.a)},"9e48":function(n,t){n.exports="在 `D2 Crud` 组件中传入 `columns` 和 `data` 对象数组，即可创建一个最基础的表格，`columns` 中的 `key` 需要与 `data` 中对象的key严格对照，可以在 `columns` 对象中传入 `width` 属性来控制列宽。当表格中的数据通过操作变化时，可以通过 `this.$refs.d2Crud.d2CrudData` 拿到变化后的表格数据。代码如下：\n"}}]);