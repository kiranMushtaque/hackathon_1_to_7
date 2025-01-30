const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="text-red-500 bg-red-100 p-4 rounded-md my-4">{message}</div>
  );
};

export default ErrorMessage;
