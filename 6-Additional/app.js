window.foo = Foo;
import Foo from './foo'; // cannot resolve file
import Bar from './bar';
window.bar = Bar; // bad practice use global const
$(document).ready( ()=>
{
    $('.slider').mouseenter(function() {
  let _message = 'qwerty';
   console.log(_message);
    }) // ;
    $('.slider').mouseleave(function ()
    {
       var message = 'qwerty'; // let?
       console.log(message);
    }) ;$('.bar').click( function( )>{ //  delete this '>'
        const msg = window.bar.get();
        console.log(msg)  ;
}), // ;
}) // ;
