import { runInstall } from "./run-install.mjs";

export default function (plop) {
  const extendData = (data) => {
    const { name } = data;
    const root = 'widgets';
    const pascalCase = plop.getHelper('pascalCase');
    const dashCase = plop.getHelper('dashCase');
    const lowerCaseName = name.toLowerCase();
    const widgetName = pascalCase(name);
    const widgetDir = dashCase(name);
    const baseDir = `${root}/${widgetDir}`;

    return {
      ...data,
      packageName: widgetDir,
      packagePath: `com.radixkit.widget`,
      filePath: `com/radixkit/widget/${lowerCaseName}`,
      widgetId: `com.radixkit.widget.${lowerCaseName}.${widgetName}`,
      widgetDir,
      widgetName,
      baseDir,
      src: `${root}/${widgetDir}/src`,
    };
  };

  plop.setActionType('install', runInstall)

  plop.setGenerator('widget', {
    description: 'Create a new widget',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Widget name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Widget description?',
      },
    ],
    actions: function (data) {
      data = extendData(data);

      const editorConfig = {
        type: 'add',
        data,
        path: '{{src}}/{{widgetName}}.editorConfig.ts',
        templateFile: 'src/templates/editor-config.hbs',
      };

      const editorPreview = {
        type: 'add',
        data,
        path: '{{src}}/{{widgetName}}.editorPreview.tsx',
        templateFile: 'src/templates/editor-preview.hbs',
      };

      const editorTypes = {
        type: 'add',
        data,
        path: '{{baseDir}}/typings/editor-types.d.ts',
        templateFile: 'src/templates/editor-types.hbs',
      };

      const eslintrc = {
        type: 'add',
        data,
        path: '{{baseDir}}/.eslintrc.js',
        templateFile: 'src/templates/eslintrc.hbs',
      }

      const packageJson = {
        type: 'add',
        data,
        path: '{{baseDir}}/package.json',
        templateFile: 'src/templates/package.json.hbs',
      };

      const packageXML = {
        type: 'add',
        data,
        path: '{{src}}/package.xml',
        templateFile: 'src/templates/package.xml.hbs',
      };

      const prettierConfig = {
        type: 'add',
        data,
        path: '{{baseDir}}/prettier.config.js',
        templateFile: 'src/templates/prettier.config.hbs',
      }
      
      const prettierIgnore = {
        type: 'add',
        data,
        path: '{{baseDir}}/.prettierignore',
        template: 'tests/testProject/\n'
      }

      const tsConfig = {
        type: 'add',
        data,
        path: '{{baseDir}}/tsconfig.json',
        templateFile: 'src/templates/tsconfig.json.hbs',
      }
      const widget = {
        type: 'add',
        data,
        path: '{{src}}/{{widgetName}}.tsx',
        templateFile: 'src/templates/widget.hbs',
      };

      const widgetXML = {
        type: 'add',
        data,
        path: '{{src}}/{{widgetName}}.xml',
        templateFile: 'src/templates/widget.xml.hbs',
      };

      return [
        editorConfig,
        editorPreview,
        editorTypes,
        eslintrc,
        packageJson,
        packageXML,
        prettierConfig,
        prettierIgnore,
        tsConfig,
        widget,
        widgetXML,
        { type: 'install', data },
      ];
    },
  });
}
