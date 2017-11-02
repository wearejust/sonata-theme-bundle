<?php

namespace Wearejust\SonataThemeBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class TemplateController extends Controller
{
    /**
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function deleteDialogAction()
    {
        return $this->render('@WearejustSonataTheme/Wearejust/AJAX/delete-dialog.html.twig');
    }
}
