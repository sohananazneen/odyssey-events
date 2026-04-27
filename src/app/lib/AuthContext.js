"use client";
import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { auth, googleProvider } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(!auth);

  useEffect(() => {
    if (!auth) {
      console.warn(
        "Firebase auth is not initialized. Authentication features will be disabled.",
      );
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = (email, password) => {
    if (!auth) {
      console.error("Firebase auth is not initialized");
      return Promise.reject(new Error("Firebase auth is not initialized"));
    }
    return signInWithEmailAndPassword(auth, email, password);
  };
  const register = (email, password) => {
    if (!auth) {
      console.error("Firebase auth is not initialized");
      return Promise.reject(new Error("Firebase auth is not initialized"));
    }
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginWithGoogle = () => {
    if (!auth || !googleProvider) {
      console.error("Firebase auth is not initialized", {
        auth,
        googleProvider,
      });
      return Promise.reject(new Error("Firebase auth is not initialized"));
    }
    console.log("Attempting Google sign-in...");
    return signInWithPopup(auth, googleProvider).catch((error) => {
      console.error("Google sign-in error:", error.code, error.message);
      throw error;
    });
  };
  const logout = () => {
    if (!auth) {
      console.error("Firebase auth is not initialized");
      return Promise.reject(new Error("Firebase auth is not initialized"));
    }
    return signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, register, loginWithGoogle, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
