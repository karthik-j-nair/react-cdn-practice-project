function navbar(){
    let image = React.createElement('img', {src: './wolf.png'});
    let anchor1 = React.createElement('a', {className: 'anchor-tag', href: '#', key: '1'}, "About Me");
    let anchor2 = React.createElement('a', {className: 'anchor-tag', href: '#', key: '2'}, "Portfolio");
    let anchor3 = React.createElement('a', {className: 'anchor-tag', href: '#', key: '3'}, "Services");
    let elemDiv = React.createElement('div', {id: 'elem-div'}, [anchor1, anchor2, anchor3])
    let navPart1 = React.createElement('div', {id: 'nav-logo-elems'}, [image, elemDiv]);
    let anchorBookCall = React.createElement('a', {className: 'anchor-tag', href: '#'}, "Book A Call");
    let upRightArrowIcon = React.createElement('i', {className: 'ri-arrow-right-up-long-line'})
    let navPart2 = React.createElement('div', {id: 'nav-book-call'}, [anchorBookCall, upRightArrowIcon]);


    return React.createElement('nav', {id: 'navbar'}, [navPart1, navPart2]);
}

export default navbar