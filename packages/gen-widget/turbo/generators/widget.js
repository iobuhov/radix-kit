import { spawnSync } from 'node:child_process';
import path from 'node:path';

const extendData = (data, plop) => {
  const { name } = data;
  const pascalCase = plop.getHelper('pascalCase');
  const dashCase = plop.getHelper('dashCase');
  const lowerCaseName = name.toLowerCase();
  const widgetName = pascalCase(name);
  const packageName = dashCase(name);

  return {
    ...data,
    packagePath: `com.radixkit.widget`,
    filePath: `com/radixkit/widget/${lowerCaseName}`,
    widgetId: `com.radixkit.widget.${lowerCaseName}.${widgetName}`,
    packageName,
    widgetName,
  };
};

export default function (plop) {
  plop.setActionType('install', (data) => {
    const baseDir = path.join(data.turbo.paths.root, 'widgets', data.packageName);
    spawnSync(`cd ${baseDir} && pnpm install && pnpm build`, [], {
      stdio: 'inherit',
      shell: true,
    });
  });

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
      data = extendData(data, plop);

      const baseDir = '{{turbo.paths.root}}/widgets/{{packageName}}';

      const editorConfig = {
        type: 'add',
        data,
        path: `${baseDir}/src/{{widgetName}}.editorConfig.ts`,
        templateFile: 'templates/editor-config.hbs',
      };

      const editorPreview = {
        type: 'add',
        data,
        path: `${baseDir}/src/{{widgetName}}.editorPreview.tsx`,
        templateFile: 'templates/editor-preview.hbs',
      };

      const editorTypes = {
        type: 'add',
        data,
        path: `${baseDir}/typings/editor-types.d.ts`,
        templateFile: 'templates/editor-types.hbs',
      };

      const eslintrc = {
        type: 'add',
        data,
        path: `${baseDir}/.eslintrc.js`,
        templateFile: 'templates/eslintrc.hbs',
      };

      const packageJson = {
        type: 'add',
        data,
        path: `${baseDir}/package.json`,
        templateFile: 'templates/package.json.hbs',
      };

      const packageXML = {
        type: 'add',
        data,
        path: `${baseDir}/src/package.xml`,
        templateFile: 'templates/package.xml.hbs',
      };

      const prettierConfig = {
        type: 'add',
        data,
        path: `${baseDir}/prettier.config.js`,
        templateFile: 'templates/prettier.config.hbs',
      };

      const prettierIgnore = {
        type: 'add',
        data,
        path: `${baseDir}/.prettierignore`,
        templateFile: 'templates/prettierignore.hbs',
      };

      const tsConfig = {
        type: 'add',
        data,
        path: `${baseDir}/tsconfig.json`,
        templateFile: 'templates/tsconfig.json.hbs',
      };
      const widget = {
        type: 'add',
        data,
        path: `${baseDir}/src/{{widgetName}}.tsx`,
        templateFile: 'templates/widget.hbs',
      };

      const widgetXML = {
        type: 'add',
        data,
        path: `${baseDir}/src/{{widgetName}}.xml`,
        templateFile: 'templates/widget.xml.hbs',
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
