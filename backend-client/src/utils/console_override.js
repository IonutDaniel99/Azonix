export const consoleWithTimeStamp = (string) => {
    var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date();
    // prettier-ignore
    const dateString = `[${date.getDate()}/${month[date.getMonth()]}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}]`;
    console.log(dateString, string);
};
