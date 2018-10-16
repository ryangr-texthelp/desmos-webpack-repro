import calculator from "./calculator";

const script = document.createElement("script");
script.src = calculator;
script.onload = () => {
    const elt = document.getElementById("calculator");

    var GRAPHING_CONFIG = {
        images: false,
        folders: false,
        notes: false,
        qwertyKeyboard: false,
        restrictedFunctions: true,
        degreeMode: true,
        branding: false,
        border: false,
        plotSingleVariableImplicitEquations: false
      };
      
    Desmos.GraphingCalculator(elt, GRAPHING_CONFIG);
};
document.body.append(script);