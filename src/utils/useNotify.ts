import { useSnackbar } from "notistack";

export const useNotify = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const error = (message: string) => {
    enqueueSnackbar(message, { variant: "error" });
  };
  const sucess = (message: string) => {
    enqueueSnackbar(message, { variant: "success" });
  };
  const warning = (message: string) => {
    enqueueSnackbar(message, { variant: "warning" });
  };
  return {
    error,
    sucess,
    warning,
  };
};
