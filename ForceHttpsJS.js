// Force Http JS
// V: 0.1

// window.onload appears to be the most widely supported. In fact, some of the most modern browsers have in a sense replaced document.onload with window.onload. Browser support issues are most likely the reason why many people are starting to use libraries such as jQuery to handle the checking for the document being ready like so:

// $(document).ready(function() { /* code here */ });
// $(function() { /* code here */ });


//console.log("current protocol: ", location.protocol);
if (location.protocol != 'https:')
{
    //console.log("gonna load secure site version");
    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}