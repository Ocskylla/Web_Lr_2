// BEGIN (write your solution here)
export const getWeekends = (format = "long") =>{
    if(format === 'long'){
        return ['saturday','sunday'];
    }
    else if(format === 'short'){
        return ['sat','sun'];
    }
}
export default getWeekends;
// END