/// <reference path="../typings/index.d.ts" />

var mongoose = require('mongoose')
var Bookmark = require('../models/bookmark')
var bookmarkData = require('../old_data/cat.json')

mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost/androidcat')

var bookmarkPrefix = "bk_"
var bookmarkid = 0


// {
//       "updatedAt": "2016-09-27T07:37:28.933Z",
//       "desc": "在线模拟贝塞尔曲线",
//       "hit": 78,
//       "ACL": {
//         "*": {
//           "read": true,
//           "write": true
//         }
//       },
//       "objectId": "5755503a5bbb5000644d1095",
//       "createdAt": "2016-06-06T10:28:10.805Z",
//       "icon": "",
//       "title": "bezier-curve",
//       "grade": 100,
//       "url": "https://myst729.github.io/bezier-curve/",
//       "tag": "tool"
//     }
bookmarkData.forEach(function(element) {

    var bookmark = new Bookmark({
        id:bookmarkPrefix+bookmarkid,
        name:element.title,
        detail:element.desc,
        icon:element.icon,
        link:element.url,
        onclick:element.hit,
        tag:[element.tag]
    })

    bookmarkid++

    bookmark.save().then(function(bookmark){
        console.log('success')
    },function(err){
        console.log('error')
        throw(err)
    })
}, this);
