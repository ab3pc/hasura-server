import { useCloudinarySignatureQuery } from "@app/core/types";
import React, { FC } from "react";
import { InputProps, useInput, useNotify } from "react-admin";
import { CloudinaryInputUI } from "../cloudinary-input-ui/cloudinary-input-ui.component";
import axios, {AxiosError} from 'axios';
import { useController } from 'react-hook-form';

import { CloudinaryUploadDto } from "./cloudinary-upload.dto";

export const CloudinaryInput: FC<InputProps> = ({ label, source }) => {
  const computedLabel = String(label) ?? source;
  const { data: cloudSignature, loading } = useCloudinarySignatureQuery({
    fetchPolicy: 'network-only'
  });

  const notify = useNotify();

  //const { field: {onChange, value} } = useController({name: source});
  const { field: {onChange, value} } = useInput({ label, source });

  const onImageSelected = async (image: File) => {
    if(!cloudSignature?.cloudinarySignature) {
      return
    }
    const {cloudName, apiKey, publicId, signature, timestamp} = cloudSignature.cloudinarySignature;

    const url =`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;
    const formData = new FormData();
    formData.append('file', image);
    formData.append('api_key', apiKey);
    formData.append('public_id', publicId);
    formData.append('signature', signature);
    formData.append('timestamp', String(timestamp));
    formData.append('folder', 'menu');

    let data: CloudinaryUploadDto;
   try {
    const response = await axios.post<CloudinaryUploadDto>(url, formData);
    data = response.data;
    onChange(data.public_id);

   } catch (error) {
      notify((error as AxiosError).message)
   }

  }

  return (
    <CloudinaryInputUI
      label={computedLabel}
      value={value}
      disabled={loading}
      onImageSelected={onImageSelected}
    />
  );
};
