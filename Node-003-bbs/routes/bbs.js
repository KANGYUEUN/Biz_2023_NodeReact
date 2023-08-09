// import express from "export"
// const router = express.Router();
import { Router } from "express";
const router = Router();

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
router.get("/", async (req, res, next) => {
  res.json(Hello);
});

export default router;
