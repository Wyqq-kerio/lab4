// pages/refind/refind.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      
    },
  
  formSubmit:function(e){
    console.log(e.detail.value);
    var obj={};
    obj.username=e.detail.value.name;
    obj.password=e.detail.value.pwd;
    obj.code=e.detail.value.code;
    obj.phone=e.detail.value.phone;
    console.log(obj);
    
    //存入多个注册用户
    var arr = wx.getStorageSync('userobjs') || [];
    arr.push(obj);
    wx.setStorageSync('userobjs', arr);
    wx.showToast({
      title: 'Register succeessfully',
      duration:2000,
      success:function(){
        wx.navigateTo({
          url: "pages/login/login",
        })
      }
    })
  },
    /** 
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: 'Refind',
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