import BucketItem from "./BucketItem";

const BucketList = (props) => {
  const { bucketList, updateItemSelect } = props;

  const bucketItemList = bucketList.map((bucket) => {
    return (
      <BucketItem
        item={bucket}
        key={bucket.id}
        updateItemSelect={updateItemSelect}
      />
    );
  });
  return <>{bucketItemList}</>;
};

export default BucketList;
