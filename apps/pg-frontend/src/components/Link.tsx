import { LinkProps as MuiLinkProps, Link as MuiLink } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

interface LinkProps extends MuiLinkProps {
  to: string;
}

const Link = (props: LinkProps) => {
  return (
    <MuiLink component={ReactRouterLink} {...props}>
      {props.children}
    </MuiLink>
  );
};

export default Link;
