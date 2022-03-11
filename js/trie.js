function makeNode(character){
    this.character = character;
    this.isterminal = false;
    this.map = {};
    this.word = [];
}

function add(str,i,root){
    if(i === str.length){
        root.isterminal = true;
        return;
    }

    if(!root.map[str[i]]){
        root.map[str[i]] = new makeNode(str[i]);
    }

    root.word.push(str);
    add(str,i+1,root.map[str[i]]);  
}