import { create } from "zustand";
import { users } from "../api/constants";

export const useUserStore = create((set, get) => ({
  sessionId: localStorage.getItem("sessionId") || null,
  setSessionId: function (id) {
    set({
      sessionId: id,
    });
  },
  isAuthenticated: () => {
    let sessionId = get().sessionId;
    return Boolean(sessionId);
  },
  user: () => {
    let sessionId = get().sessionId;
    return users.find((user) => user.token === sessionId);
  },
}));
