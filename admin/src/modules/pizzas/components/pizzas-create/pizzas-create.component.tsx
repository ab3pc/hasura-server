import { Create, NumberInput, SimpleForm, TextInput } from 'react-admin';
import React from 'react';
import { CloudinaryInput } from '@app/common/components/cloudinary-input/cloudinary-input.component';

export const PizzaCreate = () => (
    <Create title="Додати в меню">
         <SimpleForm>
            <TextInput source="title" fullWidth label="Назва"/>
            <CloudinaryInput source='image' label='Фото' />
            <TextInput source="ingredients" fullWidth label="Інградієнти"/>
            <NumberInput source="price" label="Ціна в грн."/>
            <NumberInput source="weight" label="Вага в гр."/>
        </SimpleForm>
    </Create>
);