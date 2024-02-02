function validate(name, prise, category){
    if(!name.value){
        alert('name is empty');
        name.focus();
        return false;
    };

    if(name.value.trim().length < 3){
        alert('name is should be more than 3 char');
        name.focus();
        name.value= '';
        return false;
    };

    if(!prise.value){
        alert('prise is empty');
        prise.focus();
        return false;
    }

    if(!Number(prise.value)){
        alert('prise is should be number');
        prise.focus();
        return false;
    }

    if(!category.value){
        alert('category is empty');
        category.focus();
        return false;
    }


   return true;  
}


export {validate};