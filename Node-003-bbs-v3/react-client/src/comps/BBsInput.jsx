import { useState } from "react";
import { filePreview, filesPreview } from "../modules/ImagePreview.js";
import css from "../css/BBsInput.module.css";
import { useBBsContext } from "../provider/BBsProvider.js";

const BBsInput = () => {
  /**
   * BBsProvider Store 에 보관되어있는 bbs와  setBbs() 함수를 가져와서 사용 해야 하는데
   * 그 함수를 가져오기 위해 useContext() 라는 Hook 를 사용한다
   * useContext()  함수는 어떤 스토어에서 값들을 가져오는지 명시 해 주어야 한다.
   *
   * 그런데 BBsInput 에서는 스토어의 이름, 키 등을 알길이 없다
   * 물론, 알아 낼수 있으나 너무 많은 코드가 필요하다
   * 그래서 BBsProvider 에서는 자신의 스토어 정보를 포함한 사용자 정의 useContext()를 만들어 두었다.
   */

  const { bbs, setBBs, bbsInsertCB, imgRef, imgsRef } = useBBsContext();

  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  // const imgRef = useRef(null);
  // const imgsRef = useRef(null);

  const setMainImage = (image) => {
    setImage(image);
  };

  const thumbImages = images.map((image) => {
    return (
      <img
        src={image}
        width="50px"
        alt=""
        onClick={(e) => setMainImage(image)}
      />
    );
  });

  const fileChangeHandler = async (e) => {
    const imgSrc = await filePreview(e.target.files[0]);
    // setImage(filePreview(e.target.files[0]));
    setImage(imgSrc);
  };

  const filesChangeHandler = async (e) => {
    const files = e.target.files;
    console.log(files);
    const imgSrcList = await Promise.all(filesPreview(files));
    // console.log(imgSrcList.length);
    // console.log(imgSrcList[0]);
    setImages(imgSrcList);
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setBBs({ ...bbs, [name]: value });
  };

  /**
   * < fetch 를 통해서 서버로 데이터, 이미지 전송하기 >
   * 1. formData 만들기
   * 2. formData  에 각 데이터를 append
   * 3. fetch 로 보내기
   *
   */

  const insertButtonClickHandler = async (e) => {
    bbsInsertCB();
    // // JS 에서 제공하는 Http 객체 : FormData()
    // // formData.append("bbs", bbs);
    // // formData.append("b_img", imgRef.current.files[0]);
    // const formData = new FormData();
    // const file = imgRef?.current.files[0];
    // const files = imgsRef.current.files;
    // //  formData 에 bbs(JSON 객체)를 실어서 서버로 보낼때는
    // // 객체를 직접 보낼수 없으므로
    // // 객체를  Serialize (직렬화, 문자열화)
    // const bbsStr = JSON.stringify(bbs);
    // // node의 router Upload 미들웨어에서 받을 이름
    // // 모든 파일 정보를 append()
    // // 대표이미지의 저장.
    // formData.append("b_images", file);
    // for (let file of files) {
    //   // 멀티파일들이 모두 포함되어 저장된다.
    //   formData.append("b_images", file);
    // }
    // // 직렬화 시킨 데이터 추가하기
    // formData.append("bbs", bbsStr);
    // // formData.append("b_nickname", bbs.b_nickname);
    // // formData.append("b_title", bbs.b_title);
    // // formData.append("b_content", bbs.b_content);
    // console.log(bbs, formData);
    // await bbsInsert(formData);
  };

  return (
    <section className={css.main}>
      <div className={css.input_container}>
        <div>
          <label>작성자</label>
          <input
            name="b_nickname"
            placeholder="작성"
            value={bbs.b_nickname}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <label>제목</label>
          <input
            name="b_title"
            placeholder="제목"
            value={bbs.b_title}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <label>내용</label>
          <input
            name="b_content"
            placeholder="내용"
            value={bbs.b_content}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="main_image">대표이미지</label>
          <input
            id="main_image"
            type="file"
            accept="image/*"
            onChange={fileChangeHandler}
            ref={imgRef}
          />
          <div className={css.thumb}>
            <img src={image ? image : ""} />
          </div>
        </div>

        <div>
          <label htmlFor="gallery_image">갤러리</label>
          <input
            id="gallery_image"
            type="file"
            accept="image/*"
            multiple="multiple"
            onChange={filesChangeHandler}
            ref={imgsRef}
          />
          <div className={css.thumb}>{thumbImages}</div>
        </div>
      </div>
      <div className={css.button}>
        <button onClick={insertButtonClickHandler}>저장</button>
      </div>
      <div className="view"></div>
    </section>
  );
};

export default BBsInput;
