export default function (plop) {
  // Create a generator for the widget
  plop.setHelper('json', (obj) => JSON.stringify(obj));

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
      const packageXML = {
        type: 'add',
        data,
        path: '{{src}}/package.xml',
        templateFile: 'src/templates/package.xml.hbs',
      };
      const packageJson = {
        type: 'add',
        data,
        path: '{{src}}/package.json',
        templateFile: 'src/templates/package.json.hbs',
      };
      const editorTypes = {
        type: 'add',
        data,
        path: '{{baseDir}}/typings/editor-types.d.ts',
        templateFile: 'src/templates/editor-types.hbs',
      };
      const editorConfig = {
        type: 'add',
        data,
        path: '{{src}}/{{widgetName}}.editorConfig.ts',
      };

      return [widget, widgetXML, packageXML, packageJson, editorTypes, editorConfig];
    },
  });
}
