/// <reference path="../typings/index.d.ts" />

var mongoose = require('mongoose')

var Category = [
            'list',
            'animation',
            'icon',
            'image',
            'chart',
            'project',
            'layout',
            'framework',
            'dialog',
            'button',
            'label',
            'effect',
            'network',
            'custom',
            'utils',
            'progressbar'
        ]



var LibrarySchema = mongoose.Schema({
    name:String,    //开源库名称
    detail:String,  //开源库介绍/详情
    link:String,    //开源库链接
    category: {
        type: 'String',
        enum: Category  //开源库的分类
    },
    author:String,  //开源库作者
    github_star:{
        type:Number,
        default:0
    },
    github_fork:{
        type:Number,
        default:0
    },
    tag:[]  //标签
})

module.exports = mongoose.model('Library',LibrarySchema)