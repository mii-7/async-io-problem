'use strict'

const { resolve } = require("path");

new Promise((resolve) => {
    const nowDate = new Date();
    resolve(nowDate);
}).then((v1) => {
    // v1 は現在の時刻情報
    const monthAndDate = {
        month: v1.getMonth(),
        date: v1.getDate()
    };
    return new Promise((resolve) => {
        resolve(monthAndDate);
    });
}).then((v2) => {
    // v2 は日付の情報
    const text = `今日は${v2.month + 1}月${v2.date}日です。`;
    return new Promise((resolve) => {
        resolve(text);
    });
}).then((v3) => {
    // v3 は日付を表す文章
    console.log(v3);
});