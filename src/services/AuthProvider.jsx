"use client"
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const AuthProvider = ({children}) => {
    return (
<<<<<<< HEAD
        <SessionProvider>
        {children}
        </SessionProvider>
=======
        
            <SessionProvider>
            {children}
            </SessionProvider>
      
>>>>>>> 3f27f7beb1984dd4bfc358277d052ebf81d5aaff
    );
};

export default AuthProvider;