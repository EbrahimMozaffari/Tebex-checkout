import axiosInstance from "@/plugins/axios";

export function appService() {

  const fetchBasket = async() => {
    return await axiosInstance.get(
      `api/basket`
    );
  };
  const addCoupon = async (data) => {
    //let url = `/api/basket/${data.id}/coupon`;
    return await axiosInstance.post(`/api/basket/${data.id}/coupon`,{code:data.couponCode});
  };
  const checkout = async (data) => {
    console.log(data)
    return await axiosInstance.post(`/api/basket/${data.id}/checkout`,data.body);
  };
  return {
    fetchBasket,
    addCoupon,
    checkout,
  };
}
