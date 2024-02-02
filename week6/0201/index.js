const express = require('express');
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true}))
app.use(express.json());  // json 방식

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//router
app.get('/', (req, res) => {
    res.render('index');
});
// get으로 정보 받기
app.get('/getPage', (req, res) => {
    res.render('get'); // 단순 페이지 열기
})

app.get("/resultGet", (req, res) => {
    console.log(req.query);
    const {username, gender, birthYear, birthMonth, birthDay, hooby} = req.query
     // 데이터 정보 전달받기
    res.render('result', {title: 'GET 전송', userInfo: {
        username, 
        gender, 
        birthYear, 
        birthMonth, 
        birthDay, 
        hooby, 
        // key-value 형태에서 ket값과 value의 변수가 동일할때는 하나로 합치기 가능
        color : {result: false, color: null},
        number : {result: false, number: null},
        },
    })
});

// post로 정보 받기
app.get('/postPage', (req, res) => {
    res.render('post'); // 단순 페이지 열기
})
app.post('/resultPost', (req, res) => {
    const {username, gender, birthYear, birthMonth, birthDay, hooby, color, number} = req.body

     // 데이터 정보 전달받기
    res.render('result', {title: 'POST 전송', userInfo:  {
        username, 
        gender, 
        birthYear, 
        birthMonth, 
        birthDay, 
        hooby, 
        color : {result: true, color: color },
        number : {result: true, number: number },
        },
    });
})

//use는 http전송방식을 이해하지 못함
// 같은 router(url)로 get, post를 만들수 있지만 use로는 접근이 불가
// 에를들어 get방식의 '/login'과 post방식의 '/login'은 다른 통신이지만
// use는 동일한 통신으로 인식
// use는 404페이지일때 주로 사용

app.use("*", (req, res) => {
    res.render('404');
})

//axios
app.get('/axios', (req, res) => {
    console.log('요청값', req.query);
    res.send(req.query);
});

app.get('/axios', (req, res) => {
    console.log('요청값', req.query);
    res.send(req.query);
});
app.post('/axios', (req, res) => {
    console.log('요청값', req.body);
    const { username, email } = req.body;
    const data = {
        name: `안녕하세요 ${username}님`,
        address: `주소는 ${email}입니다`,
    };
    res.send(data);
})

// 서버 실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});