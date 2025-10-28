/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
   let prefix = strs[0]; 
   let prefixLen = prefix.length;

   for (let i = 1; i < strs.length; i++) {
      let s = strs[i];

      while (s.substring(0, prefixLen) !== prefix) { 
         prefixLen--;
         if (prefixLen === 0) {
            return "";
         }
         prefix = prefix.substring(0, prefixLen);
      }
   }
   return prefix
}