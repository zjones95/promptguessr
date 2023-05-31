import React, { createContext, useContext, useEffect, useState } from "react";
import { Session, User, createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes";

interface AuthContext {
  user: User | null;
  userIsLoading: boolean;
  session: Session | null;
  signInWithEmail: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<any>;
}

const DEFAULT_AUTH_CONTEXT: AuthContext = {
  user: null,
  session: null,
  userIsLoading: true,
  signInWithEmail: async () => {},
  signOut: async () => {},
};

const AuthContext = createContext(DEFAULT_AUTH_CONTEXT);

const supabase = createClient(
  import.meta.env.VITE_REACT_APP_SUPABASE_URL,
  import.meta.env.VITE_REACT_APP_SUPABASE_API_KEY
);

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);

  const navigate = useNavigate();

  const signInWithEmail = async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate(ROUTES.HOME);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        userIsLoading: loading,
        signInWithEmail,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
