"use client";
import { ChangeEvent, useRef, useState } from "react";
import styles from "./ImagePicker.module.css";
import Image from "next/image";

type ImagePickerProps = {
  label: string;
  name: string;
};

export default function ImagePicker({ label, name }: ImagePickerProps) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    //onLoad will be triggered as soon as readAsDataURL has ejecuted
    fileReader.onload = () => {
      const url = fileReader.result as string; // TODO improve type checking
      setPickedImage(url);
      // TODO handle invalid result cases?
    };
    fileReader.readAsDataURL(file);
  }

  function handleButtonClick() {
    imageInputRef?.current?.click();
  }
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage ? (
            <p>No image picked yet</p>
          ) : (
            <Image src={pickedImage} alt="Image selected by user" fill />
          )}
        </div>
        {/* hidden native file input */}
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          required
          onChange={handleImageChange}
        />
        {/* custom-styled button substituting file input */}
        <button
          className={styles.button}
          type="button"
          onClick={handleButtonClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
