/// <reference path="../typings/index.d.ts" />

var express = require('express')
var router = express.Router()

var Bookmark = require('../models/bookmark')

router.get('/',function(req,res,next){
    var start = req.query.start
    var size = req.query.size

    if(!start){
        start = 0
    }

    if(!size){
        size = 10
    }

    Bookmark.find({})
            .skip(Number(start))
            .limit(Number(size))
            .exec()
            .then(function(bookmarks,err){
                if(err){
                    next(err)
                }else{
                    res.send(bookmarks)
                }
            })
})

module.exports = router