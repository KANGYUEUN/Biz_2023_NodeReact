import DB from "../models/index.js";
import express from "express";

const router = express.Router();
const BBS = DB.models.tbl_bbs;

/* GET home page. */
router.get("/", async (req, res, next) => {
  BBS.findAll((data) => {
    res.json(data);
  });
  // res.render("index", { title: "callor.com Express" });
});

router.get("/bbs", async (req, res, next) => {
  const bbs = await BBS.findAll();
  res.json(bbs);
});

router.get("/insert", async (req, res) => {
  const mBBS = {
    b_title: "안녕",
    b_content: "오늘은 금요일 보충ㅅ업...?",
  };
  try {
    await BBS.create(mBBS);
    res.redirect("/bbs");
  } catch (error) {
    res.send("SQL ERROR");
  }
});

router.post("/insert", async (req, res) => {
  // body 에 담긴 데이터를 bbs에 담기
  const bbs = new BBS(req.body);
  try {
    await BBS.create(bbs);
    // await BBS.update(res.body, { where: { b_seq: req_body.b_seq } });
    res.redirect("/bbs");
  } catch (error) {
    res.send("INSERT ERROR");
  }
});

export default router;
