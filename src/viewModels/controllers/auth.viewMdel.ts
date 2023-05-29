interface IUpdateUserRequest {
  name: string;
  email: string;
  password: string;
  nickname?: string;
  bio?: string;
  salt?: string;
}

export { IUpdateUserRequest };
