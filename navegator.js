"use strict";

const navegator = document.getElementById('mainNav');
const navOptions = Array.from(navegator.getElementsByTagName('a'));
const mainSections = Array.from(document.getElementsByTagName('main'));

navOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`Has seleccionado ${option.innerText}`);
        mainSections.forEach(option => {
            option.classList.add('hidden');
        });
        changeSection(option.innerText);
    })
});

function changeSection(sectionName) {
    let section = document.getElementById(sectionName.toLowerCase());
    section.classList.toggle('hidden');
    let logo = document.getElementById('logo');
    if(logo.classList.contains('hidden'))   logo.classList.remove('hidden');
    logo.setAttribute('src', `img/${sectionName.toLowerCase()}-logo.png`)
    let title = document.getElementById('title');
    title.innerText = `${sectionName} documentation`;
}

function changeCss(sectionName) {
    let css = document.getElementById('styles');
    css.setAttribute('href', '');
}
