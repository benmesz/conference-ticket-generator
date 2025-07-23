import styles from "./inputfield.module.css";
import { useState } from "react";

const InputFile = () => {
  const [previewUrl, setPreviewUrl] = useState("/icon-upload.svg");
  const [hasUserUploaded, setHasUserUploaded] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    const imgLink = URL.createObjectURL(file);
    setPreviewUrl(imgLink);
    setHasUserUploaded(true);
  };

  const handleRemoveImage = () => {
    setPreviewUrl("/icon-upload.svg");
    setHasUserUploaded(false);
    document.getElementById("input-file").value = null;
  };

  return (
    <div>
      <h3>Upload Avatar</h3>
      <fieldset htmlFor="input-file" id={styles.dropArea} tabIndex="0">
        <input
          type="file"
          accept="image/*"
          id="input-file"
          onChange={handleFileChange}
        />
        <div id={hasUserUploaded ? styles.imgView : styles.placeholderImg}>
          <img src={previewUrl} />
        </div>
        {!hasUserUploaded ? (
          <p>Drag and drop or click here to upload image</p>
        ) : (
          <div class={styles.buttonRow}>
            <button
              className={styles.secondaryButton}
              type="button"
              onClick={handleRemoveImage}
            >
              Remove image
            </button>
            <button className={styles.secondaryButton} type="button">
              Change image
            </button>
          </div>
        )}
      </fieldset>
      <p className={styles.subtitle}>
        <img
          src="./public/icon-info.svg"
          alt="Info icon"
          className={styles.infoIcon}
        />
        Upload your photo (JPG or PNG, max size: 500KB).
      </p>
    </div>
  );
};

export default InputFile;
