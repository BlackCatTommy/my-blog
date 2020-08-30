---
title: Mybatis
date: 2020-08-30
categories:
 - article
author:
---
### Mybatis

#### 初始化阶段

- ​	解析xml文件，填充到对象中

#### 代理阶段

- 

#### 数据读写阶段

sqlSession提供了访问的api，sqlSession基于Executor来实际执行

sqlSession可以直接访问数据库，

通过封装Mapper类来访问，有业务含义

- namespace
- id
- requesttype
- sql

