import { pkgName, pkgVer, moduleName, themeVer } from './../utils/lib-details';
import { install } from '@syncfusion/ej2-angular-base/schematics';
export default function (options) {
    var libOptions = Object.assign({}, { 'pkgName': pkgName, 'pkgVer': pkgVer, 'moduleName': moduleName, 'themeVer': themeVer });
    return install(options, libOptions);
}
