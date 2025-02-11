var os = require('os')
var path = require('path')

var platform = os.platform();
var supportedPlatforms = ['linux', 'win32']
var supportedArchitectures = ['arm64', 'x64']

if (!supportedPlatforms.includes(platform)) {
  console.error('FFPROBE-LOCAL NOT SUPPORT THIS SYSTEM')
  process.exit(1)
}

var arch = os.arch()

if (!supportedArchitectures.includes(arch)) {
  console.error('FFPROBE-LOCAL NOT SUPPORT THIS SYSTEM')
  process.exit(1)
}

var ffprobePath = path.join(__dirname, 'bin', platform, arch, platform === 'win32' ? 'ffprobe.exe' : 'ffprobe')

exports.path = ffprobePath