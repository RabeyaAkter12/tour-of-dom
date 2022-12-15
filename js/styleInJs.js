const sections = document.querySelectorAll("section");
for( const section of sections){
    // console.log(section);
    section.style.border = "2px solid blue";
    section.style.marginBottom = "7px";
    section.style.paddingLeft = "7px";
    section.style.borderRadius = "15px";
    section.style.backgroundColor = "rgb(191, 233, 223)";
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = "gray";

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center')
placesContainer.classList.remove('large-text')
