angular.module('starter.services', [])


.factory('Tabs', function() {
    return [{
      value: 'all',
      label: '全部'
    }, {
      value: 'video',
      label: '视频'
    }, {
      value: 'sail',
      label: '推广'
    }, {
      value: 'news',
      label: '新闻'
    }, {
      value: 'game',
      label: '比赛'
    }, {
      value: 'act',
      label: '活动'      
    }, {
      value: undefined,
      label: '全部'
    }];
})

.factory('States', function() {
    return [{
      value: 'all',
      label: '全域'
    }, {
      value: 'zs',
      label: '中山区'
    }, {
      value: 'shk',
      label: '沙河口区'
    }, {
      value: 'gxyq',
      label: '高新园区'
    }, {
      value: 'xg',
      label: '西岗区'
    }, {
      value: 'gj',
      label: '甘井子区'      
    }, {
      value: 'ls',
      label: '旅顺口区'
    }, {
      value: undefined,
      label: '全域'
    }];
})


 .filter('stateName', function(States) {
    return function(tab) {
      for (var i in States) {
        if (States[i].value === tab) {
          return States[i].label;
        }
      }
    };
  })
 
  .filter('tabName', function(Tabs) {
    return function(tab) {
      for (var i in Tabs) {
        if (Tabs[i].value === tab) {
          return Tabs[i].label;
        }
      }
    };
  })

.factory('News', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var news = [{
    id: 0,
    type: 1,
    title: 'You on your way?',
    pic: 'img/ben.png',
    pic1: 'img/2.png', 
    pic2: 'img/3.png'     
  }, {
    id: 1,
    type: 1,
    title: 'Hey, it\'s me',
    pic: 'img/max.png',
    pic1: 'img/2.png', 
    pic2: 'img/3.png'     
  }, {
    id: 2,
    type: 2,
    title: 'I should buy a boat',
    pic: 'img/3.png',
    pic1: 'img/2.png', 
    pic2: 'img/3.png'     
  }, {
    id: 3,
    type: 1,
    title: 'Look at my mukluks!',
    pic: 'img/perry.png',
    pic1: 'img/2.png', 
    pic2: 'img/3.png'     
  }, {
    id: 4,
    type: 3,
    title: 'Look at my mukluks!',
    pic: 'img/perry.png',
    pic1: 'img/2.png', 
    pic2: 'img/3.png'     
  }, { 
    id: 5,
    type: 1,
    title: 'Look at my mukluks!',
    pic: 'img/perry.png',
    pic1: 'img/2.png', 
    pic2: 'img/3.png'     
  }, {  	
    id: 6,
    type: 2,
    title: 'This is wicked good ice cream.',
    pic: 'img/1.png',
    pic1: 'img/2.png', 
    pic2: 'img/3.png'     
  }, {  	
    id: 7,
    type: 1,
    title: 'This is wicked good ice cream.',
    pic: 'img/1.png' , 
    pic1: 'img/2.png', 
    pic2: 'img/3.png' 
  }];
  
//var grpData　= {};
   
  return {
    all: function() {
      return news;
    }
    
//  remove: function(chat) {
//    news.splice(news.indexOf(chat), 1);
//  },
//  get: function(chatId) {
//    for (var i = 0; i < news.length; i++) {
//      if (news[i].id === parseInt(chatId)) {
//        return news[i];
//      }
//    }
//    return null;
//  }
  };
})

.factory('Grds', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var grds = [{
    id: 0,
    type: 1,
    title: '大连第四中学',
    pic: 'img/22.jpg'
  }, {
    id: 1,
    type: 1,
    title: '格致小学',
    pic: 'img/22.jpg' 
  }, {
    id: 2,
    type: 2,
    title: '经贸学校',
    pic: 'img/22.jpg'
  }, {
    id: 3,
    type: 1,
    title: 'Look at my mukluks!',
    pic: 'img/22.jpg' 
  }, {
    id: 4,
    type: 3,
    title: 'Look at my mukluks!',
    pic: 'img/22.jpg'
  }, { 
    id: 5,
    type: 1,
    title: 'Look at my mukluks!',
    pic: 'img/22.jpg'    
  }, {  	
    id: 6,
    type: 2,
    title: 'This is wicked good ice cream.',
    pic: 'img/22.jpg'   
  }, {  	
    id: 7,
    type: 1,
    title: 'This is wicked good ice cream.',
    pic: 'img/22.jpg'
  }];
  
//var grpData　= {};
   
  return {
    all: function() {
      return grds;
    }
    
//  remove: function(chat) {
//    news.splice(news.indexOf(chat), 1);
//  },
//  get: function(chatId) {
//    for (var i = 0; i < news.length; i++) {
//      if (news[i].id === parseInt(chatId)) {
//        return news[i];
//      }
//    }
//    return null;
//  }
  };
});