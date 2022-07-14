import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, DateField } from 'react-admin';


const Products = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='title' />
            <DateField source='publishedAt' />
            <EditButton basePath='/products' />
            <DeleteButton basePath='/products' />
        </Datagrid>
    </List>
}

export default Products