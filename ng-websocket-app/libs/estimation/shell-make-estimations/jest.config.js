module.exports = {
  name: 'estimation-shell-make-estimations',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/estimation/shell-make-estimations',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
