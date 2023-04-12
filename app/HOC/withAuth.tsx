import { LoaderArgs, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { SupabaseClient, User } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import { LayoutProps } from "./withLayout";

export type AuthProps = LayoutProps & {
  args?: any;
};

// const loader = ({request}: LoaderArgs) => {
//   return { request };
// };

export default function withAuth(Component: React.ComponentType<AuthProps>) {
  return ({ supabase, signIn, signOut, signUp }: LayoutProps) => {
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);

    async function checkUser() {
      const {
        data: { session },
        
      } = await supabase.auth.getSession();
      console.log(session)
      setloading(false);
      if (!session) {
        if ((Component as any).displayName === "login_page") {
          return;
        } else {
          navigate("/entry");
        }
      } else {
        if ((Component as any).displayName === "login_page") {
          navigate("/");
        } else {
          return;
        }
      }
    }

    useEffect(() => {
      checkUser();
    }, []);

    return (
      <>
        {loading ? (
          <div>loading ...</div>
        ) : (
          <Component
            args={"session"}
            supabase={supabase}
            signUp={signUp}
            signIn={signIn}
            signOut={signOut}
          />
        )}
      </>
    );
  };
}
