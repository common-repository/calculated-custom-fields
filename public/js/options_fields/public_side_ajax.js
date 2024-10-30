(function ($) {

    var option_identificator = php_options_values.option_identificators;

    var array = {};



    $.each(option_identificator, function (index, id_value) {

        /*Click on custom input to upload */
        $("#" + id_value + "_click_upload").click(function () {
            $("#" + id_value + "_upload_input").click();

        });

        $("#" + id_value + "_upload_input").change(function (e) {

            var field_id = e.target.id;
            conditional_switching(field_id);

            var ajax_url = front_end_ajax.ajax_url;
            var nonce = front_end_ajax.nonce;

            $("#" + id_value + "_loader_spinner").show();

            $this = $(this);
            file_data = $(this).prop('files')[0];
            form_data = new FormData();
            fake_path = $(this).val();
            file_name_space = fake_path.substring(fake_path.lastIndexOf("\\") + 1, fake_path.length);
            file_name = file_name_space.replace(/ /g, "-");
            product_id = $('#product_id').val();
            option_cost_text = $('#option_text').val();

            form_data.append('file_name', file_name);
            form_data.append('file', file_data);
            form_data.append('upload_nonce', nonce);
            form_data.append('option_text', option_cost_text);
            form_data.append('product_id', product_id);
            form_data.append('option_id', option_identificator[index]);
            form_data.append('action', 'front_end_ajax');
            form_data.append('product_price', $('#product_price').val());
            form_data.append('quantity', $('[name=quantity]').val());
            form_data.append('upload_charge', $('.' + id_value + "_output_upload_value").html().replace(/[^0-9.]/g, ""));


            $.ajax({
                url: ajax_url,
                type: 'POST',
                contentType: false,
                processData: false,
                data: form_data,
                success: function (response) {
                    if (response === "0") { $('.' + form_data.get('option_id') + '_upload_content_output').html('<p class="cp_output"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; File type error. You are not allowed to upload this file.</p>'); }
                    else {
                        $('.' + form_data.get('option_id') + '_upload_content_output').html(response);
                        upload_charge = form_data.get('upload_charge');
                        product_price = form_data.get('product_price');
                        option_text = form_data.get('option_text');
                        option_id = form_data.get('option_id');

                        if (upload_charge > 0) {
                            display_new_price_after_upload(upload_charge, product_price, option_id, option_text);
                        } else {
                            //set value to 0 in local storage 
                            localStorage.setItem('Option_' + form_data.get('option_id').replace(/[^0-9.]/g, ""), "0");
                        }
                    }

                }

            })


        });


        function display_new_price_after_upload(upload_charge, product_price, option_id, option_text) {

            $('.cp_output').show();

            var option_id = option_id;
            var total_options = 0;
            var number_of_options = parseFloat(php_options_values.number_of_options);

            var final_array = permute_locales(option_id);

            //Current option in local storage -> value
            localStorage.setItem('Option_' + final_array[0], upload_charge);

            for (i = 1; i <= number_of_options; i++) {
                //get the other options (0 or value)
                array['option_' + final_array[i - 1]] = parseFloat(localStorage.getItem('Option_' + i));
                total_options += array['option_' + final_array[i - 1]];
            }
            var price_input_id = php_options_values.price_input_id;

            var output_id = $(price_input_id);

            var currency = front_end_ajax.currency;
            var currency_position = front_end_ajax.currency_position;
            var product_price = parseFloat(product_price);
            var upload_charge = parseFloat(upload_charge);

            var quantity_related = $('[name=quantity_related]').val();
            var quantity = parseFloat($('[name=quantity]').val());

            var price_front_0 = parseFloat(product_price) + total_options;
            var price_front = parseFloat(price_front_0 * quantity).toFixed(2);

            $("#" + id_value + "_loader_spinner").hide();

            if (currency_position == "right_space") {
                output_id.html(price_front + ' ' + currency);
                $("#" + id_value + "_output_upload_option").html(option_text + ' ' + parseFloat(upload_charge * quantity).toFixed(2) + ' ' + currency);
            } else if (currency_position == "left_space") {
                output_id.html(currency + ' ' + price_front);
                $("#" + id_value + "_output_upload_option").html(option_text + ' ' + currency + ' ' + parseFloat(upload_charge * quantity).toFixed(2));
            }
            else if (currency_position == "right") {
                output_id.html(price_front + currency);
                $("#" + id_value + "_output_upload_option").html(option_text + ' ' + parseFloat(upload_charge * quantity).toFixed(2) + currency);
            }
            else if (currency_position == "left") {
                output_id.html(currency + price_front);
                $("#" + id_value + "_output_upload_option").html(option_text + ' ' + currency + parseFloat(upload_charge * quantity).toFixed(2));
            } else {
                return;
            }

        }

        function permute_locales(option_id) {

            var number_of_options = parseFloat(php_options_values.number_of_options);
            var results = [];
            var i;
            var current_option_number = option_id.replace(/\D/g, '');
            var option_array = Array.from({ length: number_of_options }, (_, i) => i + 1)
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


        function conditional_switching(field_id, conditionals_array) {

            var field_id = field_id;
            var number_of_options = parseFloat(php_options_values.number_of_options);
            var conditionals_array = [];

            var x;

            for (x = 1; x <= number_of_options; x++) {
                conditionals_array['condition_' + x] = php_options_values['condition_' + x];
                conditionals_array['conditioned_' + x] = php_options_values['conditioned_' + x];

                var conditioned_div = conditionals_array['conditioned_' + x];

                if (field_id == conditionals_array['condition_' + x]) {
                    $('.' + conditioned_div).show();
                }



            }

        }

    });


})(jQuery);