// import express from "export"
// const router = express.Router();
import { Router } from "express";
const router = Router();

import multer from "multer";
import path from "path";
import fs from "fs";

/**
 * < bbs API Router 설정 >
 * 보통 API 서버는 view 가 없이 JSON(또는 XML) 데이터를 Client로
 * return 하는 서버를 말한다 (Spring 에서는 Rest Server라고 칭함)
 *
 * res.send() or res.json() 함수로 마감한다.
 */

const Hello = {
  title: "안녕하세요 나 NodeJS 야 ",
  message: "Hello NodeJS BBS World",
};

// 파일을 저장할 폴더
const uploadPath = path.join("public/uploads");

// 파일을 전송하기 위한 설정값 만들기
const storageOption = {
  filename: (req, file, cb) => {
    const originName = file.originName;
    const filePrix = `${Date.now()}=${Math.round(Math.random() * 100000)}`;
    const fileName = `${filePrix}-${originName}`;
    cb(null, fileName);
  },
  destination: (req, file, cb) => {
    // 파일을 저장할 폴더가 없으면 새로 생성하라
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
};

const storage = multer.diskStorage(storageOption);
const uploadMiddleWare = multer({ storage: storage });

router.get("/", async (req, res, next) => {
  res.json(Hello);
});

router.post("/insert", uploadMiddleWare.single("b_image"), async (req, res) => {
  const body = req.body;
  // multer MiddleWare가 파일 관련 데이터를 필터링하고, 처리한 후
  // 관련 정보를 req.file 객체에 담는다.
  const file = req.files;
  console.log("body", body, file);
  res.send("OK");
});

export default router;
