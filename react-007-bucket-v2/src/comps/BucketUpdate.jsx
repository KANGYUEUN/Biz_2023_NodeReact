import { useLoaderData, Form, redirect, useSubmit } from "react-router-dom";
import css from "./BucketUpdate.module.scss";
import Button from "../shareComps/Button";
import { getBucket, saveBucket } from "../modules/firebaseDBProvider";
import dImage from "../assets/default.png";
import { useRef } from "react";

/**
 * 현재 Component 에서 Form 내의 버튼이 submit 을 실행되면
 * --> Form 내의 button 은 기본적으로 submit 동작을 가지고 있다
 *      Form 내의 button을 클릭하면 form 에 입력한 데이터를 서버로 전송하려는 성질이 있다.
 *
 * React 에서는 기본적으로 Server개념이 없는데, react-router  가 서버처럼 Form 에 담긴 데이터를처리하는 과정을 수행한다
 * 그 데이터 처리를 하는 함수가 `action` 함수 이다.
 *
 * 이 함수를 react 가 호출할때 2개의 매개변수 값을 전달하고
 * 그것이 request, params 이다
 *
 * request : Form  의 input 에 입력된 데이터가 담겨 전달되는 객체
 * params : 주소창에 params 변수의 값이 담겨 전달되는 객체
 */
export const updateAction = async ({ request, params }) => {
  const { id } = params;
  // 원래 DB에 저장 되어있는 데이터
  const result = await getBucket(id);

  // Form 에 담겨서 전달되는 Data 객체
  const formData = await request.formData();

  // formData 로 부터 input box 에 입력한 데이터만 별도로 추출하기
  // Object.fromEntries(formData);
  // 데이터만 JSON 타입으로 추출해 준다.
  const inputBucket = Object.fromEntries(formData);
  // DB 로 부터 select 한 bucket 에 input 으로 입력한 데이터를
  // update 하여 새로운 bucket 을 생성하기
  const newBucket = { ...result, ...inputBucket };
  await saveBucket(newBucket);
  return redirect(`/content/${id}`);
};

const BucketUpdate = ({ request, params }) => {
  const { bucket } = useLoaderData();
  const imgRef = useRef();
  const submit = useSubmit();

  const imageOnClick = () => {
    imgRef.current.click();
  };

  const onFileChange = (e, bucket) => {
    const files = e.target.files;
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = async () => {
        console.log(reader.result);
        await saveBucket({ ...bucket, img_src: reader.result });
        return submit(null);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form method="POST" className={css.bucket_form}>
      <article className={css.first}>
        <input
          type="file"
          onChange={(e) => onFileChange(e, bucket)}
          accept="image/*"
          ref={imgRef}
        />
        <div>
          <label htmlFor="">작성일자</label>
          <input type="date" name="sdate" defaultValue={bucket.sdate} />
        </div>
        <div>
          <label htmlFor="">작성시각</label>
          <input type="time" name="stime" defaultValue={bucket.stime} />
        </div>
        <div>
          <label htmlFor="">하고싶은일</label>
          <input name="bucket" vadefaultValuelue={bucket.bucket} />
        </div>
        <div className={css.btn}>
          <Button>저장</Button>
        </div>
      </article>
      <article className={css.image}>
        <img src={bucket.img_src || dImage} alt="" onClick={imageOnClick} />
      </article>
    </Form>
  );
};

export default BucketUpdate;
