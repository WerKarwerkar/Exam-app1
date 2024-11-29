import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { VenueProvider } from "../Context/VenueContext";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

function Layout() {
  return (
    <VenueProvider>
      <LayoutContainer>
        <Header />
        <MainContent>
          <Outlet />
        </MainContent>
        <Footer />
      </LayoutContainer>
    </VenueProvider>
  );
}

export default Layout;
