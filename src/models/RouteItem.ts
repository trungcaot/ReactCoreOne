import { ComponentType, FC } from "react";

interface RouteItem {
  keyRoute: string;
  title: string;
  tooltip?: string;
  path?: string;
  component?: FC<{}>;
  enabled: boolean;
  icon?: ComponentType;
  subRoutes?: Array<RouteItem>;
  appendDivider?: boolean;
}

export default RouteItem;
