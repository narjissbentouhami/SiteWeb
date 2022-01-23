<?php
interface Template
{
    public function setVariable($name, $var);
    public function getHtml($template);
}