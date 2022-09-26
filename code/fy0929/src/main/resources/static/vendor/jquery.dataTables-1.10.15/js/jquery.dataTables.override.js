+(function() {
    function setting() {
        var setting = {
            searching : false,
            filter : false,
            sort : false,
            dom : 'rt<"data-tables-footer"<"data-tables-footer-item"il><"data-tables-footer-item"p>>',

            lengthMenu : [10, 15, 30, 50],
            processing : true,
            serverSide : true,
            ajaxDataProp : 'resultList',
            deferRender : true,

            language : {
                processing : "载入中",
                emptyTable : "没有找到记录",
                lengthMenu : "&nbsp;&nbsp;每页_MENU_",
                info : "第 _PAGE_ 页 ( 共 _PAGES_ 页 / _TOTAL_ 条记录)",
                infoEmpty : "无记录",
                paginate : {
                    last : "末页",
                    first : "首页",
                    previous : "上一页",
                    next : "下一页"
                }
            }
        };
        $.extend(true, $.fn.dataTable.defaults, setting);

        $.fn.dataTable.ext.classes.sLengthSelect = "custom-select form-control-sm";
        $.fn.dataTable.ext.classes.sWrapper = "dataTables_wrapper dt-bootstrap4";
    }

    function override() {
    }

    function init() {
        if (typeof jQuery === 'undefined') throw new Error('Datatable Override\'s JavaScript requires jQuery.');
        if (typeof jQuery.fn.dataTable === 'undefined')
            throw new Error('Datatable Override\'s requires Datatable Plugin.');

        setting();
        override();
    }
    init();

})(jQuery);