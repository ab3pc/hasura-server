import { Datagrid, EditButton, FunctionField, List, TextField, TextInput } from 'react-admin';
import React from 'react';
import { PizzasListExpand } from '@app/modules/pizzas-list-expand/pizzas-list-expand.component';

import { Pizzas } from '@app/core/types';

const filters = [
    <TextInput source='title' label='Пошук по назві' />
]

export const PizzaList = () => (
    <List filters={filters} exporter={false}>
        <Datagrid expand={PizzasListExpand} rowClick="expand" bulkActionButtons={false}>
            <TextField source="title" label = "Назва"/>
            <FunctionField label="Ціна" render={(record: Pizzas) => `${record.price} грн.`} />
            {/* <NumberField source="price" label = "Ціна"/> */}
            <EditButton/>
        </Datagrid>
    </List>
);