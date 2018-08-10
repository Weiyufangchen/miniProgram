// pages/detail/detail.js
let datas = require('../../datas/list-data.js')
// console.log(datas)
let appDatas = getApp()
console.log(appDatas, typeof appDatas)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData: {},
    index: null,   // 定义 index用来接收并保存传入的index
    isCollected: false,  // 默认没有收藏
    isMusicPlay: false   // 默认停止播放
  },
  // 点击切换收藏
  switchCollect () {
    // 点击取反
    let isCollected = !this.data.isCollected
    // 更新状态
    this.setData({
      isCollected
    })
    // 提示用户
    let title = isCollected ? '收藏成功' : '取消收藏'
    wx.showToast({
      title,
      icon: 'success'
    })
    // 缓存到本地 {1: true, 2: false}
    let {index} = this.data
    // 先获取本地缓存的数据，看看有没有
    wx.getStorage({
      key: 'isCollected',
      success: (res) => {
        console.log(res)
        let datas = res.data
        // 将isCollected保存
        datas[index] = isCollected
        // 保存
        wx.setStorage({
          key: 'isCollected',
          data: datas,
          success: () =>{
            console.log('保存成功')
          }
        })
      },
    })

  },
  // 点击分享
  handleShare () {
    // 显示底部操作菜单
    wx.showActionSheet({
      itemList: ['分享到朋友圈', '分享到qq空间', '分享到微博'],
      success: (res) => {
        // console.log(res.tapIndex)
        wx.showToast({
          title: '分享成功',
          icon: 'success'
        })
      }
    })
  },
  // 点击播放音乐
  handleMusicPlay() {
    // 处理音乐播放
    let isMusicPlay = !this.data.isMusicPlay
    // 更新状态
    this.setData({
      isMusicPlay
    })
    // 控制音乐播放
    if (isMusicPlay) {
      // 播放
      let {dataUrl, title} = this.data.detailData.music
      wx.playBackgroundAudio({
        dataUrl,
        title
      })
    } else {
      // 暂停音乐
      wx.pauseBackgroundAudio()
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    let {index} = options
    // 更新detailData
    this.setData({
      index,
      detailData: datas.list_data[index]
    })
    // 根据本地缓存的数据判断用户是否收藏过当前的文章
    let detailStorage = wx.getStorageSync('isCollected')        // 可能为空，从来没有收藏过
    if (!detailStorage) {
      // 在缓存中初始化空对象
      wx.setStorageSync('isCollected', {})
    }
    // 判断用户是否收藏过
    if (detailStorage[index]) {  // 有，收藏过，显示为true
      this.setData({
        isCollected: true
      })
    }
    // 监听音乐播放
    wx.onBackgroundAudioPlay(() =>{
      console.log('音乐播放')
      // 修改isMusicPlay状态
      this.setData({
        isMusicPlay: true
      })
      // 修改appDatas中的数据
      appDatas.data.isPlay = true
      appDatas.data.pageIndex = index
    })
    // 判断音乐是否在播放
    if (appDatas.data.isPlay && appDatas.data.pageIndex === index) {
      this.setData({
        isMusicPlay: true
      })
    }
    // 监听音乐暂停
    wx.onBackgroundAudioPause(() => {
      console.log('音乐暂停')
      // 修改isMusicPlay
      this.setData({
        isMusicPlay: false
      })
      // 修改appDatas中的数据
      appDatas.data.isPlay = false
      // 下标不用传，暂停必须是先播放，而播放的时候就已经存入index
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