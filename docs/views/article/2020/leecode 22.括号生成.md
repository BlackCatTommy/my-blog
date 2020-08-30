---
title: leecode 22.括号生成
date: 2020-08-30
categories:
 - article
author:
---
#### leecode 22.括号生成

n =1 

()

n = 2 

()()

(())

n=3

() () ()

(())()

()(())

(()())

((()))



可以看成是树的遍历

左子树进行（

右子树进行 ） （限定条件，在这里右子树次数必须小于左子树即前面的左括号数量必须大于等于右括号）



```java
public static void main(args []){
    
}
public void trafer(List res,StringBuilder str,int left,int right,int n){
    if(str.length() == n * 2){
        res.add(str.toString());
    }
    //先选择左子树
    if(left < n){
        str.append("(");
        //选择
        trafer(res,str,left+1,right,n);
        //回溯
        str.deleteCharAt(str.length()-1);
    }
    //选择右子树(必须小于左子树才能选择右子树)
    if(right < left){
        str.append(")");
        trafer(res,str,left,right+1,n);
        str.deleteCharAt(str.length() - 1)
    }
   
}
```











