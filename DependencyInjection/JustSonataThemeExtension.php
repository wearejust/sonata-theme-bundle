<?php

namespace Just\SonataThemeBundle\DependencyInjection;

use RuntimeException;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Extension\PrependExtensionInterface;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\DependencyInjection\Loader;

/**
 * This is the class that loads and manages your bundle configuration.
 *
 * @link http://symfony.com/doc/current/cookbook/bundles/extension.html
 */
class JustSonataThemeExtension extends Extension implements PrependExtensionInterface
{
    /**
     * {@inheritdoc}
     */
    public function load(array $configs, ContainerBuilder $container)
    {
        $configuration = new Configuration();
        $this->processConfiguration($configuration, $configs);
    }

    /**
     * @param \Symfony\Component\DependencyInjection\ContainerBuilder $container
     */
    public function prepend(ContainerBuilder $container)
    {
        $bundles = $container->getParameter('kernel.bundles');

        if (! array_key_exists('SonataAdminBundle', $bundles)) {
            throw new RuntimeException('SonataAdminBundle wasn\'t found, dit you registered it correctly?');
        }

        // https://sonata-project.org/bundles/admin/master/doc/reference/configuration.html#full-configuration-options
        /*
        $config = [

            'templates' => [
                //
            ],
            'assets'    => [
                'stylesheets'   => [
                    //
                ],
                'javascripts'   => [
                    //
                ]
            ]
        ];

        $container->prependExtensionConfig('sonata_admin', $config);
        */
    }
}
