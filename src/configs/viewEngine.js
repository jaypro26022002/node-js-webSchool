import express from 'express';

const configViewEngine = (app) => {
    app.use(express.static('./src/public'))
    app.set("view engine", "ejs");
    app.set("views", "./src/views")
}

//export truy xuất dữ liệu cho các file khác sài hàm configViewEngine
export default configViewEngine;