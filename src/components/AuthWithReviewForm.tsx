// src/components/AuthWithReviewForm.tsx
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import ReviewForm from './ReviewForm';

const AuthWithReviewForm: React.FC = () => (
  <Authenticator>
    {({ signOut, user }) => (
      <main>
        {user ? (
          <>
            <h1>Welcome, {user.username}</h1>
            <ReviewForm />
            <button onClick={signOut}>Sign out</button>
          </>
        ) : (
          <p>Please sign in to leave a review.</p>
        )}
      </main>
    )}
  </Authenticator>
);

export default AuthWithReviewForm;
