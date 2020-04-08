module.exports = {
  name: 'session-feature-join',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/session/feature-join',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
