module.exports = {
  name: 'estimation-domain',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/estimation/domain',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
