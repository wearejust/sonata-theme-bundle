<?php

namespace Just\SonataThemeBundle\DependencyInjection;

use RuntimeException;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Extension\PrependExtensionInterface;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\DependencyInjection\Loader;
use Symfony\Component\Yaml\Exception\ParseException;
use Symfony\Component\Yaml\Yaml;

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
        // return;
        $bundles = $container->getParameter('kernel.bundles');

        if (!array_key_exists('SonataAdminBundle', $bundles)) {
            throw new RuntimeException('SonataAdminBundle wasn\'t found, dit you registered it correctly?');
        }

        try {
            $config = Yaml::parse(file_get_contents(__DIR__ . '/../Resources/config/theme.yml'));
        } catch (ParseException $e) {
            throw new RuntimeException(sprintf("Unable to parse the YAML string: %s", $e->getMessage()));
        }

        $container->prependExtensionConfig('sonata_admin', $config);
    }
}
