+(function() {
    function option() {
        var option = {
            trigger : 'input change',
            excluded : [],
        };
        $.fn.bootstrapValidator.DEFAULT_OPTIONS = $.extend({}, $.fn.bootstrapValidator.DEFAULT_OPTIONS, option);
    }
    function i18n() {
        /**
         * Traditional Chinese language package Translated by
         * 
         * @tureki
         */
        $.fn.bootstrapValidator.i18n = $.extend(true, $.fn.bootstrapValidator.i18n, {
            base64 : {
                'default' : '请输入有效的Base64编码'
            },
            between : {
                'default' : '请输入不小于%s 且不大于%s 的值',
                notInclusive : '请输入不小于等于%s 且不大于等于%s 的值'
            },
            callback : {
                'default' : '请输入有效的值'
            },
            choice : {
                'default' : '请输入有效的值',
                less : '最少选择 %s 个选项',
                more : '最多选择 %s 个选项',
                between : '请选择 %s 至 %s 个选项'
            },
            date : {
                'default' : '请输入有效的日期'
            },
            different : {
                'default' : '请输入不一样的值'
            },
            digits : {
                'default' : '只能输入数字'
            },
            emailAddress : {
                'default' : '请输入有效的EMAIL'
            },
            file : {
                'default' : '请选择有效的档案'
            },
            greaterThan : {
                'default' : '请输入大于或等于 %s 的值',
                notInclusive : '请输入大于 %s 的值'
            },
            hex : {
                'default' : '请输入有效的16位元码'
            },
            hexColor : {
                'default' : '请输入有效的16位色码'
            },
            id : {
                'default' : '请输入有效的身份证字号码',
                countryNotSupported : '不支援该国家代码%s',
                country : '请输入有效的%s 身份证字号码',
                countries : {
                    BA : '波斯尼亚和黑塞哥维那',
                    BG : '保加利亚',
                    BR : '巴西',
                    CH : '瑞士',
                    CL : '智利',
                    CZ : '捷克',
                    DK : '丹麦',
                    EE : '爱沙尼亚',
                    ES : '西班牙语',
                    FI : '芬兰',
                    HR : '克罗地亚',
                    IE : '爱尔兰',
                    IS : '冰岛',
                    LT : '立陶宛',
                    LV : '拉脱维亚语',
                    ME : '黑山共和国',
                    MK : '马其顿',
                    NL : '荷兰',
                    RO : '罗马尼亚',
                    RS : '塞尔维亚',
                    SE : '瑞典',
                    SI : '斯洛文尼亚',
                    SK : '斯洛伐克',
                    SM : '圣马力诺',
                    ZA : '南非'
                }
            },
            identical : {
                'default' : '请输入一样的值'
            },
            integer : {
                'default' : '请输入有效的整数'
            },
            ip : {
                'default' : '请输入有效的IP位址',
                ipv4 : '请输入有效的IPv4位址',
                ipv6 : '请输入有效的IPv6位址'
            },
            isbn : {
                'default' : '请输入有效的ISBN'
            },
            lessThan : {
                'default' : '请输入小于或等于 %s 的值',
                notInclusive : '请输入小于 %s 的值'
            },
            mac : {
                'default' : '请输入有效的MAC位址'
            },
            notEmpty : {
                'default' : '请填写此字段'
            },
            numeric : {
                'default' : '请输入有效的浮点数'
            },
            phone : {
                'default' : '请输入有效的电话号码',
                countryNotSupported : '不支援该国家代码%s',
                country : '请输入有效的 %s 电话号码',
                countries : {
                    BR : '巴西',
                    ES : '西班牙',
                    FR : '法国',
                    GB : '英国',
                    MA : '摩洛哥',
                    PK : '巴基斯坦',
                    US : '美国'
                }
            },
            regexp : {
                'default' : '请输入有效的值'
            },
            remote : {
                'default' : '请输入有效的值'
            },
            step : {
                'default' : '请输入 %s 个有效步骤'
            },
            stringCase : {
                'default' : '只能输入小写的值',
                upper : '只能输入大写的值'
            },
            stringLength : {
                'default' : '请输入符合长度限制的值',
                less : '请输入小于 %s 个字',
                more : '请输入大于 %s 个字',
                between : '请输入介于 %s 至 %s 个字'
            },
            uri : {
                'default' : '请输入一个有效的链接'
            },
            mobile : {
                'default' : '请输入正确的手机号码'
            }
        });
    }

    function validator() {
        jQuery.fn.bootstrapValidator.validators.positiveInteger = {
            validate : function(validator, $field, options) {
                var val = $field.val().trim();
                if (val == '') return true;
                return /^\d+$/.test(val);
            }
        };
        jQuery.fn.bootstrapValidator.validators.positiveNumeric = {
            validate : function(validator, $field, options) {
                var val = $field.val().trim();
                if (val == '') return true;
                return /^\d+(\.\d+)?$/.test(val);
            }
        };
        jQuery.fn.bootstrapValidator.validators.noZeroPositiveInteger = {
            validate : function(validator, $field, options) {
                var val = $field.val().trim();
                if (val == '') return true;
                return /^[1-9]\d*$/.test(val);
            }
        };
        jQuery.fn.bootstrapValidator.validators.mobile = {
            validate : function(validator, $field, options) {
                var val = $field.val().trim();
                if (val == '') return true;
                return /^1[3|4|5|7|8]\d{9}$/.test(+val);
            }
        };
    }
    function extend() {
        $.fn.bootstrapValidator.Constructor.prototype.resetValidator = function(field, validatorName, property, value) {
            if ((!value && value !== 0) || !property) { throw new Error(
                    "No property & value, U'd better override this Method 'couse it may goes the WRONG WAY !"); }
            var that = this;

            var $fields = $([]);
            switch (typeof field) {
                case "object" :
                    $fields = field;
                    field = field.attr("data-bv-field");
                    break;
                case "string" :
                    $fields = that.getFieldElements(field);
                    break;
                default :
                    break;
            }

            var total = $fields.length;
            if (this.options.fields[field]) {
                for (var i = 0; i < total; i++) {
                    if (that.options.fields[field].validators[validatorName]) {
                        that.options.fields[field].validators[validatorName][property] = value;
                    } else {
                        // Don"t use for validator adding.
                        throw new Error("Can't find validator[" + validatorName + "] in field[" + field + "] !");
                    }
                }
            }
            return that;
        }
    }
    function override() {
        /**
         * Support for bs 4
         */
        $.fn.bootstrapValidator.Constructor.prototype._getMessageContainer = function($field, group) {
            var $parent = $field.parent();
            if ($parent.is(group)) return $parent;

            var cssClasses = $parent.attr('class');
            if (!cssClasses) { return this._getMessageContainer($parent, group); }

            cssClasses = cssClasses.split(' ');
            var n = cssClasses.length;
            for (var i = 0; i < n; i++) {
                // no enough for bootstrap v4.
                // if (/^col-(xs|sm|md|lg)-\d+$/.test(cssClasses[i]) || /^col-(xs|sm|md|lg)-offset-\d+$/.test(cssClasses[i])) { return $parent; }

                // by sleest 2017/08/10
                if (/^col(-auto)?$/.test(cssClasses[i]) || //
                /^col-((xs|sm|md|lg|xl)-)?\d+$/.test(cssClasses[i]) || //
                /^col-(xs|sm|md|lg|xl)-offset-\d+$/.test(cssClasses[i]) || //
                /^offset-((xs|sm|md|lg|xl)-)?\d+$/.test(cssClasses[i])) return $parent;
            }

            return this._getMessageContainer($parent, group);
        };

        /**
         * Support for bs 4
         */
        $.fn.bootstrapValidator.Constructor.prototype.updateMessage = function(field, validator, message) {
            var $fields = $([]);
            switch (typeof field) {
                case 'object' :
                    $fields = field;
                    field = field.attr('data-bv-field');
                    break;
                case 'string' :
                    $fields = this.getFieldElements(field);
                    break;
                default :
                    break;
            }

            $fields.each(function() {
                $(this).data('bv.messages').find(
                        '.invalid-feedback[data-bv-validator="' + validator + '"][data-bv-for="' + field + '"]').html(
                        message);
            });
        };

        /**
         * Support for bs 4 & bug
         */
        $.fn.bootstrapValidator.Constructor.prototype.isFieldValid = function($field) {
            var data = $field.data();
            for ( var key in data) {
                if (key.indexOf('bv.result.') == 0) {
                    if (data[key] == this.STATUS_INVALID) { return false; }
                }
            }
            return true;
        }
        /**
         * Support for bs 4 & bug
         */
        $.fn.bootstrapValidator.Constructor.prototype.isValidContainer = function(container) {
            var that = this, map = {}, $container = ("string" === typeof container) ? $(container) : container;
            if ($container.length === 0) { return true; }

            $container.find("[data-bv-field]").each(function() {
                var $field = $(this), field = $field.attr("data-bv-field");
                if (!that._isExcluded($field) && !map[field]) {
                    map[field] = $field;
                }
            });

            for ( var field in map) {
                var $f = map[field];
                if ($f
                        .data("bv.messages")
                        .find('.invalid-feedback[data-bv-validator][data-bv-for="' + field + '"]')
                        .filter(
                                function() {
                                    var v = $(this).attr("data-bv-validator");
                                    var f = $(this).attr("data-bv-for");
                                    return (that.options.fields[f]
                                            && that.options.fields[f].validators[v].enabled !== false
                                            && $f.data("bv.result." + v) && $f.data("bv.result." + v) !== that.STATUS_VALID);
                                }).length !== 0) {
                    // The field is not valid
                    return false;
                }
            }
            return true;
        };

        /**
         * Support for bs 4
         */
        $.fn.bootstrapValidator.Constructor.prototype.getMessages = function(field, validator) {
            var that = this, messages = [], $fields = $([]);

            switch (true) {
                case (field && 'object' === typeof field) :
                    $fields = field;
                    break;
                case (field && 'string' === typeof field) :
                    var f = this.getFieldElements(field);
                    if (f.length > 0) {
                        var type = f.attr('type');
                        $fields = ('radio' === type || 'checkbox' === type) ? f.eq(0) : f;
                    }
                    break;
                default :
                    $fields = this.$invalidFields;
                    break;
            }

            var filter = validator ? '[data-bv-validator="' + validator + '"]' : '';
            $fields.each(function() {
                messages = messages.concat($(this).data('bv.messages')
                // by sleest for bs4: form-control-feedback
                .find(
                        '.help-block[data-bv-for="' + $(this).attr('data-bv-field') + '"][data-bv-result="'
                                + that.STATUS_INVALID + '"]' + filter + ',' + //
                                '.form-control-feedback[data-bv-for="' + $(this).attr('data-bv-field')
                                + '"][data-bv-result="' + that.STATUS_INVALID + '"]' + filter).map(function() {
                    var v = $(this).attr('data-bv-validator'), f = $(this).attr('data-bv-for');
                    return (that.options.fields[f].validators[v].enabled === false) ? '' : $(this).html();
                }).get());
            });

            return messages;
        };

        /**
         * Support for bs 4
         */
        $.fn.bootstrapValidator.Constructor.prototype.updateStatus = function(field, status, validatorName) {
            var fields = $([]);
            switch (typeof field) {
                case 'object' :
                    fields = field;
                    field = field.attr('data-bv-field');
                    break;
                case 'string' :
                    fields = this.getFieldElements(field);
                    break;
                default :
                    break;
            }

            if (status === this.STATUS_NOT_VALIDATED) {
                // Reset the flag
                this._submitIfValid = false;
            }

            var that = this, type = fields.attr('type'), group = this.options.fields[field].group || this.options.group, total = ('radio' === type || 'checkbox' === type)
                    ? 1
                    : fields.length;

            for (var i = 0; i < total; i++) {
                var $field = fields.eq(i);
                if (this._isExcluded($field)) {
                    continue;
                }

                var $parent = $field.parents(group), $message = $field.data('bv.messages'),
                // by sleest for bs4: form-control-feedback
                $allErrors = $message.find('.invalid-feedback[data-bv-validator][data-bv-for="' + field + '"]');
                        $errors = validatorName
                                ? $allErrors.filter('[data-bv-validator="' + validatorName + '"]')
                                : $allErrors, $icon = $parent.find('.invalid-feedback[data-bv-icon-for="' + field
                                + '"]'), container = this.options.fields[field].container || this.options.container,
                        isValidField = null;

                // Update status
                if (validatorName) {
                    $field.data('bv.result.' + validatorName, status);
                } else {
                    for ( var v in this.options.fields[field].validators) {
                        $field.data('bv.result.' + v, status);
                    }
                }

                // Show/hide error elements and feedback icons
                $errors.attr('data-bv-result', status);

                // Determine the tab containing the element
                var $tabPane = $field.parents('.tab-pane'), tabId, $tab;
                if ($tabPane && (tabId = $tabPane.attr('id'))) {
                    $tab = $('a[href="#' + tabId + '"][data-toggle="tab"]').parent();
                }

                switch (status) {
                    case this.STATUS_VALIDATING :
                        isValidField = null;
                        this.disableSubmitButtons(true);
                        // by sleest for bs4: has-danger
                        $field.removeClass('is-valid is-invalid');
                        if ($icon) {
                            $icon.removeClass(this.options.feedbackIcons.valid).removeClass(
                                    this.options.feedbackIcons.invalid).addClass(this.options.feedbackIcons.validating)
                                    .show();
                        }
                        if ($tab) {
                            $tab.removeClass('bv-tab-success').removeClass('bv-tab-error');
                        }
                        break;

                    case this.STATUS_INVALID :
                        isValidField = false;
                        this.disableSubmitButtons(true);
                        // by sleest for bs4: has-danger
                        $field.removeClass('is-valid').addClass('is-invalid');
                        if ($icon) {
                            $icon.removeClass(this.options.feedbackIcons.valid).removeClass(
                                    this.options.feedbackIcons.validating).addClass(this.options.feedbackIcons.invalid)
                                    .show();
                        }
                        if ($tab) {
                            $tab.removeClass('bv-tab-success').addClass('bv-tab-error');
                        }
                        break;

                    case this.STATUS_VALID :
                        // If the field is valid (passes all validators)
                        isValidField = ($allErrors.filter('[data-bv-result="' + this.STATUS_NOT_VALIDATED + '"]').length === 0)
                                ? ($allErrors.filter('[data-bv-result="' + this.STATUS_VALID + '"]').length === $allErrors.length) // All validators are completed
                                : null; // There are some validators that have not done
                        if (isValidField !== null) {
                            this.disableSubmitButtons(this.$submitButton ? !this.isValid() : !isValidField);
                            if ($icon) {
                                $icon.removeClass(this.options.feedbackIcons.invalid).removeClass(
                                        this.options.feedbackIcons.validating).removeClass(
                                        this.options.feedbackIcons.valid).addClass(
                                        isValidField
                                                ? this.options.feedbackIcons.valid
                                                : this.options.feedbackIcons.invalid).show();
                            }
                        }

                        // by sleest for bs4: has-danger
                        $field.removeClass('is-valid is-invalid').addClass(
                                this.isFieldValid($field) ? 'is-valid' : 'is-invalid');
                        if ($tab) {
                            $tab.removeClass('bv-tab-success').removeClass('bv-tab-error').addClass(
                                    this.isValidContainer($tabPane) ? 'bv-tab-success' : 'bv-tab-error');
                        }
                        break;

                    case this.STATUS_NOT_VALIDATED :
                        /* falls through */
                    default :
                        isValidField = null;
                        this.disableSubmitButtons(false);
                        // by sleest for bs4: has-danger
                        $field.removeClass('is-valid is-invalid');
                        if ($icon) {
                            $icon.removeClass(this.options.feedbackIcons.valid).removeClass(
                                    this.options.feedbackIcons.invalid).removeClass(
                                    this.options.feedbackIcons.validating).hide();
                        }
                        if ($tab) {
                            $tab.removeClass('bv-tab-success').removeClass('bv-tab-error');
                        }
                        break;
                }

                switch (true) {
                    // Only show the first error message if it is placed inside a tooltip ...
                    case ($icon && 'tooltip' === container) :
                        (isValidField === false) ? $icon.css('cursor', 'pointer').tooltip('dispose').tooltip({
                            html : true,
                            placement : 'top',
                            title : $allErrors.filter('[data-bv-result="' + that.STATUS_INVALID + '"]').eq(0).html()
                        }) : $icon.css('cursor', '').tooltip('dispose');
                        break;
                    // ... or popover
                    case ($icon && 'popover' === container) :
                        (isValidField === false) ? $icon.css('cursor', 'pointer').popover('dispose').popover({
                            content : $allErrors.filter('[data-bv-result="' + that.STATUS_INVALID + '"]').eq(0).html(),
                            html : true,
                            placement : 'top',
                            trigger : 'hover click'
                        }) : $icon.css('cursor', '').popover('dispose');
                        break;
                    default :
                        (status === this.STATUS_INVALID) ? $errors.show() : $errors.hide();
                        break;
                }

                // Trigger an event
                $field.trigger($.Event('status.field.bv'), {
                    bv : this,
                    field : field,
                    element : $field,
                    status : status
                });
                this._onFieldValidated($field, validatorName);
            }

            return this;
        };

        /**
         * Support for bs 4
         */
        $.fn.bootstrapValidator.Constructor.prototype._initField = function(field) {
            var fields = $([]);
            switch (typeof field) {
                case 'object' :
                    fields = field;
                    field = field.attr('data-bv-field');
                    break;
                case 'string' :
                    fields = this.getFieldElements(field);
                    fields.attr('data-bv-field', field);
                    break;
                default :
                    break;
            }

            if (this.options.fields[field] === null || this.options.fields[field].validators === null) { return; }

            // We don't need to validate non-existing fields
            if (fields.length === 0) {
                delete this.options.fields[field];
                return;
            }
            var validatorName;
            for (validatorName in this.options.fields[field].validators) {
                if (!$.fn.bootstrapValidator.validators[validatorName]) {
                    delete this.options.fields[field].validators[validatorName];
                }
            }
            if (this.options.fields[field].enabled === null) {
                this.options.fields[field].enabled = true;
            }

            var that = this, total = fields.length, type = fields.attr('type'), updateAll = (total === 1)
                    || ('radio' === type) || ('checkbox' === type), event = ('radio' === type || 'checkbox' === type
                    || 'file' === type || 'SELECT' === fields.eq(0).get(0).tagName) ? 'change' : this._changeEvent, trigger = (this.options.fields[field].trigger
                    || this.options.trigger || event).split(' '), events = $.map(trigger, function(item) {
                return item + '.update.bv';
            }).join(' ');

            for (var i = 0; i < total; i++) {
                var $field = fields.eq(i), group = this.options.fields[field].group || this.options.group, $parent = $field
                        .parents(group),
                // Allow user to indicate where the error messages are shown
                container = this.options.fields[field].container || this.options.container, $message = (container
                        && container !== 'tooltip' && container !== 'popover') ? $(container) : this
                        ._getMessageContainer($field, group);

                if (container && container !== 'tooltip' && container !== 'popover') {
                    // by sleest support bs4: has-danger
                    $message.addClass('has-error').addClass('has-danger');
                }

                // Remove all error messages and feedback icons
                // by sleest support bs4: form-control-feedback
                $message.find('.invalid-feedback[data-bv-validator][data-bv-for="' + field + '"]').remove();

                $parent.find('i[data-bv-icon-for="' + field + '"]').remove();

                // Whenever the user change the field value, mark it as not validated yet
                $field.off(events).on(events, function() {
                    that.updateStatus($(this), that.STATUS_NOT_VALIDATED);
                });

                // Create help block elements for showing the error messages
                $field.data('bv.messages', $message);
                for (validatorName in this.options.fields[field].validators) {
                    $field.data('bv.result.' + validatorName, this.STATUS_NOT_VALIDATED);

                    // by sleest 2018/08/23 visually multiple input in input group validation display support 
                    if ($message.find('.input-group').length && $message.find('.flex-feedback').length == 0) {
                        $message.append($('<div class="flex-feedback d-flex"></div>'));
                    }
                    if (!updateAll || i === total - 1) {
                        $('<small/>').css('display', 'none')
                        // by sleest support bs4: form-control-feedback
                        .addClass('invalid-feedback').attr('data-bv-validator', validatorName).attr('data-bv-for',
                                field).attr('data-bv-result', this.STATUS_NOT_VALIDATED).html(
                                this._getMessage(field, validatorName)).appendTo(
                                $message.find('.flex-feedback')[0] || $message);
                    }

                    // Prepare the validator events
                    if (this.options.fields[field].validators[validatorName].onSuccess) {
                        $field.on('success.validator.bv', function(e, data) {
                            $.fn.bootstrapValidator.helpers.call(
                                    that.options.fields[field].validators[validatorName].onSuccess, [e, data]);
                        });
                    }
                    if (this.options.fields[field].validators[validatorName].onError) {
                        $field.on('error.validator.bv', function(e, data) {
                            $.fn.bootstrapValidator.helpers.call(
                                    that.options.fields[field].validators[validatorName].onError, [e, data]);
                        });
                    }
                }

                // Prepare the feedback icons
                // Available from Bootstrap 3.1 (http://getbootstrap.com/css/#forms-control-validation)
                if (this.options.fields[field].feedbackIcons !== false
                        && this.options.fields[field].feedbackIcons !== 'false' && this.options.feedbackIcons
                        && this.options.feedbackIcons.validating && this.options.feedbackIcons.invalid
                        && this.options.feedbackIcons.valid && (!updateAll || i === total - 1)) {
                    // by sleest support bs4: has-danger
                    $field.removeClass('is-valid is-invalid').addClass('has-feedback');
                    var $icon = $('<i/>').css('display', 'none')
                    // by sleest support bs4: form-control-feedback
                    .addClass('invalid-feedback').attr('data-bv-icon-for', field)
                    // Place it after the label containing the checkbox/radio
                    // so when clicking the icon, it doesn't effect to the checkbox/radio element
                    .insertAfter(('checkbox' === type || 'radio' === type) ? $field.parent() : $field);

                    // The feedback icon does not render correctly if there is no label
                    // https://github.com/twbs/bootstrap/issues/12873
                    if ($parent.find('label').length === 0) {
                        $icon.css('top', 0);
                    }
                    // Fix feedback icons in input-group
                    //                    if ($parent.find('.input-group').length !== 0) {
                    //                        $icon.css({
                    //                            'top': 0,
                    //                            'z-index': 100
                    //                        }).insertAfter($parent.find('.input-group').eq(0));
                    //                    }
                }
            }

            // Prepare the events
            if (this.options.fields[field].onSuccess) {
                fields.on('success.field.bv', function(e, data) {
                    $.fn.bootstrapValidator.helpers.call(that.options.fields[field].onSuccess, [e, data]);
                });
            }
            if (this.options.fields[field].onError) {
                fields.on('error.field.bv', function(e, data) {
                    $.fn.bootstrapValidator.helpers.call(that.options.fields[field].onError, [e, data]);
                });
            }
            if (this.options.fields[field].onStatus) {
                fields.on('status.field.bv', function(e, data) {
                    $.fn.bootstrapValidator.helpers.call(that.options.fields[field].onStatus, [e, data]);
                });
            }

            // Set live mode
            events = $.map(trigger, function(item) {
                return item + '.live.bv';
            }).join(' ');
            switch (this.options.live) {
                case 'submitted' :
                    break;
                case 'disabled' :
                    fields.off(events);
                    break;
                case 'enabled' :
                    /* falls through */
                default :
                    fields.off(events).on(events, function() {
                        if (that._exceedThreshold($(this))) {
                            that.validateField($(this));
                        }
                    });
                    break;
            }

            fields.trigger($.Event('init.field.bv'), {
                bv : this,
                field : field,
                element : fields
            });
        };
        
        /**
         * Support for bs 4
         */
        $.fn.bootstrapValidator.Constructor.prototype.destroy = function() {
            var field, fields, $field, validator, $icon, container, group;
            for (field in this.options.fields) {
                fields    = this.getFieldElements(field);
                container = this.options.fields[field].container || this.options.container,
                group     = this.options.fields[field].group || this.options.group;
                for (var i = 0; i < fields.length; i++) {
                    $field = fields.eq(i);
                    $field
                        // Remove all error messages
                        .data('bv.messages')
                            .find('.invalid-feedback[data-bv-validator][data-bv-for="' + field + '"]').remove().end()
                            //.find('.help-block[data-bv-validator][data-bv-for="' + field + '"]').remove().end()
                            .end()
                        .removeData('bv.messages')
                        // Remove feedback classes
                        .parents(group)
                            .removeClass('has-feedback has-error has-success')
                            .end()
                        // Turn off events
                        .off('.bv')
                        .removeAttr('data-bv-field');

                    // Remove feedback icons, tooltip/popover container
                    $icon = $field.parents(group).find('i[data-bv-icon-for="' + field + '"]');
                    if ($icon) {
                        switch (container) {
                            case 'tooltip':
                                $icon.tooltip('destroy').remove();
                                break;
                            case 'popover':
                                $icon.popover('destroy').remove();
                                break;
                            default:
                                $icon.remove();
                                break;
                        }
                    }

                    for (validator in this.options.fields[field].validators) {
                        if ($field.data('bv.dfs.' + validator)) {
                            $field.data('bv.dfs.' + validator).reject();
                        }
                        $field.removeData('bv.result.' + validator).removeData('bv.dfs.' + validator);
                    }
                }
            }

            // Enable submit buttons
            this.disableSubmitButtons(false);

            this.$form
                .removeClass(this.options.elementClass)
                .off('.bv')
                .removeData('bootstrapValidator')
                // Remove generated hidden elements
                .find('[data-bv-submit-hidden]').remove();
        }
        /**
         * Support for bs 4
         */
        $.fn.bootstrapValidator.Constructor.prototype._onFieldValidated = function($field, validatorName) {
            var field         = $field.attr('data-bv-field'),
                validators    = this.options.fields[field].validators,
                counter       = {},
                numValidators = 0,
                data          = {
                    bv: this,
                    field: field,
                    element: $field,
                    validator: validatorName
                };

            // Trigger an event after given validator completes
            if (validatorName) {
                switch ($field.data('bv.result.' + validatorName)) {
                    case this.STATUS_INVALID:
                        $field.trigger($.Event('error.validator.bv'), data);
                        break;
                    case this.STATUS_VALID:
                        $field.trigger($.Event('success.validator.bv'), data);
                        break;
                    default:
                        break;
                }
            }

            counter[this.STATUS_NOT_VALIDATED] = 0;
            counter[this.STATUS_VALIDATING]    = 0;
            counter[this.STATUS_INVALID]       = 0;
            counter[this.STATUS_VALID]         = 0;

            for (var v in validators) {
                if (validators[v].enabled === false) {
                    continue;
                }

                numValidators++;
                var result = $field.data('bv.result.' + v);
                if (result) {
                    counter[result]++;
                }
            }

            if (counter[this.STATUS_VALID] === numValidators) {
                // Remove from the list of invalid fields
                this.$invalidFields = this.$invalidFields.not($field);

                $field.trigger($.Event('success.field.bv'), data);
            }
            // If all validators are completed and there is at least one validator which doesn't pass
            else if (counter[this.STATUS_NOT_VALIDATED] === 0 && counter[this.STATUS_VALIDATING] === 0 && counter[this.STATUS_INVALID] > 0) {
                // Add to the list of invalid fields
                this.$invalidFields = this.$invalidFields.add($field);

                $field.trigger($.Event('error.field.bv'), data);
            }
            // 
            else if(counter[this.STATUS_NOT_VALIDATED] == numValidators){
                this.$invalidFields = this.$invalidFields.not($field);
            }
        }
    }

    function init() {
        if (typeof jQuery === "undefined") throw new Error("BootstrapValidator Override JavaScript requires jQuery.");
        if (typeof jQuery.fn.bootstrapValidator.validators === "undefined")
            throw new Error("BootstrapValidator Override requires BootstrapValidator Plugin.");

        i18n();
        option();
        validator();
        extend();
        override();
    }
    init();

})(jQuery);