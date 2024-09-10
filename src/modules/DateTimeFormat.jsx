export default function TimeFormatter(value) {
    var date = new Date(value);
    var hours = date.getHours();
    var minutes = leadZero(date.getMinutes());
  
    return hours + ':' + minutes;
  }
 export function DateFormatter(value) {
    var date = new Date(value);
    var years = date.getFullYear();
    var months = leadZero(date.getMonth() + 1);
    var days = leadZero(date.getDate());
  
    return years + '-' + months + '-' + days;
  }
  function leadZero(n) { return n>9 ? n : "0" + n; }