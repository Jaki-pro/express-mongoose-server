import { TErrorSources, TGenericErrorResponse } from "../interface/error";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const errorMessage = err.errmsg;
  const regex = /"(.*?)"/;
  const match = errorMessage.match(regex);
  let extractedText;
  if (match && match[1]) {
    extractedText = match[1];
  }
  const errorSources: TErrorSources = [
    {
      path: "",
      message: `${extractedText} is already exist`,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: "Duplicate Error",
    errorSources,
  };
};
export default handleDuplicateError;
