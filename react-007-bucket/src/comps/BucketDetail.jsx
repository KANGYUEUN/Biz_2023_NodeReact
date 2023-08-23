import { Form, useLoaderData, redirect } from "react-router-dom";
import dImage from "../assets/default.png";
import Button from "../shareComps/Button";
import css from "./BucketDetail.module.scss";
import { deleteBucket, getBucket, completeBucket } from "../modules/bucketFech";
import { useState } from "react";

export const detailLoader = async ({ params }) => {
  // const id = params.id
  const { id } = params;
  const bucket = await getBucket(id);
  return { bucket };
};

export const completeAction = async ({ params }) => {
  if (window.confirm("BUCKET 을 완료 하셨습니까?")) {
    // complete
    await completeBucket(params.id);
    return redirect("/");
  }
  return redirect(`/content/${params.id}`);
};

export const deleteAction = async ({ params }) => {
  if (window.confirm("정말 삭제 하시겠습니까?")) {
    // Delete
    await deleteBucket(params.id);
    return redirect("/");
  }
  return redirect(`/content/${params.id}`);
};

const BucketDetail = () => {
  const { bucket } = useLoaderData();
  const [completed, setCompleted] = useState(bucket.completed || false);
  const handleComplete = async () => {
    if (window.confirm("BUCKET을 완료 하셨습니까?")) {
      await completeBucket(bucket.id);
      setCompleted(true);
      return redirect("/");
    }
  };

  return (
    <article className={css.buck_detail}>
      <div className={css.first}>
        <img
          src={bucket?.img_src || dImage}
          alt={bucket?.bucket}
          width="100px"
        />
      </div>
      <div className={css.last}>
        <h1>{bucket.bucket || "None"}</h1>
        <div>
          <Form action="edit">
            <Button>수정</Button>
          </Form>
          <Form action="complete" method="POST" onSubmit={handleComplete}>
            <Button bgColor="green">{completed ? "완료됨" : "완료"}</Button>
          </Form>
          <Form action="delete" method="POST">
            <Button bgColor="red">삭제</Button>
          </Form>
        </div>
      </div>
    </article>
  );
};

export default BucketDetail;
