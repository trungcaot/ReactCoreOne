import { userConstants } from "../contants/userContants"
import axiosIntance from "./httpService"

export const loginService =  (loginInput) => {
  console.log('service')
  axiosIntance.post(userConstants.LOGIN_URL, loginInput)
  .then((res) => {console.log("res", res)})
  .catch((err) => console.log('err', err))
}