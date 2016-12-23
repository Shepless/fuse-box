const path =  require("path");
const fsbx = require("./../../build/commonjs/index.js");
const root = path.resolve(__dirname);
const homeDir = path.resolve(root, 'src');
const outFile = path.resolve(root, '_build', 'bundle.js');
const lessPaths = [
    path.resolve(root, 'node_modules'),
    path.resolve(homeDir, 'less'),
    path.resolve(homeDir, 'images')
];

const fuseBox = fsbx.FuseBox.init({
    extensions: ['.less'],
    cache: false,
    homeDir,
    outFile,
    plugins: [
        [fsbx.LESSPlugin({ paths: lessPaths, ieCompat: false }), fsbx.CSSPlugin()]
    ]
});

fuseBox.bundle(">index.ts", true);