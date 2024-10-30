# CALCULATED CUSTOM FIELDS

## Plugin description

Calculated custom fields turns any shop product into a customizable product. Easily add custom fields with live calculation to your custom products.  Price fluctuates dynamically after user interaction according preset values. The purchase tunnel is ready : custom data is displayed on cart page, checkout page, review page, as well as in administrator and e-mail orders.

N cumulative fields with 14 types of options available (set your own maximum, mininum is 2).

## Requirements

* `WordPress` installed online or on a local web server.
* `WooCommerce` installed and activated (you can skip store settings in order to test quickly the plugin).
*  At least WooCommerce version **8.4.0** required because of price output id.
*  A **product** must be created and product regular **price** must be fixed before to start.

## Set up

* Download and unzip 'calculated-custom-fields', then paste its contents into the `/wp-content/plugins/`folder.
* Installed and activate the plugin through the WordPress plugins menu.

## How to use

1.	Choose or create a product, set the price.
2.	Select "calculated custom fields" in the product data panel. 
3.	For each option field, choose the type of options you want and fill the required informations. You can configure different settings that are common to all options:
* **Option label**: name of the option that will appear on the product page.
* **Option type**: Choose between 14 types of options.
* **Option description**: description of the option that will appear under the option name on the product page.
* **Option help-tip**: short text revealed by hovering on the label of the option name.
* **Option required**: whether or not the option is required in order to add the product to the cart.
* **Hide option output**: whether the option cost appears in the option field after interaction or not.
* **Option extra-cost**: setting the option extra-cost.
4.Click on "Save and display option *" and go on the product page or refresh it. The option will be deployed on the product page and activated in the administration dashboard. 
5. The settings tab allows you to define some text strings on the product page and shop page.
6. Refresh cache on the product page after submit.

## Options Overview

#### 1 - <ins>TEXT</ins>
Text input displayed on the product page that allows the user to write a short text. Text option also allows the administrator to set: 
* **Option placeholder**: dimmed text in input before interaction.
* **Text min length**: minimum number of letters.
* **Text max length**: maximum number of letters.
#### 2 - <ins>NUMBER</ins> 
Number input displayed on the product page that allows the user to write a number. Number option also allows the administrator to set: 
* **Number min value**: minimum number.
* **Number max value**: maximum number.
* **Number step value**: number interval value.
#### 3 - <ins>EMAIL</ins> 
Email input displayed on the product page that allows the user to write an email. Email option also allows the administrator to set: 
* **Email max length**: maximum number of characters.
#### 4 - <ins>URL</ins> 
Url input displayed on the product page that allows the user to write the url of a website. Url option also allows the administrator to set: 
* **Url min length**: minimum number of characters.
* **Url max length**: maximum number of characters.
* **Url pattern**: http, https, or both.
#### 5 - <ins>PHONE</ins> 
Phone input displayed on the product page that allows the user to write a phone number. Phone option also allows the administrator to set: 
* **Phone min length**: minimum number of characters.
* **Phone max length**: maximum number of characters. 
* **Dialling code**: code du pays qui s’affichera par défaut.
#### 6 - <ins>TEXTAREA</ins> 
Textarea input displayed on the product page that allows the user to write a long text. Textarea option also allows the administrator to set: 
* **Textarea max length**: maximum number of characters.
#### 7 - <ins>RADIO BUTTONS</ins> 
Radio option allows the administrator to set between 2 and 4 radio buttons that will appear on the product page in the corresponding option field. The radio option also allows the administrator to set:
* **Option label 1**: name of the first radio button.
* **Option cost 1**: cost of this option when clicked.
* **Option label 2**: name of the second radio button.
* **Option cost 2**: cost of this option when clicked.
* **Add new radio**: The administrator can click this button to add up to 2 additional radio buttons for the corresponding field. 
#### 8 - <ins>BUTTONS</ins>
Button option allows the administrator to set up 3 to 6 buttons that will appear on the product page. The button option also allows the administrator to to set:
*   **Option label 1**: name of the first button.
*	**Option cost 1**: cost of this option when clicked.
*	**Option label 2**: name of the second button.
*	**Option cost 2**: cost of this option when clicked.
*	**Option label 3**: name of the third button.
*	**Option cost 3**: cost of this option when clicked.
*	**Buttons number**: The administrator can set up 3 to 6 buttons.
#### 9 - <ins>CHECKBOXES</ins> 
Checkbox option allows the administrator to set up 1 to 4 checkboxes that will appear on the product page. The checkbox option allows the administrator to to set:
*	**Option label 1**: name of the first checkbox.
*	**Option cost 1**: cost of this option when clicked.
*	**Add new checkbox**: The administrator can click this button to add up to 3 additional checkboxes for the corresponding option field (4 in total).
#### 10 - <ins>UPLOAD AJAX</ins> 
Files are uploaded in the **/your-theme/wp-content/uploads/front-uploads** folder.
Upload option displays a button that allows the user to upload a file with Ajax: the page will not need to refresh in order to complete the upload and display the result in the option field. The upload option also allows the administrator to set: 
*	**Upload max size**: maximum file size (default 5000MB).
*	**Set files restriction**: the administrator can set file restrictions based on the mime type (jpg, pdf, svg, etc.). At least 100 file types are available and by default restricted.
#### 11 - <ins>IMAGES</ins> 
Image option allows the administrator to set up between 2 and 4 clickable images that will appear on the product page. The image option allows the administrator to set:
*	**Option label 1**: name of the first image.
*	**Option cost 1**: cost of this option when clicked.
*	**Option label 2**: name of the second image.
*	**Option cost 2**: cost of this option when clicked.
*	**Upload image**: image that will appear on the product page.
*	**Add new image**: The administrator can click this button to add up to 2 additional images for the corresponding option field (4 in total)
#### 12 - <ins>SELECT DROPDOWN</ins>
Select option allows the administrator to set up a selector containing 2 to 6 sub-options that will be displayed on the product page. The select option also allows the administrator to set: 
*	**Option label 1**: name of the first suboption.
*	**Option cost 1**: cost of this option when clicked.
*	**Option label 2**: name of the first suboption.
*	**Option cost 2**: cost of this option when clicked.
*	**Add new select**: The administrator can click this button to add up to 4 additional sub-options within the selector for the corresponding option field (6 in total).
#### 13 - <ins>COLOR</ins> 
Color option allows the administrator to set up an input field with a color picker that will appear on the product page and allow the user to choose a custom color. 
#### 14 - <ins>NUMBER CALCULATION</ins> 
Number calculation option allows the administrator to set up one or two number input fields with a calculation formula. These two number input fields will appear on the product page and the calculation will be performed during user input. The result will be added to the price of the product. Number calculation option allows the administrator to set:
*	**Number min value** : minimum number.
*	**Number max value**: maximum number.
*	**Number step value**: number interval value.
*	**Add new calcul input**: The administrator can click this button to add the second number entry field to the product page.
* **Calcul formula**: the formula of the calculation. If the administrator chooses only one number input field for its calculation: `$user_value` is required in the formula and refers to the value the user will enter. If the administrator chooses two number input fields: `$second_user_value` also becomes mandatory in the formula and refers to the second value the user will enter on the product page.


## Settings

The settings tab of the product admin panel allows the administrator to configure some general settings:
*	**Fields number**: Number of cumulative custom fields (pro version).
*	**Free option text**: text that appears when the option is free.
*	**Cost option text**: text that appears when the price of the option appears.
*	**Add cart button text**: text of the product button on the shop page if at least one option is active.
*	**Option required text**: text that appears when the option is unset by filling the form.

## Appearance

We've left the inputs as raw as possible to avoid conflicts with the theme's style files, as recommended by the WP plugin codex guidelines. JQuery UI default css has been incorporated for select, button, radio and checkboxes inputs, it can be modificated in the `public/css/jquery-ui.css` file. The ".../public/css/" contains the following files:
*	`public/css/jquery-ui.css`: default style file for jQuery UI elements (select, radio buttons, buttons, checkboxes).
*	`../cpm_img_swap.css`: image style file and the display of images in their option fields on the product page. 
*	`../calculated-custom-fields-public.css`: main style file for the public side.
If you want to stylize the form, you can use your browser’s inspector and edit the elements in your theme’s “style.css” file.
If you want to edit or delete HTML elements from the form on the product page, you can edit the `...parts/[display_template].php` file located in the public folder of the plugin.

## Languages

English and french version currently available. German and italian version soon available. 

## License

Calculated custom fields is licensed under the GPL v2 or later.

> This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License, version 2, as published by the Free Software Foundation.

> This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

> You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA

A copy of the license is included in the root of the theme directory. The file is named `LICENSE.TXT`.

# Credits

[DigitalStg]
