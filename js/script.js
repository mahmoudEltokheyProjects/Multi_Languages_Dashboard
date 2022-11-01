/* //////////////////////////////////////////////////////////// Loader ////////////////////////////////////////////////////////////  */
function myFunction() 
{
    /* show "container page" after 3 second  */
    myVar = setTimeout(showPage, 3000);
}  
function showPage() 
{   
    /* hide loader */
    document.getElementById("loader").style.display = "none";
    /* show "container page"  */
    document.getElementById("myDiv").style.display = "block";
}
var myVar;
function myFunction() 
{
  myVar = setTimeout(showPage, 3000);
}
/* //////////////////////////////////////////////////////////// navbar section //////////////////////////////////////////////////////////// */
/* ******************************** right part ******************************** */
// ++++++++++ notification and avatar : dropdown-menu ++++++++++
var notificationElem = document.querySelector(".notification") ,
    avatarElem = document.querySelector(".avatar") ,
    langMenuElem = document.querySelector(".lang-menu");
// function call 
dropMenu( notificationElem );
dropMenu( avatarElem );
dropMenu( langMenuElem );
// function definition
function dropMenu( elementSelector )
{
    // when click on "notification" or "avatar"
    elementSelector.addEventListener("click",function(){
        // when click on "notification" or "avatar" , return dropdownMenu of the clicked element
        let dropdownMenuElem = elementSelector.querySelector(".dropdown");
        /* if dropdownMen contains class "active" , then remove it from dropdownMenu Element  */
        /* if dropdownMen Not contains class "active" , then add it from dropdownMenu Element */
        if( dropdownMenuElem.classList.contains("active") )
        {
            dropdownMenuElem.classList.remove("active");
        }
        else
        {
            dropdownMenuElem.classList.add("active");
        }
    });
}
/* //////////////////////////////////////////////////////////// Toggle Mode : dark-mode , light-mode //////////////////////////////////////////////////////////// */
var modeElem = document.querySelector(".mode");
// when click on "dark-mode" icon 
modeElem.addEventListener("click",function(){
    // if <body></body> contains class "dark" then remove it , else add it
    if ( document.body.classList.contains("dark") )
    {
        document.body.classList.remove("dark");
        // replace the mode-icon from "sun" to "moon"
        document.querySelector(".mode i").classList.replace("fa-sun","fa-moon");
    }
    else
    {
        document.body.classList.add("dark");
        // replace the mode-icon from "sun" to "moon"
        document.querySelector(".mode i").classList.replace("fa-moon","fa-sun")
    }
});

/* //////////////////////////////////////////////////////////// content section //////////////////////////////////////////////////////////// */
/* +++++++++++++++++++ sidebar section +++++++++++++++++++  */
var sidebarElem = document.querySelector(".sidebar") , 
    menubarElem = document.querySelector(".menubar") ;
// when click on 'menubar icon" , sidebar width fully displayed
menubarElem.addEventListener("click",function(){
    if( sidebarElem.classList.contains("active") )
    {
        sidebarElem.classList.remove("active");
    }
    else
    {
        sidebarElem.classList.add("active");
    }
});
/* +++++++++++++++++++ wrapper section +++++++++++++++++++  */
/* ////////////// row 3 : chart ////////////// */
var visitors = [ 800 , 320 , 190 , 250 , 400 , 600       ] ,
    hired    = [ 502 , 203 , 70 , 200 , 350 , 400        ] ,
    years    = [ 2015 , 2016 , 2017 , 2018 , 2019 , 2020 ] ;

// apexcharts js library
var options = {
    chart: {
    /* =============== type in the series =============== */
    /* اللي عايز ارسممه chart نوع ال */
        type: 'area' ,
        // chart width
        width: '100%' ,
        // chart height
        height: '100%'
    },
    // =============== series =  mountains =============== */
    series: [
        /* ++++++++++++++ mountain 1 ++++++++++++++ */
        {
            type : 'area'     ,
            name : 'Visitors' ,
            data : visitors
        } ,
        /* ++++++++++++++ mountain 1 ++++++++++++++ */
        {
            type : 'area'  , 
            name : 'Hired' ,
            data: hired
        }
    ],
    // =============== x-axis of chart =============== */
    xaxis: {
      categories: years
    } ,
    // =============== colors of chart =============== */
    colors:['#43a047', '#e65245']
  }
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();