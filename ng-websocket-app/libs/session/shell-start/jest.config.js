module.exports = {
  name: 'session-shell-start',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/session/shell-start',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
