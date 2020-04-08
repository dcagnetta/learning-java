module.exports = {
  name: 'session-feature-create',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/session/feature-create',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
