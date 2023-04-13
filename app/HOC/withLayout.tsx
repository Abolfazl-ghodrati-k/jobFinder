import React, { useState, useEffect } from "react";
import {
  useNavigate,
  useOutletContext,
  useRevalidator
} from "@remix-run/react";
import { Box, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import { User, createBrowserClient } from "@supabase/auth-helpers-remix";
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
  signOut: () => void;
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
    const [User, setUser] = useState<User | null>(null);

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
        return;
      }
    };

    const signIn = async (values: Values) => {
      const {
        data: { user },
        error,
      } = await supabase.auth.signInWithPassword({
        email: values?.email,
        password: values?.password,
      });
      if (error) {
        return error?.message;
      }
    };

    const signOut = () => {
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
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
      } else {
        //Todo: set the user to guest
      }
    }

    return (
      <Box className={classes.root}>
        <NavBar user={User} />
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
