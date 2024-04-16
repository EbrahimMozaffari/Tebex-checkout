import axiosInstance from "@/plugins/axios";

export function appService() {

  const fetchBasket = async() => {
    return await axiosInstance.get(
      `api/basket`
    );
  };

  return {
    fetchBasket,

  };
}
