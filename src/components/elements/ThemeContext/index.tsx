import { createContext, useRef, useState } from "react";

type Data = {
  notification: boolean;
  blogRef: any;
  skillsRef: any;
  kontakRef: any;
  tentangRef: any;
  berandaRef: any;
  tiltRef: any;
  scrollToBlog: () => void;
  scrollToKontak: () => void;
  scrollToSkills: () => void;
  scrollToTentang: () => void;
  scrollToBeranda: () => void;
  handleNotification: (value: boolean) => void;
};

export const ThemeContext = createContext<Data | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [notification, setNotification] = useState(false);
  const berandaRef: any = useRef(null);
  const tentangRef: any = useRef(null);
  const skillsRef: any = useRef(null);
  const kontakRef: any = useRef(null);
  const blogRef: any = useRef(null);
  const tiltRef = useRef(null);

  const scrollToBeranda = () => {
    berandaRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTentang = () => {
    tentangRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBlog = () => {
    blogRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToKontak = () => {
    kontakRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleNotification = (value: boolean) => {
    setNotification(value);
  };

  const value = {
    notification: notification,
    blogRef,
    skillsRef,
    kontakRef,
    tentangRef,
    berandaRef,
    tiltRef,
    scrollToBlog,
    scrollToKontak,
    scrollToSkills,
    scrollToTentang,
    scrollToBeranda,
    handleNotification: (value: boolean) => handleNotification(value),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
