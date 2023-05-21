import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
  Form, FormLayout, TextField, Button
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { ProductsCard } from "../components";
import { useState, useCallback } from 'react';
export default function HomePage() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('1776 Barnes Street\nOrlando, FL 32801');

  const handleSubmit = useCallback(() => {
    setEmail('');
    setName('');
    setPhone('');
    setAddress('');
  }, []);


  return (
    <Page narrowWidth>
      <TitleBar title="The Hype Print" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Text variant="headingMd" as="h2">
            Enter Factory Details
          </Text>
        </Layout.Section>
        <Layout.Section>
          <Card sectioned>
            <Form onSubmit={handleSubmit}>
              <FormLayout>
                <TextField
                  value={name}
                  onChange={setName}
                  label="Factory owner name"
                  type="text"
                  autoComplete="name"
                />
                <TextField
                  value={phone}
                  onChange={setPhone}
                  label="Phone number"
                  type="number"
                  autoComplete="phone"
                />
                <TextField
                  value={email}
                  onChange={setEmail}
                  label="Email"
                  type="email"
                  autoComplete="email"
                  helpText={
                    <span>
                      We’ll use this email address to inform factory owner when order placce.
                    </span>
                  }
                />
                <TextField
                  label="Factory address"
                  value={address}
                  onChange={setAddress}
                  multiline={4}
                  autoComplete="off"
                />
                <Button submit>Submit</Button>
              </FormLayout>
            </Form>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <ProductsCard />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
