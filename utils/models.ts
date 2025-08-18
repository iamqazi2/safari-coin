interface IconProps {
  src: string;
  className: string;
}

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

interface TechnologyCardProps {
  src: string;
  title: string;
  description: string;
}

interface DummyData {
  serviceCardData: ServiceCardProps[];
  technologyCardData: TechnologyCardProps[];
}

export type { IconProps, ServiceCardProps, DummyData, TechnologyCardProps };
