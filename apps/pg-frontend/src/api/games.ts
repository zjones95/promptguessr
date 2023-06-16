import { SupabaseClient } from "@supabase/supabase-js";

export const getGames = async (supabase: SupabaseClient) => {
  const { data } = await supabase.from("sessions").select("*");

  return data as any;
};

export const getGame = async (supabase: SupabaseClient, gameSlug: string) => {
  const { data } = await supabase
    .from("sessions")
    .select(
      "session_id, slug, host_name, messages (content, user_id, username), players (user_id, username), images (url, user_id)"
    )
    .eq("slug", gameSlug);

  return data as any;
};
