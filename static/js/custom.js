$(function() {
    "use strict";

    $(".preloader").fadeOut();
    // ==============================================================
    // sidebar-hover
    // ==============================================================

    $(".left-sidebar").hover(
        function() {
            $(".navbar-header").addClass("expand-logo");
        },
        function() {
            $(".navbar-header").removeClass("expand-logo");
        }
    );
    // this is for close icon when navigation open in mobile view
    $(".nav-toggler").on('click', function() {
        $("#main-wrapper").toggleClass("show-sidebar");
        $(".nav-toggler i").toggleClass("ti-menu");
    });
    $(".search-box a, .search-box .app-search .srh-btn").on('click', function() {
        $(".app-search").toggle(200);
        $(".app-search input").focus();
    });

    // ==============================================================
    // Right sidebar options
    // ==============================================================
    $(function() {
        $(".service-panel-toggle").on('click', function() {
            $(".customizer").toggleClass('show-service-panel');

        });
        $('.page-wrapper').on('click', function() {
            $(".customizer").removeClass('show-service-panel');
        });
    });
    // ==============================================================
    // This is for the floating labels
    // ==============================================================
    $('.floating-labels .form-control').on('focus blur', function(e) {
        $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

    // ==============================================================
    //tooltip
    // ==============================================================
    $(function() {
            $('[data-toggle="tooltip"]').tooltip()
        })
        // ==============================================================
        //Popover
        // ==============================================================
    $(function() {
        $('[data-toggle="popover"]').popover()
    })

    // ==============================================================
    // Perfact scrollbar
    // ==============================================================
    $('.message-center, .customizer-body, .scrollable').perfectScrollbar({
        wheelPropagation: !0
    });

    /*var ps = new PerfectScrollbar('.message-body');
    var ps = new PerfectScrollbar('.notifications');
    var ps = new PerfectScrollbar('.scroll-sidebar');
    var ps = new PerfectScrollbar('.customizer-body');*/

    // ==============================================================
    // Resize all elements
    // ==============================================================
    $("body, .page-wrapper").trigger("resize");
    $(".page-wrapper").delay(20).show();

    // ==============================================================
    // Collapsable cards
    // ==============================================================
    $('a[data-action="collapse"]').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.card').find('[data-action="collapse"] i').toggleClass('ti-minus ti-plus');
        $(this).closest('.card').children('.card-body').collapse('toggle');
    });
    // Toggle fullscreen
    $('a[data-action="expand"]').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.card').find('[data-action="expand"] i').toggleClass('mdi-arrow-expand mdi-arrow-compress');
        $(this).closest('.card').toggleClass('card-fullscreen');
    });
    // Close Card
    $('a[data-action="close"]').on('click', function() {
        $(this).closest('.card').removeClass().slideUp('fast');
    });
    // ==============================================================
    // LThis is for mega menu
    // ==============================================================
    $(document).on('click', '.mega-dropdown', function(e) {
        e.stopPropagation()
    });
    // ==============================================================
    // Last month earning
    // ==============================================================
    var sparklineLogin = function() {
        $('.lastmonth').sparkline([6, 10, 9, 11, 9, 10, 12], {
            type: 'bar',
            height: '35',
            barWidth: '4',
            width: '100%',
            resize: true,
            barSpacing: '8',
            barColor: '#2961ff'
        });

    };
    var sparkResize;

    $(window).resize(function(e) {
        clearTimeout(sparkResize);
        sparkResize = setTimeout(sparklineLogin, 500);
    });
    sparklineLogin();

    // ==============================================================
    // This is for the innerleft sidebar
    // ==============================================================
    $(".show-left-part").on('click', function() {
        $('.left-part').toggleClass('show-panel');
        $('.show-left-part').toggleClass('ti-menu');
    });

    // For Custom File Input
    $('.custom-file-input').on('change',function(){
        //get the file name
        var fileName = $(this).val();
        //replace the "Choose a file" label
        $(this).next('.custom-file-label').html(fileName);
    })
});
//RESPONSE
=========================

{
    "status": true,
    "message": "Success",
    "data": [
        {
            "id": 1,
            "name": "",
            "email": [
                "amitkumarbrya892@gmail.com"
            ],
            "phone": [
                "+91-8210532707"
            ],
            "dob": "",
            "education": "  10thwith an aggregate of approx60%.  10+2 with an aggregate of69.4%.",
            "project": "covid-19,iron men jarwis, mx-player,webpage,restaurant website.extra curricularparticipated in yoga day,nss camp,college committeemy strengthbest communication skills.team leader.time management.ability to work under pressure.languageenglishhindi",
            "experience": "",
            "total_experience": "",
            "raw_skill": "  python,mysql.html,css and javascript",
            "address": {},
            "tech_skill": [],
            "non_tech_skill": [],
            "file": "Update Amit.pdf"
        },
        {
            "id": 2,
            "name": "",
            "email": [
                "amitkumarbrya892@gmail.com"
            ],
            "phone": [
                "+91-8210532707"
            ],
            "dob": "",
            "education": "  10thwith an aggregate of approx60%.  10+2 with an aggregate of69.4%.",
            "project": "covid-19,iron men jarwis, mx-player,webpage,restaurant website.extra curricularparticipated in yoga day,nss camp,college committeemy strengthbest communication skills.team leader.time management.ability to work under pressure.languageenglishhindi",
            "experience": "",
            "total_experience": "",
            "raw_skill": "  python,mysql.html,css and javascript",
            "address": {},
            "tech_skill": [
                "python",
                "html",
                "java",
                "mysql",
                "sql",
                "javascript",
                "css"
            ],
            "non_tech_skill": [
                "time management"
            ],
            "file": "Update Amit(2).pdf"
        }
    ],
    "total_no_of_candidates": 22,
    "filtered_no_of_candidates": 22
}




RESPONSE
=========================

{
    "status": true,
    "message": "Success",
    "data": [
        {
            "id": 1,
            "name": "",
            "email": [
                "amitkumarbrya892@gmail.com"
            ],
            "phone": [
                "+91-8210532707"
            ],
            "dob": "",
            "education": "  10thwith an aggregate of approx60%.  10+2 with an aggregate of69.4%.",
            "project": "covid-19,iron men jarwis, mx-player,webpage,restaurant website.extra curricularparticipated in yoga day,nss camp,college committeemy strengthbest communication skills.team leader.time management.ability to work under pressure.languageenglishhindi",
            "experience": "",
            "total_experience": "",
            "raw_skill": "  python,mysql.html,css and javascript",
            "address": {},
            "tech_skill": [],
            "non_tech_skill": [],
            "file": "Update Amit.pdf"
        },
        {
            "id": 2,
            "name": "",
            "email": [
                "amitkumarbrya892@gmail.com"
            ],
            "phone": [
                "+91-8210532707"
            ],
            "dob": "",
            "education": "  10thwith an aggregate of approx60%.  10+2 with an aggregate of69.4%.",
            "project": "covid-19,iron men jarwis, mx-player,webpage,restaurant website.extra curricularparticipated in yoga day,nss camp,college committeemy strengthbest communication skills.team leader.time management.ability to work under pressure.languageenglishhindi",
            "experience": "",
            "total_experience": "",
            "raw_skill": "  python,mysql.html,css and javascript",
            "address": {},
            "tech_skill": [
                "python",
                "html",
                "java",
                "mysql",
                "sql",
                "javascript",
                "css"
            ],
            "non_tech_skill": [
                "time management"
            ],
            "file": "Update Amit(2).pdf"
        }
    ],
    "total_no_of_candidates": 22,
    "filtered_no_of_candidates": 22
}
