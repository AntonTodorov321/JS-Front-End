function pascalCase(text){
    let regex = /([A-Z][a-z]*)/gm;
    let result = text.match(regex);

    console.log(result.join(", "));
}

pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');