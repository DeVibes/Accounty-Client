export const mapDataForRechartPie = data => 
    data.map(({ categoryName: name, total: value }) => { 
        return { name, value }
    });