import uuid from "react-uuid";

const sampleBucketList = ["개발자 되기", "react 정복", "Spring 정복"];

export const bucketLoader = () => {
  /**
   * bucket 을 key 로 하고 sampleBucketList 를 데이터로 담아서
   * JSON type 데이터 return 하기
   */
  return { bucketList: sampleBucketList };
};

export const bucketAction = () => {
  console.log("action");
  return sampleBucketList.push(uuid());
};
