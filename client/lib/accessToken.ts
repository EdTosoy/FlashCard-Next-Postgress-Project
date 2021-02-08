let accessToken: string;

export const setAccessToken = (token: string) => {
  accessToken = token;
};

export const getAccessToken = () => {
  console.log(accessToken)
  return accessToken;
};
