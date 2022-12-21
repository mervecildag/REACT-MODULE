export const areaOfTriangle = (pNumber1,pNumber2) => {
        return (pNumber1 * pNumber2) / 2;
        
};

export const areaOfRectangle = (pNumber1,pNumber2) => {
        return pNumber1 * pNumber2 ;

};



export const areaOfCircle = (pNumber) => {
        let pieValue = Math.PI;
        let radius = pNumber ;
        let area = (pieValue * radius * radius).toFixed(2);
        return Number(area);
};

