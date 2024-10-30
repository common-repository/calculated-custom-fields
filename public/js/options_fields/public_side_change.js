//Prevent var not defined
var php_options_values = "null";
var $second_user_value = "null";

(function ($) {


    $(function () {

        var price = php_options_values.price;
        var currency = php_options_values.currency;
        var currency_position = php_options_values.currency_position;

        var quantity_related = php_options_values.quantity_related;
        var free_option_text = php_options_values.free_option_text;

        var formula_notice_1 = php_options_values.formula_notice_1;
        var formula_notice_2 = php_options_values.formula_notice_2;
        var formula_notice_3 = php_options_values.formula_notice_3;
        var formula_notice_4 = php_options_values.formula_notice_4;
        var option_identificator = php_options_values.option_identificators;
        var price_input_id = php_options_values.price_input_id;
        var price_input = $(price_input_id);
       
        var number_of_options = parseFloat(php_options_values.number_of_options);

        var conditionals_array = [];

        var x;

        for (x = 1; x <= number_of_options; x++) {
            conditionals_array['condition_' + x] = php_options_values['condition_' + x];
            conditionals_array['conditioned_' + x] = php_options_values['conditioned_' + x];
            conditionals_array['text_condition_' + x] = php_options_values['text_condition_' + x];
            conditionals_array['text_conditioned_' + x] = php_options_values['text_conditioned_' + x];

        }

        var array = {};


        $.each(option_identificator, function (index, id_value) {

            //get PHP values from inline script

            array[id_value + "_text_input_extra_value"] = php_options_values[id_value + "_text_input_extra_value"];
            array[id_value + "_text_area_extra_value"] = php_options_values[id_value + "_text_area_extra_value"];
            array[id_value + "_number_input_extra_value"] = php_options_values[id_value + "_number_input_extra_value"];
            array[id_value + "_url_extra_value"] = php_options_values[id_value + "_url_extra_value"];
            array[id_value + "_checkbox_value"] = php_options_values[id_value + "_checkbox_value"];
            array[id_value + "_checkbox_value_2"] = php_options_values[id_value + "_checkbox_value_2"];
            array[id_value + "_checkbox_value_3"] = php_options_values[id_value + "_checkbox_value_3"];
            array[id_value + "_checkbox_value_4"] = php_options_values[id_value + "_checkbox_value_4"];
            array[id_value + "_select_value"] = php_options_values[id_value + "_select_value"];
            array[id_value + "_select_value_2"] = php_options_values[id_value + "_select_value_2"];
            array[id_value + "_select_value_3"] = php_options_values[id_value + "_select_value_3"];
            array[id_value + "_select_value_4"] = php_options_values[id_value + "_select_value_4"];
            array[id_value + "_select_value_5"] = php_options_values[id_value + "_select_value_5"];
            array[id_value + "_select_value_6"] = php_options_values[id_value + "_select_value_6"];
            array[id_value + "_email_extra_value"] = php_options_values[id_value + "_email_extra_value"];
            array[id_value + "_color_extra_value"] = php_options_values[id_value + "_color_extra_value"];
            array[id_value + "_calcul_formula"] = php_options_values[id_value + "_calcul_formula"];
            array[id_value + "_phone_extra_value"] = php_options_values[id_value + "_phone_extra_value"];

        });


        $.each(option_identificator, function (i, val) {


            // TEXT INPUTS ARE FILLED

            $('#' + val + '_text_input').on('input', function (e) {

                var field_option_type = '1';
                var event = e;
                conditional_switching(val, number_of_options, conditionals_array, field_option_type, event, price_input, currency, quantityNumber, array);
            
                array[val + '_textInput'] = $('#' + val + '_text_input').val();

                var quantity = $('[name=quantity]').val();
                var quantityNumber = parseFloat(quantity).toFixed(2);

                array[val + '_option_charge'] = parseFloat(array[val + "_text_input_extra_value"]);

                var $output_id = $('#' + val + '_output_text_val');

                output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                // Free Option text if option=0
                if (array[val + '_option_charge'] == "0") {
                    $('#' + val + '_output_text_val').html(free_option_text);
                }

                if (!array[val + '_textInput'] || array[val + '_textInput'].charAt(0) === " ") {

                    //prevent white space calculation 
                    $('#' + val + '_text_input').val("");
                    //remove option output
                    $('#' + val + '_output_text_val').html('');

                    remove_option_display_price(price_input, currency, val, quantityNumber, array);

                }

            });


            // NUMBER INPUTS ARE FILLED

            $('#' + val + '_number_custom_field').on('input', function (e) {

                var field_option_type = '6';
                var event = e;
                conditional_switching(val, number_of_options, conditionals_array, field_option_type, event, price_input, currency, quantityNumber, array);

                array[val + '_number_input'] = $('#' + val + '_number_custom_field').val();

                //Ask to use only numbers if filled with letters
                if (e.target.validity.badInput === true) {
                    $('#' + val + '_NfillWithNumbers').html(formula_notice_1);
                    $('#' + val + '_NfillWithNumbers').show();
                } else { $('#' + val + '_NfillWithNumbers').hide(); }

                var quantity = $('[name=quantity]').val();
                var quantityNumber = parseFloat(quantity).toFixed(2);

                array[val + '_option_charge'] = parseFloat(array[val + "_number_input_extra_value"]);

                var $output_id = $('#' + val + '_outputNumberValue');

                output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                //"Free Option" if option_input = 0
                if (array[val + '_option_charge'] == "0") {
                    $('#' + val + '_outputNumberValue').html(free_option_text);
                }

                if (!array[val + '_number_input']) {
                    //remove option output
                    $('#' + val + '_outputNumberValue').html('');

                    remove_option_display_price(price_input, currency, val, quantityNumber, array);

                }

            });


            // TEXT_AREA INPUTS ARE FILLED 

            $('#' + val + '_text_area_input').on('input', function (e) {

                var field_option_type = '4';
                var event = e;
                conditional_switching(val, number_of_options, conditionals_array, field_option_type, event, price_input, currency, quantityNumber, array);

                array[val + '_text_area'] = $('#' + val + '_text_area_input').val();

                var quantity = $('[name=quantity]').val();
                var quantityNumber = parseFloat(quantity).toFixed(2);

                array[val + '_option_charge'] = parseFloat(array[val + "_text_area_extra_value"]);

                var $output_id = $('#' + val + '_output_text_area_val');

                output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                //"Free Option" if option=0
                if (array[val + '_option_charge'] == "0") {
                    $('#' + val + '_output_text_area_val').html(free_option_text);
                }

                if (!array[val + '_text_area'] || array[val + '_text_area'].charAt(0) === " ") {

                    //prevent white space begin calculation
                    $('#' + val + '_text_area_input').val('');

                    //remove option output
                    $('#' + val + '_output_text_area_val').html(' ');

                    remove_option_display_price(price_input, currency, val, quantityNumber, array);

                }

            });
            

            // URL INPUTS ARE FILLED 

            $('#' + val + '_url_field').on('input', function (e) {

                var field_option_type = '12';
                var event = e;
                conditional_switching(val, number_of_options, conditionals_array, field_option_type, event, price_input, currency, quantityNumber, array);

                array[val + '_urlInput'] = $('#' + val + '_url_field').val();

                var quantity = $('[name=quantity]').val();
                var quantityNumber = parseFloat(quantity).toFixed(2);

                array[val + '_option_charge'] = parseFloat(array[val + "_url_extra_value"]);


                var $output_id = $('#' + val + '_outputUrlValue');

                output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                //"Free Option" if option=0
                if (array[val + '_option_charge'] == "0") {
                    $('#' + val + '_outputUrlValue').html(free_option_text);
                }

                if (!array[val + '_urlInput'] || array[val + '_urlInput'].charAt(0) === " ") {

                    //prevent white space begin calculation
                    $('#' + val + '_url_field').val('');

                    $('#' + val + '_outputUrlValue').html('');

                    remove_option_display_price(price_input, currency, val, quantityNumber, array);

                }

            });



            // CHECKBOXES 1 ARE CHECKED 
            $('#' + val + '_checkbox').checkboxradio();
            $('#' + val + '_checkbox').change(function (e) {

                var field_option_type = '3';
                var event = e;
                conditional_switching(val, number_of_options, conditionals_array, field_option_type, event, price_input, currency, quantityNumber, array);

                var checkbox = $(this); // Selected current checkbox

                //Getting other checkbox values from local storage
                var check2_val = localStorage.getItem(val + '_check2');
                var check2_val_number = parseFloat(check2_val);

                var check3_val = localStorage.getItem(val + '_check3');
                var check3_val_number = parseFloat(check3_val);

                var check4_val = localStorage.getItem(val + '_check4');
                var check4_val_number = parseFloat(check4_val);

                if (checkbox.is(':checked')) {

                    var quantity = $('[name=quantity]').val();
                    var quantityNumber = parseFloat(quantity).toFixed(2);

                    //Set total 
                    array[val + '_option_charge'] = parseFloat(array[val + '_checkbox_value']) + check2_val_number + check3_val_number + check4_val_number;

                    //local Storage checkbox 1 value
                    localStorage.setItem(val + '_check1', array[val + '_checkbox_value']);

                    var $output_id = $('.' + val + '_cp_output');

                    output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                    if (array[val + '_option_charge'] == 0 && array[val + '_option_charge'] != 0) {
                        $('.' + val + '_output_check_val').append(' (Option ' + checkbox.val() + ' : ' + free_option_text + ')');
                    }
                    else if (array[val + '_option_charge'] == 0 && array[val + '_option_charge'] == 0) {
                        $('.' + val + '_output_check_val').html(free_option_text);
                    };

                }

                else {

                    //local Storage checkbox 1
                    localStorage.setItem(val + '_check1', "0");

                    //set total 
                    array[val + '_option_charge'] = check2_val_number + check3_val_number + check4_val_number;

                    var quantity = $('[name=quantity]').val();
                    var quantityNumber = parseFloat(quantity).toFixed(2);

                    var $output_id = $('.' + val + '_cp_output');

                    remove_option_display_price(price_input, currency, val, quantityNumber, array);

                    if (array[val + '_option_charge'] == "0.00" && !$('.ui-checkboxradio-icon').hasClass("ui-state-checked")) {
                        $('.' + val + '_output_check_val').html('');
                    } else if (array[val + '_option_charge'] == "0.00" && $('.ui-checkboxradio-icon').hasClass("ui-state-checked")) {
                        $('.' + val + '_output_check_val').html(free_option_text);
                    } else {
                        output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);
                    }

                }

            });


            // CHECKBOXES 2 ARE CHECKED 
            $('#' + val + '_checkbox_2').checkboxradio();
            $('#' + val + '_checkbox_2').change(function (e) {

                var field_option_type = '3';
                var event = e;
                conditional_switching(val, number_of_options, conditionals_array, field_option_type, event, price_input, currency, quantityNumber, array);

                var checkbox = $(this); // Selected or current checkbox

                //Getting values from other checkbox in localStorage
                var check1_val = localStorage.getItem(val + '_check1');
                var check1_val_number = parseFloat(check1_val);

                var check3_val = localStorage.getItem(val + '_check3');
                var check3_val_number = parseFloat(check3_val);

                var check4_val = localStorage.getItem(val + '_check4');
                var check4_val_number = parseFloat(check4_val);


                if (checkbox.is(':checked')) {
                    var quantity = $('[name=quantity]').val();
                    var quantityNumber = parseFloat(quantity).toFixed(2);

                    //set total 
                    array[val + '_option_charge'] = parseFloat(array[val + '_checkbox_value_2']) + check1_val_number + check3_val_number + check4_val_number;

                    //local Storage checkbox 2 val
                    localStorage.setItem(val + '_check2', array[val + '_checkbox_value_2']);

                    var $output_id = $('.' + val + '_cp_output');

                    output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                    if (array[val + '_option_charge'] == 0 && array[val + '_option_charge'] != 0) {
                        $('.' + val + '_output_check_val').append(' (Option ' + checkbox.val() + ' : ' + free_option_text + ')');
                    }
                    else if (array[val + '_option_charge'] == 0 && array[val + '_option_charge'] == 0) {
                        $('.' + val + '_output_check_val').html(free_option_text);
                    };

                }

                else {

                    //set local Storage check 2
                    localStorage.setItem(val + '_check2', "0");

                    //set total 
                    array[val + '_option_charge'] = check1_val_number + check3_val_number + check4_val_number;


                    var quantity = $('[name=quantity]').val();
                    var quantityNumber = parseFloat(quantity).toFixed(2);

                    var $output_id = $('.' + val + '_cp_output');

                    remove_option_display_price(price_input, currency, val, quantityNumber, array);

                    if (array[val + '_option_charge'] == "0.00" && !$('.ui-checkboxradio-icon').hasClass("ui-state-checked")) {
                        $('.' + val + '_output_check_val').html('');
                    } else if (array[val + '_option_charge'] == "0.00" && $('.ui-checkboxradio-icon').hasClass("ui-state-checked")) {
                        $('.' + val + '_output_check_val').html(free_option_text);
                    } else {
                        output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);
                    }
                }

            });



            // CHECKBOXES 3 ARE CHECKED 
            $('#' + val + '_checkbox_3').checkboxradio();
            $('#' + val + '_checkbox_3').change(function (e) {

                var field_option_type = '3';
                var event = e;
                conditional_switching(val, number_of_options, conditionals_array, field_option_type, event, price_input, currency, quantityNumber, array);

                var checkbox = $(this);

                //get checkbox values from local storage
                var check1_val = localStorage.getItem(val + '_check1');
                var check1_val_number = parseFloat(check1_val);

                var check2_val = localStorage.getItem(val + '_check2');
                var check2_val_number = parseFloat(check2_val);

                var check4_val = localStorage.getItem(val + '_check4');
                var check4_val_number = parseFloat(check4_val);


                if (checkbox.is(':checked')) {

                    var quantity = $('[name=quantity]').val();
                    var quantityNumber = parseFloat(quantity).toFixed(2);

                    array[val + '_option_charge'] = parseFloat(array[val + '_checkbox_value_3']);

                    //set total 
                    array[val + '_option_charge'] = array[val + '_option_charge'] + check1_val_number + check2_val_number + check4_val_number;

                    //local Storage checkbox 3
                    localStorage.setItem(val + '_check3', array[val + '_checkbox_value_3']);

                    var $output_id = $('.' + val + '_cp_output');

                    output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                    if (array[val + '_option_charge'] == 0 && array[val + '_option_charge'] != 0) {
                        $('.' + val + '_output_check_val').append(' (Option ' + checkbox.val() + ' : ' + free_option_text + ')');
                    }
                    else if (array[val + '_option_charge'] == 0 && array[val + '_option_charge'] == 0) {
                        $('.' + val + '_output_check_val').html(free_option_text);
                    };

                }

                else {

                    //local Storage check 3
                    localStorage.setItem(val + '_check3', "0");

                    //Set total
                    array[val + '_option_charge'] = check1_val_number + check2_val_number + check4_val_number;

                    var quantity = $('[name=quantity]').val();
                    var quantityNumber = parseFloat(quantity).toFixed(2);

                    var $output_id = $('.' + val + '_cp_output');

                    remove_option_display_price(price_input, currency, val, quantityNumber, array);

                    if (array[val + '_option_charge'] == "0.00" && !$('.ui-checkboxradio-icon').hasClass("ui-state-checked")) {
                        $('.' + val + '_output_check_val').html('');
                    } else if (array[val + '_option_charge'] == "0.00" && $('.ui-checkboxradio-icon').hasClass("ui-state-checked")) {
                        $('.' + val + '_output_check_val').html(free_option_text);
                    } else {
                        output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);
                    };

                }

            });


            // CHECKBOXES 4 ARE CHECKED 
            $('#' + val + '_checkbox_4').checkboxradio();
            $('#' + val + '_checkbox_4').change(function (e) {

                var field_option_type = '3';
                var event = e;
                conditional_switching(val, number_of_options, conditionals_array, field_option_type, event, price_input, currency, quantityNumber, array);

                var checkbox = $(this); // Selected current checkbox

                //Getting other checkbox values from local storage
                var check2_val = localStorage.getItem(val + '_check2');
                var check2_val_number = parseFloat(check2_val);

                var check3_val = localStorage.getItem(val + '_check3');
                var check3_val_number = parseFloat(check3_val);

                var check1_val = localStorage.getItem(val + '_check1');
                var check1_val_number = parseFloat(check1_val);

                if (checkbox.is(':checked')) {

                    var quantity = $('[name=quantity]').val();
                    var quantityNumber = parseFloat(quantity).toFixed(2);

                    //Set total 
                    array[val + '_option_charge'] = parseFloat(array[val + '_checkbox_value_4']) + check2_val_number + check3_val_number + check1_val_number;

                    //local Storage checkbox 4 value
                    localStorage.setItem(val + '_check4', array[val + '_checkbox_value_4']);

                    var $output_id = $('.' + val + '_cp_output');

                    output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                    if (array[val + '_option_charge'] == 0 && array[val + '_option_charge'] != 0) {
                        $('.' + val + '_output_check_val').append(' (Option ' + checkbox.val() + ' : ' + free_option_text + ')');
                    }
                    else if (array[val + '_option_charge'] == 0 && array[val + '_option_charge'] == 0) {
                        $('.' + val + '_output_check_val').html(free_option_text);
                    };

                }

                else {

                    //local Storage checkbox 4
                    localStorage.setItem(val + '_check4', "0");

                    //set total 
                    array[val + '_option_charge'] = check2_val_number + check3_val_number + check1_val_number;

                    var quantity = $('[name=quantity]').val();
                    var quantityNumber = parseFloat(quantity).toFixed(2);

                    var $output_id = $('.' + val + '_cp_output');

                    remove_option_display_price(price_input, currency, val, quantityNumber, array);

                    if (array[val + '_option_charge'] == "0.00" && !$('.ui-checkboxradio-icon').hasClass("ui-state-checked")) {
                        $('.' + val + '_output_check_val').html('');
                    } else if (array[val + '_option_charge'] == "0.00" && $('.ui-checkboxradio-icon').hasClass("ui-state-checked")) {
                        $('.' + val + '_output_check_val').html(free_option_text);
                    } else {
                        output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);
                    }

                }

            });



            /* SELECT INPUTS CHANGED */

            $('#' + val + '_select_input').selectmenu({

                change: function (event, data) {

                    var quantity = $('[name=quantity]').val();
                    var quantityNumber = parseFloat(quantity).toFixed(2);

                    //get number of index to send in php post after
                    $('#' + val + '_selector_index').val($('#' + val + '_select_input').prop('selectedIndex'));

                    var selected_index = $('#' + val + '_selector_index').val();

                    var field_option_type = '2';
                    var event = event;
                    conditional_switching(val, number_of_options, conditionals_array, field_option_type, event, price_input, currency, quantityNumber, array);


                    if (selected_index == "1") {

                        array[val + '_option_charge'] = parseFloat(array[val + '_select_value']);

                        var $output_id = $('#' + val + '_output_select_val');

                        output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                        if (array[val + '_option_charge'] == "0.00") {
                            $('#' + val + '_output_select_val').html(free_option_text);
                        }
                    }

                    else if (selected_index == "2") {

                        array[val + '_option_charge'] = parseFloat(array[val + '_select_value_2']);

                        var $output_id = $('#' + val + '_output_select_val');

                        output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                        if (array[val + '_option_charge'] == "0.00") {
                            $('#' + val + '_output_select_val').html(free_option_text);

                        }

                    }

                    else if (selected_index == "3") {

                        array[val + '_option_charge'] = parseFloat(array[val + '_select_value_3']);

                        var $output_id = $('#' + val + '_output_select_val');

                        output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                        if (array[val + '_option_charge'] == "0.00") {
                            $('#' + val + '_output_select_val').html(free_option_text);

                        }

                    }

                    else if (selected_index == "4") {

                        array[val + '_option_charge'] = parseFloat(array[val + '_select_value_4']);

                        var $output_id = $('#' + val + '_output_select_val');

                        output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                        if (array[val + '_option_charge'] == "0.00") {
                            $('#' + val + '_output_select_val').html(free_option_text);

                        }

                    }

                    else if (selected_index == "5") {

                        array[val + '_option_charge'] = parseFloat(array[val + '_select_value_5']);

                        var $output_id = $('#' + val + '_output_select_val');

                        output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                        if (array[val + '_option_charge'] == "0.00") {
                            $('#' + val + '_output_select_val').html(free_option_text);

                        }

                    }

                    else if (selected_index == "6") {

                        array[val + '_option_charge'] = parseFloat(array[val + '_select_value_6']);

                        var $output_id = $('#' + val + '_output_select_val');

                        output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                        if (array[val + '_option_charge'] == "0.00") {
                            $('#' + val + '_output_select_val').html(free_option_text);

                        }

                    }

                    else {

                        remove_option_display_price(price_input, currency, val, quantityNumber, array);

                        $('#' + val + '_output_select_val').html('');

                    }

                }

            });


            // Radio buttons are clicked 
            $('input[name=' + val + '_radio_value]').checkboxradio();
            $('input[name=' + val + '_radio_value]').on("change", function (event, ui) {

                var field_option_type = '5';
                var event = event;
                conditional_switching(val, number_of_options, conditionals_array, field_option_type, event, price_input, currency, quantityNumber, array);

                var loopDone = false;

                if (this.checked) {

                    var chooseButtonValue = $('input[name="' + val + '_radio_value"]:checked').val();

                    //get number of radio button to send in php post after
                    $('#' + val + '_radio_indexer').val($('input[name="' + val + '_radio_value"]').index($('input[name="' + val + '_radio_value"]:checked')));

                    var quantity = $('[name=quantity]').val();
                    var quantityNumber = parseFloat(quantity).toFixed(2);

                    array[val + '_option_charge'] = parseFloat(chooseButtonValue);

                    var $output_id = $('#' + val + '_outputRadioValue');

                    output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                    if (chooseButtonValue == 0) {
                        $('#' + val + '_outputRadioValue').html(free_option_text);
                    }

                }

                //uncheck radio, remove option and display new price when radio not clicked
                /*uncheck_radio_remove_option($output_id, price_input, currency, quantityNumber, array, val, current_radio_group, loopDone);*/

            });





            // IMG SWAP ARE CLICKED 
            $('input[name=' + val + '_img_radio]').checkboxradio();
            $('input[name=' + val + '_img_radio]').change(function (e) {

                var field_option_type = '7';
                var event = e;
                conditional_switching(val, number_of_options, conditionals_array, field_option_type, event, price_input, currency, quantityNumber, array);

                var loopDone = false;

                if (this.checked) {

                    var chooseImgValue = $('input[name="' + val + '_img_radio"]:checked').val();

                    //get number of img index to send in php post after
                    $('#' + val + '_img_indexer').val($('input[name="' + val + '_img_radio"]').index($('input[name="' + val + '_img_radio"]:checked')));

                    var quantity = $('[name=quantity]').val();
                    var quantityNumber = parseFloat(quantity).toFixed(2);

                    array[val + '_option_charge'] = parseFloat(chooseImgValue);

                    var $output_id = $('#' + val + '_outputImgValue');

                    output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                    if (chooseImgValue == 0) {
                        $('#' + val + '_outputImgValue').html(free_option_text);
                    }
                }

                var current_radio_group = $('input[name=' + val + '_img_radio]');

                //uncheck radio, remove option and display new price when radio not clicked
               /* uncheck_radio_remove_option($output_id, price_input, currency, quantityNumber, array, val, current_radio_group, loopDone);*/

            });



            /* EMAIL INPUTS ARE FILLED  */

            $('#' + val + '_email_field').on('input', function (e) {

                var field_option_type = '8';
                var event = e;
                conditional_switching(val, number_of_options, conditionals_array, field_option_type, event, price_input, currency, quantityNumber, array);

                //output option value
                $('#' + val + '_outputEmailValue').css("display", "block");

                array[val + '_emailInput'] = $('#' + val + '_email_field').val();

                var quantity = $('[name=quantity]').val();
                var quantityNumber = parseFloat(quantity).toFixed(2);

                array[val + '_option_charge'] = parseFloat(array[val + '_email_extra_value']);

                var $output_id = $('#' + val + '_outputEmailValue');

                output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                //"Free Option" if option=0
                if (array[val + '_option_charge'] == "0") {
                    $('#' + val + '_outputEmailValue').html(free_option_text);
                }


                if (!array[val + '_emailInput'] || array[val + '_emailInput'].charAt(0) === " ") {

                    //prevent white space calculation
                    $('#' + val + '_email_field').val('');

                    $('#' + val + '_outputEmailValue').html('');

                    var quantity = $('[name=quantity]').val();

                    remove_option_display_price(price_input, currency, val, quantityNumber, array);

                }

            });


            // Button SWAP are CLICKED 
            $('input[name=' + val + '_btn_radio]').checkboxradio({
                icon: false
            });
            $('input[name=' + val + '_btn_radio]').change(function (e) {


                var field_option_type = '9';
                var event = e;
                conditional_switching(val, number_of_options, conditionals_array, field_option_type, event, price_input, currency, quantityNumber, array);


                var loopDone = false;

                if (this.checked) {

                    var BtnChooseValue = $('input[name="' + val + '_btn_radio"]:checked').val();

                    //get number of img index to send in php post after
                    $('#' + val + '_btn_indexer').val($('input[name="' + val + '_btn_radio"]').index($('input[name="' + val + '_btn_radio"]:checked')));

                    var quantity = $('[name=quantity]').val();
                    var quantityNumber = parseFloat(quantity).toFixed(2);

                    array[val + '_option_charge'] = parseFloat(BtnChooseValue);

                    var $output_id = $('#' + val + '_outputBtnValue');

                    output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                    if (BtnChooseValue == 0) {
                        $('#' + val + '_outputBtnValue').html(free_option_text);
                    }
                }

                var current_radio_group = $('input[name=' + val + '_btn_radio]');

                //uncheck radio, remove option and display new price when radio not clicked
                /*uncheck_radio_remove_option($output_id, price_input, currency, quantityNumber, array, val, current_radio_group, loopDone);*/

            });


            // COLOR INPUTS ARE FILLED 

            //click on custom input click on color input
            $('#' + val + '_click_color').click(function (e) {
                $('#' + val + '_color_custom_field').click();

                var field_option_type = '10';
                var event = e;
                conditional_switching(val, number_of_options, conditionals_array, field_option_type, event, price_input, currency, quantityNumber, array);
            });

            //need a default color to work and show colors
            $('#' + val + '_color_custom_field').val('#a4a4a4');


            $('#' + val + '_color_custom_field').on('input', function (e) {

                //Custom input get the color

                var wpcb_user_color = $('#' + val + '_color_custom_field').val();
                $('#' + val + '_click_color').val(' ');
                $('#' + val + '_click_color').attr('style', 'background:' + wpcb_user_color + '!important');

                $('#' + val + '_color_custom_field').css('opacity', '1');
                array[val + '_colorInput'] = $('#' + val + '_color_custom_field').val();

                var quantity = $('[name=quantity]').val();
                var quantityNumber = parseFloat(quantity).toFixed(2);

                array[val + '_option_charge'] = parseFloat(array[val + '_color_extra_value']);

                var $output_id = $('#' + val + '_outputColorValue');

                output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                //"Free Option" if option=0
                if (array[val + '_option_charge'] == "0") {
                    $('#' + val + '_outputColorValue').html(free_option_text);
                }

                if (array[val + '_colorInput'] == "#a4a4a4") {

                    $('#' + val + '_click_color').css('background', 'transparent');
                    $('#' + val + '_click_color').attr('placeholder', 'Choose a custom color');

                    $('#' + val + '_outputColorValue').html('');

                    var quantity = $('[name=quantity]').val();

                    $('#' + val + '_click_color').val('Choose a custom color');
                    remove_option_display_price(price_input, currency, val, quantityNumber, array);

                }

            });



            // NUMBER CALCULATION INPUTS 1 ARE FILLED 

            $('#' + val + '_calcul_number_custom_field').on('input', function (e) {

                var field_option_type = '11';
                var event = e;
                conditional_switching(val, number_of_options, conditionals_array, field_option_type, event, price_input, currency, quantityNumber, array);

                var $user_value = $('#' + val + '_calcul_number_custom_field').val();
                var $second_user_value_input = $('#' + val + '_calcul_number_custom_field_2');
                var $second_user_value_input_val = $('#' + val + '_calcul_number_custom_field_2').val();

                //Ask to use only numbers if filled with letters
                if (e.target.validity.badInput === true) {
                    $('#' + val + '_fillWithNumbers').show();
                    $('#' + val + '_fillWithNumbers').html(formula_notice_1);
                } else {
                    $('#' + val + '_fillWithNumbers').hide();
                }

                var quantity = $('[name=quantity]').val();
                var quantityNumber = parseFloat(quantity).toFixed(2);

                if ($second_user_value_input.val()) {
                    $second_user_value = $('#' + val + '_calcul_number_custom_field_2').val();
                } else if ($second_user_value_input && !$second_user_value_input.val()) {
                    $second_user_value = "";
                }

                var active_formula = array[val + '_calcul_formula'].replace('$user_value', $user_value);

                if ($user_value && $user_value != 0) {

                    //Calculate (Function instead of eval())
                    array[val + '_option_charge'] = Function("return " + active_formula)();

                    var $output_id = $('#' + val + '_outputCalculValue');

                    output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                    //"Free Option" if option=0
                    if (array[val + '_option_charge'] == "0") {
                        $('#' + val + '_outputCalculValue').html(free_option_text);
                    }

                    if (array[val + '_option_charge'] == "0" && $second_user_value_input) {

                        remove_option_display_price(price_input, currency, val, quantityNumber, array);
                    }

                    if (array[val + '_option_charge'] && $second_user_value_input && $second_user_value_input.val() == "") {
                        array[val + '_option_charge'] = 0;

                        remove_option_display_price(price_input, currency, val, quantityNumber, array);
                    }

                }


                if ($second_user_value_input.is(':visible') && !$second_user_value_input_val) {
                    $('#' + val + '_outputCalculValue').show().html(formula_notice_2);
                }

                if (!$user_value || $user_value == 0) {

                    $('#' + val + '_outputCalculValue').html('');
                    var quantity = $('[name=quantity]').val();
                    var quantityNumber = parseFloat(quantity);
                    array[val + '_option_charge'] = 0;
                    remove_option_display_price(price_input, currency, val, quantityNumber, array);
                }

            });


            // NUMBER CALCULATION INPUTS 2 ARE FILLED 

            $('#' + val + '_calcul_number_custom_field_2').on('input', function (e) {

                var $user_value = $('#' + val + '_calcul_number_custom_field').val();
                var $second_user_value_input = $('#' + val + '_calcul_number_custom_field_2');

                //Ask to use only numbers if filled with letters
                if (e.target.validity.badInput === true) {
                    $('#' + val + '_fillWithNumbers').show();
                    $('#' + val + '_fillWithNumbers').html(formula_notice_1);
                } else {
                    $('#' + val + '_fillWithNumbers').hide();
                }

                var quantity = $('[name=quantity]').val();
                var quantityNumber = parseFloat(quantity).toFixed(2);

                if ($second_user_value_input.val()) {
                    $second_user_value = $('#' + val + '_calcul_number_custom_field_2').val();
                } else if ($second_user_value_input && !$second_user_value_input.val()) {
                    $second_user_value = "";
                }

                var active_formula = array[val + '_calcul_formula'].replace('$user_value', $user_value);

                if ($user_value && $user_value != 0) {

                    //Calculate (Function instead of eval())
                    array[val + '_option_charge'] = Function("return " + active_formula)();

                    var $output_id = $('#' + val + '_outputCalculValue');

                    output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                    //"Free Option" if option=0
                    if (array[val + '_option_charge'] == "0") {
                        $('#' + val + '_outputCalculValue').html(free_option_text);
                    }

                    if (array[val + '_option_charge'] == "0" && $second_user_value_input) {
                        $('#' + val + '_outputCalculValue').html(formula_notice_2);
                        remove_option_display_price(price_input, currency, val, quantityNumber, array);
                    }

                    if (array[val + '_option_charge'] && $second_user_value_input && $second_user_value_input.val() == "") {
                        array[val + '_option_charge'] = 0;
                        $('#' + val + '_outputCalculValue').html(formula_notice_2);
                        remove_option_display_price(price_input, currency, val, quantityNumber, array);
                    }

                }


                if (!$user_value) {
                    $('#' + val + '_outputCalculValue').show().html(formula_notice_3);

                }

                if (!$second_user_value_input || $second_user_value_input.val() == 0) {

                    $('#' + val + '_outputCalculValue').html('');
                }

            });

            // PHONE INPUTS ARE FILLED 

            $('#' + val + '_phone_input').on('input', function (e) {

                var field_option_type = '14';
                var event = e;
                conditional_switching(val, number_of_options, conditionals_array, field_option_type, event, price_input, currency, quantityNumber, array);

                array[val + '_phoneInput'] = $('#' + val + '_phone_input').val();

                var quantity = $('[name=quantity]').val();
                var quantityNumber = parseFloat(quantity).toFixed(2);

                array[val + '_option_charge'] = parseFloat(array[val + '_phone_extra_value']);

                var $output_id = $('#' + val + '_output_phone_value');

                //fill input hidden phone post on input to check value if PHP post
                $('#' + val + '_phone_post').val(array[val + '_phoneInput']);

                output_option_display_price($output_id, price_input, currency, val, quantityNumber, array);

                //"Free Option" if option=0
                if (array[val + '_option_charge'] == "0") {
                    $('#' + val + '_output_phone_value').html(free_option_text);
                }

                if (!array[val + '_phoneInput'] || array[val + '_phoneInput'].charAt(0) === " ") {

                    //prevent white space calculation 
                    $('#' + val + '_phone_input').val("");

                    //remove option output
                    $('#' + val + '_output_phone_value').html('');

                    var quantity = $('[name=quantity]').val();

                    remove_option_display_price(price_input, currency, val, quantityNumber, array);

                }

            });


        });


        function output_option_display_price($output_id, price_input, currency, val, quantityNumber, array) {

            var $output_id = $output_id;
            var price_input = price_input;
            var currency = currency;
            var quantityNumber = quantityNumber;
            var cost_option_text = php_options_values.cost_option_text;
            var total_options = 0;
            var i;

   
            var final_array = permute_locales(val);
        
            //Current option in local storage -> value
            localStorage.setItem('Option_' + final_array[0], array[val + '_option_charge']);

            for (i = 1; i <= number_of_options; i++) {
                //get the other options (0 or value)
                array['option_' + final_array[i-1]] = parseFloat(localStorage.getItem('Option_' + i));
                total_options += array['option_' + final_array[i-1]];
            }

            if (quantity_related) {
                var cost = parseFloat(price) + total_options;
                var option_cost = parseFloat(array[val + '_option_charge'] * quantityNumber).toFixed(2);
                var price_front = parseFloat(cost * quantityNumber).toFixed(2);
            } else {
                var price_front = (parseFloat(price * quantityNumber) + array[val + '_option_charge'] + total_options).toFixed(2);
                var option_cost = parseFloat(array[val + '_option_charge']).toFixed(2);
            };

            $('.' + val + '_cp_output').show();

            // Outputing option cost & new price with options
            // if curreny position = left || left_space, symbol on the left, else on the right.
            if (currency_position == "left") {
                $output_id.html(cost_option_text + ' ' + currency + option_cost);
                var new_price = price_input.html(currency + price_front);
            }

            else if (currency_position == "left_space") {
                $output_id.html(cost_option_text + ' ' + currency + ' ' + option_cost);
                var new_price = price_input.html(currency + ' ' + price_front);
            }

            else if (currency_position == "right") {
                $output_id.html(cost_option_text + ' ' + option_cost + currency);
                var new_price = price_input.html(price_front + currency);
            }

            else if (currency_position == "right_space") {
                $output_id.html(cost_option_text + ' ' + option_cost + ' ' + currency);
                var new_price = price_input.html(price_front + ' ' + currency);
            } else {
                //do something
            };

        }

        // Displaying back original price without options
        function remove_option_display_price(price_input, currency, val, quantityNumber, array) {

            var price_input = price_input;
            var currency = currency;
            var total_options = 0;

   
            var final_array = permute_locales(val);
        
            //Current option in local storage -> value
            localStorage.setItem('Option_' + final_array[0], '0');

            for (i = 1; i <= number_of_options; i++) {
                //get the other options (0 or value)
                array['option_' + final_array[i-1]] = parseFloat(localStorage.getItem('Option_' + i));
                total_options += array['option_' + final_array[i-1]];
            }

            if (quantity_related) {
                var price_front = parseFloat((parseFloat(price) + array[val + '_option_charge'] + total_options) * quantityNumber).toFixed(2);
                var RemovedValue = parseFloat(price_front - (array[val + '_option_charge'] * quantityNumber)).toFixed(2);
            } else {
                var RemovedValue = (parseFloat(price * quantityNumber) + total_options).toFixed(2);
            };


            $('.' + val + '_cp_output').hide();

            //currency positon + removed Value
            if (currency_position == "left") {
                var new_price = price_input.html(currency + RemovedValue);
            } else if (currency_position == "left_space") {
                var new_price = price_input.html(currency + ' ' + RemovedValue);
            } else if (currency_position == "right") {
                var new_price = price_input.html(RemovedValue + currency);
            } else if (currency_position == "right_space") {
                var new_price = price_input.html(RemovedValue + '&nbsp' + currency);
            } else {
                //dosomething
            };

        }

        function permute_locales(val) {

            var val = val;
            var number_of_options = parseFloat(php_options_values.number_of_options);
            var results = [];
            var i;
            var current_option_number = val.replace(/\D/g, '');
            var option_array = Array.from({ length: number_of_options }, (_, i) => i + 1);
            results.push(option_array);

            for (i = 1; i < number_of_options; i++) {
                var option_id_array_copy = option_array.slice();
                option_id_array_copy.splice(i, 1);
                var permuted_array = [option_array[i]].concat(option_id_array_copy);
                results.push(permuted_array);
            }

            var final_array = results[current_option_number - 1];

            return final_array;

        }

        function conditional_switching(val, number_of_options, conditionals_array, field_option_type, event, price_input, currency, quantityNumber, array) {

            var op_id = val;
            var field_id = event.target.id;
            var number_of_options = number_of_options;
            var conditionals_array = conditionals_array;
            var field_option_type = field_option_type;
            var price_input = price_input;
            var currency = currency;
            var quantityNumber = quantityNumber;
            var array = array;

            var condition = [];
            var conditioned = [];

            var i;

            for (i = 1; i <= number_of_options; i++) {
                if (conditionals_array['condition_' + i]) {
                    condition[i] = conditionals_array['condition_' + i]
                };
                if (conditionals_array['conditioned_' + i]) {
                    conditioned[i] = conditionals_array['conditioned_' + i];
                }
            }

            switch (field_option_type) {

                //select dropdown
                case '2':
                    $.each(condition, function (key, value) {

                        if (value) {
                            //current select id is in condition array & current sub id match
                            if (value.slice(0, -1) == field_id) {
                                var selected_index = $('#' + field_id).prop('selectedIndex');
                                if (value.substr(-1) == selected_index) {
                                    $('.' + conditioned[key]).show();
                                } else {
                                    $('.' + conditioned[key]).hide();
                                    var val = conditioned[key].replace('_div', '');
                                    clearing(val);
                                    remove_option_display_price(price_input, currency, val, quantityNumber, array);
                                }
                            };

                        }
                    });
                    break;

                //images
                case '7':
                    $.each(condition, function (key, value) {

                        if (value) {
                            //current img id is in condition array & current sub id match
                            if (value == field_id) {
                                $('.' + conditioned[key]).show();

                            } else {

                                //1- Its condition is an other image field
                                if (value.includes('img')) {

                                    var condition_img_id = value;
                                    var is_img_condition_active = $('#' + condition_img_id).is(':checked');

                                    if (is_img_condition_active) {
                                        //do nothing
                                    } else {
                                        $('.' + conditioned[key]).hide();
                                        var val = conditioned[key].replace('_div', '');
                                        clearing(val);
                                        remove_option_display_price(price_input, currency, val, quantityNumber, array);
                                    }

                                }

                            }
                        }

                    });

                    break;

                //buttons
                case '9':
                    $.each(condition, function (key, value) {

                        if (value) {
                            if (value == field_id) {
                                $('.' + conditioned[key]).show();
                            } else {

                                //if condition is a button
                                if (value.includes('btn')) {
                                    var btn_id = value;
                                    var is_btn_active = $('#' + btn_id).is(':checked');
                                    if (is_btn_active) {
                                        //do nothing
                                    } else {
                                        $('.' + conditioned[key]).hide();
                                        var val = conditioned[key].replace('_div', '');
                                        clearing(val);
                                        remove_option_display_price(price_input, currency, val, quantityNumber, array);
                                    }
                                }
                            }
                        }
                    });
                    break;

                //Checkboxes
                case '3':
                    $.each(condition, function (key, value) {

                        if (value) {

                            if (value == field_id) {

                                if ($('.' + conditioned[key]).is(':hidden')) {
                                    $('.' + conditioned[key]).show();
                                } else {
                                    $('.' + conditioned[key]).hide();
                                    var val = conditioned[key].replace('_div', '');
                                    clearing(val);
                                    remove_option_display_price(price_input, currency, val, quantityNumber, array);
                                };

                            }
                        }

                    });
                    break;


                //radio buttons
                case '5':
                    $.each(condition, function (key, value) {

                        if (value) {

                            if (value == field_id) {
                                $('.' + conditioned[key]).show();
                            } else {
                                //if there is another condition which is radio button too
                                if (value.includes('radio')) {
                                    var radio_id = value;
                                    var is_radio_active = $('#' + radio_id).is(':checked');
                                    if (is_radio_active) {
                                        //do nothing
                                    } else {
                                        $('.' + conditioned[key]).hide();
                                        var val = conditioned[key].replace('_div', '');
                                        clearing(val);
                                        remove_option_display_price(price_input, currency, val, quantityNumber, array);
                                    }

                                }

                            }

                        }

                    });
                    break;

                //text, textarea, number, email, color, number calculation, url, phone
                case '1':
                case '4':
                case '6':
                case '8':
                case '10':
                case '11':
                case '12':
                case '14':
                    $.each(condition, function (key, value) {

                        if (value) {

                            if (value == field_id) {
                                $('.' + conditioned[key]).show();

                                if (event.target.value == "" && $('.' + conditioned[key])) {
                                    $('.' + conditioned[key]).hide();
                                    var val = conditioned[key].replace('_div', '');
                                    clearing(val);
                                    remove_option_display_price(price_input, currency, val, quantityNumber, array);
                                }

                            }

                        }

                    });
                    break;

            }

        }


        function clearing(val) {

            //uncheck radio 

            var current_radio_group = $('input[name=' + val + '_radio_value]');
            if (current_radio_group) {
                current_radio_group.removeAttr('checked');
                current_radio_group.checkboxradio('refresh');
            };

            //uncheck img
            var isImage = $('.' + val + '_div').find('.cpm_img_swap img');
            if (isImage) {
                $('.' + val + '_div').find('.cpm_img_swap img').removeClass('wpcb_img_focus');
                var current_img_group = $('input[name=' + val + '_img_radio]');
                current_img_group.removeAttr('checked');
                current_img_group.checkboxradio('refresh');
            };

            //Disable buttons
            var current_btn_group = $('input[name=' + val + '_btn_radio]');
            if (current_btn_group) {
                current_btn_group.removeAttr('checked');
                current_btn_group.checkboxradio('refresh');
            };

            //clear select
            var isSelect = $('.' + val + '_select_input');
            if (isSelect) {
                $('.' + val + '_select_input').val("");
                $('#' + val + '_select_input').selectmenu('refresh');
            }

            //uncheck img
            $('.' + val + '_div').find('.cpm_img_swap img').removeClass('wpcb_img_focus');
            var current_img_group = $('input[name=' + val + '_img_radio]');
            if (current_img_group) {
                current_img_group.removeAttr('checked');
                current_img_group.checkboxradio('refresh');
            }

            //uncheck checkboxes
            var isCheckboxes = $('.' + val + '_div').find('.checkboxes');
            if (isCheckboxes) {
                $('.' + val + '_div').find('.checkboxes').removeAttr('checked');
                $('.' + val + '_div').find('.checkboxes').checkboxradio('refresh');
            };

            //clear inputs 
            var isInputs = $('.' + val + '_div').find('input');
            if (isInputs) {
                $('.' + val + '_div').find('input').each(function () {
                    if ($(this).prop('type') != 'radio') {
                        $(this).val('');
                    }
                });
            }
        }

    }); 



})(jQuery);