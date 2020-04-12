module.exports = {
  name: 'estimation-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/estimation/shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
