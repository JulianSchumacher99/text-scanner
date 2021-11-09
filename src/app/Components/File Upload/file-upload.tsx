import React, { ChangeEvent, useState } from 'react';
import styles from './file-upload.module.css';

function ImageInput() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    const newImageURL = URL.createObjectURL(file);
    setImageUrl(newImageURL);
  };

  return (
    <div className={styles.container}>
      {imageUrl && <img className={styles.img} src={imageUrl} />}
      <label htmlFor="files" className={styles.btn}>
        Select Image
      </label>
      <input
        id="files"
        type="file"
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleChange}
      />
    </div>
  );
}

export default ImageInput;
