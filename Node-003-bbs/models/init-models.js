import _tbl_bbs from "./tbl_bbs.js";
import _tbl_files from "./tbl_files.js";

const initModels = (sequelize) => {
  // model 이름 설정하기
  const tbl_bbs = _tbl_bbs(sequelize);
  const tbl_files = _tbl_files(sequelize);

  // 외부에서 사용가능 하도록 설정하기
  return {
    tbl_bbs,
    tbl_files,
  };
};

// 외부에서 model을 사용하도록 export
export default initModels;
