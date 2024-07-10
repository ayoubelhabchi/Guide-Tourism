import React, { useState } from 'react';

const ProgressSteps = ({ steps, renderStep }) => {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };
  const prev2Step = () => {
    setActiveStep(activeStep - 2);
  };
  const prev3Step = () => {
    setActiveStep(activeStep - 3);
  };
  const totalSteps = steps.length;
  const currentStep = steps[activeStep - 1];

  return (
    <div>
      <div>
        {renderStep(currentStep.step, nextStep, prevStep, prev2Step,prev3Step)}
      </div>
      <div>
      {renderStep()}

      </div>
    </div>
  );
};

export default ProgressSteps;
