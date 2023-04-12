import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createServerClient } from "@supabase/auth-helpers-remix";

export const loader = async ({ request }: LoaderArgs) => {
  const response = new Response();
  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      request,
      response,
    }
  );
  const { data } = await supabase.from("PROFILE").select();
  return { data, headers: response.headers };
};
export default function Dashboard() {
  const data = useLoaderData();
  return <div>{JSON.stringify(data, null, 2)}</div>;
}
