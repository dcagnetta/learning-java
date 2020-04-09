module.exports = {
  name: 'estimation-feature-make-estimation',
  preset: '../../../jest.config.js',
  coverageDirectory:
    '../../../coverage/libs/estimation/feature-make-estimation',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
