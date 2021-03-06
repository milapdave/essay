<?php
/**
 * Customizer: Slider Custom Control
 *
 * @see ttps://developer.wordpress.org/reference/classes/wp_customize_control/
 * @package Essay
 */


class Bean_Customize_Slider_Control extends WP_Customize_Control {
    public $type = 'slider';

    //ENQUEUE SCRIPTS
    public function enqueue() 
    {
       wp_enqueue_script( 'jquery-ui-core' );
       wp_enqueue_script( 'jquery-ui-slider' );
    }

    //OUTPUT
    public function render_content() 
    { ?>
        <label>
            <span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
            <input style="width: 13%; margin-right: 3%; float: left; text-align: center;" type="text" id="input_<?php echo esc_html($this->id); ?>" value="<?php echo esc_attr($this->value()); ?>" <?php $this->link(); ?>/>
        </label>
        <div style="width: 82%; float: left;" id="slider_<?php echo esc_html($this->id); ?>" class="bean_slider"></div>

        <script>
        jQuery(document).ready(function($) {
            $( "#slider_<?php echo esc_html($this->id); ?>" ).slider({
                value: <?php echo intval($this->value()); ?>,
                min: <?php echo intval($this->choices['min']); ?>,
                max: <?php echo intval($this->choices['max']); ?>,
                step: <?php echo intval($this->choices['step']); ?>,
                slide: function( event, ui ) {
                    $( "#input_<?php echo esc_js($this->id); ?>" ).val(ui.value).keyup();
                }
            });
            $( "#input_<?php echo esc_html($this->id); ?>" ).val( $( "#slider_<?php echo esc_html($this->id); ?>" ).slider( "value" ) );
        });
        </script>
    <?php
    }
}
