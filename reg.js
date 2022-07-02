function getNumberOrString(value) {
    // Convert a string value to a number if possible
    let number_value = Number(value);
    if (Number.isNaN(number_value)) {
        return value
    } else {
        return number_value
    }
}



document.getElementById('add-button').addEventListener('click', (event) => {
    let element_container = document.getElementById('container');
    let new_li = document.createElement('li');
    let new_div = document.createElement('div');
    let new_span = document.createElement('span');
    new_span.innerText = 'Name: ';

    new_div.appendChild(new_span);
    let new_span2 = document.createElement('span');
    new_span2.innerText = getNumberOrString(document.getElementById('name').value);

    new_div.appendChild(new_span2);

    new_li.appendChild(new_div);
    let new_div2 = document.createElement('div');
    let new_span3 = document.createElement('span');
    new_span3.innerText = 'age: ';

    new_div2.appendChild(new_span3);
    let new_span4 = document.createElement('span');
    new_span4.innerText = getNumberOrString(document.getElementById('age').value);

    new_div2.appendChild(new_span4);

    new_li.appendChild(new_div2);
    let new_div3 = document.createElement('div');
    let new_span5 = document.createElement('span');
    new_span5.innerText = 'Course:  ';

    new_div3.appendChild(new_span5);
    let new_span6 = document.createElement('span');
    new_span6.innerText = getNumberOrString(document.getElementById('course').value);

    new_div3.appendChild(new_span6);

    new_li.appendChild(new_div3);
    let new_div4 = document.createElement('div');
    let new_img = document.createElement('img');
    new_img.setAttribute("src", getNumberOrString(document.getElementById('image').value));

    new_div4.appendChild(new_img);

    new_li.appendChild(new_div4);

    element_container.appendChild(new_li);

});