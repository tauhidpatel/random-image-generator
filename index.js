// For random images
const random_result = document.getElementById("random_result");
const btn_random = document.getElementById("btn_random");

btn_random.addEventListener('click', function getRandom() {
    fetch('https://picsum.photos/200/300?random=1')
    // .then(res => res.json())
    .then(data => {
        random_result.innerHTML = `<img src=${data.url} />`
    });
});

// For Grey Scale images
const grey_result = document.getElementById("grey_result");
const btn_grey = document.getElementById("btn_grey");

btn_grey.addEventListener('click', function getGrayScale() {
    fetch('https://picsum.photos/200/300?grayscale')
    // .then(res => res.json())
    .then(data => {
        grey_result.innerHTML = `<img src=${data.url} />`
    });
});

// For Blur images
const blur_result = document.getElementById("blur_result");
const btn_blur = document.getElementById("btn_blur");

btn_blur.addEventListener('click', function getBlur() {
    fetch('https://picsum.photos/200/300?blur')
    // .then(res => res.json())
    .then(data => {
        blur_result.innerHTML = `<img src=${data.url} />`
    });
});