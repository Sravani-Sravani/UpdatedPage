import * as React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SelectButton from './SelectButton';
import SelectButton2 from './SelectButton2';
import SelectButton3 from './SelectButton3';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ControlledCheckBox from './ControlledCheckBox'
function BForm() {

    const options = [
        { label: 'Male', id: 1 },
        { label: 'Female', id: 2 },
    ];

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#2196f3',
        color: 'white',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        border: '1px solid #2196f3',
        justify: 'flex-start',
    }));
    const [value, setValue] = React.useState(null);
    return (
        <>
            {/* <Header /> */}

            <Card sx={{ mt: 2, ml: 2 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 20, marginBottom: 2, textAlign: 'center' }} color="text.secondary" gutterBottom>
                        Beneficiary Details
                    </Typography>
                    <Grid container direction="row" rowSpacing={0} columnSpacing={2} justify="flex-end" alignItems="center">
                        <Grid item xs={16} sm={12} md={12} lg={12}>
                            <Grid container direction="row" rowSpacing={2} columnSpacing={2} justify="flex-end" alignItems="center">
                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="Name"
                                        label="Name"
                                        name="Name"
                                        autoComplete="Name"
                                        size="small"
                                    />
                                </Grid>


                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Autocomplete
                                        disablePortal
                                        onChange={(event, value) => console.log(value)}
                                        margin="normal"
                                        fullWidth
                                        size="small"
                                        id="combo-box-demo"
                                        options={options}
                                        sx={{ width: '100%', mt: 1 }}
                                        renderInput={(params) => <TextField {...params} label="Gender" />}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} >
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label="Date of Birth"
                                            inputFormat="MM/DD/YYYY"
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField size="small" fullWidth {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} >
                                    <SelectButton></SelectButton>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} >
                                    <SelectButton2></SelectButton2>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} >
                                    <SelectButton3></SelectButton3>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} >

                                    <TextField margin="normal"
                                        required
                                        fullWidth
                                        id="dobc"
                                        label="DOB Certificate"
                                        name="dobc"
                                        autoComplete="dobc"
                                        size="small"
                                        sx={{ marginTop: 2 }} type="file" />
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} >

                                    <TextField margin="normal"
                                        required
                                        fullWidth
                                        id="photo"
                                        label="PHOTO"
                                        name="photo"
                                        autoComplete="photo"
                                        size="small"
                                        sx={{ marginTop: 2 }} type="file" />
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>

            <Card sx={{ mt: 2, ml: 2 }}>
                <CardContent>
                    <Grid item xs={12} sx={{ height: '5%' }}>
                        <Item >
                            <Stack direction="row" sx={{ justifyContent: 'center', alignItems: 'center' }} >
                                <Typography sx={{ fontWeight: 'bold' }}>DECLARATION</Typography>
                                <ControlledCheckBox></ControlledCheckBox>
                            </Stack>
                        </Item>
                    </Grid>

                    <Grid item xs={12} sx={{ backgroundColor: 'white', color: 'black', borderColor: 'black' }}>
                        <Item sx={{ backgroundColor: 'white', color: 'black', borderColor: 'black' }}>
                            <Typography sx={{ textAlign: 'left' }} variant="subtitle2" gutterBottom>
                                I declare that <br></br>  </Typography>
                            <Typography sx={{ textAlign: 'left' }} variant="subtitle2" gutterBottom>
                                - I have no objection in sharing Aadhar data of my family. <br></br>  </Typography>
                            <Typography sx={{ textAlign: 'left' }} variant="subtitle2" gutterBottom>
                                - I am liable for disciplinary action for declaring ineligible family as dependents, and<br></br>  </Typography>
                            <Typography sx={{ textAlign: 'left' }} variant="subtitle2" gutterBottom>
                                - I declare that the above information is true to my knowledge and submittting to Dr. YSR Aarogyasri Health Care Trust for issue of health cards under beneficiary.<br></br> </Typography>
                            <Typography sx={{ textAlign: 'left' }} variant="subtitle2" gutterBottom>
                                - I am liable for disciplinary action for declaring ineligible family member if any as Dependents. </Typography>
                        </Item>
                    </Grid>
                </CardContent>
            </Card>



        </>
    );
}

export default BForm;
