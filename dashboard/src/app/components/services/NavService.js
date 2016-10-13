(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: '主页',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: 'User',
        icon: 'person',
        sref: '.profile'
      },
      {
        name: 'Library',
        icon: 'view_module',
        sref: '.library'
      },
      {
        name: 'Bookmark',
        icon: 'view_module',
        sref: '.bookmark'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
