<?php namespace Smisystem\Youtube;

use System\Classes\PluginBase;

/**
 * Youtube Plugin Information File
 */
class Plugin extends PluginBase
{
    public function boot() {
    }

    public function pluginDetails() {
        return [
            'name'        => 'Youtube',
            'author'      => 'Sergey Smirnov, <sms-system@mail.ru>',
            'description' => 'Provides a form widget to add YouTube video',
            'icon'        => 'icon-youtube'
        ];
    }

    public function registerFormWidgets() {
        return [
            'Smisystem\Youtube\FormWidgets\Youtube' => [
                'label' => 'YouTube',
                'code'  => 'youtube'
            ]
        ];
    }
}