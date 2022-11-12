import {
  Admin,
  DataProvider,
  EditGuesser,
  ListGuesser,
  Loading,
  Resource,
} from "react-admin";
import { CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import buildHasuraProvider from "ra-data-hasura";
import { PizzaList } from "@app/modules/pizzas/components/pizzas-list/pizzas-list.components";
import { PizzaEdit } from "@app/modules/pizzas/components/pizzas-edit/pizzas-edit.component";
import { PizzaCreate } from "@app/modules/pizzas/components/pizzas-create/pizzas-create.component";
import { authProvider } from "@app/core/auth-provider";
import { apolloClient } from "./core/apollo-client";
import { theme } from '@app/core/theme';
import { i18nProvider } from "./core/i18n";

export const App = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(
    null
  );

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({
       // clientOptions: { uri: "http://localhost:8080/v1/graphql" },
       client: apolloClient
      });
      setDataProvider(dataProvider);
    };

    buildDataProvider();
  }, []);

  if (!dataProvider) return <Loading />;

  return (
    <>
      <CssBaseline />
      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        i18nProvider = {i18nProvider}
        requireAuth
        theme={theme}
      >
        <Resource
          name="pizzas"
          list={PizzaList}
          edit={PizzaEdit}
          create={PizzaCreate}
          options = {{label: 'Меню'}}
        />
      </Admin>
    </>
  );
};
