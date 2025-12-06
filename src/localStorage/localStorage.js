const key = 'todo';

export function saveData(data){
    localStorage.setItem(key,JSON.stringify(data));
}
export function getData(){
    return JSON.parse(localStorage.getItem(key)) || [];
}
export function deleteEachData(index){
    const data = getData();
    data.splice(index,1);
    saveData(data);
    return data;   
}
export function clearData(){
    console.log("Clearing all data");
    localStorage.removeItem(key);
    return [];
}