// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      loginBtnState:true
    },
    usernameInput:function(e){
      var val=e.detail.value;
      if(val !=''){
        this.setData({
          username:val
        });
        if(this.data.password !=""){
          this.setData({
            loginBtnState:false
          })
        }
      }
      else{
        this.setData({
          loginBtnState:true
        })
      }
    },
    passwordInput:function(e){
      var val=e.detail.value;
      if(val !=''){
        this.setData({
          password:val
        });
        if(this.data.username !=""){
          this.setData({
            loginBtnState:false
          })
        }
      }
      else{
        this.setData({
          loginBtnState:true
        })
      }
    },
  
    Login:function(){
      var userInfs = wx.getStorageSync('userobjs') || [];
      var userInf = userInfs.find(item=> item.username==this.data.username);
      if(userInf){
        if(userInf.password==this.data.password){
          wx.showToast({
            title: 'Login succeessfully',
            duration:2000,
            success:function(){
              wx.navigateTo({
                url: '/pages/mode/mode',
              })
            }
          })
        }
        else{
          // wx.showModal({
          //   cancelText:"refind",
          //   confirmText:"tryagian",
          //   title:"Wrong",
          //   duration:2000
          // })
          wx.showModal({
            cancelText:"refind",
            confirmText:"retry",
            title: 'Wrong password',
            duration:2000,
            success: function (res) {//接口调用成功的回调函数
              if (res.cancel) {//点击取消
                wx.redirectTo({
                  url: '/pages/refind/refind',
                })
              }
              else {//点击确定
                wx.redirectTo({
                  url: '/pages/Login/Login',
                })
              }
            },
            fail: function (res) { },//接口调用失败的回调函数
            complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）      
          })
        }
      }
      else{
        wx.showModal({
          cancelText:"close",
          confirmText:"register",
          title: 'Username not exist',
          duration:2000,
          success: function (res) {//接口调用成功的回调函数
            if (res.cancel) {}//点击取消
            else {//点击确定
              wx.navigateTo({
                url: '/pages/phone/phone',
              })
            }
          },
          fail: function (res) { },//接口调用失败的回调函数
          complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）       
        })
      }
    },
    toBegin: function (params) {
      wx.navigateTo({
        url: '../refind/refind',
      })
    },
    toBegin1: function (params) {
      wx.navigateTo({
        
        url: '../phone/phone',
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: 'Login',
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