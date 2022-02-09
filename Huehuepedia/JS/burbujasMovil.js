//const newRadio = 50;
const newWidth = [160, 150, 300, 150, 280, 130, 190, 270];
const newHeight = [440, 570, 380, 300, 190, 180, 70, 500];
const newWidthVersion = [150, 150, 250, 135, 250, 130, 190, 250];
const newHeightVersion = [440, 560, 350, 300, 190, 180, 70, 500];
const widthdd = screen.width;
//const height = window.innerHeight;
console.log(widthdd);

if (widthdd < 450 && widthdd > 360) {
    for (let i = 1; i <= 6; i++) {
        let g = document.getElementById(i);
        g.setAttribute('transform', `translate(${newWidth[i-1]}, ${newHeight[i-1]})`);
        console.log(g.getAttribute('transform'));
        let circle = document.getElementById(`${i}.${i}`);
        circle.setAttribute('r','50');
    }
}
else if (widthdd < 360) {
    for (let i = 1; i <= 6; i++) {
        let g = document.getElementById(i);
        g.setAttribute('transform', `translate(${newWidthVersion[i-1]}, ${newHeightVersion[i-1]})`);
        console.log(g.getAttribute('transform'));
        let circle = document.getElementById(`${i}.${i}`);
        circle.setAttribute('r','50');
    }
}