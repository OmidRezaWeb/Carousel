window.onload = function(){
    const image = document.getElementById('image');
    const img = document.querySelectorAll('#image img');
    let idx = 0;
    function run() {
        idx++;
        if (idx > img.length - 1)
            idx = 0
        image.style.transform = `translateX(${-idx * 300}px)`

    }
    setInterval(run, 2000);
}