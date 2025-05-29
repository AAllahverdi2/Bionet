export interface HomeHeraDataType {
  title: string;
  description: string;
}
export interface PartnersDataType {
  id: number;
  logo: string;
}
export interface HomeServicesDataType {
  id: number;
  title: string;
  description: string;
  image: string;
}
export interface ServiceStatistic {
  title: string;
  value: string;
}

export interface HomeServiceSectionData {
  title: string;
  description: string;
  statistics: ServiceStatistic[];
}
export interface HomeWebDevelopmentDataType {
  id: number;
  title: string;
  description: string | null;
  image: string;
}
export interface HomeProducts {
  id: number;
  title: string;
  description: string | null;
  tab_key: string;
  images: string[];
}

export interface ContactFormData {
  name: string;
  surname: string;
  email: string;
  phone_number: string;
  message: string;
}
export interface AboutIcon {
  title: string;
  icon: string;
}

export interface AboutData {
  hero_title: string;
  hero_description: string;
  title: string;
  description: string;
  image: string;
  icons: AboutIcon[];
}
export interface SettingsContactData {
  address: string;
  phone_number: string;
  email: string;
  instagram: string;
  youtube: string;
  facebook: string;
}
export interface ServicesDataType {
  title: string;
  description: string;
  images: string[];
}
