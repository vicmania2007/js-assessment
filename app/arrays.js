exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
      var index = arr.indexOf(item);
      return index;
  },

  sum : function(arr) {
      var sum = 0;
      var size = arr.length;
      for (i=0; i<size; i++) {
          sum = sum + arr[i];
      }
      return sum;
  },

  remove : function(arr, item) {
      var filtered = arr.filter(function(element){
          return element !== item;
      });
      return filtered;
  },

  removeWithoutCopy : function(arr, item) {
  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
