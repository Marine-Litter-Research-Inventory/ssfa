import React from 'react';
import { styled } from '@mui/system';
import { List, ListItemIcon, ListItemButton, ListItemText, Divider } from '@mui/material';

import BarChartIcon from '@mui/icons-material/BarChart';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';

const DrawerBox = styled('div')({
  backgroundColor: 'cornflowerblue',
  height: '100%',
  width: `calc(${window.innerWidth}px * 0.7)`,
  overflowX: 'scroll',
})

const InfoItem = ({ icon, text, secondaryText, onClick, active }) => {
  return (
    <ListItemButton
      onClick={onClick}
    >
      <ListItemIcon>
        {icon !== 0 ?
          (icon === 1 ?
            <BubbleChartIcon fontSize='large' sx={{ color: active ? 'springgreen' : 'ghostwhite' }} />
            : <DonutLargeIcon fontSize='large' sx={{ color: active ? 'springgreen' : 'ghostwhite' }} />)
          : <BarChartIcon fontSize='large' sx={{ color: active ? 'springgreen' : 'ghostwhite' }} />
        }
      </ListItemIcon>
      <ListItemText
        primary={text}
        secondary={secondaryText}
      // primaryTypographyProps={{ color: 'ghostwhite' }}
      // secondaryTypographyProps={{ color: 'antiquewhite' }}
      />
    </ListItemButton>
  )
}

export default function CustomizedDrawer({ lists, onClick, pos }) {

  return (
    <DrawerBox>
      <List>
        {lists.map((list, idx) => (
          <React.Fragment key={idx}>
            <InfoItem
              active={pos === idx}
              icon={list.icon}
              text={list.text}
              secondaryText={list.secondaryText}
              onClick={() => onClick(idx)}
            />
            <Divider sx={{ borderColor: 'ghostwhite' }} />
          </React.Fragment>
        ))}
      </List>
    </DrawerBox>
  )
}