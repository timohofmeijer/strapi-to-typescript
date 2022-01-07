import { convert } from './ts-exporter';
import { IConfigOptions } from '..';
import { findFilesFromMultipleDirectories, importFiles, findFiles } from './importer';

const log = console.log;
const logError = console.error;

export const exec = async (options: IConfigOptions) => {
  try {
    // find *.(settings|schema).json
    let strapiModels = await importFiles(await findFilesFromMultipleDirectories(...options.input));
    if (options.inputGroup) console.log(`option '--inputGroup' is deprecated use '--components'.`);
    if (options.components || options.inputGroup )
    strapiModels = await importFiles(await findFiles(options.components || options.inputGroup, /.json/), strapiModels, { _isComponent: true });

    // Strapi 3 or 4
    const isStrapi4 = typeof (strapiModels[0] as any).kind === 'string'
    options.isStrapi4 = isStrapi4

    // build and write .ts
    const count = await convert(strapiModels, options);

    log(`Generated ${count} interfaces.`);
  } catch (e) {
    logError(e)
  }
};
