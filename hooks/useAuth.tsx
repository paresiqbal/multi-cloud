import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../lib/firebase";
import { useAuthContext } from "../contexts/AuthContext";

export function useAuth() {
  const { user } = useAuthContext();

  const setSessionCookie = () => {
    document.cookie = `session=true; path=/; max-age=${
      60 * 60 * 24 * 7
    }; SameSite=Strict`;
  };

  const register = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSessionCookie();
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSessionCookie();
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setSessionCookie();
    } catch (error) {
      console.error("Google login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      document.cookie =
        "session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  };

  return { user, register, login, loginWithGoogle, logout };
}
