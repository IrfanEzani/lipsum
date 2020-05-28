const input = document.getElementById('input');
const output = document.getElementById('output');
const btn = document.getElementById('btn');

let ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo pretium tempor. Fusce rutrum est sed tortor euismod, eget fermentum urna vehicula. Donec leo lorem, consectetur id blandit non, consectetur et nunc. Integer sed tincidunt justo. Mauris fringilla molestie sem, eu faucibus risus. Cras lobortis diam vel mauris condimentum, et vulputate magna placerat. In vitae posuere erat.\nEtiam vehicula ex nunc, id cursus sem blandit feugiat. In vitae arcu quis erat molestie ornare. Proin hendrerit euismod tortor, non aliquet eros efficitur non. Donec sit amet ultrices libero, sit amet lobortis orci. Sed ipsum lectus, bibendum sit amet fermentum quis, tincidunt ac sem. Maecenas ac vehicula magna.\n Donec porta placerat massa vel scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus dictum at nisl sit amet sodales. Praesent ac mauris tempor, sodales turpis sit amet, venenatis massa. Nam vitae ex tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum accumsan libero.\nOrci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In posuere suscipit ipsum, eu cursus arcu egestas vel. Aliquam aliquam, nisl sit amet fringilla molestie, diam eros sodales lectus, quis auctor est mauris nec nisi. Pellentesque auctor magna quis odio fringilla feugiat. Donec iaculis lorem ut nisi convallis dapibus.\n Integer semper nunc suscipit luctus aliquam. In eget mauris pulvinar, rhoncus ipsum vel, condimentum ante. Suspendisse commodo scelerisque nunc, non suscipit massa blandit eget.\nSed aliquet urna eget mauris auctor, sit amet blandit urna eleifend. Proin aliquet sem nibh, bibendum faucibus enim ultricies ut. Pellentesque ligula ante, elementum in purus et, convallis finibus velit. Integer blandit, mauris at egestas lobortis, diam est vehicula nisi, ac laoreet justo tellus at ex. Donec lorem ligula, suscipit sit amet diam non, gravida viverra sapien. \n Curabitur non velit nec diam tempor elementum vel id nisi. Donec aliquet lectus non justo ultrices tincidunt. Nam eu velit eros. Duis ultrices tortor in magna blandit, vitae molestie diam laoreet. Praesent at libero nibh. \nIn ac justo lacus. Phasellus sapien nisi, laoreet vitae aliquet ornare, hendrerit non urna. In ac nulla suscipit, consequat dui in, auctor mauris. Quisque malesuada iaculis elit at malesuada. Aliquam luctus, lectus a dictum pretium, eros ipsum faucibus urna, quis consequat quam odio a mi. Praesent commodo quis libero ut pulvinar. In sit amet metus vel leo vestibulum cursus. Sed ligula metus, pretium vel fringilla ac, posuere non massa. In non augue fermentum, sodales eros et, tempus ex.\n Nam volutpat risus vel ex condimentum facilisis. Praesent ut est ut magna venenatis cursus. Nulla et ornare urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum bibendum elit ac auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed at enim nec turpis ultrices pharetra. Sed id lacus hendrerit, fringilla mauris eu, ultrices turpis \n Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent quis enim vitae odio sollicitudin tincidunt eget non turpis. Proin mi diam, pellentesque id tristique tincidunt, lacinia pellentesque tellus. Quisque suscipit sem ac dui varius accumsan. Donec lobortis faucibus felis, vel convallis lacus condimentum vel.\n Cras nisi augue, bibendum sed metus ac, venenatis porttitor nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. In non ornare ante. Proin aliquam efficitur arcu, sit amet scelerisque eros imperdiet sed. In aliquet velit vel elit fringilla, ut laoreet metus mollis. In ut elit purus. Etiam rhoncus ipsum nec turpis imperdiet sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. \n Vestibulum at sollicitudin nulla, in viverra risus. Donec cursus tellus sit amet ligula pharetra, quis euismod nulla ultrices. Proin ut laoreet sapien. Integer metus leo, porta a ante a, laoreet semper nisl. Ut porta mi tristique, aliquam elit vel, congue nisl. Sed ut tortor non erat tempor porta. Duis viverra varius commodo. Quisque volutpat leo velit, at ornare eros tempor non. Pellentesque nec lorem malesuada, dictum sapien sit amet, condimentum tortor."

ipsum = ipsum.split('\n')
console.log(ipsum)
btn.addEventListener('click', () => {
    if (output.value !== null) {
        output.value = "";
    }

    var generated = '';
   // output.innerText += input.value;
    console.log(input.value)

    for (var i = 0; i < input.value; i++) {
        output.value += (ipsum[i] + '\n\n');
    }
    return;
})

function copy() {
    /* Get the text field */
    var copyText = document.getElementById("output");
    var copiedBox = document.getElementById('p')
    /* Select the text field */
    copyText.select(); 
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    copiedBox.classList.remove('none')
    setTimeout(()=> {
        copiedBox.classList.add('none');
    },1000)
  }

