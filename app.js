'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click',function(){
    document.body.classList.toggle('dark-theme')
    var className = document.body.className;
    if(className=="light-theme"){
        this.testContent ="Dark";
    }
    else{
        this.testContent ="Light";
    }
    console.log('current class name: ' + className);
});
