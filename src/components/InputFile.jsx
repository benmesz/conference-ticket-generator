import styles from "./inputfield.module.css";

const InputFile = () => {
  return (
    <div>
      <h3>Upload Avatar</h3>
      <label htmlFor="input-file" id={styles.dropArea}>
        <input type="file" accept="image/*" id="input-file" hidden />
        <div id={styles.imgView}>
          <img src="/icon-upload.svg" />
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
