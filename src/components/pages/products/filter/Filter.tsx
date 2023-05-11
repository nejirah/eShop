import React, { ChangeEvent, useEffect, useState } from 'react';
import { Checkbox, Divider, FormControlLabel, FormGroup, Grid } from '@mui/material';
import { GridStyled, SliderStyled } from './styles';
import { getCategories } from '../../../../services';
import { FilterState, Rating } from './constants';
import { FullWidthButtonStyled } from '../productCard/styles';
import AccordionComponent from '../../../common/Accordion';

const FilterComponent = ({ filters, setFilters }: FilterState) => {
  const [data, setData] = useState<string[]>();
  const [errorMessage, setErrorMessage] = useState('');

  const { categories, rating, price } = filters;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCategories();
        setData(result);
      } catch (error) {
        setErrorMessage('An error occurred while fetching product categories.');
      }
    };
    fetchData();
  }, []);

  const handlePriceChange = (event: Event, numbers: number | number[]): void => {
    if (Array.isArray(numbers)) {
      setFilters({ ...filters, price: numbers });
      return;
    }
    throw new Error('The slider is not working');
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean): void => {
    const newCategories = [...categories];
    const categoryIndex = categories.indexOf(event.target.value);
    if (checked && categoryIndex === -1) {
      newCategories.push(event.target.value);
    } else if (!checked && categoryIndex !== -1) {
      newCategories.splice(categoryIndex, 1);
    }
    setFilters({ ...filters, categories: newCategories });
  };

  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean): void => {
    const newRating = [...rating];
    const ratingIndex = rating.indexOf(Number(event.target.value));
    if (checked && ratingIndex === -1) {
      newRating.push(Number(event.target.value));
    } else if (!checked && ratingIndex !== -1) {
      newRating.splice(ratingIndex, 1);
    }
    setFilters({ ...filters, rating: newRating });
  };

  const resetFilters = (): void => {
    setFilters({ categories: [], price: [1, 3000], rating: [] });
  };

  return (
    <GridStyled>
      <Grid mb={3} item>
        <AccordionComponent title={`Price: $${price[0]} - $${price[1]}`}>
          <SliderStyled
            value={price}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            disableSwap
            min={1}
            max={3000}
          />
        </AccordionComponent>
        <Divider />
      </Grid>

      <Grid mb={3} item>
        <AccordionComponent title="Category">
          <FormGroup>
            {data ? (
              data.map((category) => (
                <FormControlLabel
                  key={category}
                  value={category}
                  control={
                    <Checkbox
                      checked={filters.categories.includes(category)}
                      onChange={handleCategoryChange}
                    />
                  }
                  label={category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')}
                />
              ))
            ) : (
              <p>{errorMessage}</p>
            )}
          </FormGroup>
        </AccordionComponent>
        <Divider />
      </Grid>

      <Grid mb={3} item>
        <AccordionComponent title="Rating">
          <FormGroup>
            {Rating.map((r) => (
              <FormControlLabel
                key={r.id}
                value={r.value}
                control={
                  <Checkbox
                    checked={filters.rating.includes(r.value)}
                    onChange={handleRatingChange}
                  />
                }
                label={r.name}
              />
            ))}
          </FormGroup>
        </AccordionComponent>
        <Divider />
      </Grid>

      <FullWidthButtonStyled variant="outlined" fullWidth onClick={resetFilters}>
        Reset all
      </FullWidthButtonStyled>
    </GridStyled>
  );
};

export default FilterComponent;
