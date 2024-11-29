export interface MenuType {
  path: string;
  title: string;
  icon: any;
  component?: any;
  noMenu?: boolean;
  hasPermission?: boolean;
  subMenu?: {
    path: string;
    title: string;
    icon: any;
    ret?: boolean;
    redirect?: string;
    component?: any;
    noMenu?: boolean;
    hasPermission?: boolean;
  }[];
  redirect?: string;
}
