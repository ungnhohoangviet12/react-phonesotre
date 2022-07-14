import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin';

export default function UserEdit(props) {
    return (
        <Edit title='Create a Post' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='name' />
                <TextInput multiline source='email' />
            </SimpleForm>
        </Edit>
    )
}
