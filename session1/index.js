let $no = document.getElementById('no');
let $answers = document.getElementById('answers');
 $no.addEventListener('mouseenter', function (){
     $answers.classList.toggle("reverse")
 })
//  import hello, {helloByThai, helloByVietnamese, PI} from "./hello.js"
//  hello();
//  helloByThai();
//  helloByVietnamese();
import _ from "./hello.js"
_() /*đặt tên bất kỳ cho function => {} để có thể gọi khi import 1 export default*/
