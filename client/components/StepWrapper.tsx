import { Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material';
import React, { ReactNode } from 'react';

interface StepWrapperProps{
    activeStep: number;
    children: React.ReactNode;
}

const steps: string[] = ['Информация о треке', 'Загрузите обложку', 'Загрузите аудио дорожку']

const StepWrapper: React.FC<StepWrapperProps> = ({activeStep, children}) => {
   return(
       <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) => 
                    <Step
                        key={index}
                        completed={activeStep > index}
                    >
                        <StepLabel>{step}</StepLabel>
                    </Step>    
                )}
            </Stepper>
            <Grid container justifyContent={"center"} style={{margin: "70px 0px", height: "270px"}}>
                <Card style={{width: 600, margin: "0px auto"}}>
                    {children}
                </Card>
            </Grid>
       </Container>
   );
};


export default StepWrapper;