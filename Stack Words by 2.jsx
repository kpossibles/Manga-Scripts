function stackWordsBy2(obj)
{
    // stacks all of the words into a single column (2 words wide)
    var arr = obj.contents.split(' ');
    var newString = "";
    var i=0;
    
    // odd number of words => have 1 word on top for aesthetics
    if(arr.length%2>0){
        newString += arr[0]+"\n";
        i=1;
    }
    
    for(i;i<arr.length;i+=2){
        // automatically assume 2 short words (most cases)
        var tmp = arr[i]+" "+arr[i+1]+"\n";
        // You can change longWordLength to whatever character length you decide is "too long"
        var longWordLength = 10;

        // last word in sentence/paragraph
        if(arr[i+1]==undefined){
            tmp = arr[i];
        } 
        // checks if either word is too long with longWordLength & LONG word gets its own line
        else if(arr[i].length > longWordLength || (arr[i+1]!=undefined && arr[i+1].length >longWordLength)){
            // 1st word is LONG
            if(arr[i].length > longWordLength){
                // Both words are LONG
                if(arr[i+1]!=undefined && arr[i+1].length >longWordLength){
                    tmp = arr[i]+"\n"+arr[i+1]+"\n";
                } 
                // cases for LONG word + SHORT word
                else if(arr[i+2]==undefined){
                    //long word
                    // short word (w/o newline)
                    tmp = arr[i]+"\n"+arr[i+1];
                } else if(arr[i+2]!=undefined && arr[i+2].length < longWordLength){
                    // long word
                    // short word + short word
                    tmp = arr[i]+"\n"+arr[i+1]+" "+arr[i+2]+"\n";
                    i++;
                } else if(arr[i+2]!=undefined && arr[i+2].length > longWordLength){
                    // long word
                    // short word
                    // long word
                    tmp = arr[i]+"\n"+arr[i+1]+"\n"+arr[i+2]+"\n";
                    i++;
                }
            } 
            // 1st word is SHORT; 2nd word is LONG
            else if (arr[i+1]!=undefined && arr[i+1].length >longWordLength) {
                tmp = arr[i]+"\n"+arr[i+1]+"\n";
            }
            
        }
        newString+=tmp;
    }

    obj.contents = newString;
    
}

stackWordsBy2(app.selection[0])