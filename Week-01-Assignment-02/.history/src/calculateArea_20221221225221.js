export const areaOfTriangle = () => {
        let area = (pNumber1 * pNumber2) / 2;
        return area;
};

export const areaOfRectangle = () => {
        
        
};



export const areaOfCircle = (pNumber) => {
        let pieValue = Math.PI;
        let radius = pNumber ;
        let area = (pieValue * radius * radius).toFixed(2);
        return Number(area);
};

