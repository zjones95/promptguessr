const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  LOBBIES: "/lobbies",
  SETTINGS: "/settings",
  FORGOT_PASSWORD: "/forgot-password",
  lobbyBySlug: (slug: string) => `/lobby/${slug}`,
};

export default ROUTES;
