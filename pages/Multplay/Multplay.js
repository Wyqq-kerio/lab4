// pages/Multplay/Multplay.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      hiddenmodalput: true,
      value:2312312,
    },
    toBegin: function (params) {
        wx.navigateTo({
          url: '../CreatRoom/CreatRoom',
        })
    },
    toBegin1: function (params) {
        wx.navigateTo({
          url: '../Multplay/Multplay',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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

    },
    modalinput: function () {
      this.setData({
        //注意到模态框的取消按钮也是绑定的这个函数，
        hiddenmodalput: !this.data.hiddenmodalput
      })
    },
    confirm:function (params) {
      wx.setStorage({
        key:'number',
        data:this.data.value
      })
      wx.navigateTo({
        url: '../otherroom/otherroom',
      })
    },
})