"use client";

import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React from "react";
import { useSession } from "next-auth/react";

interface Props {
  apiServerUrl: string;
}

const FileUploadComponent = ({ apiServerUrl }: Props) => {
  const { data: session } = useSession();

  console.log(session);

  const props = {
    name: "file",
    multiple: true,
    action: `${apiServerUrl}/api/file/upload/step1`, // Spring 서버의 업로드 URL
    headers: {
      authorization: "Bearer " + session?.accessToken,
    },

    onChange(info: any) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        console.log(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        console.log(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="m-4 text-black">
        <Upload {...props} className="w-full justify-center items-center">
          <Button icon={<UploadOutlined />} className="text-black">
            파일을 업로드 하세요
          </Button>
        </Upload>
      </div>
    </div>
  );
};

export default FileUploadComponent;
