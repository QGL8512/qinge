/*
 * @Author: your name
 * @Date: 2020-10-26 16:31:22
 * @LastEditTime: 2020-10-26 17:17:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \数据可视化\js\rem.js
 */
(function() {
    window.onresize = function() {
        let width = window.innerWidth;
        if (width < 1200) {
            width = 1200
        }
        if (width > 1920) {
            width = 1920
        }
        document.documentElement.style.fontSize = width / 80 + 'px'
    }
    window.onresize()
})()