const indentifier = (name, shirt, assets, liability) => {
    const person = {

        name :name,
        shirt: shirt,
        assets:assets,
        liability:liability,
        networth: function(){
        return this.assets - this.liability
        }

    }
    const out = `hello my name is ${person.name} and my shirt color is ${person.shirt} and my networth is ${person.networth()}`;
    console.log(out)
} 
indentifier("ThanOs", "purple",20000,500)