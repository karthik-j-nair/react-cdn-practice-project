function hero(){

    let scrollDown = React.createElement('p', {id: 'scroll-para'}, ['Scroll Down', React.createElement('i', {className: 'ri-arrow-down-long-line'})])
    let hero1Sub = React.createElement('div', {id: 'hero-1-sub'},[React.createElement('h1',{id: 'hero1-h1'}, 'Hello'), React.createElement('p', {id: 'hero1-p'}, '- its Karthik J Nair a Frontend Developer')]);
    let hero1 = React.createElement('div', {id: 'hero-1'},[hero1Sub, scrollDown]);
    let hero2 = React.createElement('div', {id: 'hero-2'}, React.createElement('img', {src: 'animated-character-2.webp'}));
    return React.createElement('div', {id: 'hero'},[hero1, hero2]);
    
}

export default hero