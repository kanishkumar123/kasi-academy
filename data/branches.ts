export type Branch = {
  name: string; // "Choolaimedu" | "Arumbakkam"
  address: string; // full one-line address
  phone: string; // display form, e.g. "63811 90825"
  phoneHref: string; // "tel:6381190825"
  whatsapp?: string; // wa.me link
  mapQuery: string; // Google Maps ?q= value
};

export const branches: Branch[] = [
  {
    name: "Choolaimedu",
    address: "Kamaraj Nagar, Choolaimedu, Chennai",
    phone: "63811 90825",
    phoneHref: "tel:6381190825",
    whatsapp: "https://wa.me/916381190825",
    mapQuery: "Kamaraj Nagar, Choolaimedu, Chennai",
  },
  {
    name: "Arumbakkam",
    address: "H-17, Muthumariyamman Kovil Street, Arumbakkam, Chennai 600 106",
    phone: "78240 18941",
    phoneHref: "tel:7824018941",
    mapQuery: "H-17, Muthumariyamman Kovil Street, Arumbakkam, Chennai 600106",
  },
];
