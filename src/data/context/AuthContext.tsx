import route from "next/router";
import { createContext, useState } from "react";
import firebase from "../../firebase/config";
import IUser from "../../model/User";

interface AuthContextProps {
  user?: IUser | null;
  loginGoogle?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function userNormalizer(userFirebase: firebase.User): Promise<IUser> {
  const token = await userFirebase.getIdToken();
  return {
    uid: userFirebase.uid,
    name: userFirebase.displayName,
    email: userFirebase.email,
    token,
    provedor: userFirebase.providerData[0]?.providerId,
    imgmUrl: userFirebase.photoURL,
  };
}

export function AuthProvider(props: any) {
  const [user, setUser] = useState<IUser | null>(null);

  async function loginGoogle() {
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());

    if (response.user?.email) {
      const user = await userNormalizer(response.user!);
      setUser(user);
      route.push("/");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loginGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
