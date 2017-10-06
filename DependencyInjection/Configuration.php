<?php

namespace Just\SonataThemeBundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

/**
 * This is the class that validates and merges configuration from your app/config files.
 *
 * To learn more see {@link http://symfony.com/doc/current/cookbook/bundles/configuration.html}
 */
class Configuration implements ConfigurationInterface
{
    /**
     * {@inheritdoc}
     */
    public function getConfigTreeBuilder()
    {
        $treeBuilder = new TreeBuilder();
        $rootNode = $treeBuilder->root('just_sonata_theme');

        $rootNode
            ->children()
                ->scalarNode('custom_theme')->defaultValue('')->end()
                ->arrayNode('extra_css_assets')->prototype('scalar')->end()->end()
                ->arrayNode('extra_js_assets')->prototype('scalar')->end()->end()
            ->end()
        ;

        return $treeBuilder;
    }
}
