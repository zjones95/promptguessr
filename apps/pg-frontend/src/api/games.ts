import { SupabaseClient } from "@supabase/supabase-js";

export const getGames = async (supabase: SupabaseClient) => {
  const { data } = await supabase.from("sessions").select("*");

  return data as any;
};

export const getGame = async (supabase: SupabaseClient, gameSlug: string) => {
  const { data } = await supabase
    .from("sessions")
    .select("*")
    .eq("slug", gameSlug);

  return data as any;
};
