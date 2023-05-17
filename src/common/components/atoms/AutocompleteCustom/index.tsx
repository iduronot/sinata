import React from 'react'
import { Autocomplete, autocompleteClasses, FormControl, FormLabel, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { AutocompleteCustomProps } from '@/common/types/autocomplete'

export default function AutocompleteCustom(props: AutocompleteCustomProps) {
    const {
        label,
        name,
        data
    } = props
  return (
    <FormControl className='w-full mb-4'>
        <FormLabel className='mb-1 text-sm'>
            {label}
        </FormLabel>
        <Autocomplete options={data} {...props}
            renderInput={(params) => <TextField {...params} name={name} size='small' sx={{
                '& .MuiOutlinedInput-root': { 
                    '&:hover fieldset': { borderColor: '#0ea5e9',}
                    }, 
                '& .Mui-disabled': {
                        '&:hover fieldset': { borderColor: '#bfc0c2' },
                    backgroundColor: '#fafafa' 
                },
                '& .MuiInputBase-root': {
                    fontSize: 14
                },
                [`& .${autocompleteClasses.popupIndicator}`]: {
                    transform: "none"
                  }
            }} />}
            popupIcon={<SearchIcon fontSize='small' />} clearIcon={<CloseIcon fontSize='small' />}
        />
    </FormControl>
  )
}
