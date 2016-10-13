/// <reference path="../typings/index.d.ts" />

var express = require('express')
var router = express.Router()

var Library = require('../models/library')

/**
 * 查询 library 列表
 */
router.get('/', function(req, res, next) {
	var start = req.query.start
	var size = req.query.size

	if (!start) {
		start = 0
	}

	if (!size) {
		size = 10
	}

	Library.find({})
		.skip(Number(start))
		.limit(Number(size))
		.exec()
		.then(function(bookmarks, err) {
			if (err) {
				next(err)
			} else {
				res.send(bookmarks)
			}
		})
})

/**
 * 模糊搜索 Library
 */
router.get('/s/:key', function(req, res, next) {
    //模糊查询的关键词
    var regKey = new RegExp(req.params.key);

    //自定义搜索长度
    var limit_num = req.query.size
    if(!limit_num){
        //如果没有定义模糊搜索的长度，默认为5
        limit_num = 5
    }

    Library.find({
        $or : [ //多条件，数组
			{name : {$regex : regKey}},
			{detail : {$regex : regKey}}
		]
    })
    .limit(limit_num)
    .exec()
    .then(function(libraries,err){
        if(err){
            next(err)
        }else{
            res.send(libraries)
        }
    })


})



module.exports = router