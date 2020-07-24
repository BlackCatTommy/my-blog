(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{381:function(t,a,s){"use strict";s.r(a);var e=s(10),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"mybatis种-和-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybatis种-和-的区别"}},[t._v("#")]),t._v(" Mybatis种#{} 和${}的区别")]),t._v(" "),s("p",[t._v("#{}可以进行预编译，将#{}替换为？，通过preparedStatment.set设值\n${}进行字符串替换\n#{}可以防止sql注入")]),t._v(" "),s("h3",{attrs:{id:"当实体类中的字段名和表名中的字段名不一样时应该如何解决？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当实体类中的字段名和表名中的字段名不一样时应该如何解决？"}},[t._v("#")]),t._v(" 当实体类中的字段名和表名中的字段名不一样时应该如何解决？")]),t._v(" "),s("p",[t._v("（1）通过起别名\n（2）通过resultMap来映射")]),t._v(" "),s("h3",{attrs:{id:"模糊查询like怎么写？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模糊查询like怎么写？"}},[t._v("#")]),t._v(" 模糊查询Like怎么写？")]),t._v(" "),s("p",[t._v("在变量中添加%temp%")]),t._v(" "),s("h3",{attrs:{id:"mapper接口的工作原理？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapper接口的工作原理？"}},[t._v("#")]),t._v(" Mapper接口的工作原理？")]),t._v(" "),s("p",[t._v("xml文件中的< select > < insert > < update > < delete >都会被解析为一个MapperStatement对象，标签中的id对应接口的方法名，通过接口的全限定名+加方法名，可以定位一个对象")]),t._v(" "),s("p",[t._v("​\t原理：通过jdk动态代理，生成一个proxy对象，调用proxy中对应的方法时，转而去执行MapperStatement中对象中的sql，然后将结果返回")]),t._v(" "),s("h3",{attrs:{id:"mybatis是如何进行分页的？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybatis是如何进行分页的？"}},[t._v("#")]),t._v(" Mybatis是如何进行分页的？")]),t._v(" "),s("p",[t._v("​\tMybatis可以通过RowBounds对象进行分页，针对ResultSet结果集进行的内存分页，而非物理分页，\n​\t物理分页可以使用分页插件，分页插件的基本原理时实现Mybatis的分页接口，拦截方法内拦截待执行的sql，重写sql添加分页参数，通过dialect方言")]),t._v(" "),s("h3",{attrs:{id:"mybatis是如何将返回结果封装为目标对象返回"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybatis是如何将返回结果封装为目标对象返回"}},[t._v("#")]),t._v(" Mybatis是如何将返回结果封装为目标对象返回")]),t._v(" "),s("p",[t._v("​\t（1）通过resultMap对应映射关系\n​\t（2）通过别名来对应对象属性名\n​\t通过反射创建对象，然后根据属性名，将返回对应的值填充进去，如果列明和属性名对应不上，则无法填充")]),t._v(" "),s("h3",{attrs:{id:"mapper中如何传递多个参数？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapper中如何传递多个参数？"}},[t._v("#")]),t._v(" Mapper中如何传递多个参数？")]),t._v(" "),s("p",[t._v('​\t（1）直接传，f在xml中#{0}，#{1}.。。\n​\t（2）在dao中的接口方法参数前加@param   比如insert(@param("id")  Integer id)\n​\t  (3)  封装为一个map（推荐）')]),t._v(" "),s("h3",{attrs:{id:"动态sql有什么用？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态sql有什么用？"}},[t._v("#")]),t._v(" 动态sql有什么用？")]),t._v(" "),s("p",[t._v("​\tMybatis可以以标签的形式在xml文件中编写动态sql，执行原理，根据表达式的判断并动态拼接sql    trim|where|if|foreach|choose|when|otherwise")]),t._v(" "),s("p",[t._v("Mybatis中xml文件中的id是否可以重复\n如果配置了namespace则可以重复，没有配置则不可以重复\n原因：namespace+id作为map的key来匹配")]),t._v(" "),s("h3",{attrs:{id:"mybatis为什么是半自动orm？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybatis为什么是半自动orm？"}},[t._v("#")]),t._v(" Mybatis为什么是半自动ORM？")]),t._v(" "),s("p",[t._v("​\t我们需要自己编写sql来查询结果集。mybatis来帮我们完成对象映射。")]),t._v(" "),s("h3",{attrs:{id:"mybatis的一级、二级缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybatis的一级、二级缓存"}},[t._v("#")]),t._v(" Mybatis的一级、二级缓存")]),t._v(" "),s("ol",[s("li",[t._v('一级缓存默认启用，一级缓存是sqlSession级别的，原理：执行方法和参数通过算法生成key，将key和对应的值缓存到map中，任何的insert delete update都会清空一级缓存（关闭一级缓存可以在select标签上flushCache="true"）')]),t._v(" "),s("li",[t._v("二级缓存是sqlSessionFactory，相当于是跨sqlSession，缓存是以namespace为单位的，\n设置二级缓存可以添加配置\n"),s("cache",{attrs:{eviction:"FIFO",flushInterval:"60000",size:"512",readOnly:"true"}}),t._v("\n二级缓存可能会造成脏读，不建议使用")],1)]),t._v(" "),s("h4",{attrs:{id:"mybatis的接口绑定有几种方式？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybatis的接口绑定有几种方式？"}},[t._v("#")]),t._v(" Mybatis的接口绑定有几种方式？")]),t._v(" "),s("p",[t._v("两种：通过xml方式     通过注解方式@Select @Update")])])}),[],!1,null,null,null);a.default=r.exports}}]);