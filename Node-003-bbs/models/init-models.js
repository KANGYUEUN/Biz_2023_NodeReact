import _tbl_bbs from "./tbl_bbs.js";
import _tbl_files from "./tbl_files.js";

const initModels = (sequelize) => {
  // model 이름 설정하기
  const tbl_bbs = _tbl_bbs(sequelize);
  const tbl_files = _tbl_files(sequelize);

  /**
   * tbl_bbs 와  tbl_files 테이블은 1:N 의 관계가 설정 되어있다.
   * sequelize 에서 1:N Association 관계가 설정 되어 있을때
   * 그 설정을 model 에 미리 정해 주어 SELECT JOIN 이 매우 쉽게 구현 될 수 있다.
   */

  tbl_bbs.hasMany(tbl_files, { as: "F_BBS", foreignkey: "f_bseq" });
  tbl_files.belongTo(tbl_bbs, { as: "F_FILES", foreignkey: "f_bseq" });
  // 외부에서 사용가능 하도록 설정하기
  return {
    tbl_bbs,
    tbl_files,
  };
};

// 외부에서 model을 사용하도록 export
export default initModels;
