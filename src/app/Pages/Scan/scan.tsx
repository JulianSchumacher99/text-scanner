import React, { useState } from 'react';
import ImageInput from '../../Components/File Upload/file-upload';
import styles from './scan.module.css';
import Tesseract from 'tesseract.js';
import AddDocumentForm from '../../Components/AddDocumentForm/AddDocumentForm';

function Scan() {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [scannedText, setScannedText] = useState<string>('');
  const [progress, setProgress] = useState<number | string>();
  const [scanActive, setScanActive] = useState<boolean>(false);

  let content;

  if (imageURL === null) {
    content = (
      <>
        <img
          className={styles.logo}
          src="src/app/assets/icons8-scanner-60.png"
        />
        <h1 className={styles.headline}>Text Scanner</h1>
        <button className="btn">Take Image</button>
        <ImageInput onUpload={setImageURL} />
        <button className="btn_inactiv">Library</button>
      </>
    );
  } else {
    content = (
      <>
        <h3 className={styles.subtitle}>Your Document:</h3>
        {scannedText ? (
          <div className={styles.scannedText}>
            <p>{scannedText}</p>
          </div>
        ) : (
          imageURL && <img className={styles.img} src={imageURL} />
        )}
        <AddDocumentForm text={scannedText} />
        <button
          className="btn"
          onClick={() => {
            if (imageURL) {
              setScanActive(true);
              Tesseract.recognize(imageURL, 'eng', {
                logger: (message) => {
                  const progressPercent = message.progress.toFixed(2) * 100;

                  setProgress(progressPercent);
                },
              }).then((result) => {
                const text = result.data.text;
                setScannedText(text);
              });
            }
          }}
        >
          {scanActive ? (
            <div className={styles.loading}>
              Loading...{progress}%{' '}
              <progress
                className={styles.progress}
                value={progress}
                max="100"
              />
            </div>
          ) : (
            <span>Save and Scan</span>
          )}
        </button>
        <a className={styles.link} href="#">
          Back
        </a>
      </>
    );
  }

  return <div className={styles.container}>{content}</div>;
}

export default Scan;
