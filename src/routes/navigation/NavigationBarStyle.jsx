import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationBarContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
