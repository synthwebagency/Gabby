
export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  frequency: string;
  description: string;
  features: string[];
  isPrimary?: boolean;
}

export interface AddOn {
  title: string;
  description: string;
}
