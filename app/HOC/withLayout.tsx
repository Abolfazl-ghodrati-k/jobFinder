import React, { useState, useEffect } from "react";
import {
  useNavigate,
  useOutletContext,
  useRevalidator,
} from "@remix-run/react";
import { Box, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import { createBrowserClient } from "@supabase/auth-helpers-remix";
import NavBar from "../components/NavBar";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    margin: "0 auto",
  },
}));

export type LayoutProps = {
  supabase: any;
  signUp: (val: Values) => Promise<string | undefined>;
  signIn: (val: Values) => Promise<string | undefined>;
  signOut: (val: Values) => void;
};

type Values = {
  fullName?: string;
  password: string;
  email: string;
};

const withLayout = (WrappedComponent: React.ComponentType<LayoutProps>) => {
  return function LayoutWrapper() {
    const theme = useTheme();
    const classes = useStyles(theme);
    const navigate = useNavigate();

    const [env] = useOutletContext() as any;
    const [supabase] = useState(() =>
      createBrowserClient(env.SUPABASE_URL!, env.SUPABASE_ANON_KEY!)
    );
    const signUp = async (values: Values) => {
      const {
        data: { user },
        error,
      } = await supabase.auth.signUp({
        email: values?.email,
        password: values?.password,
      });
      if (error) {
        console.error("Error signing up:", error?.message);
        return error?.message;
      }
      if (user) {
        document.cookie = `fullName=${values?.fullName}`;
        navigate("/email-confirmation");
        return
      }

      // const { data: profileData, error: profileError } = await supabase
      //   .from("PROFILE")
      //   .insert({ fullName: values?.fullName, id: user?.id })
      //   .single();

      // if (profileError) {
      //   console.error("Error creating profile:", profileError.message);
      //   return;
      // }

      // console.log(profileData)
    };

    const signIn = async (values: Values) => {
      const {
        data: { user },
        error,
      } = await supabase.auth.signInWithPassword({
        email: values?.email,
        password: values?.password,
      });
      if(error){
        return error?.message
      }
    };
    const signOut = (values: Values) => {
      supabase.auth.signOut();
    };
    const revalidator = useRevalidator();
    useEffect(() => {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange(() => {
        revalidator.revalidate();
      });

      return () => {
        subscription.unsubscribe();
      };
    }, [supabase]);

    useEffect(() => {
      recieveUser();
    });

    async function recieveUser() {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) {
        //Todo: assign the user
      } else {
        //Todo: set the user to guest
      }
    }

    return (
      <Box className={classes.root}>
        <NavBar />
        <WrappedComponent
          supabase={supabase}
          signUp={signUp}
          signIn={signIn}
          signOut={signOut}
        />
      </Box>
    );
  };
};

export default withLayout;
