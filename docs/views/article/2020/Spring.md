---
title: Spring+Springboot复习
date: 2020-07-12
categories:
 - article
author:
---




然后spring初始化

#### Springboot的适用场景和优缺点

1. 什么是Springboot
   Springboot可以快速构建一个可以独立运行的、生产级的基于spring的应用程序
2. 优点
   快速创建可独立运行的spring应用程序
   内嵌tomcat、或者是jetty
   starter依赖关系来简化构建配置
   自动配置spring和第三方库，在可能的情况下

Springboot适用于构建微服务，Springboot的优点就是快速开发，可以再几秒内构建一个项目，封装了我们常用的中间件如mybatis、redis、mogodb等等，内置web容器如tmocat，缺点是集成度较高，使用过程中不太容易了解底层

Springboot的最大优势

最大优势是约定优于配置的设计理念，约定优于配置体现再Springboot starter 和Sprong jpa 
Springboot starter基于约定的资源进行初始化（Resource 下的spring.factory）加载配置文件中的依赖，Spring jpa基于约定方式自动生成sql



#### Spring boot的启动流程

1. 首先去依赖的starter包里面去找对应的配置文件，Resources/meta-inf/spring.factories
2.  根据spring.factories去加载AutoConfig类
3. @Conditional类，进行自动配置并将bean注入到spring容器

 Spring boot启动时，会根据spring boot starter 去加载对应的配置文件，然后根据配置文件去进行资源的初始化，注入到spring容器

### Springboot的自动配置是如何实现的

1. @SpringBootApplication(@Configuration @ConponentScan @EnableAutoConfiguration)
2. @EnableAutoConfigutation(@import ->AutoConfigurationImportSelector-->SpringFactoriesLoader-(spring.factiories中的以EnableAutoConfiguration为key的配置信息))



​	@SpringBootApplication->@EnableAutoConfigutation->AutoConfigurationImportSelector->/META-INF/s'p'ring-factories

#### 什么是嵌入式服务器？为什么要使用嵌入式

1. 非嵌入式 ：配置java环境，配置tomcat环境，将war包部署到tomcat中
2. 嵌入式：直接将应用程序打包为包含Embaded tomcat的jar包，就可以运行java程序一样运行web应用

#### Springboot和Spring的初始化流程

1. BeanFactory

2. 后置处理器PostProcessor
   BeanFactoryPostProcessor和BeanPostProcessor

3. 国际化、消息广播、监听器

4. 初始化bean
   获取beanDefinition->加载beanDefinition->实例化bean->属性装配->初始化

   在obtainBeanFactory是加载xml配置文件

#### 什么是Spring框架和使用Spring框架的好处

1. 开源框架
2. 为了解决企业开发应用程序的复杂性、让开发者专注也业务
3. 好处：简化了开发，SpringIoc管理了Bean，MVC的结构让web应用开发结构清晰，

#### 什么是控制反转和依赖注入 IOC和DI

1. 控制反转：系统中的bean的创建、依赖注入、初始化销毁由Spring容器来管理，

2. 依赖注入：一个类中依赖的其他类，由Spring容器注入，依赖注入是控制反转的基础

   在编译阶段无法确定的对象，可以在容器初始化的时候注入进来

   注入的方式：构造器、setter方法，接口注入

3. 三层缓存和循环依赖的解决

#### BeanFactory和Application的关系

1. BeanFactory可以理解为bean集合的工厂类，包含bean定义，主要管理bean的生命周期、
2. ApplicationContext是对BeanFactroy的拓展，拓展了国际化、消息分发、监听器、统一资源读取（常用ClassPathXmlApplicationContext、FileSystemApplicationContext、xmlWebApplicationContext）

#### Spring有几种配置方式

1. xml
   常用标签 <beans> <Bean><Servlet><Context>
2. 基于注解
   启用注解：<context:annotation-config>
   常用的注解:@Autowired   @Qualifiler JSR250 @Resource @PostConstruct @PreDestory 
3. 基于java
   @Configuration和@Bean或者是@ComponentScan@Import
   使用AnnotationConfigApplicationContext来实例化

#### Spring bean的生命周期

1. ​	实例化->属性装配（依赖注入）->初始化（调用初始化方法和一些后置处理器）->使用->销毁
   初始化：InitializingBean ->afterPropertiesSet   Aware     JSR250的@PostConstruct
   @PreDestory

#### Spring bean的作用域

1. 五种  
   Singleton :默认
   ProtoType：每个bean请求对应一个实例，多例的
   Request：一次请求对应一个bean
   Session：每次会话对应一个bean，在session过期即会话结束之后失效
   Globle-Session: 

#### 什么是Spring inner  bean?

1. 当一个bean在另外一个bean内部使用时，就成为内部bean，可以通过setter方法进行属性注入或者是构造器参数进行注入

#### Spring中的bean是线程安全的吗？

1. Spring并没有对单例bean进行任何封装处理，如果涉及到并发问题需要自己处理
2. Spring中的bean比如service和dao一般是没有状态变化，不涉及到线程共有资源的变化，一版没有县城问题
3. view model 会出现线程问题，可以通过改为prototype多例来解决

#### 举例说明如何向Spring中注入Java Collections

1. ```xml
   <bean id="" class="">
   
   	<proterty name="customerList">
   		<list>
         		<value></value>    
         	</list>
           <Set>
           	<value></value>
           </Set>
   		<Map>
           	<Entry key="" value=""></Entry>
           </Map>
           <props>
           	<prop key="">admin</prop>
           </props>
   	</proterty>
   
   </bean>
   ```

   

#### 解释Spring bean的自动装配

1. 自动装配就是在一个bean中使用到另外一个bean时，bean实例的自动注入,可以通过@Autowirde实现  必须加配置<context: annotation-config/>或者是配置AutowiredAnnotationBeanPostProcessor
2. 自动装配模式的区别：
   byName:通过bean的名称进行注入
   byType:通过bean的类型进行注入
   constructor:通过构造器的参数来进行注入
   autodetect: constructor->byType

#### 如何开启基于注解的自动装配

1. < context:annotation-config/>
2. 添加后置处理器：AutowiredAnnotationBeanPostProcessor

#### 举例解释@Required注解

1. 用来验证Bean的属性是否被正确设置（如果没有设置抛出异常）
2. RequiredAnnotationBeanPostProcessor来处理
3. 比如如果一个bean中的某个属性是必须的，但是却没有注入，就会抛出异常

### 举例说明@Qualifier注解

1. 容器中有多个同一类型的bean是，@Qualifier注解  只会注入他标注名称的bean，找不大会报错·	
2. @Primary用在配置类中@Bean上，表明为主要
3. 同时使用@Primary和@Qualifier会选择@Qulalifier																																							

#### 构造方法注入和Setter注入的区别

1. 构造方法是在创建对象时被调用，参数必须完整才可以创建成功
   Spring无法解决构造方法注入时的循环依赖
2. Setter方法不要求注入时参数的完整性，在属性装配时设值，Spring通过三层缓存的方式解决了循环依赖

#### Spring事件监听机制

1. ApplicationEvent和ApplicationListener<ApplicationEvent>
2. Spring中有上下文刷新ContextRefreshedEvent、开始、停止、关闭、请求处理事件（RequestHandlerEvent）

#### ClassPathResource和FileSystemResource的区别

1. ClassPath为默认路径，ClassPath给出文件名即可，前提时文件在src目录下，环境变量中读取配置文件
2. FileSystemResource的话，需要给出配置文件的绝对路径或者是相对路径。从配置文件中读配置文件

#### Spring中使用了哪些设计模式

1. 单例 bean
2. 工厂模式 beanFactory来创建bean的实例
3. 代理 Aop中用的比较多
4. 观察者模式  spring中的事件监听

#### Spring中的AOP

1. AOP就是在不改变原有代码的情况下，在代码前有执行相关逻辑
2. 应用场景：日志、事务、权限等
3. 主要有两种Cglib和Jdk
   Cglib 通过继承父类 相关类（Enhancer和MethodInteceptor）
   Jdk：通过实现相同的接口 （关键类Proxy和InvocationHandler）

#### Springboot的使用场景和优略和执行流程



#### 六大原则：

1. 开闭
2. 单一
3. 依赖倒置
4. 里氏代换
5. 迪米特
6. 接口隔离

#### Git如何找回版本以及合并分支

1. git reflog 
   git reset --hard 

2. merge

   git checkout master

   git merge xxx



