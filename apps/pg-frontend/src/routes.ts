const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  LOBBIES: "/lobbies",
  SETTINGS: "/settings",
  FORGOT_PASSWORD: "/forgot-password",
  lobbyById: (id: string) => `/lobbies/${id}`,
};

export default ROUTES;
