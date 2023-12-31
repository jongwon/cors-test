import FileUploadComponent from "@/components/FileUploadComponent";

const URL = process.env.API_SERVER || "http://localhost:8080";

const UploadPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <FileUploadComponent apiServerUrl={URL} />
    </div>
  );
};

export default UploadPage;
