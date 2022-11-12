import { cloudinary } from "@app/core/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useRef, FC } from "react";
import { Button } from "react-admin";

type CloudinaryInputUIProps = {
  label: string;
  value?: string;
  disabled: boolean;
  onImageSelected: (image: File) => void;
};

export const CloudinaryInputUI: FC<CloudinaryInputUIProps> = ({
  label,
  disabled,
  value,
  onImageSelected,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onFileInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files) {
      return;
    }

    const [file] = Array.from(e.target.files);

    onImageSelected(file);
  };

  const onUploadClick = () => {
    inputRef.current?.click();
  };

  const image = cloudinary.image(value);
  image
    .resize(
      thumbnail()
        .width(384)
        .height(240)
    )
    .roundCorners(byRadius(20));
  //image.addTransformation('w_384, h_240, dpr_2.0')

  return (
    <div style={{ marginBottom: 20 }}>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={onFileInputChange}
      />
      <Card variant="outlined">
        <CardHeader title={`${label} uploads`} />
        <CardContent>
          {value ? (
            <AdvancedImage cldImg={image} />
          ) : (
            // <img width={384} height={240} src={value} alt={label} style={{ objectPosition: 'center', objectFit:'cover'}}/>
            <Skeleton variant="rectangular" width={384} height={247} />
          )}
        </CardContent>
        <CardActions>
          <Button
            onClick={onUploadClick}
            variant="contained"
            disabled={disabled}
          >
            <Typography>Завантажити</Typography>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
