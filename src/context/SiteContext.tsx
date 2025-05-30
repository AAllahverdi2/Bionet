import React, { createContext, useContext, useEffect, useState } from "react";
import { SiteService } from "../services/site.service";
import { SiteData } from "../interface/site.interface";
import { useLanguage } from "./LanguageContext";
// import { SiteService } from "../services/SiteService";

interface SiteContextType {
  data: SiteData | null;
  status: number | null;
  loading: boolean;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { language } = useLanguage();
  const [data, setData] = useState<SiteData | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await SiteService.getSite();
      setData(result.data.data);
      setStatus(result.status);
      setLoading(false);
    };

    fetchData();
  }, [language]);

  return (
    <SiteContext.Provider value={{ data, status, loading }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = (): SiteContextType => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSite must be used within a SiteProvider");
  }
  return context;
};
