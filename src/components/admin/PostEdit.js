import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

export default function PostEdit(props) {
    return (
        <Edit title='Edit a Post' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='title' />
                <TextInput multiline source='body' />
                <DateInput label='Published' source='publishedAt' />
            </SimpleForm>
        </Edit>
    )
}
