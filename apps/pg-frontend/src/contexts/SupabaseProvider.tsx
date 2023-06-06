import React from "react";

import { SupabaseClient, createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_REACT_APP_SUPABASE_URL,
  import.meta.env.VITE_REACT_APP_SUPABASE_API_KEY
);

export const SupabaseContext = React.createContext<SupabaseClient>(supabase);

const SupabaseProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  );
};

export default SupabaseProvider;
