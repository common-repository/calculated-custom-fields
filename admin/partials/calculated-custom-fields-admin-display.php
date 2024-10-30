<?php

 if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly 
 
/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://digital-stg.com
 * @since      1.0.0
 *
 * @package    Calculated_Custom_Fields
 * @subpackage Calculated_Custom_Fields/admin/partials
 * @author     DigitalStg <contact@digital-stg.com>
 * 
 */

 
//Option 1 check
$isOption1_active =  $product->get_meta('op1_field_type');

//Option 2 check
$isOption2_active =  $product->get_meta('op2_field_type');

//Help and desc tips
$calcul_help_tip = "<span class=\"woocommerce-help-tip cpm\" data-tip=\"" . __('Use $user_value with numbers and basic mathematic operators : + - / * ( ) . 
      $user_value is required and refers to the value given by the user on the product page.
      Use also $second_user_value if you choose to add another input.', 'calculated-custom-fields') . "\"></span>"; ?>

<div id="custom_produts_manager" class="panel woocommerce_options_panel hidden">

  <div class="tab">

   

    <a class="tablinks" id="1"> <?php if (!$isOption1_active) {
                            echo "<i class=\"fa fa-toggle-off\" aria-hidden=\"true\"></i> ";
                          } else {
                            echo "<i class=\"fa fa-toggle-on\" aria-hidden=\"true\"></i> ";
                          }
                          esc_html_e('Field 1', 'calculated-custom-fields'); ?>
    </a>
    <a class="tablinks" id="2"> <?php if (!$isOption2_active) {
                            echo "<i class=\"fa fa-toggle-off\" aria-hidden=\"true\"></i> ";
                          } else {
                            echo "<i class=\"fa fa-toggle-on\" aria-hidden=\"true\"></i> ";
                          }
                          esc_html_e('Field 2', 'calculated-custom-fields'); ?>
    </a>


      <!-- Options check / for loop -->

  <?php for ($i = 3; $i <= $this->number_of_options; $i++) {
    $is_option_active = sprintf('op%s_field_type', $i);
    if($product->get_meta($is_option_active)) {
      echo sprintf('<a class="tablinks" id="%s">', $i);
      echo "<i class=\"fa fa-toggle-on\" aria-hidden=\"true\"></i> ";
      echo sprintf('Field %s', $i);
      echo '</a>';
    }} ?>

<?php
            $number_of_active_conditions = 0;
            for ($i = 1; $i <= $this->number_of_options; $i++) {
                if ($product->get_meta('condition_' . $i)) {
                    $number_of_active_conditions++;
                }
            };?>
  
           

    <a class="tablinks" id="add_new_tab"><i class="fa fa-circle-plus" aria-hidden="true"></i> <?php esc_html_e('Add more fields', 'calculated-custom-fields'); ?></a>
    <a class="tablinks" id="setting_tab_link"><i class="fa fa-cog" aria-hidden="true"></i> <?php esc_html_e('Settings', 'calculated-custom-fields'); ?></a>
    <a class="tablinks" id="conditional_link"><?php if ($number_of_active_conditions > 0) {  echo "<i class=\"fa fa-toggle-on\" aria-hidden=\"true\"></i> ";} else {
         echo "<i class=\"fa fa-toggle-off\" aria-hidden=\"true\"></i> ";};?>
      <?php esc_html_e('Conditionals', 'calculated-custom-fields'); ?></a>

  </div>

  <!-- tabs loop -->
  <?php for ($i = 1; $i <= $this->number_of_options; $i++) {
    $option_tab = 'op'. $i . '_tab';
  
      if (!$price) {
        echo "<div><p class=\"error notice\" style=\"border-left:3px solid red;\">" . esc_html__('Product regular price has to be set.', 'calculated-custom-fields') . "</p></div>";
        break;
      } else {
        echo '<div id="' . $option_tab . '" class="tabcontent">';
        $option_identificator = "op" . $i;
        $option_number = "Option " . $i;
        require plugin_dir_path(__FILE__) . 'options-admin-tabs/admin_tab_template.php';
        echo '</div>';
      } 
     } ?>


  <div id="settings" class="tabcontent">
    <?php require plugin_dir_path(__FILE__) . 'options-admin-tabs/settings_tab.php'; ?>
  </div>

  <div id="conditional_tab" class="tabcontent">
    <?php require plugin_dir_path(__FILE__) . 'options-admin-tabs/conditional_tab.php'; ?>
  </div>


  </div>