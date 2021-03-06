## 小程序

### 什么是小程序？

1. 无需下载，用完即走(体积太小，刚发布的压缩包体积最大不能超过1M， 2017年4月将1M提升2M)

### 小程序特点？

1. 体积小
2. 同app进行互补的，可以实现app基本的功能
3. 微信扫一扫或者是搜索就可以去下载
4. 开发周期短，成本较低

### 适配方案

1. viewport适配 width = device-width
2. 单位： rpx
3. iphone6： 1rpx = 1物理像素 = 0.5px   dpr = 物理像素/设备独立像素 = 2

### 重要的文件

1. wxml view结构 ---> html
2. wxss view样式 ---> css
3. js view行为 ---> js
4. json文件： 数据 && 配置

### 注册小程序： App（）

### 注册页面 Page（）

### 数据绑定：

1. 在data中初始化页面需要的数据，在页面可以直接使用

### 事件(冒泡事件 || 非冒泡事件)

1. 冒泡事件： bind + 事件名
2. 非冒泡事件： catch + 事件名

### 模版template
1. 定义：template 属性：name（标识模版）
2. 使用：template 属性： is（模版的name）
3. 引入模版结构：<import src='路径'>
4. 引入模版样式：@import '路径'
5. 传参：data='{{...item}}'

### 列表渲染
1. wx：for
2. wx：key为每个个体元素进行标记
3. 遍历的个体：item
4. 遍历的下标：index

### 本地缓存（setStorage，setStorageSync）

1. 缓存的是用户是否收藏当前文章：{0：true，1：false}
2. 注意：
   1. 缓存之前应该先去获取之前本地缓存的数据
   2. 缓存的新数据是在原有数据的基础上进行的
   3. 当页面加载的时候onload中获取本地缓存的数据（动态修改当前页面是否收藏文章的状态）
   4. 如果storage中没有缓存过通过key获取的value为空！！
   5. 如果用户之前没有缓存过的话：初始化一个空对象在storage中

### 音乐播放

1. 如何知道音乐在播放或者是暂停
2. 将播放音乐的页面状态缓存到appData中

###Tip
1. tip: wx.navigateTo 和 wx.redirectTo 不允许跳转到 tabbar 页面，只能用 wx.switchTab 跳转到 tabbar 页面