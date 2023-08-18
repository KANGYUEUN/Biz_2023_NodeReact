const BucketItem = (props) => {
  const { item, updateItemSelect } = props;

  const contentClickHandler = (e, id) => {
    updateItemSelect(id);
  };

  return (
    <div className="item">
      <div className="sdate">
        <div>{item.sdate}</div>
        <div>{item.dayOfWeek}</div>
        <div>{item.stime}</div>
      </div>
      <div
        onClick={(e) => contentClickHandler(e, item.id)}
        className={item.complete ? "content line" : "content"}
      >
        {item.content}
      </div>
    </div>
  );
};

export default BucketItem;
