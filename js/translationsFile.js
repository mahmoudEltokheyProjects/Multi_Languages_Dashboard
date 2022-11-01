// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Multi-Languages Page +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
const translations = {
    /* ++++++++++++++++++++++++++++++++++++++++++ English Language ++++++++++++++++++++++++++++++++++++++++++ */
    en:{
        /* ///////////////////// navbar section ///////////////// */
        notificationNum : '6' ,
        notificationText : "Lorem, ipsum dolor sit amet consectetur adipisicing elit." ,
        /* ------ Avatar image ------ */
        avatarDropdownText1:"Profile",
        avatarDropdownText2:"Settings",
        avatarDropdownText3:"payments",
        avatarDropdownText4:"logout",
        /* /////////////// content section ///////////////////////// */
        /* +++++++++ sidebar section +++++++++ */
        /* ---- sidebar item ---- */
        sidebarDashboard:"dashboard",
        sidebarAnalytic:"analytic",
        sidebarOrganization:"Organization",
        sidebarEmployees:"Employees",
        sidebarCalendar:"Calendar",
        sidebarReports:"Reports",
        sidebarFiles:"Files",
        sidebarDirectory:"Directory",
        sidebarElements:"Elements", 
        sidebarMore:"more" ,
        /* /////////////// wrapper section /////////////// */
        /* ---- row 1 : statistics ----  */
        wrapperTaskDesc:"To Do" ,
        wrapperProgressDesc:"In Progress",
        wrapperCompletedDesc:"Completed" ,
        wrapperIssueDesc:"Issues" ,
        /* ---- row 2 : table : head row ---- */
        tableHeadId:"id",
        tableHeadAvatar:"Avatar",
        wrapperHeadName:"Name",
        wrapperHeadStatus:"Status",
        wrapperHeadProgress:"Target Achievement",
        wrapperHeadAction:"Actions",        
        // columns1 : id 
        wrapperRowId1:"#01" ,
        wrapperRowId2:"#02" ,
        wrapperRowId3:"#03" ,
        wrapperRowId4:"#04" ,
        wrapperRowId5:"#05" ,
        wrapperRowId6:"#06" ,
        /* column2 : Names  */
        wrapperRowName1:"Ahmed Mohammed",
        wrapperRowName2:"Sayed Moaud"   ,
        wrapperRowName3:"Khalid Osama"  ,
        wrapperRowName4:"Kariem Foaud"  ,
        wrapperRowName5:"Tamer Hosny"   , 
        wrapperRowName6:"Sayed Ismail"  ,
        /* column3 : Status  */
        wrapperStatus1:"Accepted"  ,
        wrapperStatus2:"Cancelled" ,
        /* column4 : actions */
        wrapperActionBtn1:"Hire",
        wrapperActionBtn2:"Fire",
        /*  ------- Languages Box  -------  */
        englishLang:"English" ,
        arabicLang:"Arabic"
    },
    /* ++++++++++++++++++++++++++++++++++++++++++ Arabic Language ++++++++++++++++++++++++++++++++++++++++++ */
    ar:{
        /* ///////////////////// navbar section ///////////////// */
        notificationNum : '6' ,
        notificationText : "السلام عليكم كيف احوالكم اريد شراء منتج باقل سعر واعلي جودة" ,
        /* ------ Avatar image ------ */
        avatarDropdownText1:"الصفحة الشخصية",
        avatarDropdownText2:"الاعدادات",
        avatarDropdownText3:"المدفوعات",
        avatarDropdownText4:"خروج",
        /* /////////////// content section ///////////////////////// */
        /* +++++++++ sidebar section +++++++++ */
        /* ---- sidebar item ---- */
        sidebarDashboard:"لوحة التحكم",
        sidebarAnalytic:"الاحصائيات",
        sidebarOrganization:"التنظيم",
        sidebarEmployees:"الموظفين",
        sidebarCalendar:"التقويم",
        sidebarReports:"التقرير",
        sidebarFiles:"الملفات",
        sidebarDirectory:"الدليل",
        sidebarElements:"العناصر",
        sidebarMore:"أكثر" , 
        /* /////////////// wrapper section : table /////////////// */
        /* ---- row 1 : statistics ----  */
        wrapperTaskDesc:"ماذا يجب ان تفعل" ,
        wrapperProgressDesc:"في تقدم",
        wrapperCompletedDesc:"تم الانتهاء" ,
        wrapperIssueDesc:"المشاكل",
        /* ---- row 2 : table ---- */
        // head row data
        tableHeadId:"الهوية الشخصية",
        tableHeadAvatar:"الصورة",
        wrapperHeadName:"الاسم",
        wrapperHeadStatus:"الحالة",
        wrapperHeadProgress:"الاهداف المحققة",
        wrapperHeadAction:"الأجراءات",      
        // columns1 : id 
        wrapperRowId1:"01#" ,
        wrapperRowId2:"02#" ,
        wrapperRowId3:"03#" ,
        wrapperRowId4:"04#" ,
        wrapperRowId5:"05#" ,
        wrapperRowId6:"06#" ,
        /* columns2 : Names  */
        wrapperRowName1:"أحمد محمد",
        wrapperRowName2:"سيد معوض",
        wrapperRowName3:"خالد أسامة",
        wrapperRowName4:"كريم فؤاد",
        wrapperRowName5:"تامر حسني",
        wrapperRowName6:"سيد إسماعيل",
        /* columns3 : Status  */
        wrapperStatus1:"مقبول" ,
        wrapperStatus2:"ملغي" ,
        /* column4 : actions */
        wrapperActionBtn1:"يؤجر",
        wrapperActionBtn2:"يفٌصل",
        /*  ------- Languages Box  -------  */
        englishLang:"الانجليزية" ,
        arabicLang:"العربية"
    }
};
/* +++++++++++++++++++++++++++ Change Page Language +++++++++++++++++++++++++++ */
var languageSelector = document.querySelector("select");
languageSelector.addEventListener("change",function(eventPara){
    /* eventPara.target.value == هي اللغة اللي انا اخترتها */
    //  selectBox وهبعت لها اللغة اللي انا اخترتها من ال selectedLang هنادي علي الدالة
    selectedLang(eventPara.target.value);
    /* +++++++++++++++++++++++++++ Store "selectLanguage" in the Browser +++++++++++++++++++++++++++ */
    // store the selected language in local storage of browser 
    localStorage.setItem("lang",eventPara.target.value);
});
/* +++++++++++++++++ When page load , Get the page language from LocalStorage of Browser +++++++++++++++++++++++++++ */
/* بتاعت المتصفح ثم لما الصفحة تحصل لها تحميل هيجيب قيمة اللغة  localStorage هخزن اللغة اللي العميل اخترها للصفحة في ال
   selectedLang اللي المستخدمها اخترها وهبعتها للدالة
*/
document.addEventListener("DOMContentLoaded",function(){
    // هيجيب اخر لغة اختر المستخدمها وهيبعتا للدالة
    selectedLang( localStorage.getItem("lang") );
});
/* +++++++++++++++++++++++++++ change elements Language +++++++++++++++++++++++++++ */
// "language" = the parameter that send to the "selectedLang" Function
const selectedLang = function(language)
{
    /* ////////// return all elements that have "data-lang" attribute ////////// */
    const elements = document.querySelectorAll("[data-lang]");
    /* همشي عليهم عنصر عنصر وهغير النص بتاعه حسب اللغة */
    elements.forEach( function(element){
        /* data-lang بتاع كل عنصر من العناصر اللي ليه data-lang هجيب قيمة ال */
        const translationsKey = element.getAttribute('data-lang');
        /* هيغير محتوي كل عنصر حسب اللغة اللي تم اختارها */
        element.textContent = translations[language][translationsKey]; 
    });
    /* +++++++++++++++++++++++++++ Change Page Direction +++++++++++++++++++++++++++ */
    // Arabic Language Direction
    if( language == "ar" )
    {
        document.dir = "rtl" ;
        /* change the innerHtml of Language Button */
        document.querySelector(".selected-lang").innerHTML = "العربية" ;
        document.querySelector(".lang-menu   .selected-lang::before").css
    }
    // English Language Direction
    else
    {
        document.dir = "ltr" ;   
        document.querySelector(".selected-lang").innerHTML = "English" ;
    }
} 