import React from 'react';
import { styled } from '@material-ui/system';
import { List, ListItem, ListItemIcon, ListItemText, Divider, ButtonBase } from '@material-ui/core';

const DrawerBox = styled('div')({
  backgroundColor: 'cornflowerblue',
  height: '100%',
  width: `calc(${window.innerWidth}px * 0.7)`,
  overflowX: 'scroll',
})

const InfoItem = ({ icon, text, secondaryText, onClick }) => {
  return (
    <>
      <ButtonBase
        onClick={onClick}
        sx={{ width: '100%' }}
      >
        <ListItem>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText
            primary={text}
            secondary={secondaryText}
            primaryTypographyProps={{ color: 'ghostwhite' }}
            secondaryTypographyProps={{ color: 'antiquewhite' }}
          />
        </ListItem>
      </ButtonBase>
      <Divider sx={{ borderColor: 'ghostwhite' }} />
    </>
  )
}

export default function CustomizedDrawer({ lists }) {
  return (
    <DrawerBox>
      <List>
        {lists.map((list, idx) => (
          <InfoItem
            key={idx}
            icon={list.icon}
            text={list.text}
            secondaryText={list.secondaryText}
            onClick={list.onClick}
          />
        ))}
      </List>
    </DrawerBox>
  )
}