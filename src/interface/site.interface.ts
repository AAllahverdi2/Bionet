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
export interface SiteData {
  portfolio: string;
  services: string;
  about: string;
  contact: string;
  write_to_us: string;
  partners: string;
  partners_description: string;
  services_description: string;
  activity: string;
  web_dev: string;
  our_products: string;
  follow_us: string;
  work_with_us: string;
  ux_ui_design: string;
  mobile_app_and_website_development: string;
  frontend_development: string;
  backend_development: string;
  name: string;
  name_placeholder: string;
  surname: string;
  surname_placeholder: string;
  email: string;
  email_placeholder: string;
  phone_number: string;
  phone_number_placeholder: string;
  detail_of_project: string;
  message: string;
  message_placeholder: string;
  send_message: string;
  website: string;
  mobile_app: string;
  latest_projects: string;
  price_offer: string;
  price_offer_description: string;
  name_surname: string;
  name_surname_placeholder: string;
  contact_number: string;
  contact_number_placeholder: string;
  product_about: string;
  team: string;
  team_description: string;
  contact_details: string;
  address: string;
  call_us: string;
  social_media: string;
}
