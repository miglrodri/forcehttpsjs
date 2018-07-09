// Force Http JS
// V: 0.1


//console.log("current protocol: ", location.protocol);
if (location.protocol != 'https:')
{
    //console.log("gonna load secure site version");
    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}