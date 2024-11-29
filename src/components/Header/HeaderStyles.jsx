import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
  background-color: transparent;
  position: relative;
  padding: 10px;
  max-width: 100%;
`;

export const Logo = styled.div`
  img {
    height: 75px;
    width: auto;
    padding-left: 20px;
    padding-right: 20px;

    @media (max-width: 768px) {
      height: 40px;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`;

export const NavWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 100px;

  a {
    text-decoration: none;
    color: black;
    font-size: 20px;

    &:hover {
      border-bottom: 2px solid #e55983;
    }
  }

  @media (max-width: 833px) {
    gap: 80px;

    a {
      font-size: 16px;

      &:hover {
        border-bottom: 2px solid #e55983;
      }
    }
  }

  @media (max-width: 768px) {
    gap: 20px;

    a {
      font-size: 14px;

      &:hover {
        border-bottom: 1px solid #e55983;
      }
    }
  }
`;

export const AuthLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding-right: 20px;
  margin-top: 5px;
  color: black;

  a {
    text-decoration: none;
    color: black;
    font-size: 14px;

    &:hover {
      border-bottom: 2px solid #60f931;
    }
  }

  @media (max-width: 833px) {
    gap: 15px;
    padding-right: 15px;

    a {
      font-size: 12px;

      &:hover {
        border-bottom: 1px solid #60f931;
      }
    }
  }

  @media (max-width: 768px) {
    gap: 10px;
    padding-right: 10px;
    margin-top: 10px;

    a {
      font-size: 10px;
      &:hover {
        border-bottom: 1px solid #60f931;
      }
    }
  }
`;
