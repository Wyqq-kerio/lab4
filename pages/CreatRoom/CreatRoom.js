// pages/award/award.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        modalHidden:true,//是否隐藏对话框
        hiddenmodalput: true,
        value:2312312,
    },
    toBegin1: function (params) {
        wx.navigateTo({
          url: '../game2/game2',
        })
    },
    showWindows: function() {
      this.setData({
         modalHidden: false
      })
      },

  /**
   * 点击cancel
   */
      modalCandel: function(){
         // do something
         this.setData({
          modalHidden: true
       })
      },

  /**
   *  点击确认
   */
        modalConfirm: function() {
       // do something
       this.setData({
          modalHidden: true
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
          url: '../game2/game2',
        })
      },
    
})