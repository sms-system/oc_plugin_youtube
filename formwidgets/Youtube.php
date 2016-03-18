<?php
namespace Smssystem\Youtube\FormWidgets;

use Backend\Classes\FormField;
use Backend\Classes\FormWidgetBase;

class Youtube extends FormWidgetBase
{
    public function render()
    {
        $this->prepareVars();

        return $this->makePartial('main');
    }

    public function prepareVars()
    {
        $value = $this->getLoadValue();
        $name = $this->formField->getName();

        $this->url = $value['code'] ? 'https://www.youtube.com/watch?v=' . $value['code'] : '';

        $this->vars['value'] = $value;
        $this->vars['name'] = $name;
        $this->vars['url'] = $this->url;
    }

    protected function loadAssets()
    {
        $this->addCss('css/main.css', 'core');
        $this->addCss('css/jquery.arcticmodal-0.3.css', 'core');
        $this->addJs('js/youtube.js', 'core');
    }
}
