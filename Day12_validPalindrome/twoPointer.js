var isPalindrome = function (s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {

        while (i < j && !isAlphaNum(s[i])) i++;
        while (i < j && !isAlphaNum(s[j])) j--;

        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }

        i++;
        j--;
    }

    return true;
};

function isAlphaNum(ch) {
    return (
        (ch >= 'a' && ch <= 'z') ||
        (ch >= 'A' && ch <= 'Z') ||
        (ch >= '0' && ch <= '9')
    );
}
