import { useEffect, useState } from "react";
import { initData } from "../data/initData";
import uuid from "react-uuid";
import BucketList from "./BucketList";
import BucketInput from "./BucketInput";

const BucketMain = () => {
  const [bucket, setBucket] = useState(() => initData());
  const [bucketList, setBucketList] = useState(() => {
    return localStorage.getItem("BUCKETLIST")
      ? JSON.parse(localStorage.getItem("BUCKETLIST"))
      : [];
  });

  useEffect(() => {
    const resetBucket = () => {
      console.log("Use Effect");
      localStorage.setItem("BUCKETLIST", JSON.stringify(bucketList));
    };
    resetBucket();
  }, [bucketList]);

  const bucketListAdd = (content) => {
    const newBucket = { ...bucket, id: uuid(), content: content };
    setBucketList([...bucketList, newBucket]);
  };

  const itemComplete = (id) => {
    const compBucketList = bucketList.map((item) => {
      if (item.id === id) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setBucketList([...compBucketList]);
  };

  const updateItemSelect = (id) => {
    const selectBucketList = bucketList.filter((item) => {
      return item.id === id;
    });
    setBucket({ ...selectBucketList[0] });
  };

  const bucketInput = (content) => {
    if (!bucket.id) {
      bucketListAdd(content);
    } else {
      const updateBucketList = bucketList.map((item) => {
        if (item.id === bucket.id) {
          return { ...item, content: content };
        }
        return item;
      });
      setBucketList(updateBucketList);
    }
  };
  return (
    <div className="bucket">
      <header className="bucket-header">
        <h2>오늘은 내생의 가장 젊은날</h2>
      </header>
      <BucketInput
        bucket={bucket}
        setBucket={setBucket}
        bucketInput={bucketInput}
      />
      <BucketList
        bucketList={bucketList}
        itemComplete={itemComplete}
        updateItemSelect={updateItemSelect}
      />
    </div>
  );
};

export default BucketMain;
