
function isVowel(letter) {
    const vowels = 'аеёиоуыэюяАЕЁИОУЫЭЮЯaeiouyAEIOUY';
    return vowels.includes(letter);
}



function VowelLetters(str){
    let result = 0;
    for (let i = 0; i<str.length; i++){
        if (isVowel(str[i])){
            result += 1;
        }
    }
    return result
}