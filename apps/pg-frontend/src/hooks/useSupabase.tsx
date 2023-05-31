import { createClient } from "@supabase/supabase-js";
import { useMemo } from "react";

const useSupabase = () => {
  return useMemo(() => {
    return createClient(
      import.meta.env.VITE_REACT_APP_SUPABASE_URL,
      import.meta.env.VITE_REACT_APP_SUPABASE_API_KEY
    );
  }, []);
};

export default useSupabase;
