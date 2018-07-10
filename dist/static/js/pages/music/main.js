global.webpackJsonp([8],{

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(9);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Fly = __webpack_require__(2); //npm引入方式
var fly = new Fly(); //创建fly实例
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            id: "",
            index: 0,
            musicUrlData: "",
            musicDetailsData: {},
            musicComment: {},
            musicDetailsImg: "",
            musicDetailsName: "",
            status: true,
            node: true,
            xuanzhuan: true,
            zanting: {
                zhuangtai: true,
                zanting: "background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MTUwMjg3NDUwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMzNDEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDBDMjMwLjQgMCAwIDIzMC40IDAgNTEyczIzMC40IDUxMiA1MTIgNTEyIDUxMi0yMzAuNCA1MTItNTEyUzc5My42IDAgNTEyIDB6TTQ1NC40IDcyMy4yYzAgMTkuMi0xOS4yIDMyLTQ0LjggMzItMjUuNiAwLTQ0LjgtMTIuOC00NC44LTMyTDM2NC44IDMwMC44YzAtMTkuMiAxOS4yLTMyIDQ0LjgtMzIgMjUuNiAwIDQ0LjggMTIuOCA0NC44IDMyTDQ1NC40IDcyMy4yek02NjUuNiA3MjMuMmMwIDE5LjItMTkuMiAzMi00NC44IDMyLTI1LjYgMC00NC44LTEyLjgtNDQuOC0zMkw1NzYgMzAwLjhjMC0xOS4yIDE5LjItMzIgNDQuOC0zMiAyNS42IDAgNDQuOCAxMi44IDQ0LjggMzJMNjY1LjYgNzIzLjJ6IiBwLWlkPSIzMzQyIiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PC9zdmc+);background-size:120rpx 120rpx; width:120rpx;height:120rpx;",
                kaishi: "background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MTUwMzM0ODA1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU4MjkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNDIwLjM5NyAzMTAuNDczbDMwNy43ODYgMTgzLjIwNmMyMS45ODQgMTQuNjU3IDE0LjY1NyAyMS45ODQgMCAyOS4zMTNsLTMxNS4xMTQgMTkwLjUzNWMtMjEuOTg0IDE0LjY1Ny0yOS4zMTMgNy4zMjgtMjkuMzEzLTE0LjY1N3YtMzgxLjA2OGMwLTIxLjk4NCAxNC42NTctMjEuOTg0IDM2LjY0MS03LjMyOHpNNDQ5LjcxIDI2Ni41MDNsMzA3Ljc4NiAxODMuMjA2YzUxLjI5OCAzNi42NDEgNTEuMjk4IDg3LjkzOSAwIDExNy4yNTJ2MGwtMzE1LjExNCAxOTAuNTM1Yy0yMS45ODQgMTQuNjU3LTUxLjI5OCAyMS45ODQtODAuNjExIDcuMzI4LTIxLjk4NC0xNC42NTctMjkuMzEzLTM2LjY0MS0yOS4zMTMtNjUuOTU0di0zODEuMDY4YzAtMjEuOTg0IDcuMzI4LTQzLjk3IDI5LjMxMy01OC42MjYgMjkuMzEzLTE0LjY1NyA1OC42MjYtNy4zMjggODcuOTM5IDcuMzI4ek01MDguMzM2IDMyYy0yNjMuODE3IDAtNDc2LjMzNiAyMTIuNTE5LTQ3Ni4zMzYgNDc2LjMzNnMyMTIuNTE5IDQ4My42NjQgNDc2LjMzNiA0ODMuNjY0YzI2My44MTcgMCA0ODMuNjY0LTIxOS44NDggNDgzLjY2NC00ODMuNjY0IDAtMjYzLjgxNy0yMTkuODQ4LTQ3Ni4zMzYtNDgzLjY2NC00NzYuMzM2djB6IiBwLWlkPSI1ODMwIiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PC9zdmc+);background-size:120rpx 120rpx; width:120rpx;height:120rpx;"
            },
            dianzan: {
                zhuangtai: false,
                zhen: "background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MzUxNDg4NzUwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQwOTMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMjY3Ljg0MzY1OCAxMTkuODk1ODQxQzI4Mi4yMTI0OTQgMTE4LjQ5MDUxNiAyOTUuNjU3OTA5IDExNy44MDcwNTcgMzA4LjI3MzQ4NiAxMTcuODA3MDU3IDQwOS4zMzIyNzMgMTE3LjgwNzA1NyA0NTcuNzg0MjUyIDE2MS41NjMwOTMgNTEzLjI3OTcxMSAyMjcuODIzNTU5IDU2OC43NzI5MTUgMTYxLjU2MzA5MyA2MTcuMjUwODI1IDExNy44MDcwNTcgNzE4LjI5NzIxIDExNy44MDcwNTcgNzMwLjkwOTQwNCAxMTcuODA3MDU3IDc0NC4zNTQ4MTkgMTE4LjQ5MDUxNiA3NTguNzI1OTExIDExOS44OTU4NDEgODQ2LjE3NjkyMiAxMjguNDUzMTk2IDk0Ny4zMDMzNTkgMjA4LjY3NTQyMSA5NTkuNjE2NzY2IDM2Mi40MDcyOTFMOTU5LjYxNjc2NiA0MTMuNTcyOTIzQzk0OC4xNDY3MjggNTYwLjcxMTk1OSA4MzcuMjk0NDkyIDY4MC44MTY1MzYgNTEzLjI3ODU4MyA5MDguNTE4OTYyIDE4OS4yNzI4MjEgNjgwLjgxNjUzNiA3OC4zOTEyNyA1NjAuNzExOTU5IDY2LjkyMzQ4NyA0MTMuNTcyOTIzTDY2LjkyMzQ4NyAzNjIuNDA3MjkxQzc5LjI2Mzk1NSAyMDguNjc1NDIxIDE4MC4zOTE1MTggMTI4LjQ1MzE5NiAyNjcuODQzNjU4IDExOS44OTU4NDFMMjY3Ljg0MzY1OCAxMTkuODk1ODQxWk03MDYuMTk5MTU0IDIwNC45NjY2NjlDNzEzLjg0MDIwOSAyMDUuMDEwNzI2IDcyMS40ODY5MDIgMjA1LjM2MzE4OCA3MjkuMDgyODU2IDIwNi4yMTcyMjkgNzMwLjEzNTk0IDIwNi4zMzU4NDYgNzMxLjE4OTAyMyAyMDYuNDU4OTgxIDczMi4yMzk4NTIgMjA2LjU5MjI4NCA3MzIuMzI3Nzk2IDIwNi42MDQ3MSA3MzIuNDAxMDg0IDIwNi42MTQ4NzggNzMyLjUwMjU1OSAyMDYuNjI5NTYzIDczNC4wNTI4NjkgMjA2Ljg2MjI3OSA3MzUuNjAzMTc5IDIwNy4wOTk1MTIgNzM3LjE0ODk3OCAyMDcuMzcwNjM1IDc0MC41MjgwOSAyMDcuOTYzNzIgNzQzLjg5ODE4MyAyMDguNjE3ODA2IDc0Ny4yMzg5NTkgMjA5LjQwMjkzNyA3NTMuNTY1MzUyIDIxMC44ODg0NzEgNzU5LjgzMDg1OSAyMTIuNjY2NTkzIDc2NS45NDY0MDkgMjE0Ljg3NzM4MyA3NjcuNTczMzg5IDIxNS40NjU5NDkgNzY5LjE5ODExNCAyMTYuMDY0NjgyIDc3MC44MDQ3OTggMjE2LjcwNjM0MSA3NzEuMjA1MDYxIDIxNi44NjU2MjcgNzcyLjc1MDg2IDIxNy41MjMxMDMgNzczLjM1NzQ1NSAyMTcuNzc2MTUzIDc3NS42OTI1MDMgMjE4LjgxMzIwMiA3NzguMDExNzY3IDIxOS44ODQxNDEgNzgwLjI5MDQ0IDIyMS4wNDIwNjggNzg1LjQxOTQzIDIyMy42NDkzNzcgNzkwLjQzMDAzMSAyMjYuNTAwNjk5IDc5NS4yMzMxNzQgMjI5LjY3NTExIDc5Ny41NDkwNTUgMjMxLjIwNjk2MSA3OTkuODM3ODc2IDIzMi43ODE3NCA4MDIuMDY2OTQgMjM0LjQ0MDExNSA4MDIuNTQ4MzgxIDIzNC43OTgyMjUgODAzLjAyNTMxMyAyMzUuMTYwODU0IDgwMy41MDMzNzMgMjM1LjUyMTIyMyA4MDMuNTIwMjg1IDIzNS41MzM2NDkgODAzLjUyOTMwNSAyMzUuNTQwNDI4IDgwMy41NDYyMTcgMjM1LjU1NTExMyA4MDQuNDgyMDQxIDIzNi4zMDQwOTQgODA1LjQxNDQ4MiAyMzcuMDU3NTkyIDgwNi4zMzIyNjUgMjM3LjgyODAzNyA4MTQuMDMzMDc4IDI0NC4yOTk5OTUgODIxLjE0NjQ2NCAyNTEuNDY4OTY3IDgyNy41MDU1NTMgMjU5LjI3MjgyMiA4MjguMTY4NTIyIDI2MC4wODczMjQgODI4LjgyODEwOCAyNjAuOTA0MDg1IDgyOS40Nzc1NDggMjYxLjcyOTg4NCA4MzAuNDIwMTM2IDI2Mi45ODI3MDMgODMxLjM1MzcwNCAyNjQuMjQxMTcgODMyLjI2MjQ2OCAyNjUuNTE5OTczIDgzNC4xMDI1NDUgMjY4LjEwOTIwNyA4MzUuODg5NjI5IDI3MC43Mzc5ODEgODM3LjU5MTAyNCAyNzMuNDIwOTggODQwLjk2NDQ5OSAyNzguNzQxNzkgODQ0LjEwMTE5OSAyODQuMjEzOTc4IDg0Ni45NDM2MjEgMjg5LjgzODY3MyA4NDguMzMzODI2IDI5Mi41ODk0NTEgODQ5LjY3NTU0OSAyOTUuMzY1MDg0IDg1MC45NDE3MjkgMjk4LjE3NTczNyA4NTEuNDU5MjUxIDI5OS4zMjU3NTYgODUxLjk2ODg4IDMwMC40ODAyOTIgODUyLjQ2NzIzNSAzMDEuNjM5MzQ4IDg1Mi42Mzc0ODYgMzAyLjA1Mzk0MSA4NTIuODA4ODY2IDMwMi40Njc0MDYgODUyLjk3NTczNyAzMDIuODgxOTk5IDg1NC44ODU3MTggMzA3LjYzNjgzOCA4NTYuNjQ5MTI1IDMxMi40NTE1NSA4NTguMjIxOTg1IDMxNy4zMjk1MjMgODYwLjU3NzMyOSAzMjQuNjMwNjY5IDg2Mi41OTU1NSAzMzIuMDUwNDMyIDg2NC4xMjg5NDggMzM5LjU2OTYwNiA4NjQuNTY2NDE3IDM0MS43MDgwOTcgODY0Ljk3MTE4OSAzNDMuODU0NDk2IDg2NS4zMTI4MjEgMzQ2LjAxMjE5MiA4NjUuODg3ODQ1IDM0OS42Mzk2MDYgODY1LjMwNDkyOSAzNDUuODkxMzE2IDg2NS4xNjE3MzYgMzQ0LjY4OTMzMiA4NjYuMDczODgyIDM1Mi4zMjAzNDUgODcwLjg3MzY0MiAzNTguNzkzNDMzIDg3OS4yMzg1NTEgMzU4Ljc5MzQzMyA4ODYuMjE4ODkyIDM1OC43OTM0MzMgODk0LjIyOTc2NiAzNTIuMzM4NDIxIDg5My4zMTUzNjUgMzQ0LjY4OTMzMiA4OTAuNDE2NTY3IDMyMC40NjEwMDcgODgyLjAzMTM2NCAyOTYuNTUwMTIzIDg3MC45MjIxMjUgMjc0Ljk1MjgzMSA4NTcuNDEwMTg2IDI0OC42ODc2ODUgODM4LjE5ODc0NSAyMjUuNTMxNDMgODE0LjA0MzIyNSAyMDguNDY1MyA3ODIuNjI4ODcxIDE4Ni4yNjkyNzUgNzQ0LjI3MTM4NSAxNzYuOTgzMjc1IDcwNi4yMDAyODIgMTc2Ljc1OTU5NyA2ODguMDM5NjY5IDE3Ni42NTIyNzggNjg4LjA0OTgxNiAyMDQuODYwNDc4IDcwNi4xOTkxNTQgMjA0Ljk2NjY2OUw3MDYuMTk5MTU0IDIwNC45NjY2NjlaIiBwLWlkPSI0MDk0IiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PC9zdmc+); background-size:56rpx 56rpx; width:56rpx;height:56rpx;",
                jia: "background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MDk3NjU5MjU5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM5MjciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODEiIGhlaWdodD0iODEiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTkwOS44MjA3NDggMzY5LjI3NTkzNUM5MDMuMzE2ODY3IDI1Mi45Mjg3MjMgODExLjUzOTg3MyAxNjEuODc0MzgyIDcwMS42OTY1NDIgMTYxLjg3NDM4Mkg3MDAuOTczODg4Yy01NS42NDQzMTkgMC0xMDguMzk4MDI0IDE5LjUxMTY0NC0xNDcuNDIxMzEyIDU0LjE5OTAxMi0xNS4xNzU3MjMgMTMuNzMwNDE2LTI4LjE4MzQ4NiAyOC45MDYxNC0zNy41Nzc5ODIgNDYuMjQ5ODI0LTM0LjY4NzM2OC02MC43MDI4OTMtMTAyLjYxNjc5Ni0xMDAuNDQ4ODM2LTE4NC45OTkyOTQtMTAwLjQ0ODgzNkMyMjEuMTMxOTY5IDE2MS44NzQzODIgMTMwLjA3NzYyOSAyNTIuOTI4NzIzIDEyMi44NTEwOTQgMzY5LjI3NTkzNWMtMi4xNjc5NiAzMi41MTk0MDctMTAuODM5ODAyIDMyMi4zMDM0NTggMzUyLjY1NDkwNSA0ODYuMzQ1ODAxIDQuMzM1OTIxIDIuMTY3OTYgMTguNzg4OTkxIDcuOTQ5MTg4IDM4LjMwMDYzNSA3Ljk0OTE4OCAxMS41NjI0NTYgMCAyNS4yOTI4NzItMi4xNjc5NiA0MC40Njg1OTUtOC42NzE4NDEgMjMuMTI0OTEyLTEwLjExNzE0OSA0NS41MjcxNy0yMS42Nzk2MDUgNjYuNDg0MTIyLTMzLjI0MjA2MSAwLjcyMjY1My0wLjcyMjY1MyAyMy4xMjQ5MTItMTMuMDA3NzYzIDQ5Ljg2MzA5MS0zMS43OTY3NTQgMTEuNTYyNDU2LTcuOTQ5MTg4IDE0LjQ1MzA3LTIzLjg0NzU2NSA2LjUwMzg4MS0zNS40MTAwMjEtNy45NDkxODgtMTEuNTYyNDU2LTIzLjg0NzU2NS0xNC40NTMwNy0zNS40MTAwMjEtNi41MDM4ODEtMjUuMjkyODcyIDE3LjM0MzY4NC00Ni4yNDk4MjQgMjkuNjI4NzkzLTQ2LjI0OTgyNCAyOS42Mjg3OTMtMTkuNTExNjQ0IDEwLjgzOTgwMi00MC40Njg1OTYgMjEuNjc5NjA1LTYyLjE0ODIgMzEuMDc0MS0yMC45NTY5NTEgOC42NzE4NDItMzYuODU1MzI4IDEuNDQ1MzA3LTM2Ljg1NTMyOCAxLjQ0NTMwNy0wLjcyMjY1MyAwLTAuNzIyNjUzLTAuNzIyNjUzLTEuNDQ1MzA3LTAuNzIyNjU0QzE2NC4wNDIzNDMgNjU5Ljc4MjYzOSAxNzEuMjY4ODc4IDQwMS43OTUzNDIgMTczLjQzNjgzOCAzNzIuMTY2NTQ5YzUuMDU4NTc0LTg5LjYwOTAzMyA3NC40MzMzMS0xNTkuNzA2NDIyIDE1OC4yNjExMTUtMTU5LjcwNjQyMiA5MS43NzY5OTQgMCAxNTguOTgzNzY5IDYwLjcwMjg5MyAxNTguOTgzNzY5IDE0NC41MzA2OTl2NS4wNTg1NzRjMi4xNjc5NiAxMy4wMDc3NjMgMTMuNzMwNDE2IDIyLjQwMjI1OCAyNi43MzgxNzkgMjEuNjc5NjA1IDEzLjAwNzc2My0wLjcyMjY1MyAyMy4xMjQ5MTItMTIuMjg1MTA5IDIzLjEyNDkxMi0yNS4yOTI4NzIgMC00MC40Njg1OTYgMTYuNjIxMDMtNzguMDQ2NTc3IDQ2Ljk3MjQ3Ny0xMDQuNzg0NzU3IDI5LjYyODc5My0yNi43MzgxNzkgNzAuMDk3Mzg5LTQxLjE5MTI0OSAxMTMuNDU2NTk4LTQxLjE5MTI0OWgwLjcyMjY1NGM4My4xMDUxNTIgMCAxNTIuNDc5ODg3IDcwLjA5NzM4OSAxNTcuNTM4NDYyIDE2MC40MjkwNzYgMC43MjI2NTMgOC42NzE4NDIgMS40NDUzMDcgMzIuNTE5NDA3LTMuNjEzMjY4IDY1Ljc2MTQ2Ny0yLjE2Nzk2IDEzLjczMDQxNiA3LjIyNjUzNSAyNi43MzgxNzkgMjAuOTU2OTUxIDI4LjkwNjE0IDEzLjczMDQxNiAyLjE2Nzk2IDI2LjczODE3OS03LjIyNjUzNSAyOC45MDYxNC0yMC45NTY5NTEgNS43ODEyMjgtMzYuODU1MzI4IDUuMDU4NTc0LTY0LjMxNjE2MSA0LjMzNTkyMS03Ny4zMjM5MjR6IiBwLWlkPSIzOTI4IiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PHBhdGggZD0iTTg0Mi42MTM5NzMgNTUxLjM4NDYxNW0tMjUuMjkyODcyIDBhMjUuMjkyODcyIDI1LjI5Mjg3MiAwIDEgMCA1MC41ODU3NDQgMCAyNS4yOTI4NzIgMjUuMjkyODcyIDAgMSAwLTUwLjU4NTc0NCAwWiIgcC1pZD0iMzkyOSIgZmlsbD0iIzcwNTRkZCI+PC9wYXRoPjxwYXRoIGQ9Ik03OTguNTMyMTEgNjI5LjQzMTE5M20tMjUuMjkyODcyIDBhMjUuMjkyODcyIDI1LjI5Mjg3MiAwIDEgMCA1MC41ODU3NDQgMCAyNS4yOTI4NzIgMjUuMjkyODcyIDAgMSAwLTUwLjU4NTc0NCAwWiIgcC1pZD0iMzkzMCIgZmlsbD0iIzcwNTRkZCI+PC9wYXRoPjxwYXRoIGQ9Ik03MzQuOTM4NjAzIDcwMi40MTkxOTVtLTI1LjI5Mjg3MyAwYTI1LjI5Mjg3MiAyNS4yOTI4NzIgMCAxIDAgNTAuNTg1NzQ1IDAgMjUuMjkyODcyIDI1LjI5Mjg3MiAwIDEgMC01MC41ODU3NDUgMFoiIHAtaWQ9IjM5MzEiIGZpbGw9IiM3MDU0ZGQiPjwvcGF0aD48L3N2Zz4=); background-size:56rpx 56rpx; width:56rpx;height:56rpx;"
            }
        };
    },

    onLoad: function onLoad(options) {
        var _this = this;

        this.status = true;
        wx.setStorageSync("status", true);
        this.xuanzhuan = true;
        this.zanting.zhuangtai = true;
        this.id = options.id;

        var playing = wx.getStorageSync("playing");
        var chongfu = [];
        for (var index = 0; index < playing.length; index++) {
            var element = playing[index];

            if (element.id == this.id) {
                element.status = true;

                var elementIDxiangtong = true;
            } else {
                element.status = false;
            }
            chongfu.push(element.id);
        }

        for (var _index = 0; _index < chongfu.length; _index++) {
            var elementq = chongfu[_index];
        }

        if (!elementIDxiangtong) {
            var status = {
                id: this.id,
                status: true
            };
            playing.unshift(status);
        }

        wx.setStorageSync("playing", playing);

        var musicUrl = "http://localhost:3000/music/url?id=" + this.id;
        var musicDetails = "http://localhost:3000/song/detail?ids=" + this.id;
        var musicComment = "http://localhost:3000/comment/music?id=" + this.id + "&limit=100";

        var backgroundAudioManager = wx.getBackgroundAudioManager();

        var musicId = wx.getStorageSync("musicId");

        // 获取是否收藏缓存，首次因为还未设置所以为 false, (因为缓存为键值对格式，所以初始化时候要用{}把它包起来，直接初始化成数组)
        var postsCollected = wx.getStorageSync("posts_collected");
        // 打开一个新的页面，因为前一个页面有了缓存集，所以会进行这一步
        if (postsCollected) {
            var postcollected = postsCollected[this.id];

            // 如果是一个新的页面，那么给collected传递一个undefind会报错
            this.dianzan.zhuangtai = postcollected;
        } else {
            //首次直接跳到else
            var _postcollected = {};
            _postcollected = false;
            // 把初始化的值变为数组 ！
            wx.setStorageSync("posts_collected", {
                postcollected: _postcollected
            });
        }

        if (this.id == musicId) {
            fly.get(musicUrl, {}).then(function (d) {
                _this.musicUrlData = d.data.data[0].url;
            }).catch(function (err) {
                console.log(err.status, err.message);
            });
        } else {
            wx.setStorageSync("musicId", this.id);

            fly.get(musicUrl, {}).then(function (d) {
                _this.musicUrlData = d.data.data[0].url;

                backgroundAudioManager.src = _this.musicUrlData;
            }).catch(function (err) {
                console.log(err.status, err.message);
            });
        }

        fly.get(musicDetails, {}).then(function (d) {
            _this.musicDetailsData = d.data;
            _this.musicDetailsImg = d.data.songs[0].al.picUrl;
            var musicDetailsTitle = d.data.songs[0].al.name;
            _this.musicDetailsName = d.data.songs[0].ar;

            backgroundAudioManager.title = musicDetailsTitle;
            backgroundAudioManager.singer = _this.musicDetailsName;
            backgroundAudioManager.coverImgUrl = _this.musicDetailsImg;

            wx.setNavigationBarTitle({
                title: musicDetailsTitle //页面标题为路由参数
            });
        }).catch(function (err) {
            console.log(err.status, err.message);
        });
        fly.get(musicComment, {}).then(function (d) {
            _this.musicComment = d.data.comments;
        }).catch(function (err) {
            console.log(err.status, err.message);
        });
    },

    mounted: function mounted() {
        var _this2 = this;

        /**
         * 监听音乐播放
         */

        wx.onBackgroundAudioPlay(function () {
            // callback
            console.log("onBackgroundAudioPlay");
        });
        /**
         * 监听音乐暂停
         */

        wx.onBackgroundAudioPause(function () {
            // callback
            console.log("onBackgroundAudioPause");
        });

        wx.getBackgroundAudioManager().onStop(function () {
            wx.setStorageSync("playing", []);
            wx.setStorageSync("status", false);
            wx.setStorageSync("musicId", '');

            var url = "../index/main";
            wx.navigateTo({ url: url });
        });

        wx.getBackgroundAudioManager().onEnded(function () {
            var playListziran = wx.getStorageSync("playing");
            for (var index = 0; index < playListziran.length; index++) {
                var element = playListziran[index].id;
                if (_this2.id == element) {
                    _this2.index = index;
                    _this2.id = playListziran[index - 1].id;
                    break;
                }
            }
            var musicUrl = "http://localhost:3000/music/url?id=" + _this2.id;
            var musicDetails = "http://localhost:3000/song/detail?ids=" + _this2.id;
            var musicComment = "http://localhost:3000/comment/music?id=" + _this2.id + "&limit=100";
            var backgroundAudioManager = wx.getBackgroundAudioManager();

            _this2.status = true;

            // 获取是否收藏缓存，首次因为还未设置所以为 false, (因为缓存为键值对格式，所以初始化时候要用{}把它包起来，直接初始化成数组)
            var postsCollected = wx.getStorageSync("posts_collected");
            // 打开一个新的页面，因为前一个页面有了缓存集，所以会进行这一步
            if (postsCollected) {
                var postcollected = postsCollected[_this2.id];

                // 如果是一个新的页面，那么给collected传递一个undefind会报错
                _this2.dianzan.zhuangtai = postcollected;
            } else {
                //首次直接跳到else
                var _postcollected = {};
                _postcollected = false;
                // 把初始化的值变为数组 ！
                wx.setStorageSync("posts_collected", {
                    postcollected: _postcollected
                });
            }

            wx.setStorageSync("musicId", _this2.id);
            fly.get(musicUrl, {}).then(function (d) {
                _this2.musicUrlData = d.data.data[0].url;

                backgroundAudioManager.src = _this2.musicUrlData;
            }).catch(function (err) {
                console.log(err.status, err.message);
            });

            fly.get(musicDetails, {}).then(function (d) {
                _this2.musicDetailsData = d.data;
                _this2.musicDetailsImg = d.data.songs[0].al.picUrl;
                var musicDetailsTitle = d.data.songs[0].al.name;
                _this2.musicDetailsName = d.data.songs[0].ar;

                backgroundAudioManager.title = musicDetailsTitle;
                backgroundAudioManager.singer = _this2.musicDetailsName;
                backgroundAudioManager.coverImgUrl = _this2.musicDetailsImg;

                wx.setNavigationBarTitle({
                    title: musicDetailsTitle //页面标题为路由参数
                });
            }).catch(function (err) {
                console.log(err.status, err.message);
            });
            fly.get(musicComment, {}).then(function (d) {
                _this2.musicComment = d.data.comments;
            }).catch(function (err) {
                console.log(err.status, err.message);
            });

            var chongfus = [];

            for (var _index2 = 0; _index2 < playListziran.length; _index2++) {
                var _element = playListziran[_index2];

                if (_element.id == _this2.id) {
                    _element.status = true;

                    var elementIDxiangtong = true;
                } else {
                    _element.status = false;
                }
                chongfus.push(_element.id);
            }

            for (var _index3 = 0; _index3 < chongfus.length; _index3++) {
                var elementq = chongfus[_index3];
            }

            if (!elementIDxiangtong) {
                var status = {
                    id: _this2.id,
                    status: true
                };
                playListziran.unshift(status);
            }

            wx.setStorageSync("playing", playListziran);
        });
    },

    methods: {
        //监听button暂停按钮
        listenerButtonPause: function listenerButtonPause() {
            if (this.status) {
                wx.pauseBackgroundAudio({});
                this.status = false;
                wx.setStorageSync("status", false);
            } else {
                wx.playBackgroundAudio({});
                this.status = true;
                wx.setStorageSync("status", true);
            }

            if (this.xuanzhuan) {
                this.xuanzhuan = false;
            } else {
                this.xuanzhuan = true;
            }
            if (this.zanting.zhuangtai) {
                this.zanting.zhuangtai = false;
            } else {
                this.zanting.zhuangtai = true;
            }
        },
        dianzanClick: function dianzanClick() {
            var postsCollected = wx.getStorageSync("posts_collected");
            var postcollected = this.id;

            postsCollected[postcollected] = !postsCollected[postcollected];

            // 更新文章是否收藏缓存集
            //重新写入缓存集
            wx.setStorageSync("posts_collected", postsCollected);

            this.dianzan.zhuangtai = !this.dianzan.zhuangtai;
        },
        playing: function playing() {
            wx.switchTab({
                url: "../playlist/main" //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
            });
        },
        PrevSong: function PrevSong() {
            var _this3 = this;

            var playListPrev = wx.getStorageSync("playing");
            for (var index = 0; index < playListPrev.length; index++) {
                var element = playListPrev[index].id;
                if (this.id == element) {
                    this.index = index;
                    this.id = playListPrev[index + 1].id;
                    break;
                }
            }
            var musicUrl = "http://localhost:3000/music/url?id=" + this.id;
            var musicDetails = "http://localhost:3000/song/detail?ids=" + this.id;
            var musicComment = "http://localhost:3000/comment/music?id=" + this.id + "&limit=100";
            var backgroundAudioManager = wx.getBackgroundAudioManager();

            this.status = true;

            // 获取是否收藏缓存，首次因为还未设置所以为 false, (因为缓存为键值对格式，所以初始化时候要用{}把它包起来，直接初始化成数组)
            var postsCollected = wx.getStorageSync("posts_collected");
            // 打开一个新的页面，因为前一个页面有了缓存集，所以会进行这一步
            if (postsCollected) {
                var postcollected = postsCollected[this.id];

                // 如果是一个新的页面，那么给collected传递一个undefind会报错
                this.dianzan.zhuangtai = postcollected;
            } else {
                //首次直接跳到else
                var _postcollected = {};
                _postcollected = false;
                // 把初始化的值变为数组 ！
                wx.setStorageSync("posts_collected", {
                    postcollected: _postcollected
                });
            }

            wx.setStorageSync("musicId", this.id);
            fly.get(musicUrl, {}).then(function (d) {
                _this3.musicUrlData = d.data.data[0].url;

                backgroundAudioManager.src = _this3.musicUrlData;
            }).catch(function (err) {
                console.log(err.status, err.message);
            });

            fly.get(musicDetails, {}).then(function (d) {
                _this3.musicDetailsData = d.data;
                _this3.musicDetailsImg = d.data.songs[0].al.picUrl;
                var musicDetailsTitle = d.data.songs[0].al.name;
                _this3.musicDetailsName = d.data.songs[0].ar;

                backgroundAudioManager.title = musicDetailsTitle;
                backgroundAudioManager.singer = _this3.musicDetailsName;
                backgroundAudioManager.coverImgUrl = _this3.musicDetailsImg;

                wx.setNavigationBarTitle({
                    title: musicDetailsTitle //页面标题为路由参数
                });
            }).catch(function (err) {
                console.log(err.status, err.message);
            });
            fly.get(musicComment, {}).then(function (d) {
                _this3.musicComment = d.data.comments;
            }).catch(function (err) {
                console.log(err.status, err.message);
            });

            var chongfuss = [];

            for (var _index4 = 0; _index4 < playListPrev.length; _index4++) {
                var _element2 = playListPrev[_index4];

                if (_element2.id == this.id) {
                    _element2.status = true;

                    var elementIDxiangtong = true;
                } else {
                    _element2.status = false;
                }
                chongfuss.push(_element2.id);
            }

            for (var _index5 = 0; _index5 < chongfuss.length; _index5++) {
                var elementq = chongfuss[_index5];
            }

            if (!elementIDxiangtong) {
                var status = {
                    id: this.id,
                    status: true
                };
                playListPrev.unshift(status);
            }

            wx.setStorageSync("playing", playListPrev);
        },
        nextSong: function nextSong() {
            var _this4 = this;

            var playList = wx.getStorageSync("playing");
            for (var index = 0; index < playList.length; index++) {
                var element = playList[index].id;
                if (this.id == element) {
                    this.index = index;
                    this.id = playList[index - 1].id;
                    break;
                }
            }
            var musicUrl = "http://localhost:3000/music/url?id=" + this.id;
            var musicDetails = "http://localhost:3000/song/detail?ids=" + this.id;
            var musicComment = "http://localhost:3000/comment/music?id=" + this.id + "&limit=100";
            var backgroundAudioManager = wx.getBackgroundAudioManager();

            this.status = true;

            // 获取是否收藏缓存，首次因为还未设置所以为 false, (因为缓存为键值对格式，所以初始化时候要用{}把它包起来，直接初始化成数组)
            var postsCollected = wx.getStorageSync("posts_collected");
            // 打开一个新的页面，因为前一个页面有了缓存集，所以会进行这一步
            if (postsCollected) {
                var postcollected = postsCollected[this.id];

                // 如果是一个新的页面，那么给collected传递一个undefind会报错
                this.dianzan.zhuangtai = postcollected;
            } else {
                //首次直接跳到else
                var _postcollected = {};
                _postcollected = false;
                // 把初始化的值变为数组 ！
                wx.setStorageSync("posts_collected", {
                    postcollected: _postcollected
                });
            }

            wx.setStorageSync("musicId", this.id);
            fly.get(musicUrl, {}).then(function (d) {
                _this4.musicUrlData = d.data.data[0].url;

                backgroundAudioManager.src = _this4.musicUrlData;
            }).catch(function (err) {
                console.log(err.status, err.message);
            });

            fly.get(musicDetails, {}).then(function (d) {
                _this4.musicDetailsData = d.data;
                _this4.musicDetailsImg = d.data.songs[0].al.picUrl;
                var musicDetailsTitle = d.data.songs[0].al.name;
                _this4.musicDetailsName = d.data.songs[0].ar;

                backgroundAudioManager.title = musicDetailsTitle;
                backgroundAudioManager.singer = _this4.musicDetailsName;
                backgroundAudioManager.coverImgUrl = _this4.musicDetailsImg;

                wx.setNavigationBarTitle({
                    title: musicDetailsTitle //页面标题为路由参数
                });
            }).catch(function (err) {
                console.log(err.status, err.message);
            });
            fly.get(musicComment, {}).then(function (d) {
                _this4.musicComment = d.data.comments;
            }).catch(function (err) {
                console.log(err.status, err.message);
            });

            var chongfus = [];

            for (var _index6 = 0; _index6 < playList.length; _index6++) {
                var _element3 = playList[_index6];

                if (_element3.id == this.id) {
                    _element3.status = true;

                    var elementIDxiangtong = true;
                } else {
                    _element3.status = false;
                }
                chongfus.push(_element3.id);
            }

            for (var _index7 = 0; _index7 < chongfus.length; _index7++) {
                var elementq = chongfus[_index7];
            }

            if (!elementIDxiangtong) {
                var status = {
                    id: this.id,
                    status: true
                };
                playList.unshift(status);
            }

            wx.setStorageSync("playing", playList);
        }
    }
});

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "author"
  }, _vm._l((_vm.musicDetailsName), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "author name"
    }, [_vm._v("\n            " + _vm._s(item.name) + "\n        ")])
  })), _vm._v(" "), _c('div', {
    staticClass: "banner-img"
  }, [_c('img', {
    class: {
      'xuanzhuan': _vm.xuanzhuan
    },
    staticStyle: {
      "width": "550rpx",
      "height": "550rpx"
    },
    attrs: {
      "src": _vm.musicDetailsImg,
      "alt": ""
    }
  })]), _vm._v(" "), _c('swiper', {
    staticClass: "musicComment",
    attrs: {
      "autoplay": true,
      "interval": 3000,
      "circular": true,
      "vertical": true,
      "display-multiple-items": 3
    }
  }, _vm._l((_vm.musicComment), function(item, index) {
    return _c('block', {
      key: item.id
    }, [_c('swiper-item', {
      staticClass: "musicCommentItem",
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('img', {
      attrs: {
        "src": item.user.avatarUrl,
        "alt": ""
      }
    }), _vm._v(" ：" + _vm._s(item.content) + "\n            ")])], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "musicMini"
  }, [_c('i', {
    style: (_vm.dianzan.zhuangtai ? _vm.dianzan.zhen : _vm.dianzan.jia),
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.dianzanClick
    }
  }), _vm._v(" "), _c('i', {
    staticStyle: {
      "background": "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MDk3NjgyMDQ4IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzNjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODEiIGhlaWdodD0iODEiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTc4NC42MTQ5MTEgMjM1LjYzNjcxOCAyMzguMjAzMTcgMjM1LjYzNjcxOGMtNDUuMTQwMDgzIDAtODEuODY0NDk2IDM2LjcyNDQxMy04MS44NjQ0OTYgODEuODY0NDk2bDAgMzAzLjkwMDQ1MWMwIDQ1LjE0MDA4MyAzNi43MjQ0MTMgODEuODY0NDk2IDgxLjg2NDQ5NiA4MS44NjQ0OTZMNTAyLjk3OTU1NiA3MDMuMjY2MTYybDEyMS45MjI4NCAxMjAuOTQ2NjA2YzMuOTkwODk0IDMuOTU5MTcyIDkuMjAyNTkzIDUuOTM2MTk5IDE0LjQxMjI0NCA1LjkzNjE5OSA1LjI2NTkzNCAwIDEwLjUyOTgyMS0yLjAyMDAwNiAxNC41MzA5NDgtNi4wNTI4NTYgNy45NTkyNzYtOC4wMjQ3NjcgNy45MDgxMS0yMC45ODI4OTQtMC4xMTY2NTctMjguOTQzMTkzTDUyNS44MjI4MiA2NjguMjcwMTEzYy0wLjEzMzAzLTAuMTMyMDA2LTAuMjc4MzM5LTAuMjQ0NTctMC40MTQ0MzktMC4zNzI0ODMtMC4zNDU4NzctMC4zMjU0MTEtMC42OTI3NzgtMC42NDk3OTktMS4wNjAxNDUtMC45NTA2NTEtMC4yNDU1OTMtMC4yMDA1NjgtMC41MDI0NDMtMC4zNzY1NzctMC43NTQxNzctMC41NjM4NDItMC4yODM0NTYtMC4yMTA4MDEtMC41NjA3NzItMC40MjY3MTktMC44NTQ0NjEtMC42MjMxOTMtMC4yOTA2MTktMC4xOTM0MDUtMC41OTE0NzEtMC4zNjMyNzQtMC44OTAyNzYtMC41NDAzMDYtMC4yNzUyNjktMC4xNjM3MjktMC41NDQzOTktMC4zMzM1OTgtMC44Mjc4NTUtMC40ODUwNDctMC4zMDU5NjktMC4xNjI3MDYtMC42MTkxLTAuMzAxODc1LTAuOTMwMTg1LTAuNDQ4MjA4LTAuMjk0NzEyLTAuMTM4MTQ2LTAuNTg0MzA4LTAuMjgyNDMzLTAuODg2MTgzLTAuNDA3Mjc2LTAuMzA1OTY5LTAuMTI1ODY3LTAuNjE4MDc3LTAuMjI5MjIxLTAuOTI4MTM5LTAuMzM5NzM4LTAuMzIwMjk1LTAuMTE0NjEtMC42MzY0OTYtMC4yMzQzMzctMC45NjI5MzEtMC4zMzI1NzUtMC4zMTEwODUtMC4wOTMxMjEtMC42MjcyODctMC4xNjM3MjktMC45NDE0NDItMC4yNDI1MjQtMC4zMzM1OTgtMC4wODI4ODgtMC42NjMxMDItMC4xNzM5NjItMS4wMDE4MTctMC4yNDA0NzctMC4zNDc5MjQtMC4wNjg1NjItMC42OTg5MTgtMC4xMTA1MTctMS4wNDg4ODktMC4xNTk2MzYtMC4zMTAwNjItMC4wNDQwMDItMC42MTYwMy0wLjEwMDI4NC0wLjkzMDE4NS0wLjEyOTk2LTAuNDY1NjA0LTAuMDQ1MDI1LTAuOTMzMjU1LTAuMDU3MzA1LTEuMzk5ODgzLTAuMDcwNjA4LTAuMTk0NDI4LTAuMDA1MTE3LTAuMzgzNzQtMC4wMjk2NzYtMC41NzkxOTEtMC4wMjk2NzZMMjM4LjIwMzE3IDY2Mi4zMzM5MTRjLTIyLjU3MDA0MiAwLTQwLjkzMjI0OC0xOC4zNjIyMDYtNDAuOTMyMjQ4LTQwLjkzMjI0OEwxOTcuMjcwOTIyIDMxNy41MDEyMTRjMC0yMi41NzAwNDIgMTguMzYyMjA2LTQwLjkzMjI0OCA0MC45MzIyNDgtNDAuOTMyMjQ4bDU0Ni40MTE3NDEgMGMyMi41NzAwNDIgMCA0MC45MzIyNDggMTguMzYyMjA2IDQwLjkzMjI0OCA0MC45MzIyNDhsMCAzMDMuOTAwNDUxYzAgMjIuNTcwMDQyLTE4LjM2MjIwNiA0MC45MzIyNDgtNDAuOTMyMjQ4IDQwLjkzMjI0OEw2NTkuNzgzODM1IDY2Mi4zMzM5MTRjLTExLjMwMzQ0IDAtMjAuNDY2MTI0IDkuMTYyNjg0LTIwLjQ2NjEyNCAyMC40NjYxMjRzOS4xNjI2ODQgMjAuNDY2MTI0IDIwLjQ2NjEyNCAyMC40NjYxMjRsMTI0LjgzMTA3NyAwYzQ1LjE0MDA4MyAwIDgxLjg2NDQ5Ni0zNi43MjQ0MTMgODEuODY0NDk2LTgxLjg2NDQ5Nkw4NjYuNDc5NDA3IDMxNy41MDEyMTRDODY2LjQ3OTQwNyAyNzIuMzYxMTMxIDgyOS43NTQ5OTQgMjM1LjYzNjcxOCA3ODQuNjE0OTExIDIzNS42MzY3MTh6TTM1MS42ODE2ODggNDcwLjU1NjA5OW0tMzAuNjk5MTg2IDBhMzAgMzAgMCAxIDAgNjEuMzk4MzcyIDAgMzAgMzAgMCAxIDAtNjEuMzk4MzcyIDBaTTUxMS4zMTc0NTUgNDcwLjU1NjA5OW0tMzAuNjk5MTg2IDBhMzAgMzAgMCAxIDAgNjEuMzk4MzcyIDAgMzAgMzAgMCAxIDAtNjEuMzk4MzcyIDBaTTY2OC45MDY2MDkgNDcwLjU1NjA5OW0tMzAuNjk5MTg2IDBhMzAgMzAgMCAxIDAgNjEuMzk4MzcyIDAgMzAgMzAgMCAxIDAtNjEuMzk4MzcyIDBaIiBwLWlkPSI0MzY2IiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PC9zdmc+)",
      "background-size": "56rpx 56rpx",
      "width": "56rpx",
      "height": "56rpx"
    }
  }), _vm._v(" "), _c('i', {
    staticStyle: {
      "background": "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MDk3Njk0NzQ4IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUxMjciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODEiIGhlaWdodD0iODEiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU0NCA2NDMuMmwxMzEuMi0xMzEuMmMxMi44LTEyLjggMzItMTIuOCA0NC44IDAgMTIuOCAxMi44IDEyLjggMzIgMCA0NC44bC0xNTYuOCAxNTYuOGMtMjUuNiAyNS42LTY0IDI1LjYtODkuNiAwbC0xNTYuOC0xNTYuOGMtMTIuOC0xMi44LTEyLjgtMzIgMC00NC44IDEyLjgtMTIuOCAzMi0xMi44IDQ0LjggMGwxMjEuNiAxMjEuNlYxNjBjMC0xOS4yIDEyLjgtMzIgMzItMzJzMzIgMTIuOCAzMiAzMnY0ODMuMnogbTI4OC0zNS4yYzAtMTkuMiAxMi44LTMyIDMyLTMyczMyIDEyLjggMzIgMzJ2MTYwYzAgNTQuNC00MS42IDk2LTk2IDk2aC01NzZjLTU0LjQgMC05Ni00MS42LTk2LTk2di0xNjBjMC0xOS4yIDEyLjgtMzIgMzItMzJzMzIgMTIuOCAzMiAzMnYxNjBjMCAxOS4yIDEyLjggMzIgMzIgMzJoNTc2YzE5LjIgMCAzMi0xMi44IDMyLTMydi0xNjB6IiBwLWlkPSI1MTI4IiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PC9zdmc+)",
      "background-size": "56rpx 56rpx",
      "width": "56rpx",
      "height": "56rpx"
    }
  }), _vm._v(" "), _c('i', {
    staticStyle: {
      "background": "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MDk3NzI1MjYzIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU5MjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODEiIGhlaWdodD0iODEiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiA4MTQuNTQ1NDU1Yy0zOS41NjM2MzYgMC02OS44MTgxODItMzAuMjU0NTQ1LTY5LjgxODE4Mi02OS44MTgxODJzMzAuMjU0NTQ1LTY5LjgxODE4MiA2OS44MTgxODItNjkuODE4MTgyIDY5LjgxODE4MiAzMC4yNTQ1NDUgNjkuODE4MTgyIDY5LjgxODE4Mi0zMC4yNTQ1NDUgNjkuODE4MTgyLTY5LjgxODE4MiA2OS44MTgxODJ6IG0wLTIzMi43MjcyNzNjLTM5LjU2MzYzNiAwLTY5LjgxODE4Mi0zMC4yNTQ1NDUtNjkuODE4MTgyLTY5LjgxODE4MnMzMC4yNTQ1NDUtNjkuODE4MTgyIDY5LjgxODE4Mi02OS44MTgxODIgNjkuODE4MTgyIDMwLjI1NDU0NSA2OS44MTgxODIgNjkuODE4MTgyLTMwLjI1NDU0NSA2OS44MTgxODItNjkuODE4MTgyIDY5LjgxODE4MnogbTAtMjMyLjcyNzI3M2MtMzkuNTYzNjM2IDAtNjkuODE4MTgyLTMwLjI1NDU0NS02OS44MTgxODItNjkuODE4MTgyczMwLjI1NDU0NS02OS44MTgxODIgNjkuODE4MTgyLTY5LjgxODE4MiA2OS44MTgxODIgMzAuMjU0NTQ1IDY5LjgxODE4MiA2OS44MTgxODItMzAuMjU0NTQ1IDY5LjgxODE4Mi02OS44MTgxODIgNjkuODE4MTgyeiIgZmlsbD0iIzcwNTRkZCIgcC1pZD0iNTkyNSI+PC9wYXRoPjwvc3ZnPg==)",
      "background-size": "56rpx 56rpx",
      "width": "56rpx",
      "height": "56rpx"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "musicIcon"
  }, [_c('i', {
    staticStyle: {
      "background": "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MDk3NzQ1OTM0IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY1MTQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODEiIGhlaWdodD0iODEiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk0Ni40ODM1MzIgNDY3LjIxODA3NCA3OTkuNTMzNjkyIDYxNi40NzQ0NDZjLTcuOTk4MTYxIDguMTIxOTgxLTE4LjkxODg4NSAxMi42OTcxODMtMzAuMzE4NTE2IDEyLjY5NzE4My0xMS4zOTk2MzEgMC0yMi4zMjAzNTUtNC41NzUyMDItMzAuMzE4NTE2LTEyLjY5NzE4M0w1OTEuOTQ1Nzk3IDQ2Ny4yMTgwNzRjLTE2LjQ4MzQxNi0xNi43NDQzNTktMTYuMjcwNTY5LTQzLjY3Njc1NSAwLjQ3MTc0NC02MC4xNjUyODggMTYuNzM5MjQzLTE2LjQ4MzQxNiA0My42NjU0OTktMTYuMjc1Njg1IDYwLjE2NTI4OCAwLjQ3MTc0NGw4Mi4xMzQ2NDkgODMuNDI2MDYxYy0xMC42NTM2NDEtMTU0LjQxNTg4Mi0xMzcuMzkyMTYtMjc2Ljc1NzI1NS0yOTEuNzU4OTIzLTI3Ni43NTcyNTUtMTYxLjMzMTM4NSAwLTI5Mi41ODE2NjIgMTMzLjU5MjYyNC0yOTIuNTgxNjYyIDI5Ny44MDY2NjNTMjgxLjYyODE5MiA4MDkuODA1NjQgNDQyLjk1OTU3NyA4MDkuODA1NjRjNTkuMzgwNDEyIDAgMTE2LjUyMjg1NC0xNy45Nzk0OSAxNjUuMjQxNDM4LTUyLjAwMTM1MSAxOS4yNzE5MjYtMTMuNDQ1MjIgNDUuNzk0OTk5LTguNzMzOTE4IDU5LjI0MDIxOSAxMC41Mjc3NzQgMTMuNDUxMzYgMTkuMjY2ODA5IDguNzM0OTQyIDQ1Ljc4OTg4Mi0xMC41MjY3NTEgNTkuMjQwMjE5LTYzLjA3ODY0MSA0NC4wMzkwMDYtMTM3LjA2MTYzMiA2Ny4zMjEyNjgtMjEzLjk1NDkwNyA2Ny4zMjEyNjgtMjA4LjI0NjkwNSAwLTM3Ny42Njk1NzItMTcxLjc2Mzk5Mi0zNzcuNjY5NTcyLTM4Mi44OTM1NXMxNjkuNDIxNjQ0LTM4Mi44OTM1NSAzNzcuNjY5NTcyLTM4Mi44OTM1NWMxOTYuMTE1NjEgMCAzNTcuNzQxNzA3IDE1Mi4zNjAwNiAzNzUuOTA0MzY5IDM0Ni40NTQ2NGw2Ni45ODE1MzEtNjguMDM1NTM2YzE2LjQ5OTc4OS0xNi43NTI1NDYgNDMuNDM3MzAyLTE2Ljk1MDA0NCA2MC4xNjUyODgtMC40NzE3NDRDOTYyLjc1NTEyNCA0MjMuNTQxMzE5IDk2Mi45Njc5NzIgNDUwLjQ3MzcxNSA5NDYuNDgzNTMyIDQ2Ny4yMTgwNzR6IiBwLWlkPSI2NTE1IiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PC9zdmc+)",
      "background-size": "56rpx 56rpx",
      "width": "56rpx",
      "height": "56rpx"
    }
  }), _vm._v(" "), _c('i', {
    staticStyle: {
      "background": "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MTUwMjAwNTU0IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0MDUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDYyLjM4OTk1NmMtMjQ4LjMxMjQxMiAwLTQ0OS42MTAwNDQgMjAxLjI5NzYzMi00NDkuNjEwMDQ0IDQ0OS42MTAwNDRzMjAxLjI5NzYzMiA0NDkuNjEwMDQ0IDQ0OS42MTAwNDQgNDQ5LjYxMDA0NCA0NDkuNjEwMDQ0LTIwMS4yOTc2MzIgNDQ5LjYxMDA0NC00NDkuNjEwMDQ0Uzc2MC4zMTI0MTIgNjIuMzg5OTU2IDUxMiA2Mi4zODk5NTZ6TTc4Ni41MDcwMDQgNzg2LjUwNzAwNGMtMzUuNjcyNDU0IDM1LjY3MjQ1NC03Ny4xOTYxNzMgNjMuNjcyMTU4LTEyMy40MTY4NjcgODMuMjIyNDIzLTQ3LjgyMTE0NSAyMC4yMjY2Ny05OC42NTU5MjcgMzAuNDgyMjQ1LTE1MS4wOTExNiAzMC40ODIyNDUtNTIuNDM1MjMzIDAtMTAzLjI3MDAxNS0xMC4yNTU1NzUtMTUxLjA5MTE2LTMwLjQ4MjI0NS00Ni4yMjA2OTQtMTkuNTQ5MjQyLTg3Ljc0NDQxMy00Ny41NDk5NjktMTIzLjQxNjg2Ny04My4yMjI0MjMtMzUuNjcyNDU0LTM1LjY3MjQ1NC02My42NzIxNTgtNzcuMTk2MTczLTgzLjIyMjQyMy0xMjMuNDE2ODY3LTIwLjIyNjY3LTQ3LjgyMTE0NS0zMC40ODIyNDUtOTguNjU1OTI3LTMwLjQ4MjI0NS0xNTEuMDkwMTM3IDAtNTIuNDM1MjMzIDEwLjI1NTU3NS0xMDMuMjcwMDE1IDMwLjQ4MjI0NS0xNTEuMDkxMTYgMTkuNTQ5MjQyLTQ2LjIyMDY5NCA0Ny41NDk5NjktODcuNzQ0NDEzIDgzLjIyMjQyMy0xMjMuNDE2ODY3IDM1LjY3MjQ1NC0zNS42NzI0NTQgNzcuMTk2MTczLTYzLjY3MjE1OCAxMjMuNDE2ODY3LTgzLjIyMjQyMyA0Ny44MjExNDUtMjAuMjI2NjcgOTguNjU0OTA0LTMwLjQ4MjI0NSAxNTEuMDkxMTYtMzAuNDgyMjQ1IDUyLjQzNTIzMyAwIDEwMy4yNjg5OTIgMTAuMjU1NTc1IDE1MS4wOTExNiAzMC40ODIyNDUgNDYuMjIwNjk0IDE5LjU0OTI0MiA4Ny43NDQ0MTMgNDcuNTQ5OTY5IDEyMy40MTY4NjcgODMuMjIyNDIzIDM1LjY3MjQ1NCAzNS42NzI0NTQgNjMuNjcyMTU4IDc3LjE5NjE3MyA4My4yMjI0MjMgMTIzLjQxNjg2NyAyMC4yMjY2NyA0Ny44MjExNDUgMzAuNDgyMjQ1IDk4LjY1NTkyNyAzMC40ODIyNDUgMTUxLjA5MTE2IDAgNTIuNDM1MjMzLTEwLjI1NTU3NSAxMDMuMjY4OTkyLTMwLjQ4MjI0NSAxNTEuMDkwMTM3Qzg1MC4xNzkxNjMgNzA5LjMxMDgzMSA4MjIuMTc5NDU4IDc1MC44MzQ1NSA3ODYuNTA3MDA0IDc4Ni41MDcwMDR6IiBwLWlkPSIxNDA2IiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PHBhdGggZD0iTTcxNS44MzAzMTUgMzA1LjY2NzcwMSA0NDguMzQ2MjYxIDUwNy45ODA0NTNjLTMuMDk0NDc4IDEuNzg2NjkzLTMuMDk0NDc4IDYuMjUyNDAxIDAgOC4wMzkwOTNsMjY3LjQ4NDA1NCAyMDIuMzEyNzUyYzMuMDk0NDc4IDEuNzg2NjkzIDYuOTYxNTUyLTAuNDQ2MTYyIDYuOTYxNTUyLTQuMDE5NTQ3bDAtNDA0LjYyNTUwNEM3MjIuNzkxODY3IDMwNi4xMTM4NjMgNzE4LjkyNDc5MyAzMDMuODgxMDA5IDcxNS44MzAzMTUgMzA1LjY2NzcwMXoiIHAtaWQ9IjE0MDciIGZpbGw9IiM3MDU0ZGQiPjwvcGF0aD48cGF0aCBkPSJNMzk4LjA3ODM5MSAzMDYuMDQ5Mzk1bC05Mi4yMjk1NjQgMGMtMi41NjMzODIgMC00LjY0MDY5NCAyLjM2NTg4NC00LjY0MDY5NCA1LjI4MzMzbDAgNDAxLjMzNDU1MWMwIDIuOTE3NDQ2IDIuMDc4MzM1IDUuMjgzMzMgNC42NDA2OTQgNS4yODMzM2w5Mi4yMjk1NjQgMGMyLjU2MzM4MiAwIDQuNjQxNzE3LTIuMzY1ODg0IDQuNjQxNzE3LTUuMjgzMzNMNDAyLjcyMDEwOCAzMTEuMzMyNzI0QzQwMi43MTkwODQgMzA4LjQxNTI3OCA0MDAuNjQxNzczIDMwNi4wNDkzOTUgMzk4LjA3ODM5MSAzMDYuMDQ5Mzk1eiIgcC1pZD0iMTQwOCIgZmlsbD0iIzcwNTRkZCI+PC9wYXRoPjwvc3ZnPg==)",
      "background-size": "76rpx 76rpx",
      "width": "76rpx",
      "height": "76rpx"
    },
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.PrevSong
    }
  }), _vm._v(" "), _c('i', {
    style: ([_vm.zanting.zhuangtai ? _vm.zanting.zanting : _vm.zanting.kaishi, _vm.errorClass]),
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.listenerButtonPause
    }
  }), _vm._v(" "), _c('i', {
    staticStyle: {
      "background": "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MTUwMjE3NTQ2IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2OTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDYyLjM4OTk1NmMtMjQ4LjMxMjQxMiAwLTQ0OS42MTAwNDQgMjAxLjI5NzYzMi00NDkuNjEwMDQ0IDQ0OS42MTAwNDRzMjAxLjI5NzYzMiA0NDkuNjEwMDQ0IDQ0OS42MTAwNDQgNDQ5LjYxMDA0NCA0NDkuNjEwMDQ0LTIwMS4yOTc2MzIgNDQ5LjYxMDA0NC00NDkuNjEwMDQ0Uzc2MC4zMTI0MTIgNjIuMzg5OTU2IDUxMiA2Mi4zODk5NTZ6TTc4Ni41MDcwMDQgNzg2LjUwNzAwNGMtMzUuNjcyNDU0IDM1LjY3MjQ1NC03Ny4xOTYxNzMgNjMuNjcyMTU4LTEyMy40MTY4NjcgODMuMjIyNDIzLTQ3LjgyMTE0NSAyMC4yMjY2Ny05OC42NTU5MjcgMzAuNDgyMjQ1LTE1MS4wOTExNiAzMC40ODIyNDUtNTIuNDM1MjMzIDAtMTAzLjI3MDAxNS0xMC4yNTU1NzUtMTUxLjA5MTE2LTMwLjQ4MjI0NS00Ni4yMjA2OTQtMTkuNTQ5MjQyLTg3Ljc0NDQxMy00Ny41NDk5NjktMTIzLjQxNjg2Ny04My4yMjI0MjMtMzUuNjcyNDU0LTM1LjY3MjQ1NC02My42NzIxNTgtNzcuMTk2MTczLTgzLjIyMjQyMy0xMjMuNDE2ODY3LTIwLjIyNjY3LTQ3LjgyMTE0NS0zMC40ODIyNDUtOTguNjU1OTI3LTMwLjQ4MjI0NS0xNTEuMDkwMTM3IDAtNTIuNDM1MjMzIDEwLjI1NTU3NS0xMDMuMjcwMDE1IDMwLjQ4MjI0NS0xNTEuMDkxMTYgMTkuNTQ5MjQyLTQ2LjIyMDY5NCA0Ny41NDk5NjktODcuNzQ0NDEzIDgzLjIyMjQyMy0xMjMuNDE2ODY3IDM1LjY3MjQ1NC0zNS42NzI0NTQgNzcuMTk2MTczLTYzLjY3MjE1OCAxMjMuNDE2ODY3LTgzLjIyMjQyMyA0Ny44MjExNDUtMjAuMjI2NjcgOTguNjU0OTA0LTMwLjQ4MjI0NSAxNTEuMDkxMTYtMzAuNDgyMjQ1IDUyLjQzNTIzMyAwIDEwMy4yNjg5OTIgMTAuMjU1NTc1IDE1MS4wOTExNiAzMC40ODIyNDUgNDYuMjIwNjk0IDE5LjU0OTI0MiA4Ny43NDQ0MTMgNDcuNTQ5OTY5IDEyMy40MTY4NjcgODMuMjIyNDIzIDM1LjY3MjQ1NCAzNS42NzI0NTQgNjMuNjcyMTU4IDc3LjE5NjE3MyA4My4yMjI0MjMgMTIzLjQxNjg2NyAyMC4yMjY2NyA0Ny44MjExNDUgMzAuNDgyMjQ1IDk4LjY1NTkyNyAzMC40ODIyNDUgMTUxLjA5MTE2IDAgNTIuNDM1MjMzLTEwLjI1NTU3NSAxMDMuMjY4OTkyLTMwLjQ4MjI0NSAxNTEuMDkwMTM3Qzg1MC4xNzkxNjMgNzA5LjMxMDgzMSA4MjIuMTc5NDU4IDc1MC44MzQ1NSA3ODYuNTA3MDA0IDc4Ni41MDcwMDR6TTU3NS42NTM3MzkgNTA3Ljk4MDQ1MyAzMDguMTY5Njg1IDMwNS42Njc3MDFjLTMuMDk0NDc4LTEuNzg2NjkzLTYuOTYxNTUyIDAuNDQ2MTYyLTYuOTYxNTUyIDQuMDE5NTQ3bDAgNDA0LjYyNTUwNGMwIDMuNTcyMzYyIDMuODY4MDk3IDUuODA2MjM5IDYuOTYxNTUyIDQuMDE5NTQ3bDI2Ny40ODQwNTQtMjAyLjMxMjc1MkM1NzguNzQ3MTkzIDUxNC4yMzI4NTQgNTc4Ljc0NzE5MyA1MDkuNzY3MTQ2IDU3NS42NTM3MzkgNTA3Ljk4MDQ1M3pNNzE4LjE1MTE3NCAzMDYuMDQ5Mzk1bC05Mi4yMjk1NjQgMGMtMi41NjMzODIgMC00LjY0MDY5NCAyLjM2NTg4NC00LjY0MDY5NCA1LjI4MzMzbDAgNDAxLjMzNDU1MWMwIDIuOTE3NDQ2IDIuMDc4MzM1IDUuMjgzMzMgNC42NDA2OTQgNS4yODMzM2w5Mi4yMjk1NjQgMGMyLjU2MzM4MiAwIDQuNjQwNjk0LTIuMzY1ODg0IDQuNjQwNjk0LTUuMjgzMzNMNzIyLjc5MTg2NyAzMTEuMzMyNzI0QzcyMi43OTE4NjcgMzA4LjQxNTI3OCA3MjAuNzE0NTU2IDMwNi4wNDkzOTUgNzE4LjE1MTE3NCAzMDYuMDQ5Mzk1eiIgcC1pZD0iMTY5MyIgZmlsbD0iIzcwNTRkZCI+PC9wYXRoPjwvc3ZnPg==)",
      "background-size": "76rpx 76rpx",
      "width": "76rpx",
      "height": "76rpx"
    },
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.nextSong
    }
  }), _vm._v(" "), _c('i', {
    staticStyle: {
      "background": "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MTUwMjY2NjgyIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0NTkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMzg0IDMyMGw1MTIgMGMzOC40IDAgNjQtMjUuNiA2NC02NCAwLTM4LjQtMjUuNi02NC02NC02NEwzODQgMTkyQzM0NS42IDE5MiAzMjAgMjE3LjYgMzIwIDI1NiAzMjAgMjk0LjQgMzQ1LjYgMzIwIDM4NCAzMjB6TTg5NiA0NDggMzg0IDQ0OEMzNDUuNiA0NDggMzIwIDQ3My42IDMyMCA1MTJjMCAzOC40IDI1LjYgNjQgNjQgNjRsNTEyIDBjMzguNCAwIDY0LTI1LjYgNjQtNjRDOTYwIDQ3My42IDkzNC40IDQ0OCA4OTYgNDQ4ek04OTYgNzA0IDM4NCA3MDRjLTM4LjQgMC02NCAyNS42LTY0IDY0IDAgMzguNCAyNS42IDY0IDY0IDY0bDUxMiAwYzM4LjQgMCA2NC0yNS42IDY0LTY0Qzk2MCA3MjkuNiA5MzQuNCA3MDQgODk2IDcwNHpNMTI4IDE5MkM4OS42IDE5MiA2NCAyMTcuNiA2NCAyNTZjMCAzOC40IDI1LjYgNjQgNjQgNjRzNjQtMjUuNiA2NC02NEMxOTIgMjE3LjYgMTY2LjQgMTkyIDEyOCAxOTJ6TTEyOCA0NDhDODkuNiA0NDggNjQgNDczLjYgNjQgNTEyYzAgMzguNCAyNS42IDY0IDY0IDY0czY0LTI1LjYgNjQtNjRDMTkyIDQ3My42IDE2Ni40IDQ0OCAxMjggNDQ4ek0xMjggNzA0Yy0zOC40IDAtNjQgMjUuNi02NCA2NCAwIDM4LjQgMjUuNiA2NCA2NCA2NHM2NC0yNS42IDY0LTY0QzE5MiA3MjkuNiAxNjYuNCA3MDQgMTI4IDcwNHoiIHAtaWQ9IjI0NjAiIGZpbGw9IiM3MDU0ZGQiPjwvcGF0aD48L3N2Zz4=)",
      "background-size": "56rpx 56rpx",
      "width": "56rpx",
      "height": "56rpx"
    },
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.playing
    }
  })], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-ef46bb40", esExports)
  }
}

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_template_compiler_index_id_data_v_ef46bb40_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(62);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(51)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ef46bb40"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_template_compiler_index_id_data_v_ef46bb40_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\music\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ef46bb40", Component.options)
  } else {
    hotAPI.reload("data-v-ef46bb40", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[21]);
//# sourceMappingURL=main.js.map