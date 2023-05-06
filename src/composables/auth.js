import { useCookies } from "@vueuse/integrations/useCookies";

const TokenKey = "admin-token";
const cookie = useCookies();

export function getCookie() {
  return cookie.get(TokenKey);
}

export function setCookie(token) {
  return cookie.set(TokenKey, token);
}

export function removeToken() {
  return cookie.remove(TokenKey);
}
