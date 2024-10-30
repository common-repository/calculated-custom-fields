//Prevent var not defined
var php_admin_options_values = "null";


(function ($) {

    /**
     * Admin side JQ, options menu tabs + functions
     * 
     */

   
    var option_identificator_id = "#op1";
    var option_identificator_class = ".op1";
    var option_identificator = "op1";


    $(function () {

        
        var quantity_related = php_admin_options_values.quantity_related;
        var number_of_options = parseFloat(php_admin_options_values.number_of_options);

        if (quantity_related) {
            $("#quantity_related").prop("checked", true);
        } 

        $(document).on("click", '.tablinks', function(e) { 
          
            var index = $(".tablinks").index(this);

            //alert($(this).prev().find('i').attr('class'));
            
            if(this.id == "setting_tab_link") {
                //open settings
                openTabs('settings'); 
                $(this).toggleClass('active');

            } else if (this.id == "conditional_link") {
                openTabs('conditional_tab'); 
                $(this).toggleClass('active');
                
            } else if (this.id == "add_new_tab") {

                //add new option tab
                var last_option_number = parseFloat(this.previousElementSibling.id);
                var option_number = last_option_number +1;
               
          
                //Block to 11 (at 12 on click)
                if (option_number == number_of_options +1) {

                    e.preventDefault();
                    for (let i = 1; i <= number_of_options; i++) {
                        if ($('#' + i + '.tablinks').find('i').attr('class') && $('#' + i + '.tablinks').find('i').attr('class').includes('on')) {
                            var is_option_active = 'on';
                        } else {
                            var is_option_active = 'off';
                        };
                        $('#' + i + '.tablinks').remove();
                        $(this).before('<a class="tablinks" id="' + i + '"><i class="fa fa-toggle-' + is_option_active + '" aria-hidden="true"></i> Field ' + i + '</a>');
                    }

                    $(this).remove();

                } else {
                    $(this).before('<a class="tablinks" id="' + option_number + '"><i class="fa fa-toggle-off" aria-hidden="true"></i> Field ' + option_number + '</a>');
                    var option_tab = 'op' + option_number + '_tab';
                    openTabs(option_tab); 
                    $(this.previousElementSibling).toggleClass('active');
                    $(this.previousElementSibling).click();
                }
            } 

            else {
                //dom ready functions for op1 top down. 

                var option_number = this.id;
                var option_tab = 'op' + option_number + '_tab';
                
                openTabs(option_tab); 
                $(this).toggleClass('active');
                var option_identificator = 'op' + option_number;
                var option_identificator_id = '#op' + option_number;
                var option_identificator_class = '.op' + option_number;
                display_input_type(option_identificator_id, option_identificator_class);
                admin_btn_switching(option_identificator_class);
                display_btn_number(option_identificator_id, option_identificator_class);
                upload_img_swp(option_identificator_class);
                reveal_filled_section(option_identificator, option_identificator_id, option_identificator_class);
                check_submit_validate(option_identificator_id);  
            }
               

        });

        function openTabs(option_tab) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(option_tab).style.display = "block";
        }



        /* Display admin sub section according input choose */

        function display_input_type(option_identificator_id, option_identificator_class) {

            var selectedOption = $(option_identificator_id + '_field_type').val();

            if (selectedOption == "14") {
                $(option_identificator_class + '_phone_div').css("display", "block");
            }
            else if (selectedOption == "13") {
                $(option_identificator_class + '_upload_div').css("display", "block");
            }
            else if (selectedOption == "12") {
                $(option_identificator_class + '_url_div').css("display", "block");
            }
            else if (selectedOption == "11") {
                $(option_identificator_class + '_calculation_div').css("display", "block");
            }
            else if (selectedOption == "10") {
                $(option_identificator_class + '_color_div').css("display", "block");
            }
            else if (selectedOption == "9") {
                $(option_identificator_class + '_button_swap_div').css("display", "block");
            }
            else if (selectedOption == "8") {
                $(option_identificator_class + '_email_div').css("display", "block");
            }
            else if (selectedOption == "7") {
                $(option_identificator_class + '_image_div').css("display", "block");
            }
            else if (selectedOption == "6") {
                $(option_identificator_class + '_number_div').css("display", "block");
            }
            else if (selectedOption == "5") {
                $(option_identificator_class + '_radio_div').css("display", "block");
            }
            else if (selectedOption == "4") {
                $(option_identificator_class + '_textarea_div').css("display", "block");
            }
            else if (selectedOption == "3") {
                $(option_identificator_class + '_checkbox_div').css("display", "block");
            }
            else if (selectedOption == "2") {
                $(option_identificator_class + '_select_div').css("display", "block");
            }
            else if (selectedOption == "1") {
                $(option_identificator_class + '_text_div').css("display", "block");
            }
            else {
                $(option_identificator_class + '_checkbox_div').css("display", "none");
                $(option_identificator_class + '_select_div').css("display", "none");
                $(option_identificator_class + '_text_div').css("display", "none");
                $(option_identificator_class + '_radio_div').css("display", "none");
                $(option_identificator_class + '_requiredCheck_field').css("display", "none");
                $(option_identificator_class + '_disable_output_field').css("display", "none");
                $(option_identificator_class + '_input_placeholder_field').css("display", "none");
                $(option_identificator_class + '_number_div').css("display", "none");
                $(option_identificator_class + '_email_div').css("display", "none");
                $(option_identificator_class + '_button_swap_div').css("display", "none");
                $(option_identificator_class + '_color_div').css("display", "none");
                $(option_identificator_class + '_calculation_div').css("display", "none");
                $(option_identificator_class + '_url_div').css("display", "none");
                $(option_identificator_class + '_upload_div').css("display", "none");
                $(option_identificator_class + '_phone_div').css("display", "none");
            }

            $(option_identificator_id + '_field_type').change(function () {

                $('input').css('border-color', '#8c8f94');
                $(option_identificator_id + '_validation_message').html('');
                var selectedOption = $(option_identificator_id + '_field_type').val();

                if (selectedOption == "14") {
                    $(option_identificator_class + '_phone_div').css("display", "block");
                    $(option_identificator_class + '_upload_div').css("display", "none");
                    $(option_identificator_class + '_url_div').css("display", "none");
                    $(option_identificator_class + '_calculation_div').css("display", "none");
                    $(option_identificator_class + '_color_div').css("display", "none");
                    $(option_identificator_class + '_button_swap_div').css("display", "none");
                    $(option_identificator_class + '_email_div').css("display", "none");
                    $(option_identificator_class + '_requiredCheck_field').css("display", "block");
                    $(option_identificator_class + '_disable_output_field').css("display", "block");
                    $(option_identificator_class + '_input_placeholder_field').css("display", "block");
                    $(option_identificator_class + '_checkbox_div').css("display", "none");
                    $(option_identificator_class + '_select_div').css("display", "none");
                    $(option_identificator_class + '_text_div').css("display", "none");
                    $(option_identificator_class + '_textarea_div').css("display", "none");
                    $(option_identificator_class + '_radio_div').css("display", "none");
                    $(option_identificator_class + '_number_div').css("display", "none");
                    $(option_identificator_class + '_image_div').css("display", "none");
                }

                else if (selectedOption == "13") {
                    $(option_identificator_class + '_upload_div').css("display", "block");
                    $(option_identificator_class + '_url_div').css("display", "none");
                    $(option_identificator_class + '_calculation_div').css("display", "none");
                    $(option_identificator_class + '_color_div').css("display", "none");
                    $(option_identificator_class + '_button_swap_div').css("display", "none");
                    $(option_identificator_class + '_email_div').css("display", "none");
                    $(option_identificator_class + '_requiredCheck_field').css("display", "block");
                    $(option_identificator_class + '_disable_output_field').css("display", "block");
                    $(option_identificator_class + '_input_placeholder_field').css("display", "block");
                    $(option_identificator_class + '_checkbox_div').css("display", "none");
                    $(option_identificator_class + '_select_div').css("display", "none");
                    $(option_identificator_class + '_text_div').css("display", "none");
                    $(option_identificator_class + '_textarea_div').css("display", "none");
                    $(option_identificator_class + '_radio_div').css("display", "none");
                    $(option_identificator_class + '_number_div').css("display", "none");
                    $(option_identificator_class + '_image_div').css("display", "none");
                    $(option_identificator_class + '_phone_div').css("display", "none");
                }
                else if (selectedOption == "12") {
                    $(option_identificator_class + '_url_div').css("display", "block");
                    $(option_identificator_class + '_calculation_div').css("display", "none");
                    $(option_identificator_class + '_color_div').css("display", "none");
                    $(option_identificator_class + '_button_swap_div').css("display", "none");
                    $(option_identificator_class + '_email_div').css("display", "none");
                    $(option_identificator_class + '_requiredCheck_field').css("display", "block");
                    $(option_identificator_class + '_disable_output_field').css("display", "block");
                    $(option_identificator_class + '_input_placeholder_field').css("display", "block");
                    $(option_identificator_class + '_checkbox_div').css("display", "none");
                    $(option_identificator_class + '_select_div').css("display", "none");
                    $(option_identificator_class + '_text_div').css("display", "none");
                    $(option_identificator_class + '_textarea_div').css("display", "none");
                    $(option_identificator_class + '_radio_div').css("display", "none");
                    $(option_identificator_class + '_number_div').css("display", "none");
                    $(option_identificator_class + '_image_div').css("display", "none");
                    $(option_identificator_class + '_upload_div').css("display", "none");
                    $(option_identificator_class + '_phone_div').css("display", "none");
                }

                else if (selectedOption == "11") {

                    $(option_identificator_class + '_calculation_div').css("display", "block");
                    $(option_identificator_class + '_color_div').css("display", "none");
                    $(option_identificator_class + '_button_swap_div').css("display", "none");
                    $(option_identificator_class + '_email_div').css("display", "none");
                    $(option_identificator_class + '_requiredCheck_field').css("display", "block");
                    $(option_identificator_class + '_disable_output_field').css("display", "block");
                    $(option_identificator_class + '_input_placeholder_field').css("display", "block");
                    $(option_identificator_class + '_checkbox_div').css("display", "none");
                    $(option_identificator_class + '_select_div').css("display", "none");
                    $(option_identificator_class + '_text_div').css("display", "none");
                    $(option_identificator_class + '_textarea_div').css("display", "none");
                    $(option_identificator_class + '_radio_div').css("display", "none");
                    $(option_identificator_class + '_number_div').css("display", "none");
                    $(option_identificator_class + '_image_div').css("display", "none");
                    $(option_identificator_class + '_url_div').css("display", "none");
                    $(option_identificator_class + '_upload_div').css("display", "none");
                    $(option_identificator_class + '_phone_div').css("display", "none");
                }
                else if (selectedOption == "10") {

                    $(option_identificator_class + '_color_div').css("display", "block");
                    $(option_identificator_class + '_button_swap_div').css("display", "none");
                    $(option_identificator_class + '_email_div').css("display", "none");
                    $(option_identificator_class + '_requiredCheck_field').css("display", "block");
                    $(option_identificator_class + '_disable_output_field').css("display", "block");
                    $(option_identificator_class + '_input_placeholder_field').css("display", "none");
                    $(option_identificator_class + '_checkbox_div').css("display", "none");
                    $(option_identificator_class + '_select_div').css("display", "none");
                    $(option_identificator_class + '_text_div').css("display", "none");
                    $(option_identificator_class + '_textarea_div').css("display", "none");
                    $(option_identificator_class + '_radio_div').css("display", "none");
                    $(option_identificator_class + '_number_div').css("display", "none");
                    $(option_identificator_class + '_image_div').css("display", "none");
                    $(option_identificator_class + '_calculation_div').css("display", "none");
                    $(option_identificator_class + '_url_div').css("display", "none");
                    $(option_identificator_class + '_upload_div').css("display", "none");
                    $(option_identificator_class + '_phone_div').css("display", "none");

                } else if (selectedOption == "9") {
                    $(option_identificator_class + '_button_swap_div').css("display", "block");
                    $(option_identificator_class + '_email_div').css("display", "none");
                    $(option_identificator_class + '_requiredCheck_field').css("display", "block");
                    $(option_identificator_class + '_disable_output_field').css("display", "block");
                    $(option_identificator_class + '_input_placeholder_field').css("display", "none");
                    $(option_identificator_class + '_checkbox_div').css("display", "none");
                    $(option_identificator_class + '_select_div').css("display", "none");
                    $(option_identificator_class + '_text_div').css("display", "none");
                    $(option_identificator_class + '_textarea_div').css("display", "none");
                    $(option_identificator_class + '_radio_div').css("display", "none");
                    $(option_identificator_class + '_number_div').css("display", "none");
                    $(option_identificator_class + '_image_div').css("display", "none");
                    $(option_identificator_class + '_color_div').css("display", "none");
                    $(option_identificator_class + '_calculation_div').css("display", "none");
                    $(option_identificator_class + '_url_div').css("display", "none");
                    $(option_identificator_class + '_upload_div').css("display", "none");
                    $(option_identificator_class + '_phone_div').css("display", "none");
                }

                else if (selectedOption == "8") {
                    $(option_identificator_class + '_email_div').css("display", "block");
                    $(option_identificator_class + '_requiredCheck_field').css("display", "block");
                    $(option_identificator_class + '_disable_output_field').css("display", "block");
                    $(option_identificator_class + '_input_placeholder_field').css("display", "block");
                    $(option_identificator_class + '_checkbox_div').css("display", "none");
                    $(option_identificator_class + '_select_div').css("display", "none");
                    $(option_identificator_class + '_text_div').css("display", "none");
                    $(option_identificator_class + '_textarea_div').css("display", "none");
                    $(option_identificator_class + '_radio_div').css("display", "none");
                    $(option_identificator_class + '_number_div').css("display", "none");
                    $(option_identificator_class + '_image_div').css("display", "none");
                    $(option_identificator_class + '_button_swap_div').css("display", "none");
                    $(option_identificator_class + '_color_div').css("display", "none");
                    $(option_identificator_class + '_calculation_div').css("display", "none");
                    $(option_identificator_class + '_url_div').css("display", "none");
                    $(option_identificator_class + '_upload_div').css("display", "none");
                    $(option_identificator_class + '_phone_div').css("display", "none");
                }

                else if (selectedOption == "7") {
                    $(option_identificator_class + '_image_div').css("display", "block");
                    $(option_identificator_class + '_requiredCheck_field').css("display", "block");
                    $(option_identificator_class + '_disable_output_field').css("display", "block");
                    $(option_identificator_class + '_input_placeholder_field').css("display", "none");
                    $(option_identificator_class + '_checkbox_div').css("display", "none");
                    $(option_identificator_class + '_select_div').css("display", "none");
                    $(option_identificator_class + '_text_div').css("display", "none");
                    $(option_identificator_class + '_textarea_div').css("display", "none");
                    $(option_identificator_class + '_radio_div').css("display", "none");
                    $(option_identificator_class + '_number_div').css("display", "none");
                    $(option_identificator_class + '_email_div').css("display", "none");
                    $(option_identificator_class + '_button_swap_div').css("display", "none");
                    $(option_identificator_class + '_color_div').css("display", "none");
                    $(option_identificator_class + '_calculation_div').css("display", "none");
                    $(option_identificator_class + '_url_div').css("display", "none");
                    $(option_identificator_class + '_upload_div').css("display", "none");
                    $(option_identificator_class + '_phone_div').css("display", "none");
                }

                else if (selectedOption == "6") {
                    $(option_identificator_class + '_number_div').css("display", "block");
                    $(option_identificator_class + '_requiredCheck_field').css("display", "block");
                    $(option_identificator_class + '_disable_output_field').css("display", "block");
                    $(option_identificator_class + '_input_placeholder_field').css("display", "block");
                    $(option_identificator_class + '_checkbox_div').css("display", "none");
                    $(option_identificator_class + '_select_div').css("display", "none");
                    $(option_identificator_class + '_text_div').css("display", "none");
                    $(option_identificator_class + '_textarea_div').css("display", "none");
                    $(option_identificator_class + '_radio_div').css("display", "none");
                    $(option_identificator_class + '_image_div').css("display", "none");
                    $(option_identificator_class + '_email_div').css("display", "none");
                    $(option_identificator_class + '_button_swap_div').css("display", "none");
                    $(option_identificator_class + '_color_div').css("display", "none");
                    $(option_identificator_class + '_calculation_div').css("display", "none");
                    $(option_identificator_class + '_url_div').css("display", "none");
                    $(option_identificator_class + '_upload_div').css("display", "none");
                    $(option_identificator_class + '_phone_div').css("display", "none");
                }

                else if (selectedOption == "5") {
                    $(option_identificator_class + '_radio_div').css("display", "block");
                    $(option_identificator_class + '_requiredCheck_field').css("display", "block");
                    $(option_identificator_class + '_disable_output_field').css("display", "block");
                    $(option_identificator_class + '_input_placeholder_field').css("display", "none");
                    $(option_identificator_class + '_checkbox_div').css("display", "none");
                    $(option_identificator_class + '_select_div').css("display", "none");
                    $(option_identificator_class + '_text_div').css("display", "none");
                    $(option_identificator_class + '_textarea_div').css("display", "none");
                    $(option_identificator_class + '_number_div').css("display", "none");
                    $(option_identificator_class + '_image_div').css("display", "none");
                    $(option_identificator_class + '_email_div').css("display", "none");
                    $(option_identificator_class + '_button_swap_div').css("display", "none");
                    $(option_identificator_class + '_color_div').css("display", "none");
                    $(option_identificator_class + '_calculation_div').css("display", "none");
                    $(option_identificator_class + '_url_div').css("display", "none");
                    $(option_identificator_class + '_upload_div').css("display", "none");
                    $(option_identificator_class + '_phone_div').css("display", "none");
                }

                else if (selectedOption == "4") {
                    $(option_identificator_class + '_textarea_div').css("display", "block");
                    $(option_identificator_class + '_requiredCheck_field').css("display", "block");
                    $(option_identificator_class + '_disable_output_field').css("display", "block");
                    $(option_identificator_class + '_input_placeholder_field').css("display", "block");
                    $(option_identificator_class + '_checkbox_div').css("display", "none");
                    $(option_identificator_class + '_select_div').css("display", "none");
                    $(option_identificator_class + '_text_div').css("display", "none");
                    $(option_identificator_class + '_radio_div').css("display", "none");
                    $(option_identificator_class + '_image_div').css("display", "none");
                    $(option_identificator_class + '_email_div').css("display", "none");
                    $(option_identificator_class + '_number_div').css("display", "none");
                    $(option_identificator_class + '_button_swap_div').css("display", "none");
                    $(option_identificator_class + '_color_div').css("display", "none");
                    $(option_identificator_class + '_calculation_div').css("display", "none");
                    $(option_identificator_class + '_url_div').css("display", "none");
                    $(option_identificator_class + '_upload_div').css("display", "none");
                    $(option_identificator_class + '_phone_div').css("display", "none");
                }

                else if (selectedOption == "3") {
                    $(option_identificator_class + '_checkbox_div').css("display", "block");
                    $(option_identificator_class + '_requiredCheck_field').css("display", "block");
                    $(option_identificator_class + '_disable_output_field').css("display", "block");
                    $(option_identificator_class + '_input_placeholder_field').css("display", "none");
                    $(option_identificator_class + '_select_div').css("display", "none");
                    $(option_identificator_class + '_text_div').css("display", "none");
                    $(option_identificator_class + '_radio_div').css("display", "none");
                    $(option_identificator_class + '_textarea_div').css("display", "none");
                    $(option_identificator_class + '_number_div').css("display", "none");
                    $(option_identificator_class + '_image_div').css("display", "none");
                    $(option_identificator_class + '_email_div').css("display", "none");
                    $(option_identificator_class + '_button_swap_div').css("display", "none");
                    $(option_identificator_class + '_color_div').css("display", "none");
                    $(option_identificator_class + '_calculation_div').css("display", "none");
                    $(option_identificator_class + '_url_div').css("display", "none");
                    $(option_identificator_class + '_upload_div').css("display", "none");
                    $(option_identificator_class + '_phone_div').css("display", "none");
                }
                else if (selectedOption == "2") {
                    $(option_identificator_class + '_select_div').css("display", "block");
                    $(option_identificator_class + '_requiredCheck_field').css("display", "block");
                    $(option_identificator_class + '_disable_output_field').css("display", "block");
                    $(option_identificator_class + '_input_placeholder_field').css("display", "none");
                    $(option_identificator_class + '_checkbox_div').css("display", "none");
                    $(option_identificator_class + '_text_div').css("display", "none");
                    $(option_identificator_class + '_radio_div').css("display", "none");
                    $(option_identificator_class + '_textarea_div').css("display", "none");
                    $(option_identificator_class + '_number_div').css("display", "none");
                    $(option_identificator_class + '_image_div').css("display", "none");
                    $(option_identificator_class + '_email_div').css("display", "none");
                    $(option_identificator_class + '_button_swap_div').css("display", "none");
                    $(option_identificator_class + '_color_div').css("display", "none");
                    $(option_identificator_class + '_calculation_div').css("display", "none");
                    $(option_identificator_class + '_url_div').css("display", "none");
                    $(option_identificator_class + '_upload_div').css("display", "none");
                    $(option_identificator_class + '_phone_div').css("display", "none");
                }

                else if (selectedOption == "1") {
                    $(option_identificator_class + '_text_div').css("display", "block");
                    $(option_identificator_class + '_requiredCheck_field').css("display", "block");
                    $(option_identificator_class + '_disable_output_field').css("display", "block");
                    $(option_identificator_class + '_input_placeholder_field').css("display", "block");
                    $(option_identificator_class + '_checkbox_div').css("display", "none");
                    $(option_identificator_class + '_select_div').css("display", "none");
                    $(option_identificator_class + '_radio_div').css("display", "none");
                    $(option_identificator_class + '_textarea_div').css("display", "none");
                    $(option_identificator_class + '_number_div').css("display", "none");
                    $(option_identificator_class + '_image_div').css("display", "none");
                    $(option_identificator_class + '_email_div').css("display", "none");
                    $(option_identificator_class + '_button_swap_div').css("display", "none");
                    $(option_identificator_class + '_color_div').css("display", "none");
                    $(option_identificator_class + '_calculation_div').css("display", "none");
                    $(option_identificator_class + '_url_div').css("display", "none");
                    $(option_identificator_class + '_upload_div').css("display", "none");
                    $(option_identificator_class + '_phone_div').css("display", "none");
                } else {
                    $(option_identificator_class + '_select_div').css("display", "none");
                    $(option_identificator_class + '_checkbox_div').css("display", "none");
                    $(option_identificator_class + '_text_div').css("display", "none");
                    $(option_identificator_class + '_radio_div').css("display", "none");
                    $(option_identificator_class + '_requiredCheck_field').css("display", "none");
                    $(option_identificator_class + '_disable_output_field').css("display", "none");
                    $(option_identificator_class + '_input_placeholder_field').css("display", "none");
                    $(option_identificator_class + '_textarea_div').css("display", "none");
                    $(option_identificator_class + '_number_div').css("display", "none");
                    $(option_identificator_class + '_image_div').css("display", "none");
                    $(option_identificator_class + '_email_div').css("display", "none");
                    $(option_identificator_class + '_button_swap_div').css("display", "none");
                    $(option_identificator_class + '_color_div').css("display", "none");
                    $(option_identificator_class + '_calculation_div').css("display", "none");
                    $(option_identificator_class + '_url_div').css("display", "none");
                    $(option_identificator_class + '_upload_div').css("display", "none");
                    $(option_identificator_class + '_phone_div').css("display", "none");
                }

            });

            /* Select placeholder value if empty */
            var selectdefautText = $(option_identificator_id + '_select_no_option').val();
            if (selectdefautText == "") { $(option_identificator_id + '_select_no_option').val('Select an option'); }

        }

        /* Button swap number switching */

        function display_btn_number(option_identificator_id, option_identificator_class) {

            var numberOfButton = $(option_identificator_id + '_btnswap_number').val();

            if (numberOfButton == "1") {

                $(option_identificator_class + '_button_swap_4').css("display", "block");
                $(option_identificator_class + '_button_swap_5').css("display", "none");
                $(option_identificator_class + '_button_swap_6').css("display", "none");

            } else if (numberOfButton == "2") {

                $(option_identificator_class + '_button_swap_4').css("display", "block");
                $(option_identificator_class + '_button_swap_5').css("display", "block");
                $(option_identificator_class + '_button_swap_6').css("display", "none");

            } else if (numberOfButton == "3") {

                $(option_identificator_class + '_button_swap_4').css("display", "block");
                $(option_identificator_class + '_button_swap_5').css("display", "block");
                $(option_identificator_class + '_button_swap_6').css("display", "block");

            } else {

                $(option_identificator_class + '_button_swap_4').css("display", "none");
                $(option_identificator_class + '_button_swap_5').css("display", "none");
                $(option_identificator_class + '_button_swap_6').css("display", "none");

            }

            $(option_identificator_id + '_btnswap_number').change(function () {

                var numberOfButton = $(option_identificator_id + '_btnswap_number').val();

                if (numberOfButton == "1") {

                    $(option_identificator_class + '_button_swap_4').css("display", "block");
                    $(option_identificator_class + '_button_swap_5').css("display", "none");
                    $(option_identificator_class + '_button_swap_6').css("display", "none");
                    $(option_identificator_id + '_btnswap_name_5').val('');
                    $(option_identificator_id + '_btnswap_value_5').val('');
                    $(option_identificator_id + '_btnswap_name_6').val('');
                    $(option_identificator_id + '_btnswap_value_6').val('');

                } else if (numberOfButton == "2") {

                    $(option_identificator_class + '_button_swap_4').css("display", "block");
                    $(option_identificator_class + '_button_swap_5').css("display", "block");
                    $(option_identificator_class + '_button_swap_6').css("display", "none");
                    $(option_identificator_id + '_btnswap_name_6').val('');
                    $(option_identificator_id + '_btnswap_value_6').val('');

                } else if (numberOfButton == "3") {

                    $(option_identificator_class + '_button_swap_4').css("display", "block");
                    $(option_identificator_class + '_button_swap_5').css("display", "block");
                    $(option_identificator_class + '_button_swap_6').css("display", "block");

                } else {

                    $(option_identificator_class + '_button_swap_4').css("display", "none");
                    $(option_identificator_class + '_button_swap_5').css("display", "none");
                    $(option_identificator_class + '_button_swap_6').css("display", "none");
                    $(option_identificator_id + '_btnswap_name_4').val('');
                    $(option_identificator_id + '_btnswap_value_4').val('');
                    $(option_identificator_id + '_btnswap_name_5').val('');
                    $(option_identificator_id + '_btnswap_value_5').val('');
                    $(option_identificator_id + '_btnswap_name_6').val('');
                    $(option_identificator_id + '_btnswap_value_6').val('');
                }

            });

        }

        /*
        *
        * Custom uploader for image swap
        *
        */

        function upload_img_swp(option_identificator_class) {

            // on upload button click
           $(option_identificator_class + '_img-upl').unbind("click").bind("click", function (e) {
            
                var button = $(this),

                    custom_uploader = wp.media({
                        title: 'Insert image',
                        library: {
                            // uploadedTo : wp.media.view.settings.post.id, // attach to the current post?
                            type: 'image'
                        },
                        button: {
                            text: 'Use this image' // button label text
                        },
                        multiple: false
                    }).on('select', function () { // it also has "open" and "close" events
                        var attachment = custom_uploader.state().get('selection').first().toJSON();
                        button.html('<img width="150" height="150" style="display:block; margin-bottom:2px;margin-top: -35px;" src="' + attachment.url + '">').next().show().next().val(attachment.id);


                    }).open();


            });

            // on remove button click
            $('body').on('click', option_identificator_class + '_img-rmv', function (e) {

                e.preventDefault();

                var button = $(this);
                button.next().val(''); // emptying the hidden field
                button.hide().prev().html('Upload image');
            });

        }


        /* Admin buttons js */

        function admin_btn_switching(option_identificator_class) {

           
           
                $(option_identificator_class + '_national_phone').show();
               
               /* Open and close file types restriction panel */

               $("._check_all").click(function () {
                $(option_identificator_class+ '_mimes_checkboxes').each(function(){
                    $(this).prop('checked', !$(this)[0].checked);
                 })});
    
               $(option_identificator_class + "_add_upload_restriction").click(function () {
                $(this).next().css('display', 'block');
                $('.file_types_chk').css('display', 'block');
                $(this).css('display', 'none');
                $(option_identificator_class + "_close_restriction").css('display', 'block');
            });

            $(option_identificator_class + "_close_restriction").click(function () {
                $(this).next().css('display', 'none');
                $(this).css('display', 'none');
                $(option_identificator_class + "_add_upload_restriction").css('display', 'block');
            });
    
            /* Add and remove number calculation */

            $(option_identificator_class + "_add_calcul").click(function () {

                $(this).next().css('display', 'block');
                $(this).css('display', 'none');
                $(option_identificator_class + "_remove_calcul").css('display', 'block');

            });

            $(option_identificator_class + "_remove_calcul").click(function () {
                $(this).parent('div').css('display', 'none');
                $(this).css('display', 'none');
                $(option_identificator_class + "_add_calcul").css('display', 'block');
                var inputs = $(this).parent('div').find('input');
                inputs.val('');
            });

            /* Add and remove img swap */

            $(option_identificator_class + "_add_image").click(function () {

                $(this).next().css('display', 'block');
                $(this).css('display', 'none');
                $(option_identificator_class + "_remove_image").css('display', 'block');

            });

            $(option_identificator_class + "_remove_image").click(function () {
                $(this).parent('div').css('display', 'none');
                $(this).css('display', 'none');
                $(option_identificator_class + "_add_image").css('display', 'block');
                var inputs = $(this).parent('div').find('input');
                inputs.val('');
            });

            $(option_identificator_class + "_add_image_2").click(function () {

                $(this).next().css('display', 'block');
                $(this).css('display', 'none');
                $(option_identificator_class + "_remove_image_2").css('display', 'block');

            });

            $(option_identificator_class + "_remove_image_2").click(function () {
                $(this).parent('div').css('display', 'none');
                $(this).css('display', 'none');
                $(option_identificator_class + "_add_image_2").css('display', 'block');
                var inputs = $(this).parent('div').find('input');
                inputs.val('');
            });


            /* Add and remove radio */

            $(option_identificator_class + "_add_radio").click(function () {

                $(this).next().css('display', 'block');
                $(this).css('display', 'none');
                $(option_identificator_class + "_remove_radio").css('display', 'block');

            });

            $(option_identificator_class + "_remove_radio").click(function () {
                $(this).parent('div').css('display', 'none');
                $(this).css('display', 'none');
                $(option_identificator_class + "_add_radio").css('display', 'block');
                var inputs = $(this).parent('div').find('input');
                inputs.val('');
            });

            $(option_identificator_class + "_add_radio_2").click(function () {

                $(this).next().css('display', 'block');
                $(this).css('display', 'none');
                $(option_identificator_class + "_remove_radio_2").css('display', 'block');

            });

            $(option_identificator_class + "_remove_radio_2").click(function () {
                $(this).parent('div').css('display', 'none');
                $(this).css('display', 'none');
                $(option_identificator_class + "_add_radio_2").css('display', 'block');
                var inputs = $(this).parent('div').find('input');
                inputs.val('');
            });


            /* Add and remove select */

            $(option_identificator_class + "_add_select").click(function () {

                $(this).next().css('display', 'block');
                $(this).css('display', 'none');
                $(option_identificator_class + "_remove_select").css('display', 'block');

            });

            $(option_identificator_class + "_remove_select").click(function () {
                $(this).parent('div').css('display', 'none');
                $(this).css('display', 'none');
                $(option_identificator_class + "_add_select").css('display', 'block');
                var inputs = $(this).parent('div').find('input');
                inputs.val('');
            });

            $(option_identificator_class + "_add_select_2").click(function () {

                $(this).next().css('display', 'block');
                $(this).css('display', 'none');
                $(option_identificator_class + "_remove_select_2").css('display', 'block');

            });

            $(option_identificator_class + "_remove_select_2").click(function () {
                $(this).parent('div').css('display', 'none');
                $(this).css('display', 'none');
                $(option_identificator_class + "_add_select_2").css('display', 'block');
                var inputs = $(this).parent('div').find('input');
                inputs.val('');
            });

            $(option_identificator_class + "_add_select_3").click(function () {

                $(this).next().css('display', 'block');
                $(this).css('display', 'none');
                $(option_identificator_class + "_remove_select_3").css('display', 'block');

            });

            $(option_identificator_class + "_remove_select_3").click(function () {
                $(this).parent('div').css('display', 'none');
                $(this).css('display', 'none');
                $(option_identificator_class + "_add_select_3").css('display', 'block');
                var inputs = $(this).parent('div').find('input');
                inputs.val('');
            });


            $(option_identificator_class + "_add_select_4").click(function () {

                $(this).next().css('display', 'block');
                $(this).css('display', 'none');
                $(option_identificator_class + "_remove_select_4").css('display', 'block');

            });

            $(option_identificator_class + "_remove_select_4").click(function () {
                $(this).parent('div').css('display', 'none');
                $(this).css('display', 'none');
                $(option_identificator_class + "_add_select_4").css('display', 'block');
                var inputs = $(this).parent('div').find('input');
                inputs.val('');
            });



            /* Add and remove checkbox */

            $(option_identificator_class + "_add_chk").click(function () {

                $(this).next().css('display', 'block');
                $(this).css('display', 'none');
                $(option_identificator_class + "_remove_chk").css('display', 'block');

            });

            $(option_identificator_class + "_remove_chk").click(function () {
                $(this).parent('div').css('display', 'none');
                $(this).css('display', 'none');
                $(option_identificator_class + "_add_chk").css('display', 'block');
                var inputs = $(this).parent('div').find('input');
                inputs.val('');
            });

            $(option_identificator_class + "_add_chk_2").click(function () {

                $(this).next().css('display', 'block');
                $(this).css('display', 'none');
                $(option_identificator_class + "_remove_chk_2").css('display', 'block');

            });

            $(option_identificator_class + "_remove_chk_2").click(function () {
                $(this).parent('div').css('display', 'none');
                $(this).css('display', 'none');
                $(option_identificator_class + "_add_chk_2").css('display', 'block');
                var inputs = $(this).parent('div').find('input');
                inputs.val('');
            });

            $(option_identificator_class + "_add_chk_3").click(function () {

                $(this).next().css('display', 'block');
                $(this).css('display', 'none');
                $(option_identificator_class + "_remove_chk_3").css('display', 'block');

            });

            $(option_identificator_class + "_remove_chk_3").click(function () {
                $(this).parent('div').css('display', 'none');
                $(this).css('display', 'none');
                $(option_identificator_class + "_add_chk_3").css('display', 'block');
                var inputs = $(this).parent('div').find('input');
                inputs.val('');
            });



        }

        /* Display fields if not empty */

        function reveal_filled_section(option_identificator, option_identificator_id, option_identificator_class) {

            //Getting PHP values from wp_add_inline_script()

                var select_name_3 = php_admin_options_values[option_identificator + "_select_name_3"];
                var select_name_4 = php_admin_options_values[option_identificator + "_select_name_4"];
                var select_name_5 = php_admin_options_values[option_identificator + "_select_name_5"];
                var select_name_6 = php_admin_options_values[option_identificator + "_select_name_6"];

                var checkbox_name_2 = php_admin_options_values[option_identificator + "_check_name_2"];
                var checkbox_name_3 = php_admin_options_values[option_identificator + "_check_name_3"];
                var checkbox_name_4 = php_admin_options_values[option_identificator + "_check_name_4"];

                var radio_name_3 = php_admin_options_values[option_identificator + "_radio_name_3"];
                var radio_name_4 = php_admin_options_values[option_identificator + "_radio_name_4"];

                var image_swap_3 = php_admin_options_values[option_identificator+ "_image_swap_3"];
                var image_swap_4 = php_admin_options_values[option_identificator + "_image_swap_4"];

                var btn_swap_4 = php_admin_options_values[option_identificator + "_btn_swap_4"];
                var btn_swap_5 = php_admin_options_values[option_identificator + "_btn_swap_5"];
                var btn_swap_6 = php_admin_options_values[option_identificator + "_btn_swap_6"];

                var calcul_label_2 = php_admin_options_values[option_identificator + "_calcul_label_2"];

             
            /* if not empty reveal sections */

            if (calcul_label_2) {
              
                $(option_identificator_class + "_2nd_calcul").css('display', 'block');
                $(option_identificator_class + "_add_calcul").css('display', 'none');
                $(option_identificator_class + "_remove_calcul").css('display', 'block');
            }

            if (select_name_3) {
                $(option_identificator_class + "_3rd_option").css('display', 'block');
                $(option_identificator_class + "_add_select").css('display', 'none');
            }

            if (select_name_4) {
                $(option_identificator_class + "_4th_option").css('display', 'block');
                $(option_identificator_class + "_add_select_2").css('display', 'none');
            }

            if (select_name_5) {
                $(option_identificator_class + "_5th_option").css('display', 'block');
                $(option_identificator_class + "_add_select_3").css('display', 'none');
            }

            if (select_name_6) {
                $(option_identificator_class + "_6th_option").css('display', 'block');
                $(option_identificator_class + "_add_select_4").css('display', 'none');
            }

            if (radio_name_3) {
                $(option_identificator_class + "_3rd_radio").css('display', 'block');
                $(option_identificator_class + "_add_radio").css('display', 'none');
            }

            if (radio_name_4) {
                $(option_identificator_class + "_4th_option_radio").css('display', 'block');
                $(option_identificator_class + "_add_radio_2").css('display', 'none');
            }

            if (checkbox_name_2) {
                $(option_identificator_class + "_2nd_checkbox").css('display', 'block');
                $(option_identificator_class + "_add_chk").css('display', 'none');
            }

            if (checkbox_name_3) {
                $(option_identificator_class + "_3rd_checkbox").css('display', 'block');
                $(option_identificator_class + "_add_chk_2").css('display', 'none');
            }

            if (checkbox_name_4) {
                $(option_identificator_class + "_4th_checkbox").css('display', 'block');
                $(option_identificator_class + "_add_chk_3").css('display', 'none');
            }

            if (image_swap_3) {
                $(option_identificator_class + "_3rd_img").css('display', 'block');
                $(option_identificator_class + "_add_image").css('display', 'none');
            }

            if (image_swap_4) {
                $(option_identificator_class + "_4th_img").css('display', 'block');
                $(option_identificator_class + "_add_image_2").css('display', 'none');
            }


            if (btn_swap_4) {
                $(option_identificator_class + "_button_swap_4").css('display', 'block');
                $(option_identificator_class + "_button_swap_5").css('display', 'none');
                $(option_identificator_class + "_button_swap_6").css('display', 'none');
                $(option_identificator_id + "_btnswap_number").val("1");
            }

            if (btn_swap_5) {
                $(option_identificator_class + "_button_swap_4").css('display', 'block');
                $(option_identificator_class + "_button_swap_5").css('display', 'block');
                $(option_identificator_class + "_button_swap_6").css('display', 'none');
                $(option_identificator_id + "_btnswap_number").val("2");
            }

            if (btn_swap_6) {
                $(option_identificator_class + "_button_swap_4").css('display', 'block');
                $(option_identificator_class + "_button_swap_5").css('display', 'block');
                $(option_identificator_class + "_button_swap_6").css('display', 'block');
                $(option_identificator_id + "_btnswap_number").val("3");
            }


        }

        /*
        *
        * Form submit & validation
        *
        */
     
        
        function check_submit_validate(option_identificator_id) {

            /* disable submit with keypress enter */

            document.addEventListener('keypress', function (event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    return false;
                }
            });

            $(option_identificator_id + '_delete-submit').unbind("click").bind('click', function (event) {

                var clicked_submit_id = event.target.id;
                var clicked_id_num = parseInt(clicked_submit_id.replace(/[^0-9]/gi, ''));
                var option_identificator_id = "#op" + clicked_id_num;
                var option_identificator_class = ".op" + clicked_id_num;
                var option_number = option_identificator_id.replace(/[^0-9]/gi, '');

                if (confirm('Delete option ' + option_number + ' ?')) {
                    $(option_identificator_class + "delete_admin_loader_icon").show();
                    $(option_identificator_class + "admin_loader_icon").hide();
                    return;
                }
                //not removing
                event.preventDefault();
            });


            //Confirm reset settings
            $('[name=remove_settings]').unbind("click").bind("click", function (event) {

                if (confirm('Reset settings ?')) {
                    $(".delete_loader_icon").show();
                    $(".save_loader_icon").hide();
                    return;
                }
                //not removing
                event.preventDefault();
            });

                      //Confirm remove  condtional
                      $('[name=remove_conditionals]').unbind("click").bind("click", function (event) {

                        if (confirm('Reset conditionals ?')) {
                            $(".delete_loader_icon_2").show();
                            $(".save_loader_icon_2").hide();
                            return;
                        }
                        //not removing
                        event.preventDefault();
                    });

            //Loader on save settings button
            $('[name=save_settings]').unbind("click").bind("click", function (event) {
                $(".save_loader_icon").show();
            });

      

               //Conditional validation check and loader on save 
               $('[name=save_conditionals]').unbind("click").bind("click", function (event) {
              
                if($('#condi-select_1').prop('disabled') == false || $('#conditioned-select_1').prop('disabled') == false ) {
                    event.preventDefault();
                    $(".required").each(function () {
                        if ($(this).is(':visible') && $(this).css('display') == 'block' && $(this).val().match(/^\s*$/g)) {
                            $(this).css('border-color', 'red');
                        }
                    });
                    $('#conditional-validation-msg').html('<p class=\"error notice\" style=\"border-left:3px solid red;\">Fill required fields and validate your conditions before activating.</p>');
                } else {

                    var i = 1;
                    var active_cond = 0;
                    for(i; i <= number_of_options; i++) {
                       if($('#condi-select_'+i).prop('disabled') == true) {
                            active_cond++;  
                       }
                    }

                    if(active_cond == 1) {
                        var word = ' condition ';
                    } else {
                        var word = ' conditions ';
                    }

                    if (confirm('Activate ' + active_cond + word + '?')) {
                        $(".delete_loader_icon_2").hide();
                        $(".save_loader_icon_2").show();
                        return;
                    }
                    //not removing
                    event.preventDefault();
            }
            });


            $(option_identificator_id + '_option_submit').on('click', function (event) {

                var clicked_submit_id = event.target.id;
                var clicked_id_num = parseInt(clicked_submit_id.replace(/[^0-9]/gi, ''));
                var option_identificator_id = "#op" + clicked_id_num;
                var option_identificator_class = ".op" + clicked_id_num;

                $(option_identificator_class + "admin_loader_icon").show();

                // general validation
                $(option_identificator_id + '_validation_message').html('');

                $(".required").each(function () {
                    if ($(this).is(':visible') && $(this).css('display') == 'block' && $(this).val().match(/^\s*$/g)) {
                        event.preventDefault();
                        $(this).css('border-color', 'red');
                        $(option_identificator_id + '_validation_message').html('<p class=\"error notice\" style=\"border-left:3px solid red;\">Fill required fields.</p>');
                        $(option_identificator_class + "admin_loader_icon").hide();
                    }
                });


                //If chk mimes type not checked
                if($(option_identificator_class + '_mimes_checkboxes:checked').length === 0 && $(option_identificator_id + '_field_type').val() === "13"){
                    event.preventDefault();
                    $(option_identificator_id + '_validation_message').html('<p class=\"error notice\" style=\"border-left:3px solid red;\">At least one file type allowed is required. Check file type restriction.</p>');
                    $(option_identificator_class + "admin_loader_icon").hide();
                };

             
                // Calcul Formula input validation

                if ($(option_identificator_id + '_calcul_formula').is(':visible') && $(option_identificator_id + '_calcul_formula').css('display') == 'block') {


                    //Check required variables "$user_value " (and "$second_user_value " if 2nd input choosed) 

                    if ($(option_identificator_id + '_calcul_formula').val().indexOf("$user_value") == -1) {
                        event.preventDefault();
                        $(option_identificator_id + '_calcul_formula').css('border-color', 'red');
                        $(option_identificator_id + '_validation_message').append('<p class=\"error notice\" style=\"border-left:3px solid red;\"><strong>$user_value</strong> is required in calcul formula.</p>')
                        $(option_identificator_class + "admin_loader_icon").hide();
                    }

                    if ($(option_identificator_id + '_calcul_label_2').is(':visible') && $(option_identificator_id + '_calcul_formula').val().indexOf("$second_user_value") == -1) {
                        event.preventDefault();
                        $(option_identificator_id + '_calcul_formula').css('border-color', 'red');
                        $(option_identificator_id + '_validation_message').append('<p class=\"error notice\" style=\"border-left:3px solid red;\"><strong>$second_user_value</strong> is required in calcul formula (you choose to add another input).</p>')
                        $(option_identificator_class + "admin_loader_icon").hide();
                    }

                    //remove white space begin and end
                    $(option_identificator_id + '_calcul_formula').val($.trim($(option_identificator_id + '_calcul_formula').val()));

                    //replace comma by dot
                    var change_commma_for_dot = $(option_identificator_id + '_calcul_formula').val().replace(/[,]/g, '.');
                    $(option_identificator_id + '_calcul_formula').val(change_commma_for_dot);


                    //check unallowed values 
                    var newVal = $(option_identificator_id + '_calcul_formula').val().replace(/[(]/g, ' ( ').replace(/[)]/g, ' ) ').replace(/[+]/g, ' + ').replace(/[-]/g, ' - ').replace(/[*]/g, ' * ').replace(/[/]/g, ' / ');
                    var split_array = newVal.split(" ");
                    var regPattern1 = /^[ 0-9+\-*().\/\(\)]*$/;
                    var regPattern2 = /^(\$user_value)$/;
                    if ($(option_identificator_id + '_calcul_label_2').is(':visible')) {
                        var regPattern2 = /^(\$user_value)$|^(\$second_user_value)$/;
                    }

                    if ($(option_identificator_id + '_calcul_label_2').is(':visible')) {
                        var string_notice2 = ", $second_user_value";
                    } else { var string_notice2 = " " }

                    var i;

                    for (i = 0; i < split_array.length; ++i) {
                        var value = split_array[i];
                        if (!value.match(regPattern1)) {
                            if (!value.match(regPattern2)) {
                                event.preventDefault();
                                $(option_identificator_id + '_calcul_formula').css('border-color', 'red');
                                $(option_identificator_id + '_validation_message').append('<p class=\"error notice\" style=\"border-left:3px solid red;\"> Unallowed value : <strong>' + value + '</strong></p>');
                                $(option_identificator_id + '_validation_message').append('<p class=\"error notice\" style=\"border-left:3px solid red;\">Are allowed only : numbers, mathematic operators  .+-/*(), $user_value ' + string_notice2 + '</p>');
                                $(option_identificator_class + "admin_loader_icon").hide();
                            }
                        }

                    }

                    // TEST FORMULA BY DOING CALCULATION WITH VALUE 1 => CHECK IF SYMBOLS ERROR
                    var testing_formula = $(option_identificator_id + '_calcul_formula').val().replace(/\$user_value/g, 1);
                    if ($(option_identificator_id + '_calcul_label_2').is(':visible')) {
                        var testing_formula = $(option_identificator_id + '_calcul_formula').val().replace(/\$user_value/g, 1).replace(/\$second_user_value/g, 1);
                    }
                    try {
                        var calcul_result = Function("return " + testing_formula)();
                    } catch (error) {
                        event.preventDefault();
                        $(option_identificator_id + '_calcul_formula').css('border-color', 'red');
                        $(option_identificator_id + '_validation_message').append('<p class=\"error notice\" style=\"border-left:3px solid red;\">Error in formula.</p>');
                        $(option_identificator_class + "admin_loader_icon").hide();
                    }

                    // check error symbols
                    var error_symbol = ["++", "+ +", " + + ", "--", "- -", " - - ", "**", "* *", " * * ", "//", "/ /", " / / ", "..", ". .", " . . "];
                    var stringIncludesError = error_symbol.some(error_value => $(option_identificator_id + '_calcul_formula').val().includes(error_value));
                    if (stringIncludesError == true) {
                        event.preventDefault();
                        $(option_identificator_id + '_calcul_formula').css('border-color', 'red');
                        $(option_identificator_id + '_validation_message').append('<p class=\"error notice\" style=\"border-left:3px solid red;\">Check your symbols.</p>');
                        $(option_identificator_class + "admin_loader_icon").hide();
                 
                    }

                    //if parentheses number is odd (impair) => error 
                    if ($(option_identificator_id + '_calcul_formula').val().indexOf("(") == 0) {
                        var parenthese_number = $(option_identificator_id + '_calcul_formula').val().match(/[()]/g).length;
                        if (parenthese_number % 2 == 1) {
                            event.preventDefault();
                            $(option_identificator_id + '_calcul_formula').css('border-color', 'red');
                            $(option_identificator_id + '_validation_message').append('<p class=\"error notice\" style=\"border-left:3px solid red;\">Close or remove parentheses ( )</p>');
                            $(option_identificator_class + "admin_loader_icon").hide();
                        }
                    }

                }

            });

        }

        function conditional_switcher() {

            $(document).on("change", '#condi-select_1', function (e) {

                var selected_opt_group = $('#condi-select_1 :selected').attr('data-option');

                //hide field in conditioned input (condition field cant be conditioned too)
                $("#conditioned-select_1").val('');
                $("#conditioned-select_1 option").show();
                $("#conditioned-select_1 option[value=" + selected_opt_group + "]").hide();
            });


           //------------------------------------------------------------------------------

            //add condition 
            $(document).on("click", '#add_condition_1', function (e) {

                var selected_condition_index = $("#condi-select_1").prop('selectedIndex');

                    //block if conditionals unfilled
                    if ($('#condi-select_1').val() == '') {
                        e.preventDefault();
                        $('#conditional-validation-msg').html('<p class=\"error notice\" style=\"border-left:3px solid red;\">Fill required fields.</p>');
                        $('#condi-select_1').css('border-color', 'red');
                        return;
                    }
                    if ($('#conditioned-select_1').val() == '') {
                        e.preventDefault();
                        $('#conditional-validation-msg').html('<p class=\"error notice\" style=\"border-left:3px solid red;\">Fill required fields.</p>');
                        $('#conditioned-select_1').css('border-color', 'red');
                        return;
                    }

                 //show next div block prev inputs
                $('.select_div_condition_2').show();
                $('#condi-select_1').prop('disabled', 'disabled');
                $('#conditioned-select_1').prop('disabled', 'disabled');
                $(this).hide();

                $('#conditional-validation-msg').html('');
                $('#condi-select_1, #conditioned-select_1').css('border-color', '#8c8f94');

                //clone & append the two next selects, remove selected previous options 
                $('#condi-select_2').html($('#condi-select_1').find('option:not(:selected)').clone());
                $('#conditioned-select_2').html($('#conditioned-select_1').find('option:not(:selected)').clone()).find(selected_condition_index).remove();

                //insert values in hidden input for PHP -----------
                $("#condition_1").val($("#condi-select_1").val());
                $("#conditioned_1").val($('#conditioned-select_1').val());
                $("#text_condition_1").val($('#condi-select_1 option:selected').text());
                $("#text_conditioned_1").val($('#conditioned-select_1 option:selected').text());

                     
            }); 
            
            
            var number_of_active_options = $("#number_of_active_options").val();


            for (let i = 2, y = i - 1, z = i + 1; i <= number_of_active_options; i++, y++, z++) {

                $(document).on("change", '#condi-select_' + i, function (e) {
                    //hide field in conditioned input (condition field cant be conditioned too)
                    var selected_opt_group = $('#condi-select_' + i + ' :selected').attr('data-option');
                    $('#conditioned-select_' + i).val('');
                    $('#conditioned-select_' + i + ' option[value=' + selected_opt_group + ']').hide();
                });

                //add condition 
                $(document).on("click", '#add_condition_' + i, function (e) {


                    //block if conditionals unfilled
                    if ($('#condi-select_' + i).val() == '') {
                        e.preventDefault();
                        $('#conditional-validation-msg').html('<p class=\"error notice\" style=\"border-left:3px solid red;\">Fill required fields.</p>');
                        $('#condi-select_' + i).css('border-color', 'red');
                        return;
                    }
                    if ($('#conditioned-select_' +i).val() == '') {
                        e.preventDefault();
                        $('#conditional-validation-msg').html('<p class=\"error notice\" style=\"border-left:3px solid red;\">Fill required fields.</p>');
                        $('#conditioned-select_' + i).css('border-color', 'red');
                        return;
                    }

                $('#cancel_condition_' + i).hide();
               

                //show next div block prev inputs
                $('.select_div_condition_' + z).show();
                $('#condi-select_' + i).prop('disabled', 'disabled');
                $('#conditioned-select_' + i).prop('disabled', 'disabled');
                 $(this).hide();

                 $('#conditional-validation-msg').html('');
                 $('#condi-select_' + i +', #conditioned-select_' + i).css('border-color', '#8c8f94');

                //clone & append the two next selects, remove selected previous options 
                $('#condi-select_' + z).html($('#condi-select_' + i).find('option:not(:selected)').clone());
                $('#conditioned-select_' + z).html($('#conditioned-select_' + i).find('option:not(:selected)').clone());

                //insert values in hidden input for PHP -----------
                $('#condition_' + i).val($('#condi-select_' + i).val());
                $('#conditioned_' + i).val($('#conditioned-select_' + i).val());
                $('#text_condition_' + i).val($('#condi-select_' + i + ' option:selected').text());
                $('#text_conditioned_' + i).val($('#conditioned-select_' + i + ' option:selected').text());

                });

                //cancel condition div
                $(document).on("click", '#cancel_condition_' + i, function (e) {
                    $(this).parent('div').css('display', 'none');
                    $('#cancel_condition_' + y).show();
                    $('#add_condition_' + y).show();
                    $('#condi-select_' + y).val('');
                    $('#conditioned-select_' + y).val('');
                    $('#condi-select_' + y).removeAttr('disabled');
                    $('#conditioned-select_' + y).removeAttr('disabled');
                    $('#conditioned-select_' + y + ' option').show();
                    $('#condi-select_' + i + ', #conditioned-select_' + i).css('border-color', '#8c8f94');
                    $('#conditional-validation-msg').html(' ');

                    //clear values in hidden input for PHP -----------
                    $('#condition_' + y).val('');
                    $('#conditioned_' + y).val('');
                    $('#condition_' + i).val('');
                    $('#conditioned_' + i).val('');
                    $('#text_condition_' + y).val('');
                    $('#text_conditioned_' + y).val('');
                    $('#text_condition_' + i).val('');
                    $('#text_conditioned_' + i).val('');
                });

              }

        }


        //add field button disapear if max fields number 
        if($("#" + number_of_options + ".tablinks").is(":visible")) {
            $('#add_new_tab').remove();
        }

        openTabs('op1_tab');
        $(".tablinks").first().toggleClass('active');

        conditional_switcher();
        display_input_type(option_identificator_id, option_identificator_class);
        admin_btn_switching(option_identificator_class);
        display_btn_number(option_identificator_id, option_identificator_class);
        upload_img_swp(option_identificator_class);
        reveal_filled_section(option_identificator, option_identificator_id, option_identificator_class);
        check_submit_validate(option_identificator_id);
     
    });


})(jQuery);

