// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());

    var adapter = new MemoryAdapter();
    adapter.initialize().done(function () {
        renderHomeView();
    });


    /* --------------------------------- Event Registration -------------------------------- */


    /* ---------------------------------- Local Functions ---------------------------------- */
    function findByName() {
        adapter.findByName($('.search-key').val()).done(function (employees) {
            $('.employee-list').html(employeeLiTpl(employees));
        });
    }

    function renderHomeView() {
        $('.search-key').on('keyup', findByName);
    }

}());
