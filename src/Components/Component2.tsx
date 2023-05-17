import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const Component2 = () => {

    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleClick1 = () => {
        setOpen1(!open1);
    };

    const handleClick2 = () => {
        setOpen2(!open2);
    };

    const [childChecked1, setChildChecked1] = React.useState([false, false]);
    const [parentChecked, setParentChecked] = useState(false);
    const [childChecked2, setChildChecked2] = useState([false, false, false]);

    const handleParentChange = (event : any) => {
        setParentChecked(event.target.checked);
        setChildChecked2([event.target.checked, event.target.checked, event.target.checked]);
    };
    const handleChildChange = (index: number) => (event : any) => {
        const updatedChildChecked2 = [...childChecked2];
        updatedChildChecked2[index] = event.target.checked;
        setChildChecked2(updatedChildChecked2);
        setParentChecked(updatedChildChecked2.every((isChecked) => isChecked));
    };

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChildChecked1([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChildChecked1([event.target.checked, childChecked1[1]]);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChildChecked1([childChecked1[0], event.target.checked]);
    };

    const children1 = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                label=''
                control={<Checkbox checked={childChecked1[0]} onChange={handleChange2} />}
            />
        </Box>
    );

    const children2 = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                label=''
                control={<Checkbox checked={childChecked1[1]} onChange={handleChange3} />}
            />
        </Box>
    );

    const children3 = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                label=''
                control={<Checkbox checked={childChecked2[0]} onChange={handleChildChange(0)} />}
            />
        </Box>
    );

    const children4 = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                label=''
                control={<Checkbox checked={childChecked2[1]} onChange={handleChildChange(1)} />}
            />
        </Box>
    );

    const children5 = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                label=''
                control={<Checkbox checked={childChecked2[2]} onChange={handleChildChange(2)} />}
            />
        </Box>
    );

  return (
    <div><hr></hr>
        <h1 style={{display:'flex', justifyContent:'center'}}>Component-2</h1>
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
        >
            {/* First Department */}
            <Box display='flex'>
                <Checkbox
                    checked={childChecked1[0] && childChecked1[1]}
                    indeterminate={childChecked1[0] !== childChecked1[1]}
                    onChange={handleChange1}
                />
                <ListItemButton onClick={handleClick1}>
                    <ListItemText primary="Customer Service" />
                    {open1 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
            </Box>
            {/* First Sub-Department */}
            <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Box display='flex'>
                        {children1}
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Support" />
                        </ListItemButton>
                    </Box>
                    <Box display='flex'>
                        {children2}
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Customer Success" />
                        </ListItemButton>
                    </Box>
                </List>
            </Collapse>

            {/* Second Department */}
            <Box display='flex'>
                <Checkbox
                    checked={parentChecked}
                    indeterminate={childChecked2.some((isChecked) => isChecked) && !childChecked2.every((isChecked) => isChecked)}
                    onChange={handleParentChange}
                />
                <ListItemButton onClick={handleClick2}>
                    <ListItemText primary="Design" />
                    {open2 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
            </Box>
            {/* Second Sub-Department */}
            <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Box display='flex'>
                        {children3}
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Graphic Design" />
                        </ListItemButton>
                    </Box>
                    <Box display='flex'>
                        {children4}
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Product Design" />
                        </ListItemButton>
                    </Box>
                    <Box display='flex'>
                        {children5}
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Web Design" />
                        </ListItemButton>
                    </Box>
                </List>
            </Collapse>
        </List>
    </div>
  )
}

export default Component2