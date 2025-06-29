import { useState } from "react"


export const useForm = (steps) => {

    const [currentStep, setCurrentStep] = useState(0)

    function changeStep(i, e) {
        if (e) e.preventDefault()
        if(i < 0 || i >= steps.length)  return

        setCurrentStep(i)
    }
    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isLasStep: currentStep + 1 === steps.length ? true : false,
        isFirstStep: currentStep === 0 ? true : false,
        

    }
}

