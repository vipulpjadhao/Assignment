const firstUniqueChar = function(s) {
    const charCount = {};
    
  
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charCount[char] === 1) {
            return i;
        }
    }
    
    return -1; 
};

const s1 = "leetcode";
console.log(firstUniqueChar(s1)); 

const s2 = "loveleetcode";
console.log(firstUniqueChar(s2)); 

const s3 = "aabb";
console.log(firstUniqueChar(s3)); 
