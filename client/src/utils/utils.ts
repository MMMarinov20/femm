export const getCookie = (name: string): string | null => {
  //get the set-cookie: token=
  const cookie = document.cookie.split("; ").find((c) => c.startsWith(name));
  if (!cookie) return null;
  return cookie.split("=")[1];
};
