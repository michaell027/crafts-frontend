type LoggedUserInfo = {
  publicId: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  role: string;
};

export type LoggedInUser = {
  user: LoggedUserInfo;
  token: string;
  refreshToken: string;
};
