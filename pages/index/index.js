// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '夏雨',
    userInfo: {},
    isShow: true // true表示没有授权，显示按钮
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad 页面加载')
    console.log(this)
    this.getUserInfo()
  },

  getUserInfo () {
    // 判断用户是否授权
    wx.getSetting({
      success: (data) => {
        console.log(data)
        if (data.authSetting['scope.userInfo']) {
          // 用户已经授权
          this.setData({
            isShow: false
          })
        } else {
          // 没有授权
          this.setData({
            isShow: true
          })
        }
      },
    })
    // 获取用户登录的信息
    wx.getUserInfo({
      success: data => {
        console.log(data)
        // 更新data中userInfo
        this.setData({
          userInfo: data.userInfo
        })
      },
      fail: () => {
        console.log('获取用户数据失败')
      }
    })
  },

  // 点击按钮处理用户数据
  handleUserInfo (data) {
    console.log('用户点击了', data)
    // 判断用户点击的是否是允许
    if (data.detail.rawData) {
      // 用户点击的是允许
      this.getUserInfo();
    }
  },

  // 点击跳转list界面
  handleClick () {
    wx.navigateTo({
      url: '/pages/list/list',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady 页面初次渲染完成')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow 页面显示')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})