const regExpName = /^[a-zA-Z0-9\s]{3,}$/;
const regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
const regMessage = /^[\s\S]{1,1000}$/;


export const validateName = (field) =>{
    if(regExpName.test(field)&& field.trim() !== ""){
        return true;
    }else{
        return false;
    }
}

export const validateEmail = (field) =>{
    if(regExpEmail.test(field)&& field.trim() !== ""){
        return true;
    }else{
        return false;
    }
}

export const validateMessage= (field) =>{
    if(regMessage.test(field)&& field.trim() !== ""){
        return true;
    }else{
        return false;
    }
}