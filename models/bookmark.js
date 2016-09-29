/// <reference path="../typings/index.d.ts" />

var mongoose = require('mongoose')

var BookmarkSchema = mongoose.Schema({
    name:String,    //书签名
    detail:String,  //书签介绍/详情
    icon:String,    //书签 icon
    link:String,    //书签链接
    onclick:{
        type:Number,
        default:0
    }, //点击次数
    tag:[]  //对书签的标签
})

module.exports = mongoose.model('Bookmark',BookmarkSchema)