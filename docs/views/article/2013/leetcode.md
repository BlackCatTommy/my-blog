---
title: leetcode
date: 2020-04-22
categories:
 - article
tags:
 - apple
author: 国馆
---

leetcode 

13.罗马数字正式转整数

思考：

特殊位置

```
"I", "V", "X", "L", "C", "D", "M"
```

较小的罗马数字出现在前面时比较特殊，需要后面的罗马数字对应的值减去前面的值。

其他的只要对应就行了

我们只需要判断该字符对应的下标和他后面对应的小标谁大。

如果小于后面的，需要罗马对应的值减去前面对应的值，然后跳过后面的这个罗马数字，数组中的两个罗马值对应一个值。

大于等于，直接在总和上面加上就行

```java
 ArrayList<String> list = new ArrayList<String>(Arrays.asList("I", "V", "X", "L", "C", "D", "M"));
    int[] nums = {1, 5, 10, 50, 100, 500, 1000};
    String s = "LVIII";
    char[] chars = s.toCharArray();
    int sum = 0;
    for (int i = 0; i < chars.length; i++) {
        if (i >= chars.length) {
            continue;
        }
        if (i == chars.length - 1 || list.indexOf(String.valueOf(chars[i])) >= list.indexOf(String.valueOf(chars[i + 1]))) {
            sum += nums[list.indexOf(String.valueOf(chars[i]))];
        } else {
            if (list.indexOf(String.valueOf(chars[i])) < list.indexOf(String.valueOf(chars[i + 1]))) {
                int temp = nums[list.indexOf(String.valueOf(chars[i + 1]))] - nums[list.indexOf(String.valueOf(chars[i]))];
                sum += temp;
                i += 1;
            }
        }

    }
    System.out.println(sum);
}
```