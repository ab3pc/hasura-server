import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';
import React from 'react';
import { PizzaEditTitle } from '../pizza-edit-title/pizza-edit-title.component';
import { CloudinaryInput } from '@app/common/components/cloudinary-input/cloudinary-input.component';

export const PizzaEdit = () => (
    <Edit title={<PizzaEditTitle/>} mutationMode='pessimistic'>
        <SimpleForm>
            <TextInput source="title" fullWidth label="Назва"/>
            <CloudinaryInput source='image' label='Фото' />
            {/* <TextInput source="image" fullWidth label="Фото"/> */}
            <TextInput source="ingredients" fullWidth label="Інградієнти"/>
            <NumberInput source="price" label="Ціна в грн."/>
            <NumberInput source="weight" label="Вага в гр."/>
        </SimpleForm>
    </Edit>
);