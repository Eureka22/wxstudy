// index.js
Page({
  data:{
    isPlayingMusic:false
  },
  bgm:null,
  music_url:"https://link.hhtjim.com/163/28403111.mp3",
  music_coverImageUrl:"/images/bg_1.png",
  onReady: function () {
    this.bgm = wx.getBackgroundAudioManager()
    this.bgm.title='merry me',
    this.bgm.epname='weeding',
    this.bgm.singer='singer',
    this.bgm.coverImgUrl=this.music_coverImageUrl
    this.bgm.onCanplay(()=> {
      this.bgm.pause()
    })
    this.bgm.src = this.music_url
  },
  play:function(e){
    if(this.data.isPlayingMusic){
      this.bgm.pause()
    }else{
      this.bgm.play()
    }
    this.setData({
      isPlayingMusic: !this.data.isPlayingMusic
    })
  },
  // 一键拨打电话
  callPhone:function(){
    wx.makePhoneCall({
      phoneNumber: '123456789',
    })
  },
  callBridge:function(){
    wx.makePhoneCall({
      phoneNumber: '1357890096',
    })
  }
})
