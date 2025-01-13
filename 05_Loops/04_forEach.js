const coding = ['cpp', 'js', 'java', 'ruby', 'py']

coding.forEach((element) => {
    console.log(element);
    
});

coding.forEach(function (element) {
    console.log(element);
    
});

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);    
})

const myCoding = [
    {   
        languageName : "javascript",
        languageFileName : "js"
    },
    {   
        languageName : "java",
        languageFileName : "java"
    },
    {   
        languageName : "python",
        languageFileName : "py"
    }
] 

myCoding.forEach( (element) => {
    console.log(element.languageName);
    console.log(element.languageFileName);
})