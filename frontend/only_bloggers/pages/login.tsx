import React from 'react'
import { useSession,signIn, signOut } from 'next-auth/react';

const login = () => {
    const [session, loading]:any = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!session) {
      return <>
      <p>Please sign in</p><button onClick={()=>signIn}>SignIn</button></>;
  }

  const userName = session.user.name; // Access the user's name

  return (
    <div>
          <h1>Welcome, {userName}!</h1>
          <button onClick={()=>signOut}>SignOut</button>
      {/* Render your content */}
    </div>
  );
}

export default login