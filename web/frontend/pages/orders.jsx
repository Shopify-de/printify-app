import { Card, Page, Layout, TextContainer, Text } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function Orders() {
  return (
    <Page fullWidth>
      <TitleBar
        title="Orders"
        primaryAction={{
          content: "Primary action",
          onAction: () => console.log("Primary action"),
        }}
        secondaryActions={[
          {
            content: "Secondary action",
            onAction: () => console.log("Secondary action"),
          },
        ]}
      />
      <Layout >
        <Layout.Section>
          <Card sectioned>
            <Text variant="headingMd" as="h2">
              Orders
            </Text>
            <TextContainer>
              {/* <p>Body</p> */}
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
