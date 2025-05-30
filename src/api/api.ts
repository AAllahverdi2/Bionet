let $api: { (message: string, params?: { [key: string]: any }): string };

$api = (service: string, params?: { [key: string]: any }): string => {
  const services: { [service: string]: any } = {
    get_HomeGero: "hero",
    get_Partners: "partners",
    get_HomeServices: "home-service",
    get_HomeActivity: "activity",
    get_WebDevelopMent: "website-development",
    get_OurProducts: "our-product",
    post_Contact: "contact",
    get_AboutData: "about",
    post_PriceOffer: "price-offer",
    get_settings: "setting",
    get_Services: "service",
    get_Portpolio: "portfolios",
    get_siteText: "site-texts",
  };
  if (typeof services[service] === "string") {
    services[service] = { path: String(services[service]) };
  }

  let url = services[service].path;
  if (params) {
    let query_params: { [key: string]: any } = {};
    let has_query_params = false;

    for (const [key, value] of Object.entries(params)) {
      let replaced = false;
      url = url.replaceAll("{" + key + "}", () => {
        replaced = true;
        return value;
      });
      if (!replaced) {
        has_query_params = true;
        query_params[key] = value;
      }
    }

    if (has_query_params) {
      let param = new URLSearchParams(query_params);
      url += "?" + param.toString();
    }
  }
  return url;
};

export { $api };
