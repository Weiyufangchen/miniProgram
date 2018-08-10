// pages/list/list.js
let datas = require('../../datas/list-data.js')  // 只能写相对路径
// console.log(datas, typeof datas)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr: [],  // 定义空数组存数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 更新状态
    this.setData({
      listArr: datas.list_data
    })
  },
  // 点击跳转到detail详情页
  toDetail(event) {
    console.log(event)
    let index = event.currentTarget.dataset.index  // 用户点击的item模板下标
    wx.navigateTo({
      // 拼串，传递index，用于查找数据datas
      url: '/pages/detail/detail?index=' + index,
    })
  },
  // 点击轮播图跳转到detail详情页,传入图片的自定义索引
  carouselToDetail (event) {
    console.log(event)
    let {index} = event.target.dataset
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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