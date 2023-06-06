import { useContext } from "react";
import { SupabaseContext } from "../contexts/SupabaseProvider";

const useSupabase = () => useContext(SupabaseContext);

export default useSupabase;
