export const areaOfTriangle = (pNumber1,pNumber2) => {
        let area = (pNumber1 * pNumber2) / 2;
        return area;
};

export const areaOfRectangle = (pNumber1,pNumber2) => {
        let area
        
};



export const areaOfCircle = (pNumber) => {
        let pieValue = Math.PI;
        let radius = pNumber ;
        let area = (pieValue * radius * radius).toFixed(2);
        return Number(area);
};

