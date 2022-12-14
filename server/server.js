const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");

const port = 8080;

app.use(cors());

app.get("/submit", function (요청, 응답) {
  응답.send(console.log("저장됨"));
});

app.get("/read", function (요청, 응답) {
  fs.readFile("./data/listdata.json", (err, data) => {
    if (err) throw err;
    const JSONdata = JSON.parse(data);
    응답.send(JSONdata);
  });
});

app.post("/create", function (요청, 응답) {
  const 데이터 = 요청.query;
  const id값 = Number(요청.query.id);
  const obj = {
    id: id값
  }
  const newObj = {
    ...데이터, ...obj
  }
  fs.readFile("./data/listdata.json", (err, 값) => {
    if (err) throw err;
    const JSONdata = JSON.parse(값);
    let 새데이터 = [...JSONdata,newObj]
    응답.send(newObj);
    fs.writeFileSync('./data/listdata.json', JSON.stringify(새데이터));
  });
});

app.delete("/delete", function(요청, 응답){
  fs.readFile("./data/listdata.json", (err, 값) => {
    if (err) throw err;
    const 데이터 = 요청.query;
    const JSONdata = JSON.parse(값);
    const 필터값 = JSONdata.filter(data => data.id !== Number(데이터.id))
    응답.send(데이터.id+'값 삭제');
    fs.writeFileSync('./data/listdata.json', JSON.stringify(필터값));
  });
});

app.listen(port, function () {
  console.log(`포트 ${port}에서 서버가 열림`);
});
