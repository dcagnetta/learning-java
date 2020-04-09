module.exports = {
  name: 'estimation-feature-create-estimation-item',
  preset: '../../../jest.config.js',
  coverageDirectory:
    '../../../coverage/libs/estimation/feature-create-estimation-item',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
