import pool from "../configs/connectDB"

let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');

    // trang chính bắt đầu khởi động server
    return res.render('trangchu.ejs', { dataUser: rows, test: 'abc string test' })
}

// let getHomepage = async (req, res) => {
//     try {
//         // Logic xử lý cho trang chính

//         // Render trang chính (ví dụ: index.ejs)
//         res.render('trangchu', { pageTitle: 'Trang Chủ' });
//     } catch (error) {
//         console.error("Error getting homepage:", error);
//         res.status(500).send("Internal Server Error");
//     }
// }

let getAboutpage = async (req, res) => {
    try {
        // Logic xử lý cho trang giới thiệu

        // Render trang giới thiệu (ví dụ: about.ejs)
        res.render('gioithieu', { pageTitle: 'Giới Thiệu' });
    } catch (error) {
        console.error("Error getting about page:", error);
        res.status(500).send("Internal Server Error");
    }
};
let getCoursepage = async (req, res) => {
    try {
        // Logic xử lý cho trang giới thiệu

        // Render trang giới thiệu (ví dụ: about.ejs)
        res.render('chuongtrinhhoc', { pageTitle: 'Chương Trình Học' });
    } catch (error) {
        console.error("Error getting about page:", error);
        res.status(500).send("Internal Server Error");
    }
};
let getEngpage = async (req, res) => {
    try {
        // Logic xử lý cho trang giới thiệu

        // Render trang giới thiệu (ví dụ: about.ejs)
        res.render('hoctienganh', { pageTitle: 'Tiếng anh' });
    } catch (error) {
        console.error("Error getting about page:", error);
        res.status(500).send("Internal Server Error");
    }
};

let getMusicpage = async (req, res) => {
    try {
        res.render('hocamnhac', { pageTitle: 'Âm Nhạc' });
    } catch (error) {
        console.error("Error getting about page:", error);
        res.status(500).send("Internal Server Error");
    }
};
let getKNpage = async (req, res) => {
    try {
        res.render('hockynangsong', { pageTitle: 'Kỹ Năng' });
    } catch (error) {
        console.error("Error getting about page:", error);
        res.status(500).send("Internal Server Error");
    }
};

let getAdpage = async (req, res) => {
    try {
        res.render('tuyensinh', { pageTitle: 'Tuyển Sinh' });
    } catch (error) {
        console.error("Error getting about page:", error);
        res.status(500).send("Internal Server Error");
    }
};
let getNewspage = async (req, res) => {
    try {
        res.render('tintuc', { pageTitle: 'Tin Tức' });
    } catch (error) {
        console.error("Error getting about page:", error);
        res.status(500).send("Internal Server Error");
    }
};
let getContactpage = async (req, res) => {
    try {
        res.render('lienhe', { pageTitle: 'Liên hệ' });
    } catch (error) {
        console.error("Error getting about page:", error);
        res.status(500).send("Internal Server Error");
    }
};
let getAdminpage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');

    // trang chính bắt đầu khởi động server
    return res.render('admin.ejs', { dataUser: rows, test: 'abc string test' })
}

let getDkpage = async (req, res) => {
    try {
        res.render('tuvan', { pageTitle: 'Tư Vấn' });
    } catch (error) {
        console.error("Error getting about page:", error);
        res.status(500).send("Internal Server Error");
    }
}
let getN1page = async (req, res) => {
    try {
        res.render('tin_1', { pageTitle: 'Tin 1' });
    } catch (error) {
        console.error("Error getting about page:", error);
        res.status(500).send("Internal Server Error");
    }
}
let getN2page = async (req, res) => {
    try {
        res.render('tin_2', { pageTitle: 'Tin 2' });
    } catch (error) {
        console.error("Error getting about page:", error);
        res.status(500).send("Internal Server Error");
    }
}
let getN3page = async (req, res) => {
    try {
        res.render('tin_3', { pageTitle: 'Tin 3' });
    } catch (error) {
        console.error("Error getting about page:", error);
        res.status(500).send("Internal Server Error");
    }
}
let getN4page = async (req, res) => {
    try {
        res.render('tin_4', { pageTitle: 'Tin 4' });
    } catch (error) {
        console.error("Error getting about page:", error);
        res.status(500).send("Internal Server Error");
    }
}
let getN5page = async (req, res) => {
    try {
        res.render('tin_5', { pageTitle: 'Tin 5' });
    } catch (error) {
        console.error("Error getting about page:", error);
        res.status(500).send("Internal Server Error");
    }
}
let getN6page = async (req, res) => {
    try {
        res.render('tin_6', { pageTitle: 'Tin 6' });
    } catch (error) {
        console.error("Error getting about page:", error);
        res.status(500).send("Internal Server Error");
    }
}


let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    let [user] = await pool.execute(`select * from users where id = ?`, [userId]);
    return res.send(JSON.stringify(user))
}



let createNewUser = async (req, res) => {
    let { nameParent, phone, email, nameStudent, time, course, text } = req.body;

    await pool.execute('insert into users(nameParent, phone, email, nameStudent, time, course, text ) value (?, ?, ?, ?, ?, ?, ?)',
        [nameParent, phone, email, nameStudent, time, course, text])

    // return res.send("create complete")
    return res.redirect('/')
}



let deleteUser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute('delete from users where id = ?', [userId])
    // return res.send(`hello from deleted users ${req.body.userId}`)
    return res.redirect('/')
}

let getEditPage = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute('Select * from users where id = ?', [id]);

    return res.render('update.ejs', { dataUser: user[0] }); // x <- y
    // return res.send(`hello from deleted users ${req.params.id}`)
    // return res.send(JSON.stringify(user))

}

let postUpdateUser = async (req, res) => {
    let { FirstName, LastName, email, address, id } = req.body;

    await pool.execute('update users set FirstName= ?, LastName= ?, email= ?, address= ? where id = ?',
        [FirstName, LastName, email, address, id]);
    // return res.send('hello update users')
    return res.redirect('/')
}
module.exports = {
    getHomepage, getDetailPage, createNewUser, deleteUser, getEditPage, postUpdateUser,
    getAboutpage, getCoursepage, getAdpage, getNewspage, getContactpage,
    getEngpage, getMusicpage, getKNpage,
    getAdminpage, getDkpage,
    getN1page, getN2page, getN3page, getN4page, getN5page, getN6page,

}