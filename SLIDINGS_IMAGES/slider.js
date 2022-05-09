var sliderMain=document.getElementById("slider-main");
    var item=sliderMain.getElementsByClassName("item");

    function next()
    {
        sliderMain.append(item[0]);
    }
    function prev()
    {
        sliderMain.prepend(item[item.length-1])
    }