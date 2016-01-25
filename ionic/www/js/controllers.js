angular.module('starter.controllers', [])

.controller('DashCtrl', function($rootScope, $scope, $http, $ionicSlideBoxDelegate, $ionicListDelegate, Topics) {
   
	var data = {
		'ownertype': 1,
		'start_pos': 0,
		'list_num': 25
	};

	var rqAdinfo = {
		'ownertype': 1
	};

	var totalNum = 0;
	var pageNum = 0;

	var disable = true;
	$scope.isNews = '';
	$scope.isAct = 'button-outline';

	var baseUrl = "http://121.42.179.44/api/";
	var imgUrl = "http://121.42.179.44/api/img/";
	$scope.imgUrl = imgUrl;
	
	$scope.$on('$ionicView.beforeEnter', function() {
      $rootScope.hideTabs = '';
    });	
	
	//主页广告图片读取
	$http.post(baseUrl+'getadinfo.php', rqAdinfo)
	.success(function(response){
	    $scope.adinfos = response.list;
	})

	//主页活动读取
	$http.post(baseUrl+'homepage_activityinfo.php', data)
	.success(function(response){
	    $scope.activInfo = response.list;
	})

	//老师新闻读取
	$rootScope.topics = Topics.getTopics();
	Topics.fetchTopStories();

    $scope.$on('starter.controllers.topicsUpdated', function() {
      	$rootScope.topics = Topics.getTopics();
      
  	  	for (var i = 0; i < $rootScope.topics.length; i++) {
	   		$rootScope.topics[i].createdate = $rootScope.topics[i].createdate.substr(0,10);
	   		if($rootScope.topics[i].listitem_pic_name === null)
	   		{
	   			$rootScope.topics[i].realflg = 1;
	   		}
 		}
      	   
      $scope.$broadcast('scroll.refreshComplete');
    });
    
    //下拉刷新
    $scope.doRefresh = function() {
      Topics.fetchTopStories();
    };

	//list加载
    $scope.loadMore = function() {
      // console.log("loadMore");
      Topics.increaseNewTopicsCount();
      $scope.$broadcast('scroll.infiniteScrollComplete');
    };
    
	//list加载判断
    $scope.moreDataCanBeLoaded = function() {
      return Topics.hasNextPage();
    };
    
    var halfHeight = null;
    $scope.getHalfHeight = function() {
      if (ionic.Platform.isAndroid()) return 0;
      if (!halfHeight) {
        halfHeight = (document.documentElement.clientHeight / 2) - 200;
      }
      // console.log("halfHeight:"+halfHeight);
      return halfHeight;

    };


  $scope.isVisblse = function() {
	  		return disable;
  };

  $scope.setActiv = function() {
	  		disable = false;
	  		$scope.isNews = 'button-outline';
	  		$scope.isAct = '';
//	  		$window.location.reload();
  };

  $scope.setNews = function() {
	  		disable = true;
	  		$scope.isNews = '';
	  		$scope.isAct = 'button-outline';
//	  		$window.location.reload();
  };
  
  $scope.papar = function(index) {
	  		disable = false;
	  		$scope.isNews = 'button-outline';
	  		$scope.isAct = '';
  };

})



.factory('Topics', function($rootScope, $http) {
	
    var APIUrl = 'http://121.42.179.44/api/homepage_newsinfo.php',
		data = {
		'ownertype': 1,
		'start_pos': 0,
		'list_num': 5
		},	
    	topics = {};
    
    var http = $http;
    	
    return {
      fetchTopStories: function() {
        var hasNextPage = true;
                          
	 	//老师新闻读取
	 	data.start_pos = 0;
		http.post(APIUrl, data)
		.success(function(response){
			
	    	if (response.list.length < 5) {
	        	hasNextPage = false;
	        }
	        topics = {
	            'nextPage': 2,
	            'hasNextPage': hasNextPage,
	            'list': response.list
	        };
	          
	        $rootScope.$broadcast('starter.controllers.topicsUpdated', topics.list);
	
	        });	         	        	        
      },
      
      getTopics: function() {
        return topics.list;
      },
            
      increaseNewTopicsCount: function() {
        var nextPage = topics.nextPage;
        var hasNextPage = topics.hasNextPage;
        var topicsData = topics.list;
                
        //老师新闻读取
        data.start_pos = (topics.nextPage-1)*5;
        
		$http.post(APIUrl, data)
		.success(function(response){
			nextPage++;
	    	if (response.list.length < 5) {
	        	hasNextPage = false;
	        }
	    	topicsData = topicsData.concat(response.list);
	        topics = {
	            'nextPage': nextPage,
	            'hasNextPage': hasNextPage,
	            'list': topicsData
	        };
	          
	        $rootScope.$broadcast('starter.controllers.topicsUpdated', topics.list);
	
	    });
	        
      },
      
      hasNextPage: function() {
        return topics.hasNextPage;
      }

    };
  })







.controller('ChatsCtrl', function($rootScope, $scope, $http, $location, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  	$scope.$on('$ionicView.beforeEnter', function() {
      $rootScope.hideTabs = ' ';
    });


	var data = {
		'ownertype': 1,
		'start_pos': 0,
		'list_num': 25
	};

	var rqAdinfo = {
		'ownertype': 3
	};

	var totalNum = 0;
	var pageNum = 0;

	var baseUrl = "http://121.42.179.44/api/";
	var imgUrl = "http://121.42.179.44/api/img/";
	$scope.imgUrl = imgUrl;

	//广告图片读取
	$http.post(baseUrl+'getadinfo.php', rqAdinfo)
	.success(function(response){
	    $scope.adinfos = response.list;
	})

	$http.post(baseUrl+'conferpage_newsinfo.php', data)
	.success(function(response){
	    $rootScope.testList = response.list;
	    totalNum = response.total_num;
	})

 	$scope.loadMore = function() {
		pageNum++;
	  	data.start_pos = pageNum*5;

  		$http.post(baseUrl+'conferpage_newsinfo.php', data)
		.success(function(response){
	    	$rootScope.testList = response.list;
	    	$scope.$broadcast('scroll.refreshComplete');
		})
  };

	$scope.moreDataCanBeLoaded = function() {
	  return false;
  };

//$scope.go = function (path) {
// 	 $location.path(path);
//};
//
// 	$scope.remove = function(chat) {
//  Chats.remove(chat);
//};
})

.controller('ChatDetailCtrl', function($rootScope, $scope, $stateParams, $sce, Chats) {

	$scope.$on('$ionicView.beforeEnter', function() {
      $rootScope.hideTabs = 'tabs-item-hide';
    });

	 for (var i = 0; i < $rootScope.topics.length; i++) {
        if ($rootScope.topics[i].id === $stateParams.chatId) {
          $rootScope.DetailTitle = $rootScope.topics[i].title;
          $rootScope.dalurl = $sce.trustAsResourceUrl($rootScope.topics[i].url);
        }
      }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
   };
})

.controller('cnferCtrl', function($rootScope, $scope, $http) {
	var baseUrl = "http://121.42.179.44/api/";
	var imgUrl = "http://121.42.179.44/api/img/";
	$scope.imgUrl = imgUrl;

	var rqinfo = {
		'groupid': 1
	};
	$http.post(baseUrl+'confer_subgroup.php', rqinfo)
	.success(function(response){
	    $scope.grps = response.list;
	})


	var data = {
		'ownertype': 1,
		'group_id': 1,
		'subgroup_id': 1,
		'tag_id': 0,
		'start_pos': 0,
		'list_num': 25,
	};
	$http.post(baseUrl+'confer_newsinfo.php', data)
	.success(function(response){
	    $scope.topics = response.list;
	})

})

.controller('FilesCtrl', function($rootScope, $scope, $http, $stateParams, Chats) {

	var rqAdinfo = {
		'ownertype': 1
	};

	var baseUrl = "http://121.42.179.44/api/";
	var imgUrl = "http://121.42.179.44/api/img/";
	    $scope.imgUrl = imgUrl;

	// lun wen图片读取
	$http.post(baseUrl+'paper_type.php', rqAdinfo)
	.success(function(response){
	    $scope.lunwens = response.list;
	})

});

