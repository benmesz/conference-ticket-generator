import styles from "./inputfield.module.css";
import { useState } from "react";

const InputFile = () => {
  const [previewUrl, setPreviewUrl] = useState("/icon-upload.svg");

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    const imgLink = URL.createObjectURL(file);
    // let imgLink = URL.createObjectURL(e.dataTransfer.files[0]);
    setPreviewUrl(imgLink);
    console.log(imgLink);
  };

  return (
    <div>
      <h3>Upload Avatar</h3>
      <label htmlFor="input-file" id={styles.dropArea} tabIndex="0">
        <input
          type="file"
          accept="image/*"
          id="input-file"
          hidden
          onChange={handleFileChange}
        />
        <div id={styles.imgView}>
          <img src={previewUrl} />
        </div>
        <p>Drag and drop or click here to upload image</p>
      </label>
      <p className={styles.subtitle}>
        Upload your photo (JPG or PNG, max size: 500KB).
      </p>
    </div>
  );
};

export default InputFile;
