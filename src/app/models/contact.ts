export interface IContact {
  name: string;
  imgSrc: string;
  imgAlt: string;
  position: string;
  city: string;
  state: string;
  company_name: string;
  company_address: {
    street: string,
    city: string
  };
  phone: string;
  location: {
    lat?: string,
    lon?: string
  };
}

