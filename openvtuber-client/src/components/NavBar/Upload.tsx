import React, { FunctionComponent, ChangeEvent } from 'react';

type UploadProps = {
  type: string;
  accept: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className: string;
};
const Upload: FunctionComponent<UploadProps> = ({
  type,
  accept,
  onChange,
  className,
}: UploadProps) => {
  return (
    <>
      <input
        className={className}
        type={type}
        accept={accept}
        onChange={onChange}
      />
    </>
  );
};

export default Upload;
