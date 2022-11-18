export default function orderByProps(obj, arr){
    const sortArr = [];
    const sortedArr = [];

    arr.forEach(item => {
        sortArr.push({key: item, value: obj[item]});
    });

    for (let item in obj){
        if (!arr.includes(item)){
            sortedArr.push({key: item, value: obj[item]});
        }
    }

    sortedArr.sort((a,b) => ((a.key > b.key) ? 1 : -1));

    return sortArr.concat(sortedArr);
}