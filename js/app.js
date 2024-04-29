/**
 * 
 * @param {NodeList} elmts selected elements from HTML to add events
 * @param {string} event event type e.g 'click', 'mouseenter'...
 * @param {function} callback callback function to be executed when event is triggered
 */

export function eventOnElmts(elmts, event, callback) {
    for(const elmt of elmts){
        elmt.addEventListener(event, callback); 
    }
}


// 콜백함수 = 함수안에 또하나의 파라미터 함수를 쓰는것