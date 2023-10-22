import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

const categories = [
    { name: 'Beverages', imageUrl: 'path_to_image_1.jpg' },
    { name: 'Snacks', imageUrl: 'path_to_image_2.jpg' },
    // Add more categories as needed
];

const CategoryItem = ({ name, imageUrl }) => (
    <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper elevation={3}>
            <Box style={{ backgroundImage: `url(${imageUrl})`, height: '200px', backgroundSize: 'cover' }} />
            <Typography variant="h6" align="center">
                {name}
            </Typography>
        </Paper>
    </Grid>
);

const CategoryList = () => (
    <Grid container spacing={3}>
        {categories.map((category) => (
            <CategoryItem key={category.name} {...category} />
        ))}
    </Grid>
);

export default CategoryList;
