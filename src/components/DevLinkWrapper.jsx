import { DevLinkProvider } from "../../devlink/DevLinkProvider";

export default function DevLinkWrapper({ children, ...context }) {
  return <DevLinkProvider {...context}>{children}</DevLinkProvider>;
}
