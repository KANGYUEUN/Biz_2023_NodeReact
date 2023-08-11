import { useState } from "react";
import css from "./ImageModal.module.css"; // 같은 폴더는 이름만 써주면 된다.
const ImageModalWindow = ({ modal, setModal }) => {
  const { imgSrc, imgName, modalState } = modal; // 구조분해 하기
  return (
    // modalState 값에 따라 open or close
    <div className={(modalState && css.modal_open) || css.modal_close}>
      <span
        className={css.modal_close_button}
        onClick={() => setModal({ ...modal, modalState: false })}
      >
        &times;
      </span>
      <div className={css.modal_dialog}>
        <div className={css.modal_content}>
          <div className={css.header}>
            <h1>{imgName}</h1>
          </div>
          <div className={css.body}>
            <img src={imgSrc} alt={imgName} />
          </div>
          <div className={css.footer}>CopyRight &copy; yu1128eun@kakao.com</div>
        </div>
      </div>
    </div>
  );
};
export default ImageModalWindow;
