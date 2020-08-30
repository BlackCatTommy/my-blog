---
title: Mybatis常见面试题
date: 2020-07-14
categories:
 - article
author:
---


### Mybatis常见面试题

#### Mybatis种#{} 和${}的区别

#{}可以进行预编译，将#{}替换为？，通过preparedStatment.set设值
${}进行字符串替换 
#{}可以防止sql注入

#### 当实体类中的字段名和表名中的字段名不一样时应该如何解决？

（1）通过起别名
（2）通过resultMap来映射

#### 模糊查询Like怎么写？

在变量中添加%temp%

#### Mapper接口的工作原理？

xml文件中的< select > < insert > < update > < delete >都会被解析为一个MapperStatement对象，标签中的id对应接口的方法名，通过接口的全限定名+加方法名，可以定位一个对象

​	原理：通过jdk动态代理，生成一个proxy对象，调用proxy中对应的方法时，转而去执行MapperStatement中对象中的sql，然后将结果返回

#### Mybatis是如何进行分页的？

​	Mybatis可以通过RowBounds对象进行分页，针对ResultSet结果集进行的内存分页，而非物理分页，
​	物理分页可以使用分页插件，分页插件的基本原理时实现Mybatis的分页接口，拦截方法内拦截待执行的sql，重写sql添加分页参数，通过dialect方言

#### Mybatis是如何将返回结果封装为目标对象返回

​	（1）通过resultMap对应映射关系
​	（2）通过别名来对应对象属性名
​	通过反射创建对象，然后根据属性名，将返回对应的值填充进去，如果列明和属性名对应不上，则无法填充

#### Mapper中如何传递多个参数？

​	（1）直接传，f在xml中#{0}，#{1}.。。
​	（2）在dao中的接口方法参数前加@param   比如insert(@param("id")  Integer id)
​	  (3)  封装为一个map（推荐）

#### 动态sql有什么用？

​	Mybatis可以以标签的形式在xml文件中编写动态sql，执行原理，根据表达式的判断并动态拼接sql    trim|where|if|foreach|choose|when|otherwise

Mybatis中xml文件中的id是否可以重复
	如果配置了namespace则可以重复，没有配置则不可以重复
	原因：namespace+id作为map的key来匹配

#### Mybatis为什么是半自动ORM？

​	我们需要自己编写sql来查询结果集。mybatis来帮我们完成对象映射。

### Mybatis的一级、二级缓存

1. 一级缓存默认启用，一级缓存是sqlSession级别的，原理：执行方法和参数通过算法生成key，将key和对应的值缓存到map中，任何的insert delete update都会清空一级缓存（关闭一级缓存可以在select标签上flushCache="true"）
2. 二级缓存是sqlSessionFactory，相当于是跨sqlSession，缓存是以namespace为单位的，
   设置二级缓存可以添加配置
   <cache eviction="FIFO" flushInterval="60000" size="512" readOnly="true"/> 
   二级缓存可能会造成脏读，不建议使用

### Mybatis的接口绑定有几种方式？

两种：通过xml方式     通过注解方式@Select @Update

