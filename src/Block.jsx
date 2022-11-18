import React, { useState } from 'react'
import { ToggleButton, ToggleButtonGroup, Menu, MenuItem } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP']
const additionalCurrencies = ['JPY', 'AUD', 'BGN', 'BRL', 'KGS', 'MDL', 'NOK', 'RON']

export const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => {

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="block">

      <ToggleButtonGroup value={currency}
        exclusive
        onChange={onChangeCurrency}
        color="warning"
        fullWidth>
        {defaultCurrencies.map((cur) => (
          <ToggleButton variant="contained"
            value={cur}
            key={cur}>
            {cur}
          </ToggleButton>
        ))}
        
        <ToggleButton
          onClick={handleClick}
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          value={null}
          selected={additionalCurrencies.indexOf(currency) > 0}>
          {defaultCurrencies.indexOf(currency) < 0 ? currency : ''}
          <ArrowDropDownIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {
          additionalCurrencies.map((curr) => (
            <MenuItem key={curr} onClick={() => { onChangeCurrency(null, curr); handleClose() }}>{curr}</MenuItem>
          ))
        }
      </Menu>
      <input
        onChange={(e) => onChangeValue(e.target.value)}
        value={value}
        min={0}
        type='number'
        placeholder={0}
      />
    </div>
  )
}
