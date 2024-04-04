import express from 'express'
import homeController from '../controller/homeController';
let router = express.Router();


const initWebRoute = (app) => {
    // Định tuyến cho trang chủ 
    router.get('/', homeController.getHomepage);
    // Định tuyến cho trang giới thiệu
    router.get('/gioithieu', homeController.getAboutpage);
    // Định tuyến cho trang Chương trình học
    router.get('/chuongtrinhhoc', homeController.getCoursepage);
    // Định tuyến cho trang Tiếng anh
    router.get('/hoctienganh', homeController.getEngpage);
    // Định tuyến cho trang âm nhạc
    router.get('/hocamnhac', homeController.getMusicpage);
    // Định tuyến cho trang Kỹ năng
    router.get('/hockynangsong', homeController.getKNpage);
    // Định tuyến cho trang Tuyển sinh
    router.get('/tuyensinh', homeController.getAdpage);
    // Định tuyến cho trang Tin tức
    router.get('/tintuc', homeController.getNewspage);
    // Định tuyến cho trang Liên Hệ
    router.get('/lienhe', homeController.getContactpage);
    // Định tuyến cho trang tư vấn
    router.get('/tuvan', homeController.getDkpage);
    // Định tuyến cho trang tin 1
    router.get('/tin_1', homeController.getN1page);
    // Định tuyến cho trang tin 2
    router.get('/tin_2', homeController.getN2page);
    // Định tuyến cho trang tin 3
    router.get('/tin_3', homeController.getN3page);
    // Định tuyến cho trang tin 4
    router.get('/tin_4', homeController.getN4page);
    // Định tuyến cho trang tin 5
    router.get('/tin_5', homeController.getN5page);
    // Định tuyến cho trang tin 6
    router.get('/tin_6', homeController.getN6page);
    // Định tuyến cho trang admin
    router.get('/admin', homeController.getAdminpage);

    // const initWebRoute = (app) => {
    //     router.get('/', homeController.getHomepage);
    router.get('/detail/user/:id', homeController.getDetailPage);
    router.post('/delete-user', homeController.deleteUser)
    router.post('/create-new-user', homeController.createNewUser)
    router.get('/edit-user/:id', homeController.getEditPage)
    router.post('/update-user', homeController.postUpdateUser)

    router.get('/ab', (req, res) => {
        res.send('xin chao ')
    })
    // ('/') có thể đc thêm để khi vào trang có thể đặt theo tên VD: '/tv' thì ghi lên trang là '/tv/ab' để vào trang toàn tv
    return app.use('/', router)
}

// module.exports = initWebRoute;
export default initWebRoute;