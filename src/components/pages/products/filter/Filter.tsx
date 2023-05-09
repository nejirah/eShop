import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { GridStyled, SliderStyled, AccordionStyled } from './styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { getCategories } from '../../../../services';
import { FilterState, Rating } from './constants';
import { FullWidthButtonStyled } from '../productCard/styles';

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

  function handlePriceChange(event: Event, numbers: number | number[]): void {
    let newPrice = [];
    if (Array.isArray(numbers)) {
      newPrice = numbers;
    } else {
      throw new Error('The slider is not working');
    }
    setFilters({ ...filters, price: newPrice });
  }

  function handleCategoryChange(event: ChangeEvent<HTMLInputElement>, checked: boolean): void {
    const newCategories = [...categories];
    const categoryIndex = categories.indexOf(event.target.value);
    if (checked && categoryIndex === -1) {
      newCategories.push(event.target.value);
    } else if (!checked && categoryIndex !== -1) {
      newCategories.splice(categoryIndex, 1);
    }
    setFilters({ ...filters, categories: newCategories });
  }

  function handleRatingChange(event: ChangeEvent<HTMLInputElement>, checked: boolean): void {
    const newRating = [...rating];
    const ratingIndex = rating.indexOf(Number(event.target.value));
    if (checked && ratingIndex === -1) {
      newRating.push(Number(event.target.value));
    } else if (!checked && ratingIndex !== -1) {
      newRating.splice(ratingIndex, 1);
    }
    setFilters({ ...filters, rating: newRating });
  }

  return (
    <GridStyled>
      <Grid mb={3} item>
        <AccordionStyled defaultExpanded={true}>
          <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
            <Typography variant="body1" fontWeight="bold">
              {`Price: $${price[0]} - $${price[1]}`}{' '}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SliderStyled
              value={price}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              disableSwap
              min={1}
              max={3000}
            />
          </AccordionDetails>
        </AccordionStyled>
        <Divider />
      </Grid>
      <Grid mb={3} item>
        <AccordionStyled defaultExpanded={true}>
          <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
            <Typography variant="body1" fontWeight="bold">
              Category
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {data ? (
                data.map((category) => (
                  <FormControlLabel
                    key={category}
                    value={category}
                    control={<Checkbox onChange={handleCategoryChange} />}
                    label={category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')}
                  />
                ))
              ) : (
                <p>{errorMessage}</p>
              )}
            </FormGroup>
          </AccordionDetails>
        </AccordionStyled>
        <Divider></Divider>
      </Grid>
      <Grid mb={3} item>
        <AccordionStyled defaultExpanded={true}>
          <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
            <Typography variant="body1" fontWeight="bold">
              Rating
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {Rating.map((r) => (
                <FormControlLabel
                  key={r.id}
                  value={r.value}
                  control={<Checkbox onChange={handleRatingChange} />}
                  label={r.name}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </AccordionStyled>
        <Divider />
      </Grid>
      <FullWidthButtonStyled variant="outlined" fullWidth>
        Reset all
      </FullWidthButtonStyled>
    </GridStyled>
  );
};

export default FilterComponent;
