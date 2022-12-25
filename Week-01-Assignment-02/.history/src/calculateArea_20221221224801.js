export const areaOfTriangle = () => {
        ///your code goes here
};

export const areaOfRectangle = (pNumber1,pNumber2) => {
        let area = pNumber1*pNumber2
        return area;
};



export const areaOfCircle = (pNumber) => {
        let pieValue = Math.PI;
        let radius = pNumber ;
        let area = (pieValue * radius * radius).toFixed(2);
        return Number(area);
};

