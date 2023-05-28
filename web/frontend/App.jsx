import { BrowserRouter } from "react-router-dom";
import { NavigationMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";
import { Header } from './components'
import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./components";
import { Layout } from "@shopify/polaris";

// import Header from "./components/Header/header"

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <QueryProvider>
            {/* <NavigationMenu
              navigationLinks={[
                {
                  label: "Products",
                  destination: "/products",
                },
              ]}
            /> */}
                <Header />
                <Routes pages={pages} />
            
          </QueryProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
