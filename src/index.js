module.exports = function toReadable (number) {
let str_num = String(number) 
const ones = {'0':'',
    '1': 'one', '2':'two', '3':'three', '4': 'four', '5':'five',
    '6':'six', '7':'seven', '8':'eight', '9': 'nine', '10':'ten',
    '11':'eleven', '12':'twelve', '13':'thirteen', '14':'fourteen', '15':'fifteen',
    '16':'sixteen','17':'seventeen','18':'eighteen','19':'nineteen' };

const teens = {'0':' ', '2':'twenty', '3':'thirty', '4':'forty', '5':'fifty',
                     '6':'sixty', '7':'seventy', '8':'eighty', '9':'ninety'};

   /* const ones = { 0:'zero',
    1: 'one', 2:'two', 3:'three', 4: 'four', 5:'five',
    6:'six', 7:'seven', 8:'eight', 9: 'nine', 10:'ten',
    11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen',
    16:'sixteen',17:'seventeen',18:'eighteen',19:'ninteen' };

const teens = { 20:'twenty', 30:'thirty', 40:'fourty', 50:'fifty',
                     60:'sixty', 70:'seventy', 80:'eughty', 90:'ninty'};*/

const hund = ['hundred','thousand','million'];

if(number === 0){return 'zero'}
if (Number(str_num) < 20){ return ones[str_num]}
else if ( str_num.length == 2 ){ return (teens[str_num[0]]+' '+ones[str_num[1]]).replace(/\s+/g,' ').trim() }
else if (str_num.length == 3 && str_num[1] == 1){return (ones[str_num[0]]+' '+hund[0]+' '+ones[str_num.slice(1)])}   
else if (str_num.length == 3){return (ones[str_num[0]]+' '+hund[0]+' '+teens[str_num[1]]+' '+ones[str_num[2]]).replace(/\s+/g,' ').trim()}
 }
  