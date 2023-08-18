import { useState } from "react";

const BucketInput = (props) => {
  const { bucket, setBucket, bucketInput } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setBucket({ ...bucket, content: value });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const btnClickHandler = (e) => {
    bucketInput(bucket.content, selectedFile);
    setSelectedFile(null);
    setPreviewImage(null);
  };

  return (
    <div className="input">
      <input
        placeholder="BUCKET"
        value={bucket.content}
        onChange={inputChangeHandler}
      />

      <input
        type="file"
        accept="image/*"
        id="myootd_image"
        multiple="multiple"
        onChange={handleFileChange}
      />
      {previewImage && (
        <div>
          <img
            src={previewImage}
            alt="Preview"
            style={{ maxWidth: "100px", maxHeight: "100px" }}
          />
        </div>
      )}

      <button className={bucket.id ? "update" : ""} onClick={btnClickHandler}>
        {bucket.id ? "수정" : "추가"}
      </button>
    </div>
  );
};

export default BucketInput;
