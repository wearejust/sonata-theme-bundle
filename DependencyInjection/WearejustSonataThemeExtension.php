<?php

namespace Wearejust\SonataThemeBundle\DependencyInjection;

use RuntimeException;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\PrependExtensionInterface;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\Yaml\Exception\ParseException;
use Symfony\Component\Yaml\Yaml;

/**
 * This is the class that loads and manages your bundle configuration.
 *
 * @link http://symfony.com/doc/current/cookbook/bundles/extension.html
 */
class WearejustSonataThemeExtension extends Extension implements PrependExtensionInterface
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

        if (!array_key_exists('SonataAdminBundle', $bundles)) {
            throw new RuntimeException('SonataAdminBundle wasn\'t found, dit you registered it correctly?');
        }

        $extensionConfig = $this->parseYml(__DIR__ . '/../Resources/config/theme.yml');

        $configs = $container->getExtensionConfig($this->getAlias());
        $config = $this->processConfiguration(new Configuration(), $configs);

        if ($theme = $config['custom_theme']) {
            $yml = $this->parseYml($container->getParameter('kernel.root_dir') . '/' . $theme);

            if (isset($yml['extra_css']) && $yml['extra_css']) {
                $extensionConfig['assets']['stylesheets'] = array_merge($extensionConfig['assets']['stylesheets'], $yml['extra_css']);
            }
            if (isset($yml['extra_js']) && $yml['extra_js']) {
                $extensionConfig['assets']['javascripts'] = array_merge($extensionConfig['assets']['javascripts'], $yml['extra_js']);
            }
        }

        $extensionConfig['assets']['javascripts'] = array_merge($extensionConfig['assets']['javascripts'], $config['extra_js_assets']);
        $extensionConfig['assets']['stylesheets'] = array_merge($extensionConfig['assets']['stylesheets'], $config['extra_css_assets']);

        $container->prependExtensionConfig('sonata_admin', $extensionConfig);
    }

    /**
     * @param $file
     *
     * @return array
     */
    private function parseYml($file)
    {
        try {
            $baseConfig = Yaml::parse(file_get_contents($file));
        } catch (ParseException $e) {
            throw new RuntimeException(sprintf("Unable to parse the YAML string: %s", $e->getMessage()));
        }

        return $baseConfig;
    }
}
