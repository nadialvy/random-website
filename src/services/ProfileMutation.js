import { useQuery } from "@tanstack/react-query";

export function useGetProfile() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.REACT_APP_PUBLIC_API_URL}/profile`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const respData = await response.json();
      console.log("Server Response:", respData);

      if (!response.ok) {
        throw new Error(respData.message || "Failed to fetch profile!");
      }
      return respData.data;
    },
  });

  // debuggg
  console.log("Query Loading:", isLoading);
  console.log("Query Data:", data);
  console.log("Query Error:", error);

  return { data, isLoading, error };
}
