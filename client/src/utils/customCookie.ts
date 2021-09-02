import Cookie from "js-cookie";


export const customCookie = {
  set: (name: string, token: string, days?: number) => {
    let date = new Date();
    date.setTime(date.getTime() + (60 * 1000));
    return Cookie.set(name, token, { expires: date });
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