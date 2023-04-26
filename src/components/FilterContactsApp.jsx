import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import {contacts} from '../data/contacts.json';
import Contact from './Contact';
import useFilter from '../hooks/useFilter';
import FilterControl from './FilterControl';

export default function FilterContactsApp() {
  const {filter, ...rest} = useFilter();

  return (
    <Box
      flexDirection='column' 
      alignItems='center' 
      display='flex'
      height='100%'
      gap={5}
    >
      <Typography textAlign='center' variant='h4'>
        Filter Contacts App
      </Typography>
      <Stack direction='row' justifyContent='center' gap={1}>
        <FilterControl {...rest}/>
      </Stack>
      <Stack
        justifyContent='center'
        flexDirection='row'
        flexWrap='wrap'
        overflow='auto'
        margin='auto'
        height='100%'
        gap='15px'
        pb={5}
      >
        {filter(contacts).map(c => (
          <Contact
            contact={c}
            key={c.id}
          />
        ))}
      </Stack>
    </Box>
  );
}