import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLoginMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data) => {
      const response = await fetch(
        `${process.env.REACT_APP_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const respData = await response.json();
      if (!response.ok) {
        console.error("Server Response:", respData);
        throw new Error(respData.message || "Login failed!");
      }

      return respData;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.token);
      toast.success("Login success!");
      navigate("/");
    },
    onError: (error) => {
      console.log(error)
      toast.error(`${error}`);
    },
  });
};
