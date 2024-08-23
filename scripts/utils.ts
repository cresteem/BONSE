"use client";
export function copy(value: string): Promise<void> {
  return new Promise((resolve, reject) => {
    navigator.clipboard.writeText(value).then(resolve).catch(reject);
  });
}

export function inputValidate(value: string) {
  const minimumThreshold = 100;
  return value.length > minimumThreshold;
}

export interface UserMeta {
  name: string;
  email: string;
  profilePicture: string;
  uid: string;
}

const userMetaLocalKey = "bonse-user";

export function setUserMeta(meta: UserMeta) {
  localStorage.setItem(userMetaLocalKey, JSON.stringify(meta));
}

export function getUserMeta(): UserMeta {
  const userMetaRaw: string = localStorage.getItem(userMetaLocalKey) ?? "{}";
  const userMeta: UserMeta = JSON.parse(userMetaRaw);
  return userMeta;
}
