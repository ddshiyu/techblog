---
title: EditorConfig配置
date: 2023-04-01
categories:
- 技术
tags:
- 开篇
sticky: 1
publish: true
---
:::tip
EditorConfig是配置编辑器格式的文件，在项目中最好加上，统一各个开发人的格式。
:::
<!-- more -->

## 一、什么是 EditorConfig
EditorConfig 有助于为跨各种编辑器和 IDE 处理同一项目的多个开发人员保持一致的编码风格，它包含用于定义编码样式的文件格式和一组文本编辑器插件，使编辑器能够读取文件格式并遵守定义的样式。
## 二、通配符模式
| * | 匹配任何字符串，路径分隔符 ( /)除外 |
| --- | --- |
| ** | 匹配任意字符串辅导 |
| ? | 匹配任何单个字符 |
| [name] | 匹配名称中的任何单个字符 |
| [!name] | 匹配任何不在名称中的单个字符 |
| {s1,s2,s3} | 匹配给定的任何字符串（以逗号分隔）（自 EditorConfig Core 0.11.0 起可用） |
| {num1..num2} | 匹配num1和num2之间的任何整数，其中 num1 和 num2 可以是正数或负数 |

## 三、属性

- root：应在文件顶部任何部分之外指定的特殊属性。设置为true以停止.editorconfig对当前文件的文件搜索
- indent_style：设置为**制表符**或**空格**分别使用硬制表符或软制表符
- indent_size：一个整数，定义用于每个缩进级别的列数和软选项卡的宽度（如果支持）。当设置为`tab`tab_width时，将使用（如果指定）的值
- tab_width：一个整数，定义用于表示制表符的列数。这默认为 的值，indent_size通常不需要指定
- end_of_line：设置为lf、cr或crlf以控制换行符的表示方式
- charset：设置为latin1 , utf-8 , utf-8-bom , utf-16be或utf-16le来控制字符集
- trim_trailing_whitespace：设置为true以删除换行符之前的任何空白字符，设置为false以确保不会
- insert_final_newline： 设置为true以确保文件在保存时以换行符结尾，设置为false以确保它不会
## 四、实例
#### 一般前端工程的配置实例
```
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true
end_of_line = lf
[*.md]
trim_trailing_whitespace = false
```
