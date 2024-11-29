import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
console.log("Imported Api:" + import.meta.env.VITE_API_KEY, "Api:" + API_KEY);

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuth] = useState({});
  const [selectedRole, setSelectedRole] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://w.soundcloud.com/player/api.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const widgetIframe = document.getElementById("soundcloud-widget");
      if (widgetIframe) {
        const widget = window.SC.Widget(widgetIframe);

        widget.bind(window.SC.Widget.Events.READY, () => {
          widget.play();
        });

        widget.bind(window.SC.Widget.Events.PLAY, () => {
          console.log("Track is playing!");
        });
      } else {
        console.error("SoundCloud widget iframe not found!");
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const saveCredentialsToSession = (data) => {
    sessionStorage.setItem("authCredentials", JSON.stringify(data));
  };

  const loadCredentialsFromSession = () => {
    const storedCredentials = sessionStorage.getItem("authCredentials");
    return storedCredentials ? JSON.parse(storedCredentials) : null;
  };

  useEffect(() => {
    const storedCredentials = loadCredentialsFromSession();
    if (storedCredentials) {
      loginUser(storedCredentials).catch((err) => {
        console.error("Auto-login failed:", err.message);
      });
    }
  }, []);

  const loginUser = async (data) => {
    try {
      const response = await axios.post(
        "https://v2.api.noroff.dev/auth/login?_holidaze=true",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const userData = response.data.data;
      setAuth(userData);

      saveCredentialsToSession(data);

      return response.data;
    } catch (err) {
      throw new Error(
        err.response?.data?.errors?.[0]?.message || "Something went wrong"
      );
    }
  };

  const registerUser = async (data) => {
    try {
      const requestData = {
        ...data,
        venueManager: selectedRole === "VENUE MANAGER",
      };
      const response = await axios.post(
        "https://v2.api.noroff.dev/auth/register",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (err) {
      throw new Error(
        err.response?.data?.errors?.[0]?.message || "Something went wrong"
      );
    }
  };

  const logout = () => {
    setAuth({});
    sessionStorage.removeItem("authCredentials");
  };

  const setAvatar = async (link) => {
    try {
      const requestData = {
        avatar: {
          url: link,
          alt: "UserAvatar",
        },
      };
      const response = await axios.put(
        `https://v2.api.noroff.dev/holidaze/profiles/${authState.name}`,
        requestData,
        {
          headers: {
            Authorization: `Bearer ${authState.accessToken}`,
            "Content-Type": "application/json",
            "X-Noroff-API-Key": API_KEY,
          },
        }
      );

      setAuth((prevState) => ({
        ...prevState,
        avatar: requestData.avatar,
      }));
      return response.data;
    } catch (err) {
      throw new Error(
        err.response?.data?.errors?.[0]?.message || "Something went wrong"
      );
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuth,
        loginUser,
        registerUser,
        setSelectedRole,
        selectedRole,
        logout,
        setAvatar,
      }}
    >
      {children}
      <div
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          zIndex: 1000,
          width: "300px",
          height: "80px",
          overflow: "hidden",
          borderRadius: "0px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
          backgroundColor: "#63f636",
          color: "black",
          border: "5px solid #63f636",
        }}
      >
        PLAY SOME MUSIC!
        <iframe
          id="soundcloud-widget"
          title="SoundCloud Player"
          width="100%"
          height="100%"
          scrolling="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/129803821&color=%2300ff2f&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
          style={{
            borderRadius: "0px",
            border: "0px solid #63f636",
          }}
        ></iframe>
      </div>
    </AuthContext.Provider>
  );
};
