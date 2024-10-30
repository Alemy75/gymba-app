import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { provide, inject } from "vue";

export const SUPABASE_INJECION_KEY = Symbol("inject:supabase");

export interface ISupabaseInjection {
  supabase: SupabaseClient;
}

export const useSupabaseProvider = () => {
  const config = useRuntimeConfig();

  const supabase = createClient(
    config.public.SUPABASE_PROJECT_URL,
    config.public.SUPABASE_API_KEY
  );

  provide<ISupabaseInjection>(SUPABASE_INJECION_KEY, {
    supabase
  });
};

export const useSupabase = () => {
  const injection = inject<ISupabaseInjection>(SUPABASE_INJECION_KEY);

  if (!injection) {
    throw new Error("[supabase] No injection found");
  }

  return injection;
};
