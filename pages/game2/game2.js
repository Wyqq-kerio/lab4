// pages/game2/game2.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        pickerRange:[1,2,3,4,5,6,7,8,9],  //最多9个最少1个骰子，注意如果拓展到十几甚至几十个，将导致下方whetherOverlap反复执行甚至死循环
        number:6,                         //初始指定5个骰子
        switchText:'隐藏骰子',
        diceList:[],
        countList:['?','?','?','?','?','?'],
        countSum:'???',
        clicked:false, 
        modalHidden:true,//是否隐藏对话框
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
      var switchText = this.data.switchText
      switchText = '隐藏骰子'
      this.setData({
        switchText:switchText,
      }),
      wx.showLoading({
        title:'UpDate',
        mask:true,
        duration:1000
      })
      wx.stopPullDownRefresh({
        success: function(res) {
          switchText = '展示骰子'
          this.setData({
            switchText:switchText,
            clicked:false
          })
        }
      })
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