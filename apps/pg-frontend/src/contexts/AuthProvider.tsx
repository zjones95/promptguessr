import React, { createContext, useEffect, useState } from "react";
import { Session, User } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes";
import useSupabase from "../hooks/useSupabase";

interface AuthContext {
  user: User | null;
  userIsLoading: boolean;
  session: Session | null;
  signInWithEmail: (email: string, password: string) => Promise<any>;
  signUpWithEmail: (email: string, password: string) => Promise<any>;
  resetPassword: (email: string) => Promise<any>;
  signOut: () => Promise<any>;
}

const DEFAULT_AUTH_CONTEXT: AuthContext = {
  user: null,
  session: null,
  userIsLoading: true,
  signInWithEmail: async () => {},
  signUpWithEmail: async () => {},
  resetPassword: async () => {},
  signOut: async () => {},
};

export const AuthContext = createContext(DEFAULT_AUTH_CONTEXT);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const supabase = useSupabase();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);

  const navigate = useNavigate();

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

  const signInWithEmail = async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  const signUpWithEmail = async (email: string, password: string) => {
    return await supabase.auth.signUp({
      email,
      password,
    });
  };

  const resetPassword = async (email: string) => {
    return await supabase.auth.resetPasswordForEmail(email);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate(ROUTES.HOME);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        userIsLoading: loading,
        signInWithEmail,
        signUpWithEmail,
        resetPassword,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
