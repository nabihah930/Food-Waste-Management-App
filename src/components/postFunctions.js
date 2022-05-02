function getPostDetails(posterID){
    postType = '';
    if(posterID.includes("PDN") || posterID.includes("EDN"))
        postType = 'Donation';
    else
        postType = 'Request';
    return postType;
}

function getCurrentDate(){
    const today = new Date();
    const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date+' '+time;
}

export default { getPostDetails, getCurrentDate };