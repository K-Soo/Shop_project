import Cookie from "js-cookie";


export const customCookie = {
  get: (name: string) => {
    return Cookie.get(name);
  },
  set: (name: string, token: string, days?: number) => {
    let time = new Date(new Date().getTime() + 60 * 60 * 1000);
    return Cookie.set(name, token, { expires: time});
    // const prevCookie = document.cookie ?? "path=/";
    // const ck = cookie.parse(prevCookie);
    // ck[name] = value;
    // const expires = new Date(Date.now() + (days * 24 * 60 * 60 * 1000)).toUTCString();
    // document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  },
  remove: (name: string) => {
    return Cookie.remove(name);
  }
}