export const LOGIN_BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg";

export const DEFAULT_PROFILE_PICTURE =
  "https://i.pinimg.com/736x/91/86/1b/91861b749841221d52122f0c2933d8a6.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer  ${import.meta.env.VITE_TMDB_API_TOKEN}`,
  },
};
