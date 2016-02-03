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
    state: '沙河口区', 
    price: '300元/2小时',         
    pic: 'img/22.jpg'
  }, {
    id: 1,
    type: 1,
    title: '格致小学',
    state: '沙河口区',  
    price: '400元/2小时',           
    pic: 'img/22.jpg' 
  }, {
    id: 2,
    type: 2,
    title: '经贸学校',
    state: '沙河口区',  
    price: '400元/2小时',       
    pic: 'img/22.jpg'
  }, {
    id: 3,
    title: '经贸学校',
    state: '沙河口区',  
    price: '400元/2小时',  
    pic: 'img/22.jpg' 
  }, {
    id: 4,
    type: 3,
    title: '经贸学校',
    state: '沙河口区',  
    price: '400元/2小时',  
    pic: 'img/22.jpg'
  }, { 
    id: 5,
    type: 1,
    title: '经贸学校',
    state: '沙河口区',  
    price: '400元/2小时',  
    pic: 'img/22.jpg'    
  }, {  	
    id: 6,
    type: 2,
    title: '经贸学校',
    state: '沙河口区',  
    price: '400元/2小时',  
    pic: 'img/22.jpg'   
  }, {  	
    id: 7,
    type: 1,
    title: '经贸学校',
    state: '沙河口区',  
    price: '400元/2小时',  
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
})


.factory('Mbers', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var mbers = [{
    id: 0,
    type: 1,
    title: '球霸老宫',
    status:'待战',
    pos:'自由人',       
    pic: 'img/ben.png'
  }, {
    id: 1,
    type: 1,
    title: '聂柔软大眼毛',
    status:'待战',  
    pos:'右边前',      
    pic: 'img/ben.png' 
  }, {
    id: 2,
    type: 2,
    title: '飞毛腿大军',
    status:'待战', 
    pos:'前锋',       
    pic: 'img/ben.png'
  }, {
    id: 3,
    type: 1,
    title: '贼拉粗大玉',
    status:'伤停',    
    pos:'左后卫',       
    pic: 'img/ben.png' 
  }, {
    id: 4,
    type: 3,
    title: '骚峰',
    status:'待战',   
    pos:'后腰',      
    pic: 'img/ben.png'
  }, { 
    id: 5,
    type: 1,
    title: '暴脾气巴克',
    status:'待战', 
    pos:'右后卫',       
    pic: 'img/ben.png'    
  }, {  	
    id: 6,
    type: 2,
    title: '小萝莉来宾',
    status:'伤停', 
    pos:'右后卫',      
    pic: 'img/ben.png'   
  }, {  	
    id: 7,
    type: 1,
    title: '纯情少年小旭',
    status:'待战', 
    pos:'门将',      
    pic: 'img/ben.png'
  }];
  
  return {
    all: function() {
      return mbers;
    }
  };  
})


.factory('Teams', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var teams = [{
    id: 0,
    type: 1,
    title: '孙家沟联队',
    members:32,
    state: '沙河口区', 
    stars: '★★★★★',
    win:'99',
    draw:'50',
    loss:'0',
    score: '250',     
    pic: 'img/team1.jpg'
  }, {
    id: 1,
    type: 1,    
    title: '大连周末Happy',
    members:30,    
    state: '沙河口区', 
    stars: '★★★★★',
    win:'99',
    draw:'50',
    loss:'0',    
    score: '80',       
    pic: 'img/team1.jpg' 
  }, {
    id: 2,
    type: 2,
    title: '巨星体育',
    members:30,       
    state: '沙河口区', 
    stars: '★★★★★',
    win:'99',
    draw:'50',
    loss:'0',    
    score: '70',       
    pic: 'img/team1.jpg'
  }, {
    id: 3,
    type: 1,
    title: '乐购球队',
    members:30,       
    state: '中山区', 
    stars: '★★★★',
    win:'99',
    draw:'50',
    loss:'0',    
    score: '63',       
    pic: 'img/team1.jpg' 
  }, {
    id: 4,
    type: 3,
    title: '机场联队',
    members:30,       
    state: '甘井子区', 
    stars: '★★★★',
    win:'99',
    draw:'50',
    loss:'0',    
    score: '40',       
    pic: 'img/team1.jpg'
  }, { 
    id: 5,
    type: 1,
    title: '包场男队',
    members:30,       
    state: '沙河口区', 
    stars: '★★★★',
    win:'99',
    draw:'50',
    loss:'0',     
    score: '33',       
    pic: 'img/team1.jpg'    
  }, {  	
    id: 6,
    type: 2,
    title: '书香园联队',
    members:30,       
    state: '沙河口区', 
    stars: '★★★',
    win:'99',
    draw:'50',
    loss:'0',    
    score: '25',       
    pic: 'img/team1.jpg'   
  }, {  	
    id: 7,
    type: 1,
    title: '百战联队',
    members:30,       
    state: '沙河口区', 
    stars: '★★★',
    win:'1',
    draw:'5',
    loss:'10',    
    score: '5',   
	pic: 'img/team1.jpg'
  }];
  
  return {
    all: function() {
      return teams;
    }
  };  
});


