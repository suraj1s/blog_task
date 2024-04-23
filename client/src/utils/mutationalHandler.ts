import toast from "react-hot-toast";

export const mutationHandler = async (
  apiHook: any,
  dataToBeSent: any,
  onSuccess: (response?: any) => void,
  toastmessage = "",
  enableToast = true
) => {
  try {
    const response: any = await apiHook(dataToBeSent);
    if (response?.error) {
      if (response?.error?.status === "FETCH_ERROR") {
        toast.error("Something went wrong");
      }
      if (response?.error?.data?.errors[0]?.detail) {
        toast.error(`${response?.error?.data?.errors[0]?.detail}`);
      }
      return;
    } else {
      enableToast &&
        toastmessage &&
        toast.success(toastmessage);
        // toast.success(response?.data?.message ?? toastmessage);
      onSuccess(response);
      return response;
    }
  } catch (error) {}
};
