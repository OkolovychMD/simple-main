import React, { useState, useEffect, forwardRef } from 'react';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { colors } from '@/constanst/colors';
import ExpandMore from '@mui/icons-material/ExpandMore';

const CustomSelect = forwardRef(({ options = [], label, onChange, value, disabled, multiple }, ref) => {
  const [selectedValue, setSelectedValue] = useState(value || '');

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <FormControl
      variant="outlined"
      fullWidth
      disabled={disabled}
      ref={ref}
      sx={{
        bgcolor: `${colors.orange} !important`,
        borderRadius: '8px',
        '& .MuiInputLabel-root': {
          bgcolor: `${colors.orange} !important`,
          color: `${colors.whitePermanet} !important`,
          pl: 1,
          pr: 1
        },
        '& .MuiInputLabel-shrink': {
          bgcolor: 'transparent !important',
          color: `transparent !important`,
          pl: 1,
          pr: 1,
          fontWeight: '400 !important',
          fontSize: '20px !important',
        },
      }}
    >
      <InputLabel
        id="custom-select-label"
        sx={{
          color: `${colors.whitePermanet} !important`,
          bgcolor: `${colors.orange} !important`,
          pl: 1,
          pr: 1,
        }}
      >
        {!selectedValue && label}
      </InputLabel>

      <Select
        variant={'filled'}
        labelId="custom-select-label"
        id="custom-select"
        value={selectedValue}
        onChange={handleSelectChange}
        IconComponent={ExpandMore}
        label={label}
        displayEmpty
        multiple={multiple}
        sx={{
          padding: '0px !important',
          minHeight: '40px !important',
          alignItems: 'center',
          color: `${colors.whitePermanet} !important`,
          backgroundColor: `${colors.orange} !important`,
          borderRadius: '8px !important',
          borderBottom: 'none',
          '& .MuiSelect-select': {
            padding: '9px 14px !important',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: `${colors.orange} !important`,
            color: `${colors.whitePermanet} !important`,
            borderRadius: '8px !important',
            minHeight: '40px !important',
            borderBottom: 'none',
          },
          '& .MuiSelect-icon': { color: colors.whitePermanet },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: `${colors.whitePermanet} !important`,
            borderRadius: '8px !important',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: `${colors.whitePermanet} !important`,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: `${colors.whitePermanet} !important`,
            borderBottom: 'none'
          },
          '&.Mui-focused .MuiSelect-select': {
            backgroundColor: `${colors.orange} !important`,
            color: `${colors.whitePermanet} !important`,
            borderBottom: 'none',
            '&::before': {
              borderBottom: 'none'
            }
          },
          '&.Mui-active .MuiSelect-select': {
            backgroundColor: `${colors.orange} !important`,
            color: `${colors.whitePermanet} !important`,
            borderBottom: 'none'
          },
          '&::before': {
            borderBottom: 'none'
          },
          '&::after': {
            borderBottom: 'none'
          },
          '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{
              color: colors.blackPermanet,
              '&.Mui-selected': {
                backgroundColor: `${colors.orange} !important`,
                color: `${colors.whitePermanet} !important`,
                '&:hover': {
                  backgroundColor: `${colors.orange} !important`,
                  color: `${colors.whitePermanet} !important`,
                },
              },
              '&:hover': {
                backgroundColor: 'transparent !important',
                color: `${colors.orange} !important`,
              },
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});

CustomSelect.displayName = 'CustomSelect';

export default CustomSelect;
