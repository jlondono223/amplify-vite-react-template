import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const Auth = () => (
  <Authenticator>
    {({ signOut, user }) => (
      <main>
        <h1>{user?.signInDetails?.loginId}'s todos</h1>
        <button onClick={signOut}>Sign out</button>
      </main>
    )}
  </Authenticator>
);

export default Auth;
